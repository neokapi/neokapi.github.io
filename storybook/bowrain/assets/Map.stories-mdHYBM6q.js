import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{t as n}from"./src-BGIKTMpd.js";import{r,t as i}from"./runtime-BZw5Iiqg.js";import{A as a,S as o,_ as s,f as c,g as l,h as u,k as d,m as f,r as p,t as m,v as h,w as g,y as _}from"./fixtures-CXEUIaYw.js";import{t as v}from"./button-De4r0ltm.js";var y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),n(),a(),g(),m(),y=t(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Project screens/Map`,component:d,tags:[`autodocs`],args:{projectName:`Fernwell`,summary:s,onRun:b(),navigate:b(),onPreviewFile:b(),addFiles:(0,y.jsx)(v,{size:`sm`,variant:`outline`,children:i(`4d38P50g48h`,`Add files`)})},parameters:{layout:`fullscreen`,docs:{description:{component:`The Map, the page a project opens on: the files, what applies to them, and
four counts. A suggestion's Decide opens Decide on that row; a file's Open
opens the file in the Reader.`}}}},S={},C={args:{summary:_}},w={args:{summary:l}},T={args:{projectName:`Untitled`,summary:u}},E={args:{summary:f}},D={args:{summary:h}},O={args:{running:!0}},k={mapSummary:async()=>s,readerFile:async()=>c,decideView:async()=>p},A={render:()=>(0,y.jsx)(o,{port:k,projectName:`Fernwell`,navigate:b(),canNavigate:e=>e.kind===`reader`})},j=[`SuggestionsPending`,`SuggestionsOnly`,`PartlyRead`,`Empty`,`AllKept`,`NotCheckedYet`,`Checking`,`ReadOnly`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source},description:{story:`An assistant noticed names, words and a way of writing; one disagreement waits.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    summary: MAP_SUGGESTED_ONLY
  }
}`,...C.parameters?.docs?.source},description:{story:`Suggestions and no disagreement: the Decide button carries the count alone.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    summary: MAP_PARTLY_READ
  }
}`,...w.parameters?.docs?.source},description:{story:`kapi read fewer files than the project has, so the line under the title names how many.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    projectName: "Untitled",
    summary: MAP_EMPTY
  }
}`,...T.parameters?.docs?.source},description:{story:`A new project whose collections match no file yet.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    summary: MAP_ALL_KEPT
  }
}`,...E.parameters?.docs?.source},description:{story:`Every suggestion kept: the rules hold and no file has a finding.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    summary: MAP_SOURCE_ONLY_UNCHECKED
  }
}`,...D.parameters?.docs?.source},description:{story:`A source-only project not checked yet.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    running: true
  }
}`,...O.parameters?.docs?.source},description:{story:`A checks run over the whole project in progress.`,...O.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <MapScreen port={READ_ONLY} projectName="Fernwell" navigate={fn()} canNavigate={target => target.kind === "reader"} />
}`,...A.parameters?.docs?.source},description:{story:`A read-only preview: drawn through a port with no actions, opening only the Reader.`,...A.parameters?.docs?.description}}}})))()}M();export{E as AllKept,O as Checking,T as Empty,D as NotCheckedYet,w as PartlyRead,A as ReadOnly,C as SuggestionsOnly,S as SuggestionsPending,j as __namedExportsOrder,x as default};