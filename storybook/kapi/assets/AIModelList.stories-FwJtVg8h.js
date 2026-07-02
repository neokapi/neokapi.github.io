import{i as e}from"./preload-helper-DRGloZ2I.js";import{n as t,t as n}from"./AIModelList-Bt5rAZ0z.js";var r,i,a,o,s,c,l;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/AIModelList`,component:n,tags:[`autodocs`],args:{models:[{model:`llama3.2:3b`,provider:`ollama`,label:`Ollama`,local:!0,installed:!0,needs_key:!1,note:`default · smallest, exact inline-tag fidelity`,is_default:!0},{model:`gemma3:4b`,provider:`ollama`,label:`Ollama`,local:!0,installed:!1,needs_key:!1,note:`best multilingual quality · ~7 GB`,is_default:!1},{model:`claude-sonnet-4-20250514`,provider:`anthropic`,label:`Anthropic`,local:!1,installed:!1,needs_key:!1,is_default:!1},{model:`gpt-4o`,provider:`openai`,label:`OpenAI`,local:!1,installed:!1,needs_key:!0,is_default:!1}],onSelect:r()},parameters:{layout:`padded`}},a={},o={args:{showProvider:!1}},s={args:{selected:{model:`gpt-4o`,provider:`openai`}}},c={args:{models:[]}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source},description:{story:`Flat, model-first list with the provider label per row (the run-time prompt).`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    showProvider: false
  }
}`,...o.parameters?.docs?.source},description:{story:`Grouped variant: the provider badge is hidden (a group header names it).`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    selected: {
      model: "gpt-4o",
      provider: "openai"
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`An explicit selection overrides the default-flagged row.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    models: []
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Grouped`,`Selected`,`Empty`]}))();export{a as Default,c as Empty,o as Grouped,s as Selected,l as __namedExportsOrder,i as default};