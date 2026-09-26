import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{An as t,jn as n}from"./iframe-CcapKOBY.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Review/ReviewInbox`,component:t,args:{onOpenReview:r()}},a={args:{projects:[{projectId:`p1`,projectName:`Marketing Website`,stream:`main`,pending:12,established:3,translated:5},{projectId:`p2`,projectName:`Mobile App`,stream:`main`,pending:4,established:8,translated:2},{projectId:`p3`,projectName:`Help Center`,stream:`main`,pending:1,established:10,translated:0}]}},o={args:{projects:[{projectId:`p1`,projectName:`Marketing Website`,stream:`main`,pending:0,established:9,translated:3}]}},s={args:{projects:[],loading:!0}},c=[`Default`,`Empty`,`Loading`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    projects: [{
      projectId: "p1",
      projectName: "Marketing Website",
      stream: "main",
      pending: 12,
      established: 3,
      translated: 5
    }, {
      projectId: "p2",
      projectName: "Mobile App",
      stream: "main",
      pending: 4,
      established: 8,
      translated: 2
    }, {
      projectId: "p3",
      projectName: "Help Center",
      stream: "main",
      pending: 1,
      established: 10,
      translated: 0
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:`Several projects awaiting review, most-pending first.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    projects: [{
      projectId: "p1",
      projectName: "Marketing Website",
      stream: "main",
      pending: 0,
      established: 9,
      translated: 3
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:`Nothing awaiting review across the workspace.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    projects: [],
    loading: true
  }
}`,...s.parameters?.docs?.source}}}})))()}l();export{a as Default,o as Empty,s as Loading,c as __namedExportsOrder,i as default};