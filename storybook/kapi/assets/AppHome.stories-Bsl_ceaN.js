import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{I as r,L as i}from"./query-BwMXOu1_.js";import{i as a,n as o,r as s,t as c}from"./queryKeys-B7dNkdgV.js";import{n as l,t as u}from"./useMutation-DhbOp7f_.js";import{n as d,r as f,t as p}from"./runtime-DzTyTKAL.js";import{i as m,n as h,t as g}from"./ContextFeed-HxG9GWm2.js";import{t as _,u as v}from"./src-jesE7NJu.js";import{n as y,t as b}from"./folder-kanban-ChBsyeoq.js";import{n as x,t as S}from"./folder-open-CAs5Qvck.js";import{n as C,t as w}from"./KeptConflicts-CtQMTqW9.js";import{n as ee,t as te}from"./sparkles-2nkOmh4u.js";import{n as ne,t as re}from"./workflow-C39RWy8K.js";import{n as ie,t as ae}from"./x-BicjnYFm.js";import{t as T}from"./tooltip-Ctp8wuPr.js";import{t as oe}from"./error-notice-DzMJg1BT.js";import{t as E}from"./button-BAly9yaV.js";import{r as D,t as O}from"./useApi-CJjx4sXz.js";import{n as se,t as ce}from"./useShortenHome-Blltek0x.js";import{n as le,t as ue}from"./ConnectAICard-CJ-L6bpT.js";import{n as de,t as fe}from"./useInvalidateOnEvent-BzwMu0rY.js";import{c as pe,l as me,n as he,s as ge}from"./contextFeed-CPny7HOQ.js";import{i as _e,n as ve,t as ye}from"./ContextWidenDialog-Brw1e7FT.js";import{n as be,t as xe}from"./RemoveProjectDialog-CJmMGHGX.js";import{n as Se,t as Ce}from"./WorkspaceProjectRow-IAJ_IbOW.js";import{i as we,t as Te}from"./keptConflicts-CXTVvhwx.js";function k({projectKey:e,title:t,feed:n,keyboard:r=!0}){let s=i(),[c,u]=(0,A.useState)(null),[d,f]=(0,A.useState)(null),p=o.contextFeed(e??``),m=a({queryKey:p,queryFn:()=>O.contextFeed(e??``,200),enabled:!n,placeholderData:e=>e});de(`workspace:changed`,[p,o.contextNews()]);let g=(0,A.useCallback)(()=>{s.invalidateQueries({queryKey:p}),s.invalidateQueries({queryKey:o.contextNews()}),s.invalidateQueries({queryKey:o.workspaceProjects()})},[s,p]),_=l({mutationFn:({entry:e,edit:t})=>O.keepContextSuggestion({project:e.project_key,id:e.id,replacement:t?.replacement,advisory:t?.advisory}),onSettled:g}),y=l({mutationFn:e=>O.dropContextSuggestion({project:e.project_key,id:e.id}),onSettled:g}),b=l({mutationFn:e=>O.resetContext(e),onSettled:g}),x=l({mutationFn:({rule:e,to:t})=>O.widenContextRule({project:e.project_key,id:e.id,widen_to:t}),onSettled:g}),S=n??m.data??null;return(0,j.jsxs)(`div`,{"data-slot":`context-feed-panel`,children:[t&&(0,j.jsx)(v,{title:t}),(0,j.jsx)(h,{feed:S,loading:m.isLoading,error:m.error,keyboard:r,showProject:!e,onKeep:async(e,t)=>{await _.mutateAsync({entry:e,edit:t})},onDrop:async e=>{await y.mutateAsync(e)},onResetSession:e=>f({project:e.project_key??``,before:e.session??``}),onWiden:(e,t)=>u({rule:_e(e),to:t})}),(0,j.jsx)(ye,{rule:c?.rule??null,to:c?.to??``,onClose:()=>u(null),onConfirm:async(e,t)=>{await x.mutateAsync({rule:e,to:t})}}),(0,j.jsx)(pe,{request:d,onClose:()=>f(null),onConfirm:async e=>{await b.mutateAsync(e)}})]})}var A,j;function M(){return(M=e((()=>{A=t(),u(),s(),r(),_(),D(),c(),fe(),m(),me(),ve(),j=n(),k.__docgenInfo={description:``,methods:[],displayName:`ContextFeedPanel`,props:{projectKey:{required:!1,tsType:{name:`string`},description:`Narrow to one project by its workspace key.`},title:{required:!1,tsType:{name:`string`},description:`The heading above the feed. Omitted renders the feed alone.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},keyboard:{required:!1,tsType:{name:`boolean`},description:`Take the keyboard. A panel that is not on screen does not.`,defaultValue:{value:`true`,computed:!1}}}}})))()}function N({conflicts:e,client:t,rebase:n,discard:r}){return(0,P.jsx)(w,{tabID:``,conflicts:e,source:I,client:t??F,rebase:n??((e,t)=>O.rebaseWorkspaceDocument(e,t)),discard:r??(async(e,t)=>{await O.discardWorkspaceDocument(e,t)}),release:async()=>{}})}var P,F,I;function L(){return(L=e((()=>{D(),c(),C(),P=n(),F={read:async()=>null,apply:async e=>{let t=await O.applyWorkspaceDocument(JSON.stringify(e));return t?JSON.parse(t):null},describe:async()=>null,history:async()=>null},I={key:o.workspaceDocumentConflicts(),load:()=>O.getWorkspaceDocumentConflicts()},N.__docgenInfo={description:``,methods:[],displayName:`WorkspaceConflicts`,props:{conflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded for Storybook and tests; read from the workspace otherwise.`},client:{required:!1,tsType:{name:`ChangeClient`},description:`The change service; the workspace home's when absent.`},rebase:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<DocumentRebase | null>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`union`,raw:`DocumentRebase | null`,elements:[{name:`DocumentRebase`},{name:`null`}]}],raw:`Promise<DocumentRebase | null>`}}},description:``},discard:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:``}}}})))()}function R({workspace:e,workspaceError:t,news:n,feed:r,samplesDismissed:i,onOpenCheckout:a,onOpenContext:o,onForgetProject:s,onNewProject:c,onOpenProject:l,onNavigate:u,onCreateSampleProject:f,onDismissSamples:m,aiDetection:h,documentConflicts:_}){let v=se(),[y,x]=(0,z.useState)(null),C=e?.projects??[],w=new Map((n??[]).map(e=>[e.project,e]));return(0,B.jsxs)(`div`,{className:`mx-auto max-w-3xl p-6`,children:[(0,B.jsxs)(`div`,{className:`mb-8 flex items-center gap-4`,children:[(0,B.jsx)(`img`,{src:`/neokapi-logo.png`,alt:p(`aoDGOlC4DL4`,`neokapi`),className:`h-12 w-12 drop-shadow-lg`}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`h1`,{className:`text-xl font-semibold`,children:p(`liu9W8bhBEu`,`Welcome to Kapi`)}),(0,B.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:p(`3b6DmR5oRh4`,`Your project's context, applied to real files, for people and agents.`)})]})]}),(0,B.jsx)(`div`,{className:`mb-8 empty:hidden`,children:(0,B.jsx)(N,{conflicts:_})}),(0,B.jsxs)(`section`,{className:`mb-8`,children:[(0,B.jsx)(`h2`,{className:`mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:p(`jMn7LoyxUBB`,`Projects`)}),(0,B.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,B.jsxs)(E,{variant:`outline`,onClick:c,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,B.jsx)(b,{size:22,className:`mb-2 text-primary`}),(0,B.jsx)(`div`,{className:`text-base font-semibold`,children:p(`fELpUeJyakp`,`New Project`)}),(0,B.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:p(`bWSmauXzODn`,`Create a Kapi project with content, flows, and languages`)})]}),(0,B.jsxs)(E,{variant:`outline`,onClick:l,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,B.jsx)(S,{size:22,className:`mb-2 text-primary`}),(0,B.jsx)(`div`,{className:`text-base font-semibold`,children:p(`8y3Tq9MGpEk`,`Open a Project`)}),(0,B.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:p(`lPWsyI4mFLZ`,`Open an existing kapi project folder from disk`)})]})]})]}),(0,B.jsxs)(`section`,{className:`mb-8`,children:[(0,B.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,B.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:p(`4P3QnTH2ev2`,`Your Projects`)}),e?.location&&(0,B.jsx)(T,{content:`Where Kapi keeps the context of every project you work on`,children:(0,B.jsx)(`span`,{className:`truncate font-mono text-[11px] text-muted-foreground/70`,children:v(e.location)})})]}),t?(0,B.jsx)(oe,{error:t,title:p(`2X9JLQqx6og`,`Your workspace could not be read`)}):C.length>0?(0,B.jsx)(`div`,{className:`space-y-2`,children:C.map(e=>(0,B.jsx)(Ce,{project:e,news:w.get(e.key),onOpenCheckout:a,onOpenContext:o,onRemove:x},e.key))}):e&&(0,B.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:d(`hz7MLfLziw0`,`Nothing here yet. Projects appear as soon as Kapi runs in them, whether you open one here or run {=m0}kapi{/=m0} in a folder.`,{"=m0":(0,B.jsx)(`code`,{className:`font-mono text-xs`,children:`kapi`})},void 0,{"=m0":`no`})}),e?.read_only&&(0,B.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:p(`2yAg0ACDBzE`,`This workspace is open for reading only, so nothing new registers here.`)})]}),(0,B.jsxs)(`section`,{className:`mb-8`,children:[(0,B.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,B.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:p(`8nHYk4pSs6l`,`Recorded`)}),(0,B.jsx)(g,{})]}),(0,B.jsx)(k,{feed:r})]}),(0,B.jsx)(xe,{project:y,onClose:()=>x(null),onConfirm:s}),(0,B.jsx)(ue,{detection:h}),!i&&(0,B.jsxs)(`section`,{className:`mb-8`,children:[(0,B.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground`,children:[(0,B.jsx)(te,{size:14}),(0,B.jsx)(`span`,{className:`flex-1`,children:p(`52dSfjFIskp`,`New to Kapi? Try a sample project`)}),(0,B.jsx)(T,{content:`Dismiss`,children:(0,B.jsx)(E,{variant:`ghost`,size:`icon-xs`,onClick:m,className:`text-muted-foreground/60`,"aria-label":p(`hojtwumwZb5`,`Dismiss`),children:(0,B.jsx)(ae,{size:14})})})]}),(0,B.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:(0,B.jsxs)(E,{variant:`outline`,"data-testid":`sample-kapimart`,onClick:()=>f(`kapimart`),className:`h-auto whitespace-normal rounded-lg border-primary/20 bg-primary/5 p-4 text-left flex-col items-start hover:border-primary/40 hover:bg-primary/10`,children:[(0,B.jsx)(`div`,{className:`text-sm font-medium`,children:p(`fJS5bNsdKcX`,`KapiMart`)}),(0,B.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground font-normal`,children:p(`kEm9k8WDmMA`,`A realistic multilingual project with docs, store UI, Office documents, and templates: 4 content collections, 5 target languages, 1000+ memory entries. No plugins needed.`)})]})})]}),(0,B.jsxs)(`section`,{children:[(0,B.jsx)(`h2`,{className:`mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70`,children:p(`kLsUHWUoMFl`,`Quick tools`)}),(0,B.jsx)(`p`,{className:`mb-3 text-xs text-muted-foreground/70`,children:p(`26c3ANn8DhA`,`One-off actions that don't need a project. Results aren't saved to a project.`)}),(0,B.jsx)(`div`,{className:`grid grid-cols-1 gap-2 sm:grid-cols-2`,children:(0,B.jsxs)(E,{variant:`ghost`,onClick:()=>u(`flows`),className:`h-auto whitespace-normal rounded-lg border border-border/60 p-3 text-left flex-row items-center gap-3 hover:bg-accent/30`,children:[(0,B.jsx)(re,{size:16,className:`shrink-0 text-muted-foreground`}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`text-sm font-medium`,children:p(`6HAjuBsNRkF`,`Design a Flow`)}),(0,B.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:p(`eSGjHMxhOBT`,`Build tool pipelines`)})]})]})})]})]})}var z,B;function V(){return(V=e((()=>{f(),z=t(),y(),x(),ee(),ne(),ie(),_(),ce(),le(),m(),M(),be(),L(),Se(),B=n(),R.__docgenInfo={description:`The app's first screen: this machine account's workspace.

Every project kapi has run in is here, whichever surface ran it. A repository
set up from a terminal appears without anyone opening it in the app, and a
project opened here with "Open a Project" joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},news:{required:!1,tsType:{name:`union`,raw:`ContextNews[] | null`,elements:[{name:`Array`,elements:[{name:`ContextNews`}],raw:`ContextNews[]`},{name:`null`}]},description:`What each project's digest holds that the person has not seen.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},samplesDismissed:{required:!0,tsType:{name:`boolean`},description:``},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},onDismissSamples:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`},documentConflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded .kpz document conflicts for Storybook and tests.`}}}})))()}function H(e){return{location:W,read_only:!1,projects:e}}var U,W,G,K,q,J,Y,X,Z,Q,$,Ee;function De(){return(De=e((()=>{V(),ge(),we(),{fn:U}=__STORYBOOK_MODULE_TEST__,W=`/fakehome/.local/share/kapi/workspaces/default`,G={title:`Components/AppHome`,component:R,tags:[`autodocs`],args:{samplesDismissed:!1,onOpenCheckout:U(),onOpenContext:U(),onForgetProject:U(),onNewProject:U(),onOpenProject:U(),onNavigate:U(),onCreateSampleProject:U(),onDismissSamples:U()},parameters:{layout:`fullscreen`}},K={args:{workspace:H([{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]},{key:`prj_website`,name:`Website`,last_active:`2026-09-18T09:15:00Z`,checkouts:[{path:`/fakehome/projects/website`,recipe:`/fakehome/projects/website/kapi.yaml`,missing:!1}]}])}},q={args:{...K.args,documentConflicts:[{...Te,doc:`/fakehome/handoff/loose.kpz!messages.json`}]}},J={args:{workspace:H([])}},Y={args:{workspace:H([]),samplesDismissed:!0}},X={args:{samplesDismissed:!0,workspace:H([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},Z={args:{samplesDismissed:!0,workspace:{location:W,read_only:!0,projects:[{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]}]}}},Q={args:{samplesDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},$={args:{samplesDismissed:!0,news:[{project:`prj_kapimart`,project_name:`KapiMart`,new:1,conflicts:0,since:new Date(Date.now()-1728e5).toISOString()}],feed:he,workspace:H([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T09:00:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}])}},Ee=[`WithProjects`,`WithDocumentConflict`,`Empty`,`SamplesDismissed`,`CheckoutsAndLosses`,`ReadOnlyWorkspace`,`WorkspaceUnreadable`,`WithRecordedWork`],K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`The ordinary case: a few projects, each with one checkout here.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithProjects.args,
    documentConflicts: [{
      ...documentConflict,
      doc: "/fakehome/handoff/loose.kpz!messages.json"
    }]
  }
}`,...q.parameters?.docs?.source},description:{story:`A .kpz outside every project was replaced on disk while it held an edit:
its other version waits on the home to be rebased or discarded.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([])
  }
}`,...J.parameters?.docs?.source},description:{story:`Nothing has registered yet, so the sample cards carry the screen.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([]),
    samplesDismissed: true
  }
}`,...Y.parameters?.docs?.source},description:{story:`Sample cards hidden after the user dismisses them.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Two worktrees of one repository are one project with two places to open it
from; a checkout that went away is shown as missing rather than dropped; and
a project only ever opened on another machine still opens, on its context.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`A workspace directory that refuses writes: readable, and nothing new joins.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    workspace: null,
    workspaceError: new Error("workspace: /fakehome/Dropbox/kapi is inside a synchronized folder")
  }
}`,...Q.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    news: [{
      project: "prj_kapimart",
      project_name: "KapiMart",
      new: 1,
      conflicts: 0,
      since: new Date(Date.now() - 2 * 86_400_000).toISOString()
    }],
    feed: CONTEXT_FEED,
    workspace: workspace([{
      key: "prj_kapimart",
      name: "KapiMart",
      last_active: "2026-09-21T09:00:00Z",
      checkouts: [{
        path: "/fakehome/src/kapimart",
        recipe: "/fakehome/src/kapimart/kapi.yaml",
        missing: false
      }]
    }])
  }
}`,...$.parameters?.docs?.source},description:{story:`An agent has been working in KapiMart while the app was open: its proposal
is on the feed with the evidence behind it, and the line beside the project
says what is new since the person last looked there.`,...$.parameters?.docs?.description}}}})))()}De();export{X as CheckoutsAndLosses,J as Empty,Z as ReadOnlyWorkspace,Y as SamplesDismissed,q as WithDocumentConflict,K as WithProjects,$ as WithRecordedWork,Q as WorkspaceUnreadable,Ee as __namedExportsOrder,G as default};