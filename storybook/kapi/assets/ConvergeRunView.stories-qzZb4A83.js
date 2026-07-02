import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,s as i,t as a}from"./runtime-CI09VOSa.js";import{Aa as o,Ma as s,na as c,t as l}from"./lucide-react-D8E6AOxn.js";import{o as u,r as d,s as f,t as p}from"./card-CHo_fh0q.js";import{t as m}from"./LocalePill-C8a-9VUF.js";import{i as h}from"./iframe-BGnGxC_u.js";function g({events:e,running:t,onOpenReview:r}){let l=e.filter(e=>e.type===`converge_pass`&&e.converge),h=e.find(e=>e.type===`complete`&&e.converge_result)?.converge_result;return(0,_.jsxs)(p,{"data-slot":`converge-run-view`,children:[(0,_.jsx)(u,{className:`px-4`,children:(0,_.jsx)(f,{className:`text-xs font-medium uppercase tracking-wide text-muted-foreground`,children:a(`QjD6Q`,`Passes`)})}),(0,_.jsxs)(d,{className:`space-y-2 px-4`,children:[l.length===0&&t&&(0,_.jsxs)(`p`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,_.jsx)(c,{size:12,className:`animate-spin`}),a(`3U5Gur`,`Deriving state and running the first pass…`)]}),(0,_.jsxs)(`ol`,{className:`space-y-1.5`,children:[l.map((e,t)=>{let r=e.converge,a=r.pendingLocales??[];return(0,_.jsx)(`li`,{className:`flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs`,"data-slot":`converge-pass-row`,children:n(`IYYOP`,`{=m0}{t}{/=m0} {=m2} {t_2} {/=m2} {=m4}·{/=m4} {=m5} {t_3} {value} {/=m5} {=m8}·{/=m8} {=m9} {t_4} {/=m9} {=m11}·{/=m11} {=m12} {t_5} {/=m12} {=m14}`,{"=m0":(0,_.jsx)(`span`,{className:`font-medium`,children:i(`Pass {n}`,{n:r.pass})}),"=m2":(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:i(`extracted {count}`,{count:r.extractedBlocks??0})}),"=m4":(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m5":(0,_.jsxs)(`span`,{className:`text-muted-foreground`,children:[i(`produced {count}`,{count:r.produced}),r.producedDelta>0?` (+${r.producedDelta})`:``]}),"=m8":(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m9":(0,_.jsx)(`span`,{className:(r.failingChecks??0)>0?`text-amber-600 dark:text-amber-500`:`text-muted-foreground`,children:i(`checks failing {count}`,{count:r.failingChecks??0})}),"=m11":(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:`·`}),"=m12":(0,_.jsx)(`span`,{className:`text-muted-foreground`,children:i(`parked {count}`,{count:a.length})}),"=m14":a.map(e=>(0,_.jsx)(m,{locale:e},e))},{t:i(`Pass {n}`,{n:r.pass}),t_2:i(`extracted {count}`,{count:r.extractedBlocks??0}),t_3:i(`produced {count}`,{count:r.produced}),value:r.producedDelta>0?` (+${r.producedDelta})`:``,t_4:i(`checks failing {count}`,{count:r.failingChecks??0}),t_5:i(`parked {count}`,{count:a.length})})},t)}),t&&l.length>0&&(0,_.jsxs)(`li`,{className:`flex items-center gap-2 text-xs text-muted-foreground`,children:[(0,_.jsx)(c,{size:12,className:`animate-spin`}),a(`gZZHF`,`Running…`)]})]}),h&&(0,_.jsxs)(`div`,{className:`border-t border-border pt-2`,"data-slot":`converge-result`,children:[h.converged?(0,_.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-green-600 dark:text-green-500`,children:[(0,_.jsx)(s,{size:13}),a(`EjFo`,`Converged in {count} pass(es) — every gated scope is shippable.`,{count:h.passes})]}):(0,_.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,_.jsxs)(`p`,{className:`flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-500`,children:[(0,_.jsx)(o,{size:13}),a(`3ml5HG`,`{count} scope(s) parked — they need a human to advance.`,{count:(h.parkedScopes??[]).length})]}),(0,_.jsx)(`ul`,{className:`flex flex-wrap gap-1.5`,children:(h.parkedScopes??[]).map((e,t)=>(0,_.jsx)(`li`,{children:(0,_.jsxs)(`button`,{type:`button`,className:`flex items-center gap-1 rounded-full border border-border px-2 py-0.5 text-xs hover:bg-accent`,onClick:()=>r?.({collection:e.collection??``,locale:e.locale}),"data-slot":`parked-scope-link`,"aria-label":a(`1xY82b`,`Review {scope}`,{scope:e.collection?`${e.locale} · ${e.collection}`:e.locale}),title:a(`34d0AV`,`Open Review filtered to this scope`),children:[(0,_.jsx)(m,{locale:e.locale}),e.collection&&(0,_.jsx)(`span`,{className:`text-muted-foreground`,translate:`no`,children:e.collection})]})},`${e.locale}-${e.collection}-${t}`))})]}),(h.materializedFiles??0)>0&&(0,_.jsx)(`p`,{className:`mt-1 text-[11px] text-muted-foreground`,children:a(`AtFOQ`,`Materialized {count} localized file(s) from the project store.`,{count:h.materializedFiles??0})})]})]})]})}var _,v=e((()=>{r(),l(),h(),_=t(),g.__docgenInfo={description:`The convergence view of a "Bring up to date" run: one row per pass
("pass N: extracted X, produced Y, checks failing Z") instead of raw flow
logs, and — once the run settles — the structured outcome with each parked
(collection, locale) scope rendered as a deep link into the Review page.`,methods:[],displayName:`ConvergeRunView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`RunEvent`}],raw:`RunEvent[]`},description:`The run's event stream (from the job feed).`},running:{required:!1,tsType:{name:`boolean`},description:`Whether the run is still in flight (renders the working row).`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review page filtered to a parked (collection, locale) scope.`}}}})),y,b,x,S,C,w;e((()=>{v(),y={title:`Project/ConvergeRunView`,component:g,parameters:{layout:`padded`}},b=[{type:`converge_pass`,flow_id:`translate`,converge:{pass:1,extractedFiles:6,extractedBlocks:214,produced:178,producedDelta:178,failingChecks:9,pendingLocales:[`de-DE`,`ja-JP`]}},{type:`converge_pass`,flow_id:`translate`,converge:{pass:2,produced:205,producedDelta:27,failingChecks:2,pendingLocales:[`ja-JP`]}}],x={args:{events:b,running:!0}},S={args:{events:[...b,{type:`complete`,flow_id:`translate`,converge_result:{flow:`translate`,passes:3,converged:!0,locales:[{locale:`nb-NO`,shippable:!0},{locale:`de-DE`,shippable:!0},{locale:`ja-JP`,shippable:!0}],materializedFiles:18}}]}},C={args:{events:[...b,{type:`complete`,flow_id:`translate`,converge_result:{flow:`translate`,passes:5,converged:!1,locales:[{locale:`nb-NO`,shippable:!0},{locale:`ja-JP`,shippable:!1,parked:!0,failingChecks:2}],parkedScopes:[{locale:`ja-JP`,collection:`docs`},{locale:`ja-JP`,collection:`ui-strings`}]}}],onOpenReview:()=>{}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    events: PASSES,
    running: true
  }
}`,...x.parameters?.docs?.source},description:{story:`Mid-run: passes stream in while the engine loops toward the gate.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Converged: every gated scope shipped; files materialized from the store.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Parked: the loop stalled short of the gate — each parked (collection,
 locale) scope deep-links into the Review page.`,...C.parameters?.docs?.description}}},w=[`Running`,`Converged`,`Parked`]}))();export{S as Converged,C as Parked,x as Running,w as __namedExportsOrder,y as default};