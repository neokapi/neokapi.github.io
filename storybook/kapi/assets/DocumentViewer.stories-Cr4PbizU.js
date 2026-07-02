import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{c as n,t as r}from"./preview-DXvZ_iUv.js";import{a as i,l as a,n as o,o as s,r as c}from"./previewFixtures-BfQyVG-C.js";var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),i(),l=t(),u={title:`Lab/PreviewKit/DocumentViewer`,component:n,parameters:{layout:`padded`}},d=new TextEncoder().encode(`PK (a fake docx zip for download)`),f={render:()=>(0,l.jsx)(n,{tree:a,filename:`deck.pptx`,bytes:d,className:`max-w-2xl`})},p={render:()=>(0,l.jsx)(n,{tree:c,filename:`welcome.docx`,bytes:d,className:`max-w-2xl`})},m={name:`Entry list (json)`,render:()=>(0,l.jsx)(n,{tree:s,filename:`messages.json`,className:`max-w-2xl`})},h={name:`Structured (DocLang: + Structure & Layout tabs)`,render:()=>(0,l.jsx)(n,{tree:o,filename:`report.dclg.xml`,className:`max-w-2xl`})},g={name:`Structured · Structure tab first`,render:()=>(0,l.jsx)(n,{tree:o,filename:`report.dclg.xml`,defaultTab:`structure`,className:`max-w-2xl`})},_={name:`Structured · Layout tab first`,render:()=>(0,l.jsx)(n,{tree:o,filename:`report.dclg.xml`,defaultTab:`layout`,className:`max-w-2xl`})},v={name:`No download bytes`,render:()=>(0,l.jsx)(n,{tree:s,filename:`messages.json`,className:`max-w-2xl`})},y={name:`Output-format pills (extraTabs)`,render:()=>(0,l.jsx)(n,{tree:o,filename:`report.dclg.xml`,className:`max-w-2xl`,extraTabs:[{value:`out:markdown`,label:`Markdown`,content:(0,l.jsxs)(`pre`,{className:`rounded-md border bg-muted/30 p-3 text-xs`,children:[`# Report`,`

`,`Body…`]})},{value:`out:json`,label:`JSON`,content:(0,l.jsx)(`pre`,{className:`rounded-md border bg-muted/30 p-3 text-xs`,children:`[ … ]`})}]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DocumentViewer tree={pptxTree} filename="deck.pptx" bytes={docxBytes} className="max-w-2xl" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <DocumentViewer tree={docxTree} filename="welcome.docx" bytes={docxBytes} className="max-w-2xl" />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Entry list (json)",
  render: () => <DocumentViewer tree={jsonTree} filename="messages.json" className="max-w-2xl" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Structured (DocLang: + Structure & Layout tabs)",
  render: () => <DocumentViewer tree={doclangTree} filename="report.dclg.xml" className="max-w-2xl" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Structured · Structure tab first",
  render: () => <DocumentViewer tree={doclangTree} filename="report.dclg.xml" defaultTab="structure" className="max-w-2xl" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Structured · Layout tab first",
  render: () => <DocumentViewer tree={doclangTree} filename="report.dclg.xml" defaultTab="layout" className="max-w-2xl" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "No download bytes",
  render: () => <DocumentViewer tree={jsonTree} filename="messages.json" className="max-w-2xl" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Output-format pills (extraTabs)",
  render: () => <DocumentViewer tree={doclangTree} filename="report.dclg.xml" className="max-w-2xl" extraTabs={[{
    value: "out:markdown",
    label: "Markdown",
    content: <pre className="rounded-md border bg-muted/30 p-3 text-xs"># Report{"\\n\\n"}Body…</pre>
  }, {
    value: "out:json",
    label: "JSON",
    content: <pre className="rounded-md border bg-muted/30 p-3 text-xs">{"[ … ]"}</pre>
  }]} />
}`,...y.parameters?.docs?.source}}},b=[`Slides`,`Document`,`EntryList`,`Structured`,`StructureTab`,`LayoutTab`,`NoBytes`,`OutputFormatPills`]}))();export{p as Document,m as EntryList,_ as LayoutTab,v as NoBytes,y as OutputFormatPills,f as Slides,g as StructureTab,h as Structured,b as __namedExportsOrder,u as default};