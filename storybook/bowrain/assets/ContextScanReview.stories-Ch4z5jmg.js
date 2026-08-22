import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{dt as n,ft as r}from"./iframe-C62MwgHZ.js";import{n as i,r as a}from"./mock-adapter-BSJ5H78N.js";import{n as o,r as s}from"./decorators-C7CwsbWC.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),o(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Context Scan/ContextScanReview`,component:n,tags:[`autodocs`],decorators:[s,e=>(0,c.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,c.jsx)(e,{})})]},d={args:{draft:a,onApproved:l(),onRegenerate:l()}},f={args:{draft:{...a,truncated:!0},onApproved:l(),onRegenerate:l()}},p={args:{draft:{...a,artefacts:[]},onApproved:l(),onRegenerate:l()}},m={args:{draft:{...a,axes:[{axis:`product_line`,values:[`cloud`,`desktop`],evidence:[`Cloud plans start at…`,`Download the desktop app`],confidence:.84},{axis:`market`,values:[`emea`,`japan`],evidence:[`Prices shown in EUR for EMEA customers`],confidence:.61}]},onApproved:l(),onRegenerate:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    draft: sampleContextScanDraft,
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...d.parameters?.docs?.source},description:{story:`A completed draft with confidence, attribution, terms, and the live tester.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...sampleContextScanDraft,
      truncated: true
    },
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`A truncated corpus notes that the draft rests on a sample.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...sampleContextScanDraft,
      artefacts: []
    },
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`A scan can finish having proposed nothing — an empty or unreadable corpus is
the usual cause. The surface says so rather than rendering an editor full of
blank fields that looks like a loaded draft.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    draft: {
      ...sampleContextScanDraft,
      axes: [{
        axis: "product_line",
        values: ["cloud", "desktop"],
        evidence: ["Cloud plans start at…", "Download the desktop app"],
        confidence: 0.84
      }, {
        axis: "market",
        values: ["emea", "japan"],
        evidence: ["Prices shown in EUR for EMEA customers"],
        confidence: 0.61
      }]
    },
    onApproved: fn(),
    onRegenerate: fn()
  }
}`,...m.parameters?.docs?.source},description:{story:`A corpus that varies. The axes card names the dimensions the scan found and
what it would propose for the recipe; the voice below is what governs at the
point they describe.`,...m.parameters?.docs?.description}}},h=[`CompletedDraft`,`TruncatedCorpus`,`NoVoiceProposed`,`AxesDiscovered`]})))()}g();export{m as AxesDiscovered,d as CompletedDraft,p as NoVoiceProposed,f as TruncatedCorpus,h as __namedExportsOrder,u as default};