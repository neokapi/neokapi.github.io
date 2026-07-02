import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,t as r}from"./ConceptList-DQWuUYdG.js";import{n as i,t as a}from"./fixtures-BwoZpGbG.js";var o,s,c,l,u,d,f;e((()=>{n(),a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Concept UI/ConceptList`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onOpen:s()},decorators:[e=>(0,o.jsx)(`div`,{className:`mx-auto max-w-4xl p-6`,children:(0,o.jsx)(e,{})})]},l={args:{source:i()}},u={args:{source:i({rich:!1,editable:!1})}},d={args:{source:i(),initialQuery:{domain:`promotions`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    source: makeMemorySource()
  }
}`,...l.parameters?.docs?.source},description:{story:`Full source: status, domain, source, and market filters all available.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    source: makeMemorySource({
      rich: false,
      editable: false
    })
  }
}`,...u.parameters?.docs?.source},description:{story:`A core-only source (no named markets): the market filter is hidden.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    source: makeMemorySource(),
    initialQuery: {
      domain: "promotions"
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Opened on a starting filter.`,...d.parameters?.docs?.description}}},f=[`Default`,`CoreOnly`,`FilteredToPromotions`]}))();export{u as CoreOnly,l as Default,d as FilteredToPromotions,f as __namedExportsOrder,c as default};