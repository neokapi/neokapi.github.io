import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{o as n,t as r}from"./flow-editor-BPwvx8eZ.js";var i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={name:`translate`,display_name:`Translate`,description:`Translate with an AI provider.`,has_schema:!0},s={title:`Translate options`,type:`object`,properties:{provider:{type:`string`,title:`Provider`,description:`Which provider handles the translation.`,options:[{value:`openai`,label:`OpenAI`},{value:`anthropic`,label:`Anthropic`}]},temperature:{type:`number`,title:`Temperature`,minimum:0,maximum:1,default:.2}}},c={title:`Flow editor/StepRow`,component:n,tags:[`autodocs`],args:{onRemove:a(),onMoveUp:a(),onMoveDown:a(),onConfigChange:a()},render:e=>(0,i.jsx)(`ul`,{className:`max-w-xl`,children:(0,i.jsx)(n,{...e})})},l={args:{step:{tool:`translate`},tool:o,index:1,count:3,schema:s}},u={args:{step:{tool:`translate`,config:{provider:`anthropic`}},tool:o,index:1,count:3,schema:s,defaultOpen:!0}},d={args:{step:{tool:`translate`},tool:o,index:0,count:3,schema:s}},f={args:{step:{tool:`translate`},tool:o,index:1,count:3,schema:s,readOnly:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate"
    },
    tool: TRANSLATE,
    index: 1,
    count: 3,
    schema: SCHEMA
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate",
      config: {
        provider: "anthropic"
      }
    },
    tool: TRANSLATE,
    index: 1,
    count: 3,
    schema: SCHEMA,
    defaultOpen: true
  }
}`,...u.parameters?.docs?.source},description:{story:`The options area open, rendering the tool's own schema form inline.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate"
    },
    tool: TRANSLATE,
    index: 0,
    count: 3,
    schema: SCHEMA
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate"
    },
    tool: TRANSLATE,
    index: 1,
    count: 3,
    schema: SCHEMA,
    readOnly: true
  }
}`,...f.parameters?.docs?.source}}},p=[`Collapsed`,`OptionsExpanded`,`FirstStep`,`ReadOnly`]})))()}m();export{l as Collapsed,d as FirstStep,u as OptionsExpanded,f as ReadOnly,p as __namedExportsOrder,c as default};