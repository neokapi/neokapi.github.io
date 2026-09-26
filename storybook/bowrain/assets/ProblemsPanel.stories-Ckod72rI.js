import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DQa1Xtyr.js";import{n as i,t as a}from"./ProblemsPanel-DYcgMVan.js";import{L as o,P as s,d as c}from"./fixtures-gfheXyA8.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),i(),c(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Editor/Terminology/ProblemsPanel`,component:a,tags:[`autodocs`],args:{onNavigateToBlock:u(),onClose:u()},parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsxs)(`div`,{style:{height:`100vh`,position:`relative`},children:[(0,l.jsx)(`div`,{style:{padding:24,color:`var(--foreground)`},children:(0,l.jsx)(`p`,{children:r(`46csadTv7An`,`Document content above the problems panel...`)})}),(0,l.jsx)(e,{})]})]},f={args:{issues:o,blocks:s,targetLocale:`fr-FR`,sourceLocale:`en`}},p={args:f.args,globals:{theme:`light`}},m={args:{issues:o}},h={args:{issues:o.map(e=>({...e,issues:[]}))}},g={args:{issues:[]}},_={args:{issues:void 0}},v={args:{issues:void 0,error:Error(`The check service is unavailable`)}},y={args:{issues:[],loading:!0}},b={args:{issues:[{blockId:`blk-2`,issues:[{type:`missing-tag`,severity:`error`,message:`Missing closing <b> tag in target`}]},{blockId:`blk-6`,issues:[{type:`placeholder`,severity:`error`,message:`Missing placeholder {count} in target`},{type:`punctuation`,severity:`error`,message:`Target ends with "." but source does not`}]}]}},x={args:{issues:[{blockId:`blk-1`,issues:[{type:`terminology`,severity:`warning`,message:`"localization" should be "localisation"`}]},{blockId:`blk-3`,issues:[{type:`whitespace`,severity:`warning`,message:`Trailing whitespace in target`},{type:`capitalization`,severity:`warning`,message:`Target starts with lowercase but source starts with uppercase`}]}]}},S={args:{issues:Array.from({length:10},(e,t)=>({blockId:`blk-${t+1}`,issues:[{type:`tag-mismatch`,severity:t%3==0?`error`:`warning`,message:`Issue in block ${t+1}: tag mismatch detected`},{type:`length`,severity:`warning`,message:`Block ${t+1}: target is 40% longer than source`}]}))}},C=[`WithIssues`,`WithIssuesLight`,`WithoutBlocks`,`NoIssues`,`NothingChecked`,`NotRun`,`CheckFailed`,`Loading`,`ErrorsOnly`,`WarningsOnly`,`ManyIssues`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    issues: sampleFileCheckResults,
    blocks: sampleBlocks,
    targetLocale: "fr-FR",
    sourceLocale: "en"
  }
}`,...f.parameters?.docs?.source},description:{story:`Panel with mixed errors and warnings. Given the file's blocks, each issue is
read in the text it was raised on: the source with the checker's span marked,
and the checked locale's text beneath it.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: WithIssues.args,
  globals: {
    theme: "light"
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    issues: sampleFileCheckResults
  }
}`,...m.parameters?.docs?.source},description:{story:`Without the file's blocks, an issue shows only the text the checker quoted.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    issues: sampleFileCheckResults.map(r => ({
      ...r,
      issues: []
    }))
  }
}`,...h.parameters?.docs?.source},description:{story:`The checks read every block and found no issue, and say over how many blocks.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    issues: []
  }
}`,...g.parameters?.docs?.source},description:{story:`The checks read no block, so there is nothing to report as clean.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    issues: undefined
  }
}`,..._.parameters?.docs?.source},description:{story:`No check has completed on this file yet.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    issues: undefined,
    error: new Error("The check service is unavailable")
  }
}`,...v.parameters?.docs?.source},description:{story:`The check request failed, so nothing in the file was checked.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    issues: [],
    loading: true
  }
}`,...y.parameters?.docs?.source},description:{story:`Loading state while the checks are running`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    issues: [{
      blockId: "blk-2",
      issues: [{
        type: "missing-tag",
        severity: "error",
        message: "Missing closing <b> tag in target"
      }]
    }, {
      blockId: "blk-6",
      issues: [{
        type: "placeholder",
        severity: "error",
        message: "Missing placeholder {count} in target"
      }, {
        type: "punctuation",
        severity: "error",
        message: 'Target ends with "." but source does not'
      }]
    }]
  }
}`,...b.parameters?.docs?.source},description:{story:`Errors only — multiple error-severity issues`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    issues: [{
      blockId: "blk-1",
      issues: [{
        type: "terminology",
        severity: "warning",
        message: '"localization" should be "localisation"'
      }]
    }, {
      blockId: "blk-3",
      issues: [{
        type: "whitespace",
        severity: "warning",
        message: "Trailing whitespace in target"
      }, {
        type: "capitalization",
        severity: "warning",
        message: "Target starts with lowercase but source starts with uppercase"
      }]
    }]
  }
}`,...x.parameters?.docs?.source},description:{story:`Warnings only — no errors`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    issues: Array.from({
      length: 10
    }, (_, i) => ({
      blockId: \`blk-\${i + 1}\`,
      issues: [{
        type: "tag-mismatch",
        severity: (i % 3 === 0 ? "error" : "warning") as "error" | "warning",
        message: \`Issue in block \${i + 1}: tag mismatch detected\`
      }, {
        type: "length",
        severity: "warning" as const,
        message: \`Block \${i + 1}: target is 40% longer than source\`
      }]
    }))
  }
}`,...S.parameters?.docs?.source},description:{story:`Many issues — tests scroll behavior`,...S.parameters?.docs?.description}}}})))()}w();export{v as CheckFailed,b as ErrorsOnly,y as Loading,S as ManyIssues,h as NoIssues,_ as NotRun,g as NothingChecked,x as WarningsOnly,f as WithIssues,p as WithIssuesLight,m as WithoutBlocks,C as __namedExportsOrder,d as default};