import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{ni as n,ri as r}from"./iframe-DzWW1kjq.js";import{E as i,s as a}from"./fixtures-BuhTuUh8.js";var o,s,c,l,u,d,f,p,m;e((()=>{r(),a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Workspace/Access/AccountMenu`,component:n,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{padding:24},children:(0,o.jsx)(e,{})})]},l={args:{user:i,onSignOut:s(),onSettings:s()}},u={args:{user:i,onSignOut:s(),variant:`icon`,status:`online`}},d={args:{user:i,onSignOut:s(),variant:`icon`,status:`offline`}},f={args:{user:i,onSignOut:s(),variant:`sidebar`,onSettings:s()}},p={args:{user:i,onSignOut:s(),variant:`sidebar`,collapsed:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    onSignOut: fn(),
    onSettings: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    onSignOut: fn(),
    variant: "icon",
    status: "online"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    onSignOut: fn(),
    variant: "icon",
    status: "offline"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    onSignOut: fn(),
    variant: "sidebar",
    onSettings: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    user: sampleUser,
    onSignOut: fn(),
    variant: "sidebar",
    collapsed: true
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`IconVariant`,`IconOffline`,`SidebarVariant`,`SidebarCollapsed`]}))();export{l as Default,d as IconOffline,u as IconVariant,p as SidebarCollapsed,f as SidebarVariant,m as __namedExportsOrder,c as default};