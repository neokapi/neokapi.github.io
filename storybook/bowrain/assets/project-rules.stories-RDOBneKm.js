import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./react-BnW4a1gY.js";import{t as n}from"./jsx-runtime-BxfXuubT.js";import{a as r,t as i}from"./useRouteContext-DNUCgxrn.js";import{t as a}from"./useSearch-CQ2ck-n-.js";import{n as o,t as s}from"./screens-JUm3X-pD.js";import{a as c,l,n as u,o as d,r as f,s as p,t as m}from"./project-screens-fixture-port-D5g2gf0s.js";import{a as h,o as g,t as _}from"./fixtures-DbP3IMQ9.js";function v({port:e,row:t,assignedToMe:n,navigate:r}){return(0,y.jsxs)(`div`,{"data-slot":`project-rules`,className:`flex min-h-full flex-col`,children:[(0,y.jsx)(`div`,{className:`h-[36rem] shrink-0 border-b border-border`,children:(0,y.jsx)(s,{port:e,defaultSelected:t,assignedToMe:n,navigate:r,canNavigate:c},`${t}:${n}`)}),(0,y.jsx)(`div`,{className:`mx-auto w-full max-w-4xl p-6`,children:(0,y.jsx)(o,{port:e})})]})}var y;function b(){return(b=e((()=>{t(),r(),i(),a(),l(),d(),f(),y=n(),v.__docgenInfo={description:`Decide and the kept rules of one project, read through the port it is given.`,methods:[],displayName:`ProjectRulesPage`,props:{port:{required:!0,tsType:{name:`ProjectScreensPort`},description:``},row:{required:!1,tsType:{name:`string`},description:"The Map row to open on (`suggested:<id>`, `conflict:<id>`)."},assignedToMe:{required:!1,tsType:{name:`boolean`},description:`Open Decide on the questions assigned to the signed-in member.`},navigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(target: ScreenTarget) => void`,signature:{arguments:[{type:{name:`union`,raw:`| { kind: "map" }
/** One content file in the Reader, at one block when one is named. */
| { kind: "reader"; path: string; block?: string }
/** The questions Decide asks, on one Map row when one is named (\`suggested:<id>\`). */
| { kind: "rules"; row?: string }
/** The rules in force. */
| { kind: "kept" }
| { kind: "checks" }
| { kind: "blocks" }
/** Setting up a project whose folder is empty or matches a preset. */
| { kind: "setup" }
| { kind: "connect-assistant" }
/** Where the project's rules are shared. */
| { kind: "share" }`,elements:[{name:`signature`,type:`object`,raw:`{ kind: "map" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"map"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "reader"; path: string; block?: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"reader"`,required:!0}},{key:`path`,value:{name:`string`,required:!0}},{key:`block`,value:{name:`string`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: "rules"; row?: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"rules"`,required:!0}},{key:`row`,value:{name:`string`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: "kept" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"kept"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "checks" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"checks"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "blocks" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"blocks"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "setup" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"setup"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "connect-assistant" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"connect-assistant"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "share" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"share"`,required:!0}}]}}]},name:`target`}],return:{name:`void`}}},description:``}}}})))()}var x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{_(),b(),u(),d(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Bowrain/Project/Rules`,component:v,args:{navigate:x(),port:m()},parameters:{layout:`fullscreen`,docs:{description:{component:`The Rules route over the Fernwell fixtures: the questions about the
project's suggestions, and the rules in force with who kept each.`}}}},C={},w={args:{row:`suggested:${g.quickcast}`}},T={args:{port:p(m(),e=>e===`view_content`)}},E={args:{port:m({decideView:async()=>h})}},D={args:{...E.args,assignedToMe:!0}},O=[`Member`,`OnARow`,`WithoutPermission`,`Assigned`,`AssignedToMe`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source},description:{story:`A member who governs rules.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    row: \`suggested:\${DECIDE_IDS.quickcast}\`
  }
}`,...w.parameters?.docs?.source},description:{story:`Opened on one question from a Map row.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    port: permittedPort(fixtureScreensPort(), p => p === "view_content")
  }
}`,...T.parameters?.docs?.source},description:{story:`A member who governs no rule: Decide draws no answer.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    port: fixtureScreensPort({
      decideView: async () => ASSIGNED_VIEW
    })
  }
}`,...E.parameters?.docs?.source},description:{story:`The team queue: who holds each question, the picker of the members, and Assigned to me.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Assigned.args,
    assignedToMe: true
  }
}`,...D.parameters?.docs?.source},description:{story:`Opened from the review inbox on the questions assigned to the member.`,...D.parameters?.docs?.description}}}})))()}k();export{E as Assigned,D as AssignedToMe,C as Member,w as OnARow,T as WithoutPermission,O as __namedExportsOrder,S as default};