import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,o as r}from"./ContextFeed-CR3Eozal.js";import{i,n as a,t as o}from"./ContextWidenDialog-BKafCusK.js";import{a as s,c,d as l,f as u,i as d,l as f,m as p,n as m,o as h,p as g,r as _,s as v,t as y,u as b}from"./contextFeed-C7qtFVS0.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{r(),p(),a(),u(),x=t(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/ContextFeed`,component:n,tags:[`autodocs`],args:{feed:_,keyboard:!1,onKeep:S(),onDrop:S(),onResetSession:S(),onResetBefore:S(),onWiden:S()},decorators:[e=>(0,x.jsx)(`div`,{className:`h-[560px] border border-border bg-background`,children:(0,x.jsx)(e,{})})],parameters:{docs:{description:{component:`History: one row per session in the list, newest first, and the selected
session's operations in the detail pane, with its reset in the toolbar. A
proposal keeps Keep, Edit and Drop on its row, and its evidence opens under
the row.`}}}},w={},T={globals:{theme:`dark`}},E={args:{feed:y,defaultSelected:`session:sess-1`}},D={args:{feed:y,defaultSelected:`session:sess-1`},globals:{theme:`dark`}},O={args:{defaultSelected:`actor:person/asgeir:2026-09-21`}},k={args:{feed:v,showProject:!0}},A={args:{showProject:!0,feed:{..._,groups:[..._.groups,l({id:`session:sess-2`,session:`sess-2`,project_key:`bowmart`,project_name:`BowMart`,actor:{kind:`agent`,name:`claude`,session:`sess-2`,host:`laptop`},entries:[b({...m,id:`18`,project_key:`bowmart`,project_name:`BowMart`,at:`2026-09-21T09:20:00Z`,subject:{kind:`memory`,source:`Add to basket`,target:`Legg i handlekurv`,target_locale:`nb-NO`,describe:`memory "Add to basket" into nb-NO`},evidence:[{path:`store/checkout.json`,unit:`cart.add`,quote:`Add to basket`}]})]})]},defaultSelected:`session:sess-2`}},j={args:{feed:{..._,groups:[l({id:`session:sess-1`,session:`sess-1`,quiet:!1,entries:[m,h]})]}}},M={args:{feed:{..._,groups:[c,s,..._.groups.slice(1)]},defaultSelected:s.id}},N={...M,globals:{theme:`dark`}},P={args:{feed:{..._,groups:[c,s,..._.groups.slice(1)]},defaultSelected:c.id}},F={args:{feed:f}},I={args:{feed:f},globals:{theme:`dark`}},L={args:{feed:{...f,groups:f.groups.map(e=>e.id===`session:sess-1`?{...e,awaiting:0,entries:e.entries.map(e=>({...e,status:`reset`,decidable:!1,droppable:!1}))}:e)},defaultSelected:`session:sess-1`}},R={args:{feed:d}},z={args:{feed:{...f,read_only:!0}}},B={args:{feed:{..._,groups:[l({id:`session:sess-1`,session:`sess-1`,recipe:void 0,entries:[b({...m,recipe:void 0})]})]}}},V={render:()=>(0,x.jsx)(o,{rule:i(h),to:`workspace`,onClose:S(),onConfirm:S(),preview:{to:`workspace`,from:{level:`project`,describe:`project brand=kapimart`},scope:{level:`workspace`,describe:`workspace brand=kapimart`},rule:h.subject,projects:[{project_key:`bowmart`,project_name:`BowMart`,checked_out:!0},{project_key:`handbook`,project_name:`Old Handbook`,checked_out:!1}],points:[],units:[{project_key:`bowmart`,document:`docs/checkout.md`,unit:`p4`,text:`Utilise the saved basket to finish later.`,matches:1}],coverage:{examined:[{project_key:`bowmart`,project_name:`BowMart`,units:63,matched:1}],not_examined:[{project_key:`kapimart`,project_name:`KapiMart`,reason:`no projection of its content is built on this machine`},{project_key:`handbook`,project_name:`Old Handbook`,reason:`no checkout on this machine`}],truncated:!1}}})},H={render:()=>(0,x.jsx)(o,{rule:i(h),to:`product`,onClose:S(),onConfirm:S(),preview:{to:`product`,from:{level:`project`,describe:`project product=store`},scope:{level:`project`,describe:`project`},rule:h.subject,projects:[],points:[{project_key:`kapimart`,ref:`marketing/web`,label:`marketing/web`,coordinates:{product:`marketing`,channel:`web`},collections:[`campaigns`,`landing`]},{project_key:`kapimart`,ref:`support/help`,label:`support/help`,coordinates:{product:`support`,channel:`help`},collections:[`help-centre`]}],units:[{project_key:`kapimart`,document:`campaigns/spring.md`,unit:`p7`,text:`Utilise the spring offer before it ends.`,matches:1},{project_key:`kapimart`,document:`help/returns.md`,unit:`p2`,text:`Utilise the returns portal to print a label.`,matches:1}],coverage:{examined:[{project_key:`kapimart`,project_name:`KapiMart`,units:140,matched:2}],not_examined:[],truncated:!1}}})},U={render:()=>(0,x.jsx)(g,{request:{project:`kapimart`,before:`sess-1`},onClose:S(),onConfirm:S(),scope:{before:`sess-1`,set_aside:4,decisions:1,restored:0,rules:[`term "sign in", use "log in"`],subjects:[`term "sign in", use "log in"`,`voice "utilise", use "use"`,`note "prices carry no space before the currency"`,`memory "Add to basket" into nb-NO`]}})},W=[`Default`,`DefaultDark`,`ProposalAwaitingADecision`,`ProposalAwaitingADecisionDark`,`SessionSelected`,`ManySessions`,`AcrossProjects`,`StillWorking`,`SessionsTheCheckRanIn`,`SessionsTheCheckRanInDark`,`SuggestionsAndChecksInOneSession`,`AfterAReset`,`AfterAResetDark`,`SessionSetAside`,`Empty`,`ReadOnly`,`NoCheckoutToDecideThrough`,`WidenToTheWorkspace`,`WidenPastAnAxis`,`ResetToBeforeASession`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source},description:{story:`An agent session with a decision waiting, beside a person's own day.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    feed: AWAITING_FEED,
    defaultSelected: "session:sess-1"
  }
}`,...E.parameters?.docs?.source},description:{story:`Two proposals waiting in one session, beside a rule already in force.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    feed: AWAITING_FEED,
    defaultSelected: "session:sess-1"
  },
  globals: {
    theme: "dark"
  }
}`,...D.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "actor:person/asgeir:2026-09-21"
  }
}`,...O.parameters?.docs?.source},description:{story:`A person's day selected: a note they recorded, with nothing to reset.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    feed: MANY_SESSIONS_FEED,
    showProject: true
  }
}`,...k.parameters?.docs?.source},description:{story:`A long history: the list scrolls on its own, and the oldest operations are cut off.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`The workspace feed, where each session names the project it came from.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`A session still recording: the counts say so.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...CONTEXT_FEED,
      groups: [MIXED_SESSION, HOOK_ONLY_SESSION, ...CONTEXT_FEED.groups.slice(1)]
    } satisfies ContextFeed,
    defaultSelected: HOOK_ONLY_SESSION.id
  }
}`,...M.parameters?.docs?.source},description:{story:`Sessions the check on every edit ran in, the one that only ran the check
selected: its runs newest first, the last one clean, and the findings the
next run no longer found marked caught.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...SessionsTheCheckRanIn,
  globals: {
    theme: "dark"
  }
}`,...N.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...CONTEXT_FEED,
      groups: [MIXED_SESSION, HOOK_ONLY_SESSION, ...CONTEXT_FEED.groups.slice(1)]
    } satisfies ContextFeed,
    defaultSelected: MIXED_SESSION.id
  }
}`,...P.parameters?.docs?.source},description:{story:`A session that recorded suggestions and ran the check between them,
selected: its operations and its runs in one list by time.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    feed: RESET_FEED
  }
}`,...F.parameters?.docs?.source},description:{story:`A person reset the project to before claude's session; the toolbar takes the reset back.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    feed: RESET_FEED
  },
  globals: {
    theme: "dark"
  }
}`,...I.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`The session the reset set aside, still listed, with its operations marked.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    feed: EMPTY_FEED
  }
}`,...R.parameters?.docs?.source},description:{story:`Nothing has been recorded in this workspace yet.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...RESET_FEED,
      read_only: true
    }
  }
}`,...z.parameters?.docs?.source},description:{story:`A workspace open for reading only: the reset cannot be taken back here.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`A project the workspace holds and no checkout here carries.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`What a rule reaches once it answers in every project.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:`What a rule reaches once it stops being specific about one axis.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:`Resetting to before a session names what it sets aside.`,...U.parameters?.docs?.description}}}})))()}G();export{A as AcrossProjects,F as AfterAReset,I as AfterAResetDark,w as Default,T as DefaultDark,R as Empty,k as ManySessions,B as NoCheckoutToDecideThrough,E as ProposalAwaitingADecision,D as ProposalAwaitingADecisionDark,z as ReadOnly,U as ResetToBeforeASession,O as SessionSelected,L as SessionSetAside,M as SessionsTheCheckRanIn,N as SessionsTheCheckRanInDark,j as StillWorking,P as SuggestionsAndChecksInOneSession,H as WidenPastAnAxis,V as WidenToTheWorkspace,W as __namedExportsOrder,C as default};