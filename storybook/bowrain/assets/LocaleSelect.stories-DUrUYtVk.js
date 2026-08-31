import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-CWFEJrrT.js";import{n as a,r as o,t as s}from"./locale-select-BCZU0bDI.js";function c({initial:e=``,locales:t=f}){let[n,r]=(0,u.useState)(e);return(0,d.jsxs)(`div`,{className:`max-w-sm space-y-2`,children:[(0,d.jsx)(s,{value:n,onChange:r,locales:t}),(0,d.jsxs)(`pre`,{className:`rounded bg-muted p-2 font-mono text-xs`,children:[`value: `,JSON.stringify(n)]})]})}function l({initial:e=[],locales:t=f}){let[n,r]=(0,u.useState)(e);return(0,d.jsxs)(`div`,{className:`max-w-lg space-y-2`,children:[(0,d.jsx)(a,{value:n,onChange:r,locales:t}),(0,d.jsxs)(`pre`,{className:`rounded bg-muted p-2 font-mono text-xs`,children:[`value: `,JSON.stringify(n)]})]})}var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),u=t(),o(),d=n(),f=[{code:`ar`,displayName:`Arabic`},{code:`zh`,displayName:`Chinese`},{code:`cs`,displayName:`Czech`},{code:`da`,displayName:`Danish`},{code:`nl`,displayName:`Dutch`},{code:`en`,displayName:`English`},{code:`fi`,displayName:`Finnish`},{code:`fr`,displayName:`French`},{code:`de`,displayName:`German`},{code:`el`,displayName:`Greek`},{code:`it`,displayName:`Italian`},{code:`ja`,displayName:`Japanese`},{code:`ko`,displayName:`Korean`},{code:`nb`,displayName:`Norwegian Bokmål`},{code:`pl`,displayName:`Polish`},{code:`pt`,displayName:`Portuguese`},{code:`pt-BR`,displayName:`Brazilian Portuguese`},{code:`ru`,displayName:`Russian`},{code:`zh-Hans`,displayName:`Simplified Chinese`},{code:`es`,displayName:`Spanish`},{code:`sv`,displayName:`Swedish`},{code:`th`,displayName:`Thai`},{code:`zh-Hant`,displayName:`Traditional Chinese`},{code:`tr`,displayName:`Turkish`}],p={title:`Foundations/LocaleSelect`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`Locale selector with autocomplete. Single-select for source language, multi-select with chips for target languages. Pure component — locales passed as props.`}}}},m={name:`Single Select`,render:()=>(0,d.jsx)(c,{initial:`en`})},h={name:`Single Select — Empty`,render:()=>(0,d.jsx)(c,{})},g={name:`Multi Select`,render:()=>(0,d.jsx)(l,{initial:[`fr`,`de`,`ja`]})},_={name:`Multi Select — Empty`,render:()=>(0,d.jsx)(l,{})},v={name:`Source + Target (Side by Side)`,render:()=>(0,d.jsxs)(`div`,{className:`max-w-2xl space-y-4`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:i(`bslfQmWkAV4`,`Source Language`)}),(0,d.jsx)(c,{initial:`en`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`label`,{className:`mb-1 block text-xs text-muted-foreground`,children:i(`fZziTjWZLWB`,`Target Languages`)}),(0,d.jsx)(l,{initial:[`fr`,`de`,`pt-BR`]})]})]})},y={name:`POSIX-style Codes`,render:()=>{let e=f.map(e=>({...e,code:e.code.replace(/-/g,`_`)}));return(0,d.jsx)(l,{initial:[`pt_BR`,`zh_Hans`],locales:e})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Single Select",
  render: () => <SingleWrapper initial="en" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Single Select — Empty",
  render: () => <SingleWrapper />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Multi Select",
  render: () => <MultiWrapper initial={["fr", "de", "ja"]} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Multi Select — Empty",
  render: () => <MultiWrapper />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "POSIX-style Codes",
  render: () => {
    const posixLocales: LocaleInfo[] = sampleLocales.map(l => ({
      ...l,
      code: l.code.replace(/-/g, "_")
    }));
    return <MultiWrapper initial={["pt_BR", "zh_Hans"]} locales={posixLocales} />;
  }
}`,...y.parameters?.docs?.source}}},b=[`SingleSelect`,`SingleSelectEmpty`,`MultiSelect`,`MultiSelectEmpty`,`SideBySide`,`POSIXCodes`]})))()}x();export{g as MultiSelect,_ as MultiSelectEmpty,y as POSIXCodes,v as SideBySide,m as SingleSelect,h as SingleSelectEmpty,b as __namedExportsOrder,p as default};