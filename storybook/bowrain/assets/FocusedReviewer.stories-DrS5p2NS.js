import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{n,t as r}from"./FocusedReviewer-SLvPwiZr.js";function i(e){return{id:`b1`,source:`Reset your password`,source_coded:`Reset your password`,source_spans:[],targets:{"fr-FR":{text:`Réinitialisez votre mot de passe`,status:`translated`}},translatable:!0,has_spans:!1,properties:{},entities:[{key:`entity:0`,text:`password`,type:`entity:product`,start:11,end:19,dnt:!1}],...e}}function a(e){return{id:`itm-1::b1::fr-FR`,itemId:`itm-1`,itemName:`auth.json`,collectionId:``,termCompliance:``,locale:`fr-FR`,block:i({}),issues:[],...e}}var o,s,c,l,u,d,f,p,m,h;e((()=>{n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=e=>(0,o.jsx)(`div`,{className:`flex h-[560px] flex-col overflow-hidden rounded-lg border border-border bg-background`,children:e()}),l={title:`Review/FocusedReviewer`,component:r,parameters:{layout:`fullscreen`},decorators:[c],args:{sourceLocale:`en-US`,position:{index:3,total:12},localeName:e=>e===`fr-FR`?`French (France)`:e,editing:!1,onApprove:s(),onReject:s(),onEditToggle:s(),onSaveEdit:s(),onCancelEdit:s(),onReCheck:s(),onMarkTerm:s(),onSuggestBrandRule:s(),onMakeRule:s(),onProposeSourceChange:s(),onEntityPromote:s()}},u={args:{entry:a({termCompliance:`compliant`,voiceScore:94,voiceBar:80}),onBrand:{rate:.94,basis:`voice+checks`,onBrandBlocks:47,translatedBlocks:50}}},d={args:{entry:a({termCompliance:`violation`,voiceScore:91,voiceBar:80}),onBrand:{rate:.81,basis:`voice+checks+terms`,onBrandBlocks:40,translatedBlocks:50}}},f={args:{entry:a({termCompliance:`compliant`,voiceScore:62,voiceBar:90}),onBrand:{rate:.66,basis:`voice+checks+terms`,onBrandBlocks:33,translatedBlocks:50}}},p={args:{entry:a({issues:[{type:`placeholder`,severity:`error`,message:`Target is missing the {name} placeholder.`},{type:`length`,severity:`warning`,message:`Target is much longer than the source.`}]}),onBrand:{rate:.7,basis:`checks`,onBrandBlocks:35,translatedBlocks:50}}},m={args:{entry:a({}),brandProfileId:`prof-1`,onBrand:{rate:.88,basis:`voice+checks`,onBrandBlocks:44,translatedBlocks:50}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "compliant",
      voiceScore: 94,
      voiceBar: 80
    }),
    onBrand: {
      rate: 0.94,
      basis: "voice+checks",
      onBrandBlocks: 47,
      translatedBlocks: 50
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`A block that clears every bar the server applies on approve.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "violation",
      voiceScore: 91,
      voiceBar: 80
    }),
    onBrand: {
      rate: 0.81,
      basis: "voice+checks+terms",
      onBrandBlocks: 40,
      translatedBlocks: 50
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Checks pass, but the target uses a forbidden term — the server refuses it,
and the reviewer sees which bar it missed rather than a green chip.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "compliant",
      voiceScore: 62,
      voiceBar: 90
    }),
    onBrand: {
      rate: 0.66,
      basis: "voice+checks+terms",
      onBrandBlocks: 33,
      translatedBlocks: 50
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Checks and terminology pass; the voice score sits below the profile's bar.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`A block flagged by failing checks — the reviewer sees why.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`With a bound brand profile, the source lane + "make a rule" affordance appear.`,...m.parameters?.docs?.description}}},h=[`Passing`,`TermViolation`,`BelowVoiceBar`,`FailingChecks`,`WithBrandProfile`]}))();export{f as BelowVoiceBar,p as FailingChecks,u as Passing,d as TermViolation,m as WithBrandProfile,h as __namedExportsOrder,l as default};