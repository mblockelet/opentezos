---
id: dapp-event-example
title: Dapp example
authors: Benoit Rognier
---
import BrowserWindow from '@site/src/components/docs/BrowserWindow';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

The *Bulb* demo presented here illustrates how to integrate the crank process in a typescript [React](https://reactjs.org/) Dapp.

:::info
The source code of the example is available [here](https://github.com/completium/bulb-event-demo)
:::

The bulb is switched on/off by receiving events from the bulb contract.

<BrowserWindow>
<ThemedImage
  alt="Buld Dapp"
  width="100%"
  sources={{
    light: useBaseUrl('img/event-well/bulb-event-demo-light.png'),
    dark: useBaseUrl('img/event-well/bulb-event-demo-dark.png'),
  }}
/>
</BrowserWindow>

## Bulb contract

The build is designed as a simplistic state machine with *On* and *Off* states. Two events `SwitchedOn` and `SwitchedOff` are defined and emitted respectively by `switchOn` and `switchOff` entrypoints:

```archetype
archetype bulb

states = | On | Off

event SwitchedOn {}

event SwitchedOff {}

transition switchOn() {
  from Off to On
  with effect { emit<SwitchedOn>({}) }
}

transition switchOff() {
  from On to Off
  with effect { emit<SwitchedOff>({}) }
}
```





