import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{t as a}from"./src-B1StLcpp.js";import{n as o}from"./schema-form-CwTRcSsK.js";import{r as s,s as c}from"./reference-data-DERMUrTP.js";function l({schema:e,description:t}){let[n,r]=(0,u.useState)({}),a=e.toolMeta;return(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:24,maxWidth:900},children:[(0,d.jsxs)(`div`,{children:[t&&(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground mb-4`,children:t}),a&&(0,d.jsxs)(`div`,{className:`rounded-lg border p-4 mb-4 space-y-2`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,d.jsx)(`span`,{className:`text-sm font-semibold`,children:a.displayName||e.title}),typeof a.category==`string`?(0,d.jsx)(`span`,{className:`rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs`,children:a.category}):null]}),typeof a.description==`string`?(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:a.description}):null,(0,d.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-xs`,children:[a.inputs?.map(e=>(0,d.jsx)(`span`,{className:`rounded bg-muted px-1.5 py-0.5`,children:i(`bgkzEvISpfP`,`in: ${e}`,{i:e})},e)),a.outputs?.map(e=>(0,d.jsx)(`span`,{className:`rounded bg-muted px-1.5 py-0.5`,children:i(`99BinUUlmS4`,`out: ${e}`,{o:e})},e)),a.tags?.map(e=>(0,d.jsx)(`span`,{className:`rounded bg-muted px-1.5 py-0.5`,children:i(`bmYBRHsxscS`,`#${e}`,{t:e})},e)),a.requires?.map(e=>(0,d.jsx)(`span`,{className:`rounded bg-destructive/10 text-destructive px-1.5 py-0.5`,children:i(`2tzw4eAEl1R`,`requires: ${e}`,{r:e})},e))]})]}),(0,d.jsx)(o,{schema:e,values:n,onChange:r})]}),(0,d.jsxs)(`div`,{style:{minWidth:0},children:[(0,d.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`5G3MvwsjtXI`,`Tool Metadata`)}),(0,d.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(a||{},null,2)}),(0,d.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:i(`ibnlvuTUBbm`,`Schema`)}),(0,d.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-60`,children:JSON.stringify(e,null,2)})]})]})}var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),u=t(),a(),s(),d=n(),f={title:`Formats & Tools/Schema/Tool Metadata`,component:l,tags:[`autodocs`],parameters:{layout:`padded`}},p={name:`toolMeta — ID, Category, I/O, Tags`,args:{description:"The `toolMeta` block identifies a tool: its display name, category (translate, validate, transform, etc.), input/output part types, tags, and required context (e.g., needs target-language).",schema:{title:`Word Count`,type:`object`,toolMeta:{id:`word-count`,displayName:`Word Count`,description:`Count translatable words and segments for cost estimation`,category:`analysis`,inputs:[`block`],outputs:[`block`],tags:[`analysis`,`statistics`],requires:[`source-language`]},properties:{countWhitespace:{type:`boolean`,title:`Count Whitespace`,default:!1},includeProtected:{type:`boolean`,title:`Include Protected Content`,default:!1}}}}},m={name:`Real Example: Built-in pseudo-translate`,args:{description:`A real built-in tool schema from the neokapi Go codebase.`,schema:c.builtIn.find(e=>e[`x-name`]===`pseudo-translate`)??{title:`pseudo-translate (not found)`,type:`object`,properties:{}}}},h={name:`Real Example: Okapi Bridge search-and-replace`,args:{description:`A real Okapi bridge tool schema with toolMeta derived from step-metadata.json.`,schema:c.bridge.find(e=>e[`x-name`]===`search-and-replace`)??{title:`search-and-replace (not found)`,type:`object`,properties:{}}}},g={name:`Categories — How Tools Are Classified`,args:{description:`Tools are classified by category: translate, validate, transform, enrich, convert, pipeline, analysis. The ToolBrowser groups tools by category with distinct colors and icons.`,schema:{title:`Category Examples`,description:`The toolMeta.category field determines grouping and visual treatment in the tool browser.`,type:`object`,properties:{}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "toolMeta — ID, Category, I/O, Tags",
  args: {
    description: "The \`toolMeta\` block identifies a tool: its display name, category (translate, validate, transform, etc.), input/output part types, tags, and required context (e.g., needs target-language).",
    schema: {
      title: "Word Count",
      type: "object",
      toolMeta: {
        id: "word-count",
        displayName: "Word Count",
        description: "Count translatable words and segments for cost estimation",
        category: "analysis",
        inputs: ["block"],
        outputs: ["block"],
        tags: ["analysis", "statistics"],
        requires: ["source-language"]
      },
      properties: {
        countWhitespace: {
          type: "boolean",
          title: "Count Whitespace",
          default: false
        },
        includeProtected: {
          type: "boolean",
          title: "Include Protected Content",
          default: false
        }
      }
    } as unknown as ComponentSchema
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Real Example: Built-in pseudo-translate",
  args: {
    description: "A real built-in tool schema from the neokapi Go codebase.",
    schema: (toolSchemas.builtIn.find(t => t["x-name"] === "pseudo-translate") ?? {
      title: "pseudo-translate (not found)",
      type: "object",
      properties: {}
    }) as unknown as ComponentSchema
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Real Example: Okapi Bridge search-and-replace",
  args: {
    description: "A real Okapi bridge tool schema with toolMeta derived from step-metadata.json.",
    schema: (toolSchemas.bridge.find(t => t["x-name"] === "search-and-replace") ?? {
      title: "search-and-replace (not found)",
      type: "object",
      properties: {}
    }) as unknown as ComponentSchema
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Categories — How Tools Are Classified",
  args: {
    description: "Tools are classified by category: translate, validate, transform, enrich, convert, pipeline, analysis. The ToolBrowser groups tools by category with distinct colors and icons.",
    schema: {
      title: "Category Examples",
      description: "The toolMeta.category field determines grouping and visual treatment in the tool browser.",
      type: "object",
      properties: {}
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`ToolIdentification`,`RealBuiltInTool`,`RealBridgeTool`,`ToolCategories`]})))()}v();export{h as RealBridgeTool,m as RealBuiltInTool,g as ToolCategories,p as ToolIdentification,_ as __namedExportsOrder,f as default};