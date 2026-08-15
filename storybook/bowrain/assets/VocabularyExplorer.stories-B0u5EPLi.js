import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./utils-DTEGmkNc.js";import{n as i,t as a}from"./src-Q3LpxxKE.js";import{n as o,t as s}from"./chevron-down-CHWrdsZi.js";import{S as c,c as l}from"./CodedTextDisplay-DhrLLLKj.js";import{n as u,t as d}from"./FormatVocabularyBadge-Chklod1p.js";import{D as f,G as p,J as m,K as h,W as g,Y as _,c as v,d as y,l as b,n as x,o as S,p as C,q as w,r as T,t as E,u as D,v as O,y as k}from"./fixtures-C763VSgU.js";function A(e){let t=[];return e.constraints.deletable||t.push({label:`Required`,color:`text-destructive bg-destructive/10 border-destructive/25`,description:`Must be present in the translation`}),e.constraints.cloneable||t.push({label:`No duplicates`,color:`text-warning bg-warning/10 border-warning/25`,description:`Cannot be duplicated in the translation`}),e.constraints.reorderable||t.push({label:`Fixed position`,color:`text-purple-500 bg-purple-500/10 border-purple-500/25`,description:`Must stay in the same relative position`}),t}function j(e,t,n){return{span_type:t,type:e,id:n,data:``}}function M({activeTypes:e,compact:t,onTypeSelect:n}){let i=c(),[a,o]=(0,P.useState)(null),u=(0,P.useMemo)(()=>i.categories().map(e=>{let t=i.typesInCategory(e);return{category:e,label:I[e]||e,types:t.map(e=>({name:e,info:i.lookupOrFallback(e)}))}}),[i]),d=e=>{o(t=>t===e?null:e)};return(0,F.jsx)(`div`,{className:`flex flex-col gap-1`,children:u.map(i=>{let o=a===i.category,c=!e||i.types.some(t=>e.includes(t.name));return(0,F.jsxs)(`div`,{className:r(`rounded-md border border-border/50 overflow-hidden transition-all`,!c&&e&&`opacity-40`),children:[(0,F.jsxs)(`button`,{type:`button`,onClick:()=>d(i.category),className:`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-muted/40 transition-colors`,children:[(0,F.jsx)(N,{color:i.types[0]?.info.color}),(0,F.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,F.jsx)(`div`,{className:`text-xs font-semibold text-foreground`,children:i.label}),!t&&(0,F.jsxs)(`div`,{className:`text-[10px] text-muted-foreground leading-tight`,children:[i.types.length,` type`,i.types.length===1?``:`s`]})]}),!o&&(0,F.jsxs)(`div`,{className:`flex items-center gap-0.5 mr-2`,children:[i.types.slice(0,4).map(t=>(0,F.jsx)(l,{spanInfo:j(t.name,t.info.chipLabel.placeholder?`placeholder`:`opening`,`p`),dimmed:e?!e.includes(t.name):!1},t.name)),i.types.length>4&&(0,F.jsxs)(`span`,{className:`text-[10px] text-muted-foreground ml-1`,children:[`+`,i.types.length-4]})]}),(0,F.jsx)(s,{className:r(`w-3.5 h-3.5 text-muted-foreground transition-transform shrink-0`,o&&`rotate-180`)})]}),o&&(0,F.jsxs)(`div`,{className:`border-t border-border/30`,children:[!t&&L[i.category]&&(0,F.jsx)(`div`,{className:`px-3 py-1.5 text-[11px] text-muted-foreground bg-muted/20 border-b border-border/20`,children:L[i.category]}),i.types.map(i=>{let a=!e||e.includes(i.name),o=A(i.info);return(0,F.jsxs)(`div`,{className:r(`flex items-start gap-3 px-3 py-2 border-b border-border/20 last:border-b-0`,`hover:bg-muted/30 transition-colors`,n&&`cursor-pointer`,!a&&`opacity-40`),onClick:()=>n?.(i.name),children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-1 pt-0.5 shrink-0`,children:[i.info.chipLabel.open&&(0,F.jsx)(l,{spanInfo:j(i.name,`opening`,`x`)}),i.info.chipLabel.close&&(0,F.jsx)(l,{spanInfo:j(i.name,`closing`,`x`)}),i.info.chipLabel.placeholder&&!i.info.chipLabel.open&&(0,F.jsx)(l,{spanInfo:j(i.name,`placeholder`,`x`)})]}),(0,F.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,F.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,F.jsx)(`span`,{className:`text-xs font-medium text-foreground`,children:i.info.label}),(0,F.jsx)(`span`,{className:`text-[10px] text-muted-foreground font-mono`,children:i.name})]}),o.length>0&&(0,F.jsx)(`div`,{className:`flex items-center gap-1 mt-1`,children:o.map(e=>(0,F.jsx)(`span`,{className:r(`text-[9px] px-1.5 py-0.5 rounded border font-medium`,e.color),title:e.description,children:e.label},e.label))})]}),!t&&(0,F.jsx)(`div`,{className:`text-xs text-muted-foreground shrink-0 pt-0.5 font-mono`,children:i.info.html.open&&i.info.html.close?`${i.info.html.open}…${i.info.html.close}`:i.info.html.placeholder||``})]},i.name)})]})]},i.category)})})}function N({color:e}){return(0,F.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full shrink-0`,style:{backgroundColor:e?.text||`var(--text-muted)`,opacity:.8}})}var P,F,I,L;function R(){return(R=e((()=>{P=t(),a(),o(),F=n(),I={formatting:`Text Formatting`,linking:`Links & References`,media:`Images & Media`,structure:`Document Structure`,code:`Code & Variables`,generic:`Other`},L={formatting:`Visual text styles like bold, italic, and underline that should be preserved in translations.`,linking:`Hyperlinks and cross-references — the linked text is translated but the URL is preserved.`,media:`Embedded images, videos, and other media that appear inline within text.`,structure:`Structural elements like line breaks and footnotes that control document layout.`,code:`Variables, placeholders, and function calls that must not be modified during translation.`},M.__docgenInfo={description:``,methods:[],displayName:`VocabularyExplorer`,props:{activeTypes:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Highlight only types present in this array (filter mode).`},compact:{required:!1,tsType:{name:`boolean`},description:`Compact mode hides descriptions and shows fewer details.`},onTypeSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(typeName: string) => void`,signature:{arguments:[{type:{name:`string`},name:`typeName`}],return:{name:`void`}}},description:`Called when user clicks a type entry.`}}}})))()}var z,B,V,H,U,W,G,K,q,J,Y,X,Z;function Q(){return(Q=e((()=>{R(),a(),u(),b(),z=n(),B={title:`Editor/Terminology/VocabularyExplorer`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Interactive explorer for the vocabulary system that drives inline code rendering.`,``,`Vocabularies define how each inline code type (bold, links, variables, etc.) looks,`,`behaves, and is constrained in the translation editor. The same vocabulary drives`,`consistent behavior across HTML, Markdown, XLIFF, and all other formats.`,``,`**Key features:**`,`- Category-grouped type browser with chip previews`,`- Constraint indicators (required, no duplicates, fixed position)`,"- Format-agnostic — HTML `<b>` and Markdown `**` both map to `fmt:bold`"].join(`
`)}}}},V={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:480,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`Vocabulary Explorer`}),(0,z.jsx)(`p`,{style:Y,children:`Click a category to expand it and see all span types, their chip representations, and editing constraints.`}),(0,z.jsx)(M,{})]})},H={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:480,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`Filtered by Document Types`}),(0,z.jsx)(`p`,{style:Y,children:`When a document only uses certain types, inactive categories are dimmed. This document uses bold, italic, and hyperlinks.`}),(0,z.jsx)(M,{activeTypes:[`fmt:bold`,`fmt:italic`,`link:hyperlink`]})]})},U={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:320,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`Compact Mode`}),(0,z.jsx)(M,{compact:!0})]})},W={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:400,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`Inline Code Legend`}),(0,z.jsx)(`p`,{style:Y,children:`Shows all inline tag types in the current segment, grouped by category, with constraint indicators.`}),(0,z.jsx)(i,{spans:[x,E,k,O,S,T,C],onClose:()=>{}})]})},G={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:400,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`Code Tokens + Formatting`}),(0,z.jsx)(`p`,{style:Y,children:`A segment mixing code tokens (variables, placeholders, ICU functions) with formatting tags. Note the different constraint levels.`}),(0,z.jsx)(i,{spans:[{span_type:`placeholder`,type:`code:variable`,id:`1`,data:`{userName}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`placeholder`,type:`code:placeholder`,id:`2`,data:`{0}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`opening`,type:`code:function`,id:`3`,data:`{count, plural,`,deletable:!1,cloneable:!1,can_reorder:!1},{span_type:`closing`,type:`code:function`,id:`3`,data:`}`,deletable:!1,cloneable:!1,can_reorder:!1},x,E],onClose:()=>{}})]})},K={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:480,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`Vocabulary Badge`}),(0,z.jsx)(`p`,{style:Y,children:`Compact inline badge showing which vocabulary categories are active. Typically displayed in the editor card header.`}),(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12,marginTop:16},children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{style:X,children:`Simple formatting:`}),(0,z.jsx)(d,{spans:[x,E,y,D]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{style:X,children:`Rich content:`}),(0,z.jsx)(d,{spans:f})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`span`,{style:X,children:`Code tokens:`}),(0,z.jsx)(d,{spans:[{span_type:`placeholder`,type:`code:variable`,id:`1`,data:`{name}`},{span_type:`placeholder`,type:`code:placeholder`,id:`2`,data:`{0}`},x,E]})]})]})]})},q={render:()=>(0,z.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,z.jsx)(`h3`,{style:J,children:`All Chip Styles`}),(0,z.jsx)(`p`,{style:Y,children:`Every vocabulary type rendered as tag chips, with constraint indicators.`}),(0,z.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:8,marginTop:16},children:[{label:`Bold`,spans:[x,E]},{label:`Italic`,spans:[y,D]},{label:`Underline`,spans:[_,m]},{label:`Strikethrough`,spans:[p,g]},{label:`Superscript`,spans:[w,h]},{label:`Hyperlink`,spans:[k,O]},{label:`Inline Code`,spans:[S,T]},{label:`Line Break`,spans:[C]},{label:`Image`,spans:[v]},{label:`Variable`,spans:[{span_type:`placeholder`,type:`code:variable`,id:`1`,data:`{name}`}]},{label:`Placeholder`,spans:[{span_type:`placeholder`,type:`code:placeholder`,id:`1`,data:`{0}`}]},{label:`Function (ICU)`,spans:[{span_type:`opening`,type:`code:function`,id:`1`,data:`{count, plural,`},{span_type:`closing`,type:`code:function`,id:`1`,data:`}`}]}].map(({label:e,spans:t})=>(0,z.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:[(0,z.jsx)(`span`,{style:{...X,width:120},children:e}),(0,z.jsx)(`div`,{style:{display:`flex`,gap:4},children:t.map((e,t)=>(0,z.jsx)(l,{spanInfo:e,showConstraints:!0},t))})]},e))})]})},J={fontSize:14,fontWeight:600,marginBottom:4},Y={fontSize:12,color:`#888`,marginBottom:16,lineHeight:1.5},X={fontSize:12,color:`#888`,marginRight:8,display:`inline-block`},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480,
    padding: 16
  }}>
      <h3 style={titleStyle}>Vocabulary Explorer</h3>
      <p style={descStyle}>
        Click a category to expand it and see all span types, their chip representations, and
        editing constraints.
      </p>
      <VocabularyExplorer />
    </div>
}`,...V.parameters?.docs?.source},description:{story:`Browse all vocabulary categories and their span types.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480,
    padding: 16
  }}>
      <h3 style={titleStyle}>Filtered by Document Types</h3>
      <p style={descStyle}>
        When a document only uses certain types, inactive categories are dimmed. This document uses
        bold, italic, and hyperlinks.
      </p>
      <VocabularyExplorer activeTypes={["fmt:bold", "fmt:italic", "link:hyperlink"]} />
    </div>
}`,...H.parameters?.docs?.source},description:{story:`Filter mode: only types present in the current document are highlighted.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320,
    padding: 16
  }}>
      <h3 style={titleStyle}>Compact Mode</h3>
      <VocabularyExplorer compact />
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Compact mode for tighter spaces like sidebars.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const spans: SpanInfo[] = [boldOpen, boldClose, linkOpen, linkClose, codeOpen, codeClose, lineBreak];
    return <div style={{
      maxWidth: 400,
      padding: 16
    }}>
        <h3 style={titleStyle}>Inline Code Legend</h3>
        <p style={descStyle}>
          Shows all inline tag types in the current segment, grouped by category, with constraint
          indicators.
        </p>
        <InlineCodeLegend spans={spans} onClose={() => {}} />
      </div>;
  }
}`,...W.parameters?.docs?.source},description:{story:`Inline code legend showing tags in the current segment.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const spans: SpanInfo[] = [{
      span_type: "placeholder",
      type: "code:variable",
      id: "1",
      data: "{userName}",
      deletable: false,
      cloneable: false,
      can_reorder: true
    }, {
      span_type: "placeholder",
      type: "code:placeholder",
      id: "2",
      data: "{0}",
      deletable: false,
      cloneable: false,
      can_reorder: true
    }, {
      span_type: "opening",
      type: "code:function",
      id: "3",
      data: "{count, plural,",
      deletable: false,
      cloneable: false,
      can_reorder: false
    }, {
      span_type: "closing",
      type: "code:function",
      id: "3",
      data: "}",
      deletable: false,
      cloneable: false,
      can_reorder: false
    }, boldOpen, boldClose];
    return <div style={{
      maxWidth: 400,
      padding: 16
    }}>
        <h3 style={titleStyle}>Code Tokens + Formatting</h3>
        <p style={descStyle}>
          A segment mixing code tokens (variables, placeholders, ICU functions) with formatting
          tags. Note the different constraint levels.
        </p>
        <InlineCodeLegend spans={spans} onClose={() => {}} />
      </div>;
  }
}`,...G.parameters?.docs?.source},description:{story:`Legend for a segment with code tokens (variables, placeholders).`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 480,
    padding: 16
  }}>
      <h3 style={titleStyle}>Vocabulary Badge</h3>
      <p style={descStyle}>
        Compact inline badge showing which vocabulary categories are active. Typically displayed in
        the editor card header.
      </p>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 16
    }}>
        <div>
          <span style={labelStyle}>Simple formatting:</span>
          <FormatVocabularyBadge spans={[boldOpen, boldClose, italicOpen, italicClose]} />
        </div>
        <div>
          <span style={labelStyle}>Rich content:</span>
          <FormatVocabularyBadge spans={richSpans} />
        </div>
        <div>
          <span style={labelStyle}>Code tokens:</span>
          <FormatVocabularyBadge spans={[{
          span_type: "placeholder",
          type: "code:variable",
          id: "1",
          data: "{name}"
        }, {
          span_type: "placeholder",
          type: "code:placeholder",
          id: "2",
          data: "{0}"
        }, boldOpen, boldClose]} />
        </div>
      </div>
    </div>
}`,...K.parameters?.docs?.source},description:{story:`Format vocabulary badge — compact summary of tag categories.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const allTypes: Array<{
      label: string;
      spans: SpanInfo[];
    }> = [{
      label: "Bold",
      spans: [boldOpen, boldClose]
    }, {
      label: "Italic",
      spans: [italicOpen, italicClose]
    }, {
      label: "Underline",
      spans: [underlineOpen, underlineClose]
    }, {
      label: "Strikethrough",
      spans: [strikeOpen, strikeClose]
    }, {
      label: "Superscript",
      spans: [supOpen, supClose]
    }, {
      label: "Hyperlink",
      spans: [linkOpen, linkClose]
    }, {
      label: "Inline Code",
      spans: [codeOpen, codeClose]
    }, {
      label: "Line Break",
      spans: [lineBreak]
    }, {
      label: "Image",
      spans: [imgTag]
    }, {
      label: "Variable",
      spans: [{
        span_type: "placeholder",
        type: "code:variable",
        id: "1",
        data: "{name}"
      }]
    }, {
      label: "Placeholder",
      spans: [{
        span_type: "placeholder",
        type: "code:placeholder",
        id: "1",
        data: "{0}"
      }]
    }, {
      label: "Function (ICU)",
      spans: [{
        span_type: "opening",
        type: "code:function",
        id: "1",
        data: "{count, plural,"
      }, {
        span_type: "closing",
        type: "code:function",
        id: "1",
        data: "}"
      }]
    }];
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <h3 style={titleStyle}>All Chip Styles</h3>
        <p style={descStyle}>
          Every vocabulary type rendered as tag chips, with constraint indicators.
        </p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 16
      }}>
          {allTypes.map(({
          label,
          spans
        }) => <div key={label} style={{
          display: "flex",
          alignItems: "center",
          gap: 8
        }}>
              <span style={{
            ...labelStyle,
            width: 120
          }}>{label}</span>
              <div style={{
            display: "flex",
            gap: 4
          }}>
                {spans.map((s, i) => <TagChipComponent key={i} spanInfo={s} showConstraints />)}
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`All chip styles across every vocabulary type.`,...q.parameters?.docs?.description}}},Z=[`AllVocabularies`,`FilteredByActiveTypes`,`CompactMode`,`InlineCodeLegendPanel`,`CodeTokenLegend`,`VocabularyBadge`,`AllChipStyles`]})))()}Q();export{q as AllChipStyles,V as AllVocabularies,G as CodeTokenLegend,U as CompactMode,H as FilteredByActiveTypes,W as InlineCodeLegendPanel,K as VocabularyBadge,Z as __namedExportsOrder,B as default};