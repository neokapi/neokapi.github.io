import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{$t as n,Qt as r,en as i,on as a,sn as o,tn as s}from"./iframe-D2rcsflS.js";var c,l,u,d,f,p,m;e((()=>{o(),s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Brand/ToneSpectrumSelector`,component:a,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:480,padding:24},children:(0,c.jsx)(e,{})})]},d={args:{label:`Formality`,options:n,value:`neutral`,onChange:l()}},f={args:{label:`Emotion`,options:r,value:`warm`,onChange:l()}},p={args:{label:`Humor`,options:i,value:`none`,onChange:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Formality",
    options: formalitySpectrum,
    value: "neutral",
    onChange: fn()
  }
}`,...d.parameters?.docs?.source},description:{story:`Formality spectrum with "neutral" selected.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Emotion",
    options: emotionSpectrum,
    value: "warm",
    onChange: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`Emotion spectrum with "warm" selected.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Humor",
    options: humorSpectrum,
    value: "none",
    onChange: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`Humor spectrum with "none" selected.`,...p.parameters?.docs?.description}}},m=[`Formality`,`Emotion`,`Humor`]}))();export{f as Emotion,d as Formality,p as Humor,m as __namedExportsOrder,u as default};