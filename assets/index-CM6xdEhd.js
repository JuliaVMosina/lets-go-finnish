var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=`finnish_app`;function u(){return{activeProfile:`julia`,profiles:{julia:{name:`Julia`,avatar:`🦊`,chapters:{},vocabulary:{},exercises:{}},paul:{name:`Paul`,avatar:`🐱`,chapters:{},vocabulary:{},exercises:{}}}}}function d(){try{return JSON.parse(localStorage.getItem(l))||u()}catch{return u()}}function f(e){localStorage.setItem(l,JSON.stringify(e))}function p(){let e=d();return e.profiles[e.activeProfile]}function m(e){let t=d();t.activeProfile=e,f(t)}function h(e,t,n,r=null){let i=d(),a=i.profiles[e];a.exercises[t]||(a.exercises[t]={});let o=a.exercises[t][`ex_${n}`]||{attempts:0};a.exercises[t][`ex_${n}`]={completed:!0,selfChecked:r,attempts:o.attempts+1,lastAttempt:new Date().toISOString()},f(i)}function g(e,t,n,r){let i=d(),a=i.profiles[e];a.vocabulary[t]||(a.vocabulary[t]={});let o=a.vocabulary[t][`w_${n}`]||{correct:0,wrong:0};a.vocabulary[t][`w_${n}`]={seen:!0,correct:o.correct+ +!!r,wrong:o.wrong+ +!r,lastSeen:new Date().toISOString()},f(i)}var _=c(o(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&x(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(x(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!x(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){x(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),c.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function u(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),c.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;c.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function f(e){c.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){c.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){c.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=b(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=b(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=b(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=b(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function p(e){var t,n,r,i,a=2**53,o=-a,c=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,l=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,u=this,d=0,f=0,p=!1,g=!1,_=[],v={data:[],errors:[],meta:{}};function b(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function S(){if(v&&r&&(w(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(v.data=v.data.filter(function(e){return!b(e)})),C()){if(v)if(Array.isArray(v.data[0])){for(var t=0;C()&&t<v.data.length;t++)v.data[t].forEach(n);v.data.splice(0,1)}else v.data.forEach(n);function n(t,n){x(e.transformHeader)&&(t=e.transformHeader(t,n)),_.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,u=t[i],u=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(c.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):l.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=_.length?`__parsed_extra`:_[i]:s,u=e.transform?e.transform(u,s):u);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(u)):r[s]=u}return e.header&&(i>_.length?w(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+_.length+` fields but parsed `+i,f+n):i<_.length&&w(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+_.length+` fields but parsed `+i,f+n)),r}var i;v&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(n),i=v.data.length):v.data=n(v.data,0),e.header&&v.meta&&(v.meta.fields=_),f+=i)}function C(){return e.header&&_.length===0}function w(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),v.errors.push(e)}x(e.step)&&(i=e.step,e.step=function(t){v=t,C()?S():(S(),v.data.length!==0&&(d+=t.data.length,e.preview&&d>e.preview?n.abort():(v.data=v.data[0],i(v,u))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?x(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,g=0,_=0,v=(l=void 0,new h({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&b(v.data[y])?_++:(f=v.data[y].length,g+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(g/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<g)&&1.99<g&&(c=m,o=p,u=g)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),v.meta.delimiter=e.delimiter),y(e));return e.preview&&e.header&&c.preview++,t=i,n=new h(c),v=n.parse(t,a,o),S(),p?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,n.abort(),t=x(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){u.streamer._halted?(p=!1,u.streamer.parseChunk(t,!0)):setTimeout(u.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,n.abort(),v.meta.aborted=!0,x(e.complete)&&e.complete(v),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(m(t)+`([^]*?)`+m(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function m(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function h(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,c=null,l=!1,u=e.quoteChar==null?`"`:e.quoteChar,d=u;if(e.escapeChar!==void 0&&(d=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var f=0,p=!1;this.parse=function(s,h,g){if(typeof s!=`string`)throw Error(`Input must be a string`);var _=s.length,v=t.length,y=n.length,b=r.length,S=x(i),C=[],w=[],T=[],E=f=0;if(!s)return R();if(o||!1!==o&&s.indexOf(u)===-1){for(var D=s.split(n),O=0;O<D.length;O++){if(T=D[O],f+=T.length,O!==D.length-1)f+=n.length;else if(g)return R();if(!r||T.substring(0,b)!==r){if(S){if(C=[],P(T.split(t)),z(),p)return R()}else P(T.split(t));if(a&&a<=O)return C=C.slice(0,a),R(!0)}}return R()}for(var k=s.indexOf(t,f),A=s.indexOf(n,f),j=new RegExp(m(d)+m(u),`g`),M=s.indexOf(u,f);;)if(s[f]===u)for(M=f,f++;;){if((M=s.indexOf(u,M+1))===-1)return g||w.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:C.length,index:f}),I();if(M===_-1)return I(s.substring(f,M).replace(j,u));if(u===d&&s[M+1]===d)M++;else if(u===d||M===0||s[M-1]!==d){k!==-1&&k<M+1&&(k=s.indexOf(t,M+1));var N=F((A=A!==-1&&A<M+1?s.indexOf(n,M+1):A)===-1?k:Math.min(k,A));if(s.substr(M+1+N,v)===t){T.push(s.substring(f,M).replace(j,u)),s[f=M+1+N+v]!==u&&(M=s.indexOf(u,f)),k=s.indexOf(t,f),A=s.indexOf(n,f);break}if(N=F(A),s.substring(M+1+N,M+1+N+y)===n){if(T.push(s.substring(f,M).replace(j,u)),L(M+1+N+y),k=s.indexOf(t,f),M=s.indexOf(u,f),S&&(z(),p))return R();if(a&&C.length>=a)return R(!0);break}w.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:C.length,index:f}),M++}}else if(r&&T.length===0&&s.substring(f,f+b)===r){if(A===-1)return R();f=A+y,A=s.indexOf(n,f),k=s.indexOf(t,f)}else if(k!==-1&&(k<A||A===-1))T.push(s.substring(f,k)),f=k+v,k=s.indexOf(t,f);else{if(A===-1)break;if(T.push(s.substring(f,A)),L(A+y),S&&(z(),p))return R();if(a&&C.length>=a)return R(!0)}return I();function P(e){C.push(e),E=f}function F(e){var t=0;return t=e!==-1&&(e=s.substring(M+1,e))&&e.trim()===``?e.length:t}function I(e){return g||(e===void 0&&(e=s.substring(f)),T.push(e),f=_,P(T),S&&z()),R()}function L(e){f=e,P(T),T=[],A=s.indexOf(n,f)}function R(r){if(e.header&&!h&&C.length&&!l){var i=C[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=i[n];if(a[r=x(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(c=c===null?{}:c)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),l=!0}return{data:C,errors:w,meta:{delimiter:t,linebreak:n,aborted:p,truncated:!!r,cursor:E+(h||0),renamedHeaders:c}}}function z(){i(R()),C=[],w=[]}},this.abort=function(){p=!0},this.getCharIndex=function(){return f}}function g(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(x(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else x(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var n=a[e];x(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function v(){throw Error(`Not implemented.`)}function y(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=y(e[t]);return n}function b(e,t){return function(){e.apply(t,arguments)}}function x(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(x(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!x(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=(e=>e.charCodeAt(0)===65279?e.slice(1):e)(n),i=new(r.download?l:d)(r)):!0===n.readable&&x(n.read)&&x(n.on)?i=new f(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new u(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=g,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=x(r.step),r.chunk=x(r.chunk),r.complete=x(r.complete),r.error=x(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(m(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||=e.meta&&e.meta.fields||u,e.fields||=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[],Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=h(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var m=[],g=0;g<d;g++){var _=c?e[g]:g;m.push(t[u][_])}f=m.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=h(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function h(e,t){var r,a;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(a=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,a=!0),r=e.toString().replace(f,c),(a=a||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(r,s.BAD_DELIMITERS)||-1<r.indexOf(i)||r.charAt(0)===` `||r.charAt(r.length-1)===` `)?o+r+o:r)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=h,s.ParserHandle=p,s.NetworkStreamer=l,s.FileStreamer=u,s.StringStreamer=d,s.ReadableStreamStreamer=f,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)x(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(x(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(x(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){x(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(l.prototype=Object.create(c.prototype)).constructor=l,(u.prototype=Object.create(c.prototype)).constructor=u,(d.prototype=Object.create(d.prototype)).constructor=d,(f.prototype=Object.create(c.prototype)).constructor=f,s})}))(),1),v=`2PACX-1vQwqkX44b-HPNysrWI2Qy5AtbUv9DVW8JtDXiFBvoe7lkIbkp-TNP2VjLyli2AUzFFCHZH0HYvcfytH`,y={chapters:`0`,vocabulary:`195278083`,exercises:`1198814770`};function b(e){return`https://docs.google.com/spreadsheets/d/e/${v}/pub?gid=${e}&single=true&output=csv`}async function x(e){let t=await(await fetch(b(e))).text();return _.default.parse(t,{header:!0,skipEmptyLines:!0}).data}async function S(){let[e,t,n]=await Promise.all([x(y.chapters),x(y.vocabulary),x(y.exercises)]);return{chapters:e,vocabulary:t,exercises:n}}function C(){let e=(location.hash.replace(`#`,``)||`/`).split(`/`).filter(Boolean);return e.length===0?{page:`dashboard`}:e[0]===`chapter`&&e[1]?{page:e[2]||`chapter`,chapterId:e[1],section:e[2]||null}:{page:`dashboard`}}function w(e){location.hash=e}function T(e){window.addEventListener(`hashchange`,e)}var E={ch1:{color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},ch2:{color:`#EC4899`,bg:`#FAE9F2`,img:`ch2.png`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`,img:`ch3.png`},ch4:{color:`#10B981`,bg:`#E8F7EE`,img:`ch4.png`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`,img:`ch5.png`}};function D(e,t,n,r){let i=e[n]?.[t]||{},a=Object.values(i).filter(e=>e.completed||e.seen).length;return r>0?Math.round(a/r*100):0}function O(e,t,n,r){let i=p(),a=E[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},o=D(i,e.id,`vocabulary`,t.length),s=D(i,e.id,`exercises`,n.length);return`
    <div class="chapter-page">
      <!-- Header -->
      <header class="header">
        <button class="btn-back" id="btn-back">← Все главы</button>
        <div class="header-right">
          <span class="chapter-progress-label">${Math.round((o+s)/2)}% завершено</span>
        </div>
      </header>

      <!-- Chapter Hero -->
      <div class="chapter-hero" style="background: ${a.bg}">
        <div class="chapter-hero-text">
          <p class="chapter-num" style="color: ${a.color}">Глава ${e.id?.replace(`ch`,``)||``}</p>
          <h1 class="chapter-title">${e.title_fi}</h1>
          <p class="chapter-subtitle">${e.title_ru}</p>
          ${e.description?`<p class="chapter-desc">${e.description}</p>`:``}
        </div>
        <img src="/lets-go-finnish/${a.img}" class="chapter-hero-img" alt="">
      </div>

      <!-- Sections -->
      <div class="sections-grid">

        <!-- Vocabulary -->
        <div class="section-card" id="section-vocabulary">
          <div class="section-icon" style="background: ${a.bg}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="4" width="16" height="20" rx="3" stroke="${a.color}" stroke-width="2"/>
              <path d="M7 9h8M7 13h8M7 17h5" stroke="${a.color}" stroke-width="2" stroke-linecap="round"/>
              <rect x="13" y="10" width="12" height="14" rx="3" fill="${a.bg}" stroke="${a.color}" stroke-width="2"/>
              <path d="M16 14h6M16 17h4" stroke="${a.color}" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="section-info">
            <div class="section-name">Словарь</div>
            <div class="section-meta">${t.length} слов</div>
            <div class="progress-bar" style="margin-top: 8px">
              <div class="progress-fill" style="width: ${o}%; background: ${a.color}"></div>
            </div>
          </div>
          <button class="section-btn" style="color: ${a.color}; border-color: ${a.color}"
                  data-section="vocabulary">
            ${o===0?`Начать`:o===100?`Повторить`:`Продолжить →`}
          </button>
        </div>

        <!-- Grammar -->
        <div class="section-card" id="section-grammar">
          <div class="section-icon" style="background: ${a.bg}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="10" stroke="${a.color}" stroke-width="2"/>
              <path d="M10 14h8M14 10v8" stroke="${a.color}" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="section-info">
            <div class="section-name">Грамматика</div>
            <div class="section-meta">Правила и объяснения</div>
            <div class="progress-bar" style="margin-top: 8px">
              <div class="progress-fill" style="width: 0%; background: ${a.color}"></div>
            </div>
          </div>
          <button class="section-btn" style="color: ${a.color}; border-color: ${a.color}"
                  data-section="grammar">Скоро</button>
        </div>

        <!-- Exercises -->
        <div class="section-card" id="section-exercises">
          <div class="section-icon" style="background: ${a.bg}">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="3" y="3" width="22" height="22" rx="4" stroke="${a.color}" stroke-width="2"/>
              <path d="M9 14l3 3 7-7" stroke="${a.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="section-info">
            <div class="section-name">Упражнения</div>
            <div class="section-meta">${n.length} заданий</div>
            <div class="progress-bar" style="margin-top: 8px">
              <div class="progress-fill" style="width: ${s}%; background: ${a.color}"></div>
            </div>
          </div>
          <button class="section-btn" style="color: ${a.color}; border-color: ${a.color}"
                  data-section="exercises">
            ${s===0?`Начать`:s===100?`Повторить`:`Продолжить →`}
          </button>
        </div>

      </div>
    </div>
  `}function k(e){document.getElementById(`btn-back`)?.addEventListener(`click`,()=>{w(`/`)}),document.querySelectorAll(`.section-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.section;if(n===`grammar`){alert(`Грамматика — скоро!`);return}w(`/chapter/${e}/${n}`)})})}var A={ch1:{color:`#7C3AED`,bg:`#EDE7FB`},ch2:{color:`#EC4899`,bg:`#FAE9F2`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`},ch4:{color:`#10B981`,bg:`#E8F7EE`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`}},j=0,M=[],N=``,P=!1;function F(e,t){N=e.id,M=t,j=0,P=!1;let n=A[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`};return`
    <div class="vocab-page">
      <header class="header">
        <button class="btn-back" id="btn-back-vocab">← ${e.title_fi}</button>
        <span class="vocab-counter" id="vocab-counter">1 / ${M.length}</span>
      </header>

      <div class="vocab-container">
        <div class="flashcard" id="flashcard" style="--card-color: ${n.color}; --card-bg: ${n.bg}">
          <div class="flashcard-inner" id="flashcard-inner">
            <div class="flashcard-front">
              ${M[0]?.tag===`puhekieli`?`<span class="puhekieli-badge">🗣️ puhekieli</span>`:``}
              <span class="card-lang">финский</span>
              <div class="card-word" id="card-word-front">${M[0]?.finnish||``}</div>
              <span class="card-hint">нажми чтобы перевернуть</span>
            </div>
            <div class="flashcard-back">
              ${M[0]?.tag===`puhekieli`?`<span class="puhekieli-badge">🗣️ puhekieli</span>`:``}
              <span class="card-lang">перевод</span>
              <div class="card-word" id="card-word-back">${M[0]?.russian||``}</div>
              ${M[0]?.english?`<div class="card-word-en">${M[0].english}</div>`:``}
            </div>
          </div>
        </div>

        <div class="vocab-actions" id="vocab-actions" style="display: none">
          <button class="vocab-btn vocab-hard" id="btn-hard">😕 Сложно</button>
          <button class="vocab-btn vocab-ok" id="btn-ok">😐 Нормально</button>
          <button class="vocab-btn vocab-know" id="btn-know" style="background: ${n.color}; color: white">✓ Знаю!</button>
        </div>

        <div class="vocab-dots" id="vocab-dots">
          ${M.map((e,t)=>`<span class="vocab-dot ${t===0?`active`:``}" data-i="${t}"></span>`).join(``)}
        </div>
      </div>
    </div>
  `}function I(e){let t=A[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`};N=e.id,document.getElementById(`btn-back-vocab`)?.addEventListener(`click`,()=>{w(`/chapter/${e.id}`)});let n=document.getElementById(`flashcard-inner`);document.getElementById(`flashcard`)?.addEventListener(`click`,()=>{P||(P=!0,n.classList.add(`flipped`),document.getElementById(`vocab-actions`).style.display=`flex`)});function r(r){if(g(d().activeProfile,N,j,r),j++,j>=M.length){L(e,t);return}P=!1,n.classList.remove(`flipped`),document.getElementById(`vocab-actions`).style.display=`none`;let i=M[j];document.getElementById(`card-word-front`).textContent=i.finnish,document.getElementById(`card-word-back`).textContent=i.russian,document.querySelectorAll(`.flashcard-front, .flashcard-back`).forEach(e=>{let t=e.querySelector(`.puhekieli-badge`);if(i.tag===`puhekieli`){if(!t){let t=document.createElement(`span`);t.className=`puhekieli-badge`,t.textContent=`🗣️ puhekieli`,e.prepend(t)}}else t?.remove()}),document.getElementById(`vocab-counter`).textContent=`${j+1} / ${M.length}`,document.querySelectorAll(`.vocab-dot`).forEach((e,t)=>{e.classList.toggle(`active`,t===j),t<j&&e.classList.add(`done`)})}document.getElementById(`btn-hard`)?.addEventListener(`click`,()=>r(!1)),document.getElementById(`btn-ok`)?.addEventListener(`click`,()=>r(!1)),document.getElementById(`btn-know`)?.addEventListener(`click`,()=>r(!0))}function L(e,t){document.querySelector(`.vocab-container`).innerHTML=`
    <div class="complete-screen">
      <div class="complete-emoji">🎉</div>
      <h2>Словарь главы пройден!</h2>
      <p style="color: #6B7280; margin-top: 8px">${M.length} слов изучено</p>
      <button class="btn-complete" style="background: ${t.color}" id="btn-to-chapter">
        Вернуться к главе →
      </button>
    </div>
  `,document.getElementById(`btn-to-chapter`)?.addEventListener(`click`,()=>{w(`/chapter/${e.id}`)})}var R={ch1:{color:`#7C3AED`,bg:`#EDE7FB`},ch2:{color:`#EC4899`,bg:`#FAE9F2`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`},ch4:{color:`#10B981`,bg:`#E8F7EE`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`}},z={multiple_choice:`☑️ Выбери правильный`,fill_blank:`✏️ Заполни пропуск`,self_check:`👁️ Самопроверка`,matching:`🔗 Соедини пары`,vowel_harmony:`🔤 Гармония гласных`},B=[],V=0,H=null,U=null,W=!1;function ee(e,t){return H=e,B=t,V=0,W=!1,U=R[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},B.length?`
    <div class="ex-page">
      <header class="header">
        <button class="btn-back" id="btn-back-ex">← ${e.title_fi}</button>
        <span class="ex-counter" id="ex-counter">${V+1} / ${B.length}</span>
      </header>
      <div class="ex-progress-bar">
        <div class="ex-progress-fill" id="ex-progress-fill"
             style="width: ${G(0)}%; background: ${U.color}"></div>
      </div>
      <div class="ex-container" id="ex-container">
        ${K(B[0],0)}
      </div>
    </div>
  `:`
      <div class="ex-page">
        <header class="header">
          <button class="btn-back" id="btn-back-ex">← ${e.title_fi}</button>
        </header>
        <div class="loading">Упражнения скоро появятся 💪<br>
          <small style="color:#aaa">Добавь их в Google Sheets → лист exercises</small>
        </div>
      </div>`}function G(e){return Math.round(e/B.length*100)}function te(e){return e.map(e=>({v:e,sort:Math.random()})).sort((e,t)=>e.sort-t.sort).map(({v:e})=>e)}function K(e,t){let n=e.type||`multiple_choice`,r=z[n]||n,i=[e.option_a,e.option_b,e.option_c,e.option_d].filter(Boolean),a=`abcd`.indexOf((e.correct||`a`).toLowerCase()),o=i[a]||i[0],s=n===`self_check`?i:te(i.map((e,t)=>({text:e,isCorrect:t===a})));return n===`self_check`?`
      <div class="ex-card" data-type="${n}">
        <div class="ex-type-badge" style="background: ${U.bg}; color: ${U.color}">${r}</div>
        <div class="ex-question">${e.question}</div>
        <textarea class="ex-textarea" placeholder="Напиши свой ответ..."></textarea>
        <button class="ex-show-answer" id="btn-show-answer"
                style="border-color: ${U.color}; color: ${U.color}">
          Показать ответ
        </button>
        <div class="ex-answer-reveal" id="answer-reveal" style="display:none">
          <div class="ex-answer-text">${e.option_b||e.explanation||``}</div>
          <p style="color: #6B7280; font-size: 13px; margin-top: 8px">Как оцениваешь свой ответ?</p>
          <div class="self-check-btns">
            <button class="self-btn self-wrong" data-result="wrong">😕 Неверно</button>
            <button class="self-btn self-close" data-result="close">~ Близко</button>
            <button class="self-btn self-right" data-result="right"
                    style="background: ${U.color}; color: white">✓ Верно</button>
          </div>
        </div>
      </div>
    `:`
    <div class="ex-card" data-type="${n}" data-correct="${o}">
      <div class="ex-type-badge" style="background: ${U.bg}; color: ${U.color}">${r}</div>
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
  `}function ne(e){H=e,U=R[e.id]||{color:`#7C3AED`,bg:`#EDE7FB`},document.getElementById(`btn-back-ex`)?.addEventListener(`click`,()=>{w(`/chapter/${e.id}`)}),q()}function q(){let e=B[V];e&&(W=!1,document.getElementById(`btn-show-answer`)?.addEventListener(`click`,()=>{document.getElementById(`answer-reveal`).style.display=`block`,document.getElementById(`btn-show-answer`).style.display=`none`}),document.querySelectorAll(`.self-btn`).forEach(e=>{e.addEventListener(`click`,()=>{e.dataset.result,h(d().activeProfile,H.id,V,e.dataset.result),J()})}),document.querySelectorAll(`.ex-option`).forEach(t=>{t.addEventListener(`click`,()=>{if(W)return;W=!0;let n=t.dataset.correct===`true`,r=document.querySelector(`.ex-card`).dataset.correct;document.querySelectorAll(`.ex-option`).forEach(e=>{e.dataset.correct===`true`?e.classList.add(`correct`):e===t&&!n&&e.classList.add(`wrong`),e.disabled=!0});let i=document.getElementById(`ex-feedback`);i.style.display=`block`,i.innerHTML=n?`<div class="feedback-correct" style="border-color: ${U.color}">
             ✓ Правильно! ${e.explanation?`<span>${e.explanation}</span>`:``}
           </div>
           <button class="ex-next-btn" id="btn-next" style="background: ${U.color}">
             ${V+1<B.length?`Следующее →`:`Завершить 🎉`}
           </button>`:`<div class="feedback-wrong">
             ✗ Правильный ответ: <strong>${r}</strong>
             ${e.explanation?`<br><span>${e.explanation}</span>`:``}
           </div>
           <button class="ex-next-btn" id="btn-next" style="background: ${U.color}">
             ${V+1<B.length?`Следующее →`:`Завершить 🎉`}
           </button>`,h(d().activeProfile,H.id,V,n?`right`:`wrong`),document.getElementById(`btn-next`)?.addEventListener(`click`,J)})}))}function J(){if(V++,V>=B.length){re();return}let e=document.getElementById(`ex-container`);e.innerHTML=K(B[V],V),document.getElementById(`ex-counter`).textContent=`${V+1} / ${B.length}`,document.getElementById(`ex-progress-fill`).style.width=`${G(V)}%`,q()}function re(){let e=document.getElementById(`ex-container`);e.innerHTML=`
    <div class="complete-screen">
      <div class="complete-emoji">🏆</div>
      <h2>Упражнения завершены!</h2>
      <p style="color: #6B7280; margin-top: 8px">${B.length} заданий выполнено</p>
      <button class="btn-complete" style="background: ${U.color}" id="btn-to-chapter-ex">
        Вернуться к главе →
      </button>
    </div>
  `,document.getElementById(`btn-to-chapter-ex`)?.addEventListener(`click`,()=>{w(`/chapter/${H.id}`)})}var Y={ch1:{color:`#7C3AED`,bg:`#EDE7FB`,img:`ch1.png`},ch2:{color:`#EC4899`,bg:`#FAE9F2`,img:`ch2.png`},ch3:{color:`#F59E0B`,bg:`#FEEEDB`,img:`ch3.png`},ch4:{color:`#10B981`,bg:`#E8F7EE`,img:`ch4.png`},ch5:{color:`#3B82F6`,bg:`#E9EEFB`,img:`ch5.png`}},ie=[{id:`ch1`,title_fi:`Hei ja tervetuloa`,title_ru:`Привет и добро пожаловать`,level:`A0–A1`},{id:`ch2`,title_fi:`Minkämaalainen sinä olet?`,title_ru:`Ты откуда?`,level:`A0–A1`},{id:`ch3`,title_fi:`Pedro soittaa Mikkolle`,title_ru:`Педро звонит Микко`,level:`A0–A1`},{id:`ch4`,title_fi:`Minä`,title_ru:`Я`,level:`A0–A1`},{id:`ch5`,title_fi:`Meidän tavallinen päivä`,title_ru:`Наш обычный день`,level:`A0–A1`}],ae=[`A0–A1`,`A1–A2`,`A2–B1`,`B1–B2`],oe={"A0–A1":{color:`#7C3AED`,bg:`#EDE7FB`},"A1–A2":{color:`#EC4899`,bg:`#FAE9F2`},"A2–B1":{color:`#F59E0B`,bg:`#FEEEDB`},"B1–B2":{color:`#10B981`,bg:`#E8F7EE`}};function se(e){let t=new Date().getHours();return t>=6&&t<12?`Hyvää huomenta, ${e}! ☀️ Готова к финскому?`:t>=12&&t<18?`Hei hei, ${e}! Продолжим?`:`Hyvää iltaa, ${e}! Один урок перед сном?`}function ce(e,t,n=20){let r=e.exercises[t]||{},i=e.vocabulary[t]||{},a=Object.values(r).filter(e=>e.completed).length+Object.values(i).filter(e=>e.seen).length;return Math.min(100,Math.round(a/n*100))}function le(e){let t=e.profiles;return`
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
  `}function ue(e,t){let n=p();return`
    ${le(e)}
    <div class="hero">
      <div class="hero-text">
        <h1><span class="hero-accent">Suomi on vaikea.</span><br>Mutta me справимся 💪</h1>
        <p class="greeting">${se(n.name)}</p>
      </div>
      <div class="hero-deco">
        <div class="deco-card deco-1"><span class="deco-dot"></span>Moikka! — Привет!</div>
        <div class="deco-card deco-2"><span class="deco-dot"></span>Kiitos — Спасибо</div>
        <div class="deco-card deco-3"><span class="deco-dot"></span>Hyvää! — Отлично!</div>
      </div>
    </div>
    ${de(t,n)}
  `}function de(e,t){let n={};return e.forEach((e,t)=>{let r=e.level||`A0–A1`;n[r]||(n[r]=[]),n[r].push({...e,globalIndex:t})}),ae.filter(e=>n[e]).map(e=>{let r=oe[e]||{color:`#7C3AED`,bg:`#EDE7FB`},i=n[e],a=i.reduce((e,n)=>e+ce(t,n.id),0)/i.length;return`
        <div class="level-section">
          <div class="level-header">
            <div class="level-badge" style="background: ${r.bg}; color: ${r.color}">${e}</div>
            <div class="level-progress-wrap">
              <div class="level-progress-bar">
                <div class="level-progress-fill" style="width: ${Math.round(a)}%; background: ${r.color}"></div>
              </div>
              <span class="level-progress-label" style="color: ${r.color}">${Math.round(a)}%</span>
            </div>
          </div>
          <div class="chapters-grid">
            ${i.map((e,n)=>fe(e,e.globalIndex+1,t)).join(``)}
          </div>
        </div>
      `}).join(``)}function fe(e,t,n){let r=ce(n,e.id),i=r===100,a=r===0?`Начать`:i?`Повторить`:`Продолжить →`;return`
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
  `}function X(e){document.querySelector(`#app`).innerHTML=e}function pe(){document.querySelectorAll(`.profile-btn`).forEach(e=>{e.addEventListener(`click`,()=>{m(e.dataset.profile),Q()})}),document.querySelectorAll(`.chapter-card`).forEach(e=>{e.addEventListener(`click`,()=>{w(`/chapter/${e.dataset.chapter}`)})})}var Z=ie.map(e=>({...e,...Y[e.id]}));function Q(){X(ue(d(),Z)),pe()}var $={chapters:[],vocabulary:[],exercises:[]};async function me(){document.querySelector(`#app`).innerHTML=`<div class="loading">Загружаем финский... 🇫🇮</div>`;try{$=await S(),$.chapters?.length>0&&(Z=$.chapters.map(e=>({...e,...Y[e.id]})))}catch{console.log(`Sheets недоступен, используем demo данные`)}he(),T(he)}function he(){let e=C(),t=d();if(e.page===`dashboard`||!e.page){Q();return}let n=Z.find(t=>t.id===e.chapterId);if(!n){Q();return}let r=$.vocabulary.filter(t=>t.chapter_id===e.chapterId),i=$.exercises.filter(t=>t.chapter_id===e.chapterId);if(e.section===`vocabulary`){X(F(n,r)),I(n);return}if(e.section===`exercises`){X(ee(n,i)),ne(n);return}X(O(n,r,i,t)),k(e.chapterId)}me();