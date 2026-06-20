import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./react-BHOuiJCc.js";import{t as n}from"./jsx-runtime-CNPDJLAB.js";import{C as r,D as i,F as a,L as o,N as s,T as c,_ as l,a as u,c as d,d as f,f as p,g as m,h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,u as E,v as D,x as O,y as k,z as A}from"./storybook-decorator-DnN6uFmS.js";var j,M,N,P,F,I,L,R,z,B,V=e((()=>{D(),t(),p(),j=n(),M=({title:e,body:t,category:n,priority:p,actionURL:b,actionLabel:T})=>{let D=p===`high`;return(0,j.jsxs)(i,{lang:`en`,dir:`ltr`,children:[(0,j.jsx)(s,{}),(0,j.jsx)(r,{children:e}),(0,j.jsx)(A,{style:h,children:(0,j.jsxs)(a,{style:x,children:[(0,j.jsxs)(O,{style:E,children:[(0,j.jsx)(k,{style:y,children:`Bowrain`}),(0,j.jsx)(k,{style:l,children:`Localization platform`})]}),(0,j.jsxs)(O,{style:u,children:[(0,j.jsxs)(O,{style:N,children:[(0,j.jsx)(k,{style:P,children:n}),D&&(0,j.jsx)(k,{style:F,children:`Urgent`})]}),(0,j.jsx)(g,{as:`h1`,style:D?{...I,...L}:I,children:e}),D&&(0,j.jsx)(O,{style:R}),(0,j.jsx)(k,{style:m,children:t}),(0,j.jsx)(O,{style:z,children:(0,j.jsx)(o,{href:b,style:D?B:C,children:T})}),(0,j.jsx)(_,{style:f}),(0,j.jsx)(k,{style:w,children:`Button not working? Copy and paste this link into your browser:`}),(0,j.jsx)(c,{href:b,style:S,children:b})]}),(0,j.jsxs)(O,{style:d,children:[(0,j.jsx)(k,{style:v,children:`© Bowrain. All rights reserved.`}),(0,j.jsx)(k,{style:v,children:`You received this because you have email notifications enabled for this category.`})]})]})})]})},N={marginBottom:`16px`},P={display:`inline-block`,backgroundColor:`#f1f5f9`,color:`#475569`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0 8px 0 0`},F={display:`inline-block`,backgroundColor:`#fef2f2`,color:`#dc2626`,fontSize:`11px`,fontWeight:`600`,textTransform:`uppercase`,letterSpacing:`0.05em`,padding:`4px 10px`,borderRadius:`4px`,margin:`0`},I={color:`#0f172a`,fontSize:`24px`,fontWeight:`700`,margin:`0 0 16px`,lineHeight:`1.3`},L={color:`#991b1b`},R={backgroundColor:`#ef4444`,height:`3px`,borderRadius:`2px`,marginBottom:`20px`},z={margin:`0 0 28px`},B={backgroundColor:`#dc2626`,borderRadius:`8px`,color:`#ffffff`,display:`inline-block`,fontSize:`15px`,fontWeight:`600`,padding:`14px 28px`,textDecoration:`none`,lineHeight:`1`},M.__docgenInfo={description:`Branded immediate notification email for Bowrain.

