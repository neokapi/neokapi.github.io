import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ShipStateBadge-DsGaHiwN.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i=t(),a={title:`Components/ShipStateBadge`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{padding:24},children:(0,i.jsx)(e,{})})]},o={args:{state:`governed`,approvedBlocks:50,totalBlocks:50,failingChecks:0}},s={args:{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50,failingChecks:0}},c={args:{state:`pending`,approvedBlocks:3,totalBlocks:50,failingChecks:2}},l={args:{state:`pending`,approvedBlocks:40,totalBlocks:50,staleAwaitingDraft:6,staleAwaitingReview:4}},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{state:`governed`,approvedBlocks:50,totalBlocks:50}),(0,i.jsx)(r,{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50}),(0,i.jsx)(r,{state:`pending`,approvedBlocks:3,totalBlocks:50,failingChecks:2})]})},d={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{compact:!0,state:`governed`,approvedBlocks:50,totalBlocks:50}),(0,i.jsx)(r,{compact:!0,state:`ai_shippable`,approvedBlocks:12,totalBlocks:50}),(0,i.jsx)(r,{compact:!0,state:`pending`,failingChecks:1})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  args: {
    state: "pending",
    approvedBlocks: 40,
    totalBlocks: 50,
    staleAwaitingDraft: 6,
    staleAwaitingReview: 4
  }
}`,...l.parameters?.docs?.source},description:{story:`Pending on staleness: what the pairs wait on, split between the loop and a reviewer.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ShipStateBadge state="governed" approvedBlocks={50} totalBlocks={50} />
      <ShipStateBadge state="ai_shippable" approvedBlocks={12} totalBlocks={50} />
      <ShipStateBadge state="pending" approvedBlocks={3} totalBlocks={50} failingChecks={2} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ShipStateBadge compact state="governed" approvedBlocks={50} totalBlocks={50} />
      <ShipStateBadge compact state="ai_shippable" approvedBlocks={12} totalBlocks={50} />
      <ShipStateBadge compact state="pending" failingChecks={1} />
    </div>
}`,...d.parameters?.docs?.source}}},f=[`Governed`,`AIShippable`,`Pending`,`PendingOnStaleness`,`AllStates`,`Compact`]})))()}p();export{s as AIShippable,u as AllStates,d as Compact,o as Governed,c as Pending,l as PendingOnStaleness,f as __namedExportsOrder,a as default};