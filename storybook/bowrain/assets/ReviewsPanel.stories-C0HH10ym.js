import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{Ct as n,St as r}from"./iframe-Bf1aXhm1.js";import{n as i,t as a}from"./decorators-DjvImy0g.js";import{n as o,t as s}from"./brandHubFixtures-331BG5DA.js";function c(e){return{id:e,email:`${e}@demo.test`,name:e,avatar_url:``}}function l(e){return a(void 0,{...s,getCurrentUser:async()=>c(e)})}var u,d,f,p,m,h,g,_;e((()=>{n(),o(),i(),u=t(),d=`2026-06-13T10:00:00Z`,f={id:`cs-1`,workspace_id:`ws-1`,name:`Retire ‘utilize’`,status:`in_review`,created_by:`sam`,created_at:d,updated_at:d,governed:!0,ops:[],reviews:[],pilots:[]},p=e=>(0,u.jsx)(`div`,{style:{maxWidth:360,padding:24},children:(0,u.jsx)(e,{})}),m={title:`Brand Hub/Experiments/ReviewsPanel`,component:r,tags:[`autodocs`]},h={args:{changeset:f},decorators:[l(`alex`),p]},g={args:{changeset:f},decorators:[l(`sam`),p]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    changeset
  },
  decorators: [withUser("alex"), pad]
}`,...h.parameters?.docs?.source},description:{story:`A reviewer can approve or reject.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    changeset
  },
  decorators: [withUser("sam"), pad]
}`,...g.parameters?.docs?.source},description:{story:`The author cannot approve their own experiment (separation of duties).`,...g.parameters?.docs?.description}}},_=[`AsReviewer`,`AsAuthor`]}))();export{g as AsAuthor,h as AsReviewer,_ as __namedExportsOrder,m as default};