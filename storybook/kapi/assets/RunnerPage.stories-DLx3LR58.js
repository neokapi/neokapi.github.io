import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,r as i,t as a}from"./runtime-D9E4JuzJ.js";import{B as o,Ji as s,Mt as c,Sn as l,na as u,t as d}from"./lucide-react-DAXek0DD.js";import{t as f}from"./src-D6oHsFHH.js";import{t as p}from"./button-xCNJhilW.js";import{t as m}from"./card-BgJKhC20.js";import{i as h}from"./MemoryFacetSidebar-C3Zm32ax.js";import{n as g,t as _}from"./PipelineProgress-CDBjE9UP.js";function v({flowName:e,flow:t,autoRun:n=!1,simulateError:i=!1,fileCount:d=3,stepDurationMs:f=800}){let[g,v]=(0,y.useState)(`idle`),[x,S]=(0,y.useState)({current:0,total:d}),[C,w]=(0,y.useState)(``),[T,E]=(0,y.useState)(t.steps.map(e=>({name:e.tool,parts_in:0,parts_out:0}))),[D,O]=(0,y.useState)([]),[k,A]=(0,y.useState)(0),j=(0,y.useCallback)((e,t)=>{O(n=>[...n,{type:e,message:t,ts:Date.now()}])},[]),M=(0,y.useCallback)(async()=>{v(`running`),S({current:0,total:d}),E(t.steps.map(e=>({name:e.tool,parts_in:0,parts_out:0}))),O([]),A(0);let e=Date.now(),n=Array.from({length:d},(e,t)=>`src/locales/en/messages-${t+1}.json`);j(`state`,`Flow execution started`);for(let r=0;r<n.length;r++){let a=n[r];w(a),S({current:r,total:n.length}),j(`progress`,`Processing ${a}`);for(let n=0;n<t.steps.length;n++)if(j(`trace`,`  ${t.steps[n].tool}: processing ${a}`),E(e=>e.map((e,t)=>t===n?{...e,parts_in:e.parts_in+30}:e)),await new Promise(e=>setTimeout(e,f)),A(Date.now()-e),E(e=>e.map((e,t)=>t===n?{...e,parts_out:e.parts_out+30}:e)),i&&r===1&&n===1){j(`error`,`Error in ${t.steps[n].tool}: connection timeout to AI provider`),v(`error`);return}S({current:r+1,total:n.length}),j(`complete`,`Completed ${a}`)}w(``);let r=((Date.now()-e)/1e3).toFixed(1);j(`complete`,`Flow completed: ${n.length} files in ${r}s`),v(`complete`)},[t,d,f,i,j]),N=(0,y.useCallback)(()=>{v(`canceled`),j(`state`,`Flow execution canceled by user`)},[j]);(0,y.useEffect)(()=>{if(n){let e=setTimeout(M,500);return()=>clearTimeout(e)}},[n,M]);let P={idle:null,running:(0,b.jsx)(l,{size:16,className:`animate-spin text-primary`}),complete:(0,b.jsx)(u,{size:16,className:`text-green-500`}),error:(0,b.jsx)(s,{size:16,className:`text-destructive`}),canceled:(0,b.jsx)(s,{size:16,className:`text-muted-foreground`})},F=x.total>0?Math.round(x.current/x.total*100):0;return(0,b.jsxs)(`div`,{className:`p-6`,children:[(0,b.jsxs)(`div`,{className:`mb-4 flex items-center gap-3`,children:[(0,b.jsx)(`h2`,{className:`text-lg font-medium`,children:a(`3ohd4C0LGfv`,`Run: ${e}`,{flowName:e})}),P[g],g===`running`&&k>0&&(0,b.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:a(`7UXXdQsg2Y1`,`${(k/1e3).toFixed(1)}s`,{value:(k/1e3).toFixed(1)})})]}),(0,b.jsxs)(m,{className:`mb-4 p-3`,children:[(0,b.jsx)(`h3`,{className:`mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`91dZtZYhGhm`,`Pipeline`)}),(0,b.jsx)(_,{steps:t.steps,snapshots:T,runState:g})]}),(0,b.jsxs)(`div`,{className:`mb-4 flex gap-2`,children:[g===`idle`&&(0,b.jsx)(p,{onClick:M,"data-testid":`run-button`,children:r(`aMBVdvUehjy`,`{=m0} Run Flow`,{"=m0":(0,b.jsx)(c,{size:14})})}),g===`running`&&(0,b.jsx)(p,{variant:`outline`,onClick:N,className:`border-destructive text-destructive hover:bg-destructive/10`,children:r(`7heE9xPdpdn`,`{=m0} Cancel`,{"=m0":(0,b.jsx)(o,{size:14})})}),(g===`complete`||g===`error`||g===`canceled`)&&(0,b.jsx)(p,{variant:`outline`,onClick:()=>{v(`idle`),O([]),S({current:0,total:d})},children:a(`kBBGWTmlUYe`,`Reset`)})]}),(g===`running`||g===`complete`)&&(0,b.jsxs)(`div`,{className:`mb-4`,children:[(0,b.jsx)(`div`,{className:`mb-1 flex justify-between text-xs text-muted-foreground`,children:r(`dz8y44WOCBC`,`{=m0}{value}{/=m0} {=m2}{progressPct}%{/=m2}`,{"=m0":(0,b.jsx)(`span`,{children:C||`${x.current} / ${x.total} files`}),"=m2":(0,b.jsxs)(`span`,{children:[F,`%`]})},{value:C||`${x.current} / ${x.total} files`,progressPct:F})}),(0,b.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-accent`,role:`progressbar`,"aria-valuenow":x.current,"aria-valuemin":0,"aria-valuemax":x.total,children:(0,b.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all duration-500`,style:{width:`${F}%`}})})]}),D.length>0&&(0,b.jsxs)(m,{children:[(0,b.jsx)(`h3`,{className:`border-b border-border px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`4QsTWLmaaDg`,`Output (${D.length} events)`,{"events.length":D.length})}),(0,b.jsx)(h,{className:`max-h-48`,children:(0,b.jsx)(`div`,{className:`p-3 font-mono text-xs`,children:D.map((e,t)=>(0,b.jsx)(`div`,{className:`py-0.5 ${e.type===`error`?`text-destructive`:e.type===`complete`?`text-green-500`:e.type===`trace`?`text-muted-foreground`:`text-foreground`}`,children:e.message},t))})})]})]})}var y,b,x,S,C,w,T,E,D;e((()=>{i(),y=t(),d(),f(),g(),b=n(),x={title:`Interactions/Flow Execution`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`Demonstrates flow execution with live progress bars, step highlighting, event streaming, error handling, and cancellation.`}}}},S={args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}},C={name:`Auto-run (3 files, 2 steps)`,args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`},{tool:`qa`}]},autoRun:!0,fileCount:3,stepDurationMs:600}},w={name:`Long pipeline (5 files, 4 steps)`,args:{flowName:`full-pipeline`,flow:{steps:[{tool:`recycle`},{tool:`translate`},{tool:`qa`},{tool:`qa`}]},autoRun:!0,fileCount:5,stepDurationMs:400}},T={name:`Error during execution`,args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`},{tool:`qa`}]},autoRun:!0,simulateError:!0,fileCount:3,stepDurationMs:500}},E={name:`Single file (fast)`,args:{flowName:`pseudo`,flow:{steps:[{tool:`pseudo-translate`}]},autoRun:!0,fileCount:1,stepDurationMs:300}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "translate-and-qa",
    flow: {
      steps: [{
        tool: "translate",
        config: {
          provider: "anthropic"
        }
      }, {
        tool: "qa"
      }]
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Auto-run (3 files, 2 steps)",
  args: {
    flowName: "translate-and-qa",
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    autoRun: true,
    fileCount: 3,
    stepDurationMs: 600
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Long pipeline (5 files, 4 steps)",
  args: {
    flowName: "full-pipeline",
    flow: {
      steps: [{
        tool: "recycle"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }, {
        tool: "qa"
      }]
    },
    autoRun: true,
    fileCount: 5,
    stepDurationMs: 400
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Error during execution",
  args: {
    flowName: "translate-and-qa",
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    autoRun: true,
    simulateError: true,
    fileCount: 3,
    stepDurationMs: 500
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Single file (fast)",
  args: {
    flowName: "pseudo",
    flow: {
      steps: [{
        tool: "pseudo-translate"
      }]
    },
    autoRun: true,
    fileCount: 1,
    stepDurationMs: 300
  }
}`,...E.parameters?.docs?.source}}},D=[`IdleState`,`AutoRunThreeFiles`,`LongPipeline`,`ErrorDuringExecution`,`SingleFileQuick`]}))();export{C as AutoRunThreeFiles,T as ErrorDuringExecution,S as IdleState,w as LongPipeline,E as SingleFileQuick,D as __namedExportsOrder,x as default};