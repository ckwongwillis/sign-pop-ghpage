(this["webpackJsonpsign-popup-ghpage"]=this["webpackJsonpsign-popup-ghpage"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),l=a.n(i),o=(a(24),a(9)),c=a.n(o),s=a(12),u=a(3),d=a(4),m=a(7),p=a(17),g=a(15),v=(a(26),a(27),a(28),a(29),a(30),a(31),a(6)),h=a(13),b=a(16),f=a(14),E=function(e){Object(p.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).savePNG1=function(){if(n.signaturePad1.isEmpty())alert("Please provide a signature first.");else{var e=n.signaturePad1.toDataURL();console.log(e),console.log(String(e).length),n.download(e,"signature.png")}},n.resetSign1=function(){n.signaturePad1.clear()},n.savePNG2=function(){if(n.signaturePad2.isEmpty())alert("Please provide a signature first.");else{var e=n.signaturePad2.toDataURL();console.log(e),console.log(String(e).length),n.download(e,"signature.png")}},n.resetSign2=function(){n.signaturePad2.clear()},n.download=function(e,t){var a=n.dataURLToBlob(e),r=window.URL.createObjectURL(a),i=document.createElement("a");i.style="display: none",i.href=r,i.download=t,document.body.appendChild(i),i.click(),window.URL.revokeObjectURL(r)},n.dataURLToBlob=function(e){for(var t=e.split(";base64,"),a=t[0].split(":")[1],n=window.atob(t[1]),r=n.length,i=new Uint8Array(r),l=0;l<r;++l)i[l]=n.charCodeAt(l);return new Blob([i],{type:a})},n.state={visibleFullScreen1:!1,visibleFullScreen2:!1},n.myUploader=n.myUploader.bind(Object(m.a)(n)),n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,t=Math.max(window.devicePixelRatio||1,1),a=document.getElementById("canvas1");a.width=a.offsetWidth*t,a.height=a.offsetHeight*t,a.getContext("2d").scale(t,t),this.signaturePad1=new b.a(a),window.addEventListener("orientationchange",(function(){return e.setState({visibleFullScreen1:!1})}),!1)}},{key:"myUploader",value:function(){var e=Object(s.a)(c.a.mark((function e(t){var a,n,r=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.files[0].objectURL).then((function(e){return e.blob()}));case 2:return a=e.sent,(n=new FileReader).onload=function(e){var t=e.target.result;r.signaturePad1.clear(),r.signaturePad1.fromDataURL(t)},n.readAsDataURL(a),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Sign PopUp v1.2"),r.a.createElement("h3",null,"Please input the following information and sign your name below: "),r.a.createElement("p",null,"First Name: ",r.a.createElement("input",{type:"text"}),r.a.createElement("br",null),"Last Name: ",r.a.createElement("input",{type:"text"}),r.a.createElement("br",null),"Phone No: ",r.a.createElement("input",{type:"text"})),r.a.createElement("div",null,"Sign:",r.a.createElement("br",null),r.a.createElement(h.Sidebar,{visible:this.state.visibleFullScreen1,fullScreen:!0,baseZIndex:1e6,onHide:function(){return e.setState({visibleFullScreen1:!1})},showCloseIcon:!1},r.a.createElement("div",{className:"outer"},r.a.createElement("div",{className:"middle"},r.a.createElement("div",{id:"signature-pad",className:"signature-pad"},r.a.createElement("div",{className:"signature-pad--actions"},r.a.createElement("div",null,r.a.createElement(f.FileUpload,{mode:"basic",className:"upload",maxFileSize:1e6,onSelect:this.myUploader,accept:"image/*",auto:!0})),r.a.createElement("div",null,r.a.createElement(v.Button,{type:"button",onClick:this.savePNG1,label:"Save",className:"p-button-success",style:{marginRight:".25em"}}),r.a.createElement(v.Button,{label:"Clear",className:"p-button-secondary",onClick:this.resetSign1}),r.a.createElement(v.Button,{type:"button",onClick:function(){return e.setState({visibleFullScreen1:!1})},label:"X",className:"p-button-danger"}))),r.a.createElement("div",{className:"signature-pad--body"},r.a.createElement("canvas",{id:"canvas1"})),r.a.createElement("div",{className:"signature-pad--footer"},r.a.createElement("div",{className:"description"},"Sign above")))))),r.a.createElement(v.Button,{icon:"pi pi-th-large",label:"Landscape/Portrait",onClick:function(){return e.setState({visibleFullScreen1:!0})},style:{marginRight:".25em"}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c34da27f.chunk.js.map