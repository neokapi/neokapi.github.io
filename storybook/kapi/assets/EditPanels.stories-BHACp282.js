import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{d as r,i,o as a}from"./EditTextDisplay-JUbS-iFH.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./useChangeSender-Cs9aeuy-.js";import{n as m,t as h}from"./memoryChanges-CdSwi9NA.js";import{n as g,t as _}from"./ChangesCard-CR0DsZWO.js";function v({block:e,moved:t}){let n=(0,b.useMemo)(()=>new h([e]),[e]),[r,a]=(0,b.useState)(null),[o,s]=(0,b.useState)(0),c=(0,b.useCallback)(async()=>{let t=await n.read({doc:e.doc,blocks:[e.block]});a(t.blocks[0]?i(t.blocks[0]):null),s(e=>e+1)},[n,e]);(0,b.useEffect)(()=>{c()},[c]),(0,b.useEffect)(()=>{t&&o===1&&n.touch(e.doc,e.block,t)},[t,o,n,e]);let u=l(n,{onApplied:c,onReload:c});return(0,x.jsx)(`div`,{className:`max-w-xl`,children:(0,x.jsx)(d,{sender:u,content:r,locale:`en`,"data-slot":`story-edit`})})}function y(){let e={doc:`docs/guide.md`,block:`intro`,text:`We use the widget every day.`},t=(0,b.useMemo)(()=>new h([e],{},[{term:`utilize`,replacement:`use`}]),[]),[n,a]=(0,b.useState)(null),o=(0,b.useCallback)(async()=>{let n=await t.read({doc:e.doc,blocks:[e.block]});a(n.blocks[0]?i(n.blocks[0]):null)},[t]);(0,b.useEffect)(()=>{o()},[o]);let s=l(t,{onApplied:o,onReload:o}),[c,u]=(0,b.useState)(!1),{send:f}=s;return(0,b.useEffect)(()=>{n&&!c&&(u(!0),f(r(n,[{text:`We utilize the widget every day.`}]),`Say utilize`))},[n,c,f]),(0,x.jsx)(`div`,{className:`max-w-xl`,children:(0,x.jsx)(d,{sender:s,content:n,locale:`en`,"data-slot":`story-edit`})})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{b=t(),g(),c(),s(),u(),p(),a(),m(),x=n(),S={title:`Edit/Edition panels`,parameters:{layout:`padded`,docs:{description:{component:`The pieces every Kapi Desktop edit is made of: an edition in the editor, the
save that sends it to the change service with the revision it read, the
prompt a moved revision brings up, the prompt a failing rule brings up with
its "Save anyway", and the recorded changes of the edition.`}}}},C={doc:`docs/guide.html`,block:`p`,text:`Read the <x id="1"/>shop guide<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.`,codes:{1:{kind:`paired`,type:`link:hyperlink`,attrs:{href:`https://old.example/guide`}},2:{kind:`paired`,type:`fmt:bold`}}},w={doc:`src/cart.kbf.json`,block:`cart-count`,text:`<x id="1/"/> items in your cart`,codes:{"1/":{kind:`placeholder`,type:`jsx:var`,equiv:`count`,disp:`count`}},structures:[{path:[0],kind:`plural`,pivot:`count`,branches:{zero:`Your cart is empty`,one:`1 item in your cart`,other:`<x id="1/"/> items in your cart`}}]},T={name:`Formatted text`,render:()=>(0,x.jsx)(v,{block:C})},E={name:`Plural forms`,render:()=>(0,x.jsx)(v,{block:w})},D={doc:`Localizable.xcstrings`,block:`shared-items`,text:`<x id="1/"/> shared <x id="2/"/> items`,codes:{"1/":{kind:`placeholder`,type:`printf`,equiv:`%@`},"2/":{kind:`placeholder`,type:`printf`,equiv:`%@`}},structures:[{path:[0],kind:`plural`,pivot:`count`,branches:{one:`<x id="1/"/> shared one item with <x id="2/"/>`,other:`<x id="1/"/> shared items with <x id="2/"/>`}}]},O={name:`Plural forms with codes that look alike`,render:()=>(0,x.jsx)(v,{block:D})},k={name:`Changed since it was opened`,render:()=>(0,x.jsx)(v,{block:C,moved:`Read the <x id="1"/>handbook<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.`})},A={name:`Stale prompt`,render:()=>(0,x.jsx)(`div`,{className:`max-w-xl`,children:(0,x.jsx)(o,{current:{rev:`r:0d71f30c75e4a087`,text:`Read the <x id="1"/>store guide<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.`},codes:C.codes,locale:`en`,onReapply:()=>{},onDiscard:()=>{}})})},j={name:`A rule fails on the wording`,render:()=>(0,x.jsx)(y,{})},M={name:`Gate prompt`,render:()=>(0,x.jsx)(`div`,{className:`max-w-xl`,children:(0,x.jsx)(f,{findings:[{rule:`terms.vocabulary`,message:`Use “use” instead of “utilize”`,fails:!0},{rule:`voice.pattern`,message:`Say what to do without minimising it: “simply”`,fails:!0}],onOverride:()=>{},onDismiss:()=>{}})})},N={ref:{doc:`locales/en.json`,block:`greeting`,edition:`nb`},rev:`r:3333333333333333`,entries:[{record:`op-9`,before:`r:2222222222222222`,after:`r:3333333333333333`,actor:{kind:`person`,name:`Ingrid`},origin:`desktop`,at:`2026-10-02T14:12:00Z`},{record:`op-7`,before:`r:1111111111111111`,after:`r:2222222222222222`,actor:{kind:`agent`,name:`claude`,session:`s_01J9Q4`},origin:`mcp`,at:`2026-10-01T16:40:00Z`},{record:`op-3`,before:`absent`,after:`r:1111111111111111`,basis:`r:0000000000000000`,actor:{kind:`tool`,name:`translate`},origin:`flow:up`,at:`2026-09-30T09:30:00Z`},{record:`op-2`,before:`r:1111111111111111`,after:`r:1111111111111112`,actor:null,origin:`observed`,at:`2026-09-29T08:00:00Z`}]},P={name:`Recorded changes`,render:()=>(0,x.jsx)(`div`,{className:`max-w-xl`,children:(0,x.jsx)(_,{history:N,defaultOpen:!0})})},F={name:`Recorded changes (none)`,render:()=>(0,x.jsx)(`div`,{className:`max-w-xl`,children:(0,x.jsx)(_,{history:{...N,entries:[]},defaultOpen:!0})})},I=[`FormattedEdit`,`PluralEdit`,`PluralEditTwinCodes`,`StaleOnSave`,`StalePromptAlone`,`SaveAnyway`,`GatePromptAlone`,`HistoryList`,`HistoryEmpty`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Formatted text",
  render: () => <Panel block={FORMATTED} />
}`,...T.parameters?.docs?.source},description:{story:`Formatted text: each inline code is a chip, and the text is typed around them.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Plural forms",
  render: () => <Panel block={PLURAL} />
}`,...E.parameters?.docs?.source},description:{story:`A plural, edited a form at a time; each changed form is saved by its path.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Plural forms with codes that look alike",
  render: () => <Panel block={PLURAL_TWINS} />
}`,...O.parameters?.docs?.source},description:{story:`A plural whose forms hold two codes that show the same text: each form is
edited in the inline-code editor, where every code is a chip of its own id,
so neither is lost or doubled.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Changed since it was opened",
  render: () => <Panel block={FORMATTED} moved='Read the <x id="1"/>handbook<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.' />
}`,...k.parameters?.docs?.source},description:{story:`Type an edit and save: the block moved after it was read, so the prompt asks first.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Stale prompt",
  render: () => <div className="max-w-xl">
      <StalePrompt current={{
      rev: "r:0d71f30c75e4a087",
      text: 'Read the <x id="1"/>store guide<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.'
    }} codes={FORMATTED.codes} locale="en" onReapply={() => {}} onDiscard={() => {}} />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`The prompt itself, as a stale refusal draws it.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "A rule fails on the wording",
  render: () => <GatedPanel />
}`,...j.parameters?.docs?.source},description:{story:`A save a failing rule refuses, with the findings and "Save anyway".`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Gate prompt",
  render: () => <div className="max-w-xl">
      <GatePrompt findings={[{
      rule: "terms.vocabulary",
      message: "Use \\u201cuse\\u201d instead of \\u201cutilize\\u201d",
      fails: true
    }, {
      rule: "voice.pattern",
      message: "Say what to do without minimising it: \\u201csimply\\u201d",
      fails: true
    }]} onOverride={() => {}} onDismiss={() => {}} />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`The prompt itself, as a gate_failed refusal draws it.`,...M.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Recorded changes",
  render: () => <div className="max-w-xl">
      <ChangesCard history={HISTORY} defaultOpen />
    </div>
}`,...P.parameters?.docs?.source},description:{story:`An edition's recorded changes, most recent first, the one in force marked.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Recorded changes (none)",
  render: () => <div className="max-w-xl">
      <ChangesCard history={{
      ...HISTORY,
      entries: []
    }} defaultOpen />
    </div>
}`,...F.parameters?.docs?.source},description:{story:`An edition nothing has changed through kapi.`,...F.parameters?.docs?.description}}}})))()}L();export{T as FormattedEdit,M as GatePromptAlone,F as HistoryEmpty,P as HistoryList,E as PluralEdit,O as PluralEditTwinCodes,j as SaveAnyway,k as StaleOnSave,A as StalePromptAlone,I as __namedExportsOrder,S as default};