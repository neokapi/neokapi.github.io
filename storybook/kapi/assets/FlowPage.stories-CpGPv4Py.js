import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./FlowPage-CO3-4Cbb.js";var i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={steps:[{tool:`redact`,config:{detectors:[`entities`]}},{tool:`translate`}]},s={name:`secure-translate`,description:`secure-translate flow on contact-page.md`,nodes:[{id:`reader`,type:`reader`,name:`markdown`,label:`markdown reader`},{id:`tool-0`,type:`tool`,name:`redact`,label:`redact`},{id:`tool-1`,type:`tool`,name:`translate`,label:`translate`},{id:`writer`,type:`writer`,name:`markdown`,label:`markdown writer`}],events:[{ts:40,type:`exit`,nodeId:`reader`,partId:`b1`},{ts:120,type:`enter`,nodeId:`tool-0`,partId:`b1`},{ts:480,type:`exit`,nodeId:`tool-0`,partId:`b1`},{ts:510,type:`enter`,nodeId:`tool-1`,partId:`b1`},{ts:2200,type:`exit`,nodeId:`tool-1`,partId:`b1`},{ts:2210,type:`enter`,nodeId:`writer`,partId:`b1`},{ts:2230,type:`exit`,nodeId:`writer`,partId:`b1`},{ts:2250,type:`exit`,nodeId:`reader`,partId:`b2`},{ts:2300,type:`enter`,nodeId:`tool-0`,partId:`b2`},{ts:2350,type:`exit`,nodeId:`tool-0`,partId:`b2`},{ts:2400,type:`enter`,nodeId:`tool-1`,partId:`b2`},{ts:3100,type:`exit`,nodeId:`tool-1`,partId:`b2`},{ts:3110,type:`enter`,nodeId:`writer`,partId:`b2`},{ts:3140,type:`exit`,nodeId:`writer`,partId:`b2`}],parts:{b1:{initial:{id:`b1`,type:`Block`,summary:`Contact Jane Doe at Acme Corp`,sourceText:`Contact Jane Doe at Acme Corp`,detail:{overlays:[{type:`entity`,side:`source`,spans:[{start:8,end:16,text:`Jane Doe`,note:`entity:person`},{start:20,end:29,text:`Acme Corp`,note:`entity:organization`}]}]}},afterNode:{"tool-0":{id:`b1`,type:`Block`,summary:`Contact Jane Doe at Acme Corp`,sourceText:`Contact [REDACTED:Person] at [REDACTED:Org]`,detail:{annotations:[{key:`redaction.secret`,summary:`2 vaulted originals`}]}},"tool-1":{id:`b1`,type:`Block`,summary:`Contact Jane Doe at Acme Corp`,sourceText:`Contact [REDACTED:Person] at [REDACTED:Org]`,targetText:`Contactez [REDACTED:Person] chez [REDACTED:Org]`,detail:{annotations:[{key:`redaction.secret`,summary:`2 vaulted originals`}]}}}},b2:{initial:{id:`b2`,type:`Block`,summary:`Thanks for reaching out!`,sourceText:`Thanks for reaching out!`},afterNode:{"tool-0":{id:`b2`,type:`Block`,summary:`Thanks for reaching out!`,sourceText:`Thanks for reaching out!`},"tool-1":{id:`b2`,type:`Block`,summary:`Thanks for reaching out!`,sourceText:`Thanks for reaching out!`,targetText:`Merci de nous avoir contactés !`}}}},durationUs:3200},c={flow_name:`secure-translate`,steps:o.steps,files:[{file_path:`/projects/site/src/contact-page.md`,locale:`fr-FR`},{file_path:`/projects/site/src/pricing.md`,locale:`fr-FR`,truncated:!0}],max_parts:500},l={title:`Pages/FlowPage`,component:r,tags:[`autodocs`],args:{onChange:a(),onRun:a()},parameters:{layout:`fullscreen`},decorators:[e=>(0,i.jsx)(`div`,{style:{height:600},children:(0,i.jsx)(e,{})})]},u={args:{flowName:`translate`,flow:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]}}},d={args:{flowName:`new-flow`,flow:{steps:[]}}},f={name:`With a recorded run`,args:{flowName:`secure-translate`,flow:o,preloadedRun:{run:c,traces:{"/projects/site/src/contact-page.md":s,"/projects/site/src/pricing.md":s}}}},p={name:`Edited since the run (no Run view)`,args:{flowName:`secure-translate`,flow:{steps:[{tool:`translate`}]},preloadedRun:{run:c,traces:{"/projects/site/src/contact-page.md":s}}}},m={name:`Parallel group (switch to Diagram)`,args:{flowName:`translate-and-check`,flow:{description:`Translate, then check and count in parallel.`,steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:``,parallel:[{tool:`qa`},{tool:`word-count`}]}]}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "translate",
    flow: {
      steps: [{
        tool: "translate",
        config: {
          provider: "anthropic"
        }
      }]
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "new-flow",
    flow: {
      steps: []
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "With a recorded run",
  args: {
    flowName: "secure-translate",
    flow: recordedFlow,
    preloadedRun: {
      run: recordedRun,
      traces: {
        "/projects/site/src/contact-page.md": recordedTrace,
        "/projects/site/src/pricing.md": recordedTrace
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`The flow after a run: the Run view replays the retained trace on the
canvas, the view bar names the file (a select when the run covered
several), and a trace the recording budget cut short says so.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Edited since the run (no Run view)",
  args: {
    flowName: "secure-translate",
    flow: {
      steps: [{
        tool: "translate"
      }]
    },
    preloadedRun: {
      run: recordedRun,
      traces: {
        "/projects/site/src/contact-page.md": recordedTrace
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`The same run after the flow was edited: the trace no longer describes the
steps shown, so the Run view is withheld until the edit is undone.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Parallel group (switch to Diagram)",
  args: {
    flowName: "translate-and-check",
    flow: {
      description: "Translate, then check and count in parallel.",
      steps: [{
        tool: "translate",
        config: {
          provider: "anthropic"
        }
      }, {
        tool: "",
        parallel: [{
          tool: "qa"
        }, {
          tool: "word-count"
        }]
      }]
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`WithFlows`,`Empty`,`WithRun`,`EditedSinceRun`,`ParallelFlow`]})))()}g();export{p as EditedSinceRun,d as Empty,m as ParallelFlow,u as WithFlows,f as WithRun,h as __namedExportsOrder,l as default};