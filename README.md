<a href="https://sosie.sos-productions.com/editor.js/"><p align="center"><img src="https://capella.pics/79ce946a-d636-41cd-aa96-d3bc5ecfde03.jpg"></p></a>

## Demo

[SoSIE shows how to inject embed](http://sosie.sos-productions.com/);

## Installation Guide

There are mainly the same steps as  [Editor.js](http://editorjs.io/)
except you will have to wrap editor calls with editor.then(function (editor) 

Thus

```js

   /**
     * Saving example
     */
    saveButton.addEventListener('click', function () {
        editor.save().then((savedData) => {
            cPreview.show(savedData, document.getElementById("output"));
        });
    });

 });

```

becomes

```js

   /**
     * Saving example
     */
    saveButton.addEventListener('click', function () {
      editor.then(function (editor) {
        editor.save().then((savedData) => {
            cPreview.show(savedData, document.getElementById("output"));
        });
      });
    });

```

### Step 1. Load Editor's core

Get Editor.js itself. 


### Step 2. Get inspired by the code of examples

We took example.html as basis for example.

### Step 3. Install some plugin

Only one plugin for now is available.

 Plugin | Description
-- | -- 
[embed](https://twitter.com/codex_team) | Add the WANTED inline injector to [Embed tool](https://github.com/editor-js/embed)


Plugins are stored into plugins/ and can be installed like for tools using git sub modules

```shell
yarn install
yarn pull_tools
```

To activate for the plugin embed see [homepage of the plugin](https://github.com/sosie-js/embed);


## Credits and references

- We used editor js (https://editorjs.io) as core, SoS正 (aka SoSIE for Westeners) is just a wrapper for initialisation facilities.
- Be warned, minifying the code using babel, terser or uglify-js compressor or with webpack or not but this breaks all so for now use only the sources.

