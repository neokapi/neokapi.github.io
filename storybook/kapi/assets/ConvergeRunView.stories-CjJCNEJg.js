import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./ConvergenceRunView-BI_Icdno.js";function i(){return{passes:[],logs:[],done:!1,live:!0}}function a(e){return{locale:e,units:0,done:0,viaMemory:0,viaAI:0,state:`queued`}}function o(e){return e.units>0&&e.done>=e.units?`done`:e.done>0||e.units>0?`running`:`queued`}function s(e,t){let n=e.rows.find(e=>e.locale===t);return n||(n=a(t),e.rows.push(n)),n}function c(e,t){let n=()=>{if(t.pass!=null){let n=e.passes.find(e=>e.pass===t.pass);if(n)return n}return e.passes.length>0?e.passes[e.passes.length-1]:null};switch(t.type){case`pass_start`:e.passes.push({pass:t.pass??e.passes.length+1,maxPasses:t.maxPasses??0,rows:(t.pending??[]).map(a),settled:!1}),(t.extractedFiles||t.extractedBlocks)&&e.logs?.push(`Extracted ${t.extractedBlocks??0} blocks from ${t.extractedFiles??0} files`);break;case`locale_start`:{let e=n();if(e&&t.locale){let n=s(e,t.locale);t.units!=null&&(n.units=t.units),n.state=o(n)}break}case`unit_progress`:{let e=n();if(e&&t.locale){let n=s(e,t.locale);n.done=t.done??0,n.viaMemory=t.viaTM??0,n.viaAI=t.viaAI??0,n.state=o(n)}break}case`locale_done`:{let e=n();if(e&&t.locale){let n=s(e,t.locale);t.units!=null&&(n.units=t.units),n.done=t.done??n.done,n.viaMemory=t.viaTM??n.viaMemory,n.viaAI=t.viaAI??n.viaAI,n.state=`done`,t.state&&(n.localeState=t.state)}break}case`pass_done`:{let e=n();e&&(e.settled=!0,e.produced=t.produced,e.producedDelta=t.producedDelta,e.failingChecks=t.failingChecks,e.pending=t.pending);break}case`materialized`:e.materializedFiles=t.files;break;case`log`:t.message&&e.logs?.push(t.message);break;case`done`:e.finalState=t.state,e.done=!0}return e}function l(e){let t=i();for(let n of e)c(t,n);return t}function u(){return(u=e((()=>{n()})))()}function d(e){return l(e.filter(e=>e.type===`converge_event`&&e.converge_event).map(e=>e.converge_event))}function f(){return(f=e((()=>{u()})))()}function p({events:e,running:t,canceled:n,onOpenReview:i}){let a=d(e),o=e.find(e=>e.type===`complete`&&e.converge_result)?.converge_result;return(0,m.jsx)(r,{model:a,running:t,canceled:n,onOpenReview:i,result:o?{converged:o.converged,passes:o.passes,parkedScopes:o.parkedScopes,materializedFiles:o.materializedFiles,blockedOnSource:o.blockedOnSource,sourceGate:o.sourceGate,stallReason:o.stallReason}:void 0})}var m;function h(){return(h=e((()=>{u(),f(),m=t(),p.__docgenInfo={description:`The desktop adapter over the shared <ConvergenceRunView />: it reduces the job
feed's typed convergence-event stream into the shared render model and lifts
the run's structured outcome (from the terminal \`complete\` event) into the
shared outcome shape. All presentation lives in @neokapi/status-views, shared
with bowrain's Runs surface.`,methods:[],displayName:`ConvergeRunView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`RunEvent`}],raw:`RunEvent[]`},description:`The run's event stream (from the job feed).`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working row).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review page filtered to a parked (collection, locale) scope.`}}}})))()}function g(e){return{type:`converge_event`,flow_id:`up`,converge_event:e}}var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{h(),_={title:`Project/ConvergeRunView`,component:p,parameters:{layout:`padded`}},v=[{type:`state`,flow_id:`up`,message:`running`},g({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`,`nb-NO`]}),g({type:`locale_start`,pass:1,locale:`de-DE`,units:42}),g({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),g({type:`locale_start`,pass:1,locale:`ja-JP`,units:42}),g({type:`unit_progress`,pass:1,locale:`ja-JP`,done:18,viaTM:6,viaAI:12})],y=[{type:`state`,flow_id:`up`,message:`running`},g({type:`pass_start`,pass:1,maxPasses:6,pending:[`de-DE`,`ja-JP`]}),g({type:`locale_done`,pass:1,locale:`de-DE`,units:42,done:42,viaTM:30,viaAI:12}),g({type:`locale_done`,pass:1,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),g({type:`pass_done`,pass:1,produced:178,producedDelta:178,failingChecks:9,pending:[`ja-JP`]}),g({type:`pass_start`,pass:2,maxPasses:6,pending:[`ja-JP`]}),g({type:`locale_start`,pass:2,locale:`ja-JP`,units:42}),g({type:`unit_progress`,pass:2,locale:`ja-JP`,done:27,viaTM:4,viaAI:23})],b={args:{events:v,running:!0}},x={args:{events:y,running:!0}},S={args:{events:[...y,g({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:42,viaTM:8,viaAI:34}),g({type:`pass_done`,pass:2,produced:205,producedDelta:27,failingChecks:0,pending:[]}),g({type:`materialized`,files:18}),g({type:`done`,state:`converged`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:2,converged:!0,locales:[{locale:`nb-NO`,shippable:!0},{locale:`de-DE`,shippable:!0},{locale:`ja-JP`,shippable:!0}],materializedFiles:18}}]}},C={args:{events:[...y,g({type:`locale_done`,pass:2,locale:`ja-JP`,units:42,done:40,viaTM:8,viaAI:32}),g({type:`pass_done`,pass:2,produced:200,producedDelta:22,failingChecks:2,pending:[`ja-JP`]}),g({type:`done`,state:`parked`}),{type:`complete`,flow_id:`up`,converge_result:{flow:`up`,passes:5,converged:!1,locales:[{locale:`nb-NO`,shippable:!0},{locale:`ja-JP`,shippable:!1,parked:!0,failingChecks:2}],parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`ui-strings`}]}}],onOpenReview:()=>{}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    events: RUNNING_PASS,
    running: true
  }
}`,...b.parameters?.docs?.source},description:{story:`Mid-run: a live pass with per-locale progress bars streaming in.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    events: TWO_PASSES,
    running: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Mid-run, second pass: the first pass settled, the loop converges the rest.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Converged: every gated scope shipped; files materialized from the store.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Parked: the loop stalled short of the gate — each parked (collection,
 locale) scope deep-links into the Review page.`,...C.parameters?.docs?.description}}},w=[`Running`,`RunningSecondPass`,`Converged`,`Parked`]})))()}T();export{S as Converged,C as Parked,b as Running,x as RunningSecondPass,w as __namedExportsOrder,_ as default};