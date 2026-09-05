import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r}from"./ChannelMap-il6H2YMa.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Channels/ChannelRow`,component:n,tags:[`autodocs`],render:e=>(0,i.jsx)(`ul`,{className:`max-w-2xl divide-y`,children:(0,i.jsx)(n,{...e})})},s={ref:`campaign/promo`,profile:`campaign`,channel:`promo`,declared:!0,voice:`Northsea`,collections:[`Promo`],item_count:142},c={name:`Declared (renameable)`,args:{channel:s,onRename:a()}},l={name:`No voice profile`,args:{channel:{...s,voice:void 0,item_count:0},onRename:a()}},u={name:`Derived (read-only)`,args:{channel:{ref:`blog/news`,profile:`blog`,channel:`news`,declared:!1,collections:[`News`],item_count:3}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Declared (renameable)",
  args: {
    channel: declared,
    onRename: fn()
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "No voice profile",
  args: {
    channel: {
      ...declared,
      voice: undefined,
      item_count: 0
    },
    onRename: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Derived (read-only)",
  args: {
    channel: {
      ref: "blog/news",
      profile: "blog",
      channel: "news",
      declared: false,
      collections: ["News"],
      item_count: 3
    }
  }
}`,...u.parameters?.docs?.source}}},d=[`Declared`,`NoVoiceProfile`,`Derived`]})))()}f();export{c as Declared,u as Derived,l as NoVoiceProfile,d as __namedExportsOrder,o as default};