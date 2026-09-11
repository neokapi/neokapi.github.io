import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ConnectionIndicator-D1miOUz9.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/ConnectionIndicator`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:24},children:(0,i.jsx)(e,{})})]},s={args:{connectionState:`connected`,pendingChanges:0,failedChanges:0}},c={args:{connectionState:`offline`,pendingChanges:0,onRetryConnection:a()}},l={args:{connectionState:`offline`,pendingChanges:3,onRetryConnection:a()}},u={args:{connectionState:`connecting`}},d={args:{connectionState:`connected`,failedChanges:2}},f={args:{connectionState:`offline`,pendingChanges:5,failedChanges:1,onRetryConnection:a()}},p={args:{}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "connected",
    pendingChanges: 0,
    failedChanges: 0
  }
}`,...s.parameters?.docs?.source},description:{story:`The ordinary state: a connected app says nothing about its connection.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "offline",
    pendingChanges: 0,
    onRetryConnection: fn()
  }
}`,...c.parameters?.docs?.source},description:{story:`Offline with nothing queued behind it yet.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "offline",
    pendingChanges: 3,
    onRetryConnection: fn()
  }
}`,...l.parameters?.docs?.source},description:{story:`Offline with work waiting. The count is what the recorder waits to see go.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "connecting"
  }
}`,...u.parameters?.docs?.source},description:{story:`An attempt is in flight, either on the backoff or because Retry was pressed.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "connected",
    failedChanges: 2
  }
}`,...d.parameters?.docs?.source},description:{story:`Rejected edits outlive the outage, so this shows while connected too.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "offline",
    pendingChanges: 5,
    failedChanges: 1,
    onRetryConnection: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`Everything at once: offline, work queued, and earlier edits refused.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...p.parameters?.docs?.source},description:{story:`On the web there is no working copy, so the seam reports nothing.`,...p.parameters?.docs?.description}}},m=[`Connected`,`Offline`,`OfflineWithPendingChanges`,`Reconnecting`,`RejectedChanges`,`OfflineWithRejectedChanges`,`NoConnectivitySeam`]})))()}h();export{s as Connected,p as NoConnectivitySeam,c as Offline,l as OfflineWithPendingChanges,f as OfflineWithRejectedChanges,u as Reconnecting,d as RejectedChanges,m as __namedExportsOrder,o as default};