import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,t as r}from"./ConstraintsPanel-CObKeuHU.js";import{n as i,r as a,t as o}from"./panel-fixtures-7g9D5E4C.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{n(),i(),s=t(),c=a(),l=a({rich:!1}),u={...a(),getRelations:()=>Promise.reject(Error(`Server unavailable (503)`))},d={title:`Concept UI/Panels/ConstraintsPanel`,component:r,parameters:{layout:`fullscreen`}},f={render:()=>(0,s.jsx)(o,{source:c,conceptId:`checkout`,render:e=>(0,s.jsx)(r,{...e})})},p={render:()=>(0,s.jsx)(o,{source:l,conceptId:`checkout`,render:e=>(0,s.jsx)(r,{...e})})},m={render:()=>(0,s.jsx)(o,{source:l,conceptId:`wishlist`,render:e=>(0,s.jsx)(r,{...e})})},h={render:()=>(0,s.jsx)(o,{source:u,conceptId:`checkout`,render:e=>(0,s.jsx)(r,{...e})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={rich} conceptId="checkout" render={p => <ConstraintsPanel {...p} />} />
}`,...f.parameters?.docs?.source},description:{story:`Several dated transitions across markets: ‘Kasse’ preferred in DACH since
Jan 2026 (open-ended), ‘Paiement’ preferred in France since Nov 2025,
‘Validation de commande’ deprecated and now out of force, a closed seasonal
window, and a dated ‘use instead’ relation. The chart places each on one
scale with a today marker; the summary spells out banned-where vs
preferred-where.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={core} conceptId="checkout" render={p => <ConstraintsPanel {...p} />} />
}`,...p.parameters?.docs?.source},description:{story:`The framework-only path: markets are derived from the term validity tags
rather than supplied. The same windows and the same banned/preferred summary
still read.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={core} conceptId="wishlist" render={p => <ConstraintsPanel {...p} />} />
}`,...m.parameters?.docs?.source},description:{story:`A flat termbase: no validity windows at all, so the time chart is skipped and
the panel falls back to the banned/preferred summary alone.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={failing} conceptId="checkout" render={p => <ConstraintsPanel {...p} />} />
}`,...h.parameters?.docs?.source},description:{story:`A failed fetch (the relations read rejects): the panel surfaces an error so a
load failure never reads as "no constraints".`,...h.parameters?.docs?.description}}},g=[`Rich`,`CoreOnly`,`SummaryOnly`,`FetchError`]}))();export{p as CoreOnly,h as FetchError,f as Rich,m as SummaryOnly,g as __namedExportsOrder,d as default};