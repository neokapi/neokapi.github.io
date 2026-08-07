import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{t as r}from"./utils-BMoVe8hA.js";import{o as i,t as a}from"./src-CiPSIcLU.js";import{Bi as o,Ei as s,Ri as c,t as l}from"./lucide-react-BLnsYMs8.js";import{t as u}from"./tooltip-1t00NH9x.js";import{n as d,t as f}from"./traceTypes-C9WUsc9l.js";function p(e){return e<1e3?`${e}µs`:e<1e6?`${(e/1e3).toFixed(1)}ms`:`${(e/1e6).toFixed(2)}s`}function m({name:e,stats:t,maxDuration:n}){let i=Math.max(2,t.durationUs/n*100);return(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t.hasError?(0,_.jsx)(o,{size:12,className:`shrink-0 text-destructive`}):(0,_.jsx)(c,{size:12,className:`shrink-0`,style:{color:`oklch(0.65 0.15 145)`}}),(0,_.jsx)(u,{content:e,children:(0,_.jsx)(`span`,{className:r(`w-[100px] shrink-0 truncate text-[11px] font-medium`,t.hasError?`text-destructive`:`text-foreground`),children:e})}),(0,_.jsx)(`div`,{className:`flex-1 h-1.5 rounded-sm overflow-hidden bg-muted`,children:(0,_.jsx)(`div`,{className:r(`h-full rounded-sm`,t.hasError?`bg-destructive`:`bg-accent`),style:{width:`${i}%`,animation:`barFill 0.3s ease-out`,transition:`width 300ms ease`}})}),(0,_.jsx)(`span`,{className:`w-[50px] shrink-0 text-right text-[10px] text-muted-foreground`,children:p(t.durationUs)}),(0,_.jsxs)(`span`,{className:`w-[40px] shrink-0 text-right text-[10px] text-muted-foreground`,children:[t.partsProcessed,` parts`]})]})}function h({events:e,nodeNames:t,totalDurationUs:n}){let r=(0,g.useMemo)(()=>f(e),[e]),a=(0,g.useMemo)(()=>{let t=[...r.entries()],n=new Map;for(let t of e)n.has(t.nodeId)||n.set(t.nodeId,t.ts);return t.sort((e,t)=>(n.get(e[0])??0)-(n.get(t[0])??0)),t},[r,e]);if(a.length===0)return null;let o=Math.max(...a.map(([,e])=>e.durationUs),1);return(0,_.jsxs)(`div`,{className:`border-t border-border bg-background`,style:{animation:`slideDrawer 0.2s ease-out`},children:[(0,_.jsxs)(i,{className:`border-b-0`,children:[(0,_.jsx)(s,{size:12,className:`text-muted-foreground`}),(0,_.jsx)(`span`,{className:`text-[11px] font-semibold text-foreground`,children:`Trace`}),n!==void 0&&(0,_.jsxs)(`span`,{className:`ml-auto text-[10px] text-muted-foreground`,children:[`Total: `,p(n)]})]}),(0,_.jsx)(`div`,{className:`flex flex-col gap-1 px-3 pb-2`,children:a.map(([e,n])=>(0,_.jsx)(m,{name:t?.get(e)??e,stats:n,maxDuration:o},e))})]})}var g,_,v=e((()=>{g=t(),l(),a(),d(),_=n(),h.__docgenInfo={description:`Horizontal trace timeline showing per-node execution statistics.
Displays part counts, duration, and error state for each node.`,methods:[],displayName:`TraceTimeline`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`TraceEvent`}],raw:`TraceEvent[]`},description:``},nodeNames:{required:!1,tsType:{name:`Map`,elements:[{name:`string`},{name:`string`}],raw:`Map<string, string>`},description:`Node names keyed by ID for display.`},totalDurationUs:{required:!1,tsType:{name:`number`},description:``}}}})),y,b,x,S,C,w,T,E;e((()=>{v(),y=n(),b={title:`Flow Editor/TraceTimeline`,component:h,tags:[`autodocs`],decorators:[e=>(0,y.jsx)(`div`,{style:{width:600},children:(0,y.jsx)(e,{})})]},x=[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:500,type:`exit`,nodeId:`tool-0`,partId:`p1`},{ts:600,type:`enter`,nodeId:`tool-0`,partId:`p2`},{ts:900,type:`exit`,nodeId:`tool-0`,partId:`p2`},{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:1200,type:`exit`,nodeId:`tool-1`,partId:`p1`},{ts:950,type:`enter`,nodeId:`tool-1`,partId:`p2`},{ts:1800,type:`exit`,nodeId:`tool-1`,partId:`p2`},{ts:1250,type:`enter`,nodeId:`tool-2`,partId:`p1`},{ts:1400,type:`exit`,nodeId:`tool-2`,partId:`p1`},{ts:1850,type:`enter`,nodeId:`tool-2`,partId:`p2`},{ts:2e3,type:`exit`,nodeId:`tool-2`,partId:`p2`}],S=new Map([[`tool-0`,`translate`],[`tool-1`,`qa`],[`tool-2`,`word-count`]]),C={args:{events:x,nodeNames:S,totalDurationUs:2e3}},w={args:{events:[...x.slice(0,4),{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:800,type:`error`,nodeId:`tool-1`,partId:`p1`,meta:{error:`QA check failed: missing translation`}}],nodeNames:S,totalDurationUs:800}},T={args:{events:[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:300,type:`exit`,nodeId:`tool-0`,partId:`p1`}],nodeNames:new Map([[`tool-0`,`pseudo-translate`]]),totalDurationUs:300}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    events: completedEvents,
    nodeNames,
    totalDurationUs: 2000
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
        error: "QA check failed: missing translation"
      }
    }],
    nodeNames,
    totalDurationUs: 800
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Completed`,`WithError`,`SingleNode`]}))();export{C as Completed,T as SingleNode,w as WithError,E as __namedExportsOrder,b as default};