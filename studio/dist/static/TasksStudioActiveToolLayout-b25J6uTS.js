import"./rolldown-runtime-CNC7AqOf.js";import{t as e}from"./jsx-runtime-DiK4U9sA.js";import{t}from"./react-ieBswWmd.js";import{t as n}from"./compiler-runtime-Cxj5XFjR.js";import{Dt as r,F as i,H as a,Ot as o,R as s,St as c,gt as l}from"./dist-B0jwTRJ9.js";import{Fo as u,Go as d,Ho as f,Ko as p,Po as m,Ul as h,Uo as g,as as _,gs as v,io as y,os as b,pn as x,qo as S,ro as C,zo as w}from"./index2-CzTIbJua.js";var T=e(),E=n();t(),h(),S(),p(),w(),_(),d(),g(),f(),v(),b(),u(),m();var D=1,O=3,k=o(s).withConfig({displayName:`RootFlex`,componentId:`sc-1y8zfkj-0`})(({theme:e})=>r`
    min-height: 100%;

    @media (max-width: ${e.sanity.media[O]}px) {
      position: relative;
    }
  `),A=o(a).withConfig({displayName:`SidebarMotionLayer`,componentId:`sc-1y8zfkj-1`})(({theme:e})=>{let t=e.sanity.media;return r`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 360px;
    border-left: 1px solid var(--card-border-color);
    box-sizing: border-box;
    overflow: hidden;

    box-shadow:
      0px 6px 8px -4px var(--card-shadow-umbra-color),
      0px 12px 17px -1px var(--card-shadow-penumbra-color);

    @media (max-width: ${t[O]}px) {
      bottom: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    @media (max-width: ${t[D]}px) {
      border-left: 0;
      min-width: 100%;
      left: 0;
    }
  `});function j(e){let t=(0,E.c)(12),n=l(),{state:r}=y(),{isOpen:a}=r,o=n<=D&&a?`hidden`:`auto`,s;t[0]===e?s=t[1]:(s=e.renderDefault(e),t[0]=e,t[1]=s);let u;t[2]!==o||t[3]!==s?(u=(0,T.jsx)(i,{flex:1,height:`fill`,overflow:o,children:s}),t[2]=o,t[3]=s,t[4]=u):u=t[4];let d;t[5]===a?d=t[6]:(d=a&&(0,T.jsx)(A,{zOffset:100,height:`fill`,children:(0,T.jsx)(x,{})}),t[5]=a,t[6]=d);let f;t[7]===d?f=t[8]:(f=(0,T.jsx)(c,{initial:!1,children:d}),t[7]=d,t[8]=f);let p;return t[9]!==u||t[10]!==f?(p=(0,T.jsxs)(k,{sizing:`border`,height:`fill`,children:[u,f]}),t[9]=u,t[10]=f,t[11]=p):p=t[11],p}function M(e){let t=(0,E.c)(4),{enabled:n}=C();if(!n){let n;return t[0]===e?n=t[1]:(n=e.renderDefault(e),t[0]=e,t[1]=n),n}let r;return t[2]===e?r=t[3]:(r=(0,T.jsx)(j,{...e}),t[2]=e,t[3]=r),r}export{M as TasksStudioActiveToolLayout};