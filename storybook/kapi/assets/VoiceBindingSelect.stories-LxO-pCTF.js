import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,t as i}from"./governance-MflRb00U.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{a=t(),i(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=[{value:`file:.kapi/voice.yaml`,label:`.kapi/voice.yaml`,group:`Files`},{value:`file:.kapi/profiles/support/voice.yaml`,label:`.kapi/profiles/support/voice.yaml`,group:`Files`},{value:`pack:technical-docs`,label:`technical-docs`,group:`Starter packs`,hint:`read-only`},{value:`pack:friendly-dtc`,label:`friendly-dtc`,group:`Starter packs`,hint:`read-only`}],l=[{value:`vp-1`,label:`Northsea support`},{value:`vp-2`,label:`Northsea campaigns`}],u={title:`Governance/VoiceBindingSelect`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`The voice profile governing content at a point, as one picker. A recipe offers its files and starter packs; a workspace offers its stored profiles. The inherit row says what governs when nothing is bound here.`}}},args:{onChange:s()},render:function(e){let[t,n]=(0,a.useState)(e.value);return(0,o.jsx)(`div`,{className:`max-w-md`,children:(0,o.jsx)(r,{...e,value:t,onChange:t=>{n(t),e.onChange(t)}})})}},d={name:`Nothing bound (recipe)`,args:{value:void 0,options:c,inheritLabel:`None bound`}},f={name:`A file bound, with packs offered`,args:{value:`file:.kapi/voice.yaml`,options:c,inheritLabel:`None bound`,help:`A file is edited on the Voice page. A starter pack is read-only.`}},p={name:`Workspace profiles (platform)`,args:{value:`vp-2`,options:l,inheritLabel:`Workspace default`,help:`Governs checks and scoring for this project. Streams and collections can override it.`}},m={args:{value:`vp-1`,options:l,inheritLabel:`Workspace default`,disabled:!0}},h={name:`Bound to a profile no option names`,args:{value:`file:.kapi/removed.yaml`,options:c,inheritLabel:`None bound`,help:`The bound file is gone from the tree; clear or rebind it.`}},g={globals:{theme:`dark`},args:{value:`pack:technical-docs`,options:c,inheritLabel:`None bound`,help:`A file is edited on the Voice page. A starter pack is read-only.`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Nothing bound (recipe)",
  args: {
    value: undefined,
    options: recipeOptions,
    inheritLabel: "None bound"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "A file bound, with packs offered",
  args: {
    value: "file:.kapi/voice.yaml",
    options: recipeOptions,
    inheritLabel: "None bound",
    help: "A file is edited on the Voice page. A starter pack is read-only."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Workspace profiles (platform)",
  args: {
    value: "vp-2",
    options: workspaceOptions,
    inheritLabel: "Workspace default",
    help: "Governs checks and scoring for this project. Streams and collections can override it."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: "vp-1",
    options: workspaceOptions,
    inheritLabel: "Workspace default",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Bound to a profile no option names",
  args: {
    value: "file:.kapi/removed.yaml",
    options: recipeOptions,
    inheritLabel: "None bound",
    help: "The bound file is gone from the tree; clear or rebind it."
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    value: "pack:technical-docs",
    options: recipeOptions,
    inheritLabel: "None bound",
    help: "A file is edited on the Voice page. A starter pack is read-only."
  }
}`,...g.parameters?.docs?.source}}},_=[`Empty`,`Populated`,`WorkspaceProfiles`,`Disabled`,`NotFound`,`Dark`]})))()}v();export{g as Dark,m as Disabled,d as Empty,h as NotFound,f as Populated,p as WorkspaceProfiles,_ as __namedExportsOrder,u as default};