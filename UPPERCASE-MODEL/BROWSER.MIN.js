FOR_BOX(n=>{n.MODEL=CLASS({init:(t,i,o)=>{i.getBoxName=(()=>{return n.boxName})}})});FOR_BOX(e=>{OVERRIDE(e.MODEL,o=>{e.MODEL=CLASS(t=>{let i={},n=0;t.getOnNewInfos=(()=>{return i});return{preset:()=>{return o},init:(o,t,r)=>{let d,a,c,u,s,v,f,m,E,N,A,O,l,S,C,M,R,h,H,x,_=r.roomServerName,T=r.name,g=r.initData,W=r.methodConfig,I=(r.isNotUsingObjectId,e.ROOM({roomServerName:_,name:T}));void 0!==W&&(d=W.create,a=W.get,c=W.update,u=W.remove,s=W.find,v=W.count,f=W.checkIsExists,void 0!==d&&(m=d.valid),void 0!==c&&(E=c.valid));t.getName=(()=>{return T}),t.getInitData=(()=>{return g}),t.getCreateValid=(()=>{return m}),t.getUpdateValid=(()=>{return E}),t.getRoom=(()=>{return I});d!==!1&&(N=t.create=((o,t)=>{let i,n,r,d,a;void 0!==t&&(CHECK_IS_DATA(t)!==!0?d=t:(i=t.error,n=t.notValid,r=t.notAuthed,d=t.success)),void 0!==g&&EACH(g,(e,t)=>{o[t]=e}),void 0!==m&&(a=m.checkAndWash(o)),void 0!==a&&a.checkHasError()===!0?void 0!==n?n(a.getErrors()):SHOW_WARNING(e.boxName+"."+T+"Model.create",MSG({ko:"데이터가 유효하지 않습니다."}),{data:o,validErrors:a.getErrors()}):I.send({methodName:"create",data:o},t=>{let a,c,u,s;void 0!==t?(a=t.errorMsg,c=t.validErrors,u=t.isNotAuthed,s=t.savedData,void 0!==a?void 0!==i?i(a):SHOW_ERROR(e.boxName+"."+T+"Model.create",a):void 0!==c?void 0!==n?n(c):SHOW_WARNING(e.boxName+"."+T+"Model.create",MSG({ko:"데이터가 유효하지 않습니다."}),{data:o,validErrors:c}):u===!0?void 0!==r?r():SHOW_WARNING(e.boxName+"."+T+"Model.create",MSG({ko:"인증되지 않았습니다."})):void 0!==d&&d(s)):void 0!==d&&d()})})),a!==!1&&(A=t.get=((o,t)=>{let i,n,r,d;void 0===t&&(t=o,o={}),CHECK_IS_DATA(t)!==!0?d=t:(i=t.error,n=t.notAuthed,r=t.notExists,d=t.success),I.send({methodName:"get",data:o},t=>{let a,c,u;void 0!==t&&(a=t.errorMsg,c=t.isNotAuthed,u=t.savedData),void 0!==a?void 0!==i?i(a):SHOW_ERROR(e.boxName+"."+T+"Model.get",a):c===!0?void 0!==n?n():SHOW_WARNING(e.boxName+"."+T+"Model.get",MSG({ko:"인증되지 않았습니다."})):void 0===u?void 0!==r?r():SHOW_WARNING(e.boxName+"."+T+"Model.get",MSG({ko:"데이터가 존재하지 않습니다."}),o):void 0!==d&&d(u)})}),O=t.getWatching=((o,i)=>{let n,r,d,a,c,u;return void 0===i&&(i=o,o={}),CHECK_IS_DATA(i)!==!0?a=i:(n=i.error,r=i.notAuthed,d=i.notExists,a=i.success),t.get(o,{error:n,notAuthed:r,notExists:d,success:o=>{let t;c!==!0&&(u=e.ROOM({roomServerName:_,name:T+"/"+o.id}),a(o,e=>{u.on("update",e)},e=>{u.on("remove",o=>{e(o),t()})},t=(()=>{void 0!==u&&(u.exit(),u=void 0)})))}}),OBJECT({init:(e,o)=>{o.exit=(()=>{void 0!==u&&u.exit(),c=!0})}})})),c!==!1&&(l=t.update=((o,t)=>{let i,n,r,d,a,c,u,s,v,f,m=o.id,N=o.$inc,A=o.$push,O=o.$pull;void 0!==t&&(CHECK_IS_DATA(t)!==!0?a=t:(i=t.error,n=t.notValid,r=t.notAuthed,d=t.notExists,a=t.success)),void 0!==E&&(c=E.checkForUpdate(o),void 0!==N&&(u=E.checkForUpdate(N)),void 0!==A&&(s=E.checkForUpdate(RUN(()=>{let e={};return EACH(A,(o,t)=>{e[t]=[o]}),e}))),void 0!==O&&(v=E.checkForUpdate(RUN(()=>{let e={};return EACH(O,(o,t)=>{e[t]=[o]}),e})))),o.id=m,o.$inc=N,o.$push=A,o.$pull=O,void 0!==E&&(c.checkHasError()===!0||void 0!==u&&u.checkHasError()===!0||void 0!==s&&s.checkHasError()===!0||void 0!==v&&v.checkHasError()===!0)?(f=COMBINE([c.getErrors(),void 0===u?{}:u.getErrors(),void 0===s?{}:s.getErrors(),void 0===v?{}:v.getErrors()]),void 0!==n?n(f):SHOW_WARNING(e.boxName+"."+T+"Model.update",MSG({ko:"데이터가 유효하지 않습니다."}),{data:o,validErrors:f})):I.send({methodName:"update",data:o},t=>{let c,u,s,v,f;void 0!==t&&(c=t.errorMsg,u=t.validErrors,s=t.isNotAuthed,v=t.savedData,f=t.originData),void 0!==c?void 0!==i?i(c):SHOW_ERROR(e.boxName+"."+T+"Model.update",c):void 0!==u?void 0!==n?n(u):SHOW_WARNING(e.boxName+"."+T+"Model.update",MSG({ko:"데이터가 유효하지 않습니다."}),{data:o,validErrors:u}):s===!0?void 0!==r?r():SHOW_WARNING(e.boxName+"."+T+"Model.update",MSG({ko:"인증되지 않았습니다."})):void 0===v?void 0!==d?d():SHOW_WARNING(e.boxName+"."+T+"Model.update",MSG({ko:"수정할 데이터가 존재하지 않습니다."}),o):void 0!==a&&a(v,f)})})),u!==!1&&(S=t.remove=((o,t)=>{let i,n,r,d;void 0!==t&&(CHECK_IS_DATA(t)!==!0?d=t:(i=t.error,n=t.notAuthed,r=t.notExists,d=t.success)),I.send({methodName:"remove",data:o},t=>{let a,c,u;void 0!==t&&(a=t.errorMsg,c=t.isNotAuthed,u=t.originData),void 0!==a?void 0!==i?i(a):SHOW_ERROR(e.boxName+"."+T+"Model.remove",a):c===!0?void 0!==n?n():SHOW_WARNING(e.boxName+"."+T+"Model.remove",MSG({ko:"인증되지 않았습니다."})):void 0===u?void 0!==r?r():SHOW_WARNING(e.boxName+"."+T+"Model.remove",MSG({ko:"삭제할 데이터가 존재하지 않습니다."}),o):void 0!==d&&d(u)})})),s!==!1&&(C=t.find=((o,t)=>{let i,n,r;void 0===t&&(t=o,o=void 0),CHECK_IS_DATA(t)!==!0?r=t:(i=t.error,n=t.notAuthed,r=t.success),I.send({methodName:"find",data:o},o=>{let t=o.errorMsg,d=o.isNotAuthed,a=o.savedDataSet;void 0!==t?void 0!==i?i(t):SHOW_ERROR(e.boxName+"."+T+"Model.find",t):d===!0?void 0!==n?n():SHOW_WARNING(e.boxName+"."+T+"Model.find",MSG({ko:"인증되지 않았습니다."})):r(a)})}),M=t.findWatching=((o,i)=>{let n,r,d,a,c={};return void 0===i&&(i=o,o=void 0),CHECK_IS_DATA(i)!==!0?d=i:(n=i.error,r=i.notAuthed,d=i.success),t.find(o,{success:o=>{let t;a!==!0&&(EACH(o,(o,t)=>{let i=o.id;c[i]=e.ROOM({roomServerName:_,name:T+"/"+i})}),d(o,(e,o)=>{c[e].on("update",o)},(e,o)=>{c[e].on("remove",i=>{o(i),t(e)})},t=(e=>{void 0!==c[e]&&(c[e].exit(),delete c[e])})))},notAuthed:r,error:n}),OBJECT({init:(e,o)=>{o.exit=(()=>{EACH(c,e=>{e.exit()}),a=!0})}})})),v!==!1&&(R=t.count=((o,t)=>{let i,n,r;void 0===t&&(t=o,o=void 0),CHECK_IS_DATA(t)!==!0?r=t:(i=t.error,n=t.notAuthed,r=t.success),I.send({methodName:"count",data:o},o=>{let t=o.errorMsg,d=o.isNotAuthed,a=o.count;void 0!==t?void 0!==i?i(t):SHOW_ERROR(e.boxName+"."+T+"Model.count",t):d===!0?void 0!==n?n():SHOW_WARNING(e.boxName+"."+T+"Model.count",MSG({ko:"인증되지 않았습니다."})):r(a)})})),f!==!1&&(h=t.checkIsExists=((o,t)=>{let i,n,r;void 0===t&&(t=o,o=void 0),CHECK_IS_DATA(t)!==!0?r=t:(i=t.error,n=t.notAuthed,r=t.success),I.send({methodName:"checkIsExists",data:o},o=>{let t=o.errorMsg,d=o.isNotAuthed,a=o.isExists;void 0!==t?void 0!==i?i(t):SHOW_ERROR(e.boxName+"."+T+"Model.checkIsExists",t):d===!0?void 0!==n?n():SHOW_WARNING(e.boxName+"."+T+"Model.checkIsExists",MSG({ko:"인증되지 않았습니다."})):r(a)})}));let k=t.onNew=((o,t)=>{let r,d=n;if(n+=1,void 0===t)t=o,o=void 0,(r=e.ROOM({roomServerName:_,name:T+"/create"})).on("create",e=>{i[d].lastCreateTime=e.createTime,t(e)});else if(void 0===o)(r=e.ROOM({roomServerName:_,name:T+"/create"})).on("create",e=>{i[d].lastCreateTime=e.createTime,t(e)});else if(EACH(o,(n,a)=>{if(void 0!==n)return(r=e.ROOM({roomServerName:_,name:T+"/"+a+"/"+n+"/create"})).on("create",e=>{EACH(o,(o,t)=>{if(void 0!==o)if(o===TO_DELETE){if(void 0!==e[t])return!1}else if(e[t]!==o)return!1})===!0&&(i[d].lastCreateTime=e.createTime,t(e))}),!1}),void 0===r)return void k(void 0,t);return i[d]={findMissingDataSet:()=>{void 0!==i[d].lastCreateTime&&void 0!==C&&C({filter:void 0!==o?COMBINE([o,{createTime:{$gt:i[d].lastCreateTime}}]):{createTime:{$gt:i[d].lastCreateTime}}},REVERSE_EACH(t))}},OBJECT({init:(e,o)=>{o.exit=(()=>{delete i[d],void 0!==r&&r.exit()})}})}),G=t.onNewWatching=((o,t)=>{let r,d=n,a=[],c=o=>{let i,n,r=o.id;a.push(i=e.ROOM({roomServerName:_,name:T+"/"+r})),t(o,e=>{i.on("update",e)},e=>{i.on("remove",o=>{e(o),n()})},n=(()=>{i.exit(),REMOVE({array:a,value:i})}))};if(n+=1,void 0===t)t=o,o=void 0,(r=e.ROOM({roomServerName:_,name:T+"/create"})).on("create",e=>{i[d].lastCreateTime=e.createTime,c(e)});else if(void 0===o)(r=e.ROOM({roomServerName:_,name:T+"/create"})).on("create",e=>{i[d].lastCreateTime=e.createTime,c(e)});else if(EACH(o,(t,n)=>{if(void 0!==t)return(r=e.ROOM({roomServerName:_,name:T+"/"+n+"/"+t+"/create"})).on("create",e=>{EACH(o,(o,t)=>{if(void 0!==o)if(o===TO_DELETE){if(void 0!==e[t])return!1}else if(e[t]!==o)return!1})===!0&&(i[d].lastCreateTime=e.createTime,c(e))}),!1}),void 0===r)return void G(void 0,t);return i[d]={findMissingDataSet:()=>{void 0!==i[d].lastCreateTime&&void 0!==C&&C({filter:void 0!==o?COMBINE([o,{createTime:{$gt:i[d].lastCreateTime}}]):{createTime:{$gt:i[d].lastCreateTime}}},REVERSE_EACH(c))}},OBJECT({init:(e,o)=>{o.exit=(()=>{delete i[d],void 0!==r&&r.exit(),EACH(a,e=>{e.exit()})})}})});s!==!1&&(H=t.onNewAndFind=((e,o)=>{let t,i,n,r,d,a,c,u,s,v,f;return void 0===o&&(o=e,e=void 0),void 0!==e&&(t=e.properties,i=e.filter,n=e.sort,r=e.start,d=e.count,a=e.isNotOnNew),CHECK_IS_DATA(o)!==!0?f=o:(u=o.error,s=o.notAuthed,v=o.success,f=o.handler),a!==!0&&(c=k(t,e=>{f(e,!0)})),C({filter:COMBINE([t,i]),sort:n,start:r,count:d},{success:e=>{void 0!==v&&v(e),REVERSE_EACH(e,e=>{f(e,!1)})},notAuthed:s,error:u}),OBJECT({init:(e,o)=>{o.exit=(()=>{void 0!==c&&c.exit()})}})}),x=t.onNewAndFindWatching=((e,o)=>{let t,i,n,r,d,a,c,u,s,v,f,m;return void 0===o&&(o=e,e=void 0),void 0!==e&&(t=e.properties,i=e.filter,n=e.sort,r=e.start,d=e.count,a=e.isNotOnNew),CHECK_IS_DATA(o)!==!0?v=o:(c=o.error,u=o.notAuthed,s=o.success,v=o.handler),a!==!0&&(f=G(t,(e,o,t,i)=>{v(e,o,t,i,!0)})),m=M({filter:COMBINE([t,i]),sort:n,start:r,count:d},{success:(e,o,t,i)=>{void 0!==s&&s(e,o,t,i),REVERSE_EACH(e,e=>{v(e,t=>{o(e.id,t)},o=>{t(e.id,o)},()=>{i(e.id)},!1)})},notAuthed:u,error:c}),OBJECT({init:(e,o)=>{o.exit=(()=>{void 0!==f&&f.exit(),m.exit()})}})}));t.onRemove=((o,t)=>{let i;return void 0===t?(t=o,(i=e.ROOM({roomServerName:_,name:T+"/remove"})).on("remove",t)):EACH(o,(n,r)=>{if(void 0!==n)return(i=e.ROOM({roomServerName:_,name:T+"/"+r+"/"+n+"/remove"})).on("remove",e=>{EACH(o,(o,t)=>{if(void 0!==o)if(o===TO_DELETE){if(void 0!==e[t])return!1}else if(e[t]!==o)return!1})===!0&&t(e)}),!1}),OBJECT({init:(e,o)=>{o.exit=(()=>{void 0!==i&&i.exit()})}})})}}})})});