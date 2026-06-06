var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=`finnish_app`;function u(){return{activeProfile:`julia`,profiles:{julia:{name:`Julia`,avatar:`🦊`,chapters:{},vocabulary:{},exercises:{},activity:{}},paul:{name:`Paul`,avatar:`🐱`,chapters:{},vocabulary:{},exercises:{},activity:{}}}}}function d(){return new Date().toISOString().slice(0,10)}function f(e,t,n){let r=e.profiles[t];r.activity||={};let i=d();r.activity[i]||(r.activity[i]={words:0,exercises:0}),r.activity[i][n]=(r.activity[i][n]||0)+1}function p(){try{let e=JSON.parse(localStorage.getItem(l))||u();return m(e),e}catch{return u()}}function m(e){let t=!1;for(let n of Object.keys(e.profiles)){let r=e.profiles[n];r.activity||(r.activity={},t=!0);for(let e of Object.values(r.vocabulary||{}))for(let n of Object.values(e))if(n.lastSeen){let e=n.lastSeen.slice(0,10);r.activity[e]||(r.activity[e]={words:0,exercises:0}),r.activity[e].words=(r.activity[e].words||0)+1,t=!0}for(let e of Object.values(r.exercises||{}))for(let n of Object.values(e))if(n.lastAttempt){let e=n.lastAttempt.slice(0,10);r.activity[e]||(r.activity[e]={words:0,exercises:0}),r.activity[e].exercises=(r.activity[e].exercises||0)+1,t=!0}}if(t)try{localStorage.setItem(l,JSON.stringify(e))}catch{}}function h(e){localStorage.setItem(l,JSON.stringify(e))}function g(){let e=p();return e.profiles[e.activeProfile]}function _(e){let t=p();t.activeProfile=e,h(t)}function v(e,t,n,r=null){let i=p(),a=i.profiles[e];a.exercises[t]||(a.exercises[t]={});let o=a.exercises[t][`ex_${n}`]||{attempts:0};a.exercises[t][`ex_${n}`]={completed:!0,selfChecked:r,attempts:o.attempts+1,lastAttempt:new Date().toISOString()},f(i,e,`exercises`),h(i)}function y(e,t,n,r){let i=p(),a=i.profiles[e];a.vocabulary[t]||(a.vocabulary[t]={});let o=a.vocabulary[t][`w_${n}`]||{correct:0,wrong:0},s=r===`known`;a.vocabulary[t][`w_${n}`]={seen:!0,status:r,correct:o.correct+ +!!s,wrong:o.wrong+ +!s,lastSeen:new Date().toISOString()},f(i,e,`words`),h(i)}function b(e,t,n,r,i=null){let a=p(),o=a.profiles[e];o.vocabTests||={};let s={date:new Date().toISOString().slice(0,10),score:n,total:r,pct:Math.round(n/r*100),category:i};i?(o.vocabTests[t]||(o.vocabTests[t]={}),o.vocabTests[t].categoryResults||(o.vocabTests[t].categoryResults={}),o.vocabTests[t].categoryResults[i]=s):o.vocabTests[t]=s,h(a)}function x(e,t){return p().profiles[e]?.vocabTests?.[t]||null}function S(e,t){return p().profiles[e]?.vocabTests?.[t]?.categoryResults||{}}function C(e,t,n){let r=p().profiles[e].vocabulary[t]||{};return{known:Object.values(r).filter(e=>e.status===`known`).length,seen:Object.values(r).filter(e=>e.seen).length,total:n}}function w(e,t,n){let r=p().profiles[e].vocabulary[t]||{};for(let e=0;e<n.length;e++){let t=r[`w_${e}`];if(!t||t.status!==`known`)return e}return 0}function T(e){let t=p().profiles[e];if(!t)return{};let n=Object.values(t.vocabulary).flatMap(e=>Object.values(e)).filter(e=>e.seen).length,r=Object.values(t.exercises).flatMap(e=>Object.values(e)).filter(e=>e.completed).length,i=Object.values(t.chapters).filter(e=>e.status===`done`).length,a=t.activity||{};d();let o=0,s=new Date;for(;a[s.toISOString().slice(0,10)];)o++,s.setDate(s.getDate()-1);return{totalWords:n,totalExercises:r,totalChapters:i,streak:o,activity:a}}var ee=c(o(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&x(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(x(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!x(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){x(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),c.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function u(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),c.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;c.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function f(e){c.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){c.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){c.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=b(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=b(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=b(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=b(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function p(e){var t,n,r,i,a=2**53,o=-a,c=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,l=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,d=0,f=0,p=!1,g=!1,_=[],v={data:[],errors:[],meta:{}};function b(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function S(){if(v&&r&&(w(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(v.data=v.data.filter(function(e){return!b(e)})),C()){if(v)if(Array.isArray(v.data[0])){for(var t=0;C()&&t<v.data.length;t++)v.data[t].forEach(n);v.data.splice(0,1)}else v.data.forEach(n);function n(t,n){x(e.transformHeader)&&(t=e.transformHeader(t,n)),_.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,u=t[i],u=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(c.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):l.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=_.length?`__parsed_extra`:_[i]:s,u=e.transform?e.transform(u,s):u);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(u)):r[s]=u}return e.header&&(i>_.length?w(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+_.length+` fields but parsed `+i,f+n):i<_.length&&w(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+_.length+` fields but parsed `+i,f+n)),r}var i;v&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(n),i=v.data.length):v.data=n(v.data,0),e.header&&v.meta&&(v.meta.fields=_),f+=i)}function C(){return e.header&&_.length===0}function w(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),v.errors.push(e)}x(e.step)&&(i=e.step,e.step=function(t){v=t,C()?S():(S(),v.data.length!==0&&(d+=t.data.length,e.preview&&d>e.preview?n.abort():(v.data=v.data[0],i(v,u))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?x(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,g=0,_=0,v=(l=void 0,new h({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&b(v.data[y])?_++:(f=v.data[y].length,g+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(g/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<g)&&1.99<g&&(c=m,o=p,u=g)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),v.meta.delimiter=e.delimiter),y(e));return e.preview&&e.header&&c.preview++,t=i,n=new h(c),v=n.parse(t,a,o),S(),p?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,n.abort(),t=x(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){u.streamer._halted?(p=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,n.abort(),v.meta.aborted=!0,x(e.complete)&&e.complete(v),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(m(t)+`([^]*?)`+m(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function m(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function h(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,c=null,l=!1,u=e.quoteChar==null?`"`:e.quoteChar,d=u;if(e.escapeChar!==void 0&&(d=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var f=0,p=!1;this.parse=function(s,h,g){if(typeof s!=`string`)throw Error(`Input must be a string`);var _=s.length,v=t.length,y=n.length,b=r.length,S=x(i),C=[],w=[],T=[],ee=f=0;if(!s)return j();if(o||!1!==o&&s.indexOf(u)===-1){for(var te=s.split(n),E=0;E<te.length;E++){if(T=te[E],f+=T.length,E!==te.length-1)f+=n.length;else if(g)return j();if(!r||T.substring(0,b)!==r){if(S){if(C=[],re(T.split(t)),se(),p)return j()}else re(T.split(t));if(a&&a<=E)return C=C.slice(0,a),j(!0)}}return j()}for(var D=s.indexOf(t,f),O=s.indexOf(n,f),ne=new RegExp(m(d)+m(u),`g`),k=s.indexOf(u,f);;)if(s[f]===u)for(k=f,f++;;){if((k=s.indexOf(u,k+1))===-1)return g||w.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:C.length,index:f}),ae();if(k===_-1)return ae(s.substring(f,k).replace(ne,u));if(u===d&&s[k+1]===d)k++;else if(u===d||k===0||s[k-1]!==d){D!==-1&&D<k+1&&(D=s.indexOf(t,k+1));var A=ie((O=O!==-1&&O<k+1?s.indexOf(n,k+1):O)===-1?D:Math.min(D,O));if(s.substr(k+1+A,v)===t){T.push(s.substring(f,k).replace(ne,u)),s[f=k+1+A+v]!==u&&(k=s.indexOf(u,f)),D=s.indexOf(t,f),O=s.indexOf(n,f);break}if(A=ie(O),s.substring(k+1+A,k+1+A+y)===n){if(T.push(s.substring(f,k).replace(ne,u)),oe(k+1+A+y),D=s.indexOf(t,f),k=s.indexOf(u,f),S&&(se(),p))return j();if(a&&C.length>=a)return j(!0);break}w.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:C.length,index:f}),k++}}else if(r&&T.length===0&&s.substring(f,f+b)===r){if(O===-1)return j();f=O+y,O=s.indexOf(n,f),D=s.indexOf(t,f)}else if(D!==-1&&(D<O||O===-1))T.push(s.substring(f,D)),f=D+v,D=s.indexOf(t,f);else{if(O===-1)break;if(T.push(s.substring(f,O)),oe(O+y),S&&(se(),p))return j();if(a&&C.length>=a)return j(!0)}return ae();function re(e){C.push(e),ee=f}function ie(e){var t=0;return t=e!==-1&&(e=s.substring(k+1,e))&&e.trim()===``?e.length:t}function ae(e){return g||(e===void 0&&(e=s.substring(f)),T.push(e),f=_,re(T),S&&se()),j()}function oe(e){f=e,re(T),T=[],O=s.indexOf(n,f)}function j(r){if(e.header&&!h&&C.length&&!l){var i=C[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=i[n];if(a[r=x(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(c=c===null?{}:c)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),l=!0}return{data:C,errors:w,meta:{delimiter:t,linebreak:n,aborted:p,truncated:!!r,cursor:ee+(h||0),renamedHeaders:c}}}function se(){i(j()),C=[],w=[]}},this.abort=function(){p=!0},this.getCharIndex=function(){return f}}function g(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(x(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else x(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var n=a[e];x(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function v(){throw Error(`Not implemented.`)}function y(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=y(e[t]);return n}function b(e,t){return function(){e.apply(t,arguments)}}function x(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(x(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!x(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=(e=>e.charCodeAt(0)===65279?e.slice(1):e)(n),i=new(r.download?l:d)(r)):!0===n.readable&&x(n.read)&&x(n.on)?i=new f(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new u(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=g,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=x(r.step),r.chunk=x(r.chunk),r.complete=x(r.complete),r.error=x(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(m(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||=e.meta&&e.meta.fields||u,e.fields||=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[],Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=h(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var m=[],g=0;g<d;g++){var _=c?e[g]:g;m.push(t[u][_])}f=m.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=h(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function h(e,t){var r,a;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(a=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,a=!0),r=e.toString().replace(f,c),(a=a||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(r,s.BAD_DELIMITERS)||-1<r.indexOf(i)||r.charAt(0)===` `||r.charAt(r.length-1)===` `)?o+r+o:r)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=h,s.ParserHandle=p,s.NetworkStreamer=l,s.FileStreamer=u,s.StringStreamer=d,s.ReadableStreamStreamer=f,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)x(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(x(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(x(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){x(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(l.prototype=Object.create(c.prototype)).constructor=l,(u.prototype=Object.create(c.prototype)).constructor=u,(d.prototype=Object.create(d.prototype)).constructor=d,(f.prototype=Object.create(c.prototype)).constructor=f,s})}))(),1),te=`2PACX-1vQwqkX44b-HPNysrWI2Qy5AtbUv9DVW8JtDXiFBvoe7lkIbkp-TNP2VjLyli2AUzFFCHZH0HYvcfytH`,E={chapters:`0`,vocabulary:`195278083`,exercises:`1198814770`,grammar:`877359757`};function D(e){return`https://docs.google.com/spreadsheets/d/e/${te}/pub?gid=${e}&single=true&output=csv`}async function O(e){let t=await(await fetch(D(e))).text();return ee.default.parse(t,{header:!0,skipEmptyLines:!0}).data}async function ne(){let[e,t,n,r]=await Promise.all([O(E.chapters),O(E.vocabulary),O(E.exercises),O(E.grammar)]);return{chapters:e,vocabulary:t,exercises:n,grammar:r}}function k(){let e=(location.hash.replace(`#`,``)||`/`).split(`/`).filter(Boolean);return e.length===0?{page:`dashboard`}:e[0]===`chapter`&&e[1]?{page:e[2]||`chapter`,chapterId:e[1],section:e[2]||null}:e[0]===`profile`&&e[1]?{page:`profile`,profileId:e[1]}:{page:`dashboard`}}function A(e){location.hash=e}function re(e){window.addEventListener(`hashchange`,e)}var ie={ch1:{color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},ch2:{color:`#EC4899`,bg:`#FAE9F2`,img:`ch2.png`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`,img:`ch3.png`},ch4:{color:`#10B981`,bg:`#E8F7EE`,img:`ch4.png`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`,img:`ch5.png`}};function ae(e,t,n,r){let i=e[n]?.[t]||{},a=Object.values(i).filter(e=>e.completed||e.seen).length;return r>0?Math.round(a/r*100):0}var oe={ch1:`👋 К концу этой главы ты сможешь поздороваться, представиться и назвать день недели — по-фински. Это твои первые живые слова!`};function j(e,t,n,r,i=[]){let a=g(),o=ie[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},s=ae(a,e.id,`vocabulary`,t.length),c=ae(a,e.id,`exercises`,n.length),l=i.length,u=a.grammarProgress?.[e.id]||{},d=Object.values(u).filter(e=>e===!0).length,f=l>0?Math.round(d/l*100):0,p=Math.round((s+f+c)/3),m=oe[e.id];return`
    <div class="chapter-page">
      <!-- Header -->
      <header class="header">
        <button class="btn-back" id="btn-back">← Все главы</button>
        <div class="header-right">
          <span class="chapter-progress-label">${p}% завершено</span>
        </div>
      </header>

      <!-- Chapter Hero -->
      <div class="chapter-hero" style="background: ${o.bg}">
        <div class="chapter-hero-text">
          <p class="chapter-num" style="color: ${o.color}">Глава ${e.id?.replace(`ch`,``)||``}</p>
          <h1 class="chapter-title">${e.title_fi}</h1>
          <p class="chapter-subtitle">${e.title_ru}</p>
          ${e.description?`<p class="chapter-desc">${e.description}</p>`:``}
        </div>
        <img src="/lets-go-finnish/${o.img}" class="chapter-hero-img" alt="">
      </div>

      ${m?`
      <div class="chapter-hook" style="background: ${o.bg}; border-left: 4px solid ${o.color}">
        ${m}
      </div>`:``}

      <!-- Sections -->
      <div class="sections-grid">

        <!-- Vocabulary -->
        <div class="section-card" id="section-vocabulary">
          <div class="section-icon" style="background: ${o.bg}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="4" width="16" height="20" rx="3" stroke="${o.color}" stroke-width="2"/>
              <path d="M7 9h8M7 13h8M7 17h5" stroke="${o.color}" stroke-width="2" stroke-linecap="round"/>
              <rect x="13" y="10" width="12" height="14" rx="3" fill="${o.bg}" stroke="${o.color}" stroke-width="2"/>
              <path d="M16 14h6M16 17h4" stroke="${o.color}" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="section-info">
            <div class="section-name">Словарь</div>
            <div class="section-meta" id="vocab-meta">загрузка...</div>
            <div class="progress-bar" style="margin-top: 8px">
              <div class="progress-fill" style="width: ${s}%; background: ${o.color}"></div>
            </div>
          </div>
          <button class="section-btn" style="color: ${o.color}; border-color: ${o.color}"
                  data-section="vocabulary">
            ${s===0?`Начать`:s===100?`Повторить`:`Продолжить →`}
          </button>
        </div>

        <!-- Grammar -->
        <div class="section-card" id="section-grammar">
          <div class="section-icon" style="background: ${o.bg}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="10" stroke="${o.color}" stroke-width="2"/>
              <path d="M10 14h8M14 10v8" stroke="${o.color}" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="section-info">
            <div class="section-name">Грамматика</div>
            <div class="section-meta" id="grammar-meta">${l>0?`${d} / ${l} пройдено`:`правила и примеры`}</div>
            <div class="progress-bar" style="margin-top: 8px">
              <div class="progress-fill" id="grammar-progress" style="width: ${f}%; background: ${o.color}"></div>
            </div>
          </div>
          <button class="section-btn" style="color: ${o.color}; border-color: ${o.color}"
                  data-section="grammar">
            ${f===0?`Начать`:f===100?`Повторить`:`Продолжить →`}
          </button>
        </div>

        <!-- Exercises -->
        <div class="section-card" id="section-exercises">
          <div class="section-icon" style="background: ${o.bg}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="3" width="22" height="22" rx="4" stroke="${o.color}" stroke-width="2"/>
              <path d="M9 14l3 3 7-7" stroke="${o.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="section-info">
            <div class="section-name">Упражнения</div>
            <div class="section-meta">${n.length} заданий</div>
            <div class="progress-bar" style="margin-top: 8px">
              <div class="progress-fill" style="width: ${c}%; background: ${o.color}"></div>
            </div>
          </div>
          <button class="section-btn" style="color: ${o.color}; border-color: ${o.color}"
                  data-section="exercises">
            ${c===0?`Начать`:c===100?`Повторить`:`Продолжить →`}
          </button>
        </div>

      </div>
    </div>
  `}function se(e,t,n){document.getElementById(`btn-back`)?.addEventListener(`click`,()=>{A(`/`)});let r=C(n,e,t.length),i=document.getElementById(`vocab-meta`);i&&(i.textContent=`выучено ${r.known} / ${t.length}`),document.querySelectorAll(`.section-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.section;A(`/chapter/${e}/${n}`)})})}var ce={ch1:{color:`#7C3AED`,bg:`#EDE7FB`},ch2:{color:`#EC4899`,bg:`#FAE9F2`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`},ch4:{color:`#10B981`,bg:`#E8F7EE`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`}},M=0,N=[],le=[],P=null,F=null,I=!1,ue=null,L=[],de=null,fe={приветствия:`👋`,числа:`🔢`,"дни недели":`📅`,месяцы:`🗓️`,"времена года":`🍂`,погода:`⛅`,семья:`👨‍👩‍👧‍👦`,одежда:`👕`,цвета:`🎨`,время:`⏰`};function pe(e){let t={};return e.forEach((e,n)=>{let r=e.category||P.id;t[r]||(t[r]=[]),t[r].push({...e,_origIndex:n})}),t}function me(){let e=p(),t=x(e.activeProfile,P.id),n=S(e.activeProfile,P.id),r=Object.keys(n).length>0,i=t&&!t.category?t:null;if(!i&&!r)return`
      <div class="mode-card" id="mode-test">
        <div class="mode-icon" style="background: ${F.bg}">📝</div>
        <div class="mode-info">
          <div class="mode-name">Тест</div>
          <div class="mode-desc">Все слова · случайный порядок</div>
        </div>
        <button class="mode-btn" style="background: ${F.color}">Начать →</button>
      </div>`;let a=``;if(i){let e=Math.floor((Date.now()-new Date(i.date).getTime())/864e5),t=e>=10,n=new Date(i.date).toLocaleDateString(`ru`,{day:`numeric`,month:`short`});a=`
      <div class="test-result-line">
        <span style="font-size:12px;color:#6B7280">Вся глава:</span>
        <span class="test-result-score" style="color: ${i.pct>=80?`var(--success)`:i.pct>=60?`#F59E0B`:`var(--error)`}">${i.pct}%</span>
        <span class="test-result-date">${i.score}/${i.total} · ${n}</span>
      </div>
      ${t?`<div class="test-remind">⏰ Повторить — прошло ${e} дн.</div>`:`<div class="test-remind ok">Повторение через ${10-e} дн.</div>`}`}let o=``;r&&(o=`<div style="margin-top:6px">${Object.entries(n).map(([e,t])=>{let n=t.pct>=80?`var(--success)`:t.pct>=60?`#F59E0B`:`var(--error)`,r=new Date(t.date).toLocaleDateString(`ru`,{day:`numeric`,month:`short`});return`<div class="test-result-line">
        <span style="font-size:12px;color:#6B7280">${e}:</span>
        <span class="test-result-score" style="color:${n}">${t.pct}%</span>
        <span class="test-result-date">${t.score}/${t.total} · ${r}</span>
      </div>`}).join(``)}</div>`);let s=i?.pct>=80?`✅`:`📝`;return`
    <div class="mode-card" id="mode-test">
      <div class="mode-icon" style="background: ${i?.pct>=80?`#F0FDF4`:F.bg}">${s}</div>
      <div class="mode-info">
        <div class="mode-name">Тест</div>
        ${a}
        ${o}
      </div>
      <button class="mode-btn" style="background: ${F.color}">Начать →</button>
    </div>`}function he(){let e=p(),t=e.profiles[e.activeProfile]?.vocabulary[P.id]||{},n=Object.values(t).filter(e=>e.status===`known`).length,r=Object.values(t).filter(e=>e.status===`hard`).length,i=Object.values(t).filter(e=>e.status===`learning`).length,a=N.length-Object.values(t).filter(e=>e.seen).length;return`
    <header class="header">
      <button class="btn-back" id="btn-back-vocab">← ${P.title_fi}</button>
      <span class="vocab-counter">${N.length} слов</span>
    </header>
    <div class="mode-select-screen">
      <h2 class="mode-title">Словарь</h2>
      <div class="vocab-stats-row">
        <div class="vocab-stat known"><span class="vs-num">${n}</span><span class="vs-label">знаю ✓</span></div>
        <div class="vocab-stat learning"><span class="vs-num">${i}</span><span class="vs-label">учу</span></div>
        <div class="vocab-stat hard"><span class="vs-num">${r}</span><span class="vs-label">сложно</span></div>
        <div class="vocab-stat unseen"><span class="vs-num">${a}</span><span class="vs-label">новые</span></div>
      </div>
      <!-- Learning path -->
      <div class="learning-path">
        <div class="path-intro">В этой главе <strong>${N.length} слов</strong></div>
        <div class="path-steps">
          <div class="path-step ${n+i>0?`step-done`:`step-active`}">
            <div class="path-step-num">1</div>
            <div class="path-step-text">
              <div class="path-step-title">Заучи</div>
              <div class="path-step-sub">Пройди флэш-карточки</div>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-step ${n>=Math.ceil(N.length*.8)?`step-done`:n+i>0?`step-active`:`step-locked`}">
            <div class="path-step-num">2</div>
            <div class="path-step-text">
              <div class="path-step-title">Сдай тест</div>
              <div class="path-step-sub">Закрепи результат</div>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div class="path-step ${n>=Math.ceil(N.length*.8)?`step-active`:`step-locked`}">
            <div class="path-step-num">✓</div>
            <div class="path-step-text">
              <div class="path-step-title">Глава освоена</div>
              <div class="path-step-sub">${n} / ${N.length} слов</div>
            </div>
          </div>
        </div>
      </div>

      <div class="mode-cards">
        <div class="mode-card" id="mode-flashcard">
          <div class="mode-icon" style="background: ${F.bg}">🃏</div>
          <div class="mode-info">
            <div class="mode-name">Заучивание</div>
            <div class="mode-desc">Флэш-карточки · продолжить с места остановки</div>
            <div class="learning-progress" style="margin-top: 10px">
              <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px">
                <span>${n+i} выучено</span>
                <span style="color: #999">${N.length} всего</span>
              </div>
              <div class="progress-bar" style="height: 6px">
                <div class="progress-fill" style="width: ${Math.round((n+i)/N.length*100)}%; background: ${F.color}"></div>
              </div>
            </div>
          </div>
          <button class="mode-btn" style="background: ${F.color}">Начать →</button>
        </div>
        ${me()}
        ${r>0?`
        <div class="mode-card" id="mode-hard">
          <div class="mode-icon" style="background: #FEF2F2">🔴</div>
          <div class="mode-info">
            <div class="mode-name">Повторить сложные</div>
            <div class="mode-desc">${r} слов которые вызвали затруднение</div>
          </div>
          <button class="mode-btn" style="background: #EF4444">Повторить →</button>
        </div>`:``}
      </div>
    </div>
  `}function ge(e,t){return P=e,N=t,le=t,P._allWords=t,F=ce[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},`<div class="vocab-page">${he()}</div>`}function _e(e){P=e,P._allWords||=le,F=ce[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},document.getElementById(`btn-back-vocab`)?.addEventListener(`click`,()=>{A(`/chapter/${e.id}`)}),document.getElementById(`mode-flashcard`)?.addEventListener(`click`,()=>ve(`flashcard`)),document.getElementById(`mode-test`)?.addEventListener(`click`,()=>ve(`test`)),document.getElementById(`mode-hard`)?.addEventListener(`click`,()=>ye(!0))}function ve(e){ue=e;let t=pe(le),n=[`числа`,`приветствия`,`дни недели`].filter(e=>t[e]).map(e=>{let n=t[e],r=fe[e]||`📚`;return`
        <div class="category-card" data-category="${e}">
          <div class="cat-icon" style="background: ${F.bg}">${r}</div>
          <div class="cat-info">
            <div class="cat-name">${e}</div>
            <div class="cat-count">${n.length} слов</div>
          </div>
        </div>
      `}).join(``),r=`
    <header class="header">
      <button class="btn-back" id="btn-back-source">← Режимы</button>
    </header>
    <div class="mode-select-screen">
      <h2 class="mode-title">Выбери источник</h2>
      <div class="mode-cards">
        <div class="mode-card" id="source-all">
          <div class="mode-icon" style="background: ${F.bg}">📚</div>
          <div class="mode-info">
            <div class="mode-name">Все слова</div>
            <div class="mode-desc">${le.length} слов · вся глава</div>
          </div>
          <button class="mode-btn" style="background: ${F.color}">Начать →</button>
        </div>
      </div>
      ${n?`
      <h3 style="font-size: 14px; font-weight: 700; margin: 24px 0 12px; padding: 0 40px">Обрати внимание на эти категории</h3>
      <div class="category-grid-row" id="category-grid" style="padding: 0 40px">
        ${n}
      </div>`:``}
    </div>
  `;document.querySelector(`.vocab-page`).innerHTML=r,document.getElementById(`btn-back-source`)?.addEventListener(`click`,()=>{document.querySelector(`.vocab-page`).innerHTML=he(),_e(P)}),document.getElementById(`source-all`)?.addEventListener(`click`,()=>{N=le,de=null,ue===`flashcard`?ye(!1):Ee()}),document.querySelectorAll(`.category-card`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.dataset.category;N=t[n]||[],de=n,ue===`flashcard`?ye(!1):Ee()})})}function ye(e=!1){let t=p(),n=t.activeProfile;if(e){let e=t.profiles[n]?.vocabulary[P.id]||{},r=Object.entries(e).filter(([,e])=>e.status===`hard`).map(([e])=>parseInt(e.replace(`w_`,``)));M=0,N=r.map(e=>({...N[e],_origIndex:e}))}else N=[...N].map((e,t)=>({...e,_origIndex:t})),M=w(n,P.id,N);I=!1,be()}function be(){let e=N[M];if(!e){Ce();return}let t=p(),n=t.profiles[t.activeProfile]?.vocabulary[P.id]||{};n[`w_${e._origIndex??M}`]?.status,document.querySelector(`.vocab-page`).innerHTML=`
    <header class="header">
      <button class="btn-back" id="btn-back-fc">← Режимы</button>
      <span class="vocab-counter" id="vocab-counter">${M+1} / ${N.length}</span>
    </header>

    <div class="ex-progress-bar">
      <div class="ex-progress-fill" style="width: ${M/N.length*100}%; background: ${F.color}"></div>
    </div>

    <div class="vocab-container">
      <div class="flashcard" id="flashcard" style="--card-color: ${F.color}; --card-bg: ${F.bg}">
        <div class="flashcard-inner" id="flashcard-inner">
          <div class="flashcard-front">
            ${e.tag===`puhekieli`?`<span class="puhekieli-badge">🗣️ puhekieli</span>`:``}
            <span class="card-lang">финский</span>
            <div class="card-word">${e.finnish}</div>
            <div class="card-audio-row">
              <button class="card-audio-btn" id="btn-audio-front" title="Послушать произношение">🔊</button>
            </div>
            <span class="card-hint">нажми чтобы перевернуть</span>
          </div>
          <div class="flashcard-back">
            ${e.tag===`puhekieli`?`<span class="puhekieli-badge">🗣️ puhekieli</span>`:``}
            <span class="card-lang">перевод</span>
            <div class="card-word">${e.russian}</div>
            ${e.english?`<div class="card-word-en">${e.english}</div>`:``}
            <div class="card-audio-row">
              <button class="card-audio-btn" id="btn-audio-back" title="Послушать произношение">🔊</button>
              <button class="card-mic-btn" id="btn-mic" title="Произнеси и проверь">🎤 Произнеси</button>
            </div>
            <div class="card-mic-result" id="mic-result" style="display:none"></div>
          </div>
        </div>
      </div>

      <div class="vocab-actions" id="vocab-actions" style="display: none">
        <button class="vocab-btn vocab-hard" id="btn-hard">😕 Сложно</button>
        <button class="vocab-btn vocab-ok"   id="btn-ok">😐 Нормально</button>
        <button class="vocab-btn vocab-know" id="btn-know">✓ Знаю!</button>
      </div>

      <div class="vocab-progress-dots">
        ${N.map((e,t)=>{let r=n[`w_${e._origIndex??t}`]?.status;return`<span class="vocab-dot ${r===`known`?`dot-known`:r===`hard`?`dot-hard`:r===`learning`?`dot-learning`:``} ${t===M?`active`:``}"></span>`}).join(``)}
      </div>
    </div>
  `,xe()}function xe(){document.getElementById(`btn-back-fc`)?.addEventListener(`click`,()=>{let e=p(),t=N[M];if(t){let n=t._origIndex??M;e.profiles[e.activeProfile]?.vocabulary[P.id]?.[`w_${n}`]?.seen||y(e.activeProfile,P.id,n,`learning`)}N=P._allWords||N,document.querySelector(`.vocab-page`).innerHTML=he(),_e(P)});let e=document.getElementById(`flashcard`),t=document.getElementById(`flashcard-inner`),n=N[M];e?.addEventListener(`click`,e=>{e.target.closest(`.card-audio-btn`)||e.target.closest(`.card-mic-btn`)||(I=!I,t.classList.toggle(`flipped`,I),document.getElementById(`vocab-actions`).style.display=I?`flex`:`none`)});function r(e){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang=`fi-FI`,t.rate=.85,window.speechSynthesis.speak(t)}document.getElementById(`btn-audio-front`)?.addEventListener(`click`,e=>{e.stopPropagation(),r(n.finnish)}),document.getElementById(`btn-audio-back`)?.addEventListener(`click`,e=>{e.stopPropagation(),r(n.finnish)}),document.getElementById(`btn-mic`)?.addEventListener(`click`,e=>{e.stopPropagation();let t=document.getElementById(`btn-mic`),r=document.getElementById(`mic-result`),i=window.SpeechRecognition||window.webkitSpeechRecognition;if(!i){r.style.display=`block`,r.innerHTML=`<span style="color:#F59E0B">⚠️ Ваш браузер не поддерживает распознавание речи</span>`;return}let a=new i;a.lang=`fi-FI`,a.interimResults=!1,a.maxAlternatives=5;function o(){t.textContent=`🎤 Попробуй ещё раз`,t.disabled=!1}t.textContent=`🔴 Слушаю...`,t.disabled=!0,r.style.display=`none`;let s=setTimeout(()=>{try{a.stop()}catch{}r.style.display=`block`,r.innerHTML=`<span style="color:#F59E0B">⚠️ Не услышал ничего, попробуй ещё раз</span>`,o()},7e3);a.onresult=e=>{clearTimeout(s);let i=Array.from(e.results[0]).map(e=>e.transcript.toLowerCase().trim()),a=n.finnish.toLowerCase().trim(),c=i.some(e=>e===a||e.replace(/[.,!?-]/g,``)===a.replace(/[.,!?-]/g,``));r.style.display=`block`,c?(r.innerHTML=`<span style="color:#10B981">✅ Отлично! Правильно произнесено!</span>`,t.textContent=`🎤 Произнеси`):(r.innerHTML=`<span style="color:#EF4444">❌ Услышал: «${i[0]}»<br>Ожидал: «${n.finnish}»</span>`,o()),t.disabled=!1},a.onerror=e=>{clearTimeout(s),r.style.display=`block`,r.innerHTML=`<span style="color:#F59E0B">${e.error===`no-speech`?`⚠️ Ничего не услышал — говори громче!`:`⚠️ Не удалось распознать, попробуй ещё раз`}</span>`,o()},a.onend=()=>{clearTimeout(s),t.disabled&&o()},a.start()}),document.getElementById(`btn-hard`)?.addEventListener(`click`,()=>Se(`hard`)),document.getElementById(`btn-ok`)?.addEventListener(`click`,()=>Se(`learning`)),document.getElementById(`btn-know`)?.addEventListener(`click`,()=>Se(`known`))}function Se(e){let t=p(),n=N[M]._origIndex??M;if(y(t.activeProfile,P.id,n,e),M++,M>=N.length){Ce();return}I=!1,be()}function Ce(){let e=p(),t=e.profiles[e.activeProfile]?.vocabulary[P.id]||{},n=Object.values(t).filter(e=>e.status===`known`).length;document.querySelector(`.vocab-container`)?.parentElement?.querySelector(`.vocab-container`),document.querySelector(`.vocab-page`).innerHTML=`
    <header class="header">
      <button class="btn-back" id="btn-complete-back">← Режимы</button>
    </header>
    <div class="complete-screen">
      <div class="complete-emoji">🎉</div>
      <h2>Раунд завершён!</h2>
      <p style="color: #6B7280; margin-top: 8px">Знаю: <strong style="color: var(--success)">${n}</strong> из ${N.length} слов</p>
      <div style="background: ${F.bg}; padding: 14px 18px; border-radius: 10px; margin-top: 18px; max-width: 380px; font-size: 14px; line-height: 1.5">
        🗣️ <strong>Скажи вслух прямо сейчас:</strong> произнеси 3 слова из этого раунда. Язык запоминается ртом, а не глазами!
      </div>
      <div style="display:flex; gap:12px; margin-top:24px; justify-content:center">
        <button class="btn-complete" style="background: ${F.color}" id="btn-repeat">Ещё раз</button>
        <button class="btn-complete" style="background: white; color: ${F.color}; border: 2px solid ${F.color}" id="btn-to-chapter-v">К главе</button>
      </div>
    </div>
  `,document.getElementById(`btn-complete-back`)?.addEventListener(`click`,()=>{N=P._allWords||N,document.querySelector(`.vocab-page`).innerHTML=he(),_e(P)}),document.getElementById(`btn-repeat`)?.addEventListener(`click`,()=>ye(!1)),document.getElementById(`btn-to-chapter-v`)?.addEventListener(`click`,()=>A(`/chapter/${P.id}`))}var we=0,Te=0;function Ee(){we=0,Te=0,L=[...P._allWords||N].sort(()=>Math.random()-.5),De()}function De(){if(we>=L.length){ke();return}let e=L[we],t=[e,...(P._allWords||N).filter(t=>t.finnish!==e.finnish).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);document.querySelector(`.vocab-page`).innerHTML=`
    <header class="header">
      <button class="btn-back" id="btn-back-test">← Режимы</button>
      <span class="vocab-counter">${we+1} / ${L.length} · ✓ ${Te}</span>
    </header>
    <div class="ex-progress-bar">
      <div class="ex-progress-fill" style="width: ${we/L.length*100}%; background: ${F.color}"></div>
    </div>
    <div class="vocab-container" style="max-width: 560px; margin: 0 auto">
      <div class="test-question">
        <div class="test-word-label">финский</div>
        <div class="test-word">${e.finnish}</div>
        ${e.tag===`puhekieli`?`<span class="puhekieli-badge" style="position:static; margin-top:8px">🗣️ puhekieli</span>`:``}
      </div>
      <div class="test-options" id="test-options">
        ${t.map((t,n)=>`
          <button class="test-option" data-correct="${t.finnish===e.finnish}" data-finnish="${t.finnish}">
            <span class="ex-option-letter">${`ABCD`[n]}</span>
            <span>${t.russian}</span>
          </button>
        `).join(``)}
      </div>
      <div class="ex-feedback" id="test-feedback" style="display:none"></div>
    </div>
  `,document.getElementById(`btn-back-test`)?.addEventListener(`click`,()=>{N=P._allWords||N,document.querySelector(`.vocab-page`).innerHTML=he(),_e(P)}),Oe(e)}function Oe(e){let t=!1;document.querySelectorAll(`.test-option`).forEach(n=>{n.addEventListener(`click`,()=>{if(t)return;t=!0;let r=n.dataset.correct===`true`;r&&Te++,document.querySelectorAll(`.test-option`).forEach(e=>{e.dataset.correct===`true`?e.classList.add(`correct`):e===n&&!r&&e.classList.add(`wrong`),e.disabled=!0});let i=document.getElementById(`test-feedback`);i.style.display=`flex`,i.innerHTML=r?`<div class="feedback-correct" style="border-color: ${F.color}">✓ Правильно!</div>
           <button class="ex-next-btn" id="btn-next-test" style="background: ${F.color}">Дальше →</button>`:`<div class="feedback-wrong">✗ Правильно: <strong>${e.russian}</strong></div>
           <button class="ex-next-btn" id="btn-next-test" style="background: ${F.color}">Дальше →</button>`,i.style.flexDirection=`column`,i.style.gap=`10px`,document.getElementById(`btn-next-test`)?.addEventListener(`click`,()=>{we++,De()})})})}function ke(){b(p().activeProfile,P.id,Te,L.length,de);let e=Math.round(Te/L.length*100),t=e>=80?`🏆`:e>=60?`👍`:`💪`,n=new Date;n.setDate(n.getDate()+10);let r=n.toLocaleDateString(`ru`,{day:`numeric`,month:`short`}),i=de?`Тест по ${de}`:`Тест`;document.querySelector(`.vocab-page`).innerHTML=`
    <header class="header">
      <button class="btn-back" id="btn-test-done">← Режимы</button>
    </header>
    <div class="complete-screen">
      <div class="complete-emoji">${t}</div>
      <h2>Тест завершён!</h2>
      <p style="color: #6B7280; margin-top: 8px">${i}: <strong style="color: ${F.color}">${Te} / ${L.length}</strong> (${e}%)</p>
      <div class="test-completion-info" style="background: ${F.bg}; padding: 16px; border-radius: 8px; margin-top: 16px; text-align: center">
        <div style="font-size: 12px; color: #6B7280; margin-bottom: 4px">Следующее повторение</div>
        <div style="font-size: 16px; font-weight: 600; color: ${F.color}">${r}</div>
      </div>
      <div style="display:flex; gap:12px; margin-top:24px; justify-content:center">
        <button class="btn-complete" style="background: ${F.color}" id="btn-retest">Ещё раз</button>
        <button class="btn-complete" style="background: white; color: ${F.color}; border: 2px solid ${F.color}" id="btn-to-chapter-t">К главе</button>
      </div>
    </div>
  `,document.getElementById(`btn-test-done`)?.addEventListener(`click`,()=>{N=P._allWords||N,document.querySelector(`.vocab-page`).innerHTML=he(),_e(P)}),document.getElementById(`btn-retest`)?.addEventListener(`click`,Ee),document.getElementById(`btn-to-chapter-t`)?.addEventListener(`click`,()=>A(`/chapter/${P.id}`))}var Ae={ch1:{color:`#7C3AED`,bg:`#EDE7FB`},ch2:{color:`#EC4899`,bg:`#FAE9F2`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`},ch4:{color:`#10B981`,bg:`#E8F7EE`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`}},je={multiple_choice:`☑️ Выбери правильный`,fill_blank:`✏️ Заполни пропуск`,self_check:`👁️ Самопроверка`,matching:`🔗 Соедини пары`,vowel_harmony:`🔤 Гармония гласных`},R=[],z=0,Me=null,B=null,Ne=!1;function Pe(e,t){return Me=e,R=t,z=0,Ne=!1,B=Ae[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},R.length?`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="btn-back-ex">← ${e.title_fi}</button>
      </header>
      <div class="mode-select-screen">
        <h2 class="mode-title">Упражнения</h2>
        <div class="mode-cards">
          <div class="mode-card" id="ex-start-sheet">
            <div class="mode-icon" style="background:${B.bg}">📐</div>
            <div class="mode-info">
              <div class="mode-name">Задания по теме</div>
              <div class="mode-desc">${R.length} упражнений · грамматика и лексика</div>
            </div>
            <button class="mode-btn" style="background:${B.color}">Начать →</button>
          </div>
          <div class="mode-card" id="ex-vocab-drills">
            <div class="mode-icon" style="background:${B.bg}">📝</div>
            <div class="mode-info">
              <div class="mode-name">Отработка словаря</div>
              <div class="mode-desc">Ввод · мэтч · drag&drop · произношение</div>
            </div>
            <button class="mode-btn" style="background:${B.color}">Начать →</button>
          </div>
          <div class="mode-card" style="opacity:0.45;pointer-events:none">
            <div class="mode-icon" style="background:${B.bg}">📖</div>
            <div class="mode-info">
              <div class="mode-name">Чтение</div>
              <div class="mode-desc">Скоро</div>
            </div>
          </div>
          <div class="mode-card" style="opacity:0.45;pointer-events:none">
            <div class="mode-icon" style="background:${B.bg}">🎧</div>
            <div class="mode-info">
              <div class="mode-name">Аудирование</div>
              <div class="mode-desc">Скоро</div>
            </div>
          </div>
          <div class="mode-card" style="opacity:0.45;pointer-events:none">
            <div class="mode-icon" style="background:${B.bg}">🎤</div>
            <div class="mode-info">
              <div class="mode-name">Говорение</div>
              <div class="mode-desc">Скоро</div>
            </div>
          </div>
          <div class="mode-card" style="opacity:0.45;pointer-events:none">
            <div class="mode-icon" style="background:${B.bg}">✍️</div>
            <div class="mode-info">
              <div class="mode-name">Письмо</div>
              <div class="mode-desc">Скоро</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `:`
      <div class="ex-page">
        <header class="header">
          <button class="btn-back" id="btn-back-ex">← ${e.title_fi}</button>
        </header>
        <div class="mode-select-screen" style="padding-top:24px">
          <h2 class="mode-title">Упражнения</h2>
          <div class="mode-cards">
            <div class="mode-card" id="ex-vocab-drills">
              <div class="mode-icon" style="background:${B.bg}">📝</div>
              <div class="mode-info">
                <div class="mode-name">Отработка словаря</div>
                <div class="mode-desc">Ввод · мэтч · drag&drop · произношение</div>
              </div>
              <button class="mode-btn" style="background:${B.color}">Начать →</button>
            </div>
            <div class="mode-card" style="opacity:0.5">
              <div class="mode-icon" style="background:${B.bg}">📐</div>
              <div class="mode-info">
                <div class="mode-name">Грамматика</div>
                <div class="mode-desc">Скоро</div>
              </div>
            </div>
            <div class="mode-card" style="opacity:0.5">
              <div class="mode-icon" style="background:${B.bg}">📖</div>
              <div class="mode-info">
                <div class="mode-name">Чтение</div>
                <div class="mode-desc">Скоро</div>
              </div>
            </div>
          </div>
        </div>
      </div>`}function Fe(e){return`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="btn-back-ex">← Упражнения</button>
        <span class="ex-counter" id="ex-counter">${z+1} / ${R.length}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" id="ex-progress-fill"
             style="width: ${Ie(0)}%; background: ${B.color}"></div>
      </div>
      <div class="ex-container" id="ex-container">
        ${Re(R[0],0)}
      </div>
    </div>
  `}function Ie(e){return Math.round(e/R.length*100)}function Le(e){return e.map(e=>({v:e,sort:Math.random()})).sort((e,t)=>e.sort-t.sort).map(({v:e})=>e)}function Re(e,t){let n=e.type||`multiple_choice`,r=je[n]||n,i=[e.option_a,e.option_b,e.option_c,e.option_d].filter(Boolean),a=`abcd`.indexOf((e.correct||`a`).toLowerCase()),o=i[a]||i[0],s=n===`self_check`?i:Le(i.map((e,t)=>({text:e,isCorrect:t===a})));return n===`self_check`?`
      <div class="ex-card" data-type="${n}">
        <div class="ex-type-badge" style="background: ${B.bg}; color: ${B.color}">${r}</div>
        <div class="ex-question">${e.question}</div>
        <textarea class="ex-textarea" placeholder="Напиши свой ответ..."></textarea>
        <button class="ex-show-answer" id="btn-show-answer"
                style="border-color: ${B.color}; color: ${B.color}">
          Показать ответ
        </button>
        <div class="ex-answer-reveal" id="answer-reveal" style="display:none">
          <div class="ex-answer-text">${e.option_b||e.explanation||``}</div>
          <p style="color: #6B7280; font-size: 13px; margin-top: 8px">Как оцениваешь свой ответ?</p>
          <div class="self-check-btns">
            <button class="self-btn self-wrong" data-result="wrong">😕 Неверно</button>
            <button class="self-btn self-close" data-result="close">~ Близко</button>
            <button class="self-btn self-right" data-result="right"
                    style="background: ${B.color}; color: white">✓ Верно</button>
          </div>
        </div>
      </div>
    `:`
    <div class="ex-card" data-type="${n}" data-correct="${o}">
      <div class="ex-type-badge" style="background: ${B.bg}; color: ${B.color}">${r}</div>
      <div class="ex-question">${e.question}</div>
      <div class="ex-options" id="ex-options">
        ${s.map((e,t)=>`
          <button class="ex-option" data-correct="${e.isCorrect}" data-value="${e.text}">
            <span class="ex-option-letter">${`ABCD`[t]}</span>
            <span>${e.text}</span>
          </button>
        `).join(``)}
      </div>
      <div class="ex-feedback" id="ex-feedback" style="display:none"></div>
    </div>
  `}function ze(e){Me=e,B=Ae[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},document.getElementById(`btn-back-ex`)?.addEventListener(`click`,()=>{A(`/chapter/${e.id}`)}),document.getElementById(`ex-start-sheet`)?.addEventListener(`click`,()=>{z=0,Ne=!1,document.querySelector(`.ex-page`).outerHTML,document.querySelector(`#app`).innerHTML=Fe(e),document.getElementById(`btn-back-ex`)?.addEventListener(`click`,()=>A(`/chapter/${e.id}/exercises`)),Be()}),document.getElementById(`ex-vocab-drills`)?.addEventListener(`click`,()=>{A(`/chapter/${e.id}/vocab-exercises`)})}function Be(){let e=R[z];e&&(Ne=!1,document.getElementById(`btn-show-answer`)?.addEventListener(`click`,()=>{document.getElementById(`answer-reveal`).style.display=`block`,document.getElementById(`btn-show-answer`).style.display=`none`}),document.querySelectorAll(`.self-btn`).forEach(e=>{e.addEventListener(`click`,()=>{e.dataset.result,v(p().activeProfile,Me.id,z,e.dataset.result),Ve()})}),document.querySelectorAll(`.ex-option`).forEach(t=>{t.addEventListener(`click`,()=>{if(Ne)return;Ne=!0;let n=t.dataset.correct===`true`,r=document.querySelector(`.ex-card`).dataset.correct;document.querySelectorAll(`.ex-option`).forEach(e=>{e.dataset.correct===`true`?e.classList.add(`correct`):e===t&&!n&&e.classList.add(`wrong`),e.disabled=!0});let i=document.getElementById(`ex-feedback`);i.style.display=`block`,i.innerHTML=n?`<div class="feedback-correct" style="border-color: ${B.color}">
             ✓ Правильно! ${e.explanation?`<span>${e.explanation}</span>`:``}
           </div>
           <button class="ex-next-btn" id="btn-next" style="background: ${B.color}">
             ${z+1<R.length?`Следующее →`:`Завершить 🎉`}
           </button>`:`<div class="feedback-wrong">
             ✗ Правильный ответ: <strong>${r}</strong>
             ${e.explanation?`<br><span>${e.explanation}</span>`:``}
           </div>
           <button class="ex-next-btn" id="btn-next" style="background: ${B.color}">
             ${z+1<R.length?`Следующее →`:`Завершить 🎉`}
           </button>`,v(p().activeProfile,Me.id,z,n?`right`:`wrong`),document.getElementById(`btn-next`)?.addEventListener(`click`,Ve)})}))}function Ve(){if(z++,z>=R.length){He();return}let e=document.getElementById(`ex-container`);e.innerHTML=Re(R[z],z),document.getElementById(`ex-counter`).textContent=`${z+1} / ${R.length}`,document.getElementById(`ex-progress-fill`).style.width=`${Ie(z)}%`,Be()}function He(){let e=document.getElementById(`ex-container`);e.innerHTML=`
    <div class="complete-screen">
      <div class="complete-emoji">🏆</div>
      <h2>Упражнения завершены!</h2>
      <p style="color: #6B7280; margin-top: 8px">${R.length} заданий выполнено</p>
      <button class="btn-complete" style="background: ${B.color}" id="btn-to-chapter-ex">
        Вернуться к главе →
      </button>
    </div>
  `,document.getElementById(`btn-to-chapter-ex`)?.addEventListener(`click`,()=>{A(`/chapter/${Me.id}`)})}var Ue={tervehtimiset:[{q:`Как поздороваться вечером`,a:`Iltaa`},{q:`Как сказать «Добро пожаловать»`,a:`Tervetuloa`},{q:`Как ответить на «Kiitos»`,a:`Ei kestä`},{q:`Как сказать «Ничего страшного»`,a:`Ei se mitään`},{q:`Как спросить «Как дела»`,a:`Mitä kuuluu`},{q:`Как сказать «Спокойной ночи»`,a:`Hyvää yötä`},{q:`Как сказать «До свидания» (официально)`,a:`Näkemiin`},{q:`Как сказать «Увидимся» (в разговоре)`,a:`Nähdään`},{q:`Как сказать «Пока пока» (разговорное)`,a:`Moi moi / Hei hei / Moikka`},{q:`Как попросить прощения`,a:`Anteeksi`},{q:`Как ответить на «Mitä kuuluu»`,a:`Ihan hyvää / Kiitos hyvää`}],tutustuminen:[{q:`Как сказать «Меня зовут Анна»`,a:`Mun nimi on Anna / Minun nimeni on Anna`},{q:`Как спросить «Откуда ты» по-разговорному`,a:`Mistä oot kotoisin`},{q:`Как сказать «Я из Финляндии»`,a:`Olen Suomesta`},{q:`Как сказать «Мне 28 лет»`,a:`Olen 28-vuotias`},{q:`Как сказать «Не понимаю»`,a:`En ymmärrä`},{q:`Как попросить говорить медленнее`,a:`Voitko puhua hitaammin`},{q:`Как сказать «Приятно познакомиться»`,a:`Hauska tutustua`},{q:`Как спросить «Говоришь по-английски» (вопрос)`,a:`Puhutko englantia`},{q:`Как спросить «Как тебя зовут» по-разговорному (вопрос)`,a:`Mikä sun nimi on`},{q:`Как сказать «Я из России»`,a:`Olen Venäjältä`},{q:`Как сказать «Мне нужна помощь»`,a:`Tarvitsen apua`},{q:`Как спросить «Тебе нужна помощь?» (вопрос)`,a:`Tarvitsetko apua`},{q:`Как спросить «Где ты живёшь?» (вопрос)`,a:`Missä asut`},{q:`Как спросить «Что случилось?» (вопрос)`,a:`Mitä on tapahtunut / Mitä tapahtui`},{q:`Как спросить «Как это пишется?» (вопрос)`,a:`Miten tämä kirjoitetaan`}],lauserakenne:[{q:`Как спросить «Что это» (вопрос)`,a:`Mikä tämä on`},{q:`Как сказать «Это книга»`,a:`Se on kirja`},{q:`Как сказать «Это хороший автобус»`,a:`Se on hyvä bussi`},{q:`Как сказать «Эта машина плохая»`,a:`Tämä auto on huono`},{q:`Как сказать «Это отель»`,a:`Se on hotelli`},{q:`Как спросить «Это хорошая книга?» (вопрос)`,a:`Onko se hyvä kirja`},{q:`Как спросить «Кто это?» (вопрос)`,a:`Kuka tämä on`}],persoonapronominit:[{q:`Как сказать «Вы финны»`,a:`Te olette suomalaisia / Te ootte suomalaisia`},{q:`Как сказать «Я студентка»`,a:`Minä olen opiskelija / Mä oon opiskelija`},{q:`Как сказать «Он дома»`,a:`Hän on kotona / Se on kotona`},{q:`Как сказать «Они здесь»`,a:`He ovat täällä / Ne on täällä`},{q:`Как сказать «Ты готова»`,a:`Sinä olet valmis / Sä oot valmis`},{q:`Как спросить «Ты готова?» (вопрос)`,a:`Oletko sinä valmis / Ootko sä valmis`},{q:`Как сказать «Мы учимся»`,a:`Me opiskelemme / Me opiskellaan`}],verbit:[{q:`Как сказать «Я живу в Хельсинки»`,a:`Asun Helsingissä / Mä asun Helsingissä`},{q:`Как спросить «Где ты живёшь?» (вопрос)`,a:`Missä asut`},{q:`Как сказать «Она живёт в Тампере»`,a:`Hän asuu Tampereella / Se asuu Tampereella`},{q:`Как сказать «Мы живём в Финляндии»`,a:`Me asumme Suomessa / Me asutaan Suomessa`},{q:`Как сказать «Я говорю по-фински»`,a:`Puhun suomea / Mä puhun suomea`},{q:`Как спросить «Ты говоришь по-русски?» (вопрос)`,a:`Puhutko venäjää / Puhutko sä venäjää`},{q:`Как сказать «Он говорит по-английски»`,a:`Hän puhuu englantia / Se puhuu englantia`},{q:`Как сказать «Мы говорим по-фински»`,a:`Me puhumme suomea / Me puhutaan suomea`}],"verbi olla":[{q:`Скажи «Я не студентка»`,a:`Minä en ole opiskelija / Mä en oo opiskelija`},{q:`Скажи «Она не дома»`,a:`Hän ei ole kotona / Se ei oo kotona`},{q:`Скажи «Мы не готовы»`,a:`Me emme ole valmiita / Me ei olla valmiita`},{q:`Скажи «Они финны»`,a:`He ovat suomalaisia / Ne on suomalaisia`},{q:`Как спросить «Ты финн?» (вопрос)`,a:`Oletko sinä suomalainen / Ootko sä suomalainen`},{q:`Как спросить «Она дома?» (вопрос)`,a:`Onko hän kotona / Onko se kotona`},{q:`Как сказать «Я в кафе»`,a:`Minä olen kahvilassa / Mä oon kahvilassa`}],vokaaliharmonia:[{q:`В школе (koulu)?`,a:`koulussa`},{q:`На столе (pöytä)?`,a:`pöydällä`},{q:`В городе (kaupunki)?`,a:`kaupungissa`},{q:`На работе (työ)?`,a:`työssä`},{q:`В Турку (Turku)?`,a:`Turussa`},{q:`В лесу (metsä)?`,a:`metsässä`},{q:`В машине (auto)?`,a:`autossa`},{q:`На улице (katu)?`,a:`kadulla`}],numerot:[{q:`Как сказать «13»?`,a:`kolmetoista`},{q:`Как сказать «17»?`,a:`seitsemäntoista`},{q:`Как сказать «30»?`,a:`kolmekymmentä`},{q:`Как сказать «Мне 28 лет»?`,a:`Olen 28-vuotias / Olen kaksikymmentäkahdeksan`},{q:`Как сказать «Кофе стоит 4 евро»?`,a:`Kahvi maksaa neljä euroa`},{q:`Как спросить «Сколько стоит»?`,a:`Paljonko maksaa`},{q:`Как сказать «Сейчас 3 часа»?`,a:`Kello on kolme`}],viikonpäivät:[{q:`Как сказать «В четверг»?`,a:`torstaina`},{q:`Как сказать «В воскресенье»?`,a:`sunnuntaina`},{q:`Как сказать «Сегодня среда»?`,a:`Tänään on keskiviikko`},{q:`Как сказать «Вчера была пятница»?`,a:`Eilen oli perjantai`},{q:`Как сказать «Увидимся в понедельник»?`,a:`Nähdään maanantaina`},{q:`Как спросить «Какой сегодня день»?`,a:`Mikä päivä tänään on`},{q:`Как сказать «Завтра суббота»?`,a:`Huomenna on lauantai`}]};function We(e){let t=Object.keys(Ue).find(t=>e.toLowerCase().includes(t));return t?[...Ue[t]].sort(()=>Math.random()-.5):[]}var Ge=0;function Ke(e){return e.replace(/<[^>]+>/g,``).trim().toLowerCase().replace(/[.,!?;:«»""''()\-]/g,``).replace(/\s+/g,` `).trim()}function qe(e,t){for(let n=0;n<t.length;n++){if(!e[n])return`пропущено слово «${t[n]}»`;if(e[n]!==t[n])return`«${e[n]}» → должно быть «${t[n]}»`}return e.length>t.length?`лишнее слово «${e[t.length]}»`:null}function Je(e,t){return e.replace(/<\/details>/g,`</details><br>`).replace(/<br>\s*([^<\n]{4,}?)\s*<details><summary>[^<]*<\/summary>([\s\S]*?)<\/details>/g,(e,n,r)=>{let i=`gi-${t}-${Ge++}`,a=r.replace(/<[^>]+>/g,``).replace(/"/g,`&quot;`).trim();return`
        <div class="grammar-input-row">
          <span class="grammar-q">${n.trim().replace(/\?$/,``)}</span>
          <input type="text" class="grammar-input" id="inp-${i}" placeholder="Твой ответ..." data-answer="${a}">
          <button class="grammar-check-btn" data-input="inp-${i}">Проверь</button>
          <span class="grammar-input-result" id="res-${i}"></span>
        </div>`})}var Ye={ch1:{color:`#7C3AED`,bg:`#EDE7FB`},ch2:{color:`#EC4899`,bg:`#FAE9F2`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`},ch4:{color:`#10B981`,bg:`#E8F7EE`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`}},Xe=null,V=[];function Ze(e,t){if(Xe=Ye[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},V=t.filter(t=>t.Chapter===e.id).sort((e,t)=>(parseInt(e.Block)||0)-(parseInt(t.Block)||0)),!V.length)return`
      <div class="grammar-page">
        <header class="header">
          <button class="btn-back" id="btn-back-grammar">← ${e.title_fi}</button>
        </header>
        <div class="loading">Грамматика скоро появится 💬<br>
          <small style="color:#aaa">Добавь её в Google Sheets → лист Grammar</small>
        </div>
      </div>`;let n=p(),r=n.profiles[n.activeProfile];r.grammarProgress||={},r.grammarProgress[e.id]||(r.grammarProgress[e.id]={});let i=r.grammarProgress[e.id],a=Object.values(i).filter(e=>e===!0).length;return`
    <div class="grammar-page">
      <header class="header">
        <button class="btn-back" id="btn-back-grammar">← ${e.title_fi}</button>
        <span class="grammar-counter">${a} / ${V.length} пройдено</span>
      </header>

      <div class="grammar-header">
        <h2 style="color: ${Xe.color}; margin: 0 0 8px">Грамматика</h2>
        <div class="progress-bar" style="height: 8px; margin-bottom: 24px">
          <div class="progress-fill" style="width: ${Math.round(a/V.length*100)}%; background: ${Xe.color}; height: 100%"></div>
        </div>
      </div>

      <div class="grammar-blocks">
        ${V.map((e,t)=>{let n=`block-${t}`,r=i[n]===!0;return`
            <div class="grammar-block ${r?`completed`:``}" data-block-id="${n}">
              <div class="grammar-block-header">
                <div class="grammar-block-title">
                  <span class="grammar-block-num">${e.Block}</span>
                  <span class="grammar-block-name">${e.Title}</span>
                </div>
                <div class="grammar-block-control">
                  <button class="grammar-expand-btn" id="expand-${n}">▼</button>
                  <input type="checkbox" class="grammar-checkbox" id="check-${n}" ${r?`checked`:``}>
                </div>
              </div>
              <div class="grammar-block-content" id="content-${n}" style="display: none; padding: 16px; background: white; border-top: 1px solid #E5E7EB">
                <div class="grammar-text">${Je(e.Content||``,n)}</div>
                ${e.Examples?`
                  <div class="grammar-examples" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #E5E7EB">
                    <div style="font-weight: 600; margin-bottom: 8px">Примеры:</div>
                    <div style="font-size: 13px; color: #4B5563">${e.Examples}</div>
                  </div>
                `:``}
                <div class="grammar-train-row" style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E5E7EB">
                  <button class="grammar-train-btn" id="train-${n}" data-block-id="${n}">
                    💪 Тренироваться ещё
                  </button>
                </div>
                <div class="grammar-train-area" id="train-area-${n}" style="display:none"></div>
              </div>
            </div>
          `}).join(``)}
      </div>
    </div>
  `}function Qe(e){document.getElementById(`btn-back-grammar`)?.addEventListener(`click`,()=>{A(`/chapter/${e.id}`)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.grammar-train-btn`);if(!t)return;let n=t.dataset.blockId,r=document.getElementById(`train-area-${n}`);if(!r)return;let i=parseInt(n.replace(`block-`,``)),a=V[i];if(!a)return;let o=We(a.Title);if(!o.length){r.style.display=`block`,r.innerHTML=`<div style="color:#6B7280;font-size:13px;padding:12px 0">Дополнительных заданий пока нет — практикуй примеры из блока вслух! 🗣️</div>`,t.style.display=`none`;return}let s=o,c=`train-${n}`;r.style.display=`block`,r.innerHTML=`
      <div class="grammar-train-panel">
        <div style="font-weight:700;font-size:14px;margin-bottom:12px">🔁 Ещё тренировка</div>
        ${s.map((e,t)=>{let n=`${c}-${t}`,r=e.a.replace(/"/g,`&quot;`);return`
            <div class="grammar-input-row" style="margin-bottom:10px">
              <span class="grammar-q">${e.q}</span>
              <input type="text" class="grammar-input" id="inp-${n}" placeholder="Твой ответ..." data-answer="${r}">
              <button class="grammar-check-btn" data-input="inp-${n}">Проверь</button>
              <span class="grammar-input-result" id="res-${n}"></span>
            </div>`}).join(``)}
        <button class="grammar-train-more-btn" data-block-id="${n}" style="margin-top:8px">🔄 Ещё раз (новый порядок)</button>
      </div>
    `,t.textContent=`✅ Тренировка открыта`,t.disabled=!0}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.grammar-train-more-btn`);if(!t)return;let n=t.dataset.blockId,r=document.getElementById(`train-${n}`);r&&(r.disabled=!1,r.textContent=`💪 Тренироваться ещё`);let i=document.getElementById(`train-area-${n}`);i&&(i.style.display=`none`,i.innerHTML=``)}),document.addEventListener(`click`,e=>{let t=e.target.closest(`.grammar-check-btn`);if(!t)return;let n=t.dataset.input,r=document.getElementById(n),i=document.getElementById(`res-${n.replace(`inp-`,``)}`);if(!r||!i)return;let a=Ke(r.value),o=r.dataset.answer;if(!a){i.innerHTML=`<span style="color:#F59E0B">✏️ Напиши ответ!</span>`;return}let s=o.split(/\s*\/\s*|\n/).map(e=>Ke(e)).filter(Boolean);if(s.some(e=>e===a))i.innerHTML=`<span style="color:#10B981">✅ Правильно!</span>`,r.style.borderColor=`#10B981`;else{let e=s.reduce((e,t)=>{let n=t.split(` `).filter(e=>a.includes(e)).length;return n>e.overlap?{v:t,overlap:n}:e},{v:s[0],overlap:-1}).v,t=qe(a.split(` `),e.split(` `)),n=Ke(o.split(/\s*\/\s*/)[0]);i.innerHTML=`<span style="color:#EF4444">❌${t?` Ошибка: ${t}`:``}</span><br><span style="color:#6B7280;font-size:12px">Правильно: <strong>${n}</strong>${s.length>1?` или <strong>${Ke(o.split(/\s*\/\s*/)[1]||``)}</strong>`:``}</span>`,r.style.borderColor=`#EF4444`}}),V.forEach((t,n)=>{let r=`block-${n}`,i=document.getElementById(`expand-${r}`),a=document.getElementById(`content-${r}`),o=document.getElementById(`check-${r}`);i?.addEventListener(`click`,e=>{e.stopPropagation();let t=a.style.display!==`none`;a.style.display=t?`none`:`block`,i.classList.toggle(`expanded`,!t)}),o?.addEventListener(`change`,()=>{let t=p(),n=t.profiles[t.activeProfile];n.grammarProgress||={},n.grammarProgress[e.id]||(n.grammarProgress[e.id]={}),n.grammarProgress[e.id][r]=o.checked,h(t)})})}var $e={ch1:{color:`#7C3AED`,bg:`#EDE7FB`},ch2:{color:`#EC4899`,bg:`#FAE9F2`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`},ch4:{color:`#10B981`,bg:`#E8F7EE`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`}},et=null,H=null,U=[],W=null,G=0,K=0,q=0,J=[];function Y(e){return[...e].sort(()=>Math.random()-.5)}function tt(e,t){return et=e,U=t.filter(e=>e.finnish&&e.russian),H=$e[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},`
    <div class="vocab-ex-page">
      <header class="header">
        <button class="btn-back" id="btn-back-vex">← ${e.title_fi}</button>
        <span class="vocab-counter">${U.length} слов</span>
      </header>

      <div class="mode-select-screen">
        <h2 class="mode-title">Отработка словаря</h2>
        <p style="color:#6B7280;font-size:14px;text-align:center;margin:-8px 0 16px">Выбери тип упражнения</p>

        <div class="mode-cards">
          <div class="mode-card" id="vex-input">
            <div class="mode-icon" style="background:${H.bg}">✏️</div>
            <div class="mode-info">
              <div class="mode-name">Ввод перевода</div>
              <div class="mode-desc">Видишь финское слово — пишешь перевод</div>
            </div>
            <button class="mode-btn" style="background:${H.color}">Начать →</button>
          </div>

          <div class="mode-card" id="vex-match">
            <div class="mode-icon" style="background:${H.bg}">🔗</div>
            <div class="mode-info">
              <div class="mode-name">Мэтч</div>
              <div class="mode-desc">Соедини финское слово с переводом</div>
            </div>
            <button class="mode-btn" style="background:${H.color}">Начать →</button>
          </div>

          <div class="mode-card" id="vex-drag">
            <div class="mode-icon" style="background:${H.bg}">↕️</div>
            <div class="mode-info">
              <div class="mode-name">Drag & Drop</div>
              <div class="mode-desc">Перетащи слово к правильному переводу</div>
            </div>
            <button class="mode-btn" style="background:${H.color}">Начать →</button>
          </div>

          <div class="mode-card" id="vex-audio">
            <div class="mode-icon" style="background:${H.bg}">🎤</div>
            <div class="mode-info">
              <div class="mode-name">Произношение</div>
              <div class="mode-desc">Послушай и произнеси слово вслух</div>
            </div>
            <button class="mode-btn" style="background:${H.color}">Начать →</button>
          </div>
        </div>
      </div>
    </div>
  `}function nt(e){et=e,H=$e[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},document.getElementById(`btn-back-vex`)?.addEventListener(`click`,()=>{A(`/chapter/${e.id}/exercises`)}),document.getElementById(`vex-input`)?.addEventListener(`click`,()=>lt()),document.getElementById(`vex-match`)?.addEventListener(`click`,()=>mt()),document.getElementById(`vex-drag`)?.addEventListener(`click`,()=>vt()),document.getElementById(`vex-audio`)?.addEventListener(`click`,()=>bt())}function rt(){return document.querySelector(`.vocab-ex-page`)}function it(e,t,n){return`
    <header class="header">
      <button class="btn-back" id="btn-back-vex-mode">← Упражнения</button>
      <span class="vocab-counter">${t} / ${n}</span>
    </header>
    <div class="ex-progress-bar">
      <div class="ex-progress-fill" style="width:${t/n*100}%;background:${H.color}"></div>
    </div>`}function at(){document.getElementById(`btn-back-vex-mode`)?.addEventListener(`click`,()=>{rt().innerHTML=ot(),nt(et)})}function ot(){return document.querySelector(`.vocab-ex-page`)?.outerHTML||``}function st(e,t,n){let r=Math.round(t/n*100),i=r>=80?`🏆`:r>=60?`👍`:`💪`;rt().innerHTML=`
    <header class="header">
      <button class="btn-back" id="btn-complete-back">← Упражнения</button>
    </header>
    <div class="complete-screen">
      <div class="complete-emoji">${i}</div>
      <h2>${e} завершён!</h2>
      <p style="color:#6B7280;margin-top:8px">Результат: <strong style="color:${H.color}">${t} / ${n}</strong> (${r}%)</p>
      <div style="display:flex;gap:12px;margin-top:24px;justify-content:center">
        <button class="btn-complete" style="background:${H.color}" id="btn-again">Ещё раз</button>
        <button class="btn-complete" style="background:white;color:${H.color};border:2px solid ${H.color}" id="btn-to-ex">К упражнениям</button>
      </div>
    </div>`,document.getElementById(`btn-complete-back`)?.addEventListener(`click`,ct),document.getElementById(`btn-to-ex`)?.addEventListener(`click`,ct),document.getElementById(`btn-again`)?.addEventListener(`click`,()=>{W===`input`?lt():W===`match`?mt():W===`drag`?vt():W===`audio`&&bt()})}function ct(){A(`/chapter/${et.id}/vocab-exercises`)}function lt(){W=`input`,G=0,q=0,J=Y(U).slice(0,Math.min(15,U.length)),K=J.length,ut()}function ut(){if(q>=J.length){st(`Ввод`,G,K);return}let e=J[q];rt().innerHTML=`
    ${it(`Ввод перевода`,q+1,K)}
    <div class="ex-container">
      <div class="ex-card">
        <div class="ex-type-badge" style="background:${H.bg};color:${H.color}">✏️ Напиши перевод</div>
        <div class="ex-question" style="font-size:28px;font-weight:800;text-align:center;margin:24px 0">${e.finnish}</div>
        ${e.english?`<div style="color:#9CA3AF;font-size:13px;text-align:center;margin-top:-16px;margin-bottom:16px">${e.english}</div>`:``}
        <input type="text" class="grammar-input" id="input-answer"
          placeholder="Перевод на русском..."
          style="width:100%;font-size:16px;padding:12px 16px"
          autocomplete="off">
        <button class="ex-next-btn" id="btn-check-input" style="background:${H.color};margin-top:12px;width:100%">
          Проверить
        </button>
        <div id="input-feedback" style="display:none;margin-top:12px;text-align:center"></div>
      </div>
    </div>`,at();let t=document.getElementById(`input-answer`);t?.focus(),t?.addEventListener(`keydown`,t=>{t.key===`Enter`&&dt(e)}),document.getElementById(`btn-check-input`)?.addEventListener(`click`,()=>dt(e))}function dt(e){let t=document.getElementById(`input-answer`)?.value.trim().toLowerCase()||``;if(!t)return;let n=e.russian.toLowerCase().split(/[,;/()]/).map(e=>e.trim()).filter(Boolean).some(e=>t.includes(e)||e.includes(t));n&&G++;let r=document.getElementById(`input-feedback`);r.style.display=`block`,r.innerHTML=n?`<span style="color:var(--success);font-weight:600">✅ Правильно!</span>`:`<span style="color:var(--error)">❌ Правильно: <strong>${e.russian}</strong></span>`,document.getElementById(`btn-check-input`).textContent=`Дальше →`,document.getElementById(`btn-check-input`).onclick=()=>{q++,ut()},document.getElementById(`input-answer`).disabled=!0}var X=null,ft=[],pt=[];function mt(){W=`match`,G=0,X=null,pt=[],J=Y(U).slice(0,Math.min(8,U.length)),K=J.length,ft=J,ht()}function ht(){let e=Y(ft.map(e=>({id:e.finnish,text:e.finnish,type:`fi`}))),t=Y(ft.map(e=>({id:e.finnish,text:e.russian,type:`ru`})));rt().innerHTML=`
    ${it(`Мэтч`,pt.length,K)}
    <div class="ex-container">
      <div class="ex-card">
        <div class="ex-type-badge" style="background:${H.bg};color:${H.color}">🔗 Соедини пары</div>
        <div class="match-grid">
          <div class="match-col" id="col-fi">
            ${e.map(e=>`
              <button class="match-btn ${pt.includes(e.id)?`match-done`:``}"
                data-id="${e.id}" data-type="fi">
                ${e.text}
              </button>`).join(``)}
          </div>
          <div class="match-col" id="col-ru">
            ${t.map(e=>`
              <button class="match-btn ${pt.includes(e.id)?`match-done`:``}"
                data-id="${e.id}" data-type="ru">
                ${e.text}
              </button>`).join(``)}
          </div>
        </div>
      </div>
    </div>`,at(),document.querySelectorAll(`.match-btn:not(.match-done)`).forEach(e=>{e.addEventListener(`click`,()=>gt(e))})}function gt(e){let t=e.dataset.id,n=e.dataset.type;if(!X){X={id:t,type:n,btn:e},e.classList.add(`match-selected`);return}if(X.btn===e){e.classList.remove(`match-selected`),X=null;return}X.id===t&&X.type!==n?(G++,pt.push(t),X.btn.classList.remove(`match-selected`),X.btn.classList.add(`match-correct`),e.classList.add(`match-correct`),X=null,pt.length===K&&setTimeout(()=>st(`Мэтч`,G,K),600)):(X.btn.classList.remove(`match-selected`),X.btn.classList.add(`match-wrong`),e.classList.add(`match-wrong`),setTimeout(()=>{X?.btn.classList.remove(`match-wrong`),e.classList.remove(`match-wrong`),X=null},700))}var _t=[],Z={};function vt(){W=`drag`,G=0,Z={},J=Y(U).slice(0,Math.min(6,U.length)),K=J.length,_t=J,yt()}function yt(){let e=[..._t].sort(()=>Math.random()-.5),t=Y([..._t]);rt().innerHTML=`
    ${it(`Drag & Drop`,Object.keys(Z).length,K)}
    <div class="ex-container">
      <div class="ex-card">
        <div class="ex-type-badge" style="background:${H.bg};color:${H.color}">↕️ Перетащи к переводу</div>
        <div class="drag-targets">
          ${e.map(e=>`
            <div class="drag-row">
              <div class="drag-target ${Z[e.finnish]===void 0?``:Z[e.finnish]===e.finnish?`drag-correct`:`drag-wrong`}"
                   data-target="${e.finnish}"
                   ondragover="event.preventDefault()"
                   ondrop="window._handleDrop(event, '${e.finnish.replace(/'/g,`\\'`)}')">
                ${Z[e.finnish]===void 0?`<span class="drag-placeholder">Перетащи сюда</span>`:`<span class="drag-placed">${_t.find(t=>t.finnish===Z[e.finnish])?.finnish||``}</span>`}
              </div>
              <div class="drag-translation">${e.russian}</div>
            </div>`).join(``)}
        </div>
        <div class="drag-chips" id="drag-chips">
          ${t.filter(e=>!Object.values(Z).includes(e.finnish)).map(e=>`
            <div class="drag-chip" draggable="true" data-word="${e.finnish.replace(/"/g,`&quot;`)}"
                 ondragstart="window._handleDragStart(event, '${e.finnish.replace(/'/g,`\\'`)}')">
              ${e.finnish}
            </div>`).join(``)}
        </div>
        ${Object.keys(Z).length===K?`
          <button class="ex-next-btn" id="btn-drag-done" style="background:${H.color};margin-top:16px;width:100%">
            Проверить всё →
          </button>`:``}
      </div>
    </div>`,at(),window._handleDragStart=(e,t)=>{e.dataTransfer.setData(`text/plain`,t)},window._handleDrop=(e,t)=>{let n=e.dataTransfer.getData(`text/plain`);Z[t]=n,n===t&&G++,yt()};let n=null;document.querySelectorAll(`.drag-chip`).forEach(e=>{e.addEventListener(`click`,()=>{if(document.querySelectorAll(`.drag-chip`).forEach(e=>e.classList.remove(`chip-selected`)),n===e.dataset.word){n=null;return}n=e.dataset.word,e.classList.add(`chip-selected`)})}),document.querySelectorAll(`.drag-target`).forEach(e=>{e.addEventListener(`click`,()=>{if(!n)return;let t=e.dataset.target;Z[t]=n,n===t&&G++,n=null,yt()})}),document.getElementById(`btn-drag-done`)?.addEventListener(`click`,()=>{st(`Drag & Drop`,G,K)})}function bt(){W=`audio`,G=0,q=0,J=Y(U).slice(0,Math.min(10,U.length)),K=J.length,xt()}function xt(){if(q>=J.length){st(`Произношение`,G,K);return}let e=J[q];rt().innerHTML=`
    ${it(`Произношение`,q+1,K)}
    <div class="ex-container">
      <div class="ex-card" style="text-align:center">
        <div class="ex-type-badge" style="background:${H.bg};color:${H.color}">🎤 Послушай и произнеси</div>
        <div style="font-size:15px;color:#6B7280;margin:16px 0 8px">Перевод: <strong>${e.russian}</strong></div>
        <div style="font-size:32px;font-weight:800;margin:8px 0 24px;color:${H.color}">${e.finnish}</div>
        <div class="card-audio-row" style="justify-content:center;margin-bottom:20px">
          <button class="card-audio-btn" id="btn-speak" title="Послушать">🔊</button>
          <button class="card-mic-btn" id="btn-mic" style="background:${H.color}">🎤 Произнеси</button>
        </div>
        <div class="card-mic-result" id="mic-result" style="display:none;margin-bottom:16px"></div>
        <button class="ex-next-btn" id="btn-next-audio" style="background:${H.color}">Дальше →</button>
      </div>
    </div>`,at();function t(){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e.finnish);t.lang=`fi-FI`,t.rate=.85,window.speechSynthesis.speak(t)}document.getElementById(`btn-speak`)?.addEventListener(`click`,t),t(),document.getElementById(`btn-mic`)?.addEventListener(`click`,()=>{let t=document.getElementById(`btn-mic`),n=document.getElementById(`mic-result`),r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r){n.style.display=`block`,n.innerHTML=`<span style="color:#F59E0B">⚠️ Браузер не поддерживает распознавание</span>`;return}let i=new r;i.lang=`fi-FI`,i.maxAlternatives=5,t.textContent=`🔴 Слушаю...`,t.disabled=!0,n.style.display=`none`;let a=setTimeout(()=>{try{i.stop()}catch{}n.style.display=`block`,n.innerHTML=`<span style="color:#F59E0B">⚠️ Ничего не услышал</span>`,t.textContent=`🎤 Попробуй ещё`,t.disabled=!1},7e3);i.onresult=r=>{clearTimeout(a);let i=Array.from(r.results[0]).map(e=>e.transcript.toLowerCase().trim()),o=e.finnish.toLowerCase().trim(),s=i.some(e=>e.replace(/[.,!?]/g,``)===o.replace(/[.,!?]/g,``));s&&G++,n.style.display=`block`,n.innerHTML=s?`<span style="color:var(--success)">✅ Отлично!</span>`:`<span style="color:var(--error)">❌ Услышал: «${i[0]}»</span>`,t.textContent=s?`🎤 Произнеси`:`🎤 Попробуй ещё`,t.disabled=!1},i.onerror=()=>{clearTimeout(a),n.style.display=`block`,n.innerHTML=`<span style="color:#F59E0B">⚠️ Попробуй ещё раз</span>`,t.textContent=`🎤 Попробуй ещё`,t.disabled=!1},i.onend=()=>{clearTimeout(a),t.disabled&&(t.disabled=!1,t.textContent=`🎤 Попробуй ещё`)},i.start()}),document.getElementById(`btn-next-audio`)?.addEventListener(`click`,()=>{q++,xt()})}var St=[{id:`A0–A1`,label:`A0–A1`,color:`#7C3AED`,bg:`#EDE7FB`,chapters:[`ch1`,`ch2`,`ch3`,`ch4`,`ch5`]},{id:`A1–A2`,label:`A1–A2`,color:`#EC4899`,bg:`#FAE9F2`,chapters:[`ch6`,`ch7`,`ch8`,`ch9`,`ch10`]},{id:`A2–B1`,label:`A2–B1`,color:`#F59E0B`,bg:`#FEEEDB`,chapters:[`ch11`,`ch12`,`ch13`,`ch14`,`ch15`]},{id:`B1–B2`,label:`B1–B2`,color:`#10B981`,bg:`#E8F7EE`,chapters:[`ch16`,`ch17`,`ch18`,`ch19`,`ch20`]}];function Ct(e){let t=p().profiles[e];for(let e=0;e<St.length;e++){let n=St[e],r=St[e+1],i=n.chapters.filter(e=>{let n=t.vocabulary[e]||{},r=t.exercises[e]||{};return Object.values(n).filter(e=>e.seen).length>0||Object.values(r).filter(e=>e.completed).length>0}).length,a=n.chapters.length,o=Math.round(i/a*100);if(o<100)return{current:n,next:r,completed:i,total:a,pct:o}}let n=St[St.length-1];return{current:n,next:null,completed:n.chapters.length,total:n.chapters.length,pct:100}}function wt(e){let t=p().profiles[e],{totalWords:n,totalExercises:r,totalChapters:i,streak:a,activity:o}=T(e),{current:s,next:c,completed:l,total:u,pct:d}=Ct(e);return`
    <div class="profile-page">
      <header class="header">
        <button class="btn-back" id="btn-back-profile">← Главная</button>
      </header>

      <!-- Profile hero -->
      <div class="profile-hero">
        <img src="/lets-go-finnish/${e}.png" class="profile-avatar-big" alt="${t.name}">
        <div class="profile-hero-info">
          <h1 class="profile-name">${t.name}</h1>
          <div class="profile-streak">
            ${a>0?`<span class="streak-icon">🔥</span> <strong>${a}</strong> ${a===1?`день`:a<5?`дня`:`дней`} подряд`:`Начни заниматься сегодня!`}
          </div>
        </div>
        <!-- Level badge block -->
        <div class="level-block">
          <div class="level-current-badge" style="background: ${s.bg}; color: ${s.color}">
            ${s.label}
          </div>
          <div class="level-progress-section">
            <div class="level-progress-info">
              <span class="level-progress-text">${l} из ${u} глав</span>
              ${c?`<span class="level-next-badge" style="color: ${c.color}">→ ${c.label}</span>`:`<span style="color:#10B981; font-weight:700">🏆 Уровень завершён!</span>`}
            </div>
            <div class="level-bar-track">
              <div class="level-bar-fill" id="level-bar-fill"
                   data-pct="${d}"
                   style="width: 0%; background: linear-gradient(90deg, ${s.color}, ${c?c.color:s.color})">
              </div>
              <div class="level-bar-arrow" id="level-bar-arrow" style="left: 0%">
                <div class="arrow-pulse" style="background: ${s.color}"></div>
              </div>
            </div>
            <div class="level-pct">${d}%</div>
          </div>
        </div>
      </div>

      <!-- Stats grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div class="stat-value">${n}</div>
          <div class="stat-label">слов изучено</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">✏️</div>
          <div class="stat-value">${r}</div>
          <div class="stat-label">упражнений решено</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🏆</div>
          <div class="stat-value">${i}</div>
          <div class="stat-label">глав пройдено</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">🔥</div>
          <div class="stat-value">${a}</div>
          <div class="stat-label">дней стрика</div>
        </div>
      </div>

      <!-- Calendar + Trend -->
      <div class="profile-section">
        <h2 class="profile-section-title">Активность</h2>
        <div class="activity-row">
          ${Tt(o)}
          ${Et(o)}
        </div>
      </div>

    </div>
  `}function Tt(e){let t=new Date,n=t.getFullYear(),r=t.getMonth(),i=new Date(n,r,1).toLocaleString(`ru`,{month:`long`,year:`numeric`}),a=new Date(n,r,1).getDay(),o=new Date(n,r+1,0).getDate(),s=a===0?6:a-1,c=[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`],l=t.getDate(),u=``;for(let e=0;e<s;e++)u+=`<div class="cal-cell empty"></div>`;for(let t=1;t<=o;t++){let i=`${n}-${String(r+1).padStart(2,`0`)}-${String(t).padStart(2,`0`)}`,a=!!e[i],o=t===l,s=e[i]?.words||0,c=e[i]?.exercises||0;u+=`
      <div class="cal-cell ${a?`active`:``} ${o?`today`:``}"
           title="${a?`слов: ${s}, упражнений: ${c}`:``}">
        <span>${t}</span>
        ${a?`<span class="cal-dot">🔥</span>`:``}
      </div>
    `}return`
    <div class="calendar">
      <div class="cal-header">
        <span class="cal-month">${i}</span>
      </div>
      <div class="cal-grid">
        ${c.map(e=>`<div class="cal-day-name">${e}</div>`).join(``)}
        ${u}
      </div>
    </div>
  `}function Et(e){let t=[],n=new Date;for(let r=7;r>=0;r--){let i=0,a=``;for(let t=0;t<7;t++){let o=new Date(n);o.setDate(n.getDate()-r*7-t),e[o.toISOString().slice(0,10)]&&i++,t===0&&r%2==0&&(a=`${o.getDate()}.${String(o.getMonth()+1).padStart(2,`0`)}`)}t.push({count:i,label:a})}let r=Math.max(...t.map(e=>e.count),1);Math.round(3/r*80);let i=t.map((e,n)=>{let i=e.count>0?Math.max(Math.round(e.count/r*80),8):4,a=n===t.length-1,o=e.count===0;return`
      <div class="trend-bar-wrap" title="${a?`Эта неделя: ${e.count} занятий · Так держать!`:``}">
        <div class="trend-bar-val">${e.count>0?e.count:``}</div>
        <div class="trend-bar-bg">
          <div class="trend-bar-fill ${a?`bar-current`:``} ${o?`bar-empty`:``}"
               style="height: ${i}px"></div>
        </div>
        <div class="trend-label">${e.label}</div>
      </div>
    `}).join(``),a=t.reduce((e,t)=>e+t.count,0),o=Math.max(...t.map(e=>e.count)),s=a/8,c=s<1&&s>0?`< 1`:Math.round(s).toString(),l=t[t.length-1].count,u=t[t.length-2].count,d,f,p,m;return a===0?(d=`🌱`,f=`Начни первое занятие!`,p=`#F0FDF4`,m=`#166534`):a===1?(d=`🌱`,f=`Первое занятие!`,p=`#F0FDF4`,m=`#166534`):l>u?(d=`📈`,f=`Занимаешься чаще!`,p=`#EDE7FB`,m=`#7C3AED`):l<u?(d=`📉`,f=`Можно позаниматься больше`,p=`#FEF3C7`,m=`#92400E`):(d=`➡️`,f=`Стабильный ритм`,p=`#EFF6FF`,m=`#1D4ED8`),`
    <div class="trend-card">
      <div class="trend-header">
        <span class="trend-title">Тренд</span>
        <span class="trend-badge" style="background: ${p}; color: ${m}">${d} ${f}</span>
      </div>
      <div class="trend-mini-stats">
        <div class="trend-mini-stat">
          <span class="trend-mini-val">${a}</span>
          <span class="trend-mini-label">всего занятий</span>
        </div>
        <div class="trend-mini-divider"></div>
        <div class="trend-mini-stat">
          <span class="trend-mini-val">${o}</span>
          <span class="trend-mini-label">лучшая неделя</span>
        </div>
        <div class="trend-mini-divider"></div>
        <div class="trend-mini-stat">
          <span class="trend-mini-val" style="color: ${s>=3?`#10B981`:`#7C3AED`}">${c}</span>
          <span class="trend-mini-label">среднее/нед. <span style="color:#C4B5FD">(цель: 3)</span></span>
        </div>
      </div>
      <div class="trend-bars">${i}</div>
      <div class="trend-hint">занятий за неделю · последние 8 недель</div>
    </div>
  `}function Dt(){document.getElementById(`btn-back-profile`)?.addEventListener(`click`,()=>A(`/`));let e=document.getElementById(`level-bar-fill`),t=document.getElementById(`level-bar-arrow`),n=parseInt(e?.dataset.pct||`0`);setTimeout(()=>{e&&(e.style.width=`${n}%`),t&&(t.style.left=`${Math.min(n,95)}%`)},150)}var Ot={ch1:{color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},ch2:{color:`#EC4899`,bg:`#FAE9F2`,img:`ch2.png`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`,img:`ch3.png`},ch4:{color:`#10B981`,bg:`#E8F7EE`,img:`ch4.png`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`,img:`ch5.png`}},kt=[{id:`ch1`,title_fi:`Hei ja tervetuloa`,title_ru:`Привет и добро пожаловать`,level:`A0–A1`},{id:`ch2`,title_fi:`Minkämaalainen sinä olet?`,title_ru:`Ты откуда?`,level:`A0–A1`},{id:`ch3`,title_fi:`Pedro soittaa Mikkolle`,title_ru:`Педро звонит Микко`,level:`A0–A1`},{id:`ch4`,title_fi:`Minä`,title_ru:`Я`,level:`A0–A1`},{id:`ch5`,title_fi:`Meidän tavallinen päivä`,title_ru:`Наш обычный день`,level:`A0–A1`}],At=[`A0–A1`,`A1–A2`,`A2–B1`,`B1–B2`],jt={"A0–A1":{color:`#7C3AED`,bg:`#EDE7FB`},"A1–A2":{color:`#EC4899`,bg:`#FAE9F2`},"A2–B1":{color:`#F59E0B`,bg:`#FEEEDB`},"B1–B2":{color:`#10B981`,bg:`#E8F7EE`}};function Mt(e){let t=new Date().getHours();return t>=6&&t<12?`Hyvää huomenta, ${e}! ☀️ Готова к финскому?`:t>=12&&t<18?`Hei hei, ${e}! Продолжим?`:`Hyvää iltaa, ${e}! Один урок перед сном?`}function Nt(e,t,n=20){let r=e.exercises[t]||{},i=e.vocabulary[t]||{},a=Object.values(r).filter(e=>e.completed).length+Object.values(i).filter(e=>e.seen).length;return Math.min(100,Math.round(a/n*100))}function Pt(e){let t=e.profiles;return`
    <header class="header">
      <div class="logo">
        <img src="/lets-go-finnish/logo.png" alt="Let's Go Learn Finnish!" class="logo-img">
      </div>
      <div class="header-right">
        <div class="profile-switcher">
          ${Object.entries(t).map(([t,n])=>`
            <button class="profile-btn ${e.activeProfile===t?`active`:``}"
                    data-profile="${t}">
              <img class="avatar" src="/lets-go-finnish/${t}.png" alt="${n.name}">
              <span class="pname">${n.name}</span>
            </button>
          `).join(``)}
        </div>
        <button class="btn-cta">Начать учить</button>
      </div>
    </header>
  `}function Ft(e,t){let n=g();return`
    ${Pt(e)}
    <div class="hero">
      <div class="hero-text">
        <h1><span class="hero-accent">Suomi on vaikea.</span><br>Mutta me справимся 💪</h1>
        <p class="greeting">${Mt(n.name)}</p>
      </div>
      <div class="hero-deco">
        <div class="deco-card deco-1"><span class="deco-dot"></span>Moikka! — Привет!</div>
        <div class="deco-card deco-2"><span class="deco-dot"></span>Kiitos — Спасибо</div>
        <div class="deco-card deco-3"><span class="deco-dot"></span>Hyvää! — Отлично!</div>
      </div>
    </div>
    ${It(t,n)}
  `}function It(e,t){let n={};return e.forEach((e,t)=>{let r=e.level||`A0–A1`;n[r]||(n[r]=[]),n[r].push({...e,globalIndex:t})}),At.map(e=>{let r=jt[e]||{color:`#7C3AED`,bg:`#EDE7FB`},i=n[e]||[],a=i.length>0,o=a?i.reduce((e,n)=>e+Nt(t,n.id),0)/i.length:0;return`
        <div class="level-section ${a?``:`level-section-soon`}">
          <div class="level-header">
            <div class="level-badge" style="background: ${r.bg}; color: ${r.color}">${e}</div>
            <div class="level-progress-wrap">
              ${a?`
              <div class="level-progress-bar">
                <div class="level-progress-fill" style="width: ${Math.round(o)}%; background: ${r.color}"></div>
              </div>
              <span class="level-progress-label" style="color: ${r.color}">${Math.round(o)}%</span>
              `:`<span class="level-soon-label">скоро</span>`}
            </div>
          </div>
          <div class="chapters-grid">
            ${a?i.map(e=>Lt(e,e.globalIndex+1,t)).join(``):[1,2,3].map(e=>`
                  <div class="chapter-card chapter-card-soon">
                    <div class="card-img-wrap soon-img-wrap" style="background: ${r.bg}">
                      <span class="soon-emoji">🔒</span>
                    </div>
                    <div class="card-body">
                      <div class="card-label" style="color: ${r.color}">Глава ${e}</div>
                      <div class="card-title soon-title">Скоро</div>
                      <div class="card-subtitle">Контент в разработке</div>
                    </div>
                  </div>`).join(``)}
          </div>
        </div>
      `}).join(``)}function Lt(e,t,n){let r=Nt(n,e.id),i=r===100,a=r===0?`Начать`:i?`Повторить`:`Продолжить →`;return`
    <div class="chapter-card ${i?`done`:``} ${r>0?`in-progress`:``}"
         data-chapter="${e.id}"
         style="--card-color: ${e.color}">
      <div class="card-img-wrap" style="background: ${e.bg}">
        <img src="/lets-go-finnish/${e.img}" alt="${e.title_fi}" class="card-img">
      </div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-label">Глава ${t}</span>
          ${i?`<span class="done-badge">✓</span>`:``}
        </div>
        <div class="card-title">${e.title_fi}</div>
        <div class="card-subtitle">${e.title_ru}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${r}%; background: ${e.color}"></div>
        </div>
        <div class="card-footer">
          <span class="progress-label">${r}%</span>
          <button class="btn-card" style="color: ${e.color}; border-color: ${e.color}">${a}</button>
        </div>
      </div>
    </div>
  `}function Q(e){document.querySelector(`#app`).innerHTML=e}function Rt(){document.querySelectorAll(`.profile-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.profile;p().activeProfile===t?A(`/profile/${t}`):(_(t),Bt())})}),document.querySelectorAll(`.chapter-card`).forEach(e=>{e.addEventListener(`click`,()=>{A(`/chapter/${e.dataset.chapter}`)})})}var zt=kt.map(e=>({...e,...Ot[e.id]}));function Bt(){Q(Ft(p(),zt)),Rt()}var $={chapters:[],vocabulary:[],exercises:[]};async function Vt(){document.querySelector(`#app`).innerHTML=`<div class="loading">Загружаем финский... 🇫🇮</div>`;try{$=await ne(),$.chapters?.length>0&&(zt=$.chapters.map(e=>({...e,...Ot[e.id]})))}catch{console.log(`Sheets недоступен, используем demo данные`)}Ht(),re(Ht)}function Ht(){let e=k(),t=p();if(e.page===`dashboard`||!e.page){Bt();return}if(e.page===`profile`){Q(wt(e.profileId)),Dt();return}let n=zt.find(t=>t.id===e.chapterId);if(!n){Bt();return}let r=$.vocabulary.filter(t=>t.chapter_id===e.chapterId),i=$.exercises.filter(t=>t.chapter_id===e.chapterId),a=$.grammar||[];if(e.section===`vocabulary`){Q(ge(n,r)),_e(n);return}if(e.section===`exercises`){Q(Pe(n,i)),ze(n);return}if(e.section===`grammar`){Q(Ze(n,a)),Qe(n);return}if(e.section===`vocab-exercises`){Q(tt(n,r)),nt(n);return}Q(j(n,r,i,t,a.filter(t=>t.Chapter===e.chapterId))),se(e.chapterId,r,t.activeProfile)}Vt();