import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{t as n}from"./src-CNuSz2sU.js";import{l as r}from"./MemoryGroupedEntry-znZT1mJm.js";import{r as i,t as a}from"./editorText-5eVZzTri.js";import{d as o,f as s,h as c,i as l,n as u,o as d,p as f,t as p,v as m,w as h,y as g}from"./fixtures-DeaKTaB9.js";var _,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),o(),i(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Editor/Tags/TagPalette`,component:r,tags:[`autodocs`],args:{onInsert:v()},decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:600,padding:16},children:(0,_.jsx)(e,{})})]},b={args:{sourceSpans:a([u,p])}},x={args:{sourceSpans:a([u,p,f,s,g,m])}},S={args:{sourceSpans:a([d,l,c])}},C={args:{sourceSpans:a(h)}},w={args:{sourceSpans:a([u,p,f,s]),usedSpans:a([u,p])}},T={args:{sourceSpans:a([])}},E=[`BoldPair`,`MultiplePairs`,`WithCodeAndBreak`,`AllTags`,`PartiallyUsed`,`Empty`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: codeSpans([boldOpen, boldClose])
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: codeSpans([boldOpen, boldClose, italicOpen, italicClose, linkOpen, linkClose])
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: codeSpans([codeOpen, codeClose, lineBreak])
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: codeSpans(richRuns)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: codeSpans([boldOpen, boldClose, italicOpen, italicClose]),
    usedSpans: codeSpans([boldOpen, boldClose])
  }
}`,...w.parameters?.docs?.source},description:{story:`Some tags already used — shown dimmed`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: codeSpans([])
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{C as AllTags,b as BoldPair,T as Empty,x as MultiplePairs,w as PartiallyUsed,S as WithCodeAndBreak,E as __namedExportsOrder,y as default};