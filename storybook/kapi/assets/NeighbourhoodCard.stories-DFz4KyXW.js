import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{c as n,t as r}from"./review-C1QWr6EF.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i=t(),a={key:`greeting`,before:[{key:`welcome`,source:[{text:`Welcome back.`}],target:[{text:`Bon retour.`}],status:`reviewed`}],after:[{key:`credits`,source:[{text:`Your credits reset on `},{ph:{id:`1`,type:`code:variable`,data:`{date}`,equiv:`{date}`}},{text:`.`}]},{key:`farewell`,source:[{text:`See you soon.`}],target:[{text:`À bientôt.`}],status:`translated`}],window:2},o={title:`Review/NeighbourhoodCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`The unit in its document: the blocks before it, the unit, and the blocks after it, in document order. The neighbours travel as run sequences through the declared run projection, so a placeholder reads as a chip rather than disappearing. A neighbour nothing has translated yet draws its source alone.`}}},args:{unitKey:`greeting`,unitSource:`Hello {name}, ready to continue?`,unitTarget:`Bonjour {name}, on continue ?`,sourceLocale:`en-US`,locale:`fr-FR`},render:e=>(0,i.jsx)(`div`,{className:`w-[28rem]`,children:(0,i.jsx)(n,{...e})})},s={name:`Between its neighbours, one untranslated`,args:{neighbourhood:a}},c={name:`The only unit in its document`,args:{neighbourhood:{key:`greeting`,window:2}}},l={args:{loading:!0}},u={name:`The document could not be read`,args:{}},d={globals:{theme:`dark`},args:{neighbourhood:a}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Between its neighbours, one untranslated",
  args: {
    neighbourhood: around
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "The only unit in its document",
  args: {
    neighbourhood: {
      key: "greeting",
      window: 2
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "The document could not be read",
  args: {}
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    neighbourhood: around
  }
}`,...d.parameters?.docs?.source}}},f=[`InSequence`,`Alone`,`Loading`,`Unreadable`,`Dark`]})))()}p();export{c as Alone,d as Dark,s as InSequence,l as Loading,u as Unreadable,f as __namedExportsOrder,o as default};