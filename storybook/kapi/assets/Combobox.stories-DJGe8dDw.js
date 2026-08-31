import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./combobox-BcmRkgQc.js";import{r as u,t as d}from"./runtime-ls4VQNA8.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u(),f=t(),c(),p=n(),m={title:`UI/Combobox`,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,p.jsx)(e,{})})],parameters:{docs:{description:{component:`The shared searchable-select primitive (base-ui). Type to search, keyboard-navigate,
pick one. Used as the base for the locale add-picker and other searchable selectors.`}}}},h=[{value:`en-US`,label:`English (US)`},{value:`fr-FR`,label:`French (France)`},{value:`de-DE`,label:`German (Germany)`},{value:`ja-JP`,label:`Japanese (Japan)`},{value:`zh-CN`,label:`Chinese (Simplified)`}],g={render:()=>(0,p.jsxs)(l,{children:[(0,p.jsx)(i,{placeholder:d(`baZaXFRT6I4`,`Search locales...`)}),(0,p.jsx)(a,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(s,{children:d(`korYG0mE3Sx`,`No locales found.`)}),h.map(e=>(0,p.jsx)(r,{value:e.value,children:e.label},e.value))]})})]})},_={render:()=>(0,p.jsxs)(l,{children:[(0,p.jsx)(i,{placeholder:d(`baZaXFRT6I4`,`Search locales...`),showClear:!0}),(0,p.jsx)(a,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(s,{children:d(`korYG0mE3Sx`,`No locales found.`)}),h.map(e=>(0,p.jsx)(r,{value:e.value,children:e.label},e.value))]})})]})},v={render:()=>{let[e,t]=(0,f.useState)(`fr-FR`),[n,c]=(0,f.useState)(``),u=h.filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,p.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,p.jsxs)(l,{value:e,onValueChange:t,onInputValueChange:e=>c(e),children:[(0,p.jsx)(i,{placeholder:d(`3XQmSBie5Bx`,`Pick a locale...`),showClear:!0}),(0,p.jsx)(a,{children:(0,p.jsxs)(o,{children:[(0,p.jsx)(s,{children:d(`2ZWAt806DBQ`,`No matching locales.`)}),u.map(e=>(0,p.jsx)(r,{value:e.value,children:e.label},e.value))]})})]}),(0,p.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d(`2uuGCuXx2hN`,`Selected: ${e??`(none)`}`,{value:e??`(none)`})})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Controlled single-select with client-side filtering (the add-picker pattern).`,...v.parameters?.docs?.description}}},y=[`Default`,`WithClear`,`Controlled`]})))()}b();export{v as Controlled,g as Default,_ as WithClear,y as __namedExportsOrder,m as default};