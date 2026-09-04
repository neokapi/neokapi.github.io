import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{t as a}from"./src-DgBOnAzi.js";import{n as o}from"./schema-form-CI083MH1.js";function s({schema:e,description:t,initialValues:n}){let[r,a]=(0,c.useState)(n??{});return(0,l.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:24,maxWidth:900},children:[(0,l.jsxs)(`div`,{children:[t&&(0,l.jsx)(`p`,{className:`text-sm text-muted-foreground mb-4`,children:t}),(0,l.jsx)(o,{schema:e,values:r,onChange:a})]}),(0,l.jsxs)(`div`,{style:{minWidth:0},children:[(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`7aHpZJbJOKO`,`Current Values`)}),(0,l.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(r,null,2)}),(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:i(`ibnlvuTUBbm`,`Schema`)}),(0,l.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-60`,children:JSON.stringify(e,null,2)})]})]})}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),c=t(),a(),l=n(),u={title:`Formats & Tools/Schema/Conditional Visibility`,component:s,tags:[`autodocs`],parameters:{layout:`padded`}},d={name:`ui:visible — Toggle Field Visibility`,args:{description:'The `ui:visible` rule on a property controls its visibility based on another field\'s value. Toggle "Use Code Finder" to show/hide the rules field.',schema:{title:`Conditional Fields`,type:`object`,properties:{useCodeFinder:{type:`boolean`,title:`Use Code Finder`,description:`Enable inline code detection`,default:!1},codeFinderRules:{type:`string`,title:`Code Finder Rules`,description:`Regex patterns for inline codes (one per line)`,"ui:widget":`textarea`,"ui:visible":{field:`useCodeFinder`,eq:!0}}}}}},f={name:`ui:visible — Enum-Driven Visibility`,args:{description:`Fields can be shown conditionally based on an enum value. Select different output modes to see different options appear.`,initialValues:{outputMode:`file`},schema:{title:`Mode-Dependent Fields`,type:`object`,properties:{outputMode:{type:`string`,title:`Output Mode`,enum:[`file`,`stdout`,`api`],default:`file`},outputPath:{type:`string`,title:`Output Path`,description:`File path for output`,"ui:visible":{field:`outputMode`,eq:`file`}},apiEndpoint:{type:`string`,title:`API Endpoint`,description:`URL to POST results to`,"ui:placeholder":`https://api.example.com/results`,"ui:visible":{field:`outputMode`,eq:`api`}},apiKey:{type:`string`,title:`API Key`,"ui:visible":{field:`outputMode`,eq:`api`}}}}}},p={name:`ui:visible empty — Show When Field is Unset`,args:{description:'Setting `empty: true` in ui:visible shows the field when the referenced field is empty or unset. Clear the "Override Path" to see the default path message.',schema:{title:`Empty-Based Visibility`,type:`object`,properties:{overridePath:{type:`string`,title:`Override Path`,description:`Custom output path (leave empty for default)`},defaultPathInfo:{type:`string`,title:`Default Path`,description:`Using auto-generated path based on input file`,"ui:visible":{field:`overridePath`,empty:!0}}}}}},m={name:`ui:enabled — Enable/Disable Fields`,args:{description:'The `ui:enabled` condition controls whether a field is interactive. The field remains visible but grayed out and non-interactive when disabled. Toggle "Enable Translation" to see the language fields enable/disable.',schema:{title:`Enabled-By Dependencies`,type:`object`,properties:{useTranslation:{type:`boolean`,title:`Enable Translation`,default:!1},sourceLanguage:{type:`string`,title:`Source Language`,default:`en`,"ui:enabled":{field:`useTranslation`,eq:!0}},targetLanguage:{type:`string`,title:`Target Language`,"ui:placeholder":`e.g., fr`,"ui:enabled":{field:`useTranslation`,eq:!0}}}}}},h={name:`ui:enabled — Nested Object (Real Filter Pattern)`,args:{description:'In real filter schemas, related settings are grouped in nested objects (often via `$defs`). The `ui:enabled` condition references sibling fields within the same nested scope. Toggle "Enable Inline Code Detection" to enable/disable the rules and merge settings.',schema:{title:`Nested Enabled-By`,type:`object`,properties:{inlineCodes:{type:`object`,title:`Inline Codes`,description:`Pattern-based detection of inline codes within translatable text.`,properties:{enabled:{type:`boolean`,title:`Enable Inline Code Detection`,description:`Enable pattern-based detection of inline codes`,default:!1},rules:{type:`string`,title:`Code Finder Rules`,description:`Regex patterns for inline codes (one per line)`,"ui:widget":`textarea`,"ui:enabled":{field:`enabled`,eq:!0}},mergeAdjacent:{type:`boolean`,title:`Merge Adjacent Codes`,description:`Merge consecutive inline codes into a single placeholder`,"ui:enabled":{field:`enabled`,eq:!0}}}}}}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "ui:visible — Toggle Field Visibility",
  args: {
    description: 'The \`ui:visible\` rule on a property controls its visibility based on another field\\'s value. Toggle "Use Code Finder" to show/hide the rules field.',
    schema: {
      title: "Conditional Fields",
      type: "object",
      properties: {
        useCodeFinder: {
          type: "boolean",
          title: "Use Code Finder",
          description: "Enable inline code detection",
          default: false
        },
        codeFinderRules: {
          type: "string",
          title: "Code Finder Rules",
          description: "Regex patterns for inline codes (one per line)",
          "ui:widget": "textarea",
          "ui:visible": {
            field: "useCodeFinder",
            eq: true
          }
        }
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "ui:visible — Enum-Driven Visibility",
  args: {
    description: "Fields can be shown conditionally based on an enum value. Select different output modes to see different options appear.",
    initialValues: {
      outputMode: "file"
    },
    schema: {
      title: "Mode-Dependent Fields",
      type: "object",
      properties: {
        outputMode: {
          type: "string",
          title: "Output Mode",
          enum: ["file", "stdout", "api"],
          default: "file"
        },
        outputPath: {
          type: "string",
          title: "Output Path",
          description: "File path for output",
          "ui:visible": {
            field: "outputMode",
            eq: "file"
          }
        },
        apiEndpoint: {
          type: "string",
          title: "API Endpoint",
          description: "URL to POST results to",
          "ui:placeholder": "https://api.example.com/results",
          "ui:visible": {
            field: "outputMode",
            eq: "api"
          }
        },
        apiKey: {
          type: "string",
          title: "API Key",
          "ui:visible": {
            field: "outputMode",
            eq: "api"
          }
        }
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "ui:visible empty — Show When Field is Unset",
  args: {
    description: 'Setting \`empty: true\` in ui:visible shows the field when the referenced field is empty or unset. Clear the "Override Path" to see the default path message.',
    schema: {
      title: "Empty-Based Visibility",
      type: "object",
      properties: {
        overridePath: {
          type: "string",
          title: "Override Path",
          description: "Custom output path (leave empty for default)"
        },
        defaultPathInfo: {
          type: "string",
          title: "Default Path",
          description: "Using auto-generated path based on input file",
          "ui:visible": {
            field: "overridePath",
            empty: true
          }
        }
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "ui:enabled — Enable/Disable Fields",
  args: {
    description: 'The \`ui:enabled\` condition controls whether a field is interactive. The field remains visible but grayed out and non-interactive when disabled. Toggle "Enable Translation" to see the language fields enable/disable.',
    schema: {
      title: "Enabled-By Dependencies",
      type: "object",
      properties: {
        useTranslation: {
          type: "boolean",
          title: "Enable Translation",
          default: false
        },
        sourceLanguage: {
          type: "string",
          title: "Source Language",
          default: "en",
          "ui:enabled": {
            field: "useTranslation",
            eq: true
          }
        },
        targetLanguage: {
          type: "string",
          title: "Target Language",
          "ui:placeholder": "e.g., fr",
          "ui:enabled": {
            field: "useTranslation",
            eq: true
          }
        }
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "ui:enabled — Nested Object (Real Filter Pattern)",
  args: {
    description: 'In real filter schemas, related settings are grouped in nested objects (often via \`$defs\`). The \`ui:enabled\` condition references sibling fields within the same nested scope. Toggle "Enable Inline Code Detection" to enable/disable the rules and merge settings.',
    schema: {
      title: "Nested Enabled-By",
      type: "object",
      properties: {
        inlineCodes: {
          type: "object",
          title: "Inline Codes",
          description: "Pattern-based detection of inline codes within translatable text.",
          properties: {
            enabled: {
              type: "boolean",
              title: "Enable Inline Code Detection",
              description: "Enable pattern-based detection of inline codes",
              default: false
            },
            rules: {
              type: "string",
              title: "Code Finder Rules",
              description: "Regex patterns for inline codes (one per line)",
              "ui:widget": "textarea",
              "ui:enabled": {
                field: "enabled",
                eq: true
              }
            },
            mergeAdjacent: {
              type: "boolean",
              title: "Merge Adjacent Codes",
              description: "Merge consecutive inline codes into a single placeholder",
              "ui:enabled": {
                field: "enabled",
                eq: true
              }
            }
          }
        }
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`ShowIfBoolean`,`ShowIfEnum`,`ShowIfEmpty`,`EnabledBy`,`EnabledByNested`]})))()}_();export{m as EnabledBy,h as EnabledByNested,d as ShowIfBoolean,p as ShowIfEmpty,f as ShowIfEnum,g as __namedExportsOrder,u as default};