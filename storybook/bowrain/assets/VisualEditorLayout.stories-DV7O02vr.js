import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{n as r,t as i}from"./VisualEditorLayout-BuxeIPHC.js";import{B as a,F as o,I as s,L as c,M as l,N as u,R as d,j as f,l as p,w as m}from"./fixtures-DcZqyC8K.js";import{n as h,r as g,t as _}from"./decorators-BWq_GiCA.js";function v(e){let t=e.blocks??u,[n,r]=(0,b.useState)(e.selectedIndex??0),[a,o]=(0,b.useState)(null),s=(0,b.useCallback)(e=>{r(e),o(null)},[]),l=(0,b.useCallback)(()=>{o(n)},[n]),d=(0,b.useCallback)(()=>{o(null),r(e=>Math.min(e+1,t.length-1))},[t.length]),f=(0,b.useCallback)(()=>{o(null)},[]);return(0,x.jsx)(i,{project:e.project??c,fileName:e.fileName??`messages.json`,blocks:t,selectedIndex:n,editingIndex:a,targetLocale:e.targetLocale??`fr-FR`,onNavigate:s,onStartEditing:l,onSave:d,onCancelEditing:f,onApprove:()=>r(e=>Math.min(e+1,t.length-1)),onReject:()=>{},memoryMatches:e.memoryMatches??[],termMatches:e.termMatches??[],onApplyMemory:e.onApplyMemory??(()=>{}),onInsertTerm:e.onInsertTerm??(()=>{}),presenceSlot:e.presenceSlot,qaIssues:e.qaIssues,fileQAResults:e.fileQAResults,qaLoading:e.qaLoading,onRunFileQA:e.onRunFileQA,history:e.history,onRevertHistory:e.onRevertHistory,notes:e.notes,onAddNote:e.onAddNote,onDeleteNote:e.onDeleteNote,onTermCreate:e.onTermCreate})}function y(){let e=m,[t,n]=(0,b.useState)(0),[r,a]=(0,b.useState)(null);return(0,x.jsx)(i,{project:c,fileName:`getting-started.md`,blocks:e,selectedIndex:t,editingIndex:r,targetLocale:`fr-FR`,onNavigate:(0,b.useCallback)(e=>{n(e),a(null)},[]),onStartEditing:(0,b.useCallback)(()=>{a(t)},[t]),onSave:(0,b.useCallback)(()=>{a(null),n(t=>Math.min(t+1,e.length-1))},[e.length]),onCancelEditing:(0,b.useCallback)(()=>{a(null)},[]),onApprove:()=>n(t=>Math.min(t+1,e.length-1)),onReject:()=>{},memoryMatches:[],termMatches:[],onApplyMemory:()=>{},onInsertTerm:()=>{}})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{b=t(),r(),p(),h(),x=n(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Editor/Visual/VisualEditorLayout`,component:i,tags:[`autodocs`],decorators:[g,e=>(0,x.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`auto`},children:(0,x.jsx)(e,{})})],parameters:{layout:`fullscreen`},args:{project:c,fileName:`messages.json`,blocks:u,selectedIndex:0,editingIndex:null,targetLocale:`fr-FR`,onNavigate:S(),onStartEditing:S(),onSave:S(),onCancelEditing:S(),onApprove:S(),onReject:S(),memoryMatches:[],termMatches:[],onApplyMemory:S(),onInsertTerm:S()}},w={render:()=>(0,x.jsx)(v,{})},T={render:()=>(0,x.jsx)(v,{memoryMatches:s})},E={render:()=>(0,x.jsx)(v,{})},D={render:()=>(0,x.jsx)(v,{notes:l,onAddNote:S(),onDeleteNote:S(),onTermCreate:S()})},O={render:()=>(0,x.jsx)(v,{selectedIndex:1,memoryMatches:s,termMatches:a,qaIssues:d,fileQAResults:o,onRunFileQA:S(),history:f,onRevertHistory:S(),notes:l,onAddNote:S(),onDeleteNote:S(),onTermCreate:S(),presenceSlot:(0,x.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,x.jsx)(`div`,{style:{width:24,height:24,borderRadius:`50%`,background:`#6366f1`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:11,fontWeight:600},children:`JD`}),(0,x.jsx)(`div`,{style:{width:24,height:24,borderRadius:`50%`,background:`#f59e0b`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:11,fontWeight:600},children:`MK`})]})})},k={args:{selectedIndex:1}},A={args:{termMatches:a}},j={args:{qaIssues:d,fileQAResults:o,onRunFileQA:S()}},M={args:{history:f,onRevertHistory:S()}},N={render:()=>(0,x.jsx)(v,{})},P={decorators:[_(m),e=>(0,x.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`auto`},children:(0,x.jsx)(e,{})})],render:()=>(0,x.jsx)(y,{})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout />
}`,...w.parameters?.docs?.source},description:{story:`Interactive layout — click blocks in the card list or preview to navigate,
Enter to start editing, Escape to cancel, switch modes via the toolbar.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout memoryMatches={sampleMemoryMatches} />
}`,...T.parameters?.docs?.source},description:{story:`Interactive layout with content-memory matches`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout />
}`,...E.parameters?.docs?.source},description:{story:`Interactive layout — reach review mode from the toolbar`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} />
}`,...D.parameters?.docs?.source},description:{story:`Enrich-mode inputs — notes and term creation; reach the mode from the toolbar`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout selectedIndex={1} memoryMatches={sampleMemoryMatches} termMatches={sampleTermMatches} qaIssues={sampleQAIssues} fileQAResults={sampleFileQAResults} onRunFileQA={fn()} history={sampleBlockHistory} onRevertHistory={fn()} notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} presenceSlot={<div style={{
    display: "flex",
    gap: 4
  }}>
          <div style={{
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "#6366f1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 11,
      fontWeight: 600
    }}>
            JD
          </div>
          <div style={{
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "#f59e0b",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 11,
      fontWeight: 600
    }}>
            MK
          </div>
        </div>} />
}`,...O.parameters?.docs?.source},description:{story:`Interactive layout with all panels: content memory, terms, QA, history, notes,
presence slot. Full editing flow is functional.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    selectedIndex: 1
  }
}`,...k.parameters?.docs?.source},description:{story:`Static snapshot: second block selected`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: sampleTermMatches
  }
}`,...A.parameters?.docs?.source},description:{story:`Static snapshot: term sidebar visible`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    qaIssues: sampleQAIssues,
    fileQAResults: sampleFileQAResults,
    onRunFileQA: fn()
  }
}`,...j.parameters?.docs?.source},description:{story:`Static snapshot: QA issues and file QA results`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    history: sampleBlockHistory,
    onRevertHistory: fn()
  }
}`,...M.parameters?.docs?.source},description:{story:`Static snapshot: block history`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout />
}`,...N.parameters?.docs?.source},description:{story:`Interactive preview modes — target and pseudo are toolbar choices`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(navigationBlocks), Story => <div style={{
    width: "100vw",
    height: "100vh",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  render: () => <NavigationDemo />
}`,...P.parameters?.docs?.source},description:{story:`Interactive navigation story — use keyboard shortcuts to move between blocks:
- **j / ArrowDown** — next block
- **k / ArrowUp** — previous block
- **Enter** — start editing
- **Escape** — cancel editing
- **n / N** — next / previous untranslated block

Click blocks in the preview to jump directly.`,...P.parameters?.docs?.description}}},F=[`Default`,`WithMemoryMatches`,`ReviewMode`,`EnrichMode`,`FullFeatured`,`SecondBlockSelected`,`WithTermSidebar`,`WithQAIssues`,`WithHistory`,`PreviewModes`,`Navigation`]}))();export{w as Default,D as EnrichMode,O as FullFeatured,P as Navigation,N as PreviewModes,E as ReviewMode,k as SecondBlockSelected,M as WithHistory,T as WithMemoryMatches,j as WithQAIssues,A as WithTermSidebar,F as __namedExportsOrder,C as default};