import{c as e,i as t}from"./preload-helper-DBuSV-bh.js";import{t as n}from"./react-BHOuiJCc.js";import{t as r}from"./jsx-runtime-CNPDJLAB.js";import{t as i}from"./src-BZESCNgO.js";import{t as a}from"./button-BjQmflmu.js";import{vt as o,yt as s}from"./iframe-GWQmJElV.js";import{n as c,t as l}from"./decorators-DjvImy0g.js";import{n as u,t as d}from"./brandHubFixtures-331BG5DA.js";function f(){let[e,t]=(0,p.useState)(!0);return(0,m.jsxs)(`div`,{style:{padding:24},children:[(0,m.jsx)(a,{onClick:()=>t(!0),children:`Merge experiment`}),(0,m.jsx)(o,{open:e,onOpenChange:t,changesetId:`cs-1`,changesetName:`Retire ‘utilize’`,onMerged:h()})]})}var p,m,h,g,_,v,y,b,x;t((()=>{p=e(n(),1),i(),s(),u(),c(),m=r(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={total_blocks:1280,affected_blocks:34,new_violations:12,resolved:7,words:210,projects:[{project_id:`p-web`,project_name:`Marketing Website`,affected_blocks:22,new_violations:8,resolved:5,words:140,collections:[]}],samples:[]},_={title:`Brand Hub/Experiments/MergeConfirmDialog`,component:o,parameters:{layout:`centered`}},v={changeset_id:`cs-1`,revisions_created:2,pilots_stopped:1,applied_ops:[1,2]},y={render:()=>(0,m.jsx)(f,{}),decorators:[l(void 0,{...d,getChangesetBlastRadius:async()=>g,mergeChangeset:async()=>v})]},b={render:()=>(0,m.jsx)(f,{}),decorators:[l(void 0,{...d,getChangesetBlastRadius:async()=>g,mergeChangeset:async()=>{throw Error(`409: ${JSON.stringify({error:`change-set has stale-draft conflicts`,conflicts:[{seq:2,concept_id:`c-checkout`,reason:`op authored against revision 4 but concept is at revision 5`}]})}`)}})]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Harness />,
  decorators: [createProvidersDecorator(undefined, {
    ...brandHubOverrides,
    getChangesetBlastRadius: async () => impact,
    mergeChangeset: async () => cleanMerge
  }) as Decorator]
}`,...y.parameters?.docs?.source},description:{story:`Re-shows the blast radius; merging succeeds.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A stale-draft conflict (409) is surfaced clearly with re-base guidance.`,...b.parameters?.docs?.description}}},x=[`Default`,`Conflict`]}))();export{b as Conflict,y as Default,x as __namedExportsOrder,_ as default};