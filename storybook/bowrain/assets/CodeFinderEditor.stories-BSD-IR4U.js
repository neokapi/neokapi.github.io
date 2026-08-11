import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./src-Bi_iXWnB.js";import{t as i}from"./code-finder-editor-DUeJ3QTd.js";function a(e){let[t,n]=(0,o.useState)(e.initial??{rules:[],sample:``});return(0,s.jsxs)(`div`,{className:`max-w-lg`,children:[(0,s.jsx)(i,{value:t,onChange:n,presets:e.presets,label:e.label,description:e.description,disabled:e.disabled}),(0,s.jsx)(`pre`,{className:`mt-4 p-2 rounded bg-muted text-xs font-mono overflow-auto`,children:JSON.stringify(t,null,2)})]})}var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),o=t(),s=n(),c={title:`UI/CodeFinderEditor`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Editor for inline code detection rules. Supports numbered regex patterns, preset selection, validation feedback, and live match highlighting against sample text.`}}}},l={render:()=>(0,s.jsx)(a,{label:`Inline Code Rules`,description:`Define regex patterns to detect inline codes in translatable text.`})},u={render:()=>(0,s.jsx)(a,{label:`Inline Code Rules`,initial:{rules:[{pattern:`</?\\w[^>]*>`},{pattern:`\\{\\d+\\}`},{pattern:`%[ds]`}],sample:`Click <b>OK</b> to format {0} with %d items`}})},d={render:()=>(0,s.jsx)(a,{label:`Inline Code Rules`,description:`Choose a preset or define custom patterns.`,presets:{"HTML Tags":{rules:[{pattern:`</?\\w[^>]*>`}],sample:`<b>Bold</b> and <i>italic</i>`},"Printf Codes":{rules:[{pattern:`%[diouxXeEfgGaAcspn%]`},{pattern:`%[-+ #0]*\\d*\\.?\\d*[diouxXeEfgGaAcspn%]`}],sample:`Found %d items in %s`},"ICU Placeholders":{rules:[{pattern:`\\{[^}]+\\}`}],sample:`Hello {name}, you have {count} messages`}}})},f={render:()=>(0,s.jsx)(a,{label:`Inline Code Rules`,initial:{rules:[{pattern:`</?\\w[^>]*>`},{pattern:`[invalid(`},{pattern:`\\{\\d+\\}`}],sample:`Test <b>text</b> with {0}`}})},p={render:()=>(0,s.jsx)(a,{label:`Inline Code Rules`,disabled:!0,initial:{rules:[{pattern:`</?\\w[^>]*>`},{pattern:`\\{\\d+\\}`}],sample:`Click <b>OK</b> to format {0}`}})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" description="Define regex patterns to detect inline codes in translatable text." />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper label="Inline Code Rules" disabled initial={{
    rules: [{
      pattern: "</?\\\\w[^>]*>"
    }, {
      pattern: "\\\\{\\\\d+\\\\}"
    }],
    sample: "Click <b>OK</b> to format {0}"
  }} />
}`,...p.parameters?.docs?.source}}},m=[`Empty`,`WithRules`,`WithPresets`,`InvalidRegex`,`Disabled`]})))()}h();export{p as Disabled,l as Empty,f as InvalidRegex,d as WithPresets,u as WithRules,m as __namedExportsOrder,c as default};