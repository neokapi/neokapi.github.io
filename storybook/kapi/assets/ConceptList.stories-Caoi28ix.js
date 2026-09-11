import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./ConceptList-luDdDp7z.js";import{n as i,t as a}from"./fixtures-BoEWd9nV.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Concept UI/ConceptList`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onOpen:s()},decorators:[e=>(0,o.jsx)(`div`,{className:`mx-auto max-w-4xl p-6`,children:(0,o.jsx)(e,{})})]},l={args:{source:i()}},u={args:{source:i({rich:!1,editable:!1})}},d={args:{source:i(),initialQuery:{domain:`promotions`}}},f=[{id:`warehouse`,domain:`fulfilment`,definition:`Where stock sits between arriving and shipping.`,terms:[{text:`مستودع`,locale:`ar`,status:`preferred`},{text:`Lager`,locale:`de-DE`,status:`preferred`},{text:`Warehouse`,locale:`en-US`,status:`preferred`},{text:`Entrepôt`,locale:`fr-FR`,status:`preferred`}]},{id:`escalation`,domain:`support`,definition:`Handing a case to someone with more authority to settle it.`,terms:[{text:`تصعيد`,locale:`ar`,status:`preferred`},{text:`Eskalation`,locale:`de-DE`,status:`preferred`},{text:`Escalation`,locale:`en-US`,status:`preferred`},{text:`Escalade`,locale:`fr-FR`,status:`preferred`}]}],p=()=>({listConcepts:()=>({concepts:f,total:f.length}),getConcept:e=>f.find(t=>t.id===e)??null,getConceptSummary:e=>f.find(t=>t.id===e)??null}),m={args:{source:p(),naming:{sourceLocale:`en-US`}}},h={args:m.args,globals:{theme:`dark`}},g={args:{source:p(),naming:{sourceLocale:`de-DE`}}},_={args:g.args,globals:{theme:`dark`}},v={args:{source:p(),naming:{uiLocale:`fr-FR`}}},y={args:{source:p()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:`Opened on a starting filter.`,...d.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    source: multilingualSource(),
    naming: {
      sourceLocale: "en-US"
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`An English-source workspace: each card is headed by its English term.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: MultilingualEnglishSource.args,
  globals: {
    theme: "dark"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    source: multilingualSource(),
    naming: {
      sourceLocale: "de-DE"
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`A German-source workspace reads the same concepts under their German terms.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: MultilingualGermanSource.args,
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    source: multilingualSource(),
    naming: {
      uiLocale: "fr-FR"
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`No source locale: the viewer's own language names the concepts.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    source: multilingualSource()
  }
}`,...y.parameters?.docs?.source},description:{story:`No hints at all: English, then a fixed order over the terms.`,...y.parameters?.docs?.description}}},b=[`Default`,`CoreOnly`,`FilteredToPromotions`,`MultilingualEnglishSource`,`MultilingualEnglishSourceDark`,`MultilingualGermanSource`,`MultilingualGermanSourceDark`,`MultilingualViewerLocale`,`MultilingualNoHints`]})))()}x();export{u as CoreOnly,l as Default,d as FilteredToPromotions,m as MultilingualEnglishSource,h as MultilingualEnglishSourceDark,g as MultilingualGermanSource,_ as MultilingualGermanSourceDark,y as MultilingualNoHints,v as MultilingualViewerLocale,b as __namedExportsOrder,c as default};