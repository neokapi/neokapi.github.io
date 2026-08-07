import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{_t as n,gt as r}from"./iframe-BDDBWphN.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Brand Scan/BrandScanProgress`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:520,padding:24},children:(0,i.jsx)(e,{})})]},s={args:{job:{id:`scan-1`,status:`queued`,progress:0,message:``,tokens_used:0}}},c={args:{job:{id:`scan-1`,status:`processing`,progress:10,message:`reading-sources`,tokens_used:0}}},l={args:{job:{id:`scan-1`,status:`processing`,progress:60,message:`drafting-voice`,tokens_used:8400}}},u={args:{job:{id:`scan-1`,status:`failed`,progress:40,message:`assembling-corpus`,tokens_used:0,error:`none of the sources produced any text`},onRetry:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    job: {
      id: "scan-1",
      status: "queued",
      progress: 0,
      message: "",
      tokens_used: 0
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    job: {
      id: "scan-1",
      status: "processing",
      progress: 10,
      message: "reading-sources",
      tokens_used: 0
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    job: {
      id: "scan-1",
      status: "processing",
      progress: 60,
      message: "drafting-voice",
      tokens_used: 8400
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    job: {
      id: "scan-1",
      status: "failed",
      progress: 40,
      message: "assembling-corpus",
      tokens_used: 0,
      error: "none of the sources produced any text"
    },
    onRetry: fn()
  }
}`,...u.parameters?.docs?.source}}},d=[`Queued`,`ReadingSources`,`DraftingVoice`,`Failed`]}))();export{l as DraftingVoice,u as Failed,s as Queued,c as ReadingSources,d as __namedExportsOrder,o as default};