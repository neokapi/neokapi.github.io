import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,t as r}from"./src-BcGcf4qG.js";import{r as i,t as a}from"./runtime-ueGu4ihF.js";import{l as o}from"./MemoryGroupedEntry-D8QwI-_Y.js";import{n as s,t as c}from"./SourceCellDisplay-d8kSmy4j.js";import{n as l,t as u}from"./FormattedSourceDisplay-Drg26CG3.js";import{r as d,t as f}from"./editorText-CJT5-HS0.js";import{n as p,t as m}from"./FormatVocabularyBadge-IkWFyF0v.js";import{C as h,T as g,d as _}from"./fixtures-C7q4kBRx.js";function v(e,t){return g(`Click `,e[0],`here`,e[1],` to `,t[0],`learn more`,t[1])}function y(e,t,n,r){return[{pcOpen:{id:e,type:t,subType:r,data:`<pc id="${e}" dataRefStart="${n}">`,equiv:r}},{pcClose:{id:e,type:t,subType:r,data:`</pc>`,equiv:r}}]}function b(e,t,n,r){return g(e[0],`Important:`,e[1],` Use `,t[0],`kapi init`,t[1],` to get started.`,n,`See the `,r[0],`docs`,r[1],` for more.`)}function x({format:e,description:t,nativeExample:n,runs:r}){return(0,S.jsxs)(`div`,{style:B,children:[(0,S.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginBottom:8},children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{style:{fontSize:13,fontWeight:600},children:e}),(0,S.jsx)(`div`,{style:{fontSize:10,color:`#888`},children:t})]}),(0,S.jsx)(m,{runs:r})]}),(0,S.jsx)(`div`,{style:{fontSize:10,fontFamily:`monospace`,color:`#888`,marginBottom:8,padding:`4px 8px`,backgroundColor:`rgba(128,128,128,0.08)`,borderRadius:4,whiteSpace:`pre-wrap`},children:n}),(0,S.jsxs)(`div`,{style:{marginBottom:6},children:[(0,S.jsx)(`div`,{style:z,children:a(`gFw4w4yjlB0`,`Formatted view (what translators see)`)}),(0,S.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,S.jsx)(u,{runs:r})})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{style:z,children:a(`onxIll9BNc`,`Tag chip view (advanced)`)}),(0,S.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,S.jsx)(c,{runs:r})})]})]})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=e((()=>{i(),r(),l(),s(),p(),d(),_(),S=t(),C=v(h(`1`,`fmt:bold`,`<b class="cta">`,`</b>`,`b`),h(`2`,`link:hyperlink`,`<a href="https://docs.example.com">`,`</a>`,`a`)),w=v(h(`1`,`fmt:bold`,`**`,`**`,`b`),h(`2`,`link:hyperlink`,`[`,`](https://docs.example.com)`,`a`)),T=v(y(`1`,`fmt:bold`,`d1`,`xlf:b`),y(`2`,`link:hyperlink`,`d2`,`xlf:a`)),E=b(h(`1`,`fmt:bold`,`<strong>`,`</strong>`,`strong`),h(`2`,`fmt:code`,`<code>`,`</code>`,`code`),{ph:{id:`3`,type:`struct:break`,data:`<br/>`,equiv:`br`}},h(`4`,`link:hyperlink`,`<a href="/docs">`,`</a>`,`a`)),D=b(h(`1`,`fmt:bold`,`**`,`**`,`b`),h(`2`,`fmt:code`,"`","`",`code`),{ph:{id:`3`,type:`struct:break`,data:`  
`,equiv:`br`}},h(`4`,`link:hyperlink`,`[`,`](/docs)`,`a`)),[O,k]=h(`3`,`fmt:bold`,`<b>`,`</b>`,`b`),A=g(`Hello `,{ph:{id:`1`,type:`code:variable`,data:`{userName}`,equiv:`userName`,disp:`{userName}`}},`, you have `,{ph:{id:`2`,type:`code:placeholder`,data:`{count}`,equiv:`count`,disp:`{count}`}},` new `,O,`messages`,k,`.`),j=f(A),M={title:`Editor/Formatting/FormatAwareEditing`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Demonstrates format-aware editing powered by vocabularies.`,``,`The same text appears identically in the editor regardless of whether it`,`came from an HTML file, a Markdown document, or an XLIFF exchange file.`,`This is because all three formats map to the same vocabulary types:`,``,'- HTML `<b>` = Markdown `**` = XLIFF `<pc dataRefStart="d1">` → **fmt:bold**','- HTML `<a>` = Markdown `[]()` = XLIFF `<pc dataRefStart="d2">` → **link:hyperlink**',``,`Translators see the same visual experience regardless of the source format.`].join(`
`)}}}},N={render:()=>(0,S.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,S.jsx)(`h3`,{style:L,children:a(`eCIhoakVr8y`,`Cross-Format Consistency`)}),(0,S.jsx)(`p`,{style:R,children:a(`cJ7Jsp5h7mS`,`The same sentence extracted from HTML, Markdown, and XLIFF files. Despite completely different native syntax, the translator sees identical visual output because all three map to the same vocabulary types.`)}),(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,S.jsx)(x,{format:`HTML`,description:a(`fOk9bLqgFaf`,`.html file`),nativeExample:`Click <b class="cta">here</b> to <a href="https://docs.example.com">learn more</a>`,runs:C}),(0,S.jsx)(x,{format:`Markdown`,description:a(`hPKRw9Udoaf`,`.md file`),nativeExample:`Click **here** to [learn more](https://docs.example.com)`,runs:w}),(0,S.jsx)(x,{format:`XLIFF 2.0`,description:a(`fwbGK5ToCrI`,`.xlf file`),nativeExample:`Click <pc id="1" dataRefStart="d1">here</pc> to <pc id="2" dataRefStart="d2">learn more</pc>`,runs:T})]})]})},P={render:()=>(0,S.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,S.jsx)(`h3`,{style:L,children:a(`cbLfUGSv65I`,`Rich Content: HTML vs Markdown`)}),(0,S.jsx)(`p`,{style:R,children:a(`byYMqzG2uqA`,`A more complex segment with bold, code, line break, and link. Both formats produce identical editor output.`)}),(0,S.jsxs)(`div`,{style:{display:`flex`,gap:16},children:[(0,S.jsx)(`div`,{style:{flex:1},children:(0,S.jsx)(x,{format:`HTML`,description:a(`69AY8jbm2Mo`,`<strong>, <code>, <br/>, <a>`),nativeExample:`<strong>Important:</strong> Use <code>kapi init</code> to get started.<br/>See the <a href="/docs">docs</a>.`,runs:E})}),(0,S.jsx)(`div`,{style:{flex:1},children:(0,S.jsx)(x,{format:`Markdown`,description:a(`dUbihAwIrj5`,"**, `, newline, []()"),nativeExample:"**Important:** Use `kapi init` to get started.  \nSee the [docs](/docs).",runs:D})})]})]})},F={render:()=>(0,S.jsxs)(`div`,{style:{maxWidth:700,padding:16},children:[(0,S.jsx)(`h3`,{style:L,children:a(`lKX4aiQszqs`,`Variables and Placeholders`)}),(0,S.jsx)(`p`,{style:R,children:a(`7uzqxXneAot`,`i18n message formats embed variables and placeholders that must be preserved during translation. The vocabulary system marks these as non-deletable and non-cloneable, protecting them from accidental changes.`)}),(0,S.jsx)(x,{format:`JSON i18n`,description:a(`bI4v7tNoDSE`,`ICU message format variables`),nativeExample:`{ "greeting": "Hello {userName}, you have {count} new <b>messages</b>." }`,runs:A}),(0,S.jsxs)(`div`,{style:{marginTop:16},children:[(0,S.jsx)(`div`,{style:z,children:a(`h4H8nrkzf9N`,`Tag palette (with constraint indicators)`)}),(0,S.jsx)(o,{sourceSpans:j,onInsert:()=>{},showCategoryGroups:!0})]}),(0,S.jsxs)(`div`,{style:{marginTop:16},children:[(0,S.jsx)(`div`,{style:z,children:a(`i5Ub8XcHkLB`,`Inline code legend`)}),(0,S.jsx)(n,{spans:j,onClose:()=>{}})]})]})},I={render:()=>{let e=[...f(E),{span_type:`placeholder`,type:`code:variable`,id:`5`,data:`{version}`,display_text:`{version}`,deletable:!1,cloneable:!1}];return(0,S.jsxs)(`div`,{style:{maxWidth:640,padding:16},children:[(0,S.jsx)(`h3`,{style:L,children:a(`dkl8OdxKvRJ`,`Tag Palette with Category Groups`)}),(0,S.jsx)(`p`,{style:R,children:a(`e9X90utcfSe`,`When a segment contains tags from multiple vocabulary categories, the palette shows category separators for clarity.`)}),(0,S.jsx)(o,{sourceSpans:e,onInsert:()=>{},showCategoryGroups:!0})]})}},L={fontSize:14,fontWeight:600,marginBottom:4},R={fontSize:12,color:`#888`,marginBottom:16,lineHeight:1.5},z={fontSize:10,fontWeight:600,color:`#888`,textTransform:`uppercase`,letterSpacing:`0.05em`,marginBottom:4},B={padding:16,borderRadius:8,border:`1px solid rgba(128,128,128,0.2)`,backgroundColor:`rgba(128,128,128,0.03)`},V=[`CrossFormatConsistency`,`RichContentAcrossFormats`,`CodeTokensAndVariables`,`TagPaletteWithCategories`],N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
        <FormatCard format="HTML" description=".html file" nativeExample={'Click <b class="cta">here</b> to <a href="https://docs.example.com">learn more</a>'} runs={htmlRuns} />
        <FormatCard format="Markdown" description=".md file" nativeExample="Click **here** to [learn more](https://docs.example.com)" runs={markdownRuns} />
        <FormatCard format="XLIFF 2.0" description=".xlf file" nativeExample={'Click <pc id="1" dataRefStart="d1">here</pc> to <pc id="2" dataRefStart="d2">learn more</pc>'} runs={xliffRuns} />
      </div>
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Same sentence from three different formats renders identically.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
          <FormatCard format="HTML" description="<strong>, <code>, <br/>, <a>" nativeExample={'<strong>Important:</strong> Use <code>kapi init</code> to get started.<br/>See the <a href="/docs">docs</a>.'} runs={htmlRichRuns} />
        </div>
        <div style={{
        flex: 1
      }}>
          <FormatCard format="Markdown" description="**, \`, newline, []()" nativeExample={"**Important:** Use \`kapi init\` to get started.  \\nSee the [docs](/docs)."} runs={mdRichRuns} />
        </div>
      </div>
    </div>
}`,...P.parameters?.docs?.source},description:{story:`Rich content with multiple tag types showing consistent treatment.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
      <FormatCard format="JSON i18n" description="ICU message format variables" nativeExample={'{ "greeting": "Hello {userName}, you have {count} new <b>messages</b>." }'} runs={i18nRuns} />
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
}`,...F.parameters?.docs?.source},description:{story:`Code tokens from i18n message formats (ICU, printf, etc.).`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const mixedSpans: SpanInfo[] = [...codeSpans(htmlRichRuns), {
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
}`,...I.parameters?.docs?.source},description:{story:`Tag palette with category separators for mixed-category spans.`,...I.parameters?.docs?.description}}}})))()}H();export{F as CodeTokensAndVariables,N as CrossFormatConsistency,P as RichContentAcrossFormats,I as TagPaletteWithCategories,V as __namedExportsOrder,M as default};