import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,o as i}from"./ConceptDashboard-DWZRNg8g.js";import{n as a,t as o}from"./demo-panels-B--9gU4u.js";import{n as s,t as c}from"./fixtures-B8GwUCHb.js";function l({source:e,slots:t,start:n=`checkout`}){let[i,a]=(0,u.useState)(n);return(0,d.jsx)(`div`,{className:`mx-auto max-w-5xl p-6`,children:(0,d.jsx)(r,{conceptId:i,source:e,slots:t,onNavigate:a,onBack:f(),onEdit:f()})})}var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u=t(),i(),c(),a(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p=s(),m=s({rich:!1,editable:!1}),h={title:`Concept UI/ConceptView`,component:r,parameters:{layout:`fullscreen`}},g={render:()=>(0,d.jsx)(l,{source:p})},_={render:()=>(0,d.jsx)(l,{source:p,slots:o})},v={render:()=>(0,d.jsx)(l,{source:m,slots:{geography:o.geography,relations:o.relations,timeline:o.timeline,constraints:o.constraints}})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ViewHarness source={richSource} />
}`,...g.parameters?.docs?.source},description:{story:`The shell with no slots filled — header plus labelled placeholders.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ViewHarness source={richSource} slots={demoSlots} />
}`,..._.parameters?.docs?.source},description:{story:`The shell with the illustrative demo panels — geography, the local relations
widget (collapsing groups, navigation), the timeline, constraints, plus the
optional observations and comments.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ViewHarness source={coreSource} slots={{
    geography: demoSlots.geography,
    relations: demoSlots.relations,
    timeline: demoSlots.timeline,
    constraints: demoSlots.constraints
  }} />
}`,...v.parameters?.docs?.source},description:{story:`A core-only source (local terms): no markets/observations/comments/timeline
and no edit affordance. The demo panels degrade — geography is derived from
validity tags, the timeline is synthesised from timestamps.`,...v.parameters?.docs?.description}}},y=[`Scaffold`,`WithDemoPanels`,`CoreOnly`]})))()}b();export{v as CoreOnly,g as Scaffold,_ as WithDemoPanels,y as __namedExportsOrder,h as default};