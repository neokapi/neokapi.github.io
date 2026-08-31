import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./runtime-ls4VQNA8.js";import{n as o,t as s}from"./createLucideIcon-CtyWoxkE.js";import{Ft as c,Pt as l,t as u}from"./src-CtpUygLN.js";import{n as d,t as f}from"./circle-x-DHy23FiO.js";import{a as p,o as m}from"./action-card-Bs6miGPR.js";import{n as h,t as g}from"./play-Dusoajtp.js";import{i as _}from"./MemoryFacetSidebar-0UPiEqqw.js";import{t as v}from"./button-DmAX-A28.js";import{t as y}from"./card-DMPiov7u.js";import{n as b,t as x}from"./PipelineProgress-D3H_Lvr_.js";var S,C;function w(){return(w=e((()=>{o(),S=[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}]],C=s(`square`,S)})))()}function T({flowName:e,flow:t,autoRun:n=!1,simulateError:i=!1,fileCount:o=3,stepDurationMs:s=800}){let[c,u]=(0,E.useState)(`idle`),[d,m]=(0,E.useState)({current:0,total:o}),[h,b]=(0,E.useState)(``),[S,w]=(0,E.useState)(t.steps.map(e=>({name:e.tool,parts_in:0,parts_out:0}))),[T,O]=(0,E.useState)([]),[k,A]=(0,E.useState)(0),j=(0,E.useCallback)((e,t)=>{O(n=>[...n,{type:e,message:t,ts:Date.now()}])},[]),M=(0,E.useCallback)(async()=>{u(`running`),m({current:0,total:o}),w(t.steps.map(e=>({name:e.tool,parts_in:0,parts_out:0}))),O([]),A(0);let e=Date.now(),n=Array.from({length:o},(e,t)=>`src/locales/en/messages-${t+1}.json`);j(`state`,`Flow execution started`);for(let r=0;r<n.length;r++){let a=n[r];b(a),m({current:r,total:n.length}),j(`progress`,`Processing ${a}`);for(let n=0;n<t.steps.length;n++)if(j(`trace`,`  ${t.steps[n].tool}: processing ${a}`),w(e=>e.map((e,t)=>t===n?{...e,parts_in:e.parts_in+30}:e)),await new Promise(e=>setTimeout(e,s)),A(Date.now()-e),w(e=>e.map((e,t)=>t===n?{...e,parts_out:e.parts_out+30}:e)),i&&r===1&&n===1){j(`error`,`Error in ${t.steps[n].tool}: connection timeout to AI provider`),u(`error`);return}m({current:r+1,total:n.length}),j(`complete`,`Completed ${a}`)}b(``);let r=((Date.now()-e)/1e3).toFixed(1);j(`complete`,`Flow completed: ${n.length} files in ${r}s`),u(`complete`)},[t,o,s,i,j]),N=(0,E.useCallback)(()=>{u(`canceled`),j(`state`,`Flow execution canceled by user`)},[j]);(0,E.useEffect)(()=>{if(n){let e=setTimeout(M,500);return()=>clearTimeout(e)}},[n,M]);let P={idle:null,running:(0,D.jsx)(p,{size:16,className:`animate-spin text-primary`}),complete:(0,D.jsx)(l,{size:16,className:`text-green-500`}),error:(0,D.jsx)(f,{size:16,className:`text-destructive`}),canceled:(0,D.jsx)(f,{size:16,className:`text-muted-foreground`})},F=d.total>0?Math.round(d.current/d.total*100):0;return(0,D.jsxs)(`div`,{className:`p-6`,children:[(0,D.jsxs)(`div`,{className:`mb-4 flex items-center gap-3`,children:[(0,D.jsx)(`h2`,{className:`text-lg font-medium`,children:a(`3ohd4C0LGfv`,`Run: ${e}`,{flowName:e})}),P[c],c===`running`&&k>0&&(0,D.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:a(`7UXXdQsg2Y1`,`${(k/1e3).toFixed(1)}s`,{value:(k/1e3).toFixed(1)})})]}),(0,D.jsxs)(y,{className:`mb-4 p-3`,children:[(0,D.jsx)(`h3`,{className:`mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`91dZtZYhGhm`,`Pipeline`)}),(0,D.jsx)(x,{steps:t.steps,snapshots:S,runState:c})]}),(0,D.jsxs)(`div`,{className:`mb-4 flex gap-2`,children:[c===`idle`&&(0,D.jsx)(v,{onClick:M,"data-testid":`run-button`,children:r(`aMBVdvUehjy`,`{=m0} Run Flow`,{"=m0":(0,D.jsx)(g,{size:14})})}),c===`running`&&(0,D.jsx)(v,{variant:`outline`,onClick:N,className:`border-destructive text-destructive hover:bg-destructive/10`,children:r(`7heE9xPdpdn`,`{=m0} Cancel`,{"=m0":(0,D.jsx)(C,{size:14})})}),(c===`complete`||c===`error`||c===`canceled`)&&(0,D.jsx)(v,{variant:`outline`,onClick:()=>{u(`idle`),O([]),m({current:0,total:o})},children:a(`kBBGWTmlUYe`,`Reset`)})]}),(c===`running`||c===`complete`)&&(0,D.jsxs)(`div`,{className:`mb-4`,children:[(0,D.jsx)(`div`,{className:`mb-1 flex justify-between text-xs text-muted-foreground`,children:r(`dz8y44WOCBC`,`{=m0}{value}{/=m0} {=m2}{progressPct}%{/=m2}`,{"=m0":(0,D.jsx)(`span`,{children:h||`${d.current} / ${d.total} files`}),"=m2":(0,D.jsxs)(`span`,{children:[F,`%`]})},{value:h||`${d.current} / ${d.total} files`,progressPct:F})}),(0,D.jsx)(`div`,{className:`h-2 overflow-hidden rounded-full bg-accent`,role:`progressbar`,"aria-valuenow":d.current,"aria-valuemin":0,"aria-valuemax":d.total,children:(0,D.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all duration-500`,style:{width:`${F}%`}})})]}),T.length>0&&(0,D.jsxs)(y,{children:[(0,D.jsx)(`h3`,{className:`border-b border-border px-3 py-2 text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`4QsTWLmaaDg`,`Output (${T.length} events)`,{"events.length":T.length})}),(0,D.jsx)(_,{className:`max-h-48`,children:(0,D.jsx)(`div`,{className:`p-3 font-mono text-xs`,children:T.map((e,t)=>(0,D.jsx)(`div`,{className:`py-0.5 ${e.type===`error`?`text-destructive`:e.type===`complete`?`text-green-500`:e.type===`trace`?`text-muted-foreground`:`text-foreground`}`,children:e.message},t))})})]})]})}var E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{i(),E=t(),h(),w(),c(),d(),m(),u(),b(),D=n(),O={title:`Interactions/Flow Execution`,component:T,tags:[`autodocs`],parameters:{docs:{description:{component:`Demonstrates flow execution with live progress bars, step highlighting, event streaming, error handling, and cancellation.`}}}},k={args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}},A={name:`Auto-run (3 files, 2 steps)`,args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`},{tool:`qa`}]},autoRun:!0,fileCount:3,stepDurationMs:600}},j={name:`Long pipeline (5 files, 4 steps)`,args:{flowName:`full-pipeline`,flow:{steps:[{tool:`recycle`},{tool:`translate`},{tool:`qa`},{tool:`qa`}]},autoRun:!0,fileCount:5,stepDurationMs:400}},M={name:`Error during execution`,args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`},{tool:`qa`}]},autoRun:!0,simulateError:!0,fileCount:3,stepDurationMs:500}},N={name:`Single file (fast)`,args:{flowName:`pseudo`,flow:{steps:[{tool:`pseudo-translate`}]},autoRun:!0,fileCount:1,stepDurationMs:300}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P=[`IdleState`,`AutoRunThreeFiles`,`LongPipeline`,`ErrorDuringExecution`,`SingleFileQuick`]})))()}F();export{A as AutoRunThreeFiles,M as ErrorDuringExecution,k as IdleState,j as LongPipeline,N as SingleFileQuick,P as __namedExportsOrder,O as default};