import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,t as i}from"./runtime-DQonW5bo.js";import{S as a,t as o}from"./lucide-react-DTJloxAJ.js";import{n as s,t as c}from"./button-D6zYGAvL.js";import{Bt as l,Ft as u,Rt as d}from"./iframe-Da_pL31N.js";var f,p,m,h,g,_,v,y;e((()=>{r(),o(),l(),s(),f=t(),p={title:`Foundations/SimpleTooltip`,component:u,tags:[`autodocs`],parameters:{docs:{description:{component:"One-liner tooltip wrapper over the Tooltip primitive — the standard replacement for native `title=` attributes. Uses the app-wide TooltipProvider when present and falls back to a local one otherwise. Falsy `content` renders the trigger unchanged."}}}},m={name:`Icon button (title= replacement)`,render:()=>(0,f.jsx)(u,{content:`Delete preset`,children:(0,f.jsx)(c,{variant:`ghost`,size:`icon-sm`,"aria-label":i(`fexSKsEPAPT`,`Delete preset`),children:(0,f.jsx)(a,{size:14})})})},h={name:`Disabled trigger (span-wrap pattern)`,render:()=>(0,f.jsx)(u,{content:`Select a project to author flows`,children:(0,f.jsx)(`span`,{className:`inline-flex`,children:(0,f.jsx)(c,{disabled:!0,children:i(`cFLHooQgk17`,`New flow`)})})})},g={name:`Falsy content renders trigger alone`,render:()=>(0,f.jsx)(u,{content:void 0,children:(0,f.jsx)(c,{variant:`outline`,children:i(`dGxiRbPZxXh`,`No tooltip here`)})})},_={name:`Placement`,render:()=>(0,f.jsx)(d,{children:(0,f.jsx)(`div`,{className:`flex items-center gap-4 p-12`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,f.jsx)(u,{content:`side="${e}"`,side:e,children:(0,f.jsx)(c,{variant:`outline`,size:`sm`,children:e})},e))})})},v={name:`Truncated text`,render:()=>(0,f.jsx)(u,{content:`src/locales/en-US/very-long-namespace/checkout.json`,children:n(`clSOFEsXmiX`,`{=m0} src/locales/en-US/very-long-namespace/checkout.json {/=m0}`,{"=m0":(0,f.jsx)(`span`,{className:`block max-w-40 truncate text-sm`,children:`src/locales/en-US/very-long-namespace/checkout.json`})})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Icon button (title= replacement)",
  render: () => <SimpleTooltip content="Delete preset">
      <Button variant="ghost" size="icon-sm" aria-label="Delete preset">
        <Trash2 size={14} />
      </Button>
    </SimpleTooltip>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Disabled trigger (span-wrap pattern)",
  render: () => <SimpleTooltip content="Select a project to author flows">
      <span className="inline-flex">
        <Button disabled>New flow</Button>
      </span>
    </SimpleTooltip>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Falsy content renders trigger alone",
  render: () => <SimpleTooltip content={undefined}>
      <Button variant="outline">No tooltip here</Button>
    </SimpleTooltip>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Truncated text",
  render: () => <SimpleTooltip content="src/locales/en-US/very-long-namespace/checkout.json">
      <span className="block max-w-40 truncate text-sm">
        src/locales/en-US/very-long-namespace/checkout.json
      </span>
    </SimpleTooltip>
}`,...v.parameters?.docs?.source}}},y=[`IconButton`,`DisabledTrigger`,`ConditionalContent`,`Sides`,`TruncatedText`]}))();export{g as ConditionalContent,h as DisabledTrigger,m as IconButton,_ as Sides,v as TruncatedText,y as __namedExportsOrder,p as default};