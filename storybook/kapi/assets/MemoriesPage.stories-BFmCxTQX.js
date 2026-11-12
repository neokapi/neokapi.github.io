import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./MemoriesPage-DEuIuV6t.js";function i(e){return new Date(u-e*l).toISOString()}function a(e){return Array.from({length:e},(e,t)=>({id:`m${t}`,project_id:`kapimart`,hint_src_lang:`en-US`,variants:{"en-US":{locale:`en-US`,text:`Approved sentence number ${t+1} from the store's checkout pages`,runs:[{text:`Approved sentence number ${t+1} from the store's checkout pages`}]},"fr-FR":{locale:`fr-FR`,text:`Phrase approuvée numéro ${t+1}`,runs:[{text:`Phrase approuvée numéro ${t+1}`}]},...t%2==0?{"de-DE":{locale:`de-DE`,text:`Genehmigter Satz Nummer ${t+1}`,runs:[{text:`Genehmigter Satz Nummer ${t+1}`}]}}:{}},created_at:i(t+1),updated_at:i(t+1)}))}function o(e){let t={};for(let[n,r]of Object.entries(e))t[n]={locale:n,text:r.text,runs:r.runs??[{text:r.text}]};return t}function s(e){return Object.values(e.variants).some(e=>e.runs.some(e=>!(`text`in e)))}function c(e=d){let t=structuredClone(e),n=0,r=(e,n,r,i={})=>t.filter(t=>{let a=Object.values(t.variants).filter(e=>!n||e.locale===n);if(e&&!a.some(t=>t.text.toLowerCase().includes(e.toLowerCase()))||n&&a.length===0||r&&!t.variants[r]||i.project_id!==void 0&&t.project_id!==i.project_id)return!1;if(i.entity_types?.length){let e=new Set((t.entities??[]).map(e=>e.type));if(!i.entity_types.every(t=>e.has(t)))return!1}if(i.session_ids?.length){let e=new Set((t.origins??[]).map(e=>e.session_id));if(!i.session_ids.some(t=>e.has(t)))return!1}return!(i.has_codes===!0&&!s(t)||i.has_codes===!1&&s(t))}),a=e=>{let t=e=>{let t=new Map;for(let n of e)t.set(n,(t.get(n)??0)+1);return[...t]};return{locales:t(e.flatMap(e=>Object.keys(e.variants))).map(([e,t])=>({locale:e,count:t})),projects:t(e.map(e=>e.project_id)).map(([e,t])=>({project_id:e,count:t})),entity_types:t(e.flatMap(e=>(e.entities??[]).map(e=>e.type))).map(([e,t])=>({type:e,count:t})),import_sessions:t(e.flatMap(e=>(e.origins??[]).filter(e=>e.session_id).map(e=>e.session_id))).map(([e,t])=>({session_id:e,file_key:`legacy/store-nb.json`,imported_at:i(400),count:t})),has_codes:e.filter(s).length,no_codes:e.filter(e=>!s(e)).length}};return{async search(e,t,n,i,a){let o=r(e,t,n);return{entries:o.slice(i,i+a),total_count:o.length}},async searchFiltered(e,t,n,i,a,o){let s=r(e,t,n,i);return{entries:s.slice(a,a+o),total_count:s.length}},async getEntry(e){return t.find(t=>t.id===e)??null},async addEntry(e){t.unshift({id:`new-${++n}`,project_id:e.project_id??``,hint_src_lang:e.hint_src_lang,variants:o(e.variants),origins:[{source:`user`,added_at:new Date(u).toISOString(),added_by:`you`}],created_at:new Date(u).toISOString(),updated_at:new Date(u).toISOString()})},async updateEntry(e){t=t.map(t=>t.id===e.entry_id?{...t,variants:o(e.variants),updated_at:new Date(u).toISOString()}:t)},async deleteEntry(e){t=t.filter(t=>t.id!==e)},async deleteEntries(e){let n=new Set(e);t=t.filter(e=>!n.has(e.id))},async annotateEntities(e){return{entries_updated:e.entry_ids.length,entities_added:e.patterns.length}},async lookup(e){let n=new Set(e.text.toLowerCase().split(/\W+/).filter(Boolean));return t.map(e=>{let t=(e.variants[e.hint_src_lang]??Object.values(e.variants)[0]).text.toLowerCase().split(/\W+/).filter(Boolean),r=t.filter(e=>n.has(e)).length;return{entry:e,score:t.length?r/Math.max(t.length,n.size):0}}).filter(t=>t.score>=e.min_score).sort((e,t)=>t.score-e.score).slice(0,e.max_results).map(t=>({...t,match_type:t.score===1?`exact`:`fuzzy`,entity_adaptations:e.entities.length?[{placeholder_id:`e1`,type:e.entities[0].type,stored_value:`Bob`,current_value:e.entities[0].text}]:[]}))},async getFacets(){return a(t)},async getFacetsFiltered(e,t,n,i){return a(r(e,t,n,i))},async resolvePoint(e){return e.unit?{profile:`kapimart-store`,collection:`store`}:null},openUnit(){}}}var l,u,d,f;function p(){return(p=e((()=>{l=36e5,u=Date.UTC(2026,9,14,12),d=[{id:`1`,project_id:`kapimart`,hint_src_lang:`en-US`,variants:{"en-US":{locale:`en-US`,text:`Proceed to checkout`,runs:[{text:`Proceed to checkout`}]},"fr-FR":{locale:`fr-FR`,text:`Passer à la caisse`,runs:[{text:`Passer à la caisse`}]},"de-DE":{locale:`de-DE`,text:`Zur Kasse gehen`,runs:[{text:`Zur Kasse gehen`}]}},origins:[{source:`file`,key:`store/checkout.json#checkout.cta`,reference:`a1b2c3d`,added_at:i(30),added_by:`kapi up`}],unit:`store/checkout.json:checkout.cta`,created_at:i(30),updated_at:i(4)},{id:`2`,project_id:`kapimart`,hint_src_lang:`en-US`,variants:{"en-US":{locale:`en-US`,text:`Click here to finish your checkout`,runs:[{text:`Click `},{pcOpen:{id:`1`,type:`fmt:bold`,data:`<b>`,equiv:`b`}},{text:`here`},{pcClose:{id:`1`,type:`fmt:bold`,data:`</b>`,equiv:`b`}},{text:` to finish your checkout`}]},"fr-FR":{locale:`fr-FR`,text:`Cliquez ici pour terminer votre commande`,runs:[{text:`Cliquez `},{pcOpen:{id:`1`,type:`fmt:bold`,data:`<b>`,equiv:`b`}},{text:`ici`},{pcClose:{id:`1`,type:`fmt:bold`,data:`</b>`,equiv:`b`}},{text:` pour terminer votre commande`}]}},origins:[{source:`user`,key:`docs/checkout.md#p3`,added_at:i(52),added_by:`asgeir`}],unit:`docs/checkout.md:p3`,point:{profile:`kapimart-store`,channel:`web`},note:`Bold marks the link text.`,created_at:i(52),updated_at:i(52)},{id:`3`,project_id:``,hint_src_lang:`en-US`,variants:{"en-US":{locale:`en-US`,text:`Bob added 3 items to the cart`,runs:[{ph:{id:`e1`,type:`entity:person`,data:`Bob`,equiv:`Bob`}},{text:` added 3 items to the cart`}]},"nb-NO":{locale:`nb-NO`,text:`Bob la 3 varer i handlekurven`,runs:[{ph:{id:`e1`,type:`entity:person`,data:`Bob`,equiv:`Bob`}},{text:` la 3 varer i handlekurven`}]}},entities:[{placeholder_id:`e1`,type:`entity:person`,values:{"en-US":{text:`Bob`,start:0,end:3},"nb-NO":{text:`Bob`,start:0,end:3}}}],origins:[{source:`import`,key:`legacy/store-nb.json`,added_at:i(400),added_by:`kapi memory import`,session_id:`imp-1`}],created_at:i(400),updated_at:i(400)}],f={id:`six`,project_id:`kapimart`,hint_src_lang:`en`,variants:Object.fromEntries([[`en`,`Recently viewed`],[`ar`,`شوهدت مؤخرًا`],[`de`,`Zuletzt angesehen`],[`fr`,`Consultés récemment`],[`ja`,`最近閲覧した商品`],[`nb`,`Nylig sett`]].map(([e,t])=>[e,{locale:e,text:t,runs:[{text:t}]}])),origins:[{source:`file`,key:`store/home.json#home.recent`,added_at:i(12),added_by:`kapi up`}],unit:`store/home.json:home.recent`,created_at:i(12),updated_at:i(12)}})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{n(),p(),m=t(),h={title:`Pages/MemoriesPage`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Content memory: one row per source wording, with its languages as pills,
beside a detail pane with each translation in full and where the entry came
from. With no store open, the named stores are listed one row each.`}}},decorators:[e=>(0,m.jsx)(`div`,{className:`h-screen bg-background`,children:(0,m.jsx)(e,{})})]},g={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(),count:d.length}})},_={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(),count:d.length,defaultSelected:`2`}})},v={..._,globals:{theme:`dark`}},y={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(),count:d.length,defaultSelected:`1`}})},b={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c([f,...d]),count:d.length+1,defaultSelected:f.id}})},x={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(),count:d.length,initial:{tokens:[{key:`codes`,value:`with`}]}}})},S={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(),count:d.length,initial:{marked:[`1`,`2`]}}})},C={...S,globals:{theme:`dark`}},w={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(),count:d.length,initial:{lookup:`Proceed to the checkout`}}})},T={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c(a(500)),count:500,defaultSelected:`m0`}})},E={render:()=>(0,m.jsx)(r,{store:{name:`Project Content Memory`,adapter:c([]),count:0}})},D={render:()=>(0,m.jsx)(r,{resources:[{name:`my-project`,path:`/stores/memory/my-project.db`,size:524288,modified:`2026-10-14T10:00:00Z`},{name:`shared-corpus`,path:`/stores/memory/shared-corpus.db`,size:2097152,modified:`2026-10-09T10:00:00Z`}]})},O={render:()=>(0,m.jsx)(r,{resources:[]})},k={render:()=>(0,m.jsx)(r,{resources:[],forceLoading:!0})},A=[`OpenStore`,`PairSelected`,`PairSelectedDark`,`ThreeLanguages`,`ManyLanguages`,`FilteredByFacet`,`EntriesMarked`,`EntriesMarkedDark`,`FindSimilar`,`ManyEntries`,`EmptyStore`,`WithResources`,`Empty`,`Loading`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(),
    count: SAMPLE_ENTRIES.length
  }} />
}`,...g.parameters?.docs?.source},description:{story:`The project's content memory, open, with nothing selected yet.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(),
    count: SAMPLE_ENTRIES.length,
    defaultSelected: "2"
  }} />
}`,..._.parameters?.docs?.source},description:{story:`An entry selected: inline formatting as chips, its provenance and unit.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...PairSelected,
  globals: {
    theme: "dark"
  }
}`,...v.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(),
    count: SAMPLE_ENTRIES.length,
    defaultSelected: "1"
  }} />
}`,...y.parameters?.docs?.source},description:{story:`An entry held in three languages: one row, and each translation in the detail.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter([SIX_LANGUAGES, ...SAMPLE_ENTRIES]),
    count: SAMPLE_ENTRIES.length + 1,
    defaultSelected: SIX_LANGUAGES.id
  }} />
}`,...b.parameters?.docs?.source},description:{story:`A wording in six languages: three pills on the row, the rest counted.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(),
    count: SAMPLE_ENTRIES.length,
    initial: {
      tokens: [{
        key: "codes",
        value: "with"
      }]
    }
  }} />
}`,...x.parameters?.docs?.source},description:{story:`Narrowed by a facet from the filter bar: the entries with inline codes.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(),
    count: SAMPLE_ENTRIES.length,
    initial: {
      marked: ["1", "2"]
    }
  }} />
}`,...S.parameters?.docs?.source},description:{story:`Two entries marked: the detail pane holds what can be done to both.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...EntriesMarked,
  globals: {
    theme: "dark"
  }
}`,...C.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(),
    count: SAMPLE_ENTRIES.length,
    initial: {
      lookup: "Proceed to the checkout"
    }
  }} />
}`,...w.parameters?.docs?.source},description:{story:`Find similar: the matches for a sentence, best first, with their scores.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter(manyEntries(500)),
    count: 500,
    defaultSelected: "m0"
  }} />
}`,...T.parameters?.docs?.source},description:{story:`A store of five hundred entries: the list reads a page at a time.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage store={{
    name: "Project Content Memory",
    adapter: makeMemoryAdapter([]),
    count: 0
  }} />
}`,...E.parameters?.docs?.source},description:{story:`An open store with nothing approved in it yet.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage resources={[{
    name: "my-project",
    path: "/stores/memory/my-project.db",
    size: 524288,
    modified: "2026-10-14T10:00:00Z"
  }, {
    name: "shared-corpus",
    path: "/stores/memory/shared-corpus.db",
    size: 2097152,
    modified: "2026-10-09T10:00:00Z"
  }]} />
}`,...D.parameters?.docs?.source},description:{story:`No store open: the named stores, one row each.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage resources={[]} />
}`,...O.parameters?.docs?.source},description:{story:`No named stores to open.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <MemoriesPage resources={[]} forceLoading />
}`,...k.parameters?.docs?.source},description:{story:`Loading the named stores.`,...k.parameters?.docs?.description}}}})))()}j();export{O as Empty,E as EmptyStore,S as EntriesMarked,C as EntriesMarkedDark,x as FilteredByFacet,w as FindSimilar,k as Loading,T as ManyEntries,b as ManyLanguages,g as OpenStore,_ as PairSelected,v as PairSelectedDark,y as ThreeLanguages,D as WithResources,A as __namedExportsOrder,h as default};