import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./utils-Cr3XL-wn.js";import{mn as i,o as a,pn as o,t as s}from"./src-CafcHQkP.js";import{n as c,r as l,t as u}from"./runtime-Bvanz_ea.js";import{i as d,r as f}from"./code-finder-editor-CQabmiEj.js";import{n as p,t as m}from"./clock-DbbWnjkY.js";import{t as h}from"./tooltip-Ps6NngAS.js";import{t as g}from"./traceTypes-xwiO98L7.js";function _(e){return e<1e3?`${e}µs`:e<1e6?`${(e/1e3).toFixed(1)}ms`:`${(e/1e6).toFixed(2)}s`}function v({name:e,stats:t,maxDuration:n}){let i=Math.max(2,t.durationUs/n*100);return(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t.hasError?(0,x.jsx)(f,{size:12,className:`shrink-0 text-destructive`}):(0,x.jsx)(o,{size:12,className:`shrink-0`,style:{color:`oklch(0.65 0.15 145)`}}),(0,x.jsx)(h,{content:e,children:(0,x.jsx)(`span`,{className:r(`w-[100px] shrink-0 truncate text-[11px] font-medium`,t.hasError?`text-destructive`:`text-foreground`),children:e})}),(0,x.jsx)(`div`,{className:`flex-1 h-1.5 rounded-sm overflow-hidden bg-muted`,children:(0,x.jsx)(`div`,{className:r(`h-full rounded-sm`,t.hasError?`bg-destructive`:`bg-accent`),style:{width:`${i}%`,animation:`barFill 0.3s ease-out`,transition:`width 300ms ease`}})}),(0,x.jsx)(`span`,{className:`w-[50px] shrink-0 text-right text-[10px] text-muted-foreground`,children:_(t.durationUs)}),(0,x.jsx)(`span`,{className:`w-[40px] shrink-0 text-right text-[10px] text-muted-foreground`,children:u(`bY7hAxfDxvi`,`${t.partsProcessed} parts`,{"s.partsProcessed":t.partsProcessed})})]})}function y({events:e,nodeNames:t,totalDurationUs:n}){let r=(0,b.useMemo)(()=>g(e),[e]),i=(0,b.useMemo)(()=>{let t=[...r.entries()],n=new Map;for(let t of e)n.has(t.nodeId)||n.set(t.nodeId,t.ts);return t.sort((e,t)=>(n.get(e[0])??0)-(n.get(t[0])??0)),t},[r,e]);if(i.length===0)return null;let o=Math.max(...i.map(([,e])=>e.durationUs),1);return(0,x.jsxs)(`div`,{className:`border-t border-border bg-background`,style:{animation:`slideDrawer 0.2s ease-out`},children:[(0,x.jsx)(a,{className:`border-b-0`,children:c(`kToBgCabO5q`,`{=m0} {=m1}Trace{/=m1} {=m2}`,{"=m0":(0,x.jsx)(m,{size:12,className:`text-muted-foreground`}),"=m1":(0,x.jsx)(`span`,{className:`text-[11px] font-semibold text-foreground`,children:`Trace`}),"=m2":n!==void 0&&(0,x.jsxs)(`span`,{className:`ml-auto text-[10px] text-muted-foreground`,children:[`Total: `,_(n)]})})}),(0,x.jsx)(`div`,{className:`flex flex-col gap-1 px-3 pb-2`,children:i.map(([e,n])=>(0,x.jsx)(v,{name:t?.get(e)??e,stats:n,maxDuration:o},e))})]})}var b,x;function S(){return(S=e((()=>{l(),b=t(),p(),d(),i(),s(),x=n(),y.__docgenInfo={description:`Horizontal trace timeline showing per-node execution statistics.
Displays part counts, duration, and error state for each node.`,methods:[],displayName:`TraceTimeline`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`TraceEvent`}],raw:`TraceEvent[]`},description:``},nodeNames:{required:!1,tsType:{name:`Map`,elements:[{name:`string`},{name:`string`}],raw:`Map<string, string>`},description:`Node names keyed by ID for display.`},totalDurationUs:{required:!1,tsType:{name:`number`},description:``}}}})))()}var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{S(),C=n(),w={title:`Flow Editor/TraceTimeline`,component:y,tags:[`autodocs`],decorators:[e=>(0,C.jsx)(`div`,{style:{width:600},children:(0,C.jsx)(e,{})})]},T=[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:500,type:`exit`,nodeId:`tool-0`,partId:`p1`},{ts:600,type:`enter`,nodeId:`tool-0`,partId:`p2`},{ts:900,type:`exit`,nodeId:`tool-0`,partId:`p2`},{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:1200,type:`exit`,nodeId:`tool-1`,partId:`p1`},{ts:950,type:`enter`,nodeId:`tool-1`,partId:`p2`},{ts:1800,type:`exit`,nodeId:`tool-1`,partId:`p2`},{ts:1250,type:`enter`,nodeId:`tool-2`,partId:`p1`},{ts:1400,type:`exit`,nodeId:`tool-2`,partId:`p1`},{ts:1850,type:`enter`,nodeId:`tool-2`,partId:`p2`},{ts:2e3,type:`exit`,nodeId:`tool-2`,partId:`p2`}],E=new Map([[`tool-0`,`translate`],[`tool-1`,`qa`],[`tool-2`,`word-count`]]),D={args:{events:T,nodeNames:E,totalDurationUs:2e3}},O={args:{events:[...T.slice(0,4),{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:800,type:`error`,nodeId:`tool-1`,partId:`p1`,meta:{error:`check failed: missing translation`}}],nodeNames:E,totalDurationUs:800}},k={args:{events:[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:300,type:`exit`,nodeId:`tool-0`,partId:`p1`}],nodeNames:new Map([[`tool-0`,`pseudo-translate`]]),totalDurationUs:300}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    events: completedEvents,
    nodeNames,
    totalDurationUs: 2000
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...completedEvents.slice(0, 4), {
      ts: 550,
      type: "enter",
      nodeId: "tool-1",
      partId: "p1"
    }, {
      ts: 800,
      type: "error",
      nodeId: "tool-1",
      partId: "p1",
      meta: {
        error: "check failed: missing translation"
      }
    }],
    nodeNames,
    totalDurationUs: 800
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      ts: 0,
      type: "enter",
      nodeId: "tool-0",
      partId: "p1"
    }, {
      ts: 300,
      type: "exit",
      nodeId: "tool-0",
      partId: "p1"
    }],
    nodeNames: new Map([["tool-0", "pseudo-translate"]]),
    totalDurationUs: 300
  }
}`,...k.parameters?.docs?.source}}},A=[`Completed`,`WithError`,`SingleNode`]})))()}j();export{D as Completed,k as SingleNode,O as WithError,A as __namedExportsOrder,w as default};