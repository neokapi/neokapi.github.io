import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,t as r}from"./ConceptTimeline-BrKCooca.js";import{n as i,r as a,t as o}from"./panel-fixtures-Bm6H9k8p.js";var s,c,l,u,d,f,p,m,h,g;e((()=>{n(),i(),s=t(),c=a(),l=a({rich:!1}),u={...a(),getRelations:()=>Promise.reject(Error(`Server unavailable (503)`))},d={title:`Concept UI/Panels/ConceptTimeline`,component:r,parameters:{layout:`fullscreen`}},f={render:()=>(0,s.jsx)(o,{source:c,conceptId:`checkout`,render:e=>(0,s.jsx)(r,{...e})})},p={render:()=>(0,s.jsx)(o,{source:l,conceptId:`checkout`,render:e=>(0,s.jsx)(r,{...e})})},m={render:()=>(0,s.jsx)(o,{source:l,conceptId:`wishlist`,render:e=>(0,s.jsx)(r,{...e})})},h={render:()=>(0,s.jsx)(o,{source:u,conceptId:`checkout`,render:e=>(0,s.jsx)(r,{...e})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={rich} conceptId="checkout" render={p => <ConceptTimeline {...p} />} />
}`,...f.parameters?.docs?.source},description:{story:`The platform path: the full revision log — created, revised, status changes,
a relation, a competitor observation, a discussion reply, and a change-set —
grouped by day, each event iconed by kind. Two events fall on the same day to
show in-day grouping; use the Newest/Oldest toggle to flip direction.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={core} conceptId="checkout" render={p => <ConceptTimeline {...p} />} />
}`,...p.parameters?.docs?.source},description:{story:`The framework-only path (a local SQLite termbase): no revision log, so the
timeline is synthesised from what the termbase knows — create/update plus the
status and relation changes inferred from validity windows. A caption marks
the degradation.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={core} conceptId="wishlist" render={p => <ConceptTimeline {...p} />} />
}`,...m.parameters?.docs?.source},description:{story:`The floor case: an undated concept has no history to show.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <PanelHarness source={failing} conceptId="checkout" render={p => <ConceptTimeline {...p} />} />
}`,...h.parameters?.docs?.source},description:{story:`A failed fetch (the relations read rejects): the panel surfaces an error so a
load failure never reads as "no history".`,...h.parameters?.docs?.description}}},g=[`Rich`,`CoreOnly`,`Empty`,`FetchError`]}))();export{p as CoreOnly,m as Empty,h as FetchError,f as Rich,g as __namedExportsOrder,d as default};