import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ReachPanel-DLY2qjH5.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i=t(),a={total_blocks:1280,affected_blocks:34,new_violations:12,resolved:7,words:210,projects:null,samples:null},o=(e,t={})=>({...a,affected_blocks:e.annotate.blocks+e.transform.blocks,reach:e,...t}),s={annotate:{blocks:28,words:170,collections:3,projects:2,targets:54,approved:21,locales:[`de`,`fr`,`nb`]},transform:{blocks:6,words:40,collections:1,projects:1,targets:12,approved:9,locales:[`de`,`nb`]},transform_projects:[{project_id:`p-web`,project_name:`Marketing Website`}]},c={title:`Context/Experiments/ReachPanel`,component:r,tags:[`autodocs`],decorators:[(e=>(0,i.jsx)(`div`,{style:{maxWidth:640,padding:24},children:(0,i.jsx)(e,{})}))]},l={args:{impact:o(s)}},u={args:{impact:o({annotate:s.annotate,transform:{blocks:0,words:0,collections:0,projects:0,targets:0,approved:0,locales:[]},transform_projects:[]})}},d={args:{impact:o({annotate:{blocks:2,words:12,collections:1,projects:1,targets:4,approved:0,locales:[`nb`]},transform:{blocks:140,words:2100,collections:6,projects:3,targets:380,approved:290,locales:[`de`,`fr`,`ja`,`nb`]},transform_projects:[{project_id:`p-web`,project_name:`Marketing Website`},{project_id:`p-app`,project_name:`Product App`},{project_id:`p-docs`,project_name:`Docs`}]})}},f={args:{impact:o({annotate:{blocks:9,words:60,collections:2,projects:1,targets:0,approved:0,locales:[]},transform:{blocks:0,words:0,collections:0,projects:0,targets:0,approved:0,locales:[]},transform_projects:[]})}},p={args:{impact:o({annotate:{blocks:28,words:0,collections:0,projects:0,targets:54,approved:21,locales:[]},transform:{blocks:6,words:0,collections:0,projects:1,targets:12,approved:9,locales:[]},transform_projects:[]},{stored:!0,computed_at:`2026-08-14T09:12:00Z`})}},m={args:{impact:a}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    impact: withReach(mostlyAnnotate)
  }
}`,...l.parameters?.docs?.source},description:{story:`The common shape: a draft that mostly re-flags, with a little rewriting in it.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    impact: withReach({
      annotate: mostlyAnnotate.annotate,
      transform: {
        blocks: 0,
        words: 0,
        collections: 0,
        projects: 0,
        targets: 0,
        approved: 0,
        locales: []
      },
      transform_projects: []
    })
  }
}`,...u.parameters?.docs?.source},description:{story:`Nothing prescribes a rewrite: the whole draft is an annotation.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    impact: withReach({
      annotate: {
        blocks: 2,
        words: 12,
        collections: 1,
        projects: 1,
        targets: 4,
        approved: 0,
        locales: ["nb"]
      },
      transform: {
        blocks: 140,
        words: 2100,
        collections: 6,
        projects: 3,
        targets: 380,
        approved: 290,
        locales: ["de", "fr", "ja", "nb"]
      },
      transform_projects: [{
        project_id: "p-web",
        project_name: "Marketing Website"
      }, {
        project_id: "p-app",
        project_name: "Product App"
      }, {
        project_id: "p-docs",
        project_name: "Docs"
      }]
    })
  }
}`,...d.parameters?.docs?.source},description:{story:`Every affected block names a successor — the expensive shape.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    impact: withReach({
      annotate: {
        blocks: 9,
        words: 60,
        collections: 2,
        projects: 1,
        targets: 0,
        approved: 0,
        locales: []
      },
      transform: {
        blocks: 0,
        words: 0,
        collections: 0,
        projects: 0,
        targets: 0,
        approved: 0,
        locales: []
      },
      transform_projects: []
    })
  }
}`,...f.parameters?.docs?.source},description:{story:`Nothing translated yet: the re-check has nothing to pull back.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    impact: withReach({
      annotate: {
        blocks: 28,
        words: 0,
        collections: 0,
        projects: 0,
        targets: 54,
        approved: 21,
        locales: []
      },
      transform: {
        blocks: 6,
        words: 0,
        collections: 0,
        projects: 1,
        targets: 12,
        approved: 9,
        locales: []
      },
      transform_projects: []
    }, {
      stored: true,
      computed_at: "2026-08-14T09:12:00Z"
    })
  }
}`,...p.parameters?.docs?.source},description:{story:`The stored summary: the counts stand, the locale lists were never kept.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    impact: base
  }
}`,...m.parameters?.docs?.source},description:{story:`Nothing affected: the panel renders nothing rather than an empty bar.`,...m.parameters?.docs?.description}}},h=[`Default`,`AnnotateOnly`,`TransformHeavy`,`NothingTranslated`,`FromTheStoredSummary`,`Absent`]})))()}g();export{m as Absent,u as AnnotateOnly,l as Default,p as FromTheStoredSummary,f as NothingTranslated,d as TransformHeavy,h as __namedExportsOrder,c as default};