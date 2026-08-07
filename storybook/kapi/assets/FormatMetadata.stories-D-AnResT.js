import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{r,t as i}from"./runtime-D9E4JuzJ.js";import{n as a,r as o}from"./reference-data-VbrYnQy-.js";import{n as s,t as c}from"./FormatConfigEditor-BIqCrleL.js";function l({schema:e,description:t}){let[n,r]=(0,u.useState)({});return(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:24,maxWidth:900},children:[(0,d.jsxs)(`div`,{children:[t&&(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground mb-4`,children:t}),(0,d.jsx)(c,{schema:e,values:n,onChange:r,title:e.title})]}),(0,d.jsxs)(`div`,{style:{minWidth:0},children:[(0,d.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`51l0ukckLDv`,`formatMeta`)}),(0,d.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(e.formatMeta||{},null,2)}),(0,d.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:i(`1X52QQQOkdP`,`Values`)}),(0,d.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(n,null,2)})]})]})}var u,d,f,p,m,h,g,_;e((()=>{r(),u=t(),s(),o(),d=n(),f={title:`Formats & Tools/Schema/Format Metadata`,component:l,tags:[`autodocs`],parameters:{layout:`padded`}},p={name:`formatMeta — Format ID, Extensions, MIME Types`,args:{description:"The `formatMeta` block identifies a format: its ID, supported file extensions, and MIME types. The FormatConfigEditor renders these as badges in the header.",schema:{title:`JSON Format`,description:`Configuration for the JSON file format reader/writer`,type:`object`,formatMeta:{id:`json`,extensions:[`.json`,`.jsonc`,`.json5`],mimeTypes:[`application/json`]},properties:{extractAllPairs:{type:`boolean`,title:`Extract All Pairs`,default:!0}}}}},m={name:`Real Example: Built-in JSON Schema`,args:{description:`A real built-in format schema generated from the neokapi Go codebase. Shows how the actual schema renders.`,schema:a.builtIn.find(e=>e[`x-name`]===`json`)??{title:`JSON (not found)`,type:`object`,properties:{}}}},h={name:`Real Example: Okapi Bridge HTML Schema`,args:{description:`A real Okapi bridge format schema with formatMeta, ui:widget hints, and complex nested properties.`,schema:a.bridge.find(e=>e[`x-name`]===`okf_html`)??{title:`HTML (not found)`,type:`object`,properties:{}}}},g={name:`$ref + $defs — Schema References`,args:{description:"Properties can use `$ref` to reference shared definitions in `$defs`. The SchemaForm resolves these at render time. This is common in Okapi bridge schemas where multiple properties share the same structure.",schema:{title:`Schema with $defs`,type:`object`,$defs:{ruleEntry:{type:`object`,properties:{pattern:{type:`string`,title:`Pattern`},action:{type:`string`,title:`Action`,enum:[`extract`,`skip`,`protect`]}}}},properties:{extractionRules:{title:`Extraction Rules`,$ref:`#/$defs/ruleEntry`},protectionRules:{title:`Protection Rules`,$ref:`#/$defs/ruleEntry`}}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "formatMeta — Format ID, Extensions, MIME Types",
  args: {
    description: "The \`formatMeta\` block identifies a format: its ID, supported file extensions, and MIME types. The FormatConfigEditor renders these as badges in the header.",
    schema: {
      title: "JSON Format",
      description: "Configuration for the JSON file format reader/writer",
      type: "object",
      formatMeta: {
        id: "json",
        extensions: [".json", ".jsonc", ".json5"],
        mimeTypes: ["application/json"]
      },
      properties: {
        extractAllPairs: {
          type: "boolean",
          title: "Extract All Pairs",
          default: true
        }
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Real Example: Built-in JSON Schema",
  args: {
    description: "A real built-in format schema generated from the neokapi Go codebase. Shows how the actual schema renders.",
    schema: (formatSchemas.builtIn.find(f => f["x-name"] === "json") ?? {
      title: "JSON (not found)",
      type: "object",
      properties: {}
    }) as unknown as ComponentSchema
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Real Example: Okapi Bridge HTML Schema",
  args: {
    description: "A real Okapi bridge format schema with formatMeta, ui:widget hints, and complex nested properties.",
    schema: (formatSchemas.bridge.find(f => f["x-name"] === "okf_html") ?? {
      title: "HTML (not found)",
      type: "object",
      properties: {}
    }) as unknown as ComponentSchema
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "$ref + $defs — Schema References",
  args: {
    description: "Properties can use \`$ref\` to reference shared definitions in \`$defs\`. The SchemaForm resolves these at render time. This is common in Okapi bridge schemas where multiple properties share the same structure.",
    schema: {
      title: "Schema with $defs",
      type: "object",
      $defs: {
        ruleEntry: {
          type: "object",
          properties: {
            pattern: {
              type: "string",
              title: "Pattern"
            },
            action: {
              type: "string",
              title: "Action",
              enum: ["extract", "skip", "protect"]
            }
          }
        }
      },
      properties: {
        extractionRules: {
          title: "Extraction Rules",
          $ref: "#/$defs/ruleEntry"
        },
        protectionRules: {
          title: "Protection Rules",
          $ref: "#/$defs/ruleEntry"
        }
      }
    } as unknown as ComponentSchema
  }
}`,...g.parameters?.docs?.source}}},_=[`FormatIdentification`,`RealBuiltInFormat`,`RealBridgeFormat`,`RefResolution`]}))();export{p as FormatIdentification,h as RealBridgeFormat,m as RealBuiltInFormat,g as RefResolution,_ as __namedExportsOrder,f as default};