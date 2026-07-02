import{c as e,i as t}from"./preload-helper-DBuSV-bh.js";import{t as n}from"./react-BHOuiJCc.js";import{t as r}from"./jsx-runtime-CNPDJLAB.js";import{t as i}from"./src-DLIB-0eT.js";import{t as a}from"./button-BjQmflmu.js";import{Dt as o,Et as s}from"./iframe-BcFtNvh2.js";import{n as c,r as l}from"./brandHubFixtures-331BG5DA.js";var u,d,f,p,m,h;t((()=>{u=e(n(),1),i(),o(),c(),d=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Brand Hub/Experiments/WhatIfWizard`,component:s,parameters:{layout:`centered`},decorators:[l]},m={render:()=>{let[e,t]=(0,u.useState)(!0);return(0,d.jsxs)(`div`,{style:{padding:24},children:[(0,d.jsx)(a,{onClick:()=>t(!0),children:`Compose an experiment`}),(0,d.jsx)(s,{open:e,onOpenChange:t,onSubmitted:f()})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      padding: 24
    }}>
        <Button onClick={() => setOpen(true)}>Compose an experiment</Button>
        <WhatIfWizard open={open} onOpenChange={setOpen} onSubmitted={fn()} />
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Open the wizard: name the experiment, then build ops with a live blast radius.`,...m.parameters?.docs?.description}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder,p as default};