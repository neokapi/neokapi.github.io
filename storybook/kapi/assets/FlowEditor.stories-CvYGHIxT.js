import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-ls4VQNA8.js";import{n as a,t as o}from"./FlowEditor-DB2r3Pi9.js";import{n as s,t as c}from"./tools-metadata-enQur3XQ.js";function l(e){return h[e]||null}function u(e){return g[e]||null}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{r(),d=t(),a(),c(),f=n(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=s,h={"pseudo-translate":{title:`Pseudo Translate`,type:`object`,toolMeta:{id:`pseudo-translate`,category:`transform`},"ui:groups":[{id:`output`,label:`Output Format`,fields:[`prefix`,`suffix`,`expansionPercent`]}],properties:{prefix:{type:`string`,default:`[`,description:`Prefix added to translations`},suffix:{type:`string`,default:`]`,description:`Suffix added to translations`},expansionPercent:{type:`integer`,default:30,minimum:0,maximum:200,description:`Expand text length %`},applyAccents:{type:`boolean`,default:!0,description:`Apply diacritical marks to characters`},padWithX:{type:`boolean`,default:!1,description:`Pad expansion with 'x' characters`}}},qa:{title:`QA Check`,type:`object`,toolMeta:{id:`qa`,category:`validate`},"ui:groups":[{id:`checks`,label:`Enabled Checks`,fields:[`checkLeadingWhitespace`,`checkTrailingWhitespace`,`checkDoubleSpaces`,`checkMissingTranslation`]},{id:`codes`,label:`Code Checks`,fields:[`checkInlineCodes`,`checkPatterns`]}],properties:{checkLeadingWhitespace:{type:`boolean`,default:!0,description:`Check for leading whitespace mismatches`},checkTrailingWhitespace:{type:`boolean`,default:!0,description:`Check trailing whitespace`},checkDoubleSpaces:{type:`boolean`,default:!0,description:`Flag double spaces in target`},checkMissingTranslation:{type:`boolean`,default:!0,description:`Flag empty translations`},checkInlineCodes:{type:`boolean`,default:!0,description:`Verify inline codes are preserved`},checkPatterns:{type:`boolean`,default:!1,description:`Check for pattern mismatches`},severityLevel:{type:`string`,default:`warning`,enum:[`error`,`warning`,`info`],description:`Default severity`}}},"search-replace":{title:`Search and Replace`,type:`object`,toolMeta:{id:`search-replace`,category:`transform`},properties:{search:{type:`string`,description:`Search pattern`},replace:{type:`string`,description:`Replacement text`},regEx:{type:`boolean`,default:!1,description:`Use regular expressions`},target:{type:`boolean`,default:!0,description:`Apply to target text`},source:{type:`boolean`,default:!1,description:`Apply to source text`},dotAll:{type:`boolean`,default:!1,description:`Dot matches newlines`}}}},g={"pseudo-translate":{displayName:`Pseudo Translation`,overview:`Generates pseudo-translations by applying diacritical marks, padding, and brackets to source text. Useful for testing UI layout, detecting hardcoded strings, and verifying internationalization readiness without real translations.`,parameters:{prefix:{description:`Character(s) prepended to each translated string. Helps identify translated vs untranslated strings in the UI.`},suffix:{description:`Character(s) appended to each translated string.`},expansionPercent:{description:`Percentage to expand text length to simulate longer translations (e.g. German is ~30% longer than English).`,notes:[`Set to 0 to disable expansion. Values above 100% double the original length.`]},applyAccents:{description:`Replace ASCII characters with visually similar accented characters (e.g. a→á, e→é) to test rendering.`}},limitations:[`Does not handle right-to-left scripts.`,`Inline codes are preserved but not expanded.`],examples:[{title:`Basic pseudo`,description:`Default settings`,input:`Hello World`,output:`[Ĥéĺĺö Ŵöŕĺð]`}]},qa:{displayName:`Quality Check`,overview:`Runs rule-based quality assurance checks on translations. Detects whitespace mismatches, missing translations, broken inline codes, and pattern inconsistencies between source and target.`,parameters:{checkLeadingWhitespace:{description:`Verify that leading whitespace in target matches source.`},checkInlineCodes:{description:`Verify all inline codes from source are preserved in target translation.`,notes:[`Inline codes include format specifiers ({0}), HTML tags, and printf patterns.`]},severityLevel:{description:`Default severity for issues found. Can be error, warning, or info.`}},processingNotes:[`Checks run independently — disabling one does not affect others.`,`Results are attached as annotations to each block.`]},"search-replace":{displayName:`Search and Replace`,overview:`Performs search and replace operations on source or target text. Supports both literal string matching and Java regular expressions.`,parameters:{search:{description:`The text or regex pattern to search for.`},replace:{description:`The replacement text. Supports $1, $2 backreferences when regex is enabled.`},regEx:{description:`When enabled, the search pattern is treated as a Java regular expression.`,notes:[`Use \\\\n for newline, \\\\t for tab in regex mode.`]}},wikiUrl:`https://okapiframework.org/wiki/index.php/Search_and_Replace_Step`}},_={title:`Flow Editor/FlowEditor`,component:o,tags:[`autodocs`],args:{onChange:p(),run:{onRun:p()},onGetSchema:l,onGetDoc:u},parameters:{layout:`fullscreen`},decorators:[e=>(0,f.jsx)(`div`,{style:{height:700},children:(0,f.jsx)(e,{})})]},v={args:{flow:{steps:[{tool:`translate`}]},tools:m}},y={name:`Binding: Interchange → Files`,args:{flow:{steps:[{tool:`translate`},{tool:`qa`}],source:`xliff`},tools:m}},b={name:`Binding: Store → Store`,args:{flow:{steps:[{tool:`translate`}],source:`store`,sink:`store`},tools:m}},x={name:`Binding: Files → None (annotate in place)`,args:{flow:{steps:[{tool:`qa`}],sink:`none`},tools:m}},S={args:{flow:{steps:[{tool:`translate`},{tool:`qa`}]},tools:m}},C={name:`Parallel route (compose + edit live)`,render:e=>{let[t,n]=(0,d.useState)({steps:[{tool:`translate`},{tool:``,parallel:[]},{tool:`word-count`}]});return(0,f.jsx)(o,{...e,flow:t,onChange:n})},args:{tools:m}},w={name:`Lesson focus (focusRequest highlight)`,args:{flow:{steps:[{tool:`redact`},{tool:`translate`},{tool:`qa`}]},tools:m,lesson:{focusRequest:{nonce:1,select:`tool-0`,mode:`configure`}}}},T={name:`Lesson callout (lessonPanel overlay)`,args:{flow:{steps:[{tool:`redact`},{tool:`translate`},{tool:`qa`}]},tools:m,lesson:{focusRequest:{nonce:1,select:`tool-0`,mode:`configure`},panel:(0,f.jsx)(`div`,{style:{borderRadius:8,border:`1px solid var(--border)`,borderLeft:`4px solid var(--primary)`,background:`var(--card)`,padding:`10px 12px`,fontSize:13,boxShadow:`0 8px 24px oklch(0 0 0 / 0.25)`},children:i(`3UMrL320Tdo`,`Host-rendered walkthrough step — prose, Back/Next, Run — floating over the canvas.`)})}}},E={name:`Endpoint inspectors (Inspect satellites)`,args:{flow:{steps:[{tool:`translate`},{tool:`qa`}]},tools:m,renderEndpointPanel:e=>(0,f.jsx)(`div`,{style:{fontSize:11,color:`var(--muted-foreground)`},children:e===`source`?`Host-rendered source inspector — e.g. the content-model tree the reader produced.`:`Host-rendered sink inspector — e.g. the written output with a round-trip diff.`})}},D={args:{flow:{steps:[{tool:`recycle`},{tool:`translate`},{tool:`pseudo-translate`,config:{prefix:`>>`,suffix:`<<`}},{tool:`qa`},{tool:`word-count`}]},tools:m}},O={name:`Run Metadata (multi-row)`,decorators:[e=>(0,f.jsx)(`div`,{style:{width:760,height:660},children:(0,f.jsx)(e,{})})],args:{flow:{steps:[{tool:`recycle`},{tool:`translate`},{tool:`pseudo-translate`},{tool:`qa`},{tool:`word-count`}]},tools:m,access:{readOnly:!0},run:{onRun:void 0},traceEvents:[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:100,type:`exit`,nodeId:`tool-0`,partId:`p1`},{ts:120,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:220,type:`exit`,nodeId:`tool-1`,partId:`p1`},{ts:240,type:`enter`,nodeId:`tool-2`,partId:`p1`},{ts:340,type:`exit`,nodeId:`tool-2`,partId:`p1`},{ts:360,type:`enter`,nodeId:`tool-3`,partId:`p1`},{ts:460,type:`exit`,nodeId:`tool-3`,partId:`p1`},{ts:480,type:`enter`,nodeId:`tool-4`,partId:`p1`},{ts:580,type:`exit`,nodeId:`tool-4`,partId:`p1`}]}},k={name:`IO Contract Showcase`,args:{flow:{steps:[{tool:`segmentation`},{tool:`recycle`},{tool:`translate`},{tool:`term-check`},{tool:`qa`}]},tools:m}},A={args:{flow:{steps:[{tool:`okapi:segmentation`},{tool:`okapi:leveraging`},{tool:`okapi:quality-check`}]},tools:m}},j={name:`Empty (Template Library)`,args:{flow:{steps:[]},tools:m}},M={args:{flow:{steps:[{tool:`translate`},{tool:`qa`}]},tools:m,access:{readOnly:!0},run:{onRun:void 0}}},N={args:{flow:{steps:[{tool:`pseudo-translate`,config:{prefix:`>>`,suffix:`<<`,expansionPercent:40}},{tool:`qa`,config:{checkLeadingWhitespace:!1}},{tool:`search-replace`,config:{search:`foo`,replace:`bar`,regEx:!1}}]},tools:m}},P={args:{flow:{steps:[{tool:`translate`,label:`Translate`},{tool:``,parallel:[{tool:`qa`,label:`Quality Check`},{tool:`voice-vocab-check`,label:`Brand Check`}]},{tool:`word-count`,label:`Word Count`}]},tools:m}},F={args:{flow:{steps:[{tool:`recycle`,label:`Memory Lookup`},{tool:``,parallel:[{tool:`qa`,label:`QA`},{tool:`voice-vocab-check`,label:`Brand`},{tool:`entity-extract`,label:`Entities`}]}]},tools:m}},I={name:`Many-Branch Parallel (wrap clearance)`,args:{flow:{steps:[{tool:`recycle`,label:`Memory Lookup`},{tool:``,parallel:[{tool:`qa`,label:`Quality`},{tool:`voice-vocab-check`,label:`Brand`},{tool:`entity-extract`,label:`Entities`},{tool:`term-check`,label:`Terminology`},{tool:`word-count`,label:`Word Count`},{tool:`translate`,label:`Back-translate`}]}]},tools:m}},L={name:`Parallelization Suggestion`,args:{flow:{steps:[{tool:`translate`},{tool:`qa`},{tool:`voice-vocab-check`},{tool:`word-count`}]},tools:m}},R={name:`With Port Visualization`,args:{flow:{steps:[{tool:`translate`},{tool:`qa`},{tool:`word-count`}]},tools:m.map(e=>({...e,inputs:e.name===`translate`||e.name===`qa`?[`block`]:[`block`,`data`],outputs:e.name===`translate`||e.name===`qa`?[`block`]:[`data`]}))}},z={name:`With Trace (Completed)`,args:{flow:{steps:[{tool:`translate`},{tool:`qa`},{tool:`word-count`}]},tools:m,access:{readOnly:!0},run:{onRun:void 0},traceEvents:[{ts:0,type:`enter`,nodeId:`tool-0`,partId:`p1`},{ts:500,type:`exit`,nodeId:`tool-0`,partId:`p1`},{ts:600,type:`enter`,nodeId:`tool-0`,partId:`p2`},{ts:900,type:`exit`,nodeId:`tool-0`,partId:`p2`},{ts:550,type:`enter`,nodeId:`tool-1`,partId:`p1`},{ts:1200,type:`exit`,nodeId:`tool-1`,partId:`p1`},{ts:950,type:`enter`,nodeId:`tool-1`,partId:`p2`},{ts:1800,type:`exit`,nodeId:`tool-1`,partId:`p2`},{ts:1250,type:`enter`,nodeId:`tool-2`,partId:`p1`},{ts:1400,type:`exit`,nodeId:`tool-2`,partId:`p1`},{ts:1850,type:`enter`,nodeId:`tool-2`,partId:`p2`},{ts:2e3,type:`exit`,nodeId:`tool-2`,partId:`p2`}],trace:{name:`translate-qa`,nodes:[{id:`tool-0`,type:`tool`,name:`translate`},{id:`tool-1`,type:`tool`,name:`qa`},{id:`tool-2`,type:`tool`,name:`word-count`}],events:[],parts:{p1:{initial:{id:`p1`,type:`Block`,summary:`Hello world`,sourceText:`Hello world`},afterNode:{"tool-0":{id:`p1`,type:`Block`,summary:`Hello world`,sourceText:`Hello world`,targetText:`Bonjour le monde`},"tool-1":{id:`p1`,type:`Block`,summary:`Hello world`,sourceText:`Hello world`,targetText:`Bonjour le monde`},"tool-2":{id:`p1`,type:`Block`,summary:`Hello world`,sourceText:`Hello world`,targetText:`Bonjour le monde`}}},p2:{initial:{id:`p2`,type:`Block`,summary:`Click here`,sourceText:`Click here`},afterNode:{"tool-0":{id:`p2`,type:`Block`,summary:`Click here`,sourceText:`Click here`,targetText:`Cliquez ici`},"tool-1":{id:`p2`,type:`Block`,summary:`Click here`,sourceText:`Click here`,targetText:`Cliquez ici`},"tool-2":{id:`p2`,type:`Block`,summary:`Click here`,sourceText:`Click here`,targetText:`Cliquez ici`}}}},durationUs:2e3}}},B=[{name:`redact`,display_name:`Redact`,description:`Replace sensitive spans with placeholders before translation`,category:`text-processing`,has_schema:!0,cardinality:`monolingual`,consumes:[{type:`entity`,side:`source`,optional:!0}],produces:[{type:`source`,side:`source`},{type:`redaction.secret`,side:`source`}],tags:[`privacy`,`pre-processing`],isSourceTransform:!0,recoverable:!0},{name:`unredact`,display_name:`Unredact`,description:`Restore the original spans after processing`,category:`text-processing`,cardinality:`monolingual`,consumes:[{type:`redaction.secret`,side:`source`}],produces:[{type:`source`,side:`source`},{type:`target`,side:`target`}],tags:[`privacy`],isSourceTransform:!0},{name:`source-normalise`,display_name:`Source Normalise`,description:`Normalise quotes, punctuation, and whitespace in source text`,category:`text-processing`,has_schema:!0,cardinality:`monolingual`,produces:[{type:`source`,side:`source`}],tags:[`text-processing`,`pre-processing`],isSourceTransform:!0},{name:`case-transform`,display_name:`Case Transform`,description:`Rewrite source casing (upper, lower, title)`,category:`text-processing`,cardinality:`monolingual`,produces:[{type:`source`,side:`source`}],tags:[`text-processing`],isSourceTransform:!0},{name:`entity-extract`,display_name:`AI Entity Extract`,description:`Recognize named entities with a cloud NER model`,category:`analysis`,cardinality:`monolingual`,produces:[{type:`entity`,side:`source`}],side_effects:[`remote-source-egress`],tags:[`ai-powered`]},...s.filter(e=>[`translate`,`qa`,`word-count`,`pseudo-translate`,`recycle`].includes(e.name)).map(e=>e.name===`translate`?{...e,side_effects:[`remote-source-egress`]}:e)],V={name:`Transformers (redact → translate → unredact)`,args:{flow:{steps:[{tool:`redact`,config:{mode:`placeholder`}},{tool:`translate`},{tool:`unredact`}]},tools:B,onGetSchema:l,onGetDoc:u}},H={name:`Transformers (normalise → redact → translate)`,args:{flow:{steps:[{tool:`source-normalise`},{tool:`redact`},{tool:`translate`},{tool:`qa`},{tool:`word-count`}]},tools:B}},U={name:`Placement Diagnostics (misplaced transformers)`,args:{flow:{steps:[{tool:`entity-extract`},{tool:`redact`},{tool:`translate`},{tool:`case-transform`}]},tools:B,onGetSchema:l,onGetDoc:u}},W={name:`Placement Exemption (entity-driven redaction)`,args:{flow:{steps:[{tool:`entity-extract`},{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`},{tool:`unredact`}]},tools:B,onGetSchema:l,onGetDoc:u}},G={name:`Transformers (read-only)`,args:{flow:{steps:[{tool:`redact`},{tool:`translate`},{tool:`qa`}]},tools:B,readOnly:!0,onRun:void 0}},K={name:`Run Review (trace on the designed flow)`,args:{flow:{steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},tools:B,onGetSchema:l,onGetDoc:u,trace:{name:`lab`,nodes:[{id:`reader`,type:`reader`,name:`read`},{id:`tool-1`,type:`tool`,name:`redact`},{id:`tool-2`,type:`tool`,name:`translate`},{id:`writer`,type:`writer`,name:`write`}],events:[{ts:120,type:`enter`,nodeId:`tool-1`,partId:`b1`},{ts:480,type:`exit`,nodeId:`tool-1`,partId:`b1`},{ts:510,type:`enter`,nodeId:`tool-2`,partId:`b1`},{ts:2200,type:`exit`,nodeId:`tool-2`,partId:`b1`},{ts:2300,type:`enter`,nodeId:`tool-1`,partId:`b2`},{ts:2350,type:`exit`,nodeId:`tool-1`,partId:`b2`},{ts:2400,type:`enter`,nodeId:`tool-2`,partId:`b2`},{ts:3100,type:`exit`,nodeId:`tool-2`,partId:`b2`}],parts:{b1:{initial:{id:`b1`,type:`Block`,summary:`Contact Jane Doe at Acme Corp`,sourceText:`Contact Jane Doe at Acme Corp`,detail:{overlays:[{type:`entity`,side:`source`,spans:[{start:8,end:16,text:`Jane Doe`,note:`entity:person`},{start:20,end:29,text:`Acme Corp`,note:`entity:organization`}]}]}},afterNode:{"tool-1":{id:`b1`,type:`Block`,summary:`Contact Jane Doe at Acme Corp`,sourceText:`Contact [REDACTED:Person] at [REDACTED:Org]`,detail:{annotations:[{key:`redaction.secret`,summary:`2 vaulted originals`}]}},"tool-2":{id:`b1`,type:`Block`,summary:`Contact Jane Doe at Acme Corp`,sourceText:`Contact [REDACTED:Person] at [REDACTED:Org]`,targetText:`Contactez [REDACTED:Person] chez [REDACTED:Org]`,detail:{annotations:[{key:`redaction.secret`,summary:`2 vaulted originals`}]}}}},b2:{initial:{id:`b2`,type:`Block`,summary:`Thanks for reaching out!`,sourceText:`Thanks for reaching out!`},afterNode:{"tool-1":{id:`b2`,type:`Block`,summary:`Thanks for reaching out!`,sourceText:`Thanks for reaching out!`},"tool-2":{id:`b2`,type:`Block`,summary:`Thanks for reaching out!`,sourceText:`Thanks for reaching out!`,targetText:`Merci de nous avoir contactés !`}}}},durationUs:3200}}},q={name:`Project Presets (defaults.tools)`,args:{flow:{steps:[{tool:`redact`,config:{placeholder:`[HIDDEN:{category}]`}},{tool:`translate`}]},tools:B,onGetSchema:l,onGetDoc:u,projectPresets:{redact:{detectors:[`rules`],placeholder:`[REDACTED:{category}]`,rules:[{term:`Acme Corp`,category:`org`}]},translate:{provider:`ollama`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }]
    },
    tools
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Binding: Interchange → Files",
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }],
      // Wire-format string locators: \`xliff\` parses to an interchange binding;
      // \`file\` is the default, so the sink is simply omitted.
      source: "xliff"
    },
    tools
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Binding: Store → Store",
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }],
      source: "store",
      sink: "store"
    },
    tools
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Binding: Files → None (annotate in place)",
  args: {
    flow: {
      steps: [{
        tool: "qa"
      }],
      // Files is the default source (omitted); sink \`none\` = annotate in place.
      sink: "none"
    },
    tools
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    tools
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Parallel route (compose + edit live)",
  render: args => {
    const [flow, setFlow] = useState<FlowSpec>({
      steps: [{
        tool: "translate"
      }, {
        tool: "",
        parallel: []
      }, {
        tool: "word-count"
      }]
    });
    return <FlowEditor {...args} flow={flow} onChange={setFlow} />;
  },
  args: {
    tools
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Lesson focus (focusRequest highlight)",
  args: {
    flow: {
      steps: [{
        tool: "redact"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    tools,
    lesson: {
      focusRequest: {
        nonce: 1,
        select: "tool-0",
        mode: "configure"
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Lesson callout (lessonPanel overlay)",
  args: {
    flow: {
      steps: [{
        tool: "redact"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    tools,
    lesson: {
      focusRequest: {
        nonce: 1,
        select: "tool-0",
        mode: "configure"
      },
      panel: <div style={{
        borderRadius: 8,
        border: "1px solid var(--border)",
        borderLeft: "4px solid var(--primary)",
        background: "var(--card)",
        padding: "10px 12px",
        fontSize: 13,
        boxShadow: "0 8px 24px oklch(0 0 0 / 0.25)"
      }}>
          Host-rendered walkthrough step — prose, Back/Next, Run — floating over the canvas.
        </div>
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Endpoint inspectors (Inspect satellites)",
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    tools,
    renderEndpointPanel: (role: "source" | "sink") => <div style={{
      fontSize: 11,
      color: "var(--muted-foreground)"
    }}>
        {role === "source" ? "Host-rendered source inspector — e.g. the content-model tree the reader produced." : "Host-rendered sink inspector — e.g. the written output with a round-trip diff."}
      </div>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "recycle"
      }, {
        tool: "translate"
      }, {
        tool: "pseudo-translate",
        config: {
          prefix: ">>",
          suffix: "<<"
        }
      }, {
        tool: "qa"
      }, {
        tool: "word-count"
      }]
    },
    tools
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Run Metadata (multi-row)",
  decorators: [Story => <div style={{
    width: 760,
    height: 660
  }}>
        <Story />
      </div>],
  args: {
    flow: {
      steps: [{
        tool: "recycle"
      }, {
        tool: "translate"
      }, {
        tool: "pseudo-translate"
      }, {
        tool: "qa"
      }, {
        tool: "word-count"
      }]
    },
    tools,
    access: {
      readOnly: true
    },
    run: {
      onRun: undefined
    },
    // A completed single-part run; the transport replays it on the nodes.
    traceEvents: [{
      ts: 0,
      type: "enter",
      nodeId: "tool-0",
      partId: "p1"
    }, {
      ts: 100,
      type: "exit",
      nodeId: "tool-0",
      partId: "p1"
    }, {
      ts: 120,
      type: "enter",
      nodeId: "tool-1",
      partId: "p1"
    }, {
      ts: 220,
      type: "exit",
      nodeId: "tool-1",
      partId: "p1"
    }, {
      ts: 240,
      type: "enter",
      nodeId: "tool-2",
      partId: "p1"
    }, {
      ts: 340,
      type: "exit",
      nodeId: "tool-2",
      partId: "p1"
    }, {
      ts: 360,
      type: "enter",
      nodeId: "tool-3",
      partId: "p1"
    }, {
      ts: 460,
      type: "exit",
      nodeId: "tool-3",
      partId: "p1"
    }, {
      ts: 480,
      type: "enter",
      nodeId: "tool-4",
      partId: "p1"
    }, {
      ts: 580,
      type: "exit",
      nodeId: "tool-4",
      partId: "p1"
    }]
  }
}`,...O.parameters?.docs?.source},description:{story:`Run metadata on a wrapped, multi-row pipeline: the run review is literal —
node badges carry parts + wall window, each crossed edge a count chip, and a
dot appears on an edge only when a part is actually mid-hop at the cursor
(scrub back one event to park a part on an edge; press Play to watch the
dots advance with the events; paused is a frozen frame). Shown in a
deliberately narrow frame so the five steps wrap across rows.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "IO Contract Showcase",
  args: {
    flow: {
      steps: [{
        tool: "segmentation"
      }, {
        tool: "recycle"
      }, {
        tool: "translate"
      }, {
        tool: "term-check"
      }, {
        tool: "qa"
      }]
    },
    tools
  }
}`,...k.parameters?.docs?.source},description:{story:`IO-contract showcase: every node shows its typed reads → writes chips, edges
carry the data type flowing across them, and the legend (top-right) decodes
the family colors. segmentation produces a segments overlay that recycle
optionally consumes; translate writes target; term-check / qa read
target and write findings.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "okapi:segmentation"
      }, {
        tool: "okapi:leveraging"
      }, {
        tool: "okapi:quality-check"
      }]
    },
    tools
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Empty (Template Library)",
  args: {
    flow: {
      steps: []
    },
    tools
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    tools,
    access: {
      readOnly: true
    },
    run: {
      onRun: undefined
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "pseudo-translate",
        config: {
          prefix: ">>",
          suffix: "<<",
          expansionPercent: 40
        }
      }, {
        tool: "qa",
        config: {
          checkLeadingWhitespace: false
        }
      }, {
        tool: "search-replace",
        config: {
          search: "foo",
          replace: "bar",
          regEx: false
        }
      }]
    },
    tools
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "translate",
        label: "Translate"
      }, {
        tool: "",
        parallel: [{
          tool: "qa",
          label: "Quality Check"
        }, {
          tool: "voice-vocab-check",
          label: "Brand Check"
        }]
      }, {
        tool: "word-count",
        label: "Word Count"
      }]
    },
    tools
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    flow: {
      steps: [{
        tool: "recycle",
        label: "Memory Lookup"
      }, {
        tool: "",
        parallel: [{
          tool: "qa",
          label: "QA"
        }, {
          tool: "voice-vocab-check",
          label: "Brand"
        }, {
          tool: "entity-extract",
          label: "Entities"
        }]
      }]
    },
    tools
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Many-Branch Parallel (wrap clearance)",
  args: {
    flow: {
      steps: [{
        tool: "recycle",
        label: "Memory Lookup"
      }, {
        tool: "",
        parallel: [{
          tool: "qa",
          label: "Quality"
        }, {
          tool: "voice-vocab-check",
          label: "Brand"
        }, {
          tool: "entity-extract",
          label: "Entities"
        }, {
          tool: "term-check",
          label: "Terminology"
        }, {
          tool: "word-count",
          label: "Word Count"
        }, {
          tool: "translate",
          label: "Back-translate"
        }]
      }]
    },
    tools
  }
}`,...I.parameters?.docs?.source},description:{story:`A tall parallel group (6 branches) followed by a wrap. Guards that the
carriage-return wrap edge clears the group instead of cutting through it —
row spacing grows with the tallest node so the wrap's mid-gap sweep stays
below the parallel (see centerAlignRows).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Parallelization Suggestion",
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }, {
        tool: "voice-vocab-check"
      }, {
        tool: "word-count"
      }]
    },
    tools
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "With Port Visualization",
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }, {
        tool: "word-count"
      }]
    },
    tools: tools.map(t => ({
      ...t,
      inputs: t.name === "translate" ? ["block"] : t.name === "qa" ? ["block"] : ["block", "data"],
      outputs: t.name === "translate" ? ["block"] : t.name === "qa" ? ["block"] : ["data"]
    }))
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "With Trace (Completed)",
  args: {
    flow: {
      steps: [{
        tool: "translate"
      }, {
        tool: "qa"
      }, {
        tool: "word-count"
      }]
    },
    tools,
    access: {
      readOnly: true
    },
    run: {
      onRun: undefined
    },
    traceEvents: [{
      ts: 0,
      type: "enter",
      nodeId: "tool-0",
      partId: "p1"
    }, {
      ts: 500,
      type: "exit",
      nodeId: "tool-0",
      partId: "p1"
    }, {
      ts: 600,
      type: "enter",
      nodeId: "tool-0",
      partId: "p2"
    }, {
      ts: 900,
      type: "exit",
      nodeId: "tool-0",
      partId: "p2"
    }, {
      ts: 550,
      type: "enter",
      nodeId: "tool-1",
      partId: "p1"
    }, {
      ts: 1200,
      type: "exit",
      nodeId: "tool-1",
      partId: "p1"
    }, {
      ts: 950,
      type: "enter",
      nodeId: "tool-1",
      partId: "p2"
    }, {
      ts: 1800,
      type: "exit",
      nodeId: "tool-1",
      partId: "p2"
    }, {
      ts: 1250,
      type: "enter",
      nodeId: "tool-2",
      partId: "p1"
    }, {
      ts: 1400,
      type: "exit",
      nodeId: "tool-2",
      partId: "p1"
    }, {
      ts: 1850,
      type: "enter",
      nodeId: "tool-2",
      partId: "p2"
    }, {
      ts: 2000,
      type: "exit",
      nodeId: "tool-2",
      partId: "p2"
    }],
    trace: {
      name: "translate-qa",
      nodes: [{
        id: "tool-0",
        type: "tool",
        name: "translate"
      }, {
        id: "tool-1",
        type: "tool",
        name: "qa"
      }, {
        id: "tool-2",
        type: "tool",
        name: "word-count"
      }],
      events: [],
      parts: {
        p1: {
          initial: {
            id: "p1",
            type: "Block",
            summary: "Hello world",
            sourceText: "Hello world"
          },
          afterNode: {
            "tool-0": {
              id: "p1",
              type: "Block",
              summary: "Hello world",
              sourceText: "Hello world",
              targetText: "Bonjour le monde"
            },
            "tool-1": {
              id: "p1",
              type: "Block",
              summary: "Hello world",
              sourceText: "Hello world",
              targetText: "Bonjour le monde"
            },
            "tool-2": {
              id: "p1",
              type: "Block",
              summary: "Hello world",
              sourceText: "Hello world",
              targetText: "Bonjour le monde"
            }
          }
        },
        p2: {
          initial: {
            id: "p2",
            type: "Block",
            summary: "Click here",
            sourceText: "Click here"
          },
          afterNode: {
            "tool-0": {
              id: "p2",
              type: "Block",
              summary: "Click here",
              sourceText: "Click here",
              targetText: "Cliquez ici"
            },
            "tool-1": {
              id: "p2",
              type: "Block",
              summary: "Click here",
              sourceText: "Click here",
              targetText: "Cliquez ici"
            },
            "tool-2": {
              id: "p2",
              type: "Block",
              summary: "Click here",
              sourceText: "Click here",
              targetText: "Cliquez ici"
            }
          }
        }
      },
      durationUs: 2000
    }
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "Transformers (redact → translate → unredact)",
  args: {
    flow: {
      steps: [{
        tool: "redact",
        config: {
          mode: "placeholder"
        }
      }, {
        tool: "translate"
      }, {
        tool: "unredact"
      }]
    },
    tools: transformerAwareTools,
    onGetSchema: getSchema,
    onGetDoc: getDoc
  }
}`,...V.parameters?.docs?.source},description:{story:`Secure translate as ordered steps: redact → translate → unredact. redact
runs before the remote provider sees the source; unredact restores the
originals last. No placement diagnostics fire — this is the safe ordering.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "Transformers (normalise → redact → translate)",
  args: {
    flow: {
      steps: [{
        tool: "source-normalise"
      }, {
        tool: "redact"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }, {
        tool: "word-count"
      }]
    },
    tools: transformerAwareTools
  }
}`,...H.parameters?.docs?.source},description:{story:`Two leading transformers as plain ordered steps: normalise, then redact,
before translation and QA.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Placement Diagnostics (misplaced transformers)",
  args: {
    flow: {
      steps: [{
        tool: "entity-extract"
      }, {
        tool: "redact"
      }, {
        tool: "translate"
      }, {
        tool: "case-transform"
      }]
    },
    tools: transformerAwareTools,
    onGetSchema: getSchema,
    onGetDoc: getDoc
  }
}`,...U.parameters?.docs?.source},description:{story:`Deliberately misplaced transformers, so the inline placement diagnostics
(AD-006) render:

 - redact sits AFTER the remote NER without entity-driven config →
   "unsafe placement" (transformer-after-remote-egress): the source leaks
   to the cloud before redaction applies.
 - case-transform sits AFTER translate, which produces targets →
   "unsafe placement" (transformer-after-target): rewriting the source
   orphans the targets anchored to it.

