import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{t as n}from"./utils-DBupzmEe.js";import{t as r}from"./src-ClejRRW0.js";import{oi as i,t as a}from"./lucide-react-BICuCXZM.js";import{t as o}from"./button-C-cqHiAp.js";import{t as s}from"./markdown-ekKkKUvB.js";function c({content:e,wikiUrl:t,title:r,className:a}){return(0,l.jsxs)(`div`,{className:n(`flex flex-col gap-4`,a),children:[(r||t)&&(0,l.jsxs)(`div`,{className:`flex items-center justify-between`,children:[r&&(0,l.jsx)(`h2`,{className:`text-lg font-semibold`,children:r}),t&&(0,l.jsx)(o,{variant:`ghost`,size:`sm`,asChild:!0,children:(0,l.jsxs)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,className:`gap-1.5 text-xs text-muted-foreground`,children:[`Okapi Wiki`,(0,l.jsx)(i,{className:`size-3`})]})})]}),(0,l.jsx)(s,{children:e})]})}var l,u=e((()=>{r(),a(),l=t(),c.__docgenInfo={description:`Renders full-page documentation for a tool or format.
Content is fullDoc markdown from the docs extraction pipeline, rendered
through the shared typeset {@link Markdown} primitive (react-markdown +
remark-gfm) — the same renderer used everywhere else markdown metadata is
displayed. See \`web/docs/contribute/implementation/markdown-in-ui.md\`.`,methods:[],displayName:`ToolDocViewer`,props:{content:{required:!0,tsType:{name:`string`},description:`Markdown content from fullDoc.`},wikiUrl:{required:!1,tsType:{name:`string`},description:`Wiki URL for external link.`},title:{required:!1,tsType:{name:`string`},description:`Tool/format display name for the header.`},className:{required:!1,tsType:{name:`string`},description:`Additional class name.`}}}})),d,f,p,m,h,g,_;e((()=>{u(),d=t(),f={title:`Workspace/Flow/ToolDocViewer`,component:c,tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,d.jsx)(e,{})})]},p=`# Quality Check

Configurable quality assurance checks for bilingual content: whitespace, inline codes, patterns, length, characters, terminology, and LanguageTool grammar verification.

## Parameters

### Whitespace

#### Check Leading Whitespace
Flag text units where the leading whitespace characters differ between source and target.

#### Check Trailing Whitespace
Flag text units where the trailing whitespace characters differ between source and target.

### Length

#### Check Maximum Character Length
Flag target text longer than a given percentage of source text character length.

- **Long text threshold**: Character count above which text is considered "long"
- **Percentage for long text**: Maximum allowed percentage for long text
- **Percentage for short text**: Maximum allowed percentage for short text

### Patterns

#### Source/Target Pattern Rules
Regex pattern pairs for verifying source-target consistency. Each pattern defines:
- A **source regex** to match in the source text
- A **target regex** (or \`<same>\` to reuse the source match)
- **Severity** level (Low, Medium, High)
- **Direction**: source→target or target→source

\`\`\`yaml
patterns:
  - source: "[\\\\(\\\\uFF08]"
    target: "[\\\\(\\\\uFF08]"
    severity: low
    description: "Opening parenthesis"
\`\`\`

## Limitations

- LanguageTool integration requires a running server instance
- Pattern checking may increase processing time with many patterns

## Notes

- The quality check step uses the same configuration as the CheckMate application
- Session files (.qcs) can be used to persist check results across runs
`,m={args:{content:p,title:`Quality Check`,wikiUrl:`https://okapiframework.org/wiki/index.php/Quality_Check_Step`}},h={args:{content:p}},g={args:{content:`# Segmentation

Apply SRX segmentation rules to split text units into sentences.

## Parameters

#### Segment Source Text
Segment the source text of text units using SRX rules.

#### Segment Target Text
Segment existing target text using SRX rules for the processed locales.
`,title:`Segmentation`,wikiUrl:`https://okapiframework.org/wiki/index.php/Segmentation_Step`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: sampleDoc,
    title: "Quality Check",
    wikiUrl: "https://okapiframework.org/wiki/index.php/Quality_Check_Step"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: sampleDoc
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: \`# Segmentation

Apply SRX segmentation rules to split text units into sentences.

## Parameters

#### Segment Source Text
Segment the source text of text units using SRX rules.

#### Segment Target Text
Segment existing target text using SRX rules for the processed locales.
\`,
    title: "Segmentation",
    wikiUrl: "https://okapiframework.org/wiki/index.php/Segmentation_Step"
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithoutTitle`,`ShortDoc`]}))();export{m as Default,g as ShortDoc,h as WithoutTitle,_ as __namedExportsOrder,f as default};