import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./PipelineProgress-vksYb5Pe.js";function a({steps:e,fileCount:t=3,partsPerFile:n=40,intervalMs:r=50}){let a=t*n,[c,l]=(0,s.useState)(e.map(e=>({name:e.tool,parts_in:0,parts_out:0}))),[u,d]=(0,s.useState)(`idle`),f=(0,s.useCallback)(()=>{d(`running`),l(e.map(e=>({name:e.tool,parts_in:0,parts_out:0})));let t=0,n=setInterval(()=>{t++,l(e.map((e,n)=>{let r=n*8,i=Math.min(a,Math.max(0,t*3-r)),o=Math.min(i,Math.max(0,t*3-r-5));return{name:e.tool,parts_in:i,parts_out:o}})),t*3>a+e.length*8+10&&(clearInterval(n),l(e.map(e=>({name:e.tool,parts_in:a,parts_out:a}))),d(`complete`))},r);return()=>clearInterval(n)},[e,a,r]);return(0,s.useEffect)(()=>f(),[f]),(0,o.jsxs)(`div`,{className:`space-y-4 p-4`,children:[(0,o.jsx)(i,{steps:e,snapshots:c,runState:u}),(0,o.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:u===`running`?`Processing...`:u===`complete`?`Done!`:`Idle`})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),o=n(),s=t(),c={title:`Components/Pipeline Progress`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Visualizes a streaming pipeline's step-by-step progress using Badge-based step indicators. Each step transitions through pending, active (with spinner and part counts), and done states based on real-time atomic counter snapshots from the backend.`}}}},l=[{tool:`translate`},{tool:`qa`}],u=[{tool:`recycle`},{tool:`translate`},{tool:`qa`},{tool:`term-enforce`}],d={name:`Idle (all pending)`,args:{steps:l,runState:`idle`}},f={name:`Running — all pending`,args:{steps:u,runState:`running`,snapshots:[]}},p={name:`Running — first step active`,args:{steps:u,runState:`running`,snapshots:[{name:`recycle`,parts_in:47,parts_out:32},{name:`translate`,parts_in:0,parts_out:0},{name:`qa`,parts_in:0,parts_out:0},{name:`term-enforce`,parts_in:0,parts_out:0}]}},m={name:`Running — mid-pipeline`,args:{steps:u,runState:`running`,snapshots:[{name:`recycle`,parts_in:120,parts_out:120},{name:`translate`,parts_in:120,parts_out:87},{name:`qa`,parts_in:87,parts_out:52},{name:`term-enforce`,parts_in:0,parts_out:0}]}},h={name:`Running — near complete`,args:{steps:l,runState:`running`,snapshots:[{name:`translate`,parts_in:120,parts_out:120},{name:`qa`,parts_in:120,parts_out:118}]}},g={name:`Complete`,args:{steps:u,runState:`complete`,snapshots:[{name:`recycle`,parts_in:120,parts_out:120},{name:`translate`,parts_in:120,parts_out:120},{name:`qa`,parts_in:120,parts_out:120},{name:`term-enforce`,parts_in:120,parts_out:120}]}},_={name:`Error (frozen mid-run)`,args:{steps:u,runState:`error`,snapshots:[{name:`recycle`,parts_in:120,parts_out:120},{name:`translate`,parts_in:45,parts_out:12},{name:`qa`,parts_in:0,parts_out:0},{name:`term-enforce`,parts_in:0,parts_out:0}]}},v={name:`Canceled`,args:{steps:l,runState:`canceled`,snapshots:[{name:`translate`,parts_in:60,parts_out:33},{name:`qa`,parts_in:0,parts_out:0}]}},y={name:`Single step`,args:{steps:[{tool:`pseudo-translate`}],runState:`running`,snapshots:[{name:`pseudo-translate`,parts_in:42,parts_out:17}]}},b={name:`Long pipeline (6 steps)`,args:{steps:[{tool:`recycle`},{tool:`term-lookup`},{tool:`translate`},{tool:`qa`},{tool:`term-enforce`},{tool:`tm-update`}],runState:`running`,snapshots:[{name:`recycle`,parts_in:200,parts_out:200},{name:`term-lookup`,parts_in:200,parts_out:200},{name:`translate`,parts_in:200,parts_out:143},{name:`qa`,parts_in:143,parts_out:98},{name:`term-enforce`,parts_in:0,parts_out:0},{name:`tm-update`,parts_in:0,parts_out:0}]}},x={name:`Animated simulation`,render:()=>(0,o.jsx)(a,{steps:u,fileCount:3,partsPerFile:40})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Idle (all pending)",
  args: {
    steps: twoSteps,
    runState: "idle"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Running — all pending",
  args: {
    steps: fourSteps,
    runState: "running",
    snapshots: []
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Running — first step active",
  args: {
    steps: fourSteps,
    runState: "running",
    snapshots: [{
      name: "recycle",
      parts_in: 47,
      parts_out: 32
    }, {
      name: "translate",
      parts_in: 0,
      parts_out: 0
    }, {
      name: "qa",
      parts_in: 0,
      parts_out: 0
    }, {
      name: "term-enforce",
      parts_in: 0,
      parts_out: 0
    }]
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Running — mid-pipeline",
  args: {
    steps: fourSteps,
    runState: "running",
    snapshots: [{
      name: "recycle",
      parts_in: 120,
      parts_out: 120
    }, {
      name: "translate",
      parts_in: 120,
      parts_out: 87
    }, {
      name: "qa",
      parts_in: 87,
      parts_out: 52
    }, {
      name: "term-enforce",
      parts_in: 0,
      parts_out: 0
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Running — near complete",
  args: {
    steps: twoSteps,
    runState: "running",
    snapshots: [{
      name: "translate",
      parts_in: 120,
      parts_out: 120
    }, {
      name: "qa",
      parts_in: 120,
      parts_out: 118
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Complete",
  args: {
    steps: fourSteps,
    runState: "complete",
    snapshots: [{
      name: "recycle",
      parts_in: 120,
      parts_out: 120
    }, {
      name: "translate",
      parts_in: 120,
      parts_out: 120
    }, {
      name: "qa",
      parts_in: 120,
      parts_out: 120
    }, {
      name: "term-enforce",
      parts_in: 120,
      parts_out: 120
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Error (frozen mid-run)",
  args: {
    steps: fourSteps,
    runState: "error",
    snapshots: [{
      name: "recycle",
      parts_in: 120,
      parts_out: 120
    }, {
      name: "translate",
      parts_in: 45,
      parts_out: 12
    }, {
      name: "qa",
      parts_in: 0,
      parts_out: 0
    }, {
      name: "term-enforce",
      parts_in: 0,
      parts_out: 0
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Canceled",
  args: {
    steps: twoSteps,
    runState: "canceled",
    snapshots: [{
      name: "translate",
      parts_in: 60,
      parts_out: 33
    }, {
      name: "qa",
      parts_in: 0,
      parts_out: 0
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Single step",
  args: {
    steps: [{
      tool: "pseudo-translate"
    }],
    runState: "running",
    snapshots: [{
      name: "pseudo-translate",
      parts_in: 42,
      parts_out: 17
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Long pipeline (6 steps)",
  args: {
    steps: [{
      tool: "recycle"
    }, {
      tool: "term-lookup"
    }, {
      tool: "translate"
    }, {
      tool: "qa"
    }, {
      tool: "term-enforce"
    }, {
      tool: "tm-update"
    }],
    runState: "running",
    snapshots: [{
      name: "recycle",
      parts_in: 200,
      parts_out: 200
    }, {
      name: "term-lookup",
      parts_in: 200,
      parts_out: 200
    }, {
      name: "translate",
      parts_in: 200,
      parts_out: 143
    }, {
      name: "qa",
      parts_in: 143,
      parts_out: 98
    }, {
      name: "term-enforce",
      parts_in: 0,
      parts_out: 0
    }, {
      name: "tm-update",
      parts_in: 0,
      parts_out: 0
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Animated simulation",
  render: () => <AnimatedPipeline steps={fourSteps} fileCount={3} partsPerFile={40} />
}`,...x.parameters?.docs?.source}}},S=[`Idle`,`AllPending`,`FirstStepActive`,`MidPipeline`,`NearComplete`,`Complete`,`Error`,`Canceled`,`SingleStep`,`LongPipeline`,`Animated`]})))()}C();export{f as AllPending,x as Animated,v as Canceled,g as Complete,_ as Error,p as FirstStepActive,d as Idle,b as LongPipeline,m as MidPipeline,h as NearComplete,y as SingleStep,S as __namedExportsOrder,c as default};