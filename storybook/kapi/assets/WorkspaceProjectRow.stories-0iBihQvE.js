import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./WorkspaceProjectRow-C891h5H7.js";import{l as r,s as i}from"./standings-Cgg9f82o.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/WorkspaceProjectRow`,component:n,tags:[`autodocs`],args:{onOpenCheckout:a(),onOpenContext:a(),onRemove:a()}},s={args:{project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}}},c={args:{project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]}}},l={args:{project:{key:`prj_handbook`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]}}},u={args:{project:{key:`prj_fieldguide`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}}},d={args:{project:i[0]}},f={args:{project:i[1]}},p={args:{project:i[2]}},m=[`OneCheckout`,`SeveralCheckouts`,`MissingCheckout`,`NoCheckoutHere`,`WithContext`,`SharedThroughGit`,`OnBowrain`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_kapimart",
      name: "KapiMart",
      last_active: "2026-09-21T08:05:00Z",
      checkouts: [{
        path: "/fakehome/src/kapimart",
        recipe: "/fakehome/src/kapimart/kapi.yaml",
        missing: false
      }]
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`One checkout: the row opens it.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_kapimart",
      name: "KapiMart",
      last_active: "2026-09-21T08:05:00Z",
      checkouts: [{
        path: "/fakehome/src/kapimart",
        recipe: "/fakehome/src/kapimart/kapi.yaml",
        missing: false
      }, {
        path: "/fakehome/src/kapimart-release",
        recipe: "/fakehome/src/kapimart-release/kapi.yaml",
        missing: false
      }]
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Several worktrees of one repository: the reader picks which to open.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_handbook",
      name: "Old Handbook",
      last_active: "2026-08-02T11:00:00Z",
      checkouts: [{
        path: "/fakehome/projects/handbook",
        recipe: "/fakehome/projects/handbook/kapi.yaml",
        missing: true
      }]
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`The folder went away. The project and its context stay.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_fieldguide",
      name: "Field Guide",
      last_active: "2026-09-10T16:45:00Z",
      checkouts: []
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Registered from another machine: the context opens without the files.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    project: SEVERAL_ROWS[0]
  }
}`,...d.parameters?.docs?.source},description:{story:`The line under the name: the voice, the rules and how far the context reaches.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    project: SEVERAL_ROWS[1]
  }
}`,...f.parameters?.docs?.source},description:{story:`A project shared through git, with two worktrees here.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    project: SEVERAL_ROWS[2]
  }
}`,...p.parameters?.docs?.source},description:{story:`A project connected to a Bowrain server, with no checkout here and no voice bound.`,...p.parameters?.docs?.description}}}})))()}h();export{l as MissingCheckout,u as NoCheckoutHere,p as OnBowrain,s as OneCheckout,c as SeveralCheckouts,f as SharedThroughGit,d as WithContext,m as __namedExportsOrder,o as default};