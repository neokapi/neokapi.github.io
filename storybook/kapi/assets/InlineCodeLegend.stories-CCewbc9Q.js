import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{r,t as i}from"./runtime-D9E4JuzJ.js";import{n as a,t as o}from"./InlineCodeLegend-CXCuy0wa.js";import{a as s,g as c,m as l,u}from"./fixtures-CW8Bvy8j.js";function d({spans:e}){let[t,n]=(0,f.useState)(!0);return t?(0,p.jsx)(o,{spans:e,onClose:()=>n(!1)}):(0,p.jsx)(`button`,{onClick:()=>n(!0),children:i(`jGflaGpZYvV`,`Show legend`)})}var f,p,m,h,g,_,v,y;e((()=>{r(),f=t(),a(),s(),p=n(),m={title:`Editor/Tags/InlineCodeLegend`,component:o,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,p.jsx)(e,{})})]},h={render:()=>(0,p.jsx)(d,{spans:l})},g={render:()=>(0,p.jsx)(d,{spans:c})},_={render:()=>(0,p.jsx)(d,{spans:u})},v={args:{spans:[],onClose:()=>{}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <LegendWrapper spans={richSpans} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <LegendWrapper spans={simpleBoldSpans} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <LegendWrapper spans={linkAndItalicSpans} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    spans: [],
    onClose: () => {}
  }
}`,...v.parameters?.docs?.source}}},y=[`AllTagTypes`,`BoldOnly`,`LinksAndItalic`,`Empty`]}))();export{h as AllTagTypes,g as BoldOnly,v as Empty,_ as LinksAndItalic,y as __namedExportsOrder,m as default};