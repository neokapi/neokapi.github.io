import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,s as i,t as a}from"./runtime-CI09VOSa.js";import{Ma as o,Oa as s,Pa as c,ci as l,ia as u,t as d}from"./lucide-react-DTJloxAJ.js";import{o as f,r as p,s as m,t as h}from"./card-CHo_fh0q.js";import{t as g}from"./LocalePill-C8a-9VUF.js";import{i as _,mt as v}from"./iframe-BF5S2e19.js";function y(e){return{locale:e,units:0,done:0,viaTM:0,viaAI:0,state:`queued`}}function b(e,t){let n=e.rows.find(e=>e.locale===t);return n||(n=y(t),e.rows.push(n)),n}function x(e){let t=e.filter(e=>e.type===`converge_event`&&e.converge_event).map(e=>e.converge_event);return t.length>0?S(t):C(e)}function S(e){let t=[],n,r,i=()=>t.length>0?t[t.length-1]:null;for(let a of e)switch(a.type){case`pass_start`:t.push({pass:a.pass??t.length+1,maxPasses:a.maxPasses??0,rows:(a.pending??[]).map(y),settled:!1});break;case`locale_start`:{let e=i();if(e&&a.locale){let t=b(e,a.locale);t.state=`running`,a.units!=null&&(t.units=a.units)}break}case`unit_progress`:{let e=i();if(e&&a.locale){let t=b(e,a.locale);t.done=a.done??0,t.viaTM=a.viaTM??0,t.viaAI=a.viaAI??0}break}case`locale_done`:{let e=i();if(e&&a.locale){let t=b(e,a.locale);t.state=`done`,a.units!=null&&(t.units=a.units),t.done=a.done??t.done,t.viaTM=a.viaTM??t.viaTM,t.viaAI=a.viaAI??t.viaAI}break}case`pass_done`:{let e=i();e&&(e.settled=!0,e.produced=a.produced,e.producedDelta=a.producedDelta,e.failingChecks=a.failingChecks,e.pending=a.pending);break}case`materialized`:n=a.files;break;case`done`:r=a.state;break}return{passes:t,materializedFiles:n,finalState:r,live:!0}}function C(e){return{passes:e.filter(e=>e.type===`converge_pass`&&e.converge).map(e=>e.converge).map(e=>({pass:e.pass,maxPasses:0,rows:[],settled:!0,produced:e.produced,producedDelta:e.producedDelta,failingChecks:e.failingChecks,pending:e.pendingLocales})),live:!1}}var w=e((()=>{}));function T({events:e,running:t,canceled:n,onOpenReview:r}){let i=x(e),l=e.find(e=>e.type===`complete`&&e.converge_result)?.converge_result,d=i.passes.length-1;return(0,k.jsxs)(h,{"data-slot":`converge-run-view`,children:[(0,k.jsx)(f,{className:`px-4`,children:(0,k.jsx)(m,{className:`text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`QjD6Q`,`Passes`)})}),(0,k.jsxs)(p,{className:`space-y-3 px-4`,children:[i.passes.length===0&&t&&(0,k.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,k.jsx)(u,{size:12,className:`animate-spin`}),a(`3U5Gur`,`Deriving state and running the first pass…`)]}),(0,k.jsx)(`ol`,{className:`space-y-3`,children:i.passes.map((e,n)=>(0,k.jsx)(E,{pass:e,live:i.live,running:!!t&&n===d},e.pass||n))}),n&&(0,k.jsxs)(`p`,{className:`flex items-center gap-1.5 border-t border-border pt-2 text-xs text-muted-foreground`,"data-slot":`converge-canceled`,children:[(0,k.jsx)(s,{size:13}),a(`4wTgqO`,`Cancelled — the run stopped before reaching the gates. Nothing is lost: run Bring up to date again to continue.`)]}),l&&(0,k.jsxs)(`div`,{className:`border-t border-border pt-2`,"data-slot":`converge-result`,children:[l.converged?(0,k.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500`,children:[(0,k.jsx)(c,{size:13}),a(`EjFo`,`Converged in {count} pass(es) — every gated scope is shippable.`,{count:l.passes})]}):(0,k.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,k.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-500`,children:[(0,k.jsx)(o,{size:13}),a(`3ml5HG`,`{count} scope(s) parked — they need a human to advance.`,{count:(l.parkedScopes??[]).length})]}),(0,k.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:(l.parkedScopes??[]).map((e,t)=>(0,k.jsx)(`li`,{children:(0,k.jsxs)(`button`,{type:`button`,className:`flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs hover:bg-accent`,onClick:()=>r?.({collection:e.collection??``,locale:e.locale}),"data-slot":`parked-scope-link`,"aria-label":a(`1xY82b`,`Review {scope}`,{scope:e.collection?`${e.locale} · ${e.collection}`:e.locale}),title:a(`34d0AV`,`Open Review filtered to this scope`),children:[(0,k.jsx)(g,{locale:e.locale}),e.collection&&(0,k.jsx)(`span`,{className:`text-muted-foreground`,translate:`no`,children:e.collection})]})},`${e.locale}-${e.collection}-${t}`))})]}),(l.materializedFiles??0)>0&&(0,k.jsx)(`p`,{className:`mt-1 text-[11px] text-muted-foreground`,children:a(`AtFOQ`,`Materialized {count} localized file(s) from the project store.`,{count:l.materializedFiles??0})})]})]})]})}function E({pass:e,live:t,running:r}){let o=e.pending??[];return(0,k.jsxs)(`li`,{className:`space-y-1.5`,"data-slot":`converge-pass-row`,"data-pass":e.pass,children:[(0,k.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,k.jsx)(`span`,{className:`font-medium`,children:a(`23DzSo`,`Pass {n}`,{n:e.pass})}),e.maxPasses>0&&(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:a(`2DZ4VO`,`of {n}`,{n:e.maxPasses})}),r&&!e.settled&&(0,k.jsx)(u,{size:11,className:`animate-spin text-primary`})]}),e.rows.length>0&&(0,k.jsx)(`div`,{className:`space-y-1`,"data-slot":`converge-locale-rows`,children:e.rows.map(e=>(0,k.jsx)(D,{row:e},e.locale))}),e.settled&&(0,k.jsx)(`div`,{className:`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs`,"data-slot":`converge-pass-summary`,children:n(`2g6EeZ`,`{=m0} {t} {value} {/=m0} {=m3}·{/=m3} {=m4} {t_2} {/=m4} {=m6}`,{"=m0":(0,k.jsxs)(`span`,{className:`text-muted-foreground`,children:[i(`produced {count}`,{count:e.produced??0}),(e.producedDelta??0)>0?` (+${e.producedDelta})`:``]}),"=m3":(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m4":(0,k.jsx)(`span`,{className:(e.failingChecks??0)>0?`text-amber-600 dark:text-amber-500`:`text-muted-foreground`,children:i(`checks failing {count}`,{count:e.failingChecks??0})}),"=m6":o.length>0&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),(0,k.jsx)(`span`,{className:`text-muted-foreground`,children:i(`still pending`)}),o.map(e=>(0,k.jsx)(g,{locale:e},e))]})},{t:i(`produced {count}`,{count:e.produced??0}),value:(e.producedDelta??0)>0?` (+${e.producedDelta})`:``,t_2:i(`checks failing {count}`,{count:e.failingChecks??0})})}),!t&&r&&!e.settled&&(0,k.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,k.jsx)(u,{size:12,className:`animate-spin`}),a(`gZZHF`,`Running…`)]})]})}function D({row:e}){let t=e.units>0?Math.round(e.done/e.units*100):0;return(0,k.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,"data-slot":`converge-locale-row`,"data-locale":e.locale,"data-state":e.state,children:[(0,k.jsx)(O,{state:e.state}),(0,k.jsx)(`div`,{className:`w-16 shrink-0`,children:(0,k.jsx)(g,{locale:e.locale})}),(0,k.jsx)(v,{value:t,className:`h-1.5 flex-1`,"aria-label":a(`2rqaMe`,`{locale}: {done} of {units} units`,{locale:e.locale,done:e.done,units:e.units})}),(0,k.jsx)(`span`,{className:`shrink-0 tabular-nums text-muted-foreground`,children:a(`3DMbc5`,`${e.done}/${e.units}`,{"row.done":e.done,"row.units":e.units})}),(e.viaTM>0||e.viaAI>0)&&(0,k.jsx)(`span`,{className:`shrink-0 text-[11px] text-muted-foreground`,children:a(`DfRWG`,`TM {tm} · AI {ai}`,{tm:e.viaTM,ai:e.viaAI})})]})}function O({state:e}){return e===`done`?(0,k.jsx)(c,{size:13,className:`shrink-0 text-green-600 dark:text-green-500`}):e===`running`?(0,k.jsx)(u,{size:13,className:`shrink-0 animate-spin text-primary`}):(0,k.jsx)(l,{size:13,className:`shrink-0 text-muted-foreground/50`})}var k,A=e((()=>{r(),d(),_(),w(),k=t(),T.__docgenInfo={description:`The live convergence view of a "Bring up to date" run. It reduces the run's
typed convergence-event stream into passes, each showing one row per locale
with a unit-progress bar, the TM-vs-AI split, and the locale's state
(queued → running → done), then the pass's post-derivation summary (produced
delta, failing checks, still-pending locales). Once the run settles it shows
the structured outcome with each parked (collection, locale) scope rendered
as a deep link into the Review page. Parity with the CLI's live renderer.`,methods:[],displayName:`ConvergeRunView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`RunEvent`}],raw:`RunEvent[]`},description:`The run's event stream (from the job feed).`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working row).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review page filtered to a parked (collection, locale) scope.`}}}}));function j(e){return{type:`converge_event`,flow_id:`up`,converge_event:e}}var M,N,P,F,I,L,R,z,B;e((()=>{A(),M={title:`Project/ConvergeRunView`,component:T,parameters:{layout:`padded`}},N=[{type:`state`,flow_id:`up`,message:`running`},j({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`,`nb-NO`]}),j({type:`locale_start`,pass:1,locale:`de-DE`,units:42}),j({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),j({type:`locale_start`,pass:1,locale:`ja-JP`,units:42}),j({type:`unit_progress`,pass:1,locale:`ja-JP`,done:18,viaTM:6,viaAI:12})],P=[{type:`state`,flow_id:`up`,message:`running`},j({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`]}),j({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),j({type:`locale_done`,pass:1,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),j({type:`pass_done`,pass:1,produced:178,producedDelta:178,failingChecks:9,pending:[`ja-JP`]}),j({type:`pass_start`,pass:2,maxPasses:6,pending:[`ja-JP`]}),j({type:`locale_start`,pass:2,locale:`ja-JP`,units:42}),j({type:`unit_progress`,pass:2,locale:`ja-JP`,done:27,viaTM:4,viaAI:23})],F={args:{events:N,running:!0}},I={args:{events:P,running:!0}},L={args:{events:[...P,j({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:42,viaTM:8,viaAI:34}),j({type:`pass_done`,pass:2,produced:205,producedDelta:27,failingChecks:0,pending:[]}),j({type:`materialized`,files:18}),j({type:`done`,state:`converged`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:2,converged:!0,locales:[{locale:`nb-NO`,shippable:!0},{locale:`de-DE`,shippable:!0},{locale:`ja-JP`,shippable:!0}],materializedFiles:18}}]}},R={args:{events:[...P,j({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),j({type:`pass_done`,pass:2,produced:200,producedDelta:22,failingChecks:2,pending:[`ja-JP`]}),j({type:`done`,state:`parked`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:5,converged:!1,locales:[{locale:`nb-NO`,shippable:!0},{locale:`ja-JP`,shippable:!1,parked:!0,failingChecks:2}],parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`ui-strings`}]}}],onOpenReview:()=>{}}},z={args:{events:[{type:`converge_pass`,flow_id:`up`,converge:{pass:1,extractedBlocks:214,produced:178,producedDelta:178,failingChecks:9,pendingLocales:[`de-DE`,`ja-JP`]}},{type:`converge_pass`,flow_id:`up`,converge:{pass:2,produced:205,producedDelta:27,failingChecks:2,pendingLocales:[`ja-JP`]}}],running:!0}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    events: RUNNING_PASS,
    running: true
  }
}`,...F.parameters?.docs?.source},description:{story:`Mid-run: a live pass with per-locale progress bars streaming in.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    events: TWO_PASSES,
    running: true
  }
}`,...I.parameters?.docs?.source},description:{story:`Mid-run, second pass: the first pass settled, the loop converges the rest.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Converged: every gated scope shipped; files materialized from the store.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Parked: the loop stalled short of the gate — each parked (collection,
 locale) scope deep-links into the Review page.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Compatibility: an older run that stored only per-pass summaries (no typed
 locale stream) still renders its passes.`,...z.parameters?.docs?.description}}},B=[`Running`,`RunningSecondPass`,`Converged`,`Parked`,`CompatPassSummaries`]}))();export{z as CompatPassSummaries,L as Converged,R as Parked,F as Running,I as RunningSecondPass,B as __namedExportsOrder,M as default};