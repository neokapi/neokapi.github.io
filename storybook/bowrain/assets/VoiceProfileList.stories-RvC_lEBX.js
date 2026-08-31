import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{At as n,kt as r}from"./iframe-BRVC5BNS.js";import{n as i,r as a}from"./decorators-BDgFQisq.js";import{i as o,m as s,t as c,u as l}from"./fixtures-C-6JuHAW.js";var u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),o(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Brand/VoiceProfileList`,component:r,tags:[`autodocs`],decorators:[a,e=>(0,u.jsx)(`div`,{style:{maxWidth:960,padding:24},children:(0,u.jsx)(e,{})})]},p={args:{profiles:[],onSelect:d(),onCreate:d(),onDelete:d()}},m={args:{profiles:[l],onSelect:d(),onCreate:d(),onDelete:d()}},h={args:{profiles:[l,c,s],onSelect:d(),onCreate:d(),onDelete:d()}},g={args:{profiles:[l,c,s,{...l,id:`vp-4`,name:`Support Articles`},{...c,id:`vp-5`,name:`Social Media Posts`},{...s,id:`vp-6`,name:`Internal Wiki`}],onSelect:d(),onCreate:d(),onDelete:d()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    profiles: [],
    onSelect: fn(),
    onCreate: fn(),
    onDelete: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`Empty state — no profiles yet.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    profiles: [sampleProfile],
    onSelect: fn(),
    onCreate: fn(),
    onDelete: fn()
  }
}`,...m.parameters?.docs?.source},description:{story:`Single profile.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    profiles: [sampleProfile, casualProfile, technicalProfile],
    onSelect: fn(),
    onCreate: fn(),
    onDelete: fn()
  }
}`,...h.parameters?.docs?.source},description:{story:`Multiple profiles in a grid.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    profiles: [sampleProfile, casualProfile, technicalProfile, {
      ...sampleProfile,
      id: "vp-4",
      name: "Support Articles"
    }, {
      ...casualProfile,
      id: "vp-5",
      name: "Social Media Posts"
    }, {
      ...technicalProfile,
      id: "vp-6",
      name: "Internal Wiki"
    }],
    onSelect: fn(),
    onCreate: fn(),
    onDelete: fn()
  }
}`,...g.parameters?.docs?.source},description:{story:`Many profiles to test grid scaling and search.`,...g.parameters?.docs?.description}}},_=[`Empty`,`SingleProfile`,`MultipleProfiles`,`ManyProfiles`]})))()}v();export{p as Empty,g as ManyProfiles,h as MultipleProfiles,m as SingleProfile,_ as __namedExportsOrder,f as default};