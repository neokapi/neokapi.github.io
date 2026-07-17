import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{_n as n,gn as r}from"./iframe-B_nkEXP1.js";import{c as i,i as a}from"./fixtures-gUybpXQ3.js";var o,s,c,l,u,d;e((()=>{n(),a(),o=t(),s={title:`Brand/BrandExamplePair`,component:r,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:600,padding:24},children:(0,o.jsx)(e,{})})]},c={args:{example:i[0]}},l={args:{example:{before:`Click here to learn more.`,after:`Select Learn more.`}}},u={args:{example:{before:`If you need any help setting up the integration, please don't hesitate to reach out to our friendly support team who will be happy to assist you with any questions.`,after:`For integration setup assistance, contact support. The team responds within one business day.`,explanation:`Shortened, removed hedging language, added concrete SLA.`}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    example: sampleExamples[0]
  }
}`,...c.parameters?.docs?.source},description:{story:`Typical before/after with explanation.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    example: {
      before: "Click here to learn more.",
      after: "Select Learn more."
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Before/after without explanation.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    example: {
      before: "If you need any help setting up the integration, please don't hesitate to reach out to our friendly support team who will be happy to assist you with any questions.",
      after: "For integration setup assistance, contact support. The team responds within one business day.",
      explanation: "Shortened, removed hedging language, added concrete SLA."
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Long text to test wrapping.`,...u.parameters?.docs?.description}}},d=[`WithExplanation`,`WithoutExplanation`,`LongText`]}))();export{u as LongText,c as WithExplanation,l as WithoutExplanation,d as __namedExportsOrder,s as default};