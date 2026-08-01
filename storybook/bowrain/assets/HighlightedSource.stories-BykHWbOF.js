import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{r as n,t as r}from"./HighlightedSource-_ClB-BGC.js";import{B as i,l as a,s as o}from"./fixtures-DI7p4YF7.js";var s,c,l,u,d,f,p,m,h;e((()=>{n(),a(),s=t(),c=`localization is key in content memory work and each term matters`,l={title:`Editor/Core/HighlightedSource`,component:r,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:600,padding:16,fontSize:14,lineHeight:1.6},children:(0,s.jsx)(e,{})})]},u={args:{text:c,termMatches:i}},d={args:{text:`The localization process requires careful attention.`,termMatches:[{source_term:`localization`,target_terms:[`localisation`],domain:`i18n`,status:`preferred`,start:4,end:16}]}},f={args:{text:`This sentence has no terminology matches.`,termMatches:[]}},p={args:{text:`internationalization is a complex process.`,termMatches:[o]}},m={args:{text:`Use localization and translation tools.`,termMatches:[{source_term:`localization`,target_terms:[`localisation`],domain:`i18n`,status:`preferred`,start:4,end:16},{source_term:`translation`,target_terms:[`traduction`],domain:`i18n`,status:`approved`,start:21,end:32}]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: sampleText,
    termMatches: sampleTermMatches
  }
}`,...u.parameters?.docs?.source},description:{story:`Multiple term matches highlighted in source text`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: "The localization process requires careful attention.",
    termMatches: [{
      source_term: "localization",
      target_terms: ["localisation"],
      domain: "i18n",
      status: "preferred",
      start: 4,
      end: 16
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:`Single term match`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    text: "This sentence has no terminology matches.",
    termMatches: []
  }
}`,...f.parameters?.docs?.source},description:{story:`No matches — renders plain text`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: "internationalization is a complex process.",
    termMatches: [deprecatedTermMatch]
  }
}`,...p.parameters?.docs?.source},description:{story:`Deprecated term highlighted`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Use localization and translation tools.",
    termMatches: [{
      source_term: "localization",
      target_terms: ["localisation"],
      domain: "i18n",
      status: "preferred",
      start: 4,
      end: 16
    }, {
      source_term: "translation",
      target_terms: ["traduction"],
      domain: "i18n",
      status: "approved",
      start: 21,
      end: 32
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:`Adjacent matches close together`,...m.parameters?.docs?.description}}},h=[`MultipleMatches`,`SingleMatch`,`NoMatches`,`DeprecatedTerm`,`AdjacentMatches`]}))();export{m as AdjacentMatches,p as DeprecatedTerm,u as MultipleMatches,f as NoMatches,d as SingleMatch,h as __namedExportsOrder,l as default};