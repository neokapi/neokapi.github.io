import{c as e,i as t}from"./preload-helper-DMFJQbmU.js";import{t as n}from"./react-BbjKQ-G3.js";import{t as r}from"./jsx-runtime-DPj3eQ6K.js";import{t as i}from"./utils-DBupzmEe.js";import{o as a,t as o}from"./src-DEHKGK6P.js";import{Bi as s,Ei as c,Ri as l,t as u}from"./lucide-react-BICuCXZM.js";import{t as d}from"./tooltip-Co-G8p8Z.js";import{n as f,t as p}from"./traceTypes-C16nZQjC.js";function m(e){return e<1e3?`${e}µs`:e<1e6?`${(e/1e3).toFixed(1)}ms`:`${(e/1e6).toFixed(2)}s`}function h({name:e,stats:t,maxDuration:n}){let r=Math.max(2,t.durationUs/n*100);return(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t.hasError?(0,v.jsx)(s,{size:12,className:`shrink-0 text-destructive`}):(0,v.jsx)(l,{size:12,className:`shrink-0`,style:{color:`oklch(0.65 0.15 145)`}}),(0,v.jsx)(d,{content:e,children:(0,v.jsx)(`span`,{className:i(`w-[100px] shrink-0 truncate text-[11px] font-medium`,t.hasError?`text-destructive`:`text-foreground`),children:e})}),(0,v.jsx)(`div`,{className:`flex-1 h-1.5 rounded-sm overflow-hidden bg-muted`,children:(0,v.jsx)(`div`,{className:i(`h-full rounded-sm`,t.hasError?`bg-destructive`:`bg-accent`),style:{width:`${r}%`,animation:`barFill 0.3s ease-out`,transition:`width 300ms ease`}})}),(0,v.jsx)(`span`,{className:`w-[50px] shrink-0 text-right text-[10px] text-muted-foreground`,children:m(t.durationUs)}),(0,v.jsxs)(`span`,{className:`w-[40px] shrink-0 text-right text-[10px] text-muted-foreground`,children:[t.partsProcessed,` parts`]})]})}function g({events:e,nodeNames:t,totalDurationUs:n}){let r=(0,_.useMemo)(()=>p(e),[e]),i=(0,_.useMemo)(()=>{let t=[...r.entries()],n=new Map;for(let t of e)n.has(t.nodeId)||n.set(t.nodeId,t.ts);return t.sort((e,t)=>(n.get(e[0])??0)-(n.get(t[0])??0)),t},[r,e]);if(i.length===0)return null;let o=Math.max(...i.map(([,e])=>e.durationUs),1);return(0,v.jsxs)(`div`,{className:`border-t border-border bg-background`,style:{animation:`slideDrawer 0.2s ease-out`},children:[(0,v.jsxs)(a,{className:`border-b-0`,children:[(0,v.jsx)(c,{size:12,className:`text-muted-foreground`}),(0,v.jsx)(`span`,{className:`text-[11px] font-semibold text-foreground`,children:`Trace`}),n!==void 0&&(0,v.jsxs)(`span`,{className:`ml-auto text-[10px] text-muted-foreground`,children:[`Total: `,m(n)]})]}),(0,v.jsx)(`div`,{className:`flex flex-col gap-1 px-3 pb-2`,children:i.map(([e,n])=>(0,v.jsx)(h,{name:t?.get(e)??e,stats:n,maxDuration:o},e))})]})}var _,v,y=t((()=>{_=e(n(),1),u(),o(),f(),v=r(),g.__docgenInfo={description:`Horizontal trace timeline showing per-node execution statistics.
Displays part counts, duration, and error state for each node.`,methods:[],displayName:`TraceTimeline`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`TraceEvent`}],raw:`TraceEvent[]`},description:``},nodeNames:{required:!1,tsType:{name:`Map`,elements:[{name:`string`},{name:`string`}],raw:`Map<string, string>`},description:`Node names keyed by ID for display.`},totalDurationUs:{required:!1,tsType:{name:`number`},description:``}}}})),b,x,S,C,w,T,E,D;t((()=>{y(),b=r(),x={title:`Flow Editor/TraceTimeline`,component:g,tags:[`autodocs`],decorators:[e=>(0,b.jsx)(`div`,{style:{width:600},children:(0,b.jsx)(e,{})})]},S=[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:500,type:`exit`,nodeId:`tool-0`,partId:`p1`},{ts:600,type:`enter`,nodeId:`tool-0`,partId:`p2`},{ts:900,type:`exit`,nodeId:`tool-0`,partId:`p2`},{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:1200,type:`exit`,nodeId:`tool-1`,partId:`p1`},{ts:950,type:`enter`,nodeId:`tool-1`,partId:`p2`},{ts:1800,type:`exit`,nodeId:`tool-1`,partId:`p2`},{ts:1250,type:`enter`,nodeId:`tool-2`,partId:`p1`},{ts:1400,type:`exit`,nodeId:`tool-2`,partId:`p1`},{ts:1850,type:`enter`,nodeId:`tool-2`,partId:`p2`},{ts:2e3,type:`exit`,nodeId:`tool-2`,partId:`p2`}],C=new Map([[`tool-0`,`translate`],[`tool-1`,`qa`],[`tool-2`,`word-count`]]),w={args:{events:S,nodeNames:C,totalDurationUs:2e3}},T={args:{events:[...S.slice(0,4),{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:800,type:`error`,nodeId:`tool-1`,partId:`p1`,meta:{error:`QA check failed: missing translation`}}],nodeNames:C,totalDurationUs:800}},E={args:{events:[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:300,type:`exit`,nodeId:`tool-0`,partId:`p1`}],nodeNames:new Map([[`tool-0`,`pseudo-translate`]]),totalDurationUs:300}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    events: completedEvents,
    nodeNames,
    totalDurationUs: 2000
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Completed`,`WithError`,`SingleNode`]}))();export{w as Completed,E as SingleNode,T as WithError,D as __namedExportsOrder,x as default};