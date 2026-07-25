import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{ni as n,ti as r}from"./iframe-dL_Pfrgq.js";function i(e){return{id:`b1`,source:`Reset your password`,source_coded:`Reset your password`,source_spans:[],targets:{"fr-FR":{text:`Réinitialisez votre mot de passe`,status:`translated`}},translatable:!0,has_spans:!1,properties:{},entities:[{key:`entity:0`,text:`password`,type:`entity:product`,start:15,end:23,dnt:!1}],...e}}function a(e){return{id:`itm-1::b1::fr-FR`,itemId:`itm-1`,itemName:`auth.json`,locale:`fr-FR`,block:i({}),issues:[],...e}}var o,s,c,l,u,d,f,p;e((()=>{n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>(0,o.jsx)(`div`,{className:`flex h-[560px] flex-col overflow-hidden rounded-lg border border-border bg-background`,children:e()}),l={title:`Review/FocusedReviewer`,component:r,parameters:{layout:`fullscreen`},decorators:[c],args:{sourceLocale:`en-US`,position:{index:3,total:12},localeName:e=>e===`fr-FR`?`French (France)`:e,editing:!1,onApprove:s(),onReject:s(),onEditToggle:s(),onSaveEdit:s(),onCancelEdit:s(),onReCheck:s(),onMarkTerm:s(),onSuggestBrandRule:s(),onMakeRule:s(),onProposeSourceChange:s(),onEntityPromote:s()}},u={args:{entry:a({}),onBrand:{rate:.94,basis:`voice+checks`,onBrandBlocks:47,translatedBlocks:50}}},d={args:{entry:a({issues:[{type:`placeholder`,severity:`error`,message:`Target is missing the {name} placeholder.`},{type:`length`,severity:`warning`,message:`Target is much longer than the source.`}]}),onBrand:{rate:.7,basis:`checks`,onBrandBlocks:35,translatedBlocks:50}}},f={args:{entry:a({}),brandProfileId:`prof-1`,onBrand:{rate:.88,basis:`voice+checks`,onBrandBlocks:44,translatedBlocks:50}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({}),
    onBrand: {
      rate: 0.94,
      basis: "voice+checks",
      onBrandBlocks: 47,
      translatedBlocks: 50
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`A clean block that passes checks and the on-brand bar.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      issues: [{
        type: "placeholder",
        severity: "error",
        message: "Target is missing the {name} placeholder."
      }, {
        type: "length",
        severity: "warning",
        message: "Target is much longer than the source."
      }]
    }),
    onBrand: {
      rate: 0.7,
      basis: "checks",
      onBrandBlocks: 35,
      translatedBlocks: 50
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`A block flagged by failing checks — the reviewer sees why.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({}),
    brandProfileId: "prof-1",
    onBrand: {
      rate: 0.88,
      basis: "voice+checks",
      onBrandBlocks: 44,
      translatedBlocks: 50
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`With a bound brand profile, the source lane + "make a rule" affordance appear.`,...f.parameters?.docs?.description}}},p=[`Clean`,`FailingChecks`,`WithBrandProfile`]}))();export{u as Clean,d as FailingChecks,f as WithBrandProfile,p as __namedExportsOrder,l as default};