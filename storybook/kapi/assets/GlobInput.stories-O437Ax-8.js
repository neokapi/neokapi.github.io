import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-zupuK3C-.js";import{i as a,n as o,r as s,t as c}from"./target-path-input-DUDBdYSN.js";function l({initial:e=``,placeholder:t}){let[n,r]=(0,d.useState)(e);return(0,f.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,f.jsx)(s,{value:n,onChange:r,placeholder:t}),(0,f.jsx)(`pre`,{className:`max-h-[60px] overflow-auto rounded bg-muted p-2 font-mono text-xs`,children:JSON.stringify(n)})]})}function u({initial:e=``,placeholder:t}){let[n,r]=(0,d.useState)(e);return(0,f.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,f.jsx)(c,{value:n,onChange:r,placeholder:t}),(0,f.jsx)(`pre`,{className:`max-h-[60px] overflow-auto rounded bg-muted p-2 font-mono text-xs`,children:JSON.stringify(n)})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),d=t(),a(),o(),f=n(),p={title:`Foundations/GlobInput`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Single-line input with glob pattern syntax highlighting. Highlights **, *, ?, {braces}, [classes], and path separators.`}}}},m={name:`Glob — Basic`,render:()=>(0,f.jsx)(l,{initial:`src/locales/en/*.json`,placeholder:i(`fkUWBD4v5JH`,`src/**/*.json`)})},h={name:`Glob — Globstar`,render:()=>(0,f.jsx)(l,{initial:`docs/**/*.md`})},g={name:`Glob — Brace Expansion`,render:()=>(0,f.jsx)(l,{initial:`src/**/*.{ts,tsx,js,jsx}`})},_={name:`Glob — Character Class`,render:()=>(0,f.jsx)(l,{initial:`data/[0-9]*-report.csv`})},v={name:`Glob — Complex`,render:()=>(0,f.jsx)(l,{initial:`src/**/i18n/{en,fr}/**/*.{json,yaml}`})},y={name:`Target Path — Basic`,render:()=>(0,f.jsx)(u,{initial:`src/locales/{lang}/*.json`,placeholder:i(`eotph41heTy`,`output/{lang}/**/*`)})},b={name:`Target Path — Multiple Variables`,render:()=>(0,f.jsx)(u,{initial:`output/{lang}/{region}/**/*.json`})},x={name:`Target Path — With Wildcards`,render:()=>(0,f.jsx)(u,{initial:`dist/{lang}/**/*`})},S={name:`Glob + Target Path — Side by Side`,render:()=>(0,f.jsxs)(`div`,{className:`max-w-2xl space-y-3`,children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:i(`dxFVTaH4GLl`,`Path pattern (glob)`)}),(0,f.jsx)(l,{initial:`src/i18n/en/**/*.json`})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:i(`a89e8Ych0Bb`,`Target path`)}),(0,f.jsx)(u,{initial:`src/i18n/{lang}/**/*.json`})]})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Glob — Basic",
  render: () => <GlobWrapper initial="src/locales/en/*.json" placeholder="src/**/*.json" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Glob — Globstar",
  render: () => <GlobWrapper initial="docs/**/*.md" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Glob — Brace Expansion",
  render: () => <GlobWrapper initial="src/**/*.{ts,tsx,js,jsx}" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Glob — Character Class",
  render: () => <GlobWrapper initial="data/[0-9]*-report.csv" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Glob — Complex",
  render: () => <GlobWrapper initial="src/**/i18n/{en,fr}/**/*.{json,yaml}" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Target Path — Basic",
  render: () => <TargetWrapper initial="src/locales/{lang}/*.json" placeholder="output/{lang}/**/*" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Target Path — Multiple Variables",
  render: () => <TargetWrapper initial="output/{lang}/{region}/**/*.json" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Target Path — With Wildcards",
  render: () => <TargetWrapper initial="dist/{lang}/**/*" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Glob + Target Path — Side by Side",
  render: () => <div className="max-w-2xl space-y-3">
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">Path pattern (glob)</label>
        <GlobWrapper initial="src/i18n/en/**/*.json" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">Target path</label>
        <TargetWrapper initial="src/i18n/{lang}/**/*.json" />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}},C=[`BasicGlob`,`Globstar`,`BraceExpansion`,`CharacterClass`,`ComplexPattern`,`TargetPathBasic`,`TargetPathMultipleVars`,`TargetPathWithWildcards`,`SideBySide`]})))()}w();export{m as BasicGlob,g as BraceExpansion,_ as CharacterClass,v as ComplexPattern,h as Globstar,S as SideBySide,y as TargetPathBasic,b as TargetPathMultipleVars,x as TargetPathWithWildcards,C as __namedExportsOrder,p as default};