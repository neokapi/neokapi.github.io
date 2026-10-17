import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{r as n,t as r}from"./runtime-CSk461YI.js";import{n as i,t as a}from"./storyEnv-DjFYRx1U.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./PlaceGraphDiagram-Bwua5Qus.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),h(),s(),d(),c(),u(),a(),g=t(),_={title:`Diagrams/Doc examples`,decorators:[i],parameters:{layout:`fullscreen`}},v={name:`Redaction — framework/redaction`,render:()=>(0,g.jsx)(f,{original:`Email Sarah Chen the Project Halcyon launch date.`,redact:[{text:`Sarah Chen`,label:`Person`},`Project Halcyon`],translated:`Envoyez à Sarah Chen la date de lancement de Project Halcyon.`})},y={name:`Content-preparation pass — framework/content-preparation`,render:()=>(0,g.jsx)(l,{channelLabel:``,stages:[{label:`source`,role:`io`},{label:`settle`,sub:`transformers`},{label:`segment`,sub:`sentence overlay`,role:`annotate`},{label:`recognize`,sub:`terms · entities`,role:`annotate`},{label:`check`,sub:`findings`,role:`qa`},{label:`translate`,sub:`Memory · AI · MT`,role:`translate`}]})},b={name:`Segmentation overlay — framework/segmentation`,render:()=>(0,g.jsx)(p,{title:r(`eWL0hFBjrbu`,`segment (overlay only — source runs unchanged)`),items:[{kind:`Block source`,detail:`"Dr. Smith arrived. He was late."`,role:`block`},{kind:`segmentation overlay`,role:`meta`,note:`anchored to run-index ranges`},{kind:`segment`,detail:`[0 … 18] · "Dr. Smith arrived."`,depth:1,role:`layer`},{kind:`segment`,detail:`[19 … 31] · "He was late."`,depth:1,role:`layer`}]})},x={name:`neokapi-i18n round-trip — react/pipeline`,render:()=>(0,g.jsx)(o,{nodes:[{label:`src/App.tsx`,sub:`<h1>Welcome</h1>`},{label:`i18n/ Block`,sub:`hash "aB3" · source + targets`,edge:`neokapi-i18n extract (source only)`,role:`io`,loop:[`kapi translate --target-lang fr`,`then de … (additive, in place)`]},{label:`public/translations/{locale}.json`,sub:`{ "aB3": "Bienvenue" }`,edge:`compile`,role:`translate`},{label:`dist/translations/{locale}/`,sub:`index.json + lazy chunks`,edge:`neokapi-i18n split (optional)`},{label:`Your app renders "Bienvenue"`,edge:`loadTranslations / loadTranslationChunk`,role:`io`}]})},S={name:`Module dependency layering — F-01`,render:()=>(0,g.jsx)(l,{channelLabel:``,caption:r(`dv644luCvkp`,`Each module depends only on those to its left; CI enforces the boundaries.`),stages:[{label:`framework`,sub:`core/ · no platform deps`,role:`io`},{label:`cli`,sub:`shared CLI base`},{lanes:[{label:`kapi`},{label:`kapi-desktop`}],parallelLabel:`depend on framework + cli`}]})},C={name:`Place graph — c-12-places, kapi/places`,render:()=>(0,g.jsx)(m,{chain:[{id:`world`,name:`World`,type:`world`},{id:`europe`,name:`Europe`,type:`region`},{id:`northern-europe`,name:`Northern Europe`,type:`region`},{id:`no`,name:`Norway`,type:`country`},{id:`no-03`,name:`Oslo`,type:`subdivision`},{id:`oslo`,name:`Oslo`,type:`locality`,declared:!0},{id:`grunerlokka`,name:`Grünerløkka`,type:`neighbourhood`,declared:!0}],siblings:{no:[{id:`se`,name:`Sweden`,type:`country`},{id:`dk`,name:`Denmark`,type:`country`},{id:`fi`,name:`Finland`,type:`country`},{id:`is`,name:`Iceland`,type:`country`}],"no-03":[{id:`no-32`,name:`Akershus`,type:`subdivision`}]},madeOf:[{id:`nordics`,name:`Nordics`,type:`territory`,of:[`no`,`se`,`dk`,`fi`,`is`],declared:!0},{id:`greater-oslo`,name:`Greater Oslo`,type:`metro`,of:[`no-03`,`no-32`],declared:!0}]})},w=[`Redaction`,`ContentPreparation`,`Segmentation`,`ReactRoundTrip`,`ModuleDependencies`,`Places`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Redaction — framework/redaction",
  render: () => <RedactionDiagram original="Email Sarah Chen the Project Halcyon launch date." redact={[{
    text: "Sarah Chen",
    label: "Person"
  }, "Project Halcyon"]} translated="Envoyez à Sarah Chen la date de lancement de Project Halcyon." />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    sub: "findings",
    role: "qa"
  }, {
    label: "translate",
    sub: "Memory · AI · MT",
    role: "translate"
  }]} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Module dependency layering — F-01",
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Place graph — c-12-places, kapi/places",
  render: () => <PlaceGraphDiagram chain={[{
    id: "world",
    name: "World",
    type: "world"
  }, {
    id: "europe",
    name: "Europe",
    type: "region"
  }, {
    id: "northern-europe",
    name: "Northern Europe",
    type: "region"
  }, {
    id: "no",
    name: "Norway",
    type: "country"
  }, {
    id: "no-03",
    name: "Oslo",
    type: "subdivision"
  }, {
    id: "oslo",
    name: "Oslo",
    type: "locality",
    declared: true
  }, {
    id: "grunerlokka",
    name: "Grünerløkka",
    type: "neighbourhood",
    declared: true
  }]} siblings={{
    no: [{
      id: "se",
      name: "Sweden",
      type: "country"
    }, {
      id: "dk",
      name: "Denmark",
      type: "country"
    }, {
      id: "fi",
      name: "Finland",
      type: "country"
    }, {
      id: "is",
      name: "Iceland",
      type: "country"
    }],
    "no-03": [{
      id: "no-32",
      name: "Akershus",
      type: "subdivision"
    }]
  }} madeOf={[{
    id: "nordics",
    name: "Nordics",
    type: "territory",
    of: ["no", "se", "dk", "fi", "is"],
    declared: true
  }, {
    id: "greater-oslo",
    name: "Greater Oslo",
    type: "metro",
    of: ["no-03", "no-32"],
    declared: true
  }]} />
}`,...C.parameters?.docs?.source}}}})))()}T();export{y as ContentPreparation,S as ModuleDependencies,C as Places,x as ReactRoundTrip,v as Redaction,b as Segmentation,w as __namedExportsOrder,_ as default};