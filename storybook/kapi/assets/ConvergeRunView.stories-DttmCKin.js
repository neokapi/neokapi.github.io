import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,s as i,t as a}from"./runtime-CI09VOSa.js";import{Ma as o,Oa as s,Pa as c,ci as l,ia as u,t as d}from"./lucide-react-DTJloxAJ.js";import{t as f}from"./utils-DHlaFoUF.js";import{o as p,r as m,s as h,t as g}from"./card-CHo_fh0q.js";import{t as _}from"./badge-B925V-__.js";import{t as v}from"./LocalePill-C8a-9VUF.js";import{Ft as y,gt as b,i as x}from"./iframe-Cn9RuSUo.js";function S({model:e,running:t,canceled:n,connecting:r,run:i,result:o,onOpenReview:c}){let l=e.passes.length-1,d=e.logs??[];return(0,A.jsxs)(g,{"data-slot":`converge-run-view`,children:[i&&(0,A.jsxs)(p,{className:`flex-row items-center justify-between gap-2 px-4`,children:[(0,A.jsxs)(`div`,{className:`min-w-0`,children:[(0,A.jsx)(h,{className:`text-sm font-semibold`,children:k(i.trigger)}),(0,A.jsxs)(`p`,{className:`text-[11px] text-muted-foreground`,children:[a(`erPt5`,`Run {id}`,{id:i.id.slice(0,8)}),i.created_at&&(0,A.jsxs)(A.Fragment,{children:[` · `,a(`2odL2n`,`started {when}`,{when:new Date(i.created_at).toLocaleString()})]})]})]}),(0,A.jsx)(C,{model:e,running:t,connecting:r})]}),!i&&(0,A.jsx)(p,{className:`px-4`,children:(0,A.jsx)(h,{className:`text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`QjD6Q`,`Passes`)})}),(0,A.jsxs)(m,{className:`space-y-3 px-4`,children:[e.passes.length===0&&(0,A.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(t||r)&&(0,A.jsx)(u,{size:12,className:`animate-spin`}),r?a(`3dy5dN`,`Connecting to the run…`):t?a(`3U5Gur`,`Deriving state and running the first pass…`):a(`APpd9`,`Waiting for the first pass…`)]}),(0,A.jsx)(`ol`,{className:`space-y-3`,children:e.passes.map((n,r)=>(0,A.jsx)(E,{pass:n,live:e.live!==!1,running:!!t&&r===l},n.pass||r))}),d.length>0&&(0,A.jsxs)(`details`,{className:`text-[11px]`,"data-slot":`converge-logs`,children:[(0,A.jsx)(`summary`,{className:`cursor-pointer text-muted-foreground`,children:a(`42K6tP`,`Log ({count})`,{count:d.length})}),(0,A.jsx)(`div`,{className:`mt-1 max-h-40 space-y-0.5 overflow-y-auto rounded-md bg-muted/50 p-2 font-mono`,children:d.map((e,t)=>(0,A.jsx)(`div`,{className:`break-all`,children:e},t))})]}),n&&(0,A.jsxs)(`p`,{className:`flex items-center gap-1.5 border-t border-border pt-2 text-xs text-muted-foreground`,"data-slot":`converge-canceled`,children:[(0,A.jsx)(s,{size:13}),a(`4wTgqO`,`Cancelled — the run stopped before reaching the gates. Nothing is lost: run Bring up to date again to continue.`)]}),o?(0,A.jsx)(T,{result:o,onOpenReview:c}):e.done&&(0,A.jsx)(w,{model:e})]})]})}function C({model:e,running:t,connecting:n}){return e.done?(0,A.jsx)(_,{className:f(`shrink-0 text-[11px] capitalize`,e.finalState===`converged`?`bg-green-500/10 text-green-600 dark:text-green-500`:`bg-amber-500/10 text-amber-600 dark:text-amber-500`),children:e.finalState??a(`3MytDH`,`done`)}):(0,A.jsx)(_,{className:`shrink-0 animate-pulse text-[11px] bg-blue-500/10 text-blue-600 dark:text-blue-500`,children:n?a(`2ztGh2`,`connecting…`):t?a(`2RzeTy`,`running`):a(`nsBKd`,`waiting`)})}function w({model:e}){let t=e.passes[e.passes.length-1]?.failingChecks??e.passes.reduce((e,t)=>e+(t.failingChecks??0),0);return(0,A.jsxs)(`div`,{className:`flex items-center gap-3 border-t border-border pt-2 text-xs text-muted-foreground`,"data-slot":`converge-done-footer`,children:[(0,A.jsx)(`span`,{className:`font-medium capitalize text-foreground`,children:e.finalState??a(`3MytDH`,`done`)}),e.materializedFiles!=null&&(0,A.jsx)(`span`,{children:a(`3IRwNW`,`{count} files written`,{count:e.materializedFiles})}),t>0&&(0,A.jsx)(`span`,{className:`text-destructive`,children:a(`1Pwct7`,`{count} failing checks`,{count:t})})]})}function T({result:e,onOpenReview:t}){let n=e.parkedScopes??[];return(0,A.jsxs)(`div`,{className:`border-t border-border pt-2`,"data-slot":`converge-result`,children:[e.converged?(0,A.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500`,children:[(0,A.jsx)(c,{size:13}),a(`EjFo`,`Converged in {count} pass(es) — every gated scope is shippable.`,{count:e.passes})]}):(0,A.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,A.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-500`,children:[(0,A.jsx)(o,{size:13}),a(`3ml5HG`,`{count} scope(s) parked — they need a human to advance.`,{count:n.length})]}),(0,A.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:n.map((e,n)=>(0,A.jsx)(`li`,{children:(0,A.jsx)(y,{content:a(`34d0AV`,`Open Review filtered to this scope`),children:(0,A.jsxs)(`button`,{type:`button`,className:`flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs hover:bg-accent`,onClick:()=>t?.({collection:e.collection??``,locale:e.locale}),"data-slot":`parked-scope-link`,"aria-label":a(`1xY82b`,`Review {scope}`,{scope:e.collection?`${e.locale} · ${e.collection}`:e.locale}),children:[(0,A.jsx)(v,{locale:e.locale}),e.collection&&(0,A.jsx)(`span`,{className:`text-muted-foreground`,translate:`no`,children:e.collection})]})})},`${e.locale}-${e.collection}-${n}`))})]}),(e.materializedFiles??0)>0&&(0,A.jsx)(`p`,{className:`mt-1 text-[11px] text-muted-foreground`,children:a(`AtFOQ`,`Materialized {count} localized file(s) from the project store.`,{count:e.materializedFiles??0})})]})}function E({pass:e,live:t,running:r}){let o=e.pending??[];return(0,A.jsxs)(`li`,{className:`space-y-1.5`,"data-slot":`converge-pass-row`,"data-pass":e.pass,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,A.jsx)(`span`,{className:`font-medium`,children:a(`23DzSo`,`Pass {n}`,{n:e.pass})}),e.maxPasses>0&&(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:a(`2DZ4VO`,`of {n}`,{n:e.maxPasses})}),r&&!e.settled&&(0,A.jsx)(u,{size:11,className:`animate-spin text-primary`})]}),e.rows.length>0&&(0,A.jsx)(`div`,{className:`space-y-1`,"data-slot":`converge-locale-rows`,children:e.rows.map(e=>(0,A.jsx)(D,{row:e},e.locale))}),e.settled&&(0,A.jsx)(`div`,{className:`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs`,"data-slot":`converge-pass-summary`,children:n(`2g6EeZ`,`{=m0} {t} {value} {/=m0} {=m3}·{/=m3} {=m4} {t_2} {/=m4} {=m6}`,{"=m0":(0,A.jsxs)(`span`,{className:`text-muted-foreground`,children:[i(`produced {count}`,{count:e.produced??0}),(e.producedDelta??0)>0?` (+${e.producedDelta})`:``]}),"=m3":(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m4":(0,A.jsx)(`span`,{className:(e.failingChecks??0)>0?`text-amber-600 dark:text-amber-500`:`text-muted-foreground`,children:i(`checks failing {count}`,{count:e.failingChecks??0})}),"=m6":o.length>0&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),(0,A.jsx)(`span`,{className:`text-muted-foreground`,children:i(`still pending`)}),o.map(e=>(0,A.jsx)(v,{locale:e},e))]})},{t:i(`produced {count}`,{count:e.produced??0}),value:(e.producedDelta??0)>0?` (+${e.producedDelta})`:``,t_2:i(`checks failing {count}`,{count:e.failingChecks??0})})}),!t&&r&&!e.settled&&(0,A.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,A.jsx)(u,{size:12,className:`animate-spin`}),a(`gZZHF`,`Running…`)]})]})}function D({row:e}){let t=e.units>0?Math.round(e.done/e.units*100):0;return(0,A.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,"data-slot":`converge-locale-row`,"data-locale":e.locale,"data-state":e.state,children:[(0,A.jsx)(O,{state:e.state}),(0,A.jsx)(`div`,{className:`w-16 shrink-0`,children:(0,A.jsx)(v,{locale:e.locale})}),(0,A.jsx)(b,{value:t,className:`h-1.5 flex-1`,"aria-label":a(`2rqaMe`,`{locale}: {done} of {units} units`,{locale:e.locale,done:e.done,units:e.units})}),(0,A.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:a(`3DMbc5`,`${e.done}/${e.units}`,{"row.done":e.done,"row.units":e.units})}),(e.viaTM>0||e.viaAI>0)&&(0,A.jsx)(`span`,{className:`shrink-0 text-[11px] text-muted-foreground`,children:a(`DfRWG`,`TM {tm} · AI {ai}`,{tm:e.viaTM,ai:e.viaAI})}),e.localeState&&(0,A.jsx)(_,{className:f(`shrink-0 text-[10px] capitalize`,j[e.localeState]??`bg-muted text-muted-foreground`),children:e.localeState})]})}function O({state:e}){return e===`done`?(0,A.jsx)(c,{size:13,className:`shrink-0 text-green-600 dark:text-green-500`}):e===`running`?(0,A.jsx)(u,{size:13,className:`shrink-0 animate-spin text-primary`}):(0,A.jsx)(l,{size:13,className:`shrink-0 text-muted-foreground/50`})}function k(e){return{manual:a(`3DcfjW`,`Manual run`),cli:a(`4nwTP8`,`kapi up (CLI)`),push:a(`36CNru`,`On push`)}[e]||e}var A,j,M=e((()=>{r(),d(),x(),A=t(),j={shippable:`bg-green-500/10 text-green-600 dark:text-green-500`,parked:`bg-amber-500/10 text-amber-600 dark:text-amber-500`,pending:`bg-muted text-muted-foreground`},S.__docgenInfo={description:`The live convergence view of a "Bring up to date" run. It renders the reduced
event stream into passes, each showing one row per locale with a unit-progress
bar, the TM-vs-AI split, and the locale's state (queued → running → done),
then the pass's post-derivation summary (produced delta, failing checks, still
pending locales). Once the run settles it shows the structured outcome, with
each parked (collection, locale) scope rendered as a deep link. Parity with
the CLI's live renderer. Shared across kapi-desktop and bowrain.`,methods:[],displayName:`ConvergenceRunView`,props:{model:{required:!0,tsType:{name:`ConvergenceRunModel`},description:`The reduced run model (folded from the caller's event/SSE stream). The
reduction is app-side; this view is purely presentational.`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working affordances).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},connecting:{required:!1,tsType:{name:`boolean`},description:`True while a live connection (SSE) is opening/reconnecting.`},run:{required:!1,tsType:{name:`ConvergenceRunHeader`},description:`Optional run metadata — when present, renders a header with the run's
trigger, id, timestamp, and live/terminal badge (bowrain's Runs surface).`},result:{required:!1,tsType:{name:`ConvergenceOutcome`},description:`Optional structured terminal outcome, when the caller holds it out-of-band
from the model (kapi-desktop). Renders the converged / parked-scopes block.
When omitted, the view falls back to a compact done-footer from the model.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open a review surface filtered to a parked (collection, locale) scope.`}}}})),N=e((()=>{M()}));function P(e){return{locale:e,units:0,done:0,viaTM:0,viaAI:0,state:`queued`}}function F(e,t){let n=e.rows.find(e=>e.locale===t);return n||(n=P(t),e.rows.push(n)),n}function I(e){let t=e.filter(e=>e.type===`converge_event`&&e.converge_event).map(e=>e.converge_event);return t.length>0?L(t):R(e)}function L(e){let t=[],n,r,i=()=>t.length>0?t[t.length-1]:null;for(let a of e)switch(a.type){case`pass_start`:t.push({pass:a.pass??t.length+1,maxPasses:a.maxPasses??0,rows:(a.pending??[]).map(P),settled:!1});break;case`locale_start`:{let e=i();if(e&&a.locale){let t=F(e,a.locale);t.state=`running`,a.units!=null&&(t.units=a.units)}break}case`unit_progress`:{let e=i();if(e&&a.locale){let t=F(e,a.locale);t.done=a.done??0,t.viaTM=a.viaTM??0,t.viaAI=a.viaAI??0}break}case`locale_done`:{let e=i();if(e&&a.locale){let t=F(e,a.locale);t.state=`done`,a.units!=null&&(t.units=a.units),t.done=a.done??t.done,t.viaTM=a.viaTM??t.viaTM,t.viaAI=a.viaAI??t.viaAI}break}case`pass_done`:{let e=i();e&&(e.settled=!0,e.produced=a.produced,e.producedDelta=a.producedDelta,e.failingChecks=a.failingChecks,e.pending=a.pending);break}case`materialized`:n=a.files;break;case`done`:r=a.state;break}return{passes:t,materializedFiles:n,finalState:r,live:!0}}function R(e){return{passes:e.filter(e=>e.type===`converge_pass`&&e.converge).map(e=>e.converge).map(e=>({pass:e.pass,maxPasses:0,rows:[],settled:!0,produced:e.produced,producedDelta:e.producedDelta,failingChecks:e.failingChecks,pending:e.pendingLocales})),live:!1}}var z=e((()=>{}));function B({events:e,running:t,canceled:n,onOpenReview:r}){let i=I(e),a=e.find(e=>e.type===`complete`&&e.converge_result)?.converge_result;return(0,V.jsx)(S,{model:i,running:t,canceled:n,onOpenReview:r,result:a?{converged:a.converged,passes:a.passes,parkedScopes:a.parkedScopes,materializedFiles:a.materializedFiles}:void 0})}var V,H=e((()=>{N(),z(),V=t(),B.__docgenInfo={description:`The desktop adapter over the shared <ConvergenceRunView />: it reduces the job
feed's typed convergence-event stream into the shared render model and lifts
the run's structured outcome (from the terminal \`complete\` event) into the
shared outcome shape. All presentation lives in @neokapi/status-views, shared
with bowrain's Runs surface.`,methods:[],displayName:`ConvergeRunView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`RunEvent`}],raw:`RunEvent[]`},description:`The run's event stream (from the job feed).`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working row).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review page filtered to a parked (collection, locale) scope.`}}}}));function U(e){return{type:`converge_event`,flow_id:`up`,converge_event:e}}var W,G,K,q,J,Y,X,Z,Q;e((()=>{H(),W={title:`Project/ConvergeRunView`,component:B,parameters:{layout:`padded`}},G=[{type:`state`,flow_id:`up`,message:`running`},U({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`,`nb-NO`]}),U({type:`locale_start`,pass:1,locale:`de-DE`,units:42}),U({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),U({type:`locale_start`,pass:1,locale:`ja-JP`,units:42}),U({type:`unit_progress`,pass:1,locale:`ja-JP`,done:18,viaTM:6,viaAI:12})],K=[{type:`state`,flow_id:`up`,message:`running`},U({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`]}),U({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),U({type:`locale_done`,pass:1,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),U({type:`pass_done`,pass:1,produced:178,producedDelta:178,failingChecks:9,pending:[`ja-JP`]}),U({type:`pass_start`,pass:2,maxPasses:6,pending:[`ja-JP`]}),U({type:`locale_start`,pass:2,locale:`ja-JP`,units:42}),U({type:`unit_progress`,pass:2,locale:`ja-JP`,done:27,viaTM:4,viaAI:23})],q={args:{events:G,running:!0}},J={args:{events:K,running:!0}},Y={args:{events:[...K,U({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:42,viaTM:8,viaAI:34}),U({type:`pass_done`,pass:2,produced:205,producedDelta:27,failingChecks:0,pending:[]}),U({type:`materialized`,files:18}),U({type:`done`,state:`converged`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:2,converged:!0,locales:[{locale:`nb-NO`,shippable:!0},{locale:`de-DE`,shippable:!0},{locale:`ja-JP`,shippable:!0}],materializedFiles:18}}]}},X={args:{events:[...K,U({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),U({type:`pass_done`,pass:2,produced:200,producedDelta:22,failingChecks:2,pending:[`ja-JP`]}),U({type:`done`,state:`parked`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:5,converged:!1,locales:[{locale:`nb-NO`,shippable:!0},{locale:`ja-JP`,shippable:!1,parked:!0,failingChecks:2}],parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`ui-strings`}]}}],onOpenReview:()=>{}}},Z={args:{events:[{type:`converge_pass`,flow_id:`up`,converge:{pass:1,extractedBlocks:214,produced:178,producedDelta:178,failingChecks:9,pendingLocales:[`de-DE`,`ja-JP`]}},{type:`converge_pass`,flow_id:`up`,converge:{pass:2,produced:205,producedDelta:27,failingChecks:2,pendingLocales:[`ja-JP`]}}],running:!0}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    events: RUNNING_PASS,
    running: true
  }
}`,...q.parameters?.docs?.source},description:{story:`Mid-run: a live pass with per-locale progress bars streaming in.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    events: TWO_PASSES,
    running: true
  }
}`,...J.parameters?.docs?.source},description:{story:`Mid-run, second pass: the first pass settled, the loop converges the rest.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Converged: every gated scope shipped; files materialized from the store.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Parked: the loop stalled short of the gate — each parked (collection,
 locale) scope deep-links into the Review page.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      type: "converge_pass",
      flow_id: "up",
      converge: {
        pass: 1,
        extractedBlocks: 214,
        produced: 178,
        producedDelta: 178,
        failingChecks: 9,
        pendingLocales: ["de-DE", "ja-JP"]
      }
    }, {
      type: "converge_pass",
      flow_id: "up",
      converge: {
        pass: 2,
        produced: 205,
        producedDelta: 27,
        failingChecks: 2,
        pendingLocales: ["ja-JP"]
      }
    }],
    running: true
  }
}`,...Z.parameters?.docs?.source},description:{story:`Compatibility: an older run that stored only per-pass summaries (no typed
 locale stream) still renders its passes.`,...Z.parameters?.docs?.description}}},Q=[`Running`,`RunningSecondPass`,`Converged`,`Parked`,`CompatPassSummaries`]}))();export{Z as CompatPassSummaries,Y as Converged,X as Parked,q as Running,J as RunningSecondPass,Q as __namedExportsOrder,W as default};