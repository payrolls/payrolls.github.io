webpackJsonp([18],{474:function(e,t,o){o(630);var a=o(53)(o(617),o(637),null,null);e.exports=a.exports},614:function(e,t,o){"use strict";function a(e){return(e>9?"":"0")+e}function n(e){var t=e.getFullYear(),o=e.getMonth()+1,n=e.getDate();return[t,a(o),a(n)].join("/")}e.exports=function(e){var t=new Date;if("number"==typeof e){return n(new Date(t.getTime()+864e5*e))}return n(t)}},617:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(614),i=(a(n),o(114)),r=a(i),l=new r.default;t.default={data:function(){return{type:[{name:"Daily",value:"0"},{name:"Weekly",value:"1"},{name:"Monthly",value:"2"},{name:"Annual",value:"3"}],dialogForm:!1,formLabelWidth:"200px",form:{type:"0",periodCode:"",companyCode:"",startDate:""}}},computed:{singleDate:{set:function(e){this.form.startDate=this.formatDate(e)},get:function(){return this.form.startDate}}},mounted:function(){},methods:{formatDate:function(e){var t=new Date(e),o=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return[o,this.addZero(a),this.addZero(n)].join("/")},addZero:function(e){return(e>9?"":"0")+e},showDialog:function(){this.dialogForm=!0},showInfoDialog:function(){this.form.type="",this.form.periodCode="",this.form.companyCode="",this.form.startDate="",this.dialogForm=!0},submit:function(){var e=this;this.$updateRouter(this.form);var t=Object.assign({},this.form);l.send(l.Apis.qutuiba.cdn.newperiod,t).then(function(t){e.$message.success("Submit Success！"),e.$emit("update")}).catch(function(t){e.$message.error(""+(t.message||"Unknown error"))}).fin(function(){e.loading=!1}).done(),this.dialogForm=!1}}}},623:function(e,t,o){t=e.exports=o(471)(),t.push([e.i,".updatePwd .el-dialog__header{padding:30px}.updatePwd .el-dialog__header .el-dialog__headerbtn{width:50px;height:50px;margin:-30px -30px 0 0}.updatePwd .el-dialog__body{padding:30px 50px 0 0}","",{version:3,sources:["C:/work/payrolls/src/views/global/Period.vue"],names:[],mappings:"AACA,8BACE,YAAc,CACf,AACD,oDACE,WAAY,AACZ,YAAa,AACb,sBAAwB,CACzB,AACD,4BACE,qBAAuB,CACxB",file:"Period.vue",sourcesContent:["\n.updatePwd .el-dialog__header {\n  padding: 30px;\n}\n.updatePwd .el-dialog__header .el-dialog__headerbtn {\n  width: 50px;\n  height: 50px;\n  margin: -30px -30px 0 0;\n}\n.updatePwd .el-dialog__body {\n  padding: 30px 50px 0 0;\n}\n"],sourceRoot:""}])},630:function(e,t,o){var a=o(623);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(472)("53ec5f73",a,!0)},637:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{staticClass:"updatePwd",attrs:{title:"Add Period",visible:e.dialogForm},on:{"update:visible":function(t){e.dialogForm=t}}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"PeriodType:","label-width":e.formLabelWidth}},[o("el-select",{attrs:{size:"small",placeholder:"Please choose"},model:{value:e.form.type,callback:function(t){e.form.type=t},expression:"form.type"}},e._l(e.type,function(e,t){return o("el-option",{key:t,attrs:{label:e.name,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"periodCode:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.periodCode,callback:function(t){e.form.periodCode=t},expression:"form.periodCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"companyCode:","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.companyCode,callback:function(t){e.form.companyCode=t},expression:"form.companyCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"startDate:","label-width":e.formLabelWidth}},[o("el-date-picker",{attrs:{size:"small",type:"date",placeholder:"select startDate"},model:{value:e.singleDate,callback:function(t){e.singleDate=t},expression:"singleDate"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogForm=!1}}},[e._v("Cancel")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submit()}}},[e._v("Submit")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=18.dff68403b7ef654156ec.js.map