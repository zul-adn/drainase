(this.webpackJsonpmap=this.webpackJsonpmap||[]).push([[0],{155:function(e,a,t){},156:function(e,a,t){},234:function(e,a){},236:function(e,a){},269:function(e,a){},270:function(e,a){},318:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),i=t(23),c=t.n(i),r=(t(155),t.p,t(156),t(13)),l=t(50),d=t(146),o=t(3),j={datas:[],filter:"",openModal:!1,toShow:[],sumDatas:[],legend:[],searchMode:!1,searchData:""},m=Object(l.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"STORE_ALL_DATAS":return Object(o.a)(Object(o.a)({},e),{},{datas:a.datas});case"CHANGE_DATAS":return Object(o.a)(Object(o.a)({},e),{},{datas:a.datas,filter:a.filter});case"CHANGE_MODAL":return Object(o.a)(Object(o.a)({},e),{},{openModal:!e.openModal});case"TO_SHOW":return Object(o.a)(Object(o.a)({},e),{},{toShow:a.datas});case"CHANGE_DATAS_SUM":return Object(o.a)(Object(o.a)({},e),{},{sumDatas:a.datas});case"CREATE_LEGEND":return Object(o.a)(Object(o.a)({},e),{},{legend:a.datas});case"CHANGE_FILTER":return Object(o.a)(Object(o.a)({},e),{},{filter:a.datas});case"SEARCH_ENABLE":return Object(o.a)(Object(o.a)({},e),{},{searchData:a.datas,searchMode:!0});case"RESET":return Object(o.a)(Object(o.a)({},e),{},{searchMode:!1});default:return e}}}),h=Object(l.c)(m,Object(l.a)(d.a)),u=t(77),b=t.n(u),x=t(147),O=t(10),p=t(320),v=t(321),f=t(324),_=t(322),g=t(323),y=(t(161),t(171),t(148)),N=t.n(y),k=(t(84),t(9)),S=t(0);var w=Object(r.b)((function(e){var a=e.app;return{datas:a.datas,toShow:a.toShow}}),(function(e){return{}}))((function(e){var a=e.toShow;return Object(n.useEffect)((function(){console.log(a)}),[]),Object(S.jsxs)("div",{className:"sidebar",children:[Object(S.jsx)("div",{className:"close",onClick:function(){k.isTablet?document.querySelector(".sidebar").style.right="-700px":k.isMobile?document.querySelector(".sidebar").style.bottom="-100vh":(document.querySelector(".sidebar").style.right="-700px",document.querySelector(".legend").style.height="85vh")},children:"X"}),Object(S.jsx)("div",{className:"cor-container",children:Object(S.jsxs)(N.a,Object(o.a)(Object(o.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(S.jsx)("div",{className:"cor-item",children:Object(S.jsx)("h3",{children:"1"})}),Object(S.jsx)("div",{className:"cor-item",children:Object(S.jsx)("h3",{children:"2"})}),Object(S.jsx)("div",{className:"cor-item",children:Object(S.jsx)("h3",{children:"3"})}),Object(S.jsx)("div",{className:"cor-item",children:Object(S.jsx)("h3",{children:"4"})}),Object(S.jsx)("div",{className:"cor-item",children:Object(S.jsx)("h3",{children:"5"})}),Object(S.jsx)("div",{className:"cor-item",children:Object(S.jsx)("h3",{children:"6"})})]}))}),Object(S.jsxs)("div",{className:"content-sidebar",children:[Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Nama Jaringan"}),Object(S.jsx)("div",{children:a.name})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Tipe Saluran"}),Object(S.jsx)("div",{children:a.tipe_saluran})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Panjang"}),Object(S.jsxs)("div",{children:[a.panjang," m"]})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Konstruksi"}),Object(S.jsx)("div",{children:a.konstruksi})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Kondisi Konstruksi "}),Object(S.jsx)("div",{children:a.kondisi})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Kondisi Saluran "}),Object(S.jsx)("div",{children:a.kondisi_saluran})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Lebar Atas "}),Object(S.jsxs)("div",{children:[a.lebar_atas," m"]})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Lebar Bawah "}),Object(S.jsxs)("div",{children:[a.lebar_bawah," m"]})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Kedalaman "}),Object(S.jsxs)("div",{children:[a.kedalaman," m"]})]}),Object(S.jsxs)("div",{className:"toshow",children:[Object(S.jsx)("div",{children:"Catatan "}),Object(S.jsx)("div",{children:a.catatan})]})]})]})})),I=t(149),C=t(78),E=t.n(C),D=t.p+"static/media/pie-chart.02975392.svg",M=t.p+"static/media/file.8fa05ea9.svg",A=t.p+"static/media/recycle.11bff4b9.svg",T=t(49),L=t.n(T);L.a.ExcelFile,L.a.ExcelFile.ExcelSheet,L.a.ExcelFile.ExcelColumn;var z=Object(r.b)((function(e){return{datas:e.app.datas}}),(function(e){return{resetSearch:function(){return e({type:"RESET"})}}}))((function(e){e.datas;var a=e.resetSearch;return s.a.useEffect((function(){})),Object(S.jsxs)("div",{className:"btn-control",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:D,onClick:function(){k.isTablet?(document.querySelector(".close-chart").style.display="flex",document.querySelector(".chart").style.display="block"):(k.isMobile,document.querySelector(".close-chart").style.display="flex",document.querySelector(".chart").style.display="block")}}),Object(S.jsx)("span",{children:"Data View"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:M,onClick:function(){alert("HELLO")}}),Object(S.jsx)("span",{children:"Excel"})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:A,onClick:function(){a()}}),Object(S.jsx)("span",{children:"Reset"})]})]})}));t(316);var X=Object(r.b)((function(e){return{sumDatas:e.app.sumDatas}}),(function(e){return{}}))((function(e){var a=e.sumDatas;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"close-chart animate__animated animate__rubberBand",onClick:function(){k.isTablet?(document.querySelector(".chart").style.display="none",document.querySelector(".close-chart").style.display="none"):k.isMobile?(document.querySelector(".close-chart").style.display="none",document.querySelector(".chart").style.display="none"):(document.querySelector(".chart").style.display="none",document.querySelector(".close-chart").style.display="none")},children:"X"}),Object(S.jsxs)("div",{className:"chart",children:[Object(S.jsxs)("div",{className:"main-chart animate__animated animate__bounceInLeft",children:[Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("div",{className:"main-text",children:0!==a.length?a.total[0].total:"Loading..."}),Object(S.jsx)("div",{className:"sub-text",children:"Total panjang jaringan Kota Singkawang"})]}),Object(S.jsxs)("div",{className:"category-container-2",children:[Object(S.jsx)("div",{className:"category-item-2",children:Object(S.jsxs)("div",{className:"layer",children:[Object(S.jsx)("div",{className:"header-2",children:"Tipe Saluran"}),Object(S.jsx)("div",{className:"content-2",children:0!==a.length?a.tipe_saluran.map((function(e,a){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"main animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"sub animate__animated animate__fadeInUp animate__delay-1s",children:e.tipe_saluran})]})})):Object(S.jsx)("div",{children:"Loading"})})]})}),Object(S.jsx)("div",{className:"category-item-2",children:Object(S.jsxs)("div",{className:"layer",children:[Object(S.jsx)("div",{className:"header-2",children:"Kondisi"}),Object(S.jsx)("div",{className:"content-2",children:0!==a.length?a.kondisi.map((function(e,a){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"main animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"sub animate__animated animate__fadeInUp animate__delay-1s",children:e.kondisi})]})})):Object(S.jsx)("div",{children:"Loading"})})]})}),Object(S.jsx)("div",{className:"category-item-2",children:Object(S.jsxs)("div",{className:"layer",children:[Object(S.jsx)("div",{className:"header-2",children:"Konstruksi"}),Object(S.jsx)("div",{className:"content-2",children:0!==a.length?a.konstruksi.map((function(e,a){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"main animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"sub animate__animated animate__fadeInUp animate__delay-1s",children:e.konstruksi})]})})):Object(S.jsx)("div",{children:"Loading"})})]})}),Object(S.jsx)("div",{className:"category-item-2",children:Object(S.jsxs)("div",{className:"layer",children:[Object(S.jsx)("div",{className:"header-2",children:"Kondisi Saluran"}),Object(S.jsx)("div",{className:"content-2",children:0!==a.length?a.kondisi_saluran.map((function(e,a){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{className:"main animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"sub animate__animated animate__fadeInUp animate__delay-1s",children:e.kondisi_saluran})]})})):Object(S.jsx)("div",{children:"Loading"})})]})})]})]}),Object(S.jsx)("div",{class:"category-container animate__animated animate__fadeInUp",children:0!==a.length?a.all.map((function(e,a){return Object(S.jsxs)("div",{class:"category-item",children:[Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("div",{className:"main animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"sub animate__animated animate__fadeInUp animate__delay-1s",children:e.nama_jaringan})]}),Object(S.jsxs)("div",{className:"content-wrapper",children:[Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("div",{className:"title",children:"Tipe Saluran"}),Object(S.jsx)("div",{className:"content-2",children:e.tipe_saluran.map((function(e,a){return Object(S.jsxs)("div",{className:"content-3",children:[Object(S.jsx)("div",{className:"angka animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"ket animate__animated animate__fadeInUp animate__delay-1s",children:e.tipe_saluran})]})}))})]}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("div",{className:"title",children:"Kondisi"}),Object(S.jsx)("div",{className:"content-2",children:e.kondisi.map((function(e,a){return Object(S.jsxs)("div",{className:"content-3",children:[Object(S.jsx)("div",{className:"angka animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"ket animate__animated animate__fadeInUp animate__delay-1s",children:e.kondisi})]})}))})]}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("div",{className:"title",children:"Konstruksi"}),Object(S.jsx)("div",{className:"content-2",children:e.konstruksi.map((function(e,a){return Object(S.jsxs)("div",{className:"content-3",children:[Object(S.jsx)("div",{className:"angka animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"ket animate__animated animate__fadeInUp animate__delay-1s",children:e.konstruksi})]})}))})]}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("div",{className:"title",children:"Kondisi Saluran"}),Object(S.jsx)("div",{className:"content-2",children:e.kondisi_saluran.map((function(e,a){return Object(S.jsxs)("div",{className:"content-3",children:[Object(S.jsx)("div",{className:"angka animate__animated animate__flipInX animate__delay-1s",children:e.panjang}),Object(S.jsx)("div",{className:"ket animate__animated animate__fadeInUp animate__delay-1s",children:e.kondisi_saluran})]})}))})]})]})]})})):Object(S.jsx)("div",{children:"Loading"})})]})]})}));var J=Object(r.b)((function(e){var a=e.app;return{legend:a.legend,filter:a.filter,sumDatas:a.sumDatas,datas:a.datas}}),(function(e){return{changeFilter:function(a){return e(function(e){return{type:"CHANGE_FILTER",datas:e}}(a))},searchMode:function(a){return e(function(e){return{type:"SEARCH_ENABLE",datas:e}}(a))}}}))((function(e){var a=e.changeFilter,t=e.filter,n=e.legend,s=(e.sumDatas,e.datas,e.searchMode),i=function(e){console.log(e),a(e)},c=function(){return"kondisi"===t?Object(S.jsx)(S.Fragment,{children:0!==n.length?n.kondisi.map((function(e,a){return Object(S.jsxs)("div",{className:"legend-item",children:[Object(S.jsxs)("div",{children:[" ",e.name," "]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(S.jsx)("div",{style:{width:"80%",height:4,backgroundColor:e.color}})})]})})):Object(S.jsx)("span",{children:"Loading ..."})}):"jaringan"===t?Object(S.jsx)(S.Fragment,{children:0!==n.length?n.jaringan.map((function(e,a){return Object(S.jsxs)("div",{className:"legend-item hover",onClick:function(){return a=e.name,void s(a);var a},children:[Object(S.jsxs)("div",{children:[" ",e.name," "]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(S.jsx)("div",{style:{width:"80%",height:4,backgroundColor:e.color}})})]})})):Object(S.jsx)("span",{children:"Loading ..."})}):"tipe_saluran"===t?Object(S.jsx)(S.Fragment,{children:0!==n.length?n.tipe_saluran.map((function(e,a){return Object(S.jsxs)("div",{className:"legend-item",children:[Object(S.jsxs)("div",{children:[" ",e.name," "]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(S.jsx)("div",{style:{width:"80%",height:4,backgroundColor:e.color}})})]})})):Object(S.jsx)("span",{children:"Loading ..."})}):"konstruksi"===t?Object(S.jsx)(S.Fragment,{children:0!==n.length?n.konstruksi.map((function(e,a){return Object(S.jsxs)("div",{className:"legend-item",children:[Object(S.jsxs)("div",{children:[" ",e.name," "]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(S.jsx)("div",{style:{width:"80%",height:4,backgroundColor:e.color}})})]})})):Object(S.jsx)("span",{children:"Loading ..."})}):"kondisi_saluran"===t?Object(S.jsx)(S.Fragment,{children:0!==n.length?n.kondisi_saluran.map((function(e,a){return Object(S.jsxs)("div",{className:"legend-item",children:[Object(S.jsxs)("div",{children:[" ",e.name," "]}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(S.jsx)("div",{style:{width:"80%",height:4,backgroundColor:e.color}})})]})})):Object(S.jsx)("span",{children:"Loading ..."})}):Object(S.jsxs)("div",{className:"legend-item",children:[Object(S.jsx)("div",{children:" Drainase Kota Singkawang "}),Object(S.jsx)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:Object(S.jsx)("div",{style:{width:"80%",height:4,backgroundColor:"blue"}})})]})};return Object(S.jsxs)("div",{className:"legend",children:[Object(S.jsx)("div",{className:"header",children:Object(S.jsx)("span",{children:"Legenda"})}),Object(S.jsxs)("div",{className:"button",children:[Object(S.jsx)("div",{onClick:function(){return i("jaringan")},children:Object(S.jsx)("span",{children:"Jaringan"})}),Object(S.jsx)("div",{onClick:function(){return i("tipe_saluran")},children:Object(S.jsx)("span",{children:"Tipe Saluran"})}),Object(S.jsx)("div",{onClick:function(){return i("kondisi")},children:Object(S.jsx)("span",{children:"Kondisi"})}),Object(S.jsx)("div",{onClick:function(){return i("konstruksi")},children:Object(S.jsx)("span",{children:"Konstruksi"})}),Object(S.jsx)("div",{onClick:function(){return i("kondisi_saluran")},children:Object(S.jsx)("span",{children:"Kondisi Saluran"})})]}),Object(S.jsx)("div",{className:"content",children:Object(S.jsx)(c,{})})]})})),Y=(t(317),t(15),t.p+"static/media/citra.8f8c1291.PNG"),q=t.p+"static/media/street.a0c65420.PNG";var F=Object(r.b)((function(e){var a=e.app;return{datas:a.datas,openModal:a.openModal,sumDatas:a.sumDatas,filter:a.filter,legend:a.legend,searchMode:a.searchMode,searchData:a.searchData}}),(function(e){return{getAllDatas:function(){return e((function(e){E.a.get("https://dinartech.com/drainase/public/api/getpolyline").then((function(a){e({type:"STORE_ALL_DATAS",datas:a.data}),a.data,Object(I.a)("data")})).catch((function(e){console.log(e)}))}))},getSumDatas:function(){return e((function(e){E.a.get("https://dinartech.com/drainase/public/api/getpolylinesum").then((function(a){e({type:"CHANGE_DATAS_SUM",datas:a.data});var t=[],n=[],s=[],i=[],c=[];0!==a.data.length&&(a.data.kondisi.map((function(e,a){return t.push({name:e.kondisi,color:"#"+Math.floor(16777215*Math.random()).toString(16)})})),a.data.konstruksi.map((function(e,a){return n.push({name:e.konstruksi,color:"#"+Math.floor(16777215*Math.random()).toString(16)})})),a.data.tipe_saluran.map((function(e,a){return s.push({name:e.tipe_saluran,color:"#"+Math.floor(16777215*Math.random()).toString(16)})})),a.data.kondisi_saluran.map((function(e,a){return i.push({name:e.kondisi_saluran,color:"#"+Math.floor(16777215*Math.random()).toString(16)})})),a.data.jaringan.map((function(e,a){return c.push({name:e.name,color:"#"+Math.floor(16777215*Math.random()).toString(16)})})),e({type:"CREATE_LEGEND",datas:{kondisi:t,konstruksi:n,tipe_saluran:s,kondisi_saluran:i,jaringan:c}}))})).catch((function(e){console.log(e)}))}))},toShow:function(a){return e(function(e){return{type:"TO_SHOW",datas:e}}(a))}}}))((function(e){var a=e.searchData,t=e.searchMode,i=e.datas,c=e.filter,r=e.openModal,l=e.getAllDatas,d=e.getSumDatas,o=e.toShow,j=(e.sumDatas,e.legend),m=Object(n.useState)(r),h=Object(O.a)(m,2),u=(h[0],h[1],Object(n.useState)([.886691,108.9576699])),y=Object(O.a)(u,2),N=y[0],I=(y[1],Object(n.useState)(11)),C=Object(O.a)(I,2),E=(C[0],C[1],Object(n.useState)(!0)),D=Object(O.a)(E,2),M=D[0],A=D[1],T=Object(n.useState)("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw"),L=Object(O.a)(T,2),F=(L[0],L[1]),H=s.a.createRef();Object(n.useEffect)((function(){K()}),[]);var K=function(){var e=Object(x.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return e.next=4,d();case 4:console.log(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(e){var n,s;if(0===j.length)return{color:"#fdcb6e"};if("kondisi"===c)t?j.kondisi.map((function(t,i){e.name===a?e.kondisi===t.name&&(n=t.color,s=3):(n=t.color,s=0)})):j.kondisi.map((function(a,t){e.kondisi===a.name&&(n=a.color,s=3)}));else if("konstruksi"===c)t?j.konstruksi.map((function(t,i){e.name===a?e.konstruksi===t.name&&(n=t.color,s=3):(n=t.color,s=0)})):j.konstruksi.map((function(a,t){e.konstruksi===a.name&&(n=a.color,s=3)}));else if("tipe_saluran"===c)t?j.tipe_saluran.map((function(t,i){e.name===a?e.tipe_saluran===t.name&&(n=t.color,s=3):(n=t.color,s=0)})):j.tipe_saluran.map((function(a,t){e.tipe_saluran===a.name&&(n=a.color,s=3)}));else if("kondisi_saluran"===c)t?j.kondisi_saluran.map((function(t,i){e.name===a?e.kondisi_saluran===t.name&&(n=t.color,s=3):(n=t.color,s=0)})):j.kondisi_saluran.map((function(a,t){e.kondisi_saluran===a.name&&(n=a.color,s=3)}));else{if("jaringan"!==c)return{color:"#fdcb6e"};t?j.jaringan.map((function(t,i){e.name===a?e.name===t.name&&(n=t.color,s=3):(n=t.color,s=0)})):j.jaringan.map((function(a,t){e.name===a.name&&(n=a.color,s=3)}))}return{color:n,weight:s}};return Object(S.jsxs)("div",{children:[Object(S.jsx)(w,{}),Object(S.jsx)(X,{}),k.isDesktop?Object(S.jsx)(J,{}):"",Object(S.jsxs)(p.a,{ref:H,className:"sidebar-map",center:N,zoom:12,scrollWheelZoom:!0,style:r?{height:"100vh",width:"100vw",zIndex:-1}:{height:"100vh",width:"100vw",zIndex:1},children:[Object(S.jsxs)(v.a,{position:"bottomleft",children:[Object(S.jsx)(v.a.BaseLayer,{checked:!M,name:"Sattelite",children:Object(S.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw"})}),Object(S.jsx)(v.a.BaseLayer,{checked:M,name:"OpenStreetMap.BlackAndWhite",children:Object(S.jsx)(f.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw"})})]}),Object(S.jsx)(_.a,{ref:H,children:i.map((function(e,a){return Object(S.jsx)(g.a,{style:""!==c?Z(e):{color:"blue"},data:JSON.parse(e.json).features,onEachFeature:function(a,t){t.on("click",(function(a){o(e),k.isTablet?document.querySelector(".sidebar").style.right="20px":k.isMobile?document.querySelector(".sidebar").style.bottom="0":(document.querySelector(".sidebar").style.right="25px",document.querySelector(".legend").style.height="18vh")})),t.on("mouseover",(function(e){e.target.setStyle({weight:7})})),t.on("mouseout",(function(e){e.target.setStyle({weight:3})}))}},a)}))})]}),Object(S.jsx)("div",{className:"changemapstyle",onClick:function(){A(!M),F(M?"https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw":"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGluYXJ0ZWNoIiwiYSI6ImNrcDV0Ym1xaDA3dTIzMW5zaXJsbmViNmwifQ.CuHZsA_wzhmanNCIs5jYEw")},children:Object(S.jsx)("img",{src:M?Y:q})}),Object(S.jsx)(z,{})]})}));var H=function(){return Object(S.jsx)(r.a,{store:h,children:Object(S.jsx)(F,{})})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,325)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(H,{})}),document.getElementById("root")),K()},84:function(e,a,t){}},[[318,1,2]]]);
//# sourceMappingURL=main.3ee8cd73.chunk.js.map