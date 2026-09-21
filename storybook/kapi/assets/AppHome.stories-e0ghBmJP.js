import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./runtime-DzTyTKAL.js";import{t as o}from"./src-Df_VNC9C.js";import{n as s,t as c}from"./folder-kanban-ChBsyeoq.js";import{n as l,t as u}from"./folder-open-CAs5Qvck.js";import{n as d,t as f}from"./sparkles-2nkOmh4u.js";import{n as p,t as m}from"./workflow-C39RWy8K.js";import{n as h,t as g}from"./x-BicjnYFm.js";import{t as _}from"./tooltip-Ctp8wuPr.js";import{t as v}from"./error-notice-DzMJg1BT.js";import{t as y}from"./button-BAly9yaV.js";import{n as b,t as x}from"./useShortenHome-BeSKQ3gq.js";import{n as S,t as C}from"./ConnectAICard-CtyVO5dl.js";import{n as w,t as T}from"./RemoveProjectDialog-Cygt35iX.js";import{n as E,t as D}from"./WorkspaceProjectRow-CtK4ocyB.js";function O({workspace:e,workspaceError:t,samplesDismissed:n,onOpenCheckout:i,onOpenContext:o,onForgetProject:s,onNewProject:l,onOpenProject:d,onNavigate:p,onCreateSampleProject:h,onDismissSamples:x,aiDetection:S}){let w=b(),[E,O]=(0,k.useState)(null),j=e?.projects??[];return(0,A.jsxs)(`div`,{className:`mx-auto max-w-3xl p-6`,children:[(0,A.jsxs)(`div`,{className:`mb-8 flex items-center gap-4`,children:[(0,A.jsx)(`img`,{src:`/neokapi-logo.png`,alt:a(`aoDGOlC4DL4`,`neokapi`),className:`h-12 w-12 drop-shadow-lg`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h1`,{className:`text-xl font-semibold`,children:a(`liu9W8bhBEu`,`Welcome to Kapi`)}),(0,A.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:a(`3b6DmR5oRh4`,`Your project's context, applied to real files, for people and agents.`)})]})]}),(0,A.jsxs)(`section`,{className:`mb-8`,children:[(0,A.jsx)(`h2`,{className:`mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:a(`jMn7LoyxUBB`,`Projects`)}),(0,A.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,A.jsxs)(y,{variant:`outline`,onClick:l,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,A.jsx)(c,{size:22,className:`mb-2 text-primary`}),(0,A.jsx)(`div`,{className:`text-base font-semibold`,children:a(`fELpUeJyakp`,`New Project`)}),(0,A.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:a(`bWSmauXzODn`,`Create a Kapi project with content, flows, and languages`)})]}),(0,A.jsxs)(y,{variant:`outline`,onClick:d,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,A.jsx)(u,{size:22,className:`mb-2 text-primary`}),(0,A.jsx)(`div`,{className:`text-base font-semibold`,children:a(`8y3Tq9MGpEk`,`Open a Project`)}),(0,A.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:a(`lPWsyI4mFLZ`,`Open an existing kapi project folder from disk`)})]})]})]}),(0,A.jsxs)(`section`,{className:`mb-8`,children:[(0,A.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,A.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:a(`4P3QnTH2ev2`,`Your Projects`)}),e?.location&&(0,A.jsx)(_,{content:`Where Kapi keeps the context of every project you work on`,children:(0,A.jsx)(`span`,{className:`truncate font-mono text-[11px] text-muted-foreground/70`,children:w(e.location)})})]}),t?(0,A.jsx)(v,{error:t,title:a(`2X9JLQqx6og`,`Your workspace could not be read`)}):j.length>0?(0,A.jsx)(`div`,{className:`space-y-2`,children:j.map(e=>(0,A.jsx)(D,{project:e,onOpenCheckout:i,onOpenContext:o,onRemove:O},e.key))}):e&&(0,A.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:r(`hz7MLfLziw0`,`Nothing here yet. Projects appear as soon as Kapi runs in them, whether you open one here or run {=m0}kapi{/=m0} in a folder.`,{"=m0":(0,A.jsx)(`code`,{className:`font-mono text-xs`,children:`kapi`})},void 0,{"=m0":`no`})}),e?.read_only&&(0,A.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:a(`2yAg0ACDBzE`,`This workspace is open for reading only, so nothing new registers here.`)})]}),(0,A.jsx)(T,{project:E,onClose:()=>O(null),onConfirm:s}),(0,A.jsx)(C,{detection:S}),!n&&(0,A.jsxs)(`section`,{className:`mb-8`,children:[(0,A.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground`,children:[(0,A.jsx)(f,{size:14}),(0,A.jsx)(`span`,{className:`flex-1`,children:a(`52dSfjFIskp`,`New to Kapi? Try a sample project`)}),(0,A.jsx)(_,{content:`Dismiss`,children:(0,A.jsx)(y,{variant:`ghost`,size:`icon-xs`,onClick:x,className:`text-muted-foreground/60`,"aria-label":a(`hojtwumwZb5`,`Dismiss`),children:(0,A.jsx)(g,{size:14})})})]}),(0,A.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:(0,A.jsxs)(y,{variant:`outline`,"data-testid":`sample-kapimart`,onClick:()=>h(`kapimart`),className:`h-auto whitespace-normal rounded-lg border-primary/20 bg-primary/5 p-4 text-left flex-col items-start hover:border-primary/40 hover:bg-primary/10`,children:[(0,A.jsx)(`div`,{className:`text-sm font-medium`,children:a(`fJS5bNsdKcX`,`KapiMart`)}),(0,A.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground font-normal`,children:a(`kEm9k8WDmMA`,`A realistic multilingual project with docs, store UI, Office documents, and templates: 4 content collections, 5 target languages, 1000+ memory entries. No plugins needed.`)})]})})]}),(0,A.jsxs)(`section`,{children:[(0,A.jsx)(`h2`,{className:`mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70`,children:a(`kLsUHWUoMFl`,`Quick tools`)}),(0,A.jsx)(`p`,{className:`mb-3 text-xs text-muted-foreground/70`,children:a(`26c3ANn8DhA`,`One-off actions that don't need a project. Results aren't saved to a project.`)}),(0,A.jsx)(`div`,{className:`grid grid-cols-1 gap-2 sm:grid-cols-2`,children:(0,A.jsxs)(y,{variant:`ghost`,onClick:()=>p(`flows`),className:`h-auto whitespace-normal rounded-lg border border-border/60 p-3 text-left flex-row items-center gap-3 hover:bg-accent/30`,children:[(0,A.jsx)(m,{size:16,className:`shrink-0 text-muted-foreground`}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`div`,{className:`text-sm font-medium`,children:a(`6HAjuBsNRkF`,`Design a Flow`)}),(0,A.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:a(`eSGjHMxhOBT`,`Build tool pipelines`)})]})]})})]})]})}var k,A;function j(){return(j=e((()=>{i(),k=t(),s(),l(),d(),p(),h(),o(),x(),S(),w(),E(),A=n(),O.__docgenInfo={description:`The app's first screen: this machine account's workspace.

