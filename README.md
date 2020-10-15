![](https://badgen.net/badge/SoS正/0.7.0/f2a) ![](https://badgen.net/badge/editor.js/v2.1.8/blue)  
<a href="https://sosie.sos-productions.com/editor.js/"><p align="center">![](http://sosie.sos-productions.com/editor.js/)</p></a>


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
*[embed@4.0.0](https://github.com/sosie-js/embed) | Add the WANTED ([#36](https://github.com/editor-js/embed/issues/36)+[#16](https://github.com/editor-js/embed/issues/16)+[#11](https://github.com/editor-js/embed/issues/11)) inline *INTERACTIVE* injector to [Embed tool](https://github.com/editor-js/embed) (requires block-plugin)
*[tool-configurator](https://github.com/sosie-js/tool-configurator) | Add the NEEDED rule configuration started from [#1280](https://github.com/codex-team/editor.js/issues/1280)+[#1157](https://github.com/codex-team/editor.js/issues/1157) avoiding [#1115](https://github.com/codex-team/editor.js/issues/1115)
*[script-loader@3.0.0](https://github.com/sosie-js/script-loader) | Add the HELPFUL Dynamic script Loader to simplify dev/prod switching and more! (v3.0.0 )
[file-plugin@1.1.0](https://github.com/sosie-js/file-plugin) | Save, Open (as .json) and clear feature
*[block-plugin@2.0.0'](https://github.com/sosie-js/block-plugin)' | Block position and caret selection (requires undo-plugin)
*[undo-plugin@1.0.0](https://github.com/sosie-js/undo-plugin)' | Undo/Redo plugin with position tracking, (requires undo)
[view-plugin@1.0.0](https://github.com/sosie-js/view-plugin)' |  Export to html (minimalistic)

*mandatory

Plugins are stored into plugins/ and can be installed like for tools using git sub modules

```shell
yarn install
```

## Credits and references

- We used editor js (https://editorjs.io) as core, SoSIE is just a wrapper for initialisation facilities.
