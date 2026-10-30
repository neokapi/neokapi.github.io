import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{B as n,V as r}from"./query-C7aGQqqt.js";import{a as i,o as a}from"./iframe-B7X8M7N4.js";import{n as o,t as s}from"./queryKeys-DHCFRirj.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./rulesFiles-II3VD3Ya.js";var g,_,v;function y(){return(y=e((()=>{g=`src/en/app-ui.json`,_=[{value:`docs/getting-started.md`,label:`docs`},{value:g,label:`app-ui`},{value:`src/en/errors.json`,label:`app-ui`}],v={path:g,answer:{point:{path:g,collection:`app-ui`,ref:`app-ui@ui`,coordinates:{product:`fernwell`,channel:`ui`},default:!1},scope:`project`,voice:{name:`Fernwell help center`,source:`voice/help-center.yaml`},terms:[{concept_id:`c-studio`,term:`business`,discouraged:!0,replacement:`studio`},{concept_id:`c-sign-in`,term:`log in`,discouraged:!0,replacement:`sign in`}],terms_total:2},text:`# Writing src/en/app-ui.json

Voice: Fernwell help center. Plain, warm, second person (you).

Say this, not that:
- studio, not "business"
- sign in, not "log in"`}})))()}var b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),r(),f(),l(),s(),y(),u(),b=t(),x=`story`,S=e=>{let t=new i({defaultOptions:{queries:{retry:!1,refetchOnWindowFocus:!1,staleTime:1/0}}});return t.setQueryData(o.contextOptions(x,`path`),_),t.setQueryData(o.agentContext(x,g),v),(0,b.jsx)(n,{client:t,children:(0,b.jsx)(e,{})})},C=e=>(0,b.jsx)(`div`,{className:`grid gap-4 p-6`,children:[!1,!0].map(t=>(0,b.jsx)(`div`,{className:t?`dark`:void 0,children:(0,b.jsx)(`div`,{className:`mx-auto max-w-3xl rounded-lg border bg-background p-6 text-foreground`,children:(0,b.jsx)(e,{})})},String(t)))}),w={title:`Components/AssistantPanel`,component:c,tags:[`autodocs`],args:{tabID:x,rulesFiles:p,onBack:()=>{}},decorators:[C,S]},T={},E={args:{path:g}},D={args:{rulesFiles:h}},O={args:{rulesFiles:d}},k={args:{rulesFiles:[]}},A={render:()=>(0,b.jsx)(m,{tabID:x,rulesFiles:d})},j=[`RulesFilesWritten`,`OpenedOnAPath`,`RulesFilesNotWritten`,`RulesFilesPartlyWritten`,`NoRules`,`RulesFilesOnly`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`The rules files written, reached from the Assistants page.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    path: BRIEF_PATH
  }
}`,...E.parameters?.docs?.source},description:{story:`Opened from Ask or Checks at a file: the brief tab, with that file chosen.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: RULES_FILES_NOT_WRITTEN
  }
}`,...D.parameters?.docs?.source},description:{story:`No rules file written yet: the empty state says where the rules go and offers Write them now.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: RULES_FILES_PARTLY_WRITTEN
  }
}`,...O.parameters?.docs?.source},description:{story:`The root's files written, the docs folder's not yet.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    rulesFiles: []
  }
}`,...k.parameters?.docs?.source},description:{story:`The project's context holds no rules, so kapi writes no file.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <RulesFilesView tabID={TAB} rulesFiles={RULES_FILES_PARTLY_WRITTEN} />
}`,...A.parameters?.docs?.source},description:{story:`The rules files on their own.`,...A.parameters?.docs?.description}}}})))()}M();export{k as NoRules,E as OpenedOnAPath,D as RulesFilesNotWritten,A as RulesFilesOnly,O as RulesFilesPartlyWritten,T as RulesFilesWritten,j as __namedExportsOrder,w as default};