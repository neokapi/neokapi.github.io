import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,n as r}from"./ContextFeed-pZuNOehx.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f}from"./contextFeed-tKrfcqVs.js";import{i as p,n as m,t as h}from"./ContextWidenDialog-DHyCd_qv.js";var g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),s(),m(),d(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/ContextFeed`,component:r,tags:[`autodocs`],args:{feed:c,keyboard:!1,onKeep:_(),onDrop:_(),onResetSession:_(),onWiden:_()},decorators:[e=>(0,g.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,g.jsx)(e,{})})]},y={},b={args:{showProject:!0,feed:{...c,groups:[...c.groups,l({id:`session:sess-2`,session:`sess-2`,project_key:`bowmart`,project_name:`BowMart`,actor:{kind:`agent`,name:`claude`,session:`sess-2`,host:`laptop`},entries:[i({...f,id:`18`,project_key:`bowmart`,project_name:`BowMart`,at:`2026-09-21T09:20:00Z`,subject:{kind:`memory`,source:`Add to basket`,target:`Legg i handlekurv`,target_locale:`nb-NO`,describe:`memory "Add to basket" into nb-NO`},evidence:[{path:`store/checkout.json`,unit:`cart.add`,quote:`Add to basket`}]})]})]}}},x={args:{feed:{...c,groups:[l({id:`session:sess-1`,session:`sess-1`,quiet:!1,entries:[f,o]})]}}},S={args:{feed:u}},C={args:{feed:{...c,groups:[l({id:`session:sess-1`,session:`sess-1`,recipe:void 0,entries:[i({...f,recipe:void 0})]})]}}},w={render:()=>(0,g.jsx)(h,{rule:p(o),to:`workspace`,onClose:_(),onConfirm:_(),preview:{to:`workspace`,from:{level:`project`,describe:`project brand=kapimart`},scope:{level:`workspace`,describe:`workspace brand=kapimart`},rule:o.subject,projects:[{project_key:`kapimart`,project_name:`KapiMart`,current:!0,checked_out:!0},{project_key:`bowmart`,project_name:`BowMart`,current:!1,checked_out:!0},{project_key:`handbook`,project_name:`Old Handbook`,current:!1,checked_out:!1}],points:[],content_impact:!1}})},T={render:()=>(0,g.jsx)(h,{rule:p(o),to:`product`,onClose:_(),onConfirm:_(),preview:{to:`product`,from:{level:`project`,describe:`project product=store`},scope:{level:`project`,describe:`project`},rule:o.subject,projects:[],points:[{ref:`marketing/web`,label:`marketing/web`,coordinates:{product:`marketing`,channel:`web`},collections:[`campaigns`,`landing`]},{ref:`support/help`,label:`support/help`,coordinates:{product:`support`,channel:`help`},collections:[`help-centre`]}],content_impact:!1}})},E={render:()=>(0,g.jsx)(a,{request:{project:`kapimart`,before:`sess-1`},onClose:_(),onConfirm:_(),scope:{before:`sess-1`,set_aside:4,decisions:1,restored:0,rules:[`term "sign in", use "log in"`],subjects:[`term "sign in", use "log in"`,`voice "utilise", use "use"`,`note "prices carry no space before the currency"`,`memory "Add to basket" into nb-NO`]}})},D=[`Default`,`AcrossProjects`,`StillWorking`,`Empty`,`NoCheckoutToDecideThrough`,`WidenToTheWorkspace`,`WidenPastAnAxis`,`ResetToBeforeASession`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source},description:{story:`An agent session with a decision waiting, beside a person's own day.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`The workspace feed, where each operation names the project it came from.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`A session still recording: the summary says so rather than counting.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    feed: EMPTY_FEED
  }
}`,...S.parameters?.docs?.source},description:{story:`Nothing has been recorded in this workspace yet.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`A project the workspace holds and no checkout here carries.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
      project_key: "kapimart",
      project_name: "KapiMart",
      current: true,
      checked_out: true
    }, {
      project_key: "bowmart",
      project_name: "BowMart",
      current: false,
      checked_out: true
    }, {
      project_key: "handbook",
      project_name: "Old Handbook",
      current: false,
      checked_out: false
    }],
    points: [],
    content_impact: false
  }} />
}`,...w.parameters?.docs?.source},description:{story:`What a rule reaches once it answers in every project.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      ref: "marketing/web",
      label: "marketing/web",
      coordinates: {
        product: "marketing",
        channel: "web"
      },
      collections: ["campaigns", "landing"]
    }, {
      ref: "support/help",
      label: "support/help",
      coordinates: {
        product: "support",
        channel: "help"
      },
      collections: ["help-centre"]
    }],
    content_impact: false
  }} />
}`,...T.parameters?.docs?.source},description:{story:`What a rule reaches once it stops being specific about one axis.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Resetting to before a session names what it sets aside.`,...E.parameters?.docs?.description}}}})))()}O();export{b as AcrossProjects,y as Default,S as Empty,C as NoCheckoutToDecideThrough,E as ResetToBeforeASession,x as StillWorking,T as WidenPastAnAxis,w as WidenToTheWorkspace,D as __namedExportsOrder,v as default};