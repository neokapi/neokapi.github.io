import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{r as n,t as r}from"./runtime-DQonW5bo.js";import{an as i,on as a}from"./iframe-rE20opEt.js";var o,s,c,l,u,d,f;e((()=>{n(),a(),o=t(),s={title:`Foundations/Markdown`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:"The single typeset prose primitive for neokapi UIs. Every markdown-bearing metadata field (tool/format/flow/plugin descriptions, overviews, parameter help, long-form docs) renders through this component rather than being dropped into JSX as a raw string. Wraps react-markdown + remark-gfm; use `inline` for compact list rows, table cells, tooltips, and chips. See web/docs/contribute/notes-internal/markdown-in-ui.md."}}}},c=`Translate blocks with an **AI provider**. Supports \`--target-lang\`, brand
voice, and glossary enforcement.

- Streams results block by block
- Falls back to source on provider error
- See the [providers guide](https://neokapi.org) for setup

| Provider | Streaming |
| --- | --- |
| Anthropic | yes |
| OpenAI | yes |
`,l={name:`Block prose (detail view)`,render:()=>(0,o.jsx)(`div`,{className:`max-w-lg rounded-md border border-border p-4`,children:(0,o.jsx)(i,{children:c})})},u={name:`Inline (clamped list row)`,render:()=>(0,o.jsx)(`div`,{className:`max-w-xs rounded-md border border-border p-3`,children:(0,o.jsx)(`div`,{className:`line-clamp-2 text-[11px] text-muted-foreground`,children:(0,o.jsx)(i,{inline:!0,children:r(`2rWrMWw5KHA`,"Translate blocks with an **AI provider** — supports `--target-lang` and a [brand voice](https://neokapi.org).")})})})},d={name:`Why: raw string vs Markdown`,render:()=>{let e="Rewrites the source with **redaction** — see `redact.rules`.";return(0,o.jsxs)(`div`,{className:`max-w-lg space-y-3 text-sm`,children:[(0,o.jsxs)(`div`,{className:`rounded-md border border-destructive/30 p-3`,children:[(0,o.jsx)(`div`,{className:`mb-1 text-xs font-semibold text-destructive`,children:r(`hp47Pqf5zUY`,`✗ Raw string in JSX`)}),(0,o.jsx)(`p`,{className:`text-muted-foreground`,children:e})]}),(0,o.jsxs)(`div`,{className:`rounded-md border border-border p-3`,children:[(0,o.jsx)(`div`,{className:`mb-1 text-xs font-semibold text-muted-foreground`,children:r(`4Z8GWLceuDg`,`✓ <Markdown>`)}),(0,o.jsx)(i,{className:`text-muted-foreground`,children:e})]})]})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Block prose (detail view)",
  render: () => <div className="max-w-lg rounded-md border border-border p-4">
      <Markdown>{SAMPLE}</Markdown>
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Inline (clamped list row)",
  render: () => <div className="max-w-xs rounded-md border border-border p-3">
      <div className="line-clamp-2 text-[11px] text-muted-foreground">
        <Markdown inline>
          Translate blocks with an **AI provider** — supports \`--target-lang\` and a [brand
          voice](https://neokapi.org).
        </Markdown>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Block`,`Inline`,`RawStringComparison`]}))();export{l as Block,u as Inline,d as RawStringComparison,f as __namedExportsOrder,s as default};