import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i,t as a}from"./runtime-DfFF6Hu8.js";import{n as o,t as s}from"./FilePreview-72SyJZm4.js";function c(){let[e,t]=(0,l.useState)(`source`),[n,r]=(0,l.useState)(`document`);return(0,u.jsx)(s,{open:!0,onClose:d(),filename:`docs/releasing.md`,format:`markdown`,description:a(`3kIIdmT8j86`,`Read the document, then open it in an editor.`),sides:{value:e,onChange:t,targetLabel:`French`},view:n,onViewChange:r,viewsLabel:`Reading`,views:[{value:`document`,label:`Document`,content:(0,u.jsx)(`p`,{className:`py-4`,children:a(`d3g4uSpP7lj`,`The document.`)})},{value:`context`,label:`In context`,content:(0,u.jsx)(`p`,{className:`py-4`,children:a(`ij1aOYCkW3C`,`The component that ships it.`)})}],toolbar:(0,u.jsx)(`span`,{className:`rounded-md border px-2 py-1 text-xs text-muted-foreground`,children:a(`4qmPabaGfT4`,`fr-FR`)}),scrollBody:!1})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{i(),l=t(),o(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={format:`json`,root:[{kind:`block`,id:`b1`,name:`app.greeting`,type:`text`,translatable:!0,sourceLocale:`en`,source:[{text:`Please utilize the dashboard`}],targets:{fr:[{text:`Veuillez utiliser le tableau de bord`}]},targetMeta:{fr:{status:`translated`,origin:{kind:`mt`,engine:`demo`}}},overlays:[{type:`term`,side:`source`,spans:[{range:{startRun:0,endRun:1,startOffset:19,endOffset:28},text:`dashboard`,props:{term:`dashboard`,target:`tableau de bord`,domain:`ui`}}]}]},{kind:`block`,id:`b2`,name:`app.tagline`,type:`text`,translatable:!0,sourceLocale:`en`,source:[{text:`Ship faster`}]},{kind:`block`,id:`b3`,name:`release.title`,type:`text`,translatable:!0,sourceLocale:`en`,source:[{text:`Publishing a release`}],targets:{fr:[{text:`Publier une version`}]}}],stats:{layers:0,groups:0,blocks:3,data:0,media:0,runs:3}},p={format:`markdown`,root:[{kind:`block`,id:`m1`,type:`h1`,translatable:!0,sourceLocale:`en`,source:[{text:`Publishing a release`}],targets:{fr:[{text:`Publier une version`}]}},{kind:`block`,id:`m2`,type:`paragraph`,translatable:!0,sourceLocale:`en`,source:[{text:`A release is cut from the main branch once every check has passed. The steps below assume you have already been granted the publish role.`}]},{kind:`block`,id:`m3`,type:`h2`,translatable:!0,sourceLocale:`en`,source:[{text:`Before you begin`}]},{kind:`block`,id:`m4`,type:`paragraph`,translatable:!0,sourceLocale:`en`,source:[{text:`Confirm the changelog names every user-facing change.`}]}],stats:{layers:0,groups:0,blocks:4,data:0,media:0,runs:4}},m={title:`Preview/FilePreview`,component:s,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The preview sheet every surface reads one file in: the file and its format in the header, the readings on a strip beneath it, the document in a scroll container, and the explicit handoffs in a footer. kapi desktop drives it from the native engine's content tree; the bowrain platform renders its own body inside it and adds its story readings and editor actions.`}}},args:{open:!0,onClose:d(),filename:`locales/en.json`,format:`json`,description:`Structure, vocabulary and check annotations, and source ↔ target.`,tree:f}},h={},g={globals:{theme:`dark`}},_={args:{filename:`docs/releasing.md`,format:`markdown`,tree:p}},v={args:_.args,globals:{theme:`dark`}},y={args:{loading:!0,tree:null}},b={args:y.args,globals:{theme:`dark`}},x={name:`Error`,args:{error:`No reader is registered for this file type.`,tree:null}},S={name:`Error (dark)`,args:x.args,globals:{theme:`dark`}},C={args:{tree:null,empty:(0,u.jsx)(`p`,{className:`py-8 text-sm text-muted-foreground`,children:a(`57570xn1vOd`,`This file carries no translatable content.`)})}},w={args:C.args,globals:{theme:`dark`}},T={args:{subtitle:`ui/src/App.kbf.json`,subtitleTestId:`file-preview-item-name`,actions:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`button`,{type:`button`,className:`h-8 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground`,children:a(`6xldKsDBCdm`,`Open in Translate`)}),(0,u.jsx)(`button`,{type:`button`,className:`h-8 rounded-md border px-3 text-xs font-medium`,children:a(`9E2q1adaAZV`,`Review`)})]})}},E={args:T.args,globals:{theme:`dark`}},D={args:{focusKey:`app.greeting`,unitStates:{"app.greeting":`needs work`,"release.title":`approved`},backLabel:`Back to review`}},O={args:D.args,globals:{theme:`dark`}},k={render:()=>(0,u.jsx)(c,{})},A={render:()=>(0,u.jsx)(c,{}),globals:{theme:`dark`}},j={args:{highlights:{b1:[{side:`source`,anchor:{kind:`range`,start:{run:0,offset:7},end:{run:0,offset:14}},tone:`destructive`,label:`Forbidden term "utilize" found`,emphasis:`focus`},{side:`source`,anchor:{kind:`range`,start:{run:0,offset:19},end:{run:1}},tone:`warning`,label:`Prefer "overview" to "dashboard" in product copy`,emphasis:`dim`}],b2:[{side:`source`,anchor:{kind:`block`},tone:`muted`,label:`Tone reads more formal than the brand's register`,emphasis:`dim`}]},focusKey:`app.greeting`,focusNote:(0,u.jsx)(u.Fragment,{children:r(`CjDr7cRqgP`,`{=m0} Major {/=m0} {=m1}Forbidden term "utilize" found{/=m1}`,{"=m0":(0,u.jsx)(`span`,{className:`rounded border border-destructive/40 bg-destructive/10 px-1.5 text-[10px] font-medium text-destructive`,children:`Major`}),"=m1":(0,u.jsx)(`span`,{className:`text-muted-foreground`,children:`Forbidden term "utilize" found`})})}),backLabel:`Back to checks`}},M={args:j.args,globals:{theme:`dark`}},N={args:{viewer:{defaultSide:`fr`},highlights:{b3:[{side:`fr`,anchor:{kind:`block`},tone:`destructive`,label:`Do-not-translate term "release" is missing from the fr target`,emphasis:`focus`},{side:`source`,anchor:{kind:`range`,start:{run:0,offset:13},end:{run:1}},tone:`destructive`,label:`Do-not-translate term "release" is missing from the fr target`,emphasis:`focus`}]},focusKey:`release.title`,focusNote:(0,u.jsx)(u.Fragment,{children:r(`ijE6hIowocv`,`{=m0} Critical {/=m0} {=m1} Do-not-translate term "release" is missing from the fr target {/=m1}`,{"=m0":(0,u.jsx)(`span`,{className:`rounded border border-destructive/40 bg-destructive/10 px-1.5 text-[10px] font-medium text-destructive`,children:`Critical`}),"=m1":(0,u.jsx)(`span`,{className:`text-muted-foreground`,children:`Do-not-translate term "release" is missing from the fr target`})})}),backLabel:`Back to checks`}},P={args:N.args,globals:{theme:`dark`}},F={args:{filename:`docs/releasing.md`,format:`markdown`,tree:p,highlights:{m2:[{side:`source`,anchor:{kind:`range`,start:{run:0,offset:61},end:{run:0,offset:67}},tone:`destructive`,label:`Say "sign in" rather than "assume": name the step the reader takes`,emphasis:`focus`}],m4:[{side:`source`,anchor:{kind:`block`},tone:`warning`,label:`A checklist item reads as an instruction; state it as a check`,emphasis:`dim`}]},backLabel:`Back to checks`,focusNote:(0,u.jsx)(`span`,{className:`text-muted-foreground`,children:a(`7sgNuMx72yt`,`Say "sign in" rather than "assume": name the step the reader takes`)})}},I={args:F.args,globals:{theme:`dark`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`A catalog file: the viewer reads it as a key table with its French target.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "docs/releasing.md",
    format: "markdown",
    tree: document
  }
}`,..._.parameters?.docs?.source},description:{story:`A marked-up file: the same viewer lays the content out as a document.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: DocumentPreview.args,
  globals: {
    theme: "dark"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    tree: null
  }
}`,...y.parameters?.docs?.source},description:{story:`The host is still reading the file.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: Loading.args,
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Error",
  args: {
    error: "No reader is registered for this file type.",
    tree: null
  }
}`,...x.parameters?.docs?.source},description:{story:`The host could not read it, and says why.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Error (dark)",
  args: ErrorState.args,
  globals: {
    theme: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    tree: null,
    empty: <p className="py-8 text-sm text-muted-foreground">
        This file carries no translatable content.
      </p>
  }
}`,...C.parameters?.docs?.source},description:{story:`Nothing failed and nothing is loading; there is simply nothing to read.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: Empty.args,
  globals: {
    theme: "dark"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`The handoffs a surface offers once the reader has seen the file.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: WithActions.args,
  globals: {
    theme: "dark"
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    focusKey: "app.greeting",
    unitStates: {
      "app.greeting": "needs work",
      "release.title": "approved"
    },
    backLabel: "Back to review"
  }
}`,...D.parameters?.docs?.source},description:{story:`A reader arriving from a queue to look at one unit: the block is marked and
scrolled to, and the states of the file's other units are drawn alongside it.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: FocusedUnit.args,
  globals: {
    theme: "dark"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <ReadingStrip />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <ReadingStrip />,
  globals: {
    theme: "dark"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    highlights: {
      b1: [{
        side: "source",
        anchor: {
          kind: "range",
          start: {
            run: 0,
            offset: 7
          },
          end: {
            run: 0,
            offset: 14
          }
        },
        tone: "destructive",
        label: 'Forbidden term "utilize" found',
        emphasis: "focus"
      }, {
        side: "source",
        anchor: {
          kind: "range",
          start: {
            run: 0,
            offset: 19
          },
          end: {
            run: 1
          }
        },
        tone: "warning",
        label: 'Prefer "overview" to "dashboard" in product copy',
        emphasis: "dim"
      }],
      b2: [{
        side: "source",
        anchor: {
          kind: "block"
        },
        tone: "muted",
        label: "Tone reads more formal than the brand's register",
        emphasis: "dim"
      }]
    },
    focusKey: "app.greeting",
    focusNote: <>
        <span className="rounded border border-destructive/40 bg-destructive/10 px-1.5 text-[10px] font-medium text-destructive">
          Major
        </span>
        <span className="text-muted-foreground">Forbidden term "utilize" found</span>
      </>,
    backLabel: "Back to checks"
  }
}`,...j.parameters?.docs?.source},description:{story:`A reader arriving from a list of check findings: the finding they came for is
marked and underlined on its block, the file's other findings are drawn
dimmer in their own tones, and one block carries two findings at once. The
header names the finding rather than a review state, and the way back is to
the list of findings.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: FindingHighlights.args,
  globals: {
    theme: "dark"
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    viewer: {
      defaultSide: "fr"
    },
    highlights: {
      b3: [{
        side: "fr",
        anchor: {
          kind: "block"
        },
        tone: "destructive",
        label: 'Do-not-translate term "release" is missing from the fr target',
        emphasis: "focus"
      }, {
        side: "source",
        anchor: {
          kind: "range",
          start: {
            run: 0,
            offset: 13
          },
          end: {
            run: 1
          }
        },
        tone: "destructive",
        label: 'Do-not-translate term "release" is missing from the fr target',
        emphasis: "focus"
      }]
    },
    focusKey: "release.title",
    focusNote: <>
        <span className="rounded border border-destructive/40 bg-destructive/10 px-1.5 text-[10px] font-medium text-destructive">
          Critical
        </span>
        <span className="text-muted-foreground">
          Do-not-translate term "release" is missing from the fr target
        </span>
      </>,
    backLabel: "Back to checks"
  }
}`,...N.parameters?.docs?.source},description:{story:`A finding about the translation: the document opens on the target side with
the block marked whole, because the checker's position is anchored to the
source runs, where the words it means are underlined once the reader toggles
to the source.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: FindingHighlightsTargetSide.args,
  globals: {
    theme: "dark"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    filename: "docs/releasing.md",
    format: "markdown",
    tree: document,
    highlights: {
      m2: [{
        side: "source",
        anchor: {
          kind: "range",
          start: {
            run: 0,
            offset: 61
          },
          end: {
            run: 0,
            offset: 67
          }
        },
        tone: "destructive",
        label: 'Say "sign in" rather than "assume": name the step the reader takes',
        emphasis: "focus"
      }],
      m4: [{
        side: "source",
        anchor: {
          kind: "block"
        },
        tone: "warning",
        label: "A checklist item reads as an instruction; state it as a check",
        emphasis: "dim"
      }]
    },
    backLabel: "Back to checks",
    focusNote: <span className="text-muted-foreground">
        Say "sign in" rather than "assume": name the step the reader takes
      </span>
  }
}`,...F.parameters?.docs?.source},description:{story:`The same marks on a document laid out as prose rather than as a key table.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: FindingHighlightsDocument.args,
  globals: {
    theme: "dark"
  }
}`,...I.parameters?.docs?.source}}},L=[`KeyedTable`,`KeyedTableDark`,`DocumentPreview`,`DocumentPreviewDark`,`Loading`,`LoadingDark`,`ErrorState`,`ErrorStateDark`,`Empty`,`EmptyDark`,`WithActions`,`WithActionsDark`,`FocusedUnit`,`FocusedUnitDark`,`Readings`,`ReadingsDark`,`FindingHighlights`,`FindingHighlightsDark`,`FindingHighlightsTargetSide`,`FindingHighlightsTargetSideDark`,`FindingHighlightsDocument`,`FindingHighlightsDocumentDark`]})))()}R();export{_ as DocumentPreview,v as DocumentPreviewDark,C as Empty,w as EmptyDark,x as ErrorState,S as ErrorStateDark,j as FindingHighlights,M as FindingHighlightsDark,F as FindingHighlightsDocument,I as FindingHighlightsDocumentDark,N as FindingHighlightsTargetSide,P as FindingHighlightsTargetSideDark,D as FocusedUnit,O as FocusedUnitDark,h as KeyedTable,g as KeyedTableDark,y as Loading,b as LoadingDark,k as Readings,A as ReadingsDark,T as WithActions,E as WithActionsDark,L as __namedExportsOrder,m as default};