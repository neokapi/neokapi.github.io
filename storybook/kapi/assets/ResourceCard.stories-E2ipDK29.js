import{i as e}from"./preload-helper-a38IrJcw.js";import{t}from"./jsx-runtime-DuIU0fMU.js";import{Ea as n,Ei as r,t as i}from"./lucide-react-B3oJx3FB.js";import{f as a,p as o}from"./iframe-BVWkJh4B.js";var s,c,l,u,d,f,p;e((()=>{o(),i(),s=t(),c={title:`Resource Browser/ResourceCard`,component:a,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:400,padding:16},children:(0,s.jsx)(e,{})})],parameters:{docs:{description:{component:`Card for the resource picker landing page. Shows resource name, path, entry count, last modified time, and file size. Used for both content-memory databases and terms stores.`}}}},l={args:{name:`my-project`,path:`~/.config/kapi/tm/my-project.db`,entryCount:1284,size:524288,modified:new Date(Date.now()-36e5).toISOString(),icon:(0,s.jsx)(r,{size:18}),onClick:()=>{}}},u={args:{name:`brand-glossary`,path:`~/.config/kapi/termbases/brand-glossary.db`,entryCount:347,size:131072,modified:new Date(Date.now()-1728e5).toISOString(),icon:(0,s.jsx)(n,{size:18}),onClick:()=>{}}},d={args:{name:`enterprise-tm`,path:`/shared/localization/enterprise-tm.db`,entryCount:284619,size:157286400,modified:new Date(Date.now()-864e5).toISOString(),icon:(0,s.jsx)(r,{size:18}),onClick:()=>{}}},f={args:{name:``,path:``,loading:!0,onClick:()=>{}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "my-project",
    path: "~/.config/kapi/tm/my-project.db",
    entryCount: 1284,
    size: 524288,
    modified: new Date(Date.now() - 3600000).toISOString(),
    icon: <Database size={18} />,
    onClick: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "brand-glossary",
    path: "~/.config/kapi/termbases/brand-glossary.db",
    entryCount: 347,
    size: 131072,
    modified: new Date(Date.now() - 172800000).toISOString(),
    icon: <BookOpen size={18} />,
    onClick: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "enterprise-tm",
    path: "/shared/localization/enterprise-tm.db",
    entryCount: 284619,
    size: 157286400,
    modified: new Date(Date.now() - 86400000).toISOString(),
    icon: <Database size={18} />,
    onClick: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "",
    path: "",
    loading: true,
    onClick: () => {}
  }
}`,...f.parameters?.docs?.source}}},p=[`MemoryCard`,`TermsCard`,`LargeFile`,`Loading`]}))();export{d as LargeFile,f as Loading,l as MemoryCard,u as TermsCard,p as __namedExportsOrder,c as default};