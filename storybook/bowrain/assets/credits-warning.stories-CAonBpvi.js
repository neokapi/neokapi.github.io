import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{A as r,C as i,D as a,E as o,F as s,I as c,L as l,M as u,N as d,O as f,P as p,S as m,T as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as ee,j as w,k as T,l as E,m as D,n as O,o as k,p as A,r as j,s as M,t as N,u as P,v as F,w as I,x as L,y as R}from"./storybook-decorator-DlyKau63.js";import{n as z,t as B}from"./dist-Dybg9H6R.js";var V,H,U,W,G;function K(){return(K=e((()=>{l(),s(),d(),w(),T(),a(),h(),z(),i(),L(),R(),t(),x(),V=n(),H=({workspaceName:e,usedCredits:t,totalCredits:n,usagePercent:i,resetDate:a,upgradeURL:s})=>(0,V.jsxs)(I,{lang:`en`,dir:`ltr`,children:[(0,V.jsx)(r,{}),(0,V.jsxs)(m,{children:[`Your AI credits are running low in `,e]}),(0,V.jsx)(c,{style:C,children:(0,V.jsxs)(u,{style:k,children:[(0,V.jsxs)(v,{style:P,children:[(0,V.jsx)(F,{style:D,children:`Bowrain`}),(0,V.jsx)(F,{style:g,children:`The context graph for your content`})]}),(0,V.jsxs)(v,{style:_,children:[(0,V.jsx)(f,{as:`h1`,style:U,children:`Your AI credits are running low`}),(0,V.jsxs)(F,{style:S,children:[`The workspace `,(0,V.jsx)(`strong`,{children:e}),` has used`,` `,(0,V.jsxs)(`strong`,{children:[t,` of `,n]}),` `,`AI credits (`,i,`%).`]}),(0,V.jsx)(v,{style:W,children:(0,V.jsx)(v,{style:G})}),(0,V.jsxs)(F,{style:S,children:[`Your credits will reset on `,(0,V.jsx)(`strong`,{children:a}),`. To avoid interruption, consider upgrading your plan for a higher credit allowance.`]}),(0,V.jsx)(v,{style:ee,children:(0,V.jsx)(p,{href:s,style:j,children:`Upgrade Plan`})}),(0,V.jsx)(o,{style:b}),(0,V.jsx)(F,{style:M,children:`Button not working? Copy and paste this link into your browser:`}),(0,V.jsx)(B,{href:s,style:A,children:s})]}),(0,V.jsxs)(v,{style:y,children:[(0,V.jsx)(F,{style:E,children:`© Bowrain. All rights reserved.`}),(0,V.jsx)(F,{style:E,children:`You received this email because you are an admin of this workspace.`})]})]})})]}),U={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},W={backgroundColor:`#e2e8f0`,borderRadius:`6px`,height:`12px`,margin:`0 0 16px`,overflow:`hidden`},G={backgroundColor:`#f59e0b`,borderRadius:`6px`,height:`12px`,width:`80%`},H.__docgenInfo={description:`Branded credits-warning email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`CreditsWarningEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},usedCredits:{required:!0,tsType:{name:`string`},description:``},totalCredits:{required:!0,tsType:{name:`string`},description:``},usagePercent:{required:!0,tsType:{name:`string`},description:``},resetDate:{required:!0,tsType:{name:`string`},description:``},upgradeURL:{required:!0,tsType:{name:`string`},description:``}}}})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{K(),O(),q=n(),J={title:`Emails/Credits Warning`,component:H,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,q.jsx)(N,{children:(0,q.jsx)(H,{...t})})]},Y={args:{workspaceName:`Acme Translations`,usedCredits:`400,000`,totalCredits:`500,000`,usagePercent:`80`,resetDate:`Monday, March 23, 2026`,upgradeURL:`https://app.bowrain.com/acme/settings/billing`}},X={args:{workspaceName:`Globex Corp`,usedCredits:`1,800,000`,totalCredits:`2,000,000`,usagePercent:`90`,resetDate:`Monday, March 30, 2026`,upgradeURL:`https://app.bowrain.com/globex/settings/billing`}},Z={args:{workspaceName:`My Project`,usedCredits:`40,000`,totalCredits:`50,000`,usagePercent:`80`,resetDate:`Monday, March 23, 2026`,upgradeURL:`https://app.bowrain.com/my-project/settings/billing`}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    usedCredits: "400,000",
    totalCredits: "500,000",
    usagePercent: "80",
    resetDate: "Monday, March 23, 2026",
    upgradeURL: "https://app.bowrain.com/acme/settings/billing"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    usedCredits: "1,800,000",
    totalCredits: "2,000,000",
    usagePercent: "90",
    resetDate: "Monday, March 30, 2026",
    upgradeURL: "https://app.bowrain.com/globex/settings/billing"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "My Project",
    usedCredits: "40,000",
    totalCredits: "50,000",
    usagePercent: "80",
    resetDate: "Monday, March 23, 2026",
    upgradeURL: "https://app.bowrain.com/my-project/settings/billing"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`At80Percent`,`At90Percent`,`FreePlan`]})))()}$();export{Y as At80Percent,X as At90Percent,Z as FreePlan,Q as __namedExportsOrder,J as default};