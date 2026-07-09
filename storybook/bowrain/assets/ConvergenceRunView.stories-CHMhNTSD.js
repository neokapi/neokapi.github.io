import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{dr as n,fr as r,pr as i,ur as a}from"./iframe-BX4sBSgB.js";var o,s,c,l,u,d,f,p,m,h,g;e((()=>{r(),a(),o=t(),s={id:`run-8f2a1c0e`,project_id:`proj-demo`,trigger:`manual`,state:`running`,passes:1,created_at:new Date().toISOString()},c={title:`Pages/Convergence/ConvergenceRunView`,component:i,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:720,padding:24},children:(0,o.jsx)(e,{})})]},l=[{type:`pass_start`,pass:1,maxPasses:3,pending:[`fr-FR`,`de-DE`]},{type:`locale_start`,pass:1,locale:`fr-FR`,units:12},{type:`locale_done`,pass:1,locale:`fr-FR`,units:12,done:12,viaTM:8,viaAI:4,state:`shippable`},{type:`locale_start`,pass:1,locale:`de-DE`,units:9},{type:`unit_progress`,pass:1,locale:`de-DE`,done:5,viaTM:2,viaAI:3}],u=[...l,{type:`locale_done`,pass:1,locale:`de-DE`,units:9,done:9,viaTM:3,viaAI:6,state:`shippable`},{type:`pass_done`,pass:1,produced:21,producedDelta:21,failingChecks:0,pending:[]},{type:`materialized`,files:2},{type:`done`,state:`converged`}],d=[{type:`pass_start`,pass:1,maxPasses:2,pending:[`ja-JP`]},{type:`locale_start`,pass:1,locale:`ja-JP`,units:10},{type:`locale_done`,pass:1,locale:`ja-JP`,units:10,done:6,viaAI:6,state:`parked`},{type:`pass_done`,pass:1,produced:6,producedDelta:6,failingChecks:4,pending:[`ja-JP`]},{type:`log`,message:`ja-JP short of ship gate after max passes`},{type:`done`,state:`parked`}],f={args:{model:n(l),run:s,connecting:!1}},p={args:{model:n([]),run:s,connecting:!0}},m={args:{model:n(u),run:{...s,state:`converged`,finished_at:new Date().toISOString()}}},h={args:{model:n(d),run:{...s,trigger:`cli`,state:`parked`,finished_at:new Date().toISOString()}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(liveEvents),
    run,
    connecting: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun([]),
    run,
    connecting: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(convergedEvents),
    run: {
      ...run,
      state: "converged",
      finished_at: new Date().toISOString()
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(parkedEvents),
    run: {
      ...run,
      trigger: "cli",
      state: "parked",
      finished_at: new Date().toISOString()
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Running`,`Connecting`,`Converged`,`Parked`]}))();export{p as Connecting,m as Converged,h as Parked,f as Running,g as __namedExportsOrder,c as default};