webpackJsonp([28],{480:function(e,o,t){t(671);var r=t(53)(t(651),t(679),null,null);e.exports=r.exports},651:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t(114),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=new a.default;o.default={data:function(){return{dialogForm:!1,formLabelWidth:"200px",disabled:!0,form:{convert_apply_id:"",self_order_num:"",platform_order_no:"",remark:"",is_succ:"1",message:""}}},methods:{showDialog:function(e){e.id?this.form.convert_apply_id=e.id:this.form.convert_apply_id="",this.form.self_order_num=e.order_bid,this.dialogForm=!0},submit:function(){var e=this;i.send(i.Apis.qutuiba.convert.confirmApply,this.form).then(function(o){e.$message.success("修改成功！")}).catch(function(o){throw e.$message.error("获取分类数据失败："+(o.message||"未知错误")),o}).done()}}}},663:function(e,o,t){o=e.exports=t(471)(),o.push([e.i,".updatePwd .radio-list{margin-left:120px}.updatePwd .el-dialog__header{padding:30px}.updatePwd .el-dialog__header .el-dialog__headerbtn{width:50px;height:50px;margin:-30px -30px 0 0}.updatePwd .el-dialog__body{padding:30px 50px 0 0}","",{version:3,sources:["C:/work/payrolls/src/views/finance/PersonDdialog.vue"],names:[],mappings:"AACA,uBACE,iBAAmB,CACpB,AACD,8BACE,YAAc,CACf,AACD,oDACE,WAAY,AACZ,YAAa,AACb,sBAAwB,CACzB,AACD,4BACE,qBAAuB,CACxB",file:"PersonDdialog.vue",sourcesContent:["\n.updatePwd .radio-list {\n  margin-left: 120px;\n}\n.updatePwd .el-dialog__header {\n  padding: 30px;\n}\n.updatePwd .el-dialog__header .el-dialog__headerbtn {\n  width: 50px;\n  height: 50px;\n  margin: -30px -30px 0 0;\n}\n.updatePwd .el-dialog__body {\n  padding: 30px 50px 0 0;\n}\n"],sourceRoot:""}])},671:function(e,o,t){var r=t(663);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);t(472)("5ce0a2a2",r,!0)},679:function(e,o){e.exports={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-dialog",{staticClass:"updatePwd",attrs:{title:"人工干预",visible:e.dialogForm},on:{"update:visible":function(o){e.dialogForm=o}}},[t("el-form",{attrs:{model:e.form}},[t("el-form-item",{attrs:{label:"自己平台订单号:","label-width":e.formLabelWidth}},[t("el-input",{attrs:{"auto-complete":"off",disabled:e.disabled},model:{value:e.form.self_order_num,callback:function(o){e.form.self_order_num=o},expression:"form.self_order_num"}})],1),e._v(" "),t("div",{staticClass:"radio-list"},[t("el-form-item",{attrs:{label:"是否成功:"}},[t("el-radio",{staticClass:"radio",attrs:{label:"1"},model:{value:e.form.is_succ,callback:function(o){e.form.is_succ=o},expression:"form.is_succ"}},[e._v("成功")]),e._v(" "),t("el-radio",{staticClass:"radio",attrs:{label:"2"},model:{value:e.form.is_succ,callback:function(o){e.form.is_succ=o},expression:"form.is_succ"}},[e._v("失败")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"第三方平台订单号:","label-width":e.formLabelWidth}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.third_order_num,callback:function(o){e.form.third_order_num=o},expression:"form.third_order_num"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"备注:","label-width":e.formLabelWidth}},[t("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.remark,callback:function(o){e.form.remark=o},expression:"form.remark"}})],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",slot:"footer"},[t("el-button",{on:{click:function(o){e.dialogForm=!1}}},[e._v("取 消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(o){e.submit()}}},[e._v("提交")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=28.ed6f9762cfa4f1ebfcfb.js.map