import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{n as t,r as n}from"./ProjectSettingsPage-BIqmPdoT.js";var r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Pages/ProjectSettingsPage`,component:t,tags:[`autodocs`],args:{onUpdate:r(),installedPlugins:[{name:`okapi`,id:`okapi:1.47.0`,version:`2.20.0`,framework_version:`1.47.0`,description:`Okapi Framework bridge — 57+ format filters for document processing`,type:`format`,formats:[`okf_html`,`okf_xml`,`okf_xliff`,`okf_po`,`okf_properties`]},{name:`custom-filter`,id:`custom-filter:1.0.0`,version:`1.2.0`,description:`Custom XML filter for proprietary format`,type:`format`,formats:[`custom_xml`]}]}},a={args:{project:{version:`v1`,name:`Acme App`,plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`],concurrency:4,parallel_blocks:16,encoding:`UTF-8`,formats:{json:{preset:`i18next`,priority:10},xliff:{preset:`default`,config:{preserveWhitespace:!0}}}}}}},o={args:{project:{version:`v1`,name:`Missing Deps`,plugins:{okapi:{framework_version:`^1.47.0`},"unknown-plugin":{version:`^1.0.0`}},defaults:{source_language:`en-US`,target_languages:[`fr-FR`]}}}},s={args:{project:{version:`v1`,name:`New Project`,defaults:{source_language:`en`}}}},c={args:{installedPlugins:[],project:{version:`v1`,name:`Fresh Install`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]}}}},l={axes:[{axis:`product`,declarable:!1,refusal:`recipe: "product" is derived from a collection's channel, not declared: remove it from the point or set the collection's channel instead`},{axis:`channel`,declarable:!1,refusal:`recipe: "channel" is derived from a collection's channel, not declared: remove it from the point or set the collection's channel instead`},{axis:`brand`,declarable:!0,used:`northsea`},{axis:`mode`,declarable:!0,values:[`tutorial`,`how-to`,`reference`,`explanation`]}],channels:[`campaign/promo`,`support/docs`],profiles:[`campaign`,`support`],voice_profiles:[`northsea`,`northsea-support`],packs:[`technical-docs`,`friendly-dtc`]},u={version:`v1`,name:`Northsea`,defaults:{source_language:`en-US`,target_languages:[`nb-NO`,`de-DE`],coordinates:{brand:`northsea`,mode:`reference`},voice:{profile:`northsea`},flow:`translate`,exclude:[`**/vendor/**`]},flows:{translate:{steps:[]},review:{steps:[]}}},d={name:`Governed (point, voice, default flow)`,args:{project:u,governance:l}},f={name:`Governed (dark)`,globals:{theme:`dark`},args:{project:u,governance:l}},p=[`WithPlugins`,`MissingPlugin`,`Minimal`,`NoPluginsInstalled`,`Governed`,`GovernedDark`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "Acme App",
      plugins: {
        okapi: {
          framework_version: "^1.47.0",
          format_priority: 200
        }
      },
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR", "de-DE"],
        concurrency: 4,
        parallel_blocks: 16,
        encoding: "UTF-8",
        formats: {
          json: {
            preset: "i18next",
            priority: 10
          },
          xliff: {
            preset: "default",
            config: {
              preserveWhitespace: true
            }
          }
        }
      }
    }
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "Missing Deps",
      plugins: {
        okapi: {
          framework_version: "^1.47.0"
        },
        "unknown-plugin": {
          version: "^1.0.0"
        }
      },
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR"]
      }
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "New Project",
      defaults: {
        source_language: "en"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    installedPlugins: [],
    project: {
      version: "v1",
      name: "Fresh Install",
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR"]
      }
    }
  }
}`,...c.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Governed (point, voice, default flow)",
  args: {
    project: governed,
    governance
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Governed (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    project: governed,
    governance
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{d as Governed,f as GovernedDark,s as Minimal,o as MissingPlugin,c as NoPluginsInstalled,a as WithPlugins,p as __namedExportsOrder,i as default};