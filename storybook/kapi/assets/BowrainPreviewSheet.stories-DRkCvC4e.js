import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{S as t,_ as n,c as r,n as i,t as a}from"./fixtures-D_BWIlyt.js";import{i as o,n as s,r as c,t as l}from"./BowrainPreviewSheet-CEEl0DiF.js";function u(e){let t=async()=>{throw new c(e)};return{mapSummary:t,readerFile:t,decideView:t,keptRules:t}}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{a(),s(),o(),{expect:d,fn:f,screen:p,userEvent:m,waitFor:h,within:g}=__STORYBOOK_MODULE_TEST__,_={mapSummary:async()=>t,readerFile:async()=>n,decideView:async()=>r,keptRules:async()=>i},v={title:`Components/BowrainPreviewSheet`,component:l,args:{open:!0,onOpenChange:f(),projectName:`Fernwell`,port:_},parameters:{docs:{description:{component:`Preview on the Share page's Bowrain rung: the project's Map and Rules as a
Bowrain project page draws them, read from this Mac, with no Keep, Fix or
check action.`}}}},y={play:async()=>{let e=await p.findByRole(`dialog`);await g(e).findByRole(`heading`,{name:`Fernwell`}),await d(g(e).queryByRole(`button`,{name:`Run on everything`})).toBeNull()}},b={name:`Map tab (dark)`,globals:{theme:`dark`}},x={args:{defaultTab:`rules`},play:async()=>{let e=await p.findByRole(`dialog`);await g(e).findByRole(`region`,{name:`Kept by`}),await d(g(e).queryByRole(`button`,{name:/^Keep/})).toBeNull()}},S={name:`Rules tab (dark)`,args:{defaultTab:`rules`},globals:{theme:`dark`}},C={play:async()=>{let e=await p.findByRole(`dialog`);await g(e).findByRole(`heading`,{name:`Fernwell`}),await m.click(g(e).getAllByRole(`button`,{name:`Open`})[0]),await h(()=>d(g(e).getByRole(`heading`,{name:n.path})).toBeInTheDocument()),await d(g(e).queryByRole(`button`,{name:/^Fix/})).toBeNull()}},w={..._,actorName:e=>e.name||(e.kind===`person`?`Mira Holt`:void 0)},T={source:`bowrain`,serverURL:`https://app.bowrain.cloud`,projectURL:`https://app.bowrain.cloud/acme/help`},E=u({status:403,message:`insufficient project permissions`,action:`open`}),D=u({status:401,message:`invalid token`,action:`sign_in`}),O={args:{...T,port:w,defaultTab:`rules`},play:async()=>{let e=await p.findByRole(`dialog`);await d(g(e).getByText(`As Bowrain shows it`)).toBeInTheDocument();let t=await g(e).findByRole(`region`,{name:`Kept by`});await h(()=>d(g(t).getAllByText(/Mira Holt$/).length).toBeGreaterThan(0))}},k={name:`Connected rules (dark)`,args:{...T,port:w,defaultTab:`rules`},globals:{theme:`dark`}},A={args:{...T,port:E},play:async()=>{let e=await p.findByRole(`dialog`),t=await g(e).findByRole(`alert`);await d(t).toHaveTextContent(`insufficient project permissions`),await d(g(t).getByRole(`link`,{name:/Open Bowrain/})).toBeInTheDocument()}},j={args:{serverURL:T.serverURL,projectURL:T.projectURL,source:`local`,signedOut:!0},play:async()=>{let e=await p.findByRole(`dialog`);await d(g(e).getByText(`As this Mac shows it`)).toBeInTheDocument(),await d(g(e).getByText(`Not signed in to app.bowrain.cloud`)).toBeInTheDocument(),await d(g(e).getByText(`kapi auth login --server https://app.bowrain.cloud`)).toBeInTheDocument(),await g(e).findByRole(`heading`,{name:`Fernwell`})}},M={name:`Connected signed out (dark)`,args:{serverURL:T.serverURL,projectURL:T.projectURL,source:`local`,signedOut:!0},globals:{theme:`dark`}},N={args:{...T,port:D},play:async()=>{let e=await p.findByRole(`dialog`),t=await g(e).findByRole(`alert`);await d(t).toHaveTextContent(`kapi auth login --server https://app.bowrain.cloud`)}},P=[`MapTab`,`MapTabDark`,`RulesTab`,`RulesTabDark`,`ReaderInside`,`ConnectedRules`,`ConnectedRulesDark`,`ConnectedNoPermission`,`ConnectedSignedOut`,`ConnectedSignedOutDark`,`ConnectedSignInRefused`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    await within(sheet).findByRole("heading", {
      name: "Fernwell"
    });
    await expect(within(sheet).queryByRole("button", {
      name: "Run on everything"
    })).toBeNull();
  }
}`,...y.parameters?.docs?.source},description:{story:`The Map tab: the counts, the suggestions and the files.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Map tab (dark)",
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`The Rules tab: the questions waiting, then Kept by with who kept each rule.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Rules tab (dark)",
  args: {
    defaultTab: "rules"
  },
  globals: {
    theme: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`A file on the Map opened in the Reader inside the sheet, with Back to the Map.`,...C.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...CONNECTED,
    port: FERNWELL_SERVER,
    defaultTab: "rules"
  },
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    await expect(within(sheet).getByText("As Bowrain shows it")).toBeInTheDocument();
    const kept = await within(sheet).findByRole("region", {
      name: "Kept by"
    });
    await waitFor(() => expect(within(kept).getAllByText(/Mira Holt$/).length).toBeGreaterThan(0));
  }
}`,...O.parameters?.docs?.source},description:{story:`Connected and signed in: the server's own Rules, with its member names.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Connected rules (dark)",
  args: {
    ...CONNECTED,
    port: FERNWELL_SERVER,
    defaultTab: "rules"
  },
  globals: {
    theme: "dark"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...CONNECTED,
    port: NO_PERMISSION
  },
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    const body = await within(sheet).findByRole("alert");
    await expect(body).toHaveTextContent("insufficient project permissions");
    await expect(within(body).getByRole("link", {
      name: /Open Bowrain/
    })).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source},description:{story:`The server refuses the project: its words, and Open Bowrain.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    serverURL: CONNECTED.serverURL,
    projectURL: CONNECTED.projectURL,
    source: "local",
    signedOut: true
  },
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    await expect(within(sheet).getByText("As this Mac shows it")).toBeInTheDocument();
    await expect(within(sheet).getByText("Not signed in to app.bowrain.cloud")).toBeInTheDocument();
    await expect(within(sheet).getByText("kapi auth login --server https://app.bowrain.cloud")).toBeInTheDocument();
    await within(sheet).findByRole("heading", {
      name: "Fernwell"
    });
  }
}`,...j.parameters?.docs?.source},description:{story:`A connected project this Mac holds no sign-in for: previewed from this Mac,
with the server named and the command that signs in.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Connected signed out (dark)",
  args: {
    serverURL: CONNECTED.serverURL,
    projectURL: CONNECTED.projectURL,
    source: "local",
    signedOut: true
  },
  globals: {
    theme: "dark"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...CONNECTED,
    port: SIGNED_OUT
  },
  play: async () => {
    const sheet = await screen.findByRole("dialog");
    const body = await within(sheet).findByRole("alert");
    await expect(body).toHaveTextContent("kapi auth login --server https://app.bowrain.cloud");
  }
}`,...N.parameters?.docs?.source},description:{story:`The server does not take the sign-in: its words, and the command that signs in.`,...N.parameters?.docs?.description}}}})))()}F();export{A as ConnectedNoPermission,O as ConnectedRules,k as ConnectedRulesDark,N as ConnectedSignInRefused,j as ConnectedSignedOut,M as ConnectedSignedOutDark,y as MapTab,b as MapTabDark,C as ReaderInside,x as RulesTab,S as RulesTabDark,P as __namedExportsOrder,v as default};