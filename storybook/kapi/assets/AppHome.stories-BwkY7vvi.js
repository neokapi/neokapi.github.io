import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,r as ee,t as i}from"./runtime-CSk461YI.js";import{t as te}from"./src-CCu8hK8w.js";import{n as a,t as ne}from"./folder-open-ClJ0Dxav.js";import{n as o,t as s}from"./KeptConflicts-CwFYXxLT.js";import{n as c,t as re}from"./lock-DY7P5s6b.js";import{n as l,t as ie}from"./plus-CyR0yhbP.js";import{t as u}from"./tooltip-0jRkVZfv.js";import{t as ae}from"./error-notice-Ch1mnx8I.js";import{t as oe}from"./badge-Cauh2EMa.js";import{t as d}from"./button-DIWKeC3J.js";import{r as se,t as ce}from"./SectionHeading-CEH78ECF.js";import{r as f,t as p}from"./useApi-C4mcMwJB.js";import{n as le,t as ue}from"./queryKeys-btB1QD8C.js";import{n as de,t as fe}from"./useShortenHome-BQGqhVVt.js";import{t as pe}from"./useInvalidateOnEvent-D0ojJRwt.js";import{n as m,t as me}from"./ConnectAICard-DEKmuuPk.js";import{n as h,t as he}from"./RemoveProjectDialog-BLOJAP7v.js";import{n as g,t as ge}from"./StartHere-C20Y4nl4.js";import{n as _e,r as _,t as ve}from"./WhatsNew-CVpJDWiQ.js";import{n as v,r as y,t as ye}from"./WorkspaceProjectRow-qYm4QL5U.js";import{n as b,t as be}from"./WorkspaceRules-CNl6vtaw.js";import{i as x,t as xe}from"./keptConflicts-96AeIPCc.js";import{a as S,c as C,f as w,l as Se,r as Ce,u as we}from"./standings-BhBjmO7h.js";function Te(e){if(!e)return null;let t=[];for(let n of e.projects)n.context&&t.push({...n.context,project_name:n.context.project_name||n.name});return t}function T(){return(T=e((()=>{t(),f(),pe()})))()}function E({conflicts:e,client:t,rebase:n,discard:r}){return(0,D.jsx)(s,{tabID:``,conflicts:e,source:k,client:t??O,rebase:n??((e,t)=>p.rebaseWorkspaceDocument(e,t)),discard:r??(async(e,t)=>{await p.discardWorkspaceDocument(e,t)}),release:async()=>{}})}var D,O,k;function A(){return(A=e((()=>{f(),ue(),o(),D=n(),O={read:async()=>null,apply:async e=>{let t=await p.applyWorkspaceDocument(JSON.stringify(e));return t?JSON.parse(t):null},describe:async()=>null,history:async()=>null},k={key:le.workspaceDocumentConflicts(),load:()=>p.getWorkspaceDocumentConflicts()},E.__docgenInfo={description:``,methods:[],displayName:`WorkspaceConflicts`,props:{conflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded for Storybook and tests; read from the workspace otherwise.`},client:{required:!1,tsType:{name:`ChangeClient`},description:`The change service; the workspace home's when absent.`},rebase:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<DocumentRebase | null>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`union`,raw:`DocumentRebase | null`,elements:[{name:`DocumentRebase`},{name:`null`}]}],raw:`Promise<DocumentRebase | null>`}}},description:``},discard:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:``}}}})))()}function j({workspace:e,workspaceError:t,standings:n,workspaceRules:ee,startHereDismissed:te,onDismissStartHere:a,hasOpenProject:o,onConnectAssistant:s,onOpenWhatsNew:c,onOpenCheckout:l,onOpenContext:f,onForgetProject:p,onNewProject:le,onOpenProject:ue,onNavigate:de,onCreateSampleProject:fe,aiDetection:pe,documentConflicts:m}){let[h,g]=(0,M.useState)(null),_=e?.projects??[],v=(0,M.useMemo)(()=>Te(e),[e]),y=n??v,b=!t&&!!e&&_.length===0,x=!te&&(0,N.jsx)(ge,{onDismiss:a,onCreateSampleProject:fe,onConnectAssistant:s,hasOpenProject:o});return(0,N.jsxs)(`div`,{"data-slot":`app-home`,className:`mx-auto max-w-4xl space-y-8 p-6`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(se,{className:`mb-4`,title:i(`17fgryidkD4`,`Your context`),subtitle:i(`XIVHY10xv0`,`What your projects write by, and what your assistants noticed.`),actions:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(d,{variant:`link`,size:`sm`,"data-slot":`home-history`,className:`h-auto px-0`,onClick:()=>de(`history`),children:i(`5oJcEqiwmRD`,`History`)}),e?.location&&(0,N.jsx)(Ee,{location:e.location}),e?.read_only&&(0,N.jsx)(u,{content:i(`2o437K1XjiL`,`This workspace is open for reading only, so nothing new registers here.`),children:(0,N.jsx)(oe,{variant:`outline`,"data-slot":`workspace-read-only`,tabIndex:0,className:`text-[11px] font-normal text-muted-foreground`,children:r(`8Q1pkNtx4jh`,`{=m0} Read only`,{"=m0":(0,N.jsx)(re,{"aria-hidden":!0})})})})]})}),!b&&(0,N.jsx)(_e,{standings:y,projects:_.length})]}),(0,N.jsx)(`div`,{className:`empty:hidden`,children:(0,N.jsx)(E,{conflicts:m})}),b&&x,!b&&(0,N.jsx)(ve,{standings:y,onOpen:c}),(0,N.jsxs)(`section`,{"data-slot":`home-projects`,"aria-labelledby":`home-projects-heading`,children:[(0,N.jsxs)(`div`,{className:`mb-1 flex items-center justify-between gap-3`,children:[(0,N.jsx)(`div`,{id:`home-projects-heading`,children:(0,N.jsx)(ce,{children:i(`cgKY9yeEJBs`,`Projects`)})}),(0,N.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,N.jsx)(d,{variant:`ghost`,size:`sm`,onClick:le,children:r(`loXS0MZXbam`,`{=m0} New project`,{"=m0":(0,N.jsx)(ie,{size:14})})}),(0,N.jsx)(d,{variant:`ghost`,size:`sm`,onClick:ue,children:r(`jyhKqUY4OMM`,`{=m0} Open a folder`,{"=m0":(0,N.jsx)(ne,{size:14})})})]})]}),t?(0,N.jsx)(ae,{error:t,title:i(`2X9JLQqx6og`,`Your workspace could not be read`)}):_.length>0?(0,N.jsx)(`div`,{className:`divide-y divide-border/50`,children:_.map(e=>(0,N.jsx)(ye,{project:e,onOpenCheckout:l,onOpenContext:f,onRemove:g},e.key))}):e&&(0,N.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:r(`bc9hbxTdCoU`,`Nothing here yet. Projects appear as soon as kapi runs in them, whether you open one here or run {=m0} in a folder.`,{"=m0":(0,N.jsx)(`code`,{className:`font-mono text-xs`,translate:`no`,children:`kapi`})})})]}),!b&&(0,N.jsx)(be,{rules:ee}),!b&&x,(0,N.jsx)(he,{project:h,onClose:()=>g(null),onConfirm:p}),(0,N.jsx)(`div`,{className:`empty:hidden`,children:(0,N.jsx)(me,{detection:pe})})]})}function Ee({location:e}){let t=de();return(0,N.jsx)(u,{content:(0,N.jsxs)(`span`,{className:`block max-w-80`,children:[i(`8TFHK8bhDFI`,`Where Kapi keeps the context of every project you work on`),(0,N.jsx)(`span`,{className:`mt-0.5 block font-mono break-all`,translate:`no`,children:t(e)})]}),children:(0,N.jsx)(`span`,{"data-slot":`workspace-location`,tabIndex:0,translate:`no`,className:`max-w-40 truncate rounded-md border border-border/70 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground`,children:y(e)})})}var M,N;function P(){return(P=e((()=>{ee(),M=t(),a(),c(),l(),te(),fe(),T(),m(),h(),g(),_(),A(),v(),b(),N=n(),j.__docgenInfo={description:`The app's first screen, in the overview shape (packages/ui/docs/page-patterns.md):
the context this machine account's projects write by, and what the
assistants working in them noticed. A header, a row of labelled counts, then
two lists of rows, each row leading to a project.

Every project kapi has run in is listed, whichever surface ran it. A
repository set up from a terminal appears without anyone opening it in the
app, and a folder opened here joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},standings:{required:!1,tsType:{name:`union`,raw:`ContextProjectStanding[] | null`,elements:[{name:`Array`,elements:[{name:`ContextProjectStanding`}],raw:`ContextProjectStanding[]`},{name:`null`}]},description:`Every project's context in numbers. Absent reads them off the workspace's rows.`},workspaceRules:{required:!1,tsType:{name:`Array`,elements:[{name:`WorkspaceRule`}],raw:`WorkspaceRule[]`},description:`Pre-loaded workspace rules for Storybook and tests, which reach no backend.`},startHereDismissed:{required:!0,tsType:{name:`boolean`},description:`The Start here steps were dismissed.`},onDismissStartHere:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},hasOpenProject:{required:!0,tsType:{name:`boolean`},description:`A project tab is open, so Start here can connect an assistant to it.`},onConnectAssistant:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Open the most recent project tab on its Assistant section.`},onOpenWhatsNew:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project on its What's new, by workspace key.`},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`},documentConflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded .kpz document conflicts for Storybook and tests.`}}}})))()}function F(e){return{location:Ce,read_only:!1,projects:e}}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,De;function $(){return($=e((()=>{P(),x(),we(),{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:`Components/AppHome`,component:j,tags:[`autodocs`],args:{workspaceRules:[],startHereDismissed:!1,hasOpenProject:!1,onDismissStartHere:I(),onConnectAssistant:I(),onOpenWhatsNew:I(),onOpenCheckout:I(),onOpenContext:I(),onForgetProject:I(),onNewProject:I(),onOpenProject:I(),onNavigate:I(),onCreateSampleProject:I()},parameters:{layout:`fullscreen`}},R={theme:`dark`},z={args:{workspace:F([])}},B={args:z.args,globals:R},V={args:{workspace:w(S),hasOpenProject:!0}},H={args:V.args,globals:R},U={args:{workspace:w(C),startHereDismissed:!0}},W={args:U.args,globals:R},G={args:{workspace:w(C),workspaceRules:Se,startHereDismissed:!0}},K={args:G.args,globals:R},q={args:{startHereDismissed:!0,workspace:w(S,!0)}},J={args:q.args,globals:R},Y={args:{startHereDismissed:!0,workspace:{location:`/fakehome/Library/Application Support/kapi/workspaces/acme-documentation-team`,read_only:!1,projects:[{...C[0],name:`Acme Help Center and Developer Documentation Portal (2027 edition)`,voice:`acme-developer-documentation-voice`,context_files:{files:[`kapi/terms.yaml`],command:`kapi store import`,message:"this project carries context files (kapi/terms.yaml) and its store holds no context yet. They are read by `kapi store import`, and until then nothing in them is in force"}},...C.slice(1)]}}},X={args:{workspace:w(S),startHereDismissed:!0,documentConflicts:[{...xe,doc:`/fakehome/handoff/loose.kpz!messages.json`}]}},Z={args:{startHereDismissed:!0,workspace:F([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},Q={args:{startHereDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},De=[`FirstRun`,`FirstRunDark`,`OneProjectWorking`,`OneProjectWorkingDark`,`SeveralProjects`,`SeveralProjectsDark`,`WithWorkspaceRules`,`WithWorkspaceRulesDark`,`ReadOnlyWorkspace`,`ReadOnlyWorkspaceDark`,`LongContent`,`WithDocumentConflict`,`CheckoutsAndLosses`,`WorkspaceUnreadable`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([])
  }
}`,...z.parameters?.docs?.source},description:{story:`The first run: nothing has registered, nothing is recorded, and Start here
carries the screen. The counts wait until there is a project to count.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: FirstRun.args,
  globals: dark
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(ONE_PROJECT_ROWS),
    hasOpenProject: true
  }
}`,...V.parameters?.docs?.source},description:{story:`One project with four new items while claude-code is working in it: the row
carries claude-code's mark and a working chip, and Start here comes last.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: OneProjectWorking.args,
  globals: dark
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(SEVERAL_ROWS),
    startHereDismissed: true
  }
}`,...U.parameters?.docs?.source},description:{story:`Several projects, newest session first. KapiMart holds a disagreement, so
its row carries a "1 needs you" chip and reads Decide, and "needs you" is
the one count in the warning ink. Field Guide is quiet and has no row under
What's new.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: SeveralProjects.args,
  globals: dark
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(SEVERAL_ROWS),
    workspaceRules: WORKSPACE_RULES,
    startHereDismissed: true
  }
}`,...G.parameters?.docs?.source},description:{story:`Two rules hold in every project: one kept in a review, one merged.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: WithWorkspaceRules.args,
  globals: dark
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    startHereDismissed: true,
    workspace: workspaceOf(ONE_PROJECT_ROWS, true)
  }
}`,...q.parameters?.docs?.source},description:{story:`A workspace directory that refuses writes: readable, and nothing new joins.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: ReadOnlyWorkspace.args,
  globals: dark
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Long names: a project name, a voice profile and a workspace directory that
each run past their column truncate in place, with the whole value in the
tooltip.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspaceOf(ONE_PROJECT_ROWS),
    startHereDismissed: true,
    documentConflicts: [{
      ...documentConflict,
      doc: "/fakehome/handoff/loose.kpz!messages.json"
    }]
  }
}`,...X.parameters?.docs?.source},description:{story:`A .kpz outside every project was replaced on disk while it held an edit:
its other version waits on the home to be rebased or discarded.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Two worktrees of one repository are one project with two places to open it
from; a checkout that went away is shown as missing rather than dropped; and
a project only ever opened on another machine still opens, on its context.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    startHereDismissed: true,
    workspace: null,
    workspaceError: new Error("workspace: /fakehome/Dropbox/kapi is inside a synchronized folder")
  }
}`,...Q.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...Q.parameters?.docs?.description}}}})))()}$();export{Z as CheckoutsAndLosses,z as FirstRun,B as FirstRunDark,Y as LongContent,V as OneProjectWorking,H as OneProjectWorkingDark,q as ReadOnlyWorkspace,J as ReadOnlyWorkspaceDark,U as SeveralProjects,W as SeveralProjectsDark,X as WithDocumentConflict,G as WithWorkspaceRules,K as WithWorkspaceRulesDark,Q as WorkspaceUnreadable,De as __namedExportsOrder,L as default};