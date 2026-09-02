import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./VisualEditorToolbar-D_PZ4kzh.js";import{D as i,G as a,K as o,X as s,Y as c,b as l,d as u,f as d,m as f,n as p,o as m,r as h,t as g,u as _,y as v}from"./fixtures-bFkNHcXq.js";var y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),_(),y=t(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Editor/Visual/VisualEditorToolbar`,component:r,tags:[`autodocs`],args:{onInsertTag:b()},decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:600,padding:16},children:(0,y.jsx)(e,{})})]},S={args:{sourceSpans:[p,g]}},C={args:{sourceSpans:[p,g,d,u]}},w={args:{sourceSpans:i}},T={args:{sourceSpans:[p,g,d,u,s,c,o,a,l,v,m,h,f]}},E={args:{sourceSpans:i,disabled:!0}},D={args:{sourceSpans:[]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: [boldOpen, boldClose]
  }
}`,...S.parameters?.docs?.source},description:{story:`Bold only`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: [boldOpen, boldClose, italicOpen, italicClose]
  }
}`,...C.parameters?.docs?.source},description:{story:`Bold + italic`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: richSpans
  }
}`,...w.parameters?.docs?.source},description:{story:`All tag types from rich spans`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: [boldOpen, boldClose, italicOpen, italicClose, underlineOpen, underlineClose, strikeOpen, strikeClose, linkOpen, linkClose, codeOpen, codeClose, lineBreak]
  }
}`,...T.parameters?.docs?.source},description:{story:`Extended set including underline, strikethrough`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: richSpans,
    disabled: true
  }
}`,...E.parameters?.docs?.source},description:{story:`Disabled state (not editing)`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    sourceSpans: []
  }
}`,...D.parameters?.docs?.source},description:{story:`No spans — renders nothing`,...D.parameters?.docs?.description}}},O=[`BoldOnly`,`BoldAndItalic`,`AllTags`,`ExtendedTags`,`Disabled`,`Empty`]})))()}k();export{w as AllTags,C as BoldAndItalic,S as BoldOnly,E as Disabled,D as Empty,T as ExtendedTags,O as __namedExportsOrder,x as default};