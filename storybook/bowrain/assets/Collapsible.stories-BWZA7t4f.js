import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{t as n}from"./src-DLIB-0eT.js";import{t as r}from"./button-BjQmflmu.js";import{a as i,i as a,r as o}from"./types-BPWZL7qs.js";var s,c,l,u,d;e((()=>{n(),s=t(),c={title:`Foundations/Collapsible`,component:o,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:400,padding:16},children:(0,s.jsx)(e,{})})]},l={render:()=>(0,s.jsxs)(o,{children:[(0,s.jsx)(i,{asChild:!0,children:(0,s.jsx)(r,{variant:`outline`,children:`Toggle details`})}),(0,s.jsx)(a,{children:(0,s.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:`This content can be expanded or collapsed. It contains additional details about the translation project.`})})]})},u={render:()=>(0,s.jsxs)(o,{defaultOpen:!0,children:[(0,s.jsx)(i,{asChild:!0,children:(0,s.jsx)(r,{variant:`outline`,children:`Toggle details`})}),(0,s.jsx)(a,{children:(0,s.jsx)(`p`,{className:`mt-2 text-sm text-muted-foreground`,children:`This collapsible starts in an open state.`})})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="mt-2 text-sm text-muted-foreground">
          This content can be expanded or collapsed. It contains additional details about the
          translation project.
        </p>
      </CollapsibleContent>
    </Collapsible>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Collapsible defaultOpen>
      <CollapsibleTrigger asChild>
        <Button variant="outline">Toggle details</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="mt-2 text-sm text-muted-foreground">
          This collapsible starts in an open state.
        </p>
      </CollapsibleContent>
    </Collapsible>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`DefaultOpen`]}))();export{l as Default,u as DefaultOpen,d as __namedExportsOrder,c as default};