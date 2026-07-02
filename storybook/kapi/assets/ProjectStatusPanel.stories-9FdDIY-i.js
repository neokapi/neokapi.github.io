import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,t as r}from"./ProjectStatusPanel-BTr2k13z.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Project/ProjectStatusPanel`,component:r,parameters:{layout:`padded`},decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:720},children:(0,i.jsx)(e,{})})]},o={projectPath:`/Users/dev/app/translation.kapi`,projectName:`My App Localization`,collections:[{name:`ui`,blockCount:1007,coverage:{fr:987,ja:1007},targetLanguages:[`fr`,`de`,`ja`]},{name:`marketing`,blockCount:42,coverage:{},targetLanguages:[`fr`,`de`]}]},s={project:`My App Localization`,source:{total:42,pct:{authored:100,checked:90,approved:0},gated:!0,shippable:!1,pending:[{state:`checked`,actual:90,required:100}]},locales:[{locale:`nb`,total:42,pct:{draft:100,translated:100,reviewed:80,"signed-off":0},gated:!0,shippable:!0},{locale:`ja`,total:42,pct:{draft:100,translated:55,reviewed:0,"signed-off":0},gated:!0,shippable:!1,pending:[{state:`translated`,actual:55,required:100}]}],review:[{locale:`nb`,file:`src/locales/en.json`,key:`hero.title`,source:`Ship localized content without the toil`},{locale:`ja`,file:`src/locales/en.json`,key:`cta.primary`,source:`Get started`}]},c={args:{tabID:`storybook`,defaultView:`ship`,status:o,report:s}},l={args:{tabID:`storybook`,defaultView:`working`,status:o,report:s}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    defaultView: "ship",
    status: WORKING,
    report: SHIP
  }
}`,...c.parameters?.docs?.source},description:{story:`Opens on the Ship stage (the released-state view); toggle to Working.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    defaultView: "working",
    status: WORKING,
    report: SHIP
  }
}`,...l.parameters?.docs?.source},description:{story:`Opens on the Working stage (block-store coverage, pre-merge).`,...l.parameters?.docs?.description}}},u=[`ShipDefault`,`WorkingDefault`]}))();export{c as ShipDefault,l as WorkingDefault,u as __namedExportsOrder,a as default};