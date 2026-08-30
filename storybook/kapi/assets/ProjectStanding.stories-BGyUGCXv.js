import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./ProjectStanding-CM7HGLVP.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),r={version:`v1`,name:`Northsea`,defaults:{source_language:`en-US`,coordinates:{brand:`northsea`}}},i={projectPath:`/p/northsea/kapi.yaml`,projectName:`Northsea`,hasData:!0,collections:[{name:`Docs`,blockCount:412,coverage:{},targetLanguages:[]},{name:`App`,blockCount:96,coverage:{},targetLanguages:[]}]},a={at:`2026-08-30T09:00:00Z`,points:[{ref:``,label:`project default`,default:!0,coordinates:{brand:`northsea`},collections:[`App`],voice:`Northsea`,voice_field:`defaults.voice`,termstore:`.kapi/terms.json`},{ref:`support/docs`,label:`support/docs`,profile:`support`,channel:`docs`,default:!1,coordinates:{brand:`northsea`,product:`support`,channel:`docs`},collections:[`Docs`],voice:`Northsea Support`,voice_field:`profiles.support.voice`},{ref:`campaign/promo`,label:`campaign/promo`,profile:`campaign`,channel:`promo`,default:!1,coordinates:{brand:`northsea`,product:`campaign`,channel:`promo`},collections:[],voice:`Northsea`,fallback:{profile:`campaign`,expired:!0,boundary:`2026-08-29T00:00:00Z`,message:`profile "campaign" expired 2026-08-29`}}]},o={title:`Pages/Project Standing`,component:n,parameters:{layout:`padded`},args:{tabID:`t1`,project:r,displayName:`Northsea`,status:i}},s={args:{points:a,server:{connected:!0,host:`app.bowrain.cloud`,stream:`main`}}},c={args:{points:{at:a.at,points:[a.points[0]]},server:{connected:!1,stream:`main`}}},l={args:{project:{...r,defaults:{...r.defaults,target_languages:[`nb-NO`,`de-DE`]}},points:a,server:{connected:!1,stream:`main`}}},u={args:{status:{...i,hasData:!1},points:{at:a.at,points:[a.points[0]]},server:{connected:!1,stream:`main`}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    points: manyPoints,
    server: {
      connected: true,
      host: "app.bowrain.cloud",
      stream: "main"
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Several points, one of them governed by a profile whose window closed.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    points: {
      at: manyPoints.at,
      points: [manyPoints.points[0]]
    },
    server: {
      connected: false,
      stream: "main"
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`The common shape: one point, one quiet row, and nothing missing.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      ...project,
      defaults: {
        ...project.defaults,
        target_languages: ["nb-NO", "de-DE"]
      }
    },
    points: manyPoints,
    server: {
      connected: false,
      stream: "main"
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`A project that declares targets gains the languages axis.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      ...status,
      hasData: false
    },
    points: {
      at: manyPoints.at,
      points: [manyPoints.points[0]]
    },
    server: {
      connected: false,
      stream: "main"
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Nothing extracted yet: the counts say so rather than reading as zero.`,...u.parameters?.docs?.description}}},d=[`ManyPoints`,`SinglePoint`,`WithTargetLanguages`,`NotExtracted`]})))()}f();export{s as ManyPoints,u as NotExtracted,c as SinglePoint,l as WithTargetLanguages,d as __namedExportsOrder,o as default};