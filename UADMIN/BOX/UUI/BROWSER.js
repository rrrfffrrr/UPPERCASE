UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c=n.img,d=n.title,l=void 0===n.spacing?0:n.spacing,s=n.href,f=n.target;o=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:s,target:f}),void 0!==d&&o.prepend(i=DIV({c:void 0===d?"":d})),void 0!==c&&o.prepend(DIV({style:{marginBottom:void 0!==d?l:0},c:c})),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.getImg=a=function(){return c},t.tap=u=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d=n.img,l=n.title,s=void 0===n.spacing?0:n.spacing,f=n.href,p=n.target,v=n.isImgRight;o=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:f,target:p,c:[i=DIV({style:{flt:"left"},c:void 0===l?"":l}),CLEAR_BOTH()]}),void 0!==d&&(d.addStyle({flt:"left"}),void 0===d.getStyle("margin")&&void 0===d.getStyle("marginRight")&&d.addStyle(v!==!0?{marginRight:s}:{marginLeft:s}),v!==!0?o.prepend(d):i.after(d),r=EVENT({name:"resize"},function(){var e=i.getHeight();e>0&&i.addStyle({marginTop:(d.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:d,name:"load"},function(){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=u=function(){return d},t.tap=c=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p,v=n.name,E=n.label,m=n.value,g=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:v,type:"checkbox",value:m}),SPAN({style:{flt:"left",cursor:"pointer"},c:E,on:{tap:function(){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return v},t.getValue=a=function(){return i.getValue()},t.setValue=u=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=d=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=l=function(e){i.addStyle(e)},void 0!==g&&l(g),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(){var e=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),e},t.checkIsChecked=p=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p=n.name,v=n.type,E=n.placeholder,m=n.capture,g=n.accept,y=n.value,N=n.inputStyle;o=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===v||"datetime"===v||"datetime-local"===v||"month"===v||"time"===v||"week"===v?void 0:"transparent"},name:p,type:v,value:y,capture:m,accept:g,placeholder:E})]}),on:{tap:function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})}}}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=u=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.focus=d=function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=s=function(e){i.addStyle(e)},void 0!==N&&s(N),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p,v=n.name,E=n.value,m=n.options,g=n.selectStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:v,value:E,c:m})}),e.setWrapperDom(o),t.getName=r=function(){return v},t.getValue=a=function(){return i.getValue()},t.setValue=u=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select()},t.blur=d=function(){i.blur()},t.addSelectStyle=l=function(e){i.addStyle(e)},void 0!==g&&l(g),t.addOption=s=function(e){i.append(e)},t.removeAllOptions=f=function(){i.empty()},t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i=void 0===n?void 0:n.value;o=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==i&&o.setValue(i),e.setDom(o)}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p=n.name,v=n.placeholder,E=n.value,m=n.textareaStyle;o=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:p,placeholder:v,value:E})}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=u=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select()},t.focus=d=function(){i.focus()},t.blur=l=function(){i.blur()},t.addTextareaStyle=s=function(e){i.addStyle(e)},void 0!==m&&s(m),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p=n.box,v=n.capture,E=n.accept,m=n.isMultiple,g=void 0!==n.callbackURL?n.callbackURL:"http://"+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__UPLOAD_CALLBACK",y=n.formStyle,N=n.inputStyle,S=n.uploadingStyle,A=n.uploadOverSizeFile,C=n.uploadSuccess;o=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[a=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),u=UUI.PANEL({style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10,color:"#fff"},c:"Uploading..."})]}),GET({port:CONFIG.webServerPort,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},function(e){a.after(i=FORM({action:"http://"+e+":"+CONFIG.webServerPort+"/__UPLOAD?boxName="+p.boxName+"&callbackURL="+g,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:COMBINE([{padding:5},y]),c:[r=INPUT({type:"file",name:"file",capture:v,accept:E,isMultiple:m,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},N])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:r,name:"change"},function(){""!==r.getValue()&&(u.show(),void 0!==i&&i.submit(!0))})}),EVENT({node:a,name:"load"},function(){var e,n,o=global["__UPLOAD_FORM_"+t.id],i=void 0!==o?o.fileDataSetStr:void 0,a=void 0!==o?o.maxUploadFileMB:void 0;void 0!==a?(void 0!==A&&A(a),n=r.getValue(),r.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})):void 0!==i&&(e=PARSE_STR(decodeURIComponent(i)),EACH(e,function(t,n){e[n]=UNPACK_DATA(t)}),void 0!==C&&C(m!==!0?e[0]:e,t),n=r.getValue(),r.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})),u.hide()}),e.setWrapperDom(o),t.select=c=function(){void 0!==r&&(r.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))},t.addFormStyle=d=function(e){void 0!==i?i.addStyle(e):EXTEND({origin:y,extend:e})},void 0!==y&&d(y),t.addInputStyle=l=function(e){void 0!==r?r.addStyle(e):EXTEND({origin:N,extend:e})},void 0!==N&&l(N),t.addUploadingStyle=s=function(e){u.addStyle(e)},void 0!==S&&s(S),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:r,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=n.img,u=n.href,c=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:u,target:c,c:a}),e.setDom(o),t.getImg=i=function(){return a},t.tap=r=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l=void 0===n?void 0:n.isRequiringClearBoth,s=[],f={};void 0===i&&(i={}),e.setDom(o=UL()),t.addItem=a=function(e){var n=e.key,a=e.item,u=e.isFirst;void 0!==i[n]?(a.insertBefore(i[n]),s[FIND({array:s,value:i[n]})]=a,i[n].remove()):u===!0&&s.length>0?(a.insertBefore(s[0]),s.unshift(a)):(t.append(a),s.push(a)),i[n]=a,l===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(e,t){a({key:t,item:e})}),t.removeItem=u=function(e){var t=i[e],n=f[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:s,value:t}),REMOVE({data:i,name:e}),REMOVE({data:f,name:e})},t.addRemoveItemHandler=c=function(e,t){void 0===f[e]&&(f[e]=[]),f[e].push(t)},t.removeAllItems=d=function(){EACH(i,function(e,t){var n=f[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),i={},s=[],f={}}}}),UUI.LOADING=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p,v=n.style,E=n.contentStyle,m=n.indicator,g=n.msg,y=n.on;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},v]),contentStyle:E,isCannotClose:!0,c:[void 0===m?"":m,P({style:void 0===m?{}:{marginTop:10},c:g})],on:y}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=u=function(e){o.after(e)},t.before=c=function(e){o.before(e)},t.remove=d=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addStyle=f=function(e){o.addStyle(e)},t.addContentStyle=p=function(e){o.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p,v,E,m,g,y,N,S,A,C,T=void 0===n?void 0:n.c,h=void 0===n?void 0:n.style,V=void 0===n?void 0:n.contentStyle,I=void 0===n?void 0:n.xStyle,U=void 0===n?void 0:n.xImg,O=void 0===n?void 0:n.isCannotClose;void 0===U&&O!==!0&&(U=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),O===!0?"":UUI.IMG_BUTTON({style:COMBINE([{position:"absolute"},void 0===I?{top:-20,right:-20,padding:10}:I]),img:U,on:{tap:function(){S()},mouseover:function(){g({opacity:.8})},mouseout:function(){g({opacity:1})}}})]}).appendTo(BODY),d=RAR(function(){var e,t=(WIN_WIDTH()-o.getWidth())/2+SCROLL_LEFT(),n=(WIN_HEIGHT()-o.getHeight())/2+SCROLL_TOP();o.addStyle({position:"absolute",left:0>t?0:t,top:0>n?0:n}),(e=function(t){EACH(t,function(t){t.type===IMG&&EVENT({node:t,name:"load"},function(){d()}),void 0!==t.getChildren&&e(t.getChildren())})})(o.getChildren())}),o.on("show",d),r=EVENT({name:"resize"},d),a=EVENT({name:"scroll"},d),u=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&O!==!0&&S()}),o.on("remove",function(){r.remove(),a.remove(),u.remove()}),t.getNode=c=function(){return o},t.append=l=function(e){i.append(e),d()},void 0!==T&&(CHECK_IS_ARRAY(T)===!0?EACH(T,function(e){l(e)}):l(T)),t.prepend=s=function(e){i.prepend(e),d()},t.after=f=function(e){o.after(e),d()},t.before=p=function(e){o.before(e),d()},t.remove=v=function(){o.remove()},t.empty=E=function(){i.empty()},t.getChildren=m=function(){return i.getChildren()},t.addStyle=g=function(e){o.addStyle(e),d()},void 0!==h&&g(h),t.addContentStyle=y=function(e){i.addStyle(e),d()},void 0!==V&&y(V),t.on=N=function(e,n){EVENT({node:t,lowNode:o,name:e},n)},t.close=S=function(){EVENT.fireAll({node:t,name:"close"})!==!1&&v()},t.getLeft=A=function(){return o.getLeft()},t.getTop=C=function(){return o.getTop()}},afterInit:function(e,t,n){"use strict";var o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,function(e,n){t.on(n,e)})}}),UUI.NOTICE=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,u,c,d,l,s,f,p=n.style,v=n.contentStyle,E=n.isCannotClose,m=n.on,g=n.msg;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},p]),contentStyle:v,isCannotClose:!0,on:m,c:g}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=u=function(e){o.after(e)},t.before=c=function(e){o.before(e)},t.remove=d=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addContentStyle=f=function(e){o.addContentStyle(e)},E!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u,c=void 0===n?void 0:n.trs,d=[],l={};void 0===c&&(c={}),e.setDom(o=TABLE()),t.addTR=i=function(e){var n=e.key,o=e.tr,i=e.isFirst;void 0!==c[n]?(o.insertBefore(c[n]),d[FIND({array:d,value:c[n]})]=o,c[n].remove()):i===!0&&d.length>0?(o.insertBefore(d[0]),d.unshift(o)):(t.append(o),d.push(o)),c[n]=o},EACH(c,function(e){d.push(e),t.append(e)}),t.removeTR=r=function(e){var t=c[e],n=l[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:d,value:t}),REMOVE({data:c,name:e}),REMOVE({data:l,name:e})},t.addRemoveTRHandler=a=function(e,t){void 0===l[e]&&(l[e]=[]),l[e].push(t)},t.removeAllTRs=u=function(){EACH(c,function(e,t){var n=l[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),c={},d=[],l={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,u=n.title,c=n.href,d=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:c,target:d,c:i=SPAN({c:void 0===u?void 0===c?"":c:u})}),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.tap=a=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return FORM},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.errorMsgs,u=void 0===n?void 0:n.errorMsgStyle,c=[];t.on("remove",function(){EACH(c,function(e){e.remove()})}),t.showErrors=o=function(e){var n=COPY(e),o=function(e){EACH(e.getChildren(),function(e){var t,i,r,d;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==a&&(r=a[t][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),e.after(d=P({style:u,c:r})),REMOVE({data:n,name:t}),c.push(DELAY(3,function(e){d.remove(),REMOVE({array:c,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=i=function(e){var t={};return EACH(e,function(e,n){var o;void 0!==a&&(o=a[n][e.type],"function"==typeof o&&(o=o(void 0!==e.validParam?e.validParam:e.validParams)),t[n]=o)}),t},t.getErrorMsgStyle=r=function(){return u}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})})}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}});