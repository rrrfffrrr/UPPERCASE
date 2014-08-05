global.TO_DELETE=TO_DELETE=null,global.CONFIG=CONFIG={},global.METHOD=METHOD=function(t){"use strict";var n,e,r=function(t,n){return void 0!==e?e(t,n):void 0};return r.type=METHOD,n="function"==typeof t?t(r):t,void 0!==n&&(e=n.run),r},global.CLASS=CLASS=METHOD(function(t){"use strict";var n,e=0;return t.getInstanceId=n=function(){return e+=1,e-1},{run:function(t){var e,r,i,a,u,o,E,c=function(t,e){var r={},i={};return i.type=c,i.checkIsInstanceOf=function(t){for(var n=c;void 0!==n;){if(n===t)return!0;n=n.mom}return!1},i.id=n(),o(r,i,t,e),E(r,i,t,e),i};return c.type=CLASS,c.innerInit=o=function(t,n,e,u){var o,E,A;void 0!==a&&(void 0===e?e=a(c):CHECK_IS_DATA(e)===!0?(E=a(c),void 0!==E&&EACH(E,function(t,n){void 0===e[n]&&(e[n]=t)})):(A=e,e=a())),void 0!==r&&(o=r(e,u),void 0!==o&&(c.mom=o,o.type===CLASS?o.innerInit(t,n,e,u):o.type.innerInit(t,n,e,u))),void 0!==i&&i(t,n,void 0===A?e:A,u)},e="function"==typeof t?t(c):t,void 0!==e&&(r=e.preset,i=e.init,a=e.params,u=e.afterInit),c.innerAfterInit=E=function(t,n,e,r){var i=c.mom;void 0!==u&&u(t,n,e,r),void 0!==i&&(i.type===CLASS?i.innerAfterInit(t,n,e,r):i.type.innerAfterInit(t,n,e,r))},c}}}),global.OBJECT=OBJECT=METHOD(function(t){"use strict";var n,e,r,i,a=[],u=!1;return n=function(t){var n=t.type,e={},r={};t.id=CLASS.getInstanceId(),n.innerInit(e,t,r),n.innerAfterInit(e,t,r)},e=function(t){u===!0?n(t):a.push(t)},t.removeReadyObject=r=function(t){REMOVE({data:a,value:t})},t.initObjects=i=function(){EACH(a,function(t){n(t)}),u=!0},{run:function(t){var n=CLASS(t),r={};return r.type=n,r.checkIsInstanceOf=function(t){for(var e=n;void 0!==e;){if(e===t)return!0;e=e.mom}return!1},e(r),r}}}),global.INIT_OBJECTS=INIT_OBJECTS=METHOD({run:function(){"use strict";OBJECT.initObjects()}}),global.CHECK_ARE_SAME=CHECK_ARE_SAME=METHOD({run:function(t){"use strict";var n=!1,e=function(t,n){return t instanceof Date==!0&&n instanceof Date==!0?t.getTime()===n.getTime():CHECK_IS_DATA(t)===!0&&CHECK_IS_DATA(n)===!0?EACH(t,function(t,r){return e(t,n[r])}):CHECK_IS_ARRAY(t)===!0&&CHECK_IS_ARRAY(n)===!0?EACH(t,function(t,r){return e(t,n[r])}):t===n};return t.length>1&&(n=REPEAT(t.length,function(n){return n<t.length-1?e(t[n],t[n+1]):e(t[n],t[0])})),n}}),global.NEXT=NEXT=METHOD({run:function(t,n){"use strict";var e,r,i;void 0===n&&(n=t,t=void 0),void 0!==t&&(CHECK_IS_ARRAY(t)!==!0?e=t:r=t),FOR({start:n.length-1,end:0},function(t){var a;void 0===i?i=n[t]():t>0?(a=i,i=n[t](a),i.next=a):(a=i,i=n[t],void 0!==e?RUN(function(){var t=0;RUN(function(n){e>t+1?i(t,n):i(t,a),t+=1})}):void 0!==r?RUN(function(){var t=r.length,n=0;t>0&&RUN(function(e){t>n+1?(r.length===t-1&&(n-=1,t-=1),i(r[n],e)):i(r[n],a),n+=1})}):i(a))})}}),global.OVERRIDE=OVERRIDE=METHOD({run:function(t,n){"use strict";void 0!==t.type&&t.type.type===CLASS&&OBJECT.removeReadyObject(t),n(t)}}),global.PARSE_STR=PARSE_STR=METHOD({run:function(t){"use strict";var n;try{return n=JSON.parse(t),CHECK_IS_DATA(n)===!0?UNPACK_DATA(n):n}catch(e){return void 0}}}),global.RANDOM_STR=RANDOM_STR=METHOD({run:function(t){"use strict";var n,e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(n=0;t>n;n+=1)e+=r.charAt(RANDOM({limit:r.length}));return e}}),global.STRINGIFY=STRINGIFY=METHOD({run:function(t){"use strict";return JSON.stringify(CHECK_IS_DATA(t)===!0?PACK_DATA(t):t)}}),global.TEST=TEST=METHOD({run:function(){"use strict"}}),global.VALID=VALID=CLASS(function(t){"use strict";var n,e,r,i,a,u,o,E,c,A,f,l,v,C,T,_,s,d,D,S,g;return t.notEmpty=n=function(t){var n=void 0===t||t===TO_DELETE?"":String(t);return CHECK_IS_ARRAY(t)===!0||""!==n.trim()},t.regex=e=function(t){var n=t.pattern,e=String(t.value);return e===e.match(n)[0]},t.size=r=function(t){var n=t.min,e=t.max,r=String(t.value),i=r.length;return void 0===n&&(n=0),i>=n&&(void 0===e||e>=i)},t.integer=i=function(t){var e=String(t);return n(t)===!0&&e.match(/^(?:-?(?:0|[1-9][0-9]*))$/)!==TO_DELETE},t.real=a=function(t){var e=String(t);return n(t)===!0&&e.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)!==TO_DELETE},t.bool=u=function(t){var n=String(t);return"true"===n||"false"===n},t.date=o=function(t){var n=String(t),e=Date.parse(n);return isNaN(e)===!1},t.min=E=function(t){var n=t.min,e=t.value;return a(e)===!0&&e>=n},t.max=c=function(t){var n=t.max,e=t.value;return a(e)===!0&&n>=e},t.email=A=function(t){var e=String(t);return n(t)===!0&&e.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)!==TO_DELETE},t.png=f=function(t){var e=String(t);return n(t)===!0&&e.match(/^data:image\/png;base64,/)!==TO_DELETE},t.url=l=function(t){var e=String(t);return n(t)===!0&&e.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i)!==TO_DELETE&&e.length<=2083},t.username=v=function(t){var e=String(t);return n(t)===!0&&e.match(/^[_a-zA-Z0-9\-]+$/)!==TO_DELETE},t.id=C=function(t){var e=String(t);return n(t)===!0&&e.match(/[0-9a-f]{24}/)!==TO_DELETE&&24===e.length},t.one=T=function(t){var n=t.value,e=t.array;return EACH(e,function(t){return n===t?!1:void 0})===!1},t.array=_=function(t){return CHECK_IS_ARRAY(t)===!0},t.data=s=function(t){return CHECK_IS_DATA(t)===!0},t.element=d=function(t){var n=t.array,e=VALID({_:t.validData});return EACH(n,function(t){return e.check({_:t}).checkHasError()===!0?!1:void 0})===!0},t.property=D=function(t){var n=t.data,e=VALID({_:t.validData});return EACH(n,function(t){return e.check({_:t}).checkHasError()===!0?!1:void 0})===!0},t.detail=S=function(t){var n=t.data,e=VALID(t.validDataSet);return e.check(n).checkHasError()!==!0},t.equal=g=function(t){var n=t.value,e=String(n),r=t.validValue,i=String(r);return e===i},{init:function(e,r,i){var a,u,o=CLASS({init:function(e,r,a){var u,o,E=a.data,c=a.isExceptUndefined,A=!1,f={};EACH(i,function(e,r){EACH(e,function(e,i){var a=E[r];if(c===!0&&void 0===a)return!1;if("notEmpty"!==i&&n(a)!==!0)return("integer"===i||"real"===i||"bool"===i||"date"===i)&&(E[r]=TO_DELETE),!0;if("one"===i){if(T({array:e,value:a})===!1)return A=!0,f[r]={type:i,array:e,value:a},!1}else if("element"===i){if(d({validData:e,array:a})===!1)return A=!0,f[r]={type:i,validData:e,array:a},!1}else if("property"===i){if(D({validData:e,data:a})===!1)return A=!0,f[r]={type:i,validData:e,data:a},!1}else if("detail"===i){if(S({validDataSet:e,data:a})===!1)return A=!0,f[r]={type:i,validDataSet:e,data:a},!1}else if("size"===i){if(t[i](COMBINE(CHECK_IS_DATA(e)===!0?[e,{value:a}]:[{min:e,max:e},{value:a}]))===!1)return A=!0,f[r]={type:i,validParams:e,value:a},!1}else if("regex"===i){if(t[i]({pattern:e,value:a})===!1)return A=!0,f[r]={type:i,validParam:e,value:a},!1}else if("min"===i){if(t[i]({min:e,value:a})===!1)return A=!0,f[r]={type:i,validParam:e,value:a},!1}else if("max"===i){if(t[i]({max:e,value:a})===!1)return A=!0,f[r]={type:i,validParam:e,value:a},!1}else if("equal"===i){if(t[i]({value:a,validValue:e})===!1)return A=!0,f[r]={type:i,validParam:e,value:a},!1}else if(e===!0&&t[i](a)===!1)return A=!0,f[r]={type:i,value:a},!1;n(a)===!0&&"string"==typeof a&&("integer"===i?E[r]=INTEGER(a):"real"===i?E[r]=REAL(a):"bool"===i?E[r]="true"===a:"date"===i?E[r]=new Date(a):"username"===i&&(E[r]=a.toLowerCase()))})}),r.checkHasError=u=function(){return A},r.getErrors=o=function(){return f}}});r.check=a=function(t){return o({data:t})},r.checkExceptUndefined=u=function(t){return o({data:t,isExceptUndefined:!0})}}}}),global.CHECK_IS_ARGUMENTS=CHECK_IS_ARGUMENTS=METHOD({run:function(t){"use strict";return void 0!==t&&t!==TO_DELETE&&"object"==typeof t&&("[object Arguments]"===Object.prototype.toString.call(t)||void 0!==t.callee&&"function"==typeof t.callee)?!0:!1}}),global.CHECK_IS_ARRAY=CHECK_IS_ARRAY=METHOD({run:function(t){"use strict";return void 0!==t&&t!==TO_DELETE&&"object"==typeof t&&"[object Array]"===Object.prototype.toString.call(t)?!0:!1}}),global.CHECK_IS_DATA=CHECK_IS_DATA=METHOD({run:function(t){"use strict";return void 0!==t&&t!==TO_DELETE&&CHECK_IS_ARGUMENTS(t)!==!0&&CHECK_IS_ARRAY(t)!==!0&&t instanceof Date!=!0&&"object"==typeof t?!0:!1}}),global.CHECK_IS_EMPTY_DATA=CHECK_IS_EMPTY_DATA=METHOD({run:function(t){"use strict";return CHECK_ARE_SAME([t,{}])}}),global.PACK_DATA=PACK_DATA=METHOD({run:function(t){"use strict";var n=COPY(t),e=[];return EACH(n,function(t,r){t instanceof Date==!0?(n[r]=INTEGER(t.getTime()),e.push(r)):CHECK_IS_DATA(t)===!0?n[r]=PACK_DATA(t):CHECK_IS_ARRAY(t)===!0&&EACH(t,function(n,e){CHECK_IS_DATA(n)===!0&&(t[e]=PACK_DATA(n))})}),n.__DATE_ATTR_NAMES=e,n}}),global.UNPACK_DATA=UNPACK_DATA=METHOD({run:function(t){"use strict";var n=COPY(t);return void 0!==n.__DATE_ATTR_NAMES&&(EACH(n.__DATE_ATTR_NAMES,function(t){n[t]=new Date(n[t])}),delete n.__DATE_ATTR_NAMES),EACH(n,function(t,e){CHECK_IS_DATA(t)===!0?n[e]=UNPACK_DATA(t):CHECK_IS_ARRAY(t)===!0&&EACH(t,function(n,e){CHECK_IS_DATA(n)===!0&&(t[e]=UNPACK_DATA(n))})}),n}}),global.CHECK_IS_IN=CHECK_IS_IN=METHOD({run:function(t){"use strict";var n=t.data,e=t.value;return EACH(n,function(t){return t===e?!1:void 0})!==!0}}),global.COMBINE=COMBINE=METHOD({run:function(t){"use strict";var n,e;return t.length>0&&(n=t[0],CHECK_IS_DATA(n)===!0?(e={},EACH(t,function(t){EXTEND({origin:e,extend:t})})):CHECK_IS_ARRAY(n)===!0&&(e=[],EACH(t,function(t){EXTEND({origin:e,extend:t})}))),e}}),global.COPY=COPY=METHOD({run:function(t){"use strict";var n;return CHECK_IS_DATA(t)===!0?(n={},EXTEND({origin:n,extend:t})):CHECK_IS_ARRAY(t)===!0&&(n=[],EXTEND({origin:n,extend:t})),n}}),global.EXTEND=EXTEND=METHOD({run:function(t){"use strict";var n=t.origin,e=t.extend;return CHECK_IS_DATA(n)===!0?EACH(e,function(t,e){n[e]=t instanceof Date==!0?new Date(t.getTime()):CHECK_IS_DATA(t)===!0||CHECK_IS_ARRAY(t)===!0?COPY(t):t}):CHECK_IS_ARRAY(n)===!0&&EACH(e,function(t){n.push(t instanceof Date==!0?new Date(t.getTime()):CHECK_IS_DATA(t)===!0||CHECK_IS_ARRAY(t)===!0?COPY(t):t)}),n}}),global.FIND_KEY=FIND_KEY=METHOD({run:function(t){"use strict";var n,e=t.data,r=t.value;return EACH(e,function(t,e){return t===r?(n=e,!1):void 0}),n}}),global.REMOVE=REMOVE=METHOD({run:function(t,n){"use strict";var e,r,i;void 0!==n?EACH(t,function(e,r){n(e)===!0&&REMOVE({data:t,key:r})}):(e=t.data,r=t.key,i=t.value,void 0!==r?CHECK_IS_ARRAY(e)===!0?e.splice(r,1):CHECK_IS_DATA(e)===!0&&delete e[r]:EACH(e,function(t,n){t===i&&REMOVE({data:e,key:n})}))}}),global.REMOVE_TO_DELETE=REMOVE_TO_DELETE=METHOD({run:function(t){"use strict";EACH(t,function(n,e){n===TO_DELETE?REMOVE({data:t,key:e}):(CHECK_IS_DATA(n)===!0||CHECK_IS_ARRAY(n)===!0)&&REMOVE_TO_DELETE(n)})}}),global.CALENDAR=CALENDAR=CLASS({init:function(t,n,e){"use strict";var r,i,a,u,o,E,c;void 0===e&&(e=new Date),n.getYear=r=function(){return e.getFullYear()},n.getMonth=i=function(){return e.getMonth()+1},n.getDate=a=function(){return e.getDate()},n.getDay=u=function(){return e.getDay()},n.getHour=o=function(){return e.getHours()},n.getMinute=E=function(){return e.getMinutes()},n.getSecond=c=function(){return e.getSeconds()}}}),global.DELAY=DELAY=CLASS({init:function(t,n,e,r){"use strict";var i,a;void 0===r&&(r=e,e=0),i=setTimeout(function(){r(n)},1e3*e),n.remove=a=function(){clearTimeout(i)}}}),global.INTERVAL=INTERVAL=CLASS({init:function(t,n,e,r){"use strict";var i,a;void 0===r&&(r=e,e=0),i=setInterval(function(){r(n)},0===e?1:1e3*e),n.remove=a=function(){clearInterval(i)}}}),global.LOOP=LOOP=CLASS(function(){"use strict";var t,n,e=[],r=[],i=function(){void 0===n&&(t=Date.now(),n=INTERVAL(function(){var n,i,a,u,o,E=Date.now(),c=E-t;if(c>0){for(u=0;u<e.length;u+=1)if(n=e[u],void 0!==n.fps&&n.fps>0){for(void 0===n.timeSigma&&(n.timeSigma=0,n.countSigma=0),i=parseInt(n.fps/(1e3/c)*(n.timeSigma/c+1),10)-n.countSigma,void 0!==n.start&&n.start(),a=n.interval,o=0;i>o;o+=1)a();void 0!==n.end&&n.end(c),n.countSigma+=i,n.timeSigma+=c,n.timeSigma>1e3&&(n.timeSigma=void 0)}for(u=0;u<r.length;u+=1)r[u](c);t=E}}))},a=function(){e.length<=0&&r.length<=0&&(n.remove(),n=void 0)};return{init:function(t,n,u,o){var E,c,A,f,l,v,C;void 0!==o?(CHECK_IS_DATA(o)===!0?(c=o.start,A=o.interval,f=o.end):A=o,e.push(l={fps:u,start:c,interval:A,end:f}),n.changeFPS=v=function(t){l.fps=t},n.remove=C=function(){REMOVE({data:e,value:l}),a()}):(r.push(E=u),n.remove=C=function(){REMOVE({data:r,value:E}),a()}),i()}}}),global.RAR=RAR=METHOD({run:function(t,n){"use strict";return void 0===n?(n=t)():n(t),n}}),global.RUN=RUN=METHOD({run:function(t){"use strict";var n=function(){return t(n)};return n()}}),global.INTEGER=INTEGER=METHOD({run:function(t){"use strict";return void 0===t?void 0:parseInt(t,10)}}),global.RANDOM=RANDOM=METHOD({run:function(t){"use strict";var n=void 0===t.min?0:t.min,e=t.max,r=t.limit;return void 0!==r&&(e=r-1),Math.floor(Math.random()*(e-n+1)+n)}}),global.REAL=REAL=METHOD({run:function(t){"use strict";return void 0===t?void 0:parseFloat(t)}}),global.EACH=EACH=METHOD({run:function(t,n){"use strict";var e,r,i;if(void 0===t)return!1;if(CHECK_IS_ARRAY(t)===!0||CHECK_IS_ARGUMENTS(t)===!0)for(e=t.length,i=0;e>i;i+=1){if(n(t[i],i)===!1)return!1;t.length===e-1&&(i-=1,e-=1)}else for(r in t)if(t.hasOwnProperty(r)===!0&&n(t[r],r)===!1)return!1;return!0}}),global.FOR=FOR=METHOD({run:function(t,n){"use strict";var e,r=INTEGER(t.start),i=INTEGER(t.end),a=INTEGER(void 0===t.limit?i+1:t.limit),u=INTEGER(void 0===t.step?1:t.step);if(void 0!==i&&r>i){for(e=r;e>=i;e-=u)if(n(e)===!1)return!1}else for(e=r;a>e;e+=u)if(n(e)===!1)return!1;return!0}}),global.REPEAT=REPEAT=METHOD({run:function(t,n){"use strict";var e;for(e=0;e<parseInt(t,10);e+=1)if(n(e)===!1)return!1;return!0}});