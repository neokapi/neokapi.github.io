import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{t as i}from"./card-CHo_fh0q.js";import{i as a}from"./iframe-C9fBSwCP.js";import{i as o,r as s}from"./reference-data-CP0hyhxG.js";import{n as c,t as l}from"./FormatConfigEditor-D3Tnn8rE.js";function u(e){return m.find(t=>t.$id?.toString().includes(e)||t.title?.toLowerCase().includes(e.toLowerCase()))}function d({schema:e,initialValues:t={},title:n}){let[r,i]=(0,f.useState)(t);return(0,p.jsxs)(`div`,{style:{maxWidth:420},children:[(0,p.jsx)(l,{schema:e,values:r,onChange:i,title:n}),(0,p.jsx)(`pre`,{className:`mt-4 rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(r,null,2)})]})}var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;t((()=>{f=e(n(),1),a(),c(),s(),p=r(),m=o.filters,h={title:`Formats & Tools/Formats/Format Config Editor`,component:d,tags:[`autodocs`],parameters:{layout:`padded`}},g=u(`json`),_=u(`html`),v=u(`xliff`),y=u(`xml-stream`)||u(`xml`),b=u(`properties`)||u(`regex`),x=u(`po`)||u(`gettext`),S=u(`csv`)||u(`table`),C={args:{schema:g||{title:`JSON Filter`,type:`object`,properties:{}},title:`JSON Format Configuration`}},w={args:{schema:_||{title:`HTML Filter`,type:`object`,properties:{}},title:`HTML Format Configuration`}},T={name:`HTML Filter (with values)`,args:{schema:_||{title:`HTML Filter`,type:`object`,properties:{}},title:`HTML Format Configuration`,initialValues:{parser:{assumeWellformed:!0},elements:{meta:{ruleTypes:[`ATTRIBUTES_ONLY`]},script:{ruleTypes:[`EXCLUDE`]}},attributes:{title:{ruleTypes:[`ATTRIBUTE_TRANS`]},alt:{ruleTypes:[`ATTRIBUTE_TRANS`]}}}}},E={args:{schema:v||{title:`XLIFF Filter`,type:`object`,properties:{}},title:`XLIFF Format Configuration`}},D={args:{schema:y||{title:`XML Filter`,type:`object`,properties:{}},title:`XML Format Configuration`}},O={args:{schema:b||{title:`Properties Filter`,type:`object`,properties:{}},title:`Properties Format Configuration`}},k={args:{schema:x||{title:`PO (Gettext) Filter`,type:`object`,properties:{}},title:`PO Format Configuration`}},A={name:`CSV/Table Filter (arrays)`,args:{schema:S||{title:`CSV Filter`,type:`object`,properties:{}},title:`CSV Format Configuration`}},j={name:`All Filters (Catalog)`,render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16,maxWidth:1e3},children:m.map((e,t)=>(0,p.jsx)(i,{className:`p-4`,children:(0,p.jsx)(d,{schema:e})},t))})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    schema: jsonSchema || {
      title: "JSON Filter",
      type: "object",
      properties: {}
    },
    title: "JSON Format Configuration"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    schema: htmlSchema || {
      title: "HTML Filter",
      type: "object",
      properties: {}
    },
    title: "HTML Format Configuration"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "HTML Filter (with values)",
  args: {
    schema: htmlSchema || {
      title: "HTML Filter",
      type: "object",
      properties: {}
    },
    title: "HTML Format Configuration",
    initialValues: {
      parser: {
        assumeWellformed: true
      },
      elements: {
        meta: {
          ruleTypes: ["ATTRIBUTES_ONLY"]
        },
        script: {
          ruleTypes: ["EXCLUDE"]
        }
      },
      attributes: {
        title: {
          ruleTypes: ["ATTRIBUTE_TRANS"]
        },
        alt: {
          ruleTypes: ["ATTRIBUTE_TRANS"]
        }
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    schema: xliffSchema || {
      title: "XLIFF Filter",
      type: "object",
      properties: {}
    },
    title: "XLIFF Format Configuration"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    schema: xmlSchema || {
      title: "XML Filter",
      type: "object",
      properties: {}
    },
    title: "XML Format Configuration"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    schema: propertiesSchema || {
      title: "Properties Filter",
      type: "object",
      properties: {}
    },
    title: "Properties Format Configuration"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    schema: poSchema || {
      title: "PO (Gettext) Filter",
      type: "object",
      properties: {}
    },
    title: "PO Format Configuration"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "CSV/Table Filter (arrays)",
  args: {
    schema: csvSchema || {
      title: "CSV Filter",
      type: "object",
      properties: {}
    },
    title: "CSV Format Configuration"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "All Filters (Catalog)",
  render: () => {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      maxWidth: 1000
    }}>
        {filterSchemas.map((schema, i) => <Card key={i} className="p-4">
            <FormatConfigWrapper schema={schema} />
          </Card>)}
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M=[`JSONFilter`,`HTMLFilter`,`HTMLFilterWithValues`,`XLIFFFilter`,`XMLFilter`,`PropertiesFilter`,`POFilter`,`CSVFilter`,`FilterCatalog`]}))();export{A as CSVFilter,j as FilterCatalog,w as HTMLFilter,T as HTMLFilterWithValues,C as JSONFilter,k as POFilter,O as PropertiesFilter,E as XLIFFFilter,D as XMLFilter,M as __namedExportsOrder,h as default};