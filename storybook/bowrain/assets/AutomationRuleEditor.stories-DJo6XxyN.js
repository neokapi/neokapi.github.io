import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./AutomationRuleEditor-CwIDgqnV.js";import{A as a,l as o}from"./fixtures-BAElecsM.js";import{n as s,r as c}from"./decorators-DBJQez9m.js";function l(){let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`button`,{onClick:()=>t(!0),className:`px-3 py-1.5 text-sm border rounded`,children:`Open Editor`}),(0,d.jsx)(i,{open:e,onOpenChange:t,workspaceSlug:`demo`,projectId:`proj-demo-1`,onSave:e=>{console.log(`Saved:`,e),t(!1)}})]})}var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{u=t(),r(),s(),o(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Pages/Automation/AutomationRuleEditor`,component:i,tags:[`autodocs`],decorators:[c]},m={args:{open:!0,onOpenChange:f(),workspaceSlug:`demo`,projectId:`proj-demo-1`,onSave:f()}},h={args:{open:!0,onOpenChange:f(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:a[0],onSave:f()}},g={args:{open:!0,onOpenChange:f(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:a[3],onSave:f()}},_={args:{open:!0,onOpenChange:f(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:a[4],onSave:f()}},v={args:{open:!0,onOpenChange:f(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:a[0],onSave:f(),saving:!0}},y={render:()=>(0,d.jsx)(l,{})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    onSave: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[0],
    onSave: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[3],
    // create_review_tasks rule
    onSave: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[4],
    // create_source_review rule
    onSave: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[0],
    onSave: fn(),
    saving: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveWrapper />
}`,...y.parameters?.docs?.source}}},b=[`NewRule`,`EditExistingRule`,`EditWorkflowRule`,`EditSourceReviewRule`,`SavingState`,`Interactive`]})))()}x();export{h as EditExistingRule,_ as EditSourceReviewRule,g as EditWorkflowRule,y as Interactive,m as NewRule,v as SavingState,b as __namedExportsOrder,p as default};