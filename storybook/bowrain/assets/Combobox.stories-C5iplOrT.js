import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{t as n}from"./src-BlZQ6Dao.js";import{r,t as i}from"./runtime-DQa1Xtyr.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./combobox-dY5PcJb4.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{r(),n(),d=t(),f={title:`Foundations/Combobox`,tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,d.jsx)(e,{})})]},p=[{value:`en-US`,label:`English (US)`},{value:`fr-FR`,label:`French (France)`},{value:`de-DE`,label:`German (Germany)`},{value:`ja-JP`,label:`Japanese (Japan)`},{value:`zh-CN`,label:`Chinese (Simplified)`}],m={render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(o,{placeholder:i(`baZaXFRT6I4`,`Search locales...`)}),(0,d.jsx)(s,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)(l,{children:i(`korYG0mE3Sx`,`No locales found.`)}),p.map(e=>(0,d.jsx)(a,{value:e.value,children:e.label},e.value))]})})]})},h={render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(o,{placeholder:i(`baZaXFRT6I4`,`Search locales...`),showClear:!0}),(0,d.jsx)(s,{children:(0,d.jsxs)(c,{children:[(0,d.jsx)(l,{children:i(`korYG0mE3Sx`,`No locales found.`)}),p.map(e=>(0,d.jsx)(a,{value:e.value,children:e.label},e.value))]})})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithClear`]})))()}_();export{m as Default,h as WithClear,g as __namedExportsOrder,f as default};