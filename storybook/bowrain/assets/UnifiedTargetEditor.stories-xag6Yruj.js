import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{a as r,i}from"./blockStatus-CQRAqoAO.js";import{n as a,t as o}from"./UnifiedTargetEditor-DPrhnvgp.js";function s(e){return{id:`blk-messages`,source:`You have {count} messages`,has_spans:!0,source_spans:[{span_type:`placeholder`,type:`jsx:var`,id:`0`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function c(e){return{id:`blk-rich`,source:`Click <strong>here</strong> for {count} pending.`,has_spans:!0,source_spans:[{span_type:`opening`,type:`fmt:bold`,id:`0`,data:`<strong>`,equiv_text:`strong`},{span_type:`closing`,type:`fmt:bold`,id:`0`,data:`</strong>`,equiv_text:`strong`},{span_type:`placeholder`,type:`jsx:var`,id:`1`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function l(e){return{id:`blk-plain`,source:`Welcome back!`,has_spans:!1,source_spans:[],targets:e,targets_coded:{},translatable:!0,properties:{}}}function u({block:e,locale:t=`de`}){let[n,r]=(0,d.useState)(null),[a,s]=(0,d.useState)(null),[c,l]=(0,d.useState)(!0);return(0,f.jsxs)(`div`,{style:{minHeight:500,padding:16,fontFamily:`sans-serif`},children:[(0,f.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[(0,f.jsx)(`strong`,{children:`Source:`}),` `,(0,f.jsx)(`code`,{children:e.source})]}),(0,f.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[(0,f.jsxs)(`strong`,{children:[`Target (`,t,`):`]}),` `,(0,f.jsx)(`code`,{children:i(e,t)||`(empty)`})]}),c?(0,f.jsx)(o,{block:e,locale:t,onSave:e=>{e.kind===`flat`?r({codedText:e.codedText,spansCount:e.spans.length}):s(e.text),l(!1)},onCancel:()=>l(!1)}):(0,f.jsx)(`button`,{type:`button`,onClick:()=>l(!0),children:`Reopen editor`}),n&&(0,f.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12},children:[`flat saved → codedText=`,JSON.stringify(n.codedText),` spans=`,n.spansCount]}),a&&(0,f.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12,whiteSpace:`pre-wrap`},children:[`plural saved → `,a]})]})}var d,f,p,m,h,g,_,v,y,b,x;e((()=>{d=t(),a(),r(),f=n(),p={title:`Editor/Core/UnifiedTargetEditor`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Single editor surface for every target — flat or plural, with inline codes or plain. Replaces TargetCellEditor + the textarea fallback + the Plurals dialog. Lexical chips render identically across modes; plural authoring is a mode toggle inside the editor. See AD #408 / #409.`}}}},m={name:`Flat target with placeholder`,render:()=>(0,f.jsx)(u,{block:s({de:`Sie haben {count} Nachrichten`})})},h={name:`Flat target with paired inline codes`,render:()=>(0,f.jsx)(u,{block:c({de:`Klicken Sie hier — {count} ausstehend.`})})},g={name:`Flat plain text (no spans)`,render:()=>(0,f.jsx)(u,{block:l({de:`Willkommen zurück!`})})},_={name:`Plural target — opens in per-form view`,render:()=>(0,f.jsx)(u,{block:s({de:`{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}`})})},v={name:`Plural target with paired inline codes`,render:()=>(0,f.jsx)(u,{block:c({de:`{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}`})})},y={name:`Empty target — author flat, then upgrade`,render:()=>(0,f.jsx)(u,{block:s({})})},b={name:`No pivot candidates — upgrade button hidden`,render:()=>(0,f.jsx)(u,{block:l({})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Flat target with placeholder",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "Sie haben {count} Nachrichten"
  })} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Flat target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "Klicken Sie hier — {count} ausstehend."
  })} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Flat plain text (no spans)",
  render: () => <Wrapper block={makePlainBlock({
    de: "Willkommen zurück!"
  })} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Plural target — opens in per-form view",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}"
  })} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Plural target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}"
  })} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Empty target — author flat, then upgrade",
  render: () => <Wrapper block={makeMessagesBlock({})} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "No pivot candidates — upgrade button hidden",
  render: () => <Wrapper block={makePlainBlock({})} />
}`,...b.parameters?.docs?.source}}},x=[`FlatPlaceholder`,`FlatRichInlineCodes`,`FlatPlainText`,`PluralTarget`,`PluralWithInlineCodes`,`EmptyFlatThenUpgrade`,`NoPivotCandidates`]}))();export{y as EmptyFlatThenUpgrade,m as FlatPlaceholder,g as FlatPlainText,h as FlatRichInlineCodes,b as NoPivotCandidates,_ as PluralTarget,v as PluralWithInlineCodes,x as __namedExportsOrder,p as default};