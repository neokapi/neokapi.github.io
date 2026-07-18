import{c as e,i as t}from"./preload-helper-a38IrJcw.js";import{t as n}from"./react-hDuJKfaT.js";import{t as r}from"./jsx-runtime-DuIU0fMU.js";import{n as i,r as a,t as o}from"./runtime-rNvQ1D9s.js";import{A as s,E as c,Et as l,Ji as u,Rn as d,bn as f,na as p,t as m}from"./lucide-react-B3oJx3FB.js";import{t as h}from"./label-DHw9p71D.js";import{t as g}from"./button-Bf8BTLsa.js";import{t as _}from"./card-De1Kf3p_.js";import{t as v}from"./input-BTTJXJRq.js";import{t as y}from"./badge-49ymzeuw.js";import{i as b}from"./iframe-KRrdXfMs.js";import{n as x,t as S}from"./CredentialsPage-7on0Zwsw.js";function C(){let[e,t]=(0,w.useState)([{id:`1`,name:`Production Anthropic`,provider_type:`anthropic`,model:`claude-sonnet-4-5-20241022`}]),[n,r]=(0,w.useState)(null),[a,m]=(0,w.useState)(``),[b,x]=(0,w.useState)(!1),S=()=>{r({id:``,name:``,provider_type:`anthropic`}),m(``)},C=(0,w.useCallback)(async()=>{if(!n)return;x(!0),await new Promise(e=>setTimeout(e,800));let e={...n,id:n.id||crypto.randomUUID().slice(0,8)};t(t=>{let n=t.findIndex(t=>t.id===e.id);if(n>=0){let r=[...t];return r[n]=e,r}return[...t,e]}),x(!1),r(null),m(``)},[n]),D=(0,w.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[]),O=(0,w.useCallback)(async e=>{t(t=>t.map(t=>t.id===e?{...t,testResult:`testing`}:t)),await new Promise(e=>setTimeout(e,1200));let n=Math.random()>.3;t(t=>t.map(t=>t.id===e?{...t,testResult:n?`success`:`error`}:t))},[]);return(0,T.jsxs)(`div`,{className:`p-6`,children:[(0,T.jsxs)(`div`,{className:`mb-6 flex items-center justify-between`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`h1`,{className:`text-xl font-semibold`,children:o(`dHzdnLMlCa8`,`AI Credentials`)}),(0,T.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:o(`j9NAq1hCIuE`,`API keys are stored in your OS keychain`)})]}),(0,T.jsx)(g,{size:`sm`,onClick:S,children:i(`1Yzt4RJlQZ1`,`{=m0} Add Provider`,{"=m0":(0,T.jsx)(l,{size:12})})})]}),(0,T.jsx)(`div`,{className:`space-y-2`,children:e.map(e=>(0,T.jsxs)(_,{className:`flex items-center gap-3 p-4`,children:[(0,T.jsx)(d,{size:18,className:`shrink-0 text-primary`}),(0,T.jsxs)(`div`,{className:`flex-1`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(`span`,{className:`text-sm font-medium`,children:e.name}),(0,T.jsx)(y,{variant:`secondary`,children:e.provider_type}),e.testResult===`success`&&(0,T.jsx)(p,{size:14,className:`text-green-500`}),e.testResult===`error`&&(0,T.jsx)(u,{size:14,className:`text-destructive`})]}),e.model&&(0,T.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:o(`2V2ld5t3oYM`,`Model: ${e.model}`,{"provider.model":e.model})})]}),(0,T.jsx)(g,{variant:`ghost`,size:`icon-sm`,onClick:()=>O(e.id),disabled:e.testResult===`testing`,"aria-label":o(`8N3pbKs9gxr`,`Test {name}`,{name:e.name}),children:e.testResult===`testing`?(0,T.jsx)(f,{size:14,className:`animate-spin`}):(0,T.jsx)(s,{size:14})}),(0,T.jsx)(g,{variant:`ghost`,size:`icon-sm`,onClick:()=>D(e.id),className:`hover:bg-destructive/10 hover:text-destructive`,"aria-label":o(`fps6VI8jjsM`,`Delete {name}`,{name:e.name}),children:(0,T.jsx)(c,{size:14})})]},e.id))}),n&&(0,T.jsxs)(_,{className:`mt-4 p-4`,children:[(0,T.jsx)(`h3`,{className:`mb-3 text-sm font-medium`,children:o(`i7frhhVzfcp`,`New Provider`)}),(0,T.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,T.jsxs)(`div`,{children:[(0,T.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:o(`7FAPLVXTDKm`,`Name`)}),(0,T.jsx)(v,{type:`text`,value:n.name,onChange:e=>r({...n,name:e.target.value}),placeholder:o(`cWjF50spG0b`,`My OpenAI Key`)})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:o(`lhQziaJnSKQ`,`Provider`)}),(0,T.jsx)(`select`,{value:n.provider_type,onChange:e=>r({...n,provider_type:e.target.value}),className:`h-8 w-full rounded-lg border border-input bg-transparent px-2 py-1 text-base md:text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30`,children:E.map(e=>(0,T.jsx)(`option`,{value:e.name,translate:`no`,children:e.label},e.name))})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:o(`43TfMXOjTZ0`,`Model`)}),(0,T.jsx)(v,{type:`text`,value:n.model??``,onChange:e=>r({...n,model:e.target.value}),placeholder:o(`9RqveZHAfpV`,`gpt-4o`)})]}),(0,T.jsxs)(`div`,{children:[(0,T.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:o(`5JsM8VvKiCY`,`API Key`)}),(0,T.jsx)(v,{type:`password`,value:a,onChange:e=>m(e.target.value),placeholder:o(`hsyglyj9j2L`,`sk-...`)})]})]}),(0,T.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,T.jsxs)(g,{size:`sm`,onClick:C,disabled:!n.name||b,children:[b&&(0,T.jsx)(f,{size:12,className:`animate-spin`}),b?`Saving...`:`Save to Keychain`]}),(0,T.jsx)(g,{variant:`outline`,size:`sm`,onClick:()=>r(null),children:o(`hVp3F6mmOo9`,`Cancel`)})]})]})]})}var w,T,E,D,O,k,A,j,M;t((()=>{a(),w=e(n(),1),m(),b(),x(),T=r(),E=[{name:`anthropic`,label:`Anthropic`},{name:`openai`,label:`OpenAI`},{name:`gemini`,label:`Gemini`},{name:`azureopenai`,label:`Azure OpenAI`},{name:`ollama`,label:`Ollama`}],D={title:`Interactions/Credential Management`,component:C,tags:[`autodocs`],parameters:{docs:{description:{component:`Demonstrates adding AI providers, saving API keys to the OS keychain with a spinner, testing connections with success/failure states, and deletion.`}}}},O={},k={render:()=>(0,T.jsx)(S,{providers:[{id:`1`,name:`Production Anthropic`,provider_type:`anthropic`,model:`claude-sonnet-4-5-20241022`},{id:`2`,name:`OpenAI GPT-4o`,provider_type:`openai`,model:`gpt-4o`}],providerTypes:[...E]})},A={render:()=>(0,T.jsx)(S,{providers:[],providerTypes:[...E]})},j={render:()=>(0,T.jsx)(S,{providers:[],providerTypes:[{name:`claude-code`,label:`Claude Code`,keyless:!0,subscription:!0},{name:`anthropic`,label:`Anthropic`},{name:`openai`,label:`OpenAI`},{name:`ollama`,label:`Ollama`,local:!0,keyless:!0}],models:[{model:`sonnet`,provider:`claude-code`,label:`Claude Code`,local:!1,installed:!0,needs_key:!1,subscription:!0,note:`uses your Claude subscription`,is_default:!1},{model:`llama3.2:3b`,provider:`ollama`,label:`Ollama`,local:!0,installed:!0,needs_key:!1,is_default:!1},{model:`claude-sonnet-4-20250514`,provider:`anthropic`,label:`Anthropic`,local:!1,installed:!1,needs_key:!0,is_default:!1}],detection:{detected:[{provider:`claude-code`,label:`Claude Code`,model:`sonnet`,detail:`signed in on this Mac · uses your Claude subscription`,subscription:!0},{provider:`ollama`,label:`Ollama`,model:`llama3.2:3b`,detail:`running locally · content stays on this machine`,subscription:!1}],configured:!1}})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <CredentialsPage providers={[{
    id: "1",
    name: "Production Anthropic",
    provider_type: "anthropic",
    model: "claude-sonnet-4-5-20241022"
  }, {
    id: "2",
    name: "OpenAI GPT-4o",
    provider_type: "openai",
    model: "gpt-4o"
  }]} providerTypes={[...PROVIDER_TYPES]} />
}`,...k.parameters?.docs?.source},description:{story:`Real component with pre-loaded providers (no Wails API calls).`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <CredentialsPage providers={[]} providerTypes={[...PROVIDER_TYPES]} />
}`,...A.parameters?.docs?.source},description:{story:`Real component with empty providers list.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <CredentialsPage providers={[]} providerTypes={[{
    name: "claude-code",
    label: "Claude Code",
    keyless: true,
    subscription: true
  }, {
    name: "anthropic",
    label: "Anthropic"
  }, {
    name: "openai",
    label: "OpenAI"
  }, {
    name: "ollama",
    label: "Ollama",
    local: true,
    keyless: true
  }]} models={[{
    model: "sonnet",
    provider: "claude-code",
    label: "Claude Code",
    local: false,
    installed: true,
    needs_key: false,
    subscription: true,
    note: "uses your Claude subscription",
    is_default: false
  }, {
    model: "llama3.2:3b",
    provider: "ollama",
    label: "Ollama",
    local: true,
    installed: true,
    needs_key: false,
    is_default: false
  }, {
    model: "claude-sonnet-4-20250514",
    provider: "anthropic",
    label: "Anthropic",
    local: false,
    installed: false,
    needs_key: true,
    is_default: false
  }]} detection={{
    detected: [{
      provider: "claude-code",
      label: "Claude Code",
      model: "sonnet",
      detail: "signed in on this Mac · uses your Claude subscription",
      subscription: true
    }, {
      provider: "ollama",
      label: "Ollama",
      model: "llama3.2:3b",
      detail: "running locally · content stays on this machine",
      subscription: false
    }],
    configured: false
  }} />
}`,...j.parameters?.docs?.source},description:{story:`Settings → AI Models with the "Detected" section: Claude Code (uses your
Claude subscription) and a running Ollama, one Select click each — plus the
keyless Claude Code provider group with no key management.`,...j.parameters?.docs?.description}}},M=[`Default`,`WithProviders`,`Empty`,`DetectedProviders`]}))();export{O as Default,j as DetectedProviders,A as Empty,k as WithProviders,M as __namedExportsOrder,D as default};