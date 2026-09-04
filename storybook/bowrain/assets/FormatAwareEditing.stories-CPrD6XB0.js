import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./src-D73wA-ID.js";import{r as i,t as a}from"./runtime-DfFF6Hu8.js";import{l as o}from"./MemoryGroupedEntry-D5fif9fE.js";import{n as s,t as c}from"./SourceCellDisplay-DJqLVgEO.js";import{n as l,t as u}from"./FormattedSourceDisplay-BWw_38EV.js";import{n as d,t as f}from"./FormatVocabularyBadge-Bbbh3-yo.js";function p({format:e,description:t,nativeExample:n,codedText:r,spans:i}){return(0,m.jsxs)(`div`,{style:F,children:[(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:8},children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:{fontSize:13,fontWeight:600},children:e}),(0,m.jsx)(`div`,{style:{fontSize:10,color:`#888`},children:t})]}),(0,m.jsx)(f,{spans:i})]}),(0,m.jsx)(`div`,{style:{fontSize:10,fontFamily:`monospace`,color:`#888`,marginBottom:8,padding:`4px 8px`,backgroundColor:`rgba(128,128,128,0.08)`,borderRadius:4,whiteSpace:`pre-wrap`},children:n}),(0,m.jsxs)(`div`,{style:{marginBottom:6},children:[(0,m.jsx)(`div`,{style:P,children:a(`gFw4w4yjlB0`,`Formatted view (what translators see)`)}),(0,m.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,m.jsx)(u,{codedText:r,spans:i})})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:P,children:a(`onxIll9BNc`,`Tag chip view (advanced)`)}),(0,m.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,m.jsx)(c,{codedText:r,spans:i})})]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{i(),l(),s(),r(),d(),m=t(),h=``,g=``,_=``,v=`Click ${h}here${g} to ${h}learn more${g}`,y=[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<b class="cta">`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</b>`},{span_type:`opening`,type:`link:hyperlink`,id:`2`,data:`<a href="https://docs.example.com">`},{span_type:`closing`,type:`link:hyperlink`,id:`2`,data:`</a>`}],b=[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`**`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`**`},{span_type:`opening`,type:`link:hyperlink`,id:`2`,data:`[`},{span_type:`closing`,type:`link:hyperlink`,id:`2`,data:`](https://docs.example.com)`}],x=[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<pc id="1" dataRefStart="d1">`,sub_type:`xlf:b`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</pc>`,sub_type:`xlf:b`},{span_type:`opening`,type:`link:hyperlink`,id:`2`,data:`<pc id="2" dataRefStart="d2">`,sub_type:`xlf:a`},{span_type:`closing`,type:`link:hyperlink`,id:`2`,data:`</pc>`,sub_type:`xlf:a`}],S=`${h}Important:${g} Use ${h}kapi init${g} to get started.${_}See the ${h}docs${g} for more.`,C=[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<strong>`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</strong>`},{span_type:`opening`,type:`fmt:code`,id:`2`,data:`<code>`},{span_type:`closing`,type:`fmt:code`,id:`2`,data:`</code>`},{span_type:`placeholder`,type:`struct:break`,id:`3`,data:`<br/>`},{span_type:`opening`,type:`link:hyperlink`,id:`4`,data:`<a href="/docs">`},{span_type:`closing`,type:`link:hyperlink`,id:`4`,data:`</a>`}],w=[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`**`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`**`},{span_type:`opening`,type:`fmt:code`,id:`2`,data:"`"},{span_type:`closing`,type:`fmt:code`,id:`2`,data:"`"},{span_type:`placeholder`,type:`struct:break`,id:`3`,data:`  
`},{span_type:`opening`,type:`link:hyperlink`,id:`4`,data:`[`},{span_type:`closing`,type:`link:hyperlink`,id:`4`,data:`](/docs)`}],T=`Hello ${_}, you have ${_} new ${h}messages${g}.`,E=[{span_type:`placeholder`,type:`code:variable`,id:`1`,data:`{userName}`,display_text:`{userName}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`placeholder`,type:`code:placeholder`,id:`2`,data:`{count}`,display_text:`{count}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`opening`,type:`fmt:bold`,id:`3`,data:`<b>`},{span_type:`closing`,type:`fmt:bold`,id:`3`,data:`</b>`}],D={title:`Editor/Formatting/FormatAwareEditing`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Demonstrates format-aware editing powered by vocabularies.`,``,`The same text appears identically in the editor regardless of whether it`,`came from an HTML file, a Markdown document, or an XLIFF exchange file.`,`This is because all three formats map to the same vocabulary types:`,``,'- HTML `<b>` = Markdown `**` = XLIFF `<pc dataRefStart="d1">` → **fmt:bold**','- HTML `<a>` = Markdown `[]()` = XLIFF `<pc dataRefStart="d2">` → **link:hyperlink**',``,`Translators see the same visual experience regardless of the source format.`].join(`
`)}}}},O={render:()=>(0,m.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,m.jsx)(`h3`,{style:M,children:a(`eCIhoakVr8y`,`Cross-Format Consistency`)}),(0,m.jsx)(`p`,{style:N,children:a(`cJ7Jsp5h7mS`,`The same sentence extracted from HTML, Markdown, and XLIFF files. Despite completely different native syntax, the translator sees identical visual output because all three map to the same vocabulary types.`)}),(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(p,{format:`HTML`,description:a(`fOk9bLqgFaf`,`.html file`),nativeExample:`Click <b class="cta">here</b> to <a href="https://docs.example.com">learn more</a>`,codedText:v,spans:y}),(0,m.jsx)(p,{format:`Markdown`,description:a(`hPKRw9Udoaf`,`.md file`),nativeExample:`Click **here** to [learn more](https://docs.example.com)`,codedText:v,spans:b}),(0,m.jsx)(p,{format:`XLIFF 2.0`,description:a(`fwbGK5ToCrI`,`.xlf file`),nativeExample:`Click <pc id="1" dataRefStart="d1">here</pc> to <pc id="2" dataRefStart="d2">learn more</pc>`,codedText:v,spans:x})]})]})},k={render:()=>(0,m.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,m.jsx)(`h3`,{style:M,children:a(`cbLfUGSv65I`,`Rich Content: HTML vs Markdown`)}),(0,m.jsx)(`p`,{style:N,children:a(`byYMqzG2uqA`,`A more complex segment with bold, code, line break, and link. Both formats produce identical editor output.`)}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,m.jsx)(`div`,{style:{flex:1},children:(0,m.jsx)(p,{format:`HTML`,description:a(`69AY8jbm2Mo`,`<strong>, <code>, <br/>, <a>`),nativeExample:`<strong>Important:</strong> Use <code>kapi init</code> to get started.<br/>See the <a href="/docs">docs</a>.`,codedText:S,spans:C})}),(0,m.jsx)(`div`,{style:{flex:1},children:(0,m.jsx)(p,{format:`Markdown`,description:a(`dUbihAwIrj5`,"**, `, newline, []()"),nativeExample:"**Important:** Use `kapi init` to get started.  \nSee the [docs](/docs).",codedText:S,spans:w})})]})]})},A={render:()=>(0,m.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,m.jsx)(`h3`,{style:M,children:a(`lKX4aiQszqs`,`Variables and Placeholders`)}),(0,m.jsx)(`p`,{style:N,children:a(`7uzqxXneAot`,`i18n message formats embed variables and placeholders that must be preserved during translation. The vocabulary system marks these as non-deletable and non-cloneable, protecting them from accidental changes.`)}),(0,m.jsx)(p,{format:`JSON i18n`,description:a(`bI4v7tNoDSE`,`ICU message format variables`),nativeExample:`{ "greeting": "Hello {userName}, you have {count} new <b>messages</b>." }`,codedText:T,spans:E}),(0,m.jsxs)(`div`,{style:{marginTop:16},children:[(0,m.jsx)(`div`,{style:P,children:a(`h4H8nrkzf9N`,`Tag palette (with constraint indicators)`)}),(0,m.jsx)(o,{sourceSpans:E,onInsert:()=>{},showCategoryGroups:!0})]}),(0,m.jsxs)(`div`,{style:{marginTop:16},children:[(0,m.jsx)(`div`,{style:P,children:a(`i5Ub8XcHkLB`,`Inline code legend`)}),(0,m.jsx)(n,{spans:E,onClose:()=>{}})]})]})},j={render:()=>{let e=[...C,{span_type:`placeholder`,type:`code:variable`,id:`5`,data:`{version}`,display_text:`{version}`,deletable:!1,cloneable:!1}];return(0,m.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,m.jsx)(`h3`,{style:M,children:a(`dkl8OdxKvRJ`,`Tag Palette with Category Groups`)}),(0,m.jsx)(`p`,{style:N,children:a(`e9X90utcfSe`,`When a segment contains tags from multiple vocabulary categories, the palette shows category separators for clarity.`)}),(0,m.jsx)(o,{sourceSpans:e,onInsert:()=>{},showCategoryGroups:!0})]})}},M={fontSize:14,fontWeight:600,marginBottom:4},N={fontSize:12,color:`#888`,marginBottom:16,lineHeight:1.5},P={fontSize:10,fontWeight:600,color:`#888`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:4},F={padding:16,borderRadius:8,border:`1px solid rgba(128,128,128,0.2)`,backgroundColor:`rgba(128,128,128,0.03)`},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 700,
    padding: 16
  }}>
      <h3 style={titleStyle}>Cross-Format Consistency</h3>
      <p style={descStyle}>
        The same sentence extracted from HTML, Markdown, and XLIFF files. Despite completely
        different native syntax, the translator sees identical visual output because all three map
        to the same vocabulary types.
      </p>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <FormatCard format="HTML" description=".html file" nativeExample={'Click <b class="cta">here</b> to <a href="https://docs.example.com">learn more</a>'} codedText={sentence} spans={htmlSpans} />
        <FormatCard format="Markdown" description=".md file" nativeExample="Click **here** to [learn more](https://docs.example.com)" codedText={sentence} spans={markdownSpans} />
        <FormatCard format="XLIFF 2.0" description=".xlf file" nativeExample={'Click <pc id="1" dataRefStart="d1">here</pc> to <pc id="2" dataRefStart="d2">learn more</pc>'} codedText={sentence} spans={xliffSpans} />
      </div>
    </div>
}`,...O.parameters?.docs?.source},description:{story:`Same sentence from three different formats renders identically.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 700,
    padding: 16
  }}>
      <h3 style={titleStyle}>Rich Content: HTML vs Markdown</h3>
      <p style={descStyle}>
        A more complex segment with bold, code, line break, and link. Both formats produce identical
        editor output.
      </p>
      <div style={{
      display: "flex",
      gap: 16
    }}>
        <div style={{
        flex: 1
      }}>
          <FormatCard format="HTML" description="<strong>, <code>, <br/>, <a>" nativeExample={'<strong>Important:</strong> Use <code>kapi init</code> to get started.<br/>See the <a href="/docs">docs</a>.'} codedText={richSentence} spans={htmlRichSpans} />
        </div>
        <div style={{
        flex: 1
      }}>
          <FormatCard format="Markdown" description="**, \`, newline, []()" nativeExample={"**Important:** Use \`kapi init\` to get started.  \\nSee the [docs](/docs)."} codedText={richSentence} spans={mdRichSpans} />
        </div>
      </div>
    </div>
}`,...k.parameters?.docs?.source},description:{story:`Rich content with multiple tag types showing consistent treatment.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 700,
    padding: 16
  }}>
      <h3 style={titleStyle}>Variables and Placeholders</h3>
      <p style={descStyle}>
        i18n message formats embed variables and placeholders that must be preserved during
        translation. The vocabulary system marks these as non-deletable and non-cloneable,
        protecting them from accidental changes.
      </p>
      <FormatCard format="JSON i18n" description="ICU message format variables" nativeExample={'{ "greeting": "Hello {userName}, you have {count} new <b>messages</b>." }'} codedText={i18nSentence} spans={i18nSpans} />
      <div style={{
      marginTop: 16
    }}>
        <div style={sectionLabel}>Tag palette (with constraint indicators)</div>
        <TagPalette sourceSpans={i18nSpans} onInsert={() => {}} showCategoryGroups />
      </div>
      <div style={{
      marginTop: 16
    }}>
        <div style={sectionLabel}>Inline code legend</div>
        <InlineCodeLegend spans={i18nSpans} onClose={() => {}} />
      </div>
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Code tokens from i18n message formats (ICU, printf, etc.).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mixedSpans: SpanInfo[] = [...htmlRichSpans, {
      span_type: "placeholder",
      type: "code:variable",
      id: "5",
      data: "{version}",
      display_text: "{version}",
      deletable: false,
      cloneable: false
    }];
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <h3 style={titleStyle}>Tag Palette with Category Groups</h3>
        <p style={descStyle}>
          When a segment contains tags from multiple vocabulary categories, the palette shows
          category separators for clarity.
        </p>
        <TagPalette sourceSpans={mixedSpans} onInsert={() => {}} showCategoryGroups />
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:`Tag palette with category separators for mixed-category spans.`,...j.parameters?.docs?.description}}},I=[`CrossFormatConsistency`,`RichContentAcrossFormats`,`CodeTokensAndVariables`,`TagPaletteWithCategories`]})))()}L();export{A as CodeTokensAndVariables,O as CrossFormatConsistency,k as RichContentAcrossFormats,j as TagPaletteWithCategories,I as __namedExportsOrder,D as default};