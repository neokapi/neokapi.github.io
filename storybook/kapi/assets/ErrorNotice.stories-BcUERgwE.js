import{i as e}from"./preload-helper-DRGloZ2I.js";import{Xn as t,Yn as n}from"./iframe-BIVGM8Qe.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),r=`{"message":"no default flow configured — add a flow or pick one to run","cause":{},"kind":"RuntimeError"}`,i=JSON.stringify({message:`push failed: the server rejected 3 of 128 blocks`,kind:`SyncError`,cause:{message:`block 7f3a: content hash mismatch`,path:`src/locales/en-US.json`,attempt:2}}),a={title:`Foundations/ErrorNotice`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Friendly-first error surface. parseAppError normalises Wails envelopes, nested JSON strings, Error instances, and plain strings into a friendly line; the raw structured payload stays available behind a Details disclosure, rendered as theme-aware syntax-highlighted JSON.`}}}},o={name:`Inline — Wails envelope`,args:{error:r,variant:`inline`}},s={name:`Panel — structured cause, JSON detail`,args:{error:i,variant:`panel`,hint:`Retry the push once the server is reachable, or narrow the collection.`}},c={name:`Panel — contextual title + parsed secondary`,args:{error:r,title:`Failed to bring the project up to date`,variant:`panel`}},l={name:`Inline — plain string (no disclosure)`,args:{error:`The file could not be opened.`,variant:`inline`}},u={name:`Panel — Error instance (stack in details)`,args:{error:Error(`fetch failed: ECONNREFUSED 127.0.0.1:8080`),variant:`panel`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Inline — Wails envelope",
  args: {
    error: wailsEnvelope,
    variant: "inline"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Panel — structured cause, JSON detail",
  args: {
    error: richEnvelope,
    variant: "panel",
    hint: "Retry the push once the server is reachable, or narrow the collection."
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Panel — contextual title + parsed secondary",
  args: {
    error: wailsEnvelope,
    title: "Failed to bring the project up to date",
    variant: "panel"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Inline — plain string (no disclosure)",
  args: {
    error: "The file could not be opened.",
    variant: "inline"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Panel — Error instance (stack in details)",
  args: {
    error: new Error("fetch failed: ECONNREFUSED 127.0.0.1:8080"),
    variant: "panel"
  }
}`,...u.parameters?.docs?.source}}},d=[`InlineWailsEnvelope`,`PanelWithJsonDetail`,`ContextualTitle`,`PlainString`,`ErrorInstance`]}))();export{c as ContextualTitle,u as ErrorInstance,o as InlineWailsEnvelope,s as PanelWithJsonDetail,l as PlainString,d as __namedExportsOrder,a as default};