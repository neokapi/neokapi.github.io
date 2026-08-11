import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./createLucideIcon-8VCQbZEU.js";import{n as i,t as a}from"./file-text-c7u-0Ywr.js";import{i as o,n as s,r as c,t as l}from"./action-card-2Sx9aZNF.js";import{n as u,t as d}from"./sparkles-ibTdVuk5.js";import{n as f,t as p}from"./workflow-DccCjY-k.js";import{n as m,t as h}from"./wrench-Bjytl5sq.js";import{n as g,t as _}from"./badge-Cx7ESqx6.js";var v,y;function b(){return(b=e((()=>{n(),v=[[`path`,{d:`M14 2v5a1 1 0 001 1h5`,key:`9v5fu7`}],[`path`,{d:`M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804`,key:`1ne0j7`}],[`path`,{d:`M2.264 13.752 7 16.5l4.737-2.748`,key:`t73mg3`}],[`path`,{d:`M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z`,key:`h4qck`}],[`path`,{d:`M7 16.5V22`,key:`1i1gou`}]],y=r(`file-box`,v)})))()}var x,S;function C(){return(C=e((()=>{n(),x=[[`path`,{d:`M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1`,key:`fm4g5t`}],[`path`,{d:`M2 13h10`,key:`pgb2dq`}],[`path`,{d:`m9 16 3-3-3-3`,key:`6m91ic`}]],S=r(`folder-input`,x)})))()}var w,T;function E(){return(E=e((()=>{n(),w=[[`path`,{d:`M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5`,key:`1yk7aj`}],[`path`,{d:`M2 13h10`,key:`pgb2dq`}],[`path`,{d:`m5 10-3 3 3 3`,key:`1r8ie0`}]],T=r(`folder-output`,w)})))()}var D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{s(),g(),C(),E(),b(),u(),i(),f(),m(),o(),D=t(),O={title:`Foundations/ActionCard`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Clickable card for templates, presets, and quick actions. Supports icon, title, description, badge, loading, and highlighted states.`}}}},k={name:`Template Card`,render:()=>(0,D.jsxs)(`div`,{className:`max-w-lg space-y-3`,children:[(0,D.jsx)(l,{icon:(0,D.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,D.jsx)(S,{size:20}),(0,D.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:`→`}),(0,D.jsx)(T,{size:20})]}),title:`Input → Output`,description:`Source files in ./input/, translations written to ./output/{lang}/.`,onClick:()=>{}}),(0,D.jsx)(l,{icon:(0,D.jsx)(y,{size:20}),title:`Start empty`,description:`Blank project — configure everything yourself.`,onClick:()=>{}})]})},A={name:`Preset Cards (with highlighted)`,render:()=>(0,D.jsxs)(`div`,{className:`max-w-lg space-y-3`,children:[(0,D.jsx)(l,{icon:(0,D.jsx)(d,{size:20}),title:`nextjs`,description:`Next.js App Router with next-intl`,badge:(0,D.jsx)(_,{variant:`secondary`,className:`text-[10px]`,children:`detected`}),highlighted:!0,onClick:()=>{}}),(0,D.jsx)(l,{icon:(0,D.jsx)(d,{size:20}),title:`react-intl`,description:`React with react-intl (FormatJS)`,onClick:()=>{}}),(0,D.jsx)(l,{icon:(0,D.jsx)(d,{size:20}),title:`angular`,description:`Angular with @angular/localize`,onClick:()=>{}})]})},j={name:`Quick Action Grid`,render:()=>(0,D.jsxs)(`div`,{className:`grid max-w-2xl grid-cols-2 gap-3 lg:grid-cols-4`,children:[(0,D.jsx)(l,{icon:(0,D.jsx)(a,{size:16}),title:`Content`,description:`2 collections, 4 patterns`,onClick:()=>{}}),(0,D.jsx)(l,{icon:(0,D.jsx)(p,{size:16}),title:`Flows`,description:`3 flows defined`,onClick:()=>{}}),(0,D.jsx)(l,{icon:(0,D.jsx)(h,{size:16}),title:`Tools`,description:`Run individual tools`,onClick:()=>{}}),(0,D.jsx)(l,{icon:(0,D.jsx)(c,{size:16}),title:`Settings`,description:`Languages, plugins`,onClick:()=>{}})]})},M={name:`Loading State`,args:{icon:(0,D.jsx)(d,{size:20}),title:`Applying preset...`,description:`Setting up project configuration.`,loading:!0,onClick:()=>{}}},N={name:`Disabled State`,args:{icon:(0,D.jsx)(y,{size:20}),title:`Unavailable`,description:`This option is not available.`,disabled:!0,onClick:()=>{}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Template Card",
  render: () => <div className="max-w-lg space-y-3">
      <ActionCard icon={<div className="flex items-center gap-1.5">
            <FolderInput size={20} />
            <span className="text-xs text-muted-foreground">&rarr;</span>
            <FolderOutput size={20} />
          </div>} title="Input → Output" description="Source files in ./input/, translations written to ./output/{lang}/." onClick={() => {}} />
      <ActionCard icon={<FileBox size={20} />} title="Start empty" description="Blank project — configure everything yourself." onClick={() => {}} />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Preset Cards (with highlighted)",
  render: () => <div className="max-w-lg space-y-3">
      <ActionCard icon={<Sparkles size={20} />} title="nextjs" description="Next.js App Router with next-intl" badge={<Badge variant="secondary" className="text-[10px]">
            detected
          </Badge>} highlighted onClick={() => {}} />
      <ActionCard icon={<Sparkles size={20} />} title="react-intl" description="React with react-intl (FormatJS)" onClick={() => {}} />
      <ActionCard icon={<Sparkles size={20} />} title="angular" description="Angular with @angular/localize" onClick={() => {}} />
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Quick Action Grid",
  render: () => <div className="grid max-w-2xl grid-cols-2 gap-3 lg:grid-cols-4">
      <ActionCard icon={<FileText size={16} />} title="Content" description="2 collections, 4 patterns" onClick={() => {}} />
      <ActionCard icon={<Workflow size={16} />} title="Flows" description="3 flows defined" onClick={() => {}} />
      <ActionCard icon={<Wrench size={16} />} title="Tools" description="Run individual tools" onClick={() => {}} />
      <ActionCard icon={<Settings2 size={16} />} title="Settings" description="Languages, plugins" onClick={() => {}} />
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Loading State",
  args: {
    icon: <Sparkles size={20} />,
    title: "Applying preset...",
    description: "Setting up project configuration.",
    loading: true,
    onClick: () => {}
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "Disabled State",
  args: {
    icon: <FileBox size={20} />,
    title: "Unavailable",
    description: "This option is not available.",
    disabled: true,
    onClick: () => {}
  }
}`,...N.parameters?.docs?.source}}},P=[`Template`,`PresetCards`,`QuickActions`,`Loading`,`Disabled`]})))()}F();export{N as Disabled,M as Loading,A as PresetCards,j as QuickActions,k as Template,P as __namedExportsOrder,O as default};