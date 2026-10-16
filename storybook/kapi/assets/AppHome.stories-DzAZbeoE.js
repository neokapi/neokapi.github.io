import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./queryKeys-Cbc6FZQG.js";import{n as a,r as o,t as s}from"./runtime-DzTyTKAL.js";import{t as ee}from"./src-7q-6Wva3.js";import{n as te,t as ne}from"./folder-open-CAs5Qvck.js";import{n as c,t as l}from"./KeptConflicts-Du27EcnB.js";import{n as u,t as re}from"./lock-Cpcm131j.js";import{n as d,t as ie}from"./plus-cMmF4Szv.js";import{t as ae}from"./tooltip-Ctp8wuPr.js";import{t as oe}from"./error-notice-DzMJg1BT.js";import{t as se}from"./badge-BrfyDt-s.js";import{t as f}from"./button-BAly9yaV.js";import{r as ce,t as le}from"./SectionHeading-BOhGbptq.js";import{r as p,t as m}from"./useApi-DCxe7Tua.js";import{n as h,t as g}from"./useShortenHome-DujCd24Q.js";import{t as _}from"./useInvalidateOnEvent-BcPbzK_X.js";import{n as ue,t as de}from"./ConnectAICard-D1uChvlH.js";import{n as fe,t as pe}from"./RemoveProjectDialog-DsCdP_lo.js";import{n as v,t as me}from"./StartHere-CfbC4RGy.js";import{n as he,r as y,t as ge}from"./WhatsNew-DLs0No9P.js";import{n as b,r as x,t as _e}from"./WorkspaceProjectRow-DSJS5aCg.js";import{n as S,t as ve}from"./WorkspaceRules-B0i952US.js";import{i as C,t as ye}from"./keptConflicts-CXTVvhwx.js";import{a as w,c as T,f as E,l as be,r as xe,u as Se}from"./standings-DSxO1rPS.js";function Ce(e){if(!e)return null;let t=[];for(let n of e.projects)n.context&&t.push({...n.context,project_name:n.context.project_name||n.name});return t}function D(){return(D=e((()=>{t(),p(),_()})))()}function O({conflicts:e,client:t,rebase:n,discard:r}){return(0,k.jsx)(l,{tabID:``,conflicts:e,source:j,client:t??A,rebase:n??((e,t)=>m.rebaseWorkspaceDocument(e,t)),discard:r??(async(e,t)=>{await m.discardWorkspaceDocument(e,t)}),release:async()=>{}})}var k,A,j;function we(){return(we=e((()=>{p(),i(),c(),k=n(),A={read:async()=>null,apply:async e=>{let t=await m.applyWorkspaceDocument(JSON.stringify(e));return t?JSON.parse(t):null},describe:async()=>null,history:async()=>null},j={key:r.workspaceDocumentConflicts(),load:()=>m.getWorkspaceDocumentConflicts()},O.__docgenInfo={description:``,methods:[],displayName:`WorkspaceConflicts`,props:{conflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded for Storybook and tests; read from the workspace otherwise.`},client:{required:!1,tsType:{name:`ChangeClient`},description:`The change service; the workspace home's when absent.`},rebase:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<DocumentRebase | null>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`union`,raw:`DocumentRebase | null`,elements:[{name:`DocumentRebase`},{name:`null`}]}],raw:`Promise<DocumentRebase | null>`}}},description:``},discard:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:``}}}})))()}function M({workspace:e,workspaceError:t,standings:n,workspaceRules:r,startHereDismissed:i,onDismissStartHere:o,hasOpenProject:ee,onConnectAssistant:te,onOpenWhatsNew:c,onOpenCheckout:l,onOpenContext:u,onForgetProject:d,onNewProject:p,onOpenProject:m,onNavigate:h,onCreateSampleProject:g,aiDetection:_,documentConflicts:ue}){let[fe,v]=(0,N.useState)(null),y=e?.projects??[],b=(0,N.useMemo)(()=>Ce(e),[e]),x=n??b,S=!t&&!!e&&y.length===0,C=!i&&(0,P.jsx)(me,{onDismiss:o,onCreateSampleProject:g,onConnectAssistant:te,hasOpenProject:ee});return(0,P.jsxs)(`div`,{"data-slot":`app-home`,className:`mx-auto max-w-4xl space-y-8 p-6`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(ce,{className:`mb-4`,title:s(`17fgryidkD4`,`Your context`),subtitle:s(`XIVHY10xv0`,`What your projects write by, and what your assistants noticed.`),actions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f,{variant:`link`,size:`sm`,"data-slot":`home-history`,className:`h-auto px-0`,onClick:()=>h(`history`),children:s(`5oJcEqiwmRD`,`History`)}),e?.location&&(0,P.jsx)(Te,{location:e.location}),e?.read_only&&(0,P.jsx)(ae,{content:s(`2o437K1XjiL`,`This workspace is open for reading only, so nothing new registers here.`),children:(0,P.jsx)(se,{variant:`outline`,"data-slot":`workspace-read-only`,tabIndex:0,className:`text-[11px] font-normal text-muted-foreground`,children:a(`8Q1pkNtx4jh`,`{=m0} Read only`,{"=m0":(0,P.jsx)(re,{"aria-hidden":!0})})})})]})}),!S&&(0,P.jsx)(he,{standings:x,projects:y.length})]}),(0,P.jsx)(`div`,{className:`empty:hidden`,children:(0,P.jsx)(O,{conflicts:ue})}),S&&C,!S&&(0,P.jsx)(ge,{standings:x,onOpen:c}),(0,P.jsxs)(`section`,{"data-slot":`home-projects`,"aria-labelledby":`home-projects-heading`,children:[(0,P.jsxs)(`div`,{className:`mb-1 flex items-center justify-between gap-3`,children:[(0,P.jsx)(`div`,{id:`home-projects-heading`,children:(0,P.jsx)(le,{children:s(`cgKY9yeEJBs`,`Projects`)})}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,P.jsx)(f,{variant:`ghost`,size:`sm`,onClick:p,children:a(`loXS0MZXbam`,`{=m0} New project`,{"=m0":(0,P.jsx)(ie,{size:14})})}),(0,P.jsx)(f,{variant:`ghost`,size:`sm`,onClick:m,children:a(`jyhKqUY4OMM`,`{=m0} Open a folder`,{"=m0":(0,P.jsx)(ne,{size:14})})})]})]}),t?(0,P.jsx)(oe,{error:t,title:s(`2X9JLQqx6og`,`Your workspace could not be read`)}):y.length>0?(0,P.jsx)(`div`,{className:`divide-y divide-border/50`,children:y.map(e=>(0,P.jsx)(_e,{project:e,onOpenCheckout:l,onOpenContext:u,onRemove:v},e.key))}):e&&(0,P.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:a(`bc9hbxTdCoU`,`Nothing here yet. Projects appear as soon as kapi runs in them, whether you open one here or run {=m0} in a folder.`,{"=m0":(0,P.jsx)(`code`,{className:`font-mono text-xs`,translate:`no`,children:`kapi`})})})]}),!S&&(0,P.jsx)(ve,{rules:r}),!S&&C,(0,P.jsx)(pe,{project:fe,onClose:()=>v(null),onConfirm:d}),(0,P.jsx)(`div`,{className:`empty:hidden`,children:(0,P.jsx)(de,{detection:_})})]})}function Te({location:e}){let t=h();return(0,P.jsx)(ae,{content:(0,P.jsxs)(`span`,{className:`block max-w-80`,children:[s(`8TFHK8bhDFI`,`Where Kapi keeps the context of every project you work on`),(0,P.jsx)(`span`,{className:`mt-0.5 block font-mono break-all`,translate:`no`,children:t(e)})]}),children:(0,P.jsx)(`span`,{"data-slot":`workspace-location`,tabIndex:0,translate:`no`,className:`max-w-40 truncate rounded-md border border-border/70 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground`,children:x(e)})})}var N,P;function F(){return(F=e((()=>{o(),N=t(),te(),u(),d(),ee(),g(),D(),ue(),fe(),v(),y(),we(),b(),S(),P=n(),M.__docgenInfo={description:`The app's first screen, in the overview shape (packages/ui/docs/page-patterns.md):
the context this machine account's projects write by, and what the
assistants working in them noticed. A header, a row of labelled counts, then
two lists of rows, each row leading to a project.

