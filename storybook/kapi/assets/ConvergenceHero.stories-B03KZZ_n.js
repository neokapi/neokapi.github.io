import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,t as i}from"./ConvergenceHero-Bo6qD9lK.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{r(),a=t(),o={title:`Project/ConvergenceHero`,component:n,parameters:{layout:`padded`}},s=`TM leverage counts exact-hash hits only; token estimate is source chars / 4 for the remaining units (no tokenizer, no provider calls).`,c={plan:{flow:`translate`,scopes:[{locale:`nb-NO`,collection:`docs`,missingTarget:34,tmExact:12,aiRemaining:22,tokenEstimate:1840},{locale:`nb-NO`,collection:`ui-strings`,missingTarget:8,tmExact:5,aiRemaining:3,tokenEstimate:120},{locale:`de-DE`,collection:`docs`,missingTarget:34,tmExact:2,aiRemaining:32,tokenEstimate:2710}],totals:{missingTarget:76,tmExact:19,aiRemaining:57,tokenEstimate:4670},note:s},changedFiles:5,removedFiles:1,storeMissing:!1,versionStale:!1},l={project:`Acme Docs`,locales:[{locale:`nb-NO`,collection:`docs`,total:120,pct:{translated:72},gated:!0,shippable:!1},{locale:`de-DE`,collection:`docs`,total:120,pct:{translated:71},gated:!0,shippable:!1}],review:[{locale:`nb-NO`,file:`docs/intro.md`,key:`h1`,source:`Getting started`},{locale:`nb-NO`,file:`docs/intro.md`,key:`p2`,source:`Install the CLI`},{locale:`de-DE`,file:`docs/api.md`,key:`h1`,source:`API reference`}]},u={plan:{flow:`translate`,scopes:null,totals:{missingTarget:0,tmExact:0,aiRemaining:0,tokenEstimate:0},note:s},changedFiles:0,removedFiles:0,storeMissing:!1,versionStale:!1},d={project:`Acme Docs`,locales:[{locale:`nb-NO`,collection:`docs`,total:120,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{locale:`de-DE`,collection:`docs`,total:120,pct:{translated:100,reviewed:100},gated:!0,shippable:!0}],review:[]},f={args:{tabID:`storybook`,convergence:l,plan:c,onBringUpToDate:()=>{}}},p={args:{tabID:`storybook`,convergence:d,plan:u,onBringUpToDate:()=>{}}},m={render:()=>(0,a.jsx)(i,{open:!0,onOpenChange:()=>{},plan:c,onConfirm:()=>{}})},h={...c,plan:{...c.plan,provider:`claude-code`,subscription:!0,note:`AI work runs on your Claude subscription — the token estimate is scale, not a metered cost. TM leverage counts exact-hash hits only; token estimate is source chars / 4 (no tokenizer, no provider calls).`}},g={render:()=>(0,a.jsx)(i,{open:!0,onOpenChange:()=>{},plan:h,onConfirm:()=>{}})},_={args:{tabID:`storybook`,convergence:l,plan:h,onBringUpToDate:()=>{}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: DRIFTED_REPORT,
    plan: DRIFTED_PLAN,
    onBringUpToDate: () => {}
  }
}`,...f.parameters?.docs?.source},description:{story:`Source drift + pending work: the hero leads with the summary and an armed
 "Bring up to date".`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: CONVERGED_REPORT,
    plan: CONVERGED_PLAN,
    onBringUpToDate: () => {}
  }
}`,...p.parameters?.docs?.source},description:{story:`Everything converged and gates green: the calm state, button disabled.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ConvergePlanDialog open onOpenChange={() => {}} plan={DRIFTED_PLAN} onConfirm={() => {}} />
}`,...m.parameters?.docs?.source},description:{story:`The pre-flight plan dialog on its own: per-(collection, locale) missing /
 TM-exact / AI-remainder counts, the token estimate, and its heuristic note.`,...m.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ConvergePlanDialog open onOpenChange={() => {}} plan={SUBSCRIPTION_PLAN} onConfirm={() => {}} />
}`,...g.parameters?.docs?.source},description:{story:`The plan dialog when the resolved provider is claude-code: the metered-cost
 framing is replaced with "runs on your Claude subscription".`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    convergence: DRIFTED_REPORT,
    plan: SUBSCRIPTION_PLAN,
    onBringUpToDate: () => {}
  }
}`,..._.parameters?.docs?.source},description:{story:`The hero when AI work bills the user's Claude subscription.`,..._.parameters?.docs?.description}}},v=[`Drifted`,`Converged`,`PlanDialog`,`PlanDialogSubscription`,`DriftedSubscription`]}))();export{p as Converged,f as Drifted,_ as DriftedSubscription,m as PlanDialog,g as PlanDialogSubscription,v as __namedExportsOrder,o as default};