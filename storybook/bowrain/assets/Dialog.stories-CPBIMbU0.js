import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{t as n}from"./src-DmxoPoJd.js";import{t as r}from"./button-BjQmflmu.js";import{_ as i,f as a,g as o,h as s,m as c,p as l,u}from"./command-DA3tibQ2.js";var d,f,p,m,h;e((()=>{n(),d=t(),f={title:`Foundations/Dialog`,component:u,tags:[`autodocs`]},p={render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(i,{asChild:!0,children:(0,d.jsx)(r,{variant:`outline`,children:`Open Dialog`})}),(0,d.jsxs)(a,{children:[(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{children:`Create Project`}),(0,d.jsx)(l,{children:`Set up a new localization project. You can configure languages and formats after creation.`})]}),(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Project form goes here.`}),(0,d.jsx)(c,{children:(0,d.jsx)(r,{children:`Create`})})]})]})},m={render:()=>(0,d.jsxs)(u,{children:[(0,d.jsx)(i,{asChild:!0,children:(0,d.jsx)(r,{variant:`outline`,children:`Open Dialog`})}),(0,d.jsxs)(a,{showCloseButton:!1,children:[(0,d.jsxs)(s,{children:[(0,d.jsx)(o,{children:`Confirm Action`}),(0,d.jsx)(l,{children:`Are you sure you want to push these changes?`})]}),(0,d.jsx)(c,{showCloseButton:!0,children:(0,d.jsx)(r,{children:`Confirm`})})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Set up a new localization project. You can configure languages and formats after
            creation.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">Project form goes here.</p>
        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure you want to push these changes?</DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithCloseInFooter`]}))();export{p as Default,m as WithCloseInFooter,h as __namedExportsOrder,f as default};