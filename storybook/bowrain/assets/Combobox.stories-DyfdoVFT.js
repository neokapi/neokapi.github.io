import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{a as n,i as r,n as i,o as a,r as o,t as s}from"./combobox-Dth83Zo_.js";import{t as c}from"./src-Duq-wrIr.js";var l,u,d,f,p,m;e((()=>{c(),l=t(),u={title:`Foundations/Combobox`,tags:[`autodocs`],decorators:[e=>(0,l.jsx)(`div`,{style:{maxWidth:320,padding:16},children:(0,l.jsx)(e,{})})]},d=[{value:`en-US`,label:`English (US)`},{value:`fr-FR`,label:`French (France)`},{value:`de-DE`,label:`German (Germany)`},{value:`ja-JP`,label:`Japanese (Japan)`},{value:`zh-CN`,label:`Chinese (Simplified)`}],f={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(r,{placeholder:`Search locales...`}),(0,l.jsx)(i,{children:(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{children:`No locales found.`}),d.map(e=>(0,l.jsx)(n,{value:e.value,children:e.label},e.value))]})})]})},p={render:()=>(0,l.jsxs)(s,{children:[(0,l.jsx)(r,{placeholder:`Search locales...`,showClear:!0}),(0,l.jsx)(i,{children:(0,l.jsxs)(a,{children:[(0,l.jsx)(o,{children:`No locales found.`}),d.map(e=>(0,l.jsx)(n,{value:e.value,children:e.label},e.value))]})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`WithClear`]}))();export{f as Default,p as WithClear,m as __namedExportsOrder,u as default};