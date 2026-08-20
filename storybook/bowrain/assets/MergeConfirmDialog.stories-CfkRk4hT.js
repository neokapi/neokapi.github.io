import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./src-DYtgtILp.js";import{r as i,t as a}from"./runtime-CWFEJrrT.js";import{t as o}from"./button-n2oHF6Cz.js";import{n as s,t as c}from"./MergeConfirmDialog-oEMcr8Ql.js";import{n as l,t as u}from"./decorators-D4f5Yoyf.js";import{n as d,t as f}from"./brandHubFixtures-DnXaBMAM.js";function p(){let[e,t]=(0,m.useState)(!0);return(0,h.jsxs)(`div`,{style:{padding:24},children:[(0,h.jsx)(o,{onClick:()=>t(!0),children:a(`drT7M0TcYw`,`Merge experiment`)}),(0,h.jsx)(c,{open:e,onOpenChange:t,changesetId:`cs-1`,changesetName:`Retire ‘utilize’`,onMerged:g()})]})}var m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),m=t(),r(),s(),d(),l(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={total_blocks:1280,affected_blocks:34,new_violations:12,resolved:7,words:210,projects:[{project_id:`p-web`,project_name:`Marketing Website`,affected_blocks:22,new_violations:8,resolved:5,words:140,collections:[]}],samples:[]},v={title:`Brand Hub/Experiments/MergeConfirmDialog`,component:c,parameters:{layout:`centered`}},y={changeset_id:`cs-1`,revisions_created:2,pilots_stopped:1,applied_ops:[1,2]},b={render:()=>(0,h.jsx)(p,{}),decorators:[u(void 0,{...f,getChangesetBlastRadius:async()=>_,mergeChangeset:async()=>y})]},x={render:()=>(0,h.jsx)(p,{}),decorators:[u(void 0,{...f,getChangesetBlastRadius:async()=>_,mergeChangeset:async()=>{throw Error(`409: ${JSON.stringify({error:`change-set has stale-draft conflicts`,conflicts:[{seq:2,concept_id:`c-checkout`,reason:`op authored against revision 4 but concept is at revision 5`}]})}`)}})]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Harness />,
  decorators: [createProvidersDecorator(undefined, {
    ...brandHubOverrides,
    getChangesetBlastRadius: async () => impact,
    mergeChangeset: async () => cleanMerge
  }) as Decorator]
}`,...b.parameters?.docs?.source},description:{story:`Re-shows the blast radius; merging succeeds.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`A stale-draft conflict (409) is surfaced clearly with re-base guidance.`,...x.parameters?.docs?.description}}},S=[`Default`,`Conflict`]})))()}C();export{x as Conflict,b as Default,S as __namedExportsOrder,v as default};