import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./WorkspaceProjectRow-BYlMqu7j.js";import{c as i,u as a}from"./standings-BhBjmO7h.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/WorkspaceProjectRow`,component:r,tags:[`autodocs`],args:{onOpenCheckout:s(),onOpenContext:s(),onRemove:s()},decorators:[e=>(0,o.jsx)(`div`,{className:`mx-auto max-w-4xl p-6`,children:(0,o.jsx)(e,{})})]},l={theme:`dark`},u={args:{project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}}},d={args:{project:{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]}}},f={args:{project:{key:`prj_handbook`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]}}},p={args:{project:{key:`prj_fieldguide`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}}},m={args:{project:i[0]}},h={args:m.args,globals:l},g={args:{project:i[1]}},_={args:{project:i[2]}},v={args:{project:{...i[3],context_files:{files:[`kapi/terms.yaml`],command:`kapi store import`,message:"this project carries context files (kapi/terms.yaml) and its store holds no context yet. They are read by `kapi store import`, and until then nothing in them is in force"}}}},y={args:v.args,globals:l},b=[`OneCheckout`,`SeveralCheckouts`,`MissingCheckout`,`NoCheckoutHere`,`WithContext`,`WithContextDark`,`SharedThroughGit`,`OnBowrain`,`UnreadContextFiles`,`UnreadContextFilesDark`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`One checkout: Open opens it, and its path is the tooltip on the name.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Several worktrees of one repository: Open opens the first, the menu holds the other.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`The folder went away. The project and its context stay, and it opens on its context.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      key: "prj_fieldguide",
      name: "Field Guide",
      last_active: "2026-09-10T16:45:00Z",
      checkouts: []
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Registered from another machine: the context opens without the files.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    project: SEVERAL_ROWS[0]
  }
}`,...m.parameters?.docs?.source},description:{story:`The columns: the voice, the rules in force, how far the context reaches, and when.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: WithContext.args,
  globals: dark
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    project: SEVERAL_ROWS[1]
  }
}`,...g.parameters?.docs?.source},description:{story:`A project shared through git, with two worktrees here.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    project: SEVERAL_ROWS[2]
  }
}`,..._.parameters?.docs?.source},description:{story:`A project connected to a Bowrain server, with no checkout here and no voice bound.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      ...SEVERAL_ROWS[3],
      context_files: {
        files: ["kapi/terms.yaml"],
        command: "kapi store import",
        message: "this project carries context files (kapi/terms.yaml) and its store holds no context yet. They are read by \`kapi store import\`, and until then nothing in them is in force"
      }
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`A checkout holding context files its store has never read.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: UnreadContextFiles.args,
  globals: dark
}`,...y.parameters?.docs?.source}}}})))()}x();export{f as MissingCheckout,p as NoCheckoutHere,_ as OnBowrain,u as OneCheckout,d as SeveralCheckouts,g as SharedThroughGit,v as UnreadContextFiles,y as UnreadContextFilesDark,m as WithContext,h as WithContextDark,b as __namedExportsOrder,c as default};