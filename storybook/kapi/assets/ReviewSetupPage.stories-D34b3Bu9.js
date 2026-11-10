import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{r as n,t as r}from"./runtime-BFRAZW6z.js";import{t as i}from"./src-BDA8Bzte.js";import{r as a,t as o}from"./ProjectSettingsPage-DJBAEMp3.js";import{t as s}from"./PageHeader-DjNWOT2w.js";import{t as c}from"./page-container-BUmdk4dd.js";function l({project:e,onUpdate:t}){return(0,u.jsxs)(c,{width:`narrow`,"data-slot":`review-setup-page`,children:[(0,u.jsx)(s,{title:r(`gOsTeJNbyu6`,`Review`),subtitle:r(`5OS750IBhzw`,`Add a language to translate into. Translations to review appear here, with content memory and coverage.`)}),(0,u.jsx)(o,{project:e,onUpdate:t,untitled:!0})]})}var u;function d(){return(d=e((()=>{n(),i(),a(),u=t(),l.__docgenInfo={description:`Review's empty state: one line and the languages section.`,methods:[],displayName:`ReviewSetupPage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``}}}})))()}var f,p,m,h,g;function _(){return(_=e((()=>{d(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Pages/ReviewSetupPage`,component:l,tags:[`autodocs`],args:{onUpdate:f()}},m={args:{project:{version:`v1`,name:`Handbook`,defaults:{source_language:`en-US`},collections:[{name:`Handbook`,content:[{path:`docs/**/*.md`}]}]}}},h={args:{project:{version:`v1`,name:`Handbook`,collections:[{name:`Handbook`,content:[{path:`docs/**/*.md`}]}]}}},g=[`SourceOnly`,`NothingSet`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`What Review shows on a project with one language.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`No source language set yet either.`,...h.parameters?.docs?.description}}}})))()}_();export{h as NothingSet,m as SourceOnly,g as __namedExportsOrder,p as default};