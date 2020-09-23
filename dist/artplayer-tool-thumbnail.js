/*!
 * artplayer-tool-thumbnail.js v3.5.15
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2020 Harvey Zack
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ArtplayerToolThumbnail=e()}(this,(function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var n=function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t};var o=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};function i(t,e){return t(e={exports:{}},e.exports),e.exports}var r=i((function(t){function e(n,o){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,o)}t.exports=e}));var a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)},s=i((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}));var u=function(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?o(t):e},c=i((function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e}));function l(){}l.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}};var h=l,f=l;function p(t){return new Promise((function(e){return setTimeout(e,t)}))}function d(t,e,n){return Math.max(Math.min(t,Math.max(e,n)),Math.min(e,n))}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var i=c(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return u(this,n)}}return h.TinyEmitter=f,function(e){a(r,e);var i=m(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,r),(e=i.call(this)).processing=!1,e.option={},e.setup(Object.assign({},r.DEFAULTS,n)),e.video=r.creatVideo(),e.inputChange=e.inputChange.bind(o(e)),e.ondrop=e.ondrop.bind(o(e)),e.option.fileInput.addEventListener("change",e.inputChange),e.option.fileInput.addEventListener("dragover",r.ondragover),e.option.fileInput.addEventListener("drop",r.ondrop),e}return n(r,[{key:"ondrop",value:function(t){t.preventDefault();var e=t.dataTransfer.files[0];this.loadVideo(e)}},{key:"setup",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.option=Object.assign({},this.option,e);var n=this.option,o=n.fileInput,i=n.delay,r=n.number,a=n.width,s=n.height,u=n.column;if(this.errorHandle(o instanceof Element,"The 'fileInput' is not a Element"),"INPUT"!==o.tagName||"file"!==o.type){o.style.position="relative";var c=document.createElement("input");c.type="file",c.style.position="absolute",c.style.width="100%",c.style.height="100%",c.style.left="0",c.style.top="0",c.style.right="0",c.style.bottom="0",c.style.opacity="0",o.appendChild(c),this.option.fileInput=c}return["delay","number","width","height","column"].forEach((function(e){t.errorHandle("number"==typeof t.option[e],"The '".concat(e,"' is not a number"))})),this.option.delay=d(i,10,1e3),this.option.number=d(r,10,1e3),this.option.width=d(a,10,1e3),this.option.height=d(s,10,1e3),this.option.column=d(u,1,1e3),this}},{key:"inputChange",value:function(){var t=this.option.fileInput.files[0];this.loadVideo(t)}},{key:"loadVideo",value:function(t){var e=this,n=this.option.delay;if(t){var o=this.video.canPlayType(t.type);this.errorHandle("maybe"===o||"probably"===o,"Playback of this file format is not supported: ".concat(t.type));var i=URL.createObjectURL(t);this.videoUrl=i,this.file=t,this.emit("file",this.file),this.video.src=i,p(n).then((function(){e.emit("video",e.video)})).catch((function(t){throw e.emit("error",t.message),t}))}}},{key:"start",value:function(){var t=this,e=this.option,n=e.width,o=e.height,i=e.number,r=e.delay;this.density=i/this.video.duration,this.errorHandle(this.file&&this.video,"Please select the video file first"),this.errorHandle(!this.processing,"There is currently a task in progress, please wait a moment..."),this.errorHandle(this.density<=1,"The preview density cannot be greater than 1, but got ".concat(this.density));var a=this.creatScreenshotDate(),s=this.creatCanvas(),u=s.getContext("2d");this.emit("canvas",s);var c,l=a.map((function(e,a){return function(){return t.video.currentTime=e.time,new Promise((function(c){p(r).then((function(){u.drawImage(t.video,e.x,e.y,n,o),s.toBlob((function(e){t.thumbnailUrl&&URL.revokeObjectURL(t.thumbnailUrl),t.thumbnailUrl=URL.createObjectURL(e),t.emit("update",t.thumbnailUrl,(a+1)/i),c()}))})).catch((function(t){throw t}))}))}}));return this.processing=!0,(c=l,c.reduce((function(t,e){return t.then(e)}),Promise.resolve())).then((function(){return p(2*r).then((function(){t.processing=!1,t.emit("done")})).catch((function(e){throw t.processing=!1,t.emit("error",e.message),e}))})).catch((function(e){throw t.processing=!1,t.emit("error",e.message),e}))}},{key:"creatScreenshotDate",value:function(){for(var t=this.option,e=t.number,n=t.width,o=t.height,i=t.column,r=this.video.duration/e,a=[r];a.length<e;){var s=a[a.length-1];a.push(s+r)}return a.map((function(t,e){return{time:t-r/2,x:e%i*n,y:Math.floor(e/i)*o}}))}},{key:"creatCanvas",value:function(){var t=this.option,e=t.number,n=t.width,o=t.height,i=t.column,r=document.createElement("canvas"),a=r.getContext("2d");return r.width=n*i,r.height=Math.ceil(e/i)*o+30,a.fillStyle="black",a.fillRect(0,0,r.width,r.height),a.font="14px Georgia",a.fillStyle="#fff",a.fillText("From: https://artplayer.org/, Number: ".concat(e,", Width: ").concat(n,", Height: ").concat(o,", Column: ").concat(i),10,r.height-11),r}},{key:"download",value:function(){this.errorHandle(this.file&&this.thumbnailUrl,"Download does not seem to be ready, please create preview first"),this.errorHandle(!this.processing,"There is currently a task in progress, please wait a moment...");var t=document.createElement("a"),e="".concat(function(t){var e=t.split(".");return e.pop(),e.join(".")}(this.file.name),".png");return t.download=e,t.href=this.thumbnailUrl,document.body.appendChild(t),t.click(),document.body.removeChild(t),this.emit("download",e),this}},{key:"errorHandle",value:function(t,e){if(!t)throw this.emit("error",e),new Error(e)}},{key:"destroy",value:function(){this.option.fileInput.removeEventListener("change",this.inputChange),this.option.fileInput.removeEventListener("dragover",r.ondragover),this.option.fileInput.removeEventListener("drop",r.ondrop),document.body.removeChild(this.video),this.videoUrl&&URL.revokeObjectURL(this.videoUrl),this.thumbnailUrl&&URL.revokeObjectURL(this.thumbnailUrl),this.emit("destroy")}}],[{key:"ondragover",value:function(t){t.preventDefault()}},{key:"creatVideo",value:function(){var t=document.createElement("video");return t.style.position="absolute",t.style.top="-9999px",t.style.left="-9999px",t.muted=!0,t.controls=!0,document.body.appendChild(t),t}},{key:"DEFAULTS",get:function(){return{delay:300,number:60,width:160,height:90,column:10}}}]),r}(h)}));
