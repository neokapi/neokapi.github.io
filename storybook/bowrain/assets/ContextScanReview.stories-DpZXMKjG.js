import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{dt as n,ft as r}from"./iframe-y4HpU7xF.js";import{n as i,r as a}from"./mock-adapter-BhWy-sNy.js";import{n as o,r as s}from"./decorators-DW3CtzVQ.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{r(),o(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Brand Scan/ContextScanReview`,component:n,tags:[`autodocs`],decorators:[s,e=>(0,c.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,c.jsx)(e,{})})]},d={args:{draft:a,onApproved:l(),onRegenerate:l()}},f={args:{draft:{...a,truncated:!0},onApproved:l(),onRegenerate:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    draft: sampleContextScanDraft,
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...d.parameters?.docs?.source},description:{story:`A completed draft with confidence, attribution, terms, and the live tester.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...sampleContextScanDraft,
      truncated: true
    },
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`A truncated corpus notes that the draft rests on a sample.`,...f.parameters?.docs?.description}}},p=[`CompletedDraft`,`TruncatedCorpus`]})))()}m();export{d as CompletedDraft,f as TruncatedCorpus,p as __namedExportsOrder,u as default};