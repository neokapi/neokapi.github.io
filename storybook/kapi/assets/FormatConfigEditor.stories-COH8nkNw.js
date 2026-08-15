import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{t as r}from"./src-CFukO0tq.js";import{t as i}from"./card-zMx1EAf9.js";import{i as a,r as o}from"./reference-data-6jPVfJcf.js";import{n as s,t as c}from"./FormatConfigEditor-enhSWMR1.js";function l(e){return p.find(t=>t.$id?.toString().includes(e)||t.title?.toLowerCase().includes(e.toLowerCase()))}function u({schema:e,initialValues:t={},title:n}){let[r,i]=(0,d.useState)(t);return(0,f.jsxs)(`div`,{style:{maxWidth:420},children:[(0,f.jsx)(c,{schema:e,values:r,onChange:i,title:n}),(0,f.jsx)(`pre`,{className:`mt-4 rounded bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-40`,children:JSON.stringify(r,null,2)})]})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{d=t(),r(),s(),o(),f=n(),p=a.filters,m={title:`Formats & Tools/Formats/Format Config Editor`,component:u,tags:[`autodocs`],parameters:{layout:`padded`}},h=l(`json`),g=l(`html`),_=l(`xliff`),v=l(`xml-stream`)||l(`xml`),y=l(`properties`)||l(`regex`),b=l(`po`)||l(`gettext`),x=l(`csv`)||l(`table`),S={args:{schema:h||{title:`JSON Filter`,type:`object`,properties:{}},title:`JSON Format Configuration`}},C={args:{schema:g||{title:`HTML Filter`,type:`object`,properties:{}},title:`HTML Format Configuration`}},w={name:`HTML Filter (with values)`,args:{schema:g||{title:`HTML Filter`,type:`object`,properties:{}},title:`HTML Format Configuration`,initialValues:{parser:{assumeWellformed:!0},elements:{meta:{ruleTypes:[`ATTRIBUTES_ONLY`]},script:{ruleTypes:[`EXCLUDE`]}},attributes:{title:{ruleTypes:[`ATTRIBUTE_TRANS`]},alt:{ruleTypes:[`ATTRIBUTE_TRANS`]}}}}},T={args:{schema:_||{title:`XLIFF Filter`,type:`object`,properties:{}},title:`XLIFF Format Configuration`}},E={args:{schema:v||{title:`XML Filter`,type:`object`,properties:{}},title:`XML Format Configuration`}},D={args:{schema:y||{title:`Properties Filter`,type:`object`,properties:{}},title:`Properties Format Configuration`}},O={args:{schema:b||{title:`PO (Gettext) Filter`,type:`object`,properties:{}},title:`PO Format Configuration`}},k={name:`CSV/Table Filter (arrays)`,args:{schema:x||{title:`CSV Filter`,type:`object`,properties:{}},title:`CSV Format Configuration`}},A={name:`All Filters (Catalog)`,render:()=>(0,f.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`1fr 1fr`,gap:16,maxWidth:1e3},children:p.map((e,t)=>(0,f.jsx)(i,{className:`p-4`,children:(0,f.jsx)(u,{schema:e})},t))})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    schema: jsonSchema || {
      title: "JSON Filter",
      type: "object",
      properties: {}
    },
    title: "JSON Format Configuration"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    schema: htmlSchema || {
      title: "HTML Filter",
      type: "object",
      properties: {}
    },
    title: "HTML Format Configuration"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    schema: xliffSchema || {
      title: "XLIFF Filter",
      type: "object",
      properties: {}
    },
    title: "XLIFF Format Configuration"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    schema: xmlSchema || {
      title: "XML Filter",
      type: "object",
      properties: {}
    },
    title: "XML Format Configuration"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    schema: propertiesSchema || {
      title: "Properties Filter",
      type: "object",
      properties: {}
    },
    title: "Properties Format Configuration"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    schema: poSchema || {
      title: "PO (Gettext) Filter",
      type: "object",
      properties: {}
    },
    title: "PO Format Configuration"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "CSV/Table Filter (arrays)",
  args: {
    schema: csvSchema || {
      title: "CSV Filter",
      type: "object",
      properties: {}
    },
    title: "CSV Format Configuration"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`JSONFilter`,`HTMLFilter`,`HTMLFilterWithValues`,`XLIFFFilter`,`XMLFilter`,`PropertiesFilter`,`POFilter`,`CSVFilter`,`FilterCatalog`]})))()}M();export{k as CSVFilter,A as FilterCatalog,C as HTMLFilter,w as HTMLFilterWithValues,S as JSONFilter,O as POFilter,D as PropertiesFilter,T as XLIFFFilter,E as XMLFilter,j as __namedExportsOrder,m as default};