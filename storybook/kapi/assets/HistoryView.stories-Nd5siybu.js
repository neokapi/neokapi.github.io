import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{r as n,t as r}from"./runtime-BFRAZW6z.js";import{n as i,t as a}from"./arrow-left-FuNxfQyt.js";import{t as o}from"./src-DhT4jGb3.js";import{t as s}from"./tooltip-C9zZMJP4.js";import{t as c}from"./button-DOU25u8i.js";import{r as l}from"./SectionHeading-B56DcK8L.js";import{f as u,i as d,l as f,r as p,s as m,t as h}from"./contextFeed-C7qtFVS0.js";import{n as g,t as _}from"./ContextFeedPanel-B_01RsBO.js";function v({onBack:e,feed:t,defaultSelected:n}){return(0,y.jsxs)(`div`,{"data-slot":`history-view`,className:`flex h-full min-h-0 flex-col`,children:[(0,y.jsx)(l,{className:`mb-0 shrink-0 px-6 pt-5 pb-3`,title:r(`ifnyyRvsYOU`,`History`),backButton:(0,y.jsx)(c,{variant:`ghost`,size:`icon-sm`,onClick:e,"aria-label":r(`lPJLHSBHoXE`,`Back to home`),children:(0,y.jsx)(a,{size:16})}),actions:(0,y.jsx)(s,{content:r(`7ldGRjxNgwQ`,`The same as {command} in a terminal`,{command:b}),children:(0,y.jsx)(`code`,{"data-slot":`history-command`,translate:`no`,className:`rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground`,children:b})})}),(0,y.jsx)(`div`,{className:`min-h-0 flex-1 border-t border-border`,children:(0,y.jsx)(_,{feed:t,defaultSelected:n})})]})}var y,b;function x(){return(x=e((()=>{n(),i(),o(),g(),y=t(),b=`kapi context log`,v.__docgenInfo={description:``,methods:[],displayName:`HistoryView`,props:{onBack:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Return to the home.`},feed:{required:!1,tsType:{name:`ContextFeed`},description:`Pre-loaded feed for Storybook and tests, which reach no backend.`},defaultSelected:{required:!1,tsType:{name:`string`},description:`The session to open on, for Storybook. Absent opens on the newest.`}}}})))()}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{x(),u(),S=t(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/HistoryView`,component:v,tags:[`autodocs`],args:{onBack:C()},parameters:{layout:`fullscreen`},decorators:[e=>(0,S.jsx)(`div`,{className:`h-screen bg-background`,children:(0,S.jsx)(e,{})})]},T={args:{feed:p}},E={args:{feed:p},globals:{theme:`dark`}},D={args:{feed:h,defaultSelected:`session:sess-1`}},O={args:{feed:f}},k={args:{feed:p,defaultSelected:`actor:person/asgeir:2026-09-21`}},A={args:{feed:m}},j={args:{feed:d}},M=[`Default`,`Dark`,`ProposalAwaitingADecision`,`AfterAReset`,`SessionSelected`,`ManySessions`,`Empty`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    feed: CONTEXT_FEED
  }
}`,...T.parameters?.docs?.source},description:{story:`Every project's sessions, newest first, the newest selected with its reset.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    feed: CONTEXT_FEED
  },
  globals: {
    theme: "dark"
  }
}`,...E.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    feed: AWAITING_FEED,
    defaultSelected: "session:sess-1"
  }
}`,...D.parameters?.docs?.source},description:{story:`A session with two proposals waiting for a decision.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    feed: RESET_FEED
  }
}`,...O.parameters?.docs?.source},description:{story:`The newest session is a reset, which the toolbar takes back.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    feed: CONTEXT_FEED,
    defaultSelected: "actor:person/asgeir:2026-09-21"
  }
}`,...k.parameters?.docs?.source},description:{story:`A person's day selected.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    feed: MANY_SESSIONS_FEED
  }
}`,...A.parameters?.docs?.source},description:{story:`A long history, scrolled in the list pane.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    feed: EMPTY_FEED
  }
}`,...j.parameters?.docs?.source},description:{story:`Nothing has been recorded in any project yet.`,...j.parameters?.docs?.description}}}})))()}N();export{O as AfterAReset,E as Dark,T as Default,j as Empty,A as ManySessions,D as ProposalAwaitingADecision,k as SessionSelected,M as __namedExportsOrder,w as default};