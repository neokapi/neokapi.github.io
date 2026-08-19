import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{lt as n,ut as r}from"./iframe-CZ7bSN1a.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./contextProfileFixtures-CnovrzJI.js";var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),a(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Brand Hub/Profiles/ProfilesView`,component:n,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onOpenProfile:d(),onScanBrand:d()},decorators:[e=>(0,u.jsx)(`div`,{style:{padding:24},children:(0,u.jsx)(e,{})})]},p={decorators:[s(i)]},m={args:{serverUrl:`https://app.bowrain.cloud`},decorators:[s(l)]},h={args:{onScanBrand:void 0,serverUrl:`https://app.bowrain.cloud`},decorators:[s(l)]},g={decorators:[s(c)]},_={args:{onScanBrand:void 0},decorators:[s(i)]},v={decorators:[s(i,o)]},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [withProfiles(populatedProfiles)]
}`,...p.parameters?.docs?.source},description:{story:`Several declared points, one of them ungoverned, plus an unbound voice.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    serverUrl: "https://app.bowrain.cloud"
  },
  decorators: [withProfiles(emptyProfiles)]
}`,...m.parameters?.docs?.source},description:{story:`Nothing governs anything yet: the front door offers both ways in.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onScanBrand: undefined,
    serverUrl: "https://app.bowrain.cloud"
  },
  decorators: [withProfiles(emptyProfiles)]
}`,...h.parameters?.docs?.source},description:{story:`Blank, on a server that runs no scan jobs: the assistant lane alone.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [withProfiles(governedButUndeclared)]
}`,...g.parameters?.docs?.source},description:{story:`A voice on the default point, but nothing pushed: what would declare more.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onScanBrand: undefined
  },
  decorators: [withProfiles(populatedProfiles)]
}`,..._.parameters?.docs?.source},description:{story:`No hosted scan configured, so the scan action is absent.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [withProfiles(populatedProfiles, fragmentedChannels)]
}`,...v.parameters?.docs?.source},description:{story:`Two projects spell one channel two ways. The workspace says so and judges the
pair; neither recipe's slug moves.`,...v.parameters?.docs?.description}}},y=[`Populated`,`Blank`,`BlankWithoutHostedScan`,`OnlyTheDefault`,`WithoutHostedScan`,`WithChannelNamesToReconcile`]})))()}b();export{m as Blank,h as BlankWithoutHostedScan,g as OnlyTheDefault,p as Populated,v as WithChannelNamesToReconcile,_ as WithoutHostedScan,y as __namedExportsOrder,f as default};