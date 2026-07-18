import{i as e}from"./preload-helper-DMFJQbmU.js";import{t}from"./jsx-runtime-DPj3eQ6K.js";import{Jr as n,qr as r}from"./iframe-BD76GOr_.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Components/ShipStateBadge`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{padding:24},children:(0,i.jsx)(e,{})})]},o={args:{state:`governed`,approvedBlocks:50,totalBlocks:50,failingChecks:0}},s={args:{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50,failingChecks:0}},c={args:{state:`pending`,approvedBlocks:3,totalBlocks:50,failingChecks:2}},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{state:`governed`,approvedBlocks:50,totalBlocks:50}),(0,i.jsx)(r,{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50}),(0,i.jsx)(r,{state:`pending`,approvedBlocks:3,totalBlocks:50,failingChecks:2})]})},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{compact:!0,state:`governed`,approvedBlocks:50,totalBlocks:50}),(0,i.jsx)(r,{compact:!0,state:`ai_shippable`,approvedBlocks:12,totalBlocks:50}),(0,i.jsx)(r,{compact:!0,state:`pending`,failingChecks:1})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "governed",
    approvedBlocks: 50,
    totalBlocks: 50,
    failingChecks: 0
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ai_shippable",
    approvedBlocks: 12,
    totalBlocks: 50,
    failingChecks: 0
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pending",
    approvedBlocks: 3,
    totalBlocks: 50,
    failingChecks: 2
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ShipStateBadge state="governed" approvedBlocks={50} totalBlocks={50} />
      <ShipStateBadge state="ai_shippable" approvedBlocks={12} totalBlocks={50} />
      <ShipStateBadge state="pending" approvedBlocks={3} totalBlocks={50} failingChecks={2} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ShipStateBadge compact state="governed" approvedBlocks={50} totalBlocks={50} />
      <ShipStateBadge compact state="ai_shippable" approvedBlocks={12} totalBlocks={50} />
      <ShipStateBadge compact state="pending" failingChecks={1} />
    </div>
}`,...u.parameters?.docs?.source}}},d=[`Governed`,`AIShippable`,`Pending`,`AllStates`,`Compact`]}))();export{s as AIShippable,l as AllStates,u as Compact,o as Governed,c as Pending,d as __namedExportsOrder,a as default};