import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{A as i,I as a,L as o,T as s,d as c,h as l,k as u,m as d,u as f,x as p,y as m}from"./query-BwMXOu1_.js";import{i as ee,n as h,r as g,t as _}from"./queryKeys-BcCGW8uf.js";import{n as v,r as te,t as y}from"./runtime-DzTyTKAL.js";import{c as ne,d as re,f as ie,l as ae,m as b,n as oe,p as se,s as ce,u as le}from"./contextFeed-BLPLE-RQ.js";import{t as ue,u as de}from"./src-CC0znWP4.js";import{n as fe,t as pe}from"./folder-kanban-ChBsyeoq.js";import{n as me,t as he}from"./folder-open-CAs5Qvck.js";import{n as ge,t as _e}from"./KeptConflicts-CQtC65DU.js";import{n as ve,t as ye}from"./sparkles-2nkOmh4u.js";import{n as be,t as xe}from"./workflow-C39RWy8K.js";import{n as Se,t as Ce}from"./x-BicjnYFm.js";import{t as x}from"./tooltip-Ctp8wuPr.js";import{t as we}from"./error-notice-DzMJg1BT.js";import{t as S}from"./button-BAly9yaV.js";import{n as Te,r as Ee}from"./iframe-DZ0dMDb9.js";import{r as C,t as w}from"./useApi-DjXGch7H.js";import{n as De,t as Oe}from"./useShortenHome-8-YaMZ80.js";import{n as ke,t as Ae}from"./ConnectAICard-CaU2LpEf.js";import{n as je,t as Me}from"./useInvalidateOnEvent-Df7q7ms_.js";import{n as Ne,t as Pe}from"./RemoveProjectDialog-DlygiJNf.js";import{n as Fe,t as Ie}from"./WorkspaceProjectRow-jYl3OQP3.js";import{i as Le,t as Re}from"./keptConflicts-CXTVvhwx.js";var T;function E(){return(E=e((()=>{p(),l(),f(),Ee(),T=class extends d{#e;#t=void 0;#n;#r;constructor(e,t){super(),this.#e=e,this.setOptions(t),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){let t=this.options;this.options=this.#e.defaultMutationOptions(e),u(this.options,t)||this.#e.getMutationCache().notify({type:`observerOptionsUpdated`,mutation:this.#n,observer:this}),t?.mutationKey&&this.options.mutationKey&&m(t.mutationKey)!==m(this.options.mutationKey)?this.reset():this.#n?.state.status===`pending`&&this.#n.setOptions(this.options)}onSubscribe(){this.listeners.size===1&&this.#n&&(this.#n.addObserver(this),this.#i())}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(e){this.#i(),this.#a(e)}getCurrentResult(){return this.#t}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#a()}mutate(e,t){return this.#r=t,this.#n?.removeObserver(this),this.#n=this.#e.getMutationCache().build(this.#e,this.options),this.#n.addObserver(this),this.#n.execute(e)}#i(){let e=this.#n?.state??Te();this.#t={...e,isPending:e.status===`pending`,isSuccess:e.status===`success`,isError:e.status===`error`,isIdle:e.status===`idle`,mutate:this.mutate,reset:this.reset}}#a(e){c.batch(()=>{if(this.#r&&this.hasListeners()){let t=this.#t.variables,n=this.#t.context,r={client:this.#e,meta:this.options.meta,mutationKey:this.options.mutationKey};if(e?.type===`success`){try{this.#r.onSuccess?.(e.data,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(e.data,null,t,n,r)}catch(e){Promise.reject(e)}}else if(e?.type===`error`){try{this.#r.onError?.(e.error,t,n,r)}catch(e){Promise.reject(e)}try{this.#r.onSettled?.(void 0,e.error,t,n,r)}catch(e){Promise.reject(e)}}}this.listeners.forEach(e=>{e(this.#t)})})}}})))()}function D(e,t){let n=o(t),[r]=O.useState(()=>new T(n,e));O.useEffect(()=>{r.setOptions(e)},[r,e]);let a=O.useSyncExternalStore(O.useCallback(e=>r.subscribe(c.batchCalls(e)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),l=O.useCallback((...e)=>{r.mutate(e[0],e[1]).catch(s)},[r]);if(a.error&&i(r.options.throwOnError,[a.error]))throw a.error;return{...a,mutate:l,mutateAsync:a.mutate}}var O;function k(){return(k=e((()=>{a(),O=t(n(),1),E(),p(),f()})))()}function A({projectKey:e,title:t,feed:n,keyboard:r=!0}){let i=o(),[a,s]=(0,j.useState)(null),[c,l]=(0,j.useState)(null),u=h.contextFeed(e??``),d=ee({queryKey:u,queryFn:()=>w.contextFeed(e??``,200),enabled:!n,placeholderData:e=>e});je(`workspace:changed`,[u,h.contextNews()]);let f=(0,j.useCallback)(()=>{i.invalidateQueries({queryKey:u}),i.invalidateQueries({queryKey:h.contextNews()}),i.invalidateQueries({queryKey:h.workspaceProjects()})},[i,u]),p=D({mutationFn:({entry:e,edit:t})=>w.keepContextSuggestion({project:e.project_key,id:e.id,replacement:t?.replacement,advisory:t?.advisory}),onSettled:f}),m=D({mutationFn:e=>w.dropContextSuggestion({project:e.project_key,id:e.id}),onSettled:f}),g=D({mutationFn:e=>w.revertContextOperations(e),onSettled:f}),_=D({mutationFn:({entry:e,to:t})=>w.widenContextRule({project:e.project_key,id:e.id,widen_to:t}),onSettled:f}),v=n??d.data??null;return(0,M.jsxs)(`div`,{"data-slot":`context-feed-panel`,children:[t&&(0,M.jsx)(de,{title:t}),(0,M.jsx)(se,{feed:v,loading:d.isLoading,error:d.error,keyboard:r,showProject:!e,onKeep:async(e,t)=>{await p.mutateAsync({entry:e,edit:t})},onDrop:async e=>{await m.mutateAsync(e)},onRevert:e=>l({project:e.project_key,id:e.id}),onRevertSession:e=>l({project:e.project_key??``,session:e.session}),onWiden:(e,t)=>s({entry:e,to:t})}),(0,M.jsx)(ne,{entry:a?.entry??null,to:a?.to??``,onClose:()=>s(null),onConfirm:async(e,t)=>{await _.mutateAsync({entry:e,to:t})}}),(0,M.jsx)(le,{request:c,onClose:()=>l(null),onConfirm:async e=>{await g.mutateAsync(e)}})]})}var j,M;function N(){return(N=e((()=>{j=n(),k(),g(),a(),ue(),C(),_(),Me(),b(),re(),ae(),M=r(),A.__docgenInfo={description:``,methods:[],displayName:`ContextFeedPanel`,props:{projectKey:{required:!1,tsType:{name:`string`},description:`Narrow to one project by its workspace key.`},title:{required:!1,tsType:{name:`string`},description:`The heading above the feed. Omitted renders the feed alone.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},keyboard:{required:!1,tsType:{name:`boolean`},description:`Take the keyboard. A panel that is not on screen does not.`,defaultValue:{value:`true`,computed:!1}}}}})))()}function P({conflicts:e,client:t,rebase:n,discard:r}){return(0,F.jsx)(_e,{tabID:``,conflicts:e,source:L,client:t??I,rebase:n??((e,t)=>w.rebaseWorkspaceDocument(e,t)),discard:r??(async(e,t)=>{await w.discardWorkspaceDocument(e,t)}),release:async()=>{}})}var F,I,L;function R(){return(R=e((()=>{C(),_(),ge(),F=r(),I={read:async()=>null,apply:async e=>{let t=await w.applyWorkspaceDocument(JSON.stringify(e));return t?JSON.parse(t):null},describe:async()=>null,history:async()=>null},L={key:h.workspaceDocumentConflicts(),load:()=>w.getWorkspaceDocumentConflicts()},P.__docgenInfo={description:``,methods:[],displayName:`WorkspaceConflicts`,props:{conflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded for Storybook and tests; read from the workspace otherwise.`},client:{required:!1,tsType:{name:`ChangeClient`},description:`The change service; the workspace home's when absent.`},rebase:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<DocumentRebase | null>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`union`,raw:`DocumentRebase | null`,elements:[{name:`DocumentRebase`},{name:`null`}]}],raw:`Promise<DocumentRebase | null>`}}},description:``},discard:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(doc: string, edit: string) => Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`doc`},{type:{name:`string`},name:`edit`}],return:{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}}},description:``}}}})))()}function z({workspace:e,workspaceError:t,news:n,feed:r,samplesDismissed:i,onOpenCheckout:a,onOpenContext:o,onForgetProject:s,onNewProject:c,onOpenProject:l,onNavigate:u,onCreateSampleProject:d,onDismissSamples:f,aiDetection:p,documentConflicts:m}){let ee=De(),[h,g]=(0,B.useState)(null),_=e?.projects??[],te=new Map((n??[]).map(e=>[e.project,e]));return(0,V.jsxs)(`div`,{className:`mx-auto max-w-3xl p-6`,children:[(0,V.jsxs)(`div`,{className:`mb-8 flex items-center gap-4`,children:[(0,V.jsx)(`img`,{src:`/neokapi-logo.png`,alt:y(`aoDGOlC4DL4`,`neokapi`),className:`h-12 w-12 drop-shadow-lg`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`h1`,{className:`text-xl font-semibold`,children:y(`liu9W8bhBEu`,`Welcome to Kapi`)}),(0,V.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:y(`3b6DmR5oRh4`,`Your project's context, applied to real files, for people and agents.`)})]})]}),(0,V.jsx)(`div`,{className:`mb-8 empty:hidden`,children:(0,V.jsx)(P,{conflicts:m})}),(0,V.jsxs)(`section`,{className:`mb-8`,children:[(0,V.jsx)(`h2`,{className:`mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:y(`jMn7LoyxUBB`,`Projects`)}),(0,V.jsxs)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:[(0,V.jsxs)(S,{variant:`outline`,onClick:c,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,V.jsx)(pe,{size:22,className:`mb-2 text-primary`}),(0,V.jsx)(`div`,{className:`text-base font-semibold`,children:y(`fELpUeJyakp`,`New Project`)}),(0,V.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:y(`bWSmauXzODn`,`Create a Kapi project with content, flows, and languages`)})]}),(0,V.jsxs)(S,{variant:`outline`,onClick:l,className:`h-auto whitespace-normal rounded-lg border-primary/30 bg-primary/5 p-5 text-left flex-col items-start hover:border-primary/50 hover:bg-primary/10`,children:[(0,V.jsx)(he,{size:22,className:`mb-2 text-primary`}),(0,V.jsx)(`div`,{className:`text-base font-semibold`,children:y(`8y3Tq9MGpEk`,`Open a Project`)}),(0,V.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:y(`lPWsyI4mFLZ`,`Open an existing kapi project folder from disk`)})]})]})]}),(0,V.jsxs)(`section`,{className:`mb-8`,children:[(0,V.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,V.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:y(`4P3QnTH2ev2`,`Your Projects`)}),e?.location&&(0,V.jsx)(x,{content:`Where Kapi keeps the context of every project you work on`,children:(0,V.jsx)(`span`,{className:`truncate font-mono text-[11px] text-muted-foreground/70`,children:ee(e.location)})})]}),t?(0,V.jsx)(we,{error:t,title:y(`2X9JLQqx6og`,`Your workspace could not be read`)}):_.length>0?(0,V.jsx)(`div`,{className:`space-y-2`,children:_.map(e=>(0,V.jsx)(Ie,{project:e,news:te.get(e.key),onOpenCheckout:a,onOpenContext:o,onRemove:g},e.key))}):e&&(0,V.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:v(`hz7MLfLziw0`,`Nothing here yet. Projects appear as soon as Kapi runs in them, whether you open one here or run {=m0}kapi{/=m0} in a folder.`,{"=m0":(0,V.jsx)(`code`,{className:`font-mono text-xs`,children:`kapi`})},void 0,{"=m0":`no`})}),e?.read_only&&(0,V.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground`,children:y(`2yAg0ACDBzE`,`This workspace is open for reading only, so nothing new registers here.`)})]}),(0,V.jsxs)(`section`,{className:`mb-8`,children:[(0,V.jsxs)(`div`,{className:`mb-3 flex items-baseline justify-between gap-3`,children:[(0,V.jsx)(`h2`,{className:`text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:y(`8nHYk4pSs6l`,`Recorded`)}),(0,V.jsx)(ie,{})]}),(0,V.jsx)(A,{feed:r})]}),(0,V.jsx)(Pe,{project:h,onClose:()=>g(null),onConfirm:s}),(0,V.jsx)(Ae,{detection:p}),!i&&(0,V.jsxs)(`section`,{className:`mb-8`,children:[(0,V.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground`,children:[(0,V.jsx)(ye,{size:14}),(0,V.jsx)(`span`,{className:`flex-1`,children:y(`52dSfjFIskp`,`New to Kapi? Try a sample project`)}),(0,V.jsx)(x,{content:`Dismiss`,children:(0,V.jsx)(S,{variant:`ghost`,size:`icon-xs`,onClick:f,className:`text-muted-foreground/60`,"aria-label":y(`hojtwumwZb5`,`Dismiss`),children:(0,V.jsx)(Ce,{size:14})})})]}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 gap-3 sm:grid-cols-2`,children:(0,V.jsxs)(S,{variant:`outline`,"data-testid":`sample-kapimart`,onClick:()=>d(`kapimart`),className:`h-auto whitespace-normal rounded-lg border-primary/20 bg-primary/5 p-4 text-left flex-col items-start hover:border-primary/40 hover:bg-primary/10`,children:[(0,V.jsx)(`div`,{className:`text-sm font-medium`,children:y(`fJS5bNsdKcX`,`KapiMart`)}),(0,V.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground font-normal`,children:y(`kEm9k8WDmMA`,`A realistic multilingual project with docs, store UI, Office documents, and templates: 4 content collections, 5 target languages, 1000+ memory entries. No plugins needed.`)})]})})]}),(0,V.jsxs)(`section`,{children:[(0,V.jsx)(`h2`,{className:`mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70`,children:y(`kLsUHWUoMFl`,`Quick tools`)}),(0,V.jsx)(`p`,{className:`mb-3 text-xs text-muted-foreground/70`,children:y(`26c3ANn8DhA`,`One-off actions that don't need a project. Results aren't saved to a project.`)}),(0,V.jsx)(`div`,{className:`grid grid-cols-1 gap-2 sm:grid-cols-2`,children:(0,V.jsxs)(S,{variant:`ghost`,onClick:()=>u(`flows`),className:`h-auto whitespace-normal rounded-lg border border-border/60 p-3 text-left flex-row items-center gap-3 hover:bg-accent/30`,children:[(0,V.jsx)(xe,{size:16,className:`shrink-0 text-muted-foreground`}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`div`,{className:`text-sm font-medium`,children:y(`6HAjuBsNRkF`,`Design a Flow`)}),(0,V.jsx)(`div`,{className:`text-xs text-muted-foreground font-normal`,children:y(`eSGjHMxhOBT`,`Build tool pipelines`)})]})]})})]})]})}var B,V;function ze(){return(ze=e((()=>{te(),B=n(),fe(),me(),ve(),be(),Se(),ue(),Oe(),ke(),b(),N(),Ne(),R(),Fe(),V=r(),z.__docgenInfo={description:`The app's first screen: this machine account's workspace.

Every project kapi has run in is here, whichever surface ran it. A repository
set up from a terminal appears without anyone opening it in the app, and a
project opened here with "Open a Project" joins the same list.`,methods:[],displayName:`AppHome`,props:{workspace:{required:!0,tsType:{name:`union`,raw:`WorkspaceHome | null`,elements:[{name:`WorkspaceHome`},{name:`null`}]},description:`The workspace and the projects it holds, null while it is being read.`},workspaceError:{required:!1,tsType:{name:`unknown`},description:`Why the workspace could not be read, when it could not.`},news:{required:!1,tsType:{name:`union`,raw:`ContextNews[] | null`,elements:[{name:`Array`,elements:[{name:`ContextNews`}],raw:`ContextNews[]`},{name:`null`}]},description:`What each project's digest holds that the person has not seen.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},samplesDismissed:{required:!0,tsType:{name:`boolean`},description:``},onOpenCheckout:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(recipe: string) => void`,signature:{arguments:[{type:{name:`string`},name:`recipe`}],return:{name:`void`}}},description:`Open a project from one of its checkouts, by recipe path.`},onOpenContext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`void`}}},description:`Open a project with no checkout here, on its context alone.`},onForgetProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(key: string) => Promise<void> | void`,signature:{arguments:[{type:{name:`string`},name:`key`}],return:{name:`union`,raw:`Promise<void> | void`,elements:[{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`},{name:`void`}]}}},description:`Remove a project and the context the workspace holds for it.`},onNewProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onOpenProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onCreateSampleProject:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``},onDismissSamples:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},aiDetection:{required:!1,tsType:{name:`AIDetectionResult`},description:`Pre-loaded AI detection for Storybook/tests — forwarded to ConnectAICard.`},documentConflicts:{required:!1,tsType:{name:`Array`,elements:[{name:`KeptConflict`}],raw:`KeptConflict[]`},description:`Pre-loaded .kpz document conflicts for Storybook and tests.`}}}})))()}function H(e){return{location:W,read_only:!1,projects:e}}var U,W,Be,G,K,q,J,Y,X,Z,Q,Ve;function $(){return($=e((()=>{ze(),ce(),Le(),{fn:U}=__STORYBOOK_MODULE_TEST__,W=`/fakehome/.local/share/kapi/workspaces/default`,Be={title:`Components/AppHome`,component:z,tags:[`autodocs`],args:{samplesDismissed:!1,onOpenCheckout:U(),onOpenContext:U(),onForgetProject:U(),onNewProject:U(),onOpenProject:U(),onNavigate:U(),onCreateSampleProject:U(),onDismissSamples:U()},parameters:{layout:`fullscreen`}},G={args:{workspace:H([{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]},{key:`prj_website`,name:`Website`,last_active:`2026-09-18T09:15:00Z`,checkouts:[{path:`/fakehome/projects/website`,recipe:`/fakehome/projects/website/kapi.yaml`,missing:!1}]}])}},K={args:{...G.args,documentConflicts:[{...Re,doc:`/fakehome/handoff/loose.kpz!messages.json`}]}},q={args:{workspace:H([])}},J={args:{workspace:H([]),samplesDismissed:!0}},Y={args:{samplesDismissed:!0,workspace:H([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T08:05:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1},{path:`/fakehome/src/kapimart-release`,recipe:`/fakehome/src/kapimart-release/kapi.yaml`,missing:!1}]},{key:`prj_movedaway`,name:`Old Handbook`,last_active:`2026-08-02T11:00:00Z`,checkouts:[{path:`/fakehome/projects/handbook`,recipe:`/fakehome/projects/handbook/kapi.yaml`,missing:!0}]},{key:`prj_elsewhere`,name:`Field Guide`,last_active:`2026-09-10T16:45:00Z`,checkouts:[]}])}},X={args:{samplesDismissed:!0,workspace:{location:W,read_only:!0,projects:[{key:`prj_acmeapp`,name:`Acme App`,last_active:`2026-09-20T14:30:00Z`,checkouts:[{path:`/fakehome/projects/acme-app`,recipe:`/fakehome/projects/acme-app/kapi.yaml`,missing:!1}]}]}}},Z={args:{samplesDismissed:!0,workspace:null,workspaceError:Error(`workspace: /fakehome/Dropbox/kapi is inside a synchronized folder`)}},Q={args:{samplesDismissed:!0,news:[{project:`prj_kapimart`,project_name:`KapiMart`,new:1,conflicts:0,since:new Date(Date.now()-1728e5).toISOString()}],feed:oe,workspace:H([{key:`prj_kapimart`,name:`KapiMart`,last_active:`2026-09-21T09:00:00Z`,checkouts:[{path:`/fakehome/src/kapimart`,recipe:`/fakehome/src/kapimart/kapi.yaml`,missing:!1}]}])}},Ve=[`WithProjects`,`WithDocumentConflict`,`Empty`,`SamplesDismissed`,`CheckoutsAndLosses`,`ReadOnlyWorkspace`,`WorkspaceUnreadable`,`WithRecordedWork`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
    ...WithProjects.args,
    documentConflicts: [{
      ...documentConflict,
      doc: "/fakehome/handoff/loose.kpz!messages.json"
    }]
  }
}`,...K.parameters?.docs?.source},description:{story:`A .kpz outside every project was replaced on disk while it held an edit:
its other version waits on the home to be rebased or discarded.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([])
  }
}`,...q.parameters?.docs?.source},description:{story:`Nothing has registered yet, so the sample cards carry the screen.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    workspace: workspace([]),
    samplesDismissed: true
  }
}`,...J.parameters?.docs?.source},description:{story:`Sample cards hidden after the user dismisses them.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Two worktrees of one repository are one project with two places to open it
from; a checkout that went away is shown as missing rather than dropped; and
a project only ever opened on another machine still opens, on its context.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`A workspace directory that refuses writes: readable, and nothing new joins.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    samplesDismissed: true,
    workspace: null,
    workspaceError: new Error("workspace: /fakehome/Dropbox/kapi is inside a synchronized folder")
  }
}`,...Z.parameters?.docs?.source},description:{story:`The workspace could not be opened at all.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`An agent has been working in KapiMart while the app was open: its proposal
is on the feed with the evidence behind it, and the line beside the project
says what is new since the person last looked there.`,...Q.parameters?.docs?.description}}}})))()}$();export{Y as CheckoutsAndLosses,q as Empty,X as ReadOnlyWorkspace,J as SamplesDismissed,K as WithDocumentConflict,G as WithProjects,Q as WithRecordedWork,Z as WorkspaceUnreadable,Ve as __namedExportsOrder,Be as default};