import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./FlowPage-CM_AuXkv.js";var i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Pages/FlowPage`,component:r,tags:[`autodocs`],args:{onChange:a(),onRun:a()},parameters:{layout:`fullscreen`},decorators:[e=>(0,i.jsx)(`div`,{style:{height:600},children:(0,i.jsx)(e,{})})]},s={args:{flowName:`translate`,flow:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]}}},c={args:{flowName:`new-flow`,flow:{steps:[]}}},l={name:`Parallel group (switch to Diagram)`,args:{flowName:`translate-and-check`,flow:{description:`Translate, then check and count in parallel.`,steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:``,parallel:[{tool:`qa`},{tool:`word-count`}]}]}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "translate",
    flow: {
      steps: [{
        tool: "translate",
        config: {
          provider: "anthropic"
        }
      }]
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "new-flow",
    flow: {
      steps: []
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Parallel group (switch to Diagram)",
  args: {
    flowName: "translate-and-check",
    flow: {
      description: "Translate, then check and count in parallel.",
      steps: [{
        tool: "translate",
        config: {
          provider: "anthropic"
        }
      }, {
        tool: "",
        parallel: [{
          tool: "qa"
        }, {
          tool: "word-count"
        }]
      }]
    }
  }
}`,...l.parameters?.docs?.source}}},u=[`WithFlows`,`Empty`,`ParallelFlow`]})))()}d();export{c as Empty,l as ParallelFlow,s as WithFlows,u as __namedExportsOrder,o as default};