import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{Rn as n,zn as r}from"./iframe-CGZEtEhM.js";import{P as i,d as a,z as o}from"./fixtures-gfheXyA8.js";import{n as s,t as c}from"./decorators-CUrNFvzk.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),s(),a(),l=t(),{expect:u,fn:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Review/ReviewSurface`,component:n,parameters:{layout:`fullscreen`},decorators:[c(i),e=>(0,l.jsx)(`div`,{className:`flex h-[42rem] flex-col p-4`,children:(0,l.jsx)(e,{})})],args:{project:o,fileName:`messages.json`,onBack:d()}},h={},g={decorators:[c(i,{runFileCheck:async()=>[{blockId:`blk-1`,issues:[{type:`spacing`,severity:`warning`,message:`Trailing double space`},{type:`placeholder`,severity:`error`,message:`Missing {count} in the target`}]}]})]},_={play:async({canvasElement:e})=>{let t=p(e);await f.click(await t.findByTestId(`review-block-blk-1`)),await u(await t.findByTestId(`review-inspector`)).toBeInTheDocument()}},v={play:async({canvasElement:e})=>{let t=p(e);await f.click(await t.findByTestId(`review-block-blk-3`)),await u(await t.findByTestId(`review-inspector`)).toBeInTheDocument()}},y={decorators:[c(i,{concurrentEdit:{blockId:`blk-1`,locale:`fr-FR`,text:`Bienvenue dans Neokapi`}})],play:async({canvasElement:e})=>{let t=p(e),n=p(e.ownerDocument.body);await f.click(await t.findByTestId(`review-block-blk-1`)),await f.click(await n.findByTestId(`approve-blk-1`)),await u(await n.findByTestId(`stale-change-dialog`)).toBeInTheDocument(),await u(n.getByTestId(`stale-reapply`)).toHaveTextContent(`Approve this version`)}},b=[`Default`,`WithFindings`,`InspectorWithContext`,`InspectorWithoutContext`,`ApproveMeetsAChangedTranslation`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`The document, read on the target locale.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(sampleBlocks, {
    runFileCheck: async () => [{
      blockId: "blk-1",
      issues: [{
        type: "spacing",
        severity: "warning",
        message: "Trailing double space"
      }, {
        type: "placeholder",
        severity: "error",
        message: "Missing {count} in the target"
      }]
    }]
  })]
}`,...g.parameters?.docs?.source},description:{story:`With findings loaded, the flagged blocks are tinted where they sit.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByTestId("review-block-blk-1"));
    await expect(await canvas.findByTestId("review-inspector")).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source},description:{story:`A block opened with everything the server resolved behind it: the
content-memory wording the bulk pass would otherwise apply unseen, the
findings behind its voice score with their suggestions, the last decision
and its note, and how the target was produced.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByTestId("review-block-blk-3"));
    await expect(await canvas.findByTestId("review-inspector")).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source},description:{story:`The same inspector for a block nothing governs, nothing matched and nobody
has decided. Every layer names its own emptiness rather than leaving a gap.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(sampleBlocks, {
    concurrentEdit: {
      blockId: "blk-1",
      locale: "fr-FR",
      text: "Bienvenue dans Neokapi"
    }
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByTestId("review-block-blk-1"));
    await userEvent.click(await body.findByTestId("approve-blk-1"));
    await expect(await body.findByTestId("stale-change-dialog")).toBeInTheDocument();
    await expect(body.getByTestId("stale-reapply")).toHaveTextContent("Approve this version");
  }
}`,...y.parameters?.docs?.source},description:{story:`Someone changes the French translation of the opened block before the
reviewer approves it. The approval is not recorded: the reviewer reads the
translation as it stands and approves that, or keeps it undecided.`,...y.parameters?.docs?.description}}}})))()}x();export{y as ApproveMeetsAChangedTranslation,h as Default,_ as InspectorWithContext,v as InspectorWithoutContext,g as WithFindings,b as __namedExportsOrder,m as default};