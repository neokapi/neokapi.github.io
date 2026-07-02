import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{o as n,t as r}from"./preview-ehBc0k31.js";import{a as i,t as a}from"./previewFixtures-BfQyVG-C.js";var o,s,c,l,u,d,f,p;e((()=>{r(),i(),o=t(),s={title:`Lab/PreviewKit/FileBrowser`,component:n,parameters:{layout:`padded`}},c=e=>new Uint8Array(e),l=a.map((e,t)=>({...e,bytes:c(900+t*1300)})),u={render:()=>(0,o.jsx)(n,{files:l,defaultView:`grid`})},d={name:`List`,render:()=>(0,o.jsx)(n,{files:l,defaultView:`list`})},f={name:`onOpen callback (no inline viewer)`,render:()=>(0,o.jsx)(n,{files:l,onOpen:e=>window.alert(`Open ${e.filename}`)})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FileBrowser files={files} defaultView="grid" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "List",
  render: () => <FileBrowser files={files} defaultView="list" />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "onOpen callback (no inline viewer)",
  render: () => <FileBrowser files={files} onOpen={f => window.alert(\`Open \${f.filename}\`)} />
}`,...f.parameters?.docs?.source}}},p=[`Grid`,`ListView`,`Callback`]}))();export{f as Callback,u as Grid,d as ListView,p as __namedExportsOrder,s as default};