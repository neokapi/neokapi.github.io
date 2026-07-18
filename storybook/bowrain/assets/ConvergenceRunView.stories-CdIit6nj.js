import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{_r as n,gr as r,mr as i}from"./iframe-DesEBJPz.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{i(),a=t(),o={id:`run-8f2a1c0e`,project_id:`proj-demo`,trigger:`manual`,state:`running`,passes:1,created_at:new Date().toISOString()},s={title:`Pages/Convergence/ConvergenceRunView`,component:n,tags:[`autodocs`],decorators:[e=>(0,a.jsx)(`div`,{style:{maxWidth:720,padding:24},children:(0,a.jsx)(e,{})})]},c=[{type:`pass_start`,pass:1,maxPasses:3,pending:[`fr-FR`,`de-DE`]},{type:`locale_start`,pass:1,locale:`fr-FR`,units:12},{type:`locale_done`,pass:1,locale:`fr-FR`,units:12,done:12,viaTM:8,viaAI:4,state:`shippable`},{type:`locale_start`,pass:1,locale:`de-DE`,units:9},{type:`unit_progress`,pass:1,locale:`de-DE`,done:5,viaTM:2,viaAI:3}],l=[...c,{type:`locale_done`,pass:1,locale:`de-DE`,units:9,done:9,viaTM:3,viaAI:6,state:`shippable`},{type:`pass_done`,pass:1,produced:21,producedDelta:21,failingChecks:0,pending:[]},{type:`materialized`,files:2},{type:`done`,state:`converged`}],u=[{type:`pass_start`,pass:1,maxPasses:2,pending:[`ja-JP`]},{type:`locale_start`,pass:1,locale:`ja-JP`,units:10},{type:`locale_done`,pass:1,locale:`ja-JP`,units:10,done:6,viaAI:6,state:`parked`},{type:`pass_done`,pass:1,produced:6,producedDelta:6,failingChecks:4,pending:[`ja-JP`]},{type:`log`,message:`ja-JP short of ship gate after max passes`},{type:`done`,state:`parked`}],d={args:{model:r(c),run:o,connecting:!1}},f={args:{model:r([]),run:o,connecting:!0}},p={args:{model:r(l),run:{...o,state:`converged`,finished_at:new Date().toISOString()}}},m={args:{model:r(u),run:{...o,trigger:`cli`,state:`parked`,finished_at:new Date().toISOString()}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(liveEvents),
    run,
    connecting: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun([]),
    run,
    connecting: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(convergedEvents),
    run: {
      ...run,
      state: "converged",
      finished_at: new Date().toISOString()
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(parkedEvents),
    run: {
      ...run,
      trigger: "cli",
      state: "parked",
      finished_at: new Date().toISOString()
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Running`,`Connecting`,`Converged`,`Parked`]}))();export{f as Connecting,p as Converged,m as Parked,d as Running,h as __namedExportsOrder,s as default};