import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{Rt as n,zt as r}from"./iframe-DzWW1kjq.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=[{term:`utilize`,replacement:`use`,correction_count:7,dimension:`vocabulary`,status:`pending`},{term:`synergy`,replacement:`teamwork`,correction_count:4,dimension:`vocabulary`,status:`pending`},{term:`Globex`,replacement:``,correction_count:5,dimension:`vocabulary`,status:`approved`}],s=[...o,{term:`leverage`,replacement:`use`,correction_count:9,dimension:`vocabulary`,status:`promoted`,promoted_version:4,auto:!0},{term:`disrupt`,replacement:`improve`,correction_count:3,dimension:`vocabulary`,status:`rejected`}],c={title:`Brand/CandidateRulesList`,component:n,tags:[`autodocs`],args:{onPromote:a(),onReject:a(),onEvaluate:a()},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:720,padding:24},children:(0,i.jsx)(e,{})})]},l={args:{candidates:o}},u={args:{candidates:s}},d={args:{candidates:o,busyTerm:`utilize`}},f={args:{candidates:[]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    candidates
  }
}`,...l.parameters?.docs?.source},description:{story:`The review queue: pending and approved candidates awaiting a decision.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: withHistory
  }
}`,...u.parameters?.docs?.source},description:{story:`Full history, including a (auto-)promoted rule and a rejected one.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    candidates,
    busyTerm: "utilize"
  }
}`,...d.parameters?.docs?.source},description:{story:`One candidate mid-action (its row is disabled).`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: []
  }
}`,...f.parameters?.docs?.source},description:{story:`Nothing to review yet.`,...f.parameters?.docs?.description}}},p=[`ReviewQueue`,`WithHistory`,`Busy`,`Empty`]}))();export{d as Busy,f as Empty,l as ReviewQueue,u as WithHistory,p as __namedExportsOrder,c as default};