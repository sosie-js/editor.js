<a href="https://sosie.sos-productions.com/editor.js/"><p align="center"><img src="https://capella.pics/79ce946a-d636-41cd-aa96-d3bc5ecfde03.jpg"></p></a>

## Demo

[SoS正 (aka SoSIE for Westeners) shows how to inject embed and configure tools](http://sosie.sos-productions.com/);

## Installation Guide

There are mainly the same steps as  [Editor.js](http://editorjs.io/)

### Step 1. Load Editor's core

Get [Editor.js](https://github.com/codex-team/editor.js/) itself. 

### Step 2. Get inspired by the code of examples

We took [example.html](https://raw.githubusercontent.com/codex-team/editor.js/next/example/example.html) located in example/  as basis.

### Step 3. Install some plugin

Plugins for now available:

 Plugin | Description
-- | -- 
*[embed](https://github.com/sosie-js/embed) | Add the WANTED ([#36](https://github.com/editor-js/embed/issues/36)+[#16](https://github.com/editor-js/embed/issues/16)+[#11](https://github.com/editor-js/embed/issues/11)) inline injector to [Embed tool](https://github.com/editor-js/embed)
[tool-configurator](https://github.com/sosie-js/tool-configurator) | Add the NEEDED rule configuration started from [#1280](https://github.com/codex-team/editor.js/issues/1280)+[#1157](https://github.com/codex-team/editor.js/issues/1157) avoiding [#1115](https://github.com/codex-team/editor.js/issues/1115)
[script-loader](https://github.com/sosie-js/script-loader) | Add the HELPFUL Dynamic script Loader to simplify dev/prod switching and more!

*mandatory

Plugins are stored into plugins/ and can be installed like for tools using git sub modules

```shell
yarn install
yarn pull_tools
yarn checkout_tools
```

To activate for the plugin embed see [homepage of the plugin](https://github.com/sosie-js/embed);


## Credits and references

- We used editor js (https://editorjs.io) as core, SoSIE is just a wrapper for initialisation facilities.
