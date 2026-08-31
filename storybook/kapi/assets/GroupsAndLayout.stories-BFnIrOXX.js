import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-ls4VQNA8.js";import{t as a}from"./src-B0WNUqeC.js";import{n as o}from"./schema-form-DXqIc05q.js";function s({schema:e,description:t}){let[n,r]=(0,c.useState)({});return(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:24,maxWidth:900},children:[(0,l.jsxs)(`div`,{children:[t&&(0,l.jsx)(`p`,{className:`text-sm text-muted-foreground mb-4`,children:t}),(0,l.jsx)(o,{schema:e,values:n,onChange:r})]}),(0,l.jsxs)(`div`,{style:{minWidth:0},children:[(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`ibnlvuTUBbm`,`Schema`)}),(0,l.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-80`,children:JSON.stringify(e,null,2)})]})]})}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),c=t(),a(),l=n(),u={title:`Formats & Tools/Schema/Groups & Layout`,component:s,tags:[`autodocs`],parameters:{layout:`padded`}},d={name:`ui:groups — Parameter Grouping`,args:{description:"The `ui:groups` array organizes properties into labeled, collapsible sections. Each group has an `id`, `label`, and a `fields` array referencing property names. Groups with 4 or fewer fields stay open by default.",schema:{title:`Format with Groups`,type:`object`,"ui:groups":[{id:`extraction`,label:`Extraction`,fields:[`extractAll`,`exceptions`]},{id:`output`,label:`Output`,fields:[`encoding`,`lineBreak`,`bom`]}],properties:{extractAll:{type:`boolean`,title:`Extract All`,description:`Extract all translatable strings`,default:!0},exceptions:{type:`string`,title:`Exceptions`,description:`Regex for keys to exclude`},encoding:{type:`string`,title:`Output Encoding`,default:`UTF-8`,enum:[`UTF-8`,`UTF-16`,`ISO-8859-1`]},lineBreak:{type:`string`,title:`Line Break`,default:`platform`,enum:[`platform`,`lf`,`crlf`]},bom:{type:`boolean`,title:`Write BOM`,description:`Write byte-order mark`,default:!1}}}}},f={name:`collapsed — Auto-collapse Large Groups`,args:{description:"Groups with 5+ fields are collapsible. The `collapsed: true` flag starts a group collapsed. By default, the first 2 groups are open and the rest are collapsed.",schema:{title:`Format with Many Groups`,type:`object`,"ui:groups":[{id:`basic`,label:`Basic Settings`,fields:[`extractAll`,`encoding`]},{id:`advanced`,label:`Advanced Settings`,description:`Fine-tune extraction behavior`,collapsed:!0,fields:[`useCodeFinder`,`codeFinderRules`,`subfilter`,`preserveWhitespace`,`segmentation`,`inlineTags`]}],properties:{extractAll:{type:`boolean`,title:`Extract All`,default:!0},encoding:{type:`string`,title:`Encoding`,default:`UTF-8`},useCodeFinder:{type:`boolean`,title:`Use Code Finder`,default:!1},codeFinderRules:{type:`string`,title:`Code Finder Rules`,description:`Regex for inline codes`},subfilter:{type:`string`,title:`Sub-filter`,description:`Apply a secondary filter to extracted content`},preserveWhitespace:{type:`boolean`,title:`Preserve Whitespace`,default:!1},segmentation:{type:`string`,title:`Segmentation`,default:`sentence`,enum:[`sentence`,`paragraph`,`none`]},inlineTags:{type:`string`,title:`Inline Tags`,description:`Comma-separated list of inline element names`}}}}},p={name:`description — Group-Level Help Text`,args:{description:"Groups can have a `description` field that appears as help text below the group header.",schema:{title:`Groups with Descriptions`,type:`object`,"ui:groups":[{id:`extraction`,label:`Extraction Rules`,description:`Control which content is extracted for translation. Rules are evaluated in order — the first matching rule wins.`,fields:[`extractAll`,`pathRules`,`exceptions`]},{id:`codeFinder`,label:`Inline Code Detection`,description:`Patterns that identify inline codes (placeholders, variables) within translatable text. Matched content is protected from translation.`,fields:[`useCodeFinder`,`codeFinderRules`]}],properties:{extractAll:{type:`boolean`,title:`Extract All Pairs`,default:!0},pathRules:{type:`string`,title:`Path Rules`,description:`JSONPath expressions for selective extraction`},exceptions:{type:`string`,title:`Exceptions`,description:`Regex for keys to exclude`},useCodeFinder:{type:`boolean`,title:`Enable Code Finder`,default:!1},codeFinderRules:{type:`string`,title:`Rules`,description:`Regex patterns (one per line)`,"ui:widget":`textarea`}}}}},m={name:`Ungrouped — Fields Without a Group`,args:{description:`Properties not assigned to any group appear in an 'Other' section at the bottom. This handles schemas that only partially use groups.`,schema:{title:`Partial Grouping`,type:`object`,"ui:groups":[{id:`main`,label:`Main Settings`,fields:[`extractAll`]}],properties:{extractAll:{type:`boolean`,title:`Extract All`,default:!0},encoding:{type:`string`,title:`Encoding`,default:`UTF-8`,description:`This field has no group`},debug:{type:`boolean`,title:`Debug Mode`,description:`This field also has no group`,default:!1}}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "ui:groups — Parameter Grouping",
  args: {
    description: "The \`ui:groups\` array organizes properties into labeled, collapsible sections. Each group has an \`id\`, \`label\`, and a \`fields\` array referencing property names. Groups with 4 or fewer fields stay open by default.",
    schema: {
      title: "Format with Groups",
      type: "object",
      "ui:groups": [{
        id: "extraction",
        label: "Extraction",
        fields: ["extractAll", "exceptions"]
      }, {
        id: "output",
        label: "Output",
        fields: ["encoding", "lineBreak", "bom"]
      }],
      properties: {
        extractAll: {
          type: "boolean",
          title: "Extract All",
          description: "Extract all translatable strings",
          default: true
        },
        exceptions: {
          type: "string",
          title: "Exceptions",
          description: "Regex for keys to exclude"
        },
        encoding: {
          type: "string",
          title: "Output Encoding",
          default: "UTF-8",
          enum: ["UTF-8", "UTF-16", "ISO-8859-1"]
        },
        lineBreak: {
          type: "string",
          title: "Line Break",
          default: "platform",
          enum: ["platform", "lf", "crlf"]
        },
        bom: {
          type: "boolean",
          title: "Write BOM",
          description: "Write byte-order mark",
          default: false
        }
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "collapsed — Auto-collapse Large Groups",
  args: {
    description: "Groups with 5+ fields are collapsible. The \`collapsed: true\` flag starts a group collapsed. By default, the first 2 groups are open and the rest are collapsed.",
    schema: {
      title: "Format with Many Groups",
      type: "object",
      "ui:groups": [{
        id: "basic",
        label: "Basic Settings",
        fields: ["extractAll", "encoding"]
      }, {
        id: "advanced",
        label: "Advanced Settings",
        description: "Fine-tune extraction behavior",
        collapsed: true,
        fields: ["useCodeFinder", "codeFinderRules", "subfilter", "preserveWhitespace", "segmentation", "inlineTags"]
      }],
      properties: {
        extractAll: {
          type: "boolean",
          title: "Extract All",
          default: true
        },
        encoding: {
          type: "string",
          title: "Encoding",
          default: "UTF-8"
        },
        useCodeFinder: {
          type: "boolean",
          title: "Use Code Finder",
          default: false
        },
        codeFinderRules: {
          type: "string",
          title: "Code Finder Rules",
          description: "Regex for inline codes"
        },
        subfilter: {
          type: "string",
          title: "Sub-filter",
          description: "Apply a secondary filter to extracted content"
        },
        preserveWhitespace: {
          type: "boolean",
          title: "Preserve Whitespace",
          default: false
        },
        segmentation: {
          type: "string",
          title: "Segmentation",
          default: "sentence",
          enum: ["sentence", "paragraph", "none"]
        },
        inlineTags: {
          type: "string",
          title: "Inline Tags",
          description: "Comma-separated list of inline element names"
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "description — Group-Level Help Text",
  args: {
    description: "Groups can have a \`description\` field that appears as help text below the group header.",
    schema: {
      title: "Groups with Descriptions",
      type: "object",
      "ui:groups": [{
        id: "extraction",
        label: "Extraction Rules",
        description: "Control which content is extracted for translation. Rules are evaluated in order — the first matching rule wins.",
        fields: ["extractAll", "pathRules", "exceptions"]
      }, {
        id: "codeFinder",
        label: "Inline Code Detection",
        description: "Patterns that identify inline codes (placeholders, variables) within translatable text. Matched content is protected from translation.",
        fields: ["useCodeFinder", "codeFinderRules"]
      }],
      properties: {
        extractAll: {
          type: "boolean",
          title: "Extract All Pairs",
          default: true
        },
        pathRules: {
          type: "string",
          title: "Path Rules",
          description: "JSONPath expressions for selective extraction"
        },
        exceptions: {
          type: "string",
          title: "Exceptions",
          description: "Regex for keys to exclude"
        },
        useCodeFinder: {
          type: "boolean",
          title: "Enable Code Finder",
          default: false
        },
        codeFinderRules: {
          type: "string",
          title: "Rules",
          description: "Regex patterns (one per line)",
          "ui:widget": "textarea"
        }
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Ungrouped — Fields Without a Group",
  args: {
    description: "Properties not assigned to any group appear in an 'Other' section at the bottom. This handles schemas that only partially use groups.",
    schema: {
      title: "Partial Grouping",
      type: "object",
      "ui:groups": [{
        id: "main",
        label: "Main Settings",
        fields: ["extractAll"]
      }],
      properties: {
        extractAll: {
          type: "boolean",
          title: "Extract All",
          default: true
        },
        encoding: {
          type: "string",
          title: "Encoding",
          default: "UTF-8",
          description: "This field has no group"
        },
        debug: {
          type: "boolean",
          title: "Debug Mode",
          description: "This field also has no group",
          default: false
        }
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`BasicGroups`,`CollapsedGroups`,`GroupDescription`,`UngroupedFields`]})))()}g();export{d as BasicGroups,f as CollapsedGroups,p as GroupDescription,m as UngroupedFields,h as __namedExportsOrder,u as default};