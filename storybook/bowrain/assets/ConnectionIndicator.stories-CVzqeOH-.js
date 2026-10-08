import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ConnectionIndicator-CY-0pz3J.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o=[{id:7,status:`failed`,operation:`change_set`,edits:[{op:`set_content`,item:`hello.txt`,block:`b1`,locale:`fr`,text:`Salut tout le monde`}],reason:`HTTP 409: the translation moved since you read it`,queued_at:`2026-10-03T12:00:00Z`},{id:8,status:`failed`,operation:`change_set`,edits:[{op:`decide`,outcome:`establish`,item:`hello.txt`,block:`b3`,locale:`de`}],reason:`HTTP 403: approving takes the review permission for de`,queued_at:`2026-10-03T12:01:00Z`},{id:9,status:`dropped`,operation:`update_block_target`,edits:[{op:`set_content`,block:`b2`,locale:`fr`,text:`Bonne nuit`}],reason:`queued by an earlier version of Bowrain`,queued_at:`2026-10-01T09:00:00Z`}],s={title:`Components/ConnectionIndicator`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,padding:24},children:(0,i.jsx)(e,{})})]},c={args:{connectionState:`connected`,pendingChanges:0,failedChanges:[]}},l={args:{connectionState:`offline`,pendingChanges:0,onRetryConnection:a()}},u={args:{connectionState:`offline`,pendingChanges:3,onRetryConnection:a()}},d={args:{connectionState:`connecting`}},f={args:{connectionState:`connected`,failedChanges:o,onDismissFailedChange:a(),onDismissFailedChanges:a()}},p={args:{connectionState:`offline`,pendingChanges:5,failedChanges:o.slice(0,1),onRetryConnection:a()}},m={args:{}},h=[`Connected`,`Offline`,`OfflineWithPendingChanges`,`Reconnecting`,`RejectedChanges`,`OfflineWithRejectedChanges`,`NoConnectivitySeam`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "connected",
    pendingChanges: 0,
    failedChanges: []
  }
}`,...c.parameters?.docs?.source},description:{story:`The ordinary state: a connected app says nothing about its connection.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "offline",
    pendingChanges: 0,
    onRetryConnection: fn()
  }
}`,...l.parameters?.docs?.source},description:{story:`Offline with nothing queued behind it yet.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "offline",
    pendingChanges: 3,
    onRetryConnection: fn()
  }
}`,...u.parameters?.docs?.source},description:{story:`Offline with work waiting. The count is what the recorder waits to see go.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "connecting"
  }
}`,...d.parameters?.docs?.source},description:{story:`An attempt is in flight, either on the backoff or because Retry was pressed.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "connected",
    failedChanges,
    onDismissFailedChange: fn(),
    onDismissFailedChanges: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`Changes that were not sent outlive the outage, so this shows while connected
too. The count opens the list: what each change was, where, its wording and
why it was not sent, including a save an earlier version queued in a form
this one no longer sends.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    connectionState: "offline",
    pendingChanges: 5,
    failedChanges: failedChanges.slice(0, 1),
    onRetryConnection: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`Everything at once: offline, work queued, and earlier edits refused.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...m.parameters?.docs?.source},description:{story:`On the web there is no working copy, so the seam reports nothing.`,...m.parameters?.docs?.description}}}})))()}g();export{c as Connected,m as NoConnectivitySeam,l as Offline,u as OfflineWithPendingChanges,p as OfflineWithRejectedChanges,d as Reconnecting,f as RejectedChanges,h as __namedExportsOrder,s as default};