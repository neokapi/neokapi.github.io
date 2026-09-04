import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,t as o}from"./LanguageScopeSelect-1mV6M-fQ.js";function s({initial:e,allowAll:t}){let[n,r]=(0,c.useState)(e);return(0,l.jsx)(o,{value:n,options:p,onChange:r,allowAll:t,allPending:44,label:i(`hejVv9D09Oo`,`Language to review`)})}var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),c=t(),a(),l=n(),{expect:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p=[{locale:`en-US`,source:!0,pending:3},{locale:`fr-FR`,pending:24},{locale:`de-DE`,pending:11},{locale:`ja-JP`,pending:0},{locale:`pt-BR`,pending:6}],m={title:`Review/LanguageScopeSelect`,component:o,parameters:{layout:`centered`}},h={render:()=>(0,l.jsx)(s,{initial:`*`,allowAll:!0})},g={render:()=>(0,l.jsx)(s,{initial:`fr-FR`,allowAll:!0})},_={render:()=>(0,l.jsx)(s,{initial:`en-US`,allowAll:!0})},v={render:()=>(0,l.jsx)(s,{initial:`fr-FR`,allowAll:!0}),play:async({canvasElement:e})=>{let t=f(e);await d.click(t.getByTestId(`language-scope`));let n=f(document.body);await u(await n.findByTestId(`language-scope-en-US`)).toBeInTheDocument()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled initial={ALL_LANGUAGES} allowAll />
}`,...h.parameters?.docs?.source},description:{story:`The workspace-wide reading: every language at once, with the total the queue
is waiting on. A surface that mixes languages in one list starts here.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled initial="fr-FR" allowAll />
}`,...g.parameters?.docs?.source},description:{story:`One target language chosen, named rather than shown as a tag in capitals.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled initial="en-US" allowAll />
}`,..._.parameters?.docs?.source},description:{story:`The source language chosen from the same list. Picking it opens the source
review, so a reviewer moves between judging a translation and judging the
text it was made from without a second control.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled initial="fr-FR" allowAll />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("language-scope"));
    // Radix renders the list in a portal, so it is found on the document body.
    const list = within(document.body);
    await expect(await list.findByTestId("language-scope-en-US")).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source},description:{story:`The list open: language names in the reader's own UI language, the tag beside
each, the source marked, and the pending count per language so the choice is
made on the counts.`,...v.parameters?.docs?.description}}},y=[`AllLanguages`,`ATargetLanguage`,`TheSourceLanguage`,`OpenList`]})))()}b();export{g as ATargetLanguage,h as AllLanguages,v as OpenList,_ as TheSourceLanguage,y as __namedExportsOrder,m as default};