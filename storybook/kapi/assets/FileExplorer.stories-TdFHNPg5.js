import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{a,i as o,n as s,r as c,s as l,t as u}from"./FileSelectorField-D0UBnVEw.js";function d({multiple:e,initial:t}){let n=l({}),[r,i]=(0,p.useState)(t);return(0,m.jsxs)(`div`,{className:`max-w-3xl`,children:[(0,m.jsx)(c,{library:n,selection:r,onSelectionChange:i,multiple:e}),(0,m.jsx)(`pre`,{className:`mt-3 rounded-md bg-muted p-2 text-xs`,children:JSON.stringify(r,null,2)})]})}function f({multiple:e}){let t=l({}),[n,r]=(0,p.useState)(e?{mode:`glob`,paths:[],pattern:`**/*.json`}:{mode:`single`,paths:[`messages.json`]});return(0,m.jsx)(`div`,{className:`max-w-xl`,children:(0,m.jsx)(u,{label:e?i(`jVUojo7nit7`,`Inputs`):i(`lfGlO1Tc7Hn`,`File`),library:t,selection:n,onSelectionChange:r,multiple:e})})}var p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),p=t(),o(),s(),a(),m=n(),h={title:`Lab/File Explorer`,parameters:{layout:`padded`}},g={render:()=>(0,m.jsx)(d,{multiple:!1,initial:{mode:`single`,paths:[`messages.json`]}})},_={render:()=>(0,m.jsx)(d,{multiple:!0,initial:{mode:`multi`,paths:[`messages.json`,`app.xliff`]}})},v={render:()=>(0,m.jsx)(d,{multiple:!0,initial:{mode:`glob`,paths:[],pattern:`*.json`}})},y={name:`Compact field — single`,render:()=>(0,m.jsx)(f,{})},b={name:`Compact field — glob`,render:()=>(0,m.jsx)(f,{multiple:!0})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ExplorerDemo multiple={false} initial={{
    mode: "single",
    paths: ["messages.json"]
  }} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ExplorerDemo multiple initial={{
    mode: "multi",
    paths: ["messages.json", "app.xliff"]
  }} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ExplorerDemo multiple initial={{
    mode: "glob",
    paths: [],
    pattern: "*.json"
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Compact field — single",
  render: () => <FieldDemo />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Compact field — glob",
  render: () => <FieldDemo multiple />
}`,...b.parameters?.docs?.source}}},x=[`SingleSelect`,`MultiSelect`,`GlobSelect`,`CompactFieldSingle`,`CompactFieldGlob`]})))()}S();export{b as CompactFieldGlob,y as CompactFieldSingle,v as GlobSelect,_ as MultiSelect,g as SingleSelect,x as __namedExportsOrder,h as default};