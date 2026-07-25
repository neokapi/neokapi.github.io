import{i as e}from"./preload-helper-a38IrJcw.js";import{n as t,t as n}from"./ConnectAICard-BNtXWA3M.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r={title:`Home/ConnectAICard`,component:n,parameters:{layout:`padded`}},i={detected:[{provider:`claude-code`,label:`Claude Code`,model:`sonnet`,detail:`signed in on this Mac · uses your Claude subscription`,subscription:!0},{provider:`ollama`,label:`Ollama`,model:`llama3.2:3b`,detail:`running locally · content stays on this machine`,subscription:!1}],configured:!1},a={detected:[],configured:!1},o={args:{detection:i}},s={args:{detection:a}},c={args:{detection:a},play:async({canvasElement:e})=>{e.querySelector(`[data-testid="connect-ai-key-toggle"]`)?.click()}},l={args:{detection:{detected:[],configured:!0,default_provider:`claude-code`}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    detection: DETECTED_BOTH
  }
}`,...o.parameters?.docs?.source},description:{story:`Claude Code and Ollama both found: two one-click primary options, the
 API-key path and the demo escape hatch below.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    detection: NOTHING_DETECTED
  }
}`,...s.parameters?.docs?.source},description:{story:`Nothing detected on the machine: the key-entry path leads.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    detection: NOTHING_DETECTED
  },
  play: async ({
    canvasElement
  }) => {
    const toggle = canvasElement.querySelector<HTMLButtonElement>('[data-testid="connect-ai-key-toggle"]');
    toggle?.click();
  }
}`,...c.parameters?.docs?.source},description:{story:`The expanded "I have an API key" form (click the toggle to reproduce
 interactively; this story starts from the nothing-detected state).`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    detection: {
      detected: [],
      configured: true,
      default_provider: "claude-code"
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Already configured: the card renders nothing (empty canvas by design).`,...l.parameters?.docs?.description}}},u=[`Detected`,`NothingDetected`,`KeyEntry`,`AlreadyConfigured`]}))();export{l as AlreadyConfigured,o as Detected,c as KeyEntry,s as NothingDetected,u as __namedExportsOrder,r as default};