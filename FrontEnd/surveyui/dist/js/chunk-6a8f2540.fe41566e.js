(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a8f2540"],{"37b7":function(t,e,s){"use strict";s("5ede")},"5ede":function(t,e,s){},"9f2f":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"publish"},[s("div",{staticClass:"card"},[s("el-row",{attrs:{gutter:10}},[s("el-col",{attrs:{span:16}},[s("el-card",{staticStyle:{"margin-bottom":"10px"}},[s("div",{staticClass:"share-card"},[s("h3",[t._v("问卷链接")]),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:5}},[s("div",{staticClass:"qrcode",staticStyle:{width:"106.2px",height:"106.2px",background:"#333"}},[s("el-image",{staticStyle:{width:"106.2px",height:"106.2px"},attrs:{src:t.imageQRCode,fit:"cover"}})],1)]),s("el-col",{attrs:{span:16}},[s("div",{staticClass:"copy-text-input"},[s("el-input",{ref:"input",staticStyle:{"margin-bottom":"25px"},model:{value:t.surveyUrl,callback:function(e){t.surveyUrl=e},expression:"surveyUrl"}},[s("el-button",{staticClass:"btn",attrs:{slot:"append"},on:{click:function(e){return t.copyLink()}},slot:"append"},[t._v("复制")])],1),s("el-link",{staticStyle:{"margin-right":"20px"},attrs:{underline:!1,href:t.imageQRCode,download:"qrcode.png"}},[s("el-button",{attrs:{plain:""}},[t._v("下载二维码")])],1),s("el-button",{attrs:{plain:""},on:{click:function(e){t.wechatDialogVisible=!0}}},[t._v("分享到微信朋友圈")])],1)]),s("el-col",{attrs:{span:3}},[s("el-button",{staticClass:"button",attrs:{plain:""},on:{click:function(e){return t.openSurvey()}}},[t._v("打开")])],1)],1)],1)]),s("el-card",{staticStyle:{height:"329px"}},[s("div",{staticClass:"setting-card"},[s("h3",[t._v("回收设置")]),s("el-switch",{attrs:{"active-text":"设定问卷结束时间","active-value":1,"inactive-value":0},on:{change:t.setEndAnswerDate},model:{value:t.endDateSetting,callback:function(e){t.endDateSetting=e},expression:"endDateSetting"}}),s("p",{directives:[{name:"show",rawName:"v-show",value:t.endDateSetting,expression:"endDateSetting"}]},[s("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},on:{change:t.setEndAnswerDate},model:{value:t.enAnDate,callback:function(e){t.enAnDate=e},expression:"enAnDate"}})],1)],1)])],1),s("el-col",{attrs:{span:8}},[s("el-card",{staticClass:"preview-card"},[s("div",{staticClass:"mobile-preview"},[s("iframe",{attrs:{id:"preview_mobile_iframe",src:t.surveyUrl+"&noAddVisits=true",frameborder:"0"}})])])],1)],1)],1),s("el-dialog",{attrs:{title:"扫码分享问卷",width:"580px",visible:t.wechatDialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1,"append-to-body":""},on:{"update:visible":function(e){t.wechatDialogVisible=e}}},[s("div",{staticStyle:{"text-align":"center"}},[s("p",[t._v("微信扫一扫二维码，点击右上角分享该问卷")]),s("el-image",{staticStyle:{width:"200px",height:"200px"},attrs:{src:t.imageQRCode,fit:"cover"}})],1),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{type:"primary"},on:{click:function(e){t.wechatDialogVisible=!1}}},[t._v("关闭")])],1)])],1)},a=[],i=(s("99af"),s("4328")),r=s.n(i),o={data:function(){return{surveyId:"",surveyUrl:"",msg:"",imageQRCode:"",endDateSetting:0,enAnDate:null,wechatDialogVisible:!1}},methods:{openSurvey:function(){window.open(this.surveyUrl)},copyLink:function(){this.$refs.input.select(),document.execCommand("copy")?this.$message({message:'<strong style="color:#333">复制成功</strong>',dangerouslyUseHTMLString:!0,iconClass:" ",center:!0,duration:1e3,offset:68,customClass:"center-msgbox"}):this.$message({message:'<strong style="color:#333">复制失败</strong>',dangerouslyUseHTMLString:!0,iconClass:" ",center:!0,duration:1e3,offset:68,customClass:"center-msgbox"})},getSurveyQRCode:function(){var t=this,e={};e.surveyUrl=this.surveyUrl+"&qrcode=true",this.$http.post("publish/getQRCode",r.a.stringify(e)).then((function(e){t.imageQRCode=e.data}))},setEndAnswerDate:function(){var t=this,e={};if(e.id=this.surveyId,e.enHandle=this.endDateSetting,1==this.endDateSetting){if(null==this.enAnDate)return;e.enAnDate=new Date(this.enAnDate).format("yyyy-MM-dd hh:mm:ss")}this.$http.post("save/survey/info",e).then((function(){t.$message({message:'<strong style="color:#333">设置已生效</strong>',dangerouslyUseHTMLString:!0,iconClass:" ",center:!0,duration:1e3,offset:68,customClass:"center-msgbox"})}))},getSurveyStatus:function(){var t=this;this.$http.get("survey/status/".concat(this.surveyId)).then((function(e){t.endDateSetting=e.data.enHandle,t.enAnDate=e.data.enAnDate}))}},mounted:function(){this.surveyId=this.$route.query.surveyId,this.surveyUrl="".concat(this.$http.domain,"/#/answer/pc/?surveyId=").concat(this.surveyId),this.getSurveyQRCode(),this.getSurveyStatus()}},l=o,c=(s("37b7"),s("2877")),u=Object(c["a"])(l,n,a,!1,null,"73d2b740",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6a8f2540.fe41566e.js.map