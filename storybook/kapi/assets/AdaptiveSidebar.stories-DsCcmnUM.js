import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,r,t as i}from"./runtime-CYuAyXGC.js";import{n as a,t as o}from"./languages-Dg-XGfQj.js";import{l as s,o as c,r as l,t as u}from"./_shared-NkPNcUJQ.js";import{n as d,t as f}from"./sparkles-Cw-NOwGU.js";function p({title:e}){return(0,h.jsxs)(`div`,{className:`flex-1 bg-background p-6`,children:[(0,h.jsx)(`h2`,{className:`text-lg font-semibold`,children:e}),(0,h.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:i(`lDhABiJCSkR`,`Workspace content for the selected view.`)}),(0,h.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2`,children:[(0,h.jsx)(`div`,{className:`h-24 rounded-xl border border-dashed border-border`}),(0,h.jsx)(`div`,{className:`h-24 rounded-xl border border-dashed border-border`})]})]})}function m({project:e,localization:t,badge:n,caption:r}){return(0,h.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,h.jsx)(l,{title:e,badge:n,children:(0,h.jsxs)(`div`,{className:`flex h-[420px]`,children:[(0,h.jsx)(u,{project:e,localization:t,active:`content`}),(0,h.jsx)(p,{title:i(`3k4Z2NdHQCy`,`Content`)})]})}),(0,h.jsx)(`p`,{className:`px-1 text-xs leading-relaxed text-muted-foreground`,children:r})]})}var h,g,_,v,y,b;function x(){return(x=e((()=>{r(),a(),d(),s(),h=t(),g={title:`Prototype v1 (superseded)/AdaptiveSidebar`,parameters:{layout:`fullscreen`,docs:{description:{component:`Prototype: the adaptive, project-type-aware sidebar.

A content project shows only the content workspace. When the project enables
the localization feature, a clearly-grouped Localization set (Translate,
Content Memory, Terms) lights up — same content items, plus the
l10n surface.`}}}},_={render:()=>(0,h.jsx)(`div`,{className:`min-h-screen bg-background p-8 text-foreground`,children:(0,h.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,h.jsx)(`h1`,{className:`text-xl font-semibold`,children:i(`c1GaXpMZaCX`,`One workspace, two shapes`)}),(0,h.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:i(`l87ImXbbhWj`,`The desktop is a content workspace that becomes a localization workspace when the open project enables the localization feature.`)}),(0,h.jsxs)(`div`,{className:`mt-6 grid gap-6 lg:grid-cols-2`,children:[(0,h.jsx)(m,{project:`Help Center Articles`,localization:!1,badge:(0,h.jsx)(c,{kind:`content`}),caption:(0,h.jsx)(h.Fragment,{children:i(`lQYmGXkpQGu`,`A content project: Home, Content, Check, Rewrite, Stats, Brand. No Translate, Memory, or Terms — and flows are not a sidebar pillar.`)})}),(0,h.jsx)(m,{project:`Acme Marketing Site`,localization:!0,badge:(0,h.jsx)(c,{kind:`localization`}),caption:(0,h.jsx)(`span`,{className:`flex items-start gap-1.5`,children:n(`1WV3J9czgxL`,`{=m0} {=m1} The same content items, plus a grouped{value} {=m3}Localization{/=m3} set. These appear only because the project enabled the localization feature. {/=m1}`,{"=m0":(0,h.jsx)(f,{size:13,className:`mt-0.5 shrink-0 text-primary`}),"=m3":(0,h.jsx)(`span`,{className:`font-medium text-foreground`,children:`Localization`}),"=m1":(0,h.jsxs)(`span`,{children:[`The same content items, plus a grouped`,` `,(0,h.jsx)(`span`,{className:`font-medium text-foreground`,children:`Localization`}),` set. These appear only because the project enabled the localization feature.`]})},{value:` `})})})]})]})})},v={render:()=>(0,h.jsxs)(`div`,{className:`flex h-screen bg-background text-foreground`,children:[(0,h.jsx)(u,{project:`Help Center Articles`,localization:!1,active:`content`}),(0,h.jsx)(p,{title:i(`3k4Z2NdHQCy`,`Content`)})]})},y={render:()=>(0,h.jsxs)(`div`,{className:`flex h-screen bg-background text-foreground`,children:[(0,h.jsx)(u,{project:`Acme Marketing Site`,localization:!0,active:`translate`}),(0,h.jsxs)(`div`,{className:`flex-1 bg-background p-6`,children:[(0,h.jsx)(`h2`,{className:`flex items-center gap-2 text-lg font-semibold`,children:n(`1SOCRkMBNPj`,`{=m0} Translate`,{"=m0":(0,h.jsx)(o,{size:18,className:`text-primary`})})}),(0,h.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:i(`crLq7yBfntY`,`The localization surface is available because this project enabled the feature.`)})]})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-xl font-semibold">One workspace, two shapes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The desktop is a content workspace that becomes a localization workspace when the open
          project enables the localization feature.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ShellCard project="Help Center Articles" localization={false} badge={<ProjectKindBadge kind="content" />} caption={<>
                A content project: Home, Content, Check, Rewrite, Stats, Brand. No Translate,
                Memory, or Terms — and flows are not a sidebar pillar.
              </>} />
          <ShellCard project="Acme Marketing Site" localization badge={<ProjectKindBadge kind="localization" />} caption={<span className="flex items-start gap-1.5">
                <Sparkles size={13} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  The same content items, plus a grouped{" "}
                  <span className="font-medium text-foreground">Localization</span> set. These
                  appear only because the project enabled the localization feature.
                </span>
              </span>} />
        </div>
      </div>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-screen bg-background text-foreground">
      <AdaptiveSidebar project="Help Center Articles" localization={false} active="content" />
      <PaneStub title="Content" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-screen bg-background text-foreground">
      <AdaptiveSidebar project="Acme Marketing Site" localization active="translate" />
      <div className="flex-1 bg-background p-6">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Languages size={18} className="text-primary" />
          Translate
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          The localization surface is available because this project enabled the feature.
        </p>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}},b=[`SideBySide`,`ContentProject`,`LocalizationProject`]})))()}x();export{v as ContentProject,y as LocalizationProject,_ as SideBySide,b as __namedExportsOrder,g as default};