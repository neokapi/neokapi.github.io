import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,t as o}from"./VisualEditorLayout-BeoVlYYb.js";import{I as s,L as c,M as l,N as u,P as d,R as f,T as p,V as m,j as h,u as g}from"./fixtures-CwEJAmTf.js";import{n as _,r as v,t as y}from"./decorators-BPkdRYIY.js";function b(e){let t=e.blocks??u,[n,r]=(0,S.useState)(e.selectedIndex??0),[i,a]=(0,S.useState)(null),s=(0,S.useCallback)(e=>{r(e),a(null)},[]),c=(0,S.useCallback)(()=>{a(n)},[n]),l=(0,S.useCallback)(()=>{a(null),r(e=>Math.min(e+1,t.length-1))},[t.length]),d=(0,S.useCallback)(()=>{a(null)},[]);return(0,C.jsx)(o,{project:e.project??f,fileName:e.fileName??`messages.json`,blocks:t,selectedIndex:n,editingIndex:i,targetLocale:e.targetLocale??`fr-FR`,onNavigate:s,onStartEditing:c,onSave:l,onCancelEditing:d,onApprove:()=>r(e=>Math.min(e+1,t.length-1)),onSignOff:()=>r(e=>Math.min(e+1,t.length-1)),onReject:()=>{},memoryMatches:e.memoryMatches??[],termMatches:e.termMatches??[],onApplyMemory:e.onApplyMemory??(()=>{}),onInsertTerm:e.onInsertTerm??(()=>{}),presenceSlot:e.presenceSlot,checkIssues:e.checkIssues,fileCheckResults:e.fileCheckResults,checksLoading:e.checksLoading,onRunFileCheck:e.onRunFileCheck,history:e.history,onRevertHistory:e.onRevertHistory,notes:e.notes,onAddNote:e.onAddNote,onDeleteNote:e.onDeleteNote,onTermCreate:e.onTermCreate})}function x(){let e=p,[t,n]=(0,S.useState)(0),[r,i]=(0,S.useState)(null),a=(0,S.useCallback)(e=>{n(e),i(null)},[]),s=(0,S.useCallback)(()=>{i(t)},[t]),c=(0,S.useCallback)(()=>{i(null),n(t=>Math.min(t+1,e.length-1))},[e.length]),l=(0,S.useCallback)(()=>{i(null)},[]);return(0,C.jsx)(o,{project:f,fileName:`getting-started.md`,blocks:e,selectedIndex:t,editingIndex:r,targetLocale:`fr-FR`,onNavigate:a,onStartEditing:s,onSave:c,onCancelEditing:l,onApprove:()=>n(t=>Math.min(t+1,e.length-1)),onSignOff:()=>n(t=>Math.min(t+1,e.length-1)),onReject:()=>{},memoryMatches:[],termMatches:[],onApplyMemory:()=>{},onInsertTerm:()=>{}})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{r(),S=t(),a(),g(),_(),C=n(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Editor/Visual/VisualEditorLayout`,component:o,tags:[`autodocs`],decorators:[v,e=>(0,C.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`auto`},children:(0,C.jsx)(e,{})})],parameters:{layout:`fullscreen`},args:{project:f,fileName:`messages.json`,blocks:u,selectedIndex:0,editingIndex:null,targetLocale:`fr-FR`,onNavigate:w(),onStartEditing:w(),onSave:w(),onCancelEditing:w(),onApprove:w(),onSignOff:w(),onReject:w(),memoryMatches:[],termMatches:[],onApplyMemory:w(),onInsertTerm:w()}},E={render:()=>(0,C.jsx)(b,{})},D={render:()=>(0,C.jsx)(b,{memoryMatches:c})},O={render:()=>(0,C.jsx)(b,{})},k={render:()=>(0,C.jsx)(b,{notes:l,onAddNote:w(),onDeleteNote:w(),onTermCreate:w()})},A={render:()=>(0,C.jsx)(b,{selectedIndex:1,memoryMatches:c,termMatches:m,checkIssues:d,fileCheckResults:s,onRunFileCheck:w(),history:h,onRevertHistory:w(),notes:l,onAddNote:w(),onDeleteNote:w(),onTermCreate:w(),presenceSlot:(0,C.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,C.jsx)(`div`,{style:{width:24,height:24,borderRadius:`50%`,background:`#6366f1`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:11,fontWeight:600},children:i(`cwL7aEPy5bG`,`JD`)}),(0,C.jsx)(`div`,{style:{width:24,height:24,borderRadius:`50%`,background:`#f59e0b`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:11,fontWeight:600},children:i(`7GVIjkhNc9s`,`MK`)})]})})},j={args:{selectedIndex:1}},M={args:{termMatches:m}},N={args:{checkIssues:d,fileCheckResults:s,onRunFileCheck:w()}},P={args:{history:h,onRevertHistory:w()}},F={render:()=>(0,C.jsx)(b,{})},I={decorators:[y(p),e=>(0,C.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`auto`},children:(0,C.jsx)(e,{})})],render:()=>(0,C.jsx)(x,{})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout />
}`,...E.parameters?.docs?.source},description:{story:`Interactive layout — click blocks in the card list or preview to navigate,
Enter to start editing, Escape to cancel, switch modes via the toolbar.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout memoryMatches={sampleMemoryMatches} />
}`,...D.parameters?.docs?.source},description:{story:`Interactive layout with content-memory matches`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout />
}`,...O.parameters?.docs?.source},description:{story:`Interactive layout — reach review mode from the toolbar`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} />
}`,...k.parameters?.docs?.source},description:{story:`Enrich-mode inputs — notes and term creation; reach the mode from the toolbar`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout selectedIndex={1} memoryMatches={sampleMemoryMatches} termMatches={sampleTermMatches} checkIssues={sampleCheckIssues} fileCheckResults={sampleFileCheckResults} onRunFileCheck={fn()} history={sampleBlockHistory} onRevertHistory={fn()} notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} presenceSlot={<div style={{
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
}`,...A.parameters?.docs?.source},description:{story:`Interactive layout with all panels: content memory, terms, findings, history, notes,
presence slot. Full editing flow is functional.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    selectedIndex: 1
  }
}`,...j.parameters?.docs?.source},description:{story:`Static snapshot: second block selected`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    termMatches: sampleTermMatches
  }
}`,...M.parameters?.docs?.source},description:{story:`Static snapshot: term sidebar visible`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    checkIssues: sampleCheckIssues,
    fileCheckResults: sampleFileCheckResults,
    onRunFileCheck: fn()
  }
}`,...N.parameters?.docs?.source},description:{story:`Static snapshot: block findings and file findings`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    history: sampleBlockHistory,
    onRevertHistory: fn()
  }
}`,...P.parameters?.docs?.source},description:{story:`Static snapshot: block history`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveLayout />
}`,...F.parameters?.docs?.source},description:{story:`Interactive preview modes — target and pseudo are toolbar choices`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(navigationBlocks), Story => <div style={{
    width: "100vw",
    height: "100vh",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  render: () => <NavigationDemo />
}`,...I.parameters?.docs?.source},description:{story:`Interactive navigation story — use keyboard shortcuts to move between blocks:
- **j / ArrowDown** — next block
- **k / ArrowUp** — previous block
- **Enter** — start editing
- **Escape** — cancel editing
- **n / N** — next / previous untranslated block

Click blocks in the preview to jump directly.`,...I.parameters?.docs?.description}}},L=[`Default`,`WithMemoryMatches`,`ReviewMode`,`EnrichMode`,`FullFeatured`,`SecondBlockSelected`,`WithTermSidebar`,`WithCheckIssues`,`WithHistory`,`PreviewModes`,`Navigation`]})))()}R();export{E as Default,k as EnrichMode,A as FullFeatured,I as Navigation,F as PreviewModes,O as ReviewMode,j as SecondBlockSelected,N as WithCheckIssues,P as WithHistory,D as WithMemoryMatches,M as WithTermSidebar,L as __namedExportsOrder,T as default};