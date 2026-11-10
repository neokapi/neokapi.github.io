import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./react-BnW4a1gY.js";import{t as n}from"./jsx-runtime-BxfXuubT.js";import{a as r,t as i}from"./useRouteContext-DNUCgxrn.js";import{t as a}from"./useSearch-CQ2ck-n-.js";import{n as o,t as s}from"./screens-wAheXdOe.js";import{t as c}from"./page-container-Zf30AVLO.js";import{n as l}from"./iframe-CcLWIuF1.js";import{a as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./project-screens-fixture-port-FKF5Holk.js";import{a as _,o as v,t as y}from"./fixtures-DsqoLj4Y.js";function b({port:e,row:t,assignedToMe:n,navigate:r}){return(0,x.jsxs)(c,{width:`full`,"data-slot":`project-rules`,className:`h-auto min-h-full`,children:[(0,x.jsx)(`div`,{className:`h-[36rem] shrink-0 border-b border-border`,children:(0,x.jsx)(s,{port:e,defaultSelected:t,assignedToMe:n,navigate:r,canNavigate:u},`${t}:${n}`)}),(0,x.jsx)(c,{width:`wide`,children:(0,x.jsx)(o,{port:e})})]})}var x;function S(){return(S=e((()=>{t(),r(),i(),a(),d(),l(),p(),m(),x=n(),b.__docgenInfo={description:`Decide and the kept rules of one project, read through the port it is given.`,methods:[],displayName:`ProjectRulesPage`,props:{port:{required:!0,tsType:{name:`ProjectScreensPort`},description:``},row:{required:!1,tsType:{name:`string`},description:"The Overview row to open on (`suggested:<id>`, `conflict:<id>`)."},assignedToMe:{required:!1,tsType:{name:`boolean`},description:`Open Decide on the questions assigned to the signed-in member.`},navigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(target: ScreenTarget) => void`,signature:{arguments:[{type:{name:`union`,raw:`| { kind: "overview" }
/** One content file in the Reader, at one block when one is named. */
| { kind: "reader"; path: string; block?: string }
/** The questions Decide asks, on one Overview row when one is named (\`suggested:<id>\`). */
| { kind: "rules"; row?: string }
/** The rules in force. */
| { kind: "kept" }
| { kind: "checks" }
| { kind: "blocks" }
/** Setting up a project whose folder is empty or matches a preset. */
| { kind: "setup" }
| { kind: "connect-assistant" }
/** Where the project's rules are shared. */
| { kind: "share" }`,elements:[{name:`signature`,type:`object`,raw:`{ kind: "overview" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"overview"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "reader"; path: string; block?: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"reader"`,required:!0}},{key:`path`,value:{name:`string`,required:!0}},{key:`block`,value:{name:`string`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: "rules"; row?: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"rules"`,required:!0}},{key:`row`,value:{name:`string`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{ kind: "kept" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"kept"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "checks" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"checks"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "blocks" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"blocks"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "setup" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"setup"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "connect-assistant" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"connect-assistant"`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: "share" }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`"share"`,required:!0}}]}}]},name:`target`}],return:{name:`void`}}},description:``}}}})))()}var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{y(),S(),f(),p(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Bowrain/Project/Rules`,component:b,args:{navigate:C(),port:g()},parameters:{layout:`fullscreen`,docs:{description:{component:`The Rules route over the Fernwell fixtures: the questions about the
project's suggestions, and the rules in force with who kept each.`}}}},T={},E={args:{row:`suggested:${v.quickcast}`}},D={args:{port:h(g(),e=>e===`view_content`)}},O={args:{port:g({decideView:async()=>_})}},k={args:{...O.args,assignedToMe:!0}},A=[`Member`,`OnARow`,`WithoutPermission`,`Assigned`,`AssignedToMe`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`A member who governs rules.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    row: \`suggested:\${DECIDE_IDS.quickcast}\`
  }
}`,...E.parameters?.docs?.source},description:{story:`Opened on one question from an Overview row.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    port: permittedPort(fixtureScreensPort(), p => p === "view_content")
  }
}`,...D.parameters?.docs?.source},description:{story:`A member who governs no rule: Decide draws no answer.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    port: fixtureScreensPort({
      decideView: async () => ASSIGNED_VIEW
    })
  }
}`,...O.parameters?.docs?.source},description:{story:`The team queue: who holds each question, the picker of the members, and Assigned to me.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...Assigned.args,
    assignedToMe: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Opened from the review inbox on the questions assigned to the member.`,...k.parameters?.docs?.description}}}})))()}j();export{O as Assigned,k as AssignedToMe,T as Member,E as OnARow,D as WithoutPermission,A as __namedExportsOrder,w as default};