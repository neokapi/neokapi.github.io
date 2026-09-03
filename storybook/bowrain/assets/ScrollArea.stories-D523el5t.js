import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{et as n,t as r}from"./src-D3YdtdFw.js";import{r as i,t as a}from"./runtime-DfFF6Hu8.js";import{a as o,i as s}from"./MemoryFacetSidebar-DEzwMy-5.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{i(),r(),c=t(),l={title:`Foundations/ScrollArea`,component:s,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{maxWidth:350,padding:16},children:(0,c.jsx)(e,{})})]},u=[`English (en-US)`,`French (fr-FR)`,`German (de-DE)`,`Spanish (es-ES)`,`Italian (it-IT)`,`Portuguese (pt-BR)`,`Japanese (ja-JP)`,`Korean (ko-KR)`,`Chinese Simplified (zh-CN)`,`Chinese Traditional (zh-TW)`,`Arabic (ar-SA)`,`Russian (ru-RU)`,`Hindi (hi-IN)`,`Turkish (tr-TR)`,`Dutch (nl-NL)`],d={render:()=>(0,c.jsx)(s,{className:`h-48 w-full rounded-md border`,children:(0,c.jsxs)(`div`,{className:`p-4`,children:[(0,c.jsx)(`h4`,{className:`mb-4 text-sm font-medium leading-none`,children:a(`fLuNrGP3kYN`,`Target Locales`)}),u.map(e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{className:`text-sm`,children:e}),(0,c.jsx)(n,{className:`my-2`})]},e))]})})},f={render:()=>(0,c.jsxs)(s,{className:`w-full whitespace-nowrap rounded-md border`,children:[(0,c.jsx)(`div`,{className:`flex w-max space-x-4 p-4`,children:u.map(e=>(0,c.jsx)(`div`,{className:`shrink-0 rounded-md border px-3 py-1.5 text-sm`,children:e},e))}),(0,c.jsx)(o,{orientation:`horizontal`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="h-48 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Target Locales</h4>
        {locales.map(locale => <div key={locale}>
            <div className="text-sm">{locale}</div>
            <Separator className="my-2" />
          </div>)}
      </div>
    </ScrollArea>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {locales.map(locale => <div key={locale} className="shrink-0 rounded-md border px-3 py-1.5 text-sm">
            {locale}
          </div>)}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Horizontal`]})))()}m();export{d as Default,f as Horizontal,p as __namedExportsOrder,l as default};