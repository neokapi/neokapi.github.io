import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{r as n,t as r}from"./runtime-BFRAZW6z.js";import{t as i}from"./src-DhT4jGb3.js";import{r as a,t as o}from"./ProjectSettingsPage-DRqG48cS.js";import{r as s}from"./SectionHeading-B56DcK8L.js";function c({project:e,onUpdate:t}){return(0,l.jsxs)(`div`,{className:`p-6`,"data-slot":`languages-page`,children:[(0,l.jsx)(s,{title:r(`hoU2zJItA1l`,`Languages`),subtitle:r(`kFhUGxvtoJM`,`Add a language to translate into. Review, content memory and coverage appear with the first one.`)}),(0,l.jsx)(`div`,{className:`max-w-2xl`,children:(0,l.jsx)(o,{project:e,onUpdate:t,untitled:!0})})]})}var l;function u(){return(u=e((()=>{n(),i(),a(),l=t(),c.__docgenInfo={description:`A settings-and-setup page: one section, the source and target languages.`,methods:[],displayName:`LanguagesPage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``}}}})))()}var d,f,p,m,h;function g(){return(g=e((()=>{u(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Pages/LanguagesPage`,component:c,tags:[`autodocs`],args:{onUpdate:d()}},p={args:{project:{version:`v1`,name:`Handbook`,defaults:{source_language:`en-US`},collections:[{name:`Handbook`,content:[{path:`docs/**/*.md`}]}]}}},m={args:{project:{version:`v1`,name:`Handbook`,collections:[{name:`Handbook`,content:[{path:`docs/**/*.md`}]}]}}},h=[`SourceOnly`,`NothingSet`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "Handbook",
      defaults: {
        source_language: "en-US"
      },
      collections: [{
        name: "Handbook",
        content: [{
          path: "docs/**/*.md"
        }]
      }]
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`What the rail's Languages + opens on a project with one language.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "Handbook",
      collections: [{
        name: "Handbook",
        content: [{
          path: "docs/**/*.md"
        }]
      }]
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`No source language set yet either.`,...m.parameters?.docs?.description}}}})))()}g();export{m as NothingSet,p as SourceOnly,h as __namedExportsOrder,f as default};