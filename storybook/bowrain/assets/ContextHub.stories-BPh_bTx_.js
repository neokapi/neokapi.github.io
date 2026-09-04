import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{t as n}from"./src-CU2NRNPU.js";import{n as r,r as i,t as a}from"./runtime-DfFF6Hu8.js";import{n as o,t as s}from"./plus-Bte7EANv.js";import{t as c}from"./button-BaXxZsjE.js";import{n as l,t as u}from"./ContextHub-ev6N_Ga1.js";import{i as d,n as f,r as p,s as m,t as h}from"./atoms-BP7Lb7az.js";var g,_,v,y,b,x;function S(){return(S=e((()=>{i(),n(),o(),l(),m(),g=t(),_={title:`Context/Shell/ContextHub`,component:u,tags:[`autodocs`],decorators:[e=>(0,g.jsx)(`div`,{style:{padding:24},children:(0,g.jsx)(e,{})})]},v={args:{title:`Concepts`,description:`The language-neutral units of your content — each with its terms, status by locale, and direct relations.`,actions:(0,g.jsx)(c,{size:`sm`,children:r(`ivRuqc8JDR1`,`{=m0} New concept`,{"=m0":(0,g.jsx)(s,{})})}),children:(0,g.jsx)(`div`,{className:`rounded-lg border p-6 text-sm text-muted-foreground`,children:a(`fncSoOgqjoW`,`Section content.`)})}},y={args:{title:`Atoms`,description:`The shared status and relation vocabulary used across the hub.`,children:(0,g.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,g.jsx)(d,{status:`preferred`}),(0,g.jsx)(d,{status:`forbidden`}),(0,g.jsx)(d,{status:`proposed`}),(0,g.jsx)(h,{status:`in_review`}),(0,g.jsx)(h,{status:`merged`}),(0,g.jsx)(p,{type:`REPLACED_BY`}),(0,g.jsx)(p,{type:`COMPETITOR`})]})}},b={args:{title:`Experiments`,children:(0,g.jsx)(f,{title:a(`38F4uAZwfX6`,`No experiments yet`),description:a(`dbmxzgwmi2n`,`Start a change-set to propose a governed change.`)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Concepts",
    description: "The language-neutral units of your content — each with its terms, status by locale, and direct relations.",
    actions: <Button size="sm">
        <Plus />
        New concept
      </Button>,
    children: <div className="rounded-lg border p-6 text-sm text-muted-foreground">Section content.</div>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Experiments",
    children: <EmptyState title="No experiments yet" description="Start a change-set to propose a governed change." />
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithAtoms`,`Empty`]})))()}S();export{v as Default,b as Empty,y as WithAtoms,x as __namedExportsOrder,_ as default};