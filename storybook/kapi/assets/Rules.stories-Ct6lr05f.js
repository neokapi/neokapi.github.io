import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,c as r,l as i,o as a,t as o,u as s}from"./screens-Do3f43m9.js";import{a as c,c as l,i as u,l as d,m as f,n as p,o as m,s as h,t as g,y as _}from"./fixtures-f1tD8vxz.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{r(),s(),n(),g(),v=t(),{expect:y,fn:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Project screens/Rules`,component:a,tags:[`autodocs`],args:{view:c,keyboard:!1,onAnswer:b(async()=>void 0),navigate:b()},decorators:[e=>(0,v.jsx)(`div`,{className:`h-[560px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,v.jsx)(e,{})})],parameters:{docs:{description:{component:`Decide: each suggestion waiting for a person as one question. The list on
the left holds one row per suggestion; the pane on the right asks the
question \`kapi rules\` asks, with the evidence as its options, what keeping
the picked one does, and Keep, Not a rule and Later.`}}}},w={globals:{theme:`dark`}},T={},E={...w,name:`Many questions (dark)`},D={args:{view:l},play:async({canvasElement:e})=>{let t=S(e);await y(t.getByText(`Which one do your files use?`)).toBeInTheDocument();let n=t.getAllByRole(`radio`);await y(n).toHaveLength(3),await x.click(n[1]),await y(e.querySelector(`[data-slot='decide-consequence']`)).toHaveTextContent(`If you keep "Quick cast"`)}},O={...w,name:`Name with forms (dark)`,args:{view:l}},k={args:{view:d},play:async({canvasElement:e})=>{let t=S(e);await y(t.getByText(`Keep this as a rule?`)).toBeInTheDocument(),await y(t.queryAllByRole(`radio`)).toHaveLength(0)}},A={...w,name:`Yes-or-no rule (dark)`,args:{view:d}},j={args:{view:c,defaultSelected:`conflict:${u.store}`}},M={args:{view:m},play:async({canvasElement:e,args:t})=>{let n=S(e);await y(n.getByText(`Nothing to decide.`)).toBeInTheDocument(),await x.click(n.getByRole(`button`,{name:`Open the Map`})),await y(t.navigate).toHaveBeenCalledWith({kind:`map`})}},N={...w,name:`Nothing to decide (dark)`,args:{view:m}},P={args:{view:h}},F={mapSummary:async()=>_,readerFile:async()=>f,decideView:async()=>c},I={render:()=>(0,v.jsx)(o,{port:F,keyboard:!1,navigate:b(),canNavigate:()=>!1})},L={render:()=>(0,v.jsx)(`div`,{className:`p-6`,children:(0,v.jsx)(i,{rules:p})})},R={...w,name:`Kept by (dark)`,render:L.render},z={render:()=>(0,v.jsx)(`div`,{className:`p-6`,children:(0,v.jsx)(i,{rules:[]})})},B=[`ManyQuestions`,`ManyQuestionsDark`,`NameWithForms`,`NameWithFormsDark`,`YesOrNoRule`,`YesOrNoRuleDark`,`Disagreement`,`NothingToDecide`,`NothingToDecideDark`,`LongContent`,`ReadOnly`,`KeptBy`,`KeptByDark`,`KeptByEmpty`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`KapiMart with four questions: a disagreement, a name, a word and a note.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Many questions (dark)"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`A name with its forms: which one do your files use, the most used first, and Other….`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Name with forms (dark)",
  args: {
    view: NAME_VIEW
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`A yes-or-no rule: keep this as a rule, and what keeping it does.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Yes-or-no rule (dark)",
  args: {
    view: WORD_VIEW
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    view: DECIDE_VIEW,
    defaultSelected: \`conflict:\${DECIDE_IDS.store}\`
  }
}`,...j.parameters?.docs?.source},description:{story:`Two assistants disagree: each side with its own uses and what keeping it does.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Nothing waits: the rules count and the way back to the Map.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Nothing to decide (dark)",
  args: {
    view: EMPTY_DECIDE_VIEW
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    view: LONG_VIEW
  }
}`,...P.parameters?.docs?.source},description:{story:`Forms, a quote and a path that run long.`,...P.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <DecideScreen port={READ_ONLY} keyboard={false} navigate={fn()} canNavigate={() => false} />
}`,...I.parameters?.docs?.source},description:{story:`A read-only preview: each question and its evidence, and no Keep, Not a rule or Later.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <KeptRulesView rules={KEPT_RULES} />
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Kept by: each rule in force with who kept it, the day and where it holds.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Kept by (dark)",
  render: KeptBy.render
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <KeptRulesView rules={[]} />
    </div>
}`,...z.parameters?.docs?.source},description:{story:`Kept by with nothing kept.`,...z.parameters?.docs?.description}}}})))()}V();export{j as Disagreement,L as KeptBy,R as KeptByDark,z as KeptByEmpty,P as LongContent,T as ManyQuestions,E as ManyQuestionsDark,D as NameWithForms,O as NameWithFormsDark,M as NothingToDecide,N as NothingToDecideDark,I as ReadOnly,k as YesOrNoRule,A as YesOrNoRuleDark,B as __namedExportsOrder,C as default};