Click a flagged node to see the placement boxes in the config panel.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "Placement Exemption (entity-driven redaction)",
  args: {
    flow: {
      steps: [{
        tool: "entity-extract"
      }, {
        tool: "redact",
        config: {
          detectors: ["entities"]
        }
      }, {
        tool: "translate"
      }, {
        tool: "unredact"
      }]
    },
    tools: transformerAwareTools,
    onGetSchema: getSchema,
    onGetDoc: getDoc
  }
}`,...W.parameters?.docs?.source},description:{story:`The same NER → redact ordering, made safe by configuration: redact's
detectors include "entities", so the upstream NER produces a port the
transformer's contract requires (the AD-020 detection trade-off) — no
placement error.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Transformers (read-only)",
  args: {
    flow: {
      steps: [{
        tool: "redact"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    tools: transformerAwareTools,
    readOnly: true,
    onRun: undefined
  }
}`,...G.parameters?.docs?.source},description:{story:`Read-only view of a flow with leading transformers — no palette, no config
panel.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "Run Review (trace on the designed flow)",
  args: {
    flow: {
      steps: [{
        tool: "redact",
        config: {
          detectors: ["entities"]
        }
      }, {
        tool: "translate"
      }]
    },
    tools: transformerAwareTools,
    onGetSchema: getSchema,
    onGetDoc: getDoc,
    trace: {
      name: "lab",
      nodes: [{
        id: "reader",
        type: "reader",
        name: "read"
      }, {
        id: "tool-1",
        type: "tool",
        name: "redact"
      }, {
        id: "tool-2",
        type: "tool",
        name: "translate"
      }, {
        id: "writer",
        type: "writer",
        name: "write"
      }],
      events: [{
        ts: 120,
        type: "enter",
        nodeId: "tool-1",
        partId: "b1"
      }, {
        ts: 480,
        type: "exit",
        nodeId: "tool-1",
        partId: "b1"
      }, {
        ts: 510,
        type: "enter",
        nodeId: "tool-2",
        partId: "b1"
      }, {
        ts: 2200,
        type: "exit",
        nodeId: "tool-2",
        partId: "b1"
      }, {
        ts: 2300,
        type: "enter",
        nodeId: "tool-1",
        partId: "b2"
      }, {
        ts: 2350,
        type: "exit",
        nodeId: "tool-1",
        partId: "b2"
      }, {
        ts: 2400,
        type: "enter",
        nodeId: "tool-2",
        partId: "b2"
      }, {
        ts: 3100,
        type: "exit",
        nodeId: "tool-2",
        partId: "b2"
      }],
      parts: {
        b1: {
          initial: {
            id: "b1",
            type: "Block",
            summary: "Contact Jane Doe at Acme Corp",
            sourceText: "Contact Jane Doe at Acme Corp",
            detail: {
              overlays: [{
                type: "entity",
                side: "source",
                spans: [{
                  start: 8,
                  end: 16,
                  text: "Jane Doe",
                  note: "entity:person"
                }, {
                  start: 20,
                  end: 29,
                  text: "Acme Corp",
                  note: "entity:organization"
                }]
              }]
            }
          },
          afterNode: {
            "tool-1": {
              id: "b1",
              type: "Block",
              summary: "Contact Jane Doe at Acme Corp",
              sourceText: "Contact [REDACTED:Person] at [REDACTED:Org]",
              detail: {
                annotations: [{
                  key: "redaction.secret",
                  summary: "2 vaulted originals"
                }]
              }
            },
            "tool-2": {
              id: "b1",
              type: "Block",
              summary: "Contact Jane Doe at Acme Corp",
              sourceText: "Contact [REDACTED:Person] at [REDACTED:Org]",
              targetText: "Contactez [REDACTED:Person] chez [REDACTED:Org]",
              detail: {
                annotations: [{
                  key: "redaction.secret",
                  summary: "2 vaulted originals"
                }]
              }
            }
          }
        },
        b2: {
          initial: {
            id: "b2",
            type: "Block",
            summary: "Thanks for reaching out!",
            sourceText: "Thanks for reaching out!"
          },
          afterNode: {
            "tool-1": {
              id: "b2",
              type: "Block",
              summary: "Thanks for reaching out!",
              sourceText: "Thanks for reaching out!"
            },
            "tool-2": {
              id: "b2",
              type: "Block",
              summary: "Thanks for reaching out!",
              sourceText: "Thanks for reaching out!",
              targetText: "Merci de nous avoir contactés !"
            }
          }
        }
      },
      durationUs: 3200
    }
  }
}`,...K.parameters?.docs?.source},description:{story:`Run review: the designed flow IS the run flow. A completed trace of this
exact flow is loaded, so the transport at the bottom replays the events on
the same nodes (active highlight, part counts) and selecting a node opens
its run inspector — the blocks that passed through, with the
overlay/annotation delta the step produced (entity consumed, secret
vaulted, target written).`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "Project Presets (defaults.tools)",
  args: {
    flow: {
      steps: [{
        tool: "redact",
        config: {
          placeholder: "[HIDDEN:{category}]"
        }
      }, {
        tool: "translate"
      }]
    },
    tools: transformerAwareTools,
    onGetSchema: getSchema,
    onGetDoc: getDoc,
    projectPresets: {
      redact: {
        detectors: ["rules"],
        placeholder: "[REDACTED:{category}]",
        rules: [{
          term: "Acme Corp",
          category: "org"
        }]
      },
      translate: {
        provider: "ollama"
      }
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Project presets: the recipe's defaults.tools supplies per-tool config the
engine merges under each step (the step wins per key). Preset-backed nodes
carry a "preset" chip and the config panel lists the inherited values with
override indicators.`,...q.parameters?.docs?.description}}},J=`SingleStep.InterchangeSource.StoreToStore.NoSinkBinding.MultiStep.ParallelRoute.LessonFocus.LessonCallout.EndpointInspectors.FullPipeline.RunMetadataMultiRow.IoContractShowcase.WithOkapiTools.EmptyWithTemplates.ReadOnly.WithConfiguration.ParallelBranches.ThreeWayParallel.ManyBranchParallel.ParallelizationSuggestion.WithPortVisualization.WithTraceData.SecureTranslate.LeadingTransformers.PlacementDiagnostics.EntityDrivenRedaction.TransformersReadOnly.RunReview.ProjectPresets`.split(`.`)})))()}Y();export{j as EmptyWithTemplates,E as EndpointInspectors,W as EntityDrivenRedaction,D as FullPipeline,y as InterchangeSource,k as IoContractShowcase,H as LeadingTransformers,T as LessonCallout,w as LessonFocus,I as ManyBranchParallel,S as MultiStep,x as NoSinkBinding,P as ParallelBranches,C as ParallelRoute,L as ParallelizationSuggestion,U as PlacementDiagnostics,q as ProjectPresets,M as ReadOnly,O as RunMetadataMultiRow,K as RunReview,V as SecureTranslate,v as SingleStep,b as StoreToStore,F as ThreeWayParallel,G as TransformersReadOnly,N as WithConfiguration,A as WithOkapiTools,R as WithPortVisualization,z as WithTraceData,J as __namedExportsOrder,_ as default};