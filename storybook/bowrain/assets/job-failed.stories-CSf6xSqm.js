import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{C as r,D as i,F as a,L as o,N as s,T as c,_ as l,a as u,c as d,d as f,f as p,g as m,h,i as g,j as _,k as v,l as y,m as b,n as x,o as S,p as C,r as w,s as T,t as E,u as D,v as O,x as k,y as A,z as j}from"./storybook-decorator-Bibqrvbs.js";var M,N,P,F,I,L,R=e((()=>{O(),t(),p(),M=n(),N=({workspaceName:e,jobKind:t,subject:n,reason:p,jobURL:x})=>(0,M.jsxs)(i,{lang:`en`,dir:`ltr`,children:[(0,M.jsx)(s,{}),(0,M.jsx)(r,{children:`Work in your workspace stopped before it finished`}),(0,M.jsx)(j,{style:h,children:(0,M.jsxs)(a,{style:S,children:[(0,M.jsxs)(k,{style:D,children:[(0,M.jsx)(A,{style:b,children:`Bowrain`}),(0,M.jsx)(A,{style:l,children:`The context graph for your content`})]}),(0,M.jsxs)(k,{style:u,children:[(0,M.jsx)(k,{style:F,children:(0,M.jsx)(A,{style:I,children:`Failed`})}),(0,M.jsx)(_,{as:`h1`,style:P,children:`A job stopped before it finished`}),(0,M.jsxs)(A,{style:m,children:[`A `,(0,M.jsx)(`strong`,{children:t}),` job for `,(0,M.jsx)(`strong`,{children:n}),` in`,` `,(0,M.jsx)(`strong`,{children:e}),` did not complete.`]}),(0,M.jsx)(A,{style:L,children:p}),(0,M.jsx)(A,{style:m,children:`The work was retried where retrying could help, and stopped when it could not. Nothing was left half-applied — the content it was working on is unchanged.`}),(0,M.jsx)(k,{style:g,children:(0,M.jsx)(o,{href:x,style:w,children:`Open the run history`})}),(0,M.jsx)(v,{style:f}),(0,M.jsx)(A,{style:T,children:`Button not working? Copy and paste this link into your browser:`}),(0,M.jsx)(c,{href:x,style:C,children:x})]}),(0,M.jsxs)(k,{style:d,children:[(0,M.jsx)(A,{style:y,children:`© Bowrain. All rights reserved.`}),(0,M.jsx)(A,{style:y,children:`You received this because work you are responsible for did not finish. Turn it off in notification preferences.`})]})]})})]}),P={color:`#0f172a`,fontSize:`26px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.2`},F={marginBottom:`16px`},I={display:`inline-block`,backgroundColor:`#fef2f2`,color:`#b91c1c`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},L={color:`#334155`,fontSize:`14px`,fontFamily:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`,lineHeight:`1.5`,backgroundColor:`#f8fafc`,borderLeft:`3px solid #e2e8f0`,padding:`12px 14px`,borderRadius:`4px`,margin:`0 0 16px`},N.__docgenInfo={description:`Branded job-failure email for Bowrain.

Sent once per failed job — after retries, not per attempt — to the person who
asked for the work, or to the workspace's owners when the platform started it
itself. Work that stops is the one outcome nobody discovers on their own: a
job that silently failed looks exactly like a job that is still running.

Props are populated at build time with Go text/template tokens
(e.g. workspaceName = "{{.WorkspaceName}}") so the rendered HTML doubles as a
Go template. Every sentence stays static English JSX so the i18n pipeline can
extract it; only names, the reason, and the URL arrive as tokens.`,methods:[],displayName:`JobFailedEmail`,props:{workspaceName:{required:!0,tsType:{name:`string`},description:`Human-readable workspace name.`},jobKind:{required:!0,tsType:{name:`string`},description:`What kind of work this was, in prose (e.g. "translation", "push").`},subject:{required:!0,tsType:{name:`string`},description:`What the job was working on — an item name, or the project's name.`},reason:{required:!0,tsType:{name:`string`},description:`The one-line reason the job stopped, as the worker recorded it.`},jobURL:{required:!0,tsType:{name:`string`},description:`Deep link to where the failure can be inspected and re-run.`}}}})),z,B,V,H,U;e((()=>{R(),x(),z=n(),B={title:`Emails/JobFailed`,component:N,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,z.jsx)(E,{children:(0,z.jsx)(N,{...t})})]},V={args:{workspaceName:`Acme Translations`,jobKind:`translation`,subject:`en.json → nb`,reason:`openai: API error 401: invalid api key`,jobURL:`https://app.bowrain.cloud/acme/p/proj_7hK2/s/main/runs`}},H={args:{workspaceName:`Globex Corp`,jobKind:`push`,subject:`Marketing site`,reason:`parse manifest: unexpected end of JSON input`,jobURL:`https://app.bowrain.cloud/globex/p/proj_9Qm4/s/main/runs`}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Acme Translations",
    jobKind: "translation",
    subject: "en.json → nb",
    reason: "openai: API error 401: invalid api key",
    jobURL: "https://app.bowrain.cloud/acme/p/proj_7hK2/s/main/runs"
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    workspaceName: "Globex Corp",
    jobKind: "push",
    subject: "Marketing site",
    reason: "parse manifest: unexpected end of JSON input",
    jobURL: "https://app.bowrain.cloud/globex/p/proj_9Qm4/s/main/runs"
  }
}`,...H.parameters?.docs?.source}}},U=[`Translation`,`Push`]}))();export{H as Push,V as Translation,U as __namedExportsOrder,B as default};