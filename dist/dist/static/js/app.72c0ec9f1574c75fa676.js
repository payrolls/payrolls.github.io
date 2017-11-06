webpackJsonp([19],{113:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(230),a=o(r),i=n(231),l=o(i),u=n(229),s=o(u);!window.history||history.pushState;t.default={mode:"hash",linkActiveClass:"is-active",scrollBehavior:function(){return{y:0}},routes:[{path:"/login",component:n(165),meta:{label:"登录",hidden:!0}},{path:"/",component:n(57),redirect:{name:"GlobalSetting"},meta:{label:"首页",hidden:!0}},{path:"/404",component:n(164),meta:{label:"404",hidden:!0}},a.default,l.default,s.default,{path:"*",redirect:"/404",meta:{hidden:!0}}]}},114:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,o)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(o)},s=n(226),c=o(s),p=n(59),d=o(p),f=n(76),m=(o(f),n(227)),h=(o(m),n(223)),y=o(h),v=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.Apis=d.default,e.apiDomain=new y.default,e}return i(t,e),l(t,[{key:"getUrl",value:function(e){return this.apiDomain.getUrl(e)}},{key:"nativeSend",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object.assign({},n),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"send",this).call(this,{url:e.url,type:e.type,timeout:e.timeout,headers:e.headers},n).then(function(e){var t=e.data;if(t.code){if(0==t.code)return t;throw{message:"请求失败code: "+t.code+", message: "+(t.errmsg||"未知原因"),stack:(new Error).stack,code:t.code}}return e.data},function(e){var t=0;throw e.response?t=e.response.status:e.request&&(t=e.request.status),new Error("网络错误 [ "+t+" ] "+e.message+" ")})}},{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.apiDomain.getUrl(e);return this.nativeSend({url:n,type:e.type,timeout:e.timeout,headers:e.headers,author:e._author||""},t)}},{key:"isProduction",value:function(){return this.apiDomain.isProduct()}},{key:"getProject",value:function(){return this.apiDomain.getProject()}}]),t}(c.default);t.default=v},121:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=function(){function e(t){var n=t.path,r=t.type,a=void 0===r?"get":r,i=t.timeout,l=void 0===i?5e3:i,u=t.headers,s=void 0===u?{}:u,c=t.project,p=void 0===c?"qupost":c,d=t.author,f=void 0===d?"未定义":d;o(this,e),this._path=n,this._type=a,this._author=f,this.timeout=l,this.headers=s,this.project=p}return r(e,[{key:"path",get:function(){return this._path}},{key:"type",get:function(){return this._type}},{key:"author",get:function(){return this._author}}]),e}();t.default=a},164:function(e,t,n){n(453);var o=n(53)(null,n(464),"data-v-40bf464e",null);e.exports=o.exports},165:function(e,t,n){n(454);var o=n(53)(n(221),n(465),"data-v-4467f7ac",null);e.exports=o.exports},166:function(e,t,n){"use strict";e.exports={en:{header:{title:"OperatingPlatform"},sidebar:{GlobalSettingType:"GlobalSetting",GlobalSetting:"GlobalSetting",ContentManage:"ContentManage",NetworkArticleAudit:"NetworkArticleAudit",NetworkArticleAuditDetail:"NetworkArticleAuditDetail",OperationManage:"OperationManage",FinanceManage:"FinanceManage",taskManage:"taskManage"}},zn:{header:{title:"payroll"},sidebar:{GlobalSettingType:"全局配置",GlobalSetting:"全局配置",PayrollTep:"PayrollTep",Package:"包管理",Version:"版本管理",Cdn:"CDN",Domain:"收徒域名管理",Upload:"图片上传",ContentManage:"内容管理",NetworkArticleAudit:"网络图文审核",NetworkArticleAuditDetail:"网络图文详情",NetworkMediaAudit:"网络视频审核",NetworkMediaAuditDetail:"网络视频详情",PushContentManage:"线上内容管理",PushContentEdit:"线上内容编辑",Comment:"评论安全巡查",ArticlePush:"文章推送管理",ArticlePushEdit:"文章推送编辑",OperationManage:"用户管理",User:"用户管理",Tool:"工具",PushMessage:"系统消息",FinanceManage:"财务管理",ToReview:"提现审核",RateChange:"汇率调整",taskManage:"任务管理"}}}},169:function(e,t){},170:function(e,t){},171:function(e,t){},173:function(e,t,n){n(457);var o=n(53)(n(219),n(468),null,null);e.exports=o.exports},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nprogress-container"}},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(463),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"app",components:{NprogressContainer:r.default}}},220:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(114),a=o(r),i=n(76),l=o(i),u=n(113),s=o(u),c=n(222),p=(o(c),new a.default);t.default={data:function(){return{token:l.default.getToken(),isCollapse:!0,info:{},menu:s.default.routes,disabled:!0}},computed:{},methods:{isLogin:function(){this.token||this.$router.push("/login")},getMemberInfo:function(){var e=this;p.send(p.Apis.perm.member.getMember).then(function(t){e.info=t.data.member||{}}).catch(function(t){e.$message.error(""+(t.message||"未知错误"))}).fin(function(){e.loading=!1}).done()},handleOpen:function(){},handleClose:function(){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){p.send(p.Apis.qutuiba.member.logout).then(function(t){0==t.code?e.$router.push("/login"):e.$message.error(""+(t.errmsg||"未知错误"))})})},collapse:function(){this.isCollapse=!this.isCollapse}},mounted:function(){}}},221:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(114),a=o(r),i=n(76),l=(o(i),new a.default);t.default={data:function(){return{logining:!1,ruleForm:{user:"",pwd:""},rule:{user:[{required:!0,message:"Please enter your cell phone number",trigger:"blur"}],pwd:[{required:!0,message:"Please input a pwd",trigger:"blur"}]},checked:!1,disabled:!1}},methods:{submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(t){if(!t)return!1;e.disabled=!0,l.send(l.Apis.qutuiba.member.login,e.ruleForm).then(function(t){e.$message.success("Login successful！"),e.$router.push("/#/global/globalSetting")}).catch(function(t){e.$message.error(t.errmsg)}).fin(function(){e.loading=!1,e.disabled=!1}).done()})}}}},222:function(e,t,n){"use strict";function o(e,t){for(var t=t-(e+"").length,n=0;n<t;n++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var r=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t),o="";return null!=n&&(o=n[2]),t=null,n=null,null==o||""==o||"undefined"==o?"":o},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(r,function(t){switch(t.charAt(0)){case"y":return o(e.getFullYear(),t.length);case"M":return o(e.getMonth()+1,t.length);case"d":return o(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return o(e.getHours(),t.length);case"m":return o(e.getMinutes(),t.length);case"s":return o(e.getSeconds(),t.length)}})},parse:function(e,t){var n=t.match(r),o=e.match(/(\d)+/g);if(n.length==o.length){for(var a=new Date(1970,0,1),i=0;i<n.length;i++){var l=parseInt(o[i]);switch(n[i].charAt(0)){case"y":a.setFullYear(l);break;case"M":a.setMonth(l-1);break;case"d":a.setDate(l);break;case"h":a.setHours(l);break;case"m":a.setMinutes(l);break;case"s":a.setSeconds(l)}}return a}return null}},getUrlSearch:function(){var e=void 0,t=void 0,n=void 0,o=void 0,r=void 0,a={};e=location.search.length>0?location.search.substring(1):null,t=e?e.split("&"):"";for(var i=0,l=t.length;i<l;i++)n=t[i].split("="),o=decodeURIComponent(n[0]),r=(n[1]||"").replace(/(.*)%$/,function(e,t){return t+encodeURIComponent("%")}),r=decodeURIComponent(r||""),o.length>0&&(a[o]=r);return a},getPermUrl:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach(function(t){var o=t.meta,r=void 0===o?{}:o;r.api&&r.api.forEach(function(e){n.push(e.project+"::"+e.path)}),t.children&&e(t.children,n)}),n},savePermApi:function(e){localStorage.setItem("qu_local_perms",JSON.stringify(e))},checkPermApi:function(e){var t=[];try{t=JSON.parse(localStorage.getItem("qu_local_perms"))||[]}catch(e){}return console.log(t,e),e.forEach(function(e){e.children&&e.children.forEach(function(e){for(var n=e.meta.api||[],o=!0,r=0,a=n.length;r<a;r++){var i=n[r],l=i.project,u=i.path,s=l+"::"+u;if(!t[s]||1!==t[s].has){o=!0;break}o=!1,console.log(s,o)}e.meta.hidden=o})}),e}}},223:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(162),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l={qutuiba:{default:"https://13.76.46.204/"},perm:{default:"https://13.76.46.204/"}},u={},s=function(){function e(){o(this,e),this.domains=this.getDomains()}return r(e,[{key:"getDomains",value:function(){var e={};for(var t in l){var n=t+"_branch",o=i.default.get(n)||"default";u[t]=o,e[t]=this.getBranch(t,o)}return e}},{key:"getBranch",value:function(e,t){var n=l[e];if(n){if(n.hasOwnProperty(t))return n[t];console.error("不存在"+e+"对应项目"+t+"分支")}else console.error("不存在"+e+"对应项目")}},{key:"getUrl",value:function(e){var t=this.domains,n=e.project,o=e.path,r="";if(n in t&&(r=t[n]),!r)throw new Error("ApiDomain.getUrl：没有配置该 "+n+" 项目的 domain");return/^\//.test(o)?o=o.substring(1,o.length):console.warn("路径需要以/开头！"),""+r+o}},{key:"getBranchMap",value:function(){return u}},{key:"isProduct",value:function(){return!1}},{key:"getEvn",value:function(){return"development"}},{key:"isDevelopment",value:function(){return!0}},{key:"getProject",value:function(){return"qutuiba"}}],[{key:"setApiBranch",value:function(e){for(var t in l){var n="_"+t;if(e.hasOwnProperty(n)){var o=e[n];l[t].hasOwnProperty(o)&&(u[t]=o,i.default.set(t+"_branch",o))}}}}]),e}();t.default=s},224:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),l=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){function t(e){var n=e.path,a=e.type,i=void 0===a?"get":a,l=e.timeout,u=void 0===l?5e3:l,s=e.headers,c=e.project,p=void 0===c?"perm":c,d=e.author,f=void 0===d?"未定义":d;return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:n,type:i,timeout:u,headers:s,project:p,author:f}))}return a(t,e),t}(l.default);t.default={member:{list:new u({path:"/member/list",type:"get",author:"刘彪"}),getMember:new u({path:"/member/getMember",type:"get",author:"刘彪"}),allowLogin:new u({path:"/member/allowLogin",type:"post",author:"刘彪"}),login:new u({path:"/member/login",type:"get",author:"刘彪"}),loginByPwd:new u({path:"/member/loginByPwd",type:"get",author:"刘彪"}),checkPerm:new u({path:"/member/checkPerm",type:"post",author:"刘彪"})},perm:{list:new u({path:"/perm/getPermGroupList",type:"post",author:"刘彪"})}}},225:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),l=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){function t(e){var n=e.path,a=e.type,i=void 0===a?"get":a,l=e.timeout,u=void 0===l?5e3:l,s=e.headers,c=e.project,p=void 0===c?"qutuiba":c,d=e.author,f=void 0===d?"未定义":d;return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:n,type:i,timeout:u,headers:s,project:p,author:f}))}return a(t,e),t}(l.default);t.default={version:{getList:new u({path:"/p/select?c=payrolltrans.empcode,employee.fullchinesename,payrolltrans.payrollstatus,employee.companycode,payrolltrans.periodcode&g=payrolltrans.payrollstatus,payrolltrans.empcode,employee.fullchinesename,employee.companycode,payrolltrans.periodcode",type:"post",author:" "}),calctrans:new u({path:"/p/calctrans",type:"post",author:" "}),getPkgList:new u({path:"/p/preview",type:"get",author:" "}),commit:new u({path:"/p/commit",type:"post",author:" "}),add:new u({path:"/admin/appversion/add",type:"post",author:" "}),getAnother:new u({path:"/p/select?c= employee.empcode,employee.fullchinesename",type:"post",author:" "})},domain:{getList:new u({path:"/p/select?c=Company.CompanyCode,Company.CompanyName,Company.Address,Company.Phone,Company.Fax,Company.PostalAddress,Company.EmprTaxFileNum,Company.CurrencyCode,Company.PayDay,Company.PeriodType,Company.IsActive,Company.CreateDate",type:"get",author:" "})},upload:{uploadFile:new u({path:"/admin/upload/uploadFile",type:"post",author:" "})},member:{logout:new u({path:"/u/logout",type:"post",author:" "}),employList:new u({path:"/p/select?c=Employee.CompanyCode,Employee.EmpCode,Employee.IsPartime,Employee.EmploymentStartDate,Employee.EmploymentEndDate,Employee.EmploymentType,Employee.SurName,Employee.OtherName,Employee.FullChineseName,Employee.Gender,Employee.MobilePhone,Employee.HomePhone,Employee.BirthDate,Employee.Email,Employee.ICN,Employee.Passport,Employee.Country,Employee.MaritalStatus,Employee.SpouseName,Employee.SpouseICN,Employee.SpousePassport,Employee.SpouseCountry,Employee.ResidentialAddress,Employee.PostalAddress,Employee.BankAccount,Employee.Title,Employee.PaySlipDeliveryDay,Employee.IsActive,Employee.CreateDate,Employee.UpdateDate",type:"get",author:" "}),update:new u({path:"/p/update",type:"post",author:" "}),login:new u({path:"/u/login",type:"post",author:" "})},cdn:{getCdnList:new u({path:"/p/select?c=period.*,payrolltrans.transuid",type:"post",author:" "}),getCdn:new u({path:"/p/select?c=top 15,payrolltrans.PeriodCode,period.PeriodType,period.CompanyCode,period.StartDate,period.EndDate,$count(1) as Transactions&o=_period.StartDate&g=payrolltrans.periodcode,period.periodtype,period.companycode,period.startdate,period.enddate",type:"post",author:" "})}}},226:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(199),u=o(l),s=n(177),c=o(s),p=function(){function e(){r(this,e)}return i(e,[{key:"formatData",value:function(e){if(e&&"object"===(void 0===e?"undefined":a(e))){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}return e}},{key:"send",value:function(e){var t=e.url,n=e.type,o=void 0===n?"get":n,r=(e.timeout,e.headers),a=void 0===r?{}:r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l={url:t,method:o.toLocaleLowerCase(),timeout:1e4,headers:a};if("post"===l.method){var s=[];for(var p in i)s.push(p+"="+encodeURIComponent(i[p]));l.data=this.formatData(i)}else"get"===l.method?l.params=i:l.data=i;return c.default.resolve((0,u.default)(l))}}]),e}();t.default=p},227:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(){o(this,e)}return a(e,null,[{key:"send",value:function(e){var t=e.cmd,n=void 0===t?9010:t,o=e.item,a=void 0===o?"":o,i=e.action,l=void 0===i?"":i,u=e.page_id,s=void 0===u?"":u,c=e.pos,p=void 0===c?"":c,d=e.uid,f=void 0===d?"":d,m=[],h=arguments[0]||{},y=r({cmd:n,item:a,action:l,page_id:s,pos:p,uid:f},h);for(var v in y)m.push(v+"="+y[v])}}]),e}();t.default=i},228:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(167);o(r);n(171);var a=n(18),i=o(a),l=n(174),u=o(l),s=n(175),c=o(s),p=n(172),d=o(p),f=n(173),m=o(f),h=n(168),y=o(h);n(169);var v=n(176),g=o(v),b=n(113),_=o(b),w=n(166),P=o(w);n(170),i.default.use(y.default),i.default.use(c.default),i.default.use(g.default),i.default.use(d.default),i.default.use(u.default);var C=new u.default({parent:".nprogress-container"}),k=new d.default({locale:"zn",messages:P.default}),E=new c.default(_.default);i.default.mixin({created:function(){this.filter&&(this.filter=this.$queryFilter(),this.$updateRouter(this.filter))},methods:{$queryFilter:function(){var e=this.filter||{};if(this.$route){var t=this.$route.query;for(var n in e)void 0!==t[n]&&("number"==typeof e[n]?e[n]=parseInt(t[n]):e[n]=t[n])}return e},$updateRouter:function(e){e||(e=this.$queryFilter()),this.$router.replace({query:Object.assign({},e)})},$blockRequest:function(e){var t=e.$elem,n=e.req,o=e.pendingText,r=void 0===o?"操作中":o;if(t||(t=document.createElement("button")),t&&!t._req_block){var a="button"===t.nodeName.toLowerCase(),i=t.innerText;return a&&t.setAttribute("disabled",!0),t.innerText=r,t._req_block=!0,n.fin(function(){a&&t.removeAttribute("disabled"),t._req_block=!1,t.innerText=i})}}}}),new i.default({router:E,i18n:k,nprogress:C,render:function(e){return e(m.default)}}).$mount("#app")},229:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(79),a=o(r),i=n(59);o(i);t.default={path:"/finance",meta:{icon:"el-icon-document",label:"Advanced",hidden:!1},component:n(57),children:[{name:"ToReview",path:"to-review",component:(0,a.default)("finance/ToReview"),meta:{label:"Import / Export",hidden:!1,api:[]}}]}},230:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(79),a=o(r),i=n(59),l=o(i);t.default={path:"/global",meta:{icon:"el-icon-setting",label:"Company",hidden:!1},component:n(57),children:[{name:"GlobalSetting",path:"global-setting",component:(0,a.default)("global/GlobalSetting"),meta:{label:"Basic Info",hidden:!1,api:[]}},{name:"PayrollTep",path:"payroll-tep",component:(0,a.default)("global/PayrollTep"),meta:{label:"Payroll Template",hidden:!1,api:[]}},{name:"PayStep2",path:"payStep2",component:(0,a.default)("global/PayStep2"),meta:{label:"payrolls",hidden:!0,api:[l.default.qutuiba.version.getList]}},{name:"PayStep1",path:"PayStep1",component:(0,a.default)("global/PayStep1"),meta:{label:"payrolls",hidden:!0,api:[]}},{name:"Package",path:"package",component:(0,a.default)("global/Package"),meta:{label:"payrolls",hidden:!0,api:[]}},{name:"Report",path:"report",component:(0,a.default)("global/Report"),meta:{label:"Report",hidden:!0,api:[]}},{name:"ReportDetail",path:"reportDetail",component:(0,a.default)("global/ReportDetail"),meta:{label:"ReportDetail",hidden:!0,api:[]}},{name:"CompanyInfo",path:"companyInfo",component:(0,a.default)("global/CompanyInfo"),meta:{label:"CompanyInfo",hidden:!0,api:[]}}]}},231:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(79),a=o(r),i=n(59);o(i);t.default={path:"/operation",meta:{icon:"fa fa-user-o",label:"Employee",hidden:!1},component:n(57),children:[{name:"User",path:"user",component:(0,a.default)("operation/user/User"),meta:{label:"Basic Info",hidden:!1,api:[]}},{name:"UserPackage",path:"userPackage",component:(0,a.default)("operation/user/UserPackage"),meta:{label:"UserPackage",hidden:!1,api:[]}},{name:"PayItem",path:"pay-item",component:(0,a.default)("operation/PayItem"),meta:{label:"Pay item",hidden:!1,api:[]}}]}},453:function(e,t){},454:function(e,t){},455:function(e,t){},456:function(e,t){},457:function(e,t){},463:function(e,t,n){n(455);var o=n(53)(n(218),n(466),null,null);e.exports=o.exports},464:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("404 page not found")])},staticRenderFns:[]}},465:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rule,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("System Login")]),e._v(" "),n("el-form-item",{attrs:{prop:" user"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:" user"},model:{value:e.ruleForm.user,callback:function(t){e.ruleForm.user=t},expression:"ruleForm. user"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"pwd"}},[n("el-input",{attrs:{type:"pwd","auto-complete":"off",placeholder:"pwd"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}},model:{value:e.ruleForm.pwd,callback:function(t){e.ruleForm.pwd=t},expression:"ruleForm.pwd"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",disabled:e.disabled,loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.submitForm(t)},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}}},[e._v("Login\n        ")])],1)],1)},staticRenderFns:[]}},466:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"nprogress-container"})},staticRenderFns:[]}},467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.isCollapse?"logo-width":"logo-collapse-width",attrs:{span:10}},[e._v("\n            "+e._s(e.$t("header.title"))+"\n        ")]),e._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:10}},[n("div",{staticClass:"user-info"},[n("span",{staticClass:"logout",on:{click:function(t){e.logout()}}},[e._v("退出")])])])],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("div",{staticClass:"menu-box",class:e.isCollapse?"auto-width":""},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,mode:"vertical",router:"",collapse:!e.isCollapse,"default-openeds":["/global","/global/global-setting","/global/payroll-tep","/finance","/finance/to-review","/operation","/operation/operation/user","/operation/operation/balance","/operation/operation/user-info"]},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.menu,function(t,o){return t.meta.hidden?e._e():[t.meta.children?e._e():n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[n("i",{class:t.meta.icon}),e._v(" "),n("span",{slot:"title"},[e._v(e._s(t.meta.label))])]),e._v(" "),e._l(t.children,function(o){return o.meta.hidden?e._e():n("el-menu-item",{key:o.path,attrs:{index:t.path+"/"+o.path}},[e._v("\n                            "+e._s(o.meta.label)+"\n                        ")])})],2)]})],2)],1),e._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("strong",{staticClass:"title"},[e._v(e._s(e.$route.meta.label))]),e._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path},[e._v("\n                            "+e._s(t.meta.label)+"\n                        ")])}))],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},468:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nprogress-container"),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},470:function(e,t,n){function o(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./404.vue":[164],"./Home.vue":[57],"./Login.vue":[165],"./finance/RateChange.vue":[477,14],"./finance/ToReview.vue":[478,13],"./global/CompanyInfo.vue":[474,17],"./global/EmployList.vue":[479,9],"./global/GlobalSetting.vue":[480,2],"./global/Package.vue":[481,8],"./global/PayStep1.vue":[482,1],"./global/PayStep2.vue":[483,7],"./global/PayrollTep.vue":[484,6],"./global/Period.vue":[475,15],"./global/Report.vue":[485,5],"./global/ReportDetail.vue":[486,4],"./global/Upload.vue":[487,12],"./operation/PayItem.vue":[488,11],"./operation/user/User.vue":[489,0],"./operation/user/UserInfo.vue":[473,16],"./operation/user/UserPackage.vue":[490,3],"./operation/user/Workload.vue":[476,10]};o.keys=function(){return Object.keys(r)},e.exports=o,o.id=470},57:function(e,t,n){n(456);var o=n(53)(n(220),n(467),null,null);e.exports=o.exports},59:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(225),a=o(r),i=n(224),l=o(i);t.default={qutuiba:a.default,perm:l.default}},76:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(162),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=function(){function e(){o(this,e)}return r(e,null,[{key:"getToken",value:function(){return i.default.get("token")}},{key:"setToken",value:function(e){return i.default.set("token",e,{expires:7})}},{key:"delToken",value:function(){i.default.remove("token")}}]),e}();t.default=l},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return n(470)("./"+e+(t?"/index":"")+".vue")}}}},[228]);
//# sourceMappingURL=app.72c0ec9f1574c75fa676.js.map