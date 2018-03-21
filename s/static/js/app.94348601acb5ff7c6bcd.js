webpackJsonp([26],{113:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(231),r=o(n),l=a(232),i=o(l),u=a(230),p=o(u);!window.history||history.pushState;t.default={mode:"hash",linkActiveClass:"is-active",scrollBehavior:function(){return{y:0}},routes:[{path:"/login",component:a(165),meta:{label:"登录",hidden:!0}},{path:"/",component:a(57),redirect:{name:"GlobalSetting"},meta:{label:"首页",hidden:!0}},{path:"/404",component:a(164),meta:{label:"404",hidden:!0}},r.default,i.default,p.default,{path:"*",redirect:"/404",meta:{hidden:!0}}]}},114:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),u=function e(t,a,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,a);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,a,o)}if("value"in n)return n.value;var l=n.get;if(void 0!==l)return l.call(o)},p=a(227),s=o(p),c=a(59),d=o(c),m=a(76),f=(o(m),a(228)),y=(o(f),a(224)),h=o(y),g=function(e){function t(){n(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.Apis=d.default,e.apiDomain=new h.default,e}return l(t,e),i(t,[{key:"getUrl",value:function(e){return this.apiDomain.getUrl(e)}},{key:"nativeSend",value:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a=Object.assign({},a),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"send",this).call(this,{url:e.url,type:e.type,timeout:e.timeout,headers:e.headers},a).then(function(e){var t=e.data;if(t.code){if(0==t.code)return t;throw{message:" "+t.code+", message: "+(t.errmsg||"未知原因"),stack:(new Error).stack,code:t.code}}return e.data},function(e){var t=0;throw e.response?t=e.response.status:e.request&&(t=e.request.status),new Error("网络错误 [ "+t+" ] "+e.message+" ")})}},{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.apiDomain.getUrl(e);return this.nativeSend({url:a,type:e.type,timeout:e.timeout,headers:e.headers,author:e._author||""},t)}},{key:"isProduction",value:function(){return this.apiDomain.isProduct()}},{key:"getProject",value:function(){return this.apiDomain.getProject()}}]),t}(s.default);t.default=g},121:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=function(){function e(t){var a=t.path,n=t.type,r=void 0===n?"get":n,l=t.timeout,i=void 0===l?5e3:l,u=t.headers,p=void 0===u?{}:u,s=t.project,c=void 0===s?"qupost":s,d=t.author,m=void 0===d?"未定义":d;o(this,e),this._path=a,this._type=r,this._author=m,this.timeout=i,this.headers=p,this.project=c}return n(e,[{key:"path",get:function(){return this._path}},{key:"type",get:function(){return this._type}},{key:"author",get:function(){return this._author}}]),e}();t.default=r},164:function(e,t,a){a(454);var o=a(53)(null,a(465),"data-v-40bf464e",null);e.exports=o.exports},165:function(e,t,a){a(455);var o=a(53)(a(222),a(466),"data-v-4467f7ac",null);e.exports=o.exports},166:function(e,t,a){"use strict";e.exports={en:{header:{title:"OperatingPlatform"},sidebar:{GlobalSettingType:"GlobalSetting",GlobalSetting:"GlobalSetting",ContentManage:"ContentManage",NetworkArticleAudit:"NetworkArticleAudit",NetworkArticleAuditDetail:"NetworkArticleAuditDetail",OperationManage:"OperationManage",FinanceManage:"FinanceManage",taskManage:"taskManage"}},zn:{header:{title:"payroll"},sidebar:{GlobalSettingType:"全局配置",GlobalSetting:"全局配置",PayrollTep:"PayrollTep",Package:"包管理",Version:"版本管理",Cdn:"CDN",Domain:"收徒域名管理",Upload:"图片上传",ContentManage:"内容管理",NetworkArticleAudit:"网络图文审核",NetworkArticleAuditDetail:"网络图文详情",NetworkMediaAudit:"网络视频审核",NetworkMediaAuditDetail:"网络视频详情",PushContentManage:"线上内容管理",PushContentEdit:"线上内容编辑",Comment:"评论安全巡查",ArticlePush:"文章推送管理",ArticlePushEdit:"文章推送编辑",OperationManage:"用户管理",User:"用户管理",Tool:"工具",PushMessage:"系统消息",FinanceManage:"财务管理",ToReview:"提现审核",RateChange:"汇率调整",taskManage:"任务管理"}}}},170:function(e,t){},171:function(e,t){},172:function(e,t){},174:function(e,t,a){a(458);var o=a(53)(a(220),a(469),null,null);e.exports=o.exports},219:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nprogress-container"}},220:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(464),n=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={name:"app",components:{NprogressContainer:n.default}}},221:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(114),r=o(n),l=a(76),i=o(l),u=a(113),p=o(u),s=a(223),c=(o(s),new r.default);t.default={data:function(){return{token:i.default.getToken(),isCollapse:!0,info:{},menu:p.default.routes,disabled:!0}},computed:{},methods:{isLogin:function(){this.token||this.$router.push("/login")},getMemberInfo:function(){var e=this;c.send(c.Apis.perm.member.getMember).then(function(t){e.info=t.data.member||{}}).catch(function(t){e.$message.error(""+(t.message||"Unknown error"))}).fin(function(){e.loading=!1}).done()},handleOpen:function(){},handleClose:function(){},logout:function(){var e=this;this.$confirm("confirm exit?","tips",{confirmButtonText:"Ok",cancelButtonText:"Cancel"}).then(function(){c.send(c.Apis.qutuiba.member.logout).then(function(t){0==t.code?e.$router.push("/login"):e.$message.error(""+(t.errmsg||"Unknown error"))})})},collapse:function(){this.isCollapse=!this.isCollapse}},mounted:function(){}}},222:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(114),r=o(n),l=a(76),i=(o(l),new r.default);t.default={data:function(){return{logining:!1,ruleForm:{user:"",pwd:""},rule:{user:[{required:!0,message:"Please enter your cell phone number",trigger:"blur"}],pwd:[{required:!0,message:"Please input a pwd",trigger:"blur"}]},checked:!1,disabled:!1}},methods:{submitForm:function(){var e=this;i.send(i.Apis.qutuiba.member.login,this.ruleForm).then(function(t){e.$message.success("Login successful！"),e.$router.push({name:"GlobalSetting"})}).catch(function(t){e.$message.error(""+(t.errmsg||"This combination of Company Id ,User Id and Password is invalid"))}).fin(function(){e.loading=!1}).done()}}}},223:function(e,t,a){"use strict";function o(e,t){for(var t=t-(e+"").length,a=0;a<t;a++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var n=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t),o="";return null!=a&&(o=a[2]),t=null,a=null,null==o||""==o||"undefined"==o?"":o},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(n,function(t){switch(t.charAt(0)){case"y":return o(e.getFullYear(),t.length);case"M":return o(e.getMonth()+1,t.length);case"d":return o(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return o(e.getHours(),t.length);case"m":return o(e.getMinutes(),t.length);case"s":return o(e.getSeconds(),t.length)}})},parse:function(e,t){var a=t.match(n),o=e.match(/(\d)+/g);if(a.length==o.length){for(var r=new Date(1970,0,1),l=0;l<a.length;l++){var i=parseInt(o[l]);switch(a[l].charAt(0)){case"y":r.setFullYear(i);break;case"M":r.setMonth(i-1);break;case"d":r.setDate(i);break;case"h":r.setHours(i);break;case"m":r.setMinutes(i);break;case"s":r.setSeconds(i)}}return r}return null}},getUrlSearch:function(){var e=void 0,t=void 0,a=void 0,o=void 0,n=void 0,r={};e=location.search.length>0?location.search.substring(1):null,t=e?e.split("&"):"";for(var l=0,i=t.length;l<i;l++)a=t[l].split("="),o=decodeURIComponent(a[0]),n=(a[1]||"").replace(/(.*)%$/,function(e,t){return t+encodeURIComponent("%")}),n=decodeURIComponent(n||""),o.length>0&&(r[o]=n);return r},getPermUrl:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach(function(t){var o=t.meta,n=void 0===o?{}:o;n.api&&n.api.forEach(function(e){a.push(e.project+"::"+e.path)}),t.children&&e(t.children,a)}),a},savePermApi:function(e){localStorage.setItem("qu_local_perms",JSON.stringify(e))},checkPermApi:function(e){var t=[];try{t=JSON.parse(localStorage.getItem("qu_local_perms"))||[]}catch(e){}return console.log(t,e),e.forEach(function(e){e.children&&e.children.forEach(function(e){for(var a=e.meta.api||[],o=!0,n=0,r=a.length;n<r;n++){var l=a[n],i=l.project,u=l.path,p=i+"::"+u;if(!t[p]||1!==t[p].has){o=!0;break}o=!1,console.log(p,o)}e.meta.hidden=o})}),e}}},224:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(162),l=function(e){return e&&e.__esModule?e:{default:e}}(r),i={qutuiba:{default:"https://localhost/"},perm:{default:"https://localhost/"}},u={},p=function(){function e(){o(this,e),this.domains=this.getDomains()}return n(e,[{key:"getDomains",value:function(){var e={};for(var t in i){var a=t+"_branch",o=l.default.get(a)||"default";u[t]=o,e[t]=this.getBranch(t,o)}return e}},{key:"getBranch",value:function(e,t){var a=i[e];if(a){if(a.hasOwnProperty(t))return a[t];console.error("不存在"+e+"对应项目"+t+"分支")}else console.error("不存在"+e+"对应项目")}},{key:"getUrl",value:function(e){var t=this.domains,a=e.project,o=e.path,n="";if(a in t&&(n=t[a]),!n)throw new Error("ApiDomain.getUrl：没有配置该 "+a+" 项目的 domain");return/^\//.test(o)?o=o.substring(1,o.length):console.warn("路径需要以/开头！"),""+n+o}},{key:"getBranchMap",value:function(){return u}},{key:"isProduct",value:function(){return!1}},{key:"getEvn",value:function(){return"development"}},{key:"isDevelopment",value:function(){return!0}},{key:"getProject",value:function(){return"qutuiba"}}],[{key:"setApiBranch",value:function(e){for(var t in i){var a="_"+t;if(e.hasOwnProperty(a)){var o=e[a];i[t].hasOwnProperty(o)&&(u[t]=o,l.default.set(t+"_branch",o))}}}}]),e}();t.default=p},225:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(121),i=function(e){return e&&e.__esModule?e:{default:e}}(l),u=function(e){function t(e){var a=e.path,r=e.type,l=void 0===r?"get":r,i=e.timeout,u=void 0===i?5e3:i,p=e.headers,s=e.project,c=void 0===s?"perm":s,d=e.author,m=void 0===d?"未定义":d;return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:a,type:l,timeout:u,headers:p,project:c,author:m}))}return r(t,e),t}(i.default);t.default={member:{list:new u({path:"/member/list",type:"get",author:"刘彪"}),getMember:new u({path:"/member/getMember",type:"get",author:"刘彪"}),allowLogin:new u({path:"/member/allowLogin",type:"post",author:"刘彪"}),login:new u({path:"/member/login",type:"get",author:"刘彪"}),loginByPwd:new u({path:"/member/loginByPwd",type:"get",author:"刘彪"}),checkPerm:new u({path:"/member/checkPerm",type:"post",author:"刘彪"})},perm:{list:new u({path:"/perm/getPermGroupList",type:"post",author:"刘彪"})}}},226:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(121),i=function(e){return e&&e.__esModule?e:{default:e}}(l),u=function(e){function t(e){var a=e.path,r=e.type,l=void 0===r?"get":r,i=e.timeout,u=void 0===i?5e3:i,p=e.headers,s=e.project,c=void 0===s?"qutuiba":s,d=e.author,m=void 0===d?"未定义":d;return o(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:a,type:l,timeout:u,headers:p,project:c,author:m}))}return r(t,e),t}(i.default);t.default={version:{getList:new u({path:"/p/select?c=payrolltrans.empcode,employee.fullchinesename,payrolltrans.payrollstatus,employee.companycode,payrolltrans.periodcode&g=payrolltrans.payrollstatus,payrolltrans.empcode,employee.fullchinesename,employee.companycode,payrolltrans.periodcode",type:"post",author:" "}),calctrans:new u({path:"/p/calctrans",type:"post",author:" "}),getPkgList:new u({path:"/p/preview",type:"get",author:" "}),commit:new u({path:"/p/commit",type:"post",author:" "}),add:new u({path:"/admin/appversion/add",type:"post",author:" "}),getAnother:new u({path:"/p/select?c= employee.empcode,employee.fullchinesename",type:"post",author:" "}),report:new u({path:"/p/report",type:"get",author:" "}),email:new u({path:"/p/email",type:"get",author:" "}),preview:new u({path:"/p/preview",type:"get",author:" "}),trans:new u({path:"/p/trans",type:"get",author:" "})},domain:{getList:new u({path:"/p/select?c=Company.CompanyCode,Company.CompanyName,Company.Address,Company.Phone,Company.Fax,Company.PostalAddress,Company.EmprTaxFileNum,Company.CurrencyCode,Company.PayDay,Company.PeriodType,Company.IsActive,Company.CreateDate",type:"post",author:" "}),getCompanyCode:new u({path:"/p/select?c=Company.CompanyCode",type:"post",author:" "}),getEmpCode:new u({path:"/p/select?c=Employee.EmpCode",type:"post",author:" "})},upload:{uploadFile:new u({path:"/import/csv",type:"post",author:" "})},member:{logout:new u({path:"/u/logout",type:"post",author:" "}),employList:new u({path:"/p/select?c=Employee.CompanyCode,Employee.EmpCode,Employee.IsPartime,Employee.EmploymentStartDate,Employee.EmploymentEndDate,Employee.EmploymentType,Employee.SurName,Employee.OtherName,Employee.FullChineseName,Employee.Gender,Employee.MobilePhone,Employee.HomePhone,Employee.BirthDate,Employee.Email,Employee.ICN,Employee.Passport,Employee.Country,Employee.MaritalStatus,Employee.SpouseName,Employee.SpouseICN,Employee.SpousePassport,Employee.SpouseCountry,Employee.ResidentialAddress,Employee.PostalAddress,Employee.BankAccount,Employee.Title,Employee.PaySlipDeliveryDay,Employee.IsActive,Employee.CreateDate,Employee.UpdateDate",type:"post",author:" "}),getEmpCode:new u({path:"/p/select?c=Employee.CompanyCode,Employee.EmpCode,Employee.IsPartime,Employee.EmploymentStartDate,Employee.EmploymentEndDate,Employee.EmploymentType,Employee.SurName,Employee.OtherName,Employee.FullChineseName,Employee.Gender,Employee.MobilePhone,Employee.HomePhone,Employee.BirthDate,Employee.Email,Employee.ICN,Employee.Passport,Employee.Country,Employee.MaritalStatus,Employee.SpouseName,Employee.SpouseICN,Employee.SpousePassport,Employee.SpouseCountry,Employee.ResidentialAddress,Employee.PostalAddress,Employee.BankAccount,Employee.Title,Employee.PaySlipDeliveryDay,Employee.IsActive,Employee.CreateDate,Employee.UpdateDate",type:"post",author:" "}),update:new u({path:"/p/update",type:"post",author:" "}),uid:new u({path:"/p/uid",type:"get",author:" "}),login:new u({path:"/u/login",type:"post",author:" "}),pay:new u({path:"/p/select?c=PayItemTemplate.TemplateCode,PayItemTemplate.FunctionName,PayItemTemplate.DisplayName,PayItemTemplate.Description,PayItemTemplate.CompanyCode,PayItemTemplate.PayType,PayItemTemplate.Amount,PayItemTemplate.Function,PayItemTemplate.IsActive,PayItemTemplate.Amount,PayItemTemplate.CreateDate,PayItemTemplate.UpdateDate",type:"post",author:" "}),payItem:new u({path:"/p/select?c=PayItem.PayItemUid,PayItem.TemplateCode,PayItem.Amount,PayItem.Function,PayItem.EmpCode,PayItem.CompanyCode,PayItem.EffectiveDate,PayItem.EndDate,PayItem.StartDate",type:"post",author:" "}),TemplateCode:new u({path:"/p/select?c=PayItemTemplate.TemplateCode",type:"post",author:" "}),package:new u({path:"/p/select?c=PackageItem.PackageItemUid,Employee.EmpCode,Employee.FullChineseName,PackageItem.Templatecode,PackageItem.CompanyCode,PackageItem.Amount,PackageItem.Function,PackageItem.EffectiveDate,PackageItem.PackageUid&o=Employee.EmpCode,PackageItem.PackageUid",type:"post",author:" "}),employeePackage:new u({path:"/p/select?c=EmployeePackage.PackageUid,EmployeePackage.EmpCode,EmployeePackage.PackageName,EmployeePackage.CompanyCode,EmployeePackage.StartDate,EmployeePackage.EndDate",type:"post",author:" "}),packageItem:new u({path:"/p/select?c=PackageItem.PackageItemUid,Employee.EmpCode,Employee.FullChineseName,PackageItem.Templatecode,PackageItem.CompanyCode,PackageItem.Amount,PackageItem.Function,PackageItem.EffectiveDate,PackageItem.PackageUid&o=Employee.EmpCode,PackageItem.PackageUid",type:"post",author:" "}),fullChinese:new u({path:"/p/select?c=Employee.FullChineseName,PackageItem.CompanyCode",type:"post",author:" "})},cdn:{getCdnList:new u({path:"/p/select?c=period.*,payrolltrans.transuid&w=payrolltrans.transuid%20IS%20null",type:"post",author:" "}),newperiod:new u({path:"/p/newperiod",type:"post",author:" "}),undo:new u({path:"/p/undo",type:"post",author:" "}),getCdn:new u({path:"/p/select?c=top 15,payrolltrans.PeriodCode,period.PeriodType,period.CompanyCode,period.StartDate,period.EndDate,$count(1)%20as%20Transactions&o=_period.StartDate&g=payrolltrans.periodcode,period.periodtype,period.companycode,period.startdate,period.enddate",type:"post",author:" "})},template:{tep:new u({path:"/p/select?c=payitemtemplate.TemplateCode,payitemtemplate.FunctionName,payitemtemplate.DisplayName,payitemtemplate.Description,payitemtemplate.CompanyCode,payitemtemplate.PayType,payitemtemplate.Amount,payitemtemplate.Function&o=PayItemTemplate.CompanyCode,PayItemTemplate.FunctionName",type:"post",author:" "})}}},227:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),i=a(200),u=o(i),p=a(178),s=o(p),c=function(){function e(){n(this,e)}return l(e,[{key:"formatData",value:function(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t=[];for(var a in e)t.push(a+"="+encodeURIComponent(e[a]));return t.join("&")}return e}},{key:"send",value:function(e){var t=e.url,a=e.type,o=void 0===a?"get":a,n=(e.timeout,e.headers),r=void 0===n?{}:n,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={url:t,method:o.toLocaleLowerCase(),timeout:1e4,headers:r};if("post"===i.method){var p=[];for(var c in l)p.push(c+"="+encodeURIComponent(l[c]));i.data=this.formatData(l)}else"get"===i.method?i.params=l:i.data=l;return s.default.resolve((0,u.default)(i))}}]),e}();t.default=c},228:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),l=function(){function e(){o(this,e)}return r(e,null,[{key:"send",value:function(e){var t=e.cmd,a=void 0===t?9010:t,o=e.item,r=void 0===o?"":o,l=e.action,i=void 0===l?"":l,u=e.page_id,p=void 0===u?"":u,s=e.pos,c=void 0===s?"":s,d=e.uid,m=void 0===d?"":d,f=[],y=arguments[0]||{},h=n({cmd:a,item:r,action:i,page_id:p,pos:c,uid:m},y);for(var g in h)f.push(g+"="+h[g])}}]),e}();t.default=l},229:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=a(167);o(n);a(172);var r=a(18),l=o(r),i=a(175),u=o(i),p=a(176),s=o(p),c=a(173),d=o(c),m=a(174),f=o(m),y=a(168),h=o(y);a(170);var g=a(177),v=o(g),b=a(113),P=o(b),_=a(166),w=o(_),C=a(169),k=o(C);a(171),l.default.use(h.default,{locale:k.default}),l.default.use(s.default),l.default.use(v.default),l.default.use(d.default),l.default.use(u.default);var E=new u.default({parent:".nprogress-container"}),I=new d.default({locale:"zn",messages:w.default}),O=new s.default(P.default);l.default.mixin({created:function(){this.filter&&(this.filter=this.$queryFilter(),this.$updateRouter(this.filter))},methods:{$queryFilter:function(){var e=this.filter||{};if(this.$route){var t=this.$route.query;for(var a in e)void 0!==t[a]&&("number"==typeof e[a]?e[a]=parseInt(t[a]):e[a]=t[a])}return e},$updateRouter:function(e){e||(e=this.$queryFilter()),this.$router.replace({query:Object.assign({},e)})},$blockRequest:function(e){var t=e.$elem,a=e.req,o=e.pendingText,n=void 0===o?"操作中":o;if(t||(t=document.createElement("button")),t&&!t._req_block){var r="button"===t.nodeName.toLowerCase(),l=t.innerText;return r&&t.setAttribute("disabled",!0),t.innerText=n,t._req_block=!0,a.fin(function(){r&&t.removeAttribute("disabled"),t._req_block=!1,t.innerText=l})}}}}),new l.default({router:O,i18n:I,nprogress:E,render:function(e){return e(f.default)}}).$mount("#app")},230:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(79),r=o(n),l=a(59);o(l);t.default={path:"/finance",meta:{icon:"el-icon-document",label:"Advanced",hidden:!1},component:a(57),children:[{name:"ToReview",path:"to-review",component:(0,r.default)("finance/ToReview"),meta:{label:"Import",hidden:!1,api:[]}}]}},231:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(79),r=o(n),l=a(59),i=o(l);t.default={path:"/global",meta:{icon:"el-icon-setting",label:"Company",hidden:!1},component:a(57),children:[{name:"GlobalSetting",path:"global-setting",component:(0,r.default)("global/GlobalSetting"),meta:{label:"Basic Info",hidden:!1,api:[]}},{name:"PayrollTep",path:"payroll-tep",component:(0,r.default)("global/PayrollTep"),meta:{label:"Payroll Template",hidden:!1,api:[]}},{name:"PayrollTepAdd",path:"payroll-tep-add",component:(0,r.default)("global/PayrollTepAdd"),meta:{label:"",hidden:!0,api:[]}},{name:"PayStep2",path:"payStep2",component:(0,r.default)("global/PayStep2"),meta:{label:"payrolls",hidden:!0,api:[i.default.qutuiba.version.getList]}},{name:"PayStep1",path:"PayStep1",component:(0,r.default)("global/PayStep1"),meta:{label:"payrolls",hidden:!1,api:[]}},{name:"Package",path:"package",component:(0,r.default)("global/Package"),meta:{label:"payrolls",hidden:!0,api:[]}},{name:"Report",path:"report",component:(0,r.default)("global/Report"),meta:{label:"Report",hidden:!0,api:[]}},{name:"ReportDetail",path:"reportDetail",component:(0,r.default)("global/ReportDetail"),meta:{label:"ReportDetail",hidden:!0,api:[]}},{name:"PayslipDetail",path:"payslipDetail",component:(0,r.default)("global/PayslipDetail"),meta:{label:"PayslipDetail",hidden:!0,api:[]}},{name:"CompanyInfo",path:"companyInfo",component:(0,r.default)("global/CompanyInfo"),meta:{label:"CompanyInfo",hidden:!0,api:[]}},{name:"Preview",path:"preview",component:(0,r.default)("global/Preview"),meta:{label:"Preview",hidden:!0,api:[]}}]}},232:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(79),r=o(n),l=a(59);o(l);t.default={path:"/operation",meta:{icon:"fa fa-user-o",label:"Employee",hidden:!1},component:a(57),children:[{name:"User",path:"user",component:(0,r.default)("operation/user/User"),meta:{label:"Basic Info",hidden:!1,api:[]}},{name:"UserPackage",path:"userPackage",component:(0,r.default)("operation/user/UserPackage"),meta:{label:"UserPackage",hidden:!0,api:[]}},{name:"PayItem",path:"pay-item",component:(0,r.default)("operation/user/PayItem"),meta:{label:"Pay item",hidden:!0,api:[]}},{name:"PackageItem",path:"package-item",component:(0,r.default)("operation/user/PackageItem"),meta:{label:"package item",hidden:!0,api:[]}},{name:"PackageItemAdd",path:"package-item-add",component:(0,r.default)("operation/user/PackageItemAdd"),meta:{label:"PackageItemAdd",hidden:!0,api:[]}}]}},454:function(e,t){},455:function(e,t){},456:function(e,t){},457:function(e,t){},458:function(e,t){},464:function(e,t,a){a(456);var o=a(53)(a(219),a(467),null,null);e.exports=o.exports},465:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("404 page not found")])},staticRenderFns:[]}},466:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rule,"label-position":"left","label-width":"0px"}},[a("h3",{staticClass:"title"},[e._v("Payroll Login")]),e._v(" "),a("el-form-item",{attrs:{prop:" user"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:" user"},model:{value:e.ruleForm.user,callback:function(t){e.ruleForm.user=t},expression:"ruleForm. user"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"pwd"}},[a("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"pwd"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}},model:{value:e.ruleForm.pwd,callback:function(t){e.ruleForm.pwd=t},expression:"ruleForm.pwd"}})],1),e._v(" "),a("el-form-item",{staticStyle:{width:"100%"}},[a("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",disabled:e.disabled,loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.submitForm(t)},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}}},[e._v("Login\n        ")])],1)],1)},staticRenderFns:[]}},467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"nprogress-container"})},staticRenderFns:[]}},468:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container"},[a("el-col",{staticClass:"header",attrs:{span:24}},[a("el-col",{staticClass:"logo",class:e.isCollapse?"logo-width":"logo-collapse-width",attrs:{span:10}},[e._v("\n            "+e._s(e.$t("header.title"))+"\n        ")]),e._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[a("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),a("el-col",{staticClass:"userinfo",attrs:{span:10}},[a("div",{staticClass:"user-info"},[a("span",{staticClass:"logout",on:{click:function(t){e.logout()}}},[e._v("exit")])])])],1),e._v(" "),a("el-col",{staticClass:"main",attrs:{span:24}},[a("div",{staticClass:"menu-box",class:e.isCollapse?"auto-width":""},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,mode:"vertical",router:"",collapse:!e.isCollapse,"default-openeds":["/global","/global/global-setting","/global/payroll-tep","/finance","/finance/to-review","/operation","/operation/operation/user","/operation/operation/balance","/operation/operation/user-info"]},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.menu,function(t,o){return t.meta.hidden?e._e():[t.meta.children?e._e():a("el-submenu",{attrs:{index:t.path}},[a("template",{slot:"title"},[a("i",{class:t.meta.icon}),e._v(" "),a("span",{slot:"title"},[e._v(e._s(t.meta.label))])]),e._v(" "),e._l(t.children,function(o){return o.meta.hidden?e._e():a("el-menu-item",{key:o.path,attrs:{index:t.path+"/"+o.path}},[e._v("\n                            "+e._s(o.meta.label)+"\n                        ")])})],2)]})],2)],1),e._v(" "),a("section",{staticClass:"content-container"},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[a("strong",{staticClass:"title"},[e._v(e._s(e.$route.meta.label))]),e._v(" "),a("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return a("el-breadcrumb-item",{key:t.path},[e._v("\n                            "+e._s(t.meta.label)+"\n                        ")])}))],1),e._v(" "),a("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},469:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nprogress-container"),e._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},staticRenderFns:[]}},471:function(e,t,a){function o(e){var t=n[e];return t?Promise.all(t.slice(1).map(a.e)).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var n={"./404.vue":[164],"./Home.vue":[57],"./Login.vue":[165],"./finance/RateChange.vue":[482,18],"./finance/ToReview.vue":[483,17],"./global/CompanyInfo.vue":[474,24],"./global/EmployList.vue":[484,13],"./global/GlobalSetting.vue":[485,3],"./global/Package.vue":[486,12],"./global/PayStep1.vue":[487,2],"./global/PayStep2.vue":[488,11],"./global/PayrollTep.vue":[489,1],"./global/PayrollTepAdd.vue":[475,23],"./global/PayslipDetail.vue":[490,7],"./global/Period.vue":[476,19],"./global/Preview.vue":[491,10],"./global/Report.vue":[492,9],"./global/ReportDetail.vue":[493,8],"./global/Upload.vue":[494,16],"./operation/user/PackageAdd.vue":[477,22],"./operation/user/PackageItem.vue":[495,5],"./operation/user/PackageItemAdd.vue":[478,21],"./operation/user/PayItem.vue":[496,4],"./operation/user/PayItemAdd.vue":[479,20],"./operation/user/User.vue":[497,0],"./operation/user/UserInfo.vue":[480,15],"./operation/user/UserPackage.vue":[498,6],"./operation/user/Workload.vue":[481,14]};o.keys=function(){return Object.keys(n)},e.exports=o,o.id=471},57:function(e,t,a){a(457);var o=a(53)(a(221),a(468),null,null);e.exports=o.exports},59:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(226),r=o(n),l=a(225),i=o(l);t.default={qutuiba:r.default,perm:i.default}},76:function(e,t,a){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),r=a(162),l=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(){function e(){o(this,e)}return n(e,null,[{key:"getToken",value:function(){return l.default.get("token")}},{key:"setToken",value:function(e){return l.default.set("token",e,{expires:7})}},{key:"delToken",value:function(){l.default.remove("token")}}]),e}();t.default=i},79:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return a(471)("./"+e+(t?"/index":"")+".vue")}}}},[229]);
//# sourceMappingURL=app.94348601acb5ff7c6bcd.js.map