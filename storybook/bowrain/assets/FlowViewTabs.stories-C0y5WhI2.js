import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./FlowTemplateLibrary--aUoPDMP.js";import{n as a,t as o}from"./FlowViewTabs-BmYrz0AR.js";import{i as s,n as c,r as l,t as u}from"./fixtures-DNO8bAUC.js";function d(e){let[t,n]=(0,f.useState)(e.flow);return(0,p.jsx)(o,{...e,flow:t,onChange:t=>{n(t),e.onChange(t)}})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{f=t(),a(),r(),u(),p=n(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Translate options`,type:`object`,properties:{provider:{type:`string`,title:`Provider`,description:`Which provider handles the translation.`,options:[{value:`openai`,label:`OpenAI`},{value:`anthropic`,label:`Anthropic`}]},temperature:{type:`number`,title:`Temperature`,minimum:0,maximum:1,default:.2}}},g=e=>e===`translate`?h:null,_={description:`Reuse approved wording, translate the rest, and check the result.`,steps:[{tool:`recycle`},{tool:`translate`,config:{provider:`anthropic`}},{tool:``,parallel:[{tool:`qa`},{tool:`word-count`}]}]},v={title:`Flow Editor/FlowViewTabs`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The flow workbench: Steps (the shared linear step editor, where authoring happens), Diagram (the same steps as a read-only canvas with the IO diagnostics) and, once a run of the flow is loaded, Run (the replay). Both kapi desktop and the platform render this composition.`}}},args:{flowName:`translate-and-check`,flow:_,tools:l,onChange:m(),onGetSchema:g,onRun:m(),isDefault:!0,onToggleDefault:m(),onRename:m(),templateLibrary:(0,p.jsx)(i,{onSelect:m()})},render:e=>(0,p.jsx)(`div`,{style:{height:640},children:(0,p.jsx)(d,{...e})})},y={},b={args:{defaultView:`diagram`}},x={name:`With a recorded run`,args:{flowName:`secure-translate`,flow:{steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},tools:s,trace:c,defaultView:`run`,isDefault:!1}},S={name:`Read-only (built-in flow)`,args:{readOnly:!0,isDefault:!1,onToggleDefault:void 0,onRename:void 0}},C={args:{flowName:`new-flow`,flow:{steps:[]},isDefault:!1}},w={name:`Steps (dark)`,globals:{theme:`dark`}},T={name:`Diagram (dark)`,globals:{theme:`dark`},args:{defaultView:`diagram`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "diagram"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "With a recorded run",
  args: {
    flowName: "secure-translate",
    flow: {
      steps: [{
        tool: "redact",
        config: {
          detectors: ["entities"]
        }
      }, {
        tool: "translate"
      }]
    },
    tools: transformerAwareTools,
    trace: runReviewTrace,
    defaultView: "run",
    isDefault: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Read-only (built-in flow)",
  args: {
    readOnly: true,
    isDefault: false,
    onToggleDefault: undefined,
    onRename: undefined
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "new-flow",
    flow: {
      steps: []
    },
    isDefault: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Steps (dark)",
  globals: {
    theme: "dark"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Diagram (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    defaultView: "diagram"
  }
}`,...T.parameters?.docs?.source}}},E=[`Steps`,`Diagram`,`WithRun`,`ReadOnly`,`EmptyFlow`,`StepsDark`,`DiagramDark`]})))()}D();export{b as Diagram,T as DiagramDark,C as EmptyFlow,S as ReadOnly,y as Steps,w as StepsDark,x as WithRun,E as __namedExportsOrder,v as default};