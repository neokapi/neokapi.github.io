import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./file-text-c7u-0Ywr.js";import{n as i,t as a}from"./workflow-DccCjY-k.js";import{n as o,t as s}from"./badge-Cx7ESqx6.js";import{n as c,t as l}from"./item-card-BQ-HmUah.js";import{n as u,t as d}from"./confirm-delete-button-Dj94F_ch.js";var f,p,m,h,g,_;function v(){return(v=e((()=>{c(),u(),o(),n(),i(),f=t(),p={title:`Foundations/ItemCard`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`Universal card for list items. Consistent padding, hover, selection, and group behavior. Built on shadcn Card.`}}}},m={render:()=>(0,f.jsxs)(`div`,{className:`max-w-md space-y-2`,children:[(0,f.jsxs)(l,{children:[(0,f.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,f.jsx)(r,{size:14,className:`text-primary`}),(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`src/i18n/en/*.json`})]}),(0,f.jsx)(d,{onDelete:()=>{},mode:`icon`})]}),(0,f.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:`Target: src/i18n/{lang}/*.json`})]}),(0,f.jsx)(l,{children:(0,f.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,f.jsx)(a,{size:14,className:`text-primary`}),(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`translate-and-qa`})]}),(0,f.jsx)(s,{variant:`secondary`,className:`text-[10px]`,children:`2 steps`})]})})]})},h={render:()=>(0,f.jsx)(`div`,{className:`max-w-md`,children:(0,f.jsxs)(l,{clickable:!0,onClick:()=>alert(`Clicked!`),children:[(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`Click me`}),(0,f.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`This card has a pointer cursor and hover border.`})]})})},g={render:()=>(0,f.jsx)(`div`,{className:`max-w-md`,children:(0,f.jsxs)(l,{selected:!0,children:[(0,f.jsx)(`span`,{className:`text-sm font-medium`,children:`Selected card`}),(0,f.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Primary border and subtle background.`})]})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-2">
      <ItemCard>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText size={14} className="text-primary" />
            <span className="text-sm font-medium">src/i18n/en/*.json</span>
          </div>
          <ConfirmDeleteButton onDelete={() => {}} mode="icon" />
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          Target: src/i18n/&#123;lang&#125;/*.json
        </p>
      </ItemCard>
      <ItemCard>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Workflow size={14} className="text-primary" />
            <span className="text-sm font-medium">translate-and-qa</span>
          </div>
          <Badge variant="secondary" className="text-[10px]">
            2 steps
          </Badge>
        </div>
      </ItemCard>
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <ItemCard clickable onClick={() => alert("Clicked!")}>
        <span className="text-sm font-medium">Click me</span>
        <p className="text-xs text-muted-foreground">
          This card has a pointer cursor and hover border.
        </p>
      </ItemCard>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <ItemCard selected>
        <span className="text-sm font-medium">Selected card</span>
        <p className="text-xs text-muted-foreground">Primary border and subtle background.</p>
      </ItemCard>
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Clickable`,`Selected`]})))()}v();export{h as Clickable,m as Default,g as Selected,_ as __namedExportsOrder,p as default};