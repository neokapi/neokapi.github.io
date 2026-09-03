import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{n as i,t as a}from"./ErrorNotice-BYsDgDQ_.js";function o(e){return(0,s.jsx)(`div`,{ref:e=>{(e?.querySelector(`[data-testid="error-notice-details-toggle"][aria-expanded="false"]`))?.click()},children:(0,s.jsx)(a,{...e})})}var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),s=t(),c={title:`Foundations/ErrorNotice`,component:a,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:560,padding:16},children:(0,s.jsx)(e,{})})]},l={args:{error:{error:`invalid request body`,details:`field default_source_language is required`},title:`Couldn't create the project`}},u={args:{error:{error:`cannot grant permissions beyond your own`,code:`forbidden`},title:`Couldn't save the member role`}},d={args:{error:Error(`409: {"error":"slug is already in use","details":"workspace slug \\"acme\\" was taken 3 days ago"}`),title:`Couldn't rename the workspace`}},f={render:()=>(0,s.jsx)(o,{error:{error:`rate limit exceeded: max 10 pushes per minute per project`,code:`rate_limited`,details:`retry after 42s`,request_id:`req_8fk2m1`,limits:{per_minute:10,used:10}},title:r(`lOCeWMEPDB3`,`Push rejected`)})},p={args:{variant:`inline`,error:{error:`stream is required`}}},m={render:()=>(0,s.jsx)(o,{variant:`inline`,error:Error(`404: {"error":"block not found","block_id":"b_1289"}`)})},h={args:{error:`Failed to reach the translation service`,hint:`Check your connection and try again.`}},g={args:{error:Error(`503: `),title:`Couldn't load activities`,onRetry:()=>{}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      error: "invalid request body",
      details: "field default_source_language is required"
    },
    title: "Couldn't create the project"
  }
}`,...l.parameters?.docs?.source},description:{story:"Panel variant with a REST `{error, details}` envelope and Details disclosure.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      error: "cannot grant permissions beyond your own",
      code: "forbidden"
    },
    title: "Couldn't save the member role"
  }
}`,...u.parameters?.docs?.source},description:{story:`Panel with a known code mapped to friendly phrasing + recovery hint.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error('409: {"error":"slug is already in use","details":"workspace slug \\\\"acme\\\\" was taken 3 days ago"}'),
    title: "Couldn't rename the workspace"
  }
}`,...d.parameters?.docs?.source},description:{story:'The RestApiAdapter pattern: `Error("<status>: <json body>")`.',...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Expanded highlighted-JSON details (open the disclosure to compare themes).`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    error: {
      error: "stream is required"
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Compact inline variant for dialogs and forms.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorNoticeOpen variant="inline" error={new Error('404: {"error":"block not found","block_id":"b_1289"}')} />
}`,...m.parameters?.docs?.source},description:{story:`Inline variant with an expanded JSON detail view.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Failed to reach the translation service",
    hint: "Check your connection and try again."
  }
}`,...h.parameters?.docs?.source},description:{story:`Plain-string errors get no disclosure — just the friendly line.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error("503: "),
    title: "Couldn't load activities",
    onRetry: () => {}
  }
}`,...g.parameters?.docs?.source},description:{story:`With a retry action.`,...g.parameters?.docs?.description}}},_=[`Panel`,`PanelWithCode`,`AdapterError`,`PanelDetailsOpen`,`Inline`,`InlineDetailsOpen`,`PlainString`,`WithRetry`]})))()}v();export{d as AdapterError,p as Inline,m as InlineDetailsOpen,l as Panel,f as PanelDetailsOpen,u as PanelWithCode,h as PlainString,g as WithRetry,_ as __namedExportsOrder,c as default};