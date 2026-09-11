import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./runtime-WG3sX0mn.js";import{t as o}from"./preview-BNG3kR3O.js";import{t as s}from"./FormatPreview-D7c-j5wc.js";import{a as c,c as l,i as u,l as d,o as f,r as p,s as m,u as h}from"./previewFixtures-DoV2jYtf.js";function g({effect:e}){let[t,n]=(0,_.useState)(`source`);return(0,v.jsxs)(`div`,{className:`flex max-w-md flex-col gap-3`,children:[(0,v.jsx)(`button`,{type:`button`,className:`self-start rounded-md border px-3 py-1 text-sm`,onClick:()=>n(e=>e===`source`?`fr-FR`:`source`),children:r(`eirSCFbOIpZ`,`Show {value}`,{},{value:t===`source`?a(`f8KNprzOrVu`,`target (fr-FR)`):a(`5x9rKtROkbT`,`source`)})}),(0,v.jsx)(s,{tree:p,side:t,transition:e})]})}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{i(),_=t(),o(),c(),v=n(),y={title:`Lab/PreviewKit/FormatPreview`,component:s,parameters:{layout:`padded`}},b={render:()=>(0,v.jsx)(s,{tree:d,className:`max-w-md`})},x={render:()=>(0,v.jsx)(s,{tree:h,className:`max-w-lg`})},S={name:`Doc (docx)`,render:()=>(0,v.jsx)(s,{tree:p,className:`max-w-lg`})},C={render:()=>(0,v.jsx)(s,{tree:m,className:`max-w-lg`})},w={name:`Keyed table (json)`,render:()=>(0,v.jsx)(s,{tree:f,className:`max-w-lg`})},T={name:`Entry list (json, keyed off)`,render:()=>(0,v.jsx)(s,{tree:f,keyed:!1,className:`max-w-lg`})},E={name:`Paged (pdf)`,render:()=>(0,v.jsx)(s,{tree:l,className:`max-w-lg`})},D={name:`Generic fallback (sections)`,render:()=>(0,v.jsx)(s,{tree:u,className:`max-w-lg`})},O={name:`Annotations (overlays)`,render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,v.jsxs)(`div`,{className:`max-w-sm flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`9km8MPShEmY`,`Annotations on`)}),(0,v.jsx)(s,{tree:m,annotations:!0})]}),(0,v.jsxs)(`div`,{className:`max-w-sm flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`luHs2JNRQJc`,`Annotations off`)}),(0,v.jsx)(s,{tree:m,annotations:!1})]})]})},k={name:`Source vs target (EN → FR)`,render:()=>(0,v.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,v.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`aRCOSqSyow2`,`Source`)}),(0,v.jsx)(s,{tree:d,side:`source`})]}),(0,v.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,v.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:a(`8iFrIdX3mrE`,`Target · fr-FR`)}),(0,v.jsx)(s,{tree:d,side:`fr-FR`})]})]})},A={name:`Transition · typewriter`,render:()=>(0,v.jsx)(g,{effect:`typewriter`})},j={name:`Transition · crossfade`,render:()=>(0,v.jsx)(g,{effect:`crossfade`})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={pptxTree} className="max-w-md" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={xlsxTree} className="max-w-lg" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Doc (docx)",
  render: () => <FormatPreview tree={docxTree} className="max-w-lg" />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <FormatPreview tree={mdTree} className="max-w-lg" />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Keyed table (json)",
  render: () => <FormatPreview tree={jsonTree} className="max-w-lg" />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Entry list (json, keyed off)",
  render: () => <FormatPreview tree={jsonTree} keyed={false} className="max-w-lg" />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Paged (pdf)",
  render: () => <FormatPreview tree={pdfTree} className="max-w-lg" />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Generic fallback (sections)",
  render: () => <FormatPreview tree={genericTree} className="max-w-lg" />
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Transition · typewriter",
  render: () => <TransitionDemo effect="typewriter" />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Transition · crossfade",
  render: () => <TransitionDemo effect="crossfade" />
}`,...j.parameters?.docs?.source}}},M=[`Slides`,`Sheet`,`DocxPage`,`Markdown`,`JsonKeys`,`JsonList`,`PdfPages`,`GenericSections`,`Annotations`,`SourceVsTarget`,`Typewriter`,`Crossfade`]})))()}N();export{O as Annotations,j as Crossfade,S as DocxPage,D as GenericSections,w as JsonKeys,T as JsonList,C as Markdown,E as PdfPages,x as Sheet,b as Slides,k as SourceVsTarget,A as Typewriter,M as __namedExportsOrder,y as default};