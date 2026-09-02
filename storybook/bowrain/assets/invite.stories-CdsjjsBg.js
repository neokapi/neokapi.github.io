import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i,t as a}from"./runtime-Bvanz_ea.js";import{A as o,C as s,D as c,E as l,F as u,I as d,L as f,M as p,N as m,O as h,P as g,S as _,T as v,_ as y,a as ee,b,c as x,d as S,f as C,g as w,h as T,i as E,j as D,k as O,l as k,m as A,n as j,o as M,p as N,r as P,s as te,t as F,u as I,v as L,w as R,x as z,y as B}from"./storybook-decorator-DO4WJZES.js";import{n as V,t as H}from"./dist-Dybg9H6R.js";var U,W,G;function K(){return(K=e((()=>{i(),f(),u(),m(),D(),O(),c(),v(),V(),s(),z(),B(),t(),C(),U=n(),W=({workspaceName:e,role:t,joinURL:n})=>(0,U.jsxs)(R,{lang:`en`,dir:`ltr`,children:[(0,U.jsx)(o,{}),(0,U.jsx)(_,{children:a(`fnUmMBYYUIR`,`You've been invited to join ${e} on Bowrain`,{workspaceName:e})}),(0,U.jsx)(d,{style:T,children:(0,U.jsxs)(p,{style:M,children:[(0,U.jsxs)(b,{style:I,children:[(0,U.jsx)(L,{style:A,children:a(`iNTJXFZObfa`,`Bowrain`)}),(0,U.jsx)(L,{style:y,children:a(`clVnq5E37Ir`,`The context graph for your content`)})]}),(0,U.jsxs)(b,{style:ee,children:[(0,U.jsx)(h,{as:`h1`,style:G,children:a(`kIWZl51zjmR`,`You're invited`)}),(0,U.jsx)(L,{style:w,children:r(`8srUxRew9L`,`You've been invited to join {=m0}{workspaceName}{/=m0} on Bowrain as{value} {=m3}{role}{/=m3}.`,{"=m0":(0,U.jsx)(`strong`,{children:e}),"=m3":(0,U.jsx)(`strong`,{children:t})},{workspaceName:e,value:` `,role:t})}),(0,U.jsx)(L,{style:w,children:a(`k1xtiUw4L0P`,`Accept the invitation to work with the workspace's shared context — its terms, its voice, and the rules your content goes by.`)}),(0,U.jsx)(b,{style:E,children:(0,U.jsx)(g,{href:n,style:P,children:a(`e6WFA1kEk1I`,`Accept Invitation`)})}),(0,U.jsx)(l,{style:S}),(0,U.jsx)(L,{style:te,children:a(`e3nbQxeay21`,`Button not working? Copy and paste this link into your browser:`)}),(0,U.jsx)(H,{href:n,style:N,children:n})]}),(0,U.jsxs)(b,{style:x,children:[(0,U.jsx)(L,{style:k,children:a(`8GcVKMXn3T`,`© Bowrain. All rights reserved.`)}),(0,U.jsx)(L,{style:k,children:a(`4V8sJYLQR1N`,`If you didn't request this invitation, you can safely ignore this email.`)})]})]})})]}),G={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},W.__docgenInfo={description:`Branded invitation email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`InviteEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},role:{required:!0,tsType:{name:`string`},description:``},joinURL:{required:!0,tsType:{name:`string`},description:``}}}})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{K(),j(),q=n(),J={title:`Emails/Invite`,component:W,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,q.jsx)(F,{children:(0,q.jsx)(W,{...t})})]},Y={args:{workspaceName:`Acme Translations`,role:`editor`,joinURL:`https://app.bowrain.com/invite/abc123`}},X={args:{workspaceName:`Globex Corp`,role:`owner`,joinURL:`https://app.bowrain.com/invite/xyz789`}},Z={args:{workspaceName:`Startup Inc`,role:`viewer`,joinURL:`https://app.bowrain.com/invite/viewer-456`}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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