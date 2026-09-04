import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{An as n,jn as r}from"./iframe-CXFJWPMA.js";import{R as i,u as a}from"./fixtures-CwEJAmTf.js";import{n as o,t as s}from"./decorators-BxBEb2Tp.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),o(),a(),c=t(),l=[{id:`b1`,source:`Welcome to your dashboard`,source_coded:`Welcome to your dashboard`,source_spans:[],targets:{"fr-FR":{text:`Bienvenue sur votre tableau de bord`,status:`translated`}},translatable:!0,has_spans:!1,properties:{}},{id:`b2`,source:`Save changes`,source_coded:`Save changes`,source_spans:[],targets:{"fr-FR":{text:`Enregistrer les modifications`,status:`translated`}},translatable:!0,has_spans:!1,properties:{}},{id:`b3`,source:`Delete account`,source_coded:`Delete account`,source_spans:[],targets:{"fr-FR":{text:`Supprimer le compte`,status:`reviewed`},"de-DE":{text:`Konto löschen`,status:`translated`}},translatable:!0,has_spans:!1,properties:{}}],u=e=>({locale:`fr-FR`,translated_blocks:2,total_blocks:3,translated_words:0,total_words:0,percentage:66,approved_blocks:0,failing_checks:0,ship_state:`pending`,compliance_rate:.82,compliance_basis:`voice+checks`,compliant_blocks:2,...e}),d={locale_stats:[u({}),u({locale:`de-DE`,translated_blocks:1,approved_blocks:0})],item_stats:[{item_name:`messages.json`,item_id:`itm-msg1`,format:`json`,collection_id:`coll-default`,block_count:3,word_count:0,locales:[u({}),u({locale:`de-DE`,translated_blocks:1,approved_blocks:0})]}],collection_stats:[],total_blocks:3,translatable_blocks:3,total_source_words:0},f={locale_stats:[u({translated_blocks:2,approved_blocks:2,ship_state:`governed`})],item_stats:[{item_name:`messages.json`,item_id:`itm-msg1`,format:`json`,collection_id:`coll-default`,block_count:3,word_count:0,locales:[u({translated_blocks:2,approved_blocks:2,ship_state:`governed`})]}],collection_stats:[],total_blocks:3,translatable_blocks:3,total_source_words:0},p={b1:{term_compliance:`compliant`,voice_score:62,voice_bar:90},b2:{term_compliance:`compliant`,voice_score:94,voice_bar:90}},m=e=>(0,c.jsx)(`div`,{className:`flex h-[640px] flex-col overflow-hidden rounded-lg border border-border bg-background`,children:e()}),h={title:`Review/ReviewSession`,component:n,parameters:{layout:`fullscreen`},decorators:[m,s(l,{blockEvidence:p})]},g={args:{project:i,dashboardStats:d,stream:`main`}},_={args:{project:i,dashboardStats:f,stream:`main`}},v={args:{project:i,dashboardStats:d,stream:`main`},decorators:[s(l,{getReviewContext:async(e,t,n,r,i)=>({block_id:r,item_name:n,locale:i,terms:[],collection_id:``,notes:[],voice_findings:[]})})]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    dashboardStats: pendingStats,
    stream: "main"
  }
}`,...g.parameters?.docs?.source},description:{story:`The queue + focused reviewer, with the "Approve all passing" fast path and
the five layers of context the server resolved for the unit under the cursor:
the point rail, the neighbours, the anchored findings, the content-memory
match, and the provenance.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    dashboardStats: clearStats,
    stream: "main"
  }
}`,..._.parameters?.docs?.source},description:{story:`All-clear: nothing pending review.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    dashboardStats: pendingStats,
    stream: "main"
  },
  decorators: [createProvidersDecorator(blocks, {
    getReviewContext: async (_ws, _projectId, itemName, blockId, targetLocale) => ({
      block_id: blockId,
      item_name: itemName,
      locale: targetLocale,
      terms: [],
      collection_id: "",
      notes: [],
      voice_findings: []
    })
  })]
}`,...v.parameters?.docs?.source},description:{story:`The same queue for a unit nothing governs: no profile bound, no terms
matched, no neighbours, no content-memory match and no decision recorded.
The layers each name their own emptiness, so an ungoverned project reads as
ungoverned rather than as a surface that failed to load.`,...v.parameters?.docs?.description}}},y=[`Default`,`AllClear`,`NothingResolved`]})))()}b();export{_ as AllClear,g as Default,v as NothingResolved,y as __namedExportsOrder,h as default};