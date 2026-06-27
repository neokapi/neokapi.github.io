import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{_t as n,gt as r}from"./iframe-DThO7g4v.js";import{n as i,t as a}from"./decorators-DjvImy0g.js";import{n as o,t as s}from"./brandHubFixtures-331BG5DA.js";function c(e){return{id:e,email:`${e}@demo.test`,name:e,avatar_url:``}}function l(e,t=`reviewer`){return a(void 0,{...s,getChangeset:async()=>e,getChangesetBlastRadius:async()=>h,getCurrentUser:async()=>c(t)})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),o(),i(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=`2026-06-13T10:00:00Z`,p=`2026-06-01T09:00:00Z`,m=[{workspace_id:`ws-1`,changeset_id:`cs-1`,seq:1,op:`term.status`,payload:{concept_id:`c-checkout`,locale:`en-US`,text:`utilize`,from:`approved`,to:`forbidden`},base_rev:4,created_by:`sam`,created_at:f},{workspace_id:`ws-1`,changeset_id:`cs-1`,seq:2,op:`term.status`,payload:{concept_id:`c-checkout`,locale:`en-US`,text:`use`,from:`approved`,to:`preferred`},base_rev:4,created_by:`sam`,created_at:f},{workspace_id:`ws-1`,changeset_id:`cs-1`,seq:3,op:`relation.add`,payload:{relation:{id:`r-new`,source_id:`c-checkout`,target_id:`c-pay`,relation_type:`USE_INSTEAD`,created_at:f}},base_rev:4,created_by:`sam`,created_at:f}],h={total_blocks:1280,affected_blocks:34,new_violations:12,resolved:7,words:210,projects:[{project_id:`p-web`,project_name:`Marketing Website`,affected_blocks:22,new_violations:8,resolved:5,words:140,collections:[{collection_id:`col-1`,collection_name:`Pages`,affected_blocks:22,new_violations:8,resolved:5,words:140,locales:[{stream:`main`,locale:`de-DE`,affected_blocks:14,new_violations:5,resolved:3,words:90},{stream:`main`,locale:`fr-FR`,affected_blocks:8,new_violations:3,resolved:2,words:50}]}]},{project_id:`p-app`,project_name:`Mobile App`,affected_blocks:12,new_violations:4,resolved:2,words:70,collections:[{collection_id:`col-2`,collection_name:`Strings`,affected_blocks:12,new_violations:4,resolved:2,words:70,locales:[{stream:`main`,locale:`de-DE`,affected_blocks:7,new_violations:3,resolved:1,words:40},{stream:`main`,locale:`fr-FR`,affected_blocks:5,new_violations:1,resolved:1,words:30}]}]}],samples:[{project_id:`p-web`,stream:`main`,collection_id:`col-1`,collection_name:`Pages`,locale:`de-DE`,item_name:`pricing.de.json`,block_id:`b-1`,text:`Wir utilize modernste Technologie für Ihren Checkout.`,new_violations:1},{project_id:`p-app`,stream:`main`,collection_id:`col-2`,collection_name:`Strings`,locale:`fr-FR`,item_name:`settings.fr.json`,block_id:`b-2`,text:`Utilisez le paiement rapide à la caisse.`,resolved:1}]},g={id:`cs-1`,workspace_id:`ws-1`,name:`Retire ‘utilize’ in favour of ‘use’`,description:`Ban the verbose verb, promote the plain one, and link the concepts.`,status:`in_review`,created_by:`sam`,created_at:p,updated_at:f,submitted_at:f,governed:!0,ops:m,reviews:[],pilots:[{workspace_id:`ws-1`,changeset_id:`cs-1`,project_id:`p-web`,stream:`main`,created_by:`sam`,created_at:f}]},_=e=>(0,u.jsx)(`div`,{style:{padding:24},children:(0,u.jsx)(e,{})}),v={title:`Brand Hub/Experiments/ExperimentDetailView`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{changesetId:`cs-1`,onBack:d()}},y={decorators:[l({...g,status:`draft`,reviews:[],pilots:[]}),_]},b={decorators:[l({...g,status:`in_review`})]},x={decorators:[l({...g,status:`in_review`},`sam`)]},S={decorators:[l({...g,status:`approved`,reviews:[{workspace_id:`ws-1`,changeset_id:`cs-1`,reviewer:`alex`,verdict:`approve`,comment:`Matches the brand book.`,created_at:f}]})]},C={decorators:[l({...g,status:`merged`,merged_at:f,merged_by:`alex`,pilots:[],reviews:[{workspace_id:`ws-1`,changeset_id:`cs-1`,reviewer:`alex`,verdict:`approve`,created_at:f}]})]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [decoratorFor({
    ...base,
    status: "draft",
    reviews: [],
    pilots: []
  }), pad]
}`,...y.parameters?.docs?.source},description:{story:`A draft: ops are editable, the blast radius is measured, ready to submit.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [decoratorFor({
    ...base,
    status: "in_review"
  })]
}`,...b.parameters?.docs?.source},description:{story:`In review, awaiting a verdict from someone other than the author.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [decoratorFor({
    ...base,
    status: "in_review"
  }, "sam")]
}`,...x.parameters?.docs?.source},description:{story:`The author viewing their own in-review change-set: approval is blocked (SoD).`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [decoratorFor({
    ...base,
    status: "approved",
    reviews: [{
      workspace_id: "ws-1",
      changeset_id: "cs-1",
      reviewer: "alex",
      verdict: "approve",
      comment: "Matches the brand book.",
      created_at: now
    }]
  })]
}`,...S.parameters?.docs?.source},description:{story:`Approved with a second person's verdict — ready to merge.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [decoratorFor({
    ...base,
    status: "merged",
    merged_at: now,
    merged_by: "alex",
    pilots: [],
    reviews: [{
      workspace_id: "ws-1",
      changeset_id: "cs-1",
      reviewer: "alex",
      verdict: "approve",
      created_at: now
    }]
  })]
}`,...C.parameters?.docs?.source},description:{story:`Merged — terminal, applied to the live graph.`,...C.parameters?.docs?.description}}},w=[`Draft`,`InReview`,`InReviewAsAuthor`,`Approved`,`Merged`]}))();export{S as Approved,y as Draft,b as InReview,x as InReviewAsAuthor,C as Merged,w as __namedExportsOrder,v as default};