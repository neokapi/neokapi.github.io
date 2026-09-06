import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{$t as t,en as n}from"./iframe-DI11mCOH.js";import{n as r,t as i}from"./decorators--pVWMD6K.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),r(),a=[{id:`g1`,workspace_id:`ws-1`,name:`Reviewers`,description:``,created_at:`2026-01-01T00:00:00Z`,member_count:3},{id:`g2`,workspace_id:`ws-1`,name:`Nordic marketing`,description:``,created_at:`2026-01-01T00:00:00Z`,member_count:5}],o=[{id:`d1`,workspace_id:`ws-1`,subject_type:`role`,subject_id:`viewer`,project_id:``,denied_perms:4,reason:``,created_at:`2026-01-01T00:00:00Z`},{id:`d2`,workspace_id:`ws-1`,subject_type:`group`,subject_id:`g2`,project_id:`proj-1`,denied_perms:32,reason:``,created_at:`2026-01-01T00:00:00Z`}],s=i(void 0,{getSoDMode:async()=>({mode:`block`}),listGroups:async()=>a,listDenyRules:async()=>o,listRoleOverrides:async()=>({member:[`review`,`translate`],viewer:[`read`]})}),c={title:`Pages/GovernanceSettings`,component:t,tags:[`autodocs`],parameters:{docs:{description:{component:`The workspace's governance: who may decide (separation of duties, role overrides, deny rules) and the teams decisions are granted to. Where content sits and what governs it there are project settings.`}}}},l={decorators:[s]},u={name:`Nothing set (defaults)`,decorators:[i()]},d={globals:{theme:`dark`},decorators:[s]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  decorators: [populated]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Nothing set (defaults)",
  decorators: [createProvidersDecorator()]
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  decorators: [populated]
}`,...d.parameters?.docs?.source}}},f=[`Populated`,`Empty`,`Dark`]})))()}p();export{d as Dark,u as Empty,l as Populated,f as __namedExportsOrder,c as default};