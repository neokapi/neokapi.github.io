import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{r as i,t as a}from"./runtime-CI09VOSa.js";import{N as o,P as s}from"./iframe-DiXvn8E7.js";import{a as c,g as l,m as u,u as d}from"./fixtures-Bhp7ho6u.js";function f({spans:e}){let[t,n]=(0,p.useState)(!0);return t?(0,m.jsx)(o,{spans:e,onClose:()=>n(!1)}):(0,m.jsx)(`button`,{onClick:()=>n(!0),children:a(`1SZqWa`,`Show legend`)})}var p,m,h,g,_,v,y,b;t((()=>{i(),p=e(n(),1),s(),c(),m=r(),h={title:`Editor/Tags/InlineCodeLegend`,component:o,tags:[`autodocs`],decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,m.jsx)(e,{})})]},g={render:()=>(0,m.jsx)(f,{spans:u})},_={render:()=>(0,m.jsx)(f,{spans:l})},v={render:()=>(0,m.jsx)(f,{spans:d})},y={args:{spans:[],onClose:()=>{}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <LegendWrapper spans={richSpans} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <LegendWrapper spans={simpleBoldSpans} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <LegendWrapper spans={linkAndItalicSpans} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    spans: [],
    onClose: () => {}
  }
}`,...y.parameters?.docs?.source}}},b=[`AllTagTypes`,`BoldOnly`,`LinksAndItalic`,`Empty`]}))();export{g as AllTagTypes,_ as BoldOnly,y as Empty,v as LinksAndItalic,b as __namedExportsOrder,h as default};