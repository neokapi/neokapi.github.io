import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,i as r,l as i,n as a,o,r as s,s as c,t as l,u}from"./rulesDecide-yI2Yrgm2.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{u(),c(),d=t(),{expect:f,fn:p,userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/DecidePage`,component:i,tags:[`autodocs`],args:{view:a,keyboard:!1,onAnswer:p(async()=>void 0),onOpenFile:p(),onOpenMap:p()},decorators:[e=>(0,d.jsx)(`div`,{className:`h-[560px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,d.jsx)(e,{})})],parameters:{docs:{description:{component:`Decide: each suggestion waiting for a person as one question. The list on
the left holds one row per suggestion; the pane on the right asks the
question \`kapi rules\` asks, with the evidence as its options, what keeping
the picked one does, and Keep, Not a rule and Later.`}}}},_={globals:{theme:`dark`}},v={},y={..._,name:`Many questions (dark)`},b={args:{view:n},play:async({canvasElement:e})=>{let t=h(e);await f(t.getByText(`Which one do your files use?`)).toBeInTheDocument();let n=t.getAllByRole(`radio`);await f(n).toHaveLength(3),await m.click(n[1]),await f(e.querySelector(`[data-slot='decide-consequence']`)).toHaveTextContent(`If you keep "Quick cast"`)}},x={..._,name:`Name with forms (dark)`,args:{view:n}},S={args:{view:o},play:async({canvasElement:e})=>{let t=h(e);await f(t.getByText(`Keep this as a rule?`)).toBeInTheDocument(),await f(t.queryAllByRole(`radio`)).toHaveLength(0)}},C={..._,name:`Yes-or-no rule (dark)`,args:{view:o}},w={args:{view:a,defaultSelected:`conflict:${l.store}`}},T={args:{view:s},play:async({canvasElement:e,args:t})=>{let n=h(e);await f(n.getByText(`Nothing to decide.`)).toBeInTheDocument(),await m.click(n.getByRole(`button`,{name:`Open the Map`})),await f(t.onOpenMap).toHaveBeenCalled()}},E={..._,name:`Nothing to decide (dark)`,args:{view:s}},D={args:{view:r}},O=[`ManyQuestions`,`ManyQuestionsDark`,`NameWithForms`,`NameWithFormsDark`,`YesOrNoRule`,`YesOrNoRuleDark`,`Disagreement`,`NothingToDecide`,`NothingToDecideDark`,`LongContent`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`KapiMart with four questions: a disagreement, a name, a word and a note.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Many questions (dark)"
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A name with its forms: which one do your files use, the most used first, and Other….`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Name with forms (dark)",
  args: {
    view: NAME_VIEW
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`A yes-or-no rule: keep this as a rule, and what keeping it does.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Yes-or-no rule (dark)",
  args: {
    view: WORD_VIEW
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    view: DECIDE_VIEW,
    defaultSelected: \`conflict:\${DECIDE_IDS.store}\`
  }
}`,...w.parameters?.docs?.source},description:{story:`Two assistants disagree: each side with its own uses and what keeping it does.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    await expect(args.onOpenMap).toHaveBeenCalled();
  }
}`,...T.parameters?.docs?.source},description:{story:`Nothing waits: the rules count and the way back to the Map.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Nothing to decide (dark)",
  args: {
    view: EMPTY_DECIDE_VIEW
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    view: LONG_VIEW
  }
}`,...D.parameters?.docs?.source},description:{story:`Forms, a quote and a path that run long.`,...D.parameters?.docs?.description}}}})))()}k();export{w as Disagreement,D as LongContent,v as ManyQuestions,y as ManyQuestionsDark,b as NameWithForms,x as NameWithFormsDark,T as NothingToDecide,E as NothingToDecideDark,S as YesOrNoRule,C as YesOrNoRuleDark,O as __namedExportsOrder,g as default};