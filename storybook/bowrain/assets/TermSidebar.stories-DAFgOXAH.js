import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./TermSidebar-DKgbc0YD.js";import{V as i,c as a,u as o}from"./fixtures-CwEJAmTf.js";var s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),o(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Editor/Terminology/TermSidebar`,component:r,tags:[`autodocs`],args:{onInsertTerm:c()},decorators:[e=>(0,s.jsx)(`div`,{style:{height:500,display:`flex`,justifyContent:`flex-end`},children:(0,s.jsx)(e,{})})]},u={args:{termMatches:i}},d={args:{termMatches:[]}},f={args:{termMatches:[],loading:!0}},p={args:{termMatches:i,editorMode:`enrich`,onAddTerm:c()}},m={args:{termMatches:[a]}},h={args:{termMatches:[i[0]]}},g={args:{termMatches:[...i,a]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: sampleTermMatches
  }
}`,...u.parameters?.docs?.source},description:{story:`Sidebar with multiple term matches`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: []
  }
}`,...d.parameters?.docs?.source},description:{story:`Empty state — no terminology matches`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: [],
    loading: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Loading state`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: sampleTermMatches,
    editorMode: "enrich",
    onAddTerm: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`Enrich mode — shows add term button`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: [deprecatedTermMatch]
  }
}`,...m.parameters?.docs?.source},description:{story:`Term with no target translations defined`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: [sampleTermMatches[0]]
  }
}`,...h.parameters?.docs?.source},description:{story:`Single match with domain badge`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: [...sampleTermMatches, deprecatedTermMatch]
  }
}`,...g.parameters?.docs?.source},description:{story:`All term statuses displayed`,...g.parameters?.docs?.description}}},_=[`WithMatches`,`Empty`,`Loading`,`EnrichMode`,`NoTargetTerms`,`SingleMatch`,`AllStatuses`]})))()}v();export{g as AllStatuses,d as Empty,p as EnrichMode,f as Loading,m as NoTargetTerms,h as SingleMatch,u as WithMatches,_ as __namedExportsOrder,l as default};