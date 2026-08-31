import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./ParameterField-C_2GohJO.js";function a({name:e,schema:t,initial:n}){let[r,a]=(0,o.useState)(n);return(0,s.jsxs)(`div`,{className:`w-80 rounded-lg border p-4`,children:[(0,s.jsx)(i,{name:e,schema:t,value:r,onChange:a}),(0,s.jsx)(`pre`,{className:`mt-4 rounded bg-muted p-2 text-xs text-muted-foreground`,children:JSON.stringify(r??t.default??null)})]})}var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{o=t(),r(),s=n(),c={title:`Formats & Tools/Schema/ParameterField`,component:i,parameters:{layout:`centered`}},l={render:()=>(0,s.jsx)(a,{name:`prefix`,schema:{type:`string`,description:`Prefix added to translations`,default:`[`}})},u={render:()=>(0,s.jsx)(a,{name:`expansionPercent`,schema:{type:`integer`,description:`Expand text length %`,default:30,minimum:0,maximum:200}})},d={render:()=>(0,s.jsx)(a,{name:`applyAccents`,schema:{type:`boolean`,description:`Apply diacritics to characters`},initial:!0})},f={render:()=>(0,s.jsx)(a,{name:`tone`,schema:{type:`string`,description:`Rewrite tone`,enum:[`formal`,`neutral`,`casual`],default:`neutral`}})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="prefix" schema={{
    type: "string",
    description: "Prefix added to translations",
    default: "["
  }} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="expansionPercent" schema={{
    type: "integer",
    description: "Expand text length %",
    default: 30,
    minimum: 0,
    maximum: 200
  }} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="applyAccents" schema={{
    type: "boolean",
    description: "Apply diacritics to characters"
  }} initial={true} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="tone" schema={{
    type: "string",
    description: "Rewrite tone",
    enum: ["formal", "neutral", "casual"],
    default: "neutral"
  }} />
}`,...f.parameters?.docs?.source}}},p=[`TextField`,`NumberField`,`BooleanField`,`EnumField`]})))()}m();export{d as BooleanField,f as EnumField,u as NumberField,l as TextField,p as __namedExportsOrder,c as default};