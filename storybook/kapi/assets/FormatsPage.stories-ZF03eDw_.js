import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,i as n,n as r,r as i,t as a}from"./reference-data-BIKDFlAr.js";import{n as o,t as s}from"./FormatsPage-CiD-_pvr.js";var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{o(),i(),c=n,l=[...a.builtIn,...a.bridge.map(e=>({...e,source:`okapi-bridge`}))],u=[...r.builtIn,...r.bridge],d={};for(let e of u)d[e[`x-name`]]=e;f={};for(let[e,n]of Object.entries(t))f[e]=Object.entries(n).filter(([,e])=>e!=null).map(([t,n])=>({name:t,description:``,format:e,config:n,source:`built-in`}));p={title:`Pages/FormatsPage`,component:s,tags:[`autodocs`]},m={args:{formats:[],forceLoading:!0}},h={args:{formats:l,docs:c,schemas:d,presets:f}},g={name:`Built-in Only`,args:{formats:a.builtIn,schemas:d,presets:f}},_={name:`Plugin Formats`,args:{formats:a.bridge.map(e=>({...e,source:`okapi-bridge`})),docs:c,schemas:d,presets:f}},v=[`Loading`,`Default`,`BuiltInOnly`,`PluginFormats`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    formats: [],
    forceLoading: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Loading state showing skeleton format cards.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    formats,
    docs,
    schemas,
    presets
  }
}`,...h.parameters?.docs?.source},description:{story:`Default view with all formats, schemas, presets, and documentation.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Built-in Only",
  args: {
    formats: formatList.builtIn as unknown as FormatInfo[],
    schemas,
    presets
  }
}`,...g.parameters?.docs?.source},description:{story:`Built-in formats only (no plugins).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Plugin Formats",
  args: {
    formats: formatList.bridge.map(f => ({
      ...f,
      source: "okapi-bridge"
    })) as unknown as FormatInfo[],
    docs,
    schemas,
    presets
  }
}`,..._.parameters?.docs?.source},description:{story:`Plugin formats with documentation.`,..._.parameters?.docs?.description}}}})))()}y();export{g as BuiltInOnly,h as Default,m as Loading,_ as PluginFormats,v as __namedExportsOrder,p as default};