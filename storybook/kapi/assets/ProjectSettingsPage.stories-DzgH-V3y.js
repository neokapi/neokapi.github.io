import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,i as n,n as r,t as i}from"./knownLocales-CSCFPP03.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Pages/ProjectSettingsPage`,component:n,tags:[`autodocs`],decorators:[i],args:{onUpdate:a(),installedPlugins:[{name:`okapi`,id:`okapi:1.47.0`,version:`2.20.0`,framework_version:`1.47.0`,description:`Okapi Framework bridge — 57+ format filters for document processing`,type:`format`,formats:[`okf_html`,`okf_xml`,`okf_xliff`,`okf_po`,`okf_properties`]},{name:`custom-filter`,id:`custom-filter:1.0.0`,version:`1.2.0`,description:`Custom XML filter for proprietary format`,type:`format`,formats:[`custom_xml`]}]}},s={args:{project:{version:`v1`,name:`Acme App`,plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`],concurrency:4,parallel_blocks:16,encoding:`UTF-8`,formats:{json:{preset:`i18next`,priority:10},xliff:{preset:`default`,config:{preserveWhitespace:!0}}}}}}},c={args:{project:{version:`v1`,name:`Missing Deps`,plugins:{okapi:{framework_version:`^1.47.0`},"unknown-plugin":{version:`^1.0.0`}},defaults:{source_language:`en-US`,target_languages:[`fr-FR`]}}}},l={args:{project:{version:`v1`,name:`New Project`,defaults:{source_language:`en`}}}},u={args:{installedPlugins:[],project:{version:`v1`,name:`Fresh Install`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]}}}},d={axes:[{axis:`product`,declarable:!1,refusal:`recipe: "product" is derived from a collection's channel, not declared: remove it from the point or set the collection's channel instead`},{axis:`channel`,declarable:!1,refusal:`recipe: "channel" is derived from a collection's channel, not declared: remove it from the point or set the collection's channel instead`},{axis:`brand`,declarable:!0,used:`northsea`},{axis:`mode`,declarable:!0,values:[`tutorial`,`how-to`,`reference`,`explanation`]}],channels:[`campaign/promo`,`support/docs`],profiles:[`campaign`,`support`],voice_profiles:[`northsea`,`northsea-support`],packs:[`technical-docs`,`friendly-dtc`]},f={version:`v1`,name:`Northsea`,defaults:{source_language:`en-US`,target_languages:[`nb-NO`,`de-DE`],coordinates:{brand:`northsea`,mode:`reference`},voice:{profile:`northsea`},flow:`translate`,exclude:[`**/vendor/**`]},flows:{translate:{steps:[]},review:{steps:[]}}},p={name:`Governed (point, voice, default flow)`,args:{project:f,governance:d}},m={name:`Governed (dark)`,globals:{theme:`dark`},args:{project:f,governance:d}},h=[`WithPlugins`,`MissingPlugin`,`Minimal`,`NoPluginsInstalled`,`Governed`,`GovernedDark`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "New Project",
      defaults: {
        source_language: "en"
      }
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Governed (point, voice, default flow)",
  args: {
    project: governed,
    governance
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Governed (dark)",
  globals: {
    theme: "dark"
  },
  args: {
    project: governed,
    governance
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as Governed,m as GovernedDark,l as Minimal,c as MissingPlugin,u as NoPluginsInstalled,s as WithPlugins,h as __namedExportsOrder,o as default};