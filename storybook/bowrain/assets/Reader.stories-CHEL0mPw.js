import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{C as n,E as r,T as i,_ as a,d as o,f as s,l as c,r as l,t as u,u as d,w as f}from"./fixtures-CXEUIaYw.js";var p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),f(),u(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Project screens/Reader`,component:i,tags:[`autodocs`],args:{reader:s,onFix:m(),onFixAll:m(),onBack:m(),backLabel:`Back to the Map`,navigate:m()},parameters:{layout:`fullscreen`,docs:{description:{component:`The Reader: one file's blocks with each finding on the words it is about,
and the rules that hold at the file down the margin. A finding with a fix
carries Fix; the header's button applies every fix in the file.`}}}},g={},_={args:{reader:o}},v={args:{reader:c}},y={args:{reader:d}},b={args:{focusBlockID:`p3`,backLabel:`Back to checks`}},x={mapSummary:async()=>a,readerFile:async()=>s,decideView:async()=>l},S={render:()=>(0,p.jsx)(n,{port:x,path:`docs/billing.md`,navigate:m(),canNavigate:()=>!1})},C=[`FindingsWithFixes`,`FindingsWithoutFixes`,`NoFindings`,`FixRefused`,`AtABlock`,`ReadOnly`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source},description:{story:`Two term rules with a replacement, each with Fix, and a voice rule edited by hand.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    reader: READER_WITHOUT_FIXES
  }
}`,..._.parameters?.docs?.source},description:{story:`A voice rule and a placeholder a translation lost: neither has a fix.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    reader: READER_CLEAN
  }
}`,...v.parameters?.docs?.source},description:{story:`No findings: the file and the rules that hold there.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    reader: READER_REFUSED
  }
}`,...y.parameters?.docs?.source},description:{story:`A fix the change service refused, with its reason under the finding.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    focusBlockID: "p3",
    backLabel: "Back to checks"
  }
}`,...b.parameters?.docs?.source},description:{story:`Opened from a finding on the Checks page, at its block.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ReaderScreen port={READ_ONLY} path="docs/billing.md" navigate={fn()} canNavigate={() => false} />
}`,...S.parameters?.docs?.source},description:{story:`A read-only preview: the findings, and no Fix, through a port with no actions.`,...S.parameters?.docs?.description}}}})))()}w();export{b as AtABlock,g as FindingsWithFixes,_ as FindingsWithoutFixes,y as FixRefused,v as NoFindings,S as ReadOnly,C as __namedExportsOrder,h as default};