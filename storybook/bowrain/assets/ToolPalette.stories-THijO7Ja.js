import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{i as n,n as r,r as i,t as a}from"./tools-metadata-CAHRTSjR.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=r,l={title:`Flow Editor/ToolPalette`,component:i,tags:[`autodocs`],args:{onAddTool:s()},parameters:{layout:`fullscreen`},decorators:[e=>(0,o.jsx)(`div`,{style:{height:600,display:`flex`},children:(0,o.jsx)(e,{})})]},u={args:{tools:c}},d={args:{tools:c.filter(e=>!e.name.startsWith(`okapi:`))}},f={args:{tools:c.filter(e=>e.name.startsWith(`okapi:`))}},p={args:{tools:c.slice(0,8)}},m=[{name:`redact`,display_name:`Redact`,description:`Replace sensitive spans with placeholders before translation`,category:`transform`,has_schema:!0,tags:[`privacy`,`pre-processing`],isSourceTransform:!0,recoverable:!0},{name:`source-normalise`,display_name:`Source Normalise`,description:`Normalise quotes, punctuation, and whitespace in source text`,category:`transform`,has_schema:!0,tags:[`text-processing`],isSourceTransform:!0},{name:`source-simplifier`,display_name:`Source Simplifier`,description:`Simplify complex source sentences to aid machine translation`,category:`transform`,has_schema:!1,tags:[`ai-powered`],isSourceTransform:!0},{name:`translate`,display_name:`AI Translate`,description:`Translate content using AI/LLM`,category:`translate`,has_schema:!1,tags:[`ai-powered`,`translation`]},{name:`qa`,display_name:`Quality Check`,description:`Run rule-based quality checks`,category:`validate`,has_schema:!0,tags:[`quality`]}],h={name:`Transformer Badges`,args:{tools:m}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tools
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tools: tools.filter(t => !t.name.startsWith("okapi:"))
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tools: tools.filter(t => t.name.startsWith("okapi:"))
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tools: tools.slice(0, 8)
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Transformer Badges",
  args: {
    tools: transformerTools
  }
}`,...h.parameters?.docs?.source},description:{story:`Palette with transformer tools showing their badge next to the tool name.
Non-transformer tools show no badge.`,...h.parameters?.docs?.description}}},g=[`AllTools`,`BuiltInOnly`,`OkapiOnly`,`FewTools`,`WithTransformerBadges`]})))()}_();export{u as AllTools,d as BuiltInOnly,p as FewTools,f as OkapiOnly,h as WithTransformerBadges,g as __namedExportsOrder,l as default};