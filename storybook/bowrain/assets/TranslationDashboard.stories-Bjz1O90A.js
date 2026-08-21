import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{Dn as n,En as r,Tn as i,wn as a}from"./iframe-y4HpU7xF.js";import{P as o,V as s,p as c,s as l,u}from"./fixtures-BGts7Tx6.js";import{n as d,r as f}from"./decorators-DW3CtzVQ.js";var p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),d(),u(),p=t(),m={title:`Pages/Translation/TranslationDashboard`,component:r,tags:[`autodocs`],decorators:[f,e=>(0,p.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,p.jsx)(e,{})})]},h={args:{stats:null,projectName:`New Project`}},g={args:{stats:o,projectName:`Demo App`}},_={args:{stats:c,projectName:`Marketing Platform`}},v={args:{stats:s,projectName:`Demo App`}},y={args:{stats:l,projectName:`Demo App`}},b={args:{stats:s,projectName:`Demo App`,delivery:(0,p.jsx)(a,{localeStats:s.locale_stats,connectors:[{id:`conn-wp`,name:`Marketing WordPress`,lastSync:`2026-07-17T09:12:00Z`},{id:`conn-git`,name:`docs-repo`,lastSync:`2026-07-16T18:40:00Z`,lastError:`push failed: remote rejected ref (protected branch)`}],onOpenConnectors:()=>{},onOpenReview:()=>{}})}},x={args:{stats:o}},S={args:{stats:{...o,locale_stats:o.locale_stats.map(e=>({...e,translated_blocks:e.total_blocks,translated_words:e.total_words,percentage:100}))},projectName:`Completed Project`}},C={args:{stats:{...o,locale_stats:[o.locale_stats[0]],item_stats:o.item_stats.map(e=>({...e,locales:[e.locales[0]]})),collection_stats:o.collection_stats.map(e=>({...e,locales:[e.locales[0]]}))},projectName:`French Only`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    stats: null,
    projectName: "New Project"
  }
}`,...h.parameters?.docs?.source},description:{story:`No data yet — shows the empty onboarding state.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    stats: sampleDashboardStats,
    projectName: "Demo App"
  }
}`,...g.parameters?.docs?.source},description:{story:`Typical project with 3 locales, 3 files, and 2 collections.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    stats: largeDashboardStats,
    projectName: "Marketing Platform"
  }
}`,..._.parameters?.docs?.source},description:{story:`Large project with 6 locales and 4 files across 2 collections.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    stats: shipStateDashboardStats,
    projectName: "Demo App"
  }
}`,...v.parameters?.docs?.source},description:{story:`Server-derived ship states: the ship-readiness band lists each locale's
state (governed / AI-shippable / pending) and the collection heatmap carries
the compact rollup indicators.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    stats: complianceDashboardStats,
    projectName: "Demo App"
  }
}`,...y.parameters?.docs?.source},description:{story:`Server-derived compliance rates beside each ship-state badge: fr-FR is
voice-informed (worker draft scoring has run), the others are checks-only —
the tooltip states the basis so the number is never over-read.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Ship readiness beside the read-only delivery panel, as the route composes it.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    stats: sampleDashboardStats
  }
}`,...x.parameters?.docs?.source},description:{story:`Dashboard without a project name in the header.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Fully translated project — all locales at 100%.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Single locale — minimal chart layout.`,...C.parameters?.docs?.description}}},w=[`Empty`,`Default`,`LargeProject`,`WithShipStates`,`WithComplianceRates`,`WithDelivery`,`NoProjectName`,`FullyTranslated`,`SingleLocale`]})))()}T();export{g as Default,h as Empty,S as FullyTranslated,_ as LargeProject,x as NoProjectName,C as SingleLocale,y as WithComplianceRates,b as WithDelivery,v as WithShipStates,w as __namedExportsOrder,m as default};