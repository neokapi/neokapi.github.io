import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{Mt as n,Nt as r}from"./iframe-Diy2uKCY.js";import{n as i,r as a}from"./mock-adapter-DplgevwH.js";import{n as o,r as s}from"./decorators-BrzWJcO0.js";var c,l,u,d,f,p;e((()=>{r(),o(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Brand Scan/BrandScanReview`,component:n,tags:[`autodocs`],decorators:[s,e=>(0,c.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,c.jsx)(e,{})})]},d={args:{draft:a,onApproved:l(),onRegenerate:l()}},f={args:{draft:{...a,truncated:!0},onApproved:l(),onRegenerate:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    draft: sampleBrandScanDraft,
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...d.parameters?.docs?.source},description:{story:`A completed draft with confidence, attribution, terms, and the live tester.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...sampleBrandScanDraft,
      truncated: true
    },
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`A truncated corpus notes that the draft rests on a sample.`,...f.parameters?.docs?.description}}},p=[`CompletedDraft`,`TruncatedCorpus`]}))();export{d as CompletedDraft,f as TruncatedCorpus,p as __namedExportsOrder,u as default};