import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{r as i,t as a}from"./runtime-CI09VOSa.js";import{L as o,t as s}from"./preview-u7YGOu22.js";import{a as c,c as l,i as u,l as d,o as f,r as p,s as m,u as h}from"./previewFixtures-BfQyVG-C.js";function g({effect:e}){let[t,n]=(0,_.useState)(`source`);return(0,v.jsxs)(`div`,{className:`flex max-w-md flex-col gap-3`,children:[(0,v.jsx)(`button`,{type:`button`,className:`self-start rounded-md border px-3 py-1 text-sm`,onClick:()=>n(e=>e===`source`?`fr-FR`:`source`),children:a(`cNQxP`,`Show ${t===`source`?`target (fr-FR)`:`source`}`,{value:t===`source`?`target (fr-FR)`:`source`})}),(0,v.jsx)(o,{tree:p,side:t,transition:e})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{i(),_=e(n(),1),s(),c(),v=r(),y={title:`Lab/PreviewKit/FormatPreview`,component:o,parameters:{layout:`padded`}},b={render:()=>(0,v.jsx)(o,{tree:d,className:`max-w-md`})},x={render:()=>(0,v.jsx)(o,{tree:h,className:`max-w-lg`})},S={name:`Doc (docx)`,render:()=>(0,v.jsx)(o,{tree:p,className:`max-w-lg`})},C={render:()=>(0,v.jsx)(o,{tree:m,className:`max-w-lg`})},w={name:`Entry list (json)`,render:()=>(0,v.jsx)(o,{tree:f,className:`max-w-lg`})},T={name:`Paged (pdf)`,render:()=>(0,v.jsx)(o,{tree:l,className:`max-w-lg`})},E={name:`Generic fallback (sections)`,render:()=>(0,v.jsx)(o,{tree:u,className:`max-w-lg`})},D={name:`Annotations (overlays)`,render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,v.jsxs)(`div`,{className:`max-w-sm flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`4xgZlx`,`Annotations on`)}),(0,v.jsx)(o,{tree:m,annotations:!0})]}),(0,v.jsxs)(`div`,{className:`max-w-sm flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`3e2WiT`,`Annotations off`)}),(0,v.jsx)(o,{tree:m,annotations:!1})]})]})},O={name:`Source vs target (EN → FR)`,render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,v.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`157Ez9`,`Source`)}),(0,v.jsx)(o,{tree:d,side:`source`})]}),(0,v.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`FlGuU`,`Target · fr-FR`)}),(0,v.jsx)(o,{tree:d,side:`fr-FR`})]})]})},k={name:`Transition · typewriter`,render:()=>(0,v.jsx)(g,{effect:`typewriter`})},A={name:`Transition · crossfade`,render:()=>(0,v.jsx)(g,{effect:`crossfade`})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={pptxTree} className="max-w-md" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={xlsxTree} className="max-w-lg" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Doc (docx)",
  render: () => <FormatPreview tree={docxTree} className="max-w-lg" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={mdTree} className="max-w-lg" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Entry list (json)",
  render: () => <FormatPreview tree={jsonTree} className="max-w-lg" />
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
}`,...A.parameters?.docs?.source}}},j=[`Slides`,`Sheet`,`DocxPage`,`Markdown`,`JsonList`,`PdfPages`,`GenericSections`,`Annotations`,`SourceVsTarget`,`Typewriter`,`Crossfade`]}))();export{D as Annotations,A as Crossfade,S as DocxPage,E as GenericSections,w as JsonList,C as Markdown,T as PdfPages,x as Sheet,b as Slides,O as SourceVsTarget,k as Typewriter,j as __namedExportsOrder,y as default};