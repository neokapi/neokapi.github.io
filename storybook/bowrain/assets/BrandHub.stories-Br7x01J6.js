import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{t as n}from"./src-Cb0KTPgA.js";import{It as r}from"./lucide-react-BLnsYMs8.js";import{t as i}from"./button-BEDkCUOa.js";import{t as a}from"./icons-DVjjOehy.js";import{n as o,t as s}from"./BrandHub-BBHSf6lm.js";import{i as c,n as l,r as u,s as d,t as f}from"./atoms-sZ-YYChC.js";var p,m,h,g,_,v;e((()=>{n(),a(),o(),d(),p=t(),m={title:`Brand Hub/Shell/BrandHub`,component:s,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{padding:24},children:(0,p.jsx)(e,{})})]},h={args:{title:`Concepts`,description:`The language-neutral units of your brand — each with its terms, status by locale, and direct relations.`,actions:(0,p.jsxs)(i,{size:`sm`,children:[(0,p.jsx)(r,{}),`New concept`]}),children:(0,p.jsx)(`div`,{className:`rounded-lg border p-6 text-sm text-muted-foreground`,children:`Section content.`})}},g={args:{title:`Atoms`,description:`The shared status and relation vocabulary used across the hub.`,children:(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,p.jsx)(c,{status:`preferred`}),(0,p.jsx)(c,{status:`forbidden`}),(0,p.jsx)(c,{status:`proposed`}),(0,p.jsx)(f,{status:`in_review`}),(0,p.jsx)(f,{status:`merged`}),(0,p.jsx)(u,{type:`REPLACED_BY`}),(0,p.jsx)(u,{type:`COMPETITOR`})]})}},_={args:{title:`Experiments`,children:(0,p.jsx)(l,{title:`No experiments yet`,description:`Start a change-set to propose a governed change.`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Concepts",
    description: "The language-neutral units of your brand — each with its terms, status by locale, and direct relations.",
    actions: <Button size="sm">
        <Plus />
        New concept
      </Button>,
    children: <div className="rounded-lg border p-6 text-sm text-muted-foreground">Section content.</div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Atoms",
    description: "The shared status and relation vocabulary used across the hub.",
    children: <div className="flex flex-wrap gap-2">
        <TermStatusBadge status="preferred" />
        <TermStatusBadge status="forbidden" />
        <TermStatusBadge status="proposed" />
        <ChangeSetStatusBadge status="in_review" />
        <ChangeSetStatusBadge status="merged" />
        <RelationBadge type="REPLACED_BY" />
        <RelationBadge type="COMPETITOR" />
      </div>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Experiments",
    children: <EmptyState title="No experiments yet" description="Start a change-set to propose a governed change." />
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithAtoms`,`Empty`]}))();export{h as Default,_ as Empty,g as WithAtoms,v as __namedExportsOrder,m as default};