import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{a as i,i as a,n as o,o as s,r as c,s as l,t as u}from"./combobox-CK8fkzkL.js";import{r as d,t as f}from"./runtime-DQonW5bo.js";var p,m,h,g,_,v,y,b;t((()=>{d(),p=e(n(),1),l(),m=r(),h={title:`UI/Combobox`,tags:[`autodocs`],decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,m.jsx)(e,{})})],parameters:{docs:{description:{component:`The shared searchable-select primitive (base-ui). Type to search, keyboard-navigate,
pick one. Used as the base for the locale add-picker and other searchable selectors.`}}}},g=[{value:`en-US`,label:`English (US)`},{value:`fr-FR`,label:`French (France)`},{value:`de-DE`,label:`German (Germany)`},{value:`ja-JP`,label:`Japanese (Japan)`},{value:`zh-CN`,label:`Chinese (Simplified)`}],_={render:()=>(0,m.jsxs)(u,{children:[(0,m.jsx)(a,{placeholder:f(`baZaXFRT6I4`,`Search locales...`)}),(0,m.jsx)(o,{children:(0,m.jsxs)(s,{children:[(0,m.jsx)(c,{children:f(`korYG0mE3Sx`,`No locales found.`)}),g.map(e=>(0,m.jsx)(i,{value:e.value,children:e.label},e.value))]})})]})},v={render:()=>(0,m.jsxs)(u,{children:[(0,m.jsx)(a,{placeholder:f(`baZaXFRT6I4`,`Search locales...`),showClear:!0}),(0,m.jsx)(o,{children:(0,m.jsxs)(s,{children:[(0,m.jsx)(c,{children:f(`korYG0mE3Sx`,`No locales found.`)}),g.map(e=>(0,m.jsx)(i,{value:e.value,children:e.label},e.value))]})})]})},y={render:()=>{let[e,t]=(0,p.useState)(`fr-FR`),[n,r]=(0,p.useState)(``),l=g.filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,m.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,m.jsxs)(u,{value:e,onValueChange:t,onInputValueChange:e=>r(e),children:[(0,m.jsx)(a,{placeholder:f(`3XQmSBie5Bx`,`Pick a locale...`),showClear:!0}),(0,m.jsx)(o,{children:(0,m.jsxs)(s,{children:[(0,m.jsx)(c,{children:f(`2ZWAt806DBQ`,`No matching locales.`)}),l.map(e=>(0,m.jsx)(i,{value:e.value,children:e.label},e.value))]})})]}),(0,m.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:f(`2uuGCuXx2hN`,`Selected: ${e??`(none)`}`,{value:e??`(none)`})})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Controlled single-select with client-side filtering (the add-picker pattern).`,...y.parameters?.docs?.description}}},b=[`Default`,`WithClear`,`Controlled`]}))();export{y as Controlled,_ as Default,v as WithClear,b as __namedExportsOrder,h as default};