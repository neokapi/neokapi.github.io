import{c as e,i as t}from"./preload-helper-DMFJQbmU.js";import{t as n}from"./react-BbjKQ-G3.js";import{t as r}from"./jsx-runtime-DPj3eQ6K.js";import{i,r as a}from"./blockStatus-CbzErK2x.js";import{n as o,t as s}from"./UnifiedTargetEditor-Cl_yDjAu.js";function c(e){return{id:`blk-messages`,source:`You have {count} messages`,has_spans:!0,source_spans:[{span_type:`placeholder`,type:`jsx:var`,id:`0`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function l(e){return{id:`blk-rich`,source:`Click <strong>here</strong> for {count} pending.`,has_spans:!0,source_spans:[{span_type:`opening`,type:`fmt:bold`,id:`0`,data:`<strong>`,equiv_text:`strong`},{span_type:`closing`,type:`fmt:bold`,id:`0`,data:`</strong>`,equiv_text:`strong`},{span_type:`placeholder`,type:`jsx:var`,id:`1`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function u(e){return{id:`blk-plain`,source:`Welcome back!`,has_spans:!1,source_spans:[],targets:e,targets_coded:{},translatable:!0,properties:{}}}function d({block:e,locale:t=`de`}){let[n,r]=(0,f.useState)(null),[i,o]=(0,f.useState)(null),[c,l]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{style:{minHeight:500,padding:16,fontFamily:`sans-serif`},children:[(0,p.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[(0,p.jsx)(`strong`,{children:`Source:`}),` `,(0,p.jsx)(`code`,{children:e.source})]}),(0,p.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[(0,p.jsxs)(`strong`,{children:[`Target (`,t,`):`]}),` `,(0,p.jsx)(`code`,{children:a(e,t)||`(empty)`})]}),c?(0,p.jsx)(s,{block:e,locale:t,onSave:e=>{e.kind===`flat`?r({codedText:e.codedText,spansCount:e.spans.length}):o(e.text),l(!1)},onCancel:()=>l(!1)}):(0,p.jsx)(`button`,{type:`button`,onClick:()=>l(!0),children:`Reopen editor`}),n&&(0,p.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12},children:[`flat saved → codedText=`,JSON.stringify(n.codedText),` spans=`,n.spansCount]}),i&&(0,p.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12,whiteSpace:`pre-wrap`},children:[`plural saved → `,i]})]})}var f,p,m,h,g,_,v,y,b,x,S;t((()=>{f=e(n(),1),o(),i(),p=r(),m={title:`Editor/Core/UnifiedTargetEditor`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Single editor surface for every target — flat or plural, with inline codes or plain. Replaces TargetCellEditor + the textarea fallback + the Plurals dialog. Lexical chips render identically across modes; plural authoring is a mode toggle inside the editor. See AD #408 / #409.`}}}},h={name:`Flat target with placeholder`,render:()=>(0,p.jsx)(d,{block:c({de:`Sie haben {count} Nachrichten`})})},g={name:`Flat target with paired inline codes`,render:()=>(0,p.jsx)(d,{block:l({de:`Klicken Sie hier — {count} ausstehend.`})})},_={name:`Flat plain text (no spans)`,render:()=>(0,p.jsx)(d,{block:u({de:`Willkommen zurück!`})})},v={name:`Plural target — opens in per-form view`,render:()=>(0,p.jsx)(d,{block:c({de:`{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}`})})},y={name:`Plural target with paired inline codes`,render:()=>(0,p.jsx)(d,{block:l({de:`{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}`})})},b={name:`Empty target — author flat, then upgrade`,render:()=>(0,p.jsx)(d,{block:c({})})},x={name:`No pivot candidates — upgrade button hidden`,render:()=>(0,p.jsx)(d,{block:u({})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Flat target with placeholder",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "Sie haben {count} Nachrichten"
  })} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Flat target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "Klicken Sie hier — {count} ausstehend."
  })} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Flat plain text (no spans)",
  render: () => <Wrapper block={makePlainBlock({
    de: "Willkommen zurück!"
  })} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Plural target — opens in per-form view",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}"
  })} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Plural target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}"
  })} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Empty target — author flat, then upgrade",
  render: () => <Wrapper block={makeMessagesBlock({})} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "No pivot candidates — upgrade button hidden",
  render: () => <Wrapper block={makePlainBlock({})} />
}`,...x.parameters?.docs?.source}}},S=[`FlatPlaceholder`,`FlatRichInlineCodes`,`FlatPlainText`,`PluralTarget`,`PluralWithInlineCodes`,`EmptyFlatThenUpgrade`,`NoPivotCandidates`]}))();export{b as EmptyFlatThenUpgrade,h as FlatPlaceholder,_ as FlatPlainText,g as FlatRichInlineCodes,x as NoPivotCandidates,v as PluralTarget,y as PluralWithInlineCodes,S as __namedExportsOrder,m as default};