global.CONFIG={isDevMode:!1};global.METHOD=(n=>{let o,t,i=(n,o)=>{if(void 0!==t)return t(n,o)};return i.type=METHOD,o="function"==typeof n?n(i):n,void 0!==o&&(t=o.run),i});global.TO_DELETE=null;global.BOX=METHOD(n=>{let o={};n.getAllBoxes=(()=>{return o});return{run:n=>{let t=n=>{let o,i=n.split(".");return EACH(i,n=>{void 0===o?(void 0===t[n]&&(t[n]={}),o=t[n]):(void 0===o[n]&&(o[n]={}),o=o[n])}),o};return t.type=BOX,t.boxName=n,global[n]=o[n]=t,void 0===CONFIG[n]&&(CONFIG[n]={}),FOR_BOX.inject(t),t}}});global.FOR_BOX=METHOD(n=>{let t=[];n.inject=(n=>{EACH(t,t=>{t(n)})});return{run:n=>{EACH(BOX.getAllBoxes(),t=>{n(t)}),t.push(n)}}});global.SHOW_ERROR=((e,o,r)=>{let t=CALENDAR();console.error(t.getYear()+"-"+t.getMonth(!0)+"-"+t.getDate(!0)+" "+t.getHour(!0)+":"+t.getMinute(!0)+":"+t.getSecond(!0)+" ["+e+"] 오류가 발생했습니다. 오류 메시지: "+o),void 0!==r&&(console.error("다음은 오류를 발생시킨 파라미터입니다."),console.error(JSON.stringify(r,TO_DELETE,4)))});global.SHOW_WARNING=((e,n,o)=>{let t=CALENDAR();console.warn(t.getYear()+"-"+t.getMonth(!0)+"-"+t.getDate(!0)+" "+t.getHour(!0)+":"+t.getMinute(!0)+":"+t.getSecond(!0)+" ["+e+"] 경고가 발생했습니다. 경고 메시지: "+n),void 0!==o&&(console.warn("다음은 경고를 발생시킨 파라미터입니다."),console.warn(JSON.stringify(o,TO_DELETE,4)))});global.CLASS=METHOD(n=>{let i=0,t=n.getNextInstanceId=(()=>{return i+=1,i-1});return{run:n=>{let i,e,o,r,f,u=(n,i)=>{let e={},o={type:u,id:t(),checkIsInstanceOf:n=>{let i=u;for(;void 0!==i;){if(i===n)return!0;i=i.mom}return!1}};return n=d(e,o,n,i),c(e,o,n,i),o};i="function"==typeof n?n(u):n,void 0!==i&&(e=i.preset,o=i.init,r=i.params,f=i.afterInit),u.type=CLASS,u.id=t();let d=u.innerInit=((n,i,t,f)=>{let d,c,A=(n,i)=>{EACH(i,(i,t)=>{void 0===n[t]?n[t]=i:CHECK_IS_DATA(n[t])===!0&&CHECK_IS_DATA(i)===!0&&A(n[t],i)})};if(void 0!==r)if(void 0===t)t=r(u);else if(CHECK_IS_DATA(t)===!0){let n=r(u);void 0!==n&&A(t,n)}else c=t,t=r(u);return void 0!==e&&(d=e(t,f),void 0!==d&&(u.mom=d,d.type===CLASS?d.innerInit(n,i,t,f):d.type.innerInit(n,i,t,f))),void 0!==o&&o(n,i,void 0===c?t:c,f),t}),c=u.innerAfterInit=((n,i,t,e)=>{let o=u.mom;void 0!==o&&(o.type===CLASS?o.innerAfterInit(n,i,t,e):o.type.innerAfterInit(n,i,t,e)),void 0!==f&&f(n,i,t,e)});return u}}});global.INIT_OBJECTS=METHOD({run:()=>{OBJECT.initObjects()}});global.OBJECT=METHOD(n=>{let t=[],e=!1,i=n=>{let t=n.type,e={},i={};n.id=CLASS.getNextInstanceId(),t.innerInit(e,n,i),t.innerAfterInit(e,n,i)},r=n=>{e===!0?i(n):t.push(n)};n.removeReadyObject=(n=>{REMOVE({array:t,value:n})}),n.initObjects=(()=>{EACH(t,n=>{i(n)}),e=!0});return{run:n=>{let t=CLASS(n),e={type:t,checkIsInstanceOf:n=>{let e=t;for(;void 0!==e;){if(e===n)return!0;e=e.mom}return!1}};return r(e),e}}});global.NEXT=METHOD({run:(i,n)=>{let e,o,t;void 0===n&&(n=i,i=void 0),void 0!==i&&(CHECK_IS_ARRAY(i)!==!0?e=i:o=i),REPEAT({start:n.length-1,end:0},i=>{let f;if(0!==i&&void 0===t)t=n[i]();else if(i>0)f=t,t=n[i](f),t.next=f;else if(f=t,void 0===f&&(f=(()=>{})),t=n[i],void 0!==e){let i=-1;RUN(n=>{i+=1,i+1<e?t(i,n):t(i,f)})}else if(void 0!==o){let i=o.length;if(0===i)f();else{let n=-1;RUN(e=>{n+=1,n+1<i?(o.length===i-1&&(n-=1,i-=1),t(o[n],e,n)):t(o[n],f,n)})}}else t(f)})}});global.OVERRIDE=METHOD({run:(e,t)=>{void 0!==e.type&&e.type.type===CLASS&&OBJECT.removeReadyObject(e),t(e)}});global.PARALLEL=METHOD({run:(n,i)=>{let f=0;if(void 0===i){i=n;let o=i.length-1;EACH(i,(n,t)=>{t<o&&n(()=>{f+=1,f===o&&i[o]()})})}else if(void 0===n)i[1]();else if(CHECK_IS_DATA(n)===!0){let o=COUNT_PROPERTIES(n);0===o?i[1]():EACH(n,(n,t)=>{i[0](n,()=>{f+=1,f===o&&i[1]()},t)})}else CHECK_IS_ARRAY(n)===!0?0===n.length?i[1]():EACH(n,(o,t)=>{i[0](o,()=>{f+=1,f===n.length&&i[1]()},t)}):0===n?i[1]():REPEAT(n,o=>{i[0](o,()=>{f+=1,f===n&&i[1]()})})}});global.PARSE_STR=METHOD({run:A=>{try{let r=JSON.parse(A);if(CHECK_IS_DATA(r)===!0)return UNPACK_DATA(r);if(CHECK_IS_ARRAY(r)===!0){let A=[];return EACH(r,r=>{A.push(UNPACK_DATA(r))}),A}return r}catch(A){return}}});global.RANDOM_STR=METHOD(()=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return{run:t=>{let r="";return REPEAT(t,()=>{r+=n.charAt(RANDOM({limit:n.length}))}),r}}});global.STRINGIFY=METHOD({run:n=>{if(CHECK_IS_DATA(n)===!0)return JSON.stringify(PACK_DATA(n));if(CHECK_IS_ARRAY(n)===!0){let A=[];return EACH(n,n=>{A.push(PACK_DATA(n))}),JSON.stringify(A)}return JSON.stringify(n)}});global.TEST=METHOD(n=>{let o=0;return{run:(n,t)=>{t(t=>{let r,R={};t===!0?console.log(MSG({ko:"["+n+" 테스트] 테스트를 통과하였습니다. 총 "+o+"개의 오류가 있습니다."})):(R.__THROW_ERROR_$$$=(()=>{try{throw Error()}catch(n){return n}}),r=R.__THROW_ERROR_$$$().stack,void 0!==r&&(r=r.substring(r.indexOf("__THROW_ERROR_$$$")),r=r.split("\n")[2],r=r.substring(r.indexOf("at "))),o+=1,console.log(MSG({ko:"["+n+" 테스트] "+r+"에서 오류가 발견되었습니다. 총 "+o+"개의 오류가 있습니다."})))})}}});global.URI_MATCHER=CLASS({init:(n,t,r)=>{let i=CLASS({init:(n,t,i)=>{let e,u=i.split("/"),c={},f=n=>{let t=n.split("/");return EACH(u,(n,r)=>{let i=t[r];if("**"===i)return e=!0,!1;if(void 0===i)return!1;if(""!==n&&"{"===i.charAt(0)&&"}"===i.charAt(i.length-1))c[i.substring(1,i.length-1)]=n;else if("*"!==i&&i!==n)return!1;return!(r===u.length-1&&r<t.length-1&&""!==t[t.length-1])&&void 0})===!0||e===!0};e=CHECK_IS_ARRAY(r)===!0?EACH(r,n=>{return f(n)!==!0})!==!0:f(r);t.checkIsMatched=(()=>{return e}),t.getURIParams=(()=>{return c})}});t.check=(n=>{return i(n)})}});global.VALID=CLASS(t=>{let a=t.notEmpty=(t=>{let a=void 0===t||t===TO_DELETE?"":String(t);return CHECK_IS_ARRAY(t)===!0||""!==a.trim()}),e=(t.regex=(t=>{let a=String(t.value),e=t.pattern,n=a.match(e);return n!==TO_DELETE&&a===n[0]}),t.size=(t=>{let a=String(t.value),e=t.min,n=t.max;return void 0===e&&(e=0),e<=a.trim().length&&(void 0===n||a.length<=n)}),t.integer=(t=>{let e=String(t);return a(e)===!0&&e.match(/^(?:-?(?:0|[1-9][0-9]*))$/)!==TO_DELETE}),t.real=(t=>{let e=String(t);return a(e)===!0&&e.match(/^(?:-?(?:0|[1-9][0-9]*))?(?:\.[0-9]*)?$/)!==TO_DELETE})),n=(t.bool=(t=>{let a=String(t);return"true"===a||"false"===a}),t.date=(t=>{let a=String(t),e=Date.parse(a);return isNaN(e)===!1}),t.min=(t=>{let a=t.value,n=t.min;return e(a)===!0&&n<=a}),t.max=(t=>{let a=t.value,n=t.max;return e(a)===!0&&n>=a}),t.email=(t=>{return"string"==typeof t&&a(t)===!0&&t.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)!==TO_DELETE}),t.png=(t=>{return"string"==typeof t&&a(t)===!0&&t.match(/^data:image\/png;base64,/)!==TO_DELETE}),t.url=(t=>{return"string"==typeof t&&a(t)===!0&&t.match(/^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i)!==TO_DELETE&&t.length<=2083}),t.username=(t=>{return"string"==typeof t&&a(t)===!0&&t.match(/^[_a-zA-Z0-9\-]+$/)!==TO_DELETE}),t.mongoId=(t=>{return"string"==typeof t&&a(t)===!0&&t.match(/[0-9a-f]{24}/)!==TO_DELETE&&24===t.length}),t.one=(t=>{let a=t.value,e=t.array;return EACH(e,t=>{if(a===t)return!1})===!1})),r=(t.array=(t=>{return CHECK_IS_ARRAY(t)===!0}),t.data=(t=>{return CHECK_IS_DATA(t)===!0}),t.element=(t=>{let a=t.array,e=VALID({_:t.validData}),n=t.isToWash;return EACH(a,t=>{if((n===!0?e.checkAndWash:e.check)({_:t}).checkHasError()===!0)return!1})===!0})),i=t.property=(t=>{let a=t.data,e=VALID({_:t.validData}),n=t.isToWash;return EACH(a,t=>{if((n===!0?e.checkAndWash:e.check)({_:t}).checkHasError()===!0)return!1})===!0}),u=t.detail=(t=>{let a=t.data,e=VALID(t.validDataSet),n=t.isToWash;return(n===!0?e.checkAndWash:e.check)(a).checkHasError()!==!0});t.equal=(t=>{let a=String(t.value),e=String(t.validValue);return a===e});return{init:(e,o,f)=>{let c=CLASS({init:(e,o,c)=>{let l=c.data,d=c.isToWash,s=c.isForUpdate,E=!1,v={};EACH(f,(e,o)=>{e!==!0&&EACH(e,(e,f)=>{let c=l[o];if(s===!0&&void 0===c)return!1;if(d===!0&&"notEmpty"!==f&&a(c)!==!0)return l[o]=s===!0?TO_DELETE:void 0,!0;if("one"===f){if(n({array:e,value:c})===!1)return E=!0,v[o]={type:f,array:e,value:c},!1}else if("element"===f){if(r({validData:e,array:c,isToWash:d})===!1)return E=!0,v[o]={type:f,validData:e,array:c},!1}else if("property"===f){if(i({validData:e,data:c,isToWash:d})===!1)return E=!0,v[o]={type:f,validData:e,data:c},!1}else if("detail"===f){if(u({validDataSet:e,data:c,isToWash:d})===!1)return E=!0,v[o]={type:f,validDataSet:e,data:c},!1}else if("size"===f){if(t[f](CHECK_IS_DATA(e)===!0?COMBINE([e,{value:c}]):COMBINE([{min:e,max:e},{value:c}]))===!1)return E=!0,v[o]={type:f,validParams:e,value:c},!1}else if("regex"===f){if(t[f]({pattern:e,value:c})===!1)return E=!0,v[o]={type:f,validParam:e,value:c},!1}else if("min"===f){if(t[f]({min:e,value:c})===!1)return E=!0,v[o]={type:f,validParam:e,value:c},!1}else if("max"===f){if(t[f]({max:e,value:c})===!1)return E=!0,v[o]={type:f,validParam:e,value:c},!1}else if("equal"===f){if(t[f]({value:c,validValue:e})===!1)return E=!0,v[o]={type:f,validParam:e,value:c},!1}else if(e===!0&&t["id"===f?"mongoId":f](c)===!1)return E=!0,v[o]={type:f,value:c},!1;"string"==typeof c&&(c=c.trim(),a(c)===!0?"integer"===f?l[o]=INTEGER(c):"real"===f?l[o]=REAL(c):"bool"===f?l[o]="true"===c:"date"===f?l[o]=new Date(c):"username"===f?l[o]=c.toLowerCase():l[o]=c:l[o]=c)})}),d===!0&&EACH(l,(t,a)=>{void 0===f[a]&&delete l[a]});o.checkHasError=(()=>{return E}),o.getErrors=(()=>{return v})}});o.check=(t=>{return c({data:t})}),o.checkAndWash=(t=>{return c({data:t,isToWash:!0})}),o.checkForUpdate=(t=>{return c({data:t,isToWash:!0,isForUpdate:!0})}),o.getValidDataSet=(()=>{return f})}}});global.CHECK_ARE_SAME=METHOD({run:n=>{let t=!1,e=(n,t)=>{return n instanceof Date==!0&&t instanceof Date==!0?n.getTime()===t.getTime():n instanceof RegExp==!0&&t instanceof RegExp==!0?n.toString()===t.toString():CHECK_IS_DATA(n)===!0&&CHECK_IS_DATA(t)===!0?EACH(n,(n,E)=>{return e(n,t[E])}):CHECK_IS_ARRAY(n)===!0&&CHECK_IS_ARRAY(t)===!0?EACH(n,(n,E)=>{return e(n,t[E])}):n===t};return n.length>1&&(t=REPEAT(n.length,t=>{return t<n.length-1?e(n[t],n[t+1]):e(n[t],n[0])})),t}});global.CHECK_IS_ARRAY=METHOD({run:t=>{return void 0!==t&&t!==TO_DELETE&&"object"==typeof t&&"[object Array]"===Object.prototype.toString.call(t)}});global.CHECK_IS_DATA=METHOD({run:n=>{return void 0!==n&&n!==TO_DELETE&&CHECK_IS_ARRAY(n)!==!0&&n instanceof Date!=!0&&n instanceof RegExp!=!0&&"object"==typeof n}});global.CHECK_IS_EMPTY_DATA=METHOD({run:E=>{return CHECK_ARE_SAME([E,{}])}});global.COUNT_PROPERTIES=METHOD({run:n=>{let u=0;return EACH(n,()=>{u+=1}),u}});global.PACK_DATA=METHOD({run:A=>{let n=COPY(A),_=[],C=[];return EACH(n,(A,t)=>{A instanceof Date==!0?(n[t]=INTEGER(A.getTime()),_.push(t)):A instanceof RegExp==!0?(n[t]=A.toString(),C.push(t)):CHECK_IS_DATA(A)===!0?n[t]=PACK_DATA(A):CHECK_IS_ARRAY(A)===!0&&EACH(A,(n,_)=>{CHECK_IS_DATA(n)===!0&&(A[_]=PACK_DATA(n))})}),n.__D=_,n.__R=C,n}});global.UNPACK_DATA=METHOD({run:_=>{let A=COPY(_);return void 0!==A.__D&&(EACH(A.__D,(_,n)=>{A[_]=new Date(A[_])}),delete A.__D),void 0!==A.__R&&(EACH(A.__R,(_,n)=>{let C,e=A[_];for(let t=e.length-1;t>=0;t-=1)if("/"===e[t]){C=e.substring(t+1),e=e.substring(1,t);break}A[_]=new RegExp(e,C)}),delete A.__R),EACH(A,(_,n)=>{CHECK_IS_DATA(_)===!0?A[n]=UNPACK_DATA(_):CHECK_IS_ARRAY(_)===!0&&EACH(_,(A,n)=>{CHECK_IS_DATA(A)===!0&&(_[n]=UNPACK_DATA(A))})}),A}});global.CHECK_IS_IN=METHOD({run:n=>{let E=n.data,r=n.array,i=n.value;return void 0!==E?EACH(E,(n,E)=>{if(CHECK_ARE_SAME([n,i])===!0)return!1})!==!0:void 0!==r?EACH(r,(n,E)=>{if(CHECK_ARE_SAME([n,i])===!0)return!1})!==!0:void 0}});global.COMBINE=METHOD({run:n=>{let E;if(n.length>0){let i=n[0];CHECK_IS_DATA(i)===!0?(E={},EACH(n,n=>{EXTEND({origin:E,extend:n})})):CHECK_IS_ARRAY(i)===!0&&(E=[],EACH(n,n=>{EXTEND({origin:E,extend:n})}))}return E}});global.COPY=METHOD({run:n=>{let E;return CHECK_IS_DATA(n)===!0?(E={},EXTEND({origin:E,extend:n})):CHECK_IS_ARRAY(n)===!0&&(E=[],EXTEND({origin:E,extend:n})),E}});global.EXTEND=METHOD({run:e=>{let n=e.origin,t=e.extend;return CHECK_IS_DATA(n)===!0?EACH(t,(e,t)=>{if(e instanceof Date==!0)n[t]=new Date(e.getTime());else if(e instanceof RegExp==!0){let i,s=e.toString();for(let g=s.length-1;g>=0;g-=1)if("/"===s[g]){i=s.substring(g+1),s=s.substring(1,g);break}n[t]=new RegExp(s,i)}else CHECK_IS_DATA(e)===!0||CHECK_IS_ARRAY(e)===!0?n[t]=COPY(e):n[t]=e}):CHECK_IS_ARRAY(n)===!0&&EACH(t,e=>{if(e instanceof Date==!0)n.push(new Date(e.getTime()));else if(e instanceof RegExp==!0){let t,i=e.toString();for(let s=i.length-1;s>=0;s-=1)if("/"===i[s]){t=i.substring(s+1),i=i.substring(1,s);break}n.push(new RegExp(i,t))}else CHECK_IS_DATA(e)===!0||CHECK_IS_ARRAY(e)===!0?n.push(COPY(e)):n.push(e)}),n}});global.FIND=METHOD({run:(n,i)=>{let r;if(void 0!==i)CHECK_IS_DATA(n)===!0?EACH(n,(n,u)=>{if(i(n,u)===!0)return r=n,!1}):CHECK_IS_ARRAY(n)===!0&&EACH(n,(n,u)=>{if(i(n,u)===!0)return r=n,!1});else{let i=n.data,u=n.array,t=n.value;void 0!==i&&EACH(i,(n,i)=>{if(n===t)return r=i,!1}),void 0!==u&&EACH(u,(n,i)=>{if(n===t)return r=i,!1})}return r}});global.REMOVE=METHOD({run:(E,a)=>{if(void 0!==a)CHECK_IS_DATA(E)===!0?EACH(E,(n,e)=>{a(n,e)===!0&&REMOVE({data:E,name:e})}):CHECK_IS_ARRAY(E)===!0&&EACH(E,(n,e)=>{a(n,e)===!0&&REMOVE({array:E,key:e})});else{let a=E.data,n=E.array,e=E.name,i=E.key,o=E.value;void 0!==e&&delete a[e],void 0!==i&&n.splice(i,1),void 0!==o&&(void 0!==a&&EACH(a,(E,n)=>{CHECK_ARE_SAME([E,o])===!0&&REMOVE({data:a,name:n})}),void 0!==n&&EACH(n,(E,a)=>{CHECK_ARE_SAME([E,o])===!0&&REMOVE({array:n,key:a})}))}}});global.CALENDAR=CLASS({init:(t,e,n)=>{void 0===n&&(n=new Date);e.getYear=(()=>{return n.getFullYear()}),e.getMonth=(t=>{let e=n.getMonth()+1;return t===!0?e<10?"0"+e:""+e:e}),e.getDate=(t=>{let e=n.getDate();return t===!0?e<10?"0"+e:""+e:e}),e.getDay=(()=>{return n.getDay()}),e.getHour=(t=>{let e=n.getHours();return t===!0?e<10?"0"+e:""+e:e}),e.getMinute=(t=>{let e=n.getMinutes();return t===!0?e<10?"0"+e:""+e:e}),e.getSecond=(t=>{let e=n.getSeconds();return t===!0?e<10?"0"+e:""+e:e})}});global.CREATE_DATE=METHOD({run:e=>{let o=e.year,t=e.month,i=e.date,d=e.hour,n=e.minute,v=e.second,a=CALENDAR(new Date);return void 0===o&&(o=a.getYear()),void 0===t&&(t=void 0===i?0:a.getMonth()),void 0===i&&(i=void 0===d?0:a.getDate()),void 0===d&&(d=void 0===n?0:a.getHour()),void 0===n&&(n=void 0===v?0:a.getMinute()),void 0===v&&(v=0),new Date(o,t-1,i,d,n,v)}});global.DELAY=CLASS({init:(o,n,e,i)=>{void 0===i&&(i=e,e=0);let t,u,c=Date.now(),a=t=1e3*e,f=(n.resume=RAR(()=>{void 0===u&&(u=setTimeout(()=>{i()},a))}),n.pause=(()=>{a=t-(Date.now()-c),clearTimeout(u),u=void 0}));n.remove=(()=>{f()})}});global.INTERVAL=CLASS({init:(n,e,o,t)=>{void 0===t&&(t=o,o=0);let i,a,u=Date.now(),c=i=0===o?1:1e3*o,v=0,f=(e.resume=RAR(()=>{void 0===a&&(a=setInterval(()=>{v+=1,t(e,v)===!1&&l(),u=Date.now()},c))}),e.pause=(()=>{c=i-(Date.now()-u),clearInterval(a),a=void 0})),l=e.remove=(()=>{f()})}});global.LOOP=CLASS(i=>{let n,t=[],e=[],o=()=>{if(void 0===n){let i=Date.now();n=INTERVAL(()=>{let n=Date.now(),o=n-i;if(o>0){for(let a=0;a<t.length;a+=1){let i=t[a];if(void 0!==i.fps&&i.fps>0){void 0===i.timeSigma&&(i.timeSigma=0,i.countSigma=0);let n=parseInt(i.fps/(1e3/o)*(i.timeSigma/o+1),10)-i.countSigma;void 0!==i.start&&i.start();let t=i.interval;for(j=0;j<n;j+=1)t(i.fps);void 0!==i.end&&i.end(o),i.countSigma+=n,i.timeSigma+=o,i.timeSigma>1e3&&(i.timeSigma=void 0)}}for(let a=0;a<e.length;a+=1)e[a](o);i=n}})}},a=()=>{t.length<=0&&e.length<=0&&(n.remove(),n=void 0)};return{init:(i,n,f,u)=>{let r,m,s,c,v;if(void 0!==u){CHECK_IS_DATA(u)!==!0?s=u:(m=u.start,s=u.interval,c=u.end);let i=(n.resume=RAR(()=>{t.push(v={fps:f,start:m,interval:s,end:c}),o()}),n.pause=(()=>{REMOVE({array:t,value:v}),a()}));n.changeFPS=(i=>{v.fps=i}),n.remove=(()=>{i()})}else{let i=(n.resume=RAR(()=>{e.push(r=f),o()}),n.pause=(()=>{REMOVE({array:e,value:r}),a()}));n.remove=(()=>{i()})}}}});global.RAR=METHOD({run:(n,o)=>{return void 0===o&&(o=n,n=void 0),o(n),o}});global.RUN=METHOD({run:n=>{let r=()=>{return n(r)};return r()}});global.INTEGER=METHOD({run:n=>{return void 0===n?void 0:parseInt(n,10)}});global.RANDOM=METHOD({run:o=>{let i,n,a;return CHECK_IS_DATA(o)!==!0?a=o:(i=o.min,n=o.max,a=o.limit),void 0===i&&(i=0),void 0!==a&&(n=a-1),Math.floor(Math.random()*(n-i+1)+i)}});global.REAL=METHOD({run:o=>{return void 0===o?void 0:parseFloat(o)}});global.EACH=METHOD({run:(n,r)=>{if(void 0===n)return!1;if(CHECK_IS_DATA(n)===!0){for(let e in n)if((void 0===n.hasOwnProperty||n.hasOwnProperty(e)===!0)&&r(n[e],e)===!1)return!1}else{if(void 0===r)return r=n,n=void 0,n=>{return EACH(n,r)};{let e=n.length;for(let t=0;t<e;t+=1){if(r(n[t],t)===!1)return!1;n.length<e?(t-=e-n.length,e-=e-n.length):n.length>e&&(e+=n.length-e)}}}return!0}});global.REPEAT=METHOD({run:(i,r)=>{let o,e,n,t,f;if(void 0===r&&(r=i,i=void 0),void 0!==i&&(CHECK_IS_DATA(i)!==!0?o=i:(e=i.start,n=i.end,t=i.limit,f=i.step)),void 0===t&&void 0!==n&&(t=n+1),void 0===f&&(f=1),void 0!==o){for(let d=0;d<parseInt(o,10);d+=1)if(r(d)===!1)return!1}else if(void 0!==n&&e>n){for(let d=e;d>=n;d-=f)if(r(d)===!1)return!1}else{if(void 0===t)return i=>{return REPEAT(i,r)};for(let i=e;i<t;i+=f)if(r(i)===!1)return!1}return!0}});global.REVERSE_EACH=METHOD({run:(n,r)=>{if(void 0===n)return!1;if(void 0===r)return r=n,n=void 0,n=>{return REVERSE_EACH(n,r)};{let t=n.length;for(let E=t-1;E>=0;E-=1){if(r(n[E],E)===!1)return!1;n.length<t&&(E+=t-n.length)}}return!0}});