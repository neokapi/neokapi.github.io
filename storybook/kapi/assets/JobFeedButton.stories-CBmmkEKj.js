import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,r as i,t as a}from"./runtime-D9E4JuzJ.js";import{E as o,En as s,Ji as c,Sn as l,i as u,na as d,t as f}from"./lucide-react-DAXek0DD.js";import{t as p}from"./src-DlmbrlZV.js";import{t as m}from"./button-xCNJhilW.js";import{i as h}from"./MemoryFacetSidebar-C3Zm32ax.js";function g({initialJobs:e=[],simulateProgress:t=!1}){let[n,i]=(0,_.useState)(e),[f,p]=(0,_.useState)(!0);(0,_.useEffect)(()=>{if(!t)return;let e=setInterval(()=>{i(e=>e.map(e=>{if(e.status!==`running`)return e;let t=e.progress.current+1;return t>=e.progress.total?{...e,status:`complete`,durationMs:4200,progress:{...e.progress,current:e.progress.total}}:{...e,progress:{...e.progress,current:t}}}))},800);return()=>clearInterval(e)},[t]);let g=n.some(e=>e.status===`running`),y=e=>{switch(e.status){case`running`:return(0,v.jsx)(l,{size:13,className:`animate-spin text-primary shrink-0`});case`complete`:return(0,v.jsx)(d,{size:13,className:`text-green-500 shrink-0`});case`error`:return(0,v.jsx)(c,{size:13,className:`text-destructive shrink-0`})}};return(0,v.jsxs)(`div`,{className:`relative inline-block`,children:[(0,v.jsxs)(m,{variant:`ghost`,size:`icon-sm`,onClick:()=>p(e=>!e),className:`relative h-7 w-7`,children:[g?(0,v.jsx)(l,{size:15,className:`animate-spin text-primary`}):(0,v.jsx)(s,{size:15,className:`text-muted-foreground`}),n.length>0&&(0,v.jsx)(`span`,{className:`absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground`,children:n.length})]}),f&&(0,v.jsxs)(`div`,{className:`absolute left-0 top-full mt-1 z-50 w-72 rounded-lg border border-border bg-card shadow-lg overflow-hidden`,children:[(0,v.jsxs)(`div`,{className:`flex items-center justify-between px-3 py-2 border-b border-border bg-muted/30`,children:[(0,v.jsx)(`span`,{className:`text-[11px] font-semibold text-foreground`,children:a(`b1A8kp7rECr`,`Jobs`)}),(0,v.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,v.jsx)(`button`,{className:`text-[10px] text-muted-foreground hover:text-foreground`,children:(0,v.jsx)(o,{size:11})}),(0,v.jsx)(`button`,{onClick:()=>p(!1),className:`p-0.5 rounded hover:bg-muted/60`,children:(0,v.jsx)(u,{size:12,className:`text-muted-foreground`})})]})]}),n.length===0?(0,v.jsx)(`div`,{className:`px-3 py-6 text-center text-xs text-muted-foreground`,children:a(`hULaR7OIwXi`,`No recent jobs`)}):(0,v.jsx)(h,{className:`max-h-64`,children:(0,v.jsx)(`div`,{className:`divide-y divide-border/30`,children:n.map(e=>(0,v.jsxs)(`div`,{className:`flex items-start gap-2 px-3 py-2 hover:bg-muted/30 cursor-pointer group`,children:[(0,v.jsx)(`div`,{className:`mt-0.5`,children:y(e)}),(0,v.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,v.jsx)(`div`,{className:`text-xs font-medium text-foreground truncate`,children:e.flowName}),e.status===`running`&&e.progress.total>0&&(0,v.jsxs)(`div`,{className:`mt-1`,children:[(0,v.jsx)(`div`,{className:`flex justify-between text-[10px] text-muted-foreground mb-0.5`,children:r(`2xqDWoH9wLn`,`{=m0} {job.progress.current}/{job.progress.total} {/=m0} {=m3} {Math.round}% {/=m3}`,{"=m0":(0,v.jsxs)(`span`,{children:[e.progress.current,`/`,e.progress.total]}),"=m3":(0,v.jsxs)(`span`,{children:[Math.round(e.progress.current/e.progress.total*100),`%`]})},{"job.progress.current":e.progress.current,"job.progress.total":e.progress.total,"Math.round":Math.round(e.progress.current/e.progress.total*100)})}),(0,v.jsx)(`div`,{className:`h-1 rounded-full bg-accent overflow-hidden`,children:(0,v.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all duration-300`,style:{width:`${e.progress.current/e.progress.total*100}%`}})})]}),e.status===`complete`&&(0,v.jsx)(`div`,{className:`text-[10px] text-muted-foreground mt-0.5`,children:e.durationMs?`${(e.durationMs/1e3).toFixed(1)}s`:``}),e.status===`error`&&(0,v.jsx)(`div`,{className:`text-[10px] text-destructive mt-0.5 truncate`,children:e.error})]})]},e.id))})})]})]})}var _,v,y,b,x,S,C,w,T;e((()=>{i(),_=t(),f(),p(),v=n(),y={title:`App/JobFeedButton`,component:g,parameters:{layout:`padded`,docs:{description:{component:`Persistent job feed button with dropdown panel. Shows active, completed, and errored flow executions.`}}}},b={args:{initialJobs:[]}},x={name:`Running job with progress`,args:{initialJobs:[{id:`1`,flowName:`translate`,status:`running`,progress:{current:5,total:16}}],simulateProgress:!0}},S={args:{initialJobs:[{id:`1`,flowName:`translate`,status:`complete`,progress:{current:16,total:16},durationMs:12400}]}},C={args:{initialJobs:[{id:`1`,flowName:`translate-and-qa`,status:`error`,progress:{current:3,total:16},error:`API rate limit exceeded`}]}},w={name:`Multiple jobs (mixed status)`,args:{initialJobs:[{id:`1`,flowName:`translate (de-DE)`,status:`running`,progress:{current:8,total:16}},{id:`2`,flowName:`translate (fr-FR)`,status:`complete`,progress:{current:16,total:16},durationMs:8200},{id:`3`,flowName:`qa`,status:`error`,progress:{current:2,total:10},error:`Provider unavailable`}],simulateProgress:!0}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    initialJobs: []
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Empty`,`RunningJob`,`CompletedJob`,`ErroredJob`,`MultipleJobs`]}))();export{S as CompletedJob,b as Empty,C as ErroredJob,w as MultipleJobs,x as RunningJob,T as __namedExportsOrder,y as default};