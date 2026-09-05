import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{t as n,u as r}from"./review-C1QWr6EF.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i=t(),a={ref:`retail/web`,default:!1,path:`content/checkout/en.json`,collection:`Product UI`,coordinates:{product:`kapimart`,channel:`web`,brand:`northsea`},voice:{name:`Kapimart retail`,source:`pack:retail`,guide:`Voice profile (personality: precise, plain; formality: neutral; use active voice). Tone guidance: say what the product does for the reader, in their words. Never use these terms (use the replacement): "cart" → "basket"; "sign in" → "log in".`},term_rules:[{term:`cart`,replacement:`basket`,severity:`major`,note:`The store's own word.`},{term:`sign in`,replacement:`log in`,severity:`minor`},{term:`checkout`,replacement:`pay`},{term:`Kapimart`,do_not_translate:!0}],terms_total:40,profiles:[{name:`retail`,state:`active`,valid_from:`2026-01-01`}],notes:[`The channel was derived from the collection's channel.`]},o={termHits:[{term:`password`,renderings:[`mot de passe`],domain:`account`}],voiceScore:62,voiceBar:90},s={title:`Review/PointCard`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`Where the unit's file sits and what governs it there. The summary is the address as coordinate chips; behind it the voice in force with its guidance and the unit's score against the bar, the term rules bearing on the wording, the terms the source matches, the validity windows and the resolution's notes. Kapi desktop and the platform draw this one card.`}}},render:e=>(0,i.jsx)(`div`,{className:`w-[28rem]`,children:(0,i.jsx)(r,{...e})})},c={name:`Governed point, score below the bar (platform)`,args:{point:a,...o}},l={name:`Governed point as the desktop draws it: no score, no term hits`,args:{point:a}},u={name:`The project's default point, no voice bound`,args:{point:{default:!0,terms_total:12}}},d={name:`Nothing resolved (platform, no term hits)`,args:{point:{default:!1,terms_total:0},termHits:[]}},f={args:{loading:!0}},p={globals:{theme:`dark`},args:{point:a,...o}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Governed point, score below the bar (platform)",
  args: {
    point: governed,
    ...platformRows
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Governed point as the desktop draws it: no score, no term hits",
  args: {
    point: governed
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "The project's default point, no voice bound",
  args: {
    point: {
      default: true,
      terms_total: 12
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Nothing resolved (platform, no term hits)",
  args: {
    point: {
      default: false,
      terms_total: 0
    },
    termHits: []
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    point: governed,
    ...platformRows
  }
}`,...p.parameters?.docs?.source}}},m=[`Governed`,`GovernedOnTheDesktop`,`DefaultPoint`,`Ungoverned`,`Loading`,`Dark`]})))()}h();export{p as Dark,u as DefaultPoint,c as Governed,l as GovernedOnTheDesktop,f as Loading,d as Ungoverned,m as __namedExportsOrder,s as default};