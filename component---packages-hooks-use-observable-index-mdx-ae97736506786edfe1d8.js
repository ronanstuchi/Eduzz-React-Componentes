(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{WnAq:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return Ee})),n.d(t,"default",(function(){return Ie}));var r=n("cxan"),o=n("+wNj"),i=n("ERkP"),u=n("ZVZ0"),a=n("9Rvw"),c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}Object.create;function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function h(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof b?Promise.resolve(n.value.v).then(c,s):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function c(e){a("next",e)}function s(e){a("throw",e)}function l(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}Object.create;function m(e){return"function"==typeof e}var g,w=((g=function(e){return function(t){e(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}((function(e){Error.call(e),e.stack=(new Error).stack}))).prototype=Object.create(Error.prototype),g.prototype.constructor=g,g);function _(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var x=function(){function e(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._teardowns=null}return e.prototype.unsubscribe=function(){var e,t,n,r,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var u=p(i),a=u.next();!a.done;a=u.next()){a.value.remove(this)}}catch(y){e={error:y}}finally{try{a&&!a.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}else i.remove(this);var c=this.initialTeardown;if(m(c))try{c()}catch(v){o=v instanceof w?v.errors:[v]}var s=this._teardowns;if(s){this._teardowns=null;try{for(var l=p(s),f=l.next();!f.done;f=l.next()){var b=f.value;try{S(b)}catch(g){o=null!=o?o:[],g instanceof w?o=h(h([],d(o)),d(g.errors)):o.push(g)}}}catch(_){n={error:_}}finally{try{f&&!f.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}}if(o)throw new w(o)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)S(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=null!==(n=this._teardowns)&&void 0!==n?n:[]).push(t)}},e.prototype._hasParent=function(e){var t=this._parentage;return t===e||Array.isArray(t)&&t.includes(e)},e.prototype._addParent=function(e){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e},e.prototype._removeParent=function(e){var t=this._parentage;t===e?this._parentage=null:Array.isArray(t)&&_(t,e)},e.prototype.remove=function(t){var n=this._teardowns;n&&_(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}();x.EMPTY;function O(e){return e instanceof x||e&&"closed"in e&&m(e.remove)&&m(e.add)&&m(e.unsubscribe)}function S(e){m(e)?e():e.unsubscribe()}var j=function(e){function t(t,n){return e.call(this)||this}return s(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(x),T={setInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=T.delegate;return((null==n?void 0:n.setInterval)||setInterval).apply(void 0,h([],d(e)))})),clearInterval:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=T.delegate;return((null==t?void 0:t.clearInterval)||clearInterval)(e)})),delegate:void 0},k=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return s(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),T.setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!=n&&this.delay===n&&!1===this.pending)return t;T.clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n,r=!1;try{this.work(e)}catch(o){r=!0,n=!!o&&o||new Error(o)}if(r)return this.unsubscribe(),n},t.prototype.unsubscribe=function(){if(!this.closed){var t=this.id,n=this.scheduler,r=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,_(r,this),null!=t&&(this.id=this.recycleAsyncId(n,t,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t}(j),E={now:function(){return(E.delegate||Date).now()},delegate:void 0},P=function(){function e(t,n){void 0===n&&(n=e.now),this.schedulerActionCtor=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.schedulerActionCtor(this,e).schedule(n,t)},e.now=E.now,e}(),C=new(function(e){function t(t,n){void 0===n&&(n=P.now);var r=e.call(this,t,n)||this;return r.actions=[],r._active=!1,r._scheduled=void 0,r}return s(t,e),t.prototype.flush=function(e){var t=this.actions;if(this._active)t.push(e);else{var n;this._active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(P))(k),I=C,A=n("JL5j"),R={setTimeout:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=R.delegate;return((null==n?void 0:n.setTimeout)||setTimeout).apply(void 0,h([],d(e)))})),clearTimeout:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=R.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(e)})),delegate:void 0};function D(e){R.setTimeout((function(){var t=A.a.onUnhandledError;if(!t)throw e;t(e)}))}function N(){}var L=B("C",void 0,void 0);function B(e,t,n){return{kind:e,value:t,error:n}}var q=function(e){function t(t){var n=e.call(this)||this;return n.isStopped=!1,t?(n.destination=t,O(t)&&t.add(n)):n.destination=F,n}return s(t,e),t.create=function(e,t,n){return new z(e,t,n)},t.prototype.next=function(e){this.isStopped?V(function(e){return B("N",e,void 0)}(e),this):this._next(e)},t.prototype.error=function(e){this.isStopped?V(B("E",void 0,e),this):(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped?V(L,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(x),z=function(e){function t(t,n,r){var o,i=e.call(this)||this;if(m(t))o=t;else if(t){var u;o=t.next,n=t.error,r=t.complete,i&&A.a.useDeprecatedNextContext?(u=Object.create(t)).unsubscribe=function(){return i.unsubscribe()}:u=t,o=null==o?void 0:o.bind(u),n=null==n?void 0:n.bind(u),r=null==r?void 0:r.bind(u)}return i.destination={next:o?M(o,i):N,error:M(null!=n?n:H,i),complete:r?M(r,i):N},i}return s(t,e),t}(q);function M(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];try{e.apply(void 0,h([],d(n)))}catch(o){if(A.a.useDeprecatedSynchronousErrorHandling){if(!t._syncErrorHack_isSubscribing)throw o;t.__syncError=o}else D(o)}}}function H(e){throw e}function V(e,t){var n=A.a.onStoppedNotification;n&&R.setTimeout((function(){return n(e,t)}))}var F={closed:!0,next:N,error:H,complete:N},U="function"==typeof Symbol&&Symbol.observable||"@@observable";function Y(e){return e}function G(e){return 0===e.length?Y:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var J=function(){function e(e){e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var r,o=(r=e)&&r instanceof q||function(e){return e&&m(e.next)&&m(e.error)&&m(e.complete)}(r)&&O(r)?e:new z(e,t,n);if(A.a.useDeprecatedSynchronousErrorHandling)this._deprecatedSyncErrorSubscribe(o);else{var i=this.operator,u=this.source;o.add(i?i.call(o,u):u?this._subscribe(o):this._trySubscribe(o))}return o},e.prototype._deprecatedSyncErrorSubscribe=function(e){var t=e;t._syncErrorHack_isSubscribing=!0;var n=this.operator;if(n)e.add(n.call(e,this.source));else try{e.add(this._subscribe(e))}catch(o){t.__syncError=o}for(var r=t;r;){if("__syncError"in r)try{throw r.__syncError}finally{e.unsubscribe()}r=r.destination}t._syncErrorHack_isSubscribing=!1},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=X(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(n){r(n),null==o||o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(e)},e.prototype[U]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length?G(e)(this):this},e.prototype.toPromise=function(e){var t=this;return new(e=X(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function X(e){var t;return null!==(t=null!=e?e:A.a.Promise)&&void 0!==t?t:Promise}function W(e){return e&&m(e.schedule)}function Z(e,t,n){void 0===e&&(e=0),void 0===n&&(n=I);var r=-1;return null!=t&&(W(t)?n=t:r=t),new J((function(t){var o,i=(o=e)instanceof Date&&!isNaN(o)?+e-n.now():e;i<0&&(i=0);var u=0;return n.schedule((function(){t.closed||(t.next(u++),0<=r?this.schedule(void 0,r):t.complete())}),i)}))}function K(e,t){return void 0===e&&(e=0),void 0===t&&(t=C),e<0&&(e=0),Z(e,e,t)}function Q(e,t){return new J((function(n){var r=0;return t.schedule((function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())}))}))}var $=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e};function ee(e){return m(null==e?void 0:e.then)}var te="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function ne(e){return m(e[U])}function re(e){return m(null==e?void 0:e[te])}function oe(e){return Symbol.asyncIterator&&m(null==e?void 0:e[Symbol.asyncIterator])}function ie(e){return new TypeError("You provided "+(null!==e&&"object"==typeof e?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ue(e){return y(this,arguments,(function(){var t,n,r;return f(this,(function(o){switch(o.label){case 0:t=e.getReader(),o.label=1;case 1:o.trys.push([1,,9,10]),o.label=2;case 2:return[4,b(t.read())];case 3:return n=o.sent(),r=n.value,n.done?[4,b(void 0)]:[3,5];case 4:return[2,o.sent()];case 5:return[4,b(r)];case 6:return[4,o.sent()];case 7:return o.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}}))}))}function ae(e){return m(null==e?void 0:e.getReader)}function ce(e){if(e instanceof J)return e;if(null!=e){if(ne(e))return r=e,new J((function(e){var t=r[U]();if(m(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")}));if($(e))return se(e);if(ee(e))return n=e,new J((function(e){n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,D)}));if(oe(e))return le(e);if(re(e))return t=e,new J((function(e){var n,r;try{for(var o=p(t),i=o.next();!i.done;i=o.next()){var u=i.value;if(e.next(u),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()}));if(ae(e))return le(ue(e))}var t,n,r;throw ie(e)}function se(e){return new J((function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()}))}function le(e){return new J((function(t){(function(e,t){var n,r,o,i;return l(this,void 0,void 0,(function(){var u,a;return f(this,(function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=v(e),c.label=1;case 1:return[4,n.next()];case 2:if((r=c.sent()).done)return[3,4];if(u=r.value,t.next(u),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),o={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}}))}))})(e,t).catch((function(e){return t.error(e)}))}))}function fe(e,t){return t?Q(e,t):se(e)}function pe(e){return e[e.length-1]}function de(e){return W(pe(e))?e.pop():void 0}function he(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=de(e);return n?Q(e,n):fe(e)}function be(e){return function(t){if(function(e){return m(null==e?void 0:e.lift)}(t))return t.lift((function(t){try{return e(t,this)}catch(n){this.error(n)}}));throw new TypeError("Unable to lift unknown Observable type")}}var ye=function(e){function t(t,n,r,o,i){var u=e.call(this,t)||this;return u.onFinalize=i,u._next=n?function(e){try{n(e)}catch(r){t.error(r)}}:e.prototype._next,u._error=o?function(e){try{o(e)}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._error,u._complete=r?function(){try{r()}catch(e){t.error(e)}finally{this.unsubscribe()}}:e.prototype._complete,u}return s(t,e),t.prototype.unsubscribe=function(){var t,n=this.closed;e.prototype.unsubscribe.call(this),!n&&(null===(t=this.onFinalize)||void 0===t||t.call(this))},t}(q);function ve(e,t){return be((function(n,r){var o=0;n.subscribe(new ye(r,(function(n){r.next(e.call(t,n,o++))})))}))}function me(e,t,n){return void 0===n&&(n=1/0),m(t)?me((function(n,r){return ve((function(e,o){return t(n,e,r,o)}))(ce(e(n,r)))}),n):("number"==typeof t&&(n=t),be((function(t,r){return function(e,t,n,r,o,i,u,a){var c=[],s=0,l=0,f=!1,p=function(){!f||c.length||s||t.complete()},d=function(e){return s<r?h(e):c.push(e)},h=function e(a){i&&t.next(a),s++;var f=!1;ce(n(a,l++)).subscribe(new ye(t,(function(e){null==o||o(e),i?d(e):t.next(e)}),(function(){f=!0}),void 0,(function(){if(f)try{s--;for(var n=function(){var n=c.shift();u?t.add(u.schedule((function(){return e(n)}))):e(n)};c.length&&s<r;)n();p()}catch(o){t.error(o)}})))};return e.subscribe(new ye(t,d,(function(){f=!0,p()}))),function(){null==a||a()}}(t,r,e,n)})))}function ge(){return void 0===(e=1)&&(e=1/0),me(Y,e);var e}var we=new J((function(e){return e.complete()}));function _e(e){return e<=0?function(){return we}:be((function(t,n){var r=0;t.subscribe(new ye(n,(function(t){++r<=e&&(n.next(t),e<=r&&n.complete())})))}))}function xe(e,t){return t?function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return ge()(fe(e,de(e)))}(t.pipe(_e(1),be((function(e,t){e.subscribe(new ye(t,N))}))),n.pipe(xe(e)))}:me((function(t,n){return e(t,n).pipe(_e(1),function(e){return ve((function(){return e}))}(t))}))}function Oe(e,t){void 0===t&&(t=C);var n=Z(e,t);return xe((function(){return n}))}var Se=n("x6WP"),je=n("E1Lo"),Te=n("qbsg"),ke=n("BzPC"),Ee=(n("l1C2"),{});void 0!==Ee&&Ee&&Ee===Object(Ee)&&Object.isExtensible(Ee)&&!Ee.hasOwnProperty("__filemeta")&&Object.defineProperty(Ee,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/hooks/useObservable/index.mdx"}});var Pe={_frontmatter:Ee},Ce=a.a;function Ie(e){var t,n,c=e.components,s=Object(o.a)(e,["components"]);return Object(u.b)(Ce,Object(r.a)({},Pe,s,{components:c,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"useobservable"},"useObservable"),Object(u.b)("p",null,"Dá Subscribe e retorna o resultado de um Observable e quando o componente desmonta (unmount) também dá unsubscribe,\ndiminuindo assim o risco de Memory Leak."),Object(u.b)("h1",{id:"como-usar"},"Como usar"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-tsx"},"const [value, error, completed, loading] = useObservable(() => userService.get(), []);\n\nreturn (\n  <div>\n    {loading ? 'Carregnado' : ''}\n    {value}\n  </div>\n);\n")),Object(u.b)(Te.c,{__position:0,__code:'() => {\n  const [reset, setReset] = useState()\n  const [value, error, completed] = useObservable(\n    () => interval(1000).pipe(take(10)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {value}</Typography>\n      <Typography>Completed: {completed.toString()}</Typography>\n      <Button onClick={onReset} variant="text">\n        Reset\n      </Button>\n    </div>\n  )\n}',__scope:(t={props:s,DefaultLayout:a.a,useState:i.useState,useCallback:i.useCallback,interval:K,of:he,delay:Oe,take:_e,Button:Se.a,Typography:je.a,Playground:Te.c,useObservable:ke.a},t.DefaultLayout=a.a,t._frontmatter=Ee,t),mdxType:"Playground"},(function(){var e=Object(i.useState)(),t=e[0],n=e[1],r=Object(ke.a)((function(){return K(1e3).pipe(_e(10))}),[t]),o=r[0],a=(r[1],r[2]),c=Object(i.useCallback)((function(){return n(Date.now())}),[]);return Object(u.b)("div",null,Object(u.b)(je.a,{mdxType:"Typography"},"Value: ",o),Object(u.b)(je.a,{mdxType:"Typography"},"Completed: ",a.toString()),Object(u.b)(Se.a,{onClick:c,variant:"text",mdxType:"Button"},"Reset"))})),Object(u.b)("h2",{id:"cuidados"},"Cuidados"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("strong",{parentName:"li"},"Erros")," ocorridos serão automaticamentes logados (não tratados) se as o ",Object(u.b)("strong",{parentName:"li"},"onUnhandledError")," for setado, mas se utilizar o\noperador catchError esse erro não será logado pois foi previamente tratado, nesse caso o log deve ser feito manualmente."),Object(u.b)("li",{parentName:"ul"},"O valor inicial será ",Object(u.b)("strong",{parentName:"li"},"undefined"),", lembre-se de tratar isso quando estiver usando:")),Object(u.b)(Te.c,{__position:1,__code:"() => {\n  const [reset, setReset] = useState()\n  const [user, error, completed, loading] = useObservable(\n    () => of({ name: 'Eduzz' }).pipe(delay(2000)),\n    [reset],\n  )\n  const onReset = useCallback(() => setReset(Date.now()), [])\n  return (\n    <div>\n      <Typography>Value: {user && user.name}</Typography>\n      <Typography>Loading: {loading.toString()}</Typography>\n      <Button onClick={onReset} variant=\"text\">\n        Reset\n      </Button>\n    </div>\n  )\n}",__scope:(n={props:s,DefaultLayout:a.a,useState:i.useState,useCallback:i.useCallback,interval:K,of:he,delay:Oe,take:_e,Button:Se.a,Typography:je.a,Playground:Te.c,useObservable:ke.a},n.DefaultLayout=a.a,n._frontmatter=Ee,n),mdxType:"Playground"},(function(){var e=Object(i.useState)(),t=e[0],n=e[1],r=Object(ke.a)((function(){return he({name:"Eduzz"}).pipe(Oe(2e3))}),[t]),o=r[0],a=(r[1],r[2],r[3]),c=Object(i.useCallback)((function(){return n(Date.now())}),[]);return Object(u.b)("div",null,Object(u.b)(je.a,{mdxType:"Typography"},"Value: ",o&&o.name),Object(u.b)(je.a,{mdxType:"Typography"},"Loading: ",a.toString()),Object(u.b)(Se.a,{onClick:c,variant:"text",mdxType:"Button"},"Reset"))})),Object(u.b)("h2",{id:"parâmetros-e-retorno"},"Parâmetros e Retorno"),Object(u.b)("pre",null,Object(u.b)("code",{parentName:"pre",className:"language-ts"},"/**\n * @param observableGenerator Função que retorna um Observable\n * @param deps Lista de dependências\n * @returns [\n *    value: valor de retorno do Observable,\n *    error: se ocorrer um erro, ele será passado aqui,\n *    complete: boolean se o observable foi completado ou não,\n *    loading: boolean se esta carregando ou nào\n * ]\n */\nexport default useObservable<T>(observableGenerator: observerFunction<T>, deps: React.DependencyList): [T, any, boolean, boolean, undefined];\n")))}void 0!==Ie&&Ie&&Ie===Object(Ie)&&Object.isExtensible(Ie)&&!Ie.hasOwnProperty("__filemeta")&&Object.defineProperty(Ie,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/hooks/useObservable/index.mdx"}}),Ie.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-hooks-use-observable-index-mdx-ae97736506786edfe1d8.js.map