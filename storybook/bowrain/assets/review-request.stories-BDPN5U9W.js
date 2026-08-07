import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{C as r,D as i,F as a,L as o,N as s,T as c,_ as l,a as u,c as d,d as f,f as p,g as m,h,i as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O,x as k,y as A,z as j}from"./storybook-decorator-Bibqrvbs.js";var M,N,P,F,I,L=e((()=>{O(),t(),p(),M=n(),N=({workspaceName:e,changeSetName:t,authorName:n,changeCount:p,reviewURL:x})=>(0,M.jsxs)(i,{lang:`en`,dir:`ltr`,children:[(0,M.jsx)(s,{}),(0,M.jsx)(r,{children:`A change to your workspace terms is waiting for review`}),(0,M.jsx)(j,{style:h,children:(0,M.jsxs)(a,{style:S,children:[(0,M.jsxs)(k,{style:D,children:[(0,M.jsx)(A,{style:b,children:`Bowrain`}),(0,M.jsx)(A,{style:l,children:`The context graph for your content`})]}),(0,M.jsxs)(k,{style:u,children:[(0,M.jsx)(k,{style:F,children:(0,M.jsx)(A,{style:I,children:`Review`})}),(0,M.jsx)(_,{as:`h1`,style:P,children:`A change is waiting for your review`}),(0,M.jsxs)(A,{style:m,children:[(0,M.jsx)(`strong`,{children:n}),` proposed `,(0,M.jsx)(`strong`,{children:t}),` in`,` `,(0,M.jsx)(`strong`,{children:e}),`.`]}),(0,M.jsxs)(A,{style:m,children:[`It carries `,(0,M.jsx)(`strong`,{children:p}),` to the workspace terms. Governed changes take effect only once someone other than their author approves them, so this one is waiting on you.`]}),(0,M.jsx)(k,{style:g,children:(0,M.jsx)(o,{href:x,style:w,children:`Review the change`})}),(0,M.jsx)(v,{style:f}),(0,M.jsx)(A,{style:T,children:`Button not working? Copy and paste this link into your browser:`}),(0,M.jsx)(c,{href:x,style:C,children:x})]}),(0,M.jsxs)(k,{style:d,children:[(0,M.jsx)(A,{style:y,children:`© Bowrain. All rights reserved.`}),(0,M.jsx)(A,{style:y,children:`You received this because you can approve changes in this workspace. Turn it off in notification preferences.`})]})]})})]}),P={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},F={marginBottom:`16px`},I={display:`inline-block`,backgroundColor:`#f1f5f9`,color:`#475569`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},N.__docgenInfo={description:`Branded review-request email for Bowrain.

Sent when a governed change-set is submitted for review, to every workspace
member who may approve it. The change-set's author is never a recipient:
separation of duties bars them from reviewing their own work, so a summons
that reached only them would be a summons to nobody.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML doubles as a
Go template. Every sentence stays static English JSX so the i18n pipeline can
extract it; only names, counts, and URLs arrive as tokens.`,methods:[],displayName:`ReviewRequestEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:`Human-readable workspace name.`},changeSetName:{required:!0,tsType:{name:`string`},description:`The change-set's name, as its author titled it.`},authorName:{required:!0,tsType:{name:`string`},description:`Display name of the person who proposed the change-set.`},changeCount:{required:!0,tsType:{name:`string`},description:`How many changes the change-set carries, already formatted.`},reviewURL:{required:!0,tsType:{name:`string`},description:`Deep link to the change-set's review page.`}}}})),R,z,B,V,H;e((()=>{L(),x(),R=n(),z={title:`Emails/ReviewRequest`,component:N,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,R.jsx)(E,{children:(0,R.jsx)(N,{...t})})]},B={args:{workspaceName:`Acme Translations`,changeSetName:`kapi push — governed concepts`,authorName:`Asgeir`,changeCount:`57 changes`,reviewURL:`https://app.bowrain.cloud/acme/context/changes/FCfv5QTy`}},V={args:{workspaceName:`Globex Corp`,changeSetName:`Ban “utilize” in product surfaces`,authorName:`Dana`,changeCount:`1 change`,reviewURL:`https://app.bowrain.cloud/globex/context/changes/aB3xQ9`}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    changeSetName: "kapi push — governed concepts",
    authorName: "Asgeir",
    changeCount: "57 changes",
    reviewURL: "https://app.bowrain.cloud/acme/context/changes/FCfv5QTy"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    changeSetName: "Ban “utilize” in product surfaces",
    authorName: "Dana",
    changeCount: "1 change",
    reviewURL: "https://app.bowrain.cloud/globex/context/changes/aB3xQ9"
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`SingleChange`]}))();export{B as Default,V as SingleChange,H as __namedExportsOrder,z as default};