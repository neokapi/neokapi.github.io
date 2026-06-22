import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{n,t as r}from"./OpsDiff-BBGaskDP.js";function i(e,t,n){return{workspace_id:`ws-1`,changeset_id:`cs-1`,seq:e,op:t,payload:n,base_rev:4,created_by:`sam`,created_at:s}}var a,o,s,c,l,u,d,f,p,m;e((()=>{n(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s=`2026-06-13T10:00:00Z`,c=[i(1,`term.status`,{concept_id:`c-1`,locale:`en-US`,text:`utilize`,from:`approved`,to:`forbidden`}),i(2,`term.status`,{concept_id:`c-1`,locale:`en-US`,text:`use`,from:`approved`,to:`preferred`}),i(3,`term.add`,{concept_id:`c-1`,term:{text:`Nutzung`,locale:`de-DE`,status:`proposed`}}),i(4,`voice.rule.add`,{profile_id:`p-1`,list:`forbidden`,rule:{term:`utilize`}}),i(5,`relation.add`,{relation:{id:`r-1`,source_id:`c-1`,target_id:`c-2`,relation_type:`REPLACED_BY`,created_at:s}}),i(6,`concept.update`,{concept_id:`c-1`,definition:`The act of completing a purchase.`})],l=e=>(0,a.jsx)(`div`,{style:{maxWidth:560,padding:24},children:(0,a.jsx)(e,{})}),u={title:`Brand Hub/Experiments/OpsDiff`,component:r,tags:[`autodocs`],decorators:[l]},d={args:{ops:c}},f={args:{ops:c,editable:!0,onRemove:o()}},p={args:{ops:[]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ops
  }
}`,...d.parameters?.docs?.source},description:{story:`Read-only diff grouped by category, with governed badges.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    ops,
    editable: true,
    onRemove: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`Editable (a draft): each op can be removed.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ops: []
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Editable`,`Empty`]}))();export{d as Default,f as Editable,p as Empty,m as __namedExportsOrder,u as default};