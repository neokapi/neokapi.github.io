import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,t as a}from"./PropertyField-BIuFNuj0.js";function o({name:e,schema:t,initial:n}){let[r,i]=(0,s.useState)(n);return(0,c.jsxs)(`div`,{className:`w-80 rounded-lg border p-4`,children:[(0,c.jsx)(a,{name:e,schema:t,value:r,onChange:i}),(0,c.jsx)(`pre`,{className:`mt-4 rounded bg-muted p-2 text-xs text-muted-foreground`,children:JSON.stringify(r??t.default??null)})]})}var s,c,l,u,d,f,p,m,h;t((()=>{s=e(n(),1),i(),c=r(),l={title:`Formats & Tools/Schema/PropertyField`,component:a,parameters:{layout:`centered`}},u={render:()=>(0,c.jsx)(o,{name:`prefix`,schema:{type:`string`,title:`Prefix`,description:`Prefix added to translations`},initial:`[`})},d={render:()=>(0,c.jsx)(o,{name:`expansionPercent`,schema:{type:`integer`,title:`Expansion Percent`,description:`Expand text length %`,default:30,minimum:0,maximum:200}})},f={render:()=>(0,c.jsx)(o,{name:`applyAccents`,schema:{type:`boolean`,title:`Apply Accents`,default:!0}})},p={render:()=>(0,c.jsx)(o,{name:`tone`,schema:{type:`string`,title:`Tone`,description:`Rewrite tone`,enum:[`formal`,`neutral`,`casual`],default:`neutral`}})},m={render:()=>(0,c.jsx)(`div`,{className:`w-80 rounded-lg border p-4`,children:(0,c.jsx)(a,{name:`apiKey`,schema:{type:`string`,title:`API Key`,description:`Provider credential`},value:``,onChange:()=>{},error:`API key is required`})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="prefix" schema={{
    type: "string",
    title: "Prefix",
    description: "Prefix added to translations"
  }} initial="[" />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="expansionPercent" schema={{
    type: "integer",
    title: "Expansion Percent",
    description: "Expand text length %",
    default: 30,
    minimum: 0,
    maximum: 200
  }} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="applyAccents" schema={{
    type: "boolean",
    title: "Apply Accents",
    default: true
  }} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="tone" schema={{
    type: "string",
    title: "Tone",
    description: "Rewrite tone",
    enum: ["formal", "neutral", "casual"],
    default: "neutral"
  }} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 rounded-lg border p-4">
      <PropertyField name="apiKey" schema={{
      type: "string",
      title: "API Key",
      description: "Provider credential"
    }} value="" onChange={() => {}} error="API key is required" />
    </div>
}`,...m.parameters?.docs?.source}}},h=[`Text`,`Number`,`Boolean`,`EnumSelect`,`WithError`]}))();export{f as Boolean,p as EnumSelect,d as Number,u as Text,m as WithError,h as __namedExportsOrder,l as default};