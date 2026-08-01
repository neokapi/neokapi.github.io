import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{n as r,t as i}from"./VisualEditorCard-CSfvOi-w.js";import{B as a,I as o,L as s,M as c,N as l,R as u,j as d,l as f}from"./fixtures-DI7p4YF7.js";function p(e){let[t,n]=(0,m.useState)(!1),[r,a]=(0,m.useState)(e.editorMode??`translate`);return(0,h.jsx)(i,{block:e.block??_,blockIndex:e.blockIndex??1,totalBlocks:e.totalBlocks??l.length,targetLocale:e.targetLocale??`fr-FR`,editorMode:r,onEditorModeChange:a,isEditing:t,onStartEditing:()=>n(!0),onSave:(e,t)=>n(!1),onCancel:()=>n(!1),onApprove:()=>n(!1),onReject:()=>{},memoryMatches:e.memoryMatches??[],termMatches:e.termMatches??[],onApplyMemory:e.onApplyMemory??(()=>{}),onInsertTerm:e.onInsertTerm??(()=>{}),project:e.project??s,referenceLocales:e.referenceLocales,qaIssues:e.qaIssues,history:e.history,onRevertHistory:e.onRevertHistory,notes:e.notes,onAddNote:e.onAddNote,onDeleteNote:e.onDeleteNote,onTermCreate:e.onTermCreate})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{m=t(),r(),f(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=l[1],v={title:`Editor/Visual/VisualEditorCard`,component:i,tags:[`autodocs`],decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:700,padding:24},children:(0,h.jsx)(e,{})})],args:{block:_,blockIndex:1,totalBlocks:l.length,targetLocale:`fr-FR`,editorMode:`translate`,onEditorModeChange:g(),isEditing:!1,onStartEditing:g(),onSave:g(),onCancel:g(),onApprove:g(),onReject:g(),memoryMatches:[],termMatches:[],onApplyMemory:g(),onInsertTerm:g(),project:s}},y={render:()=>(0,h.jsx)(p,{})},b={render:()=>(0,h.jsx)(p,{memoryMatches:o})},x={render:()=>(0,h.jsx)(p,{editorMode:`enrich`,notes:c,onAddNote:g(),onDeleteNote:g(),onTermCreate:g()})},S={render:()=>(0,h.jsx)(p,{editorMode:`review`,block:l[0],blockIndex:0})},C={render:()=>(0,h.jsx)(p,{block:l[0],blockIndex:0,memoryMatches:o,termMatches:a,qaIssues:u,history:d,onRevertHistory:g(),referenceLocales:[`de-DE`],notes:c,onAddNote:g(),onDeleteNote:g(),onTermCreate:g()})},w={args:{isEditing:!0}},T={args:{qaIssues:u}},E={args:{history:d,onRevertHistory:g()}},D={args:{referenceLocales:[`de-DE`],block:l[0],blockIndex:0}},O={args:{block:l[2],blockIndex:2}},k={args:{block:{...l[0],properties:{"translation-status":`reviewed`}},blockIndex:0}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCard />
}`,...y.parameters?.docs?.source},description:{story:`Interactive card — click the target area to start editing, type text,
press Enter or click Save to confirm, Escape to cancel.
Use the mode switcher to toggle between translate / review / enrich.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCard memoryMatches={sampleMemoryMatches} />
}`,...b.parameters?.docs?.source},description:{story:`Interactive card with content-memory matches panel visible`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCard editorMode="enrich" notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} />
}`,...x.parameters?.docs?.source},description:{story:`Interactive card in enrich mode with notes`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCard editorMode="review" block={sampleBlocks[0]} blockIndex={0} />
}`,...S.parameters?.docs?.source},description:{story:`Interactive card in review mode — approve/reject are functional`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveCard block={sampleBlocks[0]} blockIndex={0} memoryMatches={sampleMemoryMatches} termMatches={sampleTermMatches} qaIssues={sampleQAIssues} history={sampleBlockHistory} onRevertHistory={fn()} referenceLocales={["de-DE"]} notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} />
}`,...C.parameters?.docs?.source},description:{story:`Interactive card with all panels: content memory, QA, history, terms, ref locales.
Full editing flow is functional.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isEditing: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Static snapshot: translate mode with editing active`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    qaIssues: sampleQAIssues
  }
}`,...T.parameters?.docs?.source},description:{story:`Static snapshot: QA issues badge display`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    history: sampleBlockHistory,
    onRevertHistory: fn()
  }
}`,...E.parameters?.docs?.source},description:{story:`Static snapshot: block history entries`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    referenceLocales: ["de-DE"],
    block: sampleBlocks[0],
    // has de-DE target
    blockIndex: 0
  }
}`,...D.parameters?.docs?.source},description:{story:`Static snapshot: reference locales display`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    block: sampleBlocks[2],
    // empty targets
    blockIndex: 2
  }
}`,...O.parameters?.docs?.source},description:{story:`Static snapshot: not-started block (no target text)`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    block: {
      ...sampleBlocks[0],
      properties: {
        "translation-status": "reviewed"
      }
    },
    blockIndex: 0
  }
}`,...k.parameters?.docs?.source},description:{story:`Static snapshot: reviewed block status`,...k.parameters?.docs?.description}}},A=[`Interactive`,`WithMemoryMatches`,`EnrichMode`,`ReviewMode`,`FullFeatured`,`TranslateModeEditing`,`WithQAIssues`,`WithHistory`,`WithReferenceLocales`,`NotStartedBlock`,`ReviewedBlock`]}))();export{x as EnrichMode,C as FullFeatured,y as Interactive,O as NotStartedBlock,S as ReviewMode,k as ReviewedBlock,w as TranslateModeEditing,E as WithHistory,b as WithMemoryMatches,T as WithQAIssues,D as WithReferenceLocales,A as __namedExportsOrder,v as default};