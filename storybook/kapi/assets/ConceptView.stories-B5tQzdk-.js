import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{a as i,o as a}from"./ConceptDashboard-DKLgDv3v.js";import{n as o,t as s}from"./fixtures-Dl5jigP2.js";import{n as c,t as l}from"./demo-panels-Dld-nVRX.js";function u({source:e,slots:t,start:n=`checkout`}){let[r,a]=(0,d.useState)(n);return(0,f.jsx)(`div`,{className:`mx-auto max-w-5xl p-6`,children:(0,f.jsx)(i,{conceptId:r,source:e,slots:t,onNavigate:a,onBack:p(),onEdit:p()})})}var d,f,p,m,h,g,_,v,y,b;t((()=>{d=e(n(),1),a(),s(),c(),f=r(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=o(),h=o({rich:!1,editable:!1}),g={title:`Concept UI/ConceptView`,component:i,parameters:{layout:`fullscreen`}},_={render:()=>(0,f.jsx)(u,{source:m})},v={render:()=>(0,f.jsx)(u,{source:m,slots:l})},y={render:()=>(0,f.jsx)(u,{source:h,slots:{geography:l.geography,relations:l.relations,timeline:l.timeline,constraints:l.constraints}})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ViewHarness source={richSource} />
}`,..._.parameters?.docs?.source},description:{story:`The shell with no slots filled — header plus labelled placeholders.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ViewHarness source={richSource} slots={demoSlots} />
}`,...v.parameters?.docs?.source},description:{story:`The shell with the illustrative demo panels — geography, the local relations
widget (collapsing groups, navigation), the timeline, constraints, plus the
optional observations and comments.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ViewHarness source={coreSource} slots={{
    geography: demoSlots.geography,
    relations: demoSlots.relations,
    timeline: demoSlots.timeline,
    constraints: demoSlots.constraints
  }} />
}`,...y.parameters?.docs?.source},description:{story:`A core-only source (local termbase): no markets/observations/comments/timeline
and no edit affordance. The demo panels degrade — geography is derived from
validity tags, the timeline is synthesised from timestamps.`,...y.parameters?.docs?.description}}},b=[`Scaffold`,`WithDemoPanels`,`CoreOnly`]}))();export{y as CoreOnly,_ as Scaffold,v as WithDemoPanels,b as __namedExportsOrder,g as default};