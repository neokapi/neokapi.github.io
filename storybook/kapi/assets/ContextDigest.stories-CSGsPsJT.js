import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r,t as i}from"./ContextWidenDialog-DHyCd_qv.js";import{r as a,t as o}from"./ContextDigest-7jp7dn6x.js";function s(){return h}function c(e){return{short:e.id.slice(0,10),status:`suggested`,theme:`words`,sentence:``,subject:{kind:`term`},noticed_by:{kind:`agent`,name:`claude`,session:`s1`},at:d(5),new:!0,scope:`project`,keepable:!0,droppable:!0,widenable:!1,...e}}function l(e){return{...S,conflicts:e===`conflicts`?S.conflicts:[],established:e===`established`?S.established:[],suggested:e===`suggested`?S.suggested:[],drift:e===`drift`?S.drift:[]}}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{u=36e5,d=e=>new Date(Date.now()-e*u).toISOString(),f=d(48),p=c({id:`0njy7pwmtj00000000000000`,status:`contested`,subject:{kind:`term`,term:{term:`login`,replacement:`sign in`}},quote:{path:`docs/account.md`,quote:`Login to see your invoices.`},noticed_by:{kind:`agent`,name:`claude`,session:`s3`}}),m=c({id:`0njy7pxnst00000000000000`,status:`contested`,subject:{kind:`term`,term:{term:`login`,replacement:`log in`}},quote:{path:`app/strings/en.json`,quote:`Login`},noticed_by:{kind:`agent`,name:`codex`,session:`s4`}}),h=c({id:`0njy7pghcn00000000000000`,status:`established`,subject:{kind:`term`,term:{term:`business`,replacement:`studio`}},quote:{path:`docs/billing.md`,quote:`Upgrade your business plan.`},scope:`project product=studio`,standing:`seen in 3 sessions · 41 of 43 uses in docs/ · merged in #412`,usage:{preferred:`studio`,preferred_count:41,rejected:[`business`],rejected_count:2,within:`docs/`,line:`docs/ says "studio" 41 times and "business" twice`},established_at:d(20),how:[`merged in #412`,`your correction in docs/billing.md`],keepable:!1,droppable:!0,widenable:!0,widen_to:[`workspace`,`product`]}),g=c({id:`0njy6aaaaa00000000000000`,status:`established`,new:!1,subject:{kind:`term`,term:{term:`project folder`,replacement:`workspace`}},established_at:d(120),how:[`kept by you`],keepable:!1,droppable:!0,widenable:!0}),_=c({id:`0njy7pfhjp00000000000000`,theme:`names`,subject:{kind:`term`,term:{term:`Quick cast`,replacement:`Quickcast`,forms:[`QuickCast`,`Quick-cast`]}},quote:{path:`docs/intro.md`,quote:`Try Quick cast for your next session.`},collection:`docs`,standing:`seen in 2 sessions · applied in 3 agent edits`}),v=c({id:`0njy7pfzzz00000000000000`,theme:`names`,subject:{kind:`term`,term:{term:`FernWell`,replacement:`Fernwell`}},quote:{path:`app/strings/en.json`,quote:`Welcome to FernWell`},collection:`app`,new:!1,at:d(90)}),y=c({id:`0njy7qcust00000000000000`,theme:`words`,subject:{kind:`term`,term:{term:`customer`,replacement:`member`}},quote:{path:`docs/billing.md`,quote:`Each customer gets a receipt.`},collection:`docs`,standing:`seen in 2 sessions`}),b=c({id:`0njy7qaddr00000000000000`,theme:`writing`,subject:{kind:`note`,text:`The docs address the reader as you, never as the user.`},sentence:`The docs address the reader as you, never as the user.`,keepable:!1,collection:`docs`}),x=c({id:`0njy5recor00000000000000`,status:`established`,new:!1,subject:{kind:`term`,term:{term:`take`,replacement:`recording`}},established_at:d(400),how:[`kept by you`],keepable:!1,droppable:!0,widenable:!0,widen_to:[`workspace`],usage:{preferred:`recording`,preferred_count:11,rejected:[`take`],rejected_count:6,within:`docs/`,line:`docs/ says "recording" 11 times and "take" 6 times`}}),S={project:`prj_fernwellaaaaaaaaaaaaaa`,project_name:`Fernwell`,since:f,conflicts:[{sides:[p,m],by_evidence:!1,reason:`These rules say different things about the same word. Choose one, and the others are set aside.`}],established:[h,g],suggested:[{theme:`names`,title:`Names and spellings`,groups:[{collection:`app`,items:[v]},{collection:`docs`,items:[_]}]},{theme:`words`,title:`Words to avoid`,groups:[{items:[y]}]},{theme:`writing`,title:`How the project writes`,groups:[{items:[b]}]}],drift:[{rule:x,line:x.usage.line,rejected:6,before:1}],numbers:{rules:23,new_this_week:4,suggested:4,conflicts:1,new:5}},C={project:`prj_fernwellaaaaaaaaaaaaaa`,project_name:`Fernwell`,since:f,conflicts:[],established:[g],suggested:[{theme:`names`,title:`Names and spellings`,groups:[{items:[v]}]}],drift:[],numbers:{rules:23,new_this_week:0,suggested:1,conflicts:0,new:0}},w={project:`prj_fernwellaaaaaaaaaaaaaa`,project_name:`Fernwell`,conflicts:[],established:[],suggested:[],drift:[],numbers:{rules:0,new_this_week:0,suggested:0,conflicts:0,new:0}}})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{a(),n(),T(),E=t(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/ContextDigest`,component:o,tags:[`autodocs`],args:{digest:S,since:f,keyboard:!1,onKeep:D(),onKeepGroup:D(),onDrop:D(),onChoose:D(),onWiden:D(),onOpenFile:D()},decorators:[e=>(0,E.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,E.jsx)(e,{})})]},k={},A={args:{digest:l(`conflicts`)}},j={args:{digest:l(`established`)}},M={args:{digest:l(`suggested`)}},N={args:{digest:l(`drift`)}},P={args:{digest:C}},F={args:{digest:w,since:void 0}},I={args:{canDecide:!1,onOpenFile:void 0}},L={args:{keyboard:!0}},R={args:{digest:l(`established`)}},z={render:()=>(0,E.jsx)(i,{rule:r(`fernwell`,s()),to:`workspace`,onClose:D(),onConfirm:D(),preview:{to:`workspace`,from:{level:`project`,describe:`project product=studio`},scope:{level:`workspace`,describe:`workspace product=studio`},rule:{kind:`term`,term:`business`,replacement:`studio`},projects:[{project_key:`fernwell`,project_name:`Fernwell`,current:!0,checked_out:!0},{project_key:`fernwell-site`,project_name:`Fernwell site`,current:!1,checked_out:!0}],points:[],content_impact:!1}})},B=[`Default`,`Conflicts`,`Established`,`Suggested`,`Drift`,`NothingNew`,`Empty`,`ReadOnly`,`Keyboard`,`ApplyMoreWidely`,`ApplyMoreWidelyPreview`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source},description:{story:`Every section: a conflict, rules established and how, suggestions by theme, drift, numbers.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("conflicts")
  }
}`,...A.parameters?.docs?.source},description:{story:`Needs you: two agents disagree about "login", and the person chooses one.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("established")
  }
}`,...j.parameters?.docs?.source},description:{story:`Rules in force since the person last looked, with the evidence they rest on.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("suggested")
  }
}`,...M.parameters?.docs?.source},description:{story:`Suggestions grouped by theme, then by collection, with a keep-all per group.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("drift")
  }
}`,...N.parameters?.docs?.source},description:{story:`Content moving away from an established rule.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    digest: QUIET_DIGEST
  }
}`,...P.parameters?.docs?.source},description:{story:`Nothing new since the last look: the numbers, and what the person already saw under Earlier.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    digest: EMPTY_DIGEST,
    since: undefined
  }
}`,...F.parameters?.docs?.source},description:{story:`A project nobody has looked at and nothing is recorded about.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    canDecide: false,
    onOpenFile: undefined
  }
}`,...I.parameters?.docs?.source},description:{story:`No checkout of the project on this machine: the digest reads, and offers no decisions.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    keyboard: true
  }
}`,...L.parameters?.docs?.source},description:{story:`The keyboard session: j and k move, a keeps, c changes, d drops, g keeps the group.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("established")
  }
}`,...R.parameters?.docs?.source},description:{story:`A rule in force applied more widely: each established row offers "Apply
more widely", to every project or past one axis of the rule's point.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <ContextWidenDialog rule={widenRuleOfDigestItem("fernwell", studioRule())} to="workspace" onClose={fn()} onConfirm={fn()} preview={{
    to: "workspace",
    from: {
      level: "project",
      describe: "project product=studio"
    },
    scope: {
      level: "workspace",
      describe: "workspace product=studio"
    },
    rule: {
      kind: "term",
      term: "business",
      replacement: "studio"
    },
    projects: [{
      project_key: "fernwell",
      project_name: "Fernwell",
      current: true,
      checked_out: true
    }, {
      project_key: "fernwell-site",
      project_name: "Fernwell site",
      current: false,
      checked_out: true
    }],
    points: [],
    content_impact: false
  }} />
}`,...z.parameters?.docs?.source},description:{story:`The preview "Apply more widely" opens before the rule answers in every project.`,...z.parameters?.docs?.description}}}})))()}V();export{R as ApplyMoreWidely,z as ApplyMoreWidelyPreview,A as Conflicts,k as Default,N as Drift,F as Empty,j as Established,L as Keyboard,P as NothingNew,I as ReadOnly,M as Suggested,B as __namedExportsOrder,O as default};