/**
 * @class Menubar
 *
 * @classdesc SOSIE Menubar core class
 * @author sosie / sos-productions.com
 * @type {Menubar}
 */
export default class Menubar {
    
    constructor() {
       this.buttons={}; //Container of DOM for each button
    }
    
    /**
     *  Buttons API
     */
    
    set(id) {
        function getElementByIdInFragment(fragment, id) {
            if (fragment.querySelector) {
                return fragment.querySelector('#' + id);
            } else {
                // your custom implementation here
                function Node_getElementById(node, id) {
                    for (var i= 0; i<node.childNodes.length; i++) {
                        var child= node.childNodes[i];
                        if (child.nodeType!==1) // ELEMENT_NODE
                            continue;
                        if (child.id===id)
                            return child;
                        child= Node_getElementById(child, id);
                        if (child!==null)
                            return child;
                    }
                    return null;
                }
                return Node_getElementById(fragment, id)
            }
        }
        this.buttons[id] = getElementByIdInFragment(this.menu,id)||document.getElementById(id);
    }
    
    get(id) {
        return (this.buttons.hasOwnProperty(id))? this.buttons[id]: null;
    }
    
    load(list) {
         for(var b in list) {
            this.add(list[b]);
        }
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
            custom: {
                content:{
                    version:app+' '+version
                }
            },
            text: text, //app+' '+version+' '+text,
            title:title,
            style:style
        });
    }
    
    /**
     *  Initialise the Menubar dom
    **/
    initMenuBar() {
         const oFra = document.createDocumentFragment();
         this.menu=oFra.appendChild(this._make('ul','topnav',{}));
    }
    
    /**
     * Shows the menu bar ay attaching it to div whose id is given by holder
     * @param {string} holder - the id of the div to , for us it is 'sosie'
     * @param {string} where - the positon top(default) or bottom
     * @return {HTMLDivElement} the div of the menubar
     **/
    showMenuBar(holder,where) {
        let h=document.getElementById(holder);
        h.className='navbar '+where||'top';
        h.appendChild(this.menu);
        return h;
    }
    
        /**
     * Creates the Menu item of the given type
     * 
     * @param {string} type - the type 'logo" or 'injectbtn'
     * @param {string|boolean} interactive - if true, or a cutom text is given a prompt ask for validation or url change
     * @param {string} url - the url to redirect to
     * @param {string} mode - theinject mode ('inline' or 'block') OR the id of the button
     * @param {boolean|obj} custom - if bolean true if we use userservices, if object then it hold the userservices config 
     * @param {string|obj} title - if string, the title when mouse is over
     * @param {string} text - the text for the button
     * @param {string} style - the style for the item, (used to tweak colors)
     * @returns {HTMLiElement}
     **/    
   addMenuItemBtn({type, interactive, url, mode, custom, title, text, style}) {
    

       let c, i, input, btn, icon, disabled=null;
       let anchor,atr={
             title: title
        }
        
        if(url) atr.href='#';
        if(custom.style) {
            atr.style=''+custom.style;
            delete custom.style;
        }
        
        if(type == 'injectbtn') {
            anchor=this._make('a',type,atr);
            anchor.appendChild(document.createTextNode(text));
            this._inject(anchor, interactive, url, title, mode, custom);
        } else if (type == 'textbtn') {
           anchor=this._make('a',type,atr);
           anchor.appendChild(document.createTextNode(text));
        } else if((btn = /^(fa-[\w\-]+)/.exec(type)) !== null) { //Create a button using Font-awesome matching the class 
             if(mode) atr.id=mode;
             
             anchor=this._make('a',null,atr);
             icon=btn[1];
             btn=this._make('span',['fa-stack','fa-lg'],{
               style:'font-size:12px'  
             });
             
             if(custom.content && custom.content.disabled) {
                 disabled={ disabled: "disabled" };
             }
             
             i=this._make('i',['fa',icon,'fa-stack-2x'],disabled);
             btn.appendChild(i);
             anchor.appendChild(btn);
             if(text) anchor.appendChild(document.createTextNode(' '+text))
            /*
             *if(!Array.isArray) {
            Array.isArray = function(arg) {
                return Object.prototype.toString.call(arg) === '[object Array]';
            };
            }*/ 
            if(custom.content) {     
                if(Array.isArray(custom.content)) {
                    custom.content.forEach(element => {
                        if(typeof element == 'string') {
                            anchor.appendChild(document.createTextNode(element));
                        } else if(element.input) {
                            input=this._make('input',null,element.input);
                            if(element.input.type == 'file') {
                                if(element.input.hasOwnProperty('onChange')) {
                                    input.addEventListener('change',element.input.onChange[0],element.input.onChange[1]);
                                }
                            }
                            if(element.input.type == 'button') {
                                if(element.input.hasOwnProperty('onClick')) {
                                    input.addEventListener('click',element.input.onClick[0],element.input.onClick[1]);
                                }
                            }
                            anchor.appendChild(input);
                        }
                    })
                } else {
                   
                    if(custom.content.input) {
                        input=this._make('input',null,custom.content.input);
                        if(custom.content.input.type == 'file') {
                            if(custom.content.input.hasOwnProperty('onChange')) {
                                input.addEventListener('change',custom.content.input.onChange[0],custom.content.input.onChange[1]);
                            }
                        }
                        anchor.appendChild(input);
                    }
                }
            }
        }else { //logo
             if(style) atr.style=style;
             anchor=this._make('a',null,atr);
           
            i=this._make('img',null,{
                src:mode, 
                alt:custom, 
                title:title,
                style:"padding-top:8px"
            });
             
            (function(url,text){
                anchor.addEventListener("click", function() {
                //alert(text);
               notifier.show({
                    message:  text,
                    type: 'confirm',
                    okText: 'Go to github',
                    cancelText: 'Extra',
                    okHandler: function() {
                        window.location.href=url;
                    } ,
                    cancelHandler: function() {
                        window.location.href='http://sosie.sos-productions.com/gift/index.html';
                    },
                    layout: 'middle',
                    style: 'sosie-panel-with-btn'
                })     
               
                return false;
            }, false);})(url,text);
             
           
            
            const s=document.createElement('sup',null,{});
            s.appendChild(document.createTextNode(custom.content.version.slice(5)));
        
            anchor.appendChild(i);
            anchor.appendChild(s);
             
        }
         
        return this.addMenuItemAnchor(anchor);
   }
   
   /**
   * Create a link item in the menu using the anchor
   * 
   *@param {HTMLLinkElement} anchor - the anchor element that may hold icon btn oe inpout
   *@returns {HTMLiElement}
   */
   addMenuItemAnchor(anchor) {
        const item=this._make('li',null,{});
        item.appendChild(anchor);
        this.menu.appendChild(item);
        return item;
   }
   
    /**
    * Helper for special attribute oncLick to attach injectEmbed
    *
    * @note this attribute requires special attention :
    *    <a onClick='javascript:'+code+';return false'>, will not work
    *    anchor.onclick=new Function(code); is an unsafe and risky way
    * @param  {Element} anchor   - the dom of the a tag to attach the click
    * @param {string|boolean} interactive - if true, or a cutom text is given a prompt ask for validation or url change
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
            if(((attrName == 'disabled')||(attrName == 'readonly')) && attributes[attrName])  {
                el.setAttribute(attrName,attrName);
            } else {
                //el.setAttribute(attrName,attributes[attrName]);
                el[attrName] = attributes[attrName];
            }
        }

        return el;
    }
}
