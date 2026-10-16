import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{r as n,t as r}from"./ContextFeed-DF607ZxQ.js";import{i,n as a,t as o}from"./ContextWidenDialog-BMbTiurg.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./contextFeed-BkarnJ3G.js";var _,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{n(),g(),a(),c(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/ContextFeed`,component:r,tags:[`autodocs`],args:{feed:d,keyboard:!1,onKeep:v(),onDrop:v(),onResetSession:v(),onResetBefore:v(),onWiden:v()},decorators:[e=>(0,_.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,_.jsx)(e,{})})]},b={},x={args:{showProject:!0,feed:{...d,groups:[...d.groups,m({id:`session:sess-2`,session:`sess-2`,project_key:`bowmart`,project_name:`BowMart`,actor:{kind:`agent`,name:`claude`,session:`sess-2`,host:`laptop`},entries:[f({...h,id:`18`,project_key:`bowmart`,project_name:`BowMart`,at:`2026-09-21T09:20:00Z`,subject:{kind:`memory`,source:`Add to basket`,target:`Legg i handlekurv`,target_locale:`nb-NO`,describe:`memory "Add to basket" into nb-NO`},evidence:[{path:`store/checkout.json`,unit:`cart.add`,quote:`Add to basket`}]})]})]}}},S={args:{feed:{...d,groups:[m({id:`session:sess-1`,session:`sess-1`,quiet:!1,entries:[h,l]})]}}},C={args:{feed:s}},w={args:{feed:p}},T={args:{feed:{...d,groups:[m({id:`session:sess-1`,session:`sess-1`,recipe:void 0,entries:[f({...h,recipe:void 0})]})]}}},E={render:()=>(0,_.jsx)(o,{rule:i(l),to:`workspace`,onClose:v(),onConfirm:v(),preview:{to:`workspace`,from:{level:`project`,describe:`project brand=kapimart`},scope:{level:`workspace`,describe:`workspace brand=kapimart`},rule:l.subject,projects:[{project_key:`bowmart`,project_name:`BowMart`,checked_out:!0},{project_key:`handbook`,project_name:`Old Handbook`,checked_out:!1}],points:[],units:[{project_key:`bowmart`,document:`docs/checkout.md`,unit:`p4`,text:`Utilise the saved basket to finish later.`,matches:1}],coverage:{examined:[{project_key:`bowmart`,project_name:`BowMart`,units:63,matched:1}],not_examined:[{project_key:`kapimart`,project_name:`KapiMart`,reason:`no projection of its content is built on this machine`},{project_key:`handbook`,project_name:`Old Handbook`,reason:`no checkout on this machine`}],truncated:!1}}})},D={render:()=>(0,_.jsx)(o,{rule:i(l),to:`product`,onClose:v(),onConfirm:v(),preview:{to:`product`,from:{level:`project`,describe:`project product=store`},scope:{level:`project`,describe:`project`},rule:l.subject,projects:[],points:[{project_key:`kapimart`,ref:`marketing/web`,label:`marketing/web`,coordinates:{product:`marketing`,channel:`web`},collections:[`campaigns`,`landing`]},{project_key:`kapimart`,ref:`support/help`,label:`support/help`,coordinates:{product:`support`,channel:`help`},collections:[`help-centre`]}],units:[{project_key:`kapimart`,document:`campaigns/spring.md`,unit:`p7`,text:`Utilise the spring offer before it ends.`,matches:1},{project_key:`kapimart`,document:`help/returns.md`,unit:`p2`,text:`Utilise the returns portal to print a label.`,matches:1}],coverage:{examined:[{project_key:`kapimart`,project_name:`KapiMart`,units:140,matched:2}],not_examined:[],truncated:!1}}})},O={render:()=>(0,_.jsx)(u,{request:{project:`kapimart`,before:`sess-1`},onClose:v(),onConfirm:v(),scope:{before:`sess-1`,set_aside:4,decisions:1,restored:0,rules:[`term "sign in", use "log in"`],subjects:[`term "sign in", use "log in"`,`voice "utilise", use "use"`,`note "prices carry no space before the currency"`,`memory "Add to basket" into nb-NO`]}})},k=[`Default`,`AcrossProjects`,`StillWorking`,`AfterAReset`,`Empty`,`NoCheckoutToDecideThrough`,`WidenToTheWorkspace`,`WidenPastAnAxis`,`ResetToBeforeASession`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source},description:{story:`An agent session with a decision waiting, beside a person's own day.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showProject: true,
    feed: {
      ...CONTEXT_FEED,
      groups: [...CONTEXT_FEED.groups, feedGroup({
        id: "session:sess-2",
        session: "sess-2",
        project_key: "bowmart",
        project_name: "BowMart",
        actor: {
          kind: "agent",
          name: "claude",
          session: "sess-2",
          host: "laptop"
        },
        entries: [feedEntry({
          ...CANDIDATE,
          id: "18",
          project_key: "bowmart",
          project_name: "BowMart",
          at: "2026-09-21T09:20:00Z",
          subject: {
            kind: "memory",
            source: "Add to basket",
            target: "Legg i handlekurv",
            target_locale: "nb-NO",
            describe: 'memory "Add to basket" into nb-NO'
          },
          evidence: [{
            path: "store/checkout.json",
            unit: "cart.add",
            quote: "Add to basket"
          }]
        })]
      })]
    } satisfies ContextFeed
  }
}`,...x.parameters?.docs?.source},description:{story:`The workspace feed, where each operation names the project it came from.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...CONTEXT_FEED,
      groups: [feedGroup({
        id: "session:sess-1",
        session: "sess-1",
        quiet: false,
        entries: [CANDIDATE, IN_FORCE]
      })]
    } satisfies ContextFeed
  }
}`,...S.parameters?.docs?.source},description:{story:`A session still recording: the summary says so rather than counting.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    feed: RESET_FEED
  }
}`,...C.parameters?.docs?.source},description:{story:`A person reset the project to before claude's session; the reset itself can be taken back.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    feed: EMPTY_FEED
  }
}`,...w.parameters?.docs?.source},description:{story:`Nothing has been recorded in this workspace yet.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...CONTEXT_FEED,
      groups: [feedGroup({
        id: "session:sess-1",
        session: "sess-1",
        recipe: undefined,
        entries: [feedEntry({
          ...CANDIDATE,
          recipe: undefined
        })]
      })]
    } satisfies ContextFeed
  }
}`,...T.parameters?.docs?.source},description:{story:`A project the workspace holds and no checkout here carries.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <ContextWidenDialog rule={widenRuleOfEntry(IN_FORCE)} to="workspace" onClose={fn()} onConfirm={fn()} preview={{
    to: "workspace",
    from: {
      level: "project",
      describe: "project brand=kapimart"
    },
    scope: {
      level: "workspace",
      describe: "workspace brand=kapimart"
    },
    rule: IN_FORCE.subject,
    projects: [{
      project_key: "bowmart",
      project_name: "BowMart",
      checked_out: true
    }, {
      project_key: "handbook",
      project_name: "Old Handbook",
      checked_out: false
    }],
    points: [],
    units: [{
      project_key: "bowmart",
      document: "docs/checkout.md",
      unit: "p4",
      text: "Utilise the saved basket to finish later.",
      matches: 1
    }],
    coverage: {
      examined: [{
        project_key: "bowmart",
        project_name: "BowMart",
        units: 63,
        matched: 1
      }],
      not_examined: [{
        project_key: "kapimart",
        project_name: "KapiMart",
        reason: "no projection of its content is built on this machine"
      }, {
        project_key: "handbook",
        project_name: "Old Handbook",
        reason: "no checkout on this machine"
      }],
      truncated: false
    }
  }} />
}`,...E.parameters?.docs?.source},description:{story:`What a rule reaches once it answers in every project.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <ContextWidenDialog rule={widenRuleOfEntry(IN_FORCE)} to="product" onClose={fn()} onConfirm={fn()} preview={{
    to: "product",
    from: {
      level: "project",
      describe: "project product=store"
    },
    scope: {
      level: "project",
      describe: "project"
    },
    rule: IN_FORCE.subject,
    projects: [],
    points: [{
      project_key: "kapimart",
      ref: "marketing/web",
      label: "marketing/web",
      coordinates: {
        product: "marketing",
        channel: "web"
      },
      collections: ["campaigns", "landing"]
    }, {
      project_key: "kapimart",
      ref: "support/help",
      label: "support/help",
      coordinates: {
        product: "support",
        channel: "help"
      },
      collections: ["help-centre"]
    }],
    units: [{
      project_key: "kapimart",
      document: "campaigns/spring.md",
      unit: "p7",
      text: "Utilise the spring offer before it ends.",
      matches: 1
    }, {
      project_key: "kapimart",
      document: "help/returns.md",
      unit: "p2",
      text: "Utilise the returns portal to print a label.",
      matches: 1
    }],
    coverage: {
      examined: [{
        project_key: "kapimart",
        project_name: "KapiMart",
        units: 140,
        matched: 2
      }],
      not_examined: [],
      truncated: false
    }
  }} />
}`,...D.parameters?.docs?.source},description:{story:`What a rule reaches once it stops being specific about one axis.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ContextResetDialog request={{
    project: "kapimart",
    before: "sess-1"
  }} onClose={fn()} onConfirm={fn()} scope={{
    before: "sess-1",
    set_aside: 4,
    decisions: 1,
    restored: 0,
    rules: ['term "sign in", use "log in"'],
    subjects: ['term "sign in", use "log in"', 'voice "utilise", use "use"', 'note "prices carry no space before the currency"', 'memory "Add to basket" into nb-NO']
  }} />
}`,...O.parameters?.docs?.source},description:{story:`Resetting to before a session names what it sets aside.`,...O.parameters?.docs?.description}}}})))()}A();export{x as AcrossProjects,C as AfterAReset,b as Default,w as Empty,T as NoCheckoutToDecideThrough,O as ResetToBeforeASession,S as StillWorking,D as WidenPastAnAxis,E as WidenToTheWorkspace,k as __namedExportsOrder,y as default};