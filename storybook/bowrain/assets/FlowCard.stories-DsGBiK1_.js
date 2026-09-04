import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{i as n,t as r}from"./flows-CE0llHgW.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Flows/FlowCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`The outcome-first flow card: name, a one-line outcome, the step chips it runs, and a Default badge. Shared across kapi desktop and the platform's flow list.`}}},render:e=>(0,i.jsx)(`div`,{className:`max-w-md`,children:(0,i.jsx)(n,{...e})})},s={onClick:a()},c={id:`ship`,name:`Ship translations`,description:`Translate with guardrails: memory reuse, AI translate, then deterministic checks.`,steps:[`Memory Reuse`,`Translate`,`Quality Check`],stepCount:3,source:`project`,isDefault:!0},l={name:`Default flow`,args:{...s,item:c}},u={name:`Multi-step (built-in)`,args:{...s,item:{id:`translate-qa`,name:`Translate and check`,description:`Translate content then run an LLM-judged quality check.`,steps:[`Translate`,`Quality Check`],stepCount:2,source:`built-in`},onCopy:a()}},d={name:`Single-step`,args:{...s,item:{id:`pseudo`,name:`Pseudo translate`,description:`Generate pseudo-translations for testing.`,steps:[`Pseudo Translate`],stepCount:1,source:`built-in`},onCopy:a()}},f={name:`No steps yet`,args:{...s,item:{id:`empty`,name:`empty-flow`,steps:[],stepCount:0,source:`user`},onDelete:a()}},p={name:`Loading`,args:{loading:!0}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Default flow",
  args: {
    ...base,
    item: shipFlow
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Multi-step (built-in)",
  args: {
    ...base,
    item: {
      id: "translate-qa",
      name: "Translate and check",
      description: "Translate content then run an LLM-judged quality check.",
      steps: ["Translate", "Quality Check"],
      stepCount: 2,
      source: "built-in"
    },
    onCopy: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Single-step",
  args: {
    ...base,
    item: {
      id: "pseudo",
      name: "Pseudo translate",
      description: "Generate pseudo-translations for testing.",
      steps: ["Pseudo Translate"],
      stepCount: 1,
      source: "built-in"
    },
    onCopy: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "No steps yet",
  args: {
    ...base,
    item: {
      id: "empty",
      name: "empty-flow",
      steps: [],
      stepCount: 0,
      source: "user"
    },
    onDelete: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Loading",
  args: {
    loading: true
  }
}`,...p.parameters?.docs?.source}}},m=[`DefaultFlow`,`MultiStep`,`SingleStep`,`NoSteps`,`Loading`]})))()}h();export{l as DefaultFlow,p as Loading,u as MultiStep,f as NoSteps,d as SingleStep,m as __namedExportsOrder,o as default};