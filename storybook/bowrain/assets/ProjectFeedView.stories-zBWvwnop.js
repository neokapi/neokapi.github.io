import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{i as n,r}from"./iframe-BXlDeUEW.js";import{n as i,t as a}from"./decorators-CMg0XFGn.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=e=>new Date(Date.now()-e*6e4).toISOString(),s={id:`u-ada`,kind:`person`,name:`Ada Lindqvist`},c=[{id:`e-push`,kind:`push`,at:o(4),actor:s,counts:{files:3,blocks:40,collections:2,files_removed:1},stream:`main`,link:{screen:`stream`,id:`push-1`,stream:`main`}},{id:`e-run`,kind:`convergence_run`,at:o(9),actor:{id:`system`,kind:`tool`,name:`convergence`},counts:{passes:2,locales:2,produced:40},locales:[`nb`,`de`],state:`converged`,standing:[{locale:`nb`,state:`shippable`,units:30,produced:30},{locale:`de`,state:`pending`,units:24,produced:10}],link:{screen:`run`,id:`run-1`}},{id:`e-context`,kind:`context_change`,at:o(30),actor:{id:`u-ada`,kind:`agent`,name:`claude-code`,session:`0ab4e399`,host:`laptop`},on_behalf_of:{id:`u-ada`,name:`Ada Lindqvist`},counts:{term_rule:6,add:6},samples:[{kind:`term_rule`,operation:`add`,term:`translation memory`,replacement:`content memory`},{kind:`term_rule`,operation:`add`,term:`termbase`,replacement:`terms store`},{kind:`term_rule`,operation:`add`,term:`glossary`,replacement:`terms store`}],link:{screen:`context_deck`,mode:`pending`}},{id:`e-review`,kind:`review_summary`,at:o(70),actor:s,counts:{approved:28,rejected:2,bulk_approved:120},locales:[`nb`],stream:`main`,link:{screen:`review_deck`,locale:`nb`,stream:`main`}},{id:`e-milestone`,kind:`coverage_milestone`,at:o(75),actor:{id:`system`,kind:`tool`},counts:{percent:90,blocks:1840},locales:[`nb`],link:{screen:`language`,locale:`nb`}},{id:`e-recipe`,kind:`recipe_change`,at:o(1560),actor:s,counts:{coordinates_changed:1,targets_added:1},locales:[`fr`],coordinates:{product:`bowrain`},diff:{collections:[{name:`docs`,change:`coordinates`,before:{product:`kapi`},after:{product:`bowrain`}}],targets:{before:[`nb`,`de`],after:[`nb`,`de`,`fr`]}},link:{screen:`recipe_diff`,id:`e-recipe`}},{id:`e-changeset`,kind:`change_set`,at:o(1620),actor:{id:`u-sam`,kind:`person`,name:`Sam Okafor`},counts:{"term.add":3,"term.status":1},name:`Checkout terms`,state:`merged`,link:{screen:`change_set`,id:`cs-1`}}],l={id:`system`,kind:`tool`,name:`convergence`},u=[{id:`e-fold-1`,kind:`convergence_run`,at:o(3),actor:l,counts:{passes:1,locales:2,produced:12},locales:[`nb`,`de`],state:`converged`,standing:[{locale:`nb`,state:`shippable`,units:12,produced:12},{locale:`de`,state:`shippable`,units:8,produced:8}],link:{screen:`run`,id:`run-f1`}},{id:`e-fold-quiet`,kind:`convergence_run`,at:o(6),actor:l,counts:{passes:0,locales:0,produced:0},state:`converged`,link:{screen:`run`,id:`run-q`}},{id:`e-fold-2`,kind:`convergence_run`,at:o(9),actor:l,counts:{passes:1,locales:1,produced:4},locales:[`nb`],state:`converged`,link:{screen:`run`,id:`run-f2`}},{id:`e-fold-3`,kind:`convergence_run`,at:o(20),actor:l,counts:{passes:2,locales:1,produced:7},locales:[`de`],state:`converged`,link:{screen:`run`,id:`run-f3`}}],d=Array.from({length:140},(e,t)=>({...c[t%c.length],id:`e-many-${t}`,at:o(t*41)})),f=[{id:`e-long-push`,kind:`push`,at:o(2),actor:{id:`u-x`,kind:`person`,name:`Maria-Luisa Fernández de la Cruz Montenegro`},counts:{files:1204,blocks:204315},stream:`release-2026-q4-holiday-campaign-with-a-long-name`,link:{screen:`stream`,stream:`release-2026-q4-holiday-campaign-with-a-long-name`}},{id:`e-long-recipe`,kind:`recipe_change`,at:o(6),actor:{id:`u-x`,kind:`person`,name:`Maria-Luisa Fernández de la Cruz Montenegro`},counts:{settings_changed:2,collections_added:1},diff:{collections:[{name:`marketing-site-landing-pages`,change:`added`,after:{brand:`fernwell`,product:`checkout`,channel:`web`,market:`nordics`}}],settings:[{name:`converge_policy`,before:`on-push`,after:`manual`},{name:`translate_after`,before:``,after:`established`}]},link:{screen:`recipe_diff`,id:`e-long-recipe`}},...c]})))()}function m(e,t=50){return a(void 0,{listProjectFeed:async(n,r,i)=>{let a=e.filter(e=>(!i?.kinds?.length||i.kinds.includes(e.kind))&&(!i?.actorKind||e.actor.kind===i.actorKind)&&(!i?.locale||(e.locales??[]).includes(i.locale))),o=i?.cursor?Number(i.cursor):0,s=Math.min(a.length,o+Math.min(t,i?.limit??50));return{entries:a.slice(o,s),next_cursor:s<a.length?String(s):void 0}}})}var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),p(),i(),h=t(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Pages/Project/ProjectFeedView`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{workspace:`acme`,projectId:`p-docs`,languages:[`nb`,`de`,`fr`],onOpenLink:g(),onOpenLanguage:g()},decorators:[e=>(0,h.jsx)(`div`,{style:{padding:16},children:(0,h.jsx)(e,{})})]},v={decorators:[m(c)],globals:{theme:`light`}},y={decorators:[m(c)],globals:{theme:`dark`}},b={decorators:[m(u)],globals:{theme:`light`}},x={decorators:[m(c.slice(0,1))],globals:{theme:`light`}},S={decorators:[m(d,40)],globals:{theme:`light`}},C={decorators:[m(f)],globals:{theme:`light`}},w={decorators:[m(f)],globals:{theme:`dark`}},T={decorators:[m([])],globals:{theme:`light`}},E=[`EveryKind`,`EveryKindDark`,`FoldedRuns`,`OneEntry`,`ManyEntries`,`LongContent`,`LongContentDark`,`Empty`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedEveryKind)],
  globals: {
    theme: "light"
  }
}`,...v.parameters?.docs?.source},description:{story:`One card of each kind: push, run, agent context change, review, milestone, recipe and change set.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedEveryKind)],
  globals: {
    theme: "dark"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedFolded)],
  globals: {
    theme: "light"
  }
}`,...b.parameters?.docs?.source},description:{story:`Three runs close together fold into one card; the quiet run is left out.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedEveryKind.slice(0, 1))],
  globals: {
    theme: "light"
  }
}`,...x.parameters?.docs?.source},description:{story:`One card.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedMany, 40)],
  globals: {
    theme: "light"
  }
}`,...S.parameters?.docs?.source},description:{story:`A busy project read a page at a time, with Show older activity at the foot.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedLong)],
  globals: {
    theme: "light"
  }
}`,...C.parameters?.docs?.source},description:{story:`Long names, a long stream and a recipe change with every axis.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(feedLong)],
  globals: {
    theme: "dark"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed([])],
  globals: {
    theme: "light"
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as Empty,v as EveryKind,y as EveryKindDark,b as FoldedRuns,C as LongContent,w as LongContentDark,S as ManyEntries,x as OneEntry,E as __namedExportsOrder,_ as default};