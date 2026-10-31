import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{i as n,n as r,r as i,t as a}from"./ConvergenceHero-sGLppK7h.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),o=t(),s={title:`Project/ConvergenceHero`,component:r,parameters:{layout:`padded`}},c=`content-memory leverage counts exact-hash hits only; token estimate is source chars / 4 for the remaining blocks (no tokenizer, no provider calls).`,l={plan:{flow:`translate`,scopes:[{locale:`nb-NO`,collection:`docs`,missingTarget:34,memoryExact:12,aiRemaining:22,tokenEstimate:1840},{locale:`nb-NO`,collection:`ui-strings`,missingTarget:8,memoryExact:5,aiRemaining:3,tokenEstimate:120},{locale:`de-DE`,collection:`docs`,missingTarget:34,memoryExact:2,drafts:12,aiRemaining:20,tokenEstimate:1690}],totals:{missingTarget:76,memoryExact:19,drafts:12,aiRemaining:45,tokenEstimate:3650},note:c},changedFiles:0,removedFiles:0,storeMissing:!1,versionStale:!1},u={project:`Acme Docs`,locales:[{locale:`nb-NO`,collection:`docs`,total:120,pct:{translated:72},gated:!0,shippable:!1,pending:[{state:`translated`,actual:72,required:100}],staleAwaitingReview:3},{locale:`de-DE`,collection:`docs`,total:120,pct:{translated:71},gated:!0,shippable:!1,pending:[{state:`translated`,actual:71,required:100}],failingChecks:2,termsNotChecked:5}],review:[{locale:`nb-NO`,file:`docs/intro.md`,key:`h1`,source:`Getting started`},{locale:`nb-NO`,file:`docs/intro.md`,key:`p2`,source:`Install the CLI`},{locale:`de-DE`,file:`docs/api.md`,key:`h1`,source:`API reference`}]},d={plan:{flow:`translate`,scopes:null,totals:{missingTarget:0,memoryExact:0,aiRemaining:0,tokenEstimate:0},note:c},changedFiles:0,removedFiles:0,storeMissing:!1,versionStale:!1},f={project:`Acme Docs`,locales:[{locale:`nb-NO`,collection:`docs`,total:120,pct:{translated:100,established:100},gated:!0,shippable:!0},{locale:`de-DE`,collection:`docs`,total:120,pct:{translated:100,established:100},gated:!0,shippable:!0}],review:[]},p={args:{tabID:`storybook`,convergence:u,plan:l,onBringUpToDate:()=>{},onOpenReview:()=>{},onOpenChecks:()=>{}}},m={args:{tabID:`storybook`,convergence:u,plan:{...l,storeMissing:!0},onBringUpToDate:()=>{}}},h={args:{tabID:`storybook`,convergence:{...u,locales:u.locales.map(e=>({...e,pending:void 0,termsNotChecked:0}))},plan:d,onBringUpToDate:()=>{},onOpenReview:()=>{}}},g={render:()=>(0,o.jsx)(i,{open:!0,onOpenChange:()=>{},scopes:u.locales,onOpenReview:()=>{},onOpenChecks:()=>{}})},_={args:{tabID:`storybook`,convergence:f,plan:d,onBringUpToDate:()=>{}}},v={render:()=>(0,o.jsx)(a,{open:!0,onOpenChange:()=>{},plan:l,onConfirm:()=>{}})},y={...l,plan:{...l.plan,provider:`claude-code`,subscription:!0,note:`AI work runs on your Claude subscription — the token estimate is scale, not a metered cost. Content-memory leverage counts exact-hash hits only; token estimate is source chars / 4 (no tokenizer, no provider calls).`}},b={render:()=>(0,o.jsx)(a,{open:!0,onOpenChange:()=>{},plan:y,onConfirm:()=>{}})},x={args:{tabID:`storybook`,convergence:u,plan:y,onBringUpToDate:()=>{}}},S=[`Drifted`,`ReadingFiles`,`WaitingForAPerson`,`HeldBack`,`Converged`,`PlanDialog`,`PlanDialogSubscription`,`DriftedSubscription`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: DRIFTED_REPORT,
    plan: DRIFTED_PLAN,
    onBringUpToDate: () => {},
    onOpenReview: () => {},
    onOpenChecks: () => {}
  }
}`,...p.parameters?.docs?.source},description:{story:`Texts to translate, translations waiting for review and languages held
 back: three counts, each leading to where it is dealt with, and an armed
 "Bring up to date".`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: DRIFTED_REPORT,
    plan: {
      ...DRIFTED_PLAN,
      storeMissing: true
    },
    onBringUpToDate: () => {}
  }
}`,...m.parameters?.docs?.source},description:{story:`The cache is behind the files (a first open, or files changed outside the
 app). The app reads them on its own; the hero says so and asks nothing.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: {
      ...DRIFTED_REPORT,
      locales: DRIFTED_REPORT.locales.map(l => ({
        ...l,
        pending: undefined,
        termsNotChecked: 0
      }))
    },
    plan: CONVERGED_PLAN,
    onBringUpToDate: () => {},
    onOpenReview: () => {}
  }
}`,...h.parameters?.docs?.source},description:{story:`Nothing left to translate: what remains is a person's, so Bring up to date
 steps back to an outline button.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <HeldBackDialog open onOpenChange={() => {}} scopes={DRIFTED_REPORT.locales} onOpenReview={() => {}} onOpenChecks={() => {}} />
}`,...g.parameters?.docs?.source},description:{story:`The held-back list: each collection language and what holds it back.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: CONVERGED_REPORT,
    plan: CONVERGED_PLAN,
    onBringUpToDate: () => {}
  }
}`,..._.parameters?.docs?.source},description:{story:`Everything converged and gates green: the calm state, button disabled.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ConvergePlanDialog open onOpenChange={() => {}} plan={DRIFTED_PLAN} onConfirm={() => {}} />
}`,...v.parameters?.docs?.source},description:{story:`The pre-flight plan dialog on its own: per-(collection, locale) missing /
 content memory-exact / AI-remainder counts, the token estimate, and its heuristic note.`,...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ConvergePlanDialog open onOpenChange={() => {}} plan={SUBSCRIPTION_PLAN} onConfirm={() => {}} />
}`,...b.parameters?.docs?.source},description:{story:`The plan dialog when the resolved provider is claude-code: the metered-cost
 framing is replaced with "runs on your Claude subscription".`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: DRIFTED_REPORT,
    plan: SUBSCRIPTION_PLAN,
    onBringUpToDate: () => {}
  }
}`,...x.parameters?.docs?.source},description:{story:`The hero when AI work bills the user's Claude subscription.`,...x.parameters?.docs?.description}}}})))()}C();export{_ as Converged,p as Drifted,x as DriftedSubscription,g as HeldBack,v as PlanDialog,b as PlanDialogSubscription,m as ReadingFiles,h as WaitingForAPerson,S as __namedExportsOrder,s as default};