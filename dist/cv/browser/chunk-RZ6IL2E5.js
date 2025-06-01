import{A as M,B as _1,C as k1,D as I2,E as A1,F as P1,G as F1,H as h,I as F,J as D1,K as g2,L as b,N as O1,O as U2,Q as E1,T as B2,a as N1,b as y1,c as M2,d as K,e as v1,f as D2,g as x,h as Q,i as O2,j as r2,k as w1,l as S1,m as E2,n as h2,o as p,p as B,q as V2,r as T2,s as N,t as E,u as C2,v as n2,w as A,x as P,y as r,z as m}from"./chunk-NDUDQGOJ.js";var y4={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},x8=y1(N1({},y4),{"[class.ng-submitted]":"isSubmitted"});var v4=new v1("CallSetDisabledState",{providedIn:"root",factory:()=>V1}),V1="always";var w4=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=Q({type:c})}static{this.\u0275inj=K({})}}return c})();var R2=(()=>{class c{static withConfig(e){return{ngModule:c,providers:[{provide:v4,useValue:e.callSetDisabledState??V1}]}}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=Q({type:c})}static{this.\u0275inj=K({imports:[w4]})}}return c})();function S4(c,l,e){return(l=k4(l))in c?Object.defineProperty(c,l,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[l]=e,c}function T1(c,l){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(c);l&&(s=s.filter(function(n){return Object.getOwnPropertyDescriptor(c,n).enumerable})),e.push.apply(e,s)}return e}function i(c){for(var l=1;l<arguments.length;l++){var e=arguments[l]!=null?arguments[l]:{};l%2?T1(Object(e),!0).forEach(function(s){S4(c,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):T1(Object(e)).forEach(function(s){Object.defineProperty(c,s,Object.getOwnPropertyDescriptor(e,s))})}return c}function _4(c,l){if(typeof c!="object"||!c)return c;var e=c[Symbol.toPrimitive];if(e!==void 0){var s=e.call(c,l||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function k4(c){var l=_4(c,"string");return typeof l=="symbol"?l:l+""}var I1=()=>{},f1={},f3={},m3=null,d3={mark:I1,measure:I1};try{typeof window<"u"&&(f1=window),typeof document<"u"&&(f3=document),typeof MutationObserver<"u"&&(m3=MutationObserver),typeof performance<"u"&&(d3=performance)}catch{}var{userAgent:U1=""}=f1.navigator||{},q=f1,g=f3,B1=m3,x2=d3,y8=!!q.document,G=!!g.documentElement&&!!g.head&&typeof g.addEventListener=="function"&&typeof g.createElement=="function",p3=~U1.indexOf("MSIE")||~U1.indexOf("Trident/"),A4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,P4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,u3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},F4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},z3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],v="classic",S2="duotone",D4="sharp",O4="sharp-duotone",L3=[v,S2,D4,O4],E4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},V4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},T4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),I4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},U4=["fak","fa-kit","fakd","fa-kit-duotone"],R1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},B4=["kit"],R4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},H4=["fak","fakd"],G4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},H1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},b2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],W4=["fak","fa-kit","fakd","fa-kit-duotone"],q4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},$4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},X4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},$2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Y4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],X2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...j4,...Y4],K4=["solid","regular","light","thin","duotone","brands"],M3=[1,2,3,4,5,6,7,8,9,10],Q4=M3.concat([11,12,13,14,15,16,17,18,19,20]),J4=[...Object.keys(X4),...K4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",b2.GROUP,b2.SWAP_OPACITY,b2.PRIMARY,b2.SECONDARY].concat(M3.map(c=>"".concat(c,"x"))).concat(Q4.map(c=>"w-".concat(c))),Z4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},R="___FONT_AWESOME___",Y2=16,h3="fa",C3="svg-inline--fa",Z="data-fa-i2svg",K2="data-fa-pseudo-element",c0="data-fa-pseudo-element-pending",m1="data-prefix",d1="data-icon",G1="fontawesome-i2svg",e0="async",l0=["HTML","HEAD","STYLE","SCRIPT"],g3=(()=>{try{return!0}catch{return!1}})();function z2(c){return new Proxy(c,{get(l,e){return e in l?l[e]:l[v]}})}var x3=i({},u3);x3[v]=i(i(i(i({},{"fa-duotone":"duotone"}),u3[v]),R1.kit),R1["kit-duotone"]);var s0=z2(x3),Q2=i({},I4);Q2[v]=i(i(i(i({},{duotone:"fad"}),Q2[v]),H1.kit),H1["kit-duotone"]);var j1=z2(Q2),J2=i({},$2);J2[v]=i(i({},J2[v]),G4.kit);var p1=z2(J2),Z2=i({},$4);Z2[v]=i(i({},Z2[v]),R4.kit);var v8=z2(Z2),n0=A4,b3="fa-layers-text",t0=P4,a0=i({},E4),w8=z2(a0),i0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H2=F4,o0=[...B4,...J4],m2=q.FontAwesomeConfig||{};function r0(c){var l=g.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function f0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}g&&typeof g.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[e,s]=l,n=f0(r0(e));n!=null&&(m2[s]=n)});var N3={styleDefault:"solid",familyDefault:v,cssPrefix:h3,replacementClass:C3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};m2.familyPrefix&&(m2.cssPrefix=m2.familyPrefix);var i2=i(i({},N3),m2);i2.autoReplaceSvg||(i2.observeMutations=!1);var f={};Object.keys(N3).forEach(c=>{Object.defineProperty(f,c,{enumerable:!0,set:function(l){i2[c]=l,d2.forEach(e=>e(f))},get:function(){return i2[c]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(c){i2.cssPrefix=c,d2.forEach(l=>l(f))},get:function(){return i2.cssPrefix}});q.FontAwesomeConfig=f;var d2=[];function m0(c){return d2.push(c),()=>{d2.splice(d2.indexOf(c),1)}}var W=Y2,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function d0(c){if(!c||!G)return;let l=g.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let e=g.head.childNodes,s=null;for(let n=e.length-1;n>-1;n--){let t=e[n],a=(t.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(s=t)}return g.head.insertBefore(l,s),c}var p0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function p2(){let c=12,l="";for(;c-- >0;)l+=p0[Math.random()*62|0];return l}function o2(c){let l=[];for(let e=(c||[]).length>>>0;e--;)l[e]=c[e];return l}function u1(c){return c.classList?o2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function y3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u0(c){return Object.keys(c||{}).reduce((l,e)=>l+"".concat(e,'="').concat(y3(c[e]),'" '),"").trim()}function _2(c){return Object.keys(c||{}).reduce((l,e)=>l+"".concat(e,": ").concat(c[e].trim(),";"),"")}function z1(c){return c.size!==T.size||c.x!==T.x||c.y!==T.y||c.rotate!==T.rotate||c.flipX||c.flipY}function z0(c){let{transform:l,containerWidth:e,iconWidth:s}=c,n={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(l.x*32,", ").concat(l.y*32,") "),a="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),o="rotate(".concat(l.rotate," 0 0)"),u={transform:"".concat(t," ").concat(a," ").concat(o)},d={transform:"translate(".concat(s/2*-1," -256)")};return{outer:n,inner:u,path:d}}function L0(c){let{transform:l,width:e=Y2,height:s=Y2,startCentered:n=!1}=c,t="";return n&&p3?t+="translate(".concat(l.x/W-e/2,"em, ").concat(l.y/W-s/2,"em) "):n?t+="translate(calc(-50% + ".concat(l.x/W,"em), calc(-50% + ").concat(l.y/W,"em)) "):t+="translate(".concat(l.x/W,"em, ").concat(l.y/W,"em) "),t+="scale(".concat(l.size/W*(l.flipX?-1:1),", ").concat(l.size/W*(l.flipY?-1:1),") "),t+="rotate(".concat(l.rotate,"deg) "),t}var M0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function v3(){let c=h3,l=C3,e=f.cssPrefix,s=f.replacementClass,n=M0;if(e!==c||s!==l){let t=new RegExp("\\.".concat(c,"\\-"),"g"),a=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(l),"g");n=n.replace(t,".".concat(e,"-")).replace(a,"--".concat(e,"-")).replace(o,".".concat(s))}return n}var W1=!1;function G2(){f.autoAddCss&&!W1&&(d0(v3()),W1=!0)}var h0={mixout(){return{dom:{css:v3,insertCss:G2}}},hooks(){return{beforeDOMElementCreation(){G2()},beforeI2svg(){G2()}}}},H=q||{};H[R]||(H[R]={});H[R].styles||(H[R].styles={});H[R].hooks||(H[R].hooks={});H[R].shims||(H[R].shims=[]);var I=H[R],w3=[],S3=function(){g.removeEventListener("DOMContentLoaded",S3),v2=1,w3.map(c=>c())},v2=!1;G&&(v2=(g.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(g.readyState),v2||g.addEventListener("DOMContentLoaded",S3));function C0(c){G&&(v2?setTimeout(c,0):w3.push(c))}function L2(c){let{tag:l,attributes:e={},children:s=[]}=c;return typeof c=="string"?y3(c):"<".concat(l," ").concat(u0(e),">").concat(s.map(L2).join(""),"</").concat(l,">")}function q1(c,l,e){if(c&&c[l]&&c[l][e])return{prefix:l,iconName:e,icon:c[l][e]}}var g0=function(l,e){return function(s,n,t,a){return l.call(e,s,n,t,a)}},j2=function(l,e,s,n){var t=Object.keys(l),a=t.length,o=n!==void 0?g0(e,n):e,u,d,z;for(s===void 0?(u=1,z=l[t[0]]):(u=0,z=s);u<a;u++)d=t[u],z=o(z,l[d],d,l);return z};function x0(c){let l=[],e=0,s=c.length;for(;e<s;){let n=c.charCodeAt(e++);if(n>=55296&&n<=56319&&e<s){let t=c.charCodeAt(e++);(t&64512)==56320?l.push(((n&1023)<<10)+(t&1023)+65536):(l.push(n),e--)}else l.push(n)}return l}function c1(c){let l=x0(c);return l.length===1?l[0].toString(16):null}function b0(c,l){let e=c.length,s=c.charCodeAt(l),n;return s>=55296&&s<=56319&&e>l+1&&(n=c.charCodeAt(l+1),n>=56320&&n<=57343)?(s-55296)*1024+n-56320+65536:s}function $1(c){return Object.keys(c).reduce((l,e)=>{let s=c[e];return!!s.icon?l[s.iconName]=s.icon:l[e]=s,l},{})}function e1(c,l){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:s=!1}=e,n=$1(l);typeof I.hooks.addPack=="function"&&!s?I.hooks.addPack(c,$1(l)):I.styles[c]=i(i({},I.styles[c]||{}),n),c==="fas"&&e1("fa",l)}var{styles:u2,shims:N0}=I,_3=Object.keys(p1),y0=_3.reduce((c,l)=>(c[l]=Object.keys(p1[l]),c),{}),L1=null,k3={},A3={},P3={},F3={},D3={};function v0(c){return~o0.indexOf(c)}function w0(c,l){let e=l.split("-"),s=e[0],n=e.slice(1).join("-");return s===c&&n!==""&&!v0(n)?n:null}var O3=()=>{let c=s=>j2(u2,(n,t,a)=>(n[a]=j2(t,s,{}),n),{});k3=c((s,n,t)=>(n[3]&&(s[n[3]]=t),n[2]&&n[2].filter(o=>typeof o=="number").forEach(o=>{s[o.toString(16)]=t}),s)),A3=c((s,n,t)=>(s[t]=t,n[2]&&n[2].filter(o=>typeof o=="string").forEach(o=>{s[o]=t}),s)),D3=c((s,n,t)=>{let a=n[2];return s[t]=t,a.forEach(o=>{s[o]=t}),s});let l="far"in u2||f.autoFetchSvg,e=j2(N0,(s,n)=>{let t=n[0],a=n[1],o=n[2];return a==="far"&&!l&&(a="fas"),typeof t=="string"&&(s.names[t]={prefix:a,iconName:o}),typeof t=="number"&&(s.unicodes[t.toString(16)]={prefix:a,iconName:o}),s},{names:{},unicodes:{}});P3=e.names,F3=e.unicodes,L1=k2(f.styleDefault,{family:f.familyDefault})};m0(c=>{L1=k2(c.styleDefault,{family:f.familyDefault})});O3();function M1(c,l){return(k3[c]||{})[l]}function S0(c,l){return(A3[c]||{})[l]}function J(c,l){return(D3[c]||{})[l]}function E3(c){return P3[c]||{prefix:null,iconName:null}}function _0(c){let l=F3[c],e=M1("fas",c);return l||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function $(){return L1}var V3=()=>({prefix:null,iconName:null,rest:[]});function k0(c){let l=v,e=_3.reduce((s,n)=>(s[n]="".concat(f.cssPrefix,"-").concat(n),s),{});return L3.forEach(s=>{(c.includes(e[s])||c.some(n=>y0[s].includes(n)))&&(l=s)}),l}function k2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=v}=l,s=s0[e][c];if(e===S2&&!c)return"fad";let n=j1[e][c]||j1[e][s],t=c in I.styles?c:null;return n||t||null}function A0(c){let l=[],e=null;return c.forEach(s=>{let n=w0(f.cssPrefix,s);n?e=n:s&&l.push(s)}),{iconName:e,rest:l}}function X1(c){return c.sort().filter((l,e,s)=>s.indexOf(l)===e)}function A2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=l,s=null,n=X2.concat(W4),t=X1(c.filter(C=>n.includes(C))),a=X1(c.filter(C=>!X2.includes(C))),o=t.filter(C=>(s=C,!z3.includes(C))),[u=null]=o,d=k0(t),z=i(i({},A0(a)),{},{prefix:k2(u,{family:d})});return i(i(i({},z),O0({values:c,family:d,styles:u2,config:f,canonical:z,givenPrefix:s})),P0(e,s,z))}function P0(c,l,e){let{prefix:s,iconName:n}=e;if(c||!s||!n)return{prefix:s,iconName:n};let t=l==="fa"?E3(n):{},a=J(s,n);return n=t.iconName||a||n,s=t.prefix||s,s==="far"&&!u2.far&&u2.fas&&!f.autoFetchSvg&&(s="fas"),{prefix:s,iconName:n}}var F0=L3.filter(c=>c!==v||c!==S2),D0=Object.keys($2).filter(c=>c!==v).map(c=>Object.keys($2[c])).flat();function O0(c){let{values:l,family:e,canonical:s,givenPrefix:n="",styles:t={},config:a={}}=c,o=e===S2,u=l.includes("fa-duotone")||l.includes("fad"),d=a.familyDefault==="duotone",z=s.prefix==="fad"||s.prefix==="fa-duotone";if(!o&&(u||d||z)&&(s.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(s.prefix="fab"),!s.prefix&&F0.includes(e)&&(Object.keys(t).find(L=>D0.includes(L))||a.autoFetchSvg)){let L=T4.get(e).defaultShortPrefixId;s.prefix=L,s.iconName=J(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||n==="fa")&&(s.prefix=$()||"fas"),s}var l1=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,e=new Array(l),s=0;s<l;s++)e[s]=arguments[s];let n=e.reduce(this._pullDefinitions,{});Object.keys(n).forEach(t=>{this.definitions[t]=i(i({},this.definitions[t]||{}),n[t]),e1(t,n[t]);let a=p1[v][t];a&&e1(a,n[t]),O3()})}reset(){this.definitions={}}_pullDefinitions(l,e){let s=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(s).map(n=>{let{prefix:t,iconName:a,icon:o}=s[n],u=o[2];l[t]||(l[t]={}),u.length>0&&u.forEach(d=>{typeof d=="string"&&(l[t][d]=o)}),l[t][a]=o}),l}},Y1=[],t2={},a2={},E0=Object.keys(a2);function V0(c,l){let{mixoutsTo:e}=l;return Y1=c,t2={},Object.keys(a2).forEach(s=>{E0.indexOf(s)===-1&&delete a2[s]}),Y1.forEach(s=>{let n=s.mixout?s.mixout():{};if(Object.keys(n).forEach(t=>{typeof n[t]=="function"&&(e[t]=n[t]),typeof n[t]=="object"&&Object.keys(n[t]).forEach(a=>{e[t]||(e[t]={}),e[t][a]=n[t][a]})}),s.hooks){let t=s.hooks();Object.keys(t).forEach(a=>{t2[a]||(t2[a]=[]),t2[a].push(t[a])})}s.provides&&s.provides(a2)}),e}function s1(c,l){for(var e=arguments.length,s=new Array(e>2?e-2:0),n=2;n<e;n++)s[n-2]=arguments[n];return(t2[c]||[]).forEach(a=>{l=a.apply(null,[l,...s])}),l}function c2(c){for(var l=arguments.length,e=new Array(l>1?l-1:0),s=1;s<l;s++)e[s-1]=arguments[s];(t2[c]||[]).forEach(t=>{t.apply(null,e)})}function X(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return a2[c]?a2[c].apply(null,l):void 0}function n1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,e=c.prefix||$();if(l)return l=J(e,l)||l,q1(T3.definitions,e,l)||q1(I.styles,e,l)}var T3=new l1,T0=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,c2("noAuto")},I0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(c2("beforeI2svg",c),X("pseudoElements2svg",c),X("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,C0(()=>{B0({autoReplaceSvgRoot:l}),c2("watch",c)})}},U0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:J(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=k2(c[0]);return{prefix:e,iconName:J(e,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(f.cssPrefix,"-"))>-1||c.match(n0))){let l=A2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||$(),iconName:J(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=$();return{prefix:l,iconName:J(l,c)||c}}}},k={noAuto:T0,config:f,dom:I0,parse:U0,library:T3,findIconDefinition:n1,toHtml:L2},B0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=g}=c;(Object.keys(I.styles).length>0||f.autoFetchSvg)&&G&&f.autoReplaceSvg&&k.dom.i2svg({node:l})};function P2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(e=>L2(e))}}),Object.defineProperty(c,"node",{get:function(){if(!G)return;let e=g.createElement("div");return e.innerHTML=c.html,e.children}}),c}function R0(c){let{children:l,main:e,mask:s,attributes:n,styles:t,transform:a}=c;if(z1(a)&&e.found&&!s.found){let{width:o,height:u}=e,d={x:o/u/2,y:.5};n.style=_2(i(i({},t),{},{"transform-origin":"".concat(d.x+a.x/16,"em ").concat(d.y+a.y/16,"em")}))}return[{tag:"svg",attributes:n,children:l}]}function H0(c){let{prefix:l,iconName:e,children:s,attributes:n,symbol:t}=c,a=t===!0?"".concat(l,"-").concat(f.cssPrefix,"-").concat(e):t;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},n),{},{id:a}),children:s}]}]}function h1(c){let{icons:{main:l,mask:e},prefix:s,iconName:n,transform:t,symbol:a,title:o,maskId:u,titleId:d,extra:z,watchable:C=!1}=c,{width:L,height:w}=e.found?e:l,j=H4.includes(s),Y=[f.replacementClass,n?"".concat(f.cssPrefix,"-").concat(n):""].filter(s2=>z.classes.indexOf(s2)===-1).filter(s2=>s2!==""||!!s2).concat(z.classes).join(" "),D={children:[],attributes:i(i({},z.attributes),{},{"data-prefix":s,"data-icon":n,class:Y,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(w)})},U=j&&!~z.classes.indexOf("fa-fw")?{width:"".concat(L/w*16*.0625,"em")}:{};C&&(D.attributes[Z]=""),o&&(D.children.push({tag:"title",attributes:{id:D.attributes["aria-labelledby"]||"title-".concat(d||p2())},children:[o]}),delete D.attributes.title);let _=i(i({},D),{},{prefix:s,iconName:n,main:l,mask:e,maskId:u,transform:t,symbol:a,styles:i(i({},U),z.styles)}),{children:O,attributes:l2}=e.found&&l.found?X("generateAbstractMask",_)||{children:[],attributes:{}}:X("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=O,_.attributes=l2,a?H0(_):R0(_)}function K1(c){let{content:l,width:e,height:s,transform:n,title:t,extra:a,watchable:o=!1}=c,u=i(i(i({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")});o&&(u[Z]="");let d=i({},a.styles);z1(n)&&(d.transform=L0({transform:n,startCentered:!0,width:e,height:s}),d["-webkit-transform"]=d.transform);let z=_2(d);z.length>0&&(u.style=z);let C=[];return C.push({tag:"span",attributes:u,children:[l]}),t&&C.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),C}function G0(c){let{content:l,title:e,extra:s}=c,n=i(i(i({},s.attributes),e?{title:e}:{}),{},{class:s.classes.join(" ")}),t=_2(s.styles);t.length>0&&(n.style=t);let a=[];return a.push({tag:"span",attributes:n,children:[l]}),e&&a.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),a}var{styles:W2}=I;function t1(c){let l=c[0],e=c[1],[s]=c.slice(4),n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(H2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(H2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(H2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:e,icon:n}}var j0={found:!1,width:512,height:512};function W0(c,l){!g3&&!f.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function a1(c,l){let e=l;return l==="fa"&&f.styleDefault!==null&&(l=$()),new Promise((s,n)=>{if(e==="fa"){let t=E3(c)||{};c=t.iconName||c,l=t.prefix||l}if(c&&l&&W2[l]&&W2[l][c]){let t=W2[l][c];return s(t1(t))}W0(c,l),s(i(i({},j0),{},{icon:f.showMissingIcons&&c?X("missingIconAbstract")||{}:{}}))})}var Q1=()=>{},i1=f.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:Q1,measure:Q1},f2='FA "6.7.2"',q0=c=>(i1.mark("".concat(f2," ").concat(c," begins")),()=>I3(c)),I3=c=>{i1.mark("".concat(f2," ").concat(c," ends")),i1.measure("".concat(f2," ").concat(c),"".concat(f2," ").concat(c," begins"),"".concat(f2," ").concat(c," ends"))},C1={begin:q0,end:I3},N2=()=>{};function J1(c){return typeof(c.getAttribute?c.getAttribute(Z):null)=="string"}function $0(c){let l=c.getAttribute?c.getAttribute(m1):null,e=c.getAttribute?c.getAttribute(d1):null;return l&&e}function X0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(f.replacementClass)}function Y0(){return f.autoReplaceSvg===!0?y2.replace:y2[f.autoReplaceSvg]||y2.replace}function K0(c){return g.createElementNS("http://www.w3.org/2000/svg",c)}function Q0(c){return g.createElement(c)}function U3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=c.tag==="svg"?K0:Q0}=l;if(typeof c=="string")return g.createTextNode(c);let s=e(c.tag);return Object.keys(c.attributes||[]).forEach(function(t){s.setAttribute(t,c.attributes[t])}),(c.children||[]).forEach(function(t){s.appendChild(U3(t,{ceFn:e}))}),s}function J0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var y2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(e=>{l.parentNode.insertBefore(U3(e),l)}),l.getAttribute(Z)===null&&f.keepOriginalSource){let e=g.createComment(J0(l));l.parentNode.replaceChild(e,l)}else l.remove()},nest:function(c){let l=c[0],e=c[1];if(~u1(l).indexOf(f.replacementClass))return y2.replace(c);let s=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let t=e[0].attributes.class.split(" ").reduce((a,o)=>(o===f.replacementClass||o.match(s)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});e[0].attributes.class=t.toSvg.join(" "),t.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",t.toNode.join(" "))}let n=e.map(t=>L2(t)).join(`
`);l.setAttribute(Z,""),l.innerHTML=n}};function Z1(c){c()}function B3(c,l){let e=typeof l=="function"?l:N2;if(c.length===0)e();else{let s=Z1;f.mutateApproach===e0&&(s=q.requestAnimationFrame||Z1),s(()=>{let n=Y0(),t=C1.begin("mutate");c.map(n),t(),e()})}}var g1=!1;function R3(){g1=!0}function o1(){g1=!1}var w2=null;function c3(c){if(!B1||!f.observeMutations)return;let{treeCallback:l=N2,nodeCallback:e=N2,pseudoElementsCallback:s=N2,observeMutationsRoot:n=g}=c;w2=new B1(t=>{if(g1)return;let a=$();o2(t).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!J1(o.addedNodes[0])&&(f.searchPseudoElements&&s(o.target),l(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&s(o.target.parentNode),o.type==="attributes"&&J1(o.target)&&~i0.indexOf(o.attributeName))if(o.attributeName==="class"&&$0(o.target)){let{prefix:u,iconName:d}=A2(u1(o.target));o.target.setAttribute(m1,u||a),d&&o.target.setAttribute(d1,d)}else X0(o.target)&&e(o.target)})}),G&&w2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Z0(){w2&&w2.disconnect()}function c6(c){let l=c.getAttribute("style"),e=[];return l&&(e=l.split(";").reduce((s,n)=>{let t=n.split(":"),a=t[0],o=t.slice(1);return a&&o.length>0&&(s[a]=o.join(":").trim()),s},{})),e}function e6(c){let l=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),s=c.innerText!==void 0?c.innerText.trim():"",n=A2(u1(c));return n.prefix||(n.prefix=$()),l&&e&&(n.prefix=l,n.iconName=e),n.iconName&&n.prefix||(n.prefix&&s.length>0&&(n.iconName=S0(n.prefix,c.innerText)||M1(n.prefix,c1(c.innerText))),!n.iconName&&f.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=c.firstChild.data)),n}function l6(c){let l=o2(c.attributes).reduce((n,t)=>(n.name!=="class"&&n.name!=="style"&&(n[t.name]=t.value),n),{}),e=c.getAttribute("title"),s=c.getAttribute("data-fa-title-id");return f.autoA11y&&(e?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(s||p2()):(l["aria-hidden"]="true",l.focusable="false")),l}function s6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function e3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:s,rest:n}=e6(c),t=l6(c),a=s1("parseNodeAttributes",{},c),o=l.styleParser?c6(c):[];return i({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:t}},a)}var{styles:n6}=I;function H3(c){let l=f.autoReplaceSvg==="nest"?e3(c,{styleParser:!1}):e3(c);return~l.extra.classes.indexOf(b3)?X("generateLayersText",c,l):X("generateSvgReplacementMutation",c,l)}function t6(){return[...U4,...X2]}function l3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();let e=g.documentElement.classList,s=z=>e.add("".concat(G1,"-").concat(z)),n=z=>e.remove("".concat(G1,"-").concat(z)),t=f.autoFetchSvg?t6():z3.concat(Object.keys(n6));t.includes("fa")||t.push("fa");let a=[".".concat(b3,":not([").concat(Z,"])")].concat(t.map(z=>".".concat(z,":not([").concat(Z,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=o2(c.querySelectorAll(a))}catch{}if(o.length>0)s("pending"),n("complete");else return Promise.resolve();let u=C1.begin("onTree"),d=o.reduce((z,C)=>{try{let L=H3(C);L&&z.push(L)}catch(L){g3||L.name==="MissingIcon"&&console.error(L)}return z},[]);return new Promise((z,C)=>{Promise.all(d).then(L=>{B3(L,()=>{s("active"),s("complete"),n("pending"),typeof l=="function"&&l(),u(),z()})}).catch(L=>{u(),C(L)})})}function a6(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;H3(c).then(e=>{e&&B3([e],l)})}function i6(c){return function(l){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(l||{}).icon?l:n1(l||{}),{mask:n}=e;return n&&(n=(n||{}).icon?n:n1(n||{})),c(s,i(i({},e),{},{mask:n}))}}var o6=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=T,symbol:s=!1,mask:n=null,maskId:t=null,title:a=null,titleId:o=null,classes:u=[],attributes:d={},styles:z={}}=l;if(!c)return;let{prefix:C,iconName:L,icon:w}=c;return P2(i({type:"icon"},c),()=>(c2("beforeDOMElementCreation",{iconDefinition:c,params:l}),f.autoA11y&&(a?d["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||p2()):(d["aria-hidden"]="true",d.focusable="false")),h1({icons:{main:t1(w),mask:n?t1(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:L,transform:i(i({},T),e),symbol:s,title:a,maskId:t,titleId:o,extra:{attributes:d,styles:z,classes:u}})))},r6={mixout(){return{icon:i6(o6)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=l3,c.nodeCallback=a6,c}}},provides(c){c.i2svg=function(l){let{node:e=g,callback:s=()=>{}}=l;return l3(e,s)},c.generateSvgReplacementMutation=function(l,e){let{iconName:s,title:n,titleId:t,prefix:a,transform:o,symbol:u,mask:d,maskId:z,extra:C}=e;return new Promise((L,w)=>{Promise.all([a1(s,a),d.iconName?a1(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(j=>{let[Y,D]=j;L([l,h1({icons:{main:Y,mask:D},prefix:a,iconName:s,transform:o,symbol:u,maskId:z,title:n,titleId:t,extra:C,watchable:!0})])}).catch(w)})},c.generateAbstractIcon=function(l){let{children:e,attributes:s,main:n,transform:t,styles:a}=l,o=_2(a);o.length>0&&(s.style=o);let u;return z1(t)&&(u=X("generateAbstractTransformGrouping",{main:n,transform:t,containerWidth:n.width,iconWidth:n.width})),e.push(u||n.icon),{children:e,attributes:s}}}},f6={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=l;return P2({type:"layer"},()=>{c2("beforeDOMElementCreation",{assembler:c,params:l});let s=[];return c(n=>{Array.isArray(n)?n.map(t=>{s=s.concat(t.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...e].join(" ")},children:s}]})}}}},m6={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:s=[],attributes:n={},styles:t={}}=l;return P2({type:"counter",content:c},()=>(c2("beforeDOMElementCreation",{content:c,params:l}),G0({content:c.toString(),title:e,extra:{attributes:n,styles:t,classes:["".concat(f.cssPrefix,"-layers-counter"),...s]}})))}}}},d6={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=T,title:s=null,classes:n=[],attributes:t={},styles:a={}}=l;return P2({type:"text",content:c},()=>(c2("beforeDOMElementCreation",{content:c,params:l}),K1({content:c,transform:i(i({},T),e),title:s,extra:{attributes:t,styles:a,classes:["".concat(f.cssPrefix,"-layers-text"),...n]}})))}}},provides(c){c.generateLayersText=function(l,e){let{title:s,transform:n,extra:t}=e,a=null,o=null;if(p3){let u=parseInt(getComputedStyle(l).fontSize,10),d=l.getBoundingClientRect();a=d.width/u,o=d.height/u}return f.autoA11y&&!s&&(t.attributes["aria-hidden"]="true"),Promise.resolve([l,K1({content:l.innerHTML,width:a,height:o,transform:n,title:s,extra:t,watchable:!0})])}}},p6=new RegExp('"',"ug"),s3=[1105920,1112319],n3=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),V4),Z4),q4),r1=Object.keys(n3).reduce((c,l)=>(c[l.toLowerCase()]=n3[l],c),{}),u6=Object.keys(r1).reduce((c,l)=>{let e=r1[l];return c[l]=e[900]||[...Object.entries(e)][0][1],c},{});function z6(c){let l=c.replace(p6,""),e=b0(l,0),s=e>=s3[0]&&e<=s3[1],n=l.length===2?l[0]===l[1]:!1;return{value:c1(n?l[0]:l),isSecondary:s||n}}function L6(c,l){let e=c.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(l),n=isNaN(s)?"normal":s;return(r1[e]||{})[n]||u6[e]}function t3(c,l){let e="".concat(c0).concat(l.replace(":","-"));return new Promise((s,n)=>{if(c.getAttribute(e)!==null)return s();let a=o2(c.children).filter(L=>L.getAttribute(K2)===l)[0],o=q.getComputedStyle(c,l),u=o.getPropertyValue("font-family"),d=u.match(t0),z=o.getPropertyValue("font-weight"),C=o.getPropertyValue("content");if(a&&!d)return c.removeChild(a),s();if(d&&C!=="none"&&C!==""){let L=o.getPropertyValue("content"),w=L6(u,z),{value:j,isSecondary:Y}=z6(L),D=d[0].startsWith("FontAwesome"),U=M1(w,j),_=U;if(D){let O=_0(j);O.iconName&&O.prefix&&(U=O.iconName,w=O.prefix)}if(U&&!Y&&(!a||a.getAttribute(m1)!==w||a.getAttribute(d1)!==_)){c.setAttribute(e,_),a&&c.removeChild(a);let O=s6(),{extra:l2}=O;l2.attributes[K2]=l,a1(U,w).then(s2=>{let g4=h1(i(i({},O),{},{icons:{main:s2,mask:V3()},prefix:w,iconName:_,extra:l2,watchable:!0})),F2=g.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(F2,c.firstChild):c.appendChild(F2),F2.outerHTML=g4.map(x4=>L2(x4)).join(`
`),c.removeAttribute(e),s()}).catch(n)}else s()}else s()})}function M6(c){return Promise.all([t3(c,"::before"),t3(c,"::after")])}function h6(c){return c.parentNode!==document.head&&!~l0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(K2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function a3(c){if(G)return new Promise((l,e)=>{let s=o2(c.querySelectorAll("*")).filter(h6).map(M6),n=C1.begin("searchPseudoElements");R3(),Promise.all(s).then(()=>{n(),o1(),l()}).catch(()=>{n(),o1(),e()})})}var C6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=a3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:e=g}=l;f.searchPseudoElements&&a3(e)}}},i3=!1,g6={mixout(){return{dom:{unwatch(){R3(),i3=!0}}}},hooks(){return{bootstrap(){c3(s1("mutationObserverCallbacks",{}))},noAuto(){Z0()},watch(c){let{observeMutationsRoot:l}=c;i3?o1():c3(s1("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},o3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((e,s)=>{let n=s.toLowerCase().split("-"),t=n[0],a=n.slice(1).join("-");if(t&&a==="h")return e.flipX=!0,e;if(t&&a==="v")return e.flipY=!0,e;if(a=parseFloat(a),isNaN(a))return e;switch(t){case"grow":e.size=e.size+a;break;case"shrink":e.size=e.size-a;break;case"left":e.x=e.x-a;break;case"right":e.x=e.x+a;break;case"up":e.y=e.y-a;break;case"down":e.y=e.y+a;break;case"rotate":e.rotate=e.rotate+a;break}return e},l)},x6={mixout(){return{parse:{transform:c=>o3(c)}}},hooks(){return{parseNodeAttributes(c,l){let e=l.getAttribute("data-fa-transform");return e&&(c.transform=o3(e)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:e,transform:s,containerWidth:n,iconWidth:t}=l,a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(s.x*32,", ").concat(s.y*32,") "),u="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),d="rotate(".concat(s.rotate," 0 0)"),z={transform:"".concat(o," ").concat(u," ").concat(d)},C={transform:"translate(".concat(t/2*-1," -256)")},L={outer:a,inner:z,path:C};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:i(i({},e.icon.attributes),L.path)}]}]}}}},q2={x:0,y:0,width:"100%",height:"100%"};function r3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function b6(c){return c.tag==="g"?c.children:[c]}var N6={hooks(){return{parseNodeAttributes(c,l){let e=l.getAttribute("data-fa-mask"),s=e?A2(e.split(" ").map(n=>n.trim())):V3();return s.prefix||(s.prefix=$()),c.mask=s,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:e,attributes:s,main:n,mask:t,maskId:a,transform:o}=l,{width:u,icon:d}=n,{width:z,icon:C}=t,L=z0({transform:o,containerWidth:z,iconWidth:u}),w={tag:"rect",attributes:i(i({},q2),{},{fill:"white"})},j=d.children?{children:d.children.map(r3)}:{},Y={tag:"g",attributes:i({},L.inner),children:[r3(i({tag:d.tag,attributes:i(i({},d.attributes),L.path)},j))]},D={tag:"g",attributes:i({},L.outer),children:[Y]},U="mask-".concat(a||p2()),_="clip-".concat(a||p2()),O={tag:"mask",attributes:i(i({},q2),{},{id:U,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,D]},l2={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:b6(C)},O]};return e.push(l2,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(U,")")},q2)}),{children:e,attributes:s}}}},y6={provides(c){let l=!1;q.matchMedia&&(l=q.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let e=[],s={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:i(i({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let t=i(i({},n),{},{attributeName:"opacity"}),a={tag:"circle",attributes:i(i({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||a.children.push({tag:"animate",attributes:i(i({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},t),{},{values:"1;0;1;1;0;1;"})}),e.push(a),e.push({tag:"path",attributes:i(i({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},t),{},{values:"1;0;0;0;0;1;"})}]}),l||e.push({tag:"path",attributes:i(i({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},t),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},v6={hooks(){return{parseNodeAttributes(c,l){let e=l.getAttribute("data-fa-symbol"),s=e===null?!1:e===""?!0:e;return c.symbol=s,c}}}},w6=[h0,r6,f6,m6,d6,C6,g6,x6,N6,y6,v6];V0(w6,{mixoutsTo:k});var S8=k.noAuto,G3=k.config,_8=k.library,j3=k.dom,W3=k.parse,k8=k.findIconDefinition,A8=k.toHtml,q3=k.icon,P8=k.layer,S6=k.text,_6=k.counter;var k6=["*"],A6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},P6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},F6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(e=>l[e]?e:null).filter(e=>e)},x1=new WeakSet,$3="fa-auto-css";function D6(c,l){if(!l.autoAddCss||x1.has(c))return;if(c.getElementById($3)!=null){l.autoAddCss=!1,x1.add(c);return}let e=c.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",$3),e.innerHTML=j3.css();let s=c.head.childNodes,n=null;for(let t=s.length-1;t>-1;t--){let a=s[t],o=a.nodeName.toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=a)}c.head.insertBefore(e,n),l.autoAddCss=!1,x1.add(c)}var O6=c=>c.prefix!==void 0&&c.iconName!==void 0,E6=(c,l)=>O6(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},V6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){G3.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=M2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),T6=(()=>{class c{constructor(){this.definitions={}}addIcons(...e){for(let s of e){s.prefix in this.definitions||(this.definitions[s.prefix]={}),this.definitions[s.prefix][s.iconName]=s;for(let n of s.icon[2])typeof n=="string"&&(this.definitions[s.prefix][n]=s)}}addIconPacks(...e){for(let s of e){let n=Object.keys(s).map(t=>s[t]);this.addIcons(...n)}}getIconDefinition(e,s){return e in this.definitions&&s in this.definitions[e]?this.definitions[e][s]:null}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275prov=M2({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),I6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275dir=O2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[r2]})}}return c})(),U6=(()=>{class c{constructor(e,s){this.renderer=e,this.elementRef=s}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(s){return new(s||c)(B(V2),B(E2))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[r2,b],ngContentSelectors:k6,decls:1,vars:0,template:function(s,n){s&1&&(P1(),F1(0))},encapsulation:2})}}return c})(),S=(()=>{class c{constructor(e,s,n,t,a){this.sanitizer=e,this.config=s,this.iconLibrary=n,this.stackItem=t,this.document=D2(O1),a!=null&&t==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){P6();return}if(e){let s=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(s!=null){let n=this.buildParams();D6(this.document,this.config);let t=q3(s,n);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(t.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let s=E6(e,this.config.defaultPrefix);if("icon"in s)return s;let n=this.iconLibrary.getIconDefinition(s.prefix,s.iconName);return n??(A6(s),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},s=typeof this.transform=="string"?W3.transform(this.transform):this.transform;return{title:this.title,transform:s,classes:F6(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}static{this.\u0275fac=function(s){return new(s||c)(B(E1),B(V6),B(T6),B(I6,8),B(U6,8))}}static{this.\u0275cmp=x({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(s,n){s&2&&(k1("innerHTML",n.renderedIconHTML,h2),T2("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[r2,b],decls:0,vars:0,template:function(s,n){},encapsulation:2})}}return c})();var b1=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=Q({type:c})}static{this.\u0275inj=K({})}}return c})();var y=(()=>{class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=Q({type:c})}static{this.\u0275inj=K({imports:[U2,R2,B2,b1,U2,B2,R2,b1]})}}return c})();var X3={prefix:"fas",iconName:"at",icon:[512,512,[61946],"40","M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32l0 80 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]};var Y3={prefix:"fas",iconName:"laptop-code",icon:[640,512,[],"f5fc","M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 256-64 0 0-256L128 96l0 256-64 0L64 96zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"]};var K3={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]};var Q3={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"]};var J3={prefix:"fas",iconName:"city",icon:[640,512,[127961],"f64f","M480 48c0-26.5-21.5-48-48-48L336 0c-26.5 0-48 21.5-48 48l0 48-64 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72c0-13.3-10.7-24-24-24S64 10.7 64 24l0 72L48 96C21.5 96 0 117.5 0 144l0 96L0 464c0 26.5 21.5 48 48 48l256 0 32 0 96 0 160 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-112 0 0-144zm96 320l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 416l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM560 256c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 176l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32zM112 320l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16zm304-48l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16z"]};var Z3={prefix:"fas",iconName:"map-location-dot",icon:[576,512,["map-marked-alt"],"f5a0","M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]};var c4={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]};var e4={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var l4={prefix:"fas",iconName:"headphones",icon:[512,512,[127911],"f025","M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"]};var B6={prefix:"fas",iconName:"cake-candles",icon:[448,512,[127874,"birthday-cake","cake"],"f1fd","M86.4 5.5L61.8 47.6C58 54.1 56 61.6 56 69.2L56 72c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L105.6 5.5C103.6 2.1 100 0 96 0s-7.6 2.1-9.6 5.5zm128 0L189.8 47.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L233.6 5.5C231.6 2.1 228 0 224 0s-7.6 2.1-9.6 5.5zM317.8 47.6c-3.8 6.5-5.8 14-5.8 21.6l0 2.8c0 22.1 17.9 40 40 40s40-17.9 40-40l0-2.8c0-7.6-2-15-5.8-21.6L361.6 5.5C359.6 2.1 356 0 352 0s-7.6 2.1-9.6 5.5L317.8 47.6zM128 176c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48c-35.3 0-64 28.7-64 64l0 71c8.3 5.2 18.1 9 28.8 9c13.5 0 27.2-6.1 38.4-13.4c5.4-3.5 9.9-7.1 13-9.7c1.5-1.3 2.7-2.4 3.5-3.1c.4-.4 .7-.6 .8-.8l.1-.1s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0c3.1-3.2 7.4-4.9 11.9-4.8s8.6 2.1 11.6 5.4c0 0 0 0 0 0s0 0 0 0l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c3-3.5 7.4-5.4 12-5.4s9 2 12 5.4l.1 .1c.1 .1 .4 .4 .7 .7c.7 .7 1.7 1.7 3.1 3c2.8 2.6 6.8 6.1 11.8 9.5c10.2 7.1 23 13.1 36.3 13.1s26.1-6 36.3-13.1c5-3.5 9-6.9 11.8-9.5c1.4-1.3 2.4-2.3 3.1-3c.3-.3 .6-.6 .7-.7l.1-.1c2.9-3.4 7.1-5.3 11.6-5.4s8.7 1.6 11.9 4.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0l.1 .1c.2 .2 .4 .4 .8 .8c.8 .7 1.9 1.8 3.5 3.1c3.1 2.6 7.5 6.2 13 9.7c11.2 7.3 24.9 13.4 38.4 13.4c10.7 0 20.5-3.9 28.8-9l0-71c0-35.3-28.7-64-64-64l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-64 0 0-48zM448 394.6c-8.5 3.3-18.2 5.4-28.8 5.4c-22.5 0-42.4-9.9-55.8-18.6c-4.1-2.7-7.8-5.4-10.9-7.8c-2.8 2.4-6.1 5-9.8 7.5C329.8 390 310.6 400 288 400s-41.8-10-54.6-18.9c-3.5-2.4-6.7-4.9-9.4-7.2c-2.7 2.3-5.9 4.7-9.4 7.2C201.8 390 182.6 400 160 400s-41.8-10-54.6-18.9c-3.7-2.6-7-5.2-9.8-7.5c-3.1 2.4-6.8 5.1-10.9 7.8C71.2 390.1 51.3 400 28.8 400c-10.6 0-20.3-2.2-28.8-5.4L0 480c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-85.4z"]},s4=B6;var n4={prefix:"fas",iconName:"hourglass",icon:[384,512,[9203,62032,"hourglass-empty"],"f254","M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z"]};var R6={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},t4=R6;var a4={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};var i4={prefix:"fas",iconName:"id-card",icon:[576,512,[62147,"drivers-license"],"f2c2","M0 96l576 0c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm0 32L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM64 405.3c0-29.5 23.9-53.3 53.3-53.3l117.3 0c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7L74.7 416c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16z"]};var o4={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320l-64 0c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]};var r4={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M48 0C21.5 0 0 21.5 0 48L0 464c0 26.5 21.5 48 48 48l96 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 96 0c26.5 0 48-21.5 48-48l0-416c0-26.5-21.5-48-48-48L48 0zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm112-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM80 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM272 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]};var f4={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]};var m4={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function H6(c,l){if(c&1){let e=_1();r(0,"div",9),I2("click",function(){let n=w1(e).$implicit,t=A1();return S1(t.openField(n))}),r(1,"div",10),M(2,"fa-icon",2),m(),r(3,"div",11),M(4,"span",12),m()()}if(c&2){let e=l.$implicit;C2("link",e.link)("highlight",e.highlight),p(2),N("icon",e.icon),p(2),N("innerHTML",e.value,h2)}}var d4=(()=>{class c{constructor(){this.fields=[{icon:Z3,value:"38B Grand Place Louis le S\xE9n\xE9chal"},{icon:J3,value:"62250 MARQUISE"},{icon:Q3,value:"FRANCE"},{icon:s4,value:"17/06/1993"},{icon:X3,value:"clemgournay@gmail.com",link:"mailto:clemgournay@gmail.com"},{icon:e4,value:"+33 7 69 82 93 51",link:"tel:+33 7 69 82 93 51"},{icon:t4,value:"Intend to live near Tokyo by September 2025",highlight:!0}],this.faIdCard=i4}openField(e){e.link&&window.open(e.link,"_blank")}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["panel-identity"]],standalone:!0,features:[b],decls:12,vars:1,consts:[[1,"panel"],[1,"title"],[3,"icon"],[1,"content"],[1,"photo-cont"],[1,"photo"],[1,"info-cont"],[1,"fields"],[1,"field",3,"link","highlight"],[1,"field",3,"click"],[1,"icon"],[1,"value"],[3,"innerHTML"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1),M(2,"fa-icon",2),r(3,"label"),h(4,"Identity"),m()(),r(5,"div",3)(6,"div",4),M(7,"div",5),m(),r(8,"div",6)(9,"div",7),A(10,H6,5,6,"div",8,n2),m()()()()),s&2&&(p(2),N("icon",n.faIdCard),p(8),P(n.fields))},dependencies:[y,S],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.panel[_ngcontent-%COMP%]{width:100%;height:100%;background:#01ca9f1f;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.1)}.panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:10px;padding:0 20px;height:50px;line-height:50px;border-bottom:1px solid rgb(0,92,0);background:#00a4521a;color:#00f7ff;text-transform:uppercase;letter-spacing:4px;font-weight:700}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 50px);overflow:auto}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;overflow:hidden}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]{width:50%;min-width:280px;display:flex;justify-content:center;align-items:center;padding:1rem}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:12vw;height:12vw;max-width:250px;max-height:250px;border-radius:50%;background-image:url("./media/photo-LBSJWSCA.jpg");background-size:cover;background-position:center}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{display:flex;gap:10px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field.link[_ngcontent-%COMP%]{cursor:pointer;color:#00f7ff;text-decoration:underline}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field.link[_ngcontent-%COMP%]:hover{text-decoration:none}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]   .fields[_ngcontent-%COMP%]   .field.highlight[_ngcontent-%COMP%]{color:#00f7ff}@media screen and (max-width: 1780px){.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]{min-width:200px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:10vw;height:10vw}}@media screen and (max-width: 1400px){.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block;overflow:auto}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]{width:100%;padding-bottom:0}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:140px;height:140px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .info-cont[_ngcontent-%COMP%]{width:calc(100% - 140px)}}@media screen and (max-width: 1000px){.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:block}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]{width:100%;padding:40px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .photo-cont[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]{width:200px;height:200px}}']})}}return c})();var p4=(()=>{class c{constructor(){this.index=0,this.delay=.5,this.value=0,this.animated=!1}getValue(){let e=0;return this.animated&&(e=this.value),e}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-progress-bar"]],inputs:{index:"index",delay:"delay",value:"value",animated:"animated"},standalone:!0,features:[b],decls:2,vars:4,consts:[[1,"progress-bar"],[1,"progress"]],template:function(s,n){s&1&&(r(0,"div",0),M(1,"div",1),m()),s&2&&(p(),E("transition-delay",n.index*n.delay+"s")("width",n.getValue()+"%"))},dependencies:[y],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.progress-bar[_ngcontent-%COMP%]{background:#ffffff1a;width:100%;height:10px}.progress-bar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{transition:all 2s ease-out;background:#00f7ff;height:100%}']})}}return c})();var G6=(c,l)=>l.key;function j6(c,l){if(c&1&&(r(0,"div",5)(1,"label"),h(2),m(),M(3,"app-progress-bar",6),m()),c&2){let e=l.$implicit,s=l.$index;p(2),F(e.name),p(),N("index",s)("delay",.2)("value",e.value)("animated",e.animated)}}var u4=(()=>{class c{constructor(){this.skills=[{key:"angular",name:"Angular",value:100,animated:!1},{key:"typescript",name:"Typescript",value:100,animated:!1},{key:"canvas",name:"Canvas",value:95,animated:!1},{key:"three",name:"Three",value:95,animated:!1},{key:"node",name:"Node",value:95,animated:!1},{key:"python",name:"Python",value:85,animated:!1},{key:"react",name:"React/React Native [In progress]",value:85,animated:!1},{key:"vue",name:"Vue/Nuxt",value:80,animated:!1},{key:"php",name:"PHP",value:70,animated:!1},{key:"cpp",name:"C++",value:60,animated:!1},{key:"design",name:"Design",value:60,animated:!1}],this.faGear=a4}ngAfterViewInit(){setTimeout(()=>{for(let e of this.skills)e.animated=!0})}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["panel-technical-skills"]],standalone:!0,features:[b],decls:9,vars:1,consts:[[1,"panel"],[1,"title"],[3,"icon"],[1,"content"],[1,"skills"],[1,"skill"],[3,"index","delay","value","animated"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1),M(2,"fa-icon",2),r(3,"label"),h(4,"Technical Skills"),m()(),r(5,"div",3)(6,"div",4),A(7,j6,4,5,"div",5,G6),m()()()),s&2&&(p(2),N("icon",n.faGear),p(5),P(n.skills))},dependencies:[y,S,p4],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.panel[_ngcontent-%COMP%]{width:100%;height:100%;background:#01ca9f1f;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.1)}.panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:10px;padding:0 20px;height:50px;line-height:50px;border-bottom:1px solid rgb(0,92,0);background:#00a4521a;color:#00f7ff;text-transform:uppercase;letter-spacing:4px;font-weight:700}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 50px);overflow:auto}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:40px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}']})}}return c})();var W6=(c,l)=>l.key;function q6(c,l){if(c&1&&(r(0,"div",5)(1,"div",6),M(2,"fa-icon",2),r(3,"div",7),h(4),m()()()),c&2){let e=l.$implicit;p(2),N("icon",e.icon),p(2),F(e.name)}}var z4=(()=>{class c{constructor(){this.hobbies=[{key:"programming",icon:Y3,name:"Programming"},{key:"piano",icon:f4,name:"Piano"},{key:"mao",icon:l4,name:"MAO"},{key:"drawing",icon:c4,name:"Drawing"}],this.faHourglass=n4}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["panel-hobbies"]],standalone:!0,features:[b],decls:9,vars:1,consts:[[1,"panel"],[1,"title"],[3,"icon"],[1,"content"],[1,"hobbies"],[1,"hobby"],[1,"center"],[1,"name"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1),M(2,"fa-icon",2),r(3,"label"),h(4,"Hobbies"),m()(),r(5,"div",3)(6,"div",4),A(7,q6,5,2,"div",5,W6),m()()()),s&2&&(p(2),N("icon",n.faHourglass),p(5),P(n.hobbies))},dependencies:[y,S],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.panel[_ngcontent-%COMP%]{width:100%;height:100%;background:#01ca9f1f;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.1)}.panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:10px;padding:0 20px;height:50px;line-height:50px;border-bottom:1px solid rgb(0,92,0);background:#00a4521a;color:#00f7ff;text-transform:uppercase;letter-spacing:4px;font-weight:700}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 50px);overflow:auto}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px;display:flex;justify-content:center;align-items:center}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;max-width:400px;margin:auto}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]   .hobby[_ngcontent-%COMP%]{width:12vmin;height:12vmin;max-width:200px;max-height:200px;display:flex;justify-content:center;align-items:center;text-align:center;border:1px solid rgb(6,231,175)}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]   .hobby[_ngcontent-%COMP%]:hover{background:#00f7ff;color:green;text-shadow:none}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]   .hobby[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%]{font-size:5vmin}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]   .hobby[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:18px;text-align:center}@media screen and (max-width: 1200px){.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]{max-width:100%}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]   .hobby[_ngcontent-%COMP%]{width:150px;height:150px}}@media screen and (max-width: 1000px){.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .hobbies[_ngcontent-%COMP%]   .hobby[_ngcontent-%COMP%]{width:150px;height:150px}}']})}}return c})();var L4=(()=>{class c{constructor(){this.index=0,this.delay=.5,this.label="",this.value=50,this.size=150,this.lineWidth=15,this.animated=!1}getFullMaskRotation(){let e=0;return this.animated&&(e=this.value/100*360/2),e}getMaskShimRotation(){let e=0;return this.animated&&(e=this.value/100*360),e}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-radial-chart"]],inputs:{index:"index",delay:"delay",label:"label",value:"value",size:"size",lineWidth:[0,"line-width","lineWidth"],animated:"animated"},standalone:!0,features:[b],decls:14,vars:42,consts:[[1,"chart"],[1,"shape"],[1,"mask","full-mask"],[1,"fill"],[1,"mask"],[1,"fill","shim"],[1,"cutout"],[1,"center"],[1,"label"],[1,"value"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1)(2,"div",2),M(3,"div",3),m(),r(4,"div",4),M(5,"div",3)(6,"div",3)(7,"div",5),m()(),r(8,"div",6)(9,"div",7)(10,"div",8),h(11),m(),r(12,"div",9),h(13),m()()()()),s&2&&(E("width",n.size+"px")("height",n.size+"px"),p(2),E("clip","rect(0px, "+n.size+"px, "+n.size+"px, "+n.size/2+"px)")("transition-delay",n.index*n.delay+"s")("transform","rotate("+n.getFullMaskRotation()+"deg)"),p(),E("clip","rect(0px, "+n.size/2+"px, "+n.size+"px, 0px)")("transition-delay",n.index*n.delay+"s")("transform","rotate("+n.getFullMaskRotation()+"deg)"),p(),E("clip","rect(0px, "+n.size+"px, "+n.size+"px, "+n.size/2+"px)"),p(),E("clip","rect(0px, "+n.size/2+"px, "+n.size+"px, 0px)"),p(),E("clip","rect(0px, "+n.size/2+"px, "+n.size+"px, 0px)")("transition-delay",n.index*n.delay+"s")("transform","rotate("+n.getFullMaskRotation()+"deg)"),p(),E("clip","rect(0px, "+n.size/2+"px, "+n.size+"px, 0px)")("transition-delay",n.index*n.delay+"s")("transform","rotate("+n.getMaskShimRotation()+"deg)"),p(),E("margin-left",n.lineWidth+"px")("margin-top",n.lineWidth+"px")("width",n.size-n.lineWidth*2+"px")("height",n.size-n.lineWidth*2+"px"),p(3),F(n.label),p(2),D1("",n.value,"%"))},dependencies:[y],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.chart[_ngcontent-%COMP%]{position:relative;width:150px;height:150px}.shape[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%], .fill[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%}.shape[_ngcontent-%COMP%], .mask[_ngcontent-%COMP%], .fill[_ngcontent-%COMP%]{position:absolute;background-color:green}.mask[_ngcontent-%COMP%], .fill[_ngcontent-%COMP%]{-webkit-backface-visibility:hidden;transition:transform 1s;border-radius:50%}.fill[_ngcontent-%COMP%]{background-color:#00f7ff}.cutout[_ngcontent-%COMP%]{position:absolute;background-color:#041b00;border-radius:50%;display:flex;justify-content:center;align-items:center;text-align:center}']})}}return c})();var $6=(c,l)=>l.key;function X6(c,l){if(c&1&&(r(0,"div",5),M(1,"app-radial-chart",6),m()),c&2){let e=l.$implicit,s=l.$index;p(),N("index",s)("label",e.name)("value",e.value)("delay",.5)("animated",e.animated)}}var M4=(()=>{class c{constructor(){this.skills=[{key:"leadership",name:"Leadership",value:90,animated:!1},{key:"initiativity",name:"Initativity",value:95,animated:!1},{key:"creativity",name:"Creativity",value:95,animated:!1}],this.faUser=K3}ngAfterViewInit(){setTimeout(()=>{for(let e of this.skills)e.animated=!0})}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["panel-personal-skills"]],standalone:!0,features:[b],decls:9,vars:1,consts:[[1,"panel"],[1,"title"],[3,"icon"],[1,"content"],[1,"skills"],[1,"skill"],[3,"index","label","value","delay","animated"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1),M(2,"fa-icon",2),r(3,"label"),h(4,"Personal Skills"),m()(),r(5,"div",3)(6,"div",4),A(7,X6,2,5,"div",5,$6),m()()()),s&2&&(p(2),N("icon",n.faUser),p(5),P(n.skills))},dependencies:[y,S,L4],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.panel[_ngcontent-%COMP%]{width:100%;height:100%;background:#01ca9f1f;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.1)}.panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:10px;padding:0 20px;height:50px;line-height:50px;border-bottom:1px solid rgb(0,92,0);background:#00a4521a;color:#00f7ff;text-transform:uppercase;letter-spacing:4px;font-weight:700}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 50px);overflow:auto}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px;display:flex;justify-content:center;align-items:center}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{display:flex;gap:20px;flex-wrap:wrap;justify-content:center;align-items:center}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]{display:flex;justify-content:center}@media screen and (max-width: 1400px){.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{overflow:hidden}}']})}}return c})();function Y6(c,l){if(c&1&&(r(0,"div",11)(1,"div",12),h(2),m(),r(3,"div",13),h(4),m(),r(5,"div",14),h(6),m()()),c&2){let e=l.$implicit;p(2),g2("",e.start," - ",e.end,""),p(2),F(e.place),p(2),F(e.type)}}var h4=(()=>{class c{constructor(){this.graduations=[{start:2014,end:2016,place:"ARC Academy Japanese School, Japan",type:"Japanese proficiency test N2"},{start:2013,end:2014,place:"ULCO Calais, France",type:"IT Licence"},{start:2011,end:2013,place:"IUT Calais, France",type:"DUT - 2 years professional IT diploma"},{start:2008,end:2010,place:"Lyc\xE9e Mariette, France",type:"High school diploma in sciences with english course"}],this.faGraduationCap=m4}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["panel-schools"]],standalone:!0,features:[b],decls:18,vars:1,consts:[[1,"panel"],[1,"title"],[3,"icon"],[1,"content"],[1,"table-cont"],[1,"cols"],[1,"col","period-cont"],[1,"col","place-cont"],[1,"col","type-cont"],[1,"scroll"],[1,"table"],[1,"tr"],[1,"td","period-cont"],[1,"td","place-cont"],[1,"td","type-cont"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1),M(2,"fa-icon",2),r(3,"label"),h(4,"Educational Background"),m()(),r(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6),h(9,"Period"),m(),r(10,"div",7),h(11,"School name"),m(),r(12,"div",8),h(13,"Type"),m()(),r(14,"div",9)(15,"div",10),A(16,Y6,7,4,"div",11,n2),m()()()()()),s&2&&(p(2),N("icon",n.faGraduationCap),p(14),P(n.graduations))},dependencies:[y,S],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.panel[_ngcontent-%COMP%]{width:100%;height:100%;background:#01ca9f1f;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.1)}.panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:10px;padding:0 20px;height:50px;line-height:50px;border-bottom:1px solid rgb(0,92,0);background:#00a4521a;color:#00f7ff;text-transform:uppercase;letter-spacing:4px;font-weight:700}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 50px);overflow:auto}.table-cont[_ngcontent-%COMP%]{width:100%;height:100%}.table-cont[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]{display:flex;background:#00f7ff;color:green;text-shadow:none;width:100%;height:50px;align-items:center}.table-cont[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;padding:10px}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]{width:100%;height:calc(100% - 50px);overflow:auto}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%;height:calc(100% - 50px);overflow:auto}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#ffffff1a}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:10px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .period-cont[_ngcontent-%COMP%]{width:150px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .place-cont[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .type-cont[_ngcontent-%COMP%]{width:calc(50% - 75px)}']})}}return c})();function K6(c,l){if(c&1&&(r(0,"div",11)(1,"div",12),h(2),m(),r(3,"div",13),h(4),m(),r(5,"div",14),h(6),m()()),c&2){let e=l.$implicit;p(2),g2("",e.start," - ",e.end,""),p(2),F(e.place),p(2),F(e.type)}}var C4=(()=>{class c{constructor(){this.jobs=[{start:2018,end:2025,place:"GEARWORKS Inc., France",type:"Fullstack Freelance"},{start:2016,end:2018,place:"FASTCODING Inc., Japan",type:"Front-end engineer, Full time"},{start:2014,end:2016,place:"PLATE Inc., Japan",type:"Front-end engineer, Half-time"},{start:2013,end:2013,place:"National Institute of Technology, Sendai, Japan",type:"3 month Internship, Research in IT"}],this.faBuilding=r4}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["panel-jobs"]],standalone:!0,features:[b],decls:18,vars:1,consts:[[1,"panel"],[1,"title"],[3,"icon"],[1,"content"],[1,"table-cont"],[1,"cols"],[1,"col","period-cont"],[1,"col","place-cont"],[1,"col","type-cont"],[1,"scroll"],[1,"table"],[1,"tr"],[1,"td","period-cont"],[1,"td","place-cont"],[1,"td","type-cont"]],template:function(s,n){s&1&&(r(0,"div",0)(1,"div",1),M(2,"fa-icon",2),r(3,"label"),h(4,"Professional Background"),m()(),r(5,"div",3)(6,"div",4)(7,"div",5)(8,"div",6),h(9,"Period"),m(),r(10,"div",7),h(11,"Company name"),m(),r(12,"div",8),h(13,"Type"),m()(),r(14,"div",9)(15,"div",10),A(16,K6,7,4,"div",11,n2),m()()()()()),s&2&&(p(2),N("icon",n.faBuilding),p(14),P(n.jobs))},dependencies:[y,S],styles:['@font-face{font-family:Electrolize;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/electrolize/v18/cIf5Ma1dtE0zSiGSiED7AXEBuI8.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@keyframes _ngcontent-%COMP%_bgScroll{0%{background-position:400px 0px}25%{background-position:800px 0px}75%{background-position:0px 0px}to{background-position:400px 0px}}body[_ngcontent-%COMP%]{font-family:Electrolize;color:#06e7af;text-shadow:0px 0px 10px rgb(6,231,175)}body[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;top:-50px;width:calc(100% + 100px);height:calc(100% + 100px);background:url("./media/tech2-NHQWAZ3U.jpg");animation:_ngcontent-%COMP%_bgScroll 200s linear infinite;filter:blur(10px) hue-rotate(260deg) grayscale(.8) brightness(.6)}body[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{position:fixed;width:100%;height:100%;z-index:1;padding:40px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:none;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;height:8px;background-color:transparent}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:green;border-radius:5px}.panel[_ngcontent-%COMP%]{width:100%;height:100%;background:#01ca9f1f;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,.1)}.panel[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:10px;padding:0 20px;height:50px;line-height:50px;border-bottom:1px solid rgb(0,92,0);background:#00a4521a;color:#00f7ff;text-transform:uppercase;letter-spacing:4px;font-weight:700}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{height:calc(100% - 50px);overflow:auto}.table-cont[_ngcontent-%COMP%]{width:100%;height:100%}.table-cont[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]{display:flex;background:#00f7ff;color:green;text-shadow:none;width:100%;height:50px;align-items:center}.table-cont[_ngcontent-%COMP%]   .cols[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%;padding:10px}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]{width:100%;height:calc(100% - 50px);overflow:auto}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{display:table;table-layout:fixed;width:100%;height:calc(100% - 50px);overflow:auto}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]{display:table-row}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#ffffff1a}.table-cont[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]{display:table-cell;padding:10px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .period-cont[_ngcontent-%COMP%]{width:150px}.panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .place-cont[_ngcontent-%COMP%], .panel[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .type-cont[_ngcontent-%COMP%]{width:calc(50% - 75px)}']})}}return c})();var _5=(()=>{class c{constructor(){this.faCircleUser=o4}static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275cmp=x({type:c,selectors:[["app-dashboard"]],standalone:!0,features:[b],decls:19,vars:1,consts:[[1,"title"],[3,"icon"],[1,"grid-cont"],[1,"grid"],[1,"panel-cont"]],template:function(s,n){s&1&&(r(0,"main")(1,"div",0),M(2,"fa-icon",1),r(3,"h1"),h(4,"Cl\xE9ment Gournay - Fullstack engineer"),m()(),r(5,"div",2)(6,"div",3)(7,"div",4),M(8,"panel-identity"),m(),r(9,"div",4),M(10,"panel-personal-skills"),m(),r(11,"div",4),M(12,"panel-technical-skills"),m(),r(13,"div",4),M(14,"panel-schools"),m(),r(15,"div",4),M(16,"panel-jobs"),m(),r(17,"div",4),M(18,"panel-hobbies"),m()()()()),s&2&&(p(2),N("icon",n.faCircleUser))},dependencies:[y,S,d4,M4,u4,z4,h4,C4],styles:["main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;font-size:20px;height:100px}main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%]{font-size:30px}main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]{width:100%;height:calc(100% - 100px);display:flex;justify-content:center;align-items:center}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:40px;width:100%;height:100%;max-width:3000px;max-height:1000px}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .panel-cont[_ngcontent-%COMP%]{width:calc(33.33333% - 40px);height:calc(50% - 40px)}@media screen and (max-width: 1200px){main[_ngcontent-%COMP%]{height:100%;overflow:auto}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]{display:block;max-width:100%;max-height:100%;height:auto}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{max-width:none;max-height:none;height:auto}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .panel-cont[_ngcontent-%COMP%]{width:calc(50% - 40px);height:400px;margin-bottom:40px}}@media screen and (max-width: 1000px){main[_ngcontent-%COMP%]{height:100%;overflow:auto}main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{height:70px;font-size:12px;justify-content:center}main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:12px}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]{display:block;max-width:none;max-height:none;height:auto;margin-bottom:40px}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]{display:block;max-width:none;max-height:none}main[_ngcontent-%COMP%]   .grid-cont[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .panel-cont[_ngcontent-%COMP%]{width:100%;height:auto}}"]})}}return c})();export{_5 as DashboardComponent};
