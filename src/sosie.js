
  /**
    * Wrapper facility to improve and customize codex-team's Editor.js 
    *
    * @Note Add plugins to expand facilities of tool, a plugin is a sort of bridge between editor.js core and tools 
    * @sample https://sosie.sos-productions.com/
    * @author sos-productions.com
    * @version 0.7.0
    * @history
    *    0.1.0 (A long time ago) - Initial version from 
    *    0.2.0 (06.09.2020) - Register added and data example deported
    *    0.2.1 (09.09.2020) - Interactive support for plugin Emped with comments
    *    0.3.0 (09.09.2020) - Bundle attempt export default 
    *    0.4.0 (10.09.2020) - History Dates were wrong 
    *    0.4.1 (23.09.2020) - where added to showMenuBar
    *    0.7.0 (24.09.2020) - font awesome support for buttons and versions fixed to mach package version
    **/
  
 import Menubar from './menubar'; 
  
  
/**
 * @class SoSIE
 * @classdesc SoS improvements for Editor.js 2.1.+
 */
export default class SoSIE extends Menubar {

   /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   * @param {boolean] custom , if not specified use demo by default.
   */
    constructor(configuration,custom) {
        
            /**
            * Overload Menubar
            */
            super();
            
            /**
            * Prepare SoSIE Menu Bar
            */
            this.initMenuBar();
            
            /**
            * Logo for credits, shown by default unless custom is defined (can be with a 'true')
            */
            if(!custom) {
                
                const editor_panel='<img width="640" height="480" src="http://sosie.sos-productions.com/assets/sosie-editor-panel.jpg">'
                
                notifier.show({
		  message: editor_panel,
                  style: 'sosie-panel',
		  layout: 'middle',
                  time:3000
		})
                
                this.addMenuItemLogo({
                logo:'http://sosie.sos-productions.com/assets/sosie.png',
                 url:'https://github.com/sosie-js/editor.js/', 
                 app: 'SoS正', 
                 version:'0.7.0', 
                 title:'Improved Editor for Rectification (C2020) SoS-productions.com', 
                 text: editor_panel+'<div align="center"> based on <a href="http://editorjs.io">editor.js</a> from the Codex Team (Big thanks to them!).</div>',
                 style:'background-color: #4C50AF !important;'
                });
            }
            
           /* (async () => {
                await ToolConfigurator.awaitFinished('Paragraph',500);
            })();*/
            
            /**
            * Create a Editor.js instance
            */
            const editor = new EditorJS(configuration);
            
            /**
             * Keep a reference , because Plugin will need it during its registration
             */
            editor.sosie=this;
            
            /**
             * Plugin Samples need this 
             **/
            this.editor=editor;
            
            //this.showMenuBar('sosie'); is deported in the then(...
            return this.init(editor);

    }
    
   
      
    /**
    * declare a plugin so SoSIE will use init it.
    * @param {string] plugin - plugin name (ex: 'Embed')
    **/ 
    static register(plugin) {
       
        if(typeof window.SoSIE__plugins == 'undefined') window.SoSIE__plugins=new Array();
        window.SoSIE__plugins.push(plugin);
        
    }
        
        
    /**
     * Button helpers
     **/    
        
    set(id) {
        super.set(id);
    }
    
    get(id) {
        return super.get(id);
    }
    
    load(list) {
        super.load(list);
    }    
    
    /**
    * Fill in the Menubar samplePlugin with MenuItems rendered as buttons (if one is provided)
    */
    loadAllPluginsSamples() {
        let _this=this;
        window.SoSIE__plugins.forEach(function(plugin){
            _this.loadSample(plugin);
        });
    }
    
    /**
     * If a sample<plugin> function is exists, triggger it, 
     * 
     * @note this function is defined in sample.js of the plugin
     **/
    loadSample(plugin) {    
        if(window.hasOwnProperty("sample"+plugin))  window["sample"+plugin](this.editor);    
    }
    
    /**
     * Creates the icon button and append it to the menu with the optional text
     * 
     * @param {lconPropsData} data an object holding the fa icon, the id, title, text, onClick, custom of the icon button.
     * @returns {HTMLiElement}
     **/    
   addMenuIconBtn({icon, id, title, text, onClick, custom}) {
       
       custom=Object.assign({
            //disabled:false, //Init state of the button
            style: (custom ? custom.style || '' : ''), //Anchor style
            content: null //Definitions of element appended after span
       },{content:custom});
       
       const btn=super.addMenuItemBtn({   
            type:'fa-'+icon,
            interactive: false,
            url:false,
            mode:id,
            custom: custom,
            title: title,
            text:text
        }).addEventListener('click', onClick[0], onClick[1]);
        
        //Register button by its id to make its dom accessible with editor.sosie.get(id)
        this.set(id);
                
        return btn;
   }
        
    /**
     * Initialise editor and plugins
     * 
     * @param {EditorJS} editor - editor js instance
     */
     init(editor) {
          
        //We have to wrap it to avoid 'unhandled rejection!' for Async/Await
        async function waitForReady() {
            await editor.isReady;
            return editor;
        } 

        //as suggested https://thecodebarbarian.com/unhandled-promise-rejections-in-node.js.html	
        //editor is a Promise now, because an async function returns a promise
        waitForReady().catch((reason)=>{
            console.error(`SoSIE editor initialization failed ${reason}`,reason);
        });
        
        waitForReady().then(editor => {
    
            //Now it is time to init SoSie's plugins, which are init helper for tools 
            window.SoSIE__plugins.forEach(function(plugin){
                if(window.hasOwnProperty(plugin)&&(typeof window[plugin]['init'] != 'undefined')) { 
                    console.info('executeFunctionByName('+plugin+').init');
                    window[plugin]["init"](editor);
                }
            });
           
            //Now, shows SoSIE menubar using the div holder id, on top or bottom of the page
            editor.sosie.showMenuBar('sosie','top');
            
            refreshBlocksStatusPanel();
        })
        
        return editor;
        
     }
            
}
