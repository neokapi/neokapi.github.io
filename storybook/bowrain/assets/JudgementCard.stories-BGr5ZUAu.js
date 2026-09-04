import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{i,t as a}from"./review-C-fRhLuJ.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),o=t(),s=[{id:`finding-issue-0`,category:`placeholder`,severity:`error`,tone:`destructive`,message:`Target is missing the {name} placeholder.`,originalText:`{name}`,suggestion:`Réinitialisez votre {name}`},{id:`finding-voice-0`,category:`compliance`,severity:`major`,tone:`destructive`,message:`Uses a term the profile forbids.`,originalText:`Réinitialisez`,suggestion:`Changez`},{id:`finding-voice-1`,category:`style`,severity:`minor`,tone:`warning`,message:`Prefers the second person here.`},{id:`finding-source-0`,category:`voice`,severity:`major`,tone:`destructive`,message:`Forbidden term "cart".`,field:`source`}],c={title:`Review/JudgementCard`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`What has already been said about this translation: every checker's findings as one list, painted on the shared severity scale, with what each was raised against and what to say instead; and the AI pre-review that scored it, inside the same card. A source-side finding is marked so it does not read as a defect in the translation.`}}},render:e=>(0,o.jsx)(`div`,{className:`w-[28rem]`,children:(0,o.jsx)(i,{...e})})},l={name:`Findings from both checkers, AI pre-review absent`,args:{findings:s}},u={name:`Clean, with an AI pre-review present`,args:{findings:[],aiScore:84,aiModel:`claude-sonnet`,aiFindings:[{severity:`minor`,message:`Slightly formal for the surface.`,suggestion:`On continue ?`}]}},d={name:`Findings and an AI pre-review`,args:{findings:s.slice(0,2),aiScore:41,aiModel:`claude-sonnet`}},f={name:`The surface's own re-check above the list`,args:{findings:s.slice(1,3),children:(0,o.jsx)(`button`,{type:`button`,className:`rounded border px-2 py-0.5 text-xs`,children:r(`7wZWH8Kt6KP`,`Re-check`)})}},p={name:`Unit still loading`,args:{}},m={globals:{theme:`dark`},args:{findings:s,aiScore:41,aiModel:`claude-sonnet`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Findings from both checkers, AI pre-review absent",
  args: {
    findings
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Clean, with an AI pre-review present",
  args: {
    findings: [],
    aiScore: 84,
    aiModel: "claude-sonnet",
    aiFindings: [{
      severity: "minor",
      message: "Slightly formal for the surface.",
      suggestion: "On continue ?"
    }]
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Findings and an AI pre-review",
  args: {
    findings: findings.slice(0, 2),
    aiScore: 41,
    aiModel: "claude-sonnet"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "The surface's own re-check above the list",
  args: {
    findings: findings.slice(1, 3),
    children: <button type="button" className="rounded border px-2 py-0.5 text-xs">
        Re-check
      </button>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Unit still loading",
  args: {}
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    findings,
    aiScore: 41,
    aiModel: "claude-sonnet"
  }
}`,...m.parameters?.docs?.source}}},h=[`WithFindings`,`WithAIPreReview`,`FindingsAndAI`,`WithSurfaceControls`,`Loading`,`Dark`]})))()}g();export{m as Dark,d as FindingsAndAI,p as Loading,u as WithAIPreReview,l as WithFindings,f as WithSurfaceControls,h as __namedExportsOrder,c as default};