import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{A as r,C as i,D as a,E as o,F as s,I as c,L as l,M as u,N as d,O as f,P as p,S as m,T as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as w,j as T,k as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F,v as I,w as L,x as R,y as z}from"./storybook-decorator-DlyKau63.js";import{n as B,t as V}from"./dist-Dybg9H6R.js";var H,U,W;function G(){return(G=e((()=>{l(),s(),d(),T(),E(),a(),h(),B(),i(),R(),z(),t(),x(),H=n(),U=({workspaceName:e,role:t,joinURL:n})=>(0,H.jsxs)(L,{lang:`en`,dir:`ltr`,children:[(0,H.jsx)(r,{}),(0,H.jsxs)(m,{children:[`You've been invited to join `,e,` on Bowrain`]}),(0,H.jsx)(c,{style:C,children:(0,H.jsxs)(u,{style:A,children:[(0,H.jsxs)(v,{style:F,children:[(0,H.jsx)(I,{style:O,children:`Bowrain`}),(0,H.jsx)(I,{style:g,children:`The context graph for your content`})]}),(0,H.jsxs)(v,{style:_,children:[(0,H.jsx)(f,{as:`h1`,style:W,children:`You're invited`}),(0,H.jsxs)(I,{style:S,children:[`You've been invited to join `,(0,H.jsx)(`strong`,{children:e}),` on Bowrain as`,` `,(0,H.jsx)(`strong`,{children:t}),`.`]}),(0,H.jsx)(I,{style:S,children:`Accept the invitation to work with the workspace's shared context — its terms, its voice, and the rules your content goes by.`}),(0,H.jsx)(v,{style:w,children:(0,H.jsx)(p,{href:n,style:M,children:`Accept Invitation`})}),(0,H.jsx)(o,{style:b}),(0,H.jsx)(I,{style:N,children:`Button not working? Copy and paste this link into your browser:`}),(0,H.jsx)(V,{href:n,style:j,children:n})]}),(0,H.jsxs)(v,{style:y,children:[(0,H.jsx)(I,{style:D,children:`© Bowrain. All rights reserved.`}),(0,H.jsx)(I,{style:D,children:`If you didn't request this invitation, you can safely ignore this email.`})]})]})})]}),W={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},U.__docgenInfo={description:`Branded invitation email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`InviteEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},role:{required:!0,tsType:{name:`string`},description:``},joinURL:{required:!0,tsType:{name:`string`},description:``}}}})))()}var K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{G(),k(),K=n(),q={title:`Emails/Invite`,component:U,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,K.jsx)(P,{children:(0,K.jsx)(U,{...t})})]},J={args:{workspaceName:`Acme Translations`,role:`editor`,joinURL:`https://app.bowrain.com/invite/abc123`}},Y={args:{workspaceName:`Globex Corp`,role:`owner`,joinURL:`https://app.bowrain.com/invite/xyz789`}},X={args:{workspaceName:`Startup Inc`,role:`viewer`,joinURL:`https://app.bowrain.com/invite/viewer-456`}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    role: "editor",
    joinURL: "https://app.bowrain.com/invite/abc123"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    role: "owner",
    joinURL: "https://app.bowrain.com/invite/xyz789"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Startup Inc",
    role: "viewer",
    joinURL: "https://app.bowrain.com/invite/viewer-456"
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`OwnerInvite`,`ViewerInvite`]})))()}Q();export{J as Default,Y as OwnerInvite,X as ViewerInvite,Z as __namedExportsOrder,q as default};