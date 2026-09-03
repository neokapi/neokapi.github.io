import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,n as r,t as i}from"./schema-story-C1OgyvTk.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),a=t(),o={title:`Formats & Tools/Formats/Data/XML Format`,parameters:{layout:`padded`}},s={name:`Native Configuration`,render:()=>(0,a.jsx)(r,{schemaName:`xml`,source:`builtIn`})},c={name:`Okapi Configuration`,render:()=>(0,a.jsx)(r,{schemaName:`okf_xml`,source:`bridge`})},l={name:`Side by Side`,render:()=>(0,a.jsx)(i,{nativeName:`xml`,okapiName:`okf_xml`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Native Configuration",
  render: () => <FormatConfig schemaName="xml" source="builtIn" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Okapi Configuration",
  render: () => <FormatConfig schemaName="okf_xml" source="bridge" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Side by Side",
  render: () => <FormatCompare nativeName="xml" okapiName="okf_xml" />
}`,...l.parameters?.docs?.source}}},u=[`NativeConfig`,`OkapiConfig`,`Compare`]})))()}d();export{l as Compare,s as NativeConfig,c as OkapiConfig,u as __namedExportsOrder,o as default};