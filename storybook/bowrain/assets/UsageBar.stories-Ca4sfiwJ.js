import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{H as n,U as r}from"./iframe-CI--PYq-.js";var i,a,o,s,c,l,u,d,f;e((()=>{r(),i=t(),a={title:`Billing/UsageBar`,component:n,tags:[`autodocs`]},o=e=>new Date(Date.now()+e*24*60*60*1e3),s={args:{creditsUsed:49e4,creditsTotal:2e6,resetsAt:o(12)}},c={args:{creditsUsed:14e5,creditsTotal:2e6,resetsAt:o(8)}},l={args:{creditsUsed:18e5,creditsTotal:2e6,resetsAt:o(3)}},u={args:{creditsUsed:2e6,creditsTotal:2e6,resetsAt:o(14)}},d={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,maxWidth:400},children:[(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,marginBottom:4,color:`#888`},children:`Low (24%)`}),(0,i.jsx)(n,{creditsUsed:49e4,creditsTotal:2e6,resetsAt:o(12)})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,marginBottom:4,color:`#888`},children:`Medium (70%)`}),(0,i.jsx)(n,{creditsUsed:14e5,creditsTotal:2e6,resetsAt:o(8)})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,marginBottom:4,color:`#888`},children:`High (90%)`}),(0,i.jsx)(n,{creditsUsed:18e5,creditsTotal:2e6,resetsAt:o(3)})]}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`div`,{style:{fontSize:12,marginBottom:4,color:`#888`},children:`Exhausted (100%)`}),(0,i.jsx)(n,{creditsUsed:2e6,creditsTotal:2e6,resetsAt:o(14)})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    creditsUsed: 490_000,
    creditsTotal: 2_000_000,
    resetsAt: futureDate(12)
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    creditsUsed: 1_400_000,
    creditsTotal: 2_000_000,
    resetsAt: futureDate(8)
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    creditsUsed: 1_800_000,
    creditsTotal: 2_000_000,
    resetsAt: futureDate(3)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    creditsUsed: 2_000_000,
    creditsTotal: 2_000_000,
    resetsAt: futureDate(14)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24,
    maxWidth: 400
  }}>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: "#888"
      }}>Low (24%)</div>
        <UsageBar creditsUsed={490_000} creditsTotal={2_000_000} resetsAt={futureDate(12)} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: "#888"
      }}>Medium (70%)</div>
        <UsageBar creditsUsed={1_400_000} creditsTotal={2_000_000} resetsAt={futureDate(8)} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: "#888"
      }}>High (90%)</div>
        <UsageBar creditsUsed={1_800_000} creditsTotal={2_000_000} resetsAt={futureDate(3)} />
      </div>
      <div>
        <div style={{
        fontSize: 12,
        marginBottom: 4,
        color: "#888"
      }}>Exhausted (100%)</div>
        <UsageBar creditsUsed={2_000_000} creditsTotal={2_000_000} resetsAt={futureDate(14)} />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f=[`LowUsage`,`MediumUsage`,`HighUsage`,`Exhausted`,`AllLevels`]}))();export{d as AllLevels,u as Exhausted,l as HighUsage,s as LowUsage,c as MediumUsage,f as __namedExportsOrder,a as default};