Every project kapi has run in is listed, whichever surface ran it. A
repository set up from a terminal appears without anyone opening it in the
app, and a folder opened here joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},standings:{required:!1,tsType:{name:`union`,raw:`ContextProjectStanding[] | null`,elements:[{name:`Array`,elements:[{name:`ContextProjectStanding`}],raw:`ContextProjectStanding[]`},{name:`null`}]},description:`Every project's context in numbers. Absent reads them off the workspace's rows.`},news:{required:!1,tsType:{name:`union`,raw:`ContextNews[] | null`,elements:[{name:`Array`,elements:[{name:`ContextNews`}],raw:`ContextNews[]`},{name:`null`}]},description:"What each project's digest holds that the person has not seen. The home\nreads the same counts off `standings`, so it does not draw these."},workspaceRules:{required:!1,tsType:{name:`Array`,elements:[{name:`WorkspaceRule`}],raw:`WorkspaceRule[]`},description:`Pre-loaded workspace rules for Storybook and tests, which reach no backend.`},startHereDismissed:{required:!0,tsType:{name:`boolean`},description:`The Start here steps were dismissed.`},onDismissStartHere:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},hasOpenProject:{required:!0,tsType:{name:`boolean`},description:`A project tab is open, so Start here can connect an assistant to it.`},onConnectAssistant:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Open the most recent project tab on its Assistant section.`},onOpenWhatsNew:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project on its What's new, by workspace key.`},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`},documentConflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded .kpz document conflicts for Storybook and tests.`}}}})))()}function I(e){return{location:xe,read_only:!1,projects:e}}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ee;function De(){return(De=e((()=>{F(),C(),Se(),{fn:L}=__STORYBOOK_MODULE_TEST__,R={title:`Components/AppHome`,component:M,tags:[`autodocs`],args:{workspaceRules:[],startHereDismissed:!1,hasOpenProject:!1,onDismissStartHere:L(),onConnectAssistant:L(),onOpenWhatsNew:L(),onOpenCheckout:L(),onOpenContext:L(),onForgetProject:L(),onNewProject:L(),onOpenProject:L(),onNavigate:L(),onCreateSampleProject:L()},parameters:{layout:`fullscreen`}},z={theme:`dark`},B={args:{workspace:I([])}},V={args:B.args,globals:z},H={args:{workspace:E(w),hasOpenProject:!0}},U={args:H.args,globals:z},W={args:{workspace:E(T),startHereDismissed:!0}},G={args:W.args,globals:z},K={args:{workspace:E(T),workspaceRules:be,startHereDismissed:!0}},q={args:K.args,globals:z},J={args:{startHereDismissed:!0,workspace:E(w,!0)}},Y={args:J.args,globals:z},X={args:{startHereDismissed:!0,workspace:{location:`/fakehome/Library/Application Support/kapi/workspaces/acme-documentation-team`,read_only:!1,projects:[{...T[0],name:`Acme Help Center and Developer Documentation Portal (2027 edition)`,voice:`acme-developer-documentation-voice`,context_files:{files:[`kapi/terms.yaml`],command:`kapi store import`,message:"this project carries context files (kapi/terms.yaml) and its store holds no context yet. They are read by `kapi store import`, and until then nothing in them is in force"}},...T.slice(1)]}}},Z={args:{workspace:E(w),startHereDismissed:!0,documentConflicts:[{...ye,doc:`/fakehome/handoff/loose.kpz!messages.json`}]}},Q={args:{startHereDismissed:!0,workspace:I([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},$={args:{startHereDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},Ee=[`FirstRun`,`FirstRunDark`,`OneProjectWorking`,`OneProjectWorkingDark`,`SeveralProjects`,`SeveralProjectsDark`,`WithWorkspaceRules`,`WithWorkspaceRulesDark`,`ReadOnlyWorkspace`,`ReadOnlyWorkspaceDark`,`LongContent`,`WithDocumentConflict`,`CheckoutsAndLosses`,`WorkspaceUnreadable`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([])
  }
}`,...B.parameters?.docs?.source},description:{story:`The first run: nothing has registered, nothing is recorded, and Start here
carries the screen. The counts wait until there is a project to count.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: FirstRun.args,
  globals: dark
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(ONE_PROJECT_ROWS),
    hasOpenProject: true
  }
}`,...H.parameters?.docs?.source},description:{story:`One project with four new items while claude-code is working in it: the row
carries claude-code's mark and a working chip, and Start here comes last.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: OneProjectWorking.args,
  globals: dark
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(SEVERAL_ROWS),
    startHereDismissed: true
  }
}`,...W.parameters?.docs?.source},description:{story:`Several projects, newest session first. KapiMart holds a disagreement, so
its row carries a "1 needs you" chip and reads Decide, and "needs you" is
the one count in the warning ink. Field Guide is quiet and has no row under
What's new.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: SeveralProjects.args,
  globals: dark
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(SEVERAL_ROWS),
    workspaceRules: WORKSPACE_RULES,
    startHereDismissed: true
  }
}`,...K.parameters?.docs?.source},description:{story:`Two rules hold in every project: one kept in a review, one merged.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: WithWorkspaceRules.args,
  globals: dark
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    startHereDismissed: true,
    workspace: workspaceOf(ONE_PROJECT_ROWS, true)
  }
}`,...J.parameters?.docs?.source},description:{story:`A workspace directory that refuses writes: readable, and nothing new joins.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: ReadOnlyWorkspace.args,
  globals: dark
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    startHereDismissed: true,
    workspace: {
      location: "/fakehome/Library/Application Support/kapi/workspaces/acme-documentation-team",
      read_only: false,
      projects: [{
        ...SEVERAL_ROWS[0],
        name: "Acme Help Center and Developer Documentation Portal (2027 edition)",
        voice: "acme-developer-documentation-voice",
        context_files: {
          files: ["kapi/terms.yaml"],
          command: "kapi store import",
          message: "this project carries context files (kapi/terms.yaml) and its store holds no context yet. They are read by \`kapi store import\`, and until then nothing in them is in force"
        }
      }, ...SEVERAL_ROWS.slice(1)]
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Long names: a project name, a voice profile and a workspace directory that
each run past their column truncate in place, with the whole value in the
tooltip.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(ONE_PROJECT_ROWS),
    startHereDismissed: true,
    documentConflicts: [{
      ...documentConflict,
      doc: "/fakehome/handoff/loose.kpz!messages.json"
    }]
  }
}`,...Z.parameters?.docs?.source},description:{story:`A .kpz outside every project was replaced on disk while it held an edit:
its other version waits on the home to be rebased or discarded.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    startHereDismissed: true,
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
}`,...Q.parameters?.docs?.source},description:{story:`Two worktrees of one repository are one project with two places to open it
from; a checkout that went away is shown as missing rather than dropped; and
a project only ever opened on another machine still opens, on its context.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    startHereDismissed: true,
    workspace: null,
    workspaceError: new Error("workspace: /fakehome/Dropbox/kapi is inside a synchronized folder")
  }
}`,...$.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...$.parameters?.docs?.description}}}})))()}De();export{Q as CheckoutsAndLosses,B as FirstRun,V as FirstRunDark,X as LongContent,H as OneProjectWorking,U as OneProjectWorkingDark,J as ReadOnlyWorkspace,Y as ReadOnlyWorkspaceDark,W as SeveralProjects,G as SeveralProjectsDark,Z as WithDocumentConflict,K as WithWorkspaceRules,q as WithWorkspaceRulesDark,$ as WorkspaceUnreadable,Ee as __namedExportsOrder,R as default};