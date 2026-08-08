import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{n as r,r as i,t as a}from"./locale-select-NaUeJonA.js";function o({initial:e=``,locales:t=u}){let[n,r]=(0,c.useState)(e);return(0,l.jsxs)(`div`,{className:`max-w-sm space-y-2`,children:[(0,l.jsx)(a,{value:n,onChange:r,locales:t}),(0,l.jsxs)(`pre`,{className:`rounded bg-muted p-2 font-mono text-xs`,children:[`value: `,JSON.stringify(n)]})]})}function s({initial:e=[],locales:t=u}){let[n,i]=(0,c.useState)(e);return(0,l.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,l.jsx)(r,{value:n,onChange:i,locales:t}),(0,l.jsxs)(`pre`,{className:`rounded bg-muted p-2 font-mono text-xs`,children:[`value: `,JSON.stringify(n)]})]})}var c,l,u,d,f,p,m,h,g,_,v;e((()=>{c=t(),i(),l=n(),u=[{code:`ar`,displayName:`Arabic`},{code:`zh`,displayName:`Chinese`},{code:`cs`,displayName:`Czech`},{code:`da`,displayName:`Danish`},{code:`nl`,displayName:`Dutch`},{code:`en`,displayName:`English`},{code:`fi`,displayName:`Finnish`},{code:`fr`,displayName:`French`},{code:`de`,displayName:`German`},{code:`el`,displayName:`Greek`},{code:`it`,displayName:`Italian`},{code:`ja`,displayName:`Japanese`},{code:`ko`,displayName:`Korean`},{code:`nb`,displayName:`Norwegian Bokmål`},{code:`pl`,displayName:`Polish`},{code:`pt`,displayName:`Portuguese`},{code:`pt-BR`,displayName:`Brazilian Portuguese`},{code:`ru`,displayName:`Russian`},{code:`zh-Hans`,displayName:`Simplified Chinese`},{code:`es`,displayName:`Spanish`},{code:`sv`,displayName:`Swedish`},{code:`th`,displayName:`Thai`},{code:`zh-Hant`,displayName:`Traditional Chinese`},{code:`tr`,displayName:`Turkish`}],d={title:`Foundations/LocaleSelect`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`Locale selector with autocomplete. Single-select for source language, multi-select with chips for target languages. Pure component — locales passed as props.`}}}},f={name:`Single Select`,render:()=>(0,l.jsx)(o,{initial:`en`})},p={name:`Single Select — Empty`,render:()=>(0,l.jsx)(o,{})},m={name:`Multi Select`,render:()=>(0,l.jsx)(s,{initial:[`fr`,`de`,`ja`]})},h={name:`Multi Select — Empty`,render:()=>(0,l.jsx)(s,{})},g={name:`Source + Target (Side by Side)`,render:()=>(0,l.jsxs)(`div`,{className:`max-w-2xl space-y-4`,children:[(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:`Source Language`}),(0,l.jsx)(o,{initial:`en`})]}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:`Target Languages`}),(0,l.jsx)(s,{initial:[`fr`,`de`,`pt-BR`]})]})]})},_={name:`POSIX-style Codes`,render:()=>(0,l.jsx)(s,{initial:[`pt_BR`,`zh_Hans`],locales:u.map(e=>({...e,code:e.code.replace(/-/g,`_`)}))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Single Select",
  render: () => <SingleWrapper initial="en" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Single Select — Empty",
  render: () => <SingleWrapper />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Multi Select",
  render: () => <MultiWrapper initial={["fr", "de", "ja"]} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Multi Select — Empty",
  render: () => <MultiWrapper />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Source + Target (Side by Side)",
  render: () => <div className="max-w-2xl space-y-4">
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">Source Language</label>
        <SingleWrapper initial="en" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">Target Languages</label>
        <MultiWrapper initial={["fr", "de", "pt-BR"]} />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "POSIX-style Codes",
  render: () => {
    const posixLocales: LocaleInfo[] = sampleLocales.map(l => ({
      ...l,
      code: l.code.replace(/-/g, "_")
    }));
    return <MultiWrapper initial={["pt_BR", "zh_Hans"]} locales={posixLocales} />;
  }
}`,..._.parameters?.docs?.source}}},v=[`SingleSelect`,`SingleSelectEmpty`,`MultiSelect`,`MultiSelectEmpty`,`SideBySide`,`POSIXCodes`]}))();export{m as MultiSelect,h as MultiSelectEmpty,_ as POSIXCodes,g as SideBySide,f as SingleSelect,p as SingleSelectEmpty,v as __namedExportsOrder,d as default};