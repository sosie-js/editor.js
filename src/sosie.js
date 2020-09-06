
  /**
    * Wrapper facility to improve and customize codex-team's Editor.js 
    *
    * @Note Add plugins to expand facilities of tool, a plugin is a sort of bridge between editor.js core and tools 
    * @sample https://sosie.sos-productions.com/
    * @author sos-productions.com
    * @version 2.0
    * @history
    *    1.0 (A long time ago) - Initial version from 
    *    2.0 (06.10.2020) - Register added and data example deported
    **/



/**
 * @class SoSIE
 * @classdesc SoS improvements for Editor.js 2.0
 */
 class SoSIE {

 
   /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   * @param {boolean] custom , if not specified use demo by default.
   */
    constructor(configuration,custom) {
        
            /**
            * Prepare SoSIE Menu Bar
            */
            this.initMenuBar();
            
            
            if(!custom) this.addMenuItemLogo({
                logo:'http://sosie.sos-productions.com/assets/sosie.png',
                 url:'https://github.com/sosie-js/editor.js/', 
                 app:'SoS正', 
                 version:'Beta', 
                 title:'Improved Editor for Rectification (C2020) SoS-productions.com', 
                 text:'based on editor.js by sos-productions\n Big Thanks to the Codex Team for editor.js!',
                 style:'background-color: #4C50AF !important;'
            });
        
            /**
            * Create a Editor.js instance
            */
            const editor = new EditorJS(configuration);
            
            /**
             * Keep a reference , because Plugin will need it during its registration
             */
            editor.sosie=this;
            
            
            /**
            * Fill in the Menubar samplePlugin with MenuItems rendered as buttons (if one is provided)
            */
            if(!custom) {
               window.SoSIE__plugins.forEach(function(plugin){
                   if(window.hasOwnProperty("sample"+plugin))  window["sample"+plugin](editor);
               });
            }
            
            this.showMenuBar('sosie');
            return this.init(editor);

    }
    
    /**
     * Creates the item logo with the version just right to it.
     * 
     * @param {string} logo - the url to the logo image
     * @param {string} url - thethe url to redirect to
     * @param {string} app - the app version 
     * @param {string} version - the app version
     * @param {string} title - the text when mouse is over the logo
     * @param {string} text - the text for the popup
     * @param {string} style - the style for the logo area
     **/
    addMenuItemLogo({logo, url, app, version, title, text, style}) {
        
        this.addMenuItemBtn({
            type:'logo',
            url:url,
            mode: logo,
            custom: app+' '+version,
            text: app+' '+version+' '+text,
            title:title,
            style:style
        });
    }
    
    initMenuBar() {
         this.menu=this._make('ul','topnav',{});
    }
    
    /**
     * Shows the menu bar ay attaching it to div whose id is given by handler
     * @param {string] holder - the id of the div to , for us it is 'sosie'
     **/
    showMenuBar(holder) {
        let h=document.getElementById(holder);
        h.appendChild(this.menu);
    }
      
    /**
    * declare a plugin so SoSIE will use init it.
    * @param {string] plugin - plugin name (ex: 'Embed')
    **/ 
    static register(plugin) {
        if(typeof plugins == 'undefined') window.SoSIE__plugins=new Array();
        Array.push(window.SoSIE__plugins,plugin);
    }
        
    /**
     * Creates the item of the given type
     * 
     * @param {string} type - the type 'logo" or 'injectbtn'
     * @param {string} url - thethe url to redirect to
     * @param {string} mode - theinject mode 'inline' or 'block' 
     * @param {boolean|obj} custom - if bolean true if we use userservices, if object then it hold the userservices config 
     * @param {string} title - the title when mouse is over the button
     * @param {string} text - the text for the button
     * @param {string} style - the style for the item, (used to tweak colors)
     **/    
   addMenuItemBtn({type, interactive, url, mode, custom, title, text, style}) {
       const item=this._make('li',null,{});
       let anchor,atr={
             href:'#',
             title:title
        }
        
        if(type == 'injectbtn') {
            anchor=this._make('a',type,atr);
            anchor.appendChild(document.createTextNode(text));
            this._inject(anchor, interactive, url, title, mode, custom);
        }else { //logo
             if(style) atr.style=style;
             anchor=this._make('a',null,atr);
             
            (function(url,text){
                anchor.addEventListener("click", function() {
                alert(text);
                window.location.href=url;
                return false;
            }, false);})(url,text);
             
            const i=this._make('img',null,{
                src:mode, 
                alt:custom, 
                title:title,
                style:"padding-top:8px"
            });
            
            const s=document.createElement('sup',null,{});
            s.appendChild(document.createTextNode(custom.slice(5)));
        
            anchor.appendChild(i);
            anchor.appendChild(s);
             
        }
         
        item.appendChild(anchor);
        this.menu.appendChild(item);
   }
   
        /**
        * Helper for special attribute oncLick to attach injectEmbed
        *
        * @note this attribute requires special attention :
        *    <a onClick='javascript:'+code+';return false'>, will not work
        *    anchor.onclick=new Function(code); is an unsafe and risky way
        * @param  {Element} anchor   - the dom of the a tag to attach the click
        * @param  {string} url       - the url to resolve to an embedded service
        * @param  {string} title     - the title will become the embed caption
        * @param  {string} mode      - injection mode 'inline'(*default) or 'block'
        * @param  {boolean} custom   - false, wille use Embed.SERVICES else custom user sercices
        */
        _inject(anchor, interactive, url, title, mode, custom) {
            (function(url, interactive, title, mode, custom){
                anchor.addEventListener("click", function() {
                injectEmbed(url, interactive, title, mode, custom);
                return false;
            }, false);})(url, interactive, title, mode||'inline', custom||false);
        }
    
       /**
        * Helper for making Elements with attributes
        *
        * @param  {string} tagName           - new Element tag name
        * @param  {array|string} classNames  - list or name of CSS classname(s)
        * @param  {Object} attributes        - any attributes
        * @return {Element}
        */
        _make(tagName, classNames, attributes) {
            
            let el = document.createElement(tagName);

            if ( Array.isArray(classNames) ) {
                el.classList.add(...classNames);
            } else if( classNames ) {
                el.classList.add(classNames);
            }

            for (let attrName in attributes) {
                el[attrName] = attributes[attrName];
            }

            return el;
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
        } 

        //as suggested https://thecodebarbarian.com/unhandled-promise-rejections-in-node.js.html	
        //editor is a Promise now, because an async function returns a promise
        waitForReady().catch((reason)=>{
            console.error(`SoSIE editor initialization failed ${reason}`,reason);
        });

        //Now it is time to init SoSie's plugins, which are init helper for tools 
        window.SoSIE__plugins.forEach(function(plugin){
             if(window.hasOwnProperty(plugin)&&(typeof window[plugin]['init'] != 'undefined')) { 
                //executeFunctionByName(plugin+".init",window,editor);
                window[plugin]["init"](editor);
             }
        });
              
        return editor;
     }
            
}

