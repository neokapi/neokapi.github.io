import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-zupuK3C-.js";import{n as a,t as o}from"./code-input-D7srlqJW.js";function s({initial:e=``,language:t=`plain`,placeholder:n,singleLine:r,disabled:i,minHeight:a}){let[s,u]=(0,c.useState)(e);return(0,l.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,l.jsx)(o,{value:s,onChange:u,language:t,placeholder:n,singleLine:r,disabled:i,minHeight:a}),(0,l.jsx)(`pre`,{className:`p-2 rounded bg-muted text-xs font-mono overflow-auto max-h-[100px]`,children:JSON.stringify(s)})]})}var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),c=t(),a(),l=n(),u={title:`Foundations/CodeInput`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`CodeMirror 6 based code editor with syntax highlighting. Supports JavaScript, JSON, regex, and plain text modes. Used by SchemaForm code-editor widget and CodeFinderEditor regex inputs.`}}}},d={render:()=>(0,l.jsx)(s,{language:`javascript`,placeholder:i(`hFQg2K1JiGj`,`// Enter JavaScript code...`),initial:`function transform(segment) {
  const text = segment.target || segment.source;
  return text.toUpperCase();
}`,minHeight:160})},f={name:`JSON`,render:()=>(0,l.jsx)(s,{language:`json`,placeholder:i(`6BeXu0BXSvB`,`{}`),initial:`{
  "extractAll": true,
  "pathRules": "$.messages[*].text",
  "useCodeFinder": false
}`,minHeight:140})},p={render:()=>(0,l.jsx)(s,{language:`regex`,placeholder:i(`iCx0F5o6JU6`,`Regex pattern...`),initial:`</?\\\\w[^>]*>`,singleLine:!0})},m={name:`Regex — Multiple Patterns`,render:()=>(0,l.jsx)(`div`,{className:`max-w-lg space-y-1.5`,children:[`</?\\w[^>]*>`,`\\{\\d+\\}`,`%[-+0 #]*\\d*\\.?\\d*[diouxXeEfgGaAcspn%]`,`\\$\\{[^}]+\\}`].map((e,t)=>(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`span`,{className:`text-xs text-muted-foreground w-4 text-right`,children:t+1}),(0,l.jsx)(s,{initial:e,language:`regex`,singleLine:!0})]},t))})},h={render:()=>(0,l.jsx)(s,{language:`plain`,placeholder:i(`49LquSNXmyc`,`Enter text...`),initial:`One rule per line\\nAnother rule here`,minHeight:100})},g={render:()=>(0,l.jsx)(s,{language:`javascript`,placeholder:i(`aM0RuMkOucH`,`Single line expression...`),initial:`segment.source.replace(/\\\\s+/g, ' ')`,singleLine:!0})},_={render:()=>(0,l.jsx)(s,{language:`javascript`,initial:`const x = 42;`,disabled:!0,singleLine:!0})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="javascript" placeholder="// Enter JavaScript code..." initial={\`function transform(segment) {\\n  const text = segment.target || segment.source;\\n  return text.toUpperCase();\\n}\`} minHeight={160} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "JSON",
  render: () => <Wrapper language="json" placeholder="{}" initial={\`{\\n  "extractAll": true,\\n  "pathRules": "$.messages[*].text",\\n  "useCodeFinder": false\\n}\`} minHeight={140} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="regex" placeholder="Regex pattern..." initial="</?\\\\w[^>]*>" singleLine />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="plain" placeholder="Enter text..." initial="One rule per line\\nAnother rule here" minHeight={100} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="javascript" placeholder="Single line expression..." initial="segment.source.replace(/\\\\s+/g, ' ')" singleLine />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper language="javascript" initial="const x = 42;" disabled singleLine />
}`,..._.parameters?.docs?.source}}},v=[`JavaScript`,`JsonMode`,`Regex`,`RegexMultiplePatterns`,`PlainText`,`SingleLine`,`Disabled`]})))()}y();export{_ as Disabled,d as JavaScript,f as JsonMode,h as PlainText,p as Regex,m as RegexMultiplePatterns,g as SingleLine,v as __namedExportsOrder,u as default};