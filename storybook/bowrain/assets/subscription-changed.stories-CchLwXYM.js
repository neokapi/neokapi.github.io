import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./react-BHOuiJCc.js";import{t as n}from"./jsx-runtime-CNPDJLAB.js";import{C as r,D as i,F as a,L as o,N as s,T as c,_ as l,a as u,c as d,d as f,f as p,g as m,h,i as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O,x as k,y as A,z as j}from"./storybook-decorator-DnN6uFmS.js";var M,N,P,F,I,L,R=e((()=>{O(),t(),p(),M=n(),N=({workspaceName:e,planName:t,status:n,billingURL:p})=>(0,M.jsxs)(i,{lang:`en`,dir:`ltr`,children:[(0,M.jsx)(s,{}),(0,M.jsxs)(r,{children:[`Your subscription has been updated for `,e]}),(0,M.jsx)(j,{style:h,children:(0,M.jsxs)(a,{style:S,children:[(0,M.jsxs)(k,{style:D,children:[(0,M.jsx)(A,{style:b,children:`Bowrain`}),(0,M.jsx)(A,{style:l,children:`Localization platform`})]}),(0,M.jsxs)(k,{style:u,children:[(0,M.jsx)(_,{as:`h1`,style:P,children:`Your subscription has been updated`}),(0,M.jsxs)(A,{style:m,children:[`The subscription for `,(0,M.jsx)(`strong`,{children:e}),` has been updated. Here are the details:`]}),(0,M.jsxs)(k,{style:F,children:[(0,M.jsx)(A,{style:I,children:`Plan`}),(0,M.jsx)(A,{style:L,children:t}),(0,M.jsx)(A,{style:I,children:`Status`}),(0,M.jsx)(A,{style:L,children:n})]}),(0,M.jsx)(A,{style:m,children:`You can view your full billing details and manage your subscription from the billing page.`}),(0,M.jsx)(k,{style:g,children:(0,M.jsx)(o,{href:p,style:w,children:`View Billing`})}),(0,M.jsx)(v,{style:f}),(0,M.jsx)(A,{style:T,children:`Button not working? Copy and paste this link into your browser:`}),(0,M.jsx)(c,{href:p,style:C,children:p})]}),(0,M.jsxs)(k,{style:d,children:[(0,M.jsx)(A,{style:y,children:`© Bowrain. All rights reserved.`}),(0,M.jsx)(A,{style:y,children:`You received this email because you are an admin of this workspace.`})]})]})})]}),P={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},F={backgroundColor:`#f8fafc`,borderRadius:`8px`,border:`1px solid #e2e8f0`,padding:`20px 24px`,margin:`0 0 16px`},I={color:`#64748b`,fontSize:`13px`,fontWeight:`600`,margin:`0 0 2px`,textTransform:`uppercase`,letterSpacing:`0.5px`},L={color:`#0f172a`,fontSize:`16px`,fontWeight:`600`,margin:`0 0 12px`},N.__docgenInfo={description:`Branded subscription-changed email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`SubscriptionChangedEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},planName:{required:!0,tsType:{name:`string`},description:``},status:{required:!0,tsType:{name:`string`},description:``},billingURL:{required:!0,tsType:{name:`string`},description:``}}}})),z,B,V,H,U,W,G,K;e((()=>{R(),x(),z=n(),B={title:`Emails/Subscription Changed`,component:N,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,z.jsx)(E,{children:(0,z.jsx)(N,{...t})})]},V={args:{workspaceName:`Acme Translations`,planName:`Pro`,status:`Active`,billingURL:`https://app.bowrain.com/acme/settings/billing`}},H={args:{workspaceName:`Globex Corp`,planName:`Team`,status:`Active`,billingURL:`https://app.bowrain.com/globex/settings/billing`}},U={args:{workspaceName:`Startup Inc`,planName:`Free`,status:`Active`,billingURL:`https://app.bowrain.com/startup/settings/billing`}},W={args:{workspaceName:`New Workspace`,planName:`Pro (Trial)`,status:`Trialing`,billingURL:`https://app.bowrain.com/new-workspace/settings/billing`}},G={args:{workspaceName:`Old Project`,planName:`Pro`,status:`Canceled`,billingURL:`https://app.bowrain.com/old-project/settings/billing`}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    planName: "Pro",
    status: "Active",
    billingURL: "https://app.bowrain.com/acme/settings/billing"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    planName: "Team",
    status: "Active",
    billingURL: "https://app.bowrain.com/globex/settings/billing"
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Startup Inc",
    planName: "Free",
    status: "Active",
    billingURL: "https://app.bowrain.com/startup/settings/billing"
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "New Workspace",
    planName: "Pro (Trial)",
    status: "Trialing",
    billingURL: "https://app.bowrain.com/new-workspace/settings/billing"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Old Project",
    planName: "Pro",
    status: "Canceled",
    billingURL: "https://app.bowrain.com/old-project/settings/billing"
  }
}`,...G.parameters?.docs?.source}}},K=[`UpgradedToPro`,`UpgradedToTeam`,`DowngradedToFree`,`TrialStarted`,`Canceled`]}))();export{G as Canceled,U as DowngradedToFree,W as TrialStarted,V as UpgradedToPro,H as UpgradedToTeam,K as __namedExportsOrder,B as default};