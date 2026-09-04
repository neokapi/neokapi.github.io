import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./src-CU2NRNPU.js";import{r as i,t as a}from"./runtime-DfFF6Hu8.js";import{i as o,n as s,r as c,t as l}from"./fixtures-Bbhvi5FC.js";import{n as u}from"./flow-editor-IZP3DIrR.js";import{n as d,t as f}from"./view-tab-8n1BOqmL.js";import{n as p,t as m}from"./FlowTemplateLibrary-OkQ49cxM.js";import{n as h,t as g}from"./FlowDiagramView-BsMevijA.js";function _({flowName:e,flow:t,tools:n,onChange:r,onGetSchema:i,onGetDoc:o,host:s,onRun:c,runDisabled:l,readOnly:p,isDefault:m,onToggleDefault:h,onRename:_,templateLibrary:b,projectPresets:x,trace:S,traceEvents:C,onTraceDismiss:w,view:T,defaultView:E=`steps`,onViewChange:D}){let O=!!S||(C?.length??0)>0,[k,A]=(0,v.useState)(E),j=T??k,M=j===`run`&&!O?`diagram`:j,N=e=>{T===void 0&&A(e),D?.(e)},P=(0,v.useRef)(O),F=(0,v.useRef)(N);return F.current=N,(0,v.useEffect)(()=>{O&&!P.current&&F.current(`run`),P.current=O},[O]),(0,y.jsxs)(`div`,{className:`flex h-full min-h-0 flex-col`,"data-testid":`flow-view-tabs`,children:[(0,y.jsx)(`div`,{className:`flex shrink-0 items-center border-b px-4 py-1.5`,children:(0,y.jsxs)(d,{"aria-label":a(`jOyRE9GfMLr`,`Flow view`),children:[(0,y.jsx)(f,{active:M===`steps`,onClick:()=>N(`steps`),"data-testid":`flow-view-steps`,children:a(`gDeNKJtJB8z`,`Steps`)}),(0,y.jsx)(f,{active:M===`diagram`,onClick:()=>N(`diagram`),"data-testid":`flow-view-diagram`,children:a(`9sGPeDsIGJr`,`Diagram`)}),O&&(0,y.jsx)(f,{active:M===`run`,onClick:()=>N(`run`),"data-testid":`flow-view-run`,children:a(`4s0ju42YjY1`,`Run`)})]})}),(0,y.jsxs)(`div`,{className:`min-h-0 flex-1`,children:[M===`steps`&&(0,y.jsx)(u,{flowName:e,flow:t,tools:n,onChange:r,onGetSchema:i,host:s,onRun:c,runDisabled:l,readOnly:p,isDefault:m,onToggleDefault:h,onRename:_,templateLibrary:b}),M===`diagram`&&(0,y.jsx)(g,{flow:t,tools:n,onGetSchema:i,onGetDoc:o,projectPresets:x}),M===`run`&&(0,y.jsx)(g,{flow:t,tools:n,onGetSchema:i,onGetDoc:o,projectPresets:x,trace:S,traceEvents:C,onTraceDismiss:w})]})]})}var v,y;function b(){return(b=e((()=>{i(),v=t(),r(),h(),y=n(),_.__docgenInfo={description:``,methods:[],displayName:`FlowViewTabs`,props:{flowName:{required:!0,tsType:{name:`string`},description:``},flow:{required:!0,tsType:{name:`FlowSpec`},description:``},tools:{required:!0,tsType:{name:`Array`,elements:[{name:`ToolInfo`}],raw:`ToolInfo[]`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(flow: FlowSpec) => void`,signature:{arguments:[{type:{name:`FlowSpec`},name:`flow`}],return:{name:`void`}}},description:``},onGetSchema:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(toolName: string) => ComponentSchema | null`,signature:{arguments:[{type:{name:`string`},name:`toolName`}],return:{name:`union`,raw:`ComponentSchema | null`,elements:[{name:`ComponentSchema`},{name:`null`}]}}},description:`Resolve a tool's option schema (cached by the host).`},onGetDoc:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(toolName: string) => ToolDoc | null`,signature:{arguments:[{type:{name:`string`},name:`toolName`}],return:{name:`union`,raw:`ToolDoc | null`,elements:[{name:`ToolDoc`},{name:`null`}]}}},description:`Resolve a tool's documentation for the diagram's step inspector.`},host:{required:!1,tsType:{name:`SchemaFormHost`},description:``},onRun:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},runDisabled:{required:!1,tsType:{name:`boolean`},description:``},readOnly:{required:!1,tsType:{name:`boolean`},description:``},isDefault:{required:!1,tsType:{name:`boolean`},description:`True when this is the project's default flow. Absent hides the toggle.`},onToggleDefault:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`next`}],return:{name:`void`}}},description:``},onRename:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(next: string) => void`,signature:{arguments:[{type:{name:`string`},name:`next`}],return:{name:`void`}}},description:`Absent leaves the name read-only.`},templateLibrary:{required:!1,tsType:{name:`ReactNode`},description:`Rendered in the step editor's empty state (see LinearFlowEditorProps).`},projectPresets:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`Record<string, Record<string, unknown>>`},description:`Project-level tool presets, badged on the diagram's nodes.`},trace:{required:!1,tsType:{name:`FlowTrace`},description:`A recorded run of this flow; its presence adds the Run view.`},traceEvents:{required:!1,tsType:{name:`Array`,elements:[{name:`TraceEvent`}],raw:`TraceEvent[]`},description:`Pre-mapped trace events for a host without full snapshots; also adds the Run view.`},onTraceDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when the reader dismisses the loaded run.`},view:{required:!1,tsType:{name:`union`,raw:`"steps" | "diagram" | "run"`,elements:[{name:`literal`,value:`"steps"`},{name:`literal`,value:`"diagram"`},{name:`literal`,value:`"run"`}]},description:`The view to show; omit to let the switch keep its own state.`},defaultView:{required:!1,tsType:{name:`union`,raw:`"steps" | "diagram" | "run"`,elements:[{name:`literal`,value:`"steps"`},{name:`literal`,value:`"diagram"`},{name:`literal`,value:`"run"`}]},description:`The initial view when uncontrolled (default "steps").`,defaultValue:{value:`"steps"`,computed:!1}},onViewChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(view: FlowView) => void`,signature:{arguments:[{type:{name:`union`,raw:`"steps" | "diagram" | "run"`,elements:[{name:`literal`,value:`"steps"`},{name:`literal`,value:`"diagram"`},{name:`literal`,value:`"run"`}]},name:`view`}],return:{name:`void`}}},description:`Called whenever the view changes, by a click or by a run arriving.`}}}})))()}function x(e){let[t,n]=(0,S.useState)(e.flow);return(0,C.jsx)(_,{...e,flow:t,onChange:t=>{n(t),e.onChange(t)}})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{S=t(),b(),p(),l(),C=n(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Translate options`,type:`object`,properties:{provider:{type:`string`,title:`Provider`,description:`Which provider handles the translation.`,options:[{value:`openai`,label:`OpenAI`},{value:`anthropic`,label:`Anthropic`}]},temperature:{type:`number`,title:`Temperature`,minimum:0,maximum:1,default:.2}}},E=e=>e===`translate`?T:null,D={description:`Reuse approved wording, translate the rest, and check the result.`,steps:[{tool:`recycle`},{tool:`translate`,config:{provider:`anthropic`}},{tool:``,parallel:[{tool:`qa`},{tool:`word-count`}]}]},O={title:`Flow Editor/FlowViewTabs`,component:_,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The flow workbench: Steps (the shared linear step editor, where authoring happens), Diagram (the same steps as a read-only canvas with the IO diagnostics) and, once a run of the flow is loaded, Run (the replay). Both kapi desktop and the platform render this composition.`}}},args:{flowName:`translate-and-check`,flow:D,tools:c,onChange:w(),onGetSchema:E,onRun:w(),isDefault:!0,onToggleDefault:w(),onRename:w(),templateLibrary:(0,C.jsx)(m,{onSelect:w()})},render:e=>(0,C.jsx)(`div`,{style:{height:640},children:(0,C.jsx)(x,{...e})})},k={},A={args:{defaultView:`diagram`}},j={name:`With a recorded run`,args:{flowName:`secure-translate`,flow:{steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},tools:o,trace:s,defaultView:`run`,isDefault:!1}},M={name:`Read-only (built-in flow)`,args:{readOnly:!0,isDefault:!1,onToggleDefault:void 0,onRename:void 0}},N={args:{flowName:`new-flow`,flow:{steps:[]},isDefault:!1}},P={name:`Steps (dark)`,globals:{theme:`dark`}},F={name:`Diagram (dark)`,globals:{theme:`dark`},args:{defaultView:`diagram`}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: "diagram"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Read-only (built-in flow)",
  args: {
    readOnly: true,
    isDefault: false,
    onToggleDefault: undefined,
    onRename: undefined
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "new-flow",
    flow: {
      steps: []
    },
    isDefault: false
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Steps (dark)",
  globals: {
    theme: "dark"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Diagram (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    defaultView: "diagram"
  }
}`,...F.parameters?.docs?.source}}},I=[`Steps`,`Diagram`,`WithRun`,`ReadOnly`,`EmptyFlow`,`StepsDark`,`DiagramDark`]})))()}L();export{A as Diagram,F as DiagramDark,N as EmptyFlow,M as ReadOnly,k as Steps,P as StepsDark,j as WithRun,I as __namedExportsOrder,O as default};