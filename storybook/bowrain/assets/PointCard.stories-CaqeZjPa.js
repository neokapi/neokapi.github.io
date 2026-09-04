import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{t as n,u as r}from"./review-C-fRhLuJ.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a={ref:`retail/web`,path:`content/checkout/en.json`,collection:`Product UI`,coordinates:{product:`kapimart`,channel:`web`,brand:`northsea`},voice:{name:`Kapimart retail`,source:`pack:retail`,guide:`Voice profile (personality: precise, plain; formality: neutral; use active voice). Tone guidance: say what the product does for the reader, in their words. Never use these terms (use the replacement): "cart" → "basket"; "sign in" → "log in".`,score:62,bar:90},termRules:[{term:`cart`,replacement:`basket`,severity:`major`,note:`The store's own word.`},{term:`sign in`,replacement:`log in`,severity:`minor`},{term:`checkout`,replacement:`pay`},{term:`Kapimart`,do_not_translate:!0}],termsTotal:40,termHits:[{term:`password`,renderings:[`mot de passe`],domain:`account`}],profiles:[{name:`retail`,state:`active`,valid_from:`2026-01-01`}],notes:[`The channel was derived from the collection's channel.`]},o={title:`Review/PointCard`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Where the unit's file sits and what governs it there. The summary is the address as coordinate chips; behind it the voice in force with its guidance and the unit's score against the bar, the term rules bearing on the wording, the terms the source matches, the validity windows and the resolution's notes. Kapi desktop and the platform draw this one card.`}}},render:e=>(0,i.jsx)(`div`,{className:`w-[28rem]`,children:(0,i.jsx)(r,{...e})})},s={name:`Governed point, score below the bar`,args:{point:a}},c={name:`The project's default point, no voice bound`,args:{point:{default:!0,termsTotal:12}}},l={name:`Nothing resolved (platform, no term hits)`,args:{point:{termHits:[]}}},u={args:{loading:!0}},d={globals:{theme:`dark`},args:{point:a}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Governed point, score below the bar",
  args: {
    point: governed
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "The project's default point, no voice bound",
  args: {
    point: {
      default: true,
      termsTotal: 12
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Nothing resolved (platform, no term hits)",
  args: {
    point: {
      termHits: []
    }
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    point: governed
  }
}`,...d.parameters?.docs?.source}}},f=[`Governed`,`DefaultPoint`,`Ungoverned`,`Loading`,`Dark`]})))()}p();export{d as Dark,c as DefaultPoint,s as Governed,u as Loading,l as Ungoverned,f as __namedExportsOrder,o as default};