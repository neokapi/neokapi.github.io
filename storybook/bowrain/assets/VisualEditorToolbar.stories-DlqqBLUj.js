import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,t as r}from"./VisualEditorToolbar-CiB_pbkY.js";import{H as i,K as a,U as o,d as s,f as c,h as l,i as u,n as d,o as f,p,q as m,t as h,v as g,w as _,y as v}from"./fixtures-DeaKTaB9.js";var y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),s(),y=t(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Editor/Visual/VisualEditorToolbar`,component:r,tags:[`autodocs`],args:{onInsertTag:b()},decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:600,padding:16},children:(0,y.jsx)(e,{})})]},S={args:{sourceRuns:[d,h]}},C={args:{sourceRuns:[d,h,p,c]}},w={args:{sourceRuns:_}},T={args:{sourceRuns:[d,h,p,c,m,a,o,i,v,g,f,u,l]}},E={args:{sourceRuns:_,disabled:!0}},D={args:{sourceRuns:[]}},O=[`BoldOnly`,`BoldAndItalic`,`AllTags`,`ExtendedTags`,`Disabled`,`Empty`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sourceRuns: [boldOpen, boldClose]
  }
}`,...S.parameters?.docs?.source},description:{story:`Bold only`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sourceRuns: [boldOpen, boldClose, italicOpen, italicClose]
  }
}`,...C.parameters?.docs?.source},description:{story:`Bold + italic`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sourceRuns: richRuns
  }
}`,...w.parameters?.docs?.source},description:{story:`All tag types from rich spans`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sourceRuns: [boldOpen, boldClose, italicOpen, italicClose, underlineOpen, underlineClose, strikeOpen, strikeClose, linkOpen, linkClose, codeOpen, codeClose, lineBreak]
  }
}`,...T.parameters?.docs?.source},description:{story:`Extended set including underline, strikethrough`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    sourceRuns: richRuns,
    disabled: true
  }
}`,...E.parameters?.docs?.source},description:{story:`Disabled state (not editing)`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    sourceRuns: []
  }
}`,...D.parameters?.docs?.source},description:{story:`No spans — renders nothing`,...D.parameters?.docs?.description}}}})))()}k();export{w as AllTags,C as BoldAndItalic,S as BoldOnly,E as Disabled,D as Empty,T as ExtendedTags,O as __namedExportsOrder,x as default};