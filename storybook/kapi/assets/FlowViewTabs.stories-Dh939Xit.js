import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{n as a,t as o}from"./FlowTemplateLibrary-B5CZLV9M.js";import{n as s,t as c}from"./FlowViewTabs-C1eCPYAD.js";import{i as l,n as u,r as d,t as f}from"./fixtures-C-ddjQp0.js";function p(e){let[t,n]=(0,m.useState)(e.flow);return(0,h.jsx)(c,{...e,flow:t,onChange:t=>{n(t),e.onChange(t)}})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),m=t(),s(),a(),f(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Translate options`,type:`object`,properties:{provider:{type:`string`,title:`Provider`,description:`Which provider handles the translation.`,options:[{value:`openai`,label:`OpenAI`},{value:`anthropic`,label:`Anthropic`}]},temperature:{type:`number`,title:`Temperature`,minimum:0,maximum:1,default:.2}}},v=e=>e===`translate`?_:null,y={description:`Reuse approved wording, translate the rest, and check the result.`,steps:[{tool:`recycle`},{tool:`translate`,config:{provider:`anthropic`}},{tool:``,parallel:[{tool:`qa`},{tool:`word-count`}]}]},b={title:`Flow Editor/FlowViewTabs`,component:c,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The flow workbench: Steps (the shared linear step editor, where authoring happens), Diagram (the same steps as a read-only canvas with the IO diagnostics) and, once a run of the flow is loaded, Run (the replay). Both kapi desktop and the platform render this composition.`}}},args:{flowName:`translate-and-check`,flow:y,tools:d,onChange:g(),onGetSchema:v,onRun:g(),isDefault:!0,onToggleDefault:g(),onRename:g(),templateLibrary:(0,h.jsx)(o,{onSelect:g()})},render:e=>(0,h.jsx)(`div`,{style:{height:640},children:(0,h.jsx)(p,{...e})})},x={},S={args:{defaultView:`diagram`}},C={name:`With a recorded run`,args:{flowName:`secure-translate`,flow:{steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},tools:l,trace:u,runControls:(0,h.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:i(`fzo630U91Ds`,`contact-page.md · fr-FR`)}),defaultView:`run`,isDefault:!1}},w={name:`Read-only (built-in flow)`,args:{readOnly:!0,isDefault:!1,onToggleDefault:void 0,onRename:void 0}},T={args:{flowName:`new-flow`,flow:{steps:[]},isDefault:!1}},E={name:`Steps (dark)`,globals:{theme:`dark`}},D={name:`Diagram (dark)`,globals:{theme:`dark`},args:{defaultView:`diagram`}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "diagram"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    runControls: <span className="text-xs text-muted-foreground">contact-page.md · fr-FR</span>,
    defaultView: "run",
    isDefault: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Read-only (built-in flow)",
  args: {
    readOnly: true,
    isDefault: false,
    onToggleDefault: undefined,
    onRename: undefined
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "new-flow",
    flow: {
      steps: []
    },
    isDefault: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Steps (dark)",
  globals: {
    theme: "dark"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Diagram (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    defaultView: "diagram"
  }
}`,...D.parameters?.docs?.source}}},O=[`Steps`,`Diagram`,`WithRun`,`ReadOnly`,`EmptyFlow`,`StepsDark`,`DiagramDark`]})))()}k();export{S as Diagram,D as DiagramDark,T as EmptyFlow,w as ReadOnly,x as Steps,E as StepsDark,C as WithRun,O as __namedExportsOrder,b as default};