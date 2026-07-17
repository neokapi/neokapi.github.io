import{c as e,i as t}from"./preload-helper-a38IrJcw.js";import{t as n}from"./react-hDuJKfaT.js";import{t as r}from"./jsx-runtime-DuIU0fMU.js";import{a as i,o as a}from"./iframe-HaCkZWP6.js";function o({name:e,schema:t,initial:n}){let[r,a]=(0,s.useState)(n);return(0,c.jsxs)(`div`,{className:`w-80 rounded-lg border p-4`,children:[(0,c.jsx)(i,{name:e,schema:t,value:r,onChange:a}),(0,c.jsx)(`pre`,{className:`mt-4 rounded bg-muted p-2 text-xs text-muted-foreground`,children:JSON.stringify(r??t.default??null)})]})}var s,c,l,u,d,f,p,m;t((()=>{s=e(n(),1),a(),c=r(),l={title:`Formats & Tools/Schema/ParameterField`,component:i,parameters:{layout:`centered`}},u={render:()=>(0,c.jsx)(o,{name:`prefix`,schema:{type:`string`,description:`Prefix added to translations`,default:`[`}})},d={render:()=>(0,c.jsx)(o,{name:`expansionPercent`,schema:{type:`integer`,description:`Expand text length %`,default:30,minimum:0,maximum:200}})},f={render:()=>(0,c.jsx)(o,{name:`applyAccents`,schema:{type:`boolean`,description:`Apply diacritics to characters`},initial:!0})},p={render:()=>(0,c.jsx)(o,{name:`tone`,schema:{type:`string`,description:`Rewrite tone`,enum:[`formal`,`neutral`,`casual`],default:`neutral`}})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="prefix" schema={{
    type: "string",
    description: "Prefix added to translations",
    default: "["
  }} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="expansionPercent" schema={{
    type: "integer",
    description: "Expand text length %",
    default: 30,
    minimum: 0,
    maximum: 200
  }} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="applyAccents" schema={{
    type: "boolean",
    description: "Apply diacritics to characters"
  }} initial={true} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <FieldHarness name="tone" schema={{
    type: "string",
    description: "Rewrite tone",
    enum: ["formal", "neutral", "casual"],
    default: "neutral"
  }} />
}`,...p.parameters?.docs?.source}}},m=[`TextField`,`NumberField`,`BooleanField`,`EnumField`]}))();export{f as BooleanField,p as EnumField,d as NumberField,u as TextField,m as __namedExportsOrder,l as default};