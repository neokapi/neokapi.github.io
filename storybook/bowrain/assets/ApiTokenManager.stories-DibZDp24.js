import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{Cn as n,Sn as r}from"./iframe-BKc7CYuR.js";import{n as i,r as a,t as o}from"./decorators-BC4u0g3b.js";import{E as s,o as c,w as l}from"./fixtures-LWDNhg3K.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),c(),u=t(),d=[{id:`tok-1`,user_id:`u-1`,workspace_id:`ws-1`,name:`CI/CD Pipeline`,agent_name:`kapi-ci`,token_prefix:`bwt_ab12`,scopes:`["*"]`,last_used_at:new Date(Date.now()-864e5).toISOString(),expires_at:new Date(Date.now()+2592e6).toISOString(),created_at:new Date(Date.now()-6048e5).toISOString()},{id:`tok-2`,user_id:`u-1`,workspace_id:`ws-1`,name:`Translation Bot`,token_prefix:`bwt_cd34`,scopes:`["translate:fr,de"]`,last_used_at:null,expires_at:new Date(Date.now()+7776e6).toISOString(),created_at:new Date(Date.now()-1728e5).toISOString()},{id:`tok-3`,user_id:`u-1`,workspace_id:`ws-1`,name:`Review Service`,token_prefix:`bwt_ef56`,scopes:`["review"]`,last_used_at:new Date(Date.now()-36e5).toISOString(),expires_at:null,created_at:new Date(Date.now()-12096e5).toISOString()},{id:`tok-4`,user_id:`u-1`,workspace_id:`ws-1`,name:`Read-Only Monitor`,token_prefix:`bwt_gh78`,scopes:`["read"]`,last_used_at:null,expires_at:new Date(Date.now()-864e5).toISOString(),created_at:new Date(Date.now()-5184e6).toISOString()}],f=o(void 0,{listApiTokens:async()=>d}),p={title:`Workspace/Access/ApiTokenManager`,component:r,tags:[`autodocs`],decorators:[e=>(0,u.jsx)(`div`,{style:{maxWidth:800,padding:24},children:(0,u.jsx)(e,{})})]},m={decorators:[a],args:{workspace:l}},h={decorators:[f],args:{workspace:l}},g={decorators:[a],args:{workspace:s}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [withProviders],
  args: {
    workspace: sampleWorkspace
  }
}`,...m.parameters?.docs?.source},description:{story:`Owner view with empty token list.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [withTokens],
  args: {
    workspace: sampleWorkspace
  }
}`,...h.parameters?.docs?.source},description:{story:`Owner view with tokens showing various scopes.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [withProviders],
  args: {
    workspace: viewerWorkspace
  }
}`,...g.parameters?.docs?.source},description:{story:`Viewer — component returns null since role is not owner/admin.`,...g.parameters?.docs?.description}}},_=[`OwnerView`,`WithTokens`,`ViewerHidden`]})))()}v();export{m as OwnerView,g as ViewerHidden,h as WithTokens,_ as __namedExportsOrder,p as default};