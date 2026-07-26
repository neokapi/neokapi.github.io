import{i as e}from"./preload-helper-a38IrJcw.js";import{t}from"./jsx-runtime-DuIU0fMU.js";import{r as n,t as r}from"./runtime-rNvQ1D9s.js";import{t as i}from"./label-DHw9p71D.js";import{t as a}from"./badge-49ymzeuw.js";import{t as o}from"./button-Bf8BTLsa.js";import{i as s,o as c,s as l,t as u}from"./card-De1Kf3p_.js";import{t as d}from"./input-BTTJXJRq.js";import{Yt as f,i as p}from"./iframe-BiEJREcb.js";var m,h,g,_,v,y,b,x,S;e((()=>{n(),p(),m=t(),h={title:`Foundations/UI Primitives`,tags:[`autodocs`]},g={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-3 p-4`,children:[(0,m.jsx)(o,{children:r(`fCUespUnxZB`,`Primary`)}),(0,m.jsx)(o,{variant:`secondary`,children:r(`5dELixDSWwT`,`Secondary`)}),(0,m.jsx)(o,{variant:`destructive`,children:r(`kyrNawZb8o1`,`Destructive`)}),(0,m.jsx)(o,{variant:`ghost`,children:r(`jHKqcC5xbDo`,`Ghost`)}),(0,m.jsx)(o,{disabled:!0,children:r(`bGTQ3KSZUqv`,`Disabled`)})]})},_={render:()=>(0,m.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 p-4`,style:{maxWidth:600},children:[(0,m.jsx)(u,{children:(0,m.jsxs)(c,{children:[(0,m.jsx)(l,{children:r(`1zJQee8XOy6`,`Card Title`)}),(0,m.jsx)(s,{children:r(`3Frvqy4FhpO`,`Card description with some content.`)})]})}),(0,m.jsx)(u,{className:`bg-accent/30`,children:(0,m.jsxs)(c,{children:[(0,m.jsx)(l,{children:r(`8E5AI3MnzIY`,`Accent Card`)}),(0,m.jsx)(s,{children:r(`lmGEgs1ic3l`,`With background accent.`)})]})})]})},v={render:()=>(0,m.jsxs)(`div`,{className:`max-w-sm space-y-3 p-4`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{children:r(`3zw0IKd7qhU`,`Text Input`)}),(0,m.jsx)(d,{type:`text`,placeholder:r(`eIklT8G4Qhf`,`Enter text...`)})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{children:r(`665sRHz44nx`,`Disabled`)}),(0,m.jsx)(d,{type:`text`,value:`Read-only value`,disabled:!0})]})]})},y={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-2 p-4`,children:[(0,m.jsx)(a,{children:r(`5ckrIDKGJHl`,`Primary`)}),(0,m.jsx)(a,{variant:`secondary`,children:r(`lgeTq8VaDLv`,`Accent`)}),(0,m.jsx)(a,{variant:`destructive`,children:r(`dDSBmr7qhM5`,`Destructive`)}),(0,m.jsx)(a,{variant:`outline`,children:r(`1O49QEZLM2O`,`Success`)})]})},b={render:()=>(0,m.jsxs)(`div`,{className:`space-y-3 p-4`,children:[(0,m.jsx)(`h1`,{className:`text-3xl font-bold tracking-tight`,children:r(`2Pu6H22cz0b`,`Heading 1`)}),(0,m.jsx)(`h2`,{className:`text-xl font-semibold`,children:r(`ghGOKFDoPL5`,`Heading 2`)}),(0,m.jsx)(`h3`,{className:`text-sm font-medium`,children:r(`95BY8zPHxcX`,`Heading 3`)}),(0,m.jsx)(`p`,{className:`text-sm text-foreground`,children:r(`5SCjOWrOlWf`,`Body text in foreground color.`)}),(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:r(`lm6LGCHjVdJ`,`Muted text for secondary content.`)}),(0,m.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:r(`ixs0ijd0kx`,`Small caption text.`)})]})},x={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4 p-4`,children:[(0,m.jsx)(`h3`,{className:`text-sm font-medium`,children:r(`llEp4Cja8WJ`,`Theme Colors`)}),(0,m.jsx)(`div`,{className:`grid grid-cols-4 gap-2`,children:[{name:`Background`,cls:`bg-background border border-border`},{name:`Foreground`,cls:`bg-foreground`},{name:`Primary`,cls:`bg-primary`},{name:`Secondary`,cls:`bg-secondary`},{name:`Accent`,cls:`bg-accent`},{name:`Muted`,cls:`bg-muted`},{name:`Destructive`,cls:`bg-destructive`},{name:`Border`,cls:`bg-border`}].map(({name:e,cls:t})=>(0,m.jsxs)(`div`,{className:`text-center`,children:[(0,m.jsx)(`div`,{className:`h-10 rounded ${t}`}),(0,m.jsx)(`span`,{className:`mt-1 text-xs text-muted-foreground`,children:e})]},e))}),(0,m.jsx)(f,{})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 p-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4 p-4" style={{
    maxWidth: 600
  }}>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description with some content.</CardDescription>
        </CardHeader>
      </Card>
      <Card className="bg-accent/30">
        <CardHeader>
          <CardTitle>Accent Card</CardTitle>
          <CardDescription>With background accent.</CardDescription>
        </CardHeader>
      </Card>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm space-y-3 p-4">
      <div>
        <Label>Text Input</Label>
        <Input type="text" placeholder="Enter text..." />
      </div>
      <div>
        <Label>Disabled</Label>
        <Input type="text" value="Read-only value" disabled />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2 p-4">
      <Badge>Primary</Badge>
      <Badge variant="secondary">Accent</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Success</Badge>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 p-4">
      <h1 className="text-3xl font-bold tracking-tight">Heading 1</h1>
      <h2 className="text-xl font-semibold">Heading 2</h2>
      <h3 className="text-sm font-medium">Heading 3</h3>
      <p className="text-sm text-foreground">Body text in foreground color.</p>
      <p className="text-sm text-muted-foreground">Muted text for secondary content.</p>
      <p className="text-xs text-muted-foreground">Small caption text.</p>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <h3 className="text-sm font-medium">Theme Colors</h3>
      <div className="grid grid-cols-4 gap-2">
        {[{
        name: "Background",
        cls: "bg-background border border-border"
      }, {
        name: "Foreground",
        cls: "bg-foreground"
      }, {
        name: "Primary",
        cls: "bg-primary"
      }, {
        name: "Secondary",
        cls: "bg-secondary"
      }, {
        name: "Accent",
        cls: "bg-accent"
      }, {
        name: "Muted",
        cls: "bg-muted"
      }, {
        name: "Destructive",
        cls: "bg-destructive"
      }, {
        name: "Border",
        cls: "bg-border"
      }].map(({
        name,
        cls
      }) => <div key={name} className="text-center">
            <div className={\`h-10 rounded \${cls}\`} />
            <span className="mt-1 text-xs text-muted-foreground">{name}</span>
          </div>)}
      </div>
      <Separator />
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Buttons`,`Cards`,`Inputs`,`Badges`,`Typography`,`Colors`]}))();export{y as Badges,g as Buttons,_ as Cards,x as Colors,v as Inputs,b as Typography,S as __namedExportsOrder,h as default};