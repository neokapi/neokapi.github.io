import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ContextScanAxes-j5tgfOre.js";import{n as i,r as a}from"./mock-adapter-3vkXNnXG.js";import{n as o,r as s}from"./decorators-r42vqNKW.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),o(),i(),c=t(),l={title:`Context Scan/ContextScanAxes`,component:r,tags:[`autodocs`],decorators:[s,e=>(0,c.jsx)(`div`,{style:{maxWidth:720,padding:24},children:(0,c.jsx)(e,{})})]},u={args:{axes:a.axes??[]}},d={args:{axes:[{axis:`market`,values:[`emea`,`japan`],evidence:[`Prices shown in EUR for EMEA customers`],confidence:.61},{axis:`tenant`,values:[`acme`,`globex`],evidence:[`Two distinct company names across the uploaded decks`],confidence:.44}]}},f={args:{axes:[]}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    axes: sampleContextScanDraft.axes ?? []
  }
}`,...u.parameters?.docs?.source},description:{story:`The two shapes an axis approval takes, together.

\`product\` is derived from a collection's \`channel:\`, so approving it is a
claim about one collection and the row asks which. \`audience\` is declared on
the project's default point and inherited by every collection, so naming one
would be a narrower claim than the axis makes — that row has no collection
control at all.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    axes: [{
      axis: "market",
      values: ["emea", "japan"],
      evidence: ["Prices shown in EUR for EMEA customers"],
      confidence: 0.61
    }, {
      axis: "tenant",
      values: ["acme", "globex"],
      evidence: ["Two distinct company names across the uploaded decks"],
      confidence: 0.44
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:`The axis names are the corpus's own. A workspace that governs by market or
tenant gets those, and neither is structural, so both are approved against
the project alone.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    axes: []
  }
}`,...f.parameters?.docs?.source},description:{story:`A uniform corpus proposes no axes. The card renders nothing rather than an
empty state implying the scan failed at something.`,...f.parameters?.docs?.description}}},p=[`BothShapes`,`WorkspaceNamedAxes`,`NoAxes`]})))()}m();export{u as BothShapes,f as NoAxes,d as WorkspaceNamedAxes,p as __namedExportsOrder,l as default};