OVERRIDE(IFRAME,function(e){"use strict";global.IFRAME=IFRAME=CLASS({preset:function(){return e},init:function(e,t,n){var r,o=n.name,a=n.style,E=n.src;IE.version<=7&&(void 0!==o&&(e.setEl(document.createElement('<iframe name="'+o+'" />')),e.setAttr({name:"allowTransparency",value:!0}),e.setAttr({name:"frameBorder",value:0})),void 0!==a&&t.addStyle(a)),OVERRIDE(t.setSrc,function(e){t.setSrc=r=function(t){e(BROWSER_CONFIG.fixScriptsFolderPath+"/IE/BROWSER/DOM/TAG/IFRAME_FIX_REDIRECT.html?"+encodeURIComponent(t))}}),void 0!==E&&r(E)}})});