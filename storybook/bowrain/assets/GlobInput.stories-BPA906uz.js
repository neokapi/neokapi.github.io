import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{i as r,n as i,r as a,t as o}from"./target-path-input-ps5tScbD.js";function s({initial:e=``,placeholder:t}){let[n,r]=(0,l.useState)(e);return(0,u.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,u.jsx)(a,{value:n,onChange:r,placeholder:t}),(0,u.jsx)(`pre`,{className:`max-h-[60px] overflow-auto rounded bg-muted p-2 font-mono text-xs`,children:JSON.stringify(n)})]})}function c({initial:e=``,placeholder:t}){let[n,r]=(0,l.useState)(e);return(0,u.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,u.jsx)(o,{value:n,onChange:r,placeholder:t}),(0,u.jsx)(`pre`,{className:`max-h-[60px] overflow-auto rounded bg-muted p-2 font-mono text-xs`,children:JSON.stringify(n)})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=t(),r(),i(),u=n(),d={title:`Foundations/GlobInput`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Single-line input with glob pattern syntax highlighting. Highlights **, *, ?, {braces}, [classes], and path separators.`}}}},f={name:`Glob — Basic`,render:()=>(0,u.jsx)(s,{initial:`src/locales/en/*.json`,placeholder:`src/**/*.json`})},p={name:`Glob — Globstar`,render:()=>(0,u.jsx)(s,{initial:`docs/**/*.md`})},m={name:`Glob — Brace Expansion`,render:()=>(0,u.jsx)(s,{initial:`src/**/*.{ts,tsx,js,jsx}`})},h={name:`Glob — Character Class`,render:()=>(0,u.jsx)(s,{initial:`data/[0-9]*-report.csv`})},g={name:`Glob — Complex`,render:()=>(0,u.jsx)(s,{initial:`src/**/i18n/{en,fr}/**/*.{json,yaml}`})},_={name:`Target Path — Basic`,render:()=>(0,u.jsx)(c,{initial:`src/locales/{lang}/*.json`,placeholder:`output/{lang}/**/*`})},v={name:`Target Path — Multiple Variables`,render:()=>(0,u.jsx)(c,{initial:`output/{lang}/{region}/**/*.json`})},y={name:`Target Path — With Wildcards`,render:()=>(0,u.jsx)(c,{initial:`dist/{lang}/**/*`})},b={name:`Glob + Target Path — Side by Side`,render:()=>(0,u.jsxs)(`div`,{className:`max-w-2xl space-y-3`,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:`Path pattern (glob)`}),(0,u.jsx)(s,{initial:`src/i18n/en/**/*.json`})]}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:`Target path`}),(0,u.jsx)(c,{initial:`src/i18n/{lang}/**/*.json`})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Glob — Basic",
  render: () => <GlobWrapper initial="src/locales/en/*.json" placeholder="src/**/*.json" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Glob — Globstar",
  render: () => <GlobWrapper initial="docs/**/*.md" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Glob — Brace Expansion",
  render: () => <GlobWrapper initial="src/**/*.{ts,tsx,js,jsx}" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Glob — Character Class",
  render: () => <GlobWrapper initial="data/[0-9]*-report.csv" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Glob — Complex",
  render: () => <GlobWrapper initial="src/**/i18n/{en,fr}/**/*.{json,yaml}" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Target Path — Basic",
  render: () => <TargetWrapper initial="src/locales/{lang}/*.json" placeholder="output/{lang}/**/*" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Target Path — Multiple Variables",
  render: () => <TargetWrapper initial="output/{lang}/{region}/**/*.json" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Target Path — With Wildcards",
  render: () => <TargetWrapper initial="dist/{lang}/**/*" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`BasicGlob`,`Globstar`,`BraceExpansion`,`CharacterClass`,`ComplexPattern`,`TargetPathBasic`,`TargetPathMultipleVars`,`TargetPathWithWildcards`,`SideBySide`]})))()}S();export{f as BasicGlob,m as BraceExpansion,h as CharacterClass,g as ComplexPattern,p as Globstar,b as SideBySide,_ as TargetPathBasic,v as TargetPathMultipleVars,y as TargetPathWithWildcards,x as __namedExportsOrder,d as default};