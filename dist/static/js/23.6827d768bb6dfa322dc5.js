webpackJsonp([23],{475:function(e,t,o){o(637);var a=o(53)(o(620),o(645),null,null);e.exports=a.exports},620:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(114),i=function(e){return e&&e.__esModule?e:{default:e}}(a),n=new i.default;t.default={data:function(){return{type:[{name:"Employee Contribution",value:4},{name:"deduction",value:3},{name:"Employer Contribution",value:0},{name:"Earning",value:1}],titleShow:!1,dialogForm:!1,formLabelWidth:"150px",disabled:!0,isShow:!0,uid:"",CompanyCodeList:[],form:{CompanyCode:"",Description:"",DisplayName:"",Function:"",FunctionName:"",PayType:"1",TemplateCode:"",Amount:""}}},computed:{},mounted:function(){this.getList()},methods:{getUid:function(){var e=this;n.send(n.Apis.qutuiba.member.uid).then(function(t){e.uid=t.result[0]}).catch(function(t){e.$message.error("Failed to retrieve data："+(t.message||"Unknown error"))}).fin(function(){e.loading=!1}).done()},formatDate:function(e){var t=new Date(e),o=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return[o,this.addZero(a),this.addZero(i)].join("/")},addZero:function(e){return(e>9?"":"0")+e},showDialog:function(e){e?(this.isShow=!1,this.form.Amount=e.Amount,this.form.TemplateCode=e.TemplateCode,this.form.PayType=e.PayType,this.form.FunctionName=e.FunctionName,this.form.Function=e.Function,this.form.DisplayName=e.DisplayName,this.form.Description=e.Description,this.form.CompanyCode=e.CompanyCode,this.titleShow=!1):(this.titleShow=!0,this.form.Amount="",this.form.TemplateCode="",this.form.EffectiveDate="",this.form.FunctionName="",this.form.Function="",this.form.DisplayName="",this.form.Description="",this.form.CompanyCode=""),this.dialogForm=!0},getList:function(){var e=this;n.send(n.Apis.qutuiba.domain.getCompanyCode).then(function(t){e.CompanyCodeList=t.value||[]}).catch(function(t){e.$message.error("Failed to retrieve data："+(t.message||"Unknown error"))}).fin(function(){e.loading=!1}).done()},submit:function(){var e=this;n.send(n.Apis.qutuiba.member.update,(this.titleShow,{json:"{update:{PayItemTemplate:["+JSON.stringify(this.form)+"]}}"})).then(function(t){e.$message.success("Submit Success！"),e.dialogForm=!1,e.$emit("update")}).catch(function(t){e.$message.error(t.message)}).fin(function(){e.loading=!1}).done()}}}},629:function(e,t,o){t=e.exports=o(472)(),t.push([e.i,".updatePwd .el-dialog__header{padding:30px}.updatePwd .el-dialog__header .el-dialog__headerbtn{width:50px;height:50px;margin:-30px -30px 0 0}.updatePwd .el-dialog__body{padding:30px 50px 0 0}","",{version:3,sources:["C:/work/payrolls/src/views/global/PayrollTepAdd.vue"],names:[],mappings:"AACA,8BACE,YAAc,CACf,AACD,oDACE,WAAY,AACZ,YAAa,AACb,sBAAwB,CACzB,AACD,4BACE,qBAAuB,CACxB",file:"PayrollTepAdd.vue",sourcesContent:["\n.updatePwd .el-dialog__header {\n  padding: 30px;\n}\n.updatePwd .el-dialog__header .el-dialog__headerbtn {\n  width: 50px;\n  height: 50px;\n  margin: -30px -30px 0 0;\n}\n.updatePwd .el-dialog__body {\n  padding: 30px 50px 0 0;\n}\n"],sourceRoot:""}])},637:function(e,t,o){var a=o(629);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(473)("3cce8276",a,!0)},645:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"updatePwd",attrs:{title:1==e.titleShow?"add":"edit"},model:{value:e.dialogForm,callback:function(t){e.dialogForm=t},expression:"dialogForm"}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"CompanyCode:","label-width":e.formLabelWidth}},[o("el-select",{attrs:{size:"small",placeholder:"Please choose"},model:{value:e.form.CompanyCode,callback:function(t){e.form.CompanyCode=t},expression:"form.CompanyCode"}},e._l(e.CompanyCodeList,function(e,t){return o("el-option",{key:t,attrs:{label:e.CompanyCode,value:e.CompanyCode}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"Amount:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off",size:"medium"},model:{value:e.form.Description,callback:function(t){e.form.Description="string"==typeof t?t.trim():t},expression:"form.Description"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"PayType:","label-width":e.formLabelWidth}},[o("el-select",{attrs:{size:"small",placeholder:"Please choose"},model:{value:e.form.PayType,callback:function(t){e.form.PayType=t},expression:"form.PayType"}},e._l(e.type,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"DisplayName:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.DisplayName,callback:function(t){e.form.DisplayName="string"==typeof t?t.trim():t},expression:"form.DisplayName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Function:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.Function,callback:function(t){e.form.Function="string"==typeof t?t.trim():t},expression:"form.Function"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"FunctionName:","label-width":e.formLabelWidth,required:!0}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.FunctionName,callback:function(t){e.form.FunctionName="string"==typeof t?t.trim():t},expression:"form.FunctionName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"TemplateCode:","label-width":e.formLabelWidth,required:!0}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.TemplateCode,callback:function(t){e.form.TemplateCode="string"==typeof t?t.trim():t},expression:"form.TemplateCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Description:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.Description,callback:function(t){e.form.Description="string"==typeof t?t.trim():t},expression:"form.Description"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"DisplayName:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.DisplayName,callback:function(t){e.form.DisplayName="string"==typeof t?t.trim():t},expression:"form.DisplayName"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogForm=!1}}},[e._v("Cancel")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("Submit")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=23.6827d768bb6dfa322dc5.js.map