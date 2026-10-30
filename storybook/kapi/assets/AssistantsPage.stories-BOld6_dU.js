import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,c as r,d as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./assistants-_dUS2XWM.js";var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),r(),p=t(),m=e=>(0,p.jsx)(`div`,{className:`grid gap-4 p-6`,children:[!1,!0].map(t=>(0,p.jsx)(`div`,{className:t?`dark`:void 0,children:(0,p.jsx)(`div`,{className:`mx-auto max-w-3xl rounded-lg border bg-background p-6 text-foreground`,children:(0,p.jsx)(e,{})})},String(t)))}),h={title:`Components/AssistantsPage`,component:f,tags:[`autodocs`],args:{tabID:`story`,projectName:`KapiMart`,onShowReads:()=>{},onOpenSession:()=>{},view:a},decorators:[m]},g={},_={args:{view:s}},v={args:{view:d}},y={args:{view:c}},b={args:{view:l}},x={args:{view:n}},S={args:{projectName:`KapiMart storefront and help centre, every market`,view:{...s,sessions:[...u,...Array.from({length:6},(e,t)=>o({id:`session:older-${t}`,actor:{kind:`agent`,name:t%2?`cursor`:`codex`,session:`older-${t}`},last:`2026-10-${String(20-t).padStart(2,`0`)}T10:00:00Z`,operations:t+1,suggestions:t}))]}}},C=[`NoneConnected`,`ClaudeCodeConnected`,`CheckPending`,`RulesFilesMissing`,`AssistantsFailed`,`NoCheckout`,`ManySessions`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source},description:{story:`No assistant connected and nothing recorded: every row offers Connect.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_CLAUDE_CONNECTED
  }
}`,..._.parameters?.docs?.source},description:{story:`Claude Code connected with the check on, and the sessions recorded here.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_CHECK_PENDING
  }
}`,...v.parameters?.docs?.source},description:{story:`Claude Code connected; the check waits on the two commands that install the plugin.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_RULES_MISSING
  }
}`,...y.parameters?.docs?.source},description:{story:`Claude Code's own files in place and the rules files deleted: not connected, Connect again.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_HOSTS_FAILED
  }
}`,...b.parameters?.docs?.source},description:{story:`The assistants could not be read: the error stands in their place and the sessions stay.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSISTANTS_NO_CHECKOUT
  }
}`,...x.parameters?.docs?.source},description:{story:`A tab over the project's context alone: no assistant can be connected, the sessions stay.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`A long project name and a full list of sessions.`,...S.parameters?.docs?.description}}}})))()}w();export{b as AssistantsFailed,v as CheckPending,_ as ClaudeCodeConnected,S as ManySessions,x as NoCheckout,g as NoneConnected,y as RulesFilesMissing,C as __namedExportsOrder,h as default};