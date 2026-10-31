import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{a as t,m as n,n as r,t as i,y as a}from"./fixtures-f1tD8vxz.js";import{n as o,t as s}from"./BowrainPreviewSheet-YfvnWboE.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),o(),{expect:c,fn:l,screen:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Components/BowrainPreviewSheet`,component:s,args:{open:!0,onOpenChange:l(),projectName:`Fernwell`,port:{mapSummary:async()=>a,readerFile:async()=>n,decideView:async()=>t,keptRules:async()=>r}},parameters:{docs:{description:{component:`Preview on the Share page's Bowrain rung: the project's Map and Rules as a
Bowrain project page draws them, read from this Mac, with no Keep, Fix or
check action.`}}}},h={play:async()=>{let e=await u.findByRole(`dialog`);await p(e).findByRole(`heading`,{name:`Fernwell`}),await c(p(e).queryByRole(`button`,{name:`Run on everything`})).toBeNull()}},g={name:`Map tab (dark)`,globals:{theme:`dark`}},_={args:{defaultTab:`rules`},play:async()=>{let e=await u.findByRole(`dialog`);await p(e).findByRole(`region`,{name:`Kept by`}),await c(p(e).queryByRole(`button`,{name:/^Keep/})).toBeNull()}},v={name:`Rules tab (dark)`,args:{defaultTab:`rules`},globals:{theme:`dark`}},y={play:async()=>{let e=await u.findByRole(`dialog`);await p(e).findByRole(`heading`,{name:`Fernwell`}),await d.click(p(e).getAllByRole(`button`,{name:`Open`})[0]),await f(()=>c(p(e).getByRole(`heading`,{name:n.path})).toBeInTheDocument()),await c(p(e).queryByRole(`button`,{name:/^Fix/})).toBeNull()}},b=[`MapTab`,`MapTabDark`,`RulesTab`,`RulesTabDark`,`ReaderInside`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    await within(sheet).findByRole("heading", {
      name: "Fernwell"
    });
    await expect(within(sheet).queryByRole("button", {
      name: "Run on everything"
    })).toBeNull();
  }
}`,...h.parameters?.docs?.source},description:{story:`The Map tab: the counts, the suggestions and the files.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Map tab (dark)",
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultTab: "rules"
  },
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    await within(sheet).findByRole("region", {
      name: "Kept by"
    });
    await expect(within(sheet).queryByRole("button", {
      name: /^Keep/
    })).toBeNull();
  }
}`,..._.parameters?.docs?.source},description:{story:`The Rules tab: the questions waiting, then Kept by with who kept each rule.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Rules tab (dark)",
  args: {
    defaultTab: "rules"
  },
  globals: {
    theme: "dark"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    await within(sheet).findByRole("heading", {
      name: "Fernwell"
    });
    await userEvent.click(within(sheet).getAllByRole("button", {
      name: "Open"
    })[0]);
    await waitFor(() => expect(within(sheet).getByRole("heading", {
      name: READER_WITH_FIXES.path
    })).toBeInTheDocument());
    await expect(within(sheet).queryByRole("button", {
      name: /^Fix/
    })).toBeNull();
  }
}`,...y.parameters?.docs?.source},description:{story:`A file on the Map opened in the Reader inside the sheet, with Back to the Map.`,...y.parameters?.docs?.description}}}})))()}x();export{h as MapTab,g as MapTabDark,y as ReaderInside,_ as RulesTab,v as RulesTabDark,b as __namedExportsOrder,m as default};