import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./trash-2-D2CSzFk4.js";import{i,o as a,t as o}from"./tooltip-DV4nbDnZ.js";import{n as s,t as c}from"./button-n2oHF6Cz.js";var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),s(),l=t(),u={title:`Foundations/SimpleTooltip`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:"One-liner tooltip wrapper over the Tooltip primitive — the standard replacement for native `title=` attributes. Uses the app-wide TooltipProvider when present and falls back to a local one otherwise. Falsy `content` renders the trigger unchanged."}}}},d={name:`Icon button (title= replacement)`,render:()=>(0,l.jsx)(o,{content:`Delete preset`,children:(0,l.jsx)(c,{variant:`ghost`,size:`icon-sm`,"aria-label":`Delete preset`,children:(0,l.jsx)(r,{size:14})})})},f={name:`Disabled trigger (span-wrap pattern)`,render:()=>(0,l.jsx)(o,{content:`Select a project to author flows`,children:(0,l.jsx)(`span`,{className:`inline-flex`,children:(0,l.jsx)(c,{disabled:!0,children:`New flow`})})})},p={name:`Falsy content renders trigger alone`,render:()=>(0,l.jsx)(o,{content:void 0,children:(0,l.jsx)(c,{variant:`outline`,children:`No tooltip here`})})},m={name:`Placement`,render:()=>(0,l.jsx)(i,{children:(0,l.jsx)(`div`,{className:`flex items-center gap-4 p-12`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,l.jsx)(o,{content:`side="${e}"`,side:e,children:(0,l.jsx)(c,{variant:`outline`,size:`sm`,children:e})},e))})})},h={name:`Truncated text`,render:()=>(0,l.jsx)(o,{content:`src/locales/en-US/very-long-namespace/checkout.json`,children:(0,l.jsx)(`span`,{className:`block max-w-40 truncate text-sm`,children:`src/locales/en-US/very-long-namespace/checkout.json`})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Icon button (title= replacement)",
  render: () => <SimpleTooltip content="Delete preset">
      <Button variant="ghost" size="icon-sm" aria-label="Delete preset">
        <Trash2 size={14} />
      </Button>
    </SimpleTooltip>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Disabled trigger (span-wrap pattern)",
  render: () => <SimpleTooltip content="Select a project to author flows">
      <span className="inline-flex">
        <Button disabled>New flow</Button>
      </span>
    </SimpleTooltip>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Falsy content renders trigger alone",
  render: () => <SimpleTooltip content={undefined}>
      <Button variant="outline">No tooltip here</Button>
    </SimpleTooltip>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Placement",
  render: () => <TooltipProvider>
      <div className="flex items-center gap-4 p-12">
        {(["top", "right", "bottom", "left"] as const).map(side => <SimpleTooltip key={side} content={\`side="\${side}"\`} side={side}>
            <Button variant="outline" size="sm">
              {side}
            </Button>
          </SimpleTooltip>)}
      </div>
    </TooltipProvider>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Truncated text",
  render: () => <SimpleTooltip content="src/locales/en-US/very-long-namespace/checkout.json">
      <span className="block max-w-40 truncate text-sm">
        src/locales/en-US/very-long-namespace/checkout.json
      </span>
    </SimpleTooltip>
}`,...h.parameters?.docs?.source}}},g=[`IconButton`,`DisabledTrigger`,`ConditionalContent`,`Sides`,`TruncatedText`]})))()}_();export{p as ConditionalContent,f as DisabledTrigger,d as IconButton,m as Sides,h as TruncatedText,g as __namedExportsOrder,u as default};