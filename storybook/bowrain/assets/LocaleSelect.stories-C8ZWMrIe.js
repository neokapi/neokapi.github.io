import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{n as r,r as i,t as a}from"./LocaleSelect-DovYitVS.js";import{n as o,r as s}from"./decorators-BWq_GiCA.js";var c,l,u,d,f,p,m;e((()=>{c=t(),i(),o(),l=n(),u={title:`Components/LocaleSelect`,component:a,tags:[`autodocs`],decorators:[s,e=>(0,l.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,l.jsx)(e,{})})]},d={args:{value:`en-US`,onChange:()=>{}}},f={args:{value:``,onChange:()=>{},placeholder:`Choose a locale...`}},p={render:()=>{let[e,t]=(0,c.useState)([`fr-FR`,`de-DE`]);return(0,l.jsx)(r,{value:e,onChange:t})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: "en-US",
    onChange: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: "",
    onChange: () => {},
    placeholder: "Choose a locale..."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(["fr-FR", "de-DE"]);
    return <MultiLocaleSelect value={value} onChange={setValue} />;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithPlaceholder`,`MultiSelect`]}))();export{d as Default,p as MultiSelect,f as WithPlaceholder,m as __namedExportsOrder,u as default};