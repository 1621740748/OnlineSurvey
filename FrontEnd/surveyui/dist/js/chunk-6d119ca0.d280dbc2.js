(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d119ca0"],{"11fb":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"survey"},[n("my-table",{attrs:{data:t.tableData},on:{page:t.surveyPageQuery,check:t.handleCheck,delete:t.handleDelete,visibility:t.handleVisibility,mulitOpen:t.handleMulitOpen,mulitBan:t.handleMulitBan,mulitDel:t.handleMulitDel}})],1)},a=[],o=(n("99af"),n("4160"),n("159b"),n("7a4d")),r=[{label:"ID",prop:"id",width:"85",align:"left",fixed:"left"},{label:"问卷标题",prop:"title",width:"265",align:"left"},{label:"简介",prop:"introduction",width:"160",align:"left"},{label:"总题数",prop:"number",width:"45"},{label:"总用时",prop:"totalTime",width:"45"},{label:"创建时间",prop:"createdDate",width:"110"},{label:"修改时间",prop:"updateDate",width:"110"},{label:"创建者",prop:"creator",width:"85"},{label:"发布状态(暂停0/回收1)",prop:"status",width:"95"},{label:"问卷状态 (正常/封禁)",prop:"visibility",width:"95",switch:!0,emit:"visibility"}],s=n("e8ff"),c=n("1287"),l=n("4328"),u=n.n(l),d={data:function(){return{tableData:{cols:r,rowData:[],pageinfo:c["a"],toolbar:s["a"],searchFilterConfig:{isSearch:!0,placeholder:"搜索ID、问卷标题、简介",filters:["id","title","introduction"]},isOperation:!0,operation:{label:"操作选项",width:"185",data:[{label:"查看",type:"primary",emit:"check"},{label:"删除",type:"danger",emit:"delete"}]}}}},components:{MyTable:o["a"]},methods:{handleVisibility:function(t){var e=this;1===t.row.visibility?t.row.visibility=0:t.row.visibility=1;var n=1===t.row.visibility?"确定要将 <strong>问卷ID前6位: ".concat(t.row.id.substring(0,6),", <br>问卷标题: ").concat(t.row.title,'</strong> 的问卷<strong style="color:#ff6161">封禁</strong>吗？'):"确定要将 <strong>问卷ID前6位: ".concat(t.row.id.substring(0,6),", <br>问卷标题: ").concat(t.row.title,'</strong> 的问卷<strong style="color:#ff6161">恢复正常</strong>吗？');this.$confirm(n,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then((function(){var n={};n.id=t.row.id,n.visibility=1===t.row.visibility?0:1,e.$http.post("survey/visibility",[n]).then((function(){1===t.row.visibility?t.row.visibility=0:t.row.visibility=1,e.$message({message:"问卷ID: ".concat(t.row.id," 已处理"),type:"success"})})).catch((function(){e.$message({message:"操作失败",type:"error"})}))}))},handleMulitOpen:function(t){var e=this;this.$confirm('确定要将这 <strong style="color:#ff6161">'.concat(t.length," 份问卷</strong> 恢复正常状态吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.forEach((function(t){t.visibility=1})),e.$http.post("survey/visibility",t).then((function(){e.$message({message:"已将这 ".concat(t.length,"份问卷 恢复正常状态"),type:"success"})})).catch((function(){e.$message({message:"操作失败",type:"error"})}))}))},handleMulitBan:function(t){var e=this;this.$confirm('确定要将这 <strong style="color:#ff6161">'.concat(t.length,"个问卷</strong> 封禁吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then((function(){t.forEach((function(t){t.visibility=0})),e.$http.post("survey/visibility",t).then((function(){e.$message({message:"已将这 ".concat(t.length,"份问卷 封禁"),type:"success"})})).catch((function(){e.$message({message:"操作失败",type:"error"})}))}))},handleDelete:function(t){var e=this;this.$confirm("确定要将 <strong>问卷ID前6位: ".concat(t.row.id.substring(0,6),", <br>问卷标题: ").concat(t.row.title,'</strong> 的问卷<strong style="color:#ff6161">删除</strong>吗？'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then((function(){var n={};n.id=t.row.id,e.$http.post("survey/mulit_delete",[n]).then((function(){e.$message({message:"已将问卷ID: ".concat(t.row.id," 的问卷删除"),type:"success"}),e.surveyPageQuery()})).catch((function(){e.$message({message:"操作失败",type:"error"})}))}))},handleMulitDel:function(t){var e=this;this.$confirm('确定要将这 <strong style="color:#ff6161">'.concat(t.length,"份问卷</strong> 永久删除吗？"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",dangerouslyUseHTMLString:!0}).then((function(){e.$http.post("survey/mulit_delete",t).then((function(){e.$message({message:"已将这 ".concat(t.length,"份问卷 删除"),type:"success"}),e.surveyPageQuery()})).catch((function(){e.$message({message:"操作失败",type:"error"})}))}))},handleCheck:function(t){window.open("".concat(this.$http.domain,"/#/answer/pc/?surveyId=").concat(t.row.id))},surveyPageQuery:function(){var t=this,e={};e.page=this.tableData.pageinfo.currentPage,e.size=this.tableData.pageinfo.pageSize,this.$http.post("survey/manage/list",u.a.stringify(e)).then((function(e){t.tableData.pageinfo.total=e.data.count,t.tableData.rowData=e.data.surveyList}))}},mounted:function(){this.surveyPageQuery()}},h=d,f=n("2877"),p=Object(f["a"])(h,i,a,!1,null,null,null);e["default"]=p.exports},1287:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={pageSizes:[10,20,30,40,50,100],pageSize:10,currentPage:1,total:0}},1292:function(t,e,n){"use strict";n("4cab")},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"4cab":function(t,e,n){},"7a4d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toolbar"},[n("div",{staticClass:"toolbar-left"},t._l(t.data.toolbar,(function(e,i){return n("el-button",{key:i,attrs:{size:"mini",icon:e.icon},on:{click:function(n){return t.handleTableData(e.emit)}}},[t._v(t._s(e.name))])})),1),n("div",{staticClass:"toolbar-right"},[t.data.searchFilterConfig.isSearch?n("el-input",{attrs:{size:"mini","suffix-icon":"el-icon-search",placeholder:t.data.searchFilterConfig.placeholder},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e()],1)]),n("el-table",{attrs:{data:t.data.rowData.filter(t.searchFilter),border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),t._l(t.data.cols,(function(e,i){return n("el-table-column",{key:i,attrs:{prop:e.prop,label:e.label,width:e.width,align:e.align||"center",fixed:e.fixed,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(i){return[e.switch?t._e():[t._v(t._s(i.row[e.prop]))],e.switch?n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff6161"},on:{change:function(n){return t.handleRowData(i.$index,i.row,e.emit)}},model:{value:i.row[e.prop],callback:function(n){t.$set(i.row,e.prop,n)},expression:"scope.row[item.prop]"}}):t._e()]}}],null,!0)})})),t.data.isOperation?n("el-table-column",{attrs:{label:t.data.operation.label,width:t.data.operation.width,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(t.data.operation.data,(function(i,a){return n("el-button",{key:a,attrs:{size:"mini",type:i.type},on:{click:function(n){return t.handleRowData(e.$index,e.row,i.emit)}}},[t._v(t._s(i.label))])}))}}],null,!1,3666907284)}):t._e()],2),n("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next, sizes, total","page-sizes":t.data.pageinfo.pageSizes,"page-size":t.data.pageinfo.pageSize,"current-page":t.data.pageinfo.currentPage,total:t.data.pageinfo.total},on:{"current-change":t.currentChange,"size-change":t.sizeChange}})],1)},a=[],o=(n("caad"),n("45fc"),n("ac1f"),n("2532"),n("841c"),{data:function(){return{search:"",multipleSelection:[]}},props:{data:{type:Object}},computed:{searchFilter:function(){var t=this;return function(e){return!t.search||t.data.searchFilterConfig.filters.some((function(n){return e[n].toLowerCase().includes(t.search.toLowerCase())}))}}},methods:{currentChange:function(t){this.data.pageinfo.currentPage=t,this.$emit("page",this.data.pageinfo)},sizeChange:function(t){this.data.pageinfo.pageSize=t,this.data.pageinfo.currentPage=1,this.$emit("page",this.data.pageinfo)},handleRowData:function(t,e,n){this.$emit(n,{index:t,row:e})},handleTableData:function(t){this.$emit(t,this.multipleSelection)},handleSelectionChange:function(t){this.multipleSelection=t}}}),r=o,s=(n("92dc"),n("1292"),n("2877")),c=Object(s["a"])(r,i,a,!1,null,"1d8d2a89",null);e["a"]=c.exports},"841c":function(t,e,n){"use strict";var i=n("d784"),a=n("825a"),o=n("1d80"),r=n("129f"),s=n("14c3");i("search",1,(function(t,e,n){return[function(e){var n=o(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var o=a(t),c=String(this),l=o.lastIndex;r(l,0)||(o.lastIndex=0);var u=s(o,c);return r(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},"92dc":function(t,e,n){"use strict";n("b67c")},b67c:function(t,e,n){},e8ff:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=[{name:"启用",icon:"el-icon-circle-check",emit:"mulitOpen"},{name:"禁用",icon:"el-icon-remove-outline",emit:"mulitBan"},{name:"删除",icon:"el-icon-circle-close",emit:"mulitDel"}]}}]);
//# sourceMappingURL=chunk-6d119ca0.d280dbc2.js.map