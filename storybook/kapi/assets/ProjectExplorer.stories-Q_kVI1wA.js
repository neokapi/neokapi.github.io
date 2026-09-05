import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{r as n,t as r}from"./runtime-CYuAyXGC.js";import{a as i,c as a,i as o,n as s,r as c,t as l}from"./ProjectExplorer-ClrcPmD0.js";import{i as u,n as d}from"./samples-GSAvOJWW.js";function f({sampleId:e}){let t=u(e);return(0,p.jsxs)(`div`,{style:{maxWidth:640},children:[(0,p.jsx)(`p`,{style:{fontSize:`0.85rem`,opacity:.8},children:r(`6mwe0YzhZN6`,`${t.label} (${t.kind}), targets ${c.join(`, `)}, flows  ${l.map(e=>e.id).join(`, `)}`,{"sample.label":t.label,"sample.kind":t.kind,"TARGETS.join":c.join(`, `),value:` `,value_2:l.map(e=>e.id).join(`, `)})}),(0,p.jsx)(`pre`,{style:{background:`var(--ifm-background-surface-color, #f6f7f9)`,padding:`0.8rem`,borderRadius:8,fontSize:`0.8rem`,overflow:`auto`},children:i(t)})]})}var p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),o(),a(),p=t(),m={title:`Lab/Project Explorer`,component:s,parameters:{layout:`padded`}},h={args:{assets:null,defaultSampleId:`json`}},g={name:`Recipe: JSON catalog`,render:()=>(0,p.jsx)(f,{sampleId:`json`})},_={name:`Recipe: Word document`,render:()=>(0,p.jsx)(f,{sampleId:`docx`})},v={name:`Recipe: every sample`,render:()=>(0,p.jsx)(`div`,{style:{display:`grid`,gap:`1rem`},children:d.map(e=>(0,p.jsx)(f,{sampleId:e.id},e.id))})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    assets: null,
    defaultSampleId: "json"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Recipe: JSON catalog",
  render: () => <RecipePreview sampleId="json" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Recipe: Word document",
  render: () => <RecipePreview sampleId="docx" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Recipe: every sample",
  render: () => <div style={{
    display: "grid",
    gap: "1rem"
  }}>
      {WORKSPACE_SAMPLES.map(w => <RecipePreview key={w.id} sampleId={w.id} />)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Idle`,`RecipeJson`,`RecipeDocx`,`RecipeAll`]})))()}b();export{h as Idle,v as RecipeAll,_ as RecipeDocx,g as RecipeJson,y as __namedExportsOrder,m as default};