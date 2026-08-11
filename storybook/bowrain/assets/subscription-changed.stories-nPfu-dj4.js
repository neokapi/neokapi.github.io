import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{A as r,C as i,D as a,E as o,F as s,I as c,L as l,M as u,N as d,O as ee,P as f,S as p,T as m,_ as h,a as g,b as _,c as v,d as y,f as b,g as x,h as S,i as te,j as ne,k as C,l as w,m as T,n as E,o as D,p as O,r as k,s as A,t as j,u as M,v as N,w as P,x as F,y as I}from"./storybook-decorator-DlyKau63.js";import{n as L,t as re}from"./dist-Dybg9H6R.js";var R,z,B,V,H,U;function W(){return(W=e((()=>{l(),s(),d(),ne(),C(),a(),m(),L(),i(),F(),I(),t(),b(),R=n(),z=({workspaceName:e,planName:t,status:n,billingURL:i})=>(0,R.jsxs)(P,{lang:`en`,dir:`ltr`,children:[(0,R.jsx)(r,{}),(0,R.jsxs)(p,{children:[`Your subscription has been updated for `,e]}),(0,R.jsx)(c,{style:S,children:(0,R.jsxs)(u,{style:D,children:[(0,R.jsxs)(_,{style:M,children:[(0,R.jsx)(N,{style:T,children:`Bowrain`}),(0,R.jsx)(N,{style:h,children:`The context graph for your content`})]}),(0,R.jsxs)(_,{style:g,children:[(0,R.jsx)(ee,{as:`h1`,style:B,children:`Your subscription has been updated`}),(0,R.jsxs)(N,{style:x,children:[`The subscription for `,(0,R.jsx)(`strong`,{children:e}),` has been updated. Here are the details:`]}),(0,R.jsxs)(_,{style:V,children:[(0,R.jsx)(N,{style:H,children:`Plan`}),(0,R.jsx)(N,{style:U,children:t}),(0,R.jsx)(N,{style:H,children:`Status`}),(0,R.jsx)(N,{style:U,children:n})]}),(0,R.jsx)(N,{style:x,children:`You can view your full billing details and manage your subscription from the billing page.`}),(0,R.jsx)(_,{style:te,children:(0,R.jsx)(f,{href:i,style:k,children:`View Billing`})}),(0,R.jsx)(o,{style:y}),(0,R.jsx)(N,{style:A,children:`Button not working? Copy and paste this link into your browser:`}),(0,R.jsx)(re,{href:i,style:O,children:i})]}),(0,R.jsxs)(_,{style:v,children:[(0,R.jsx)(N,{style:w,children:`© Bowrain. All rights reserved.`}),(0,R.jsx)(N,{style:w,children:`You received this email because you are an admin of this workspace.`})]})]})})]}),B={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},V={backgroundColor:`#f8fafc`,borderRadius:`8px`,border:`1px solid #e2e8f0`,padding:`20px 24px`,margin:`0 0 16px`},H={color:`#64748b`,fontSize:`13px`,fontWeight:`600`,margin:`0 0 2px`,textTransform:`uppercase`,letterSpacing:`0.5px`},U={color:`#0f172a`,fontSize:`16px`,fontWeight:`600`,margin:`0 0 12px`},z.__docgenInfo={description:`Branded subscription-changed email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`SubscriptionChangedEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},planName:{required:!0,tsType:{name:`string`},description:``},status:{required:!0,tsType:{name:`string`},description:``},billingURL:{required:!0,tsType:{name:`string`},description:``}}}})))()}var G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{W(),E(),G=n(),K={title:`Emails/Subscription Changed`,component:z,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,G.jsx)(j,{children:(0,G.jsx)(z,{...t})})]},q={args:{workspaceName:`Acme Translations`,planName:`Pro`,status:`Active`,billingURL:`https://app.bowrain.com/acme/settings/billing`}},J={args:{workspaceName:`Globex Corp`,planName:`Team`,status:`Active`,billingURL:`https://app.bowrain.com/globex/settings/billing`}},Y={args:{workspaceName:`Startup Inc`,planName:`Free`,status:`Active`,billingURL:`https://app.bowrain.com/startup/settings/billing`}},X={args:{workspaceName:`New Workspace`,planName:`Pro (Trial)`,status:`Trialing`,billingURL:`https://app.bowrain.com/new-workspace/settings/billing`}},Z={args:{workspaceName:`Old Project`,planName:`Pro`,status:`Canceled`,billingURL:`https://app.bowrain.com/old-project/settings/billing`}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    planName: "Pro",
    status: "Active",
    billingURL: "https://app.bowrain.com/acme/settings/billing"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    planName: "Team",
    status: "Active",
    billingURL: "https://app.bowrain.com/globex/settings/billing"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Startup Inc",
    planName: "Free",
    status: "Active",
    billingURL: "https://app.bowrain.com/startup/settings/billing"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "New Workspace",
    planName: "Pro (Trial)",
    status: "Trialing",
    billingURL: "https://app.bowrain.com/new-workspace/settings/billing"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Old Project",
    planName: "Pro",
    status: "Canceled",
    billingURL: "https://app.bowrain.com/old-project/settings/billing"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`UpgradedToPro`,`UpgradedToTeam`,`DowngradedToFree`,`TrialStarted`,`Canceled`]})))()}$();export{Z as Canceled,Y as DowngradedToFree,X as TrialStarted,q as UpgradedToPro,J as UpgradedToTeam,Q as __namedExportsOrder,K as default};