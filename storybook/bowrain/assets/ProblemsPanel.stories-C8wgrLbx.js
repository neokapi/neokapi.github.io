import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{n as i,t as a}from"./ProblemsPanel-DUpY4mo5.js";import{L as o,P as s,d as c}from"./fixtures-CP74j5SD.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),c(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Editor/Terminology/ProblemsPanel`,component:a,tags:[`autodocs`],args:{onNavigateToBlock:u(),onClose:u()},parameters:{layout:`fullscreen`},decorators:[e=>(0,l.jsxs)(`div`,{style:{height:`100vh`,position:`relative`},children:[(0,l.jsx)(`div`,{style:{padding:24,color:`var(--foreground)`},children:(0,l.jsx)(`p`,{children:r(`46csadTv7An`,`Document content above the problems panel...`)})}),(0,l.jsx)(e,{})]})]},f={args:{issues:o,blocks:s,targetLocale:`fr-FR`,sourceLocale:`en`}},p={args:f.args,globals:{theme:`light`}},m={args:{issues:o}},h={args:{issues:[]}},g={args:{issues:[],loading:!0}},_={args:{issues:[{blockId:`blk-2`,issues:[{type:`missing-tag`,severity:`error`,message:`Missing closing <b> tag in target`}]},{blockId:`blk-6`,issues:[{type:`placeholder`,severity:`error`,message:`Missing placeholder {count} in target`},{type:`punctuation`,severity:`error`,message:`Target ends with "." but source does not`}]}]}},v={args:{issues:[{blockId:`blk-1`,issues:[{type:`terminology`,severity:`warning`,message:`"localization" should be "localisation"`}]},{blockId:`blk-3`,issues:[{type:`whitespace`,severity:`warning`,message:`Trailing whitespace in target`},{type:`capitalization`,severity:`warning`,message:`Target starts with lowercase but source starts with uppercase`}]}]}},y={args:{issues:Array.from({length:10},(e,t)=>({blockId:`blk-${t+1}`,issues:[{type:`tag-mismatch`,severity:t%3==0?`error`:`warning`,message:`Issue in block ${t+1}: tag mismatch detected`},{type:`length`,severity:`warning`,message:`Block ${t+1}: target is 40% longer than source`}]}))}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    issues: []
  }
}`,...h.parameters?.docs?.source},description:{story:`No issues found — shows success state`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    issues: [],
    loading: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Loading state while the checks are running`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`Errors only — multiple error-severity issues`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`Warnings only — no errors`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Many issues — tests scroll behavior`,...y.parameters?.docs?.description}}},b=[`WithIssues`,`WithIssuesLight`,`WithoutBlocks`,`NoIssues`,`Loading`,`ErrorsOnly`,`WarningsOnly`,`ManyIssues`]})))()}x();export{_ as ErrorsOnly,g as Loading,y as ManyIssues,h as NoIssues,v as WarningsOnly,f as WithIssues,p as WithIssuesLight,m as WithoutBlocks,b as __namedExportsOrder,d as default};