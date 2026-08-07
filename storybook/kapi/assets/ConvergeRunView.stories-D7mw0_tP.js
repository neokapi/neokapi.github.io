import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{n,r,s as i,t as a}from"./runtime-D9E4JuzJ.js";import{Ji as o,Ki as s,Sn as c,ea as l,na as u,t as d}from"./lucide-react-DAXek0DD.js";import{t as f}from"./utils-C9m3KlUs.js";import{g as p,t as m}from"./src-DlmbrlZV.js";import{t as h}from"./badge-BJhUWkBi.js";import{o as g,r as _,s as v,t as y}from"./card-BgJKhC20.js";import{t as b}from"./tooltip-Dsl4Wmji.js";import{t as x}from"./LocalePill-CvQRxVNo.js";function S({model:e,running:t,canceled:n,connecting:r,run:s,result:l,onOpenReview:u}){let d=e.passes.length-1,f=e.logs??[];return(0,k.jsxs)(y,{"data-slot":`converge-run-view`,children:[s&&(0,k.jsxs)(g,{className:`flex-row items-center justify-between gap-2 px-4`,children:[(0,k.jsxs)(`div`,{className:`min-w-0`,children:[(0,k.jsx)(v,{className:`text-sm font-semibold`,children:O(s.trigger)}),(0,k.jsxs)(`p`,{className:`text-[11px] text-muted-foreground`,children:[a(`5T9MeDQzKx0`,`Run {id}`,{id:s.id.slice(0,8)}),s.created_at&&(0,k.jsx)(k.Fragment,{children:a(`eD6J5Gnl6oK`,`· ${i(`started {when}`,{when:new Date(s.created_at).toLocaleString()})}`,{t:i(`started {when}`,{when:new Date(s.created_at).toLocaleString()})})})]})]}),(0,k.jsx)(w,{model:e,running:t,connecting:r})]}),!s&&(0,k.jsx)(g,{className:`px-4`,children:(0,k.jsx)(v,{className:`text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`6eMCWcSU6Mv`,`Passes`)})}),(0,k.jsxs)(_,{className:`space-y-3 px-4`,children:[e.passes.length===0&&(0,k.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(t||r)&&(0,k.jsx)(c,{size:12,className:`animate-spin`}),r?a(`7mgBxnVF0Pb`,`Connecting to the run…`):t?a(`bIMnceivVwz`,`Deriving state and running the first pass…`):a(`1Ok28GSbQbM`,`Waiting for the first pass…`)]}),(0,k.jsx)(`ol`,{className:`space-y-3`,children:e.passes.map((n,r)=>(0,k.jsx)(ee,{pass:n,live:e.live!==!1,running:!!t&&r===d},n.pass||r))}),f.length>0&&(0,k.jsxs)(`details`,{className:`text-[11px]`,"data-slot":`converge-logs`,children:[(0,k.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground`,children:a(`6e7mdQywcmw`,`Log ({count})`,{count:f.length})}),(0,k.jsx)(`div`,{className:`mt-1 max-h-40 space-y-0.5 overflow-y-auto rounded-md bg-muted/50 p-2 font-mono`,children:f.map((e,t)=>(0,k.jsx)(`div`,{className:`break-all`,children:e},t))})]}),n&&(0,k.jsxs)(`p`,{className:`flex items-center gap-1.5 border-t border-border pt-2 text-xs text-muted-foreground`,"data-slot":`converge-canceled`,children:[(0,k.jsx)(o,{size:13}),a(`22xaKcjuB0L`,`Cancelled — the run stopped before reaching the gates. Nothing is lost: run Bring up to date again to continue.`)]}),l?(0,k.jsx)(E,{result:l,onOpenReview:u}):e.done&&(0,k.jsx)(T,{model:e})]})]})}function C(e){return e===`converged`?a(`gLVqZX7MCOc`,`Up to date`):e===`parked`?a(`1mVE7GTOPCP`,`Parked`):e??a(`gaudUBBhmum`,`done`)}function w({model:e,running:t,connecting:n}){return e.done?(0,k.jsx)(h,{className:f(`shrink-0 text-[11px]`,e.finalState===`converged`?`bg-green-500/10 text-green-600 dark:text-green-500`:`bg-amber-500/10 text-amber-600 dark:text-amber-500`),children:C(e.finalState)}):(0,k.jsx)(h,{className:`shrink-0 animate-pulse text-[11px] bg-blue-500/10 text-blue-600 dark:text-blue-500`,children:n?a(`49ae5Iaxec2`,`connecting…`):t?a(`iWndxV3mfFt`,`running`):a(`drLMOoZ3XM7`,`waiting`)})}function T({model:e}){let t=e.passes[e.passes.length-1]?.failingChecks??e.passes.reduce((e,t)=>e+(t.failingChecks??0),0);return(0,k.jsxs)(`div`,{className:`flex items-center gap-3 border-t border-border pt-2 text-xs text-muted-foreground`,"data-slot":`converge-done-footer`,children:[(0,k.jsx)(`span`,{className:`font-medium text-foreground`,children:C(e.finalState)}),e.materializedFiles!=null&&(0,k.jsx)(`span`,{children:a(`gvsdhPjGSJV`,`{count} files written`,{count:e.materializedFiles})}),t>0&&(0,k.jsx)(`span`,{className:`text-destructive`,children:a(`3TIw6VIprBo`,`{count} failing checks`,{count:t})})]})}function E({result:e,onOpenReview:t}){let n=e.parkedScopes??[];return(0,k.jsxs)(`div`,{className:`border-t border-border pt-2`,"data-slot":`converge-result`,children:[e.converged?(0,k.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500`,children:[(0,k.jsx)(u,{size:13}),a(`9hwe9GJaq78`,`Up to date in {count} pass(es) — every gated scope is shippable.`,{count:e.passes})]}):(0,k.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,k.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-500`,children:[(0,k.jsx)(l,{size:13}),a(`attdlXEHj4v`,`{count} scope(s) parked — they need a human to advance.`,{count:n.length})]}),(0,k.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:n.map((e,n)=>(0,k.jsx)(`li`,{children:(0,k.jsx)(b,{content:a(`im7Ej769gXA`,`Open Review filtered to this scope`),children:(0,k.jsxs)(`button`,{type:`button`,className:`flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs hover:bg-accent`,onClick:()=>t?.({collection:e.collection??``,locale:e.locale}),"data-slot":`parked-scope-link`,"aria-label":a(`dz1FfPzx97K`,`Review {scope}`,{scope:e.collection?`${e.locale} · ${e.collection}`:e.locale}),children:[(0,k.jsx)(x,{locale:e.locale}),e.collection&&(0,k.jsx)(`span`,{className:`text-muted-foreground`,translate:`no`,children:e.collection})]})})},`${e.locale}-${e.collection}-${n}`))})]}),(e.materializedFiles??0)>0&&(0,k.jsx)(`p`,{className:`mt-1 text-[11px] text-muted-foreground`,children:a(`hCJgCP9Y0dE`,`Materialized {count} localized file(s) from the project store.`,{count:e.materializedFiles??0})})]})}function ee({pass:e,live:t,running:r}){let o=e.pending??[];return(0,k.jsxs)(`li`,{className:`space-y-1.5`,"data-slot":`converge-pass-row`,"data-pass":e.pass,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,k.jsx)(`span`,{className:`font-medium`,children:a(`hrYKFWgODer`,`Pass {n}`,{n:e.pass})}),e.maxPasses>0&&(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:a(`iXxby2BvsKL`,`of {n}`,{n:e.maxPasses})}),r&&!e.settled&&(0,k.jsx)(c,{size:11,className:`animate-spin text-primary`})]}),e.rows.length>0&&(0,k.jsx)(`div`,{className:`space-y-1`,"data-slot":`converge-locale-rows`,children:e.rows.map(e=>(0,k.jsx)(te,{row:e},e.locale))}),e.settled&&(0,k.jsx)(`div`,{className:`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs`,"data-slot":`converge-pass-summary`,children:n(`9GbXH8PHx8E`,`{=m0} {t} {value} {/=m0} {=m3}·{/=m3} {=m4} {t_2} {/=m4} {=m6}`,{"=m0":(0,k.jsxs)(`span`,{className:`text-muted-foreground`,children:[i(`produced {count}`,{count:e.produced??0}),(e.producedDelta??0)>0?` (+${e.producedDelta})`:``]}),"=m3":(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m4":(0,k.jsx)(`span`,{className:(e.failingChecks??0)>0?`text-amber-600 dark:text-amber-500`:`text-muted-foreground`,children:i(`checks failing {count}`,{count:e.failingChecks??0})}),"=m6":o.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:i(`still pending`)}),o.map(e=>(0,k.jsx)(x,{locale:e},e))]})},{t:i(`produced {count}`,{count:e.produced??0}),value:(e.producedDelta??0)>0?` (+${e.producedDelta})`:``,t_2:i(`checks failing {count}`,{count:e.failingChecks??0})})}),!t&&r&&!e.settled&&(0,k.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,k.jsx)(c,{size:12,className:`animate-spin`}),a(`lx7uCSqTdeH`,`Running…`)]})]})}function te({row:e}){let t=e.units>0?Math.round(e.done/e.units*100):0;return(0,k.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,"data-slot":`converge-locale-row`,"data-locale":e.locale,"data-state":e.state,children:[(0,k.jsx)(D,{state:e.state}),(0,k.jsx)(`div`,{className:`w-16 shrink-0`,children:(0,k.jsx)(x,{locale:e.locale})}),(0,k.jsx)(p,{value:t,className:`h-1.5 flex-1`,"aria-label":a(`5dDVqLomfoR`,`{locale}: {done} of {units} units`,{locale:e.locale,done:e.done,units:e.units})}),(0,k.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:a(`2hTiAamZ27h`,`${e.done}/${e.units}`,{"row.done":e.done,"row.units":e.units})}),(e.viaMemory>0||e.viaAI>0)&&(0,k.jsx)(`span`,{className:`shrink-0 text-[11px] text-muted-foreground`,children:a(`kbj7ggTGa9T`,`Memory {mem} · AI {ai}`,{mem:e.viaMemory,ai:e.viaAI})}),e.localeState&&(0,k.jsx)(h,{className:f(`shrink-0 text-[10px] capitalize`,A[e.localeState]??`bg-muted text-muted-foreground`),children:e.localeState})]})}function D({state:e}){return e===`done`?(0,k.jsx)(u,{size:13,className:`shrink-0 text-green-600 dark:text-green-500`}):e===`running`?(0,k.jsx)(c,{size:13,className:`shrink-0 animate-spin text-primary`}):(0,k.jsx)(s,{size:13,className:`shrink-0 text-muted-foreground/50`})}function O(e){return{manual:a(`eeFb51x3rUl`,`Manual run`),cli:a(`1S2uGeUHlaN`,`kapi up (CLI)`),push:a(`akjRCiaG8vZ`,`On push`)}[e]||e}var k,A,j=e((()=>{r(),d(),m(),k=t(),A={shippable:`bg-green-500/10 text-green-600 dark:text-green-500`,parked:`bg-amber-500/10 text-amber-600 dark:text-amber-500`,pending:`bg-muted text-muted-foreground`},S.__docgenInfo={description:`The live convergence view of a "Bring up to date" run. It renders the reduced
event stream into passes, each showing one row per locale with a unit-progress
bar, the content memory-vs-AI split, and the locale's state (queued → running → done),
then the pass's post-derivation summary (produced delta, failing checks, still
pending locales). Once the run settles it shows the structured outcome, with
each parked (collection, locale) scope rendered as a deep link. Parity with
the CLI's live renderer. Shared across kapi-desktop and bowrain.`,methods:[],displayName:`ConvergenceRunView`,props:{model:{required:!0,tsType:{name:`ConvergenceRunModel`},description:`The reduced run model (folded from the caller's event/SSE stream). The
reduction is app-side; this view is purely presentational.`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working affordances).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},connecting:{required:!1,tsType:{name:`boolean`},description:`True while a live connection (SSE) is opening/reconnecting.`},run:{required:!1,tsType:{name:`ConvergenceRunHeader`},description:`Optional run metadata — when present, renders a header with the run's
trigger, id, timestamp, and live/terminal badge (bowrain's Runs surface).`},result:{required:!1,tsType:{name:`ConvergenceOutcome`},description:`Optional structured terminal outcome, when the caller holds it out-of-band
from the model (kapi-desktop). Renders the converged / parked-scopes block.
When omitted, the view falls back to a compact done-footer from the model.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open a review surface filtered to a parked (collection, locale) scope.`}}}}));function M(){return{passes:[],logs:[],done:!1,live:!0}}function N(e){return{locale:e,units:0,done:0,viaMemory:0,viaAI:0,state:`queued`}}function P(e){return e.units>0&&e.done>=e.units?`done`:e.done>0||e.units>0?`running`:`queued`}function F(e,t){let n=e.rows.find(e=>e.locale===t);return n||(n=N(t),e.rows.push(n)),n}function I(e,t){let n=()=>{if(t.pass!=null){let n=e.passes.find(e=>e.pass===t.pass);if(n)return n}return e.passes.length>0?e.passes[e.passes.length-1]:null};switch(t.type){case`pass_start`:e.passes.push({pass:t.pass??e.passes.length+1,maxPasses:t.maxPasses??0,rows:(t.pending??[]).map(N),settled:!1}),(t.extractedFiles||t.extractedBlocks)&&e.logs?.push(`Extracted ${t.extractedBlocks??0} blocks from ${t.extractedFiles??0} files`);break;case`locale_start`:{let e=n();if(e&&t.locale){let n=F(e,t.locale);t.units!=null&&(n.units=t.units),n.state=P(n)}break}case`unit_progress`:{let e=n();if(e&&t.locale){let n=F(e,t.locale);n.done=t.done??0,n.viaMemory=t.viaTM??0,n.viaAI=t.viaAI??0,n.state=P(n)}break}case`locale_done`:{let e=n();if(e&&t.locale){let n=F(e,t.locale);t.units!=null&&(n.units=t.units),n.done=t.done??n.done,n.viaMemory=t.viaTM??n.viaMemory,n.viaAI=t.viaAI??n.viaAI,n.state=`done`,t.state&&(n.localeState=t.state)}break}case`pass_done`:{let e=n();e&&(e.settled=!0,e.produced=t.produced,e.producedDelta=t.producedDelta,e.failingChecks=t.failingChecks,e.pending=t.pending);break}case`materialized`:e.materializedFiles=t.files;break;case`log`:t.message&&e.logs?.push(t.message);break;case`done`:e.finalState=t.state,e.done=!0;break}return e}function L(e){let t=M();for(let n of e)I(t,n);return t}var R=e((()=>{})),z=e((()=>{j(),R()}));function B(e){return L(e.filter(e=>e.type===`converge_event`&&e.converge_event).map(e=>e.converge_event))}var V=e((()=>{z()}));function H({events:e,running:t,canceled:n,onOpenReview:r}){let i=B(e),a=e.find(e=>e.type===`complete`&&e.converge_result)?.converge_result;return(0,U.jsx)(S,{model:i,running:t,canceled:n,onOpenReview:r,result:a?{converged:a.converged,passes:a.passes,parkedScopes:a.parkedScopes,materializedFiles:a.materializedFiles}:void 0})}var U,W=e((()=>{z(),V(),U=t(),H.__docgenInfo={description:`The desktop adapter over the shared <ConvergenceRunView />: it reduces the job
feed's typed convergence-event stream into the shared render model and lifts
the run's structured outcome (from the terminal \`complete\` event) into the
shared outcome shape. All presentation lives in @neokapi/status-views, shared
with bowrain's Runs surface.`,methods:[],displayName:`ConvergeRunView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`RunEvent`}],raw:`RunEvent[]`},description:`The run's event stream (from the job feed).`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working row).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review page filtered to a parked (collection, locale) scope.`}}}}));function G(e){return{type:`converge_event`,flow_id:`up`,converge_event:e}}var K,q,J,Y,X,Z,Q,$;e((()=>{W(),K={title:`Project/ConvergeRunView`,component:H,parameters:{layout:`padded`}},q=[{type:`state`,flow_id:`up`,message:`running`},G({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`,`nb-NO`]}),G({type:`locale_start`,pass:1,locale:`de-DE`,units:42}),G({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),G({type:`locale_start`,pass:1,locale:`ja-JP`,units:42}),G({type:`unit_progress`,pass:1,locale:`ja-JP`,done:18,viaTM:6,viaAI:12})],J=[{type:`state`,flow_id:`up`,message:`running`},G({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`]}),G({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),G({type:`locale_done`,pass:1,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),G({type:`pass_done`,pass:1,produced:178,producedDelta:178,failingChecks:9,pending:[`ja-JP`]}),G({type:`pass_start`,pass:2,maxPasses:6,pending:[`ja-JP`]}),G({type:`locale_start`,pass:2,locale:`ja-JP`,units:42}),G({type:`unit_progress`,pass:2,locale:`ja-JP`,done:27,viaTM:4,viaAI:23})],Y={args:{events:q,running:!0}},X={args:{events:J,running:!0}},Z={args:{events:[...J,G({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:42,viaTM:8,viaAI:34}),G({type:`pass_done`,pass:2,produced:205,producedDelta:27,failingChecks:0,pending:[]}),G({type:`materialized`,files:18}),G({type:`done`,state:`converged`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:2,converged:!0,locales:[{locale:`nb-NO`,shippable:!0},{locale:`de-DE`,shippable:!0},{locale:`ja-JP`,shippable:!0}],materializedFiles:18}}]}},Q={args:{events:[...J,G({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),G({type:`pass_done`,pass:2,produced:200,producedDelta:22,failingChecks:2,pending:[`ja-JP`]}),G({type:`done`,state:`parked`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:5,converged:!1,locales:[{locale:`nb-NO`,shippable:!0},{locale:`ja-JP`,shippable:!1,parked:!0,failingChecks:2}],parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`ui-strings`}]}}],onOpenReview:()=>{}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    events: RUNNING_PASS,
    running: true
  }
}`,...Y.parameters?.docs?.source},description:{story:`Mid-run: a live pass with per-locale progress bars streaming in.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    events: TWO_PASSES,
    running: true
  }
}`,...X.parameters?.docs?.source},description:{story:`Mid-run, second pass: the first pass settled, the loop converges the rest.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...TWO_PASSES, ce({
      type: "locale_done",
      pass: 2,
      locale: "ja-JP",
      units: 42,
      done: 42,
      viaTM: 8,
      viaAI: 34
    }), ce({
      type: "pass_done",
      pass: 2,
      produced: 205,
      producedDelta: 27,
      failingChecks: 0,
      pending: []
    }), ce({
      type: "materialized",
      files: 18
    }), ce({
      type: "done",
      state: "converged"
    }), {
      type: "complete",
      flow_id: "up",
      converge_result: {
        flow: "up",
        passes: 2,
        converged: true,
        locales: [{
          locale: "nb-NO",
          shippable: true
        }, {
          locale: "de-DE",
          shippable: true
        }, {
          locale: "ja-JP",
          shippable: true
        }],
        materializedFiles: 18
      }
    }]
  }
}`,...Z.parameters?.docs?.source},description:{story:`Converged: every gated scope shipped; files materialized from the store.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...TWO_PASSES, ce({
      type: "locale_done",
      pass: 2,
      locale: "ja-JP",
      units: 42,
      done: 40,
      viaTM: 8,
      viaAI: 32
    }), ce({
      type: "pass_done",
      pass: 2,
      produced: 200,
      producedDelta: 22,
      failingChecks: 2,
      pending: ["ja-JP"]
    }), ce({
      type: "done",
      state: "parked"
    }), {
      type: "complete",
      flow_id: "up",
      converge_result: {
        flow: "up",
        passes: 5,
        converged: false,
        locales: [{
          locale: "nb-NO",
          shippable: true
        }, {
          locale: "ja-JP",
          shippable: false,
          parked: true,
          failingChecks: 2
        }],
        parkedScopes: [{
          locale: "ja-JP",
          collection: "docs"
        }, {
          locale: "ja-JP",
          collection: "ui-strings"
        }]
      }
    }],
    onOpenReview: () => {}
  }
}`,...Q.parameters?.docs?.source},description:{story:`Parked: the loop stalled short of the gate — each parked (collection,
 locale) scope deep-links into the Review page.`,...Q.parameters?.docs?.description}}},$=[`Running`,`RunningSecondPass`,`Converged`,`Parked`]}))();export{Z as Converged,Q as Parked,Y as Running,X as RunningSecondPass,$ as __namedExportsOrder,K as default};