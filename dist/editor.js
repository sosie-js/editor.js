/**
 * @class SoSIE
 * @classdesc SoS improvements for Editor.js 2.0
 */class SoSIE{/**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   * @param {boolean] custom , if not specified use demo by default.
   */constructor(a,b){this.initMenuBar(),b||this.addMenuItemLogo({logo:'http://sosie.sos-productions.com/assets/sosie.png',url:'https://www.chatwork.com/sos-productions',app:'SoS\u6B63',version:'Beta',title:'Improved Editor for Rectification (C2020) SoS-productions.com',text:'based on editor.js by sos-productions\n Big Thanks to the Codex Team for editor.js!',style:'background-color: #4C50AF !important;'});/**
            * Create a Editor.js instance
            */const c=new EditorJS(a);return c.on('unhandledRejection',a=>{console.log('unhandledRejection',a.message)}),b||(this.addMenuItemBtn({type:'injectbtn',url:'http://sos-productions.com/7',mode:'inline',custom:!0,title:'I am SoSIE, here are lucky people behind the flags click on it!',text:'Bunny in line'}),this.addMenuItemBtn({type:'injectbtn',url:'https://www.youtube.com/watch?v=NW96wIelVqg',mode:'block',custom:!1,title:'\'Ich bin ein Berliner\': Robert Kennedy Jr does a remake of his uncle JFK 60 years later',text:'Berliner in block'}),this.addMenuItemBtn({type:'injectbtn',url:'https://vimeo.com/357871593',mode:'block',custom:!1,title:'COMING FOR YOU - Based on a True Story That Affected 100 Million People',text:'Coming for you'}),this.addMenuItemBtn({type:'injectbtn',url:'https://youtu.be/E8q2kdTeGzo',mode:'block',custom:!1,title:'Eternal Fifty Minutes | Coming for You II',text:'Eternal Fifty Minutes'}),this.addMenuItemBtn({type:'injectbtn',url:'https://www.youtube.com/watch?v=Mg5budPRY1Q',mode:'block',custom:!1,title:'\u2018Claws of the Red Dragon\u2019 exposes connection between Huawei and CCP',text:'Claws of the Red Dragon'}),this.addMenuItemBtn({type:'injectbtn',url:'https://vimeo.com/400300749',mode:'block',custom:!1,title:'Transcending Fear: The Story of Gao Zhisheng',text:'Transcending Fear: The Story of Gao Zhisheng'})),this.showMenuBar('sosie'),this.init(c)}/**
     * Creates the item logo with the version just right to it.
     * 
     * @param {string} logo - the url to the logo image
     * @param {string} url - thethe url to redirect to
     * @param {string} app - the app version 
     * @param {string} version - the app version
     * @param {string} title - the text when mouse is over the logo
     * @param {string} text - the text for the popup
     * @param {string} style - the style for the logo area
     **/addMenuItemLogo({logo:a,url:b,app:c,version:d,title:e,text:f,style:g}){this.addMenuItemBtn({type:'logo',url:b,mode:a,custom:c+' '+d,text:c+' '+d+' '+f,title:e,style:g})}initMenuBar(){this.menu=this._make('ul','topnav',{})}/**
     * Shows the menu bar ay attaching it to div whose id is given by handler
     * @param {string] holder - the id of the div to , for us it is 'sosie'
     **/showMenuBar(a){let b=document.getElementById(a);b.appendChild(this.menu)}addMenuItemBtn({type:a,url:b,mode:c,custom:d,title:e,text:f,style:g}){const h=this._make('li',null,{});let j,k={href:'#',title:e};if('injectbtn'==a)j=this._make('a',a,k),j.appendChild(document.createTextNode(f)),this._inject(j,b,e,c,d);else{g&&(k.style=g),j=this._make('a',null,k),function(a,b){j.addEventListener('click',function(){return alert(b),window.location.href=a,!1},!1)}(b,f);const a=this._make('img',null,{src:c,alt:d,title:e,style:'padding-top:8px'}),h=document.createElement('sup',null,{});h.appendChild(document.createTextNode(d.slice(5))),j.appendChild(a),j.appendChild(h)}h.appendChild(j),this.menu.appendChild(h)}/**
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
        */_inject(a,b,c,d,e){(function(b,c,d,e){a.addEventListener('click',function(){return injectEmbed(b,c,d,e),!1},!1)})(b,c,d||'inline',e||!1)}/**
        * Helper for making Elements with attributes
        *
        * @param  {string} tagName           - new Element tag name
        * @param  {array|string} classNames  - list or name of CSS classname(s)
        * @param  {Object} attributes        - any attributes
        * @return {Element}
        */_make(a,b,c){let d=document.createElement(a);for(let e in Array.isArray(b)?d.classList.add(...b):b&&d.classList.add(b),c)d[e]=c[e];return d}/**
     * Initialise editor and plugins
     * 
     * @param {EditorJS} editor - editor js instance
     */async init(a){try{//--- Now it is time to init SoSie's plugins, which are init helper for tools ---
//This will attach bunny's injector so we will be able
//to plants carots where we want in the field of Blocks.
//inside in the text where cursor has been positionned (inline mode) 
//or after current selected block (block mode)
await a.isReady,Embed.init(a)}catch(a){console.log(a),console.warn(`SoSIE editor initialization failed because of ${a}`)}return a}}