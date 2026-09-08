import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r,t as i}from"./runtime-WG3sX0mn.js";import{i as a,n as o,r as s,t as c}from"./status-badge-BjG78SVH.js";function l({dark:e,children:t}){return(0,d.jsx)(`div`,{className:e?`dark`:void 0,children:(0,d.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,d.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?i(`eoZVGebDkJB`,`Dark`):i(`6S0F3QN0sn4`,`Light`)}),t]})})}function u(){return(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`7EzXsrJEN`,`{=m0}content{/=m0} {=m1} {=m2}`,{"=m0":(0,d.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`content`}),"=m1":(0,d.jsx)(s,{ladder:`content`,status:`not-started`}),"=m2":c.map(e=>(0,d.jsx)(s,{ladder:`content`,status:e},e))})}),(0,d.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`bO6hIKxrBf3`,`{=m0}source{/=m0} {=m1}`,{"=m0":(0,d.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`source`}),"=m1":o.map(e=>(0,d.jsx)(s,{ladder:`source`,status:e},e))})}),(0,d.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`dW8kGSrw3LD`,`{=m0}held{/=m0} {=m1} {=m2}`,{"=m0":(0,d.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`held`}),"=m1":(0,d.jsx)(s,{ladder:`content`,status:`blocked`}),"=m2":(0,d.jsx)(s,{ladder:`source`,status:`attention`})})})]})}var d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),d=t(),f={title:`Foundations/StatusBadge`,component:s,parameters:{layout:`padded`,docs:{description:{component:`Two ladders on one scale: a target climbs draft to signed-off, a source
climbs authored to approved, and the rungs that mean the same thing are the
same colour.`}}},args:{ladder:`content`,status:`reviewed`}},p={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,d.jsx)(l,{children:(0,d.jsx)(u,{})}),(0,d.jsx)(l,{dark:!0,children:(0,d.jsx)(u,{})})]})},m={render:()=>(0,d.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,d.jsx)(`div`,{className:`flex items-center gap-1.5`,children:c.map(e=>(0,d.jsx)(s,{ladder:`content`,status:e,compact:!0},e))}),(0,d.jsx)(`div`,{className:`flex items-center gap-1.5`,children:o.map(e=>(0,d.jsx)(s,{ladder:`source`,status:e,compact:!0},e))})]})},h={render:()=>(0,d.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,d.jsx)(s,{ladder:`content`,status:`proofread`}),(0,d.jsx)(s,{ladder:`source`,status:`drafting`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Panel>
        <Ladders />
      </Panel>
      <Panel dark>
        <Ladders />
      </Panel>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Both ladders in both themes, so the two scales can be read against each other.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        {CONTENT_STATUS_LADDER.map(s => <StatusBadge key={s} ladder="content" status={s} compact />)}
      </div>
      <div className="flex items-center gap-1.5">
        {SOURCE_STATUS_LADDER.map(s => <StatusBadge key={s} ladder="source" status={s} compact />)}
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`The dense form, for a table cell or a coverage grid.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-1.5">
      <StatusBadge ladder="content" status="proofread" />
      <StatusBadge ladder="source" status="drafting" />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`A rung the UI has not styled keeps its own text rather than disappearing.`,...h.parameters?.docs?.description}}},g=[`Ladder`,`Compact`,`UnknownStatus`]})))()}_();export{m as Compact,p as Ladder,h as UnknownStatus,g as __namedExportsOrder,f as default};