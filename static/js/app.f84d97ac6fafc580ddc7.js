webpackJsonp([24],{113:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(230),r=a(o),i=n(231),l=a(i),u=n(229),s=a(u);!window.history||history.pushState;t.default={mode:"hash",linkActiveClass:"is-active",scrollBehavior:function(){return{y:0}},routes:[{path:"/login",component:n(165),meta:{label:"登录",hidden:!0}},{path:"/",component:n(57),redirect:{name:"GlobalSetting"},meta:{label:"首页",hidden:!0}},{path:"/404",component:n(164),meta:{label:"404",hidden:!0}},r.default,l.default,s.default,{path:"*",redirect:"/404",meta:{hidden:!0}}]}},114:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function e(t,n,a){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,a)}if("value"in o)return o.value;var i=o.get;if(void 0!==i)return i.call(a)},s=n(226),p=a(s),c=n(59),d=a(c),m=n(76),f=(a(m),n(227)),h=(a(f),n(223)),y=a(h),g=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.Apis=d.default,e.apiDomain=new y.default,e}return i(t,e),l(t,[{key:"getUrl",value:function(e){return this.apiDomain.getUrl(e)}},{key:"nativeSend",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=Object.assign({},n),u(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"send",this).call(this,{url:e.url,type:e.type,timeout:e.timeout,headers:e.headers},n).then(function(e){var t=e.data;if(t.code){if(0==t.code)return t;throw{message:" "+t.code+", message: "+(t.errmsg||"未知原因"),stack:(new Error).stack,code:t.code}}return e.data},function(e){var t=0;throw e.response?t=e.response.status:e.request&&(t=e.request.status),new Error("网络错误 [ "+t+" ] "+e.message+" ")})}},{key:"send",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.apiDomain.getUrl(e);return this.nativeSend({url:n,type:e.type,timeout:e.timeout,headers:e.headers,author:e._author||""},t)}},{key:"isProduction",value:function(){return this.apiDomain.isProduct()}},{key:"getProject",value:function(){return this.apiDomain.getProject()}}]),t}(p.default);t.default=g},121:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=function(){function e(t){var n=t.path,o=t.type,r=void 0===o?"get":o,i=t.timeout,l=void 0===i?5e3:i,u=t.headers,s=void 0===u?{}:u,p=t.project,c=void 0===p?"qupost":p,d=t.author,m=void 0===d?"未定义":d;a(this,e),this._path=n,this._type=r,this._author=m,this.timeout=l,this.headers=s,this.project=c}return o(e,[{key:"path",get:function(){return this._path}},{key:"type",get:function(){return this._type}},{key:"author",get:function(){return this._author}}]),e}();t.default=r},164:function(e,t,n){n(453);var a=n(53)(null,n(464),"data-v-40bf464e",null);e.exports=a.exports},165:function(e,t,n){n(454);var a=n(53)(n(221),n(465),"data-v-4467f7ac",null);e.exports=a.exports},166:function(e,t,n){"use strict";e.exports={en:{header:{title:"OperatingPlatform"},sidebar:{GlobalSettingType:"GlobalSetting",GlobalSetting:"GlobalSetting",ContentManage:"ContentManage",NetworkArticleAudit:"NetworkArticleAudit",NetworkArticleAuditDetail:"NetworkArticleAuditDetail",OperationManage:"OperationManage",FinanceManage:"FinanceManage",taskManage:"taskManage"}},zn:{header:{title:"payroll"},sidebar:{GlobalSettingType:"全局配置",GlobalSetting:"全局配置",PayrollTep:"PayrollTep",Package:"包管理",Version:"版本管理",Cdn:"CDN",Domain:"收徒域名管理",Upload:"图片上传",ContentManage:"内容管理",NetworkArticleAudit:"网络图文审核",NetworkArticleAuditDetail:"网络图文详情",NetworkMediaAudit:"网络视频审核",NetworkMediaAuditDetail:"网络视频详情",PushContentManage:"线上内容管理",PushContentEdit:"线上内容编辑",Comment:"评论安全巡查",ArticlePush:"文章推送管理",ArticlePushEdit:"文章推送编辑",OperationManage:"用户管理",User:"用户管理",Tool:"工具",PushMessage:"系统消息",FinanceManage:"财务管理",ToReview:"提现审核",RateChange:"汇率调整",taskManage:"任务管理"}}}},169:function(e,t){},170:function(e,t){},171:function(e,t){},173:function(e,t,n){n(457);var a=n(53)(n(219),n(468),null,null);e.exports=a.exports},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"nprogress-container"}},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(463),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"app",components:{NprogressContainer:o.default}}},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(114),r=a(o),i=n(76),l=a(i),u=n(113),s=a(u),p=n(222),c=(a(p),new r.default);t.default={data:function(){return{token:l.default.getToken(),isCollapse:!0,info:{},menu:s.default.routes,disabled:!0}},computed:{},methods:{isLogin:function(){this.token||this.$router.push("/login")},getMemberInfo:function(){var e=this;c.send(c.Apis.perm.member.getMember).then(function(t){e.info=t.data.member||{}}).catch(function(t){e.$message.error(""+(t.message||"Unknown error"))}).fin(function(){e.loading=!1}).done()},handleOpen:function(){},handleClose:function(){},logout:function(){var e=this;this.$confirm("confirm exit?","tips",{confirmButtonText:"Ok",cancelButtonText:"Cancel"}).then(function(){c.send(c.Apis.qutuiba.member.logout).then(function(t){0==t.code?e.$router.push("/login"):e.$message.error(""+(t.errmsg||"Unknown error"))})})},collapse:function(){this.isCollapse=!this.isCollapse}},mounted:function(){}}},221:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(114),r=a(o),i=n(76),l=(a(i),new r.default);t.default={data:function(){return{logining:!1,ruleForm:{user:"",pwd:""},rule:{user:[{required:!0,message:"Please enter your cell phone number",trigger:"blur"}],pwd:[{required:!0,message:"Please input a pwd",trigger:"blur"}]},checked:!1,disabled:!1}},methods:{submitForm:function(){var e=this;l.send(l.Apis.qutuiba.member.login,this.ruleForm).then(function(t){e.$message.success("Login successful！"),e.$router.push({name:"GlobalSetting"})}).catch(function(t){e.$message.error(""+(t.errmsg||"Username or password not match"))}).fin(function(){e.loading=!1}).done()}}}},222:function(e,t,n){"use strict";function a(e,t){for(var t=t-(e+"").length,n=0;n<t;n++)e="0"+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var o=/([yMdhsm])(\1*)/g;t.default={getQueryStringByName:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t),a="";return null!=n&&(a=n[2]),t=null,n=null,null==a||""==a||"undefined"==a?"":a},formatDate:{format:function(e,t){return t=t||"yyyy-MM-dd",t.replace(o,function(t){switch(t.charAt(0)){case"y":return a(e.getFullYear(),t.length);case"M":return a(e.getMonth()+1,t.length);case"d":return a(e.getDate(),t.length);case"w":return e.getDay()+1;case"h":return a(e.getHours(),t.length);case"m":return a(e.getMinutes(),t.length);case"s":return a(e.getSeconds(),t.length)}})},parse:function(e,t){var n=t.match(o),a=e.match(/(\d)+/g);if(n.length==a.length){for(var r=new Date(1970,0,1),i=0;i<n.length;i++){var l=parseInt(a[i]);switch(n[i].charAt(0)){case"y":r.setFullYear(l);break;case"M":r.setMonth(l-1);break;case"d":r.setDate(l);break;case"h":r.setHours(l);break;case"m":r.setMinutes(l);break;case"s":r.setSeconds(l)}}return r}return null}},getUrlSearch:function(){var e=void 0,t=void 0,n=void 0,a=void 0,o=void 0,r={};e=location.search.length>0?location.search.substring(1):null,t=e?e.split("&"):"";for(var i=0,l=t.length;i<l;i++)n=t[i].split("="),a=decodeURIComponent(n[0]),o=(n[1]||"").replace(/(.*)%$/,function(e,t){return t+encodeURIComponent("%")}),o=decodeURIComponent(o||""),a.length>0&&(r[a]=o);return r},getPermUrl:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.forEach(function(t){var a=t.meta,o=void 0===a?{}:a;o.api&&o.api.forEach(function(e){n.push(e.project+"::"+e.path)}),t.children&&e(t.children,n)}),n},savePermApi:function(e){localStorage.setItem("qu_local_perms",JSON.stringify(e))},checkPermApi:function(e){var t=[];try{t=JSON.parse(localStorage.getItem("qu_local_perms"))||[]}catch(e){}return console.log(t,e),e.forEach(function(e){e.children&&e.children.forEach(function(e){for(var n=e.meta.api||[],a=!0,o=0,r=n.length;o<r;o++){var i=n[o],l=i.project,u=i.path,s=l+"::"+u;if(!t[s]||1!==t[s].has){a=!0;break}a=!1,console.log(s,a)}e.meta.hidden=a})}),e}}},223:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(162),i=function(e){return e&&e.__esModule?e:{default:e}}(r),l={qutuiba:{default:"https://13.76.46.204/"},perm:{default:"https://13.76.46.204/"}},u={},s=function(){function e(){a(this,e),this.domains=this.getDomains()}return o(e,[{key:"getDomains",value:function(){var e={};for(var t in l){var n=t+"_branch",a=i.default.get(n)||"default";u[t]=a,e[t]=this.getBranch(t,a)}return e}},{key:"getBranch",value:function(e,t){var n=l[e];if(n){if(n.hasOwnProperty(t))return n[t];console.error("不存在"+e+"对应项目"+t+"分支")}else console.error("不存在"+e+"对应项目")}},{key:"getUrl",value:function(e){var t=this.domains,n=e.project,a=e.path,o="";if(n in t&&(o=t[n]),!o)throw new Error("ApiDomain.getUrl：没有配置该 "+n+" 项目的 domain");return/^\//.test(a)?a=a.substring(1,a.length):console.warn("路径需要以/开头！"),""+o+a}},{key:"getBranchMap",value:function(){return u}},{key:"isProduct",value:function(){return!1}},{key:"getEvn",value:function(){return"development"}},{key:"isDevelopment",value:function(){return!0}},{key:"getProject",value:function(){return"qutuiba"}}],[{key:"setApiBranch",value:function(e){for(var t in l){var n="_"+t;if(e.hasOwnProperty(n)){var a=e[n];l[t].hasOwnProperty(a)&&(u[t]=a,i.default.set(t+"_branch",a))}}}}]),e}();t.default=s},224:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),l=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){function t(e){var n=e.path,r=e.type,i=void 0===r?"get":r,l=e.timeout,u=void 0===l?5e3:l,s=e.headers,p=e.project,c=void 0===p?"perm":p,d=e.author,m=void 0===d?"未定义":d;return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:n,type:i,timeout:u,headers:s,project:c,author:m}))}return r(t,e),t}(l.default);t.default={member:{list:new u({path:"/member/list",type:"get",author:"刘彪"}),getMember:new u({path:"/member/getMember",type:"get",author:"刘彪"}),allowLogin:new u({path:"/member/allowLogin",type:"post",author:"刘彪"}),login:new u({path:"/member/login",type:"get",author:"刘彪"}),loginByPwd:new u({path:"/member/loginByPwd",type:"get",author:"刘彪"}),checkPerm:new u({path:"/member/checkPerm",type:"post",author:"刘彪"})},perm:{list:new u({path:"/perm/getPermGroupList",type:"post",author:"刘彪"})}}},225:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(121),l=function(e){return e&&e.__esModule?e:{default:e}}(i),u=function(e){function t(e){var n=e.path,r=e.type,i=void 0===r?"get":r,l=e.timeout,u=void 0===l?5e3:l,s=e.headers,p=e.project,c=void 0===p?"qutuiba":p,d=e.author,m=void 0===d?"未定义":d;return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{path:n,type:i,timeout:u,headers:s,project:c,author:m}))}return r(t,e),t}(l.default);t.default={version:{getList:new u({path:"/p/select?c=payrolltrans.empcode,employee.fullchinesename,payrolltrans.payrollstatus,employee.companycode,payrolltrans.periodcode&g=payrolltrans.payrollstatus,payrolltrans.empcode,employee.fullchinesename,employee.companycode,payrolltrans.periodcode",type:"post",author:" "}),calctrans:new u({path:"/p/calctrans",type:"post",author:" "}),getPkgList:new u({path:"/p/preview",type:"get",author:" "}),commit:new u({path:"/p/commit",type:"post",author:" "}),add:new u({path:"/admin/appversion/add",type:"post",author:" "}),getAnother:new u({path:"/p/select?c= employee.empcode,employee.fullchinesename",type:"post",author:" "}),report:new u({path:"/p/report",type:"post",author:" "})},domain:{getList:new u({path:"/p/select?c=Company.CompanyCode,Company.CompanyName,Company.Address,Company.Phone,Company.Fax,Company.PostalAddress,Company.EmprTaxFileNum,Company.CurrencyCode,Company.PayDay,Company.PeriodType,Company.IsActive,Company.CreateDate",type:"post",author:" "})},upload:{uploadFile:new u({path:"/import/csv",type:"post",author:" "})},member:{logout:new u({path:"/u/logout",type:"post",author:" "}),employList:new u({path:"/p/select?c=Employee.CompanyCode,Employee.EmpCode,Employee.IsPartime,Employee.EmploymentStartDate,Employee.EmploymentEndDate,Employee.EmploymentType,Employee.SurName,Employee.OtherName,Employee.FullChineseName,Employee.Gender,Employee.MobilePhone,Employee.HomePhone,Employee.BirthDate,Employee.Email,Employee.ICN,Employee.Passport,Employee.Country,Employee.MaritalStatus,Employee.SpouseName,Employee.SpouseICN,Employee.SpousePassport,Employee.SpouseCountry,Employee.ResidentialAddress,Employee.PostalAddress,Employee.BankAccount,Employee.Title,Employee.PaySlipDeliveryDay,Employee.IsActive,Employee.CreateDate,Employee.UpdateDate",type:"post",author:" "}),update:new u({path:"/p/update",type:"post",author:" "}),login:new u({path:"/u/login",type:"post",author:" "}),pay:new u({path:"/p/select?c=PayItemTemplate.TemplateCode,PayItemTemplate.FunctionName,PayItemTemplate.DisplayName,PayItemTemplate.Description,PayItemTemplate.CompanyCode,PayItemTemplate.PayType,PayItemTemplate.Amount,PayItemTemplate.Function,PayItemTemplate.IsActive,PayItemTemplate.Amount,PayItemTemplate.CreateDate,PayItemTemplate.UpdateDate",type:"post",author:" "}),package:new u({path:"/p/select?c=PackageItem.PackageItemUid,Employee.EmpCode,Employee.FullChineseName,PackageItem.Templatecode,PackageItem.CompanyCode,PackageItem.Amount,PackageItem.Function,PackageItem.EffectiveDate,PackageItem.PackageUid&o=Employee.EmpCode,PackageItem.PackageUid",type:"post",author:" "}),employeePackage:new u({path:"/p/select?c=EmployeePackage.PackageUid,EmployeePackage.EmpCode,EmployeePackage.PackageName,EmployeePackage.CompanyCode,EmployeePackage.StartDate,EmployeePackage.EndDate",type:"post",author:" "}),packageItem:new u({path:"/p/select?c=PackageItem.PackageItemUid,Employee.EmpCode,Employee.FullChineseName,PackageItem.Templatecode,PackageItem.CompanyCode,PackageItem.Amount,PackageItem.Function,PackageItem.EffectiveDate,PackageItem.PackageUid&o=Employee.EmpCode,PackageItem.PackageUid",type:"post",author:" "})},cdn:{getCdnList:new u({path:"/p/select?c=period.*,payrolltrans.transuid&w=payrolltrans.transuid%20IS%20null",type:"post",author:" "}),newperiod:new u({path:"/p/newperiod",type:"post",author:" "}),undo:new u({path:"/p/undo",type:"post",author:" "}),getCdn:new u({path:"/p/select?c=top 15,payrolltrans.PeriodCode,period.PeriodType,period.CompanyCode,period.StartDate,period.EndDate,$count(1)%20as%20Transactions&o=_period.StartDate&g=payrolltrans.periodcode,period.periodtype,period.companycode,period.startdate,period.enddate",type:"post",author:" "})},template:{tep:new u({path:"/p/select?c=payitemtemplate.TemplateCode,payitemtemplate.FunctionName,payitemtemplate.DisplayName,payitemtemplate.Description,payitemtemplate.CompanyCode,payitemtemplate.PayType,payitemtemplate.Amount,payitemtemplate.Function&o=PayItemTemplate.CompanyCode,PayItemTemplate.FunctionName",type:"post",author:" "})}}},226:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(199),u=a(l),s=n(177),p=a(s),c=function(){function e(){o(this,e)}return i(e,[{key:"formatData",value:function(e){if(e&&"object"===(void 0===e?"undefined":r(e))){var t=[];for(var n in e)t.push(n+"="+encodeURIComponent(e[n]));return t.join("&")}return e}},{key:"send",value:function(e){var t=e.url,n=e.type,a=void 0===n?"get":n,o=(e.timeout,e.headers),r=void 0===o?{}:o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l={url:t,method:a.toLocaleLowerCase(),timeout:1e4,headers:r};if("post"===l.method){var s=[];for(var c in i)s.push(c+"="+encodeURIComponent(i[c]));l.data=this.formatData(i)}else"get"===l.method?l.params=i:l.data=i;return p.default.resolve((0,u.default)(l))}}]),e}();t.default=c},227:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(){function e(){a(this,e)}return r(e,null,[{key:"send",value:function(e){var t=e.cmd,n=void 0===t?9010:t,a=e.item,r=void 0===a?"":a,i=e.action,l=void 0===i?"":i,u=e.page_id,s=void 0===u?"":u,p=e.pos,c=void 0===p?"":p,d=e.uid,m=void 0===d?"":d,f=[],h=arguments[0]||{},y=o({cmd:n,item:r,action:l,page_id:s,pos:c,uid:m},h);for(var g in y)f.push(g+"="+y[g])}}]),e}();t.default=i},228:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(167);a(o);n(171);var r=n(18),i=a(r),l=n(174),u=a(l),s=n(175),p=a(s),c=n(172),d=a(c),m=n(173),f=a(m),h=n(168),y=a(h);n(169);var g=n(176),v=a(g),b=n(113),P=a(b),_=n(166),k=a(_);n(170),i.default.use(y.default),i.default.use(p.default),i.default.use(v.default),i.default.use(d.default),i.default.use(u.default);var w=new u.default({parent:".nprogress-container"}),C=new d.default({locale:"zn",messages:k.default}),E=new p.default(P.default);i.default.mixin({created:function(){this.filter&&(this.filter=this.$queryFilter(),this.$updateRouter(this.filter))},methods:{$queryFilter:function(){var e=this.filter||{};if(this.$route){var t=this.$route.query;for(var n in e)void 0!==t[n]&&("number"==typeof e[n]?e[n]=parseInt(t[n]):e[n]=t[n])}return e},$updateRouter:function(e){e||(e=this.$queryFilter()),this.$router.replace({query:Object.assign({},e)})},$blockRequest:function(e){var t=e.$elem,n=e.req,a=e.pendingText,o=void 0===a?"操作中":a;if(t||(t=document.createElement("button")),t&&!t._req_block){var r="button"===t.nodeName.toLowerCase(),i=t.innerText;return r&&t.setAttribute("disabled",!0),t.innerText=o,t._req_block=!0,n.fin(function(){r&&t.removeAttribute("disabled"),t._req_block=!1,t.innerText=i})}}}}),new i.default({router:E,i18n:C,nprogress:w,render:function(e){return e(f.default)}}).$mount("#app")},229:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(79),r=a(o),i=n(59);a(i);t.default={path:"/finance",meta:{icon:"el-icon-document",label:"Advanced",hidden:!1},component:n(57),children:[{name:"ToReview",path:"to-review",component:(0,r.default)("finance/ToReview"),meta:{label:"Import",hidden:!1,api:[]}}]}},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(79),r=a(o),i=n(59),l=a(i);t.default={path:"/global",meta:{icon:"el-icon-setting",label:"Company",hidden:!1},component:n(57),children:[{name:"GlobalSetting",path:"global-setting",component:(0,r.default)("global/GlobalSetting"),meta:{label:"Basic Info",hidden:!1,api:[]}},{name:"PayrollTep",path:"payroll-tep",component:(0,r.default)("global/PayrollTep"),meta:{label:"Payroll Template",hidden:!1,api:[]}},{name:"PayStep2",path:"payStep2",component:(0,r.default)("global/PayStep2"),meta:{label:"payrolls",hidden:!0,api:[l.default.qutuiba.version.getList]}},{name:"PayStep1",path:"PayStep1",component:(0,r.default)("global/PayStep1"),meta:{label:"payrolls",hidden:!0,api:[]}},{name:"Package",path:"package",component:(0,r.default)("global/Package"),meta:{label:"payrolls",hidden:!0,api:[]}},{name:"Report",path:"report",component:(0,r.default)("global/Report"),meta:{label:"Report",hidden:!0,api:[]}},{name:"ReportDetail",path:"reportDetail",component:(0,r.default)("global/ReportDetail"),meta:{label:"ReportDetail",hidden:!0,api:[]}},{name:"CompanyInfo",path:"companyInfo",component:(0,r.default)("global/CompanyInfo"),meta:{label:"CompanyInfo",hidden:!0,api:[]}}]}},231:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(79),r=a(o),i=n(59);a(i);t.default={path:"/operation",meta:{icon:"fa fa-user-o",label:"Employee",hidden:!1},component:n(57),children:[{name:"User",path:"user",component:(0,r.default)("operation/user/User"),meta:{label:"Basic Info",hidden:!1,api:[]}},{name:"UserPackage",path:"userPackage",component:(0,r.default)("operation/user/UserPackage"),meta:{label:"UserPackage",hidden:!0,api:[]}},{name:"PayItem",path:"pay-item",component:(0,r.default)("operation/user/PayItem"),meta:{label:"Pay item",hidden:!0,api:[]}},{name:"PackageItem",path:"package-item",component:(0,r.default)("operation/user/PackageItem"),meta:{label:"package item",hidden:!0,api:[]}},{name:"PackageItemAdd",path:"package-item-add",component:(0,r.default)("operation/user/PackageItemAdd"),meta:{label:"PackageItemAdd",hidden:!0,api:[]}}]}},453:function(e,t){},454:function(e,t){},455:function(e,t){},456:function(e,t){},457:function(e,t){},463:function(e,t,n){n(455);var a=n(53)(n(218),n(466),null,null);e.exports=a.exports},464:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"page-container"},[e._v("404 page not found")])},staticRenderFns:[]}},465:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm login-container",attrs:{model:e.ruleForm,rules:e.rule,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"title"},[e._v("System Login")]),e._v(" "),n("el-form-item",{attrs:{prop:" user"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:" user"},model:{value:e.ruleForm.user,callback:function(t){e.ruleForm.user=t},expression:"ruleForm. user"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"pwd"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"pwd"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}},model:{value:e.ruleForm.pwd,callback:function(t){e.ruleForm.pwd=t},expression:"ruleForm.pwd"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",disabled:e.disabled,loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.submitForm(t)},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.submitForm(t)}}},[e._v("Login\n        ")])],1)],1)},staticRenderFns:[]}},466:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"nprogress-container"})},staticRenderFns:[]}},467:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"container"},[n("el-col",{staticClass:"header",attrs:{span:24}},[n("el-col",{staticClass:"logo",class:e.isCollapse?"logo-width":"logo-collapse-width",attrs:{span:10}},[e._v("\n            "+e._s(e.$t("header.title"))+"\n        ")]),e._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"tools",on:{click:function(t){t.preventDefault(),e.collapse(t)}}},[n("i",{staticClass:"fa fa-align-justify"})])]),e._v(" "),n("el-col",{staticClass:"userinfo",attrs:{span:10}},[n("div",{staticClass:"user-info"},[n("span",{staticClass:"logout",on:{click:function(t){e.logout()}}},[e._v("exit")])])])],1),e._v(" "),n("el-col",{staticClass:"main",attrs:{span:24}},[n("div",{staticClass:"menu-box",class:e.isCollapse?"auto-width":""},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,mode:"vertical",router:"",collapse:!e.isCollapse,"default-openeds":["/global","/global/global-setting","/global/payroll-tep","/finance","/finance/to-review","/operation","/operation/operation/user","/operation/operation/balance","/operation/operation/user-info"]},on:{open:e.handleOpen,close:e.handleClose}},[e._l(e.menu,function(t,a){return t.meta.hidden?e._e():[t.meta.children?e._e():n("el-submenu",{attrs:{index:t.path}},[n("template",{slot:"title"},[n("i",{class:t.meta.icon}),e._v(" "),n("span",{slot:"title"},[e._v(e._s(t.meta.label))])]),e._v(" "),e._l(t.children,function(a){return a.meta.hidden?e._e():n("el-menu-item",{key:a.path,attrs:{index:t.path+"/"+a.path}},[e._v("\n                            "+e._s(a.meta.label)+"\n                        ")])})],2)]})],2)],1),e._v(" "),n("section",{staticClass:"content-container"},[n("div",{staticClass:"grid-content bg-purple-light"},[n("el-col",{staticClass:"breadcrumb-container",attrs:{span:24}},[n("strong",{staticClass:"title"},[e._v(e._s(e.$route.meta.label))]),e._v(" "),n("el-breadcrumb",{staticClass:"breadcrumb-inner",attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return n("el-breadcrumb-item",{key:t.path},[e._v("\n                            "+e._s(t.meta.label)+"\n                        ")])}))],1),e._v(" "),n("el-col",{staticClass:"content-wrapper",attrs:{span:24}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)])])],1)},staticRenderFns:[]}},468:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nprogress-container"),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},470:function(e,t,n){function a(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./404.vue":[164],"./Home.vue":[57],"./Login.vue":[165],"./finance/RateChange.vue":[480,17],"./finance/ToReview.vue":[481,16],"./global/CompanyInfo.vue":[473,22],"./global/EmployList.vue":[482,12],"./global/GlobalSetting.vue":[483,2],"./global/Package.vue":[484,11],"./global/PayStep1.vue":[485,1],"./global/PayStep2.vue":[486,10],"./global/PayrollTep.vue":[487,9],"./global/PayslipDetail.vue":[488,8],"./global/Period.vue":[474,18],"./global/Report.vue":[489,7],"./global/ReportDetail.vue":[490,6],"./global/Upload.vue":[491,15],"./operation/user/PackageAdd.vue":[475,21],"./operation/user/PackageItem.vue":[492,4],"./operation/user/PackageItemAdd.vue":[476,20],"./operation/user/PayItem.vue":[493,3],"./operation/user/PayItemAdd.vue":[477,19],"./operation/user/User.vue":[494,0],"./operation/user/UserInfo.vue":[478,14],"./operation/user/UserPackage.vue":[495,5],"./operation/user/Workload.vue":[479,13]};a.keys=function(){return Object.keys(o)},e.exports=a,a.id=470},57:function(e,t,n){n(456);var a=n(53)(n(220),n(467),null,null);e.exports=a.exports},59:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(225),r=a(o),i=n(224),l=a(i);t.default={qutuiba:r.default,perm:l.default}},76:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(162),i=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){function e(){a(this,e)}return o(e,null,[{key:"getToken",value:function(){return i.default.get("token")}},{key:"setToken",value:function(e){return i.default.set("token",e,{expires:7})}},{key:"delToken",value:function(){i.default.remove("token")}}]),e}();t.default=l},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return n(470)("./"+e+(t?"/index":"")+".vue")}}}},[228]);
//# sourceMappingURL=app.f84d97ac6fafc580ddc7.js.map