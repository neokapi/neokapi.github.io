import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./facts-CykYq3n4.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Voice/Facts`,tags:[`autodocs`]},o={name:`Fact grid / Three columns`,render:()=>(0,i.jsx)(`div`,{className:`max-w-2xl`,children:(0,i.jsx)(r,{facts:[{label:`Formality`,value:`neutral`},{label:`Emotion`,value:`measured`},{label:`Humor`,value:`none`}]})})},s={name:`Fact grid / Four columns`,render:()=>(0,i.jsx)(`div`,{className:`max-w-2xl`,children:(0,i.jsx)(r,{columns:4,facts:[{label:`Voice`,value:`active`},{label:`Sentences`,value:`medium`},{label:`Point of view`,value:`second`},{label:`Contractions`,value:`sometimes`}]})})},c={name:`Fact grid / Skips empty facts`,render:()=>(0,i.jsx)(`div`,{className:`max-w-2xl`,children:(0,i.jsx)(r,{facts:[{label:`Formality`,value:`informal`},{label:`Emotion`,value:void 0},{label:`Humor`,value:void 0}]})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Fact grid / Three columns",
  render: () => <div className="max-w-2xl">
      <FactGrid facts={[{
      label: "Formality",
      value: "neutral"
    }, {
      label: "Emotion",
      value: "measured"
    }, {
      label: "Humor",
      value: "none"
    }]} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Fact grid / Four columns",
  render: () => <div className="max-w-2xl">
      <FactGrid columns={4} facts={[{
      label: "Voice",
      value: "active"
    }, {
      label: "Sentences",
      value: "medium"
    }, {
      label: "Point of view",
      value: "second"
    }, {
      label: "Contractions",
      value: "sometimes"
    }]} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Fact grid / Skips empty facts",
  render: () => <div className="max-w-2xl">
      <FactGrid facts={[{
      label: "Formality",
      value: "informal"
    }, {
      label: "Emotion",
      value: undefined
    }, {
      label: "Humor",
      value: undefined
    }]} />
    </div>
}`,...c.parameters?.docs?.source}}},l=[`ThreeColumns`,`FourColumns`,`SkipsEmptyFacts`]})))()}u();export{s as FourColumns,c as SkipsEmptyFacts,o as ThreeColumns,l as __namedExportsOrder,a as default};