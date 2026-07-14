import{c as e,i as t}from"./preload-helper-DBuSV-bh.js";import{t as n}from"./react-BHOuiJCc.js";import{t as r}from"./jsx-runtime-CNPDJLAB.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./combobox-80DNmLCd.js";var d,f,p,m,h,g,_,v;t((()=>{d=e(n(),1),l(),f=r(),p={title:`UI/Combobox`,tags:[`autodocs`],decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,f.jsx)(e,{})})],parameters:{docs:{description:{component:`The shared searchable-select primitive (base-ui). Type to search, keyboard-navigate,
pick one. Used as the base for the locale add-picker and other searchable selectors.`}}}},m=[{value:`en-US`,label:`English (US)`},{value:`fr-FR`,label:`French (France)`},{value:`de-DE`,label:`German (Germany)`},{value:`ja-JP`,label:`Japanese (Japan)`},{value:`zh-CN`,label:`Chinese (Simplified)`}],h={render:()=>(0,f.jsxs)(u,{children:[(0,f.jsx)(a,{placeholder:`Search locales...`}),(0,f.jsx)(o,{children:(0,f.jsxs)(s,{children:[(0,f.jsx)(c,{children:`No locales found.`}),m.map(e=>(0,f.jsx)(i,{value:e.value,children:e.label},e.value))]})})]})},g={render:()=>(0,f.jsxs)(u,{children:[(0,f.jsx)(a,{placeholder:`Search locales...`,showClear:!0}),(0,f.jsx)(o,{children:(0,f.jsxs)(s,{children:[(0,f.jsx)(c,{children:`No locales found.`}),m.map(e=>(0,f.jsx)(i,{value:e.value,children:e.label},e.value))]})})]})},_={render:()=>{let[e,t]=(0,d.useState)(`fr-FR`),[n,r]=(0,d.useState)(``),l=m.filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,f.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,f.jsxs)(u,{value:e,onValueChange:t,onInputValueChange:e=>r(e),children:[(0,f.jsx)(a,{placeholder:`Pick a locale...`,showClear:!0}),(0,f.jsx)(o,{children:(0,f.jsxs)(s,{children:[(0,f.jsx)(c,{children:`No matching locales.`}),l.map(e=>(0,f.jsx)(i,{value:e.value,children:e.label},e.value))]})})]}),(0,f.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Selected: `,e??`(none)`]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox>
      <ComboboxInput placeholder="Search locales..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No locales found.</ComboboxEmpty>
          {locales.map(locale => <ComboboxItem key={locale.value} value={locale.value}>
              {locale.label}
            </ComboboxItem>)}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Combobox>
      <ComboboxInput placeholder="Search locales..." showClear />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxEmpty>No locales found.</ComboboxEmpty>
          {locales.map(locale => <ComboboxItem key={locale.value} value={locale.value}>
              {locale.label}
            </ComboboxItem>)}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | null>("fr-FR");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [search, setSearch] = useState("");
    const shown = locales.filter(l => l.label.toLowerCase().includes(search.toLowerCase()));
    return <div className="flex flex-col gap-2">
        <Combobox value={value} onValueChange={setValue} onInputValueChange={(text: string) => setSearch(text)}>
          <ComboboxInput placeholder="Pick a locale..." showClear />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxEmpty>No matching locales.</ComboboxEmpty>
              {shown.map(locale => <ComboboxItem key={locale.value} value={locale.value}>
                  {locale.label}
                </ComboboxItem>)}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <p className="text-xs text-muted-foreground">Selected: {value ?? "(none)"}</p>
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:`Controlled single-select with client-side filtering (the add-picker pattern).`,..._.parameters?.docs?.description}}},v=[`Default`,`WithClear`,`Controlled`]}))();export{_ as Controlled,h as Default,g as WithClear,v as __namedExportsOrder,p as default};