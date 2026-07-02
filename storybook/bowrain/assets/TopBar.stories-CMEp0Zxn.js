import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{n,t as r}from"./ThemeContext-B43pwACf.js";import{$r as i,Qr as a}from"./iframe-ucXpfu-v.js";var o,s,c,l,u,d,f;e((()=>{i(),n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Layout/TopBar`,component:a,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(r,{children:(0,o.jsx)(`div`,{style:{width:`100%`,maxWidth:800},children:(0,o.jsx)(e,{})})})]},l={args:{user:{id:`u-1`,email:`translator@example.com`,name:`Jane Doe`,avatar_url:``},onSignOut:s(),connectionState:`connected`}},u={args:{user:{id:`u-1`,email:`translator@example.com`,name:`Jane Doe`,avatar_url:``},onSignOut:s(),connectionState:`offline`,pendingChanges:3}},d={args:{user:null}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      id: "u-1",
      email: "translator@example.com",
      name: "Jane Doe",
      avatar_url: ""
    },
    onSignOut: fn(),
    connectionState: "connected"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      id: "u-1",
      email: "translator@example.com",
      name: "Jane Doe",
      avatar_url: ""
    },
    onSignOut: fn(),
    connectionState: "offline",
    pendingChanges: 3
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...d.parameters?.docs?.source}}},f=[`SignedIn`,`Offline`,`NoUser`]}))();export{d as NoUser,u as Offline,l as SignedIn,f as __namedExportsOrder,c as default};