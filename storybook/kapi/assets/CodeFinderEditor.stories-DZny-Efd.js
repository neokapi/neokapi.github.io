import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-zupuK3C-.js";import{n as a,t as o}from"./code-finder-editor-BLFStib7.js";function s(e){let[t,n]=(0,c.useState)(e.initial??{rules:[],sample:``});return(0,l.jsxs)(`div`,{className:`max-w-lg`,children:[(0,l.jsx)(o,{value:t,onChange:n,presets:e.presets,label:e.label,description:e.description,disabled:e.disabled}),(0,l.jsx)(`pre`,{className:`mt-4 p-2 rounded bg-muted text-xs font-mono overflow-auto`,children:JSON.stringify(t,null,2)})]})}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),c=t(),a(),l=n(),u={title:`Formats & Tools/Schema/CodeFinderEditor`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Editor for inline code detection rules. Supports numbered regex patterns, preset selection, validation feedback, and live match highlighting against sample text.`}}}},d={render:()=>(0,l.jsx)(s,{label:i(`aXJVxpVjMhD`,`Inline Code Rules`),description:i(`bgzARkywOaV`,`Define regex patterns to detect inline codes in translatable text.`)})},f={render:()=>(0,l.jsx)(s,{label:i(`aXJVxpVjMhD`,`Inline Code Rules`),initial:{rules:[{pattern:`</?\\w[^>]*>`},{pattern:`\\{\\d+\\}`},{pattern:`%[ds]`}],sample:`Click <b>OK</b> to format {0} with %d items`}})},p={render:()=>(0,l.jsx)(s,{label:i(`aXJVxpVjMhD`,`Inline Code Rules`),description:i(`en7tJLaiwQx`,`Choose a preset or define custom patterns.`),presets:{"HTML Tags":{rules:[{pattern:`</?\\w[^>]*>`}],sample:`<b>Bold</b> and <i>italic</i>`},"Printf Codes":{rules:[{pattern:`%[diouxXeEfgGaAcspn%]`},{pattern:`%[-+ #0]*\\d*\\.?\\d*[diouxXeEfgGaAcspn%]`}],sample:`Found %d items in %s`},"ICU Placeholders":{rules:[{pattern:`\\{[^}]+\\}`}],sample:`Hello {name}, you have {count} messages`}}})},m={render:()=>(0,l.jsx)(s,{label:i(`aXJVxpVjMhD`,`Inline Code Rules`),initial:{rules:[{pattern:`</?\\w[^>]*>`},{pattern:`[invalid(`},{pattern:`\\{\\d+\\}`}],sample:`Test <b>text</b> with {0}`}})},h={render:()=>(0,l.jsx)(s,{label:i(`aXJVxpVjMhD`,`Inline Code Rules`),disabled:!0,initial:{rules:[{pattern:`</?\\w[^>]*>`},{pattern:`\\{\\d+\\}`}],sample:`Click <b>OK</b> to format {0}`}})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" description="Define regex patterns to detect inline codes in translatable text." />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" initial={{
    rules: [{
      pattern: "</?\\\\w[^>]*>"
    }, {
      pattern: "\\\\{\\\\d+\\\\}"
    }, {
      pattern: "%[ds]"
    }],
    sample: "Click <b>OK</b> to format {0} with %d items"
  }} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" description="Choose a preset or define custom patterns." presets={{
    "HTML Tags": {
      rules: [{
        pattern: "</?\\\\w[^>]*>"
      }],
      sample: "<b>Bold</b> and <i>italic</i>"
    },
    "Printf Codes": {
      rules: [{
        pattern: "%[diouxXeEfgGaAcspn%]"
      }, {
        pattern: "%[-+ #0]*\\\\d*\\\\.?\\\\d*[diouxXeEfgGaAcspn%]"
      }],
      sample: "Found %d items in %s"
    },
    "ICU Placeholders": {
      rules: [{
        pattern: "\\\\{[^}]+\\\\}"
      }],
      sample: "Hello {name}, you have {count} messages"
    }
  }} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" initial={{
    rules: [{
      pattern: "</?\\\\w[^>]*>"
    }, {
      pattern: "[invalid("
    }, {
      pattern: "\\\\{\\\\d+\\\\}"
    }],
    sample: "Test <b>text</b> with {0}"
  }} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" disabled initial={{
    rules: [{
      pattern: "</?\\\\w[^>]*>"
    }, {
      pattern: "\\\\{\\\\d+\\\\}"
    }],
    sample: "Click <b>OK</b> to format {0}"
  }} />
}`,...h.parameters?.docs?.source}}},g=[`Empty`,`WithRules`,`WithPresets`,`InvalidRegex`,`Disabled`]})))()}_();export{h as Disabled,d as Empty,m as InvalidRegex,p as WithPresets,f as WithRules,g as __namedExportsOrder,u as default};