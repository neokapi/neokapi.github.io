import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{r as n,t as r}from"./ContextFeed-CWeuwt6c.js";import{i,n as a,t as o}from"./ContextWidenDialog-CC5VVzeb.js";import{a as s,c,d as l,f as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./contextFeed-fS54mDID.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{n(),u(),a(),v(),y=t(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/ContextFeed`,component:r,tags:[`autodocs`],args:{feed:h,keyboard:!1,onKeep:b(),onDrop:b(),onResetSession:b(),onResetBefore:b(),onWiden:b()},decorators:[e=>(0,y.jsx)(`div`,{className:`h-[560px] border border-border bg-background`,children:(0,y.jsx)(e,{})})],parameters:{docs:{description:{component:`History: one row per session in the list, newest first, and the selected
session's operations in the detail pane, with its reset in the toolbar. A
proposal keeps Keep, Edit and Drop on its row, and its evidence opens under
the row.`}}}},S={},C={globals:{theme:`dark`}},w={args:{feed:_,defaultSelected:`session:sess-1`}},T={args:{feed:_,defaultSelected:`session:sess-1`},globals:{theme:`dark`}},E={args:{defaultSelected:`actor:person/asgeir:2026-09-21`}},D={args:{feed:m,showProject:!0}},O={args:{showProject:!0,feed:{...h,groups:[...h.groups,f({id:`session:sess-2`,session:`sess-2`,project_key:`bowmart`,project_name:`BowMart`,actor:{kind:`agent`,name:`claude`,session:`sess-2`,host:`laptop`},entries:[c({...p,id:`18`,project_key:`bowmart`,project_name:`BowMart`,at:`2026-09-21T09:20:00Z`,subject:{kind:`memory`,source:`Add to basket`,target:`Legg i handlekurv`,target_locale:`nb-NO`,describe:`memory "Add to basket" into nb-NO`},evidence:[{path:`store/checkout.json`,unit:`cart.add`,quote:`Add to basket`}]})]})]},defaultSelected:`session:sess-2`}},k={args:{feed:{...h,groups:[f({id:`session:sess-1`,session:`sess-1`,quiet:!1,entries:[p,s]})]}}},A={args:{feed:g}},j={args:{feed:g},globals:{theme:`dark`}},M={args:{feed:{...g,groups:g.groups.map(e=>e.id===`session:sess-1`?{...e,awaiting:0,entries:e.entries.map(e=>({...e,status:`reset`,decidable:!1,droppable:!1}))}:e)},defaultSelected:`session:sess-1`}},N={args:{feed:d}},P={args:{feed:{...g,read_only:!0}}},F={args:{feed:{...h,groups:[f({id:`session:sess-1`,session:`sess-1`,recipe:void 0,entries:[c({...p,recipe:void 0})]})]}}},I={render:()=>(0,y.jsx)(o,{rule:i(s),to:`workspace`,onClose:b(),onConfirm:b(),preview:{to:`workspace`,from:{level:`project`,describe:`project brand=kapimart`},scope:{level:`workspace`,describe:`workspace brand=kapimart`},rule:s.subject,projects:[{project_key:`bowmart`,project_name:`BowMart`,checked_out:!0},{project_key:`handbook`,project_name:`Old Handbook`,checked_out:!1}],points:[],units:[{project_key:`bowmart`,document:`docs/checkout.md`,unit:`p4`,text:`Utilise the saved basket to finish later.`,matches:1}],coverage:{examined:[{project_key:`bowmart`,project_name:`BowMart`,units:63,matched:1}],not_examined:[{project_key:`kapimart`,project_name:`KapiMart`,reason:`no projection of its content is built on this machine`},{project_key:`handbook`,project_name:`Old Handbook`,reason:`no checkout on this machine`}],truncated:!1}}})},L={render:()=>(0,y.jsx)(o,{rule:i(s),to:`product`,onClose:b(),onConfirm:b(),preview:{to:`product`,from:{level:`project`,describe:`project product=store`},scope:{level:`project`,describe:`project`},rule:s.subject,projects:[],points:[{project_key:`kapimart`,ref:`marketing/web`,label:`marketing/web`,coordinates:{product:`marketing`,channel:`web`},collections:[`campaigns`,`landing`]},{project_key:`kapimart`,ref:`support/help`,label:`support/help`,coordinates:{product:`support`,channel:`help`},collections:[`help-centre`]}],units:[{project_key:`kapimart`,document:`campaigns/spring.md`,unit:`p7`,text:`Utilise the spring offer before it ends.`,matches:1},{project_key:`kapimart`,document:`help/returns.md`,unit:`p2`,text:`Utilise the returns portal to print a label.`,matches:1}],coverage:{examined:[{project_key:`kapimart`,project_name:`KapiMart`,units:140,matched:2}],not_examined:[],truncated:!1}}})},R={render:()=>(0,y.jsx)(l,{request:{project:`kapimart`,before:`sess-1`},onClose:b(),onConfirm:b(),scope:{before:`sess-1`,set_aside:4,decisions:1,restored:0,rules:[`term "sign in", use "log in"`],subjects:[`term "sign in", use "log in"`,`voice "utilise", use "use"`,`note "prices carry no space before the currency"`,`memory "Add to basket" into nb-NO`]}})},z=[`Default`,`DefaultDark`,`ProposalAwaitingADecision`,`ProposalAwaitingADecisionDark`,`SessionSelected`,`ManySessions`,`AcrossProjects`,`StillWorking`,`AfterAReset`,`AfterAResetDark`,`SessionSetAside`,`Empty`,`ReadOnly`,`NoCheckoutToDecideThrough`,`WidenToTheWorkspace`,`WidenPastAnAxis`,`ResetToBeforeASession`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source},description:{story:`An agent session with a decision waiting, beside a person's own day.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...C.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    feed: AWAITING_FEED,
    defaultSelected: "session:sess-1"
  }
}`,...w.parameters?.docs?.source},description:{story:`Two proposals waiting in one session, beside a rule already in force.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    feed: AWAITING_FEED,
    defaultSelected: "session:sess-1"
  },
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "actor:person/asgeir:2026-09-21"
  }
}`,...E.parameters?.docs?.source},description:{story:`A person's day selected: a note they recorded, with nothing to reset.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    feed: MANY_SESSIONS_FEED,
    showProject: true
  }
}`,...D.parameters?.docs?.source},description:{story:`A long history: the list scrolls on its own, and the oldest operations are cut off.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
    } satisfies ContextFeed,
    defaultSelected: "session:sess-2"
  }
}`,...O.parameters?.docs?.source},description:{story:`The workspace feed, where each session names the project it came from.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`A session still recording: the counts say so.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    feed: RESET_FEED
  }
}`,...A.parameters?.docs?.source},description:{story:`A person reset the project to before claude's session; the toolbar takes the reset back.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    feed: RESET_FEED
  },
  globals: {
    theme: "dark"
  }
}`,...j.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...RESET_FEED,
      groups: RESET_FEED.groups.map(g => g.id === "session:sess-1" ? {
        ...g,
        awaiting: 0,
        entries: g.entries.map(e => ({
          ...e,
          status: "reset",
          decidable: false,
          droppable: false
        }))
      } : g)
    } satisfies ContextFeed,
    defaultSelected: "session:sess-1"
  }
}`,...M.parameters?.docs?.source},description:{story:`The session the reset set aside, still listed, with its operations marked.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    feed: EMPTY_FEED
  }
}`,...N.parameters?.docs?.source},description:{story:`Nothing has been recorded in this workspace yet.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...RESET_FEED,
      read_only: true
    }
  }
}`,...P.parameters?.docs?.source},description:{story:`A workspace open for reading only: the reset cannot be taken back here.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`A project the workspace holds and no checkout here carries.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`What a rule reaches once it answers in every project.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`What a rule reaches once it stops being specific about one axis.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Resetting to before a session names what it sets aside.`,...R.parameters?.docs?.description}}}})))()}B();export{O as AcrossProjects,A as AfterAReset,j as AfterAResetDark,S as Default,C as DefaultDark,N as Empty,D as ManySessions,F as NoCheckoutToDecideThrough,w as ProposalAwaitingADecision,T as ProposalAwaitingADecisionDark,P as ReadOnly,R as ResetToBeforeASession,E as SessionSelected,M as SessionSetAside,k as StillWorking,L as WidenPastAnAxis,I as WidenToTheWorkspace,z as __namedExportsOrder,x as default};