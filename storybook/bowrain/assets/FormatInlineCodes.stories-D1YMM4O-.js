import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./src-FRm2vGrV.js";import{n as i,r as a,t as o}from"./runtime-CHF36ai7.js";import{n as s,t as c}from"./SourceCellDisplay-CdntJlNH.js";import{n as l,t as u}from"./FormattedSourceDisplay-BEQ_xXS6.js";import{n as d,t as f}from"./FormatVocabularyBadge-CD8ytuI0.js";import{C as p,D as m,G as h,J as g,K as _,O as v,S as y,T as b,W as x,X as S,Y as C,Z as w,_ as T,a as E,d as D,g as O,i as k,q as A,u as j,v as M,w as N,y as P}from"./fixtures-CP74j5SD.js";function F({title:e,children:t}){return(0,L.jsxs)(`div`,{style:{marginBottom:24},children:[(0,L.jsx)(`h3`,{style:{fontSize:11,fontWeight:600,textTransform:`uppercase`,letterSpacing:`0.08em`,color:`var(--sb-color, #888)`,marginBottom:8,borderBottom:`1px solid var(--sb-border, #333)`,paddingBottom:4},children:e}),t]})}function I({label:e,codedText:t,spans:n}){return(0,L.jsxs)(`div`,{style:{marginBottom:16},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:e}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(u,{codedText:t,spans:n})})]})}var L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{a(),l(),s(),d(),r(),D(),L=t(),R=``,z=``,B=``,V={title:`Editor/Formatting/FormatInlineCodes`,tags:[`autodocs`],parameters:{docs:{description:{component:[`Shows how inline codes are rendered in the default formatted view.`,``,`- **Formatted view** (default): text appears with actual formatting — bold is bold, links are underlined, code is monospace — with faint background tints marking span boundaries.`,"- **Code view** (opt-in): text shows abstract tag chips like `[B>] text [/B]` for advanced users who need to see the raw structure.",``,`HTML and Markdown spans produce identical visual output because both resolve to the same semantic categories (bold, italic, link, code, etc.).`].join(`
`)}}}},H={render:()=>(0,L.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,L.jsxs)(F,{title:o(`h990kGbyi9l`,`HTML Spans — Formatted View`),children:[(0,L.jsx)(I,{label:o(`fTWOGsQWdLR`,`Bold`),codedText:x,spans:h}),(0,L.jsx)(I,{label:o(`ekVy9WSrADH`,`Link + Italic`),codedText:M,spans:P}),(0,L.jsx)(I,{label:o(`kBcanP9nxZA`,`Inline Code`),codedText:k,spans:E}),(0,L.jsx)(I,{label:o(`6ujfgFXHUct`,`Line Break`),codedText:O,spans:T})]})})},U={render:()=>(0,L.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,L.jsxs)(F,{title:o(`h2x29cgnJIH`,`Markdown Spans — Formatted View`),children:[(0,L.jsx)(I,{label:o(`49t4pEhyK2i`,`Bold + Italic (** and *)`),codedText:y,spans:p}),(0,L.jsx)(I,{label:o(`2r55lGYKT2r`,"Code + Link (` and []())"),codedText:N,spans:b})]})})},W={render:()=>{let e=`Click ${R}here${z} to ${R}learn more${z}`;return(0,L.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,L.jsxs)(F,{title:o(`kQ1v5JfcAiv`,`Semantic Equivalence — HTML vs Markdown`),children:[(0,L.jsx)(`p`,{style:{fontSize:12,color:`#999`,marginBottom:16},children:o(`lsGpzSU88Py`,`Same sentence with HTML tags vs Markdown delimiters. Both produce identical visual rendering because they map to the same semantic categories (bold, italic).`)}),(0,L.jsxs)(`div`,{style:{display:`flex`,gap:32},children:[(0,L.jsxs)(`div`,{style:{flex:1},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:i(`knHbn5esZeV`,`HTML ({value})`,{},{value:`<b>, <i>`})}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(u,{codedText:e,spans:[{span_type:`opening`,type:`b`,id:`1`,data:`<b>`},{span_type:`closing`,type:`b`,id:`1`,data:`</b>`},{span_type:`opening`,type:`i`,id:`2`,data:`<i>`},{span_type:`closing`,type:`i`,id:`2`,data:`</i>`}]})})]}),(0,L.jsxs)(`div`,{style:{flex:1},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`knTfi4MVWDo`,`Markdown (**, *)`)}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(u,{codedText:e,spans:[{span_type:`opening`,type:`bold`,id:`1`,data:`**`},{span_type:`closing`,type:`bold`,id:`1`,data:`**`},{span_type:`opening`,type:`italic`,id:`2`,data:`*`},{span_type:`closing`,type:`italic`,id:`2`,data:`*`}]})})]})]})]})})}},G={render:()=>(0,L.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,L.jsxs)(F,{title:o(`iNCHpcGKoM1`,`Code View — Tag Chips (Opt-in)`),children:[(0,L.jsx)(`p`,{style:{fontSize:12,color:`#999`,marginBottom:12},children:o(`eL1kve8fAqd`,`The same content shown with tag chip rendering. This is the advanced view that translators can toggle to when they need to see the raw inline code structure.`)}),(0,L.jsxs)(`div`,{style:{marginBottom:12},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`a1ldoCyZJUz`,`HTML Bold + Link`)}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(c,{codedText:m,spans:v})})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`ev5rRfKlLlT`,`Markdown Code + Link`)}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(c,{codedText:N,spans:b})})]})]})})},K={render:()=>{let e=[{label:`Bold`,codedText:`This is ${R}bold text${z}`,spans:[{span_type:`opening`,type:`bold`,id:`1`,data:`**`},{span_type:`closing`,type:`bold`,id:`1`,data:`**`}]},{label:`Italic`,codedText:`This is ${R}italic text${z}`,spans:[{span_type:`opening`,type:`italic`,id:`2`,data:`*`},{span_type:`closing`,type:`italic`,id:`2`,data:`*`}]},{label:`Underline`,codedText:`This is ${R}underlined text${z}`,spans:[w,S]},{label:`Strikethrough`,codedText:`This is ${R}deleted text${z}`,spans:[A,_]},{label:`Link`,codedText:`Visit ${R}our website${z} for more`,spans:[{span_type:`opening`,type:`link`,id:`5`,data:`[`},{span_type:`closing`,type:`link`,id:`5`,data:`](https://example.com)`}]},{label:`Code`,codedText:`Run ${R}kapi init${z} to start`,spans:[{span_type:`opening`,type:`code`,id:`6`,data:"`"},{span_type:`closing`,type:`code`,id:`6`,data:"`"}]},{label:`Superscript`,codedText:`E=mc${R}2${z}`,spans:[C,g]},{label:`Line Break (placeholder)`,codedText:`First line${B}Second line`,spans:[{span_type:`placeholder`,type:`br`,id:`9`,data:`<br/>`}]},{label:`Image (placeholder)`,codedText:`See the logo ${B} below`,spans:[j]}];return(0,L.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,L.jsx)(F,{title:o(`gSwr1JsoXub`,`All Semantic Categories`),children:e.map(e=>(0,L.jsxs)(`div`,{style:{marginBottom:12},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:e.label}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(u,{codedText:e.codedText,spans:e.spans})})]},e.label))})})}},q={render:()=>{let e=[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<b>`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</b>`},{span_type:`opening`,type:`link:hyperlink`,id:`2`,data:`<a href="https://example.com">`},{span_type:`closing`,type:`link:hyperlink`,id:`2`,data:`</a>`},{span_type:`opening`,type:`fmt:code`,id:`3`,data:`<code>`},{span_type:`closing`,type:`fmt:code`,id:`3`,data:`</code>`},{span_type:`placeholder`,type:`code:variable`,id:`4`,data:`{version}`,display_text:`{version}`,deletable:!1,cloneable:!1,can_reorder:!0},{span_type:`placeholder`,type:`struct:break`,id:`5`,data:`<br/>`}],t=`${R}Download${z} the latest ${R}release${z} (${R}v${z}${B}).${B}Visit the ${R}docs${z} for details.`;return(0,L.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,L.jsxs)(F,{title:o(`bq4sVMVmqsN`,`Vocabulary-Driven Experience`),children:[(0,L.jsx)(`p`,{style:{fontSize:12,color:`#999`,marginBottom:16},children:o(`dyFtLKrxm8g`,`The complete translator workflow: vocabulary badge summarizes tag categories at a glance, the formatted view shows text naturally, and the legend explains each tag type with its constraints.`)}),(0,L.jsxs)(`div`,{style:{marginBottom:12},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`jgev2lwVMzt`,`Vocabulary Badge`)}),(0,L.jsx)(f,{spans:e})]}),(0,L.jsxs)(`div`,{style:{marginBottom:12},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`eTrQNDRVq6p`,`Formatted View`)}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(u,{codedText:t,spans:e})})]}),(0,L.jsxs)(`div`,{style:{marginBottom:12},children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`k3FQEl7X09E`,`Code View`)}),(0,L.jsx)(`div`,{style:{fontSize:14,lineHeight:1.6},children:(0,L.jsx)(c,{codedText:t,spans:e})})]}),(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`div`,{style:{fontSize:10,color:`#888`,fontWeight:600,marginBottom:4},children:o(`6vi3TI2Sn4r`,`Inline Code Legend`)}),(0,L.jsx)(n,{spans:e,onClose:()=>{}})]})]})})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640,
    padding: 16
  }}>
      <Section title="HTML Spans — Formatted View">
        <Comparison label="Bold" codedText={simpleBoldCodedText} spans={simpleBoldSpans} />
        <Comparison label="Link + Italic" codedText={linkAndItalicCodedText} spans={linkAndItalicSpans} />
        <Comparison label="Inline Code" codedText={codeInlineCodedText} spans={codeInlineSpans} />
        <Comparison label="Line Break" codedText={lineBreakCodedText} spans={lineBreakSpans} />
      </Section>
    </div>
}`,...H.parameters?.docs?.source},description:{story:`HTML inline codes rendered as formatted text with background tints.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 640,
    padding: 16
  }}>
      <Section title="Markdown Spans — Formatted View">
        <Comparison label="Bold + Italic (** and *)" codedText={mdFormattingCodedText} spans={mdFormattingSpans} />
        <Comparison label="Code + Link (\` and []())" codedText={mdRichCodedText} spans={mdRichSpans} />
      </Section>
    </div>
}`,...U.parameters?.docs?.source},description:{story:`Markdown inline codes rendered as formatted text — same visual output
as HTML despite different underlying syntax.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Same sentence, different underlying markup
    const sentence = \`Click \${O}here\${C} to \${O}learn more\${C}\`;
    const htmlSpans: SpanInfo[] = [{
      span_type: "opening",
      type: "b",
      id: "1",
      data: "<b>"
    }, {
      span_type: "closing",
      type: "b",
      id: "1",
      data: "</b>"
    }, {
      span_type: "opening",
      type: "i",
      id: "2",
      data: "<i>"
    }, {
      span_type: "closing",
      type: "i",
      id: "2",
      data: "</i>"
    }];
    const mdSpans: SpanInfo[] = [{
      span_type: "opening",
      type: "bold",
      id: "1",
      data: "**"
    }, {
      span_type: "closing",
      type: "bold",
      id: "1",
      data: "**"
    }, {
      span_type: "opening",
      type: "italic",
      id: "2",
      data: "*"
    }, {
      span_type: "closing",
      type: "italic",
      id: "2",
      data: "*"
    }];
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
                <FormattedSourceDisplay codedText={sentence} spans={htmlSpans} />
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
                <FormattedSourceDisplay codedText={sentence} spans={mdSpans} />
              </div>
            </div>
          </div>
        </Section>
      </div>;
  }
}`,...W.parameters?.docs?.source},description:{story:`Side-by-side comparison showing that HTML and Markdown spans produce
identical visual output when rendered through FormattedSourceDisplay.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
            <SourceCellDisplay codedText={richCodedText} spans={richSpans} />
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
            <SourceCellDisplay codedText={mdRichCodedText} spans={mdRichSpans} />
          </div>
        </div>
      </Section>
    </div>
}`,...G.parameters?.docs?.source},description:{story:`The same segments shown with tag chips — the opt-in code view
for advanced users who need to see raw inline code structure.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const categories: Array<{
      label: string;
      codedText: string;
      spans: SpanInfo[];
    }> = [{
      label: "Bold",
      codedText: \`This is \${O}bold text\${C}\`,
      spans: [{
        span_type: "opening",
        type: "bold",
        id: "1",
        data: "**"
      }, {
        span_type: "closing",
        type: "bold",
        id: "1",
        data: "**"
      }]
    }, {
      label: "Italic",
      codedText: \`This is \${O}italic text\${C}\`,
      spans: [{
        span_type: "opening",
        type: "italic",
        id: "2",
        data: "*"
      }, {
        span_type: "closing",
        type: "italic",
        id: "2",
        data: "*"
      }]
    }, {
      label: "Underline",
      codedText: \`This is \${O}underlined text\${C}\`,
      spans: [underlineOpen, underlineClose]
    }, {
      label: "Strikethrough",
      codedText: \`This is \${O}deleted text\${C}\`,
      spans: [strikeOpen, strikeClose]
    }, {
      label: "Link",
      codedText: \`Visit \${O}our website\${C} for more\`,
      spans: [{
        span_type: "opening",
        type: "link",
        id: "5",
        data: "["
      }, {
        span_type: "closing",
        type: "link",
        id: "5",
        data: "](https://example.com)"
      }]
    }, {
      label: "Code",
      codedText: \`Run \${O}kapi init\${C} to start\`,
      spans: [{
        span_type: "opening",
        type: "code",
        id: "6",
        data: "\`"
      }, {
        span_type: "closing",
        type: "code",
        id: "6",
        data: "\`"
      }]
    }, {
      label: "Superscript",
      codedText: \`E=mc\${O}2\${C}\`,
      spans: [supOpen, supClose]
    }, {
      label: "Line Break (placeholder)",
      codedText: \`First line\${P}Second line\`,
      spans: [{
        span_type: "placeholder" as const,
        type: "br",
        id: "9",
        data: "<br/>"
      }]
    }, {
      label: "Image (placeholder)",
      codedText: \`See the logo \${P} below\`,
      spans: [imgTag]
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
                <FormattedSourceDisplay codedText={cat.codedText} spans={cat.spans} />
              </div>
            </div>)}
        </Section>
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`One example per semantic category showing the formatted rendering.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const allSpans: SpanInfo[] = [{
      span_type: "opening",
      type: "fmt:bold",
      id: "1",
      data: "<b>"
    }, {
      span_type: "closing",
      type: "fmt:bold",
      id: "1",
      data: "</b>"
    }, {
      span_type: "opening",
      type: "link:hyperlink",
      id: "2",
      data: '<a href="https://example.com">'
    }, {
      span_type: "closing",
      type: "link:hyperlink",
      id: "2",
      data: "</a>"
    }, {
      span_type: "opening",
      type: "fmt:code",
      id: "3",
      data: "<code>"
    }, {
      span_type: "closing",
      type: "fmt:code",
      id: "3",
      data: "</code>"
    }, {
      span_type: "placeholder",
      type: "code:variable",
      id: "4",
      data: "{version}",
      display_text: "{version}",
      deletable: false,
      cloneable: false,
      can_reorder: true
    }, {
      span_type: "placeholder",
      type: "struct:break",
      id: "5",
      data: "<br/>"
    }];
    const codedText = \`\${O}Download\${C} the latest \${O}release\${C} (\${O}v\${C}\${P}).\${P}Visit the \${O}docs\${C} for details.\`;
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
            <FormatVocabularyBadge spans={allSpans} />
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
              <FormattedSourceDisplay codedText={codedText} spans={allSpans} />
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
              <SourceCellDisplay codedText={codedText} spans={allSpans} />
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
            <InlineCodeLegend spans={allSpans} onClose={() => {}} />
          </div>
        </Section>
      </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Full vocabulary-driven experience showing badge, legend, and formatted
rendering working together — the complete translator workflow.`,...q.parameters?.docs?.description}}},J=[`HTMLFormat`,`MarkdownFormat`,`SemanticEquivalence`,`CodeView`,`AllCategories`,`VocabularyDrivenExperience`]})))()}Y();export{K as AllCategories,G as CodeView,H as HTMLFormat,U as MarkdownFormat,W as SemanticEquivalence,q as VocabularyDrivenExperience,J as __namedExportsOrder,V as default};