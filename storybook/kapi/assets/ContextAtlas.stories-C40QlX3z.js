import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{r,t as i}from"./runtime-BFRAZW6z.js";import{$ as a,_ as o,at as s,ct as c,dt as l,ft as u,j as d,p as f,u as p}from"./MapView-CwT5VT-Q.js";import{f as m,n as h,p as g,t as _}from"./ContextAtlas-CL0d79ZW.js";import{i as v,n as y,r as b,t as x}from"./fixtures-C1dA7JmW.js";function S(){let[e,t]=(0,C.useState)(!0),n=d(D,`2026-08-20`,`2026-09-05`),r={...d(D,`2026-09-05`,`2026-09-25`),filters:{family:[`rule`,`term`]}};return(0,w.jsxs)(`div`,{className:`context-atlas`,style:{padding:24},children:[(0,w.jsx)(`style`,{children:a}),(0,w.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:i(`bb8IrjGNwX5`,`Open`)}),(0,w.jsx)(m,{atlas:E,pinned:n,query:r,open:e,onOpenChange:t,onRestore:()=>t(!1),onSwap:()=>void 0,onExport:()=>void 0})]})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{r(),C=t(),h(),g(),s(),l(),o(),x(),w=n(),T=y(),E=u(T,{measure:`records`}),D=f(E),O={title:`Context atlas/ContextAtlas`,component:_,parameters:{layout:`fullscreen`},args:{data:T,commandHint:`kapi context atlas`},decorators:[e=>(0,w.jsx)(`div`,{style:{padding:24},children:(0,w.jsx)(e,{})})]},k={},A={args:{data:b()}},j={args:{data:v()}},M={args:{data:y({longLabels:!0}),initialQuery:{...D,view:`records`}}},N={args:{initialQuery:{...D,filters:{market:[`no`,`se`,`gb`],channel:[`app`]}}}},P={args:{initialQuery:p(d(D,`2026-08-25`,`2026-09-25`),E,`needs-person`)}},F={args:{initialQuery:p(d(D,`2026-08-28`,`2026-09-10`),E,`changed`)}},I={args:{initialQuery:p(d(D,`2026-08-01`,`2026-08-31`),E,`lifetime`)}},L={args:{initialQuery:{...D,view:`matrix`,matrixRows:`product`,matrixCols:`market`}}},R={args:{initialQuery:{...d(D,E.firstDay,E.lastDay),view:`time`,rasterAxis:`product`}}},z={args:{initialQuery:{...D,view:`map`}}},B={args:{initialQuery:{...D,view:`records`}}},V=T.records.find(e=>e.family===`rule`&&e.history.some(e=>e.state===`contested`)&&e.valid_from)??T.records.find(e=>e.history.some(e=>e.state===`contested`)),H={args:{initialQuery:{...D,filters:{[c.statusSnapshot]:[`contested`]}},initialRecord:V?.id}},U={render:()=>(0,w.jsx)(S,{})},W=[`Default`,`EmptyData`,`OneRecord`,`LongLabels`,`Retained`,`NeedsAPerson`,`WhatChanged`,`RulesWithALifetime`,`Matrix`,`OverTime`,`Map`,`Records`,`RecordOpen`,`Compare`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source},description:{story:`The atlas as it opens: the last 30 days, everything selected, the flow.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: makeEmptyAtlas()
  }
}`,...A.parameters?.docs?.source},description:{story:`A project whose context holds nothing yet.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: makeOneRecordAtlas()
  }
}`,...j.parameters?.docs?.source},description:{story:`One rule, recorded and kept.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    data: makeAtlasFixture({
      longLabels: true
    }),
    initialQuery: {
      ...base,
      view: "records"
    }
  }
}`,...M.parameters?.docs?.source},description:{story:`Long labels and long evidence paths.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: {
      ...base,
      filters: {
        market: ["no", "se", "gb"],
        channel: ["app"]
      }
    }
  }
}`,...N.parameters?.docs?.source},description:{story:`Two values retained on one axis and one on another.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: applyQuestion(withWindow(base, "2026-08-25", "2026-09-25"), atlas, "needs-person")
  }
}`,...P.parameters?.docs?.source},description:{story:`What needs a person: state at the window's start against the snapshot.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: applyQuestion(withWindow(base, "2026-08-28", "2026-09-10"), atlas, "changed")
  }
}`,...F.parameters?.docs?.source},description:{story:`What changed in the window around the term change.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: applyQuestion(withWindow(base, "2026-08-01", "2026-08-31"), atlas, "lifetime")
  }
}`,...I.parameters?.docs?.source},description:{story:`Rules with a lifetime, during the summer campaign.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: {
      ...base,
      view: "matrix",
      matrixRows: "product",
      matrixCols: "market"
    }
  }
}`,...L.parameters?.docs?.source},description:{story:`Two axes crossed.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: {
      ...withWindow(base, atlas.firstDay, atlas.lastDay),
      view: "time",
      rasterAxis: "product"
    }
  }
}`,...R.parameters?.docs?.source},description:{story:`The raster over the whole span.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: {
      ...base,
      view: "map"
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`Markets on the map, from the world down to the project's own places.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: {
      ...base,
      view: "records"
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`The records behind the counts.`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    initialQuery: {
      ...base,
      filters: {
        [DERIVED_AXES.statusSnapshot]: ["contested"]
      }
    },
    initialRecord: contested?.id
  }
}`,...H.parameters?.docs?.source},description:{story:`A record open in the detail pane, among the contested ones.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <CompareStory />
}`,...U.parameters?.docs?.source},description:{story:`A pinned against B: one category order, one scale.`,...U.parameters?.docs?.description}}}})))()}G();export{U as Compare,k as Default,A as EmptyData,M as LongLabels,z as Map,L as Matrix,P as NeedsAPerson,j as OneRecord,R as OverTime,H as RecordOpen,B as Records,N as Retained,I as RulesWithALifetime,F as WhatChanged,W as __namedExportsOrder,O as default};