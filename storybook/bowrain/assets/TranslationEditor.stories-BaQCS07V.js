import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{Bn as n,Vn as r}from"./iframe-D_EbNkKB.js";import{P as i,d as a,z as o}from"./fixtures-gfheXyA8.js";import{n as s,r as c,t as l}from"./decorators-BuYg9cky.js";var u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),a(),s(),u=t(),{expect:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Editor/Core/TranslationEditor`,component:n,tags:[`autodocs`],decorators:[c,e=>(0,u.jsx)(`div`,{style:{width:`100vw`,height:`100vh`,overflow:`auto`},children:(0,u.jsx)(e,{})})],parameters:{layout:`fullscreen`}},g={args:{project:o,fileName:`messages.json`,onBack:f()}},_={args:{project:o,fileName:`messages.json`,onBack:f(),onExport:f()}},v={args:{project:o,fileName:`messages.json`,onBack:f()},decorators:[l(i,{concurrentEdit:{blockId:`blk-1`,locale:`fr-FR`,text:`Bienvenue dans Neokapi`}})],play:async({canvasElement:e})=>{let t=m(e),n=m(e.ownerDocument.body);await p.click(await t.findByTestId(`target-display`)),await t.findByTestId(`unified-target-editor`),await p.click(t.getByTestId(`unified-save`)),await d(await n.findByTestId(`stale-change-dialog`)).toBeInTheDocument(),await d(n.getByTestId(`stale-current`)).toHaveTextContent(`Bienvenue dans Neokapi`)}},y={args:{project:o,fileName:`messages.json`,onBack:f()},decorators:[l(i,{failingCheck:[{rule:`terms.vocabulary`,message:`Use "Neokapi" as written, not "NeoKapi"`,fails:!0}]})],play:async({canvasElement:e})=>{let t=m(e),n=m(e.ownerDocument.body);await p.click(await t.findByTestId(`target-display`)),await t.findByTestId(`unified-target-editor`),await p.click(t.getByTestId(`unified-save`)),await d(await n.findByTestId(`check-findings-dialog`)).toBeInTheDocument(),await d(n.getByTestId(`check-finding`)).toHaveTextContent(`Neokapi`)}},b=[`Default`,`WithExportHandler`,`SaveMeetsAChangedTranslation`,`SaveMeetsAFailingCheck`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    fileName: "messages.json",
    onBack: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    fileName: "messages.json",
    onBack: fn(),
    onExport: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    fileName: "messages.json",
    onBack: fn()
  },
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
    await userEvent.click(await canvas.findByTestId("target-display"));
    await canvas.findByTestId("unified-target-editor");
    await userEvent.click(canvas.getByTestId("unified-save"));
    await expect(await body.findByTestId("stale-change-dialog")).toBeInTheDocument();
    await expect(body.getByTestId("stale-current")).toHaveTextContent("Bienvenue dans Neokapi");
  }
}`,...v.parameters?.docs?.source},description:{story:`Someone saves the first block's French translation while it is open here.
Saving shows their translation beside this one and asks before anything is
written over it.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    project: sampleProject,
    fileName: "messages.json",
    onBack: fn()
  },
  decorators: [createProvidersDecorator(sampleBlocks, {
    failingCheck: [{
      rule: "terms.vocabulary",
      message: 'Use "Neokapi" as written, not "NeoKapi"',
      fails: true
    }]
  })],
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByTestId("target-display"));
    await canvas.findByTestId("unified-target-editor");
    await userEvent.click(canvas.getByTestId("unified-save"));
    await expect(await body.findByTestId("check-findings-dialog")).toBeInTheDocument();
    await expect(body.getByTestId("check-finding")).toHaveTextContent("Neokapi");
  }
}`,...y.parameters?.docs?.source},description:{story:`The project's checks refuse every save here. Saving shows what they found
and asks whether to go back to the wording or save it anyway.`,...y.parameters?.docs?.description}}}})))()}x();export{g as Default,v as SaveMeetsAChangedTranslation,y as SaveMeetsAFailingCheck,_ as WithExportHandler,b as __namedExportsOrder,h as default};