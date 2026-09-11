import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-WG3sX0mn.js";import{n as a,t as o}from"./PipelineProgress-Cf9Wg_0a.js";function s({steps:e,fileCount:t=3,partsPerFile:n=40,intervalMs:r=50}){let a=t*n,[s,u]=(0,l.useState)(e.map(e=>({name:e.tool,parts_in:0,parts_out:0}))),[d,f]=(0,l.useState)(`idle`),p=(0,l.useCallback)(()=>{f(`running`),u(e.map(e=>({name:e.tool,parts_in:0,parts_out:0})));let t=0,n=setInterval(()=>{t++,u(e.map((e,n)=>{let r=n*8,i=Math.min(a,Math.max(0,t*3-r)),o=Math.min(i,Math.max(0,t*3-r-5));return{name:e.tool,parts_in:i,parts_out:o}})),t*3>a+e.length*8+10&&(clearInterval(n),u(e.map(e=>({name:e.tool,parts_in:a,parts_out:a}))),f(`complete`))},r);return()=>clearInterval(n)},[e,a,r]);return(0,l.useEffect)(()=>p(),[p]),(0,c.jsxs)(`div`,{className:`space-y-4 p-4`,children:[(0,c.jsx)(o,{steps:e,snapshots:s,runState:d}),(0,c.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d===`running`?i(`cXrgu09zeXc`,`Processing...`):d===`complete`?i(`e7MrMRBTlE1`,`Done!`):i(`bR1gJ93LGSX`,`Idle`)})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),a(),c=n(),l=t(),u={title:`Components/Pipeline Progress`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Visualizes a streaming pipeline's step-by-step progress using Badge-based step indicators. Each step transitions through pending, active (with spinner and part counts), and done states based on real-time atomic counter snapshots from the backend.`}}}},d=[{tool:`translate`},{tool:`qa`}],f=[{tool:`recycle`},{tool:`translate`},{tool:`qa`},{tool:`term-enforce`}],p={name:`Idle (all pending)`,args:{steps:d,runState:`idle`}},m={name:`Running — all pending`,args:{steps:f,runState:`running`,snapshots:[]}},h={name:`Running — first step active`,args:{steps:f,runState:`running`,snapshots:[{name:`recycle`,parts_in:47,parts_out:32},{name:`translate`,parts_in:0,parts_out:0},{name:`qa`,parts_in:0,parts_out:0},{name:`term-enforce`,parts_in:0,parts_out:0}]}},g={name:`Running — mid-pipeline`,args:{steps:f,runState:`running`,snapshots:[{name:`recycle`,parts_in:120,parts_out:120},{name:`translate`,parts_in:120,parts_out:87},{name:`qa`,parts_in:87,parts_out:52},{name:`term-enforce`,parts_in:0,parts_out:0}]}},_={name:`Running — near complete`,args:{steps:d,runState:`running`,snapshots:[{name:`translate`,parts_in:120,parts_out:120},{name:`qa`,parts_in:120,parts_out:118}]}},v={name:`Complete`,args:{steps:f,runState:`complete`,snapshots:[{name:`recycle`,parts_in:120,parts_out:120},{name:`translate`,parts_in:120,parts_out:120},{name:`qa`,parts_in:120,parts_out:120},{name:`term-enforce`,parts_in:120,parts_out:120}]}},y={name:`Error (frozen mid-run)`,args:{steps:f,runState:`error`,snapshots:[{name:`recycle`,parts_in:120,parts_out:120},{name:`translate`,parts_in:45,parts_out:12},{name:`qa`,parts_in:0,parts_out:0},{name:`term-enforce`,parts_in:0,parts_out:0}]}},b={name:`Canceled`,args:{steps:d,runState:`canceled`,snapshots:[{name:`translate`,parts_in:60,parts_out:33},{name:`qa`,parts_in:0,parts_out:0}]}},x={name:`Single step`,args:{steps:[{tool:`pseudo-translate`}],runState:`running`,snapshots:[{name:`pseudo-translate`,parts_in:42,parts_out:17}]}},S={name:`Long pipeline (6 steps)`,args:{steps:[{tool:`recycle`},{tool:`term-lookup`},{tool:`translate`},{tool:`qa`},{tool:`term-enforce`},{tool:`tm-update`}],runState:`running`,snapshots:[{name:`recycle`,parts_in:200,parts_out:200},{name:`term-lookup`,parts_in:200,parts_out:200},{name:`translate`,parts_in:200,parts_out:143},{name:`qa`,parts_in:143,parts_out:98},{name:`term-enforce`,parts_in:0,parts_out:0},{name:`tm-update`,parts_in:0,parts_out:0}]}},C={name:`Animated simulation`,render:()=>(0,c.jsx)(s,{steps:f,fileCount:3,partsPerFile:40})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Idle (all pending)",
  args: {
    steps: twoSteps,
    runState: "idle"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Running — all pending",
  args: {
    steps: fourSteps,
    runState: "running",
    snapshots: []
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Animated simulation",
  render: () => <AnimatedPipeline steps={fourSteps} fileCount={3} partsPerFile={40} />
}`,...C.parameters?.docs?.source}}},w=[`Idle`,`AllPending`,`FirstStepActive`,`MidPipeline`,`NearComplete`,`Complete`,`Error`,`Canceled`,`SingleStep`,`LongPipeline`,`Animated`]})))()}T();export{m as AllPending,C as Animated,b as Canceled,v as Complete,y as Error,h as FirstStepActive,p as Idle,S as LongPipeline,g as MidPipeline,_ as NearComplete,x as SingleStep,w as __namedExportsOrder,u as default};