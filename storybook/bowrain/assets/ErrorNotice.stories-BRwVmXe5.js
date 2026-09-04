import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{a as i,n as a,o,t as s}from"./ErrorNotice-Da0623M8.js";function c(e){return(0,l.jsx)(`div`,{ref:e=>{(e?.querySelector(`[data-testid="error-notice-details-toggle"][aria-expanded="false"]`))?.click()},children:(0,l.jsx)(s,{...e})})}var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),a(),o(),l=t(),u={title:`Foundations/ErrorNotice`,component:s,tags:[`autodocs`],decorators:[e=>(0,l.jsx)(`div`,{style:{maxWidth:560,padding:16},children:(0,l.jsx)(e,{})})]},d={args:{error:{error:`invalid request body`,details:`field default_source_language is required`},title:`Couldn't create the project`}},f={args:{error:{error:`cannot grant permissions beyond your own`,code:`forbidden`},title:`Couldn't save the member role`}},p={args:{variant:`inline`,error:i(403,JSON.stringify({error:`separation of duties: you cannot review or approve your own work`,reference:`req_3k9d2p`})),title:`The review action didn't go through`}},m={args:{error:i(403,JSON.stringify({error:`insufficient project permissions`,reference:`req_7q1mz0`})),title:`Couldn't approve the translation`}},h={args:{error:Error(`409: {"error":"slug is already in use","details":"workspace slug \\"acme\\" was taken 3 days ago"}`),title:`Couldn't rename the workspace`}},g={render:()=>(0,l.jsx)(c,{error:{error:`rate limit exceeded: max 10 pushes per minute per project`,code:`rate_limited`,details:`retry after 42s`,request_id:`req_8fk2m1`,limits:{per_minute:10,used:10}},title:r(`lOCeWMEPDB3`,`Push rejected`)})},_={args:{variant:`inline`,error:{error:`stream is required`}}},v={render:()=>(0,l.jsx)(c,{variant:`inline`,error:Error(`404: {"error":"block not found","block_id":"b_1289"}`)})},y={args:{error:`Failed to reach the translation service`,hint:`Check your connection and try again.`}},b={args:{error:Error(`503: `),title:`Couldn't load activities`,onRetry:()=>{}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      error: "invalid request body",
      details: "field default_source_language is required"
    },
    title: "Couldn't create the project"
  }
}`,...d.parameters?.docs?.source},description:{story:"Panel variant with a REST `{error, details}` envelope and Details disclosure.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    error: {
      error: "cannot grant permissions beyond your own",
      code: "forbidden"
    },
    title: "Couldn't save the member role"
  }
}`,...f.parameters?.docs?.source},description:{story:`Panel with a known code mapped to friendly phrasing + recovery hint.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    error: apiErrorFromResponse(403, JSON.stringify({
      error: "separation of duties: you cannot review or approve your own work",
      reference: "req_3k9d2p"
    })),
    title: "The review action didn't go through"
  }
}`,...p.parameters?.docs?.source},description:{story:`A 403 that states its reason: the review surface's banner when the server
refuses the reviewer's own work. The sentence stands alone; no grant fixes
it, so no remedy is appended.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: apiErrorFromResponse(403, JSON.stringify({
      error: "insufficient project permissions",
      reference: "req_7q1mz0"
    })),
    title: "Couldn't approve the translation"
  }
}`,...m.parameters?.docs?.source},description:{story:`A 403 written for a missing grant keeps the remedy a workspace admin can act on.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error('409: {"error":"slug is already in use","details":"workspace slug \\\\"acme\\\\" was taken 3 days ago"}'),
    title: "Couldn't rename the workspace"
  }
}`,...h.parameters?.docs?.source},description:{story:'The RestApiAdapter pattern: `Error("<status>: <json body>")`.',...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Expanded highlighted-JSON details (open the disclosure to compare themes).`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "inline",
    error: {
      error: "stream is required"
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Compact inline variant for dialogs and forms.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ErrorNoticeOpen variant="inline" error={new Error('404: {"error":"block not found","block_id":"b_1289"}')} />
}`,...v.parameters?.docs?.source},description:{story:`Inline variant with an expanded JSON detail view.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Failed to reach the translation service",
    hint: "Check your connection and try again."
  }
}`,...y.parameters?.docs?.source},description:{story:`Plain-string errors get no disclosure — just the friendly line.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    error: new Error("503: "),
    title: "Couldn't load activities",
    onRetry: () => {}
  }
}`,...b.parameters?.docs?.source},description:{story:`With a retry action.`,...b.parameters?.docs?.description}}},x=[`Panel`,`PanelWithCode`,`RefusedReviewAction`,`PermissionDenied`,`AdapterError`,`PanelDetailsOpen`,`Inline`,`InlineDetailsOpen`,`PlainString`,`WithRetry`]})))()}S();export{h as AdapterError,_ as Inline,v as InlineDetailsOpen,d as Panel,g as PanelDetailsOpen,f as PanelWithCode,m as PermissionDenied,y as PlainString,p as RefusedReviewAction,b as WithRetry,x as __namedExportsOrder,u as default};