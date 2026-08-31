import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./runtime-ls4VQNA8.js";import{n as o,t as s}from"./createLucideIcon-CtyWoxkE.js";import{Ft as c,Pt as l,t as u}from"./src-CtpUygLN.js";import{n as d,t as f}from"./circle-x-DHy23FiO.js";import{a as p,o as m}from"./action-card-Bs6miGPR.js";import{n as h,t as g}from"./trash-2-BeevAZLK.js";import{n as _,t as v}from"./x-i7QAllnh.js";import{i as y}from"./MemoryFacetSidebar-0UPiEqqw.js";import{t as b}from"./button-DmAX-A28.js";var x,S;function C(){return(C=e((()=>{o(),x=[[`path`,{d:`M13 5h8`,key:`a7qcls`}],[`path`,{d:`M13 12h8`,key:`h98zly`}],[`path`,{d:`M13 19h8`,key:`c3s6r1`}],[`path`,{d:`m3 17 2 2 4-4`,key:`1jhpwq`}],[`rect`,{x:`3`,y:`4`,width:`6`,height:`6`,rx:`1`,key:`cif1o7`}]],S=s(`list-todo`,x)})))()}function w({initialJobs:e=[],simulateProgress:t=!1}){let[n,i]=(0,T.useState)(e),[o,s]=(0,T.useState)(!0);(0,T.useEffect)(()=>{if(!t)return;let e=setInterval(()=>{i(e=>e.map(e=>{if(e.status!==`running`)return e;let t=e.progress.current+1;return t>=e.progress.total?{...e,status:`complete`,durationMs:4200,progress:{...e.progress,current:e.progress.total}}:{...e,progress:{...e.progress,current:t}}}))},800);return()=>clearInterval(e)},[t]);let c=n.some(e=>e.status===`running`),u=e=>{switch(e.status){case`running`:return(0,E.jsx)(p,{size:13,className:`animate-spin text-primary shrink-0`});case`complete`:return(0,E.jsx)(l,{size:13,className:`text-green-500 shrink-0`});case`error`:return(0,E.jsx)(f,{size:13,className:`text-destructive shrink-0`})}};return(0,E.jsxs)(`div`,{className:`relative inline-block`,children:[(0,E.jsxs)(b,{variant:`ghost`,size:`icon-sm`,onClick:()=>s(e=>!e),className:`relative h-7 w-7`,children:[c?(0,E.jsx)(p,{size:15,className:`animate-spin text-primary`}):(0,E.jsx)(S,{size:15,className:`text-muted-foreground`}),n.length>0&&(0,E.jsx)(`span`,{className:`absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground`,children:n.length})]}),o&&(0,E.jsxs)(`div`,{className:`absolute left-0 top-full mt-1 z-50 w-72 rounded-lg border border-border bg-card shadow-lg overflow-hidden`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-2 border-b border-border bg-muted/30`,children:[(0,E.jsx)(`span`,{className:`text-[11px] font-semibold text-foreground`,children:a(`b1A8kp7rECr`,`Jobs`)}),(0,E.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,E.jsx)(`button`,{className:`text-[10px] text-muted-foreground hover:text-foreground`,children:(0,E.jsx)(g,{size:11})}),(0,E.jsx)(`button`,{onClick:()=>s(!1),className:`p-0.5 rounded hover:bg-muted/60`,children:(0,E.jsx)(v,{size:12,className:`text-muted-foreground`})})]})]}),n.length===0?(0,E.jsx)(`div`,{className:`px-3 py-6 text-center text-xs text-muted-foreground`,children:a(`hULaR7OIwXi`,`No recent jobs`)}):(0,E.jsx)(y,{className:`max-h-64`,children:(0,E.jsx)(`div`,{className:`divide-y divide-border/30`,children:n.map(e=>(0,E.jsxs)(`div`,{className:`flex items-start gap-2 px-3 py-2 hover:bg-muted/30 cursor-pointer group`,children:[(0,E.jsx)(`div`,{className:`mt-0.5`,children:u(e)}),(0,E.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,E.jsx)(`div`,{className:`text-xs font-medium text-foreground truncate`,children:e.flowName}),e.status===`running`&&e.progress.total>0&&(0,E.jsxs)(`div`,{className:`mt-1`,children:[(0,E.jsx)(`div`,{className:`flex justify-between text-[10px] text-muted-foreground mb-0.5`,children:r(`2xqDWoH9wLn`,`{=m0} {job.progress.current}/{job.progress.total} {/=m0} {=m3} {Math.round}% {/=m3}`,{"=m0":(0,E.jsxs)(`span`,{children:[e.progress.current,`/`,e.progress.total]}),"=m3":(0,E.jsxs)(`span`,{children:[Math.round(e.progress.current/e.progress.total*100),`%`]})},{"job.progress.current":e.progress.current,"job.progress.total":e.progress.total,"Math.round":Math.round(e.progress.current/e.progress.total*100)})}),(0,E.jsx)(`div`,{className:`h-1 rounded-full bg-accent overflow-hidden`,children:(0,E.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all duration-300`,style:{width:`${e.progress.current/e.progress.total*100}%`}})})]}),e.status===`complete`&&(0,E.jsx)(`div`,{className:`text-[10px] text-muted-foreground mt-0.5`,children:e.durationMs?`${(e.durationMs/1e3).toFixed(1)}s`:``}),e.status===`error`&&(0,E.jsx)(`div`,{className:`text-[10px] text-destructive mt-0.5 truncate`,children:e.error})]})]},e.id))})})]})]})}var T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{i(),T=t(),m(),c(),d(),C(),_(),h(),u(),E=n(),D={title:`App/JobFeedButton`,component:w,parameters:{layout:`padded`,docs:{description:{component:`Persistent job feed button with dropdown panel. Shows active, completed, and errored flow executions.`}}}},O={args:{initialJobs:[]}},k={name:`Running job with progress`,args:{initialJobs:[{id:`1`,flowName:`translate`,status:`running`,progress:{current:5,total:16}}],simulateProgress:!0}},A={args:{initialJobs:[{id:`1`,flowName:`translate`,status:`complete`,progress:{current:16,total:16},durationMs:12400}]}},j={args:{initialJobs:[{id:`1`,flowName:`translate-and-qa`,status:`error`,progress:{current:3,total:16},error:`API rate limit exceeded`}]}},M={name:`Multiple jobs (mixed status)`,args:{initialJobs:[{id:`1`,flowName:`translate (de-DE)`,status:`running`,progress:{current:8,total:16}},{id:`2`,flowName:`translate (fr-FR)`,status:`complete`,progress:{current:16,total:16},durationMs:8200},{id:`3`,flowName:`qa`,status:`error`,progress:{current:2,total:10},error:`Provider unavailable`}],simulateProgress:!0}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    initialJobs: []
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Running job with progress",
  args: {
    initialJobs: [{
      id: "1",
      flowName: "translate",
      status: "running",
      progress: {
        current: 5,
        total: 16
      }
    }],
    simulateProgress: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialJobs: [{
      id: "1",
      flowName: "translate",
      status: "complete",
      progress: {
        current: 16,
        total: 16
      },
      durationMs: 12400
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    initialJobs: [{
      id: "1",
      flowName: "translate-and-qa",
      status: "error",
      progress: {
        current: 3,
        total: 16
      },
      error: "API rate limit exceeded"
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Multiple jobs (mixed status)",
  args: {
    initialJobs: [{
      id: "1",
      flowName: "translate (de-DE)",
      status: "running",
      progress: {
        current: 8,
        total: 16
      }
    }, {
      id: "2",
      flowName: "translate (fr-FR)",
      status: "complete",
      progress: {
        current: 16,
        total: 16
      },
      durationMs: 8200
    }, {
      id: "3",
      flowName: "qa",
      status: "error",
      progress: {
        current: 2,
        total: 10
      },
      error: "Provider unavailable"
    }],
    simulateProgress: true
  }
}`,...M.parameters?.docs?.source}}},N=[`Empty`,`RunningJob`,`CompletedJob`,`ErroredJob`,`MultipleJobs`]})))()}P();export{A as CompletedJob,O as Empty,j as ErroredJob,M as MultipleJobs,k as RunningJob,N as __namedExportsOrder,D as default};