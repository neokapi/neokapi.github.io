import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{Fn as t,In as n}from"./iframe-BTSJAuIu.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Review/ReviewInbox`,component:t,args:{onOpenReview:r()}},a={args:{projects:[{projectId:`p1`,projectName:`Marketing Website`,stream:`main`,pending:12,established:3,translated:5},{projectId:`p2`,projectName:`Mobile App`,stream:`main`,pending:4,established:8,translated:2},{projectId:`p3`,projectName:`Help Center`,stream:`main`,pending:1,established:10,translated:0}]}},o={args:{projects:[{projectId:`p1`,projectName:`Marketing Website`,stream:`main`,pending:0,established:9,translated:3}]}},s={args:{projects:[],loading:!0}},c={args:{onOpenRules:r(),rules:[{projectId:`p1`,projectName:`Marketing Website`,stream:`main`,waiting:3,assigned:1},{projectId:`p2`,projectName:`Mobile App`,stream:`main`,waiting:2,assigned:0}],projects:[{projectId:`p1`,projectName:`Marketing Website`,stream:`main`,pending:12,established:3,translated:5}]}},l=[`Default`,`Empty`,`Loading`,`RulesWaiting`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onOpenRules: fn(),
    rules: [{
      projectId: "p1",
      projectName: "Marketing Website",
      stream: "main",
      waiting: 3,
      assigned: 1
    }, {
      projectId: "p2",
      projectName: "Mobile App",
      stream: "main",
      waiting: 2,
      assigned: 0
    }],
    projects: [{
      projectId: "p1",
      projectName: "Marketing Website",
      stream: "main",
      pending: 12,
      established: 3,
      translated: 5
    }]
  }
}`,...c.parameters?.docs?.source},description:{story:`Questions about suggestions waiting in two projects, beside the review standing.`,...c.parameters?.docs?.description}}}})))()}u();export{a as Default,o as Empty,s as Loading,c as RulesWaiting,l as __namedExportsOrder,i as default};