import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./jsx-runtime-CFwixLRt.js";import{r as n,t as r}from"./runtime-D9E4JuzJ.js";import{n as i,t as a}from"./storyEnv-H22VkQbF.js";var o=e((()=>{}));function s({kind:e,note:t,textId:n}){let{label:r,body:i}=l[e];return(0,c.jsxs)(`div`,{className:`outdated-notice`,role:`note`,"aria-label":r,children:[(0,c.jsx)(`span`,{className:`outdated-notice__label`,children:r}),(0,c.jsxs)(`p`,{className:`outdated-notice__body`,id:n,children:[i,t?` ${t}`:null]})]})}var c,l,u=e((()=>{o(),c=t(),l={interface:{label:`Outdated recording`,body:`The interface has changed since this was recorded. The workflow it demonstrates still applies, but some screens and labels differ from the current release.`},wording:{label:`Outdated wording`,body:`The narration uses terminology that has since been retired. The interface and the behaviour shown are unchanged.`}},s.__docgenInfo={description:`A banner marking a walkthrough recording as out of date, rendered above the
player so the recording keeps its demonstration value instead of being
pulled.

Theme-aware through Docusaurus's \`data-theme\` attribute rather than
\`useColorMode()\`, for the same reason \`ThemedVideo\` is: that hook resolves to
a second module instance for workspace-package consumers and throws outside
the provider. CSS toggling renders during SSG and needs no React context.

The status is real text inside a \`role="note"\` landmark — not a colour cue or
a decorative glyph — so a screen reader announces it while reading the page.
\`role="alert"\` would be wrong here: nothing changed dynamically, and it would
interrupt.`,methods:[],displayName:`OutdatedNotice`,props:{kind:{required:!0,tsType:{name:`union`,raw:`"interface" | "wording"`,elements:[{name:`literal`,value:`"interface"`},{name:`literal`,value:`"wording"`}]},description:``},note:{required:!1,tsType:{name:`string`},description:`An optional sentence naming the specific drift, e.g. "The Termbases
section is now Terms." Pages supply this; the component knows nothing
about which recordings are stale.`},textId:{required:!1,tsType:{name:`string`},description:"id for the notice text, so a sibling player can `aria-describedby` it."}}}}));function d({label:e}){return(0,p.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,aspectRatio:`16 / 9`,borderRadius:8,border:`1px solid color-mix(in srgb, currentColor 22%, transparent)`,background:`color-mix(in srgb, currentColor 8%, transparent)`,opacity:.75,fontSize:13},children:e})}function f({kind:e,note:t,caption:n}){return(0,p.jsxs)(`div`,{style:{maxWidth:800,marginBottom:40},children:[(0,p.jsx)(`div`,{style:{marginBottom:`0.7rem`},children:(0,p.jsx)(s,{kind:e,note:t})}),(0,p.jsx)(d,{label:n})]})}var p,m,h,g,_,v,y;e((()=>{n(),u(),a(),p=t(),m={title:`Docs/Outdated recording banner`,component:s,decorators:[i],parameters:{layout:`fullscreen`}},h={name:`Interface changed`,render:()=>(0,p.jsx)(f,{kind:`interface`,caption:r(`7PvIqKBk80l`,`walkthrough player (kapi-desktop-projects)`)})},g={name:`Wording only`,render:()=>(0,p.jsx)(f,{kind:`wording`,caption:r(`g9PkMDEwgIk`,`walkthrough player (bowrain-web-governance)`)})},_={name:`Interface changed, with a specific note`,render:()=>(0,p.jsx)(f,{kind:`interface`,note:`The Termbases section is now Terms.`,caption:r(`7gbeLmewtOq`,`walkthrough player (kapi-desktop-explorer)`)})},v={name:`Both kinds, for comparison`,render:()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{kind:`interface`,caption:r(`gYa2ntKXtux`,`interface changed`)}),(0,p.jsx)(f,{kind:`wording`,caption:r(`4h1rFbm16Zo`,`wording only`)})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Interface changed",
  render: () => <Embed kind="interface" caption="walkthrough player (kapi-desktop-projects)" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Wording only",
  render: () => <Embed kind="wording" caption="walkthrough player (bowrain-web-governance)" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Interface changed, with a specific note",
  render: () => <Embed kind="interface" note="The Termbases section is now Terms." caption="walkthrough player (kapi-desktop-explorer)" />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Both kinds, for comparison",
  render: () => <>
      <Embed kind="interface" caption="interface changed" />
      <Embed kind="wording" caption="wording only" />
    </>
}`,...v.parameters?.docs?.source}}},y=[`InterfaceChanged`,`WordingOnly`,`WithNote`,`BothKinds`]}))();export{v as BothKinds,h as InterfaceChanged,_ as WithNote,g as WordingOnly,y as __namedExportsOrder,m as default};