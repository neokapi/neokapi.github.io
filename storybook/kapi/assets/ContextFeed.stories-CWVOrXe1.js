import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{i as n,r}from"./ContextFeed-B8X4BU3d.js";import{a as i,c as a,d as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./contextFeed-BXiCViuj.js";var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),o(),c(),f(),h=t(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/ContextFeed`,component:r,tags:[`autodocs`],args:{feed:l,keyboard:!1,onConfirm:g(),onDiscard:g(),onRevert:g(),onRevertSession:g(),onWiden:g()},decorators:[e=>(0,h.jsx)(`div`,{className:`mx-auto max-w-3xl p-6`,children:(0,h.jsx)(e,{})})]},v={},y={args:{showProject:!0,feed:{...l,groups:[...l.groups,u({id:`session:sess-2`,session:`sess-2`,project_key:`bowmart`,project_name:`BowMart`,actor:{kind:`agent`,name:`claude`,session:`sess-2`,host:`laptop`},proposed:1,entries:[i({...p,id:`18`,project_key:`bowmart`,project_name:`BowMart`,at:`2026-09-21T09:20:00Z`,subject:{kind:`memory`,source:`Add to basket`,target:`Legg i handlekurv`,target_locale:`nb-NO`,describe:`memory "Add to basket" into nb-NO`},evidence:[{path:`store/checkout.json`,unit:`cart.add`,quote:`Add to basket`}]})]})]}}},b={args:{feed:{...l,groups:[u({id:`session:sess-1`,session:`sess-1`,proposed:2,quiet:!1,entries:[p,s]})]}}},x={args:{feed:d}},S={args:{feed:{...l,groups:[u({id:`session:sess-1`,session:`sess-1`,recipe:void 0,proposed:1,entries:[i({...p,recipe:void 0})]})]}}},C={render:()=>(0,h.jsx)(a,{entry:s,to:`workspace`,onClose:g(),onConfirm:g(),preview:{to:`workspace`,from:{level:`project`,describe:`project brand=kapimart`},scope:{level:`workspace`,describe:`workspace brand=kapimart`},rule:s.subject,projects:[{project_key:`kapimart`,project_name:`KapiMart`,current:!0,checked_out:!0},{project_key:`bowmart`,project_name:`BowMart`,current:!1,checked_out:!0},{project_key:`handbook`,project_name:`Old Handbook`,current:!1,checked_out:!1}],points:[],content_impact:!1}})},w={render:()=>(0,h.jsx)(a,{entry:s,to:`product`,onClose:g(),onConfirm:g(),preview:{to:`product`,from:{level:`project`,describe:`project product=store`},scope:{level:`project`,describe:`project`},rule:s.subject,projects:[],points:[{ref:`marketing/web`,label:`marketing/web`,coordinates:{product:`marketing`,channel:`web`},collections:[`campaigns`,`landing`]},{ref:`support/help`,label:`support/help`,coordinates:{product:`support`,channel:`help`},collections:[`help-centre`]}],content_impact:!1}})},T={render:()=>(0,h.jsx)(m,{request:{project:`kapimart`,session:`sess-1`},onClose:g(),onConfirm:g(),scope:{session:`sess-1`,operations:4,rules:[`term "sign in", use "log in"`],subjects:[`term "sign in", use "log in"`,`voice "utilise", use "use"`,`note "prices carry no space before the currency"`,`memory "Add to basket" into nb-NO`]}})},E=[`Default`,`AcrossProjects`,`StillWorking`,`Empty`,`NoCheckoutToDecideThrough`,`WidenToTheWorkspace`,`WidenPastAnAxis`,`UndoASession`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`An agent session with a decision waiting, beside a person's own day.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
        proposed: 1,
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
}`,...y.parameters?.docs?.source},description:{story:`The workspace feed, where each operation names the project it came from.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...CONTEXT_FEED,
      groups: [feedGroup({
        id: "session:sess-1",
        session: "sess-1",
        proposed: 2,
        quiet: false,
        entries: [CANDIDATE, IN_FORCE]
      })]
    } satisfies ContextFeed
  }
}`,...b.parameters?.docs?.source},description:{story:`A session still recording: the summary says so rather than counting.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    feed: EMPTY_FEED
  }
}`,...x.parameters?.docs?.source},description:{story:`Nothing has been recorded in this workspace yet.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    feed: {
      ...CONTEXT_FEED,
      groups: [feedGroup({
        id: "session:sess-1",
        session: "sess-1",
        recipe: undefined,
        proposed: 1,
        entries: [feedEntry({
          ...CANDIDATE,
          recipe: undefined
        })]
      })]
    } satisfies ContextFeed
  }
}`,...S.parameters?.docs?.source},description:{story:`A project the workspace holds and no checkout here carries.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ContextWidenDialog entry={IN_FORCE} to="workspace" onClose={fn()} onConfirm={fn()} preview={{
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
}`,...C.parameters?.docs?.source},description:{story:`What a rule reaches once it answers in every project.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ContextWidenDialog entry={IN_FORCE} to="product" onClose={fn()} onConfirm={fn()} preview={{
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
}`,...w.parameters?.docs?.source},description:{story:`What a rule reaches once it stops being specific about one axis.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ContextRevertDialog request={{
    project: "kapimart",
    session: "sess-1"
  }} onClose={fn()} onConfirm={fn()} scope={{
    session: "sess-1",
    operations: 4,
    rules: ['term "sign in", use "log in"'],
    subjects: ['term "sign in", use "log in"', 'voice "utilise", use "use"', 'note "prices carry no space before the currency"', 'memory "Add to basket" into nb-NO']
  }} />
}`,...T.parameters?.docs?.source},description:{story:`Undoing a session names how many operations go.`,...T.parameters?.docs?.description}}}})))()}D();export{y as AcrossProjects,v as Default,x as Empty,S as NoCheckoutToDecideThrough,b as StillWorking,T as UndoASession,w as WidenPastAnAxis,C as WidenToTheWorkspace,E as __namedExportsOrder,_ as default};