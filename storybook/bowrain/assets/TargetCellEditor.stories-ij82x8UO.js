import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{t as n}from"./src-CC62kP2l.js";import{r}from"./MemoryGroupedEntry-znZT1mJm.js";import{i,r as a,t as o}from"./editorText-Cc-LO3W4.js";import{V as s,_ as c,d as l,w as u}from"./fixtures-BBShYecR.js";var d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),l(),a(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Editor/Core/TargetCellEditor`,component:r,tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,d.jsx)(e,{})})]},m={args:{initialCodedText:``,initialSpans:[],sourceSpans:o(s),onSave:f(),onCancel:f()}},h={args:{initialCodedText:i(s).codedText,initialSpans:i(s).spans,sourceSpans:o(s),onSave:f(),onCancel:f()}},g={args:{initialCodedText:i(c).codedText,initialSpans:i(c).spans,sourceSpans:o(c),onSave:f(),onCancel:f()}},_={args:{initialCodedText:i(u).codedText,initialSpans:i(u).spans,sourceSpans:o(u),onSave:f(),onCancel:f()}},v=[`Empty`,`WithBoldText`,`WithLinks`,`RichContent`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    initialCodedText: "",
    initialSpans: [],
    sourceSpans: codeSpans(simpleBoldRuns),
    onSave: fn(),
    onCancel: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    initialCodedText: toEditorText(simpleBoldRuns).codedText,
    initialSpans: toEditorText(simpleBoldRuns).spans,
    sourceSpans: codeSpans(simpleBoldRuns),
    onSave: fn(),
    onCancel: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    initialCodedText: toEditorText(linkAndItalicRuns).codedText,
    initialSpans: toEditorText(linkAndItalicRuns).spans,
    sourceSpans: codeSpans(linkAndItalicRuns),
    onSave: fn(),
    onCancel: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    initialCodedText: toEditorText(richRuns).codedText,
    initialSpans: toEditorText(richRuns).spans,
    sourceSpans: codeSpans(richRuns),
    onSave: fn(),
    onCancel: fn()
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{m as Empty,_ as RichContent,h as WithBoldText,g as WithLinks,v as __namedExportsOrder,p as default};