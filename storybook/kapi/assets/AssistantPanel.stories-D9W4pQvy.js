import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,c as r,d as i,f as a,i as o,l as s,m as c,n as l,o as u,p as d,r as f,s as p,t as m,u as h}from"./rulesFiles-CSRjeb56.js";var g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{h(),c(),a(),r(),o(),g=t(),_={title:`Components/AssistantPanel`,component:s,tags:[`autodocs`],args:{tabID:`story`,hosts:n,rulesFiles:f},decorators:[e=>(0,g.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,g.jsx)(e,{})})]},v={},y={args:{hosts:p}},b={args:{hosts:u}},x={args:{hosts:p,rulesFiles:m}},S={args:{rulesFiles:l}},C={args:{rulesFiles:[]}},w={args:{contextOnly:!0}},T={render:()=>(0,g.jsx)(d,{tabID:`story`,hosts:u})},E={render:()=>(0,g.jsx)(i,{tabID:`story`,rulesFiles:l})},D=[`AllConnected`,`NoneConnected`,`ClaudeDesktopAbsent`,`RulesFilesNotWritten`,`RulesFilesPartlyWritten`,`NoRules`,`ContextOnly`,`HostsOnly`,`RulesFilesOnly`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`Every assistant connected, and the rules files written.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    hosts: HOSTS_NONE_CONNECTED
  }
}`,...y.parameters?.docs?.source},description:{story:`Every assistant is on this Mac and none is connected: each row offers Connect.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    hosts: HOSTS_CLAUDE_DESKTOP_ABSENT
  }
}`,...b.parameters?.docs?.source},description:{story:`Claude Code connected and Cursor not yet; VS Code, Codex and Claude Desktop
are not on this Mac, so they come last, muted, and Claude Desktop offers no Connect.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    hosts: HOSTS_NONE_CONNECTED,
    rulesFiles: RULES_FILES_NOT_WRITTEN
  }
}`,...x.parameters?.docs?.source},description:{story:`No rules file written yet: each is marked, and Write them now is offered.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: RULES_FILES_PARTLY_WRITTEN
  }
}`,...S.parameters?.docs?.source},description:{story:`The root's files written, the docs folder's not yet.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: []
  }
}`,...C.parameters?.docs?.source},description:{story:`The project's context holds no rules, so kapi writes no file.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    contextOnly: true
  }
}`,...w.parameters?.docs?.source},description:{story:`A tab over the context alone: connecting needs a checkout.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <AssistantHosts tabID="story" hosts={HOSTS_CLAUDE_DESKTOP_ABSENT} />
}`,...T.parameters?.docs?.source},description:{story:`The connections on their own.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <RulesFilesView tabID="story" rulesFiles={RULES_FILES_PARTLY_WRITTEN} />
}`,...E.parameters?.docs?.source},description:{story:`The rules files on their own.`,...E.parameters?.docs?.description}}}})))()}O();export{v as AllConnected,b as ClaudeDesktopAbsent,w as ContextOnly,T as HostsOnly,C as NoRules,y as NoneConnected,x as RulesFilesNotWritten,E as RulesFilesOnly,S as RulesFilesPartlyWritten,D as __namedExportsOrder,_ as default};