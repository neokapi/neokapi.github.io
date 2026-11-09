import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{t as n}from"./src-C4H1N19k.js";import{r,t as i}from"./runtime-BZw5Iiqg.js";import{a,f as o,p as s,r as c}from"./screens-JUm3X-pD.js";import{t as l}from"./button-De4r0ltm.js";import{C as u,S as d,_ as f,b as p,c as m,t as h,w as g,x as _,y as v}from"./fixtures-DbP3IMQ9.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{r(),n(),s(),a(),h(),y=t(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Project screens/Map`,component:o,tags:[`autodocs`],args:{projectName:`Fernwell`,summary:d,onRun:b(),navigate:b(),onPreviewFile:b(),addFiles:(0,y.jsx)(l,{size:`sm`,variant:`outline`,children:i(`4d38P50g48h`,`Add files`)})},parameters:{layout:`fullscreen`,docs:{description:{component:`The Map, the page a project opens on: the files, what applies to them, and
four counts. A suggestion's Decide opens Decide on that row; a file's Open
opens the file in the Reader.`}}}},S={},C={args:{summary:g}},w={args:{summary:_}},T={args:{projectName:`Untitled`,summary:p}},E={args:{summary:v}},D={args:{summary:u}},O={args:{running:!0}},k={args:{summary:{...d,steps:[{id:`decide`,done:!1,count:d.awaiting},{id:`check`,done:!0},{id:`fix`,done:!1,count:2},{id:`connect`,done:!0},{id:`share`,done:!1}]},stepsGuideHref:`https://neokapi.github.io/kapi/get-started/first-project`,onDismissSteps:b()}},A={mapSummary:async()=>d,readerFile:async()=>f,decideView:async()=>m},j={render:()=>(0,y.jsx)(c,{port:A,projectName:`Fernwell`,navigate:b(),canNavigate:e=>e.kind===`reader`})},M=[`SuggestionsPending`,`SuggestionsOnly`,`PartlyRead`,`Empty`,`AllKept`,`NotCheckedYet`,`Checking`,`FirstSteps`,`ReadOnly`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source},description:{story:`An assistant suggested names, words and a way of writing; one disagreement waits.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`A checks run over the whole project in progress.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    summary: {
      ...MAP_PENDING,
      steps: [{
        id: "decide",
        done: false,
        count: MAP_PENDING.awaiting
      }, {
        id: "check",
        done: true
      }, {
        id: "fix",
        done: false,
        count: 2
      }, {
        id: "connect",
        done: true
      }, {
        id: "share",
        done: false
      }]
    },
    stepsGuideHref: "https://neokapi.github.io/kapi/get-started/first-project",
    onDismissSteps: fn()
  }
}`,...k.parameters?.docs?.source},description:{story:`A first project: its steps, with what each has left, above the suggestions.`,...k.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <MapScreen port={READ_ONLY} projectName="Fernwell" navigate={fn()} canNavigate={target => target.kind === "reader"} />
}`,...j.parameters?.docs?.source},description:{story:`A read-only preview: drawn through a port with no actions, opening only the Reader.`,...j.parameters?.docs?.description}}}})))()}N();export{E as AllKept,O as Checking,T as Empty,k as FirstSteps,D as NotCheckedYet,w as PartlyRead,j as ReadOnly,C as SuggestionsOnly,S as SuggestionsPending,M as __namedExportsOrder,x as default};