import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-ls4VQNA8.js";import{t as a}from"./src-B0WNUqeC.js";import{n as o}from"./schema-form-DXqIc05q.js";import{a as s,r as c}from"./reference-data-BHhWPt62.js";function l({schema:e,description:t,presetValues:n}){let[r,a]=(0,u.useState)({});return(0,d.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:24,maxWidth:900},children:[(0,d.jsxs)(`div`,{children:[t&&(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground mb-4`,children:t}),(0,d.jsx)(o,{schema:e,values:r,onChange:a,presetValues:n})]}),(0,d.jsxs)(`div`,{style:{minWidth:0},children:[(0,d.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`7aHpZJbJOKO`,`Current Values`)}),(0,d.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-32`,children:JSON.stringify(r,null,2)}),n&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:i(`4yRY18tQ7OO`,`Active Preset Values`)}),(0,d.jsx)(`pre`,{className:`rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-32`,children:JSON.stringify(n,null,2)})]})]})]})}var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),u=t(),a(),c(),d=n(),f={title:`Formats & Tools/Schema/Presets & Defaults`,component:l,tags:[`autodocs`],parameters:{layout:`padded`}},p={name:`default — Property Defaults`,args:{description:"Each property can have a `default` value. When the user hasn't set a value, the default is shown as placeholder/initial state. The SchemaForm tracks which values differ from defaults.",schema:{title:`Properties with Defaults`,type:`object`,properties:{encoding:{type:`string`,title:`Encoding`,default:`UTF-8`},extractAll:{type:`boolean`,title:`Extract All`,default:!0},maxSegments:{type:`integer`,title:`Max Segments`,default:1e3,minimum:1},outputFormat:{type:`string`,title:`Format`,default:`json`,enum:[`json`,`yaml`,`xml`]}}}}},m={name:`presetValues — Modified Indicator Dot`,args:{description:"When `presetValues` is provided, a colored dot appears next to fields that differ from the preset. This helps users see what they've customized. Try changing field values to see the dot appear.",presetValues:{encoding:`UTF-8`,extractAll:!0,maxSegments:1e3},schema:{title:`Preset Comparison`,type:`object`,properties:{encoding:{type:`string`,title:`Encoding`,default:`UTF-8`},extractAll:{type:`boolean`,title:`Extract All`,default:!0},maxSegments:{type:`integer`,title:`Max Segments`,default:1e3,minimum:1}}}}},h=Object.entries(s).find(([,e])=>Object.keys(e).length>1),g={name:`Real Example: Bridge Format Presets`,args:{description:h?`Real presets for format "${h[0]}". Presets are extracted from Okapi filter configurations during the transform stage and stored as separate JSON files.`:`No multi-preset format found in fixtures.`,presetValues:h?Object.values(h[1])[0]:void 0,schema:{title:h?`Presets for ${h[0]}`:`No presets`,type:`object`,properties:{info:{type:`string`,title:`Available presets`,description:h?Object.keys(h[1]).join(`, `):`none`}}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "default — Property Defaults",
  args: {
    description: "Each property can have a \`default\` value. When the user hasn't set a value, the default is shown as placeholder/initial state. The SchemaForm tracks which values differ from defaults.",
    schema: {
      title: "Properties with Defaults",
      type: "object",
      properties: {
        encoding: {
          type: "string",
          title: "Encoding",
          default: "UTF-8"
        },
        extractAll: {
          type: "boolean",
          title: "Extract All",
          default: true
        },
        maxSegments: {
          type: "integer",
          title: "Max Segments",
          default: 1000,
          minimum: 1
        },
        outputFormat: {
          type: "string",
          title: "Format",
          default: "json",
          enum: ["json", "yaml", "xml"]
        }
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "presetValues — Modified Indicator Dot",
  args: {
    description: "When \`presetValues\` is provided, a colored dot appears next to fields that differ from the preset. This helps users see what they've customized. Try changing field values to see the dot appear.",
    presetValues: {
      encoding: "UTF-8",
      extractAll: true,
      maxSegments: 1000
    },
    schema: {
      title: "Preset Comparison",
      type: "object",
      properties: {
        encoding: {
          type: "string",
          title: "Encoding",
          default: "UTF-8"
        },
        extractAll: {
          type: "boolean",
          title: "Extract All",
          default: true
        },
        maxSegments: {
          type: "integer",
          title: "Max Segments",
          default: 1000,
          minimum: 1
        }
      }
    }
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Real Example: Bridge Format Presets",
  args: {
    description: formatWithPresets ? \`Real presets for format "\${formatWithPresets[0]}". Presets are extracted from Okapi filter configurations during the transform stage and stored as separate JSON files.\` : "No multi-preset format found in fixtures.",
    presetValues: formatWithPresets ? Object.values(formatWithPresets[1])[0] as Record<string, unknown> : undefined,
    schema: {
      title: formatWithPresets ? \`Presets for \${formatWithPresets[0]}\` : "No presets",
      type: "object",
      properties: {
        info: {
          type: "string",
          title: "Available presets",
          description: formatWithPresets ? Object.keys(formatWithPresets[1]).join(", ") : "none"
        }
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`DefaultValues`,`PresetIndicator`,`RealPresets`]})))()}v();export{p as DefaultValues,m as PresetIndicator,g as RealPresets,_ as __namedExportsOrder,f as default};