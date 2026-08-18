import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i,t as a}from"./runtime-CWFEJrrT.js";import{A as ee,C as o,D as s,E as c,F as l,I as u,L as te,M as ne,N as re,O as ie,P as d,S as f,T as p,_ as m,b as h,c as g,d as _,f as v,h as y,j as b,k as x,l as S,m as C,n as w,r as T,t as E,u as D,v as O,w as ae,x as oe,y as k}from"./storybook-decorator-Dle-8zp-.js";var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{i(),te(),l(),re(),b(),x(),s(),p(),o(),oe(),k(),t(),v(),A=n(),j=({frequency:e,totalUpdates:t,groups:n,settingsURL:i,dashboardURL:o})=>{let s=e===`weekly`?`Weekly Summary`:`Daily Digest`;return(0,A.jsxs)(ae,{lang:`en`,dir:`ltr`,children:[(0,A.jsx)(ee,{}),(0,A.jsx)(f,{children:a(`12YOzEVJMpj`,`${s} — ${t} updates`,{title:s,totalUpdates:t})}),(0,A.jsx)(u,{style:y,children:(0,A.jsxs)(ne,{style:M,children:[(0,A.jsxs)(h,{style:D,children:[(0,A.jsx)(O,{style:C,children:a(`iNTJXFZObfa`,`Bowrain`)}),(0,A.jsx)(O,{style:m,children:a(`clVnq5E37Ir`,`The context graph for your content`)})]}),(0,A.jsxs)(h,{style:N,children:[(0,A.jsx)(ie,{as:`h1`,style:P,children:s}),(0,A.jsx)(O,{style:F,children:a(`gCuoU3epOe8`,`${t} new updates`,{totalUpdates:t})})]}),(0,A.jsxs)(h,{style:I,children:[n.map(e=>(0,A.jsxs)(h,{style:L,children:[(0,A.jsx)(O,{style:R,children:a(`kjYDnq15N75`,`${e.label} (${e.items.length})`,{"group.label":e.label,"group.items.length":e.items.length})}),e.items.map((e,t)=>(0,A.jsxs)(h,{style:e.priority===`high`?{...z,...B}:z,children:[(0,A.jsx)(O,{style:V,children:e.title}),(0,A.jsx)(O,{style:H,children:e.body})]},t))]},e.category)),(0,A.jsx)(c,{style:_}),(0,A.jsx)(h,{style:U,children:(0,A.jsx)(d,{href:o,style:T,children:a(`gzEYuhDFmJJ`,`Open Dashboard`)})})]}),(0,A.jsxs)(h,{style:g,children:[(0,A.jsx)(O,{style:S,children:r(`fZZ2UsR075j`,`You can change your digest frequency in{value} {=m1} notification settings {/=m1} .`,{"=m1":(0,A.jsx)(`a`,{href:i,style:W,children:`notification settings`})},{value:` `})}),(0,A.jsx)(O,{style:S,children:a(`8GcVKMXn3T`,`© Bowrain. All rights reserved.`)})]})]})})]})},M={maxWidth:`600px`,margin:`40px auto`,padding:`0`},N={backgroundColor:`#1e293b`,padding:`20px 32px`},P={color:`#f8fafc`,fontSize:`20px`,fontWeight:`600`,margin:`0`},F={color:`#94a3b8`,fontSize:`14px`,margin:`4px 0 0`},I={backgroundColor:`#ffffff`,padding:`24px 32px 32px`},L={marginBottom:`20px`},R={fontSize:`13px`,fontWeight:`600`,color:`#64748b`,textTransform:`uppercase`,letterSpacing:`0.05em`,margin:`0 0 12px`,paddingBottom:`8px`,borderBottom:`1px solid #f1f5f9`},z={marginBottom:`12px`},B={borderLeft:`3px solid #ef4444`,paddingLeft:`12px`},V={margin:`0`,fontSize:`14px`,fontWeight:`500`,color:`#0f172a`},H={margin:`2px 0 0`,fontSize:`13px`,color:`#64748b`},U={textAlign:`center`,margin:`0`},W={color:`#2563eb`,textDecoration:`underline`},j.__docgenInfo={description:`Branded digest email for Bowrain.

In Storybook mode, groups are passed as a real array of DigestGroup.
In Go template mode, the entire body section is generated server-side
(the Go mailer iterates over notification groups). This component
serves as the visual reference and Storybook preview.`,methods:[],displayName:`DigestEmail`,props:{frequency:{required:!0,tsType:{name:`string`},description:`"daily" or "weekly"`},totalUpdates:{required:!0,tsType:{name:`string`},description:`Total number of notifications in this digest.`},groups:{required:!0,tsType:{name:`Array`,elements:[{name:`DigestGroup`}],raw:`DigestGroup[]`},description:`Grouped notification items, rendered as JSON in Go template mode.`},settingsURL:{required:!0,tsType:{name:`string`},description:`URL to notification settings.`},dashboardURL:{required:!0,tsType:{name:`string`},description:`URL to open the dashboard.`}}}})))()}var K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{G(),w(),K=n(),q={title:`Emails/Digest`,component:j,tags:[`autodocs`],parameters:{layout:`padded`},decorators:[(e,{args:t})=>(0,K.jsx)(E,{children:(0,K.jsx)(j,{...t})})]},J={args:{frequency:`daily`,totalUpdates:`7`,dashboardURL:`https://app.bowrain.com/ws/acme/notifications`,settingsURL:`https://app.bowrain.com/ws/acme/settings/notifications`,groups:[{category:`task`,label:`Tasks`,items:[{title:`New task assigned: Review French translations`,body:`Alice assigned you to review 24 blocks in fr-FR for the Mobile App project.`},{title:`Task completed: Translate homepage`,body:`Bob completed translating homepage content to de-DE.`}]},{category:`quality`,label:`Quality`,items:[{title:`Quality gate failed: Terminology check`,body:`3 terminology violations found in fr-FR for the Website project.`,priority:`high`}]},{category:`project`,label:`Project`,items:[{title:`Stream merged: feature/onboarding`,body:`The feature/onboarding stream was merged into main.`},{title:`New content available`,body:`12 new blocks pushed to the Mobile App project for translation.`}]},{category:`mention`,label:`Mentions`,items:[{title:`Alice mentioned you`,body:`"@charlie can you review the updated glossary terms?"`}]},{category:`automation`,label:`Automation`,items:[{title:`Flow failed: Auto-translate (ja-JP)`,body:`The auto-translate flow failed for ja-JP in the Website project.`,priority:`high`}]}]}},Y={args:{frequency:`weekly`,totalUpdates:`23`,dashboardURL:`https://app.bowrain.com/ws/acme/notifications`,settingsURL:`https://app.bowrain.com/ws/acme/settings/notifications`,groups:[{category:`project`,label:`Project`,items:[{title:`Version v2.1 ready`,body:`All locales passed quality gates. Version v2.1 is ready for release.`},{title:`Stream merged: feature/payments`,body:`The feature/payments stream was merged into main.`},{title:`Progress milestone: fr-FR reached 100%`,body:`French translations are now complete for the Mobile App project.`},{title:`Progress milestone: ja-JP reached 75%`,body:`Japanese translations reached 75% completion for the Website project.`},{title:`New content available`,body:`48 new blocks pushed across 3 projects this week.`}]},{category:`task`,label:`Tasks`,items:[{title:`Deadline approaching: Translate settings page`,body:`Due in 24 hours. 8 blocks remaining in de-DE.`,priority:`high`},{title:`5 tasks completed this week`,body:`Translation and review tasks completed across Mobile App and Website.`},{title:`2 new tasks assigned`,body:`Review Korean translations, Translate checkout flow to pt-BR.`}]},{category:`quality`,label:`Quality`,items:[{title:`Quality gate resolved: Terminology check (fr-FR)`,body:`All terminology violations have been fixed.`},{title:`Quality gate failed: Length check (de-DE)`,body:`12 blocks exceed maximum length in de-DE for the Mobile App project.`,priority:`high`}]},{category:`mention`,label:`Mentions`,items:[{title:`Alice mentioned you (3 times)`,body:`Latest: "@charlie the Korean reviewer feedback is in"`},{title:`Bob mentioned you`,body:`"@charlie can you check the German plurals?"`}]},{category:`automation`,label:`Automation`,items:[{title:`6 automation runs completed`,body:`Auto-translate and quality check flows ran successfully.`},{title:`Flow failed: Quality check (ko-KR)`,body:`The quality check flow timed out for ko-KR. Manual retry needed.`,priority:`high`}]},{category:`system`,label:`System`,items:[{title:`New team member joined`,body:`Diana joined the workspace as a Translator.`}]}]}},X={args:{frequency:`daily`,totalUpdates:`1`,dashboardURL:`https://app.bowrain.com/ws/startup/notifications`,settingsURL:`https://app.bowrain.com/ws/startup/settings/notifications`,groups:[{category:`task`,label:`Tasks`,items:[{title:`New content available for translation`,body:`3 new blocks added to the Landing Page project.`}]}]}},Z={args:{frequency:`daily`,totalUpdates:`3`,dashboardURL:`https://app.bowrain.com/ws/acme/notifications`,settingsURL:`https://app.bowrain.com/ws/acme/settings/notifications`,groups:[{category:`quality`,label:`Quality`,items:[{title:`Quality gate failed: Spelling check (es-ES)`,body:`18 spelling errors detected in the latest push.`,priority:`high`}]},{category:`task`,label:`Tasks`,items:[{title:`Deadline approaching: Review mobile content`,body:`Due tomorrow. 42 blocks awaiting review in ja-JP.`,priority:`high`}]},{category:`automation`,label:`Automation`,items:[{title:`Flow failed: Sync connector (GitHub)`,body:`GitHub connector sync failed. Authentication token may have expired.`,priority:`high`}]}]}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    frequency: "daily",
    totalUpdates: "7",
    dashboardURL: "https://app.bowrain.com/ws/acme/notifications",
    settingsURL: "https://app.bowrain.com/ws/acme/settings/notifications",
    groups: [{
      category: "task",
      label: "Tasks",
      items: [{
        title: "New task assigned: Review French translations",
        body: "Alice assigned you to review 24 blocks in fr-FR for the Mobile App project."
      }, {
        title: "Task completed: Translate homepage",
        body: "Bob completed translating homepage content to de-DE."
      }]
    }, {
      category: "quality",
      label: "Quality",
      items: [{
        title: "Quality gate failed: Terminology check",
        body: "3 terminology violations found in fr-FR for the Website project.",
        priority: "high"
      }]
    }, {
      category: "project",
      label: "Project",
      items: [{
        title: "Stream merged: feature/onboarding",
        body: "The feature/onboarding stream was merged into main."
      }, {
        title: "New content available",
        body: "12 new blocks pushed to the Mobile App project for translation."
      }]
    }, {
      category: "mention",
      label: "Mentions",
      items: [{
        title: "Alice mentioned you",
        body: '"@charlie can you review the updated glossary terms?"'
      }]
    }, {
      category: "automation",
      label: "Automation",
      items: [{
        title: "Flow failed: Auto-translate (ja-JP)",
        body: "The auto-translate flow failed for ja-JP in the Website project.",
        priority: "high"
      }]
    }]
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    frequency: "weekly",
    totalUpdates: "23",
    dashboardURL: "https://app.bowrain.com/ws/acme/notifications",
    settingsURL: "https://app.bowrain.com/ws/acme/settings/notifications",
    groups: [{
      category: "project",
      label: "Project",
      items: [{
        title: "Version v2.1 ready",
        body: "All locales passed quality gates. Version v2.1 is ready for release."
      }, {
        title: "Stream merged: feature/payments",
        body: "The feature/payments stream was merged into main."
      }, {
        title: "Progress milestone: fr-FR reached 100%",
        body: "French translations are now complete for the Mobile App project."
      }, {
        title: "Progress milestone: ja-JP reached 75%",
        body: "Japanese translations reached 75% completion for the Website project."
      }, {
        title: "New content available",
        body: "48 new blocks pushed across 3 projects this week."
      }]
    }, {
      category: "task",
      label: "Tasks",
      items: [{
        title: "Deadline approaching: Translate settings page",
        body: "Due in 24 hours. 8 blocks remaining in de-DE.",
        priority: "high"
      }, {
        title: "5 tasks completed this week",
        body: "Translation and review tasks completed across Mobile App and Website."
      }, {
        title: "2 new tasks assigned",
        body: "Review Korean translations, Translate checkout flow to pt-BR."
      }]
    }, {
      category: "quality",
      label: "Quality",
      items: [{
        title: "Quality gate resolved: Terminology check (fr-FR)",
        body: "All terminology violations have been fixed."
      }, {
        title: "Quality gate failed: Length check (de-DE)",
        body: "12 blocks exceed maximum length in de-DE for the Mobile App project.",
        priority: "high"
      }]
    }, {
      category: "mention",
      label: "Mentions",
      items: [{
        title: "Alice mentioned you (3 times)",
        body: 'Latest: "@charlie the Korean reviewer feedback is in"'
      }, {
        title: "Bob mentioned you",
        body: '"@charlie can you check the German plurals?"'
      }]
    }, {
      category: "automation",
      label: "Automation",
      items: [{
        title: "6 automation runs completed",
        body: "Auto-translate and quality check flows ran successfully."
      }, {
        title: "Flow failed: Quality check (ko-KR)",
        body: "The quality check flow timed out for ko-KR. Manual retry needed.",
        priority: "high"
      }]
    }, {
      category: "system",
      label: "System",
      items: [{
        title: "New team member joined",
        body: "Diana joined the workspace as a Translator."
      }]
    }]
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    frequency: "daily",
    totalUpdates: "1",
    dashboardURL: "https://app.bowrain.com/ws/startup/notifications",
    settingsURL: "https://app.bowrain.com/ws/startup/settings/notifications",
    groups: [{
      category: "task",
      label: "Tasks",
      items: [{
        title: "New content available for translation",
        body: "3 new blocks added to the Landing Page project."
      }]
    }]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    frequency: "daily",
    totalUpdates: "3",
    dashboardURL: "https://app.bowrain.com/ws/acme/notifications",
    settingsURL: "https://app.bowrain.com/ws/acme/settings/notifications",
    groups: [{
      category: "quality",
      label: "Quality",
      items: [{
        title: "Quality gate failed: Spelling check (es-ES)",
        body: "18 spelling errors detected in the latest push.",
        priority: "high"
      }]
    }, {
      category: "task",
      label: "Tasks",
      items: [{
        title: "Deadline approaching: Review mobile content",
        body: "Due tomorrow. 42 blocks awaiting review in ja-JP.",
        priority: "high"
      }]
    }, {
      category: "automation",
      label: "Automation",
      items: [{
        title: "Flow failed: Sync connector (GitHub)",
        body: "GitHub connector sync failed. Authentication token may have expired.",
        priority: "high"
      }]
    }]
  }
}`,...Z.parameters?.docs?.source}}},Q=[`DailyDigest`,`WeeklySummary`,`MinimalDaily`,`HighPriorityOnly`]})))()}$();export{J as DailyDigest,Z as HighPriorityOnly,X as MinimalDaily,Y as WeeklySummary,Q as __namedExportsOrder,q as default};