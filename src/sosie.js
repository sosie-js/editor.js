/**
 *  Wrapper over Editor.js to add initialization and injection facilities
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
            * Fill in the Menubar with MenuItems rendered as buttons
            */
            if(!custom) {
                
                //  Inline injection of a block handled by a user service 'notice custom set to true for that).
                this.addMenuItemBtn({
                    type:'injectbtn',
                    url:'http://sos-productions.com/7',
                    mode:'inline',
                    custom:true,
                    title:"I am SoSIE, here are lucky people behind the flags click on it!",
                    text:"Bunny in line"
                });
            
                // Injection in Block mode, using youtube service
                this.addMenuItemBtn({
                    type:'injectbtn',
                    url:'https://www.youtube.com/watch?v=NW96wIelVqg',
                    mode:'block',
                    custom:false,
                    title:"'Ich bin ein Berliner': Robert Kennedy Jr does a remake of his uncle JFK 60 years later",
                    text:"Berliner in block"
                });
                
                // Injection in Block mode, using vimeo service
                this.addMenuItemBtn({
                    type:'injectbtn',
                    url:'https://vimeo.com/357871593',
                    mode:'block',
                    custom:false,
                    title:"COMING FOR YOU - Based on a True Story That Affected 100 Million People",
                    text:"Coming for you"
                });
                
                // Injection in Block mode,
                this.addMenuItemBtn({
                    type:'injectbtn',
                    url:'https://youtu.be/E8q2kdTeGzo',
                    mode:'block',
                    custom:false,
                    title:"Eternal Fifty Minutes | Coming for You II",
                    text:"Eternal Fifty Minutes"
                });
            
                // Injection in Block mode,
                this.addMenuItemBtn({
                    type:'injectbtn',
                    url:'https://www.youtube.com/watch?v=Mg5budPRY1Q',
                    mode:'block',
                    custom:false,
                    title:"‘Claws of the Red Dragon’ exposes connection between Huawei and CCP",
                    text:"Claws of the Red Dragon"
                });
                
                // Injection in Block mode,, an other vimeo
                this.addMenuItemBtn({
                    type:'injectbtn',
                    url:'https://vimeo.com/400300749',
                    mode:'block',
                    custom:false,
                    title:"Transcending Fear: The Story of Gao Zhisheng",
                    text:"Transcending Fear: The Story of Gao Zhisheng"
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
   addMenuItemBtn({type,url,mode,custom,title,text,style}) {
       const item=this._make('li',null,{});
       let anchor,atr={
             href:'#',
             title:title
        }
        
        if(type == 'injectbtn') {
            anchor=this._make('a',type,atr);
            anchor.appendChild(document.createTextNode(text));
            this._inject(anchor,url,title,mode,custom);
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
        * @param  {Element} anchor   - the dom of the a tag to attchat the click
        * @param  {string} url       - the url to resolve to an embedded service
        * @param  {string} title     - the title will become the embed caption
        * @param  {string} mode      - injection mode 'inline'(*default) or 'block'
        * @param  {boolean} custom   - false, wille use Embed.SERVICES else custom user sercices
        */
        _inject(anchor,url,title,mode,custom) {
            (function(url,title,mode,custom){
                anchor.addEventListener("click", function() {
                injectEmbed(url,title,mode,custom);
                return false;
            }, false);})(url,title,mode||'inline',custom||false);
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
     async init(editor) {
          
            try {
    
                await editor.isReady;

                //--- Now it is time to init SoSie's plugins, which are init helper for tools ---
                
                //This will attach bunny's injector so we will be able
                //to plants carots where we want in the field of Blocks.
                //inside in the text where cursor has been positionned (inline mode) 
                //or after current selected block (block mode)
                Embed.init(editor);
                
                //--------------------------------------------------------------------------------
            
            } catch (reason) {
                console.log(reason);
                console.warn(`SoSIE editor initialization failed because of ${reason}`)
            }
            
            return editor;
     }
            
   
}
