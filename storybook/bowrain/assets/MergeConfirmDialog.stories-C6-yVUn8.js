import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{t as r}from"./src-W0b8DTY0.js";import{t as i}from"./button-BEDkCUOa.js";import{n as a,t as o}from"./MergeConfirmDialog-BUsBcxOP.js";import{n as s,t as c}from"./decorators-DQNOBrnO.js";import{n as l,t as u}from"./brandHubFixtures-BbLvCRjz.js";function d(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{style:{padding:24},children:[(0,p.jsx)(i,{onClick:()=>t(!0),children:`Merge experiment`}),(0,p.jsx)(o,{open:e,onOpenChange:t,changesetId:`cs-1`,changesetName:`Retire ‘utilize’`,onMerged:m()})]})}var f,p,m,h,g,_,v,y,b;e((()=>{f=t(),r(),a(),l(),s(),p=n(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={total_blocks:1280,affected_blocks:34,new_violations:12,resolved:7,words:210,projects:[{project_id:`p-web`,project_name:`Marketing Website`,affected_blocks:22,new_violations:8,resolved:5,words:140,collections:[]}],samples:[]},g={title:`Brand Hub/Experiments/MergeConfirmDialog`,component:o,parameters:{layout:`centered`}},_={changeset_id:`cs-1`,revisions_created:2,pilots_stopped:1,applied_ops:[1,2]},v={render:()=>(0,p.jsx)(d,{}),decorators:[c(void 0,{...u,getChangesetBlastRadius:async()=>h,mergeChangeset:async()=>_})]},y={render:()=>(0,p.jsx)(d,{}),decorators:[c(void 0,{...u,getChangesetBlastRadius:async()=>h,mergeChangeset:async()=>{throw Error(`409: ${JSON.stringify({error:`change-set has stale-draft conflicts`,conflicts:[{seq:2,concept_id:`c-checkout`,reason:`op authored against revision 4 but concept is at revision 5`}]})}`)}})]},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Harness />,
  decorators: [createProvidersDecorator(undefined, {
    ...brandHubOverrides,
    getChangesetBlastRadius: async () => impact,
    mergeChangeset: async () => cleanMerge
  }) as Decorator]
}`,...v.parameters?.docs?.source},description:{story:`Re-shows the blast radius; merging succeeds.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Harness />,
  decorators: [createProvidersDecorator(undefined, {
    ...brandHubOverrides,
    getChangesetBlastRadius: async () => impact,
    mergeChangeset: async () => {
      throw new Error(\`409: \${JSON.stringify({
        error: "change-set has stale-draft conflicts",
        conflicts: [{
          seq: 2,
          concept_id: "c-checkout",
          reason: "op authored against revision 4 but concept is at revision 5"
        }]
      })}\`);
    }
  }) as Decorator]
}`,...y.parameters?.docs?.source},description:{story:`A stale-draft conflict (409) is surfaced clearly with re-base guidance.`,...y.parameters?.docs?.description}}},b=[`Default`,`Conflict`]}))();export{y as Conflict,v as Default,b as __namedExportsOrder,g as default};