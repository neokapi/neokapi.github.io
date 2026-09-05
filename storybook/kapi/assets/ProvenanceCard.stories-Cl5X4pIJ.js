import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./review-C1QWr6EF.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i=t(),a={title:`Review/ProvenanceCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Where this translation came from, and the decision in force over it. One decision per unit and variant, overwritten by the next, so this is the decision that stands. A decision recorded against source wording that has since changed is marked stale.`}}},render:e=>(0,i.jsx)(`div`,{className:`w-[28rem]`,children:(0,i.jsx)(n,{...e})})},o={name:`AI translation, rejected on wording that has since changed`,args:{provenance:{origin:{kind:`ai`,engine:`claude-sonnet`,tool:`translate`},review_state:`rejected`,status:`draft`,by:`maria@bowrain.test`,at:`2026-08-30T09:12:00Z`,note:`Reads as machine output; soften the imperative.`,stale:!0}}},s={name:`Recycled from content memory, signed off`,args:{provenance:{origin:{kind:`memory`,timestamp:`2026-08-29T18:40:00Z`},review_state:`signed-off`,status:`signed-off`,by:`sam@bowrain.test`,at:`2026-08-31T08:00:00Z`}}},c={name:`Written by a person, no decision yet`,args:{provenance:{origin:{kind:`human`,timestamp:`2026-08-29T18:40:00Z`}}}},l={name:`A note kept beside the unit (platform block note)`,args:{provenance:{origin:{kind:`human`,timestamp:`2026-08-29T18:40:00Z`}},note:`Legal asked us to keep the product name unchanged.`}},u={name:`Nothing recorded`,args:{provenance:{}}},d={globals:{theme:`dark`},args:{provenance:{origin:{kind:`ai`,engine:`claude-sonnet`,tool:`translate`},review_state:`rejected`,status:`draft`,by:`maria@bowrain.test`,at:`2026-08-30T09:12:00Z`,note:`Reads as machine output; soften the imperative.`,stale:!0}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "AI translation, rejected on wording that has since changed",
  args: {
    provenance: {
      origin: {
        kind: "ai",
        engine: "claude-sonnet",
        tool: "translate"
      },
      review_state: "rejected",
      status: "draft",
      by: "maria@bowrain.test",
      at: "2026-08-30T09:12:00Z",
      note: "Reads as machine output; soften the imperative.",
      stale: true
    }
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Recycled from content memory, signed off",
  args: {
    provenance: {
      origin: {
        kind: "memory",
        timestamp: "2026-08-29T18:40:00Z"
      },
      review_state: "signed-off",
      status: "signed-off",
      by: "sam@bowrain.test",
      at: "2026-08-31T08:00:00Z"
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Written by a person, no decision yet",
  args: {
    provenance: {
      origin: {
        kind: "human",
        timestamp: "2026-08-29T18:40:00Z"
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "A note kept beside the unit (platform block note)",
  args: {
    provenance: {
      origin: {
        kind: "human",
        timestamp: "2026-08-29T18:40:00Z"
      }
    },
    note: "Legal asked us to keep the product name unchanged."
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Nothing recorded",
  args: {
    provenance: {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    provenance: {
      origin: {
        kind: "ai",
        engine: "claude-sonnet",
        tool: "translate"
      },
      review_state: "rejected",
      status: "draft",
      by: "maria@bowrain.test",
      at: "2026-08-30T09:12:00Z",
      note: "Reads as machine output; soften the imperative.",
      stale: true
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`RejectedStale`,`SignedOff`,`Undecided`,`WithUnitNote`,`Empty`,`Dark`]})))()}p();export{d as Dark,u as Empty,o as RejectedStale,s as SignedOff,c as Undecided,l as WithUnitNote,f as __namedExportsOrder,a as default};