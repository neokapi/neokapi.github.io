import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{In as n,Ln as r}from"./iframe-BaT_rD8N.js";import{N as i,R as a,u as o}from"./fixtures-CwEJAmTf.js";import{n as s,t as c}from"./decorators-DYXmpYT_.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),s(),o(),l=t(),{expect:u,fn:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Review/ReviewSurface`,component:n,parameters:{layout:`fullscreen`},decorators:[c(i),e=>(0,l.jsx)(`div`,{className:`flex h-[42rem] flex-col p-4`,children:(0,l.jsx)(e,{})})],args:{project:a,fileName:`messages.json`,onBack:d()}},h={},g={decorators:[c(i,{runFileCheck:async()=>[{blockId:`blk-1`,issues:[{type:`spacing`,severity:`warning`,message:`Trailing double space`},{type:`placeholder`,severity:`error`,message:`Missing {count} in the target`}]}]})]},_={play:async({canvasElement:e})=>{let t=p(e);await f.click(await t.findByTestId(`review-block-blk-1`)),await u(await t.findByTestId(`review-inspector`)).toBeInTheDocument()}},v={play:async({canvasElement:e})=>{let t=p(e);await f.click(await t.findByTestId(`review-block-blk-3`)),await u(await t.findByTestId(`review-inspector`)).toBeInTheDocument()}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`The document, read on the target locale.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
has decided. Every layer names its own emptiness rather than leaving a gap.`,...v.parameters?.docs?.description}}},y=[`Default`,`WithFindings`,`InspectorWithContext`,`InspectorWithoutContext`]})))()}b();export{h as Default,_ as InspectorWithContext,v as InspectorWithoutContext,g as WithFindings,y as __namedExportsOrder,m as default};