import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,t as o}from"./check-DQhaPkiZ.js";import{n as s,t as c}from"./rotate-ccw-DbCN-irb.js";import{n as l,t as u}from"./trash-2-D2CSzFk4.js";import{n as d,t as f}from"./button-BaXxZsjE.js";function p({dark:e,children:t}){return(0,h.jsx)(`div`,{className:e?`dark`:void 0,children:(0,h.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,h.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?`Dark`:`Light`}),t]})})}function m(){return(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,h.jsx)(f,{variant:`default`,children:i(`i1BYhSgDdnW`,`Run`)}),(0,h.jsx)(f,{variant:`success`,children:n(`aYjscxqJ8bK`,`{=m0} Approve`,{"=m0":(0,h.jsx)(o,{"data-icon":`inline-start`})})}),(0,h.jsx)(f,{variant:`warning`,children:n(`4UihJ8rVlPW`,`{=m0} Send back`,{"=m0":(0,h.jsx)(c,{"data-icon":`inline-start`})})}),(0,h.jsx)(f,{variant:`destructive`,children:n(`a6ZjTyP76S8`,`{=m0} Reject`,{"=m0":(0,h.jsx)(u,{"data-icon":`inline-start`})})}),(0,h.jsx)(f,{variant:`secondary`,children:i(`hVp3F6mmOo9`,`Cancel`)}),(0,h.jsx)(f,{variant:`ghost`,children:i(`9jdCdOP272o`,`Skip`)})]})}var h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),s(),l(),d(),h=t(),g={title:`Foundations/Semantic Buttons`,component:f,parameters:{layout:`padded`,docs:{description:{component:`The judgement a button carries is its colour, and the colour means the same
thing on every surface. See packages/ui/docs/judgement-colours.md.`}}}},_={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsx)(p,{children:(0,h.jsx)(m,{})}),(0,h.jsx)(p,{dark:!0,children:(0,h.jsx)(m,{})})]})},v={render:()=>(0,h.jsx)(`div`,{className:`flex flex-col gap-4`,children:[`xs`,`sm`,`default`,`lg`].map(e=>(0,h.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,h.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:e}),(0,h.jsx)(f,{variant:`success`,size:e,children:i(`biHbpDDAEBp`,`Sign off`)}),(0,h.jsx)(f,{variant:`warning`,size:e,children:i(`h0V4lJFWpKO`,`Needs attention`)}),(0,h.jsx)(f,{variant:`success`,size:e,disabled:!0,children:i(`biHbpDDAEBp`,`Sign off`)})]},e))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Panel>
        <Row />
      </Panel>
      <Panel dark>
        <Row />
      </Panel>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Every judgement variant beside the primary and the quiet ones.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {(["xs", "sm", "default", "lg"] as const).map(size => <div key={size} className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">{size}</span>
          <Button variant="success" size={size}>
            Sign off
          </Button>
          <Button variant="warning" size={size}>
            Needs attention
          </Button>
          <Button variant="success" size={size} disabled>
            Sign off
          </Button>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`The new variants across the size scale, so a toolbar and a form agree.`,...v.parameters?.docs?.description}}},y=[`Judgements`,`Sizes`]})))()}b();export{_ as Judgements,v as Sizes,y as __namedExportsOrder,g as default};