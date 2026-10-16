import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{a as n,n as r}from"./candidateRows-D_sLtA0E.js";import{Ct as i,wt as a}from"./iframe-BLLi_b0O.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{a(),n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={"u-maria":`Maria Lund`,"u-tomas":`Tomás Ferreira`},l=e=>e?c[e]??e:``,u=[{term:`utilize`,replacement:`use`,correction_count:7,dimension:`vocabulary`,status:`pending`,concept_id:`c-use`},{term:`synergy`,replacement:`teamwork`,correction_count:4,dimension:`vocabulary`,status:`pending`},{term:`Dear valued customer`,replacement:`Hello`,correction_count:3,dimension:`tone`,status:`pending`}],d=[{term:`log in`,replacement:`sign in`,correction_count:5,dimension:`vocabulary`,status:`pending`},{term:`log in`,replacement:`log on`,correction_count:3,dimension:`vocabulary`,status:`pending`}],f=[{term:`Globex`,replacement:``,correction_count:5,dimension:`vocabulary`,status:`approved`,decided_by:`u-tomas`,decided_at:`2026-10-14T09:12:00Z`},{term:`leverage`,replacement:`use`,correction_count:9,dimension:`vocabulary`,status:`promoted`,promoted_version:4,auto:!0,decided_at:`2026-10-12T16:40:00Z`},{term:`check-out`,replacement:`checkout`,correction_count:6,dimension:`vocabulary`,status:`promoted`,promoted_version:3,decided_by:`u-maria`,decided_at:`2026-10-09T11:05:00Z`},{term:`disrupt`,replacement:`improve`,correction_count:3,dimension:`vocabulary`,status:`rejected`,decided_by:`u-tomas`,decided_at:`2026-10-08T08:30:00Z`}],p=[...d,...u,...f],m=(e,t)=>r(e).find(e=>e.candidate.term===t)?.key,h={title:`Context/Review/CandidateReview`,component:i,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{candidates:p,onPromote:s(),onReject:s(),onEvaluate:s(),onOpenConcept:s(),nameOf:l,currentUserId:`u-maria`,keyboard:!1},decorators:[e=>(0,o.jsx)(`div`,{style:{height:520,padding:24},children:(0,o.jsx)(e,{})})]},g={args:{keyboard:!0},globals:{theme:`light`}},_={args:{keyboard:!0},globals:{theme:`dark`}},v={args:{defaultSelected:m(p,`utilize`)},globals:{theme:`light`}},y={args:{defaultSelected:m(p,`utilize`),onEvaluate:void 0},globals:{theme:`light`}},b={args:{defaultSelected:m(p,`check-out`)},globals:{theme:`light`}},x={args:{defaultSelected:m(p,`leverage`)},globals:{theme:`dark`}},S={args:{defaultSelected:m(p,`Globex`)},globals:{theme:`light`}},C={args:{candidates:[u[0]]},globals:{theme:`light`}},w={args:{candidates:f.filter(e=>e.status!==`approved`)},globals:{theme:`light`}},T={args:{candidates:Array.from({length:40},(e,t)=>({term:`phrasing ${t+1}`,replacement:`form ${t+1}`,correction_count:40-t,dimension:t%3==0?`style`:`vocabulary`,status:`pending`}))},globals:{theme:`light`}},E={args:{candidates:[{term:`we are pleased to inform you that your subscription has been successfully renewed`,replacement:`your subscription is renewed`,correction_count:4,dimension:`clarity`,status:`pending`},...u]},globals:{theme:`light`}},D={args:{defaultSelected:m(p,`utilize`),busyTerm:`utilize`},globals:{theme:`light`}},O={args:{failed:{term:`utilize`,error:Error(`forbidden: manage_voice permission required`)}},globals:{theme:`light`}},k={args:{candidates:[]},globals:{theme:`light`}},A={args:{candidates:null,loading:!0},globals:{theme:`light`}},j=[`Sample`,`SampleDark`,`SuggestionSelected`,`NoProjectChosen`,`EstablishedSelected`,`AutoPromotedDark`,`ApprovedSelected`,`OneSuggestion`,`NothingWaits`,`ManySuggestions`,`LongContent`,`Busy`,`Failed`,`Empty`,`Loading`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    keyboard: true
  },
  globals: {
    theme: "light"
  }
}`,...g.parameters?.docs?.source},description:{story:`A disagreement, three suggestions, an approved rule and the decided history.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    keyboard: true
  },
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: keyOf(sample, "utilize")
  },
  globals: {
    theme: "light"
  }
}`,...v.parameters?.docs?.source},description:{story:`A suggestion selected: Promote, Change, Reject and Preview impact in the toolbar.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: keyOf(sample, "utilize"),
    onEvaluate: undefined
  },
  globals: {
    theme: "light"
  }
}`,...y.parameters?.docs?.source},description:{story:`The same, without a project chosen to evaluate against: no Preview impact.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: keyOf(sample, "check-out")
  },
  globals: {
    theme: "light"
  }
}`,...b.parameters?.docs?.source},description:{story:`A rule promoted by a member, opened from the Established group.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: keyOf(sample, "leverage")
  },
  globals: {
    theme: "dark"
  }
}`,...x.parameters?.docs?.source},description:{story:`Promoted at the profile's threshold rather than by a person.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: keyOf(sample, "Globex")
  },
  globals: {
    theme: "light"
  }
}`,...S.parameters?.docs?.source},description:{story:`Accepted by a reviewer and not yet promoted: the platform's own state.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: [suggested[0]]
  },
  globals: {
    theme: "light"
  }
}`,...C.parameters?.docs?.source},description:{story:`One suggestion and nothing else.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: decided.filter(c => c.status !== "approved")
  },
  globals: {
    theme: "light"
  }
}`,...w.parameters?.docs?.source},description:{story:`Every suggestion decided: the detail pane says nothing needs you.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: Array.from({
      length: 40
    }, (_, i) => ({
      term: \`phrasing \${i + 1}\`,
      replacement: \`form \${i + 1}\`,
      correction_count: 40 - i,
      dimension: i % 3 === 0 ? "style" as const : "vocabulary" as const,
      status: "pending" as const
    }))
  },
  globals: {
    theme: "light"
  }
}`,...T.parameters?.docs?.source},description:{story:`Many suggestions: the list scrolls under its group headers.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: [{
      term: "we are pleased to inform you that your subscription has been successfully renewed",
      replacement: "your subscription is renewed",
      correction_count: 4,
      dimension: "clarity",
      status: "pending"
    }, ...suggested]
  },
  globals: {
    theme: "light"
  }
}`,...E.parameters?.docs?.source},description:{story:`Long phrasings truncate on their row and wrap in the detail pane.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: keyOf(sample, "utilize"),
    busyTerm: "utilize"
  },
  globals: {
    theme: "light"
  }
}`,...D.parameters?.docs?.source},description:{story:`A decision in flight: its acts are disabled until the server answers.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    failed: {
      term: "utilize",
      error: new Error("forbidden: manage_voice permission required")
    }
  },
  globals: {
    theme: "light"
  }
}`,...O.parameters?.docs?.source},description:{story:`A decision the server refused, put back with the reason.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: []
  },
  globals: {
    theme: "light"
  }
}`,...k.parameters?.docs?.source},description:{story:`Nothing suggested yet.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    candidates: null,
    loading: true
  },
  globals: {
    theme: "light"
  }
}`,...A.parameters?.docs?.source}}}})))()}M();export{S as ApprovedSelected,x as AutoPromotedDark,D as Busy,k as Empty,b as EstablishedSelected,O as Failed,A as Loading,E as LongContent,T as ManySuggestions,y as NoProjectChosen,w as NothingWaits,C as OneSuggestion,g as Sample,_ as SampleDark,v as SuggestionSelected,j as __namedExportsOrder,h as default};