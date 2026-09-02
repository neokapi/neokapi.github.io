import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,t as o}from"./UnifiedTargetEditor-DUdXSz0n.js";import{a as s,i as c}from"./blockStatus-DmR5on8x.js";function l(e){return{id:`blk-messages`,source:`You have {count} messages`,has_spans:!0,source_spans:[{span_type:`placeholder`,type:`jsx:var`,id:`0`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function u(e){return{id:`blk-rich`,source:`Click <strong>here</strong> for {count} pending.`,has_spans:!0,source_spans:[{span_type:`opening`,type:`fmt:bold`,id:`0`,data:`<strong>`,equiv_text:`strong`},{span_type:`closing`,type:`fmt:bold`,id:`0`,data:`</strong>`,equiv_text:`strong`},{span_type:`placeholder`,type:`jsx:var`,id:`1`,data:`{count}`,equiv_text:`count`}],targets:e,targets_coded:{},translatable:!0,properties:{}}}function d(e){return{id:`blk-plain`,source:`Welcome back!`,has_spans:!1,source_spans:[],targets:e,targets_coded:{},translatable:!0,properties:{}}}function f({block:e,locale:t=`de`}){let[n,r]=(0,p.useState)(null),[a,s]=(0,p.useState)(null),[l,u]=(0,p.useState)(!0);return(0,m.jsxs)(`div`,{style:{minHeight:500,padding:16,fontFamily:`sans-serif`},children:[(0,m.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[(0,m.jsx)(`strong`,{children:i(`3Zi9FlGJhzN`,`Source:`)}),` `,(0,m.jsx)(`code`,{children:e.source})]}),(0,m.jsxs)(`div`,{style:{marginBottom:12,fontSize:14},children:[(0,m.jsx)(`strong`,{children:i(`9yxWtLOgJ6E`,`Target (${t}):`,{locale:t})}),` `,(0,m.jsx)(`code`,{children:c(e,t)||`(empty)`})]}),l?(0,m.jsx)(o,{block:e,locale:t,onSave:e=>{e.kind===`flat`?r({codedText:e.codedText,spansCount:e.spans.length}):s(e.text),u(!1)},onCancel:()=>u(!1)}):(0,m.jsx)(`button`,{type:`button`,onClick:()=>u(!0),children:i(`joVpNxa7r1t`,`Reopen editor`)}),n&&(0,m.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12},children:[`flat saved → codedText=`,JSON.stringify(n.codedText),` spans=`,n.spansCount]}),a&&(0,m.jsxs)(`pre`,{style:{background:`#f4f4f5`,padding:8,borderRadius:4,marginTop:12,whiteSpace:`pre-wrap`},children:[`plural saved → `,a]})]})}var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),p=t(),a(),s(),m=n(),h={title:`Editor/Core/UnifiedTargetEditor`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Single editor surface for every target — flat or plural, with inline codes or plain. Replaces TargetCellEditor + the textarea fallback + the Plurals dialog. Lexical chips render identically across modes; plural authoring is a mode toggle inside the editor. See AD #408 / #409.`}}}},g={name:`Flat target with placeholder`,render:()=>(0,m.jsx)(f,{block:l({de:`Sie haben {count} Nachrichten`})})},_={name:`Flat target with paired inline codes`,render:()=>(0,m.jsx)(f,{block:u({de:`Klicken Sie hier — {count} ausstehend.`})})},v={name:`Flat plain text (no spans)`,render:()=>(0,m.jsx)(f,{block:d({de:`Willkommen zurück!`})})},y={name:`Plural target — opens in per-form view`,render:()=>(0,m.jsx)(f,{block:l({de:`{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}`})})},b={name:`Plural target with paired inline codes`,render:()=>(0,m.jsx)(f,{block:u({de:`{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}`})})},x={name:`Empty target — author flat, then upgrade`,render:()=>(0,m.jsx)(f,{block:l({})})},S={name:`No pivot candidates — upgrade button hidden`,render:()=>(0,m.jsx)(f,{block:d({})})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Flat target with placeholder",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "Sie haben {count} Nachrichten"
  })} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Flat target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "Klicken Sie hier — {count} ausstehend."
  })} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Flat plain text (no spans)",
  render: () => <Wrapper block={makePlainBlock({
    de: "Willkommen zurück!"
  })} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Plural target — opens in per-form view",
  render: () => <Wrapper block={makeMessagesBlock({
    de: "{count, plural, one {Sie haben 1 Nachricht} other {Sie haben {count} Nachrichten}}"
  })} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Plural target with paired inline codes",
  render: () => <Wrapper block={makeRichBlock({
    de: "{count, plural, one {Klicken Sie {=strong}hier{/=strong} — 1 ausstehend.} other {Klicken Sie {=strong}hier{/=strong} — {count} ausstehend.}}"
  })} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Empty target — author flat, then upgrade",
  render: () => <Wrapper block={makeMessagesBlock({})} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "No pivot candidates — upgrade button hidden",
  render: () => <Wrapper block={makePlainBlock({})} />
}`,...S.parameters?.docs?.source}}},C=[`FlatPlaceholder`,`FlatRichInlineCodes`,`FlatPlainText`,`PluralTarget`,`PluralWithInlineCodes`,`EmptyFlatThenUpgrade`,`NoPivotCandidates`]})))()}w();export{x as EmptyFlatThenUpgrade,g as FlatPlaceholder,v as FlatPlainText,_ as FlatRichInlineCodes,S as NoPivotCandidates,y as PluralTarget,b as PluralWithInlineCodes,C as __namedExportsOrder,h as default};