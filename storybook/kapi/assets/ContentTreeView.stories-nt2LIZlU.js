import{i as e}from"./preload-helper-DRGloZ2I.js";import{i as t,t as n}from"./preview-ehBc0k31.js";import{r,t as i}from"./mockData-BoeV-ulQ.js";var a,o,s,c,l;e((()=>{n(),i(),a={title:`Lab/Content Tree`,component:t,parameters:{layout:`padded`}},o={args:{tree:r}},s={args:{tree:r,expandBlocks:!0}},c={name:`With a changed block`,args:{tree:r,changedIds:new Set([`greeting`])}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tree: mockTree
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tree: mockTree,
    expandBlocks: true
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "With a changed block",
  args: {
    tree: mockTree,
    changedIds: new Set(["greeting"])
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`BlocksExpanded`,`WithChangedBlock`]}))();export{s as BlocksExpanded,o as Default,c as WithChangedBlock,l as __namedExportsOrder,a as default};