Every project kapi has run in is here, whichever surface ran it. A repository
set up from a terminal appears without anyone opening it in the app, and a
project opened here with "Open a Project" joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},samplesDismissed:{required:!0,tsType:{name:`boolean`},description:``},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},onDismissSamples:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`}}}})))()}function M(e){return{location:P,read_only:!1,projects:e}}var N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{j(),{fn:N}=__STORYBOOK_MODULE_TEST__,P=`/fakehome/.local/share/kapi/workspaces/default`,F={title:`Components/AppHome`,component:O,tags:[`autodocs`],args:{samplesDismissed:!1,onOpenCheckout:N(),onOpenContext:N(),onForgetProject:N(),onNewProject:N(),onOpenProject:N(),onNavigate:N(),onCreateSampleProject:N(),onDismissSamples:N()},parameters:{layout:`fullscreen`}},I={args:{workspace:M([{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]},{key:`prj_website`,name:`Website`,last_active:`2026-09-18T09:15:00Z`,checkouts:[{path:`/fakehome/projects/website`,recipe:`/fakehome/projects/website/kapi.yaml`,missing:!1}]}])}},L={args:{workspace:M([])}},R={args:{workspace:M([]),samplesDismissed:!0}},z={args:{samplesDismissed:!0,workspace:M([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},B={args:{samplesDismissed:!0,workspace:{location:P,read_only:!0,projects:[{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]}]}}},V={args:{samplesDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},H=[`WithProjects`,`Empty`,`SamplesDismissed`,`CheckoutsAndLosses`,`ReadOnlyWorkspace`,`WorkspaceUnreadable`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([{
      key: "prj_acmeapp",
      name: "Acme App",
      last_active: "2026-09-20T14:30:00Z",
      checkouts: [{
        path: "/fakehome/projects/acme-app",
        recipe: "/fakehome/projects/acme-app/kapi.yaml",
        missing: false
      }]
    }, {
      key: "prj_website",
      name: "Website",
      last_active: "2026-09-18T09:15:00Z",
      checkouts: [{
        path: "/fakehome/projects/website",
        recipe: "/fakehome/projects/website/kapi.yaml",
        missing: false
      }]
    }])
  }
}`,...I.parameters?.docs?.source},description:{story:`The ordinary case: a few projects, each with one checkout here.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([])
  }
}`,...L.parameters?.docs?.source},description:{story:`Nothing has registered yet, so the sample cards carry the screen.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([]),
    samplesDismissed: true
  }
}`,...R.parameters?.docs?.source},description:{story:`Sample cards hidden after the user dismisses them.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    workspace: workspace([{
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
    }, {
      key: "prj_movedaway",
      name: "Old Handbook",
      last_active: "2026-08-02T11:00:00Z",
      checkouts: [{
        path: "/fakehome/projects/handbook",
        recipe: "/fakehome/projects/handbook/kapi.yaml",
        missing: true
      }]
    }, {
      key: "prj_elsewhere",
      name: "Field Guide",
      last_active: "2026-09-10T16:45:00Z",
      checkouts: []
    }])
  }
}`,...z.parameters?.docs?.source},description:{story:`Two worktrees of one repository are one project with two places to open it
from; a checkout that went away is shown as missing rather than dropped; and
a project only ever opened on another machine still opens, on its context.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    workspace: {
      location: LOCATION,
      read_only: true,
      projects: [{
        key: "prj_acmeapp",
        name: "Acme App",
        last_active: "2026-09-20T14:30:00Z",
        checkouts: [{
          path: "/fakehome/projects/acme-app",
          recipe: "/fakehome/projects/acme-app/kapi.yaml",
          missing: false
        }]
      }]
    }
  }
}`,...B.parameters?.docs?.source},description:{story:`A workspace directory that refuses writes: readable, and nothing new joins.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    workspace: null,
    workspaceError: new Error("workspace: /fakehome/Dropbox/kapi is inside a synchronized folder")
  }
}`,...V.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...V.parameters?.docs?.description}}}})))()}U();export{z as CheckoutsAndLosses,L as Empty,B as ReadOnlyWorkspace,R as SamplesDismissed,I as WithProjects,V as WorkspaceUnreadable,H as __namedExportsOrder,F as default};