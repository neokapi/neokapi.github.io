import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./sharing-DP4fWJe2.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p(),a(),r(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/SharePanel`,component:s,tags:[`autodocs`],args:{tabID:`story`,sharing:l,onSetUp:h()},decorators:[e=>(0,m.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,m.jsx)(e,{})})]},_={},v={args:{sharing:u}},y={args:{sharing:n}},b={args:{sharing:o}},x={args:{sharing:c}},S={args:{sharing:d}},C={args:{sharing:f}},w={args:{contextOnly:!0}},T={render:()=>(0,m.jsx)(i,{tabID:`story`,open:!0,onClose:h(),onSync:h()})},E=[`Local`,`SharedInSync`,`PushesWaiting`,`NeverSynced`,`Unreachable`,`SharedThroughS3`,`BowrainConnected`,`ContextOnly`,`SetUpDialog`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`On this Mac: kapi.yaml names no place, so the first rung is marked and the second offers Set up sharing.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: GIT_IN_SYNC
  }
}`,...v.parameters?.docs?.source},description:{story:`Shared through git, with nothing waiting either way.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: GIT_PUSHES_WAITING
  }
}`,...y.parameters?.docs?.source},description:{story:`Shared through git, with two operations this Mac has not pushed yet.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: GIT_NEVER_SYNCED
  }
}`,...b.parameters?.docs?.source},description:{story:`Shared through git and never synced from this Mac, so what waits to pull is not known.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: FOLDER_UNREACHABLE
  }
}`,...x.parameters?.docs?.source},description:{story:`Shared through a folder that could not be reached at the last attempt.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: S3_IN_SYNC
  }
}`,...S.parameters?.docs?.source},description:{story:`Shared through an S3 bucket.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sharing: BOWRAIN_CONNECTED
  }
}`,...C.parameters?.docs?.source},description:{story:`Connected to Bowrain: the third rung is marked.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    contextOnly: true
  }
}`,...w.parameters?.docs?.source},description:{story:`A tab over the context alone: the first rung, and the line saying sharing needs a checkout.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ShareSetupDialog tabID="story" open onClose={fn()} onSync={fn()} />
}`,...T.parameters?.docs?.source},description:{story:`The dialog Set up sharing opens.`,...T.parameters?.docs?.description}}}})))()}D();export{C as BowrainConnected,w as ContextOnly,_ as Local,b as NeverSynced,y as PushesWaiting,T as SetUpDialog,v as SharedInSync,S as SharedThroughS3,x as Unreachable,E as __namedExportsOrder,g as default};