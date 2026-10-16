import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,t as r}from"./ContextDigest-Br8Q8Xpz.js";import{n as i,r as a,t as o}from"./ContextWidenDialog-DPy2F-K_.js";import{a as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./contextDigest-BcCJ6cJG.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{n(),i(),s(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/ContextDigest`,component:r,tags:[`autodocs`],args:{digest:p,since:d,keyboard:!1,onKeep:h(),onKeepGroup:h(),onDrop:h(),onChoose:h(),onWiden:h(),onOpenFile:h()},decorators:[e=>(0,m.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,m.jsx)(e,{})})]},_={},v={args:{digest:u(`conflicts`)}},y={args:{digest:u(`established`)}},b={args:{digest:u(`suggested`)}},x={args:{digest:u(`drift`)}},S={args:{digest:c}},C={args:{digest:l,since:void 0,onConnectAssistant:h()}},w={args:{canDecide:!1,onOpenFile:void 0}},T={args:{keyboard:!0}},E={args:{digest:u(`established`)}},D={render:()=>(0,m.jsx)(o,{rule:a(`fernwell`,f()),to:`workspace`,onClose:h(),onConfirm:h(),preview:{to:`workspace`,from:{level:`project`,describe:`project product=studio`},scope:{level:`workspace`,describe:`workspace product=studio`},rule:{kind:`term`,term:`business`,replacement:`studio`},projects:[{project_key:`fernwell-site`,project_name:`Fernwell site`,checked_out:!0}],points:[],units:[{project_key:`fernwell-site`,document:`pages/about.md`,unit:`p2`,text:`The business opened its doors in 2019.`,matches:1}],coverage:{examined:[{project_key:`fernwell`,project_name:`Fernwell`,units:48,matched:0},{project_key:`fernwell-site`,project_name:`Fernwell site`,units:21,matched:1}],not_examined:[],truncated:!1}}})},O=[`Default`,`Conflicts`,`Established`,`Suggested`,`Drift`,`NothingNew`,`Empty`,`ReadOnly`,`Keyboard`,`ApplyMoreWidely`,`ApplyMoreWidelyPreview`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`Every section: a conflict, rules established and how, suggestions by theme, drift, numbers.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("conflicts")
  }
}`,...v.parameters?.docs?.source},description:{story:`Needs you: two agents disagree about "login", and the person chooses one.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("established")
  }
}`,...y.parameters?.docs?.source},description:{story:`Rules in force since the person last looked, with the evidence they rest on.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("suggested")
  }
}`,...b.parameters?.docs?.source},description:{story:`Suggestions grouped by theme, then by collection, with a keep-all per group.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("drift")
  }
}`,...x.parameters?.docs?.source},description:{story:`Content moving away from an established rule.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    digest: QUIET_DIGEST
  }
}`,...S.parameters?.docs?.source},description:{story:`Nothing new since the last look: the numbers, and what the person already saw under Earlier.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    digest: EMPTY_DIGEST,
    since: undefined,
    onConnectAssistant: fn()
  }
}`,...C.parameters?.docs?.source},description:{story:`A project nobody has looked at and nothing is recorded about.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    canDecide: false,
    onOpenFile: undefined
  }
}`,...w.parameters?.docs?.source},description:{story:`No checkout of the project on this machine: the digest reads, and offers no decisions.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    keyboard: true
  }
}`,...T.parameters?.docs?.source},description:{story:`The keyboard session: j and k move, a keeps, c changes, d drops, g keeps the group.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("established")
  }
}`,...E.parameters?.docs?.source},description:{story:`A rule in force applied more widely: each established row offers "Apply
more widely", to every project or past one axis of the rule's point.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
      project_key: "fernwell-site",
      project_name: "Fernwell site",
      checked_out: true
    }],
    points: [],
    units: [{
      project_key: "fernwell-site",
      document: "pages/about.md",
      unit: "p2",
      text: "The business opened its doors in 2019.",
      matches: 1
    }],
    coverage: {
      examined: [{
        project_key: "fernwell",
        project_name: "Fernwell",
        units: 48,
        matched: 0
      }, {
        project_key: "fernwell-site",
        project_name: "Fernwell site",
        units: 21,
        matched: 1
      }],
      not_examined: [],
      truncated: false
    }
  }} />
}`,...D.parameters?.docs?.source},description:{story:`The preview "Apply more widely" opens before the rule answers in every project.`,...D.parameters?.docs?.description}}}})))()}k();export{E as ApplyMoreWidely,D as ApplyMoreWidelyPreview,v as Conflicts,_ as Default,x as Drift,C as Empty,y as Established,T as Keyboard,S as NothingNew,w as ReadOnly,b as Suggested,O as __namedExportsOrder,g as default};