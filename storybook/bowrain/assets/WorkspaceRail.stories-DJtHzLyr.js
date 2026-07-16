import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{li as n,ui as r}from"./iframe-DJECPt2E.js";import{D as i,E as a,f as o,s}from"./fixtures-PyhbZV0t.js";var c,l,u,d,f,p,m;e((()=>{r(),s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Layout/WorkspaceRail`,component:n,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{height:400},children:(0,c.jsx)(e,{})})]},d={args:{workspaces:[i,o],activeWorkspace:i,onSelectWorkspace:l(),onCreateWorkspace:l(),user:a,onAvatarClick:l()}},f={args:{workspaces:[o],activeWorkspace:o,onSelectWorkspace:l(),onCreateWorkspace:l(),user:a}},p={args:{workspaces:[i],activeWorkspace:i,onSelectWorkspace:l(),onCreateWorkspace:l(),user:null}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    workspaces: [sampleWorkspace, personalWorkspace],
    activeWorkspace: sampleWorkspace,
    onSelectWorkspace: fn(),
    onCreateWorkspace: fn(),
    user: sampleUser,
    onAvatarClick: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    workspaces: [personalWorkspace],
    activeWorkspace: personalWorkspace,
    onSelectWorkspace: fn(),
    onCreateWorkspace: fn(),
    user: sampleUser
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    workspaces: [sampleWorkspace],
    activeWorkspace: sampleWorkspace,
    onSelectWorkspace: fn(),
    onCreateWorkspace: fn(),
    user: null
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`SingleWorkspace`,`NoUser`]}))();export{d as Default,p as NoUser,f as SingleWorkspace,m as __namedExportsOrder,u as default};