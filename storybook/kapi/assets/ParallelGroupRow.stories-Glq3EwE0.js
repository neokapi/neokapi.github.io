import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,t as r}from"./flow-editor-CIgEIpmR.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Flow editor/ParallelGroupRow`,component:n,tags:[`autodocs`],args:{index:0,count:1,tools:[{name:`qa`,display_name:`Quality Check`,description:`Check the result against the rules.`},{name:`voice-vocab-check`,display_name:`Voice check`,description:`Hold the wording to the voice profile.`},{name:`word-count`,display_name:`Word count`,description:`Count words and segments.`}],onChange:a(),onRemove:a(),onMoveUp:a(),onMoveDown:a()},render:e=>(0,i.jsx)(`ul`,{className:`max-w-2xl`,children:(0,i.jsx)(n,{...e})})},s={args:{step:{tool:``,parallel:[{tool:`qa`},{tool:`voice-vocab-check`}]}}},c={args:{step:{tool:``,parallel:[{tool:`qa`}]}}},l={args:{step:{tool:``,parallel:[]}}},u={args:{step:{tool:``,parallel:[{tool:`qa`},{tool:`voice-vocab-check`}]},readOnly:!0}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "",
      parallel: [{
        tool: "qa"
      }, {
        tool: "voice-vocab-check"
      }]
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "",
      parallel: [{
        tool: "qa"
      }]
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "",
      parallel: []
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "",
      parallel: [{
        tool: "qa"
      }, {
        tool: "voice-vocab-check"
      }]
    },
    readOnly: true
  }
}`,...u.parameters?.docs?.source}}},d=[`TwoBranches`,`OneBranch`,`Empty`,`ReadOnly`]})))()}f();export{l as Empty,c as OneBranch,u as ReadOnly,s as TwoBranches,d as __namedExportsOrder,o as default};