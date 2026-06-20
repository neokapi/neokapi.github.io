import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{r as n,t as r}from"./runtime-CI09VOSa.js";import{t as i}from"./label-C1tohmzx.js";import{t as a}from"./button-D6zYGAvL.js";import{i as o,o as s,s as c,t as l}from"./card-CHo_fh0q.js";import{t as u}from"./input-CNuDCCln.js";import{t as d}from"./badge-B925V-__.js";import{Ft as f,i as p}from"./iframe-ch6sGNiz.js";var m,h,g,_,v,y,b,x,S;e((()=>{n(),p(),m=t(),h={title:`Foundations/UI Primitives`,tags:[`autodocs`]},g={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-3 p-4`,children:[(0,m.jsx)(a,{children:r(`1lrQbz`,`Primary`)}),(0,m.jsx)(a,{variant:`secondary`,children:r(`4FKiLi`,`Secondary`)}),(0,m.jsx)(a,{variant:`destructive`,children:r(`ass5F`,`Destructive`)}),(0,m.jsx)(a,{variant:`ghost`,children:r(`136ZI5`,`Ghost`)}),(0,m.jsx)(a,{disabled:!0,children:r(`1nZLT8`,`Disabled`)})]})},_={render:()=>(0,m.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 p-4`,style:{maxWidth:600},children:[(0,m.jsx)(l,{children:(0,m.jsxs)(s,{children:[(0,m.jsx)(c,{children:r(`bClBZ`,`Card Title`)}),(0,m.jsx)(o,{children:r(`3wrPjT`,`Card description with some content.`)})]})}),(0,m.jsx)(l,{className:`bg-accent/30`,children:(0,m.jsxs)(s,{children:[(0,m.jsx)(c,{children:r(`4oXrZ5`,`Accent Card`)}),(0,m.jsx)(o,{children:r(`4n0j3B`,`With background accent.`)})]})})]})},v={render:()=>(0,m.jsxs)(`div`,{className:`max-w-sm space-y-3 p-4`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{children:r(`2YLrIj`,`Text Input`)}),(0,m.jsx)(u,{type:`text`,placeholder:r(`4kgyIB`,`Enter text...`)})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(i,{children:r(`3lLQxm`,`Disabled`)}),(0,m.jsx)(u,{type:`text`,value:`Read-only value`,disabled:!0})]})]})},y={render:()=>(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-2 p-4`,children:[(0,m.jsx)(d,{children:r(`WaxnU`,`Primary`)}),(0,m.jsx)(d,{variant:`secondary`,children:r(`3V1ie6`,`Accent`)}),(0,m.jsx)(d,{variant:`destructive`,children:r(`3AZZ2y`,`Destructive`)}),(0,m.jsx)(d,{variant:`outline`,children:r(`4g7XQl`,`Success`)})]})},b={render:()=>(0,m.jsxs)(`div`,{className:`space-y-3 p-4`,children:[(0,m.jsx)(`h1`,{className:`text-3xl font-bold tracking-tight`,children:r(`25yCaN`,`Heading 1`)}),(0,m.jsx)(`h2`,{className:`text-xl font-semibold`,children:r(`4d7Wu0`,`Heading 2`)}),(0,m.jsx)(`h3`,{className:`text-sm font-medium`,children:r(`1hyi2l`,`Heading 3`)}),(0,m.jsx)(`p`,{className:`text-sm text-foreground`,children:r(`12kAST`,`Body text in foreground color.`)}),(0,m.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:r(`19jJkV`,`Muted text for secondary content.`)}),(0,m.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:r(`S3fL5`,`Small caption text.`)})]})},x={render:()=>(0,m.jsxs)(`div`,{className:`space-y-4 p-4`,children:[(0,m.jsx)(`h3`,{className:`text-sm font-medium`,children:r(`n45S4`,`Theme Colors`)}),(0,m.jsx)(`div`,{className:`grid grid-cols-4 gap-2`,children:[{name:`Background`,cls:`bg-background border border-border`},{name:`Foreground`,cls:`bg-foreground`},{name:`Primary`,cls:`bg-primary`},{name:`Secondary`,cls:`bg-secondary`},{name:`Accent`,cls:`bg-accent`},{name:`Muted`,cls:`bg-muted`},{name:`Destructive`,cls:`bg-destructive`},{name:`Border`,cls:`bg-border`}].map(({name:e,cls:t})=>(0,m.jsxs)(`div`,{className:`text-center`,children:[(0,m.jsx)(`div`,{className:`h-10 rounded ${t}`}),(0,m.jsx)(`span`,{className:`mt-1 text-xs text-muted-foreground`,children:e})]},e))}),(0,m.jsx)(f,{})]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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