import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{k as a,t as o}from"./preview-DsN5Oe1O.js";import{a as s,c,i as l,l as u,o as d,r as f,s as p,u as m}from"./previewFixtures-DoV2jYtf.js";function h({effect:e}){let[t,n]=(0,g.useState)(`source`);return(0,_.jsxs)(`div`,{className:`flex max-w-md flex-col gap-3`,children:[(0,_.jsx)(`button`,{type:`button`,className:`self-start rounded-md border px-3 py-1 text-sm`,onClick:()=>n(e=>e===`source`?`fr-FR`:`source`),children:i(`eirSCFbOIpZ`,`Show ${t===`source`?`target (fr-FR)`:`source`}`,{value:t===`source`?`target (fr-FR)`:`source`})}),(0,_.jsx)(a,{tree:f,side:t,transition:e})]})}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),g=t(),o(),s(),_=n(),v={title:`Lab/PreviewKit/FormatPreview`,component:a,parameters:{layout:`padded`}},y={render:()=>(0,_.jsx)(a,{tree:u,className:`max-w-md`})},b={render:()=>(0,_.jsx)(a,{tree:m,className:`max-w-lg`})},x={name:`Doc (docx)`,render:()=>(0,_.jsx)(a,{tree:f,className:`max-w-lg`})},S={render:()=>(0,_.jsx)(a,{tree:p,className:`max-w-lg`})},C={name:`Keyed table (json)`,render:()=>(0,_.jsx)(a,{tree:d,className:`max-w-lg`})},w={name:`Entry list (json, keyed off)`,render:()=>(0,_.jsx)(a,{tree:d,keyed:!1,className:`max-w-lg`})},T={name:`Paged (pdf)`,render:()=>(0,_.jsx)(a,{tree:c,className:`max-w-lg`})},E={name:`Generic fallback (sections)`,render:()=>(0,_.jsx)(a,{tree:l,className:`max-w-lg`})},D={name:`Annotations (overlays)`,render:()=>(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,_.jsxs)(`div`,{className:`max-w-sm flex-1`,children:[(0,_.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:i(`9km8MPShEmY`,`Annotations on`)}),(0,_.jsx)(a,{tree:p,annotations:!0})]}),(0,_.jsxs)(`div`,{className:`max-w-sm flex-1`,children:[(0,_.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:i(`luHs2JNRQJc`,`Annotations off`)}),(0,_.jsx)(a,{tree:p,annotations:!1})]})]})},O={name:`Source vs target (EN → FR)`,render:()=>(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,_.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,_.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:i(`aRCOSqSyow2`,`Source`)}),(0,_.jsx)(a,{tree:u,side:`source`})]}),(0,_.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,_.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:i(`8iFrIdX3mrE`,`Target · fr-FR`)}),(0,_.jsx)(a,{tree:u,side:`fr-FR`})]})]})},k={name:`Transition · typewriter`,render:()=>(0,_.jsx)(h,{effect:`typewriter`})},A={name:`Transition · crossfade`,render:()=>(0,_.jsx)(h,{effect:`crossfade`})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={pptxTree} className="max-w-md" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={xlsxTree} className="max-w-lg" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Doc (docx)",
  render: () => <FormatPreview tree={docxTree} className="max-w-lg" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={mdTree} className="max-w-lg" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Keyed table (json)",
  render: () => <FormatPreview tree={jsonTree} className="max-w-lg" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Entry list (json, keyed off)",
  render: () => <FormatPreview tree={jsonTree} keyed={false} className="max-w-lg" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Paged (pdf)",
  render: () => <FormatPreview tree={pdfTree} className="max-w-lg" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Generic fallback (sections)",
  render: () => <FormatPreview tree={genericTree} className="max-w-lg" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Annotations (overlays)",
  render: () => <div className="flex flex-wrap gap-6">
      <div className="max-w-sm flex-1">
        <p className="mb-2 text-sm font-semibold text-muted-foreground">Annotations on</p>
        <FormatPreview tree={mdTree} annotations />
      </div>
      <div className="max-w-sm flex-1">
        <p className="mb-2 text-sm font-semibold text-muted-foreground">Annotations off</p>
        <FormatPreview tree={mdTree} annotations={false} />
      </div>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Source vs target (EN → FR)",
  render: () => <div className="flex flex-wrap gap-6">
      <div className="max-w-md flex-1">
        <p className="mb-2 text-sm font-semibold text-muted-foreground">Source</p>
        <FormatPreview tree={pptxTree} side="source" />
      </div>
      <div className="max-w-md flex-1">
        <p className="mb-2 text-sm font-semibold text-muted-foreground">Target · fr-FR</p>
        <FormatPreview tree={pptxTree} side="fr-FR" />
      </div>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Transition · typewriter",
  render: () => <TransitionDemo effect="typewriter" />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Transition · crossfade",
  render: () => <TransitionDemo effect="crossfade" />
}`,...A.parameters?.docs?.source}}},j=[`Slides`,`Sheet`,`DocxPage`,`Markdown`,`JsonKeys`,`JsonList`,`PdfPages`,`GenericSections`,`Annotations`,`SourceVsTarget`,`Typewriter`,`Crossfade`]})))()}M();export{D as Annotations,A as Crossfade,x as DocxPage,E as GenericSections,C as JsonKeys,w as JsonList,S as Markdown,T as PdfPages,b as Sheet,y as Slides,O as SourceVsTarget,k as Typewriter,j as __namedExportsOrder,v as default};