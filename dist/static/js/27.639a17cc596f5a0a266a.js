webpackJsonp([27],{482:function(e,t,l){var o=l(53)(l(638),l(677),null,null);e.exports=o.exports},638:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(114),i=function(e){return e&&e.__esModule?e:{default:e}}(o),a=new i.default;t.default={data:function(){return{form:{name:"",title:"",value:"",type:""},rules:{title:[{required:!0,message:"请输入名称",trigger:"blur"}]},dialogFormVisible:!1,loading:!1}},methods:{showDialog:function(e){console.log(e),e&&(this.form={name:e.name,value:e.value,type:e.type,title:e.title}),this.dialogFormVisible=!0},hideDialog:function(){this.dialogFormVisible=!1},dialogSetting:function(){var e=this;this.$refs.dialogForm.validate(function(t){t&&a.send(a.Apis.qutuiba.config.modify,e.form).then(function(t){e.$message({type:"success",message:"修改成功"}),e.$emit("refersh"),e.hideDialog()})})}}}},677:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"配置"},model:{value:e.dialogFormVisible,callback:function(t){e.dialogFormVisible=t},expression:"dialogFormVisible"}},[l("el-form",{ref:"dialogForm",attrs:{model:e.form,"label-position":"top",rules:e.rules,"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称:",prop:"title"}},[l("el-input",{model:{value:e.form.title,callback:function(t){e.form.title=t},expression:"form.title"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"类型:"}},[l("el-select",{model:{value:e.form.type,callback:function(t){e.form.type=t},expression:"form.type"}},[l("el-option",{attrs:{label:"默认",value:""}}),e._v(" "),l("el-option",{attrs:{label:"json",value:"json"}}),e._v(" "),l("el-option",{attrs:{label:"html",value:"html"}})],1)],1)],1),e._v(" "),l("div",{staticClass:"dialog-footer",slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.dialogSetting}},[e._v("确 定")])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=27.639a17cc596f5a0a266a.js.map