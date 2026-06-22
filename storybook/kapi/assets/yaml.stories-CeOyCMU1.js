import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{i as n,n as r,t as i}from"./schema-story-Dae5ktUE.js";var a,o,s,c,l,u;e((()=>{n(),a=t(),o={title:`Formats & Tools/Formats/Data/YAML Format`,parameters:{layout:`padded`}},s={name:`Native Configuration`,render:()=>(0,a.jsx)(r,{schemaName:`yaml`,source:`builtIn`})},c={name:`Okapi Configuration`,render:()=>(0,a.jsx)(r,{schemaName:`okf_yaml`,source:`bridge`})},l={name:`Side by Side`,render:()=>(0,a.jsx)(i,{nativeName:`yaml`,okapiName:`okf_yaml`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Native Configuration",
  render: () => <FormatConfig schemaName="yaml" source="builtIn" />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Okapi Configuration",
  render: () => <FormatConfig schemaName="okf_yaml" source="bridge" />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Side by Side",
  render: () => <FormatCompare nativeName="yaml" okapiName="okf_yaml" />
}`,...l.parameters?.docs?.source}}},u=[`NativeConfig`,`OkapiConfig`,`Compare`]}))();export{l as Compare,s as NativeConfig,c as OkapiConfig,u as __namedExportsOrder,o as default};