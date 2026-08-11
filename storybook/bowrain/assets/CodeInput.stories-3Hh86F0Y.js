import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./code-input-wfatg5Zj.js";function a({initial:e=``,language:t=`plain`,placeholder:n,singleLine:r,disabled:a,minHeight:c}){let[l,u]=(0,o.useState)(e);return(0,s.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,s.jsx)(i,{value:l,onChange:u,language:t,placeholder:n,singleLine:r,disabled:a,minHeight:c}),(0,s.jsx)(`pre`,{className:`p-2 rounded bg-muted text-xs font-mono overflow-auto max-h-[100px]`,children:JSON.stringify(l)})]})}var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{o=t(),r(),s=n(),c={title:`Foundations/CodeInput`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`CodeMirror 6 based code editor with syntax highlighting. Supports JavaScript, JSON, regex, and plain text modes. Used by SchemaForm code-editor widget and CodeFinderEditor regex inputs.`}}}},l={render:()=>(0,s.jsx)(a,{language:`javascript`,placeholder:`// Enter JavaScript code...`,initial:`function transform(segment) {
  const text = segment.target || segment.source;
  return text.toUpperCase();
}`,minHeight:160})},u={name:`JSON`,render:()=>(0,s.jsx)(a,{language:`json`,placeholder:`{}`,initial:`{
  "extractAll": true,
  "pathRules": "$.messages[*].text",
  "useCodeFinder": false
}`,minHeight:140})},d={render:()=>(0,s.jsx)(a,{language:`regex`,placeholder:`Regex pattern...`,initial:`</?\\\\w[^>]*>`,singleLine:!0})},f={name:`Regex — Multiple Patterns`,render:()=>(0,s.jsx)(`div`,{className:`max-w-lg space-y-1.5`,children:[`</?\\w[^>]*>`,`\\{\\d+\\}`,`%[-+0 #]*\\d*\\.?\\d*[diouxXeEfgGaAcspn%]`,`\\$\\{[^}]+\\}`].map((e,t)=>(0,s.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,s.jsx)(`span`,{className:`text-xs text-muted-foreground w-4 text-right`,children:t+1}),(0,s.jsx)(a,{initial:e,language:`regex`,singleLine:!0})]},t))})},p={render:()=>(0,s.jsx)(a,{language:`plain`,placeholder:`Enter text...`,initial:`One rule per line\\nAnother rule here`,minHeight:100})},m={render:()=>(0,s.jsx)(a,{language:`javascript`,placeholder:`Single line expression...`,initial:`segment.source.replace(/\\\\s+/g, ' ')`,singleLine:!0})},h={render:()=>(0,s.jsx)(a,{language:`javascript`,initial:`const x = 42;`,disabled:!0,singleLine:!0})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="javascript" placeholder="// Enter JavaScript code..." initial={\`function transform(segment) {\\n  const text = segment.target || segment.source;\\n  return text.toUpperCase();\\n}\`} minHeight={160} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "JSON",
  render: () => <Wrapper language="json" placeholder="{}" initial={\`{\\n  "extractAll": true,\\n  "pathRules": "$.messages[*].text",\\n  "useCodeFinder": false\\n}\`} minHeight={140} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="regex" placeholder="Regex pattern..." initial="</?\\\\w[^>]*>" singleLine />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Regex — Multiple Patterns",
  render: () => {
    const patterns = ["</?\\\\w[^>]*>", "\\\\{\\\\d+\\\\}", "%[-+0 #]*\\\\d*\\\\.?\\\\d*[diouxXeEfgGaAcspn%]", "\\\\$\\\\{[^}]+\\\\}"];
    return <div className="max-w-lg space-y-1.5">
        {patterns.map((p, i) => <div key={i} className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground w-4 text-right">{i + 1}</span>
            <Wrapper initial={p} language="regex" singleLine />
          </div>)}
      </div>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="plain" placeholder="Enter text..." initial="One rule per line\\nAnother rule here" minHeight={100} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="javascript" placeholder="Single line expression..." initial="segment.source.replace(/\\\\s+/g, ' ')" singleLine />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="javascript" initial="const x = 42;" disabled singleLine />
}`,...h.parameters?.docs?.source}}},g=[`JavaScript`,`JsonMode`,`Regex`,`RegexMultiplePatterns`,`PlainText`,`SingleLine`,`Disabled`]})))()}_();export{h as Disabled,l as JavaScript,u as JsonMode,p as PlainText,d as Regex,f as RegexMultiplePatterns,m as SingleLine,g as __namedExportsOrder,c as default};