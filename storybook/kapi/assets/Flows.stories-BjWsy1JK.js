import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{n,r,t as i}from"./runtime-CI09VOSa.js";import{Et as a,I as o,K as s,Mi as c,S as l,St as u,c as d,gr as f,ia as p,nr as m,o as h,t as g,vi as _,vn as v,vt as y,wi as b}from"./lucide-react-Cx_fEK42.js";import{t as x}from"./button-D6zYGAvL.js";import{t as S}from"./badge-B925V-__.js";import{i as C}from"./iframe-CzNCl1Kr.js";import{c as w,l as T,r as E}from"./_shared-CP8v-NJr.js";function D({kind:e}){return e===`localization`?(0,P.jsx)(S,{variant:`secondary`,className:`gap-1 text-[10px]`,children:n(`1qRZWq`,`{=m0} Localization`,{"=m0":(0,P.jsx)(v,{size:10})})}):(0,P.jsx)(S,{variant:`outline`,className:`gap-1 text-[10px] text-muted-foreground`,children:n(`34tpRw`,`{=m0} Content`,{"=m0":(0,P.jsx)(f,{size:10})})})}function O({children:e}){return(0,P.jsx)(`span`,{className:`rounded-md bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground`,children:e})}function k({flow:e,compact:t}){return(0,P.jsx)(`div`,{className:`rounded-xl border border-border bg-card p-3.5`,children:(0,P.jsxs)(`div`,{className:`flex items-start justify-between gap-3`,children:[(0,P.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,P.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,P.jsx)(d,{size:14,className:`shrink-0 text-muted-foreground`}),(0,P.jsx)(`span`,{className:`truncate text-sm font-medium`,children:e.name}),(0,P.jsx)(D,{kind:e.kind})]}),!t&&(0,P.jsx)(`p`,{className:`mt-1 text-xs leading-relaxed text-muted-foreground`,children:e.description}),(0,P.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-1`,children:e.steps.map((e,t)=>(0,P.jsxs)(`span`,{className:`flex items-center gap-1`,children:[t>0&&(0,P.jsx)(c,{size:11,className:`text-muted-foreground/50`}),(0,P.jsx)(O,{children:e})]},e))})]}),(0,P.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,P.jsx)(x,{size:`xs`,variant:`outline`,children:n(`tlwnC`,`{=m0} Run`,{"=m0":(0,P.jsx)(u,{size:12})})}),!t&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(x,{size:`icon-sm`,variant:`ghost`,"aria-label":i(`3DMJwF`,`Edit flow`),children:(0,P.jsx)(a,{size:14})}),(0,P.jsx)(x,{size:`icon-sm`,variant:`ghost`,"aria-label":i(`1AXsoc`,`Delete flow`),children:(0,P.jsx)(l,{size:14})})]})]})]})})}function A({compact:e}){return(0,P.jsx)(`div`,{className:`space-y-2`,children:w.map(t=>(0,P.jsx)(k,{flow:t,compact:e},t.name))})}function j({active:e}){return(0,P.jsxs)(`aside`,{className:`flex w-44 shrink-0 flex-col border-r border-border bg-muted/20 p-2`,children:[(0,P.jsx)(`nav`,{className:`flex flex-1 flex-col gap-0.5`,children:I.map(({view:t,label:n,icon:r})=>(0,P.jsxs)(`div`,{className:`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm ${e===t?`bg-primary text-primary-foreground`:`text-muted-foreground`}`,children:[(0,P.jsx)(r,{size:17,strokeWidth:1.5}),(0,P.jsx)(`span`,{children:n})]},t))}),(0,P.jsx)(`div`,{className:`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground`,children:n(`2zDqW8`,`{=m0} {=m1}Project Settings{/=m1}`,{"=m0":(0,P.jsx)(o,{size:17,strokeWidth:1.5}),"=m1":(0,P.jsx)(`span`,{children:`Project Settings`})})})]})}function M({title:e,blurb:t,active:n,children:r}){return(0,P.jsx)(`div`,{className:`min-h-screen bg-background p-8 text-foreground`,children:(0,P.jsxs)(`div`,{className:`mx-auto max-w-5xl`,children:[(0,P.jsx)(`h1`,{className:`text-xl font-semibold`,children:e}),(0,P.jsx)(`p`,{className:`mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground`,children:t}),(0,P.jsx)(`div`,{className:`mt-5`,children:(0,P.jsx)(E,{title:i(`3k0QQl`,`Acme Marketing Site`),children:(0,P.jsxs)(`div`,{className:`flex h-[560px]`,children:[(0,P.jsx)(j,{active:n}),r]})})})]})})}function N({children:e}){return(0,P.jsx)(`div`,{className:`mb-2 mt-5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 first:mt-0`,children:e})}var P,F,I,L,R,z,B,V,H;e((()=>{r(),g(),C(),T(),P=t(),F={title:`Prototype v2/Flows`,parameters:{layout:`fullscreen`,docs:{description:{component:`Prototype v2 (source-first): where do FLOWS live?

Flows are no longer a sidebar pillar (no rail icon). Everyone has them, as a
shared library you create / edit / delete and run — from a project or ad-hoc.
The open question is the conceptual HOME of that library. These three
concepts put the same flows in three different places so we can compare:

  A — In the Project  (flows are project config, in the recipe)
  B — In the Toolbox  (a flow is a saved pipeline of tools)
  C — Contextual      (flows aren't a place — a "Run a flow" action opens them)

The flow data and the flow-library cards are shared; only the container and
the entry point change.`}}}},I=[{view:`home`,label:`Home`,icon:p},{view:`project`,label:`Project`,icon:m},{view:`content`,label:`Content`,icon:f},{view:`checks`,label:`Checks`,icon:s},{view:`toolbox`,label:`Toolbox`,icon:h},{view:`termbases`,label:`Termbases`,icon:b}],L={name:`✓ Decided — Toolbox library`,render:()=>(0,P.jsx)(M,{title:i(`4baOQB`,`Decided — Flows live in the Toolbox`),blurb:`One flows library, beside the single tools. It splits into the project's own flows (in the recipe, shared with the team) and saved flows reusable across every project. Create / edit / delete here; editing opens the full flow-editor canvas.`,active:`toolbox`,children:(0,P.jsxs)(`div`,{className:`flex-1 overflow-y-auto bg-background p-6`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-semibold`,children:i(`73qoq`,`Toolbox`)}),(0,P.jsx)(`p`,{className:`mt-0.5 text-sm text-muted-foreground`,children:i(`2SqqTe`,`Single tools and saved flows.`)}),(0,P.jsxs)(`div`,{className:`mt-4 flex gap-1 border-b border-border`,children:[(0,P.jsx)(`div`,{className:`border-b-2 border-transparent px-3 py-1.5 text-sm text-muted-foreground`,children:i(`2hdFAK`,`Tools`)}),(0,P.jsx)(`div`,{className:`-mb-px border-b-2 border-primary px-3 py-1.5 text-sm font-medium text-foreground`,children:i(`1VcZTW`,`Flows`)})]}),(0,P.jsxs)(`div`,{className:`mt-4 flex items-center justify-between`,children:[(0,P.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:i(`1p1bA6`,`Run against the open project, or any file.`)}),(0,P.jsx)(x,{size:`xs`,variant:`outline`,children:n(`15ZWS9`,`{=m0} New flow`,{"=m0":(0,P.jsx)(y,{size:13})})})]}),(0,P.jsx)(N,{children:i(`2Tq4YN`,`This project`)}),(0,P.jsx)(`div`,{className:`space-y-2`,children:w.slice(0,2).map(e=>(0,P.jsx)(k,{flow:e},e.name))}),(0,P.jsx)(N,{children:i(`3MCgxu`,`Saved · all projects`)}),(0,P.jsx)(`div`,{className:`space-y-2`,children:w.slice(2).map(e=>(0,P.jsx)(k,{flow:e},e.name))}),(0,P.jsx)(`p`,{className:`mt-2 text-xs text-muted-foreground/70`,children:i(`PLp8f`,`Saved flows are available in every project — run one here, or add it to this project.`)})]})})},R={name:`✓ Decided — Run in context`,render:()=>(0,P.jsx)(M,{title:i(`3RJkvQ`,`Decided — Run a flow where you work`),blurb:`The library lives in the Toolbox, but you don't have to go there to run one. A 'Run a flow' control in Content (and Checks) opens the same flows to run on what you're looking at; 'Manage flows' jumps to the Toolbox.`,active:`content`,children:(0,P.jsxs)(`div`,{className:`flex-1 overflow-y-auto bg-background p-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-semibold`,children:i(`3Oux99`,`Content`)}),(0,P.jsxs)(`div`,{className:`relative`,children:[(0,P.jsx)(x,{size:`xs`,className:`gap-1`,children:n(`1Xa81a`,`{=m0} Run a flow {=m1}`,{"=m0":(0,P.jsx)(d,{size:12}),"=m1":(0,P.jsx)(_,{size:12})})}),(0,P.jsxs)(`div`,{className:`absolute right-0 top-full z-10 mt-1 w-64 rounded-lg border border-border bg-popover p-1.5 shadow-lg`,children:[(0,P.jsx)(`div`,{className:`px-2 pb-1 pt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70`,children:i(`xOtU4`,`Run on selection`)}),w.map(e=>(0,P.jsxs)(`button`,{type:`button`,className:`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent`,children:[(0,P.jsx)(d,{size:14,className:`shrink-0 text-muted-foreground`}),(0,P.jsx)(`span`,{className:`flex-1 truncate text-left`,children:e.name}),(0,P.jsx)(D,{kind:e.kind})]},e.name)),(0,P.jsx)(`div`,{className:`my-1 h-px bg-border`}),(0,P.jsx)(`button`,{type:`button`,className:`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent`,children:n(`1I5bTD`,`{=m0} Manage flows…`,{"=m0":(0,P.jsx)(h,{size:14})})})]})]})]}),(0,P.jsx)(`div`,{className:`mt-4 space-y-1.5`,children:[`home.en-US.json`,`about.en-US.json`,`pricing.en-US.json`,`faq.en-US.json`].map(e=>(0,P.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm`,children:[(0,P.jsx)(f,{size:14,className:`text-muted-foreground`}),(0,P.jsx)(`span`,{className:`font-mono text-xs`,children:e})]},e))})]})})},z={name:`A — In the Project`,render:()=>(0,P.jsx)(M,{title:i(`39CX1b`,`Concept A — Flows live in the Project`),blurb:`Flows are project configuration — they live in the project's recipe. You create, edit, and run them from the project; the toolbox can still run a saved flow ad-hoc. Reached via Project — no Flows rail icon.`,active:`project`,children:(0,P.jsxs)(`div`,{className:`flex-1 overflow-y-auto bg-background p-6`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-semibold`,children:i(`1zfhDs`,`Project`)}),(0,P.jsx)(`p`,{className:`mt-0.5 text-sm text-muted-foreground`,children:i(`3I0Stl`,`en-US → fr-FR, de-DE · 248 blocks`)}),(0,P.jsxs)(`div`,{className:`mt-6 flex items-center justify-between`,children:[(0,P.jsx)(`h3`,{className:`text-sm font-semibold`,children:i(`2VLskt`,`Flows`)}),(0,P.jsx)(x,{size:`xs`,variant:`outline`,children:n(`15ZWS9`,`{=m0} New flow`,{"=m0":(0,P.jsx)(y,{size:13})})})]}),(0,P.jsx)(`p`,{className:`mb-3 mt-0.5 text-xs text-muted-foreground`,children:i(`1iPTge`,`Saved pipelines for this project. Run here, from Content, or ad-hoc in the Toolbox.`)}),(0,P.jsx)(A,{})]})})},B={name:`B — In the Toolbox`,render:()=>(0,P.jsx)(M,{title:i(`D9SFn`,`Concept B — Flows live in the Toolbox`),blurb:`A flow is a saved pipeline of tools, so it lives beside the single tools. Create / edit / delete here; run ad-hoc on a file or against the open project. Reached via Toolbox — no Flows rail icon.`,active:`toolbox`,children:(0,P.jsxs)(`div`,{className:`flex-1 overflow-y-auto bg-background p-6`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-semibold`,children:i(`73qoq`,`Toolbox`)}),(0,P.jsx)(`p`,{className:`mt-0.5 text-sm text-muted-foreground`,children:i(`2SqqTe`,`Single tools and saved flows.`)}),(0,P.jsxs)(`div`,{className:`mt-4 flex gap-1 border-b border-border`,children:[(0,P.jsx)(`div`,{className:`border-b-2 border-transparent px-3 py-1.5 text-sm text-muted-foreground`,children:i(`2hdFAK`,`Tools`)}),(0,P.jsx)(`div`,{className:`-mb-px border-b-2 border-primary px-3 py-1.5 text-sm font-medium text-foreground`,children:i(`1VcZTW`,`Flows`)})]}),(0,P.jsxs)(`div`,{className:`mt-4 flex items-center justify-between`,children:[(0,P.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:i(`3QuY7r`,`A flow chains tools into one saved step.`)}),(0,P.jsx)(x,{size:`xs`,variant:`outline`,children:n(`15ZWS9`,`{=m0} New flow`,{"=m0":(0,P.jsx)(y,{size:13})})})]}),(0,P.jsx)(`div`,{className:`mt-3`,children:(0,P.jsx)(A,{})})]})})},V={name:`C — Contextual action`,render:()=>(0,P.jsx)(M,{title:i(`47F5Uc`,`Concept C — Flows are an action, not a place`),blurb:`There is no Flows destination at all. A 'Run a flow' control wherever you work opens the flow library — to run on what you're looking at, or to create and edit. Shown here as a panel opened from Content.`,active:`content`,children:(0,P.jsxs)(`div`,{className:`flex flex-1`,children:[(0,P.jsxs)(`div`,{className:`flex-1 overflow-y-auto bg-background p-6`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`h2`,{className:`text-lg font-semibold`,children:i(`2Gzkin`,`Content`)}),(0,P.jsx)(x,{size:`xs`,className:`gap-1`,children:n(`1Xa81a`,`{=m0} Run a flow {=m1}`,{"=m0":(0,P.jsx)(d,{size:12}),"=m1":(0,P.jsx)(_,{size:12})})})]}),(0,P.jsx)(`div`,{className:`mt-4 space-y-1.5`,children:[`home.en-US.json`,`about.en-US.json`,`pricing.en-US.json`,`faq.en-US.json`].map(e=>(0,P.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm`,children:[(0,P.jsx)(f,{size:14,className:`text-muted-foreground`}),(0,P.jsx)(`span`,{className:`font-mono text-xs`,children:e})]},e))})]}),(0,P.jsxs)(`aside`,{className:`w-72 shrink-0 border-l border-border bg-muted/10 p-4`,children:[(0,P.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,P.jsx)(`h3`,{className:`flex items-center gap-1.5 text-sm font-semibold`,children:n(`DydUK`,`{=m0} Flows`,{"=m0":(0,P.jsx)(d,{size:14})})}),(0,P.jsx)(x,{size:`xs`,variant:`ghost`,children:n(`1kSGso`,`{=m0} New`,{"=m0":(0,P.jsx)(y,{size:13})})})]}),(0,P.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:i(`XVEbV`,`Run on the current content, or edit.`)}),(0,P.jsx)(`div`,{className:`mt-3`,children:(0,P.jsx)(A,{compact:!0})}),(0,P.jsx)(`button`,{type:`button`,className:`mt-3 text-xs font-medium text-primary hover:underline`,children:i(`15qhKa`,`Manage flows…`)})]})]})})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "✓ Decided — Toolbox library",
  render: () => <ConceptShell title="Decided — Flows live in the Toolbox" blurb="One flows library, beside the single tools. It splits into the project's own flows (in the recipe, shared with the team) and saved flows reusable across every project. Create / edit / delete here; editing opens the full flow-editor canvas." active="toolbox">
      <div className="flex-1 overflow-y-auto bg-background p-6">
        <h2 className="text-lg font-semibold">Toolbox</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">Single tools and saved flows.</p>

        <div className="mt-4 flex gap-1 border-b border-border">
          <div className="border-b-2 border-transparent px-3 py-1.5 text-sm text-muted-foreground">
            Tools
          </div>
          <div className="-mb-px border-b-2 border-primary px-3 py-1.5 text-sm font-medium text-foreground">
            Flows
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            Run against the open project, or any file.
          </p>
          <Button size="xs" variant="outline">
            <Plus size={13} /> New flow
          </Button>
        </div>

        <SectionLabel>This project</SectionLabel>
        <div className="space-y-2">
          {configuredFlows.slice(0, 2).map(f => <FlowCard key={f.name} flow={f} />)}
        </div>

        <SectionLabel>Saved · all projects</SectionLabel>
        <div className="space-y-2">
          {configuredFlows.slice(2).map(f => <FlowCard key={f.name} flow={f} />)}
        </div>
        <p className="mt-2 text-xs text-muted-foreground/70">
          Saved flows are available in every project — run one here, or add it to this project.
        </p>
      </div>
    </ConceptShell>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "✓ Decided — Run in context",
  render: () => <ConceptShell title="Decided — Run a flow where you work" blurb="The library lives in the Toolbox, but you don't have to go there to run one. A 'Run a flow' control in Content (and Checks) opens the same flows to run on what you're looking at; 'Manage flows' jumps to the Toolbox." active="content">
      <div className="flex-1 overflow-y-auto bg-background p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Content</h2>
          <div className="relative">
            <Button size="xs" className="gap-1">
              <Workflow size={12} /> Run a flow
              <ChevronDown size={12} />
            </Button>
            {/* Open picker popover. */}
            <div className="absolute right-0 top-full z-10 mt-1 w-64 rounded-lg border border-border bg-popover p-1.5 shadow-lg">
              <div className="px-2 pb-1 pt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                Run on selection
              </div>
              {configuredFlows.map(f => <button key={f.name} type="button" className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                  <Workflow size={14} className="shrink-0 text-muted-foreground" />
                  <span className="flex-1 truncate text-left">{f.name}</span>
                  <FlowKindBadge kind={f.kind} />
                </button>)}
              <div className="my-1 h-px bg-border" />
              <button type="button" className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent">
                <Wrench size={14} /> Manage flows…
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-1.5">
          {["home.en-US.json", "about.en-US.json", "pricing.en-US.json", "faq.en-US.json"].map(f => <div key={f} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm">
                <FileText size={14} className="text-muted-foreground" />
                <span className="font-mono text-xs">{f}</span>
              </div>)}
        </div>
      </div>
    </ConceptShell>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: "A — In the Project",
  render: () => <ConceptShell title="Concept A — Flows live in the Project" blurb="Flows are project configuration — they live in the project's recipe. You create, edit, and run them from the project; the toolbox can still run a saved flow ad-hoc. Reached via Project — no Flows rail icon." active="project">
      <div className="flex-1 overflow-y-auto bg-background p-6">
        <h2 className="text-lg font-semibold">Project</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">en-US → fr-FR, de-DE · 248 blocks</p>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-sm font-semibold">Flows</h3>
          <Button size="xs" variant="outline">
            <Plus size={13} /> New flow
          </Button>
        </div>
        <p className="mb-3 mt-0.5 text-xs text-muted-foreground">
          Saved pipelines for this project. Run here, from Content, or ad-hoc in the Toolbox.
        </p>
        <FlowList />
      </div>
    </ConceptShell>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "B — In the Toolbox",
  render: () => <ConceptShell title="Concept B — Flows live in the Toolbox" blurb="A flow is a saved pipeline of tools, so it lives beside the single tools. Create / edit / delete here; run ad-hoc on a file or against the open project. Reached via Toolbox — no Flows rail icon." active="toolbox">
      <div className="flex-1 overflow-y-auto bg-background p-6">
        <h2 className="text-lg font-semibold">Toolbox</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">Single tools and saved flows.</p>

        <div className="mt-4 flex gap-1 border-b border-border">
          <div className="border-b-2 border-transparent px-3 py-1.5 text-sm text-muted-foreground">
            Tools
          </div>
          <div className="-mb-px border-b-2 border-primary px-3 py-1.5 text-sm font-medium text-foreground">
            Flows
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">A flow chains tools into one saved step.</p>
          <Button size="xs" variant="outline">
            <Plus size={13} /> New flow
          </Button>
        </div>
        <div className="mt-3">
          <FlowList />
        </div>
      </div>
    </ConceptShell>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "C — Contextual action",
  render: () => <ConceptShell title="Concept C — Flows are an action, not a place" blurb="There is no Flows destination at all. A 'Run a flow' control wherever you work opens the flow library — to run on what you're looking at, or to create and edit. Shown here as a panel opened from Content." active="content">
      <div className="flex flex-1">
        <div className="flex-1 overflow-y-auto bg-background p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Content</h2>
            <Button size="xs" className="gap-1">
              <Workflow size={12} /> Run a flow
              <ChevronDown size={12} />
            </Button>
          </div>
          <div className="mt-4 space-y-1.5">
            {["home.en-US.json", "about.en-US.json", "pricing.en-US.json", "faq.en-US.json"].map(f => <div key={f} className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm">
                  <FileText size={14} className="text-muted-foreground" />
                  <span className="font-mono text-xs">{f}</span>
                </div>)}
          </div>
        </div>

        {/* Flows library, opened as a panel from the "Run a flow" control. */}
        <aside className="w-72 shrink-0 border-l border-border bg-muted/10 p-4">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-1.5 text-sm font-semibold">
              <Workflow size={14} /> Flows
            </h3>
            <Button size="xs" variant="ghost">
              <Plus size={13} /> New
            </Button>
          </div>
          <p className="mt-0.5 text-xs text-muted-foreground">
            Run on the current content, or edit.
          </p>
          <div className="mt-3">
            <FlowList compact />
          </div>
          <button type="button" className="mt-3 text-xs font-medium text-primary hover:underline">
            Manage flows…
          </button>
        </aside>
      </div>
    </ConceptShell>
}`,...V.parameters?.docs?.source}}},H=[`Decided_ToolboxLibrary`,`Decided_RunInContext`,`A_InProject`,`B_InToolbox`,`C_Contextual`]}))();export{z as A_InProject,B as B_InToolbox,V as C_Contextual,R as Decided_RunInContext,L as Decided_ToolboxLibrary,H as __namedExportsOrder,F as default};