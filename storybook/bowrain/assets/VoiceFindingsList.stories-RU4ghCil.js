import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./VoiceFindingsList-DigHAmg6.js";import{i,l as a}from"./fixtures-C-6JuHAW.js";var o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o=t(),s={title:`Brand/VoiceFindingsList`,component:r,tags:[`autodocs`],args:{scanned:!0},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:640,padding:24},children:(0,o.jsx)(e,{})})]},c={args:{findings:a}},l={args:{findings:[]}},u={args:{findings:[],scanned:!1}},d={args:{findings:[a[2]]}},f={args:{findings:a.filter(e=>e.severity===`minor`)}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    findings: sampleFindings
  }
}`,...c.parameters?.docs?.source},description:{story:`Multiple findings with mixed severities.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    findings: []
  }
}`,...l.parameters?.docs?.source},description:{story:`A scan that found nothing: the content is fully compliant.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    findings: [],
    scanned: false
  }
}`,...u.parameters?.docs?.source},description:{story:`Nothing was scanned, so the empty list says so rather than claiming compliance.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    findings: [sampleFindings[2]]
  }
}`,...d.parameters?.docs?.source},description:{story:`Single critical finding.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    findings: sampleFindings.filter(f => f.severity === "minor")
  }
}`,...f.parameters?.docs?.source},description:{story:`Only minor findings.`,...f.parameters?.docs?.description}}},p=[`MixedSeverities`,`NoFindings`,`NothingScanned`,`SingleCritical`,`MinorOnly`]})))()}m();export{f as MinorOnly,c as MixedSeverities,l as NoFindings,u as NothingScanned,d as SingleCritical,p as __namedExportsOrder,s as default};