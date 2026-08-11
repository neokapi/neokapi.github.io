import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./src-DKkSbwtu.js";import{t as i}from"./button-n2oHF6Cz.js";import{n as a,t as o}from"./WhatIfWizard-BM-RASir.js";import{n as s,r as c}from"./brandHubFixtures-CdVDjR8c.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=t(),r(),a(),s(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Brand Hub/Experiments/WhatIfWizard`,component:o,parameters:{layout:`centered`},decorators:[c]},p={render:()=>{let[e,t]=(0,l.useState)(!0);return(0,u.jsxs)(`div`,{style:{padding:24},children:[(0,u.jsx)(i,{onClick:()=>t(!0),children:`Compose an experiment`}),(0,u.jsx)(o,{open:e,onOpenChange:t,onSubmitted:d()})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div style={{
      padding: 24
    }}>
        <Button onClick={() => setOpen(true)}>Compose an experiment</Button>
        <WhatIfWizard open={open} onOpenChange={setOpen} onSubmitted={fn()} />
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`Open the wizard: name the experiment, then build ops with a live blast radius.`,...p.parameters?.docs?.description}}},m=[`Default`]})))()}h();export{p as Default,m as __namedExportsOrder,f as default};