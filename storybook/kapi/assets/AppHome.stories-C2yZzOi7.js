import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,r as i,t as a}from"./runtime-BFRAZW6z.js";import{t as o}from"./src-BDA8Bzte.js";import{n as s,t as ee}from"./folder-open-CAv1tg1d.js";import{n as te,t as c}from"./KeptConflicts-DevRkr1D.js";import{n as l,t as ne}from"./lock-W380Ghlq.js";import{n as u,t as re}from"./plus-yUX2AEO_.js";import{t as d}from"./tooltip-C9zZMJP4.js";import{t as ie}from"./error-notice-DAlesHey.js";import{t as ae}from"./badge-BYFCt6ye.js";import{t as f}from"./button-DOU25u8i.js";import{t as oe}from"./PageHeader-DjNWOT2w.js";import{t as se}from"./page-container-BUmdk4dd.js";import{t as ce}from"./SectionHeading-XcKk1tki.js";import{r as p,t as m}from"./useApi-fQjP3HjR.js";import{n as h,t as g}from"./queryKeys-vfqkJtG1.js";import{n as le,t as ue}from"./useShortenHome-CMB0tATw.js";import{t as de}from"./useInvalidateOnEvent-pqYZy98U.js";import{n as fe,t as pe}from"./ConnectAICard-DBBtVmXt.js";import{n as me,t as he}from"./RemoveProjectDialog-CgSDSpLn.js";import{n as _,t as ge}from"./StartHere-CXlqT3Rr.js";import{n as _e,r as v,t as ve}from"./WhatsNew-waThsW-z.js";import{n as y,r as b,t as ye}from"./WorkspaceProjectRow-DfbzDfcK.js";import{n as x,t as be}from"./WorkspaceRules-VAqEbOKo.js";import{i as S,t as xe}from"./keptConflicts-96AeIPCc.js";import{a as C,c as w,f as T,l as Se,r as Ce,u as we}from"./standings-BhBjmO7h.js";function Te(e){if(!e)return null;let t=[];for(let n of e.projects)n.context&&t.push({...n.context,project_name:n.context.project_name||n.name});return t}function E(){return(E=e((()=>{t(),p(),de()})))()}function D({conflicts:e,client:t,rebase:n,discard:r}){return(0,O.jsx)(c,{tabID:``,conflicts:e,source:A,client:t??k,rebase:n??((e,t)=>m.rebaseWorkspaceDocument(e,t)),discard:r??(async(e,t)=>{await m.discardWorkspaceDocument(e,t)}),release:async()=>{}})}var O,k,A;function j(){return(j=e((()=>{p(),g(),te(),O=n(),k={read:async()=>null,apply:async e=>{let t=await m.applyWorkspaceDocument(JSON.stringify(e));return t?JSON.parse(t):null},describe:async()=>null,history:async()=>null},A={key:h.workspaceDocumentConflicts(),load:()=>m.getWorkspaceDocumentConflicts()},D.__docgenInfo={description:``,methods:[],displayName:`WorkspaceConflicts`,props:{conflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded for Storybook and tests; read from the workspace otherwise.`},client:{required:!1,tsType:{name:`ChangeClient`},description:`The change service; the workspace home's when absent.`},rebase:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<DocumentRebase | null>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`union`,raw:`DocumentRebase | null`,elements:[{name:`DocumentRebase`},{name:`null`}]}],raw:`Promise<DocumentRebase | null>`}}},description:``},discard:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:``}}}})))()}function M({workspace:e,workspaceError:t,standings:n,workspaceRules:i,startHereDismissed:o,onDismissStartHere:s,hasOpenProject:te,onConnectAssistant:c,onOpenWhatsNew:l,onOpenCheckout:u,onOpenContext:p,onForgetProject:m,onNewProject:h,onOpenProject:g,onNavigate:le,onCreateSampleProject:ue,aiDetection:de,documentConflicts:fe}){let[me,_]=(0,N.useState)(null),v=e?.projects??[],y=(0,N.useMemo)(()=>Te(e),[e]),b=n??y,x=!t&&!!e&&v.length===0,S=!o&&(0,P.jsx)(ge,{onDismiss:s,onCreateSampleProject:ue,onConnectAssistant:c,hasOpenProject:te});return(0,P.jsxs)(se,{width:`wide`,"data-slot":`app-home`,className:`space-y-8`,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(oe,{className:`mb-4`,title:a(`17fgryidkD4`,`Your context`),actions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f,{variant:`link`,size:`sm`,"data-slot":`home-history`,className:`h-auto px-0`,onClick:()=>le(`history`),children:a(`5oJcEqiwmRD`,`History`)}),e?.location&&(0,P.jsx)(Ee,{location:e.location}),e?.read_only&&(0,P.jsx)(d,{content:a(`2o437K1XjiL`,`This workspace is open for reading only, so nothing new registers here.`),children:(0,P.jsx)(ae,{variant:`outline`,"data-slot":`workspace-read-only`,tabIndex:0,className:`text-[11px] font-normal text-muted-foreground`,children:r(`8Q1pkNtx4jh`,`{=m0} Read only`,{"=m0":(0,P.jsx)(ne,{"aria-hidden":!0})})})})]})}),!x&&(0,P.jsx)(_e,{standings:b,projects:v.length})]}),(0,P.jsx)(`div`,{className:`empty:hidden`,children:(0,P.jsx)(D,{conflicts:fe})}),x&&S,!x&&(0,P.jsx)(ve,{standings:b,onOpen:l}),(0,P.jsxs)(`div`,{className:`flex flex-col gap-8 xl:flex-row xl:items-start [&>*]:min-w-0 [&>*]:flex-1`,children:[(0,P.jsxs)(`section`,{"data-slot":`home-projects`,"aria-labelledby":`home-projects-heading`,children:[(0,P.jsxs)(`div`,{className:`mb-1 flex items-center justify-between gap-3`,children:[(0,P.jsx)(`div`,{id:`home-projects-heading`,children:(0,P.jsx)(ce,{children:a(`cgKY9yeEJBs`,`Projects`)})}),(0,P.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,P.jsx)(f,{variant:`ghost`,size:`sm`,onClick:h,children:r(`loXS0MZXbam`,`{=m0} New project`,{"=m0":(0,P.jsx)(re,{size:14})})}),(0,P.jsx)(f,{variant:`ghost`,size:`sm`,onClick:g,children:r(`jyhKqUY4OMM`,`{=m0} Open a folder`,{"=m0":(0,P.jsx)(ee,{size:14})})})]})]}),t?(0,P.jsx)(ie,{error:t,title:a(`2X9JLQqx6og`,`Your workspace could not be read`)}):v.length>0?(0,P.jsx)(`div`,{className:`divide-y divide-border/50`,children:v.map(e=>(0,P.jsx)(ye,{project:e,onOpenCheckout:u,onOpenContext:p,onRemove:_},e.key))}):e&&(0,P.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:r(`bc9hbxTdCoU`,`Nothing here yet. Projects appear as soon as kapi runs in them, whether you open one here or run {=m0} in a folder.`,{"=m0":(0,P.jsx)(`code`,{className:`font-mono text-xs`,translate:`no`,children:`kapi`})})})]}),!x&&(0,P.jsx)(be,{rules:i})]}),!x&&S,(0,P.jsx)(he,{project:me,onClose:()=>_(null),onConfirm:m}),(0,P.jsx)(`div`,{className:`empty:hidden`,children:(0,P.jsx)(pe,{detection:de})})]})}function Ee({location:e}){let t=le();return(0,P.jsx)(d,{content:(0,P.jsxs)(`span`,{className:`block max-w-80`,children:[a(`8TFHK8bhDFI`,`Where Kapi keeps the context of every project you work on`),(0,P.jsx)(`span`,{className:`mt-0.5 block font-mono break-all`,translate:`no`,children:t(e)})]}),children:(0,P.jsx)(`span`,{"data-slot":`workspace-location`,tabIndex:0,translate:`no`,className:`max-w-40 truncate rounded-md border border-border/70 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground`,children:b(e)})})}var N,P;function F(){return(F=e((()=>{i(),N=t(),s(),l(),u(),o(),ue(),E(),fe(),me(),_(),v(),j(),y(),x(),P=n(),M.__docgenInfo={description:`The app's first screen, in the overview shape (packages/ui/docs/page-patterns.md):
the context this machine account's projects write by, and what the
assistants working in them suggested. A header, a row of labelled counts, then
two lists of rows, each row leading to a project.

Every project kapi has run in is listed, whichever surface ran it. A
repository set up from a terminal appears without anyone opening it in the
app, and a folder opened here joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},standings:{required:!1,tsType:{name:`union`,raw:`ContextProjectStanding[] | null`,elements:[{name:`Array`,elements:[{name:`ContextProjectStanding`}],raw:`ContextProjectStanding[]`},{name:`null`}]},description:`Every project's context in numbers. Absent reads them off the workspace's rows.`},workspaceRules:{required:!1,tsType:{name:`Array`,elements:[{name:`WorkspaceRule`}],raw:`WorkspaceRule[]`},description:`Pre-loaded workspace rules for Storybook and tests, which reach no backend.`},startHereDismissed:{required:!0,tsType:{name:`boolean`},description:`The Start here steps were dismissed.`},onDismissStartHere:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},hasOpenProject:{required:!0,tsType:{name:`boolean`},description:`A project tab is open, so Start here can connect an assistant to it.`},onConnectAssistant:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Open the most recent project tab on its Assistant section.`},onOpenWhatsNew:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project on its What's new, by workspace key.`},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`},documentConflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded .kpz document conflicts for Storybook and tests.`}}}})))()}function I(e){return{location:Ce,read_only:!1,projects:e}}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,De;function Oe(){return(Oe=e((()=>{F(),S(),we(),{fn:L}=__STORYBOOK_MODULE_TEST__,R={title:`Components/AppHome`,component:M,tags:[`autodocs`],args:{workspaceRules:[],startHereDismissed:!1,hasOpenProject:!1,onDismissStartHere:L(),onConnectAssistant:L(),onOpenWhatsNew:L(),onOpenCheckout:L(),onOpenContext:L(),onForgetProject:L(),onNewProject:L(),onOpenProject:L(),onNavigate:L(),onCreateSampleProject:L()},parameters:{layout:`fullscreen`}},z={theme:`dark`},B={args:{workspace:I([])}},V={args:B.args,globals:z},H={args:{workspace:T(C),hasOpenProject:!0}},U={args:H.args,globals:z},W={args:{workspace:T(w),startHereDismissed:!0}},G={args:W.args,globals:z},K={args:{workspace:T(w),workspaceRules:Se,startHereDismissed:!0}},q={args:K.args,globals:z},J={args:{startHereDismissed:!0,workspace:T(C,!0)}},Y={args:J.args,globals:z},X={args:{startHereDismissed:!0,workspace:{location:`/fakehome/Library/Application Support/kapi/workspaces/acme-documentation-team`,read_only:!1,projects:[{...w[0],name:`Acme Help Center and Developer Documentation Portal (2027 edition)`,voice:`acme-developer-documentation-voice`,context_files:{files:[`kapi/terms.yaml`],command:`kapi store import`,message:"this project carries context files (kapi/terms.yaml) and its store holds no context yet. They are read by `kapi store import`, and until then nothing in them is in force"}},...w.slice(1)]}}},Z={args:{workspace:T(C),startHereDismissed:!0,documentConflicts:[{...xe,doc:`/fakehome/handoff/loose.kpz!messages.json`}]}},Q={args:{startHereDismissed:!0,workspace:I([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},$={args:{startHereDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},De=[`FirstRun`,`FirstRunDark`,`OneProjectWorking`,`OneProjectWorkingDark`,`SeveralProjects`,`SeveralProjectsDark`,`WithWorkspaceRules`,`WithWorkspaceRulesDark`,`ReadOnlyWorkspace`,`ReadOnlyWorkspaceDark`,`LongContent`,`WithDocumentConflict`,`CheckoutsAndLosses`,`WorkspaceUnreadable`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...$.parameters?.docs?.description}}}})))()}Oe();export{Q as CheckoutsAndLosses,B as FirstRun,V as FirstRunDark,X as LongContent,H as OneProjectWorking,U as OneProjectWorkingDark,J as ReadOnlyWorkspace,Y as ReadOnlyWorkspaceDark,W as SeveralProjects,G as SeveralProjectsDark,Z as WithDocumentConflict,K as WithWorkspaceRules,q as WithWorkspaceRulesDark,$ as WorkspaceUnreadable,De as __namedExportsOrder,R as default};