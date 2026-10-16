import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{B as n,z as r}from"./query-C02vnMZq.js";import{a as i,o as a}from"./iframe-DeS6uuvK.js";import{n as o,t as s}from"./queryKeys-Bp8K1d2b.js";import{a as c,c as l,d as u,f as d,i as f,l as p,m,n as h,o as g,p as _,r as v,s as y,t as b,u as x}from"./rulesFiles-CooARgjA.js";var S,C,w;function T(){return(T=e((()=>{S=`src/en/app-ui.json`,C=[{value:`docs/getting-started.md`,label:`docs`},{value:S,label:`app-ui`},{value:`src/en/errors.json`,label:`app-ui`}],w={path:S,answer:{point:{path:S,collection:`app-ui`,ref:`app-ui@ui`,coordinates:{product:`fernwell`,channel:`ui`},default:!1},scope:`project`,voice:{name:`Fernwell help center`,source:`voice/help-center.yaml`},terms:[{concept_id:`c-studio`,term:`business`,discouraged:!0,replacement:`studio`},{concept_id:`c-sign-in`,term:`log in`,discouraged:!0,replacement:`sign in`}],terms_total:2},text:`# Writing src/en/app-ui.json

Voice: Fernwell help center. Plain, warm, second person (you).

Say this, not that:
- studio, not "business"
- sign in, not "log in"`}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{a(),n(),x(),m(),d(),s(),T(),l(),f(),E=t(),D=`story`,O=e=>{let t=new i({defaultOptions:{queries:{retry:!1,refetchOnWindowFocus:!1,staleTime:1/0}}});return t.setQueryData(o.contextOptions(D,`path`),C),t.setQueryData(o.agentContext(D,S),w),(0,E.jsx)(r,{client:t,children:(0,E.jsx)(e,{})})},k=e=>(0,E.jsx)(`div`,{className:`grid gap-4 p-6`,children:[!1,!0].map(t=>(0,E.jsx)(`div`,{className:t?`dark`:void 0,children:(0,E.jsx)(`div`,{className:`mx-auto max-w-3xl rounded-lg border bg-background p-6 text-foreground`,children:(0,E.jsx)(e,{})})},String(t)))}),A={title:`Components/AssistantPanel`,component:p,tags:[`autodocs`],args:{tabID:D,hosts:c,rulesFiles:v},decorators:[k,O]},j={},M={args:{hosts:y}},N={args:{hosts:g}},P={args:{path:S}},F={args:{hosts:y,rulesFiles:b}},I={args:{rulesFiles:h}},L={args:{rulesFiles:[]}},R={args:{contextOnly:!0}},z={render:()=>(0,E.jsx)(_,{tabID:D,hosts:g})},B={render:()=>(0,E.jsx)(u,{tabID:D,rulesFiles:h})},V=[`AllConnected`,`NoneConnected`,`SomeConnected`,`OpenedOnAPath`,`RulesFilesNotWritten`,`RulesFilesPartlyWritten`,`NoRules`,`ContextOnly`,`HostsOnly`,`RulesFilesOnly`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source},description:{story:`Every assistant connected, and the rules files written.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    hosts: HOSTS_NONE_CONNECTED
  }
}`,...M.parameters?.docs?.source},description:{story:`Every assistant is on this Mac and none is connected: each row offers Connect.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    hosts: HOSTS_CLAUDE_DESKTOP_ABSENT
  }
}`,...N.parameters?.docs?.source},description:{story:`Claude Code connected and Cursor not yet; VS Code, Codex and Claude Desktop
are not on this Mac, so they come last, muted, and Claude Desktop offers no Connect.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    path: BRIEF_PATH
  }
}`,...P.parameters?.docs?.source},description:{story:`Opened from Ask or Checks at a file: the brief tab, with that file chosen.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    hosts: HOSTS_NONE_CONNECTED,
    rulesFiles: RULES_FILES_NOT_WRITTEN
  }
}`,...F.parameters?.docs?.source},description:{story:`No rules file written yet: the empty state says where the rules go and offers Write them now.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: RULES_FILES_PARTLY_WRITTEN
  }
}`,...I.parameters?.docs?.source},description:{story:`The root's files written, the docs folder's not yet.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: []
  }
}`,...L.parameters?.docs?.source},description:{story:`The project's context holds no rules, so kapi writes no file.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    contextOnly: true
  }
}`,...R.parameters?.docs?.source},description:{story:`A tab over the context alone: connecting needs a checkout, and the tabs are left out.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <AssistantHosts tabID={TAB} hosts={HOSTS_CLAUDE_DESKTOP_ABSENT} />
}`,...z.parameters?.docs?.source},description:{story:`The connections on their own.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <RulesFilesView tabID={TAB} rulesFiles={RULES_FILES_PARTLY_WRITTEN} />
}`,...B.parameters?.docs?.source},description:{story:`The rules files on their own.`,...B.parameters?.docs?.description}}}})))()}H();export{j as AllConnected,R as ContextOnly,z as HostsOnly,L as NoRules,M as NoneConnected,P as OpenedOnAPath,F as RulesFilesNotWritten,B as RulesFilesOnly,I as RulesFilesPartlyWritten,N as SomeConnected,V as __namedExportsOrder,A as default};