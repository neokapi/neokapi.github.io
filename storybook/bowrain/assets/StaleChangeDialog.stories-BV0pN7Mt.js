import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{n as t,t as n}from"./StaleChangeDialog-DMa2eBEf.js";import{n as r,r as i}from"./decorators-CUrNFvzk.js";var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),r(),{expect:a,fn:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Editor/StaleChangeDialog`,component:n,decorators:[i],parameters:{layout:`centered`}},l=()=>({onReapply:o(),onKeep:o()}),u={args:{state:{action:`save`,locale:`fr-FR`,mine:`Lisez le <x id="1"/>guide<x id="/1"/> avant de commencer.`,current:{rev:`r:3f2a9c0d41b7e5a8`,text:`Consultez le <x id="1"/>guide<x id="/1"/> avant de commencer.`},...l()}},play:async({canvasElement:e})=>{let t=s(e.ownerDocument.body);await a(await t.findByTestId(`stale-current`)).toHaveTextContent(`Consultez le`),await a(t.getByTestId(`stale-mine`)).toHaveTextContent(`Lisez le`),await a(t.getByTestId(`stale-reapply`)).toHaveTextContent(`Save my version`)}},d={args:{state:{action:`establish`,locale:`de-DE`,current:{rev:`r:91c04be2a7d36f10`,text:`Willkommen bei Neokapi!`},...l()}},play:async({canvasElement:e})=>{let t=s(e.ownerDocument.body);await a(await t.findByTestId(`stale-reapply`)).toHaveTextContent(`Approve this version`),await a(t.queryByTestId(`stale-mine`)).not.toBeInTheDocument()}},f={args:{state:{action:`reject`,locale:`fr-FR`,current:{rev:`r:5d8e21a0c3f49b76`,text:`Bienvenue dans Neokapi`},...l()}}},p={args:{state:{action:`save`,locale:`fr-FR`,mine:`Bienvenue sur Neokapi`,current:{rev:`absent`,text:``},...l()}},play:async({canvasElement:e})=>{let t=s(e.ownerDocument.body);await a(await t.findByTestId(`stale-reapply`)).toHaveTextContent(`Save my version`)}},m={args:{state:{action:`establish`,locale:`fr-FR`,current:{rev:`absent`,text:``},...l()}},play:async({canvasElement:e})=>{let t=s(e.ownerDocument.body);await a(await t.findByTestId(`stale-keep`)).toHaveTextContent(`Close`),await a(t.queryByTestId(`stale-reapply`)).not.toBeInTheDocument()}},h=[`SaveOverAChangedTranslation`,`ApproveAChangedTranslation`,`RejectAChangedTranslation`,`TranslationRemovedMeanwhile`,`ApproveARemovedTranslation`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      action: "save",
      locale: "fr-FR",
      mine: 'Lisez le <x id="1"/>guide<x id="/1"/> avant de commencer.',
      current: {
        rev: "r:3f2a9c0d41b7e5a8",
        text: 'Consultez le <x id="1"/>guide<x id="/1"/> avant de commencer.'
      },
      ...handlers()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByTestId("stale-current")).toHaveTextContent("Consultez le");
    await expect(body.getByTestId("stale-mine")).toHaveTextContent("Lisez le");
    await expect(body.getByTestId("stale-reapply")).toHaveTextContent("Save my version");
  }
}`,...u.parameters?.docs?.source},description:{story:`A save over a translation someone else saved, with a link in both versions.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      action: "establish",
      locale: "de-DE",
      current: {
        rev: "r:91c04be2a7d36f10",
        text: "Willkommen bei Neokapi!"
      },
      ...handlers()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByTestId("stale-reapply")).toHaveTextContent("Approve this version");
    await expect(body.queryByTestId("stale-mine")).not.toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source},description:{story:`An approval of wording that changed after the reviewer read it.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      action: "reject",
      locale: "fr-FR",
      current: {
        rev: "r:5d8e21a0c3f49b76",
        text: "Bienvenue dans Neokapi"
      },
      ...handlers()
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`A rejection of wording that changed after the reviewer read it.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      action: "save",
      locale: "fr-FR",
      mine: "Bienvenue sur Neokapi",
      current: {
        rev: "absent",
        text: ""
      },
      ...handlers()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByTestId("stale-reapply")).toHaveTextContent("Save my version");
  }
}`,...p.parameters?.docs?.source},description:{story:`The translation was removed after the person opened the block; saving creates it again.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      action: "establish",
      locale: "fr-FR",
      current: {
        rev: "absent",
        text: ""
      },
      ...handlers()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByTestId("stale-keep")).toHaveTextContent("Close");
    await expect(body.queryByTestId("stale-reapply")).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source},description:{story:`An approval of a translation someone removed after the reviewer read it.
There is nothing left to approve, so the dialog only closes.`,...m.parameters?.docs?.description}}}})))()}g();export{d as ApproveAChangedTranslation,m as ApproveARemovedTranslation,f as RejectAChangedTranslation,u as SaveOverAChangedTranslation,p as TranslationRemovedMeanwhile,h as __namedExportsOrder,c as default};