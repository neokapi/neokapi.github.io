import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./sharing-CbztgMku.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),c(),h(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v=(e,{parameters:t})=>t.oneTheme?(0,g.jsx)(e,{}):(0,g.jsx)(`div`,{className:`grid gap-4 p-6`,children:[!1,!0].map(t=>(0,g.jsx)(`div`,{className:t?`dark`:void 0,children:(0,g.jsx)(`div`,{className:`mx-auto max-w-3xl rounded-lg border bg-background p-6 text-foreground`,children:(0,g.jsx)(e,{})})},String(t)))}),y={title:`Components/SharePanel`,component:i,tags:[`autodocs`],args:{tabID:`story`,sharing:r,onSetUp:_()},decorators:[v]},b={},x={args:{sharing:n}},S={args:{sharing:p}},C={args:{sharing:u}},w={args:{sharing:f}},T={args:{sharing:o}},E={args:{sharing:s}},D={args:{sharing:m}},O={args:{sharing:l}},k={args:{contextOnly:!0}},A={parameters:{oneTheme:!0},render:()=>(0,g.jsx)(d,{tabID:`story`,open:!0,onClose:_(),onSync:_()})},j=[`Local`,`SharedThroughGit`,`PushesWaiting`,`NeverSynced`,`SharedThroughFolder`,`Unreachable`,`SharedThroughS3`,`BowrainConnected`,`BowrainWithoutTeam`,`ContextOnly`,`SetUpDialog`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source},description:{story:`On this Mac only: the first rung is current, and its card offers Set up sharing.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: GIT_IN_SYNC
  }
}`,...x.parameters?.docs?.source},description:{story:`Shared through git, with nothing waiting either way. The card offers Sync now and Change.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: GIT_PUSHES_WAITING
  }
}`,...S.parameters?.docs?.source},description:{story:`Shared through git, with two operations this Mac has not pushed yet.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: GIT_NEVER_SYNCED
  }
}`,...C.parameters?.docs?.source},description:{story:`Shared through git and never synced from this Mac, so what waits to pull is not known.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: FOLDER_IN_SYNC
  }
}`,...w.parameters?.docs?.source},description:{story:`Shared through a folder every machine mounts.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: FOLDER_UNREACHABLE
  }
}`,...T.parameters?.docs?.source},description:{story:`Shared through a folder that could not be reached at the last attempt.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: S3_IN_SYNC
  }
}`,...E.parameters?.docs?.source},description:{story:`Shared through an S3 bucket.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: BOWRAIN_CONNECTED
  }
}`,...D.parameters?.docs?.source},description:{story:`Connected to Bowrain: the third rung is current, and its card names the server and workspace.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: BOWRAIN_WITHOUT_TEAM
  }
}`,...O.parameters?.docs?.source},description:{story:`Connected to Bowrain with no team place: the team rung stays to do.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    contextOnly: true
  }
}`,...k.parameters?.docs?.source},description:{story:`A tab over the context alone: the rungs, and why sharing needs a checkout.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    oneTheme: true
  },
  render: () => <ShareSetupDialog tabID="story" open onClose={fn()} onSync={fn()} />
}`,...A.parameters?.docs?.source},description:{story:`The dialog Set up sharing and Change open.`,...A.parameters?.docs?.description}}}})))()}M();export{D as BowrainConnected,O as BowrainWithoutTeam,k as ContextOnly,b as Local,C as NeverSynced,S as PushesWaiting,A as SetUpDialog,w as SharedThroughFolder,x as SharedThroughGit,E as SharedThroughS3,T as Unreachable,j as __namedExportsOrder,y as default};