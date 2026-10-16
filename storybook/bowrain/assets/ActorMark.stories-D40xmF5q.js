import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,r,t as i}from"./runtime-ueGu4ihF.js";import{n as a,r as o}from"./coordinate-chip-C6hFI-c5.js";import{i as s,n as c,r as l,t as u}from"./actor-mark-DwZvcZAz.js";function d({dark:e,children:t}){return(0,f.jsx)(`div`,{className:e?`dark`:void 0,children:(0,f.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,f.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?i(`eoZVGebDkJB`,`Dark`):i(`6S0F3QN0sn4`,`Light`)}),t]})})}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),s(),o(),f=t(),p={title:`Patterns/ActorMark`,component:u,parameters:{layout:`padded`,docs:{description:{component:`Who did something, as a small square: two letters and a hue for each
assistant, a neutral mark for a person and a sync. The full name is the
tooltip and the accessible name.`}}},args:{actor:`claude-code`}},m=[`sm`,`md`,`lg`],h={name:`Every actor`,render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,f.jsx)(d,{dark:e,children:(0,f.jsx)(`table`,{className:`text-sm`,children:(0,f.jsx)(`tbody`,{children:c.map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{className:`w-36 py-1 pr-4 text-muted-foreground`,children:l(e)}),m.map(t=>(0,f.jsx)(`td`,{className:`px-2 py-1`,children:(0,f.jsx)(u,{actor:e,size:t})},t))]},e))})})},String(e)))})},g={name:`Unknown actor`,render:()=>(0,f.jsx)(`div`,{className:`flex items-center gap-3 text-sm`,children:n(`bBUhe1Zz2pY`,`{=m0} {=m1} {=m2} {=m3}lab-agent, claude@studio, settle{/=m3}`,{"=m0":(0,f.jsx)(u,{actor:`lab-agent`}),"=m1":(0,f.jsx)(u,{actor:`claude@studio`}),"=m2":(0,f.jsx)(u,{actor:`settle`}),"=m3":(0,f.jsx)(`span`,{className:`text-muted-foreground`,children:`lab-agent, claude@studio, settle`})})})},_={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-2 text-sm`,children:[(0,f.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`bLZHlDI0zfS`,`{=m0} {=m1}Ingrid Solberg{/=m1}`,{"=m0":(0,f.jsx)(u,{actor:`person`,name:`Ingrid Solberg`}),"=m1":(0,f.jsx)(`span`,{children:`Ingrid Solberg`})})}),(0,f.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`2DQPUn1Uo47`,`{=m0} {=m1}Ola{/=m1}`,{"=m0":(0,f.jsx)(u,{actor:`person`,name:`Ola`}),"=m1":(0,f.jsx)(`span`,{children:`Ola`})})}),(0,f.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`lM3KHxhdJre`,`{=m0} {=m1}You{/=m1}`,{"=m0":(0,f.jsx)(u,{actor:`person`}),"=m1":(0,f.jsx)(`span`,{children:`You`})})})]})},v={name:`Beside coordinate chips`,render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,f.jsx)(d,{dark:e,children:(0,f.jsx)(`div`,{className:`flex items-center gap-2 text-sm`,children:n(`2x0zKLjmTpk`,`{=m0} {=m1} {=m2}Acme Help Center{/=m2} {=m3} {=m4} {=m5}`,{"=m0":(0,f.jsx)(u,{actor:`claude-code`}),"=m1":(0,f.jsx)(u,{actor:`codex`}),"=m2":(0,f.jsx)(`span`,{className:`font-medium`,children:`Acme Help Center`}),"=m3":(0,f.jsx)(a,{axis:`brand`,value:`Fernwell`}),"=m4":(0,f.jsx)(a,{axis:`channel`,value:`support`}),"=m5":(0,f.jsx)(a,{axis:`language`,value:`nb-NO`})})})},String(e)))})},y=[`EveryActor`,`UnknownActor`,`Person`,`BesideChips`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Every actor",
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <table className="text-sm">
            <tbody>
              {KNOWN_ACTORS.map(actor => <tr key={actor}>
                  <td className="w-36 py-1 pr-4 text-muted-foreground">{actorLabel(actor)}</td>
                  {SIZES.map(size => <td key={size} className="px-2 py-1">
                      <ActorMark actor={actor} size={size} />
                    </td>)}
                </tr>)}
            </tbody>
          </table>
        </Panel>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Every known actor in every size, in both themes.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Unknown actor",
  render: () => <div className="flex items-center gap-3 text-sm">
      <ActorMark actor="lab-agent" />
      <ActorMark actor="claude@studio" />
      <ActorMark actor="settle" />
      <span className="text-muted-foreground">lab-agent, claude@studio, settle</span>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`An actor this build has not heard of: initials from its own name, on the neutral tint.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 text-sm">
      <div className="flex items-center gap-2">
        <ActorMark actor="person" name="Ingrid Solberg" />
        <span>Ingrid Solberg</span>
      </div>
      <div className="flex items-center gap-2">
        <ActorMark actor="person" name="Ola" />
        <span>Ola</span>
      </div>
      <div className="flex items-center gap-2">
        <ActorMark actor="person" />
        <span>You</span>
      </div>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`A person shows their initials, or a person icon named "You" when the record has no name.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Beside coordinate chips",
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <div className="flex items-center gap-2 text-sm">
            <ActorMark actor="claude-code" />
            <ActorMark actor="codex" />
            <span className="font-medium">Acme Help Center</span>
            <CoordinateChip axis="brand" value="Fernwell" />
            <CoordinateChip axis="channel" value="support" />
            <CoordinateChip axis="language" value="nb-NO" />
          </div>
        </Panel>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Marks and coordinate chips share one ramp, so a row carrying both reads as one drawing.`,...v.parameters?.docs?.description}}}})))()}b();export{v as BesideChips,h as EveryActor,_ as Person,g as UnknownActor,y as __namedExportsOrder,p as default};