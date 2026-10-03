import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,d as i,i as a,n as o,o as s,r as c,t as l,u}from"./useChangeSender-DfYeQBw2.js";import{n as d,t as f}from"./memoryChanges-BSYV5b4E.js";import{n as p,t as m}from"./ChangesCard-BFxgQBiW.js";function h({block:e,moved:t}){let n=(0,g.useMemo)(()=>new f([e]),[e]),[r,i]=(0,g.useState)(null),[a,s]=(0,g.useState)(0),l=(0,g.useCallback)(async()=>{let t=await n.read({doc:e.doc,blocks:[e.block]});i(t.blocks[0]?u(t.blocks[0]):null),s(e=>e+1)},[n,e]);(0,g.useEffect)(()=>{l()},[l]),(0,g.useEffect)(()=>{t&&a===1&&n.touch(e.doc,e.block,t)},[t,a,n,e]);let d=o(n,{onApplied:l,onReload:l});return(0,_.jsx)(`div`,{className:`max-w-xl`,children:(0,_.jsx)(c,{sender:d,content:r,locale:`en`,"data-slot":`story-edit`})})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{g=t(),p(),a(),s(),l(),i(),d(),_=n(),v={title:`Edit/Edition panels`,parameters:{layout:`padded`,docs:{description:{component:`The pieces every Kapi Desktop edit is made of: an edition in the editor, the
save that sends it to the change service with the revision it read, the
prompt a moved revision brings up, and the recorded changes of the edition.`}}}},y={doc:`docs/guide.html`,block:`p`,text:`Read the <x id="1"/>shop guide<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.`,codes:{1:{kind:`paired`,type:`link:hyperlink`,attrs:{href:`https://old.example/guide`}},2:{kind:`paired`,type:`fmt:bold`}}},b={doc:`src/cart.kbf.json`,block:`cart-count`,text:`<x id="1/"/> items in your cart`,codes:{"1/":{kind:`placeholder`,type:`jsx:var`,equiv:`count`,disp:`count`}},structures:[{path:[0],kind:`plural`,pivot:`count`,branches:{zero:`Your cart is empty`,one:`1 item in your cart`,other:`<x id="1/"/> items in your cart`}}]},x={name:`Formatted text`,render:()=>(0,_.jsx)(h,{block:y})},S={name:`Plural forms`,render:()=>(0,_.jsx)(h,{block:b})},C={doc:`Localizable.xcstrings`,block:`shared-items`,text:`<x id="1/"/> shared <x id="2/"/> items`,codes:{"1/":{kind:`placeholder`,type:`printf`,equiv:`%@`},"2/":{kind:`placeholder`,type:`printf`,equiv:`%@`}},structures:[{path:[0],kind:`plural`,pivot:`count`,branches:{one:`<x id="1/"/> shared one item with <x id="2/"/>`,other:`<x id="1/"/> shared items with <x id="2/"/>`}}]},w={name:`Plural forms with codes that look alike`,render:()=>(0,_.jsx)(h,{block:C})},T={name:`Changed since it was opened`,render:()=>(0,_.jsx)(h,{block:y,moved:`Read the <x id="1"/>handbook<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.`})},E={name:`Stale prompt`,render:()=>(0,_.jsx)(`div`,{className:`max-w-xl`,children:(0,_.jsx)(r,{current:{rev:`r:0d71f30c75e4a087`,text:`Read the <x id="1"/>store guide<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.`},codes:y.codes,locale:`en`,onReapply:()=>{},onDiscard:()=>{}})})},D={ref:{doc:`locales/en.json`,block:`greeting`,edition:`nb`},rev:`r:3333333333333333`,entries:[{record:`op-9`,before:`r:2222222222222222`,after:`r:3333333333333333`,actor:{kind:`person`,name:`Ingrid`},origin:`desktop`,at:`2026-10-02T14:12:00Z`},{record:`op-7`,before:`r:1111111111111111`,after:`r:2222222222222222`,actor:{kind:`agent`,name:`claude`,session:`s_01J9Q4`},origin:`mcp`,at:`2026-10-01T16:40:00Z`},{record:`op-3`,before:`absent`,after:`r:1111111111111111`,basis:`r:0000000000000000`,actor:{kind:`tool`,name:`translate`},origin:`flow:up`,at:`2026-09-30T09:30:00Z`},{record:`op-2`,before:`r:1111111111111111`,after:`r:1111111111111112`,actor:null,origin:`observed`,at:`2026-09-29T08:00:00Z`}]},O={name:`Recorded changes`,render:()=>(0,_.jsx)(`div`,{className:`max-w-xl`,children:(0,_.jsx)(m,{history:D,defaultOpen:!0})})},k={name:`Recorded changes (none)`,render:()=>(0,_.jsx)(`div`,{className:`max-w-xl`,children:(0,_.jsx)(m,{history:{...D,entries:[]},defaultOpen:!0})})},A=[`FormattedEdit`,`PluralEdit`,`PluralEditTwinCodes`,`StaleOnSave`,`StalePromptAlone`,`HistoryList`,`HistoryEmpty`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Formatted text",
  render: () => <Panel block={FORMATTED} />
}`,...x.parameters?.docs?.source},description:{story:`Formatted text: each inline code is a chip, and the text is typed around them.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Plural forms",
  render: () => <Panel block={PLURAL} />
}`,...S.parameters?.docs?.source},description:{story:`A plural, edited a form at a time; each changed form is saved by its path.`,...S.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Plural forms with codes that look alike",
  render: () => <Panel block={PLURAL_TWINS} />
}`,...w.parameters?.docs?.source},description:{story:`A plural whose forms hold two codes that show the same text: each form is
edited in the inline-code editor, where every code is a chip of its own id,
so neither is lost or doubled.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Changed since it was opened",
  render: () => <Panel block={FORMATTED} moved='Read the <x id="1"/>handbook<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.' />
}`,...T.parameters?.docs?.source},description:{story:`Type an edit and save: the block moved after it was read, so the prompt asks first.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Stale prompt",
  render: () => <div className="max-w-xl">
      <StalePrompt current={{
      rev: "r:0d71f30c75e4a087",
      text: 'Read the <x id="1"/>store guide<x id="/1"/> before you <x id="2"/>order<x id="/2"/>.'
    }} codes={FORMATTED.codes} locale="en" onReapply={() => {}} onDiscard={() => {}} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`The prompt itself, as a stale refusal draws it.`,...E.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Recorded changes",
  render: () => <div className="max-w-xl">
      <ChangesCard history={HISTORY} defaultOpen />
    </div>
}`,...O.parameters?.docs?.source},description:{story:`An edition's recorded changes, most recent first, the one in force marked.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Recorded changes (none)",
  render: () => <div className="max-w-xl">
      <ChangesCard history={{
      ...HISTORY,
      entries: []
    }} defaultOpen />
    </div>
}`,...k.parameters?.docs?.source},description:{story:`An edition nothing has changed through kapi.`,...k.parameters?.docs?.description}}}})))()}j();export{x as FormattedEdit,k as HistoryEmpty,O as HistoryList,S as PluralEdit,w as PluralEditTwinCodes,T as StaleOnSave,E as StalePromptAlone,A as __namedExportsOrder,v as default};