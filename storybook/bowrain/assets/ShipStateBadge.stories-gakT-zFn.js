import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./ShipStateBadge-Bt7_t5d9.js";var i,a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i=t(),a={title:`Components/ShipStateBadge`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{padding:24},children:(0,i.jsx)(e,{})})]},o={args:{state:`governed`,approvedBlocks:50,totalBlocks:50,failingChecks:0}},s={args:{state:`approved`,approvedBlocks:50,totalBlocks:50,termsNotGoverned:!0}},c={args:{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50,failingChecks:0}},l={args:{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50,termsNotGoverned:!0}},u={args:{state:`pending`,approvedBlocks:50,totalBlocks:50,termsNotCheckedBlocks:2}},d={args:{state:`pending`,approvedBlocks:3,totalBlocks:50,failingChecks:2}},f={args:{state:`pending`,approvedBlocks:40,totalBlocks:50,staleAwaitingDraft:6,staleAwaitingReview:4}},p={args:{state:`pending`,approvedBlocks:44,totalBlocks:50,rejectedAwaitingDraft:3}},m={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{state:`governed`,approvedBlocks:50,totalBlocks:50}),(0,i.jsx)(r,{state:`approved`,approvedBlocks:50,totalBlocks:50,termsNotGoverned:!0}),(0,i.jsx)(r,{state:`ai_shippable`,approvedBlocks:12,totalBlocks:50}),(0,i.jsx)(r,{state:`pending`,approvedBlocks:3,totalBlocks:50,failingChecks:2})]})},h={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,i.jsx)(r,{compact:!0,state:`governed`,approvedBlocks:50,totalBlocks:50}),(0,i.jsx)(r,{compact:!0,state:`approved`,approvedBlocks:50,totalBlocks:50,termsNotGoverned:!0}),(0,i.jsx)(r,{compact:!0,state:`ai_shippable`,approvedBlocks:12,totalBlocks:50}),(0,i.jsx)(r,{compact:!0,state:`pending`,failingChecks:1})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "governed",
    approvedBlocks: 50,
    totalBlocks: 50,
    failingChecks: 0
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "approved",
    approvedBlocks: 50,
    totalBlocks: 50,
    termsNotGoverned: true
  }
}`,...s.parameters?.docs?.source},description:{story:`Every translation is human-approved, and no terms apply to the language.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ai_shippable",
    approvedBlocks: 12,
    totalBlocks: 50,
    failingChecks: 0
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: "ai_shippable",
    approvedBlocks: 12,
    totalBlocks: 50,
    termsNotGoverned: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Shippable on machine review, in a language no terms govern: the tooltip says so.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pending",
    approvedBlocks: 50,
    totalBlocks: 50,
    termsNotCheckedBlocks: 2
  }
}`,...u.parameters?.docs?.source},description:{story:`Pending on terminology: terms govern the language and some blocks have no result.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pending",
    approvedBlocks: 3,
    totalBlocks: 50,
    failingChecks: 2
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pending",
    approvedBlocks: 40,
    totalBlocks: 50,
    staleAwaitingDraft: 6,
    staleAwaitingReview: 4
  }
}`,...f.parameters?.docs?.source},description:{story:`Pending on staleness: what the pairs wait on, split between the loop and a reviewer.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: "pending",
    approvedBlocks: 44,
    totalBlocks: 50,
    rejectedAwaitingDraft: 3
  }
}`,...p.parameters?.docs?.source},description:{story:`Pending on a rejection: a person refused the wording, so a pass owes a draft.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ShipStateBadge state="governed" approvedBlocks={50} totalBlocks={50} />
      <ShipStateBadge state="approved" approvedBlocks={50} totalBlocks={50} termsNotGoverned />
      <ShipStateBadge state="ai_shippable" approvedBlocks={12} totalBlocks={50} />
      <ShipStateBadge state="pending" approvedBlocks={3} totalBlocks={50} failingChecks={2} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 8,
    alignItems: "center"
  }}>
      <ShipStateBadge compact state="governed" approvedBlocks={50} totalBlocks={50} />
      <ShipStateBadge compact state="approved" approvedBlocks={50} totalBlocks={50} termsNotGoverned />
      <ShipStateBadge compact state="ai_shippable" approvedBlocks={12} totalBlocks={50} />
      <ShipStateBadge compact state="pending" failingChecks={1} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`Governed`,`Approved`,`AIShippable`,`AIShippableNotGoverned`,`PendingOnTerminology`,`Pending`,`PendingOnStaleness`,`PendingOnRejection`,`AllStates`,`Compact`]})))()}_();export{c as AIShippable,l as AIShippableNotGoverned,m as AllStates,s as Approved,h as Compact,o as Governed,d as Pending,p as PendingOnRejection,f as PendingOnStaleness,u as PendingOnTerminology,g as __namedExportsOrder,a as default};