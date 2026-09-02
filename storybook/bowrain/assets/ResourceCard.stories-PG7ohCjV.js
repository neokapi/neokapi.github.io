import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ResourceCard-B7w45ICR.js";import{n as i,t as a}from"./book-open-BAg67-aQ.js";import{n as o,t as s}from"./database-B4rWh5GY.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),o(),i(),c=t(),l={title:`Resource Browser/ResourceCard`,component:r,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:400,padding:16},children:(0,c.jsx)(e,{})})],parameters:{docs:{description:{component:`Card for the resource picker landing page. Shows resource name, path, entry count, last modified time, and file size. Used for both content-memory databases and terms stores.`}}}},u={args:{name:`my-project`,path:`~/.config/kapi/tm/my-project.db`,entryCount:1284,size:524288,modified:new Date(Date.now()-36e5).toISOString(),icon:(0,c.jsx)(s,{size:18}),onClick:()=>{}}},d={args:{name:`acme-terms`,path:`~/.config/kapi/terms/acme-terms.db`,entryCount:347,size:131072,modified:new Date(Date.now()-1728e5).toISOString(),icon:(0,c.jsx)(a,{size:18}),onClick:()=>{}}},f={args:{name:`enterprise-tm`,path:`/shared/localization/enterprise-memory.db`,entryCount:284619,size:157286400,modified:new Date(Date.now()-864e5).toISOString(),icon:(0,c.jsx)(s,{size:18}),onClick:()=>{}}},p={args:{name:``,path:``,loading:!0,onClick:()=>{}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "my-project",
    path: "~/.config/kapi/tm/my-project.db",
    entryCount: 1284,
    size: 524288,
    modified: new Date(Date.now() - 3600000).toISOString(),
    icon: <Database size={18} />,
    onClick: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "acme-terms",
    path: "~/.config/kapi/terms/acme-terms.db",
    entryCount: 347,
    size: 131072,
    modified: new Date(Date.now() - 172800000).toISOString(),
    icon: <BookOpen size={18} />,
    onClick: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "enterprise-tm",
    path: "/shared/localization/enterprise-memory.db",
    entryCount: 284619,
    size: 157286400,
    modified: new Date(Date.now() - 86400000).toISOString(),
    icon: <Database size={18} />,
    onClick: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: "",
    path: "",
    loading: true,
    onClick: () => {}
  }
}`,...p.parameters?.docs?.source}}},m=[`MemoryCard`,`TermsCard`,`LargeFile`,`Loading`]})))()}h();export{f as LargeFile,p as Loading,u as MemoryCard,d as TermsCard,m as __namedExportsOrder,l as default};