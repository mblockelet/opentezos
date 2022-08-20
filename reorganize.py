#!/usr/bin/env python3

import re
import os
import glob
import shutil

origDir = 'docs_old'
targetDir = 'docs'

for mdPath in glob.glob('%s/**/*.md' % origDir) + glob.glob('%s/**/**/*.md' % origDir) + glob.glob('%s/**/**/**/*.md' % origDir):
    print('Processing %s' % mdPath)
    # Prepare destination folder
    destPath = os.path.join(os.path.dirname(mdPath).replace(origDir, targetDir, 1), os.path.basename(mdPath)[:-3] + '/')
    os.makedirs(os.path.dirname(destPath), exist_ok=True)

    with open(mdPath, 'r') as f:
        mdContent = f.read()

        imgPaths = re.findall(r'\(\.\./\.\./static/img/.*\)', mdContent)
        imgPaths = [path[1:-1] for path in imgPaths]

        for relImgPath in imgPaths:
            imgPath = relImgPath[6:]
            filename = os.path.basename(imgPath)
            if os.path.exists(imgPath):
                dest = os.path.join(destPath, filename)
                shutil.copyfile(imgPath, dest)
                mdContent = mdContent.replace(relImgPath, filename)
    
    with open(os.path.join(destPath, os.path.basename(mdPath)), 'w') as f:
        f.write(mdContent)
    


