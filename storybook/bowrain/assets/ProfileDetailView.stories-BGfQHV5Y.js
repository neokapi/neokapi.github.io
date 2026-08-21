import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{ct as n,st as r}from"./iframe-DLuYg0iK.js";import{a as i,i as a,o,t as s}from"./contextProfileFixtures-CPk1yiHO.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),a(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Brand Hub/Profiles/ProfileDetailView`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onBack:l(),onOpenVoice:l(),onOpenTerms:l(),onOpenChanges:l(),onScanBrand:l()},decorators:[e=>(0,c.jsx)(`div`,{style:{padding:24},children:(0,c.jsx)(e,{})})]},d={args:{slug:`channel~docs.product~bowrain`},decorators:[o(i)]},f={args:{slug:`channel~app.product~bowrain`},decorators:[o(i)]},p={args:{slug:`default`},decorators:[o(i)]},m={args:{slug:`default`},decorators:[o(s)]},h={args:{slug:`voice~v-support`},decorators:[o(i)]},g={args:{slug:`channel~print`},decorators:[o(i)]},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    slug: "channel~docs.product~bowrain"
  },
  decorators: [withProfiles(populatedProfiles)]
}`,...d.parameters?.docs?.source},description:{story:`A declared point with a voice, two collections, and changes in review.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    slug: "channel~app.product~bowrain"
  },
  decorators: [withProfiles(populatedProfiles)]
}`,...f.parameters?.docs?.source},description:{story:`A point content sits at with no voice bound to it.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    slug: "default"
  },
  decorators: [withProfiles(populatedProfiles)]
}`,...p.parameters?.docs?.source},description:{story:`The workspace's own point, which carries the workspace-wide scan.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    slug: "default"
  },
  decorators: [withProfiles(emptyProfiles)]
}`,...m.parameters?.docs?.source},description:{story:`The default point before anything has been pushed or scanned.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    slug: "voice~v-support"
  },
  decorators: [withProfiles(populatedProfiles)]
}`,...h.parameters?.docs?.source},description:{story:`A voice the workspace holds that governs nothing.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    slug: "channel~print"
  },
  decorators: [withProfiles(populatedProfiles)]
}`,...g.parameters?.docs?.source},description:{story:`A slug no profile answers to.`,...g.parameters?.docs?.description}}},_=[`DeclaredPoint`,`WithoutVoice`,`DefaultProfile`,`DefaultProfileEmpty`,`UnboundVoice`,`NotFound`]})))()}v();export{d as DeclaredPoint,p as DefaultProfile,m as DefaultProfileEmpty,g as NotFound,h as UnboundVoice,f as WithoutVoice,_ as __namedExportsOrder,u as default};