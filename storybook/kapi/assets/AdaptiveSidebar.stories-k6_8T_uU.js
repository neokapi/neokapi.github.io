import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,t as i}from"./runtime-CI09VOSa.js";import{Ki as a,t as o,vn as s}from"./lucide-react-Cx_fEK42.js";import{l as c,o as l,r as u,t as d}from"./_shared-BXHwgjBl.js";function f({title:e}){return(0,m.jsxs)(`div`,{className:`flex-1 bg-background p-6`,children:[(0,m.jsx)(`h2`,{className:`text-lg font-semibold`,children:e}),(0,m.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:i(`2wQU2t`,`Workspace content for the selected view.`)}),(0,m.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2`,children:[(0,m.jsx)(`div`,{className:`h-24 rounded-xl border border-dashed border-border`}),(0,m.jsx)(`div`,{className:`h-24 rounded-xl border border-dashed border-border`})]})]})}function p({project:e,localization:t,badge:n,caption:r}){return(0,m.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,m.jsx)(u,{title:e,badge:n,children:(0,m.jsxs)(`div`,{className:`flex h-[420px]`,children:[(0,m.jsx)(d,{project:e,localization:t,active:`content`}),(0,m.jsx)(f,{title:i(`4bJRGO`,`Content`)})]})}),(0,m.jsx)(`p`,{className:`px-1 text-xs leading-relaxed text-muted-foreground`,children:r})]})}var m,h,g,_,v,y;e((()=>{r(),o(),c(),m=t(),h={title:`Prototype/AdaptiveSidebar`,parameters:{layout:`fullscreen`,docs:{description:{component:`Prototype: the adaptive, project-type-aware sidebar.

A content project shows only the content workspace. When the project enables
the localization feature, a clearly-grouped Localization set (Translate,
Translation Memories, Termbases) lights up — same content items, plus the
l10n surface.`}}}},g={render:()=>(0,m.jsx)(`div`,{className:`min-h-screen bg-background p-8 text-foreground`,children:(0,m.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,m.jsx)(`h1`,{className:`text-xl font-semibold`,children:i(`1HKLaV`,`One workspace, two shapes`)}),(0,m.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:i(`7JtlE`,`The desktop is a content workspace that becomes a localization workspace when the open project enables the localization feature.`)}),(0,m.jsxs)(`div`,{className:`mt-6 grid gap-6 lg:grid-cols-2`,children:[(0,m.jsx)(p,{project:`Help Center Articles`,localization:!1,badge:(0,m.jsx)(l,{kind:`content`}),caption:(0,m.jsx)(m.Fragment,{children:`A content project: Home, Content, Check, Rewrite, Stats, Brand. No Translate, TM, or Termbase — and flows are not a sidebar pillar.`})}),(0,m.jsx)(p,{project:`Acme Marketing Site`,localization:!0,badge:(0,m.jsx)(l,{kind:`localization`}),caption:(0,m.jsx)(`span`,{className:`flex items-start gap-1.5`,children:n(`19mKqt`,`{=m0} {=m1} The same content items, plus a grouped{value} {=m3}Localization{/=m3} set. These appear only because the project enabled the localization feature. {/=m1}`,{"=m0":(0,m.jsx)(a,{size:13,className:`mt-0.5 shrink-0 text-primary`}),"=m1":(0,m.jsxs)(`span`,{children:[`The same content items, plus a grouped`,` `,(0,m.jsx)(`span`,{className:`font-medium text-foreground`,children:`Localization`}),` set. These appear only because the project enabled the localization feature.`]}),"=m3":(0,m.jsx)(`span`,{className:`font-medium text-foreground`,children:`Localization`})},{value:` `})})})]})]})})},_={render:()=>(0,m.jsxs)(`div`,{className:`flex h-screen bg-background text-foreground`,children:[(0,m.jsx)(d,{project:`Help Center Articles`,localization:!1,active:`content`}),(0,m.jsx)(f,{title:i(`2fjQgG`,`Content`)})]})},v={render:()=>(0,m.jsxs)(`div`,{className:`flex h-screen bg-background text-foreground`,children:[(0,m.jsx)(d,{project:`Acme Marketing Site`,localization:!0,active:`translate`}),(0,m.jsxs)(`div`,{className:`flex-1 bg-background p-6`,children:[(0,m.jsx)(`h2`,{className:`flex items-center gap-2 text-lg font-semibold`,children:n(`4d1GLF`,`{=m0} Translate`,{"=m0":(0,m.jsx)(s,{size:18,className:`text-primary`})})}),(0,m.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:i(`n00Hq`,`The localization surface is available because this project enabled the feature.`)})]})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-xl font-semibold">One workspace, two shapes</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The desktop is a content workspace that becomes a localization workspace when the open
          project enables the localization feature.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ShellCard project="Help Center Articles" localization={false} badge={<ProjectKindBadge kind="content" />} caption={<>
                A content project: Home, Content, Check, Rewrite, Stats, Brand. No Translate, TM, or
                Termbase — and flows are not a sidebar pillar.
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-screen bg-background text-foreground">
      <AdaptiveSidebar project="Help Center Articles" localization={false} active="content" />
      <PaneStub title="Content" />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`SideBySide`,`ContentProject`,`LocalizationProject`]}))();export{_ as ContentProject,v as LocalizationProject,g as SideBySide,y as __namedExportsOrder,h as default};