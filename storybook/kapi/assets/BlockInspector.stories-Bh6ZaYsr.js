import{i as e}from"./preload-helper-DRGloZ2I.js";import{N as t,t as n}from"./preview-Cc-PJq34.js";import{a as r,i,t as a}from"./mockData-BoeV-ulQ.js";var o,s,c,l,u,d;e((()=>{n(),a(),o={title:`Lab/Block Inspector`,component:t,parameters:{layout:`padded`}},s={name:`Full detail (targets, overlays, annotations)`,args:{node:r,defaultOpen:!0}},c={args:{node:r,defaultOpen:!1}},l={name:`Source only`,args:{node:i,defaultOpen:!0}},u={name:`Changed by a run`,args:{node:r,defaultOpen:!0,changed:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Full detail (targets, overlays, annotations)",
  args: {
    node: richBlock,
    defaultOpen: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    node: richBlock,
    defaultOpen: false
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Source only",
  args: {
    node: plainBlock,
    defaultOpen: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Changed by a run",
  args: {
    node: richBlock,
    defaultOpen: true,
    changed: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Rich`,`Collapsed`,`Plain`,`Changed`]}))();export{u as Changed,c as Collapsed,l as Plain,s as Rich,d as __namedExportsOrder,o as default};