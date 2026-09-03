import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{t as a}from"./src-tESyXdqQ.js";import{n as o}from"./schema-form-DUJCGBeD.js";function s({schema:e,description:t}){let[n,r]=(0,c.useState)({});return(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:24,maxWidth:900},children:[(0,l.jsxs)(`div`,{children:[t&&(0,l.jsx)(`p`,{className:`text-sm text-muted-foreground mb-4`,children:t}),(0,l.jsx)(o,{schema:e,values:n,onChange:r})]}),(0,l.jsxs)(`div`,{style:{minWidth:0},children:[(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`51c3U4Ut9q9`,`Schema (JSON)`)}),(0,l.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-60`,children:JSON.stringify(e,null,2)}),(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:i(`1X52QQQOkdP`,`Values`)}),(0,l.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(n,null,2)})]})]})}var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),c=t(),a(),l=n(),u={title:`Formats & Tools/Schema/Property Types`,component:s,tags:[`autodocs`],parameters:{layout:`padded`}},d={name:`string — Text Input`,args:{description:"A simple string property renders as a text input. The `description` becomes helper text below the field.",schema:{title:`String Properties`,type:`object`,properties:{name:{type:`string`,title:`Name`,description:`A simple text field`},pattern:{type:`string`,title:`Regex Pattern`,description:`With placeholder text`,"ui:placeholder":`e.g., ^[A-Z].*`},notes:{type:`string`,title:`Notes`,description:`Multiline when ui:widget is set to 'textarea'`,"ui:widget":`textarea`}}}}},f={name:`boolean — Checkbox`,args:{description:"Boolean properties render as checkboxes. The `default` value is shown when no value is set.",schema:{title:`Boolean Properties`,type:`object`,properties:{enabled:{type:`boolean`,title:`Enabled`,description:`A simple on/off toggle`,default:!0},extractAll:{type:`boolean`,title:`Extract All Pairs`,description:`Extract all string key-value pairs as translatable blocks`,default:!1}}}}},p={name:`number / integer — Numeric Input`,args:{description:"Number properties render as numeric inputs. `minimum` and `maximum` set bounds. `default` provides the initial value.",schema:{title:`Number Properties`,type:`object`,properties:{threshold:{type:`number`,title:`Similarity Threshold`,description:`Minimum match score (0.0-1.0)`,default:.7,minimum:0,maximum:1},maxSegments:{type:`integer`,title:`Max Segments`,description:`Maximum number of segments to process`,default:1e3,minimum:1}}}}},m={name:`options — Labeled Dropdown Select`,args:{description:"Properties with `options` render as dropdown selects with labeled values. Each option has a `value` and a `label`. Use `ui:enum-descriptions` for tooltips.",schema:{title:`Options Properties`,type:`object`,properties:{outputFormat:{type:`string`,title:`Output Format`,description:`Choose the output format`,options:[{value:`json`,label:`JSON`},{value:`yaml`,label:`YAML`},{value:`xml`,label:`XML`}],default:`json`},severity:{type:`string`,title:`Severity Level`,description:`With custom labels and descriptions`,options:[{value:`error`,label:`Error (fail build)`},{value:`warning`,label:`Warning (report only)`},{value:`info`,label:`Informational`}],default:`warning`,"ui:enum-descriptions":{error:`Stops processing and reports the issue as a build failure`,warning:`Reports the issue but continues processing`,info:`Logs the issue for information purposes only`}}}}}},h={name:`object — Nested Fields`,args:{description:`Object properties create nested field groups. For shallow nesting (depth 1), fields are shown inline. Deeper nesting uses drill-down navigation.`,schema:{title:`Object Properties`,type:`object`,properties:{parser:{type:`object`,title:`Parser Settings`,description:`Settings for the document parser`,properties:{assumeWellformed:{type:`boolean`,title:`Assume Well-formed`,description:`Skip validation of input structure`,default:!1},encoding:{type:`string`,title:`Input Encoding`,description:`Override auto-detected encoding`,default:`UTF-8`}}},output:{type:`object`,title:`Output`,description:`Output generation settings`,properties:{indent:{type:`integer`,title:`Indent Spaces`,default:2,minimum:0,maximum:8},trailingNewline:{type:`boolean`,title:`Trailing Newline`,default:!0}}}}}}},g={name:`array — List Editor`,args:{description:"Array properties render as lists with add/remove controls. The `items` schema defines the type of each element.",schema:{title:`Array Properties`,type:`object`,properties:{extensions:{type:`array`,title:`File Extensions`,description:`List of file extensions to process`,items:{type:`string`}},rules:{type:`array`,title:`Extraction Rules`,description:`Regex patterns for content extraction`,items:{type:`string`}}}}}},_={name:`Duplicate Label Suppression`,args:{description:"When `title` and `description` are the same (case-insensitive), the description is suppressed to avoid visual duplication. Compare the first two fields (title === description) with the third (different description).",schema:{title:`Label Suppression Demo`,type:`object`,properties:{expansionPercent:{type:`integer`,title:`Expansion Percent`,description:`Expansion percent`,default:30},prefix:{type:`string`,title:`Prefix`,description:`Prefix`,default:`[`},suffix:{type:`string`,title:`Suffix`,description:`Character appended after each translated segment`,default:`]`}}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "string — Text Input",
  args: {
    description: "A simple string property renders as a text input. The \`description\` becomes helper text below the field.",
    schema: {
      title: "String Properties",
      type: "object",
      properties: {
        name: {
          type: "string",
          title: "Name",
          description: "A simple text field"
        },
        pattern: {
          type: "string",
          title: "Regex Pattern",
          description: "With placeholder text",
          "ui:placeholder": "e.g., ^[A-Z].*"
        },
        notes: {
          type: "string",
          title: "Notes",
          description: "Multiline when ui:widget is set to 'textarea'",
          "ui:widget": "textarea"
        }
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "boolean — Checkbox",
  args: {
    description: "Boolean properties render as checkboxes. The \`default\` value is shown when no value is set.",
    schema: {
      title: "Boolean Properties",
      type: "object",
      properties: {
        enabled: {
          type: "boolean",
          title: "Enabled",
          description: "A simple on/off toggle",
          default: true
        },
        extractAll: {
          type: "boolean",
          title: "Extract All Pairs",
          description: "Extract all string key-value pairs as translatable blocks",
          default: false
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "number / integer — Numeric Input",
  args: {
    description: "Number properties render as numeric inputs. \`minimum\` and \`maximum\` set bounds. \`default\` provides the initial value.",
    schema: {
      title: "Number Properties",
      type: "object",
      properties: {
        threshold: {
          type: "number",
          title: "Similarity Threshold",
          description: "Minimum match score (0.0-1.0)",
          default: 0.7,
          minimum: 0,
          maximum: 1
        },
        maxSegments: {
          type: "integer",
          title: "Max Segments",
          description: "Maximum number of segments to process",
          default: 1000,
          minimum: 1
        }
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "options — Labeled Dropdown Select",
  args: {
    description: "Properties with \`options\` render as dropdown selects with labeled values. Each option has a \`value\` and a \`label\`. Use \`ui:enum-descriptions\` for tooltips.",
    schema: {
      title: "Options Properties",
      type: "object",
      properties: {
        outputFormat: {
          type: "string",
          title: "Output Format",
          description: "Choose the output format",
          options: [{
            value: "json",
            label: "JSON"
          }, {
            value: "yaml",
            label: "YAML"
          }, {
            value: "xml",
            label: "XML"
          }],
          default: "json"
        },
        severity: {
          type: "string",
          title: "Severity Level",
          description: "With custom labels and descriptions",
          options: [{
            value: "error",
            label: "Error (fail build)"
          }, {
            value: "warning",
            label: "Warning (report only)"
          }, {
            value: "info",
            label: "Informational"
          }],
          default: "warning",
          "ui:enum-descriptions": {
            error: "Stops processing and reports the issue as a build failure",
            warning: "Reports the issue but continues processing",
            info: "Logs the issue for information purposes only"
          }
        }
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "object — Nested Fields",
  args: {
    description: "Object properties create nested field groups. For shallow nesting (depth 1), fields are shown inline. Deeper nesting uses drill-down navigation.",
    schema: {
      title: "Object Properties",
      type: "object",
      properties: {
        parser: {
          type: "object",
          title: "Parser Settings",
          description: "Settings for the document parser",
          properties: {
            assumeWellformed: {
              type: "boolean",
              title: "Assume Well-formed",
              description: "Skip validation of input structure",
              default: false
            },
            encoding: {
              type: "string",
              title: "Input Encoding",
              description: "Override auto-detected encoding",
              default: "UTF-8"
            }
          }
        },
        output: {
          type: "object",
          title: "Output",
          description: "Output generation settings",
          properties: {
            indent: {
              type: "integer",
              title: "Indent Spaces",
              default: 2,
              minimum: 0,
              maximum: 8
            },
            trailingNewline: {
              type: "boolean",
              title: "Trailing Newline",
              default: true
            }
          }
        }
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "array — List Editor",
  args: {
    description: "Array properties render as lists with add/remove controls. The \`items\` schema defines the type of each element.",
    schema: {
      title: "Array Properties",
      type: "object",
      properties: {
        extensions: {
          type: "array",
          title: "File Extensions",
          description: "List of file extensions to process",
          items: {
            type: "string"
          }
        },
        rules: {
          type: "array",
          title: "Extraction Rules",
          description: "Regex patterns for content extraction",
          items: {
            type: "string"
          }
        }
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Duplicate Label Suppression",
  args: {
    description: "When \`title\` and \`description\` are the same (case-insensitive), the description is suppressed to avoid visual duplication. Compare the first two fields (title === description) with the third (different description).",
    schema: {
      title: "Label Suppression Demo",
      type: "object",
      properties: {
        expansionPercent: {
          type: "integer",
          title: "Expansion Percent",
          description: "Expansion percent",
          default: 30
        },
        prefix: {
          type: "string",
          title: "Prefix",
          description: "Prefix",
          default: "["
        },
        suffix: {
          type: "string",
          title: "Suffix",
          description: "Character appended after each translated segment",
          default: "]"
        }
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`StringProperty`,`BooleanProperty`,`NumberProperty`,`EnumProperty`,`ObjectProperty`,`ArrayProperty`,`DuplicateLabelSuppression`]})))()}y();export{g as ArrayProperty,f as BooleanProperty,_ as DuplicateLabelSuppression,m as EnumProperty,p as NumberProperty,h as ObjectProperty,d as StringProperty,v as __namedExportsOrder,u as default};