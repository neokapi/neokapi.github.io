import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{t as n}from"./src-DmxoPoJd.js";import{bt as r}from"./lucide-react-z3gdhMhb.js";import{t as i}from"./button-BjQmflmu.js";import{t as a}from"./icons-Cb-8zEbw.js";import{i as o,n as s,r as c,s as l,t as u}from"./atoms-XgHlo1n5.js";import{Mt as d,Nt as f}from"./iframe-DzWW1kjq.js";var p,m,h,g,_,v;e((()=>{n(),a(),f(),l(),p=t(),m={title:`Brand Hub/Shell/BrandHub`,component:d,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{padding:24},children:(0,p.jsx)(e,{})})]},h={args:{title:`Concepts`,description:`The language-neutral units of your brand — each with its terms, status by locale, and direct relations.`,actions:(0,p.jsxs)(i,{size:`sm`,children:[(0,p.jsx)(r,{}),`New concept`]}),children:(0,p.jsx)(`div`,{className:`rounded-lg border p-6 text-sm text-muted-foreground`,children:`Section content.`})}},g={args:{title:`Atoms`,description:`The shared status and relation vocabulary used across the hub.`,children:(0,p.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,p.jsx)(o,{status:`preferred`}),(0,p.jsx)(o,{status:`forbidden`}),(0,p.jsx)(o,{status:`proposed`}),(0,p.jsx)(u,{status:`in_review`}),(0,p.jsx)(u,{status:`merged`}),(0,p.jsx)(c,{type:`REPLACED_BY`}),(0,p.jsx)(c,{type:`COMPETITOR`})]})}},_={args:{title:`Experiments`,children:(0,p.jsx)(s,{title:`No experiments yet`,description:`Start a change-set to propose a governed change.`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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