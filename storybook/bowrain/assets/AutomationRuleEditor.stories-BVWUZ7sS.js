import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-CWFEJrrT.js";import{n as a,t as o}from"./AutomationRuleEditor-Ccm4GPwJ.js";import{A as s,u as c}from"./fixtures-BGts7Tx6.js";import{n as l,r as u}from"./decorators-CMkCj_ES.js";function d(){let[e,t]=(0,f.useState)(!0);return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`button`,{onClick:()=>t(!0),className:`px-3 py-1.5 text-sm border rounded`,children:i(`9kIpFBP7lZG`,`Open Editor`)}),(0,p.jsx)(o,{open:e,onOpenChange:t,workspaceSlug:`demo`,projectId:`proj-demo-1`,onSave:e=>{console.log(`Saved:`,e),t(!1)}})]})}var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),f=t(),a(),l(),c(),p=n(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Pages/Automation/AutomationRuleEditor`,component:o,tags:[`autodocs`],decorators:[u]},g={args:{open:!0,onOpenChange:m(),workspaceSlug:`demo`,projectId:`proj-demo-1`,onSave:m()}},_={args:{open:!0,onOpenChange:m(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:s[0],onSave:m()}},v={args:{open:!0,onOpenChange:m(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:s[3],onSave:m()}},y={args:{open:!0,onOpenChange:m(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:s[4],onSave:m()}},b={args:{open:!0,onOpenChange:m(),workspaceSlug:`demo`,projectId:`proj-demo-1`,rule:s[0],onSave:m(),saving:!0}},x={render:()=>(0,p.jsx)(d,{})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    onSave: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[0],
    onSave: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[3],
    // create_review_tasks rule
    onSave: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[4],
    // create_source_review rule
    onSave: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: fn(),
    workspaceSlug: "demo",
    projectId: "proj-demo-1",
    rule: sampleAutomationRules[0],
    onSave: fn(),
    saving: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveWrapper />
}`,...x.parameters?.docs?.source}}},S=[`NewRule`,`EditExistingRule`,`EditWorkflowRule`,`EditSourceReviewRule`,`SavingState`,`Interactive`]})))()}C();export{_ as EditExistingRule,y as EditSourceReviewRule,v as EditWorkflowRule,x as Interactive,g as NewRule,b as SavingState,S as __namedExportsOrder,h as default};