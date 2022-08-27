#!/usr/bin/env python3

import re
import os
import glob
import shutil

origDir = 'docs_old'
targetDir = 'docs'

allDocs = glob.glob('%s/**/*.md' % origDir) + glob.glob('%s/**/**/*.md' % origDir) + glob.glob('%s/**/**/**/*.md' % origDir)

def getDocId(path, docId = None):
    res = path.split('/', 1)[1][:-3]
    resSplit = res.split('/')
    # Doc IDs ignore those numbers at the beginning for some reason
    resSplit = [re.sub(r'^\d+-', '', x) for x in resSplit]
    if docId is not None:
        resSplit[-1] = docId
    return '/'.join(resSplit)

idChanges = {}

for mdPath in allDocs:
    print('Processing %s' % mdPath)

    # Prepare destination folder
    destDir = os.path.join(os.path.dirname(mdPath).replace(origDir, targetDir, 1), os.path.basename(mdPath)[:-3] + '/')
    os.makedirs(os.path.dirname(destDir), exist_ok=True)
    destPath = os.path.join(destDir, os.path.basename(mdPath))

    with open(mdPath, 'r') as f:
        mdContent = f.read()

        header = re.search(r'^---(.*)---', mdContent, re.DOTALL).group(1)
        header_dict = {}
        for x in [x.split(':', 1) for x in header.split('\n')[1:-1]]:
            if len(x) == 2:
                header_dict[x[0].strip()] = x[1].strip()
        if 'slug' not in header_dict:
            print("Adding slug")
            header_dict['slug'] = getDocId(mdPath)
            new_header = '---\n' + '\n'.join(['%s: %s' % (k, v) for k, v in header_dict.items()]) + '\n---\n'
#            mdContent = mdContent.replace('---' + header + '---\n', new_header)

        imgPaths = re.findall(r'\(\.\./\.\./static/img/.*\)', mdContent)
        imgPaths = [path[1:-1] for path in imgPaths]

        for relImgPath in imgPaths:
            imgPath = relImgPath[6:]
            filename = os.path.basename(imgPath)
            if os.path.exists(imgPath):
                dest = os.path.join(destDir, filename)
                shutil.copyfile(imgPath, dest)
                mdContent = mdContent.replace(relImgPath, filename)

    if 'id' in header_dict:
        idChanges[getDocId(mdPath, header_dict['id'])] = getDocId(destPath, header_dict['id'])
    else:
        idChanges[getDocId(mdPath)] = getDocId(destPath)

    mdContent = mdContent.replace('../src/components/', '../../src/components/')
    mdContent = mdContent.replace('../static', '../../static')

    with open(destPath, 'w') as f:
        f.write(mdContent)

print(idChanges)

print("Saving sidebar.js")
with open('src/sidebar/sidebar_old.js', 'r') as f:
    sidebarContent = f.read()
    for oldId, newId in idChanges.items():
        sidebarContent = sidebarContent.replace("'" + oldId + "'", "'" + newId + "'")

with open('src/sidebar/sidebar.js', 'w') as f:
    f.write(sidebarContent)