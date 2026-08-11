import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{a as r,i,n as a,o,r as s,s as c,t as l}from"./combobox-uXFlHH8G.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{u=t(),c(),d=n(),f={title:`UI/Combobox`,tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,d.jsx)(e,{})})],parameters:{docs:{description:{component:`The shared searchable-select primitive (base-ui). Type to search, keyboard-navigate,
pick one. Used as the base for the locale add-picker and other searchable selectors.`}}}},p=[{value:`en-US`,label:`English (US)`},{value:`fr-FR`,label:`French (France)`},{value:`de-DE`,label:`German (Germany)`},{value:`ja-JP`,label:`Japanese (Japan)`},{value:`zh-CN`,label:`Chinese (Simplified)`}],m={render:()=>(0,d.jsxs)(l,{children:[(0,d.jsx)(i,{placeholder:`Search locales...`}),(0,d.jsx)(a,{children:(0,d.jsxs)(o,{children:[(0,d.jsx)(s,{children:`No locales found.`}),p.map(e=>(0,d.jsx)(r,{value:e.value,children:e.label},e.value))]})})]})},h={render:()=>(0,d.jsxs)(l,{children:[(0,d.jsx)(i,{placeholder:`Search locales...`,showClear:!0}),(0,d.jsx)(a,{children:(0,d.jsxs)(o,{children:[(0,d.jsx)(s,{children:`No locales found.`}),p.map(e=>(0,d.jsx)(r,{value:e.value,children:e.label},e.value))]})})]})},g={render:()=>{let[e,t]=(0,u.useState)(`fr-FR`),[n,c]=(0,u.useState)(``),f=p.filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,d.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,d.jsxs)(l,{value:e,onValueChange:t,onInputValueChange:e=>c(e),children:[(0,d.jsx)(i,{placeholder:`Pick a locale...`,showClear:!0}),(0,d.jsx)(a,{children:(0,d.jsxs)(o,{children:[(0,d.jsx)(s,{children:`No matching locales.`}),f.map(e=>(0,d.jsx)(r,{value:e.value,children:e.label},e.value))]})})]}),(0,d.jsxs)(`p`,{className:`text-xs text-muted-foreground`,children:[`Selected: `,e??`(none)`]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Controlled single-select with client-side filtering (the add-picker pattern).`,...g.parameters?.docs?.description}}},_=[`Default`,`WithClear`,`Controlled`]})))()}v();export{g as Controlled,m as Default,h as WithClear,_ as __namedExportsOrder,f as default};