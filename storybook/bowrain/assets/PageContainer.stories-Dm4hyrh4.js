import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{r as n,t as r}from"./runtime-BZw5Iiqg.js";import{n as i,t as a}from"./input-CuuumisQ.js";import{n as o,t as s}from"./PageHeader-uYEVFyZZ.js";import{n as c,r as l,t as u}from"./page-container-Zf30AVLO.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{n(),l(),o(),i(),d=t(),f={title:`Patterns/PageContainer`,component:u,parameters:{layout:`fullscreen`,docs:{description:{component:`The column a page sits in. A page names its width once, by its shape, and
the container centres it with the shared side padding.`}}}},p=[`narrow`,`standard`,`wide`],m={render:()=>(0,d.jsx)(`div`,{className:`min-h-screen bg-background text-foreground`,children:p.map(e=>(0,d.jsx)(u,{width:e,children:(0,d.jsx)(`div`,{className:`rounded-md border border-dashed p-4 text-sm text-muted-foreground`,children:e})},e))})},h={render:()=>(0,d.jsx)(`div`,{className:`min-h-screen bg-background text-foreground`,children:(0,d.jsxs)(u,{width:`standard`,children:[(0,d.jsx)(s,{title:r(`k03pySaAMNm`,`Project settings`)}),(0,d.jsxs)(`div`,{className:`divide-y`,children:[(0,d.jsx)(c,{label:r(`eh6T2O3ORrv`,`Source language`),htmlFor:`src`,children:(0,d.jsx)(a,{id:`src`,defaultValue:`English`})}),(0,d.jsx)(c,{label:r(`dPJu4ZrtQs`,`Default encoding`),help:`Used when a file does not declare one.`,children:(0,d.jsx)(a,{defaultValue:`Auto-detect`})})]})]})})},g=[`Widths`,`SettingsPage`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background text-foreground">
      {WIDTHS.map(w => <PageContainer key={w} width={w}>
          <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
            {w}
          </div>
        </PageContainer>)}
    </div>
}`,...m.parameters?.docs?.source},description:{story:`The three bounded widths, one above the other, on a wide window.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background text-foreground">
      <PageContainer width="standard">
        <PageHeader title="Project settings" />
        <div className="divide-y">
          <SettingsRow label="Source language" htmlFor="src">
            <Input id="src" defaultValue="English" />
          </SettingsRow>
          <SettingsRow label="Default encoding" help="Used when a file does not declare one.">
            <Input defaultValue="Auto-detect" />
          </SettingsRow>
        </div>
      </PageContainer>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`A settings page: labels on the left, controls filling the column.`,...h.parameters?.docs?.description}}}})))()}_();export{h as SettingsPage,m as Widths,g as __namedExportsOrder,f as default};