Sent for urgent/high-priority notifications that need immediate attention
(e.g. quality gate failures, deadline approaching, flow failures).`,methods:[],displayName:`NotificationEmail`,props:{title:{required:!0,tsType:{name:`string`},description:`Notification title, e.g. "Quality gate failed".`},body:{required:!0,tsType:{name:`string`},description:`Notification body with details.`},category:{required:!0,tsType:{name:`string`},description:`Category label, e.g. "Quality", "Task", "Automation".`},priority:{required:!0,tsType:{name:`string`},description:`"high" or "normal" — high-priority gets visual emphasis.`},actionURL:{required:!0,tsType:{name:`string`},description:`URL to view the notification in context.`},actionLabel:{required:!0,tsType:{name:`string`},description:`Label for the CTA button.`}}}})),H,U,W,G,K,q,J,Y,X;e((()=>{V(),b(),H=n(),U={title:`Emails/Notification`,component:M,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,H.jsx)(T,{children:(0,H.jsx)(M,{...t})})]},W={args:{title:`Quality gate failed: Terminology check`,body:`3 terminology violations were found in fr-FR for the Website project. The terms "cloud computing", "machine learning", and "dashboard" do not match your approved glossary entries. Please review and correct these before the next build.`,category:`Quality`,priority:`high`,actionURL:`https://app.bowrain.com/ws/acme/projects/website/quality`,actionLabel:`Review Issues`}},G={args:{title:`Flow failed: Auto-translate (ja-JP)`,body:`The auto-translate flow for Japanese in the Mobile App project failed after processing 42 of 128 blocks. The MT provider returned a rate-limit error. You can retry the flow or switch to a different provider.`,category:`Automation`,priority:`high`,actionURL:`https://app.bowrain.com/ws/acme/projects/mobile/flows`,actionLabel:`View Flow Details`}},K={args:{title:`Deadline approaching: Review mobile content`,body:`The task "Review mobile content" for ja-JP is due in less than 24 hours. There are 42 blocks remaining to review. Please complete your review to avoid delays in the release schedule.`,category:`Task`,priority:`high`,actionURL:`https://app.bowrain.com/ws/acme/tasks/task-123`,actionLabel:`Open Task`}},q={args:{title:`New task: Review French translations`,body:`Alice assigned you to review 24 blocks in fr-FR for the Mobile App project. The blocks are part of the new onboarding flow and include UI labels and help text.`,category:`Task`,priority:`normal`,actionURL:`https://app.bowrain.com/ws/acme/tasks/task-456`,actionLabel:`View Task`}},J={args:{title:`New content available for translation`,body:`12 new blocks have been pushed to the Mobile App project. The content includes updated checkout flow labels and error messages. These blocks are ready for translation into your assigned languages.`,category:`Project`,priority:`normal`,actionURL:`https://app.bowrain.com/ws/acme/projects/mobile/editor`,actionLabel:`Start Translating`}},Y={args:{title:`Alice mentioned you`,body:`"@charlie can you review the updated glossary terms for the German locale? I've added 15 new entries based on the brand guide update from last week."`,category:`Mention`,priority:`normal`,actionURL:`https://app.bowrain.com/ws/acme/projects/website/editor/block/123`,actionLabel:`View Comment`}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Quality gate failed: Terminology check",
    body: '3 terminology violations were found in fr-FR for the Website project. The terms "cloud computing", "machine learning", and "dashboard" do not match your approved glossary entries. Please review and correct these before the next build.',
    category: "Quality",
    priority: "high",
    actionURL: "https://app.bowrain.com/ws/acme/projects/website/quality",
    actionLabel: "Review Issues"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Flow failed: Auto-translate (ja-JP)",
    body: "The auto-translate flow for Japanese in the Mobile App project failed after processing 42 of 128 blocks. The MT provider returned a rate-limit error. You can retry the flow or switch to a different provider.",
    category: "Automation",
    priority: "high",
    actionURL: "https://app.bowrain.com/ws/acme/projects/mobile/flows",
    actionLabel: "View Flow Details"
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Deadline approaching: Review mobile content",
    body: 'The task "Review mobile content" for ja-JP is due in less than 24 hours. There are 42 blocks remaining to review. Please complete your review to avoid delays in the release schedule.',
    category: "Task",
    priority: "high",
    actionURL: "https://app.bowrain.com/ws/acme/tasks/task-123",
    actionLabel: "Open Task"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New task: Review French translations",
    body: "Alice assigned you to review 24 blocks in fr-FR for the Mobile App project. The blocks are part of the new onboarding flow and include UI labels and help text.",
    category: "Task",
    priority: "normal",
    actionURL: "https://app.bowrain.com/ws/acme/tasks/task-456",
    actionLabel: "View Task"
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    title: "New content available for translation",
    body: "12 new blocks have been pushed to the Mobile App project. The content includes updated checkout flow labels and error messages. These blocks are ready for translation into your assigned languages.",
    category: "Project",
    priority: "normal",
    actionURL: "https://app.bowrain.com/ws/acme/projects/mobile/editor",
    actionLabel: "Start Translating"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Alice mentioned you",
    body: '"@charlie can you review the updated glossary terms for the German locale? I\\'ve added 15 new entries based on the brand guide update from last week."',
    category: "Mention",
    priority: "normal",
    actionURL: "https://app.bowrain.com/ws/acme/projects/website/editor/block/123",
    actionLabel: "View Comment"
  }
}`,...Y.parameters?.docs?.source}}},X=[`QualityGateFailed`,`FlowFailed`,`DeadlineApproaching`,`TaskAssigned`,`ContentAvailable`,`MentionNotification`]}))();export{J as ContentAvailable,K as DeadlineApproaching,G as FlowFailed,Y as MentionNotification,W as QualityGateFailed,q as TaskAssigned,X as __namedExportsOrder,U as default};