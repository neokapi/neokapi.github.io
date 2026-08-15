import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./AppShell-BlUKLPg3.js";import{a,i as o,n as s,t as c}from"./WorkspaceContext-BtOYQ3Ke.js";import{nr as l,tr as u}from"./iframe-BeeKohPu.js";import{n as d,t as f}from"./mock-adapter-Dh55GYgK.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{p=t(),r(),l(),a(),s(),d(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={id:`ws-1`,name:`Demo Workspace`,slug:`demo`,description:``,logo_url:``,type:`personal`,role:`owner`},_={id:`ws-2`,name:`Acme Corp`,slug:`acme`,description:``,logo_url:``,type:`team`,role:`editor`},v={id:`proj-1`,name:`Marketing Website`,default_source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`,`es-ES`],workspace_id:`ws-1`,items:[{id:`itm-lnd`,name:`landing.html`,format:`html`,type:`file`,size:12e3,block_count:48,word_count:1320},{id:`itm-abt`,name:`about.json`,format:`json`,type:`file`,size:4200,block_count:22,word_count:280},{id:`itm-faq`,name:`faq.md`,format:`md`,type:`file`,size:8e3,block_count:35,word_count:620},{id:`itm-prc`,name:`pricing.xliff`,format:`xliff`,type:`file`,size:6e3,block_count:18,word_count:190}],streams:[{name:`main`,parent:``,base_cursor:0,archived:!1,visibility:`public`,description:``,created_at:`2025-12-01T10:00:00Z`,created_by:`user-1`},{name:`q1-campaign`,parent:`main`,base_cursor:5,archived:!1,visibility:`public`,description:`Q1 campaign`,created_at:`2026-02-01T10:00:00Z`,created_by:`user-1`},{name:`review/alice`,parent:`main`,base_cursor:3,archived:!1,visibility:`shared`,description:`Alice's review`,created_at:`2026-03-01T10:00:00Z`,created_by:`user-2`,shared_with:[`user-1`]}],created_at:`2025-12-01T10:00:00Z`,modified_at:`2026-03-13T09:15:00Z`},y={title:`Components/AppShell`,component:i,tags:[`autodocs`],decorators:[e=>(0,m.jsx)(u,{children:(0,m.jsx)(o,{adapter:f(),children:(0,m.jsx)(c,{initialWorkspace:g,children:(0,m.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`hidden`},children:(0,m.jsx)(e,{})})})})})],parameters:{layout:`fullscreen`}},b={render:()=>{let[e,t]=(0,p.useState)(!1),[n,r]=(0,p.useState)(`translate`);return(0,m.jsx)(i,{workspaces:[g,_],activeWorkspace:g,onSelectWorkspace:()=>{},onCreateWorkspace:()=>{},activeView:n,onViewChange:r,user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},onSignOut:()=>{},collapsed:e,onCollapsedChange:t,sidebarContext:{level:`workspace`,activeView:n},children:(0,m.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:`Workspace Home — Projects Dashboard`})})}},x={render:()=>{let[e,t]=(0,p.useState)(!1),n={level:`project`,project:v,activeStream:`main`,activeProjectView:`dashboard`,onOpenDashboard:h(),onOpenFile:h(),onStreamChange:h(),onCreateStream:h(),onOpenAutomations:h()};return(0,m.jsx)(i,{workspaces:[g,_],activeWorkspace:g,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:g.name,onClick:h()},{label:`Projects`,onClick:h()},{label:v.name}],children:(0,m.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:`Project Detail — File list and upload area`})})}},S={render:()=>{let[e,t]=(0,p.useState)(!1),n={level:`project`,project:v,activeStream:`main`,activeProjectView:`automations`,onOpenDashboard:h(),onOpenFile:h(),onStreamChange:h(),onOpenAutomations:h()};return(0,m.jsx)(i,{workspaces:[g,_],activeWorkspace:g,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:g.name,onClick:h()},{label:`Projects`,onClick:h()},{label:v.name}],children:(0,m.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:`Project Automations`})})}},C={render:()=>{let[e,t]=(0,p.useState)(!1),n={level:`project`,project:v,activeStream:`main`,activeProjectView:`dashboard`,onOpenDashboard:h(),onOpenFile:h(),onStreamChange:h(),onOpenAutomations:h()};return(0,m.jsx)(i,{workspaces:[g,_],activeWorkspace:g,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:{id:`u-1`,email:`user@example.com`,name:`Demo User`,avatar_url:``},collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:g.name,onClick:h()},{label:`Projects`,onClick:h()},{label:v.name}],children:(0,m.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:`Translation Editor — about.json (fr-FR)`})})}},w={render:()=>{let[e,t]=(0,p.useState)(!0),n={level:`project`,project:v,activeStream:`main`,activeProjectView:`dashboard`,onOpenDashboard:h(),onOpenFile:h(),onStreamChange:h()};return(0,m.jsx)(i,{workspaces:[g],activeWorkspace:g,onSelectWorkspace:()=>{},activeView:`translate`,onViewChange:()=>{},user:null,collapsed:e,onCollapsedChange:t,sidebarContext:n,breadcrumbs:[{label:g.name,onClick:h()},{label:`Projects`,onClick:h()},{label:v.name}],children:(0,m.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:`Collapsed sidebar — project mode`})})}},T={render:()=>{let[e,t]=(0,p.useState)(!0),[n,r]=(0,p.useState)(`translate`);return(0,m.jsx)(i,{workspaces:[g],activeWorkspace:g,onSelectWorkspace:()=>{},activeView:n,onViewChange:r,user:null,collapsed:e,onCollapsedChange:t,children:(0,m.jsx)(`div`,{className:`flex items-center justify-center h-full text-muted-foreground`,children:`Collapsed sidebar — workspace mode`})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Workspace-level: default flat navigation with Projects, Brand Voice, Terms, etc.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Project-level: sidebar shows Dashboard (active) and Automations.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Automations page: sidebar highlights Automations, Home shows project name.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Editor-level: sidebar shows Dashboard and Automations, Home shows project name.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Project-level with sidebar collapsed to icon mode.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    const [view, setView] = useState("translate");
    return <AppShell workspaces={[mockWorkspace]} activeWorkspace={mockWorkspace} onSelectWorkspace={() => {}} activeView={view} onViewChange={setView} user={null} collapsed={collapsed} onCollapsedChange={setCollapsed}>
        <div className="flex items-center justify-center h-full text-muted-foreground">
          Collapsed sidebar — workspace mode
        </div>
      </AppShell>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Workspace-level collapsed.`,...T.parameters?.docs?.description}}},E=[`WorkspaceLevel`,`ProjectLevel`,`AutomationsLevel`,`EditorLevel`,`ProjectCollapsed`,`WorkspaceCollapsed`]})))()}D();export{S as AutomationsLevel,C as EditorLevel,w as ProjectCollapsed,x as ProjectLevel,T as WorkspaceCollapsed,b as WorkspaceLevel,E as __namedExportsOrder,y as default};