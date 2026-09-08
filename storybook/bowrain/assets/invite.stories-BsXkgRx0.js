import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as ee,t as i}from"./runtime-CHF36ai7.js";import{A as a,C as o,D as s,E as c,F as l,I as u,L as d,M as f,N as p,O as m,P as h,S as g,T as _,_ as v,a as y,b,c as x,d as S,f as C,g as w,h as T,i as E,j as D,k as O,l as k,m as A,n as j,o as M,p as N,r as P,s as F,t as te,u as I,v as L,w as R,x as z,y as B}from"./storybook-decorator-DWezMf0i.js";import{n as V,t as H}from"./dist-Dybg9H6R.js";var U,W,G;function K(){return(K=e((()=>{ee(),d(),l(),p(),D(),O(),s(),_(),V(),o(),z(),B(),t(),C(),U=n(),W=({workspaceName:e,role:t,joinURL:n})=>(0,U.jsxs)(R,{lang:`en`,dir:`ltr`,children:[(0,U.jsx)(a,{}),(0,U.jsx)(g,{children:r(`fnUmMBYYUIR`,`You've been invited to join {workspaceName} on Bowrain`,{},{workspaceName:e})}),(0,U.jsx)(u,{style:T,children:(0,U.jsxs)(f,{style:M,children:[(0,U.jsxs)(b,{style:I,children:[(0,U.jsx)(L,{style:A,children:i(`iNTJXFZObfa`,`Bowrain`)}),(0,U.jsx)(L,{style:v,children:i(`clVnq5E37Ir`,`The context graph for your content`)})]}),(0,U.jsxs)(b,{style:y,children:[(0,U.jsx)(m,{as:`h1`,style:G,children:i(`kIWZl51zjmR`,`You're invited`)}),(0,U.jsx)(L,{style:w,children:r(`fdoIKpX8Wvs`,`You've been invited to join {=m0}{workspaceName}{/=m0} on Bowrain as {=m2}{role}{/=m2}.`,{"=m0":(0,U.jsx)(`strong`,{children:e}),"=m2":(0,U.jsx)(`strong`,{children:t})},{workspaceName:e,role:t})}),(0,U.jsx)(L,{style:w,children:i(`eLgGviPUbJn`,`Accept the invitation to work with the workspace's shared context: its terms, its voice, and the rules your content goes by.`)}),(0,U.jsx)(b,{style:E,children:(0,U.jsx)(h,{href:n,style:P,children:i(`e6WFA1kEk1I`,`Accept Invitation`)})}),(0,U.jsx)(c,{style:S}),(0,U.jsx)(L,{style:F,children:i(`e3nbQxeay21`,`Button not working? Copy and paste this link into your browser:`)}),(0,U.jsx)(H,{href:n,style:N,children:n})]}),(0,U.jsxs)(b,{style:x,children:[(0,U.jsx)(L,{style:k,children:i(`8GcVKMXn3T`,`© Bowrain. All rights reserved.`)}),(0,U.jsx)(L,{style:k,children:i(`4V8sJYLQR1N`,`If you didn't request this invitation, you can safely ignore this email.`)})]})]})})]}),G={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},W.__docgenInfo={description:`Branded invitation email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`InviteEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},role:{required:!0,tsType:{name:`string`},description:``},joinURL:{required:!0,tsType:{name:`string`},description:``}}}})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{K(),j(),q=n(),J={title:`Emails/Invite`,component:W,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,q.jsx)(te,{children:(0,q.jsx)(W,{...t})})]},Y={args:{workspaceName:`Acme Translations`,role:`editor`,joinURL:`https://app.bowrain.com/invite/abc123`}},X={args:{workspaceName:`Globex Corp`,role:`owner`,joinURL:`https://app.bowrain.com/invite/xyz789`}},Z={args:{workspaceName:`Startup Inc`,role:`viewer`,joinURL:`https://app.bowrain.com/invite/viewer-456`}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    role: "editor",
    joinURL: "https://app.bowrain.com/invite/abc123"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    role: "owner",
    joinURL: "https://app.bowrain.com/invite/xyz789"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Startup Inc",
    role: "viewer",
    joinURL: "https://app.bowrain.com/invite/viewer-456"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`OwnerInvite`,`ViewerInvite`]})))()}$();export{Y as Default,X as OwnerInvite,Z as ViewerInvite,Q as __namedExportsOrder,J as default};