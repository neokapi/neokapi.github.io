import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{m as r,t as i}from"./review-BkLg-f8Q.js";function a(e){let[t,n]=(0,o.useState)(e.value??`*`);return(0,s.jsx)(r,{lanes:d,allPending:44,...e,value:t,onChange:n})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{o=t(),i(),s=n(),{expect:c,userEvent:l,within:u}=__STORYBOOK_MODULE_TEST__,d=[{language:`en-US`,source:!0,pending:3},{language:`fr-FR`,pending:24},{language:`de-DE`,pending:11},{language:`ja-JP`,pending:0},{language:`pt-BR`,pending:6}],f=[{language:`en-US`,source:!0,pending:12},...[`fr-FR`,`fr-CA`,`de-DE`,`es-ES`,`es-MX`,`it-IT`,`ja-JP`,`ko-KR`,`nb-NO`,`nl-NL`,`pl-PL`,`pt-BR`,`sv-SE`,`zh-Hans`,`zh-Hant`].map((e,t)=>({language:e,pending:t*7%19}))],p={title:`Review/ReviewLanguageSelect`,component:r,parameters:{layout:`centered`,docs:{description:{component:`The one control a review surface offers for choosing what it reads. One list holds every language the project has review work in, the source among them, so picking the source opens the author's own wording the same way picking French opens the French review. Both kapi desktop and the platform draw this one control.`}}}},m={render:()=>(0,s.jsx)(a,{value:`*`,allowAll:!0})},h={render:()=>(0,s.jsx)(a,{value:`fr-FR`,allowAll:!0})},g={render:()=>(0,s.jsx)(a,{value:`en-US`,allowAll:!0})},_={render:()=>(0,s.jsx)(a,{value:`fr-FR`,lanes:[{language:`en-US`,source:!0},{language:`fr-FR`},{language:`de-DE`}]})},v={render:()=>(0,s.jsx)(a,{value:`*`,allowAll:!0,allPending:0,lanes:[{language:`en-US`,source:!0,pending:0},{language:`fr-FR`,pending:0},{language:`de-DE`,pending:0}]})},y={render:()=>(0,s.jsx)(a,{value:`fr-FR`,allowAll:!0}),play:async({canvasElement:e})=>{let t=u(e);await l.click(t.getByRole(`combobox`));let n=u(document.body);await c(await n.findByText(/American English/)).toBeInTheDocument()}},b={render:()=>(0,s.jsx)(a,{value:`*`,allowAll:!0,allPending:137,lanes:f}),play:async({canvasElement:e})=>{let t=u(e);await l.click(t.getByRole(`combobox`));let n=u(document.body);await l.type(await n.findByPlaceholderText(`Search languages`),`Chinese`),await c(document.querySelectorAll(`[data-slot='review-language-option']`).length).toBeLessThan(f.length)}},x={globals:{theme:`dark`},render:()=>(0,s.jsx)(a,{value:`en-US`,allowAll:!0})},S={globals:{theme:`dark`},render:()=>(0,s.jsx)(a,{value:`*`,allowAll:!0,allPending:137,lanes:f}),play:async({canvasElement:e})=>{let t=u(e);await l.click(t.getByRole(`combobox`));let n=u(document.body);await c(await n.findByText(/American English/)).toBeInTheDocument()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value={ALL_LANGUAGES} allowAll />
}`,...m.parameters?.docs?.source},description:{story:`Every language at once, with the total the queue is waiting on. A surface
that mixes languages in one list starts here.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value="fr-FR" allowAll />
}`,...h.parameters?.docs?.source},description:{story:`One target language chosen, named rather than shown as a tag in capitals.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value="en-US" allowAll />
}`,...g.parameters?.docs?.source},description:{story:`The source language chosen from the same list. Picking it puts the reviewer
in front of the author's own wording, so they move between judging a
translation and judging the text it was made from without a second control.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value="fr-FR" lanes={[{
    language: "en-US",
    source: true
  }, {
    language: "fr-FR"
  }, {
    language: "de-DE"
  }]} />
}`,..._.parameters?.docs?.source},description:{story:`A surface that offers the languages of one file rather than a queue counts
nothing, so no entry carries a number and none reads as zero.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value={ALL_LANGUAGES} allowAll allPending={0} lanes={[{
    language: "en-US",
    source: true,
    pending: 0
  }, {
    language: "fr-FR",
    pending: 0
  }, {
    language: "de-DE",
    pending: 0
  }]} />
}`,...v.parameters?.docs?.source},description:{story:`A queue with nothing waiting anywhere. The source lane stays selectable, the
one lane a reviewer can always open.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value="fr-FR" allowAll />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    // The popover renders in a portal, so the list is found on the document body.
    const list = within(document.body);
    await expect(await list.findByText(/American English/)).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source},description:{story:`The list open: language names in the reader's own UI language, the tag beside
each, the source marked, and the pending count per language so the choice is
made on the counts.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Controlled value={ALL_LANGUAGES} allowAll allPending={137} lanes={manyLanes} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    const list = within(document.body);
    await userEvent.type(await list.findByPlaceholderText("Search languages"), "Chinese");
    await expect(document.querySelectorAll("[data-slot='review-language-option']").length).toBeLessThan(manyLanes.length);
  }
}`,...b.parameters?.docs?.source},description:{story:`A workspace with sixteen languages. Typing narrows the list by name or by
tag, so a long list stays one control rather than a scroll.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  render: () => <Controlled value="en-US" allowAll />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  render: () => <Controlled value={ALL_LANGUAGES} allowAll allPending={137} lanes={manyLanes} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("combobox"));
    const list = within(document.body);
    await expect(await list.findByText(/American English/)).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source},description:{story:`The long list in the dark theme, open on its counts.`,...S.parameters?.docs?.description}}},C=[`AllLanguages`,`ATargetLanguage`,`TheSourceLanguage`,`WithoutCounts`,`NothingPending`,`OpenList`,`ManyLanguages`,`Dark`,`DarkOpenList`]})))()}w();export{h as ATargetLanguage,m as AllLanguages,x as Dark,S as DarkOpenList,b as ManyLanguages,v as NothingPending,y as OpenList,g as TheSourceLanguage,_ as WithoutCounts,C as __namedExportsOrder,p as default};