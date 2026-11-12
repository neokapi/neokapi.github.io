import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{r as n,t as r}from"./runtime-BFRAZW6z.js";import{t as i}from"./src-DdetKLFD.js";import{a,n as o,r as s,t as c}from"./knownLocales-ChV2cvjK.js";import{t as l}from"./PageHeader-BHl7aQcT.js";import{t as u}from"./page-container-BUmdk4dd.js";function d({project:e,onUpdate:t}){return(0,f.jsxs)(u,{width:`narrow`,"data-slot":`review-setup-page`,children:[(0,f.jsx)(l,{help:`languages`,title:r(`gOsTeJNbyu6`,`Review`),subtitle:r(`5OS750IBhzw`,`Add a language to translate into. Translations to review appear here, with content memory and coverage.`)}),(0,f.jsx)(s,{project:e,onUpdate:t,untitled:!0})]})}var f;function p(){return(p=e((()=>{n(),i(),a(),f=t(),d.__docgenInfo={description:`Review's empty state: one line and the languages section.`,methods:[],displayName:`ReviewSetupPage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``}}}})))()}var m,h,g,_,v;function y(){return(y=e((()=>{p(),o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Pages/ReviewSetupPage`,component:d,tags:[`autodocs`],decorators:[c],args:{onUpdate:m()}},g={args:{project:{version:`v1`,name:`Handbook`,defaults:{source_language:`en-US`},collections:[{name:`Handbook`,content:[{path:`docs/**/*.md`}]}]}}},_={args:{project:{version:`v1`,name:`Handbook`,collections:[{name:`Handbook`,content:[{path:`docs/**/*.md`}]}]}}},v=[`SourceOnly`,`NothingSet`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`What Review shows on a project with one language.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`No source language set yet either.`,..._.parameters?.docs?.description}}}})))()}y();export{_ as NothingSet,g as SourceOnly,v as __namedExportsOrder,h as default};