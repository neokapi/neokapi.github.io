import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{D as n,O as r,_ as i,a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,w as p,x as m}from"./fixtures-CXEUIaYw.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{r(),p(),f(),h=t(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Project screens/Rules`,component:n,tags:[`autodocs`],args:{view:u,keyboard:!1,onAnswer:_(async()=>void 0),navigate:_()},decorators:[e=>(0,h.jsx)(`div`,{className:`h-[560px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,h.jsx)(e,{})})],parameters:{docs:{description:{component:`Decide: each suggestion waiting for a person as one question. The list on
the left holds one row per suggestion; the pane on the right asks the
question \`kapi rules\` asks, with the evidence as its options, what keeping
the picked one does, and Keep, Not a rule and Later.`}}}},x={globals:{theme:`dark`}},S={},C={...x,name:`Many questions (dark)`},w={args:{view:l},play:async({canvasElement:e})=>{let t=y(e);await g(t.getByText(`Which one do your files use?`)).toBeInTheDocument();let n=t.getAllByRole(`radio`);await g(n).toHaveLength(3),await v.click(n[1]),await g(e.querySelector(`[data-slot='decide-consequence']`)).toHaveTextContent(`If you keep "Quick cast"`)}},T={...x,name:`Name with forms (dark)`,args:{view:l}},E={args:{view:d},play:async({canvasElement:e})=>{let t=y(e);await g(t.getByText(`Keep this as a rule?`)).toBeInTheDocument(),await g(t.queryAllByRole(`radio`)).toHaveLength(0)}},D={...x,name:`Yes-or-no rule (dark)`,args:{view:d}},O={args:{view:u,defaultSelected:`conflict:${c.store}`}},k={args:{view:s},play:async({canvasElement:e,args:t})=>{let n=y(e);await g(n.getByText(`Nothing to decide.`)).toBeInTheDocument(),await v.click(n.getByRole(`button`,{name:`Open the Map`})),await g(t.navigate).toHaveBeenCalledWith({kind:`map`})}},A={...x,name:`Nothing to decide (dark)`,args:{view:s}},j={args:{view:a}},M={mapSummary:async()=>i,readerFile:async()=>o,decideView:async()=>u},N={render:()=>(0,h.jsx)(m,{port:M,keyboard:!1,navigate:_(),canNavigate:()=>!1})},P=[`ManyQuestions`,`ManyQuestionsDark`,`NameWithForms`,`NameWithFormsDark`,`YesOrNoRule`,`YesOrNoRuleDark`,`Disagreement`,`NothingToDecide`,`NothingToDecideDark`,`LongContent`,`ReadOnly`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source},description:{story:`KapiMart with four questions: a disagreement, a name, a word and a note.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Many questions (dark)"
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`A name with its forms: which one do your files use, the most used first, and Other….`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Name with forms (dark)",
  args: {
    view: NAME_VIEW
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`A yes-or-no rule: keep this as a rule, and what keeping it does.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Yes-or-no rule (dark)",
  args: {
    view: WORD_VIEW
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    view: DECIDE_VIEW,
    defaultSelected: \`conflict:\${DECIDE_IDS.store}\`
  }
}`,...O.parameters?.docs?.source},description:{story:`Two assistants disagree: each side with its own uses and what keeping it does.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Nothing waits: the rules count and the way back to the Map.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Nothing to decide (dark)",
  args: {
    view: EMPTY_DECIDE_VIEW
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    view: LONG_VIEW
  }
}`,...j.parameters?.docs?.source},description:{story:`Forms, a quote and a path that run long.`,...j.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <DecideScreen port={READ_ONLY} keyboard={false} navigate={fn()} canNavigate={() => false} />
}`,...N.parameters?.docs?.source},description:{story:`A read-only preview: each question and its evidence, and no Keep, Not a rule or Later.`,...N.parameters?.docs?.description}}}})))()}F();export{O as Disagreement,j as LongContent,S as ManyQuestions,C as ManyQuestionsDark,w as NameWithForms,T as NameWithFormsDark,k as NothingToDecide,A as NothingToDecideDark,N as ReadOnly,E as YesOrNoRule,D as YesOrNoRuleDark,P as __namedExportsOrder,b as default};