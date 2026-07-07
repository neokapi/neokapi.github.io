import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{n,t as r}from"./ErrorNotice-DzEMuZF-.js";function i(e){return(0,a.jsx)(`div`,{ref:e=>{(e?.querySelector(`[data-testid="error-notice-details-toggle"][aria-expanded="false"]`))?.click()},children:(0,a.jsx)(r,{...e})})}var a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),a=t(),o={title:`Foundations/ErrorNotice`,component:r,tags:[`autodocs`],decorators:[e=>(0,a.jsx)(`div`,{style:{maxWidth:560,padding:16},children:(0,a.jsx)(e,{})})]},s={args:{error:{error:`invalid request body`,details:`field default_source_language is required`},title:`Couldn't create the project`}},c={args:{error:{error:`cannot grant permissions beyond your own`,code:`forbidden`},title:`Couldn't save the member role`}},l={args:{error:Error(`409: {"error":"slug is already in use","details":"workspace slug \\"acme\\" was taken 3 days ago"}`),title:`Couldn't rename the workspace`}},u={render:()=>(0,a.jsx)(i,{error:{error:`rate limit exceeded: max 10 pushes per minute per project`,code:`rate_limited`,details:`retry after 42s`,request_id:`req_8fk2m1`,limits:{per_minute:10,used:10}},title:`Push rejected`})},d={args:{variant:`inline`,error:{error:`stream is required`}}},f={render:()=>(0,a.jsx)(i,{variant:`inline`,error:Error(`404: {"error":"block not found","block_id":"b_1289"}`)})},p={args:{error:`Failed to reach the translation service`,hint:`Check your connection and try again.`}},m={args:{error:Error(`503: `),title:`Couldn't load activities`,onRetry:()=>{}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      error: "invalid request body",
      details: "field default_source_language is required"
    },
    title: "Couldn't create the project"
  }
}`,...s.parameters?.docs?.source},description:{story:"Panel variant with a REST `{error, details}` envelope and Details disclosure.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      error: "cannot grant permissions beyond your own",
      code: "forbidden"
    },
    title: "Couldn't save the member role"
  }
}`,...c.parameters?.docs?.source},description:{story:`Panel with a known code mapped to friendly phrasing + recovery hint.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error('409: {"error":"slug is already in use","details":"workspace slug \\\\"acme\\\\" was taken 3 days ago"}'),
    title: "Couldn't rename the workspace"
  }
}`,...l.parameters?.docs?.source},description:{story:'The RestApiAdapter pattern: `Error("<status>: <json body>")`.',...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorNoticeOpen error={{
    error: "rate limit exceeded: max 10 pushes per minute per project",
    code: "rate_limited",
    details: "retry after 42s",
    request_id: "req_8fk2m1",
    limits: {
      per_minute: 10,
      used: 10
    }
  }} title="Push rejected" />
}`,...u.parameters?.docs?.source},description:{story:`Expanded highlighted-JSON details (open the disclosure to compare themes).`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    error: {
      error: "stream is required"
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Compact inline variant for dialogs and forms.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorNoticeOpen variant="inline" error={new Error('404: {"error":"block not found","block_id":"b_1289"}')} />
}`,...f.parameters?.docs?.source},description:{story:`Inline variant with an expanded JSON detail view.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Failed to reach the translation service",
    hint: "Check your connection and try again."
  }
}`,...p.parameters?.docs?.source},description:{story:`Plain-string errors get no disclosure — just the friendly line.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error("503: "),
    title: "Couldn't load activities",
    onRetry: () => {}
  }
}`,...m.parameters?.docs?.source},description:{story:`With a retry action.`,...m.parameters?.docs?.description}}},h=[`Panel`,`PanelWithCode`,`AdapterError`,`PanelDetailsOpen`,`Inline`,`InlineDetailsOpen`,`PlainString`,`WithRetry`]}))();export{l as AdapterError,d as Inline,f as InlineDetailsOpen,s as Panel,u as PanelDetailsOpen,c as PanelWithCode,p as PlainString,m as WithRetry,h as __namedExportsOrder,o as default};