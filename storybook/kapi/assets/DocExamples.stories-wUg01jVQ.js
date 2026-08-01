import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{r as n,t as r}from"./runtime-D9E4JuzJ.js";import{n as i,t as a}from"./storyEnv-H22VkQbF.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./RedactionDiagram-DUj61bOY.js";var m,h,g,_,v,y,b,x;e((()=>{n(),s(),u(),c(),l(),a(),m=t(),h={title:`Diagrams/Doc examples`,decorators:[i],parameters:{layout:`fullscreen`}},g={name:`Redaction — framework/redaction`,render:()=>(0,m.jsx)(p,{original:`Email Sarah Chen the Project Halcyon launch date.`,redact:[{text:`Sarah Chen`,label:`Person`},`Project Halcyon`],translated:`Envoyez à Sarah Chen la date de lancement de Project Halcyon.`})},_={name:`Content-preparation pass — framework/content-preparation`,render:()=>(0,m.jsx)(f,{channelLabel:``,stages:[{label:`source`,role:`io`},{label:`settle`,sub:`transformers`},{label:`segment`,sub:`sentence overlay`,role:`annotate`},{label:`recognize`,sub:`terms · entities`,role:`annotate`},{label:`check`,sub:`QA findings`,role:`qa`},{label:`translate`,sub:`Memory · AI · MT`,role:`translate`}]})},v={name:`Segmentation overlay — framework/segmentation`,render:()=>(0,m.jsx)(o,{title:r(`eWL0hFBjrbu`,`segment (overlay only — source runs unchanged)`),items:[{kind:`Block source`,detail:`"Dr. Smith arrived. He was late."`,role:`block`},{kind:`segmentation overlay`,role:`meta`,note:`anchored to run-index ranges`},{kind:`segment`,detail:`[0 … 18] · "Dr. Smith arrived."`,depth:1,role:`layer`},{kind:`segment`,detail:`[19 … 31] · "He was late."`,depth:1,role:`layer`}]})},y={name:`neokapi-i18n round-trip — react/pipeline`,render:()=>(0,m.jsx)(d,{nodes:[{label:`src/App.tsx`,sub:`<h1>Welcome</h1>`},{label:`i18n/ Block`,sub:`hash "aB3" · source + targets`,edge:`neokapi-i18n extract (source only)`,role:`io`,loop:[`kapi translate --target-lang fr`,`then de … (additive, in place)`]},{label:`public/translations/{locale}.json`,sub:`{ "aB3": "Bienvenue" }`,edge:`compile`,role:`translate`},{label:`dist/translations/{locale}/`,sub:`index.json + lazy chunks`,edge:`neokapi-i18n split (optional)`},{label:`Your app renders "Bienvenue"`,edge:`loadTranslations / loadTranslationChunk`,role:`io`}]})},b={name:`Module dependency layering — AD-001`,render:()=>(0,m.jsx)(f,{channelLabel:``,caption:r(`dv644luCvkp`,`Each module depends only on those to its left; CI enforces the boundaries.`),stages:[{label:`framework`,sub:`core/ · no platform deps`,role:`io`},{label:`cli`,sub:`shared CLI base`},{lanes:[{label:`kapi`},{label:`kapi-desktop`}],parallelLabel:`depend on framework + cli`}]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    sub: "Memory · AI · MT",
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
  name: "neokapi-i18n round-trip — react/pipeline",
  render: () => <PhaseFlow nodes={[{
    label: "src/App.tsx",
    sub: "<h1>Welcome</h1>"
  }, {
    label: "i18n/ Block",
    sub: 'hash "aB3" · source + targets',
    edge: "neokapi-i18n extract (source only)",
    role: "io",
    loop: ["kapi translate --target-lang fr", "then de … (additive, in place)"]
  }, {
    label: "public/translations/{locale}.json",
    sub: '{ "aB3": "Bienvenue" }',
    edge: "compile",
    role: "translate"
  }, {
    label: "dist/translations/{locale}/",
    sub: "index.json + lazy chunks",
    edge: "neokapi-i18n split (optional)"
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