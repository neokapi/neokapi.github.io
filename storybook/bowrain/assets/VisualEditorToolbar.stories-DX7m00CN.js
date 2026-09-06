import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./VisualEditorToolbar-zzjjQ8B1.js";import{K as i,O as a,X as o,Z as s,b as c,d as l,f as u,h as d,n as f,o as p,p as m,q as h,r as g,t as _,x as v}from"./fixtures-CP74j5SD.js";var y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),l(),y=t(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Editor/Visual/VisualEditorToolbar`,component:r,tags:[`autodocs`],args:{onInsertTag:b()},decorators:[e=>(0,y.jsx)(`div`,{style:{maxWidth:600,padding:16},children:(0,y.jsx)(e,{})})]},S={args:{sourceSpans:[f,_]}},C={args:{sourceSpans:[f,_,m,u]}},w={args:{sourceSpans:a}},T={args:{sourceSpans:[f,_,m,u,s,o,h,i,v,c,p,g,d]}},E={args:{sourceSpans:a,disabled:!0}},D={args:{sourceSpans:[]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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