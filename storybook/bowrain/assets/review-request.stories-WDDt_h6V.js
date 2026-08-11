import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{A as r,C as i,D as a,E as o,F as s,I as c,L as l,M as u,N as d,O as f,P as p,S as m,T as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as w,j as T,k as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F,v as I,w as L,x as R,y as z}from"./storybook-decorator-DlyKau63.js";import{n as B,t as V}from"./dist-Dybg9H6R.js";var H,U,W,G,K;function q(){return(q=e((()=>{l(),s(),d(),T(),E(),a(),h(),B(),i(),R(),z(),t(),x(),H=n(),U=({workspaceName:e,changeSetName:t,authorName:n,changeCount:i,reviewURL:a})=>(0,H.jsxs)(L,{lang:`en`,dir:`ltr`,children:[(0,H.jsx)(r,{}),(0,H.jsx)(m,{children:`A change to your workspace terms is waiting for review`}),(0,H.jsx)(c,{style:C,children:(0,H.jsxs)(u,{style:A,children:[(0,H.jsxs)(v,{style:F,children:[(0,H.jsx)(I,{style:O,children:`Bowrain`}),(0,H.jsx)(I,{style:g,children:`The context graph for your content`})]}),(0,H.jsxs)(v,{style:_,children:[(0,H.jsx)(v,{style:G,children:(0,H.jsx)(I,{style:K,children:`Review`})}),(0,H.jsx)(f,{as:`h1`,style:W,children:`A change is waiting for your review`}),(0,H.jsxs)(I,{style:S,children:[(0,H.jsx)(`strong`,{children:n}),` proposed `,(0,H.jsx)(`strong`,{children:t}),` in`,` `,(0,H.jsx)(`strong`,{children:e}),`.`]}),(0,H.jsxs)(I,{style:S,children:[`It carries `,(0,H.jsx)(`strong`,{children:i}),` to the workspace terms. Governed changes take effect only once someone other than their author approves them, so this one is waiting on you.`]}),(0,H.jsx)(v,{style:w,children:(0,H.jsx)(p,{href:a,style:M,children:`Review the change`})}),(0,H.jsx)(o,{style:b}),(0,H.jsx)(I,{style:N,children:`Button not working? Copy and paste this link into your browser:`}),(0,H.jsx)(V,{href:a,style:j,children:a})]}),(0,H.jsxs)(v,{style:y,children:[(0,H.jsx)(I,{style:D,children:`© Bowrain. All rights reserved.`}),(0,H.jsx)(I,{style:D,children:`You received this because you can approve changes in this workspace. Turn it off in notification preferences.`})]})]})})]}),W={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},G={marginBottom:`16px`},K={display:`inline-block`,backgroundColor:`#f1f5f9`,color:`#475569`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},U.__docgenInfo={description:`Branded review-request email for Bowrain.

Sent when a governed change-set is submitted for review, to every workspace
member who may approve it. The change-set's author is never a recipient:
separation of duties bars them from reviewing their own work, so a summons
that reached only them would be a summons to nobody.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML doubles as a
Go template. Every sentence stays static English JSX so the i18n pipeline can
extract it; only names, counts, and URLs arrive as tokens.`,methods:[],displayName:`ReviewRequestEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:`Human-readable workspace name.`},changeSetName:{required:!0,tsType:{name:`string`},description:`The change-set's name, as its author titled it.`},authorName:{required:!0,tsType:{name:`string`},description:`Display name of the person who proposed the change-set.`},changeCount:{required:!0,tsType:{name:`string`},description:`How many changes the change-set carries, already formatted.`},reviewURL:{required:!0,tsType:{name:`string`},description:`Deep link to the change-set's review page.`}}}})))()}var J,Y,X,Z,Q;function $(){return($=e((()=>{q(),k(),J=n(),Y={title:`Emails/ReviewRequest`,component:U,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,J.jsx)(P,{children:(0,J.jsx)(U,{...t})})]},X={args:{workspaceName:`Acme Translations`,changeSetName:`kapi push — governed concepts`,authorName:`Asgeir`,changeCount:`57 changes`,reviewURL:`https://app.bowrain.cloud/acme/context/changes/FCfv5QTy`}},Z={args:{workspaceName:`Globex Corp`,changeSetName:`Ban “utilize” in product surfaces`,authorName:`Dana`,changeCount:`1 change`,reviewURL:`https://app.bowrain.cloud/globex/context/changes/aB3xQ9`}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    changeSetName: "kapi push — governed concepts",
    authorName: "Asgeir",
    changeCount: "57 changes",
    reviewURL: "https://app.bowrain.cloud/acme/context/changes/FCfv5QTy"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    changeSetName: "Ban “utilize” in product surfaces",
    authorName: "Dana",
    changeCount: "1 change",
    reviewURL: "https://app.bowrain.cloud/globex/context/changes/aB3xQ9"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`SingleChange`]})))()}$();export{X as Default,Z as SingleChange,Q as __namedExportsOrder,Y as default};