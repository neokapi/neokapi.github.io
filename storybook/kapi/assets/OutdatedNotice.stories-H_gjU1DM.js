import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{r as n,t as r}from"./runtime-DmGG9GE_.js";import{n as i,t as a}from"./storyEnv-CiaDLO-i.js";function o({kind:e,note:t,textId:n}){let{label:r,body:i}=c[e];return(0,s.jsxs)(`div`,{className:`outdated-notice`,role:`note`,"aria-label":r,children:[(0,s.jsx)(`span`,{className:`outdated-notice__label`,children:r}),(0,s.jsxs)(`p`,{className:`outdated-notice__body`,id:n,children:[i,t?` ${t}`:null]})]})}var s,c;function l(){return(l=e((()=>{s=t(),c={interface:{label:`Outdated recording`,body:`The interface has changed since this was recorded. The workflow it demonstrates still applies, but some screens and labels differ from the current release.`},wording:{label:`Outdated wording`,body:`The narration uses terminology that has since been retired. The interface and the behaviour shown are unchanged.`}},o.__docgenInfo={description:`A banner marking a walkthrough recording as out of date, rendered above the
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
about which recordings are stale.`},textId:{required:!1,tsType:{name:`string`},description:"id for the notice text, so a sibling player can `aria-describedby` it."}}}})))()}function u({label:e}){return(0,f.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,aspectRatio:`16 / 9`,borderRadius:8,border:`1px solid color-mix(in srgb, currentColor 22%, transparent)`,background:`color-mix(in srgb, currentColor 8%, transparent)`,opacity:.75,fontSize:13},children:e})}function d({kind:e,note:t,caption:n}){return(0,f.jsxs)(`div`,{style:{maxWidth:800,marginBottom:40},children:[(0,f.jsx)(`div`,{style:{marginBottom:`0.7rem`},children:(0,f.jsx)(o,{kind:e,note:t})}),(0,f.jsx)(u,{label:n})]})}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{n(),l(),a(),f=t(),p={title:`Docs/Outdated recording banner`,component:o,decorators:[i],parameters:{layout:`fullscreen`}},m={name:`Interface changed`,render:()=>(0,f.jsx)(d,{kind:`interface`,caption:r(`7PvIqKBk80l`,`walkthrough player (kapi-desktop-projects)`)})},h={name:`Wording only`,render:()=>(0,f.jsx)(d,{kind:`wording`,caption:r(`g9PkMDEwgIk`,`walkthrough player (bowrain-web-governance)`)})},g={name:`Interface changed, with a specific note`,render:()=>(0,f.jsx)(d,{kind:`interface`,note:`The Termbases section is now Terms.`,caption:r(`7gbeLmewtOq`,`walkthrough player (kapi-desktop-explorer)`)})},_={name:`Both kinds, for comparison`,render:()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{kind:`interface`,caption:r(`gYa2ntKXtux`,`interface changed`)}),(0,f.jsx)(d,{kind:`wording`,caption:r(`4h1rFbm16Zo`,`wording only`)})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Interface changed",
  render: () => <Embed kind="interface" caption="walkthrough player (kapi-desktop-projects)" />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Wording only",
  render: () => <Embed kind="wording" caption="walkthrough player (bowrain-web-governance)" />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Interface changed, with a specific note",
  render: () => <Embed kind="interface" note="The Termbases section is now Terms." caption="walkthrough player (kapi-desktop-explorer)" />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Both kinds, for comparison",
  render: () => <>
      <Embed kind="interface" caption="interface changed" />
      <Embed kind="wording" caption="wording only" />
    </>
}`,..._.parameters?.docs?.source}}},v=[`InterfaceChanged`,`WordingOnly`,`WithNote`,`BothKinds`]})))()}y();export{_ as BothKinds,m as InterfaceChanged,g as WithNote,h as WordingOnly,v as __namedExportsOrder,p as default};