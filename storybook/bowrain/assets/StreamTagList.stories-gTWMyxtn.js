import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{cr as n,lr as r}from"./iframe-BqWYzkb7.js";import{s as i,u as a,w as o}from"./fixtures-PyhbZV0t.js";var s,c,l,u,d,f,p;e((()=>{r(),i(),s=t(),c={title:`Streams/Tags/StreamTagList`,component:n,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{padding:24,maxWidth:600},children:(0,s.jsx)(e,{})})]},l={args:{tags:o}},u={args:{tags:o,onDelete:e=>alert(`Delete: ${e}`)}},d={args:{tags:[]}},f={args:{tags:[a]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tags: sampleTags
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    tags: sampleTags,
    onDelete: (name: string) => alert(\`Delete: \${name}\`)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tags: []
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tags: [mergeTag]
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithDelete`,`Empty`,`SingleMerge`]}))();export{l as Default,d as Empty,f as SingleMerge,u as WithDelete,p as __namedExportsOrder,c as default};