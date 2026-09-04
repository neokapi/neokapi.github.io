import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./FlowDiagramView-DG86Q9YW.js";import{i,n as a,r as o,t as s}from"./fixtures-DNO8bAUC.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),s(),c=t(),l={steps:[{tool:`recycle`},{tool:`translate`},{tool:`qa`},{tool:`word-count`}]},u={steps:[{tool:`translate`},{tool:``,parallel:[{tool:`qa`},{tool:`word-count`},{tool:`term-check`}]},{tool:`pseudo-translate`}]},d={steps:[{tool:`unredact`},{tool:`translate`}]},f={title:`Flow Editor/FlowDiagramView`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The read-only diagram of a flow. Authoring happens in the linear step editor; the canvas draws the same steps with per-branch fan-out, the typed IO contract and its diagnostics on every node, and, with a recorded run loaded, the replay.`}}},args:{tools:o},decorators:[e=>(0,c.jsx)(`div`,{style:{height:640},children:(0,c.jsx)(e,{})})]},p={args:{flow:l}},m={name:`Parallel fan-out`,args:{flow:u}},h={name:`Unmet input diagnostics`,args:{flow:d,tools:i}},g={name:`With a recorded run`,args:{flow:{steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},tools:i,trace:a}},_={args:{flow:{steps:[]}}},v={name:`Linear (dark)`,globals:{theme:`dark`},args:{flow:l}},y={name:`Parallel fan-out (dark)`,globals:{theme:`dark`},args:{flow:u}},b={name:`With a recorded run (dark)`,globals:{theme:`dark`},args:{flow:{steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},tools:i,trace:a}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    flow: LINEAR
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Parallel fan-out",
  args: {
    flow: FAN_OUT
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Unmet input diagnostics",
  args: {
    flow: UNMET,
    tools: transformerAwareTools
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "With a recorded run",
  args: {
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
    trace: runReviewTrace
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: []
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Linear (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    flow: LINEAR
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Parallel fan-out (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    flow: FAN_OUT
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "With a recorded run (dark)",
  globals: {
    theme: "dark"
  },
  args: {
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
    trace: runReviewTrace
  }
}`,...b.parameters?.docs?.source}}},x=[`Linear`,`ParallelFanOut`,`UnmetInput`,`WithRun`,`Empty`,`LinearDark`,`ParallelFanOutDark`,`WithRunDark`]})))()}S();export{_ as Empty,p as Linear,v as LinearDark,m as ParallelFanOut,y as ParallelFanOutDark,h as UnmetInput,g as WithRun,b as WithRunDark,x as __namedExportsOrder,f as default};