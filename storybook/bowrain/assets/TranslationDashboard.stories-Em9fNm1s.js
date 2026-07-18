import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{Br as n,Lr as r,Rr as i,zr as a}from"./iframe-iCGLZiaW.js";import{B as o,N as s,f as c,l}from"./fixtures-DmbxeQzv.js";import{n as u,r as d}from"./decorators-CYpFrXSO.js";var f,p,m,h,g,_,v,y,b,x,S;e((()=>{n(),i(),u(),l(),f=t(),p={title:`Pages/Translation/TranslationDashboard`,component:a,tags:[`autodocs`],decorators:[d,e=>(0,f.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,f.jsx)(e,{})})]},m={args:{stats:null,projectName:`New Project`}},h={args:{stats:s,projectName:`Demo App`}},g={args:{stats:c,projectName:`Marketing Platform`}},_={args:{stats:o,projectName:`Demo App`}},v={args:{stats:o,projectName:`Demo App`,delivery:(0,f.jsx)(r,{localeStats:o.locale_stats,connectors:[{id:`conn-wp`,name:`Marketing WordPress`,lastSync:`2026-07-17T09:12:00Z`},{id:`conn-git`,name:`docs-repo`,lastSync:`2026-07-16T18:40:00Z`,lastError:`push failed: remote rejected ref (protected branch)`}],onOpenConnectors:()=>{},onOpenReview:()=>{}})}},y={args:{stats:s}},b={args:{stats:{...s,locale_stats:s.locale_stats.map(e=>({...e,translated_blocks:e.total_blocks,translated_words:e.total_words,percentage:100}))},projectName:`Completed Project`}},x={args:{stats:{...s,locale_stats:[s.locale_stats[0]],item_stats:s.item_stats.map(e=>({...e,locales:[e.locales[0]]})),collection_stats:s.collection_stats.map(e=>({...e,locales:[e.locales[0]]}))},projectName:`French Only`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    stats: null,
    projectName: "New Project"
  }
}`,...m.parameters?.docs?.source},description:{story:`No data yet — shows the empty onboarding state.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    stats: sampleDashboardStats,
    projectName: "Demo App"
  }
}`,...h.parameters?.docs?.source},description:{story:`Typical project with 3 locales, 3 files, and 2 collections.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    stats: largeDashboardStats,
    projectName: "Marketing Platform"
  }
}`,...g.parameters?.docs?.source},description:{story:`Large project with 6 locales and 4 files across 2 collections.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    stats: shipStateDashboardStats,
    projectName: "Demo App"
  }
}`,..._.parameters?.docs?.source},description:{story:`Server-derived ship states: the ship-readiness band lists each locale's
state (governed / AI-shippable / pending) and the collection heatmap carries
the compact rollup indicators.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    stats: shipStateDashboardStats,
    projectName: "Demo App",
    delivery: <DeliveryPanel localeStats={shipStateDashboardStats.locale_stats} connectors={[{
      id: "conn-wp",
      name: "Marketing WordPress",
      lastSync: "2026-07-17T09:12:00Z"
    }, {
      id: "conn-git",
      name: "docs-repo",
      lastSync: "2026-07-16T18:40:00Z",
      lastError: "push failed: remote rejected ref (protected branch)"
    }]} onOpenConnectors={() => {}} onOpenReview={() => {}} />
  }
}`,...v.parameters?.docs?.source},description:{story:`Ship readiness beside the read-only delivery panel, as the route composes it.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    stats: sampleDashboardStats
  }
}`,...y.parameters?.docs?.source},description:{story:`Dashboard without a project name in the header.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    stats: {
      ...sampleDashboardStats,
      locale_stats: sampleDashboardStats.locale_stats.map(l => ({
        ...l,
        translated_blocks: l.total_blocks,
        translated_words: l.total_words,
        percentage: 100
      }))
    },
    projectName: "Completed Project"
  }
}`,...b.parameters?.docs?.source},description:{story:`Fully translated project — all locales at 100%.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    stats: {
      ...sampleDashboardStats,
      locale_stats: [sampleDashboardStats.locale_stats[0]],
      item_stats: sampleDashboardStats.item_stats.map(item => ({
        ...item,
        locales: [item.locales[0]]
      })),
      collection_stats: sampleDashboardStats.collection_stats.map(coll => ({
        ...coll,
        locales: [coll.locales[0]]
      }))
    },
    projectName: "French Only"
  }
}`,...x.parameters?.docs?.source},description:{story:`Single locale — minimal chart layout.`,...x.parameters?.docs?.description}}},S=[`Empty`,`Default`,`LargeProject`,`WithShipStates`,`WithDelivery`,`NoProjectName`,`FullyTranslated`,`SingleLocale`]}))();export{h as Default,m as Empty,b as FullyTranslated,g as LargeProject,y as NoProjectName,x as SingleLocale,v as WithDelivery,_ as WithShipStates,S as __namedExportsOrder,p as default};