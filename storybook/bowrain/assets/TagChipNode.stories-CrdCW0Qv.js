import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{t as n}from"./src-BGIKTMpd.js";import{c as r}from"./CodedTextDisplay-BpvWln6I.js";import{d as i,h as a,n as o,o as s,r as c,u as l,y as u}from"./fixtures-CO3n5xjp.js";var d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),d=t(),f={title:`Editor/Tags/TagChipNode`,component:r,tags:[`autodocs`],decorators:[e=>(0,d.jsx)(`div`,{style:{padding:16},children:(0,d.jsx)(e,{})})],parameters:{docs:{description:{component:"TagChipNode is a Lexical DecoratorNode that renders a TagChipComponent.\nSince Lexical nodes require an editor context, these stories render the\nvisual output directly via TagChipComponent with the `locked` prop that\nTagChipNode passes through its `decorate()` method."}}}},p={args:{spanInfo:c(o),locked:!0}},m={args:{spanInfo:c(u),locked:!1}},h={args:{spanInfo:c(a),locked:!0}},g={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:8,alignItems:`center`},children:[(0,d.jsx)(r,{spanInfo:c(o),locked:!0}),(0,d.jsx)(r,{spanInfo:c(o),locked:!1}),(0,d.jsx)(r,{spanInfo:c(u),locked:!0}),(0,d.jsx)(r,{spanInfo:c(u),locked:!1}),(0,d.jsx)(r,{spanInfo:c(s),locked:!0}),(0,d.jsx)(r,{spanInfo:c(s),locked:!1}),(0,d.jsx)(r,{spanInfo:c(a),locked:!0}),(0,d.jsx)(r,{spanInfo:c(l),locked:!0})]})},_=[`LockedBold`,`UnlockedLink`,`LockedLineBreak`,`AllVariants`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    spanInfo: chip(boldOpen),
    locked: true
  }
}`,...p.parameters?.docs?.source},description:{story:`A locked tag — TagChipNode sets locked=true when the span is non-deletable.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    spanInfo: chip(linkOpen),
    locked: false
  }
}`,...m.parameters?.docs?.source},description:{story:`An unlocked tag — deletable spans render without the dashed border.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    spanInfo: chip(lineBreak),
    locked: true
  }
}`,...h.parameters?.docs?.source},description:{story:`Placeholder tags (self-closing) are always rendered as locked by TagChipNode.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center"
  }}>
      <TagChipComponent spanInfo={chip(boldOpen)} locked />
      <TagChipComponent spanInfo={chip(boldOpen)} locked={false} />
      <TagChipComponent spanInfo={chip(linkOpen)} locked />
      <TagChipComponent spanInfo={chip(linkOpen)} locked={false} />
      <TagChipComponent spanInfo={chip(codeOpen)} locked />
      <TagChipComponent spanInfo={chip(codeOpen)} locked={false} />
      <TagChipComponent spanInfo={chip(lineBreak)} locked />
      <TagChipComponent spanInfo={chip(imgTag)} locked />
    </div>
}`,...g.parameters?.docs?.source},description:{story:`All node variants side by side showing locked vs unlocked rendering.`,...g.parameters?.docs?.description}}}})))()}v();export{g as AllVariants,p as LockedBold,h as LockedLineBreak,m as UnlockedLink,_ as __namedExportsOrder,f as default};