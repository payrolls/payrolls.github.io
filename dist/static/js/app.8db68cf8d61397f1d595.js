webpackJsonp([32],{113:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(230),r=a(o),i=n(229),u=a(i),s=n(231),p=a(s);!window.history||history.pushState;t.default={mode:"hash",linkActiveClass:"is-active",scrollBehavior:function(){return{y:0}},routes:[{path:"/login",component:n(165),meta:{label:"登录",hidden:!0}},{path:"/",component:n(57),redirect:{name:"GlobalSetting"},meta:{label:"首页",hidden:!0}},{path:"/404",component:n(164),meta:{label:"404",hidden:!0}},r.default,u.default,p.default,{path:"*",redirect:"/404",meta:{hidden:!0}}]}},114:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function e(t,n,a){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,a)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(a)},p=n(226),l=a(p),c=n(59),d=a(c),h=n(76),m=(a(h),n(227)),f=(a(m),n(223)),y=a(f),g=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.Apis=d.default,e.apiDomain=new y.default,e}return i(t,e),u(t,[{key:"getUrl",value:function(e){return this.apiDomain.getUrl(e)}},{key:"nativeSend",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object.assign({},n),n.project=this.apiDomain.getProject(),s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"send",this).call(this,{url:e.url,type:e.type,timeout:e.timeout,headers:e.headers},n).then(function(e){var t=e.data;if(t.code){if(0==t.code)return t;throw{message:"请求失败code: "+t.code+", message: "+(t.errmsg||"未知原因"),stack:(new Error).stack,code:t.code}}return e.data},function(e){var t=0;throw e.response?t=e.response.status:e.request&&(t=e.request.status),new Error("网络错误 [ "+t+" ] "+e.message+" ")})}},{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.apiDomain.getUrl(e);return this.nativeSend({url:n,type:e.type,timeout:e.timeout,headers:e.headers,author:e._author||""},t)}},{key:"isProduction",value:function(){return this.apiDomain.isProduct()}},{key:"getProject",value:function(){return this.apiDomain.getProject()}}]),t}(l.default);t.default=g},121:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(t){var n=t.path,o=t.type,r=void 0===o?"get":o,i=t.timeout,u=void 0===i?5e3:i,s=t.headers,p=void 0===s?{}:s,l=t.project,c=void 0===l?"qupost":l,d=t.author,h=void 0===d?"未定义":d;a(this,e),this._path=n,this._type=r,this._author=h,this.timeout=u,this.headers=p,this.project=c}return o(e,[{key:"path",get:function(){return this._path}},{key:"type",get:function(){return this._type}},{key:"author",get:function(){return this._author}}]),e}();t.default=r},164:function(e,t,n){n(453);var a=n(53)(null,n(464),"data-v-40bf464e",null);e.exports=a.exports},165:function(e,t,n){n(454);var a=n(53)(n(221),n(465),"data-v-4467f7ac",null);e.exports=a.exports},166:function(e,t,n){"use strict";e.exports={en:{header:{title:"OperatingPlatform"},sidebar:{GlobalSettingType:"GlobalSetting",GlobalSetting:"GlobalSetting",ContentManage:"ContentManage",NetworkArticleAudit:"NetworkArticleAudit",NetworkArticleAuditDetail:"NetworkArticleAuditDetail",OperationManage:"OperationManage",FinanceManage:"FinanceManage",taskManage:"taskManage"}},zn:{header:{title:"payroll"},sidebar:{GlobalSettingType:"全局配置",GlobalSetting:"全局配置",Package:"包管理",Version:"版本管理",Cdn:"CDN",Domain:"收徒域名管理",Upload:"图片上传",ContentManage:"内容管理",NetworkArticleAudit:"网络图文审核",NetworkArticleAuditDetail:"网络图文详情",NetworkMediaAudit:"网络视频审核",NetworkMediaAuditDetail:"网络视频详情",PushContentManage:"线上内容管理",PushContentEdit:"线上内容编辑",Comment:"评论安全巡查",ArticlePush:"文章推送管理",ArticlePushEdit:"文章推送编辑",OperationManage:"用户管理",User:"用户管理",Tool:"工具",PushMessage:"系统消息",FinanceManage:"财务管理",ToReview:"提现审核",RateChange:"汇率调整",taskManage:"任务管理"}}}},169:function(e,t){},170:function(e,t){},171:function(e,t){},173:function(e,t,n){n(457);var a=n(53)(n(219),n(468),null,null);e.exports=a.exports},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nprogress-container"}},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(463),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"app",components:{NprogressContainer:o.default}}},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(114),r=a(o),i=n(76),u=a(i),s=n(113),p=a(s),l=n(222),c=(a(l),new r.default);t.default={data:function(){return{token:u.default.getToken(),isCollapse:!0,info:{},menu:p.default.routes,disabled:!0}},methods:{isLogin:function(){this.token||this.$router.push("/login")},getMemberInfo:function(){var e=this;c.send(c.Apis.perm.member.getMember).then(function(t){e.info=t.data.member||{}}).catch(function(t){e.$message.error(""+(t.message||"未知错误"))}).fin(function(){e.loading=!1}).done()},handleOpen:function(){},handleClose:function(){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){c.send(c.Apis.qutuiba.member.logout).then(function(t){0==t.code?e.$router.push("/login"):e.$message.error(""+(t.errmsg||"未知错误"))})})},collapse:function(){this.isCollapse=!this.isCollapse}},mounted:function(){}}},221:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(114),r=a(o),i=n(76),u=(a(i),new r.default);t.default={data:function(){return{logining:!1,ruleForm:{user:"",pwd:""},rule:{user:[{required:!0,message:"Please enter your cell phone number",trigger:"blur"}],pwd:[{required:!0,message:"Please input a pwd",trigger:"blur"}]},checked:!1,disabled:!1}},methods:{submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;e.disabled=!0,u.send(u.Apis.qutuiba.member.login,e.ruleForm).then(function(t){e.$message.success("Login successful！"),e.$router.push("/#/global/globalSetting")}).catch(function(t){e.$message.error(t.errmsg)}).fin(function(){e.loading=!1,e.disabled=!1}).done()})}}}},222:function(e,t,n){"use strict";function a(e,t){for(var t=t-(e+"").length,n=0;n<t;n++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var o=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t),a="";return null!=n&&(a=n[2]),t=null,n=null,null==a||""==a||"undefined"==a?"":a},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(o,function(t){switch(t.charAt(0)){case"y":return a(e.getFullYear(),t.length);case"M":return a(e.getMonth()+1,t.length);case"d":return a(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return a(e.getHours(),t.length);case"m":return a(e.getMinutes(),t.length);case"s":return a(e.getSeconds(),t.length)}})},parse:function(e,t){var n=t.match(o),a=e.match(/(\d)+/g);if(n.length==a.length){for(var r=new Date(1970,0,1),i=0;i<n.length;i++){var u=parseInt(a[i]);switch(n[i].charAt(0)){case"y":r.setFullYear(u);break;case"M":r.setMonth(u-1);break;case"d":r.setDate(u);break;case"h":r.setHours(u);break;case"m":r.setMinutes(u);break;case"s":r.setSeconds(u)}}return r}return null}},getUrlSearch:function(){var e=void 0,t=void 0,n=void 0,a=void 0,o=void 0,r={};e=location.search.length>0?location.search.substring(1):null,t=e?e.split("&"):"";for(var i=0,u=t.length;i<u;i++)n=t[i].split("="),a=decodeURIComponent(n[0]),o=(n[1]||"").replace(/(.*)%$/,function(e,t){return t+encodeURIComponent("%")}),o=decodeURIComponent(o||""),a.length>0&&(r[a]=o);return r},getPermUrl:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach(function(t){var a=t.meta,o=void 0===a?{}:a;o.api&&o.api.forEach(function(e){n.push(e.project+"::"+e.path)}),t.children&&e(t.children,n)}),n},savePermApi:function(e){localStorage.setItem("qu_local_perms",JSON.stringify(e))},checkPermApi:function(e){var t=[];try{t=JSON.parse(localStorage.getItem("qu_local_perms"))||[]}catch(e){}return console.log(t,e),e.forEach(function(e){e.children&&e.children.forEach(function(e){for(var n=e.meta.api||[],a=!0,o=0,r=n.length;o<r;o++){var i=n[o],u=i.project,s=i.path,p=u+"::"+s;if(!t[p]||1!==t[p].has){a=!0;break}a=!1,console.log(p,a)}e.meta.hidden=a})}),e}}},223:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(162),i=function(e){return e&&e.__esModule?e:{default:e}}(r),u={qutuiba:{default:"https://13.76.46.204/"},perm:{default:"https://13.76.46.204/"}},s={},p=function(){function e(){a(this,e),this.domains=this.getDomains()}return o(e,[{key:"getDomains",value:function(){var e={};for(var t in u){var n=t+"_branch",a=i.default.get(n)||"default";s[t]=a,e[t]=this.getBranch(t,a)}return e}},{key:"getBranch",value:function(e,t){var n=u[e];if(n){if(n.hasOwnProperty(t))return n[t];console.error("不存在"+e+"对应项目"+t+"分支")}else console.error("不存在"+e+"对应项目")}},{key:"getUrl",value:function(e){var t=this.domains,n=e.project,a=e.path,o="";if(n in t&&(o=t[n]),!o)throw new Error("ApiDomain.getUrl：没有配置该 "+n+" 项目的 domain");return/^\//.test(a)?a=a.substring(1,a.length):console.warn("路径需要以/开头！"),""+o+a}},{key:"getBranchMap",value:function(){return s}},{key:"isProduct",value:function(){return!1}},{key:"getEvn",value:function(){return"development"}},{key:"isDevelopment",value:function(){return!0}},{key:"getProject",value:function(){return"qutuiba"}}],[{key:"setApiBranch",value:function(e){for(var t in u){var n="_"+t;if(e.hasOwnProperty(n)){var a=e[n];u[t].hasOwnProperty(a)&&(s[t]=a,i.default.set(t+"_branch",a))}}}}]),e}();t.default=p},224:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),u=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e){function t(e){var n=e.path,r=e.type,i=void 0===r?"get":r,u=e.timeout,s=void 0===u?5e3:u,p=e.headers,l=e.project,c=void 0===l?"perm":l,d=e.author,h=void 0===d?"未定义":d;return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:n,type:i,timeout:s,headers:p,project:c,author:h}))}return r(t,e),t}(u.default);t.default={member:{list:new s({path:"/member/list",type:"get",author:"刘彪"}),getMember:new s({path:"/member/getMember",type:"get",author:"刘彪"}),allowLogin:new s({path:"/member/allowLogin",type:"post",author:"刘彪"}),login:new s({path:"/member/login",type:"get",author:"刘彪"}),loginByPwd:new s({path:"/member/loginByPwd",type:"get",author:"刘彪"}),checkPerm:new s({path:"/member/checkPerm",type:"post",author:"刘彪"})},perm:{list:new s({path:"/perm/getPermGroupList",type:"post",author:"刘彪"})}}},225:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),u=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e){function t(e){var n=e.path,r=e.type,i=void 0===r?"get":r,u=e.timeout,s=void 0===u?5e3:u,p=e.headers,l=e.project,c=void 0===l?"qutuiba":l,d=e.author,h=void 0===d?"未定义":d;return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:n,type:i,timeout:s,headers:p,project:c,author:h}))}return r(t,e),t}(u.default);t.default={config:{getConfigList:new s({path:"/admin/config/getConfigList",type:"get",author:" "}),list:new s({path:"/admin/config/getConfigList",type:"get",author:" "}),modify:new s({path:"/admin/config/modify",type:"post",author:" "}),getConfigLog:new s({path:"/admin/config/getConfigLog",type:"get",author:" "}),getGlobalConfig:new s({description:"获取全局配置",path:"/admin/config/getGlobalConfig",type:"get",author:"郭选峰"})},version:{getList:new s({path:"/admin/appversion/getList",type:"get",author:" "}),delete:new s({path:"/admin/appversion/delete",type:"post",author:" "}),getPkgList:new s({path:"/admin/appversion/getPkgList",type:"get",author:" "}),modify:new s({path:"/admin/appversion/modify",type:"post",author:" "}),add:new s({path:"/admin/appversion/add",type:"post",author:" "})},package:{getList:new s({path:"/admin/appversion/getPkgList",type:"get",author:" "}),deletePkg:new s({path:"/admin/appversion/deletePkg",type:"post",author:" "}),addPkg:new s({path:"/admin/appversion/addPkg",type:"post",author:" "}),modify:new s({path:"/admin/appversion/modify",type:"post",author:" "}),add:new s({path:"/admin/appversion/add",type:"post",author:" "})},domain:{getList:new s({path:"/p/select?c=Company.CompanyCode,Company.CompanyName,Company.Address,Company.Phone,Company.Fax,Company.PostalAddress,Company.EmprTaxFileNum,Company.CurrencyCode,Company.PayDay,Company.PeriodType,Company.IsActive,Company.CreateDate",type:"get",author:" "}),modify:new s({path:"/admin/domain/modifyDomain",type:"post",author:" "}),add:new s({path:"/admin/domain/addDomain",type:"post",author:" "}),replaceDomain:new s({path:"/admin/domain/replaceDomain",type:"post",author:" "}),domainImport:new s({path:"/admin/domain/domainImport",type:"post",author:" "}),batch:new s({path:"/admin/domain/batch",type:"get",author:" "}),batchModify:new s({path:"/admin/domain/batchModify",type:"get",author:" "}),exportUrl:new s({path:"/admin/domain/exportUrl",type:"get",author:" "})},push:{list:new s({path:"/admin/push/getPushLogList",type:"post"}),getPushDetail:new s({path:"/admin/push/getPushDetail",type:"post"}),pushMessage:new s({path:"/admin/push/pushMessage",type:"post"}),delete:new s({path:"/admin/push/removePushLog",type:"post"})},content:{getAdminContentList:new s({path:"/admin/content/getAdminContentList",type:"post",author:" "}),modifyContentStatus:new s({path:"/admin/content/modifyContentStatus",type:"post",author:" "}),modifyContent:new s({path:"/admin/content/modifyContent",type:"post",author:" "}),getDefaultChannelList:new s({path:"/admin/content/getDefaultChannelList",type:"get",author:" "}),setTop:new s({path:"/admin/content/setTop",type:"post",author:" "}),setHot:new s({path:"/admin/content/setHot",type:"post",author:" "}),refreshCND:new s({path:"/admin/content/refreshCDN",type:"post",author:" "}),setTips:new s({path:"/admin/content/setTips",type:"post",author:" "}),addContent:new s({path:"/admin/content/addContent",type:"post",author:" "}),getAdminContentDetail:new s({path:"/admin/content/getAdminContentDetail",type:"post",author:" "}),viewSimilarity:new s({path:"/admin/content/viewSimilarity",type:"post",author:" "}),getCategoryList:new s({path:"/admin/content/getCategoryList",type:"get",author:"郭选峰"})},sensitiveword:{list:new s({path:"/admin/sensitiveword/index",type:"get",author:"郭选锋"}),getListByType:new s({path:"/admin/sensitivewords/getListByType",type:"get",author:"郭选锋"}),getGroupList:new s({path:"/admin/sensitiveword/getGroupList",type:"get",author:"郭选锋"})},complaint:{list:new s({path:"/admin/complaint/listMember",type:"get",author:" "})},upload:{uploadFile:new s({path:"/admin/upload/uploadFile",type:"post",author:" "})},contentTop:{save:new s({path:"/admin/contenttop/save",type:"post",author:"罗磊"}),del:new s({path:"/admin/contenttop/del",type:"post",author:"罗磊"}),enable:new s({path:"/admin/contenttop/enable",type:"post",author:"罗磊"}),disEnable:new s({path:"/admin/contenttop/disEnable",type:"post",author:"罗磊"}),getInfo:new s({path:"/admin/contenttop/getInfo",type:"post",author:"罗磊"}),getList:new s({path:"/admin/contenttop/getList",type:"post",author:"罗磊"}),getLogList:new s({path:"/admin/contenttop/getLogList",type:"post",author:"罗磊"})},comment:{index:new s({path:"/admin/comment/index",type:"get",author:" "})},collect:{getSourceTypeList:new s({path:"/admin/collect/getSourceTypeList",type:"get",author:" "}),grabImage:new s({path:"/admin/collect/grabImage",type:"get",author:" "})},contentclassification:{audit:new s({path:"/admin/contentclassification/audit",type:"post",author:" "}),view:new s({path:"/admin/contentclassification/view",type:"get",author:" "}),search:new s({path:"/admin/contentclassification/search",type:"get",author:" "}),statistic:new s({path:"/admin/contentclassification/statistic",type:"get",author:" "}),getOfflineChannel:new s({path:"/admin/contentclassification/getOfflineChannel",type:"get",author:" "}),setOfflineChannel:new s({path:"/admin/contentclassification/setOfflineChannel",type:"get",author:" "})},commentAudit:{search:new s({path:"/admin/commentAudit/search",type:"get",author:" "}),operateGreyList:new s({path:"/admin/commentAudit/operateGreyList",type:"get",author:" "}),audit:new s({path:"/admin/contentAudit/audit",type:"post",author:" "}),list:new s({path:"/admin/contentAudit/list",type:"get",author:" "}),statistics:new s({path:"/admin/contentAudit/statistics",type:"get",author:" "}),view:new s({path:"/admin/contentAudit/view",type:"get",author:" "}),exitView:new s({path:"/admin/contentAudit/exitView",type:"get",author:" "})},image:{crop:new s({path:"/admin/image/crop",type:"post",author:" "})},pushContent:{cancelPushContent:new s({path:"/admin/pushcontent/cancelPushContent",type:"get",author:"郭选峰"}),getPushList:new s({path:"/admin/pushcontent/getPushList",type:"post",author:"郭选峰"}),getLogList:new s({path:"/admin/pushcontent/getLogList",type:"get",author:"郭选峰"}),pushContent:new s({path:"/admin/pushcontent/pushContent",type:"post",author:"郭选峰"}),recallPush:new s({path:"/admin/pushcontent/recallPush",type:"get",author:"郭选峰"}),confirmPush:new s({path:"/admin/pushcontent/confirmPush",type:"get",author:"郭选峰"}),modify:new s({path:"/admin/pushcontent/modify",type:"post",author:"郭选峰"}),getPushDetail:new s({path:"/admin/pushcontent/getPushDetail",type:"get",author:"郭选峰"}),getPushDocument:new s({path:"/admin/pushcontent/getPushDocument",type:"get",author:"郭选峰"})},member:{extendInfo:new s({path:"/admin/member/extend",type:"get",author:" "}),dateExport:new s({path:"/admin/qukan/dateExport",type:"get",author:" "}),logout:new s({path:"/u/logout",type:"post",author:" "}),employList:new s({path:"/p/select?c=Employee.CompanyCode,Employee.EmpCode,Employee.IsPartime,Employee.EmploymentStartDate,Employee.EmploymentEndDate,Employee.EmploymentType,Employee.SurName,Employee.OtherName,Employee.FullChineseName,Employee.Gender,Employee.MobilePhone,Employee.HomePhone,Employee.BirthDate,Employee.Email,Employee.ICN,Employee.Passport,Employee.Country,Employee.MaritalStatus,Employee.SpouseName,Employee.SpouseICN,Employee.SpousePassport,Employee.SpouseCountry,Employee.ResidentialAddress,Employee.PostalAddress,Employee.BankAccount,Employee.Title,Employee.PaySlipDeliveryDay,Employee.IsActive,Employee.CreateDate,Employee.UpdateDate",type:"get",author:" "}),getDetail:new s({path:"/admin/member/detail",type:"get",author:" "}),bindWxLog:new s({path:"/admin/member/bindWxLog",type:"post",author:" "}),getMemberList:new s({path:"/admin/member/getList",type:"get",author:" "}),modifyPassword:new s({path:"/admin/member/modifyPassword",type:"post",author:" "}),setSmsCaptcha:new s({path:"/admin/member/setSmsCaptcha",type:"get",author:" "}),unBindWx:new s({path:"/admin/member/unBindWx",type:"get",author:" "}),getMemberCoinLogList:new s({path:"/admin/member/getMemberCoinLogList",type:"post",author:" "}),getLatestFreezeInfo:new s({path:"/admin/member/getLatestFreezeInfo",type:"get",author:" "}),freezeMember:new s({path:"/admin/member/freeze",type:"post",author:" "}),unFreezeMember:new s({path:"/admin/member/unFreeze",type:"post",author:" "}),markMember:new s({path:"/admin/member/markMember",type:"post",author:" "}),changeBalance:new s({path:"/admin/member/changeBalance",type:"post",author:" "}),login:new s({path:"/u/login",type:"post",author:" "}),getAdminMember:new s({path:"/admin/member/getAdminMember",type:"get",author:" "}),getCategoryList:new s({path:"/member/getCategoryList",type:"post",author:"郭选锋"}),getInviteCodeList:new s({path:"/admin/member/getInviteCodeList",type:"get",author:"郭选锋"}),getInviteCode:new s({path:"/admin/member/getInviteCode",type:"get",author:"郭选锋"}),getConvertList:new s({path:"/admin/member/getConvertList",type:"get",author:"郭选锋"})},cheat:{getCheatInfo:new s({path:"/admin/cheat/getCheatInfo",type:"get",author:" "}),cheatRewardTeacher:new s({path:"/admin/cheat/cheatRewardTeacher",type:"get",author:" "})},convert:{setFocus:new s({path:"/admin/member/follow",type:"post",author:" "}),unFocus:new s({path:"/admin/member/unfollow",type:"post",author:" "}),applyList:new s({path:"/admin/convert/applyList",type:"get",author:" "}),allowApply:new s({path:"/admin/convert/allowApply",type:"post",author:" "}),denyApply:new s({path:"/admin/convert/denyApply",type:"post",author:" "}),confirmApply:new s({path:"/admin/convert/confirmApply",type:"post",author:" "}),refreshJuheApply:new s({path:"/admin/convert/refreshJuheApply",type:"post",author:" "}),batchAllowApplyByDate:new s({path:"/admin/convert/batchAllowApplyByDate",type:"post",author:" "}),deny:new s({path:"/admin/convert/denyApply",type:"post"})},exchange:{getYesterdayGather:new s({path:"/admin/exchange/getYesterdayGather",type:"get",author:" "}),setExchangeByDate:new s({path:"/admin/exchange/setExchangeByDate",type:"post",author:" "})},message:{pushList:new s({path:"/admin/push/getList",type:"get",author:" "}),notPush:new s({path:"/admin/push/getCronList",type:"get",author:" "}),save:new s({path:"/admin/push/push",type:"get",author:" "}),pubOp:new s({path:"/admin/message/pubOp",type:"post",author:" "}),delLog:new s({path:"/admin/push/delLog",type:"post",author:" "}),delCron:new s({path:"/admin/push/delCron",type:"post",author:" "}),sendMemberMsg:new s({path:"/admin/message/sendMemberMsg",type:"get",author:" "})},cdn:{getCdnList:new s({path:"/admin/cdn/getCdnList",type:"get",author:" "}),modifyCdnDomain:new s({path:"/admin/cdn/modifyCdnDomain",type:"post",author:" "}),deleteCdnDomain:new s({path:"/admin/cdn/deleteCdnDomain",type:"post",author:" "}),addCdnDomain:new s({path:"/admin/cdn/addCdnDomain",type:"post",author:" "})},audit:{detail:new s({path:"/admin/audit/detail",type:"post",author:"郭选峰"}),incomeAuditList:new s({path:"/admin/audit/incomeAuditList",type:"get",author:"郭选峰"}),allow:new s({path:"/admin/audit/allow",type:"post",author:"郭选峰"}),deny:new s({path:"/admin/audit/deny",type:"post",author:"郭选峰"}),getReason:new s({path:"/admin/audit/getReason",type:"get",author:"郭选峰"})},permission:{list:new s({path:"/admin/permission/applyList",type:"get",author:"郭选峰"}),allowApply:new s({path:"/admin/permission/allowApply",type:"post",author:"郭选峰"}),denyApply:new s({path:"/admin/permission/denyApply",type:"post",author:"郭选峰"}),getBlackMemberList:new s({path:"/admin/permission/getBlackMemberList",type:"get",author:"郭选峰"})},contentAudit:{list:new s({path:"/admin/contentAudit/list",type:"get",author:" "}),statistics:new s({path:"/admin/contentAudit/statistics",type:"get",author:" "}),getReason:new s({path:"/admin/contentAudit/getReason",type:"get",author:" "}),audit:new s({type:"post",path:"/admin/contentAudit/audit",author:" "}),view:new s({type:"get",path:"/admin/contentAudit/view",author:" "}),exitView:new s({type:"get",path:"/admin/contentAudit/exitView",author:" "}),getReasonV2:new s({type:"get",path:"/admin/contentAudit/getReasonV2",author:" "}),getCpmFactorList:new s({type:"get",path:"/admin/contentAudit/getCpmFactorList",author:" "}),viewSimilarity:new s({type:"get",path:"/admin/contentAudit/viewSimilarity",author:" "}),checkSensitiveWord:new s({type:"post",path:"/admin/content/checkSensitiveWord",author:" "})},video:{list:new s({path:"/admin/video/auditList",type:"get",author:"吴雄介"}),statistics:new s({path:"/admin/video/auditSituation",type:"get",author:"吴雄介"}),classification:new s({path:"/admin/video/classification",type:"get",author:"郭选峰"})},contentReview:{list:new s({path:"/admin/contentReview/list",type:"get",author:" "}),statistics:new s({path:"/admin/contentReview/statistics",type:"get",author:" "})},announcement:{list:new s({path:"/admin/announcement/list",type:"get",author:" "}),delete:new s({path:"/admin/announcement/delete",type:"post",author:" "})},auditLog:{statistics:new s({path:"/admin/auditLog/getAuditStatistic",type:"get",author:" "}),list:new s({path:"/admin/auditLog/getAuditRecord",type:"get",author:" "}),getAuditRecordPerUser:new s({path:"/admin/auditLog/getAuditRecordPerUser",type:"get",author:"郭选峰"})},adminMember:{list:new s({path:"/admin/adminMember/auditReport",type:"get",author:" "}),editorList:new s({path:"/admin/adminMember/editorList",type:"get",author:" "})}}},226:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(199),s=a(u),p=n(177),l=a(p),c=function(){function e(){o(this,e)}return i(e,[{key:"formatData",value:function(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}return e}},{key:"send",value:function(e){var t=e.url,n=e.type,a=void 0===n?"get":n,o=(e.timeout,e.headers),r=void 0===o?{}:o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u={url:t,method:a.toLocaleLowerCase(),timeout:1e4,headers:r};if("post"===u.method){var p=[];for(var c in i)p.push(c+"="+encodeURIComponent(i[c]));u.data=this.formatData(i)}else"get"===u.method?u.params=i:u.data=i;return l.default.resolve((0,s.default)(u))}}]),e}();t.default=c},227:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(){function e(){a(this,e)}return r(e,null,[{key:"send",value:function(e){var t=e.cmd,n=void 0===t?9010:t,a=e.item,r=void 0===a?"":a,i=e.action,u=void 0===i?"":i,s=e.page_id,p=void 0===s?"":s,l=e.pos,c=void 0===l?"":l,d=e.uid,h=void 0===d?"":d,m=[],f=arguments[0]||{},y=o({cmd:n,item:r,action:u,page_id:p,pos:c,uid:h},f);for(var g in y)m.push(g+"="+y[g])}}]),e}();t.default=i},228:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(167);a(o);n(171);var r=n(18),i=a(r),u=n(174),s=a(u),p=n(175),l=a(p),c=n(172),d=a(c),h=n(173),m=a(h),f=n(168),y=a(f);n(169);var g=n(176),v=a(g),w=n(113),b=a(w),_=n(166),C=a(_);n(170),i.default.use(y.default),i.default.use(l.default),i.default.use(v.default),i.default.use(d.default),i.default.use(s.default);var P=new s.default({parent:".nprogress-container"}),k=new d.default({locale:"zn",messages:C.default}),L=new l.default(b.default);i.default.mixin({created:function(){this.filter&&(this.filter=this.$queryFilter(),this.$updateRouter(this.filter))},methods:{$queryFilter:function(){var e=this.filter||{};if(this.$route){var t=this.$route.query;for(var n in e)void 0!==t[n]&&("number"==typeof e[n]?e[n]=parseInt(t[n]):e[n]=t[n])}return e},$updateRouter:function(e){e||(e=this.$queryFilter()),this.$router.replace({query:Object.assign({},e)})},$blockRequest:function(e){var t=e.$elem,n=e.req,a=e.pendingText,o=void 0===a?"操作中":a;if(t||(t=document.createElement("button")),t&&!t._req_block){var r="button"===t.nodeName.toLowerCase(),i=t.innerText;return r&&t.setAttribute("disabled",!0),t.innerText=o,t._req_block=!0,n.fin(function(){r&&t.removeAttribute("disabled"),t._req_block=!1,t.innerText=i})}}}}),new i.default({router:L,i18n:k,nprogress:P,render:function(e){return e(m.default)}}).$mount("#app")},229:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(79),r=a(o),i=n(59),u=a(i);t.default={path:"/finance",meta:{icon:"el-icon-document",label:" Data import / export",hidden:!1},component:n(57),children:[{name:"ToReview",path:"to-review",component:(0,r.default)("finance/ToReview"),meta:{label:" Data import / export",hidden:!1,api:[u.default.qutuiba.convert.applyList]}}]}},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(79),r=a(o),i=n(59),u=a(i);t.default={path:"/global",meta:{icon:"el-icon-setting",label:"Company management",hidden:!1},component:n(57),children:[{name:"GlobalSetting",path:"global-setting",component:(0,r.default)("global/GlobalSetting"),meta:{label:"Company management",hidden:!1,api:[u.default.qutuiba.config.list]}}]}},231:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(79),r=a(o),i=n(59),u=a(i);t.default={path:"/operation",meta:{icon:"fa fa-user-o",label:"Employee management",hidden:!1},component:n(57),children:[{name:"User",path:"user",component:(0,r.default)("operation/user/User"),meta:{label:"Employee management",hidden:!1,api:[u.default.qutuiba.member.getMemberList]}}]}},453:function(e,t){},454:function(e,t){},455:function(e,t){},456:function(e,t){},457:function(e,t){},463:function(e,t,n){n(455);var a=n(53)(n(218),n(466),null,null);e.exports=a.exports},464:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("404 page not found")])},staticRenderFns:[]}},465:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rule,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("System Login")]),e._v(" "),n("el-form-item",{attrs:{prop:" user"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:" user"},model:{value:e.ruleForm.user,callback:function(t){e.ruleForm.user=t},expression:"ruleForm. user"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"pwd"}},[n("el-input",{attrs:{type:"pwd","auto-complete":"off",placeholder:"pwd"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}},model:{value:e.ruleForm.pwd,callback:function(t){e.ruleForm.pwd=t},expression:"ruleForm.pwd"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",disabled:e.disabled,loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.submitForm(t)},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}}},[e._v("Login\n        ")])],1)],1)},staticRenderFns:[]}},466:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"nprogress-container"})},staticRenderFns:[]}},467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.isCollapse?"logo-width":"logo-collapse-width",attrs:{span:10}},[e._v("\n            "+e._s(e.$t("header.title"))+"\n        ")]),e._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:10}},[n("div",{staticClass:"user-info"},[n("span",{staticClass:"logout",on:{click:function(t){e.logout()}}},[e._v("退出")])])])],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("div",{staticClass:"menu-box",class:e.isCollapse?"auto-width":""},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,router:"",collapse:!e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.menu,function(t,a){return t.meta.hidden?e._e():[t.meta.children?e._e():n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[n("i",{class:t.meta.icon}),e._v(" "),n("span",{slot:"title"},[e._v(e._s(t.meta.label))])]),e._v(" "),e._l(t.children,function(a){return a.meta.hidden?e._e():n("el-menu-item",{key:a.path,attrs:{index:t.path+"/"+a.path}},[e._v("\n                            "+e._s(a.meta.label)+"\n                        ")])})],2)]})],2)],1),e._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("strong",{staticClass:"title"},[e._v(e._s(e.$route.meta.label))]),e._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path},[e._v("\n                            "+e._s(t.meta.label)+"\n                        ")])}))],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},468:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nprogress-container"),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},470:function(e,t,n){function a(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./404.vue":[164],"./Home.vue":[57],"./Login.vue":[165],"./finance/PersonDdialog.vue":[480,28],"./finance/RateChange.vue":[488,14],"./finance/ToReview.vue":[489,2],"./global/Cdn.vue":[490,10],"./global/CdnDetail.vue":[481,27],"./global/Domain.vue":[491,5],"./global/DomainDetail.vue":[475,26],"./global/DomainModify.vue":[476,25],"./global/EditCode.vue":[492,24],"./global/EditHistory.vue":[493,23],"./global/EmployList.vue":[494,4],"./global/GlobalDialog.vue":[495,29],"./global/GlobalSetting.vue":[496,3],"./global/InputDomain.vue":[477,22],"./global/Package.vue":[497,9],"./global/PackageAdd.vue":[482,21],"./global/Upload.vue":[498,13],"./global/Version.vue":[499,8],"./global/VersionDetail.vue":[483,20],"./operation/MessageDetail.vue":[484,19],"./operation/PushMessage.vue":[500,7],"./operation/user/Balance.vue":[474,18],"./operation/user/Freeze.vue":[473,12],"./operation/user/Tool.vue":[485,11],"./operation/user/UpdatePwd.vue":[486,17],"./operation/user/User.vue":[501,0],"./operation/user/User1.vue":[502,1],"./operation/user/UserDetail.vue":[478,6],"./operation/user/UserInfo.vue":[479,16],"./operation/user/Water.vue":[503,30],"./operation/user/WxLog.vue":[487,15]};a.keys=function(){return Object.keys(o)},e.exports=a,a.id=470},57:function(e,t,n){n(456);var a=n(53)(n(220),n(467),null,null);e.exports=a.exports},59:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(225),r=a(o),i=n(224),u=a(i);t.default={qutuiba:r.default,perm:u.default}},76:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(162),i=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(){function e(){a(this,e)}return o(e,null,[{key:"getToken",value:function(){return i.default.get("token")}},{key:"setToken",value:function(e){return i.default.set("token",e,{expires:7})}},{key:"delToken",value:function(){i.default.remove("token")}}]),e}();t.default=u},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return n(470)("./"+e+(t?"/index":"")+".vue")}}}},[228]);
//# sourceMappingURL=app.8db68cf8d61397f1d595.js.map