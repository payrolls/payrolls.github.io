webpackJsonp([20],{479:function(e,t,o){o(641);var i=o(53)(o(624),o(649),null,null);e.exports=i.exports},624:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(114),a=function(e){return e&&e.__esModule?e:{default:e}}(i),n=new a.default;t.default={data:function(){return{type:[{name:"Employee Contribution",value:4},{name:"deduction",value:3},{name:"Employer Contribution",value:0},{name:"Earning",value:1}],titleShow:!1,dialogForm:!1,formLabelWidth:"150px",disabled:!0,isShow:!0,uid:"",TemplateCode:[],form:{EmpCode:this.$route.query.EmpCode,CompanyCode:this.$route.query.CompanyCode,Function:"",FunctionName:"",TemplateCode:"",Amount:"",EffectiveDate:""},prama:{w:"PayItemTemplate.companycode LK "+this.$route.query.w.slice(0,this.$route.query.w.indexOf(",")).slice(23)}}},computed:{singleDate:{set:function(e){this.form.EffectiveDate=e?this.formatDate(e):""},get:function(){return this.form.EffectiveDate}}},mounted:function(){this.getUid(),this.getTepcode(),console.log(this.$route.query.w.indexOf(","))},methods:{getUid:function(){var e=this;n.send(n.Apis.qutuiba.member.uid).then(function(t){e.uid=t.result[0]}).catch(function(t){e.$message.error("Failed to retrieve data："+(t.message||"Unknown error"))}).fin(function(){}).done()},getTepcode:function(){var e=this;n.send(n.Apis.qutuiba.member.TemplateCode,this.prama).then(function(t){e.TemplateCode=t.value||[]}).catch(function(t){e.$message.error("Failed to retrieve data："+(t.message||"Unknown error"))}).fin(function(){}).done()},formatDate:function(e){var t=new Date(e),o=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();return[o,this.addZero(i),this.addZero(a)].join("/")},addZero:function(e){return(e>9?"":"0")+e},showDialog:function(e){e.EffectiveDate||e.Amount||e.PayType||e.TemplateCode?(this.isShow=!1,this.form.Amount=e.Amount,this.form.TemplateCode=e.TemplateCode,this.form.PayType=e.PayType,this.form.FunctionName=e.FunctionName,this.form.Function=e.Function,this.form.DisplayName=e.DisplayName,this.form.Description=e.Description,this.form.CompanyCode=e.CompanyCode,this.titleShow=!1):(this.titleShow=!0,this.form.Amount="",this.form.TemplateCode="",this.form.EffectiveDate="",this.form.FunctionName="",this.form.Function="",this.form.DisplayName="",this.form.Description="",this.form.CompanyCode=e?e.CompanyCode:"",this.form.EmpCode=e?e.EmpCode:""),this.dialogForm=!0},submit:function(){var e=this;n.send(n.Apis.qutuiba.member.update,1==this.titleShow?{json:"{update:{PayItem:["+JSON.stringify(Object.assign({PayItemUid:this.uid},this.form))+"]}}"}:{json:"{update:{PayItem:["+JSON.stringify(this.form)+"]}}"}).then(function(t){e.$message.success("Submit Success！"),e.dialogForm=!1,e.$emit("update")}).catch(function(t){e.$message.error(t.message)}).fin(function(){e.loading=!1}).done()}}}},633:function(e,t,o){t=e.exports=o(472)(),t.push([e.i,".updatePwd .el-dialog__header{padding:30px}.updatePwd .el-dialog__header .el-dialog__headerbtn{width:50px;height:50px;margin:-30px -30px 0 0}.updatePwd .el-dialog__body{padding:30px 50px 0 0}","",{version:3,sources:["C:/work/payrolls/src/views/operation/user/PayItemAdd.vue"],names:[],mappings:"AACA,8BACE,YAAc,CACf,AACD,oDACE,WAAY,AACZ,YAAa,AACb,sBAAwB,CACzB,AACD,4BACE,qBAAuB,CACxB",file:"PayItemAdd.vue",sourcesContent:["\n.updatePwd .el-dialog__header {\n  padding: 30px;\n}\n.updatePwd .el-dialog__header .el-dialog__headerbtn {\n  width: 50px;\n  height: 50px;\n  margin: -30px -30px 0 0;\n}\n.updatePwd .el-dialog__body {\n  padding: 30px 50px 0 0;\n}\n"],sourceRoot:""}])},641:function(e,t,o){var i=o(633);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);o(473)("3bb4637a",i,!0)},649:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"updatePwd",attrs:{title:1==e.titleShow?"add":"edit"},model:{value:e.dialogForm,callback:function(t){e.dialogForm=t},expression:"dialogForm"}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"EmpCode:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off",size:"small",required:!0,disabled:""},model:{value:e.form.EmpCode,callback:function(t){e.form.EmpCode="string"==typeof t?t.trim():t},expression:"form.EmpCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"CompanyCode:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off",size:"small",disabled:""},model:{value:e.form.CompanyCode,callback:function(t){e.form.CompanyCode="string"==typeof t?t.trim():t},expression:"form.CompanyCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Amount:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off",size:"medium"},model:{value:e.form.Description,callback:function(t){e.form.Description="string"==typeof t?t.trim():t},expression:"form.Description"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"EffectiveDate:","label-width":e.formLabelWidth}},[o("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"Select EffectiveDate"},model:{value:e.singleDate,callback:function(t){e.singleDate="string"==typeof t?t.trim():t},expression:"singleDate"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Function:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.Function,callback:function(t){e.form.Function="string"==typeof t?t.trim():t},expression:"form.Function"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"FunctionName:","label-width":e.formLabelWidth,required:!0}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.FunctionName,callback:function(t){e.form.FunctionName="string"==typeof t?t.trim():t},expression:"form.FunctionName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"TemplateCode:","label-width":e.formLabelWidth,required:!0}},[o("el-select",{attrs:{size:"small"},model:{value:e.form.TemplateCode,callback:function(t){e.form.TemplateCode=t},expression:"form.TemplateCode"}},e._l(e.TemplateCode,function(e,t){return o("el-option",{key:t,attrs:{label:e.TemplateCode,value:e.TemplateCode}})}))],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogForm=!1}}},[e._v("Cancel")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("Submit")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.18c81276e58b69bd7ec1.js.map