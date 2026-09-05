import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./review-BoxJ3aj5.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{r(),i=t(),a=[{text:`Please utilize the dashboard to review your credits.`}],o=[{text:`Your credits reset on `},{ph:{id:`date`,type:`var`,data:`{date}`,equiv:`date`}},{text:`. See the `},{pcOpen:{id:`b`,type:`bold`,data:`<b>`,equiv:`b`}},{text:`billing page`},{pcClose:{id:`b`,type:`bold`,data:`</b>`,equiv:`b`}},{text:` for details.`}],s=[{text:`تم تغيير أكمي كلاود في الترجمة`}],c={title:`Review/FindingSnippet`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`A finding in the text it was raised on: the block's runs read as the document reads them, with the finding's span marked in its tone and the inline codes drawn as chips. The desktop's Checks page and the platform's problems panel both read a finding through this.`}}},render:e=>(0,i.jsx)(`div`,{className:`w-[28rem] rounded-md border bg-card p-3 text-xs text-card-foreground`,children:(0,i.jsx)(n,{...e})})},l={args:{runs:a,locale:`en`,anchor:{kind:`range`,start:{run:0,offset:7},end:{run:0,offset:14}},tone:`destructive`,label:`Forbidden term "utilize" found`}},u={args:l.args,globals:{theme:`dark`}},d={args:{runs:a,locale:`en`,anchor:{kind:`block`},tone:`warning`,label:`Tone reads more formal than the brand's casual register`}},f={args:d.args,globals:{theme:`dark`}},p={args:{runs:o,locale:`en`,anchor:{kind:`range`,start:{run:4,offset:0},end:{run:5}},tone:`warning`,label:`Say "billing overview" rather than "billing page"`}},m={args:p.args,globals:{theme:`dark`}},h={args:{runs:o,locale:`en`,anchor:{kind:`run`,runId:`date`},tone:`destructive`,label:`The de target drops {date}.`}},g={args:{runs:s,locale:`ar-EG`,anchor:{kind:`range`,start:{run:0,offset:10},end:{run:0,offset:20}},tone:`destructive`,label:`Do-not-translate term "Acme Cloud" is missing from the ar target`}},_={args:{fallbackText:`{count}`,locale:`de-DE`,tone:`destructive`,label:`Placeholder {count} is missing from the de target`}},v={args:_.args,globals:{theme:`dark`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    runs: plain,
    locale: "en",
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
    label: 'Forbidden term "utilize" found'
  }
}`,...l.parameters?.docs?.source},description:{story:`A range anchor over the offending words.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: RangeAnchor.args,
  globals: {
    theme: "dark"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    runs: plain,
    locale: "en",
    anchor: {
      kind: "block"
    },
    tone: "warning",
    label: "Tone reads more formal than the brand's casual register"
  }
}`,...d.parameters?.docs?.source},description:{story:`A block anchor: the checker objects to the block as a whole.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: BlockAnchor.args,
  globals: {
    theme: "dark"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    runs: withCodes,
    locale: "en",
    anchor: {
      kind: "range",
      start: {
        run: 4,
        offset: 0
      },
      end: {
        run: 5
      }
    },
    tone: "warning",
    label: 'Say "billing overview" rather than "billing page"'
  }
}`,...p.parameters?.docs?.source},description:{story:`A source-side finding on a block with inline codes: the placeholder and the
bold pair stay in the reading as chips, and the marked words sit between them.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: SourceWithCodes.args,
  globals: {
    theme: "dark"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    runs: withCodes,
    locale: "en",
    anchor: {
      kind: "run",
      runId: "date"
    },
    tone: "destructive",
    label: "The de target drops {date}."
  }
}`,...h.parameters?.docs?.source},description:{story:`A run anchor names a placeholder, so the mark goes around its chip.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    runs: arabic,
    locale: "ar-EG",
    anchor: {
      kind: "range",
      start: {
        run: 0,
        offset: 10
      },
      end: {
        run: 0,
        offset: 20
      }
    },
    tone: "destructive",
    label: 'Do-not-translate term "Acme Cloud" is missing from the ar target'
  }
}`,...g.parameters?.docs?.source},description:{story:`A right-to-left block reads in its own direction.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    fallbackText: "{count}",
    locale: "de-DE",
    tone: "destructive",
    label: "Placeholder {count} is missing from the de target"
  }
}`,..._.parameters?.docs?.source},description:{story:`The checker quoted the text and the block's runs are unavailable.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: FallbackText.args,
  globals: {
    theme: "dark"
  }
}`,...v.parameters?.docs?.source}}},y=[`RangeAnchor`,`RangeAnchorDark`,`BlockAnchor`,`BlockAnchorDark`,`SourceWithCodes`,`SourceWithCodesDark`,`RunAnchorOnPlaceholder`,`RightToLeft`,`FallbackText`,`FallbackTextDark`]})))()}b();export{d as BlockAnchor,f as BlockAnchorDark,_ as FallbackText,v as FallbackTextDark,l as RangeAnchor,u as RangeAnchorDark,g as RightToLeft,h as RunAnchorOnPlaceholder,p as SourceWithCodes,m as SourceWithCodesDark,y as __namedExportsOrder,c as default};