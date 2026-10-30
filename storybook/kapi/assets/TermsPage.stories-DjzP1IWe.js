import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{i as n,n as r,r as i,t as a}from"./concepts-GE03PaIs.js";import{n as o,t as s}from"./TermsPage-BQogO1p_.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{o(),r(),c=t(),l={title:`Pages/TermsPage`,component:s,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`Terms: a store's concepts as a list beside a detail pane, with the search at
the top of the list. With no store open, the named stores are listed one row
each.`}}},decorators:[e=>(0,c.jsx)(`div`,{className:`h-screen bg-background`,children:(0,c.jsx)(e,{})})]},u={render:()=>(0,c.jsx)(s,{store:{name:`Project Terms`,source:n(),count:a.length}})},d={render:()=>(0,c.jsx)(s,{store:{name:`Project Terms`,source:n(),count:a.length,defaultSelected:`c1`}})},f={...d,globals:{theme:`dark`}},p={render:()=>(0,c.jsx)(s,{store:{name:`Project Terms`,source:n(i(1e3)),count:1e3,defaultSelected:`m0`}})},m={render:()=>(0,c.jsx)(s,{store:{name:`Project Terms`,source:n([]),count:0}})},h={render:()=>(0,c.jsx)(s,{resources:[{name:`my-terms`,path:`/stores/terms/my-terms.db`,size:262144,modified:`2026-10-14T10:00:00Z`},{name:`voice-terms`,path:`/stores/terms/voice-terms.db`,size:131072,modified:`2026-10-12T10:00:00Z`}]})},g={...h,globals:{theme:`dark`}},_={render:()=>(0,c.jsx)(s,{resources:[]})},v={render:()=>(0,c.jsx)(s,{resources:[],forceLoading:!0})},y=[`OpenStore`,`ConceptSelected`,`ConceptSelectedDark`,`ManyConcepts`,`EmptyStore`,`WithResources`,`WithResourcesDark`,`Empty`,`Loading`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage store={{
    name: "Project Terms",
    source: storyConceptSource(),
    count: SAMPLE_CONCEPTS.length
  }} />
}`,...u.parameters?.docs?.source},description:{story:`The project's terms, open, with nothing selected yet.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage store={{
    name: "Project Terms",
    source: storyConceptSource(),
    count: SAMPLE_CONCEPTS.length,
    defaultSelected: "c1"
  }} />
}`,...d.parameters?.docs?.source},description:{story:`A concept selected: its terms by language, what it replaces, where it came from.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  ...ConceptSelected,
  globals: {
    theme: "dark"
  }
}`,...f.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage store={{
    name: "Project Terms",
    source: storyConceptSource(manyConcepts(1000)),
    count: 1000,
    defaultSelected: "m0"
  }} />
}`,...p.parameters?.docs?.source},description:{story:`A store of a thousand concepts: the list reads a page at a time.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage store={{
    name: "Project Terms",
    source: storyConceptSource([]),
    count: 0
  }} />
}`,...m.parameters?.docs?.source},description:{story:`An open store with nothing in it yet.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage resources={[{
    name: "my-terms",
    path: "/stores/terms/my-terms.db",
    size: 262144,
    modified: "2026-10-14T10:00:00Z"
  }, {
    name: "voice-terms",
    path: "/stores/terms/voice-terms.db",
    size: 131072,
    modified: "2026-10-12T10:00:00Z"
  }]} />
}`,...h.parameters?.docs?.source},description:{story:`No store open: the named stores, one row each.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...WithResources,
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source},description:{story:`The store list in the dark theme.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage resources={[]} />
}`,..._.parameters?.docs?.source},description:{story:`No named stores to open.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <TermsPage resources={[]} forceLoading />
}`,...v.parameters?.docs?.source},description:{story:`Loading the named stores.`,...v.parameters?.docs?.description}}}})))()}b();export{d as ConceptSelected,f as ConceptSelectedDark,_ as Empty,m as EmptyStore,v as Loading,p as ManyConcepts,u as OpenStore,h as WithResources,g as WithResourcesDark,y as __namedExportsOrder,l as default};