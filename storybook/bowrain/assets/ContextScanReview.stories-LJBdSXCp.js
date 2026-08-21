import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{dt as n,ft as r}from"./iframe-DWincBk0.js";import{n as i,r as a}from"./mock-adapter-Bz89tJSY.js";import{n as o,r as s}from"./decorators-yYb4bLpE.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Context Scan/ContextScanReview`,component:n,tags:[`autodocs`],decorators:[s,e=>(0,c.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,c.jsx)(e,{})})]},d={args:{draft:a,onApproved:l(),onRegenerate:l()}},f={args:{draft:{...a,truncated:!0},onApproved:l(),onRegenerate:l()}},p={args:{draft:{...a,artefacts:[]},onApproved:l(),onRegenerate:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`A truncated corpus notes that the draft rests on a sample.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...sampleContextScanDraft,
      artefacts: []
    },
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`A scan can finish having proposed nothing — an empty or unreadable corpus is
the usual cause. The surface says so rather than rendering an editor full of
blank fields that looks like a loaded draft.`,...p.parameters?.docs?.description}}},m=[`CompletedDraft`,`TruncatedCorpus`,`NoVoiceProposed`]})))()}h();export{d as CompletedDraft,p as NoVoiceProposed,f as TruncatedCorpus,m as __namedExportsOrder,u as default};