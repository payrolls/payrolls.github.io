webpackJsonp([20],{476:function(e,t,o){o(636);var a=o(53)(o(619),o(643),null,null);e.exports=a.exports},619:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(114),i=function(e){return e&&e.__esModule?e:{default:e}}(a),l=new i.default;t.default={data:function(){return{Gender:[{name:"man",value:!0},{name:"women",value:!1}],IsPartime:[{name:"yes",value:!0},{name:"no",value:!1}],IsActive:[{name:"yes",value:!0},{name:"no",value:!1}],MaritalStatus:[{name:"Single",value:0},{name:"Married",value:1}],titleShow:!1,dialogForm:!1,formLabelWidth:"150px",disabled:!0,isShow:!0,form:{CompanyCode:"",Templatecode:"",PackageUid:"",PackageItemUid:"",Function:"",FullChineseName:"",EmpCode:"",EffectiveDate:"",Amount:""}}},computed:{singleDate:{set:function(e){this.form.EffectiveDate=e?this.formatDate(e):""},get:function(){return this.form.EffectiveDate}}},mounted:function(){},methods:{formatDate:function(e){var t=new Date(e),o=t.getFullYear(),a=t.getMonth()+1,i=t.getDate();return[o,this.addZero(a),this.addZero(i)].join("/")},addZero:function(e){return(e>9?"":"0")+e},showInfoDialog:function(e){e?(this.isShow=!1,this.form.Amount=e.Amount,this.form.CompanyCode=e.CompanyCode,this.form.EffectiveDate=e.EffectiveDate,this.form.EmpCode=e.EmpCode,this.form.FullChineseName=e.FullChineseName,this.form.Function=e.Function,this.form.PackageItemUid=e.PackageItemUid,this.form.PackageUid=e.PackageUid,this.form.Templatecode=e.Templatecode,this.titleShow=!1):(this.titleShow=!0,this.form.Amount="",this.form.CompanyCode="",this.form.EffectiveDate="",this.form.EmpCode="",this.form.FullChineseName="",this.form.PackageItemUid="",this.form.Function="",this.form.PackageUid="",this.form.Templatecode=""),this.dialogForm=!0},submit:function(){var e=this;l.send(l.Apis.qutuiba.member.update,(this.titleShow,{json:"{update:{PackageItem:["+JSON.stringify(this.form)+"]}}"})).then(function(t){e.$message.success("Submit Success！"),e.dialogForm=!1,e.$emit("update")}).catch(function(t){e.$message.error(t.message)}).fin(function(){e.loading=!1}).done()}}}},629:function(e,t,o){t=e.exports=o(471)(),t.push([e.i,".updatePwd .el-dialog__header{padding:30px}.updatePwd .el-dialog__header .el-dialog__headerbtn{width:50px;height:50px;margin:-30px -30px 0 0}.updatePwd .el-dialog__body{padding:30px 50px 0 0}","",{version:3,sources:["C:/work/payrolls/src/views/operation/user/PackageItemAdd.vue"],names:[],mappings:"AACA,8BACE,YAAc,CACf,AACD,oDACE,WAAY,AACZ,YAAa,AACb,sBAAwB,CACzB,AACD,4BACE,qBAAuB,CACxB",file:"PackageItemAdd.vue",sourcesContent:["\n.updatePwd .el-dialog__header {\n  padding: 30px;\n}\n.updatePwd .el-dialog__header .el-dialog__headerbtn {\n  width: 50px;\n  height: 50px;\n  margin: -30px -30px 0 0;\n}\n.updatePwd .el-dialog__body {\n  padding: 30px 50px 0 0;\n}\n"],sourceRoot:""}])},636:function(e,t,o){var a=o(629);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(472)("aa2105c4",a,!0)},643:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"updatePwd",attrs:{title:1==e.titleShow?"add":"edit"},model:{value:e.dialogForm,callback:function(t){e.dialogForm=t},expression:"dialogForm"}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"CompanyCode:","label-width":e.formLabelWidth,required:!0}},[o("el-input",{attrs:{"auto-complete":"off",size:"small"},model:{value:e.form.CompanyCode,callback:function(t){e.form.CompanyCode="string"==typeof t?t.trim():t},expression:"form.CompanyCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Amount:","label-width":e.formLabelWidth,required:!0}},[o("el-input",{attrs:{"auto-complete":"off",size:"medium"},model:{value:e.form.Amount,callback:function(t){e.form.Amount="string"==typeof t?t.trim():t},expression:"form.Amount"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"EffectiveDate:","label-width":e.formLabelWidth}},[o("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"Select EffectiveDate"},model:{value:e.singleDate,callback:function(t){e.singleDate="string"==typeof t?t.trim():t},expression:"singleDate"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"EmpCode:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.EmpCode,callback:function(t){e.form.EmpCode="string"==typeof t?t.trim():t},expression:"form.EmpCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"FullChineseName:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.FullChineseName,callback:function(t){e.form.FullChineseName="string"==typeof t?t.trim():t},expression:"form.FullChineseName"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Function:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.Function,callback:function(t){e.form.Function="string"==typeof t?t.trim():t},expression:"form.Function"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"PackageItemUid:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.PackageItemUid,callback:function(t){e.form.PackageItemUid="string"==typeof t?t.trim():t},expression:"form.PackageItemUid"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"PackageUid:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.PackageUid,callback:function(t){e.form.PackageUid="string"==typeof t?t.trim():t},expression:"form.PackageUid"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"Templatecode:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.Templatecode,callback:function(t){e.form.Templatecode="string"==typeof t?t.trim():t},expression:"form.Templatecode"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogForm=!1}}},[e._v("Cancel")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("Submit")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=20.e07b80136224f05c04c1.js.map