import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{A as a,C as o,D as s,E as ee,F as c,I as te,L as ne,M as re,N as l,O as u,P as d,S as f,T as p,_ as ie,a as m,b as h,c as g,d as _,f as v,g as y,h as b,j as x,k as S,l as C,m as ae,n as oe,o as se,p as ce,r as le,s as w,t as T,u as E,v as D,w as O,x as k,y as A}from"./storybook-decorator-JOMqU-3b.js";import{n as j,t as M}from"./dist-Dybg9H6R.js";var N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{r(),ne(),c(),l(),x(),S(),s(),p(),j(),o(),k(),A(),t(),v(),N=n(),P=({title:e,body:t,category:n,priority:r,actionURL:o,actionLabel:s})=>{let c=r===`high`;return(0,N.jsxs)(O,{lang:`en`,dir:`ltr`,children:[(0,N.jsx)(a,{}),(0,N.jsx)(f,{children:e}),(0,N.jsx)(te,{style:b,children:(0,N.jsxs)(re,{style:se,children:[(0,N.jsxs)(h,{style:E,children:[(0,N.jsx)(D,{style:ae,children:i(`iNTJXFZObfa`,`Bowrain`)}),(0,N.jsx)(D,{style:ie,children:i(`clVnq5E37Ir`,`The context graph for your content`)})]}),(0,N.jsxs)(h,{style:m,children:[(0,N.jsxs)(h,{style:F,children:[(0,N.jsx)(D,{style:I,children:n}),c&&(0,N.jsx)(D,{style:L,children:i(`fmX818sBvat`,`Urgent`)})]}),(0,N.jsx)(u,{as:`h1`,style:c?{...R,...z}:R,children:e}),c&&(0,N.jsx)(h,{style:B}),(0,N.jsx)(D,{style:y,children:t}),(0,N.jsx)(h,{style:V,children:(0,N.jsx)(d,{href:o,style:c?H:le,children:s})}),(0,N.jsx)(ee,{style:_}),(0,N.jsx)(D,{style:w,children:i(`e3nbQxeay21`,`Button not working? Copy and paste this link into your browser:`)}),(0,N.jsx)(M,{href:o,style:ce,children:o})]}),(0,N.jsxs)(h,{style:g,children:[(0,N.jsx)(D,{style:C,children:i(`8GcVKMXn3T`,`© Bowrain. All rights reserved.`)}),(0,N.jsx)(D,{style:C,children:i(`buLaqJpImiR`,`You received this because you have email notifications enabled for this category.`)})]})]})})]})},F={marginBottom:`16px`},I={display:`inline-block`,backgroundColor:`#f1f5f9`,color:`#475569`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0 8px 0 0`},L={display:`inline-block`,backgroundColor:`#fef2f2`,color:`#dc2626`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},R={color:`#0f172a`,fontSize:`24px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.3`},z={color:`#991b1b`},B={backgroundColor:`#ef4444`,height:`3px`,borderRadius:`2px`,marginBottom:`20px`},V={margin:`0 0 28px`},H={backgroundColor:`#dc2626`,borderRadius:`8px`,color:`#ffffff`,display:`inline-block`,fontSize:`15px`,fontWeight:`600`,padding:`14px 28px`,textDecoration:`none`,lineHeight:`1`},P.__docgenInfo={description:`Branded immediate notification email for Bowrain.

Sent for urgent/high-priority notifications that need immediate attention
(e.g. quality gate failures, deadline approaching, flow failures).`,methods:[],displayName:`NotificationEmail`,props:{title:{required:!0,tsType:{name:`string`},description:`Notification title, e.g. "Quality gate failed".`},body:{required:!0,tsType:{name:`string`},description:`Notification body with details.`},category:{required:!0,tsType:{name:`string`},description:`Category label, e.g. "Quality", "Task", "Automation".`},priority:{required:!0,tsType:{name:`string`},description:`"high" or "normal" — high-priority gets visual emphasis.`},actionURL:{required:!0,tsType:{name:`string`},description:`URL to view the notification in context.`},actionLabel:{required:!0,tsType:{name:`string`},description:`Label for the CTA button.`}}}})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{U(),oe(),W=n(),G={title:`Emails/Notification`,component:P,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,W.jsx)(T,{children:(0,W.jsx)(P,{...t})})]},K={args:{title:`Quality gate failed: Terminology check`,body:`3 terminology violations were found in fr-FR for the Website project. The terms "cloud computing", "machine learning", and "dashboard" do not match your approved glossary entries. Please review and correct these before the next build.`,category:`Quality`,priority:`high`,actionURL:`https://app.bowrain.com/ws/acme/projects/website/quality`,actionLabel:`Review Issues`}},q={args:{title:`Flow failed: Auto-translate (ja-JP)`,body:`The auto-translate flow for Japanese in the Mobile App project failed after processing 42 of 128 blocks. The MT provider returned a rate-limit error. You can retry the flow or switch to a different provider.`,category:`Automation`,priority:`high`,actionURL:`https://app.bowrain.com/ws/acme/projects/mobile/flows`,actionLabel:`View Flow Details`}},J={args:{title:`Deadline approaching: Review mobile content`,body:`The task "Review mobile content" for ja-JP is due in less than 24 hours. There are 42 blocks remaining to review. Please complete your review to avoid delays in the release schedule.`,category:`Task`,priority:`high`,actionURL:`https://app.bowrain.com/ws/acme/tasks/task-123`,actionLabel:`Open Task`}},Y={args:{title:`New task: Review French translations`,body:`Alice assigned you to review 24 blocks in fr-FR for the Mobile App project. The blocks are part of the new onboarding flow and include UI labels and help text.`,category:`Task`,priority:`normal`,actionURL:`https://app.bowrain.com/ws/acme/tasks/task-456`,actionLabel:`View Task`}},X={args:{title:`New content available for translation`,body:`12 new blocks have been pushed to the Mobile App project. The content includes updated checkout flow labels and error messages. These blocks are ready for translation into your assigned languages.`,category:`Project`,priority:`normal`,actionURL:`https://app.bowrain.com/ws/acme/projects/mobile/editor`,actionLabel:`Start Translating`}},Z={args:{title:`Alice mentioned you`,body:`"@charlie can you review the updated glossary terms for the German locale? I've added 15 new entries based on the brand guide update from last week."`,category:`Mention`,priority:`normal`,actionURL:`https://app.bowrain.com/ws/acme/projects/website/editor/block/123`,actionLabel:`View Comment`}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Quality gate failed: Terminology check",
    body: '3 terminology violations were found in fr-FR for the Website project. The terms "cloud computing", "machine learning", and "dashboard" do not match your approved glossary entries. Please review and correct these before the next build.',
    category: "Quality",
    priority: "high",
    actionURL: "https://app.bowrain.com/ws/acme/projects/website/quality",
    actionLabel: "Review Issues"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Flow failed: Auto-translate (ja-JP)",
    body: "The auto-translate flow for Japanese in the Mobile App project failed after processing 42 of 128 blocks. The MT provider returned a rate-limit error. You can retry the flow or switch to a different provider.",
    category: "Automation",
    priority: "high",
    actionURL: "https://app.bowrain.com/ws/acme/projects/mobile/flows",
    actionLabel: "View Flow Details"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deadline approaching: Review mobile content",
    body: 'The task "Review mobile content" for ja-JP is due in less than 24 hours. There are 42 blocks remaining to review. Please complete your review to avoid delays in the release schedule.',
    category: "Task",
    priority: "high",
    actionURL: "https://app.bowrain.com/ws/acme/tasks/task-123",
    actionLabel: "Open Task"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New task: Review French translations",
    body: "Alice assigned you to review 24 blocks in fr-FR for the Mobile App project. The blocks are part of the new onboarding flow and include UI labels and help text.",
    category: "Task",
    priority: "normal",
    actionURL: "https://app.bowrain.com/ws/acme/tasks/task-456",
    actionLabel: "View Task"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New content available for translation",
    body: "12 new blocks have been pushed to the Mobile App project. The content includes updated checkout flow labels and error messages. These blocks are ready for translation into your assigned languages.",
    category: "Project",
    priority: "normal",
    actionURL: "https://app.bowrain.com/ws/acme/projects/mobile/editor",
    actionLabel: "Start Translating"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Alice mentioned you",
    body: '"@charlie can you review the updated glossary terms for the German locale? I\\'ve added 15 new entries based on the brand guide update from last week."',
    category: "Mention",
    priority: "normal",
    actionURL: "https://app.bowrain.com/ws/acme/projects/website/editor/block/123",
    actionLabel: "View Comment"
  }
}`,...Z.parameters?.docs?.source}}},Q=[`QualityGateFailed`,`FlowFailed`,`DeadlineApproaching`,`TaskAssigned`,`ContentAvailable`,`MentionNotification`]})))()}$();export{X as ContentAvailable,J as DeadlineApproaching,q as FlowFailed,Z as MentionNotification,K as QualityGateFailed,Y as TaskAssigned,Q as __namedExportsOrder,G as default};