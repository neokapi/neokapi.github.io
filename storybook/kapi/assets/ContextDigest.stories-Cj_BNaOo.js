import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./ContextDigest-8N7q2hpp.js";import{n as i,r as a,t as o}from"./ContextWidenDialog-ej4D-Kl4.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as h,u as g}from"./contextDigest-DvPWIU97.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=e((()=>{n(),i(),m(),_=t(),{expect:v,fn:y,userEvent:b,waitFor:x,within:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/ContextDigest`,component:r,tags:[`autodocs`],args:{digest:s,since:p,keyboard:!1,onKeep:y(),onKeepGroup:y(),onDrop:y(),onChoose:y(),onWiden:y(),onOpenFile:y()},decorators:[e=>(0,_.jsx)(`div`,{className:`h-[560px] overflow-hidden rounded-lg border border-border bg-background`,children:(0,_.jsx)(e,{})})],parameters:{docs:{description:{component:`What's new for a project, as a list and a detail pane: Needs you,
Suggested, Established, Earlier and Drift on the left, one line each, and
the selected row's evidence and decisions on the right.`}}}},w={globals:{theme:`dark`}},T={},E={...w,name:`Sample (dark)`},D={args:{defaultSelected:`suggested:${f.kapiMart}`}},O={...w,name:`Suggestion selected (dark)`,args:{defaultSelected:`suggested:${f.kapiMart}`}},k={args:{digest:h,defaultSelected:`conflict:${h.conflicts[0].sides[0].id}`}},A={...w,name:`Conflict selected (dark)`,args:{digest:h}},j={args:{digest:h,defaultSelected:`established:${g().id}`}},M={...w,name:`Established selected (dark)`,args:{digest:h,defaultSelected:`established:${g().id}`}},N={args:{defaultSelected:`suggested:${f.cart}`},play:async({canvasElement:e})=>{let t=S(e);await b.click(t.getByRole(`button`,{name:`Change`}));let n=await t.findByRole(`textbox`,{name:`What to write instead`});await v(n).toHaveValue(`cart`)}},P={...N,...w,name:`Change form open (dark)`},F={args:{digest:u(`drift`),defaultSelected:`drift:${h.drift[0].rule.id}`}},I={...F,...w,name:`Drift (dark)`},L={args:{digest:c(40)}},R={...L,...w,name:`Many items (dark)`},z={args:{digest:l}},B={args:{digest:d,since:void 0,onConnectAssistant:y()}},V={...B,...w,name:`Empty (dark)`},H={args:{canDecide:!1,onOpenFile:void 0,defaultSelected:`suggested:${f.kapiMart}`}},U={args:{keyboard:!0,defaultSelected:`suggested:${f.kapiMart}`},play:async({canvasElement:e,args:t})=>{let n=S(e),r=()=>e.querySelector(`[data-slot="digest-item"][aria-selected="true"]`);await v(r()).toHaveAttribute(`data-id`,f.kapiMart),await b.keyboard(`a`),await v(t.onKeep).toHaveBeenCalledWith(v.objectContaining({id:f.kapiMart}),void 0),await x(()=>v(r()).toHaveAttribute(`data-id`,f.cart)),await b.keyboard(`k`),await v(r()).toHaveAttribute(`data-id`,f.kapiMart),await v(n.getByRole(`heading`,{level:2})).toHaveTextContent(`Write KapiMart`)}},W={render:()=>(0,_.jsx)(o,{rule:a(`fernwell`,g()),to:`workspace`,onClose:y(),onConfirm:y(),preview:{to:`workspace`,from:{level:`project`,describe:`project product=studio`},scope:{level:`workspace`,describe:`workspace product=studio`},rule:{kind:`term`,term:`business`,replacement:`studio`},projects:[{project_key:`fernwell-site`,project_name:`Fernwell site`,checked_out:!0}],points:[],units:[{project_key:`fernwell-site`,document:`pages/about.md`,unit:`p2`,text:`The business opened its doors in 2019.`,matches:1}],coverage:{examined:[{project_key:`fernwell`,project_name:`Fernwell`,units:48,matched:0},{project_key:`fernwell-site`,project_name:`Fernwell site`,units:21,matched:1}],not_examined:[],truncated:!1}}})},G=[`Sample`,`SampleDark`,`SuggestionSelected`,`SuggestionSelectedDark`,`ConflictSelected`,`ConflictSelectedDark`,`EstablishedSelected`,`EstablishedSelectedDark`,`ChangeFormOpen`,`ChangeFormOpenDark`,`Drift`,`DriftDark`,`ManyItems`,`ManyItemsDark`,`NothingNew`,`Empty`,`EmptyDark`,`ReadOnly`,`Keyboard`,`ApplyMoreWidelyPreview`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`The KapiMart sample on first open: one disagreement, selected, and five suggestions.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Sample (dark)"
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: \`suggested:\${SAMPLE_IDS.kapiMart}\`
  }
}`,...D.parameters?.docs?.source},description:{story:`A suggestion selected: Keep, Change and Drop in the toolbar, the evidence and the facts below.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Suggestion selected (dark)",
  args: {
    defaultSelected: \`suggested:\${SAMPLE_IDS.kapiMart}\`
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    digest: CONTEXT_DIGEST,
    defaultSelected: \`conflict:\${CONTEXT_DIGEST.conflicts[0].sides[0].id}\`
  }
}`,...k.parameters?.docs?.source},description:{story:`A disagreement selected: its two sides beside each other, each with its own Choose this side.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Conflict selected (dark)",
  args: {
    digest: CONTEXT_DIGEST
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    digest: CONTEXT_DIGEST,
    defaultSelected: \`established:\${studioRule().id}\`
  }
}`,...j.parameters?.docs?.source},description:{story:`A rule in force selected: Apply more widely and Drop, and how it was established.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  ...dark,
  name: "Established selected (dark)",
  args: {
    digest: CONTEXT_DIGEST,
    defaultSelected: \`established:\${studioRule().id}\`
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: \`suggested:\${SAMPLE_IDS.cart}\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Change"
    }));
    const field = await canvas.findByRole("textbox", {
      name: "What to write instead"
    });
    await expect(field).toHaveValue("cart");
  }
}`,...N.parameters?.docs?.source},description:{story:`Change: the field takes the toolbar's place, holding the form the suggestion asks for.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...ChangeFormOpen,
  ...dark,
  name: "Change form open (dark)"
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    digest: onlySection("drift"),
    defaultSelected: \`drift:\${CONTEXT_DIGEST.drift[0].rule.id}\`
  }
}`,...F.parameters?.docs?.source},description:{story:`Content moving away from a rule in force, with the project's own words back to it.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  ...Drift,
  ...dark,
  name: "Drift (dark)"
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    digest: manySuggestions(40)
  }
}`,...L.parameters?.docs?.source},description:{story:`Forty suggestions: each theme takes a sticky header of its own as the list scrolls.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  ...ManyItems,
  ...dark,
  name: "Many items (dark)"
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    digest: QUIET_DIGEST
  }
}`,...z.parameters?.docs?.source},description:{story:`Nothing new since the last look: one muted line above the list, and the rules from before under Earlier.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    digest: EMPTY_DIGEST,
    since: undefined,
    onConnectAssistant: fn()
  }
}`,...B.parameters?.docs?.source},description:{story:`A project nobody has recorded anything about: what would appear here, and Connect an assistant.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...Empty,
  ...dark,
  name: "Empty (dark)"
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    canDecide: false,
    onOpenFile: undefined,
    defaultSelected: \`suggested:\${SAMPLE_IDS.kapiMart}\`
  }
}`,...H.parameters?.docs?.source},description:{story:`No checkout of the project on this machine: the digest reads, and offers no decisions.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    keyboard: true,
    defaultSelected: \`suggested:\${SAMPLE_IDS.kapiMart}\`
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const selected = () => canvasElement.querySelector('[data-slot="digest-item"][aria-selected="true"]');
    await expect(selected()).toHaveAttribute("data-id", SAMPLE_IDS.kapiMart);
    await userEvent.keyboard("a");
    await expect(args.onKeep).toHaveBeenCalledWith(expect.objectContaining({
      id: SAMPLE_IDS.kapiMart
    }), undefined);
    await waitFor(() => expect(selected()).toHaveAttribute("data-id", SAMPLE_IDS.cart));
    await userEvent.keyboard("k");
    await expect(selected()).toHaveAttribute("data-id", SAMPLE_IDS.kapiMart);
    await expect(canvas.getByRole("heading", {
      level: 2
    })).toHaveTextContent("Write KapiMart");
  }
}`,...U.parameters?.docs?.source},description:{story:`The keyboard session: j moves the selection, a keeps the selected
suggestion and the selection moves on to the next one.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <ContextWidenDialog rule={widenRuleOfDigestItem("fernwell", studioRule())} to="workspace" onClose={fn()} onConfirm={fn()} preview={{
    to: "workspace",
    from: {
      level: "project",
      describe: "project product=studio"
    },
    scope: {
      level: "workspace",
      describe: "workspace product=studio"
    },
    rule: {
      kind: "term",
      term: "business",
      replacement: "studio"
    },
    projects: [{
      project_key: "fernwell-site",
      project_name: "Fernwell site",
      checked_out: true
    }],
    points: [],
    units: [{
      project_key: "fernwell-site",
      document: "pages/about.md",
      unit: "p2",
      text: "The business opened its doors in 2019.",
      matches: 1
    }],
    coverage: {
      examined: [{
        project_key: "fernwell",
        project_name: "Fernwell",
        units: 48,
        matched: 0
      }, {
        project_key: "fernwell-site",
        project_name: "Fernwell site",
        units: 21,
        matched: 1
      }],
      not_examined: [],
      truncated: false
    }
  }} />
}`,...W.parameters?.docs?.source},description:{story:`The preview "Apply more widely" opens before the rule answers in every project.`,...W.parameters?.docs?.description}}}})))()}K();export{W as ApplyMoreWidelyPreview,N as ChangeFormOpen,P as ChangeFormOpenDark,k as ConflictSelected,A as ConflictSelectedDark,F as Drift,I as DriftDark,B as Empty,V as EmptyDark,j as EstablishedSelected,M as EstablishedSelectedDark,U as Keyboard,L as ManyItems,R as ManyItemsDark,z as NothingNew,H as ReadOnly,T as Sample,E as SampleDark,D as SuggestionSelected,O as SuggestionSelectedDark,G as __namedExportsOrder,C as default};