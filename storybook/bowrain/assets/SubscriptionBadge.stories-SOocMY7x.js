import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r}from"./runtime-DfFF6Hu8.js";import{H as i,V as a}from"./iframe-C46qXpwC.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),o=t(),s={title:`Billing/SubscriptionBadge`,component:a,tags:[`autodocs`]},c={args:{plan:`free`,status:`active`}},l={args:{plan:`pro`,status:`active`}},u={args:{plan:`team`,status:`trialing`}},d={args:{plan:`enterprise`,status:`past_due`}},f={args:{plan:`pro`,status:`canceled`}},p={args:{plan:`team`}},m={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[`free`,`pro`,`team`,`enterprise`].map(e=>[`active`,`trialing`,`past_due`,`canceled`].map(t=>(0,o.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8},children:n(`97NH6QmfEQ`,`{=m0} {plan} / {status} {/=m0} {=m3}`,{"=m0":(0,o.jsxs)(`span`,{style:{width:140,fontSize:12,color:`#888`},children:[e,` / `,t]}),"=m3":(0,o.jsx)(a,{plan:e,status:t})},{plan:e,status:t})},`${e}-${t}`)))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    plan: "free",
    status: "active"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    plan: "pro",
    status: "active"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    plan: "team",
    status: "trialing"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    plan: "enterprise",
    status: "past_due"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    plan: "pro",
    status: "canceled"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    plan: "team"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      {(["free", "pro", "team", "enterprise"] as const).map(plan => (["active", "trialing", "past_due", "canceled"] as const).map(status => <div key={\`\${plan}-\${status}\`} style={{
      display: "flex",
      alignItems: "center",
      gap: 8
    }}>
            <span style={{
        width: 140,
        fontSize: 12,
        color: "#888"
      }}>
              {plan} / {status}
            </span>
            <SubscriptionBadge plan={plan} status={status} />
          </div>))}
    </div>
}`,...m.parameters?.docs?.source}}},h=[`FreeActive`,`ProActive`,`TeamTrialing`,`EnterprisePastDue`,`ProCanceled`,`PlanOnly`,`AllCombinations`]})))()}g();export{m as AllCombinations,d as EnterprisePastDue,c as FreeActive,p as PlanOnly,l as ProActive,f as ProCanceled,u as TeamTrialing,h as __namedExportsOrder,s as default};