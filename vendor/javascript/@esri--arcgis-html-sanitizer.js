// @esri/arcgis-html-sanitizer@4.1.0 downloaded from https://ga.jspm.io/npm:@esri/arcgis-html-sanitizer@4.1.0/dist/esm/index.js

var __assign=function(){__assign=Object.assign||function __assign(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e};return __assign.apply(this,arguments)};var e={exports:{}};var t={};var r={exports:{}};var a={};function getDefaultWhiteList$1(){var e={};e["align-content"]=false;e["align-items"]=false;e["align-self"]=false;e["alignment-adjust"]=false;e["alignment-baseline"]=false;e.all=false;e["anchor-point"]=false;e.animation=false;e["animation-delay"]=false;e["animation-direction"]=false;e["animation-duration"]=false;e["animation-fill-mode"]=false;e["animation-iteration-count"]=false;e["animation-name"]=false;e["animation-play-state"]=false;e["animation-timing-function"]=false;e.azimuth=false;e["backface-visibility"]=false;e.background=true;e["background-attachment"]=true;e["background-clip"]=true;e["background-color"]=true;e["background-image"]=true;e["background-origin"]=true;e["background-position"]=true;e["background-repeat"]=true;e["background-size"]=true;e["baseline-shift"]=false;e.binding=false;e.bleed=false;e["bookmark-label"]=false;e["bookmark-level"]=false;e["bookmark-state"]=false;e.border=true;e["border-bottom"]=true;e["border-bottom-color"]=true;e["border-bottom-left-radius"]=true;e["border-bottom-right-radius"]=true;e["border-bottom-style"]=true;e["border-bottom-width"]=true;e["border-collapse"]=true;e["border-color"]=true;e["border-image"]=true;e["border-image-outset"]=true;e["border-image-repeat"]=true;e["border-image-slice"]=true;e["border-image-source"]=true;e["border-image-width"]=true;e["border-left"]=true;e["border-left-color"]=true;e["border-left-style"]=true;e["border-left-width"]=true;e["border-radius"]=true;e["border-right"]=true;e["border-right-color"]=true;e["border-right-style"]=true;e["border-right-width"]=true;e["border-spacing"]=true;e["border-style"]=true;e["border-top"]=true;e["border-top-color"]=true;e["border-top-left-radius"]=true;e["border-top-right-radius"]=true;e["border-top-style"]=true;e["border-top-width"]=true;e["border-width"]=true;e.bottom=false;e["box-decoration-break"]=true;e["box-shadow"]=true;e["box-sizing"]=true;e["box-snap"]=true;e["box-suppress"]=true;e["break-after"]=true;e["break-before"]=true;e["break-inside"]=true;e["caption-side"]=false;e.chains=false;e.clear=true;e.clip=false;e["clip-path"]=false;e["clip-rule"]=false;e.color=true;e["color-interpolation-filters"]=true;e["column-count"]=false;e["column-fill"]=false;e["column-gap"]=false;e["column-rule"]=false;e["column-rule-color"]=false;e["column-rule-style"]=false;e["column-rule-width"]=false;e["column-span"]=false;e["column-width"]=false;e.columns=false;e.contain=false;e.content=false;e["counter-increment"]=false;e["counter-reset"]=false;e["counter-set"]=false;e.crop=false;e.cue=false;e["cue-after"]=false;e["cue-before"]=false;e.cursor=false;e.direction=false;e.display=true;e["display-inside"]=true;e["display-list"]=true;e["display-outside"]=true;e["dominant-baseline"]=false;e.elevation=false;e["empty-cells"]=false;e.filter=false;e.flex=false;e["flex-basis"]=false;e["flex-direction"]=false;e["flex-flow"]=false;e["flex-grow"]=false;e["flex-shrink"]=false;e["flex-wrap"]=false;e.float=false;e["float-offset"]=false;e["flood-color"]=false;e["flood-opacity"]=false;e["flow-from"]=false;e["flow-into"]=false;e.font=true;e["font-family"]=true;e["font-feature-settings"]=true;e["font-kerning"]=true;e["font-language-override"]=true;e["font-size"]=true;e["font-size-adjust"]=true;e["font-stretch"]=true;e["font-style"]=true;e["font-synthesis"]=true;e["font-variant"]=true;e["font-variant-alternates"]=true;e["font-variant-caps"]=true;e["font-variant-east-asian"]=true;e["font-variant-ligatures"]=true;e["font-variant-numeric"]=true;e["font-variant-position"]=true;e["font-weight"]=true;e.grid=false;e["grid-area"]=false;e["grid-auto-columns"]=false;e["grid-auto-flow"]=false;e["grid-auto-rows"]=false;e["grid-column"]=false;e["grid-column-end"]=false;e["grid-column-start"]=false;e["grid-row"]=false;e["grid-row-end"]=false;e["grid-row-start"]=false;e["grid-template"]=false;e["grid-template-areas"]=false;e["grid-template-columns"]=false;e["grid-template-rows"]=false;e["hanging-punctuation"]=false;e.height=true;e.hyphens=false;e.icon=false;e["image-orientation"]=false;e["image-resolution"]=false;e["ime-mode"]=false;e["initial-letters"]=false;e["inline-box-align"]=false;e["justify-content"]=false;e["justify-items"]=false;e["justify-self"]=false;e.left=false;e["letter-spacing"]=true;e["lighting-color"]=true;e["line-box-contain"]=false;e["line-break"]=false;e["line-grid"]=false;e["line-height"]=false;e["line-snap"]=false;e["line-stacking"]=false;e["line-stacking-ruby"]=false;e["line-stacking-shift"]=false;e["line-stacking-strategy"]=false;e["list-style"]=true;e["list-style-image"]=true;e["list-style-position"]=true;e["list-style-type"]=true;e.margin=true;e["margin-bottom"]=true;e["margin-left"]=true;e["margin-right"]=true;e["margin-top"]=true;e["marker-offset"]=false;e["marker-side"]=false;e.marks=false;e.mask=false;e["mask-box"]=false;e["mask-box-outset"]=false;e["mask-box-repeat"]=false;e["mask-box-slice"]=false;e["mask-box-source"]=false;e["mask-box-width"]=false;e["mask-clip"]=false;e["mask-image"]=false;e["mask-origin"]=false;e["mask-position"]=false;e["mask-repeat"]=false;e["mask-size"]=false;e["mask-source-type"]=false;e["mask-type"]=false;e["max-height"]=true;e["max-lines"]=false;e["max-width"]=true;e["min-height"]=true;e["min-width"]=true;e["move-to"]=false;e["nav-down"]=false;e["nav-index"]=false;e["nav-left"]=false;e["nav-right"]=false;e["nav-up"]=false;e["object-fit"]=false;e["object-position"]=false;e.opacity=false;e.order=false;e.orphans=false;e.outline=false;e["outline-color"]=false;e["outline-offset"]=false;e["outline-style"]=false;e["outline-width"]=false;e.overflow=false;e["overflow-wrap"]=false;e["overflow-x"]=false;e["overflow-y"]=false;e.padding=true;e["padding-bottom"]=true;e["padding-left"]=true;e["padding-right"]=true;e["padding-top"]=true;e.page=false;e["page-break-after"]=false;e["page-break-before"]=false;e["page-break-inside"]=false;e["page-policy"]=false;e.pause=false;e["pause-after"]=false;e["pause-before"]=false;e.perspective=false;e["perspective-origin"]=false;e.pitch=false;e["pitch-range"]=false;e["play-during"]=false;e.position=false;e["presentation-level"]=false;e.quotes=false;e["region-fragment"]=false;e.resize=false;e.rest=false;e["rest-after"]=false;e["rest-before"]=false;e.richness=false;e.right=false;e.rotation=false;e["rotation-point"]=false;e["ruby-align"]=false;e["ruby-merge"]=false;e["ruby-position"]=false;e["shape-image-threshold"]=false;e["shape-outside"]=false;e["shape-margin"]=false;e.size=false;e.speak=false;e["speak-as"]=false;e["speak-header"]=false;e["speak-numeral"]=false;e["speak-punctuation"]=false;e["speech-rate"]=false;e.stress=false;e["string-set"]=false;e["tab-size"]=false;e["table-layout"]=false;e["text-align"]=true;e["text-align-last"]=true;e["text-combine-upright"]=true;e["text-decoration"]=true;e["text-decoration-color"]=true;e["text-decoration-line"]=true;e["text-decoration-skip"]=true;e["text-decoration-style"]=true;e["text-emphasis"]=true;e["text-emphasis-color"]=true;e["text-emphasis-position"]=true;e["text-emphasis-style"]=true;e["text-height"]=true;e["text-indent"]=true;e["text-justify"]=true;e["text-orientation"]=true;e["text-overflow"]=true;e["text-shadow"]=true;e["text-space-collapse"]=true;e["text-transform"]=true;e["text-underline-position"]=true;e["text-wrap"]=true;e.top=false;e.transform=false;e["transform-origin"]=false;e["transform-style"]=false;e.transition=false;e["transition-delay"]=false;e["transition-duration"]=false;e["transition-property"]=false;e["transition-timing-function"]=false;e["unicode-bidi"]=false;e["vertical-align"]=false;e.visibility=false;e["voice-balance"]=false;e["voice-duration"]=false;e["voice-family"]=false;e["voice-pitch"]=false;e["voice-range"]=false;e["voice-rate"]=false;e["voice-stress"]=false;e["voice-volume"]=false;e.volume=false;e["white-space"]=false;e.widows=false;e.width=true;e["will-change"]=false;e["word-break"]=true;e["word-spacing"]=true;e["word-wrap"]=true;e["wrap-flow"]=false;e["wrap-through"]=false;e["writing-mode"]=false;e["z-index"]=false;return e}
/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */function onAttr(e,t,r){}
/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */function onIgnoreAttr(e,t,r){}var i=/javascript\s*\:/gim;
/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */function safeAttrValue$1(e,t){return i.test(t)?"":t}a.whiteList=getDefaultWhiteList$1();a.getDefaultWhiteList=getDefaultWhiteList$1;a.onAttr=onAttr;a.onIgnoreAttr=onIgnoreAttr;a.safeAttrValue=safeAttrValue$1;var s={indexOf:function(e,t){var r,a;if(Array.prototype.indexOf)return e.indexOf(t);for(r=0,a=e.length;r<a;r++)if(e[r]===t)return r;return-1},forEach:function(e,t,r){var a,i;if(Array.prototype.forEach)return e.forEach(t,r);for(a=0,i=e.length;a<i;a++)t.call(r,e[a],a,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(e){return String.prototype.trimRight?e.trimRight():e.replace(/(\s*$)/g,"")}};var n=s;
/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */function parseStyle$1(e,t){e=n.trimRight(e);e[e.length-1]!==";"&&(e+=";");var r=e.length;var a=false;var i=0;var s=0;var o="";function addNewAttr(){if(!a){var r=n.trim(e.slice(i,s));var l=r.indexOf(":");if(l!==-1){var f=n.trim(r.slice(0,l));var u=n.trim(r.slice(l+1));if(f){var c=t(i,o.length,f,u,r);c&&(o+=c+"; ")}}}i=s+1}for(;s<r;s++){var l=e[s];if(l==="/"&&e[s+1]==="*"){var f=e.indexOf("*/",s+2);if(f===-1)break;s=f+1;i=s+1;a=false}else l==="("?a=true:l===")"?a=false:l===";"?a||addNewAttr():l==="\n"&&addNewAttr()}return n.trim(o)}var o=parseStyle$1;var l=a;var f=o;
/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */function isNull$1(e){return e===void 0||e===null}
/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */function shallowCopyObject$1(e){var t={};for(var r in e)t[r]=e[r];return t}
/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */function FilterCSS$2(e){e=shallowCopyObject$1(e||{});e.whiteList=e.whiteList||l.whiteList;e.onAttr=e.onAttr||l.onAttr;e.onIgnoreAttr=e.onIgnoreAttr||l.onIgnoreAttr;e.safeAttrValue=e.safeAttrValue||l.safeAttrValue;this.options=e}FilterCSS$2.prototype.process=function(e){e=e||"";e=e.toString();if(!e)return"";var t=this;var r=t.options;var a=r.whiteList;var i=r.onAttr;var s=r.onIgnoreAttr;var n=r.safeAttrValue;var o=f(e,(function(e,t,r,o,l){var f=a[r];var u=false;f===true?u=f:typeof f==="function"?u=f(o):f instanceof RegExp&&(u=f.test(o));u!==true&&(u=false);o=n(r,o);if(o){var c={position:t,sourcePosition:e,source:l,isWhite:u};if(u){var g=i(r,o,c);return isNull$1(g)?r+":"+o:g}g=s(r,o,c);return isNull$1(g)?void 0:g}}));return o};var u=FilterCSS$2;(function(e,t){var r=a;var i=u;
/**
	 * XSS过滤
	 *
	 * @param {String} css 要过滤的CSS代码
	 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
	 * @return {String}
	 */function filterCSS(e,t){var r=new i(t);return r.process(e)}t=e.exports=filterCSS;t.FilterCSS=i;for(var s in r)t[s]=r[s]})(r,r.exports);var c=r.exports;var g={indexOf:function(e,t){var r,a;if(Array.prototype.indexOf)return e.indexOf(t);for(r=0,a=e.length;r<a;r++)if(e[r]===t)return r;return-1},forEach:function(e,t,r){var a,i;if(Array.prototype.forEach)return e.forEach(t,r);for(a=0,i=e.length;a<i;a++)t.call(r,e[a],a,e)},trim:function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(e){var t=/\s|\n|\t/;var r=t.exec(e);return r?r.index:-1}};var p=c.FilterCSS;var d=c.getDefaultWhiteList;var h=g;function getDefaultWhiteList(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var v=new p;
/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */function onTag(e,t,r){}
/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */function onIgnoreTag(e,t,r){}
/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */function onTagAttr(e,t,r){}
/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */function onIgnoreTagAttr(e,t,r){}
/**
 * default escapeHtml function
 *
 * @param {String} html
 */function escapeHtml(e){return e.replace(m,"&lt;").replace(b,"&gt;")}
/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */function safeAttrValue(e,t,r,a){r=friendlyAttrValue(r);if(t==="href"||t==="src"){r=h.trim(r);if(r==="#")return"#";if(!(r.substr(0,7)==="http://"||r.substr(0,8)==="https://"||r.substr(0,7)==="mailto:"||r.substr(0,4)==="tel:"||r.substr(0,11)==="data:image/"||r.substr(0,6)==="ftp://"||r.substr(0,2)==="./"||r.substr(0,3)==="../"||r[0]==="#"||r[0]==="/"))return""}else if(t==="background"){S.lastIndex=0;if(S.test(r))return""}else if(t==="style"){T.lastIndex=0;if(T.test(r))return"";O.lastIndex=0;if(O.test(r)){S.lastIndex=0;if(S.test(r))return""}if(a!==false){a=a||v;r=a.process(r)}}r=escapeAttrValue(r);return r}var m=/</g;var b=/>/g;var y=/"/g;var w=/&quot;/g;var x=/&#([a-zA-Z0-9]*);?/gim;var A=/&colon;?/gim;var k=/&newline;?/gim;var S=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;var T=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;var O=/u\s*r\s*l\s*\(.*/gi;
/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */function escapeQuote(e){return e.replace(y,"&quot;")}
/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */function unescapeQuote(e){return e.replace(w,'"')}
/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */function escapeHtmlEntities(e){return e.replace(x,(function replaceUnicode(e,t){return t[0]==="x"||t[0]==="X"?String.fromCharCode(parseInt(t.substr(1),16)):String.fromCharCode(parseInt(t,10))}))}
/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */function escapeDangerHtml5Entities(e){return e.replace(A,":").replace(k," ")}
/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */function clearNonPrintableCharacter(e){var t="";for(var r=0,a=e.length;r<a;r++)t+=e.charCodeAt(r)<32?" ":e.charAt(r);return h.trim(t)}
/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */function friendlyAttrValue(e){e=unescapeQuote(e);e=escapeHtmlEntities(e);e=escapeDangerHtml5Entities(e);e=clearNonPrintableCharacter(e);return e}
/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */function escapeAttrValue(e){e=escapeQuote(e);e=escapeHtml(e);return e}function onIgnoreTagStripAll(){return""}
/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */function StripTagBody(e,t){typeof t!=="function"&&(t=function(){});var r=!Array.isArray(e);function isRemoveTag(t){return!!r||h.indexOf(e,t)!==-1}var a=[];var i=false;return{onIgnoreTag:function(e,r,s){if(isRemoveTag(e)){if(s.isClosing){var n="[/removed]";var o=s.position+n.length;a.push([i!==false?i:s.position,o]);i=false;return n}i||(i=s.position);return"[removed]"}return t(e,r,s)},remove:function(e){var t="";var r=0;h.forEach(a,(function(a){t+=e.slice(r,a[0]);r=a[1]}));t+=e.slice(r);return t}}}
/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */function stripCommentTag(e){var t="";var r=0;while(r<e.length){var a=e.indexOf("\x3c!--",r);if(a===-1){t+=e.slice(r);break}t+=e.slice(r,a);var i=e.indexOf("--\x3e",a);if(i===-1)break;r=i+3}return t}
/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */function stripBlankChar(e){var t=e.split("");t=t.filter((function(e){var t=e.charCodeAt(0);return t!==127&&(!(t<=31)||(t===10||t===13))}));return t.join("")}t.whiteList=getDefaultWhiteList();t.getDefaultWhiteList=getDefaultWhiteList;t.onTag=onTag;t.onIgnoreTag=onIgnoreTag;t.onTagAttr=onTagAttr;t.onIgnoreTagAttr=onIgnoreTagAttr;t.safeAttrValue=safeAttrValue;t.escapeHtml=escapeHtml;t.escapeQuote=escapeQuote;t.unescapeQuote=unescapeQuote;t.escapeHtmlEntities=escapeHtmlEntities;t.escapeDangerHtml5Entities=escapeDangerHtml5Entities;t.clearNonPrintableCharacter=clearNonPrintableCharacter;t.friendlyAttrValue=friendlyAttrValue;t.escapeAttrValue=escapeAttrValue;t.onIgnoreTagStripAll=onIgnoreTagStripAll;t.StripTagBody=StripTagBody;t.stripCommentTag=stripCommentTag;t.stripBlankChar=stripBlankChar;t.cssFilter=v;t.getDefaultCSSWhiteList=d;var C={};var L=g;
/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */function getTagName(e){var t=L.spaceIndex(e);var r;r=t===-1?e.slice(1,-1):e.slice(1,t+1);r=L.trim(r).toLowerCase();r.slice(0,1)==="/"&&(r=r.slice(1));r.slice(-1)==="/"&&(r=r.slice(0,-1));return r}
/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */function isClosing(e){return e.slice(0,2)==="</"}
/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */function parseTag$1(e,t,r){var a="";var i=0;var s=false;var n=false;var o=0;var l=e.length;var f="";var u="";e:for(o=0;o<l;o++){var c=e.charAt(o);if(s===false){if(c==="<"){s=o;continue}}else if(n===false){if(c==="<"){a+=r(e.slice(i,o));s=o;i=o;continue}if(c===">"){a+=r(e.slice(i,s));u=e.slice(s,o+1);f=getTagName(u);a+=t(s,a.length,f,u,isClosing(u));i=o+1;s=false;continue}if(c==='"'||c==="'"){var g=1;var p=e.charAt(o-g);while(p.trim()===""||p==="="){if(p==="="){n=c;continue e}p=e.charAt(o-++g)}}}else if(c===n){n=false;continue}}i<e.length&&(a+=r(e.substr(i)));return a}var I=/[^a-zA-Z0-9\\_:.-]/gim;
/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */function parseAttr$1(e,t){var r=0;var a=0;var i=[];var s=false;var n=e.length;function addAttr(e,r){e=L.trim(e);e=e.replace(I,"").toLowerCase();if(!(e.length<1)){var a=t(e,r||"");a&&i.push(a)}}for(var o=0;o<n;o++){var l=e.charAt(o);var f,u;if(s!==false||l!=="=")if(s===false||o!==a)if(/\s|\n|\t/.test(l)){e=e.replace(/\s|\n|\t/g," ");if(s===false){u=findNextEqual(e,o);if(u===-1){f=L.trim(e.slice(r,o));addAttr(f);s=false;r=o+1;continue}o=u-1;continue}u=findBeforeEqual(e,o-1);if(u===-1){f=L.trim(e.slice(r,o));f=stripQuoteWrap(f);addAttr(s,f);s=false;r=o+1;continue}}else;else{u=e.indexOf(l,o+1);if(u===-1)break;f=L.trim(e.slice(a+1,u));addAttr(s,f);s=false;o=u;r=o+1}else{s=e.slice(r,o);r=o+1;a=e.charAt(r)==='"'||e.charAt(r)==="'"?r:findNextQuotationMark(e,o+1)}}r<e.length&&(s===false?addAttr(e.slice(r)):addAttr(s,stripQuoteWrap(L.trim(e.slice(r)))));return L.trim(i.join(" "))}function findNextEqual(e,t){for(;t<e.length;t++){var r=e[t];if(r!==" ")return r==="="?t:-1}}function findNextQuotationMark(e,t){for(;t<e.length;t++){var r=e[t];if(r!==" ")return r==="'"||r==='"'?t:-1}}function findBeforeEqual(e,t){for(;t>0;t--){var r=e[t];if(r!==" ")return r==="="?t:-1}}function isQuoteWrapString(e){return e[0]==='"'&&e[e.length-1]==='"'||e[0]==="'"&&e[e.length-1]==="'"}function stripQuoteWrap(e){return isQuoteWrapString(e)?e.substr(1,e.length-2):e}C.parseTag=parseTag$1;C.parseAttr=parseAttr$1;var j=c.FilterCSS;var z=t;var V=C;var W=V.parseTag;var E=V.parseAttr;var F=g;
/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */function isNull(e){return e===void 0||e===null}
/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */function getAttrs(e){var t=F.spaceIndex(e);if(t===-1)return{html:"",closing:e[e.length-2]==="/"};e=F.trim(e.slice(t+1,-1));var r=e[e.length-1]==="/";r&&(e=F.trim(e.slice(0,-1)));return{html:e,closing:r}}
/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */function shallowCopyObject(e){var t={};for(var r in e)t[r]=e[r];return t}function keysToLowerCase(e){var t={};for(var r in e)Array.isArray(e[r])?t[r.toLowerCase()]=e[r].map((function(e){return e.toLowerCase()})):t[r.toLowerCase()]=e[r];return t}
/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */function FilterXSS(e){e=shallowCopyObject(e||{});if(e.stripIgnoreTag){e.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');e.onIgnoreTag=z.onIgnoreTagStripAll}e.whiteList||e.allowList?e.whiteList=keysToLowerCase(e.whiteList||e.allowList):e.whiteList=z.whiteList;e.onTag=e.onTag||z.onTag;e.onTagAttr=e.onTagAttr||z.onTagAttr;e.onIgnoreTag=e.onIgnoreTag||z.onIgnoreTag;e.onIgnoreTagAttr=e.onIgnoreTagAttr||z.onIgnoreTagAttr;e.safeAttrValue=e.safeAttrValue||z.safeAttrValue;e.escapeHtml=e.escapeHtml||z.escapeHtml;this.options=e;if(e.css===false)this.cssFilter=false;else{e.css=e.css||{};this.cssFilter=new j(e.css)}}
/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */FilterXSS.prototype.process=function(e){e=e||"";e=e.toString();if(!e)return"";var t=this;var r=t.options;var a=r.whiteList;var i=r.onTag;var s=r.onIgnoreTag;var n=r.onTagAttr;var o=r.onIgnoreTagAttr;var l=r.safeAttrValue;var f=r.escapeHtml;var u=t.cssFilter;r.stripBlankChar&&(e=z.stripBlankChar(e));r.allowCommentTag||(e=z.stripCommentTag(e));var c=false;if(r.stripIgnoreTagBody){c=z.StripTagBody(r.stripIgnoreTagBody,s);s=c.onIgnoreTag}var g=W(e,(function(e,t,r,c,g){var p={sourcePosition:e,position:t,isClosing:g,isWhite:Object.prototype.hasOwnProperty.call(a,r)};var d=i(r,c,p);if(!isNull(d))return d;if(p.isWhite){if(p.isClosing)return"</"+r+">";var h=getAttrs(c);var v=a[r];var m=E(h.html,(function(e,t){var a=F.indexOf(v,e)!==-1;var i=n(r,e,t,a);if(!isNull(i))return i;if(a){t=l(r,e,t,u);return t?e+'="'+t+'"':e}i=o(r,e,t,a);return isNull(i)?void 0:i}));c="<"+r;m&&(c+=" "+m);h.closing&&(c+=" /");c+=">";return c}d=s(r,c,p);return isNull(d)?f(c):d}),f);c&&(g=c.remove(g));return g};var N=FilterXSS;(function(e,r){var a=t;var i=C;var s=N;
/**
	 * filter xss function
	 *
	 * @param {String} html
	 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
	 * @return {String}
	 */function filterXSS(e,t){var r=new s(t);return r.process(e)}r=e.exports=filterXSS;r.filterXSS=filterXSS;r.FilterXSS=s;(function(){for(var e in a)r[e]=a[e];for(var t in i)r[t]=i[t]})();function isWorkerEnv(){return typeof self!=="undefined"&&typeof DedicatedWorkerGlobalScope!=="undefined"&&self instanceof DedicatedWorkerGlobalScope}isWorkerEnv()&&(self.filterXSS=e.exports)})(e,e.exports);var $=e.exports;
/**
 * Determine if the value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */var isPlainObject=function(e){if(typeof e!=="object"||e===null)return false;if(Object.prototype.toString.call(e)!=="[object Object]")return false;var t=Object.getPrototypeOf(e);if(t===null)return true;while(Object.getPrototypeOf(t)!==null)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t};var H=function(){function Sanitizer(e,t){var r=this;this.arcgisWhiteList={a:["href","style","target"],abbr:["title"],article:["style"],aside:["style"],audio:["autoplay","controls","loop","muted","preload"],b:[],blockquote:["style"],br:[],code:["style"],dd:["style"],del:["style"],details:["open","style"],div:["align","aria-hidden","aria-label","style"],dl:["style"],dt:["style"],em:[],figcaption:["style"],figure:["style"],font:["color","face","size","style"],footer:["style"],h1:["style"],h2:["style"],h3:["style"],h4:["style"],h5:["style"],h6:["style"],header:["style"],hr:[],i:[],img:["alt","border","height","src","style","width"],li:[],main:["style"],mark:["style"],nav:["style"],ol:[],p:["style"],pre:["style"],section:["style"],source:["media","src","type"],span:["aria-hidden","aria-label","style"],strong:[],sub:["style"],summary:["style"],sup:["style"],table:["border","cellpadding","cellspacing","height","style","width"],tbody:[],tr:["align","height","style","valign"],td:["align","colspan","height","nowrap","rowspan","style","valign","width"],th:["align","colspan","height","nowrap","rowspan","style","valign","width"],time:["style"],u:[],ul:[],video:["autoplay","controls","height","loop","muted","poster","preload","width"]};this.arcgisCSSWhiteList=__assign(__assign({},$.getDefaultCSSWhiteList()),{"align-items":true,"align-self":true,flex:true,"flex-basis":true,"flex-direction":true,"flex-flow":true,"flex-grow":true,"flex-shrink":true,"flex-wrap":true,float:true,gap:true,grid:true,"grid-area":true,"grid-auto-columns":true,"grid-auto-flow":true,"grid-auto-rows":true,"grid-column":true,"grid-column-end":true,"grid-column-start":true,"grid-row":true,"grid-row-end":true,"grid-row-start":true,"grid-template":true,"grid-template-areas":true,"grid-template-columns":true,"grid-template-rows":true,"justify-content":true,"justify-items":true,"justify-self":true,"line-height":true,overflow:true});this.allowedProtocols=["http","https","mailto","iform","tel","flow","lfmobile","arcgis-navigator","arcgis-appstudio-player","arcgis-survey123","arcgis-collector","arcgis-workforce","arcgis-explorer","arcgis-trek2there","arcgis-quickcapture","mspbi","comgooglemaps","pdfefile","pdfehttp","pdfehttps","boxapp","boxemm","awb","awbs","gropen","radarscope"];this.arcgisFilterOptions={allowCommentTag:true,safeAttrValue:function(e,t,a,i){return e==="a"&&t==="href"||(e==="img"||e==="source")&&t==="src"?r.sanitizeUrl(a):$.safeAttrValue(e,t,a,i)}};this._entityMap={"&":"&#x38;","<":"&#x3C;",">":"&#x3E;",'"':"&#x22;","'":"&#x27;","/":"&#x2F;"};var a;if(e&&!t)a=e;else if(e&&t){a=Object.create(this.arcgisFilterOptions);a.css={whiteList:this.arcgisCSSWhiteList};Object.keys(e).forEach((function(t){if(t==="whiteList")a.whiteList=r._extendObjectOfArrays([r.arcgisWhiteList,e.whiteList||{}]);else if(t==="css"){var i=e.css.whiteList;i!=null&&e.css instanceof Object&&Object.keys(i).forEach((function(e){return a.css.whiteList[e]=i[e]}))}else a[t]=e[t]}))}else{a=Object.create(this.arcgisFilterOptions);a.whiteList=this.arcgisWhiteList;a.css={whiteList:this.arcgisCSSWhiteList}}this.xssFilterOptions=a;this._xssFilter=new $.FilterXSS(a)}
/**
     * Sanitizes value to remove invalid HTML tags.
     *
     * Note: If the value passed does not contain a valid JSON data type (String,
     * Number, JSON Object, Array, Boolean, or null), the value will be nullified.
     *
     * @param {any} value The value to sanitize.
     * @returns {any} The sanitized value.
     * @memberof Sanitizer
     */Sanitizer.prototype.sanitize=function(e,t){t===void 0&&(t={});switch(typeof e){case"number":return isNaN(e)||!isFinite(e)?null:e;case"boolean":return e;case"string":return this._xssFilter.process(e);case"object":return this._iterateOverObject(e,t);default:if(t.allowUndefined&&typeof e==="undefined")return;return null}};
/**
     * Sanitizes a URL string following the allowed protocols and sanitization rules.
     *
     * @param {string} value The URL to sanitize.
     * @param {{ isProtocolRequired: boolean }} options Configuration options for URL checking.
     * @returns {string} The sanitized URL if it's valid, or an empty string if the URL is invalid.
     */Sanitizer.prototype.sanitizeUrl=function(e,t){var r=(t!==null&&t!==void 0?t:{}).isProtocolRequired,a=r===void 0||r;var i=this._trim(e.substring(0,e.indexOf(":")));var s=e==="/";var n=/^#/.test(e);var o=i&&this.allowedProtocols.indexOf(i.toLowerCase())>-1;return s||n||o?$.escapeAttrValue(e):i||a?"":$.escapeAttrValue("https://".concat(e))};
/**
     * Sanitizes an HTML attribute value.
     *
     * @param {string} tag The tagname of the HTML element.
     * @param {string} attribute The attribute name of the HTML element.
     * @param {string} value The raw value to be used for the HTML attribute value.
     * @param {XSS.ICSSFilter} [cssFilter] The CSS filter to be used.
     * @returns {string} The sanitized attribute value.
     * @memberof Sanitizer
     */Sanitizer.prototype.sanitizeHTMLAttribute=function(e,t,r,a){return typeof this.xssFilterOptions.safeAttrValue==="function"?this.xssFilterOptions.safeAttrValue(e,t,r,a):$.safeAttrValue(e,t,r,a)};
/**
     * Checks if a value only contains valid HTML.
     *
     * @param {any} value The value to validate.
     * @returns {boolean}
     * @memberof Sanitizer
     */Sanitizer.prototype.validate=function(e,t){t===void 0&&(t={});var r=this.sanitize(e,t);return{isValid:e===r,sanitized:r}};
/**
     * Encodes the following characters, `& < > \" ' /` to their hexadecimal HTML entity code.
     * Example: "&middot;" => "&#x38;middot;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */Sanitizer.prototype.encodeHTML=function(e){var t=this;return String(e).replace(/[&<>"'\/]/g,(function(e){return t._entityMap[e]}))};
/**
     * Encodes all non-alphanumeric ASCII characters to their hexadecimal HTML entity codes.
     * Example: "alert(document.cookie)" => "alert&#x28;document&#x2e;cookie&#x29;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */Sanitizer.prototype.encodeAttrValue=function(e){var t=/^[a-zA-Z0-9]$/;return String(e).replace(/[\x00-\xFF]/g,(function(r,a){return t.test(r)?r:"&#x".concat(Number(e.charCodeAt(a)).toString(16),";")}))};
/**
     * Extends an object of arrays by by concatenating arrays of the same object
     * keys. If the if the previous key's value is not an array, the next key's
     * value will replace the previous key. This method is used for extending the
     * whiteList in the XSS filter options.
     *
     * @private
     * @param {Array<{}>} objects An array of objects.
     * @returns {{}} The extended object.
     * @memberof Sanitizer
     */Sanitizer.prototype._extendObjectOfArrays=function(e){var t={};e.forEach((function(e){Object.keys(e).forEach((function(r){Array.isArray(e[r])&&Array.isArray(t[r])?t[r]=t[r].concat(e[r]):t[r]=e[r]}))}));return t};
/**
     * Iterate over a plain object or array to deeply sanitize each value.
     *
     * @private
     * @param {object} obj The object to iterate over.
     * @returns {(object | null)} The sanitized object.
     * @memberof Sanitizer
     */Sanitizer.prototype._iterateOverObject=function(e,t){var r=this;t===void 0&&(t={});try{var a=false;var i=void 0;if(Array.isArray(e))i=e.reduce((function(e,i){var s=r.validate(i,t);if(s.isValid)return e.concat([i]);a=true;return e.concat([s.sanitized])}),[]);else{if(!isPlainObject(e)){if(t.allowUndefined&&typeof e==="undefined")return;return null}var s=Object.keys(e);i=s.reduce((function(i,s){var n=e[s];var o=r.validate(n,t);if(o.isValid)i[s]=n;else{a=true;i[s]=o.sanitized}return i}),{})}return a?i:e}catch(e){return null}};
/**
     * Trim whitespace from the start and ends of a string.
     * @param {string} val The string to trim.
     * @returns {string} The trimmed string.
     */Sanitizer.prototype._trim=function(e){return String.prototype.trim?e.trim():e.replace(/(^\s*)|(\s*$)/g,"")};return Sanitizer}();export{H as Sanitizer,H as default};

