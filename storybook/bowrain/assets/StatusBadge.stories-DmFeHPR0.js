import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r}from"./runtime-DfFF6Hu8.js";import{i,n as a,r as o,t as s}from"./status-badge-DHgk6071.js";function c({dark:e,children:t}){return(0,u.jsx)(`div`,{className:e?`dark`:void 0,children:(0,u.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,u.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?`Dark`:`Light`}),t]})})}function l(){return(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`7EzXsrJEN`,`{=m0}content{/=m0} {=m1} {=m2}`,{"=m0":(0,u.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`content`}),"=m1":(0,u.jsx)(o,{ladder:`content`,status:`not-started`}),"=m2":s.map(e=>(0,u.jsx)(o,{ladder:`content`,status:e},e))})}),(0,u.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`bO6hIKxrBf3`,`{=m0}source{/=m0} {=m1}`,{"=m0":(0,u.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`source`}),"=m1":a.map(e=>(0,u.jsx)(o,{ladder:`source`,status:e},e))})}),(0,u.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`dW8kGSrw3LD`,`{=m0}held{/=m0} {=m1} {=m2}`,{"=m0":(0,u.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`held`}),"=m1":(0,u.jsx)(o,{ladder:`content`,status:`blocked`}),"=m2":(0,u.jsx)(o,{ladder:`source`,status:`attention`})})})]})}var u,d,f,p,m,h;function g(){return(g=e((()=>{r(),i(),u=t(),d={title:`Foundations/StatusBadge`,component:o,parameters:{layout:`padded`,docs:{description:{component:`Two ladders on one scale: a target climbs draft to signed-off, a source
climbs authored to approved, and the rungs that mean the same thing are the
same colour.`}}},args:{ladder:`content`,status:`reviewed`}},f={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,u.jsx)(c,{children:(0,u.jsx)(l,{})}),(0,u.jsx)(c,{dark:!0,children:(0,u.jsx)(l,{})})]})},p={render:()=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`div`,{className:`flex items-center gap-1.5`,children:s.map(e=>(0,u.jsx)(o,{ladder:`content`,status:e,compact:!0},e))}),(0,u.jsx)(`div`,{className:`flex items-center gap-1.5`,children:a.map(e=>(0,u.jsx)(o,{ladder:`source`,status:e,compact:!0},e))})]})},m={render:()=>(0,u.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,u.jsx)(o,{ladder:`content`,status:`proofread`}),(0,u.jsx)(o,{ladder:`source`,status:`drafting`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Panel>
        <Ladders />
      </Panel>
      <Panel dark>
        <Ladders />
      </Panel>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Both ladders in both themes, so the two scales can be read against each other.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1.5">
        {CONTENT_STATUS_LADDER.map(s => <StatusBadge key={s} ladder="content" status={s} compact />)}
      </div>
      <div className="flex items-center gap-1.5">
        {SOURCE_STATUS_LADDER.map(s => <StatusBadge key={s} ladder="source" status={s} compact />)}
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`The dense form, for a table cell or a coverage grid.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-1.5">
      <StatusBadge ladder="content" status="proofread" />
      <StatusBadge ladder="source" status="drafting" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`A rung the UI has not styled keeps its own text rather than disappearing.`,...m.parameters?.docs?.description}}},h=[`Ladder`,`Compact`,`UnknownStatus`]})))()}g();export{p as Compact,f as Ladder,m as UnknownStatus,h as __namedExportsOrder,d as default};