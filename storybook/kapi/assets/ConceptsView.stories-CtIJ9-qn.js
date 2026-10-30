import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./ConceptsView-kTVZ_AXi.js";import{i,n as a,r as o}from"./concepts-D4FeY4Nh.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),s=t(),c={title:`Pages/ConceptsView`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The concepts of a local terms store as a list beside a detail pane. The
story drives the same local concept source the desktop uses, over an
in-memory backend, so relating two concepts and removing a relation are live.`}}},args:{handle:`story`,sourceLocale:`en-US`},decorators:[e=>(0,s.jsx)(`div`,{className:`h-[560px] border border-border bg-background`,children:(0,s.jsx)(e,{})})]},l={render:e=>(0,s.jsx)(r,{...e,source:i()})},u={render:e=>(0,s.jsx)(r,{...e,source:i(),defaultSelected:`c1`})},d={...u,globals:{theme:`dark`}},f={render:e=>(0,s.jsx)(r,{...e,source:i(),defaultSelected:`c1`,localeScope:[`de-DE`]})},p={render:e=>(0,s.jsx)(r,{...e,source:i(o(500))})},m={render:e=>(0,s.jsx)(r,{...e,source:i([])})},h=[`Default`,`Selected`,`SelectedDark`,`FilteredLanguages`,`Many`,`Empty`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ConceptsView {...args} source={storyConceptSource()} />
}`,...l.parameters?.docs?.source},description:{story:`A few concepts, nothing selected.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <ConceptsView {...args} source={storyConceptSource()} defaultSelected="c1" />
}`,...u.parameters?.docs?.source},description:{story:`A concept selected, with discouraged forms and a relation.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Selected,
  globals: {
    theme: "dark"
  }
}`,...d.parameters?.docs?.source},description:{story:`The same in the dark theme.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ConceptsView {...args} source={storyConceptSource()} defaultSelected="c1" localeScope={["de-DE"]} />
}`,...f.parameters?.docs?.source},description:{story:`The Active Filter narrows a concept's languages to German.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ConceptsView {...args} source={storyConceptSource(manyConcepts(500))} />
}`,...p.parameters?.docs?.source},description:{story:`Five hundred concepts.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <ConceptsView {...args} source={storyConceptSource([])} />
}`,...m.parameters?.docs?.source},description:{story:`A store with no concepts in it yet.`,...m.parameters?.docs?.description}}}})))()}g();export{l as Default,m as Empty,f as FilteredLanguages,p as Many,u as Selected,d as SelectedDark,h as __namedExportsOrder,c as default};