import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{A as r,C as i,D as a,E as o,F as s,I as c,L as l,M as u,N as d,O as f,P as p,S as m,T as h,_ as g,a as _,b as v,c as y,d as b,f as x,g as S,h as C,i as w,j as T,k as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F,v as I,w as L,x as R,y as z}from"./storybook-decorator-DlyKau63.js";import{n as B,t as V}from"./dist-Dybg9H6R.js";var H,U,W,G,K;function q(){return(q=e((()=>{l(),s(),d(),T(),E(),a(),h(),B(),i(),R(),z(),t(),x(),H=n(),U=({workspaceName:e,taskTitle:t,taskDescription:n,priority:i,assignerName:a,taskURL:s})=>(0,H.jsxs)(L,{lang:`en`,dir:`ltr`,children:[(0,H.jsx)(r,{}),(0,H.jsx)(m,{children:`A task in your workspace is waiting on you`}),(0,H.jsx)(c,{style:C,children:(0,H.jsxs)(u,{style:A,children:[(0,H.jsxs)(v,{style:F,children:[(0,H.jsx)(I,{style:O,children:`Bowrain`}),(0,H.jsx)(I,{style:g,children:`The context graph for your content`})]}),(0,H.jsxs)(v,{style:_,children:[(0,H.jsx)(v,{style:G,children:(0,H.jsx)(I,{style:K,children:i})}),(0,H.jsx)(f,{as:`h1`,style:W,children:`A task is waiting on you`}),(0,H.jsxs)(I,{style:S,children:[(0,H.jsx)(`strong`,{children:a}),` assigned you `,(0,H.jsx)(`strong`,{children:t}),` in`,` `,(0,H.jsx)(`strong`,{children:e}),`.`]}),(0,H.jsx)(I,{style:S,children:n}),(0,H.jsx)(I,{style:S,children:`You are hearing about this one by mail because it was marked urgent. Everything else waits quietly in your queue.`}),(0,H.jsx)(v,{style:w,children:(0,H.jsx)(p,{href:s,style:M,children:`Open the task`})}),(0,H.jsx)(o,{style:b}),(0,H.jsx)(I,{style:N,children:`Button not working? Copy and paste this link into your browser:`}),(0,H.jsx)(V,{href:s,style:j,children:s})]}),(0,H.jsxs)(v,{style:y,children:[(0,H.jsx)(I,{style:D,children:`© Bowrain. All rights reserved.`}),(0,H.jsx)(I,{style:D,children:`You received this because an urgent task was assigned to you. Turn it off in notification preferences.`})]})]})})]}),W={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},G={marginBottom:`16px`},K={display:`inline-block`,backgroundColor:`#fff7ed`,color:`#c2410c`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},U.__docgenInfo={description:`Branded task-assignment email for Bowrain.

Sent only for tasks marked high or urgent. Routine assignments stay in-app and
on the badge: a queue that mails on every item trains its readers to ignore
it, and then the urgent one arrives looking like all the others.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML doubles as a
Go template. Every sentence stays static English JSX so the i18n pipeline can
extract it; only names, the priority, and the URL arrive as tokens.`,methods:[],displayName:`TaskAssignedEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:`Human-readable workspace name.`},taskTitle:{required:!0,tsType:{name:`string`},description:`The task's title, as whoever opened it wrote it.`},taskDescription:{required:!0,tsType:{name:`string`},description:`The task's description, or an empty string when it has none.`},priority:{required:!0,tsType:{name:`string`},description:`How urgent the task is, in prose ("high", "urgent").`},assignerName:{required:!0,tsType:{name:`string`},description:`Display name of whoever assigned it.`},taskURL:{required:!0,tsType:{name:`string`},description:`Deep link to the workspace task queue.`}}}})))()}var J,Y,X,Z,Q;function $(){return($=e((()=>{q(),k(),J=n(),Y={title:`Emails/TaskAssigned`,component:U,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,J.jsx)(P,{children:(0,J.jsx)(U,{...t})})]},X={args:{workspaceName:`Acme Translations`,taskTitle:`Fix terminology in the Norwegian release notes`,taskDescription:`Three forbidden terms shipped in the 1.4 notes and need replacing today.`,priority:`urgent`,assignerName:`Dana`,taskURL:`https://app.bowrain.cloud/acme/tasks`}},Z={args:{workspaceName:`Globex Corp`,taskTitle:`Review the source change proposed on the pricing page`,taskDescription:``,priority:`high`,assignerName:`Asgeir`,taskURL:`https://app.bowrain.cloud/globex/tasks`}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    taskTitle: "Fix terminology in the Norwegian release notes",
    taskDescription: "Three forbidden terms shipped in the 1.4 notes and need replacing today.",
    priority: "urgent",
    assignerName: "Dana",
    taskURL: "https://app.bowrain.cloud/acme/tasks"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    taskTitle: "Review the source change proposed on the pricing page",
    taskDescription: "",
    priority: "high",
    assignerName: "Asgeir",
    taskURL: "https://app.bowrain.cloud/globex/tasks"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Urgent`,`High`]})))()}$();export{Z as High,X as Urgent,Q as __namedExportsOrder,Y as default};