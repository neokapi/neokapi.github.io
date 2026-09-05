import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{n as i,t as a}from"./ProblemsPanel-uezDgFd8.js";import{L as o,d as s}from"./fixtures-BuwUq1M_.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Editor/Terminology/ProblemsPanel`,component:a,tags:[`autodocs`],args:{onNavigateToBlock:l(),onClose:l()},parameters:{layout:`fullscreen`},decorators:[e=>(0,c.jsxs)(`div`,{style:{height:`100vh`,position:`relative`},children:[(0,c.jsx)(`div`,{style:{padding:24,color:`var(--foreground)`},children:(0,c.jsx)(`p`,{children:r(`46csadTv7An`,`Document content above the problems panel...`)})}),(0,c.jsx)(e,{})]})]},d={args:{issues:o}},f={args:{issues:[]}},p={args:{issues:[],loading:!0}},m={args:{issues:[{blockId:`blk-2`,issues:[{type:`missing-tag`,severity:`error`,message:`Missing closing <b> tag in target`}]},{blockId:`blk-6`,issues:[{type:`placeholder`,severity:`error`,message:`Missing placeholder {count} in target`},{type:`punctuation`,severity:`error`,message:`Target ends with "." but source does not`}]}]}},h={args:{issues:[{blockId:`blk-1`,issues:[{type:`terminology`,severity:`warning`,message:`"localization" should be "localisation"`}]},{blockId:`blk-3`,issues:[{type:`whitespace`,severity:`warning`,message:`Trailing whitespace in target`},{type:`capitalization`,severity:`warning`,message:`Target starts with lowercase but source starts with uppercase`}]}]}},g={args:{issues:Array.from({length:10},(e,t)=>({blockId:`blk-${t+1}`,issues:[{type:`tag-mismatch`,severity:t%3==0?`error`:`warning`,message:`Issue in block ${t+1}: tag mismatch detected`},{type:`length`,severity:`warning`,message:`Block ${t+1}: target is 40% longer than source`}]}))}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    issues: sampleFileCheckResults
  }
}`,...d.parameters?.docs?.source},description:{story:`Panel with mixed errors and warnings`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    issues: []
  }
}`,...f.parameters?.docs?.source},description:{story:`No issues found — shows success state`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    issues: [],
    loading: true
  }
}`,...p.parameters?.docs?.source},description:{story:`Loading state while the checks are running`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Errors only — multiple error-severity issues`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Warnings only — no errors`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Many issues — tests scroll behavior`,...g.parameters?.docs?.description}}},_=[`WithIssues`,`NoIssues`,`Loading`,`ErrorsOnly`,`WarningsOnly`,`ManyIssues`]})))()}v();export{m as ErrorsOnly,p as Loading,g as ManyIssues,f as NoIssues,h as WarningsOnly,d as WithIssues,_ as __namedExportsOrder,u as default};