import{g as u,y as i,l as o,z as c,h as a,C as v,A as s}from"./app.d0041fa5.js";const r=()=>a(s,{name:"back"},()=>a("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),d=()=>a(s,{name:"home"},()=>a("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var h=u({name:"SlidePage",setup(){const l=i(),t=o(!1),e=o(null),n=()=>{t.value=!1};return c(e,n),()=>a("div",{class:"presentation"},[a(v),a("div",{ref:e,class:["menu",{active:t.value}]},[a("button",{class:"menu-button",onClick:()=>{t.value=!t.value}},a("span",{class:"icon"})),a("button",{class:"back-button",onClick:()=>(n(),void window.history.go(-1))},a(r)),a("button",{class:"home-button",onClick:()=>(n(),void l.push("/"))},a(d))])])}});export{h as default};
