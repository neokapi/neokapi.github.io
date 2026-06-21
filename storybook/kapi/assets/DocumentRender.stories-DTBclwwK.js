import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{r as n,t as r}from"./runtime-CI09VOSa.js";import{n as i,t as a}from"./preview-CSqt2uUT.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),a(),o=t(),s={title:`Lab/Document Render`,component:i,parameters:{layout:`padded`}},c={kind:`slides`,format:`openxml`,slides:[{name:`ppt/slides/slide1.xml`,title:{id:`p1`,text:`Welcome to Acme`,role:`title`},bullets:[{id:`p2`,text:`Acme makes every quarter count.`,role:`bullet`},{id:`p3`,text:`Sign up for Acme today`,role:`bullet`},{id:`p4`,text:`Talk to the Acme team soon`,role:`bullet`}]}]},l={kind:`slides`,format:`openxml`,slides:[{name:`ppt/slides/slide1.xml`,title:{id:`p1`,text:`Bienvenue chez Acme`,role:`title`},bullets:[{id:`p2`,text:`Acme fait compter chaque trimestre.`,role:`bullet`},{id:`p3`,text:`Inscrivez-vous chez Acme dès aujourd'hui`,role:`bullet`},{id:`p4`,text:`Parlez vite à l'équipe Acme`,role:`bullet`}]}]},u={kind:`sheet`,format:`openxml`,sheet:{name:`xl/worksheets/sheet1.xml`,cols:2,rows:3,cells:[{id:`x1`,col:0,row:0,ref:`A1`,text:`Acme quarterly revenue`},{id:`x2`,col:1,row:0,ref:`B1`,text:`Total revenue`},{id:`x3`,col:0,row:1,ref:`A2`,text:`Acme net profit`},{id:`x4`,col:1,row:1,ref:`B2`,text:`Net profit`},{id:`x5`,col:0,row:2,ref:`A3`,text:`Acme customer count`},{id:`x6`,col:1,row:2,ref:`B3`,text:`Active accounts`}]}},d={kind:`sheet`,format:`openxml`,sheet:{name:`xl/worksheets/sheet1.xml`,cols:2,rows:3,cells:[{id:`x1`,col:0,row:0,ref:`A1`,text:`Chiffre d'affaires trimestriel Acme`},{id:`x2`,col:1,row:0,ref:`B1`,text:`Chiffre d'affaires total`},{id:`x3`,col:0,row:1,ref:`A2`,text:`Bénéfice net Acme`},{id:`x4`,col:1,row:1,ref:`B2`,text:`Bénéfice net`},{id:`x5`,col:0,row:2,ref:`A3`,text:`Nombre de clients Acme`},{id:`x6`,col:1,row:2,ref:`B3`,text:`Comptes actifs`}]}},f={kind:`doc`,format:`markdown`,paragraphs:[{id:`m1`,text:`Welcome to Acme`,role:`heading`},{id:`m2`,text:`Acme helps teams ship faster.`,role:`body`},{id:`m3`,text:`Sign up for Acme today`,role:`bullet`}]},p={kind:`doc`,format:`markdown`,paragraphs:[{id:`m1`,text:`Bienvenue chez Acme`,role:`heading`},{id:`m2`,text:`Acme aide les équipes à livrer plus vite.`,role:`body`},{id:`m3`,text:`Inscrivez-vous chez Acme dès aujourd'hui`,role:`bullet`}]},m={render:()=>(0,o.jsx)(i,{doc:c,className:`max-w-md`})},h={render:()=>(0,o.jsx)(i,{doc:u,className:`max-w-lg`})},g={name:`Document page`,render:()=>(0,o.jsx)(i,{doc:f,className:`max-w-lg`})},_={name:`Before / after (EN → FR)`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,o.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:r(`2zGd7J`,`Source (EN)`)}),(0,o.jsx)(i,{doc:c})]}),(0,o.jsxs)(`div`,{className:`max-w-md flex-1`,children:[(0,o.jsx)(`p`,{className:`mb-2 text-sm font-semibold text-muted-foreground`,children:r(`3ElfrP`,`Result (FR)`)}),(0,o.jsx)(i,{doc:l,before:c})]})]})},v={name:`Sheet before / after`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,o.jsx)(i,{doc:u,className:`max-w-md flex-1`}),(0,o.jsx)(i,{doc:d,before:u,className:`max-w-md flex-1`})]})},y={name:`Doc before / after`,render:()=>(0,o.jsxs)(`div`,{className:`flex flex-wrap gap-6`,children:[(0,o.jsx)(i,{doc:f,className:`max-w-sm flex-1`}),(0,o.jsx)(i,{doc:p,before:f,className:`max-w-sm flex-1`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <DocumentRender doc={slideEN} className="max-w-md" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DocumentRender doc={sheetEN} className="max-w-lg" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Document page",
  render: () => <DocumentRender doc={docEN} className="max-w-lg" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Before / after (EN → FR)",
  render: () => <div className="flex flex-wrap gap-6">
      <div className="max-w-md flex-1">
        <p className="mb-2 text-sm font-semibold text-muted-foreground">Source (EN)</p>
        <DocumentRender doc={slideEN} />
      </div>
      <div className="max-w-md flex-1">
        <p className="mb-2 text-sm font-semibold text-muted-foreground">Result (FR)</p>
        <DocumentRender doc={slideFR} before={slideEN} />
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Sheet before / after",
  render: () => <div className="flex flex-wrap gap-6">
      <DocumentRender doc={sheetEN} className="max-w-md flex-1" />
      <DocumentRender doc={sheetFR} before={sheetEN} className="max-w-md flex-1" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Doc before / after",
  render: () => <div className="flex flex-wrap gap-6">
      <DocumentRender doc={docEN} className="max-w-sm flex-1" />
      <DocumentRender doc={docFR} before={docEN} className="max-w-sm flex-1" />
    </div>
}`,...y.parameters?.docs?.source}}},b=[`Slide`,`Sheet`,`DocPage`,`BeforeAfter`,`SheetBeforeAfter`,`DocBeforeAfter`]}))();export{_ as BeforeAfter,y as DocBeforeAfter,g as DocPage,h as Sheet,v as SheetBeforeAfter,m as Slide,b as __namedExportsOrder,s as default};