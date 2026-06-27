import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{D as n,k as r,t as i}from"./preview-mVh0vwEd.js";import{a,n as o}from"./previewFixtures-BfQyVG-C.js";var s,c,l,u,d,f;e((()=>{i(),a(),s=t(),c={title:`Lab/PreviewKit/StructureLayout`,parameters:{layout:`padded`}},l={render:()=>(0,s.jsx)(`div`,{className:`max-w-xl rounded-lg border p-3`,children:(0,s.jsx)(r,{tree:o})})},u={name:`Structure (French target)`,render:()=>(0,s.jsx)(`div`,{className:`max-w-xl rounded-lg border p-3`,children:(0,s.jsx)(r,{tree:o,side:`fr-FR`})})},d={render:()=>(0,s.jsx)(`div`,{className:`rounded-lg border p-3`,children:(0,s.jsx)(n,{tree:o})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl rounded-lg border p-3">
      <StructureView tree={doclangTree} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Structure (French target)",
  render: () => <div className="max-w-xl rounded-lg border p-3">
      <StructureView tree={doclangTree} side="fr-FR" />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="rounded-lg border p-3">
      <LayoutView tree={doclangTree} />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Structure`,`StructureTargetSide`,`Layout`]}))();export{d as Layout,l as Structure,u as StructureTargetSide,f as __namedExportsOrder,c as default};