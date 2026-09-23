import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./WorkspaceProjectRow-DBpAoEh6.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/WorkspaceProjectRow`,component:n,tags:[`autodocs`],args:{onOpenCheckout:r(),onOpenContext:r(),onRemove:r()}},a={args:{project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}}},o={args:{project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]}}},s={args:{project:{key:`prj_handbook`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]}}},c={args:{project:{key:`prj_fieldguide`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}}},l=[`OneCheckout`,`SeveralCheckouts`,`MissingCheckout`,`NoCheckoutHere`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`One checkout: the row opens it.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:`Several worktrees of one repository: the reader picks which to open.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`The folder went away. The project and its context stay.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_fieldguide",
      name: "Field Guide",
      last_active: "2026-09-10T16:45:00Z",
      checkouts: []
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Registered from another machine: the context opens without the files.`,...c.parameters?.docs?.description}}}})))()}u();export{s as MissingCheckout,c as NoCheckoutHere,a as OneCheckout,o as SeveralCheckouts,l as __namedExportsOrder,i as default};