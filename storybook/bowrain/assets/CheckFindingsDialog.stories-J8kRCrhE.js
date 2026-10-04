import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{n as t,t as n}from"./CheckFindingsDialog-D0ELy-zp.js";import{n as r,r as i}from"./decorators-DIHKSjpe.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),r(),{expect:a,fn:o,within:s}=__STORYBOOK_MODULE_TEST__,c={title:`Editor/CheckFindingsDialog`,component:n,decorators:[i],parameters:{layout:`centered`}},l=()=>({onOverride:o(),onRevise:o()}),u={args:{state:{locale:`fr-FR`,mine:`Ouvrez les paramètres pour changer de langue.`,findings:[{rule:`terms.vocabulary`,message:`Use "réglages", not "paramètres"`,fails:!0}],...l()}},play:async({canvasElement:e})=>{let t=s(e.ownerDocument.body);await a(await t.findByTestId(`check-finding`)).toHaveTextContent(`réglages`),await a(t.getByTestId(`check-findings-mine`)).toHaveTextContent(`paramètres`),await a(t.getByTestId(`findings-override`)).toHaveTextContent(`Save anyway`)}},d={args:{state:{locale:`de-DE`,mine:`Lesen Sie den <x id="1"/>Leitfaden<x id="/1"/> und den <x id="1"/>Leitfaden<x id="/1"/>.`,findings:[{rule:`placeholders.integrity`,message:`Non-deletable Placeholder span "code:variable" is missing from target (1 missing)`,fails:!0},{rule:`placeholders.integrity`,message:`Non-cloneable Opening span "link:hyperlink" was duplicated in target (1 extra)`,fails:!0}],...l()}},play:async({canvasElement:e})=>{let t=s(e.ownerDocument.body);await a(await t.findAllByTestId(`check-finding`)).toHaveLength(2)}},f=[`SaveUsesARuledOutTerm`,`SaveBreaksInlineCodes`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      locale: "fr-FR",
      mine: "Ouvrez les paramètres pour changer de langue.",
      findings: [{
        rule: "terms.vocabulary",
        message: 'Use "réglages", not "paramètres"',
        fails: true
      }],
      ...handlers()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findByTestId("check-finding")).toHaveTextContent("réglages");
    await expect(body.getByTestId("check-findings-mine")).toHaveTextContent("paramètres");
    await expect(body.getByTestId("findings-override")).toHaveTextContent("Save anyway");
  }
}`,...u.parameters?.docs?.source},description:{story:`A save that uses a word the terms rule out.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: {
      locale: "de-DE",
      mine: 'Lesen Sie den <x id="1"/>Leitfaden<x id="/1"/> und den <x id="1"/>Leitfaden<x id="/1"/>.',
      findings: [{
        rule: "placeholders.integrity",
        message: 'Non-deletable Placeholder span "code:variable" is missing from target (1 missing)',
        fails: true
      }, {
        rule: "placeholders.integrity",
        message: 'Non-cloneable Opening span "link:hyperlink" was duplicated in target (1 extra)',
        fails: true
      }],
      ...handlers()
    }
  },
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    await expect(await body.findAllByTestId("check-finding")).toHaveLength(2);
  }
}`,...d.parameters?.docs?.source},description:{story:`A save that drops a variable and repeats a link: two findings, codes as chips.`,...d.parameters?.docs?.description}}}})))()}p();export{d as SaveBreaksInlineCodes,u as SaveUsesARuledOutTerm,f as __namedExportsOrder,c as default};