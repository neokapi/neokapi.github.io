import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{_ as n,a as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v}from"./sharing-P_c1WpQ3.js";import{S as y,_ as b,c as x,n as S,t as C}from"./fixtures-D_BWIlyt.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{c(),n(),C(),m(),w=t(),{fn:T}=__STORYBOOK_MODULE_TEST__,E=(e,{parameters:t})=>t.oneTheme?(0,w.jsx)(e,{}):(0,w.jsx)(`div`,{className:`grid gap-4 p-6`,children:[!1,!0].map(t=>(0,w.jsx)(`div`,{className:t?`dark`:void 0,children:(0,w.jsx)(`div`,{className:`mx-auto max-w-3xl rounded-lg border bg-background p-6 text-foreground`,children:(0,w.jsx)(e,{})})},String(t)))}),D={title:`Components/SharePanel`,component:d,tags:[`autodocs`],args:{tabID:`story`,projectName:`Fernwell`,view:v,onSetUp:T(),previewPort:{mapSummary:async()=>y,readerFile:async()=>b,decideView:async()=>x,keptRules:async()=>S}},decorators:[E]},O={},k={args:{view:h}},A={args:{view:a}},j={args:{view:u}},M={args:{view:i}},N={args:{view:g}},P={args:{view:p}},F={args:{view:l}},I={args:{view:r}},L={args:{view:o}},R={args:{view:_}},z={args:{view:f}},B={args:{contextOnly:!0}},V={parameters:{oneTheme:!0},render:()=>(0,w.jsx)(s,{tabID:`story`,open:!0,onClose:T(),onSync:T()})},H=[`OnThisMac`,`BrokenPlace`,`PluginInstalled`,`ThroughGit`,`PushesWaiting`,`NeverSynced`,`ThroughAFolder`,`LongFolderPath`,`Unreachable`,`ThroughS3`,`ManagedOnBowrain`,`BowrainWithoutTeam`,`ContextOnly`,`ChangeDialog`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`On this Mac: the first rung is current, with the workspace and Change.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    view: BROKEN_PLACE_VIEW
  }
}`,...k.parameters?.docs?.source},description:{story:`On this Mac because kapi.yaml names a place that cannot be read: the error, and Change to fix it.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    view: LOCAL_VIEW_WITH_PLUGIN
  }
}`,...A.parameters?.docs?.source},description:{story:`On this Mac, with the kapi-bowrain plugin installed: Bowrain's rung names the command alone.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    view: GIT_VIEW
  }
}`,...j.parameters?.docs?.source},description:{story:`With your team through git, nothing waiting either way: Sync now and Change.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    view: GIT_PUSHES_WAITING_VIEW
  }
}`,...M.parameters?.docs?.source},description:{story:`Through git, with two operations this Mac has not pushed yet.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    view: GIT_NEVER_SYNCED_VIEW
  }
}`,...N.parameters?.docs?.source},description:{story:`Through git and never synced from this Mac, so what waits to pull is not known.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    view: FOLDER_VIEW
  }
}`,...P.parameters?.docs?.source},description:{story:`Through a folder every machine mounts.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    view: FOLDER_LONG_PATH_VIEW
  }
}`,...F.parameters?.docs?.source},description:{story:`Through a folder with a long path, which truncates in its chip.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    view: FOLDER_UNREACHABLE_VIEW
  }
}`,...I.parameters?.docs?.source},description:{story:`Through a folder that could not be reached at the last attempt.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    view: S3_VIEW
  }
}`,...L.parameters?.docs?.source},description:{story:`Through an S3 bucket.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    view: BOWRAIN_VIEW
  }
}`,...R.parameters?.docs?.source},description:{story:`Managed on Bowrain: the third rung is current, with the server and workspace; the team place stays under its rung.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    view: BOWRAIN_WITHOUT_TEAM_VIEW
  }
}`,...z.parameters?.docs?.source},description:{story:`Managed on Bowrain with no team place: the team rung offers Change.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    contextOnly: true
  }
}`,...B.parameters?.docs?.source},description:{story:`A tab over the context alone: the rungs, and why sharing needs a checkout.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    oneTheme: true
  },
  render: () => <ShareSetupDialog tabID="story" open onClose={fn()} onSync={fn()} />
}`,...V.parameters?.docs?.source},description:{story:`The dialog Change opens.`,...V.parameters?.docs?.description}}}})))()}U();export{z as BowrainWithoutTeam,k as BrokenPlace,V as ChangeDialog,B as ContextOnly,F as LongFolderPath,R as ManagedOnBowrain,N as NeverSynced,O as OnThisMac,A as PluginInstalled,M as PushesWaiting,P as ThroughAFolder,j as ThroughGit,L as ThroughS3,I as Unreachable,H as __namedExportsOrder,D as default};