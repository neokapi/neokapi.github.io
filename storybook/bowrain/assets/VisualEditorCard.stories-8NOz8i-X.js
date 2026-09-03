import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./VisualEditorCard-ResT7rk7.js";import{L as a,M as o,N as s,P as c,R as l,V as u,j as d,u as f}from"./fixtures-CwEJAmTf.js";function p(e){let[t,n]=(0,m.useState)(!1),[r,a]=(0,m.useState)(e.editorMode??`translate`),o=e.block??_;return(0,h.jsx)(i,{block:o,blockIndex:e.blockIndex??1,totalBlocks:e.totalBlocks??s.length,targetLocale:e.targetLocale??`fr-FR`,editorMode:r,onEditorModeChange:a,isEditing:t,onStartEditing:()=>n(!0),onSave:()=>n(!1),onCancel:()=>n(!1),onApprove:()=>n(!1),onSignOff:()=>n(!1),onReject:()=>{},memoryMatches:e.memoryMatches??[],termMatches:e.termMatches??[],onApplyMemory:e.onApplyMemory??(()=>{}),onInsertTerm:e.onInsertTerm??(()=>{}),project:e.project??l,referenceLocales:e.referenceLocales,checkIssues:e.checkIssues,history:e.history,onRevertHistory:e.onRevertHistory,notes:e.notes,onAddNote:e.onAddNote,onDeleteNote:e.onDeleteNote,onTermCreate:e.onTermCreate})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{m=t(),r(),f(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=s[1],v={title:`Editor/Visual/VisualEditorCard`,component:i,tags:[`autodocs`],decorators:[e=>(0,h.jsx)(`div`,{style:{maxWidth:700,padding:24},children:(0,h.jsx)(e,{})})],args:{block:_,blockIndex:1,totalBlocks:s.length,targetLocale:`fr-FR`,editorMode:`translate`,onEditorModeChange:g(),isEditing:!1,onStartEditing:g(),onSave:g(),onCancel:g(),onApprove:g(),onSignOff:g(),onReject:g(),memoryMatches:[],termMatches:[],onApplyMemory:g(),onInsertTerm:g(),project:l}},y={render:()=>(0,h.jsx)(p,{})},b={render:()=>(0,h.jsx)(p,{memoryMatches:a})},x={render:()=>(0,h.jsx)(p,{editorMode:`enrich`,notes:o,onAddNote:g(),onDeleteNote:g(),onTermCreate:g()})},S={render:()=>(0,h.jsx)(p,{editorMode:`review`,block:s[0],blockIndex:0})},C={render:()=>(0,h.jsx)(p,{block:s[0],blockIndex:0,memoryMatches:a,termMatches:u,checkIssues:c,history:d,onRevertHistory:g(),referenceLocales:[`de-DE`],notes:o,onAddNote:g(),onDeleteNote:g(),onTermCreate:g()})},w={args:{isEditing:!0}},T={args:{checkIssues:c}},E={args:{history:d,onRevertHistory:g()}},D={args:{referenceLocales:[`de-DE`],block:s[0],blockIndex:0}},O={args:{block:s[2],blockIndex:2}},k={args:{block:{...s[0],properties:{"translation-status":`reviewed`}},blockIndex:0}},A={render:()=>(0,h.jsx)(`div`,{className:`space-y-4`,children:[`not-started`,`draft`,`translated`,`reviewed`,`signed-off`].map((e,t)=>(0,h.jsx)(i,{block:{...s[0],id:`blk-${e}`,properties:{},targets:e===`not-started`?{"fr-FR":{text:``,status:``}}:{"fr-FR":{text:`Bienvenue sur Neokapi`,status:e}}},blockIndex:t,totalBlocks:5,targetLocale:`fr-FR`,editorMode:`translate`,onEditorModeChange:g(),isEditing:!1,onStartEditing:g(),onSave:g(),onCancel:g(),onApprove:g(),onSignOff:g(),onReject:g(),memoryMatches:[],termMatches:[],onApplyMemory:g(),onInsertTerm:g(),project:l},e))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  render: () => <InteractiveCard block={sampleBlocks[0]} blockIndex={0} memoryMatches={sampleMemoryMatches} termMatches={sampleTermMatches} checkIssues={sampleCheckIssues} history={sampleBlockHistory} onRevertHistory={fn()} referenceLocales={["de-DE"]} notes={sampleBlockNotes} onAddNote={fn()} onDeleteNote={fn()} onTermCreate={fn()} />
}`,...C.parameters?.docs?.source},description:{story:`Interactive card with all panels: content memory, findings, history, terms, ref locales.
Full editing flow is functional.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isEditing: true
  }
}`,...w.parameters?.docs?.source},description:{story:`Static snapshot: translate mode with editing active`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    checkIssues: sampleCheckIssues
  }
}`,...T.parameters?.docs?.source},description:{story:`Static snapshot: finding badge display`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Static snapshot: reviewed block status`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(["not-started", "draft", "translated", "reviewed", "signed-off"] as const).map((status, i) => <VisualEditorCard key={status} block={{
      ...sampleBlocks[0],
      id: \`blk-\${status}\`,
      properties: {},
      targets: status === "not-started" ? {
        "fr-FR": {
          text: "",
          status: ""
        }
      } : {
        "fr-FR": {
          text: "Bienvenue sur Neokapi",
          status
        }
      }
    }} blockIndex={i} totalBlocks={5} targetLocale="fr-FR" editorMode="translate" onEditorModeChange={fn()} isEditing={false} onStartEditing={fn()} onSave={fn()} onCancel={fn()} onApprove={fn()} onSignOff={fn()} onReject={fn()} memoryMatches={[]} termMatches={[]} onApplyMemory={fn()} onInsertTerm={fn()} project={sampleProject} />)}
    </div>
}`,...A.parameters?.docs?.source},description:{story:"One card per rung of the shared content ladder, badged by `StatusBadge`\nrather than by a colour map of the platform's own. `signed-off` reaches a\nbadge here because the card reads the wire `Target.Status` the payload\ncarries; the bucket the server counts by collapses it into `reviewed`.",...A.parameters?.docs?.description}}},j=[`Interactive`,`WithMemoryMatches`,`EnrichMode`,`ReviewMode`,`FullFeatured`,`TranslateModeEditing`,`WithCheckIssues`,`WithHistory`,`WithReferenceLocales`,`NotStartedBlock`,`ReviewedBlock`,`StatusLadder`]})))()}M();export{x as EnrichMode,C as FullFeatured,y as Interactive,O as NotStartedBlock,S as ReviewMode,k as ReviewedBlock,A as StatusLadder,w as TranslateModeEditing,T as WithCheckIssues,E as WithHistory,b as WithMemoryMatches,D as WithReferenceLocales,j as __namedExportsOrder,v as default};