import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{n,t as r}from"./ConvergenceRunView-BZex7ymg.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Status/ConvergenceRunView`,component:r,parameters:{layout:`padded`},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:720},children:(0,i.jsx)(e,{})})]},o={live:!0,passes:[{pass:1,maxPasses:6,settled:!1,rows:[{locale:`de-DE`,units:42,done:42,viaMemory:30,viaAI:12,state:`done`},{locale:`ja-JP`,units:42,done:18,viaMemory:6,viaAI:12,state:`running`},{locale:`nb-NO`,units:0,done:0,viaMemory:0,viaAI:0,state:`queued`}]}]},s={live:!0,passes:[{pass:1,maxPasses:6,settled:!0,produced:178,producedDelta:178,failingChecks:2,pending:[`ja-JP`],rows:[{locale:`de-DE`,units:42,done:42,viaMemory:30,viaAI:12,state:`done`},{locale:`ja-JP`,units:42,done:40,viaMemory:8,viaAI:32,state:`done`}]}]},c={args:{model:o,running:!0}},l={args:{model:s,result:{converged:!1,passes:2,parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`marketing`}]},onOpenReview:e=>console.log(`open review`,e)}},u={args:{model:s,result:{converged:!0,passes:2,materializedFiles:6}}},d={args:{run:{id:`run-8f2a1c0e`,trigger:`manual`,created_at:new Date().toISOString()},model:{...s,done:!0,finalState:`parked`,materializedFiles:3,logs:[`Extracted 128 blocks from 4 files`,`Transport: streamed 2 passes`],passes:s.passes.map(e=>({...e,rows:e.rows.map(e=>({...e,localeState:e.locale===`ja-JP`?`parked`:`shippable`}))}))}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    model: runningModel,
    running: true
  }
}`,...c.parameters?.docs?.source},description:{story:`kapi-desktop's Runner surface: live passes, no header.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    model: settledModel,
    result: {
      converged: false,
      passes: 2,
      parkedScopes: [{
        locale: "ja-JP",
        collection: "docs"
      }, {
        locale: "ja-JP",
        collection: "marketing"
      }]
    },
    onOpenReview: scope => console.log("open review", scope)
  }
}`,...l.parameters?.docs?.source},description:{story:`A parked outcome with deep-link chips (kapi-desktop's structured result).`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    model: settledModel,
    result: {
      converged: true,
      passes: 2,
      materializedFiles: 6
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`A converged outcome with materialized-file count.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    run: {
      id: "run-8f2a1c0e",
      trigger: "manual",
      created_at: new Date().toISOString()
    },
    model: {
      ...settledModel,
      done: true,
      finalState: "parked",
      materializedFiles: 3,
      logs: ["Extracted 128 blocks from 4 files", "Transport: streamed 2 passes"],
      passes: settledModel.passes.map(p => ({
        ...p,
        rows: p.rows.map(r => ({
          ...r,
          localeState: r.locale === "ja-JP" ? "parked" : "shippable"
        }))
      }))
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`bowrain's Runs surface: a run header, ship badges, logs, and done footer.`,...d.parameters?.docs?.description}}},f=[`Running`,`Parked`,`Converged`,`WithHeaderAndLogs`]}))();export{u as Converged,l as Parked,c as Running,d as WithHeaderAndLogs,f as __namedExportsOrder,a as default};