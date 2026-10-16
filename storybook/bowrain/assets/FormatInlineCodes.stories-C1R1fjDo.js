import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,t as r}from"./src-BcGcf4qG.js";import{n as i,r as a,t as o}from"./runtime-ueGu4ihF.js";import{n as s,t as c}from"./SourceCellDisplay-d8kSmy4j.js";import{n as l,t as u}from"./FormattedSourceDisplay-Drg26CG3.js";import{r as d,t as f}from"./editorText-CJT5-HS0.js";import{n as p,t as m}from"./FormatVocabularyBadge-IkWFyF0v.js";import{C as h,G as g,H as _,K as v,T as y,U as b,V as x,W as S,_ as C,a as w,b as T,d as E,g as D,q as O,u as k,w as A,x as j}from"./fixtures-C7q4kBRx.js";function M({title:e,children:t}){return(0,P.jsxs)(`div`,{style:{marginBottom:24},children:[(0,P.jsx)(`h3`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`var(--sb-color, #888)`,marginBottom:8,borderBottom:`1px solid var(--sb-border, #333)`,paddingBottom:4},children:e}),t]})}function N({label:e,runs:t}){return(0,P.jsxs)(`div`,{style:{marginBottom:16},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:e}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(u,{runs:t})})]})}var P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{a(),l(),s(),p(),d(),r(),E(),P=t(),F={title:`Editor/Formatting/FormatInlineCodes`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Shows how inline codes are rendered in the default formatted view.`,``,`- **Formatted view** (default): text appears with actual formatting — bold is bold, links are underlined, code is monospace — with faint background tints marking span boundaries.`,"- **Code view** (opt-in): text shows abstract tag chips like `[B>] text [/B]` for advanced users who need to see the raw structure.",``,`HTML and Markdown codes produce identical visual output because both resolve to the same semantic categories (bold, italic, link, code, etc.).`].join(`
`)}}}},I={render:()=>(0,P.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,P.jsxs)(M,{title:o(`5p05RRlyC1M`,`HTML Codes — Formatted View`),children:[(0,P.jsx)(N,{label:o(`fTWOGsQWdLR`,`Bold`),runs:x}),(0,P.jsx)(N,{label:o(`ekVy9WSrADH`,`Link + Italic`),runs:C}),(0,P.jsx)(N,{label:o(`kBcanP9nxZA`,`Inline Code`),runs:w}),(0,P.jsx)(N,{label:o(`6ujfgFXHUct`,`Line Break`),runs:D})]})})},L={render:()=>(0,P.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,P.jsxs)(M,{title:o(`iEKz10dG270`,`Markdown Codes — Formatted View`),children:[(0,P.jsx)(N,{label:o(`49t4pEhyK2i`,`Bold + Italic (** and *)`),runs:T}),(0,P.jsx)(N,{label:o(`2r55lGYKT2r`,"Code + Link (` and []())"),runs:j})]})})},R={render:()=>{let e=(e,t)=>y(`Click `,e[0],`here`,e[1],` to `,t[0],`learn more`,t[1]),t=e(h(`1`,`b`,`<b>`,`</b>`,`b`),h(`2`,`i`,`<i>`,`</i>`,`i`)),n=e(h(`1`,`bold`,`**`,`**`,`b`),h(`2`,`italic`,`*`,`*`,`i`));return(0,P.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,P.jsxs)(M,{title:o(`kQ1v5JfcAiv`,`Semantic Equivalence — HTML vs Markdown`),children:[(0,P.jsx)(`p`,{style:{fontSize:12,color:`#999`,marginBottom:16},children:o(`lsGpzSU88Py`,`Same sentence with HTML tags vs Markdown delimiters. Both produce identical visual rendering because they map to the same semantic categories (bold, italic).`)}),(0,P.jsxs)(`div`,{style:{display:`flex`,gap:32},children:[(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:i(`knHbn5esZeV`,`HTML ({value})`,{},{value:`<b>, <i>`})}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(u,{runs:t})})]}),(0,P.jsxs)(`div`,{style:{flex:1},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`knTfi4MVWDo`,`Markdown (**, *)`)}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(u,{runs:n})})]})]})]})})}},z={render:()=>(0,P.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,P.jsxs)(M,{title:o(`iNCHpcGKoM1`,`Code View — Tag Chips (Opt-in)`),children:[(0,P.jsx)(`p`,{style:{fontSize:12,color:`#999`,marginBottom:12},children:o(`eL1kve8fAqd`,`The same content shown with tag chip rendering. This is the advanced view that translators can toggle to when they need to see the raw inline code structure.`)}),(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`a1ldoCyZJUz`,`HTML Bold + Link`)}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(c,{runs:A})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`ev5rRfKlLlT`,`Markdown Code + Link`)}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(c,{runs:j})})]})]})})},B={render:()=>{let e=(e,t,n,r=``)=>y(e,t[0],n,t[1],r),t=[{label:`Bold`,runs:e(`This is `,h(`1`,`bold`,`**`,`**`,`b`),`bold text`)},{label:`Italic`,runs:e(`This is `,h(`2`,`italic`,`*`,`*`,`i`),`italic text`)},{label:`Underline`,runs:e(`This is `,[O,v],`underlined text`)},{label:`Strikethrough`,runs:e(`This is `,[b,_],`deleted text`)},{label:`Link`,runs:e(`Visit `,h(`5`,`link`,`[`,`](https://example.com)`,`a`),`our website`,` for more`)},{label:`Code`,runs:e(`Run `,h(`6`,`code`,"`","`",`code`),`kapi init`,` to start`)},{label:`Superscript`,runs:e(`E=mc`,[g,S],`2`)},{label:`Line Break (placeholder)`,runs:y(`First line`,{ph:{id:`9`,type:`br`,data:`<br/>`,equiv:`br`}},`Second line`)},{label:`Image (placeholder)`,runs:y(`See the logo `,k,` below`)}];return(0,P.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,P.jsx)(M,{title:o(`gSwr1JsoXub`,`All Semantic Categories`),children:t.map(e=>(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:e.label}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(u,{runs:e.runs})})]},e.label))})})}},V={render:()=>{let[e,t]=h(`1`,`fmt:bold`,`<b>`,`</b>`,`b`),[r,i]=h(`2`,`link:hyperlink`,`<a href="https://example.com">`,`</a>`,`a`),[a,s]=h(`3`,`fmt:code`,`<code>`,`</code>`,`code`),l=y(e,`Download`,t,` the latest `,r,`release`,i,` (`,a,`v`,s,{ph:{id:`4`,type:`code:variable`,data:`{version}`,equiv:`version`,disp:`{version}`}},`).`,{ph:{id:`5`,type:`struct:break`,data:`<br/>`,equiv:`br`}},`Visit the `,r,`docs`,i,` for details.`);return(0,P.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,P.jsxs)(M,{title:o(`bq4sVMVmqsN`,`Vocabulary-Driven Experience`),children:[(0,P.jsx)(`p`,{style:{fontSize:12,color:`#999`,marginBottom:16},children:o(`dyFtLKrxm8g`,`The complete translator workflow: vocabulary badge summarizes tag categories at a glance, the formatted view shows text naturally, and the legend explains each tag type with its constraints.`)}),(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`jgev2lwVMzt`,`Vocabulary Badge`)}),(0,P.jsx)(m,{runs:l})]}),(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`eTrQNDRVq6p`,`Formatted View`)}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(u,{runs:l})})]}),(0,P.jsxs)(`div`,{style:{marginBottom:12},children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`k3FQEl7X09E`,`Code View`)}),(0,P.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,P.jsx)(c,{runs:l})})]}),(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`6vi3TI2Sn4r`,`Inline Code Legend`)}),(0,P.jsx)(n,{spans:f(l),onClose:()=>{}})]})]})})}},H=[`HTMLFormat`,`MarkdownFormat`,`SemanticEquivalence`,`CodeView`,`AllCategories`,`VocabularyDrivenExperience`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640,
    padding: 16
  }}>
      <Section title="HTML Codes — Formatted View">
        <Comparison label="Bold" runs={simpleBoldRuns} />
        <Comparison label="Link + Italic" runs={linkAndItalicRuns} />
        <Comparison label="Inline Code" runs={codeInlineRuns} />
        <Comparison label="Line Break" runs={lineBreakRuns} />
      </Section>
    </div>
}`,...I.parameters?.docs?.source},description:{story:`HTML inline codes rendered as formatted text with background tints.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640,
    padding: 16
  }}>
      <Section title="Markdown Codes — Formatted View">
        <Comparison label="Bold + Italic (** and *)" runs={mdFormattingRuns} />
        <Comparison label="Code + Link (\` and []())" runs={mdRichRuns} />
      </Section>
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Markdown inline codes rendered as formatted text — same visual output
as HTML despite different underlying syntax.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Same sentence, different underlying markup
    const sentence = (bold: [Run, Run], italic: [Run, Run]) => runsOf("Click ", bold[0], "here", bold[1], " to ", italic[0], "learn more", italic[1]);
    const htmlRuns = sentence(pair("1", "b", "<b>", "</b>", "b"), pair("2", "i", "<i>", "</i>", "i"));
    const mdRuns = sentence(pair("1", "bold", "**", "**", "b"), pair("2", "italic", "*", "*", "i"));
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <Section title="Semantic Equivalence — HTML vs Markdown">
          <p style={{
          fontSize: 12,
          color: "#999",
          marginBottom: 16
        }}>
            Same sentence with HTML tags vs Markdown delimiters. Both produce identical visual
            rendering because they map to the same semantic categories (bold, italic).
          </p>
          <div style={{
          display: "flex",
          gap: 32
        }}>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontSize: 10,
              color: "#888",
              fontWeight: 600,
              marginBottom: 4
            }}>
                HTML ({\`<b>, <i>\`})
              </div>
              <div style={{
              fontSize: 14,
              lineHeight: 1.6
            }}>
                <FormattedSourceDisplay runs={htmlRuns} />
              </div>
            </div>
            <div style={{
            flex: 1
          }}>
              <div style={{
              fontSize: 10,
              color: "#888",
              fontWeight: 600,
              marginBottom: 4
            }}>
                Markdown (**, *)
              </div>
              <div style={{
              fontSize: 14,
              lineHeight: 1.6
            }}>
                <FormattedSourceDisplay runs={mdRuns} />
              </div>
            </div>
          </div>
        </Section>
      </div>;
  }
}`,...R.parameters?.docs?.source},description:{story:`Side-by-side comparison showing that HTML and Markdown codes produce
identical visual output when rendered through FormattedSourceDisplay.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640,
    padding: 16
  }}>
      <Section title="Code View — Tag Chips (Opt-in)">
        <p style={{
        fontSize: 12,
        color: "#999",
        marginBottom: 12
      }}>
          The same content shown with tag chip rendering. This is the advanced view that translators
          can toggle to when they need to see the raw inline code structure.
        </p>
        <div style={{
        marginBottom: 12
      }}>
          <div style={{
          fontSize: 10,
          color: "#888",
          fontWeight: 600,
          marginBottom: 4
        }}>
            HTML Bold + Link
          </div>
          <div style={{
          fontSize: 14,
          lineHeight: 1.6
        }}>
            <SourceCellDisplay runs={richRuns} />
          </div>
        </div>
        <div>
          <div style={{
          fontSize: 10,
          color: "#888",
          fontWeight: 600,
          marginBottom: 4
        }}>
            Markdown Code + Link
          </div>
          <div style={{
          fontSize: 14,
          lineHeight: 1.6
        }}>
            <SourceCellDisplay runs={mdRichRuns} />
          </div>
        </div>
      </Section>
    </div>
}`,...z.parameters?.docs?.source},description:{story:`The same segments shown with tag chips — the opt-in code view
for advanced users who need to see raw inline code structure.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = (prefix: string, codes: [Run, Run], inner: string, suffix = "") => runsOf(prefix, codes[0], inner, codes[1], suffix);
    const categories: Array<{
      label: string;
      runs: Run[];
    }> = [{
      label: "Bold",
      runs: wrap("This is ", pair("1", "bold", "**", "**", "b"), "bold text")
    }, {
      label: "Italic",
      runs: wrap("This is ", pair("2", "italic", "*", "*", "i"), "italic text")
    }, {
      label: "Underline",
      runs: wrap("This is ", [underlineOpen, underlineClose], "underlined text")
    }, {
      label: "Strikethrough",
      runs: wrap("This is ", [strikeOpen, strikeClose], "deleted text")
    }, {
      label: "Link",
      runs: wrap("Visit ", pair("5", "link", "[", "](https://example.com)", "a"), "our website", " for more")
    }, {
      label: "Code",
      runs: wrap("Run ", pair("6", "code", "\`", "\`", "code"), "kapi init", " to start")
    }, {
      label: "Superscript",
      runs: wrap("E=mc", [supOpen, supClose], "2")
    }, {
      label: "Line Break (placeholder)",
      runs: runsOf("First line", {
        ph: {
          id: "9",
          type: "br",
          data: "<br/>",
          equiv: "br"
        }
      }, "Second line")
    }, {
      label: "Image (placeholder)",
      runs: runsOf("See the logo ", imgTag, " below")
    }];
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <Section title="All Semantic Categories">
          {categories.map(cat => <div key={cat.label} style={{
          marginBottom: 12
        }}>
              <div style={{
            fontSize: 10,
            color: "#888",
            fontWeight: 600,
            marginBottom: 4
          }}>
                {cat.label}
              </div>
              <div style={{
            fontSize: 14,
            lineHeight: 1.6
          }}>
                <FormattedSourceDisplay runs={cat.runs} />
              </div>
            </div>)}
        </Section>
      </div>;
  }
}`,...B.parameters?.docs?.source},description:{story:`One example per semantic category showing the formatted rendering.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [boldOpen, boldClose] = pair("1", "fmt:bold", "<b>", "</b>", "b");
    const [linkOpen, linkClose] = pair("2", "link:hyperlink", '<a href="https://example.com">', "</a>", "a");
    const [codeOpen, codeClose] = pair("3", "fmt:code", "<code>", "</code>", "code");
    const version: Run = {
      ph: {
        id: "4",
        type: "code:variable",
        data: "{version}",
        equiv: "version",
        disp: "{version}"
      }
    };
    const lineBreak: Run = {
      ph: {
        id: "5",
        type: "struct:break",
        data: "<br/>",
        equiv: "br"
      }
    };
    const allRuns = runsOf(boldOpen, "Download", boldClose, " the latest ", linkOpen, "release", linkClose, " (", codeOpen, "v", codeClose, version, ").", lineBreak, "Visit the ", linkOpen, "docs", linkClose, " for details.");
    return <div style={{
      maxWidth: 640,
      padding: 16
    }}>
        <Section title="Vocabulary-Driven Experience">
          <p style={{
          fontSize: 12,
          color: "#999",
          marginBottom: 16
        }}>
            The complete translator workflow: vocabulary badge summarizes tag categories at a
            glance, the formatted view shows text naturally, and the legend explains each tag type
            with its constraints.
          </p>

          {/* Badge */}
          <div style={{
          marginBottom: 12
        }}>
            <div style={{
            fontSize: 10,
            color: "#888",
            fontWeight: 600,
            marginBottom: 4
          }}>
              Vocabulary Badge
            </div>
            <FormatVocabularyBadge runs={allRuns} />
          </div>

          {/* Formatted view */}
          <div style={{
          marginBottom: 12
        }}>
            <div style={{
            fontSize: 10,
            color: "#888",
            fontWeight: 600,
            marginBottom: 4
          }}>
              Formatted View
            </div>
            <div style={{
            fontSize: 14,
            lineHeight: 1.6
          }}>
              <FormattedSourceDisplay runs={allRuns} />
            </div>
          </div>

          {/* Code view */}
          <div style={{
          marginBottom: 12
        }}>
            <div style={{
            fontSize: 10,
            color: "#888",
            fontWeight: 600,
            marginBottom: 4
          }}>
              Code View
            </div>
            <div style={{
            fontSize: 14,
            lineHeight: 1.6
          }}>
              <SourceCellDisplay runs={allRuns} />
            </div>
          </div>

          {/* Legend */}
          <div>
            <div style={{
            fontSize: 10,
            color: "#888",
            fontWeight: 600,
            marginBottom: 4
          }}>
              Inline Code Legend
            </div>
            <InlineCodeLegend spans={codeSpans(allRuns)} onClose={() => {}} />
          </div>
        </Section>
      </div>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Full vocabulary-driven experience showing badge, legend, and formatted
rendering working together — the complete translator workflow.`,...V.parameters?.docs?.description}}}})))()}U();export{B as AllCategories,z as CodeView,I as HTMLFormat,L as MarkdownFormat,R as SemanticEquivalence,V as VocabularyDrivenExperience,H as __namedExportsOrder,F as default};