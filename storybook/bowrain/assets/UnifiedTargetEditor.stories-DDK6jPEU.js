import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i,t as a}from"./runtime-DfFF6Hu8.js";import{n as o,t as s}from"./UnifiedTargetEditor-DQlM4No6.js";import{a as c,i as l}from"./blockStatus-DoWrN-tk.js";function u(e){return{id:`blk-messages`,source:`You have {count} messages`,has_spans:!0,source_spans:[{span_type:`placeholder`,type:`jsx:var`,id:`0`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function d(e){return{id:`blk-rich`,source:`Click <strong>here</strong> for {count} pending.`,has_spans:!0,source_spans:[{span_type:`opening`,type:`fmt:bold`,id:`0`,data:`<strong>`,equiv_text:`strong`},{span_type:`closing`,type:`fmt:bold`,id:`0`,data:`</strong>`,equiv_text:`strong`},{span_type:`placeholder`,type:`jsx:var`,id:`1`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function f(e){return{id:`blk-plain`,source:`Welcome back!`,has_spans:!1,source_spans:[],targets:e,targets_coded:{},translatable:!0,properties:{}}}function p({block:e,locale:t=`de`}){let[n,i]=(0,m.useState)(null),[o,c]=(0,m.useState)(null),[u,d]=(0,m.useState)(!0);return(0,h.jsxs)(`div`,{style:{minHeight:500,padding:16,fontFamily:`sans-serif`},children:[(0,h.jsx)(`div`,{style:{marginBottom:12,fontSize:14},children:r(`4D3PfDI35ox`,`{=m0}Source:{/=m0} {=m1}{block.source}{/=m1}`,{"=m0":(0,h.jsx)(`strong`,{children:`Source:`}),"=m1":(0,h.jsx)(`code`,{children:e.source})},{"block.source":e.source})}),(0,h.jsx)(`div`,{style:{marginBottom:12,fontSize:14},children:r(`ehQmiDt86az`,`{=m0}Target ({locale}):{/=m0} {=m2}{value}{/=m2}`,{"=m0":(0,h.jsxs)(`strong`,{children:[`Target (`,t,`):`]}),"=m2":(0,h.jsx)(`code`,{children:l(e,t)||`(empty)`})},{locale:t,value:l(e,t)||`(empty)`})}),u?(0,h.jsx)(s,{block:e,locale:t,onSave:e=>{e.kind===`flat`?i({codedText:e.codedText,spansCount:e.spans.length}):c(e.text),d(!1)},onCancel:()=>d(!1)}):(0,h.jsx)(`button`,{type:`button`,onClick:()=>d(!0),children:a(`joVpNxa7r1t`,`Reopen editor`)}),n&&(0,h.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12},children:[`flat saved → codedText=`,JSON.stringify(n.codedText),` spans=`,n.spansCount]}),o&&(0,h.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12,whiteSpace:`pre-wrap`},children:[`plural saved → `,o]})]})}var m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{i(),m=t(),o(),c(),h=n(),g={title:`Editor/Core/UnifiedTargetEditor`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Single editor surface for every target — flat or plural, with inline codes or plain. Replaces TargetCellEditor + the textarea fallback + the Plurals dialog. Lexical chips render identically across modes; plural authoring is a mode toggle inside the editor. See AD #408 / #409.`}}}},_={name:`Flat target with placeholder`,render:()=>(0,h.jsx)(p,{block:u({de:`Sie haben {count} Nachrichten`})})},v={name:`Flat target with paired inline codes`,render:()=>(0,h.jsx)(p,{block:d({de:`Klicken Sie hier — {count} ausstehend.`})})},y={name:`Flat plain text (no spans)`,render:()=>(0,h.jsx)(p,{block:f({de:`Willkommen zurück!`})})},b={name:`Plural target — opens in per-form view`,render:()=>(0,h.jsx)(p,{block:u({de:`{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}`})})},x={name:`Plural target with paired inline codes`,render:()=>(0,h.jsx)(p,{block:d({de:`{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}`})})},S={name:`Empty target — author flat, then upgrade`,render:()=>(0,h.jsx)(p,{block:u({})})},C={name:`No pivot candidates — upgrade button hidden`,render:()=>(0,h.jsx)(p,{block:f({})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Flat target with placeholder",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "Sie haben {count} Nachrichten"
  })} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Flat target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "Klicken Sie hier — {count} ausstehend."
  })} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Flat plain text (no spans)",
  render: () => <Wrapper block={makePlainBlock({
    de: "Willkommen zurück!"
  })} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Plural target — opens in per-form view",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}"
  })} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Plural target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}"
  })} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Empty target — author flat, then upgrade",
  render: () => <Wrapper block={makeMessagesBlock({})} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "No pivot candidates — upgrade button hidden",
  render: () => <Wrapper block={makePlainBlock({})} />
}`,...C.parameters?.docs?.source}}},w=[`FlatPlaceholder`,`FlatRichInlineCodes`,`FlatPlainText`,`PluralTarget`,`PluralWithInlineCodes`,`EmptyFlatThenUpgrade`,`NoPivotCandidates`]})))()}T();export{S as EmptyFlatThenUpgrade,_ as FlatPlaceholder,y as FlatPlainText,v as FlatRichInlineCodes,C as NoPivotCandidates,b as PluralTarget,x as PluralWithInlineCodes,w as __namedExportsOrder,g as default};