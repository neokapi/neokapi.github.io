import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,s as i,t as a}from"./runtime-CI09VOSa.js";import{Ma as o,Oa as s,Pa as c,ia as l,t as u}from"./lucide-react-DTJloxAJ.js";import{o as d,r as f,s as p,t as m}from"./card-CHo_fh0q.js";import{t as h}from"./LocalePill-C8a-9VUF.js";import{i as g}from"./iframe-BaEdV08T.js";function _({events:e,running:t,canceled:r,onOpenReview:u}){let g=e.filter(e=>e.type===`converge_pass`&&e.converge),_=e.find(e=>e.type===`complete`&&e.converge_result)?.converge_result;return(0,v.jsxs)(m,{"data-slot":`converge-run-view`,children:[(0,v.jsx)(d,{className:`px-4`,children:(0,v.jsx)(p,{className:`text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`QjD6Q`,`Passes`)})}),(0,v.jsxs)(f,{className:`space-y-2 px-4`,children:[g.length===0&&t&&(0,v.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,v.jsx)(l,{size:12,className:`animate-spin`}),a(`3U5Gur`,`Deriving state and running the first pass…`)]}),(0,v.jsxs)(`ol`,{className:`space-y-1.5`,children:[g.map((e,t)=>{let r=e.converge,a=r.pendingLocales??[];return(0,v.jsx)(`li`,{className:`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs`,"data-slot":`converge-pass-row`,children:n(`IYYOP`,`{=m0}{t}{/=m0} {=m2} {t_2} {/=m2} {=m4}·{/=m4} {=m5} {t_3} {value} {/=m5} {=m8}·{/=m8} {=m9} {t_4} {/=m9} {=m11}·{/=m11} {=m12} {t_5} {/=m12} {=m14}`,{"=m0":(0,v.jsx)(`span`,{className:`font-medium`,children:i(`Pass {n}`,{n:r.pass})}),"=m2":(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:i(`extracted {count}`,{count:r.extractedBlocks??0})}),"=m4":(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m5":(0,v.jsxs)(`span`,{className:`text-muted-foreground`,children:[i(`produced {count}`,{count:r.produced}),r.producedDelta>0?` (+${r.producedDelta})`:``]}),"=m8":(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m9":(0,v.jsx)(`span`,{className:(r.failingChecks??0)>0?`text-amber-600 dark:text-amber-500`:`text-muted-foreground`,children:i(`checks failing {count}`,{count:r.failingChecks??0})}),"=m11":(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m12":(0,v.jsx)(`span`,{className:`text-muted-foreground`,children:i(`parked {count}`,{count:a.length})}),"=m14":a.map(e=>(0,v.jsx)(h,{locale:e},e))},{t:i(`Pass {n}`,{n:r.pass}),t_2:i(`extracted {count}`,{count:r.extractedBlocks??0}),t_3:i(`produced {count}`,{count:r.produced}),value:r.producedDelta>0?` (+${r.producedDelta})`:``,t_4:i(`checks failing {count}`,{count:r.failingChecks??0}),t_5:i(`parked {count}`,{count:a.length})})},t)}),t&&g.length>0&&(0,v.jsxs)(`li`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,v.jsx)(l,{size:12,className:`animate-spin`}),a(`gZZHF`,`Running…`)]})]}),r&&(0,v.jsxs)(`p`,{className:`flex items-center gap-1.5 border-t border-border pt-2 text-xs text-muted-foreground`,"data-slot":`converge-canceled`,children:[(0,v.jsx)(s,{size:13}),a(`4wTgqO`,`Cancelled — the run stopped before reaching the gates. Nothing is lost: run Bring up to date again to continue.`)]}),_&&(0,v.jsxs)(`div`,{className:`border-t border-border pt-2`,"data-slot":`converge-result`,children:[_.converged?(0,v.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500`,children:[(0,v.jsx)(c,{size:13}),a(`EjFo`,`Converged in {count} pass(es) — every gated scope is shippable.`,{count:_.passes})]}):(0,v.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,v.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-500`,children:[(0,v.jsx)(o,{size:13}),a(`3ml5HG`,`{count} scope(s) parked — they need a human to advance.`,{count:(_.parkedScopes??[]).length})]}),(0,v.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:(_.parkedScopes??[]).map((e,t)=>(0,v.jsx)(`li`,{children:(0,v.jsxs)(`button`,{type:`button`,className:`flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs hover:bg-accent`,onClick:()=>u?.({collection:e.collection??``,locale:e.locale}),"data-slot":`parked-scope-link`,"aria-label":a(`1xY82b`,`Review {scope}`,{scope:e.collection?`${e.locale} · ${e.collection}`:e.locale}),title:a(`34d0AV`,`Open Review filtered to this scope`),children:[(0,v.jsx)(h,{locale:e.locale}),e.collection&&(0,v.jsx)(`span`,{className:`text-muted-foreground`,translate:`no`,children:e.collection})]})},`${e.locale}-${e.collection}-${t}`))})]}),(_.materializedFiles??0)>0&&(0,v.jsx)(`p`,{className:`mt-1 text-[11px] text-muted-foreground`,children:a(`AtFOQ`,`Materialized {count} localized file(s) from the project store.`,{count:_.materializedFiles??0})})]})]})]})}var v,y=e((()=>{r(),u(),g(),v=t(),_.__docgenInfo={description:`The convergence view of a "Bring up to date" run: one row per pass
("pass N: extracted X, produced Y, checks failing Z") instead of raw flow
logs, and — once the run settles — the structured outcome with each parked
(collection, locale) scope rendered as a deep link into the Review page.`,methods:[],displayName:`ConvergeRunView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`RunEvent`}],raw:`RunEvent[]`},description:`The run's event stream (from the job feed).`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working row).`},canceled:{required:!1,tsType:{name:`boolean`},description:`Whether the run was cancelled (renders the terminal cancelled row).`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review page filtered to a parked (collection, locale) scope.`}}}})),b,x,S,C,w,T;e((()=>{y(),b={title:`Project/ConvergeRunView`,component:_,parameters:{layout:`padded`}},x=[{type:`converge_pass`,flow_id:`translate`,converge:{pass:1,extractedFiles:6,extractedBlocks:214,produced:178,producedDelta:178,failingChecks:9,pendingLocales:[`de-DE`,`ja-JP`]}},{type:`converge_pass`,flow_id:`translate`,converge:{pass:2,produced:205,producedDelta:27,failingChecks:2,pendingLocales:[`ja-JP`]}}],S={args:{events:x,running:!0}},C={args:{events:[...x,{type:`complete`,flow_id:`translate`,converge_result:{flow:`translate`,passes:3,converged:!0,locales:[{locale:`nb-NO`,shippable:!0},{locale:`de-DE`,shippable:!0},{locale:`ja-JP`,shippable:!0}],materializedFiles:18}}]}},w={args:{events:[...x,{type:`complete`,flow_id:`translate`,converge_result:{flow:`translate`,passes:5,converged:!1,locales:[{locale:`nb-NO`,shippable:!0},{locale:`ja-JP`,shippable:!1,parked:!0,failingChecks:2}],parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`ui-strings`}]}}],onOpenReview:()=>{}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    events: PASSES,
    running: true
  }
}`,...S.parameters?.docs?.source},description:{story:`Mid-run: passes stream in while the engine loops toward the gate.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...PASSES, {
      type: "complete",
      flow_id: "translate",
      converge_result: {
        flow: "translate",
        passes: 3,
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
}`,...C.parameters?.docs?.source},description:{story:`Converged: every gated scope shipped; files materialized from the store.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...PASSES, {
      type: "complete",
      flow_id: "translate",
      converge_result: {
        flow: "translate",
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
}`,...w.parameters?.docs?.source},description:{story:`Parked: the loop stalled short of the gate — each parked (collection,
 locale) scope deep-links into the Review page.`,...w.parameters?.docs?.description}}},T=[`Running`,`Converged`,`Parked`]}))();export{C as Converged,w as Parked,S as Running,T as __namedExportsOrder,b as default};