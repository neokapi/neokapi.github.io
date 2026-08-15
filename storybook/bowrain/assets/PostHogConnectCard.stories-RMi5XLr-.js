import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{n as t,t as n}from"./PostHogConnectCard-CzIwGV52.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r={configured:!0,host:`eu`,host_label:`eu.posthog.com`,posthog_project_id:`12345`,api_key_masked:`••••9fk2`,path_locale_pattern:`^/([a-z]{2}(-[A-Z]{2})?)/`,updated_at:`2026-07-01T09:12:00Z`},i=async e=>({...r,host:e.host,posthog_project_id:e.posthog_project_id}),a=(e,t,n)=>async()=>{throw await new Promise(e=>setTimeout(e,300)),Error(`${e}: ${JSON.stringify({error:t,code:n})}`)},o={title:`Locale Demand/PostHog Connect Card`,component:n,parameters:{layout:`centered`},args:{onSave:i}},s={},c={args:{config:r}},l={args:{config:{...r,api_key_masked:void 0},onSave:a(400,`personal API key was rejected`,`bad_key`)}},u={args:{config:{...r,host:`https://posthog.example.com`,api_key_masked:`••••x7q1`}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`First-time connect: empty form, US Cloud preselected.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    config: savedConfig
  }
}`,...c.parameters?.docs?.source},description:{story:`Re-connect: host/project prefilled, stored key shown as a masked tail.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    config: {
      ...savedConfig,
      api_key_masked: undefined
    },
    onSave: rejectWith(400, "personal API key was rejected", "bad_key")
  }
}`,...l.parameters?.docs?.source},description:{story:`Server rejected the personal API key — the error lands on the key field.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    config: {
      ...savedConfig,
      host: "https://posthog.example.com",
      api_key_masked: "••••x7q1"
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Self-hosted flow: host select expanded to a URL field.`,...u.parameters?.docs?.description}}},d=[`Default`,`Reconnect`,`BadKey`,`SelfHosted`]})))()}f();export{l as BadKey,s as Default,c as Reconnect,u as SelfHosted,d as __namedExportsOrder,o as default};