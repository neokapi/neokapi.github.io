import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ReviewsPanel-B7DQVnQc.js";import{n as i,t as a}from"./decorators-CVDy9O9j.js";import{n as o,t as s}from"./voiceHubFixtures-DwWu2-da.js";function c(e){return{id:e,email:`${e}@demo.test`,name:e,avatar_url:``}}function l(e){return a(void 0,{...o,getCurrentUser:async()=>c(e)})}var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),s(),i(),u=t(),d=`2026-06-13T10:00:00Z`,f={id:`cs-1`,workspace_id:`ws-1`,name:`Retire ‘utilize’`,status:`in_review`,created_by:`sam`,created_at:d,updated_at:d,governed:!0,ops:[],reviews:[],pilots:[],solo_review:!1},p=e=>(0,u.jsx)(`div`,{style:{maxWidth:360,padding:24},children:(0,u.jsx)(e,{})}),m={title:`Context/Experiments/ReviewsPanel`,component:r,tags:[`autodocs`]},h={args:{changeset:f},decorators:[l(`alex`),p]},g={args:{changeset:f},decorators:[l(`sam`),p]},_={args:{changeset:{...f,solo_review:!0}},decorators:[l(`sam`),p]},v={args:{changeset:{...f,status:`approved`,reviews:[{workspace_id:`ws-1`,changeset_id:`cs-1`,reviewer:`sam`,verdict:`approve`,comment:`No one else in the workspace to ask.`,basis:`solo_owner`,created_at:d}]}},decorators:[l(`sam`),p]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    changeset
  },
  decorators: [withUser("alex"), pad]
}`,...h.parameters?.docs?.source},description:{story:`A reviewer can approve or reject.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    changeset
  },
  decorators: [withUser("sam"), pad]
}`,...g.parameters?.docs?.source},description:{story:`The author cannot approve their own experiment (separation of duties).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    changeset: {
      ...changeset,
      solo_review: true
    }
  },
  decorators: [withUser("sam"), pad]
}`,..._.parameters?.docs?.source},description:{story:`The author is the workspace's only reviewer, so the server will accept their
verdict — and record that nobody else read it.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    changeset: {
      ...changeset,
      status: "approved",
      reviews: [{
        workspace_id: "ws-1",
        changeset_id: "cs-1",
        reviewer: "sam",
        verdict: "approve",
        comment: "No one else in the workspace to ask.",
        basis: "solo_owner",
        created_at: now
      }]
    }
  },
  decorators: [withUser("sam"), pad]
}`,...v.parameters?.docs?.source},description:{story:`A verdict already recorded under the override says so in the thread.`,...v.parameters?.docs?.description}}},y=[`AsReviewer`,`AsAuthor`,`AsSoleReviewer`,`WithSoloApproval`]})))()}b();export{g as AsAuthor,h as AsReviewer,_ as AsSoleReviewer,v as WithSoloApproval,y as __namedExportsOrder,m as default};