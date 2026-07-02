import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{r as i,t as a}from"./runtime-CI09VOSa.js";import{a as o,i as s,n as c,r as l,s as u,t as d}from"./FileSelectorField-Lm_-bm98.js";function f({multiple:e,initial:t}){let n=u({}),[r,i]=(0,m.useState)(t);return(0,h.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,h.jsx)(l,{library:n,selection:r,onSelectionChange:i,multiple:e}),(0,h.jsx)(`pre`,{className:`mt-3 rounded-md bg-muted p-2 text-xs`,children:JSON.stringify(r,null,2)})]})}function p({multiple:e}){let t=u({}),[n,r]=(0,m.useState)(e?{mode:`glob`,paths:[],pattern:`**/*.json`}:{mode:`single`,paths:[`messages.json`]});return(0,h.jsx)(`div`,{className:`max-w-xl`,children:(0,h.jsx)(d,{label:e?a(`3xn0sx`,`Inputs`):a(`Wkufc`,`File`),library:t,selection:n,onSelectionChange:r,multiple:e})})}var m,h,g,_,v,y,b,x,S;t((()=>{i(),m=e(n(),1),s(),c(),o(),h=r(),g={title:`Lab/File Explorer`,parameters:{layout:`padded`}},_={render:()=>(0,h.jsx)(f,{multiple:!1,initial:{mode:`single`,paths:[`messages.json`]}})},v={render:()=>(0,h.jsx)(f,{multiple:!0,initial:{mode:`multi`,paths:[`messages.json`,`app.xliff`]}})},y={render:()=>(0,h.jsx)(f,{multiple:!0,initial:{mode:`glob`,paths:[],pattern:`*.json`}})},b={name:`Compact field — single`,render:()=>(0,h.jsx)(p,{})},x={name:`Compact field — glob`,render:()=>(0,h.jsx)(p,{multiple:!0})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ExplorerDemo multiple={false} initial={{
    mode: "single",
    paths: ["messages.json"]
  }} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ExplorerDemo multiple initial={{
    mode: "multi",
    paths: ["messages.json", "app.xliff"]
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ExplorerDemo multiple initial={{
    mode: "glob",
    paths: [],
    pattern: "*.json"
  }} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Compact field — single",
  render: () => <FieldDemo />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Compact field — glob",
  render: () => <FieldDemo multiple />
}`,...x.parameters?.docs?.source}}},S=[`SingleSelect`,`MultiSelect`,`GlobSelect`,`CompactFieldSingle`,`CompactFieldGlob`]}))();export{x as CompactFieldGlob,b as CompactFieldSingle,y as GlobSelect,v as MultiSelect,_ as SingleSelect,S as __namedExportsOrder,g as default};