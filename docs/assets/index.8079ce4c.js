import{o as b,c as y,a as n,w as G,v as L,b as c,d as $,u as l,N as I,e as F,F as B,t as w,r as W,f as E,n as P,g as q,h as H,i as k,j as A,k as O,l as j,m as D,p as J}from"./vendor.b592dbf4.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function d(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerpolicy&&(p.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?p.credentials="include":a.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(a){if(a.ep)return;a.ep=!0;const p=d(a);fetch(a.href,p)}};X();var z="/assets/loading.63f665bf.svg";const M={class:"head"},K={class:"head-inner"},R=n("span",null,"\u94FE\u63A5\u5C0F\u5361\u7247",-1),Q={class:"loading"},Y=n("img",{class:"loadimg",alt:"",src:z},null,-1),Z=[Y],ee=n("div",{class:"github"},[n("a",{href:"#",target:"_blank"},"github")],-1),le=n("div",{class:"about"},"\u5173\u4E8E",-1),te={props:{loading:{default:!1}},setup(m){return(r,d)=>(b(),y("div",M,[n("div",K,[R,G(n("div",Q,Z,512),[[L,m.loading]])]),ee,le]))}};const oe={class:"tabs"},se=n("div",null,null,-1),ne={props:{modelValue:String},setup(m,{emit:r}){const d=u=>{r("update:modelValue",u)};return(u,a)=>(b(),y("div",oe,[c(l(F),{type:"card","tab-style":"min-width: 8rem;--tab-text-color-active: #409eff;",value:m.modelValue,"on-update:value":d},{default:$(()=>[c(l(I),{name:"\u666E\u901A"}),c(l(I),{name:"GitHub"})]),_:1},8,["value"]),se]))}};const ae=["for"],ie={class:"cspan"},ue={style:{width:"100%"}},re=["id","value"],f={props:{modelValue:String,hidden:{default:!1},name:{default:""},cid:{default:""},width:{default:"50%"},need:{default:!1},noinput:{default:!1}},setup(m,{emit:r}){const d=u=>{r("update:modelValue",u.target.value)};return(u,a)=>(b(),y("div",{style:P(`width: ${m.width}`),class:q(["cin",m.need!==!1?"need":""])},[m.hidden===!1?(b(),y(B,{key:0},[n("label",{for:m.name+m.cid},[n("div",ie,w(m.name),1)],8,ae),n("div",ue,[m.noinput===!1?(b(),y("input",{key:0,id:m.name+m.cid,class:"cinput",type:"text",value:m.modelValue,onInput:d},null,40,re)):W(u.$slots,"default",{key:1})])],64)):E("",!0)],6))}},de=(m,r)=>{console.log("copytext");let d=null;var u=document.createElement("input");u.setAttribute("readonly","readonly"),u.setAttribute("value",m),document.body.appendChild(u),u.select(),u.setSelectionRange(0,9999),document.execCommand("Copy"),document.execCommand("Copy")&&(r.value="\u6210\u529F",clearTimeout(d),d=setTimeout(()=>{r.value="\u590D\u5236"},500)),document.body.removeChild(u)},ce=(m,r=!1)=>{let d={"-":"--","%":"%25","&":"%26","=":"%3D","?":"%3F","\\":"%5C","#":"%23","+":"%2B"," ":"%20"};r&&(d["-"]="-");let u="";for(const a of m)u=u+(d[a]||a);return u},me=(m,r)=>{let d=localStorage.getItem("minicard")||"{}";d=JSON.parse(d);for(const a of r)d[a]=m[a];let u=JSON.stringify(d);localStorage.setItem("minicard",u)},pe=(m,r)=>{let d=localStorage.getItem("minicard");if(d==null||d.length===0)return;let u=JSON.parse(d);for(const a of r)u[a]&&(m[a]=u[a])};var _={copytext:de,format:ce,saveSet:me,readSet:pe};const fe={class:"content"},ge={class:"pic"},ve=["src"],be={class:"linkbox"},ye=["value"],_e={action:""},he={style:{display:"flex","align-items":"center"}},Ue={style:{display:"flex","align-items":"center"}},$e={style:{display:"flex","align-items":"center"}},ke={setup(m,{emit:r}){const d=_.copytext,u=_.format,a=_.saveSet,p=_.readSet;H(()=>{var o=document.getElementsByClassName("cspan");let e=o[1],s=o[10];e.style.textDecoration="underline",e.onclick=function(){window.open("https://simpleicons.org/")},s.style.textDecoration="underline",s.onclick=function(){window.open("https://c.runoob.com/front-end/59/")}});let g=["userinfo","logo","label","content","logoColor","labelColor","color","style","logoWidth","myUrl","imgBase64","imgUrl"];const V=k("\u590D\u5236"),t=A({userinfo:"userinfo",logo:"",label:"",content:"\u5185\u5BB9",logoColor:"",labelColor:"",color:"",style:"plastic",styleList:[{label:"\u5706\u89D2\u77E9\u5F62",value:"plastic"},{label:"\u793E\u4EA4\u6837\u5F0F",value:"social"},{label:"\u6241\u5E73\u5706\u89D2\u77E9\u5F62",value:"flat"},{label:"\u6241\u5E73\u76F4\u89D2\u77E9\u5F62",value:"flat-square"},{label:"\u5927\u6241\u5E73\u76F4\u89D2\u77E9\u5F62",value:"for-the-badge"}],logoWidth:"",myUrl:"",imgBase64:"",imgUrl:"https://shields.io/badge/style-plastic-green?logo=appveyor"});p(t,g);const i=()=>{console.log("copylink");let o=t.imgUrl;o=`![](${o})`,t.myUrl.length>0&&(o=`[${o}](${t.myUrl})`),console.log("s",o),d(o,V)},S=o=>{console.log("clearColor"),t[o]=""},T=(o,e=500)=>{let s=null;return function(){clearTimeout(s),s=setTimeout(()=>{o.apply(this,arguments)},e)}},N=o=>{console.log("\u751F\u6210\u5361\u7247\u94FE\u63A5");let e=`https://shields.io/badge/${u(o.content)}-${u(o.userinfo)}?`;const s=U=>{if(t[U].length>0){let C=t[U];(U==="logoColor"||U==="labelColor"||U==="color")&&C[0]==="#"&&(C=C.substring(1,C.length)),e=e+U+"="+C+"&"}};t.label.length>0&&(e=e+"label="+u(t.label,!0)+"&",s("labelColor")),s("color"),t.style!=="plastic"&&(e=e+"style="+t.style+"&"),t.imgBase64.length===0?(s("logo"),s("logoColor"),s("logoWidth")):e=e+"logo="+t.imgBase64+"&";let h=e.length;(e[h-1]==="?"||e[h-1]==="&")&&(e=e.substring(0,h-1)),t.imgUrl!==e&&(t.imgUrl=e,a(t,g),r("showLoad",!0))},x=()=>{r("showLoad",!1),setTimeout(()=>{console.log("loadImage"),r("showLoad",!1)},250)},v=T(N);return O(t,(o,e)=>{v(o)}),(o,e)=>(b(),y("div",fe,[n("div",ge,[n("img",{class:"pic-img",src:l(t).imgUrl,alt:"",onLoad:x},null,40,ve)]),n("div",be,[n("input",{class:"cinput linkurl",type:"text",value:l(t).imgUrl,disabled:""},null,8,ye),n("button",{class:"linkbtn",onClick:i},w(V.value),1)]),n("form",_e,[c(f,{need:"",name:"\u7B7E\u540D",modelValue:l(t).userinfo,"onUpdate:modelValue":e[0]||(e[0]=s=>l(t).userinfo=s)},null,8,["modelValue"]),c(f,{hidden:""}),c(f,{name:"\u56FE\u6807",modelValue:l(t).logo,"onUpdate:modelValue":e[1]||(e[1]=s=>l(t).logo=s)},null,8,["modelValue"]),c(f,{name:"\u989C\u8272",noinput:""},{default:$(()=>[n("div",he,[c(l(j),{"show-alpha":!1,value:l(t).logoColor,"onUpdate:value":e[2]||(e[2]=s=>l(t).logoColor=s)},null,8,["value"]),n("div",{class:"clearcl",onClick:e[3]||(e[3]=s=>S("logoColor"))},"X")])]),_:1}),c(f,{name:"\u6807\u7B7E",modelValue:l(t).label,"onUpdate:modelValue":e[4]||(e[4]=s=>l(t).label=s)},null,8,["modelValue"]),c(f,{name:"\u989C\u8272",noinput:""},{default:$(()=>[n("div",Ue,[c(l(j),{"show-alpha":!1,value:l(t).labelColor,"onUpdate:value":e[5]||(e[5]=s=>l(t).labelColor=s)},null,8,["value"]),n("div",{class:"clearcl",onClick:e[6]||(e[6]=s=>S("labelColor"))},"X")])]),_:1}),c(f,{name:"\u5185\u5BB9",need:"",modelValue:l(t).content,"onUpdate:modelValue":e[7]||(e[7]=s=>l(t).content=s)},null,8,["modelValue"]),c(f,{name:"\u989C\u8272",noinput:""},{default:$(()=>[n("div",$e,[c(l(j),{"show-alpha":!1,value:l(t).color,"onUpdate:value":e[8]||(e[8]=s=>l(t).color=s)},null,8,["value"]),n("div",{class:"clearcl",onClick:e[9]||(e[9]=s=>S("color"))},"X")])]),_:1}),c(f,{name:"\u6837\u5F0F",noinput:""},{default:$(()=>[c(l(D),{value:l(t).style,"onUpdate:value":e[10]||(e[10]=s=>l(t).style=s),options:l(t).styleList},null,8,["value","options"])]),_:1}),c(f,{name:"\u56FE\u6807\u5BBD\u5EA6",modelValue:l(t).logoWidth,"onUpdate:modelValue":e[11]||(e[11]=s=>l(t).logoWidth=s)},null,8,["modelValue"]),c(f,{name:"\u8D85\u94FE\u63A5",width:"100%",modelValue:l(t).myUrl,"onUpdate:modelValue":e[12]||(e[12]=s=>l(t).myUrl=s)},null,8,["modelValue"]),c(f,{name:"\u56FE\u7247base64",width:"100%",modelValue:l(t).imgBase64,"onUpdate:modelValue":e[13]||(e[13]=s=>l(t).imgBase64=s)},null,8,["modelValue"])])]))}};const Ve={class:"content"},xe={class:"pic-git"},Ce=["src"],we={class:"linkbox"},Se=["value"],Ne={class:"pic-git"},Ge=["src"],Le={class:"linkbox"},je=["value"],Te={class:"pic-git"},Ie=["src"],Be={class:"linkbox"},Ae=["value"],Oe={action:""},De={setup(m){const r=_.copytext,d=_.format,u=_.saveSet,a=_.readSet;let p=["username","project","starUrl","watchUrl","forkUrl","labelGit","styleGit"];const g=k("\u590D\u5236"),V=k("\u590D\u5236"),t=k("\u590D\u5236"),i=A({username:"torvalds",project:"linux",starUrl:"https://img.shields.io/github/stars/torvalds/linux?style=social",watchUrl:"https://img.shields.io/github/watchers/torvalds/linux?style=social",forkUrl:"https://img.shields.io/github/forks/torvalds/linux?style=social&label=Fork",labelGit:"",styleGit:"social",styleList:[{label:"\u5706\u89D2\u77E9\u5F62",value:"plastic"},{label:"\u793E\u4EA4\u6837\u5F0F",value:"social"},{label:"\u6241\u5E73\u5706\u89D2\u77E9\u5F62",value:"flat"},{label:"\u6241\u5E73\u76F4\u89D2\u77E9\u5F62",value:"flat-square"},{label:"\u5927\u6241\u5E73\u76F4\u89D2\u77E9\u5F62",value:"for-the-badge"}]});a(i,p);const N=((v,o=500)=>{let e=null;return function(){clearTimeout(e),e=setTimeout(()=>{v.apply(this,arguments)},o)}})(()=>{console.log("\u751F\u6210\u94FE\u63A5\u5361\u7247");let v=`https://img.shields.io/github/stars/${i.username}/${i.project}`,o=`https://img.shields.io/github/watchers/${i.username}/${i.project}`,e=`https://img.shields.io/github/forks/${i.username}/${i.project}`,s="",h=[];i.labelGit.length>0&&h.push("label="+d(i.labelGit,!0)),i.styleGit!=="plastic"&&h.push("style="+i.styleGit),s=h.join("&"),s.length>0&&(v=v+"?"+s,o=o+"?"+s,e=e+"?"+s),i.starUrl=v,i.watchUrl=o,i.forkUrl=e,u(i,p)});O(i,(v,o)=>{N()});const x=(v,o)=>{let e=i[v];e=`![](${e})`,console.log("\u590D\u5236",e),o===1?r(e,g):o===2?r(e,V):o===3&&r(e,t)};return(v,o)=>(b(),y("div",Ve,[n("div",xe,[n("img",{class:"pic-img",src:l(i).starUrl,alt:""},null,8,Ce)]),n("div",we,[n("input",{class:"cinput linkurl",type:"text",value:l(i).starUrl,disabled:""},null,8,Se),n("button",{class:"linkbtn",onClick:o[0]||(o[0]=e=>x("starUrl",1))},w(g.value),1)]),n("div",Ne,[n("img",{class:"pic-img",src:l(i).watchUrl,alt:""},null,8,Ge)]),n("div",Le,[n("input",{class:"cinput linkurl",type:"text",value:l(i).watchUrl,disabled:""},null,8,je),n("button",{class:"linkbtn",onClick:o[1]||(o[1]=e=>x("watchUrl",2))},w(V.value),1)]),n("div",Te,[n("img",{class:"pic-img",src:l(i).forkUrl,alt:""},null,8,Ie)]),n("div",Be,[n("input",{class:"cinput linkurl",type:"text",value:l(i).forkUrl,disabled:""},null,8,Ae),n("button",{class:"linkbtn",onClick:o[2]||(o[2]=e=>x("forkUrl",3))},w(t.value),1)]),n("form",Oe,[c(f,{name:"\u7528\u6237\u540D",need:"",modelValue:l(i).username,"onUpdate:modelValue":o[3]||(o[3]=e=>l(i).username=e)},null,8,["modelValue"]),c(f,{name:"\u4ED3\u5E93\u540D",need:"",modelValue:l(i).project,"onUpdate:modelValue":o[4]||(o[4]=e=>l(i).project=e)},null,8,["modelValue"]),c(f,{name:"\u6807\u7B7E",modelValue:l(i).labelGit,"onUpdate:modelValue":o[5]||(o[5]=e=>l(i).labelGit=e)},null,8,["modelValue"]),c(f,{name:"\u6837\u5F0F",noinput:""},{default:$(()=>[c(l(D),{value:l(i).styleGit,"onUpdate:value":o[6]||(o[6]=e=>l(i).styleGit=e),options:l(i).styleList},null,8,["value","options"])]),_:1})])]))}};const Fe={setup(m){const r=k("\u666E\u901A"),d=k(!1),u=a=>{d.value=a};return(a,p)=>(b(),y(B,null,[c(te,{loading:d.value},null,8,["loading"]),c(ne,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=g=>r.value=g)},null,8,["modelValue"]),G(c(ke,{onShowLoad:u},null,512),[[L,r.value==="\u666E\u901A"]]),G(c(De,null,null,512),[[L,r.value==="GitHub"]])],64))}};J(Fe).mount("#app");
