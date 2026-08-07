import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{C as r,D as i,F as a,L as o,N as s,T as c,_ as l,a as u,c as d,d as f,f as p,g as m,h,i as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O,x as k,y as A,z as j}from"./storybook-decorator-Bibqrvbs.js";var M,N,P,F,I,L=e((()=>{O(),t(),p(),M=n(),N=({workspaceName:e,taskTitle:t,taskDescription:n,priority:p,assignerName:x,taskURL:E})=>(0,M.jsxs)(i,{lang:`en`,dir:`ltr`,children:[(0,M.jsx)(s,{}),(0,M.jsx)(r,{children:`A task in your workspace is waiting on you`}),(0,M.jsx)(j,{style:h,children:(0,M.jsxs)(a,{style:S,children:[(0,M.jsxs)(k,{style:D,children:[(0,M.jsx)(A,{style:b,children:`Bowrain`}),(0,M.jsx)(A,{style:l,children:`The context graph for your content`})]}),(0,M.jsxs)(k,{style:u,children:[(0,M.jsx)(k,{style:F,children:(0,M.jsx)(A,{style:I,children:p})}),(0,M.jsx)(_,{as:`h1`,style:P,children:`A task is waiting on you`}),(0,M.jsxs)(A,{style:m,children:[(0,M.jsx)(`strong`,{children:x}),` assigned you `,(0,M.jsx)(`strong`,{children:t}),` in`,` `,(0,M.jsx)(`strong`,{children:e}),`.`]}),(0,M.jsx)(A,{style:m,children:n}),(0,M.jsx)(A,{style:m,children:`You are hearing about this one by mail because it was marked urgent. Everything else waits quietly in your queue.`}),(0,M.jsx)(k,{style:g,children:(0,M.jsx)(o,{href:E,style:w,children:`Open the task`})}),(0,M.jsx)(v,{style:f}),(0,M.jsx)(A,{style:T,children:`Button not working? Copy and paste this link into your browser:`}),(0,M.jsx)(c,{href:E,style:C,children:E})]}),(0,M.jsxs)(k,{style:d,children:[(0,M.jsx)(A,{style:y,children:`© Bowrain. All rights reserved.`}),(0,M.jsx)(A,{style:y,children:`You received this because an urgent task was assigned to you. Turn it off in notification preferences.`})]})]})})]}),P={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},F={marginBottom:`16px`},I={display:`inline-block`,backgroundColor:`#fff7ed`,color:`#c2410c`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},N.__docgenInfo={description:`Branded task-assignment email for Bowrain.

Sent only for tasks marked high or urgent. Routine assignments stay in-app and
on the badge: a queue that mails on every item trains its readers to ignore
it, and then the urgent one arrives looking like all the others.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML doubles as a
Go template. Every sentence stays static English JSX so the i18n pipeline can
extract it; only names, the priority, and the URL arrive as tokens.`,methods:[],displayName:`TaskAssignedEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:`Human-readable workspace name.`},taskTitle:{required:!0,tsType:{name:`string`},description:`The task's title, as whoever opened it wrote it.`},taskDescription:{required:!0,tsType:{name:`string`},description:`The task's description, or an empty string when it has none.`},priority:{required:!0,tsType:{name:`string`},description:`How urgent the task is, in prose ("high", "urgent").`},assignerName:{required:!0,tsType:{name:`string`},description:`Display name of whoever assigned it.`},taskURL:{required:!0,tsType:{name:`string`},description:`Deep link to the workspace task queue.`}}}})),R,z,B,V,H;e((()=>{L(),x(),R=n(),z={title:`Emails/TaskAssigned`,component:N,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,R.jsx)(E,{children:(0,R.jsx)(N,{...t})})]},B={args:{workspaceName:`Acme Translations`,taskTitle:`Fix terminology in the Norwegian release notes`,taskDescription:`Three forbidden terms shipped in the 1.4 notes and need replacing today.`,priority:`urgent`,assignerName:`Dana`,taskURL:`https://app.bowrain.cloud/acme/tasks`}},V={args:{workspaceName:`Globex Corp`,taskTitle:`Review the source change proposed on the pricing page`,taskDescription:``,priority:`high`,assignerName:`Asgeir`,taskURL:`https://app.bowrain.cloud/globex/tasks`}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    taskTitle: "Fix terminology in the Norwegian release notes",
    taskDescription: "Three forbidden terms shipped in the 1.4 notes and need replacing today.",
    priority: "urgent",
    assignerName: "Dana",
    taskURL: "https://app.bowrain.cloud/acme/tasks"
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    taskTitle: "Review the source change proposed on the pricing page",
    taskDescription: "",
    priority: "high",
    assignerName: "Asgeir",
    taskURL: "https://app.bowrain.cloud/globex/tasks"
  }
}`,...V.parameters?.docs?.source}}},H=[`Urgent`,`High`]}))();export{V as High,B as Urgent,H as __namedExportsOrder,z as default};