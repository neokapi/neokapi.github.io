import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{a as n,c as r,l as i,o as a,s as o,t as s}from"./screens-C_b-uqHK.js";import{S as c,_ as l,a as u,c as d,d as f,f as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./fixtures-GMcKN8JO.js";var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{o(),i(),n(),y(),x=t(),{expect:S,fn:C,userEvent:w,within:T}=__STORYBOOK_MODULE_TEST__,E={title:`Project screens/Rules`,component:a,tags:[`autodocs`],args:{view:d,keyboard:!1,onAnswer:C(async()=>void 0),navigate:C()},decorators:[e=>(0,x.jsx)(`div`,{className:`h-[560px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,x.jsx)(e,{})})],parameters:{docs:{description:{component:`Decide: each suggestion waiting for a person as one question. The list on
the left holds one row per suggestion; the pane on the right asks the
question \`kapi rules\` asks, with the evidence as its options, what keeping
the picked one does, and Keep, Not a rule and Later.`}}}},D={globals:{theme:`dark`}},O={},k={...D,name:`Many questions (dark)`},A={args:{view:f},play:async({canvasElement:e})=>{let t=T(e);await S(t.getByText(`Which one do your files use?`)).toBeInTheDocument();let n=t.getAllByRole(`radio`);await S(n).toHaveLength(3),await w.click(n[1]),await S(e.querySelector(`[data-slot='decide-consequence']`)).toHaveTextContent(`If you keep "Quick cast"`)}},j={...D,name:`Name with forms (dark)`,args:{view:f}},M={args:{view:p},play:async({canvasElement:e})=>{let t=T(e);await S(t.getByText(`Keep this as a rule?`)).toBeInTheDocument(),await S(t.queryAllByRole(`radio`)).toHaveLength(0)}},N={...D,name:`Yes-or-no rule (dark)`,args:{view:p}},P={args:{view:d,defaultSelected:`conflict:${g.store}`}},F={args:{view:m},play:async({canvasElement:e,args:t})=>{let n=T(e);await S(n.getByText(`Nothing to decide.`)).toBeInTheDocument(),await w.click(n.getByRole(`button`,{name:`Open the Map`})),await S(t.navigate).toHaveBeenCalledWith({kind:`map`})}},I={...D,name:`Nothing to decide (dark)`,args:{view:m}},L={args:{view:b}},R={args:{view:u,members:v,onAssign:C(async()=>void 0),defaultSelected:`suggested:${g.business}`},play:async({canvasElement:e})=>{let t=T(e);await S(t.getByRole(`combobox`,{name:`Assigned to`})).toHaveTextContent(`Mira Holt`),await w.click(t.getByRole(`button`,{name:/Assigned to me/})),await S(e.querySelectorAll(`[data-slot='decide-item']`)).toHaveLength(1)}},z={...D,name:`Assigned (dark)`,args:{...R.args}},B={args:{...R.args,defaultSelected:void 0,defaultAssignedToMe:!0}},V={mapSummary:async()=>c,readerFile:async()=>l,decideView:async()=>d},H={render:()=>(0,x.jsx)(s,{port:V,keyboard:!1,navigate:C(),canNavigate:()=>!1})},U={render:()=>(0,x.jsx)(`div`,{className:`p-6`,children:(0,x.jsx)(r,{rules:h})})},W={...D,name:`Kept by (dark)`,render:U.render},G={render:()=>(0,x.jsx)(`div`,{className:`p-6`,children:(0,x.jsx)(r,{rules:[]})})},K={render:()=>(0,x.jsx)(`div`,{className:`p-6`,children:(0,x.jsx)(r,{rules:_})})},q={...D,name:`Kept by, grouped (dark)`,render:K.render},J=[`ManyQuestions`,`ManyQuestionsDark`,`NameWithForms`,`NameWithFormsDark`,`YesOrNoRule`,`YesOrNoRuleDark`,`Disagreement`,`NothingToDecide`,`NothingToDecideDark`,`LongContent`,`Assigned`,`AssignedDark`,`AssignedToMe`,`ReadOnly`,`KeptBy`,`KeptByDark`,`KeptByEmpty`,`KeptByGrouped`,`KeptByGroupedDark`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source},description:{story:`KapiMart with four questions: a disagreement, a name, a word and a note.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Many questions (dark)"
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    view: NAME_VIEW
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Which one do your files use?")).toBeInTheDocument();
    const options = canvas.getAllByRole("radio");
    await expect(options).toHaveLength(3);
    await userEvent.click(options[1]);
    await expect(canvasElement.querySelector("[data-slot='decide-consequence']")).toHaveTextContent('If you keep "Quick cast"');
  }
}`,...A.parameters?.docs?.source},description:{story:`A name with its forms: which one do your files use, the most used first, and Other….`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Name with forms (dark)",
  args: {
    view: NAME_VIEW
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    view: WORD_VIEW
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Keep this as a rule?")).toBeInTheDocument();
    await expect(canvas.queryAllByRole("radio")).toHaveLength(0);
  }
}`,...M.parameters?.docs?.source},description:{story:`A yes-or-no rule: keep this as a rule, and what keeping it does.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Yes-or-no rule (dark)",
  args: {
    view: WORD_VIEW
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    view: DECIDE_VIEW,
    defaultSelected: \`conflict:\${DECIDE_IDS.store}\`
  }
}`,...P.parameters?.docs?.source},description:{story:`Two assistants disagree: each side with its own uses and what keeping it does.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    view: EMPTY_DECIDE_VIEW
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Nothing to decide.")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Open the Map"
    }));
    await expect(args.navigate).toHaveBeenCalledWith({
      kind: "map"
    });
  }
}`,...F.parameters?.docs?.source},description:{story:`Nothing waits: the rules count and the way back to the Map.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Nothing to decide (dark)",
  args: {
    view: EMPTY_DECIDE_VIEW
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    view: LONG_VIEW
  }
}`,...L.parameters?.docs?.source},description:{story:`Forms, a quote and a path that run long.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    view: ASSIGNED_VIEW,
    members: DECIDE_MEMBERS,
    onAssign: fn(async () => undefined),
    defaultSelected: \`suggested:\${DECIDE_IDS.business}\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("combobox", {
      name: "Assigned to"
    })).toHaveTextContent("Mira Holt");
    await userEvent.click(canvas.getByRole("button", {
      name: /Assigned to me/
    }));
    await expect(canvasElement.querySelectorAll("[data-slot='decide-item']")).toHaveLength(1);
  }
}`,...R.parameters?.docs?.source},description:{story:`A host that assigns questions: who holds each, the picker, and Assigned to me.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Assigned (dark)",
  args: {
    ...Assigned.args
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...Assigned.args,
    defaultSelected: undefined,
    defaultAssignedToMe: true
  }
}`,...B.parameters?.docs?.source},description:{story:`Opened on the questions assigned to the reader.`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DecideScreen port={READ_ONLY} keyboard={false} navigate={fn()} canNavigate={() => false} />
}`,...H.parameters?.docs?.source},description:{story:`A read-only preview: each question and its evidence, and no Keep, Not a rule or Later.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <KeptRulesView rules={KEPT_RULES} />
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Kept by: each rule in force with who kept it, the day and where it holds.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Kept by (dark)",
  render: KeptBy.render
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <KeptRulesView rules={[]} />
    </div>
}`,...G.parameters?.docs?.source},description:{story:`Kept by with nothing kept.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <KeptRulesView rules={MANY_KEPT_RULES} />
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Kept by with more rules than fit one list: a heading per kind, each the newest first.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Kept by, grouped (dark)",
  render: KeptByGrouped.render
}`,...q.parameters?.docs?.source}}}})))()}Y();export{R as Assigned,z as AssignedDark,B as AssignedToMe,P as Disagreement,U as KeptBy,W as KeptByDark,G as KeptByEmpty,K as KeptByGrouped,q as KeptByGroupedDark,L as LongContent,O as ManyQuestions,k as ManyQuestionsDark,A as NameWithForms,j as NameWithFormsDark,F as NothingToDecide,I as NothingToDecideDark,H as ReadOnly,M as YesOrNoRule,N as YesOrNoRuleDark,J as __namedExportsOrder,E as default};