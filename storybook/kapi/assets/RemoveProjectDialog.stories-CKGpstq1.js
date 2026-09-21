import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./RemoveProjectDialog-G202bVSm.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/RemoveProjectDialog`,component:n,tags:[`autodocs`],args:{onClose:r(),onConfirm:r(),project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}}},a={args:{removal:{key:`prj_kapimart`,name:`KapiMart`,store:`/fakehome/.local/share/kapi/workspaces/default/projects/prj_kapimart.db`,checkouts:[`/fakehome/src/kapimart`,`/fakehome/src/kapimart-release`]}}},o={args:{project:{key:`prj_fieldguide`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]},removal:{key:`prj_fieldguide`,name:`Field Guide`,store:`/fakehome/.local/share/kapi/workspaces/default/projects/prj_fieldguide.db`,checkouts:[]}}},s=[`WithCheckouts`,`NoCheckoutHere`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    removal: {
      key: "prj_kapimart",
      name: "KapiMart",
      store: "/fakehome/.local/share/kapi/workspaces/default/projects/prj_kapimart.db",
      checkouts: ["/fakehome/src/kapimart", "/fakehome/src/kapimart-release"]
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`The confirmation names the file that goes and the folders that stay.`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_fieldguide",
      name: "Field Guide",
      last_active: "2026-09-10T16:45:00Z",
      checkouts: []
    },
    removal: {
      key: "prj_fieldguide",
      name: "Field Guide",
      store: "/fakehome/.local/share/kapi/workspaces/default/projects/prj_fieldguide.db",
      checkouts: []
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`A project with no copy on this machine: nothing on disk changes.`,...o.parameters?.docs?.description}}}})))()}c();export{o as NoCheckoutHere,a as WithCheckouts,s as __namedExportsOrder,i as default};