import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i,t as a}from"./runtime-Bvanz_ea.js";import{A as o,C as s,D as c,E as l,F as u,I as d,L as f,M as p,N as m,O as h,P as g,S as _,T as v,_ as y,a as b,b as x,c as ee,d as S,f as C,g as w,h as T,i as E,j as D,k as O,l as k,m as A,n as j,o as M,p as N,r as P,s as F,t as I,u as te,v as L,w as R,x as z,y as B}from"./storybook-decorator-DO4WJZES.js";import{n as V,t as H}from"./dist-Dybg9H6R.js";var U,W,G;function K(){return(K=e((()=>{i(),f(),u(),m(),D(),O(),c(),v(),V(),s(),z(),B(),t(),C(),U=n(),W=({workspaceName:e,invoiceAmount:t,currency:n,updatePaymentURL:i})=>(0,U.jsxs)(R,{lang:`en`,dir:`ltr`,children:[(0,U.jsx)(o,{}),(0,U.jsx)(_,{children:a(`99pBvIcNb9f`,`Payment failed for ${e}`,{workspaceName:e})}),(0,U.jsx)(d,{style:T,children:(0,U.jsxs)(p,{style:M,children:[(0,U.jsxs)(x,{style:te,children:[(0,U.jsx)(L,{style:A,children:a(`iNTJXFZObfa`,`Bowrain`)}),(0,U.jsx)(L,{style:y,children:a(`clVnq5E37Ir`,`The context graph for your content`)})]}),(0,U.jsxs)(x,{style:b,children:[(0,U.jsx)(h,{as:`h1`,style:G,children:a(`abdVzYYBqJR`,`Payment failed for your subscription`)}),(0,U.jsx)(L,{style:w,children:r(`hI1khGaKR9c`,`We were unable to process the payment of{value} {=m1} {invoiceAmount} {currency} {/=m1}{value_2} for the workspace {=m5}{workspaceName}{/=m5}.`,{"=m1":(0,U.jsxs)(`strong`,{children:[t,` `,n]}),"=m5":(0,U.jsx)(`strong`,{children:e})},{value:` `,invoiceAmount:t,currency:n,value_2:` `,workspaceName:e})}),(0,U.jsx)(L,{style:w,children:r(`ekpRaswyCAx`,`Your subscription is still active, but you have a {=m0}7-day grace period{/=m0} to update your payment method. If the payment is not resolved within this period, your subscription will be downgraded to the free plan.`,{"=m0":(0,U.jsx)(`strong`,{children:`7-day grace period`})})}),(0,U.jsx)(x,{style:E,children:(0,U.jsx)(g,{href:i,style:P,children:a(`b44KoKqMlfb`,`Update Payment Method`)})}),(0,U.jsx)(l,{style:S}),(0,U.jsx)(L,{style:F,children:a(`e3nbQxeay21`,`Button not working? Copy and paste this link into your browser:`)}),(0,U.jsx)(H,{href:i,style:N,children:i})]}),(0,U.jsxs)(x,{style:ee,children:[(0,U.jsx)(L,{style:k,children:a(`8GcVKMXn3T`,`© Bowrain. All rights reserved.`)}),(0,U.jsx)(L,{style:k,children:a(`aQECaHMJXV3`,`You received this email because you are an admin of this workspace.`)})]})]})})]}),G={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},W.__docgenInfo={description:`Branded payment-failed email for Bowrain.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML
doubles as a Go template. The mailer package fills in real values at
send time using text/template.Execute().`,methods:[],displayName:`PaymentFailedEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:``},invoiceAmount:{required:!0,tsType:{name:`string`},description:``},currency:{required:!0,tsType:{name:`string`},description:``},updatePaymentURL:{required:!0,tsType:{name:`string`},description:``}}}})))()}var q,J,Y,X,Z,Q;function $(){return($=e((()=>{K(),j(),q=n(),J={title:`Emails/Payment Failed`,component:W,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,q.jsx)(I,{children:(0,q.jsx)(W,{...t})})]},Y={args:{workspaceName:`Acme Translations`,invoiceAmount:`$25.00`,currency:`USD`,updatePaymentURL:`https://app.bowrain.com/acme/settings/billing`}},X={args:{workspaceName:`Globex Engineering`,invoiceAmount:`$100.00`,currency:`USD`,updatePaymentURL:`https://app.bowrain.com/globex/settings/billing`}},Z={args:{workspaceName:`Berlin Localization GmbH`,invoiceAmount:`€45.00`,currency:`EUR`,updatePaymentURL:`https://app.bowrain.com/berlin-loc/settings/billing`}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    invoiceAmount: "$25.00",
    currency: "USD",
    updatePaymentURL: "https://app.bowrain.com/acme/settings/billing"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Engineering",
    invoiceAmount: "$100.00",
    currency: "USD",
    updatePaymentURL: "https://app.bowrain.com/globex/settings/billing"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Berlin Localization GmbH",
    invoiceAmount: "€45.00",
    currency: "EUR",
    updatePaymentURL: "https://app.bowrain.com/berlin-loc/settings/billing"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`MonthlySubscription`,`TeamPlan`,`EuroCurrency`]})))()}$();export{Z as EuroCurrency,Y as MonthlySubscription,X as TeamPlan,Q as __namedExportsOrder,J as default};