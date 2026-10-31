import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./assistants-C4-EmIUW.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{u(),m(),h=t(),g=e=>(0,h.jsx)(`div`,{className:`grid gap-4 p-6`,children:[!1,!0].map(t=>(0,h.jsx)(`div`,{className:t?`dark`:void 0,children:(0,h.jsx)(`div`,{className:`mx-auto max-w-3xl rounded-lg border bg-background p-6 text-foreground`,children:(0,h.jsx)(e,{})})},String(t)))}),_={title:`Components/AssistantsPage`,component:a,tags:[`autodocs`],args:{tabID:`story`,projectName:`KapiMart`,onShowReads:()=>{},onOpenSession:()=>{},view:o},decorators:[g]},v={},y={args:{view:c}},b={args:{view:p}},x={args:{view:l}},S={args:{view:d}},C={args:{view:n}},w={args:{projectName:`KapiMart storefront and help centre, every market`,view:{...c,sessions:[...r,...Array.from({length:6},(e,t)=>i({id:`session:older-${t}`,actor:{kind:`agent`,name:t%2?`cursor`:`codex`,session:`older-${t}`},last:`2026-10-${String(20-t).padStart(2,`0`)}T10:00:00Z`,operations:t+1,suggestions:t}))]}}},T={args:{view:f}},E={args:{view:{...f,sessions:s.slice(0,1)}}},D={args:{view:{...f,sessions:s.slice(1,2)}}},O={args:{view:{...f,sessions:s.slice(2,3)}}},k=[`NoneConnected`,`ClaudeCodeConnected`,`CheckPending`,`RulesFilesMissing`,`AssistantsFailed`,`NoCheckout`,`ManySessions`,`SessionsTheCheckRanIn`,`SessionWithNotesAndRuns`,`HookOnlySession`,`CleanSession`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`No assistant connected and nothing recorded: every row offers Connect.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_CLAUDE_CONNECTED
  }
}`,...y.parameters?.docs?.source},description:{story:`Claude Code connected with the check on, and the sessions recorded here.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_CHECK_PENDING
  }
}`,...b.parameters?.docs?.source},description:{story:`Claude Code connected; the check waits on the two commands that install the plugin.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_RULES_MISSING
  }
}`,...x.parameters?.docs?.source},description:{story:`Claude Code's own files in place and the rules files deleted: not connected, Connect again.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_HOSTS_FAILED
  }
}`,...S.parameters?.docs?.source},description:{story:`The assistants could not be read: the error stands in their place and the sessions stay.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_NO_CHECKOUT
  }
}`,...C.parameters?.docs?.source},description:{story:`A tab over the project's context alone: no assistant can be connected, the sessions stay.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    projectName: "KapiMart storefront and help centre, every market",
    view: {
      ...ASSISTANTS_CLAUDE_CONNECTED,
      sessions: [...SESSIONS, ...Array.from({
        length: 6
      }, (_, i) => session({
        id: \`session:older-\${i}\`,
        actor: {
          kind: "agent",
          name: i % 2 ? "cursor" : "codex",
          session: \`older-\${i}\`
        },
        last: \`2026-10-\${String(20 - i).padStart(2, "0")}T10:00:00Z\`,
        operations: i + 1,
        suggestions: i
      }))]
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`A long project name and a full list of sessions.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_WITH_CHECKS
  }
}`,...T.parameters?.docs?.source},description:{story:`Sessions the check on every edit ran in: suggestions with runs that caught
two findings, a session that only ran the check, a clean session, and the
person's day with no run. The header totals what was caught.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      ...ASSISTANTS_WITH_CHECKS,
      sessions: SESSIONS_WITH_CHECKS.slice(0, 1)
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`A session with suggestions whose runs caught what they reported.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      ...ASSISTANTS_WITH_CHECKS,
      sessions: SESSIONS_WITH_CHECKS.slice(1, 2)
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`A session that only ran the check, with a finding left failing and nothing caught.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    view: {
      ...ASSISTANTS_WITH_CHECKS,
      sessions: SESSIONS_WITH_CHECKS.slice(2, 3)
    }
  }
}`,...O.parameters?.docs?.source},description:{story:`A session whose every run was clean.`,...O.parameters?.docs?.description}}}})))()}A();export{S as AssistantsFailed,b as CheckPending,y as ClaudeCodeConnected,O as CleanSession,D as HookOnlySession,w as ManySessions,C as NoCheckout,v as NoneConnected,x as RulesFilesMissing,E as SessionWithNotesAndRuns,T as SessionsTheCheckRanIn,k as __namedExportsOrder,_ as default};