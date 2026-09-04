import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,t as o}from"./AppShell-CnPxB1DY.js";import{a as s,l as c,o as l,u}from"./api-DTu1L6sR.js";import{ar as d,or as f}from"./iframe-C1kkRjck.js";import{n as p,t as m}from"./mock-adapter-Cl6kDaDI.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),h=t(),a(),f(),u(),l(),p(),g=n(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={id:`ws-1`,name:`Demo Workspace`,slug:`demo`,description:``,logo_url:``,type:`personal`,role:`owner`},y={id:`ws-2`,name:`Acme Corp`,slug:`acme`,description:``,logo_url:``,type:`team`,role:`editor`},b={id:`proj-1`,name:`Marketing Website`,default_source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`,`es-ES`],workspace_id:`ws-1`,items:[{id:`itm-lnd`,name:`landing.html`,format:`html`,type:`file`,size:12e3,block_count:48,word_count:1320},{id:`itm-abt`,name:`about.json`,format:`json`,type:`file`,size:4200,block_count:22,word_count:280},{id:`itm-faq`,name:`faq.md`,format:`md`,type:`file`,size:8e3,block_count:35,word_count:620},{id:`itm-prc`,name:`pricing.xliff`,format:`xliff`,type:`file`,size:6e3,block_count:18,word_count:190}],streams:[{name:`main`,parent:``,base_cursor:0,archived:!1,visibility:`public`,description:``,created_at:`2025-12-01T10:00:00Z`,created_by:`user-1`},{name:`q1-campaign`,parent:`main`,base_cursor:5,archived:!1,visibility:`public`,description:`Q1 campaign`,created_at:`2026-02-01T10:00:00Z`,created_by:`user-1`},{name:`review/alice`,parent:`main`,base_cursor:3,archived:!1,visibility:`shared`,description:`Alice's review`,created_at:`2026-03-01T10:00:00Z`,created_by:`user-2`,shared_with:[`user-1`]}],created_at:`2025-12-01T10:00:00Z`,modified_at:`2026-03-13T09:15:00Z`},x={title:`Components/AppShell`,component:o,tags:[`autodocs`],decorators:[e=>(0,g.jsx)(d,{children:(0,g.jsx)(c,{adapter:m(),children:(0,g.jsx)(s,{initialWorkspace:v,children:(0,g.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`hidden`},children:(0,g.jsx)(e,{})})})})})],parameters:{layout:`fullscreen`}},S={render:()=>{let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(`translate`);return(0,g.jsx)(o,{workspaces:[v,y],activeWorkspace:v,onSelectWorkspace:()=>{},onCreateWorkspace:()=>{},activeView:n,onViewChange:r,user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},onSignOut:()=>{},collapsed:e,onCollapsedChange:t,sidebarContext:{level:`workspace`,activeView:n},children:(0,g.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:i(`7lKVo63UXgo`,`Workspace Home — Projects Dashboard`)})})}},C={render:()=>{let[e,t]=(0,h.useState)(!1),n={level:`project`,project:b,activeStream:`main`,activeProjectView:`dashboard`,onOpenDashboard:_(),onOpenFile:_(),onStreamChange:_(),onCreateStream:_(),onOpenAutomations:_()};return(0,g.jsx)(o,{workspaces:[v,y],activeWorkspace:v,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:v.name,onClick:_()},{label:`Projects`,onClick:_()},{label:b.name}],children:(0,g.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:i(`hzhbnbcovId`,`Project Detail — File list and upload area`)})})}},w={render:()=>{let[e,t]=(0,h.useState)(!1),n={level:`project`,project:b,activeStream:`main`,activeProjectView:`automations`,onOpenDashboard:_(),onOpenFile:_(),onStreamChange:_(),onOpenAutomations:_()};return(0,g.jsx)(o,{workspaces:[v,y],activeWorkspace:v,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:v.name,onClick:_()},{label:`Projects`,onClick:_()},{label:b.name}],children:(0,g.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:i(`4AANNw9dM59`,`Project Automations`)})})}},T={render:()=>{let[e,t]=(0,h.useState)(!1),n={level:`project`,project:b,activeStream:`main`,activeProjectView:`dashboard`,onOpenDashboard:_(),onOpenFile:_(),onStreamChange:_(),onOpenAutomations:_()};return(0,g.jsx)(o,{workspaces:[v,y],activeWorkspace:v,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:v.name,onClick:_()},{label:`Projects`,onClick:_()},{label:b.name}],children:(0,g.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:i(`3NYEx5howrj`,`Translation Editor — about.json (fr-FR)`)})})}},E={render:()=>{let[e,t]=(0,h.useState)(!0),n={level:`project`,project:b,activeStream:`main`,activeProjectView:`dashboard`,onOpenDashboard:_(),onOpenFile:_(),onStreamChange:_()};return(0,g.jsx)(o,{workspaces:[v],activeWorkspace:v,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:null,collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:v.name,onClick:_()},{label:`Projects`,onClick:_()},{label:b.name}],children:(0,g.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:i(`lqJYJSwVpSZ`,`Collapsed sidebar — project mode`)})})}},D={render:()=>{let[e,t]=(0,h.useState)(!0),[n,r]=(0,h.useState)(`translate`);return(0,g.jsx)(o,{workspaces:[v],activeWorkspace:v,onSelectWorkspace:()=>{},activeView:n,onViewChange:r,user:null,collapsed:e,onCollapsedChange:t,children:(0,g.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:i(`l2D6BL1Xoup`,`Collapsed sidebar — workspace mode`)})})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [view, setView] = useState("translate");
    return <AppShell workspaces={[mockWorkspace, secondWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} onCreateWorkspace={() => {}} activeView={view} onViewChange={setView} user={{
      id: "u-1",
      email: "user@example.com",
      name: "Demo User",
      avatar_url: ""
    }} onSignOut={() => {}} collapsed={collapsed} onCollapsedChange={setCollapsed} sidebarContext={{
      level: "workspace",
      activeView: view as "translate"
    }}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Workspace Home — Projects Dashboard
        </div>
      </AppShell>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Workspace-level: default flat navigation with Projects, Voice, Terms, etc.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const ctx: SidebarContext = {
      level: "project",
      project: sampleProject,
      activeStream: "main",
      activeProjectView: "dashboard",
      onOpenDashboard: fn(),
      onOpenFile: fn(),
      onStreamChange: fn(),
      onCreateStream: fn(),
      onOpenAutomations: fn()
    };
    return <AppShell workspaces={[mockWorkspace, secondWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} activeView="translate" onViewChange={() => {}} user={{
      id: "u-1",
      email: "user@example.com",
      name: "Demo User",
      avatar_url: ""
    }} collapsed={collapsed} onCollapsedChange={setCollapsed} sidebarContext={ctx} breadcrumbs={[{
      label: mockWorkspace.name,
      onClick: fn()
    }, {
      label: "Projects",
      onClick: fn()
    }, {
      label: sampleProject.name
    }]}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Project Detail — File list and upload area
        </div>
      </AppShell>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Project-level: sidebar shows Dashboard (active) and Automations.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const ctx: SidebarContext = {
      level: "project",
      project: sampleProject,
      activeStream: "main",
      activeProjectView: "automations",
      onOpenDashboard: fn(),
      onOpenFile: fn(),
      onStreamChange: fn(),
      onOpenAutomations: fn()
    };
    return <AppShell workspaces={[mockWorkspace, secondWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} activeView="translate" onViewChange={() => {}} user={{
      id: "u-1",
      email: "user@example.com",
      name: "Demo User",
      avatar_url: ""
    }} collapsed={collapsed} onCollapsedChange={setCollapsed} sidebarContext={ctx} breadcrumbs={[{
      label: mockWorkspace.name,
      onClick: fn()
    }, {
      label: "Projects",
      onClick: fn()
    }, {
      label: sampleProject.name
    }]}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Project Automations
        </div>
      </AppShell>;
  }
}`,...w.parameters?.docs?.source},description:{story:`Automations page: sidebar highlights Automations, Home shows project name.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const ctx: SidebarContext = {
      level: "project",
      project: sampleProject,
      activeStream: "main",
      activeProjectView: "dashboard",
      onOpenDashboard: fn(),
      onOpenFile: fn(),
      onStreamChange: fn(),
      onOpenAutomations: fn()
    };
    return <AppShell workspaces={[mockWorkspace, secondWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} activeView="translate" onViewChange={() => {}} user={{
      id: "u-1",
      email: "user@example.com",
      name: "Demo User",
      avatar_url: ""
    }} collapsed={collapsed} onCollapsedChange={setCollapsed} sidebarContext={ctx} breadcrumbs={[{
      label: mockWorkspace.name,
      onClick: fn()
    }, {
      label: "Projects",
      onClick: fn()
    }, {
      label: sampleProject.name
    }]}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Translation Editor — about.json (fr-FR)
        </div>
      </AppShell>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Editor-level: sidebar shows Dashboard and Automations, Home shows project name.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    const ctx: SidebarContext = {
      level: "project",
      project: sampleProject,
      activeStream: "main",
      activeProjectView: "dashboard",
      onOpenDashboard: fn(),
      onOpenFile: fn(),
      onStreamChange: fn()
    };
    return <AppShell workspaces={[mockWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} activeView="translate" onViewChange={() => {}} user={null} collapsed={collapsed} onCollapsedChange={setCollapsed} sidebarContext={ctx} breadcrumbs={[{
      label: mockWorkspace.name,
      onClick: fn()
    }, {
      label: "Projects",
      onClick: fn()
    }, {
      label: sampleProject.name
    }]}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Collapsed sidebar — project mode
        </div>
      </AppShell>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Project-level with sidebar collapsed to icon mode.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    const [view, setView] = useState("translate");
    return <AppShell workspaces={[mockWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} activeView={view} onViewChange={setView} user={null} collapsed={collapsed} onCollapsedChange={setCollapsed}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Collapsed sidebar — workspace mode
        </div>
      </AppShell>;
  }
}`,...D.parameters?.docs?.source},description:{story:`Workspace-level collapsed.`,...D.parameters?.docs?.description}}},O=[`WorkspaceLevel`,`ProjectLevel`,`AutomationsLevel`,`EditorLevel`,`ProjectCollapsed`,`WorkspaceCollapsed`]})))()}k();export{w as AutomationsLevel,T as EditorLevel,E as ProjectCollapsed,C as ProjectLevel,D as WorkspaceCollapsed,S as WorkspaceLevel,O as __namedExportsOrder,x as default};