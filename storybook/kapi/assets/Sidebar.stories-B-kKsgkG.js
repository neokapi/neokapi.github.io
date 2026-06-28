import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{r as n,t as r}from"./runtime-CI09VOSa.js";import{l as i,r as a,s as o}from"./_shared-CDvzvlgU.js";function s({title:e}){return(0,l.jsxs)(`div`,{className:`flex-1 bg-background p-6`,children:[(0,l.jsx)(`h2`,{className:`text-lg font-semibold`,children:e}),(0,l.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:r(`2wQU2t`,`Workspace content for the selected view.`)}),(0,l.jsxs)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2`,children:[(0,l.jsx)(`div`,{className:`h-24 rounded-xl border border-dashed border-border`}),(0,l.jsx)(`div`,{className:`h-24 rounded-xl border border-dashed border-border`})]})]})}function c({project:e,source:t,targets:n}){return(0,l.jsx)(a,{title:e,children:(0,l.jsxs)(`div`,{className:`flex h-[560px]`,children:[(0,l.jsx)(o,{project:e,source:t,targets:n,active:`content`}),(0,l.jsx)(s,{title:r(`qLieV`,`Content`)})]})})}var l,u,d,f,p,m;e((()=>{n(),i(),l=t(),u={title:`Prototype v2/Sidebar`,parameters:{layout:`fullscreen`,docs:{description:{component:`Prototype v2 (source-first): one project shape; languages stay quiet.

There is no "content project" vs "localization project", and nothing
announces a move from one language to many. A project simply shows the
languages its content uses; once it has target languages, the localization
tools are present under a plain group — the same as any other. Adding a
language is an ordinary setting (see the Project Languages story).`}}}},d={render:()=>(0,l.jsx)(`div`,{className:`min-h-screen bg-background p-8 text-foreground`,children:(0,l.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,l.jsx)(`h1`,{className:`text-xl font-semibold`,children:r(`2qSyaT`,`A project shows the languages it has`)}),(0,l.jsx)(`p`,{className:`mt-1 max-w-2xl text-sm text-muted-foreground`,children:r(`36fAjo`,`One project shape. The header states the languages as a fact; the localization tools are simply present once a project has targets. Adding a language is an ordinary setting — the workspace just reflects it, with nothing to announce.`)}),(0,l.jsxs)(`div`,{className:`mt-6 grid gap-6 lg:grid-cols-2`,children:[(0,l.jsx)(c,{project:`Help Center Articles`,source:`en-US`,targets:[]}),(0,l.jsx)(c,{project:`Acme Marketing Site`,source:`en-US`,targets:[`fr-FR`,`de-DE`,`ja-JP`]})]})]})})},f={render:()=>(0,l.jsxs)(`div`,{className:`flex h-screen bg-background text-foreground`,children:[(0,l.jsx)(o,{project:`Help Center Articles`,source:`en-US`,targets:[],active:`rewrite`}),(0,l.jsx)(s,{title:r(`XqdBu`,`Rewrite`)})]})},p={render:()=>(0,l.jsxs)(`div`,{className:`flex h-screen bg-background text-foreground`,children:[(0,l.jsx)(o,{project:`Acme Marketing Site`,source:`en-US`,targets:[`fr-FR`,`de-DE`,`ja-JP`],active:`translate`}),(0,l.jsx)(s,{title:r(`251e9A`,`Translate`)})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background p-8 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-xl font-semibold">A project shows the languages it has</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
          One project shape. The header states the languages as a fact; the localization tools are
          simply present once a project has targets. Adding a language is an ordinary setting — the
          workspace just reflects it, with nothing to announce.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <ShellCard project="Help Center Articles" source="en-US" targets={[]} />
          <ShellCard project="Acme Marketing Site" source="en-US" targets={["fr-FR", "de-DE", "ja-JP"]} />
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-screen bg-background text-foreground">
      <SourceFirstSidebar project="Help Center Articles" source="en-US" targets={[]} active="rewrite" />
      <PaneStub title="Rewrite" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-screen bg-background text-foreground">
      <SourceFirstSidebar project="Acme Marketing Site" source="en-US" targets={["fr-FR", "de-DE", "ja-JP"]} active="translate" />
      <PaneStub title="Translate" />
    </div>
}`,...p.parameters?.docs?.source}}},m=[`SideBySide`,`OneLanguage`,`SeveralLanguages`]}))();export{f as OneLanguage,p as SeveralLanguages,d as SideBySide,m as __namedExportsOrder,u as default};