import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{r as n,t as r}from"./runtime-CI09VOSa.js";import{a as i,c as a,i as o,l as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./storyEnv-DNHtk8aN.js";var m,h,g,_,v,y,b,x;e((()=>{n(),p(),a(),l(),o(),f(),m=t(),h={title:`Diagrams/Doc examples`,decorators:[c],parameters:{layout:`fullscreen`}},g={name:`Redaction — framework/redaction`,render:()=>(0,m.jsx)(u,{original:`Email Sarah Chen the Project Halcyon launch date.`,redact:[{text:`Sarah Chen`,label:`Person`},`Project Halcyon`],translated:`Envoyez à Sarah Chen la date de lancement de Project Halcyon.`})},_={name:`Content-preparation pass — framework/content-preparation`,render:()=>(0,m.jsx)(s,{channelLabel:``,stages:[{label:`source`,role:`io`},{label:`settle`,sub:`transformers`},{label:`segment`,sub:`sentence overlay`,role:`annotate`},{label:`recognize`,sub:`terms · entities`,role:`annotate`},{label:`check`,sub:`QA findings`,role:`qa`},{label:`translate`,sub:`TM · AI · MT`,role:`translate`}]})},v={name:`Segmentation overlay — framework/segmentation`,render:()=>(0,m.jsx)(d,{title:r(`23LeVG`,`segment (overlay only — source runs unchanged)`),items:[{kind:`Block source`,detail:`"Dr. Smith arrived. He was late."`,role:`block`},{kind:`segmentation overlay`,role:`meta`,note:`anchored to run-index ranges`},{kind:`segment`,detail:`[0 … 18] · "Dr. Smith arrived."`,depth:1,role:`layer`},{kind:`segment`,detail:`[19 … 31] · "He was late."`,depth:1,role:`layer`}]})},y={name:`kapi-react round-trip — react/pipeline`,render:()=>(0,m.jsx)(i,{nodes:[{label:`src/App.tsx`,sub:`<h1>Welcome</h1>`},{label:`i18n/ Block`,sub:`hash "aB3" · source + targets`,edge:`kapi-react extract (source only)`,role:`io`,loop:[`kapi ai-translate --target-lang fr`,`then de … (additive, in place)`]},{label:`public/translations/{locale}.json`,sub:`{ "aB3": "Bienvenue" }`,edge:`compile`,role:`translate`},{label:`dist/translations/{locale}/`,sub:`index.json + lazy chunks`,edge:`kapi-react split (optional)`},{label:`Your app renders "Bienvenue"`,edge:`loadTranslations / loadTranslationChunk`,role:`io`}]})},b={name:`Module dependency layering — AD-001`,render:()=>(0,m.jsx)(s,{channelLabel:``,caption:r(`1aI7QV`,`Each module depends only on those to its left; CI enforces the boundaries.`),stages:[{label:`framework`,sub:`core/ · no platform deps`,role:`io`},{label:`cli`,sub:`shared CLI base`},{lanes:[{label:`kapi`},{label:`kapi-desktop`}],parallelLabel:`depend on framework + cli`}]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Redaction — framework/redaction",
  render: () => <RedactionDiagram original="Email Sarah Chen the Project Halcyon launch date." redact={[{
    text: "Sarah Chen",
    label: "Person"
  }, "Project Halcyon"]} translated="Envoyez à Sarah Chen la date de lancement de Project Halcyon." />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Content-preparation pass — framework/content-preparation",
  render: () => <PipelineDiagram channelLabel="" stages={[{
    label: "source",
    role: "io"
  }, {
    label: "settle",
    sub: "transformers"
  }, {
    label: "segment",
    sub: "sentence overlay",
    role: "annotate"
  }, {
    label: "recognize",
    sub: "terms · entities",
    role: "annotate"
  }, {
    label: "check",
    sub: "QA findings",
    role: "qa"
  }, {
    label: "translate",
    sub: "TM · AI · MT",
    role: "translate"
  }]} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Segmentation overlay — framework/segmentation",
  render: () => <StreamDiagram title="segment (overlay only — source runs unchanged)" items={[{
    kind: "Block source",
    detail: '"Dr. Smith arrived. He was late."',
    role: "block"
  }, {
    kind: "segmentation overlay",
    role: "meta",
    note: "anchored to run-index ranges"
  }, {
    kind: "segment",
    detail: '[0 … 18] · "Dr. Smith arrived."',
    depth: 1,
    role: "layer"
  }, {
    kind: "segment",
    detail: '[19 … 31] · "He was late."',
    depth: 1,
    role: "layer"
  }]} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "kapi-react round-trip — react/pipeline",
  render: () => <PhaseFlow nodes={[{
    label: "src/App.tsx",
    sub: "<h1>Welcome</h1>"
  }, {
    label: "i18n/ Block",
    sub: 'hash "aB3" · source + targets',
    edge: "kapi-react extract (source only)",
    role: "io",
    loop: ["kapi ai-translate --target-lang fr", "then de … (additive, in place)"]
  }, {
    label: "public/translations/{locale}.json",
    sub: '{ "aB3": "Bienvenue" }',
    edge: "compile",
    role: "translate"
  }, {
    label: "dist/translations/{locale}/",
    sub: "index.json + lazy chunks",
    edge: "kapi-react split (optional)"
  }, {
    label: 'Your app renders "Bienvenue"',
    edge: "loadTranslations / loadTranslationChunk",
    role: "io"
  }]} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Module dependency layering — AD-001",
  render: () => <PipelineDiagram channelLabel="" caption="Each module depends only on those to its left; CI enforces the boundaries." stages={[{
    label: "framework",
    sub: "core/ · no platform deps",
    role: "io"
  }, {
    label: "cli",
    sub: "shared CLI base"
  }, {
    lanes: [{
      label: "kapi"
    }, {
      label: "kapi-desktop"
    }],
    parallelLabel: "depend on framework + cli"
  }]} />
}`,...b.parameters?.docs?.source}}},x=[`Redaction`,`ContentPreparation`,`Segmentation`,`ReactRoundTrip`,`ModuleDependencies`]}))();export{_ as ContentPreparation,b as ModuleDependencies,y as ReactRoundTrip,g as Redaction,v as Segmentation,x as __namedExportsOrder,h as default};