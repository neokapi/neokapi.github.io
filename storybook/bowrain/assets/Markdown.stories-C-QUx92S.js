import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{n,t as r}from"./markdown-ekKkKUvB.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Foundations/Markdown`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:"The single typeset prose primitive for neokapi UIs. Every markdown-bearing metadata field (tool/format/flow/plugin descriptions, overviews, parameter help, long-form docs) renders through this component rather than being dropped into JSX as a raw string. Wraps react-markdown + remark-gfm; use `inline` for compact list rows, table cells, tooltips, and chips. See web/docs/contribute/implementation/markdown-in-ui.md."}}}},o=`Translate blocks with an **AI provider**. Supports \`--target-lang\`, brand
voice, and glossary enforcement.

- Streams results block by block
- Falls back to source on provider error
- See the [providers guide](https://neokapi.org) for setup

| Provider | Streaming |
| --- | --- |
| Anthropic | yes |
| OpenAI | yes |
`,s={name:`Block prose (detail view)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-lg rounded-md border border-border p-4`,children:(0,i.jsx)(r,{children:o})})},c={name:`Inline (clamped list row)`,render:()=>(0,i.jsx)(`div`,{className:`max-w-xs rounded-md border border-border p-3`,children:(0,i.jsx)(`div`,{className:`line-clamp-2 text-[11px] text-muted-foreground`,children:(0,i.jsx)(r,{inline:!0,children:"Translate blocks with an **AI provider** — supports `--target-lang` and a [brand voice](https://neokapi.org)."})})})},l={name:`Why: raw string vs Markdown`,render:()=>{let e="Rewrites the source with **redaction** — see `redact.rules`.";return(0,i.jsxs)(`div`,{className:`max-w-lg space-y-3 text-sm`,children:[(0,i.jsxs)(`div`,{className:`rounded-md border border-destructive/30 p-3`,children:[(0,i.jsx)(`div`,{className:`mb-1 text-xs font-semibold text-destructive`,children:`✗ Raw string in JSX`}),(0,i.jsx)(`p`,{className:`text-muted-foreground`,children:e})]}),(0,i.jsxs)(`div`,{className:`rounded-md border border-border p-3`,children:[(0,i.jsx)(`div`,{className:`mb-1 text-xs font-semibold text-muted-foreground`,children:`✓ <Markdown>`}),(0,i.jsx)(r,{className:`text-muted-foreground`,children:e})]})]})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Block prose (detail view)",
  render: () => <div className="max-w-lg rounded-md border border-border p-4">
      <Markdown>{SAMPLE}</Markdown>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Inline (clamped list row)",
  render: () => <div className="max-w-xs rounded-md border border-border p-3">
      <div className="line-clamp-2 text-[11px] text-muted-foreground">
        <Markdown inline>
          Translate blocks with an **AI provider** — supports \`--target-lang\` and a [brand
          voice](https://neokapi.org).
        </Markdown>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Why: raw string vs Markdown",
  render: () => {
    const src = "Rewrites the source with **redaction** — see \`redact.rules\`.";
    return <div className="max-w-lg space-y-3 text-sm">
        <div className="rounded-md border border-destructive/30 p-3">
          <div className="mb-1 text-xs font-semibold text-destructive">✗ Raw string in JSX</div>
          <p className="text-muted-foreground">{src}</p>
        </div>
        <div className="rounded-md border border-border p-3">
          <div className="mb-1 text-xs font-semibold text-muted-foreground">✓ &lt;Markdown&gt;</div>
          <Markdown className="text-muted-foreground">{src}</Markdown>
        </div>
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u=[`Block`,`Inline`,`RawStringComparison`]}))();export{s as Block,c as Inline,l as RawStringComparison,u as __namedExportsOrder,a as default};