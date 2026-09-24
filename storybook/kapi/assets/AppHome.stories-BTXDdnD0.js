import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{A as i,I as a,L as o,T as s,d as c,h as l,k as u,m as d,u as f,x as p,y as m}from"./query-BwMXOu1_.js";import{i as h,n as g,r as _,t as v}from"./queryKeys-Ci0Sn5Jq.js";import{n as y,r as b,t as x}from"./runtime-DzTyTKAL.js";import{i as S,n as ee,r as te,t as ne}from"./ContextFeed-C3LZ_bLW.js";import{t as C,u as re}from"./src-HXVLSxeR.js";import{n as ie,t as ae}from"./folder-kanban-ChBsyeoq.js";import{n as oe,t as se}from"./folder-open-CAs5Qvck.js";import{n as ce,t as le}from"./sparkles-2nkOmh4u.js";import{n as ue,t as de}from"./workflow-C39RWy8K.js";import{n as fe,t as pe}from"./x-BicjnYFm.js";import{t as w}from"./tooltip-Ctp8wuPr.js";import{t as me}from"./error-notice-DzMJg1BT.js";import{t as T}from"./button-BAly9yaV.js";import{n as he,r as ge}from"./iframe-CIxGHnsq.js";import{r as _e,t as E}from"./useApi-DX9nPvNS.js";import{n as ve,t as ye}from"./useShortenHome-DJlCLxxC.js";import{n as be,t as xe}from"./ConnectAICard-CrwArG08.js";import{n as Se,t as Ce}from"./useInvalidateOnEvent-Ch7gx3dD.js";import{c as we,d as Te,l as Ee,n as De,s as D,u as Oe}from"./contextFeed-CFra2w0W.js";import{n as ke,t as Ae}from"./RemoveProjectDialog-C8oSlDUI.js";import{n as je,t as Me}from"./WorkspaceProjectRow-mw43dRDY.js";var O;function k(){return(k=e((()=>{p(),l(),f(),ge(),O=class extends d{#e;#t=void 0;#n;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),u(this.options,t)||this.#e.getMutationCache().notify({type:`observerOptionsUpdated`,mutation:this.#n,observer:this}),t?.mutationKey&&this.options.mutationKey&&m(t.mutationKey)!==m(this.options.mutationKey)?this.reset():this.#n?.state.status===`pending`&&this.#n.setOptions(this.options)}onSubscribe(){this.listeners.size===1&&this.#n&&(this.#n.addObserver(this),this.#i())}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#a()}mutate(e,t){return this.#r=t,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(e)}#i(){let e=this.#n?.state??he();this.#t={...e,isPending:e.status===`pending`,isSuccess:e.status===`success`,isError:e.status===`error`,isIdle:e.status===`idle`,mutate:this.mutate,reset:this.reset}}#a(e){c.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type===`success`){try{this.#r.onSuccess?.(e.data,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(e.data,null,t,n,r)}catch(e){Promise.reject(e)}}else if(e?.type===`error`){try{this.#r.onError?.(e.error,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(void 0,e.error,t,n,r)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}}})))()}function A(e,t){let n=o(t),[r]=j.useState(()=>new O(n,e));j.useEffect(()=>{r.setOptions(e)},[r,e]);let a=j.useSyncExternalStore(j.useCallback(e=>r.subscribe(c.batchCalls(e)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),l=j.useCallback((...e)=>{r.mutate(e[0],e[1]).catch(s)},[r]);if(a.error&&i(r.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}var j;function M(){return(M=e((()=>{a(),j=t(n(),1),k(),p(),f()})))()}function N({projectKey:e,tabID:t,title:n,feed:r,keyboard:i=!0}){let a=o(),[s,c]=(0,P.useState)(null),[l,u]=(0,P.useState)(null),d=t?g.projectContextFeed(t):g.contextFeed(e??``),f=h({queryKey:d,queryFn:()=>t?E.projectContextFeed(t,200):E.contextFeed(e??``,200),enabled:!r,placeholderData:e=>e});Se(`workspace:changed`,[d,g.contextAwaiting()]);let p=(0,P.useCallback)(()=>{a.invalidateQueries({queryKey:d}),a.invalidateQueries({queryKey:g.contextAwaiting()}),a.invalidateQueries({queryKey:g.workspaceProjects()})},[a,d]),m=A({mutationFn:({entry:e,edit:t})=>E.keepContextSuggestion({project:e.project_key,id:e.id,replacement:t?.replacement,advisory:t?.advisory}),onSettled:p}),_=A({mutationFn:e=>E.dropContextSuggestion({project:e.project_key,id:e.id}),onSettled:p}),v=A({mutationFn:e=>E.revertContextOperations(e),onSettled:p}),y=A({mutationFn:({entry:e,to:t})=>E.widenContextRule({project:e.project_key,id:e.id,widen_to:t}),onSettled:p}),b=r??f.data??null;return(0,F.jsxs)(`div`,{"data-slot":`context-feed-panel`,children:[n&&(0,F.jsx)(re,{title:n,actions:(0,F.jsx)(ne,{count:b?.awaiting_here??0})}),(0,F.jsx)(te,{feed:b,loading:f.isLoading,error:f.error,keyboard:i,showProject:!e&&!t,onKeep:async(e,t)=>{await m.mutateAsync({entry:e,edit:t})},onDrop:async e=>{await _.mutateAsync(e)},onRevert:e=>u({project:e.project_key,id:e.id}),onRevertSession:e=>u({project:e.project_key??``,session:e.session}),onWiden:(e,t)=>c({entry:e,to:t})}),(0,F.jsx)(we,{entry:s?.entry??null,to:s?.to??``,onClose:()=>c(null),onConfirm:async(e,t)=>{await y.mutateAsync({entry:e,to:t})}}),(0,F.jsx)(Oe,{request:l,onClose:()=>u(null),onConfirm:async e=>{await v.mutateAsync(e)}})]})}var P,F;function I(){return(I=e((()=>{P=n(),M(),_(),a(),C(),_e(),v(),Ce(),S(),Te(),Ee(),F=r(),N.__docgenInfo={description:``,methods:[],displayName:`ContextFeedPanel`,props:{projectKey:{required:!1,tsType:{name:`string`},description:`Narrow to one project by its workspace key.`},tabID:{required:!1,tsType:{name:`string`},description:`Narrow to the project a tab holds.`},title:{required:!1,tsType:{name:`string`},description:`The heading above the feed. Omitted renders the feed alone.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},keyboard:{required:!1,tsType:{name:`boolean`},description:`Take the keyboard. A panel that is not on screen does not.`,defaultValue:{value:`true`,computed:!1}}}}})))()}function L({workspace:e,workspaceError:t,awaiting:n,feed:r,samplesDismissed:i,onOpenCheckout:a,onOpenContext:o,onForgetProject:s,onNewProject:c,onOpenProject:l,onNavigate:u,onCreateSampleProject:d,onDismissSamples:f,aiDetection:p}){let m=ve(),[h,g]=(0,R.useState)(null),_=e?.projects??[],v=new Map((n??[]).map(e=>[e.project_key,e.count]));return(0,z.jsxs)(`div`,{className:`mx-auto max-w-3xl p-6`,children:[(0,z.jsxs)(`div`,{className:`mb-8 flex items-center gap-4`,children:[(0,z.jsx)(`img`,{src:`/neokapi-logo.png`,alt:x(`aoDGOlC4DL4`,`neokapi`),className:`h-12 w-12 drop-shadow-lg`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h1`,{className:`text-xl font-semibold`,children:x(`liu9W8bhBEu`,`Welcome to Kapi`)}),(0,z.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:x(`3b6DmR5oRh4`,`Your project's context, applied to real files, for people and agents.`)})]})]}),(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsx)(`h2`,{className:`mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:x(`jMn7LoyxUBB`,`Projects`)}),(0,z.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,z.jsxs)(T,{variant:`outline`,onClick:c,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,z.jsx)(ae,{size:22,className:`mb-2 text-primary`}),(0,z.jsx)(`div`,{className:`text-base font-semibold`,children:x(`fELpUeJyakp`,`New Project`)}),(0,z.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:x(`bWSmauXzODn`,`Create a Kapi project with content, flows, and languages`)})]}),(0,z.jsxs)(T,{variant:`outline`,onClick:l,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,z.jsx)(se,{size:22,className:`mb-2 text-primary`}),(0,z.jsx)(`div`,{className:`text-base font-semibold`,children:x(`8y3Tq9MGpEk`,`Open a Project`)}),(0,z.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:x(`lPWsyI4mFLZ`,`Open an existing kapi project folder from disk`)})]})]})]}),(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,z.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:x(`4P3QnTH2ev2`,`Your Projects`)}),e?.location&&(0,z.jsx)(w,{content:`Where Kapi keeps the context of every project you work on`,children:(0,z.jsx)(`span`,{className:`truncate font-mono text-[11px] text-muted-foreground/70`,children:m(e.location)})})]}),t?(0,z.jsx)(me,{error:t,title:x(`2X9JLQqx6og`,`Your workspace could not be read`)}):_.length>0?(0,z.jsx)(`div`,{className:`space-y-2`,children:_.map(e=>(0,z.jsx)(Me,{project:e,awaiting:v.get(e.key)??0,onOpenCheckout:a,onOpenContext:o,onRemove:g},e.key))}):e&&(0,z.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:y(`hz7MLfLziw0`,`Nothing here yet. Projects appear as soon as Kapi runs in them, whether you open one here or run {=m0}kapi{/=m0} in a folder.`,{"=m0":(0,z.jsx)(`code`,{className:`font-mono text-xs`,children:`kapi`})},void 0,{"=m0":`no`})}),e?.read_only&&(0,z.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:x(`2yAg0ACDBzE`,`This workspace is open for reading only, so nothing new registers here.`)})]}),(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,z.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:x(`8nHYk4pSs6l`,`Recorded`)}),(0,z.jsx)(ee,{})]}),(0,z.jsx)(N,{feed:r})]}),(0,z.jsx)(Ae,{project:h,onClose:()=>g(null),onConfirm:s}),(0,z.jsx)(xe,{detection:p}),!i&&(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground`,children:[(0,z.jsx)(le,{size:14}),(0,z.jsx)(`span`,{className:`flex-1`,children:x(`52dSfjFIskp`,`New to Kapi? Try a sample project`)}),(0,z.jsx)(w,{content:`Dismiss`,children:(0,z.jsx)(T,{variant:`ghost`,size:`icon-xs`,onClick:f,className:`text-muted-foreground/60`,"aria-label":x(`hojtwumwZb5`,`Dismiss`),children:(0,z.jsx)(pe,{size:14})})})]}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:(0,z.jsxs)(T,{variant:`outline`,"data-testid":`sample-kapimart`,onClick:()=>d(`kapimart`),className:`h-auto whitespace-normal rounded-lg border-primary/20 bg-primary/5 p-4 text-left flex-col items-start hover:border-primary/40 hover:bg-primary/10`,children:[(0,z.jsx)(`div`,{className:`text-sm font-medium`,children:x(`fJS5bNsdKcX`,`KapiMart`)}),(0,z.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground font-normal`,children:x(`kEm9k8WDmMA`,`A realistic multilingual project with docs, store UI, Office documents, and templates: 4 content collections, 5 target languages, 1000+ memory entries. No plugins needed.`)})]})})]}),(0,z.jsxs)(`section`,{children:[(0,z.jsx)(`h2`,{className:`mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70`,children:x(`kLsUHWUoMFl`,`Quick tools`)}),(0,z.jsx)(`p`,{className:`mb-3 text-xs text-muted-foreground/70`,children:x(`26c3ANn8DhA`,`One-off actions that don't need a project. Results aren't saved to a project.`)}),(0,z.jsx)(`div`,{className:`grid grid-cols-1 gap-2 sm:grid-cols-2`,children:(0,z.jsxs)(T,{variant:`ghost`,onClick:()=>u(`flows`),className:`h-auto whitespace-normal rounded-lg border border-border/60 p-3 text-left flex-row items-center gap-3 hover:bg-accent/30`,children:[(0,z.jsx)(de,{size:16,className:`shrink-0 text-muted-foreground`}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`text-sm font-medium`,children:x(`6HAjuBsNRkF`,`Design a Flow`)}),(0,z.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:x(`eSGjHMxhOBT`,`Build tool pipelines`)})]})]})})]})]})}var R,z;function B(){return(B=e((()=>{b(),R=n(),ie(),oe(),ce(),ue(),fe(),C(),ye(),be(),S(),I(),ke(),je(),z=r(),L.__docgenInfo={description:`The app's first screen: this machine account's workspace.

Every project kapi has run in is here, whichever surface ran it. A repository
set up from a terminal appears without anyone opening it in the app, and a
project opened here with "Open a Project" joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},awaiting:{required:!1,tsType:{name:`union`,raw:`ContextAwaiting[] | null`,elements:[{name:`Array`,elements:[{name:`ContextAwaiting`}],raw:`ContextAwaiting[]`},{name:`null`}]},description:`Candidates awaiting a decision, per project.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},samplesDismissed:{required:!0,tsType:{name:`boolean`},description:``},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},onDismissSamples:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`}}}})))()}function V(e){return{location:U,read_only:!1,projects:e}}var H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{B(),D(),{fn:H}=__STORYBOOK_MODULE_TEST__,U=`/fakehome/.local/share/kapi/workspaces/default`,W={title:`Components/AppHome`,component:L,tags:[`autodocs`],args:{samplesDismissed:!1,onOpenCheckout:H(),onOpenContext:H(),onForgetProject:H(),onNewProject:H(),onOpenProject:H(),onNavigate:H(),onCreateSampleProject:H(),onDismissSamples:H()},parameters:{layout:`fullscreen`}},G={args:{workspace:V([{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]},{key:`prj_website`,name:`Website`,last_active:`2026-09-18T09:15:00Z`,checkouts:[{path:`/fakehome/projects/website`,recipe:`/fakehome/projects/website/kapi.yaml`,missing:!1}]}])}},K={args:{workspace:V([])}},q={args:{workspace:V([]),samplesDismissed:!0}},J={args:{samplesDismissed:!0,workspace:V([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},Y={args:{samplesDismissed:!0,workspace:{location:U,read_only:!0,projects:[{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]}]}}},X={args:{samplesDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},Z={args:{samplesDismissed:!0,awaiting:[{project_key:`prj_kapimart`,project_name:`KapiMart`,count:1}],feed:De,workspace:V([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T09:00:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}])}},Q=[`WithProjects`,`Empty`,`SamplesDismissed`,`CheckoutsAndLosses`,`ReadOnlyWorkspace`,`WorkspaceUnreadable`,`WithRecordedWork`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`The ordinary case: a few projects, each with one checkout here.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([])
  }
}`,...K.parameters?.docs?.source},description:{story:`Nothing has registered yet, so the sample cards carry the screen.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([]),
    samplesDismissed: true
  }
}`,...q.parameters?.docs?.source},description:{story:`Sample cards hidden after the user dismisses them.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Two worktrees of one repository are one project with two places to open it
from; a checkout that went away is shown as missing rather than dropped; and
a project only ever opened on another machine still opens, on its context.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`A workspace directory that refuses writes: readable, and nothing new joins.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    workspace: null,
    workspaceError: new Error("workspace: /fakehome/Dropbox/kapi is inside a synchronized folder")
  }
}`,...X.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    awaiting: [{
      project_key: "prj_kapimart",
      project_name: "KapiMart",
      count: 1
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
}`,...Z.parameters?.docs?.source},description:{story:`An agent has been working in KapiMart while the app was open: its proposal
is on the feed with the evidence behind it, and the count beside the project
says how many decisions are waiting.`,...Z.parameters?.docs?.description}}}})))()}$();export{J as CheckoutsAndLosses,K as Empty,Y as ReadOnlyWorkspace,q as SamplesDismissed,G as WithProjects,Z as WithRecordedWork,X as WorkspaceUnreadable,Q as __namedExportsOrder,W as default};