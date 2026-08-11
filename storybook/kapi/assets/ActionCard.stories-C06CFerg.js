import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r,t as i}from"./runtime-ls4VQNA8.js";import{i as a,n as o,r as s,t as c}from"./folder-output-0Fy_OdS-.js";import{n as l,t as u}from"./file-text-TREdY350.js";import{n as d,t as f}from"./folder-input-BBoP1OxP.js";import{i as p,n as m,r as h,t as g}from"./action-card-D5NLKZeB.js";import{n as _,t as v}from"./sparkles-Cw-NOwGU.js";import{n as y,t as b}from"./workflow-B5gkFOaG.js";import{n as x,t as S}from"./wrench-B3hIS2H4.js";import{n as C,t as w}from"./badge-CF5lgzyn.js";var T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{r(),m(),C(),d(),o(),a(),_(),l(),y(),x(),p(),T=t(),E={title:`Foundations/ActionCard`,component:g,tags:[`autodocs`],parameters:{docs:{description:{component:`Clickable card for templates, presets, and quick actions. Supports icon, title, description, badge, loading, and highlighted states.`}}}},D={name:`Template Card`,render:()=>(0,T.jsxs)(`div`,{className:`max-w-lg space-y-3`,children:[(0,T.jsx)(g,{icon:(0,T.jsx)(`div`,{className:`flex items-center gap-1.5`,children:n(`lndJoIiNaa9`,`{=m0} {=m1}→{/=m1} {=m2}`,{"=m0":(0,T.jsx)(f,{size:20}),"=m1":(0,T.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`→`}),"=m2":(0,T.jsx)(c,{size:20})})}),title:i(`8nvlAqDzD8U`,`Input → Output`),description:i(`8A9vrFOxloE`,`Source files in ./input/, translations written to ./output/{lang}/.`),onClick:()=>{}}),(0,T.jsx)(g,{icon:(0,T.jsx)(s,{size:20}),title:i(`7NqxxwF98qs`,`Start empty`),description:i(`eLxgFsVw4s`,`Blank project — configure everything yourself.`),onClick:()=>{}})]})},O={name:`Preset Cards (with highlighted)`,render:()=>(0,T.jsxs)(`div`,{className:`max-w-lg space-y-3`,children:[(0,T.jsx)(g,{icon:(0,T.jsx)(v,{size:20}),title:i(`gVabye6XhkL`,`nextjs`),description:i(`gkBvhEDb8h6`,`Next.js App Router with next-intl`),badge:(0,T.jsx)(w,{variant:`secondary`,className:`text-[10px]`,children:i(`4LUvYBCjHoB`,`detected`)}),highlighted:!0,onClick:()=>{}}),(0,T.jsx)(g,{icon:(0,T.jsx)(v,{size:20}),title:i(`2xuyowPVZbQ`,`react-intl`),description:i(`bhgLtkyzWV8`,`React with react-intl (FormatJS)`),onClick:()=>{}}),(0,T.jsx)(g,{icon:(0,T.jsx)(v,{size:20}),title:i(`8vznr7wJctv`,`angular`),description:i(`l03Z4ScuCBh`,`Angular with @angular/localize`),onClick:()=>{}})]})},k={name:`Quick Action Grid`,render:()=>(0,T.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-2 gap-3 lg:grid-cols-4`,children:[(0,T.jsx)(g,{icon:(0,T.jsx)(u,{size:16}),title:i(`B2su46P9CQ`,`Content`),description:i(`e0G01j5is2f`,`2 collections, 4 patterns`),onClick:()=>{}}),(0,T.jsx)(g,{icon:(0,T.jsx)(b,{size:16}),title:i(`8Q73zPUTyvO`,`Flows`),description:i(`6voKTO4CTDy`,`3 flows defined`),onClick:()=>{}}),(0,T.jsx)(g,{icon:(0,T.jsx)(S,{size:16}),title:i(`ZHkhP5WUi2`,`Tools`),description:i(`fV7c2tQCXBq`,`Run individual tools`),onClick:()=>{}}),(0,T.jsx)(g,{icon:(0,T.jsx)(h,{size:16}),title:i(`cnwBxHTI0zE`,`Settings`),description:i(`4dOfM1yrSMW`,`Languages, plugins`),onClick:()=>{}})]})},A={name:`Loading State`,args:{icon:(0,T.jsx)(v,{size:20}),title:`Applying preset...`,description:`Setting up project configuration.`,loading:!0,onClick:()=>{}}},j={name:`Disabled State`,args:{icon:(0,T.jsx)(s,{size:20}),title:`Unavailable`,description:`This option is not available.`,disabled:!0,onClick:()=>{}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Template Card",
  render: () => <div className="max-w-lg space-y-3">
      <ActionCard icon={<div className="flex items-center gap-1.5">
            <FolderInput size={20} />
            <span className="text-xs text-muted-foreground">&rarr;</span>
            <FolderOutput size={20} />
          </div>} title="Input → Output" description="Source files in ./input/, translations written to ./output/{lang}/." onClick={() => {}} />
      <ActionCard icon={<FileBox size={20} />} title="Start empty" description="Blank project — configure everything yourself." onClick={() => {}} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Preset Cards (with highlighted)",
  render: () => <div className="max-w-lg space-y-3">
      <ActionCard icon={<Sparkles size={20} />} title="nextjs" description="Next.js App Router with next-intl" badge={<Badge variant="secondary" className="text-[10px]">
            detected
          </Badge>} highlighted onClick={() => {}} />
      <ActionCard icon={<Sparkles size={20} />} title="react-intl" description="React with react-intl (FormatJS)" onClick={() => {}} />
      <ActionCard icon={<Sparkles size={20} />} title="angular" description="Angular with @angular/localize" onClick={() => {}} />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Quick Action Grid",
  render: () => <div className="grid max-w-2xl grid-cols-2 gap-3 lg:grid-cols-4">
      <ActionCard icon={<FileText size={16} />} title="Content" description="2 collections, 4 patterns" onClick={() => {}} />
      <ActionCard icon={<Workflow size={16} />} title="Flows" description="3 flows defined" onClick={() => {}} />
      <ActionCard icon={<Wrench size={16} />} title="Tools" description="Run individual tools" onClick={() => {}} />
      <ActionCard icon={<Settings2 size={16} />} title="Settings" description="Languages, plugins" onClick={() => {}} />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Loading State",
  args: {
    icon: <Sparkles size={20} />,
    title: "Applying preset...",
    description: "Setting up project configuration.",
    loading: true,
    onClick: () => {}
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Disabled State",
  args: {
    icon: <FileBox size={20} />,
    title: "Unavailable",
    description: "This option is not available.",
    disabled: true,
    onClick: () => {}
  }
}`,...j.parameters?.docs?.source}}},M=[`Template`,`PresetCards`,`QuickActions`,`Loading`,`Disabled`]})))()}N();export{j as Disabled,A as Loading,O as PresetCards,k as QuickActions,D as Template,M as __namedExportsOrder,E as default};