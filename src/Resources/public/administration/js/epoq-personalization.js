(this.webpackJsonp=this.webpackJsonp||[]).push([["epoq-personalization"],{"+4/P":function(t){t.exports=JSON.parse('{"epoq-api-test-button":{"title":"Tenant ID Test","success":"Connection was successfully tested","error":"Connection could not be established. Please check the access data","button":"Test Tenant ID"}}')},"5gPJ":function(t,e){t.exports='<div>\n    <sw-button-process\n        :isLoading="isLoading"\n        :processSuccess="isSaveSuccessful"\n        @process-finish="saveFinish"\n        @click="check"\n    >{{ $tc(\'epoq-api-test-button.button\') }}</sw-button-process>\n</div>\n'},ABto:function(t,e,n){"use strict";n.r(e);n("lH7M");var o=n("5gPJ"),r=n.n(o),i=Shopware,c=i.Component,s=i.Mixin;c.register("epoq-api-test-button",{template:r.a,props:["label"],inject:["epoqApiTest"],mixins:[s.getByName("notification")],data:function(){return{isLoading:!1,isSaveSuccessful:!1}},computed:{pluginConfig:function(){for(var t=this.$parent;void 0===t.actualConfigData;)t=t.$parent;return t.actualConfigData.null}},methods:{saveFinish:function(){this.isSaveSuccessful=!1},check:function(){var t=this;this.isLoading=!0,this.epoqApiTest.check(this.pluginConfig["EpoqPersonalization.config.tenantId"]).then((function(e){e.success?(t.isSaveSuccessful=!0,t.createNotificationSuccess({title:t.$tc("epoq-api-test-button.title"),message:t.$tc("epoq-api-test-button.success")})):t.createNotificationError({title:t.$tc("epoq-api-test-button.title"),message:t.$tc("epoq-api-test-button.error")}),t.isLoading=!1}))}}});var a=n("PVOW"),u=n("+4/P");Shopware.Locale.extend("de-DE",a),Shopware.Locale.extend("en-GB",u)},PVOW:function(t){t.exports=JSON.parse('{"epoq-api-test-button":{"title":"Tenant ID Test","success":"Verbindung wurde erfolgreich getestet","error":"Verbindung konnte nicht hergestellt werden. Bitte prüfe die Zugangsdaten","button":"Tenant ID testen"}}')},lH7M:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e,n,o,r,i,c){try{var s=t[i](c),a=s.value}catch(t){return void n(t)}s.done?e(a):Promise.resolve(a).then(o,r)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=Shopware.Classes.ApiService,f=Shopware.Application,l=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(h,t);var e,n,a,u,f,l=s(h);function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"epoq-api-test";return r(this,h),l.call(this,t,e,n)}return e=h,(n=[{key:"check",value:(u=regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.getBasicHeaders({}),t.abrupt("return",this.httpClient.post("_action/".concat(this.getApiBasePath(),"/verify"),{tenantId:e},{headers:n}).then((function(t){return p.handleResponse(t)})));case 2:case"end":return t.stop()}}),t,this)})),f=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=u.apply(t,e);function c(t){o(i,n,r,c,s,"next",t)}function s(t){o(i,n,r,c,s,"throw",t)}c(void 0)}))},function(t){return f.apply(this,arguments)})}])&&i(e.prototype,n),a&&i(e,a),h}(p);f.addServiceProvider("epoqApiTest",(function(t){var e=f.getContainer("init");return new l(e.httpClient,t.loginService)}))}},[["ABto","runtime"]]]);