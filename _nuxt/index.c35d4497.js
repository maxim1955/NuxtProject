import{_ as G,r as s,v as y,c as v,x as h,y as A,h as a,a as n,z as g,A as L,F as V,g as B,o as m,t as f,b as I,w as N,p as O,f as D,e as U,d as $}from"./entry.59c8d7e1.js";import{C as F}from"./myStore.ae45275e.js";const l=r=>(O("data-v-7a991e8b"),r=r(),D(),r),M={class:""},P=l(()=>n("h1",null,"Характеристика",-1)),R=["select"],z=l(()=>n("option",null," Alive ",-1)),H=l(()=>n("option",null," Dead ",-1)),j=l(()=>n("option",null," unknown ",-1)),q=l(()=>n("option",null," All ",-1)),J=[z,H,j,q],K=["src"],Q={__name:"index",setup(r){const u=F(),i=s(1);let C=s([]),p=s([]);const x=async o=>{u.GET_CATALOG(1),p=u.SET_CATALOG,u.GET_CATALOG(o),C=await p};x();const w=o=>{u.GET_PERSON(o)},c=s("Все Персонажи");let d=s([]);const T=async o=>{d.value.length=0,C.value.map(e=>{if(e.status===o)d.value.push(e);else return})},_=s(""),k=y(()=>S.value.filter(o=>o.name.toLowerCase().includes(_.value.toLowerCase()))),S=y(()=>d.value.length?d.value:p.value);return(o,e)=>{const E=U;return m(),v("div",M,[P,h(n("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>g(i)?i.value=t:null),onChange:e[1]||(e[1]=t=>x(a(i)))},null,544),[[A,a(i)]]),h(n("input",{type:"search","onUpdate:modelValue":e[2]||(e[2]=t=>g(_)?_.value=t:null)},null,512),[[A,a(_)]]),h(n("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>g(c)?c.value=t:null),select:T(a(c))},J,8,R),[[L,a(c)]]),(m(!0),v(V,null,B(a(k),t=>(m(),v("div",{class:"card_person",key:t.id},[n("h2",null,"Карточка персонажа "+f(t.name),1),I(E,{onClick:b=>w(t),to:"/character",class:"card_text"},{default:N(()=>[$(" Имя: "+f(t.name),1)]),_:2},1032,["onClick"]),n("p",null,f(t.species),1),n("img",{src:t.image,height:"60",width:"70"},null,8,K),n("button",{onClick:e[4]||(e[4]=b=>o.getEpisode())},"Получить эпизоды")]))),128))])}}},Y=G(Q,[["__scopeId","data-v-7a991e8b"]]);export{Y as default};