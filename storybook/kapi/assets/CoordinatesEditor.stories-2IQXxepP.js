import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./governance-MflRb00U.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{a=t(),i(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c=[{axis:`product`,declarable:!1,refusal:`recipe: "product" is derived from a collection's channel, not declared: remove it from the point or set the collection's channel instead`},{axis:`channel`,declarable:!1,refusal:`recipe: "channel" is derived from a collection's channel, not declared: remove it from the point or set the collection's channel instead`},{axis:`brand`},{axis:`mode`,values:[`tutorial`,`how-to`,`reference`,`explanation`]}],l={title:`Governance/CoordinatesEditor`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`A point, or a region of one, as rows of axis and value. The consumer passes the axes it knows: which may be declared, which are refused and why, and which carry a closed value set. A recipe may mint an axis (free text); a collection or a membership picks from the vocabulary.`}}},args:{onChange:s()},render:function(e){let[t,n]=(0,a.useState)(e.value);return(0,o.jsx)(`div`,{className:`max-w-lg`,children:(0,o.jsx)(r,{...e,value:t,onChange:t=>{n(t??{}),e.onChange(t)}})})}},u={name:`Empty (the project's own point)`,args:{value:{},axes:c,allowNewAxis:!0,label:`Default point`,emptyText:`Every collection sits at the project's own point.`,note:`product and channel come from a collection's channel.`}},d={name:`A declared point with a closed value set`,args:{value:{brand:`northsea`,mode:`reference`},axes:c,allowNewAxis:!0,label:`Default point`,note:`product and channel come from a collection's channel.`}},f={name:`Picks from the declared axes (collection)`,args:{value:{brand:`northsea`},axes:c,label:`Coordinates here`,emptyText:`Inherits the project's declared axes.`}},p={name:`A region refusing a blank value (membership)`,args:{value:{brand:`acme`,channel:``},allowNewAxis:!0,requireValues:!0,label:`Governs`,emptyText:`The whole space.`}},m={args:{value:{brand:`northsea`,mode:`tutorial`},axes:c,allowNewAxis:!0,label:`Default point`,disabled:!0}},h={globals:{theme:`dark`},args:{value:{brand:`northsea`,mode:`reference`},axes:c,allowNewAxis:!0,label:`Default point`,note:`product and channel come from a collection's channel.`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Empty (the project's own point)",
  args: {
    value: {},
    axes: recipeAxes,
    allowNewAxis: true,
    label: "Default point",
    emptyText: "Every collection sits at the project's own point.",
    note: "product and channel come from a collection's channel."
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "A declared point with a closed value set",
  args: {
    value: {
      brand: "northsea",
      mode: "reference"
    },
    axes: recipeAxes,
    allowNewAxis: true,
    label: "Default point",
    note: "product and channel come from a collection's channel."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Picks from the declared axes (collection)",
  args: {
    value: {
      brand: "northsea"
    },
    axes: recipeAxes,
    label: "Coordinates here",
    emptyText: "Inherits the project's declared axes."
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "A region refusing a blank value (membership)",
  args: {
    value: {
      brand: "acme",
      channel: ""
    },
    allowNewAxis: true,
    requireValues: true,
    label: "Governs",
    emptyText: "The whole space."
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: {
      brand: "northsea",
      mode: "tutorial"
    },
    axes: recipeAxes,
    allowNewAxis: true,
    label: "Default point",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    value: {
      brand: "northsea",
      mode: "reference"
    },
    axes: recipeAxes,
    allowNewAxis: true,
    label: "Default point",
    note: "product and channel come from a collection's channel."
  }
}`,...h.parameters?.docs?.source}}},g=[`Empty`,`Populated`,`DeclarableOnly`,`Validation`,`Disabled`,`Dark`]})))()}_();export{h as Dark,f as DeclarableOnly,m as Disabled,u as Empty,d as Populated,p as Validation,g as __namedExportsOrder,l as default};