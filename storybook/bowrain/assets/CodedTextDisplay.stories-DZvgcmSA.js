import{i as e}from"./preload-helper-DBuSV-bh.js";import{n as t,t as n}from"./CodedTextDisplay-DRWkP7qj.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r={title:`Resource Browser/CodedTextDisplay`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Renders a localization Run sequence as text interleaved with inline-code chips. Falls back to plain text when no runs are provided.`}}}},i={args:{text:`Welcome to the application`}},a=[{text:`Click `},{pcOpen:{id:`1`,type:`fmt:bold`,data:`<b>`,equiv:`b`}},{text:`here`},{pcClose:{id:`1`,type:`fmt:bold`,data:`</b>`,equiv:`b`}},{text:` to continue`}],o={args:{text:`Click here to continue`,runs:a}},s=[{ph:{id:`e1`,type:`entity:person`,data:`Alice`,equiv:`Alice`}},{text:` is a contributor`}],c={args:{text:`Alice is a contributor`,runs:s}},l=[{ph:{id:`e1`,type:`entity:person`,data:`Bob`,equiv:`Bob`}},{text:` has `},{pcOpen:{id:`2`,type:`fmt:bold`,data:`<strong>`,equiv:`strong`}},{text:`completed`},{pcClose:{id:`2`,type:`fmt:bold`,data:`</strong>`,equiv:`strong`}},{text:` `},{ph:{id:`e2`,type:`entity:number`,data:`42`,equiv:`42`}},{text:` tasks successfully`}],u={args:{text:`Bob has completed 42 tasks successfully`,runs:l}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Welcome to the application"
  }
}`,...i.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Click here to continue",
    runs: boldRuns
  }
}`,...o.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Alice is a contributor",
    runs: placeholderRuns
  }
}`,...c.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Bob has completed 42 tasks successfully",
    runs: mixedRuns
  }
}`,...u.parameters?.docs?.source}}},d=[`PlainText`,`BoldAndItalic`,`Placeholders`,`MixedContent`]}))();export{o as BoldAndItalic,u as MixedContent,c as Placeholders,i as PlainText,d as __namedExportsOrder,r as default};