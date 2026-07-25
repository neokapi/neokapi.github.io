import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{It as n,Lt as r}from"./iframe-dL_Pfrgq.js";import{n as i,r as a}from"./decorators-B1AnV6U3.js";var o,s,c,l,u,d;e((()=>{r(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Brand Scan/BrandScanInput`,component:n,tags:[`autodocs`],decorators:[a,e=>(0,o.jsx)(`div`,{style:{maxWidth:720,padding:24},children:(0,o.jsx)(e,{})})]},l={args:{onStarted:s()}},u={args:{onStarted:s(),initialRequest:{paste_text:`We build precise, dependable tools for translators.`,urls:[`https://acme.example/about`,`https://acme.example/blog/voice`],repo_url:`https://github.com/acme/website`,profile_name:`Acme Brand Voice`,domain:`developer tools`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    onStarted: fn()
  }
}`,...l.parameters?.docs?.source},description:{story:`Empty intake — the start button stays disabled until a source is added.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onStarted: fn(),
    initialRequest: {
      paste_text: "We build precise, dependable tools for translators.",
      urls: ["https://acme.example/about", "https://acme.example/blog/voice"],
      repo_url: "https://github.com/acme/website",
      profile_name: "Acme Brand Voice",
      domain: "developer tools"
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Prefilled from a previous request (the regenerate path).`,...u.parameters?.docs?.description}}},d=[`Empty`,`Prefilled`]}))();export{l as Empty,u as Prefilled,d as __namedExportsOrder,c as default};