import{i as e}from"./preload-helper-DRGloZ2I.js";import{n as t,t as n}from"./ConvergencePanel-Drm1eyN0.js";var r,i,a,o,s,c;e((()=>{t(),r={title:`Project/ConvergencePanel`,component:n,parameters:{layout:`padded`}},i={project:`Acme Docs`,source:{total:42,pct:{authored:100,checked:90,approved:0},gated:!0,shippable:!1,pending:[{state:`checked`,actual:90,required:100}]},locales:[{locale:`nb`,total:42,pct:{draft:100,translated:100,reviewed:80,"signed-off":0},gated:!0,shippable:!0},{locale:`de`,total:42,pct:{draft:100,translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{locale:`ja`,total:42,pct:{draft:100,translated:55,reviewed:0,"signed-off":0},gated:!0,shippable:!1,pending:[{state:`translated`,actual:55,required:100}]}],review:[{locale:`nb`,file:`src/locales/en.json`,key:`hero.title`,source:`Ship localized content without the toil`},{locale:`ja`,file:`src/locales/en.json`,key:`cta.primary`,source:`Get started`},{locale:`ja`,file:`src/locales/en.json`,key:`nav.docs`,source:`Documentation`}]},a={args:{tabID:`storybook`,report:i}},o={args:{tabID:`storybook`,report:{project:`Acme Docs`,locales:[{locale:`nb`,total:42,pct:{draft:100,translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0}],review:[]}}},s={args:{tabID:`storybook`,report:{project:`New project`,locales:[],review:[]}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    report: CONVERGING
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    report: {
      project: "Acme Docs",
      locales: [{
        locale: "nb",
        total: 42,
        pct: {
          draft: 100,
          translated: 100,
          reviewed: 100,
          "signed-off": 100
        },
        gated: true,
        shippable: true
      }],
      review: []
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    report: {
      project: "New project",
      locales: [],
      review: []
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Converging`,`FullyShippable`,`NothingTrackedYet`]}))();export{a as Converging,o as FullyShippable,s as NothingTrackedYet,c as __namedExportsOrder,r as default};