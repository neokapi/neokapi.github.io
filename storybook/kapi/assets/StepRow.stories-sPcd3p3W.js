import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,m as r,t as i}from"./flow-editor-Cg3p66jm.js";function a(e){let t=n(3,s());return(0,o.jsx)(`ul`,{className:`max-w-xl`,children:(0,o.jsx)(r,{...e,reorder:e.readOnly?void 0:t(e.index)})})}var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={name:`translate`,display_name:`Translate`,description:`Translate with an AI provider.`,has_schema:!0},l={title:`Translate options`,type:`object`,properties:{provider:{type:`string`,title:`Provider`,description:`Which provider handles the translation.`,options:[{value:`openai`,label:`OpenAI`},{value:`anthropic`,label:`Anthropic`}]},temperature:{type:`number`,title:`Temperature`,minimum:0,maximum:1,default:.2}}},u={title:`Flow editor/StepRow`,component:r,tags:[`autodocs`],args:{onRemove:s(),onConfigChange:s()},render:e=>(0,o.jsx)(a,{...e})},d={args:{step:{tool:`translate`},tool:c,index:1,schema:l}},f={args:{step:{tool:`translate`,config:{provider:`anthropic`}},tool:c,index:1,schema:l,defaultOpen:!0}},p={args:{step:{tool:`translate`},tool:c,index:1,schema:l,readOnly:!0}},m=[`Collapsed`,`OptionsExpanded`,`ReadOnly`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate"
    },
    tool: TRANSLATE,
    index: 1,
    schema: SCHEMA
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate",
      config: {
        provider: "anthropic"
      }
    },
    tool: TRANSLATE,
    index: 1,
    schema: SCHEMA,
    defaultOpen: true
  }
}`,...f.parameters?.docs?.source},description:{story:`The options area open, rendering the tool's own schema form inline.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    step: {
      tool: "translate"
    },
    tool: TRANSLATE,
    index: 1,
    schema: SCHEMA,
    readOnly: true
  }
}`,...p.parameters?.docs?.source}}}})))()}h();export{d as Collapsed,f as OptionsExpanded,p as ReadOnly,m as __namedExportsOrder,u as default};