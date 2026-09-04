import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,t as o}from"./FilePreview-BBuKiJJb.js";function s(){let[e,t]=(0,c.useState)(`source`),[n,r]=(0,c.useState)(`document`);return(0,l.jsx)(o,{open:!0,onClose:u(),filename:`docs/releasing.md`,format:`markdown`,description:i(`3kIIdmT8j86`,`Read the document, then open it in an editor.`),sides:{value:e,onChange:t,targetLabel:`French`},view:n,onViewChange:r,viewsLabel:`Reading`,views:[{value:`document`,label:`Document`,content:(0,l.jsx)(`p`,{className:`py-4`,children:i(`d3g4uSpP7lj`,`The document.`)})},{value:`context`,label:`In context`,content:(0,l.jsx)(`p`,{className:`py-4`,children:i(`ij1aOYCkW3C`,`The component that ships it.`)})}],toolbar:(0,l.jsx)(`span`,{className:`rounded-md border px-2 py-1 text-xs text-muted-foreground`,children:i(`4qmPabaGfT4`,`fr-FR`)}),scrollBody:!1})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{r(),c=t(),a(),l=n(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={format:`json`,root:[{kind:`block`,id:`b1`,name:`app.greeting`,type:`text`,translatable:!0,sourceLocale:`en`,source:[{text:`Please utilize the dashboard`}],targets:{fr:[{text:`Veuillez utiliser le tableau de bord`}]},targetMeta:{fr:{status:`translated`,origin:{kind:`mt`,engine:`demo`}}},overlays:[{type:`term`,side:`source`,spans:[{range:{startRun:0,endRun:1,startOffset:19,endOffset:28},text:`dashboard`,props:{term:`dashboard`,target:`tableau de bord`,domain:`ui`}}]}]},{kind:`block`,id:`b2`,name:`app.tagline`,type:`text`,translatable:!0,sourceLocale:`en`,source:[{text:`Ship faster`}]},{kind:`block`,id:`b3`,name:`release.title`,type:`text`,translatable:!0,sourceLocale:`en`,source:[{text:`Publishing a release`}],targets:{fr:[{text:`Publier une version`}]}}],stats:{layers:0,groups:0,blocks:3,data:0,media:0,runs:3}},f={format:`markdown`,root:[{kind:`block`,id:`m1`,type:`h1`,translatable:!0,sourceLocale:`en`,source:[{text:`Publishing a release`}],targets:{fr:[{text:`Publier une version`}]}},{kind:`block`,id:`m2`,type:`paragraph`,translatable:!0,sourceLocale:`en`,source:[{text:`A release is cut from the main branch once every check has passed. The steps below assume you have already been granted the publish role.`}]},{kind:`block`,id:`m3`,type:`h2`,translatable:!0,sourceLocale:`en`,source:[{text:`Before you begin`}]},{kind:`block`,id:`m4`,type:`paragraph`,translatable:!0,sourceLocale:`en`,source:[{text:`Confirm the changelog names every user-facing change.`}]}],stats:{layers:0,groups:0,blocks:4,data:0,media:0,runs:4}},p={title:`Preview/FilePreview`,component:o,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The preview sheet every surface reads one file in: the file and its format in the header, the readings on a strip beneath it, the document in a scroll container, and the explicit handoffs in a footer. kapi desktop drives it from the native engine's content tree; the bowrain platform renders its own body inside it and adds its story readings and editor actions.`}}},args:{open:!0,onClose:u(),filename:`locales/en.json`,format:`json`,description:`Structure, vocabulary and check annotations, and source ↔ target.`,tree:d}},m={},h={globals:{theme:`dark`}},g={args:{filename:`docs/releasing.md`,format:`markdown`,tree:f}},_={args:g.args,globals:{theme:`dark`}},v={args:{loading:!0,tree:null}},y={args:v.args,globals:{theme:`dark`}},b={name:`Error`,args:{error:`No reader is registered for this file type.`,tree:null}},x={name:`Error (dark)`,args:b.args,globals:{theme:`dark`}},S={args:{tree:null,empty:(0,l.jsx)(`p`,{className:`py-8 text-sm text-muted-foreground`,children:i(`57570xn1vOd`,`This file carries no translatable content.`)})}},C={args:S.args,globals:{theme:`dark`}},w={args:{subtitle:`ui/src/App.kbf.json`,subtitleTestId:`file-preview-item-name`,actions:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`button`,{type:`button`,className:`h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground`,children:i(`6xldKsDBCdm`,`Open in Translate`)}),(0,l.jsx)(`button`,{type:`button`,className:`h-8 rounded-md border px-3 text-xs font-medium`,children:i(`9E2q1adaAZV`,`Review`)})]})}},T={args:w.args,globals:{theme:`dark`}},E={args:{focusKey:`app.greeting`,unitStates:{"app.greeting":`needs work`,"release.title":`approved`},backLabel:`Back to review`}},D={args:E.args,globals:{theme:`dark`}},O={render:()=>(0,l.jsx)(s,{})},k={render:()=>(0,l.jsx)(s,{}),globals:{theme:`dark`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source},description:{story:`A catalog file: the viewer reads it as a key table with its French target.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "docs/releasing.md",
    format: "markdown",
    tree: document
  }
}`,...g.parameters?.docs?.source},description:{story:`A marked-up file: the same viewer lays the content out as a document.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: DocumentPreview.args,
  globals: {
    theme: "dark"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    tree: null
  }
}`,...v.parameters?.docs?.source},description:{story:`The host is still reading the file.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: Loading.args,
  globals: {
    theme: "dark"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    error: "No reader is registered for this file type.",
    tree: null
  }
}`,...b.parameters?.docs?.source},description:{story:`The host could not read it, and says why.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Error (dark)",
  args: ErrorState.args,
  globals: {
    theme: "dark"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tree: null,
    empty: <p className="py-8 text-sm text-muted-foreground">
        This file carries no translatable content.
      </p>
  }
}`,...S.parameters?.docs?.source},description:{story:`Nothing failed and nothing is loading; there is simply nothing to read.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: Empty.args,
  globals: {
    theme: "dark"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    subtitle: "ui/src/App.kbf.json",
    subtitleTestId: "file-preview-item-name",
    actions: <>
        <button type="button" className="h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground">
          Open in Translate
        </button>
        <button type="button" className="h-8 rounded-md border px-3 text-xs font-medium">
          Review
        </button>
      </>
  }
}`,...w.parameters?.docs?.source},description:{story:`The handoffs a surface offers once the reader has seen the file.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: WithActions.args,
  globals: {
    theme: "dark"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    focusKey: "app.greeting",
    unitStates: {
      "app.greeting": "needs work",
      "release.title": "approved"
    },
    backLabel: "Back to review"
  }
}`,...E.parameters?.docs?.source},description:{story:`A reader arriving from a queue to look at one unit: the block is marked and
scrolled to, and the states of the file's other units are drawn alongside it.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: FocusedUnit.args,
  globals: {
    theme: "dark"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <ReadingStrip />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ReadingStrip />,
  globals: {
    theme: "dark"
  }
}`,...k.parameters?.docs?.source}}},A=[`KeyedTable`,`KeyedTableDark`,`DocumentPreview`,`DocumentPreviewDark`,`Loading`,`LoadingDark`,`ErrorState`,`ErrorStateDark`,`Empty`,`EmptyDark`,`WithActions`,`WithActionsDark`,`FocusedUnit`,`FocusedUnitDark`,`Readings`,`ReadingsDark`]})))()}j();export{g as DocumentPreview,_ as DocumentPreviewDark,S as Empty,C as EmptyDark,b as ErrorState,x as ErrorStateDark,E as FocusedUnit,D as FocusedUnitDark,m as KeyedTable,h as KeyedTableDark,v as Loading,y as LoadingDark,O as Readings,k as ReadingsDark,w as WithActions,T as WithActionsDark,A as __namedExportsOrder,p as default};