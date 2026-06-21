import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{ct as n,lt as r}from"./iframe-BUx8TNnq.js";import{r as i,t as a}from"./fixtures-DqjDDHRy.js";var o,s,c,l,u,d,f,p;e((()=>{r(),a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Bravo/BravoConversationList`,component:n,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:400,padding:16},children:(0,o.jsx)(e,{})})]},l={args:{conversations:i,onSelect:s(),onDelete:s(),onNew:s()}},u={args:{conversations:i,activeId:`conv-1`,onSelect:s(),onDelete:s(),onNew:s()}},d={args:{conversations:[],onSelect:s(),onNew:s()}},f={args:{conversations:[],loading:!0,onSelect:s(),onNew:s()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    onSelect: fn(),
    onDelete: fn(),
    onNew: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: sampleConversations,
    activeId: "conv-1",
    onSelect: fn(),
    onDelete: fn(),
    onNew: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: [],
    onSelect: fn(),
    onNew: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    conversations: [],
    loading: true,
    onSelect: fn(),
    onNew: fn()
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithActive`,`Empty`,`Loading`]}))();export{l as Default,d as Empty,f as Loading,u as WithActive,p as __namedExportsOrder,c as default};