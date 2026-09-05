import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./runtime-CYuAyXGC.js";import{T as o,w as s}from"./review-das2zTI-.js";import{n as c,t as l}from"./circle-x-DHy23FiO.js";import{t as u}from"./src-bnsg_Y08.js";import{n as d,t as f}from"./key-round-BG8gvWCd.js";import{n as p,t as m}from"./loader-circle-CJxt1NEO.js";import{n as h,t as g}from"./plus-Ba6HQVf6.js";import{i as _,n as v,r as y,t as b}from"./CredentialsPage-CnJYof8O.js";import{n as x,t as S}from"./trash-2-BeevAZLK.js";import{t as C}from"./label-C9BCd804.js";import{t as w}from"./badge-DH9Ozyfp.js";import{t as T}from"./button-IRW24Fu4.js";import{t as E}from"./card-DMPiov7u.js";import{t as D}from"./input-0OLrV30t.js";function O(){let[e,t]=(0,k.useState)([{id:`1`,name:`Production Anthropic`,provider_type:`anthropic`,model:`claude-sonnet-4-5-20241022`}]),[n,i]=(0,k.useState)(null),[o,c]=(0,k.useState)(``),[u,d]=(0,k.useState)(!1),p=()=>{i({id:``,name:``,provider_type:`anthropic`}),c(``)},h=(0,k.useCallback)(async()=>{if(!n)return;d(!0),await new Promise(e=>setTimeout(e,800));let e={...n,id:n.id||crypto.randomUUID().slice(0,8)};t(t=>{let n=t.findIndex(t=>t.id===e.id);if(n>=0){let r=[...t];return r[n]=e,r}return[...t,e]}),d(!1),i(null),c(``)},[n]),_=(0,k.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[]),v=(0,k.useCallback)(async e=>{t(t=>t.map(t=>t.id===e?{...t,testResult:`testing`}:t)),await new Promise(e=>setTimeout(e,1200));let n=Math.random()>.3;t(t=>t.map(t=>t.id===e?{...t,testResult:n?`success`:`error`}:t))},[]);return(0,A.jsxs)(`div`,{className:`p-6`,children:[(0,A.jsxs)(`div`,{className:`mb-6 flex items-center justify-between`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(`h1`,{className:`text-xl font-semibold`,children:a(`dHzdnLMlCa8`,`AI Credentials`)}),(0,A.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:a(`j9NAq1hCIuE`,`API keys are stored in your OS keychain`)})]}),(0,A.jsx)(T,{size:`sm`,onClick:p,children:r(`1Yzt4RJlQZ1`,`{=m0} Add Provider`,{"=m0":(0,A.jsx)(g,{size:12})})})]}),(0,A.jsx)(`div`,{className:`space-y-2`,children:e.map(e=>(0,A.jsxs)(E,{className:`flex items-center gap-3 p-4`,children:[(0,A.jsx)(f,{size:18,className:`shrink-0 text-primary`}),(0,A.jsxs)(`div`,{className:`flex-1`,children:[(0,A.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,A.jsx)(`span`,{className:`text-sm font-medium`,children:e.name}),(0,A.jsx)(w,{variant:`secondary`,children:e.provider_type}),e.testResult===`success`&&(0,A.jsx)(s,{size:14,className:`text-green-500`}),e.testResult===`error`&&(0,A.jsx)(l,{size:14,className:`text-destructive`})]}),e.model&&(0,A.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:a(`2V2ld5t3oYM`,`Model: ${e.model}`,{"provider.model":e.model})})]}),(0,A.jsx)(T,{variant:`ghost`,size:`icon-sm`,onClick:()=>v(e.id),disabled:e.testResult===`testing`,"aria-label":a(`8N3pbKs9gxr`,`Test {name}`,{name:e.name}),children:e.testResult===`testing`?(0,A.jsx)(m,{size:14,className:`animate-spin`}):(0,A.jsx)(y,{size:14})}),(0,A.jsx)(T,{variant:`ghost`,size:`icon-sm`,onClick:()=>_(e.id),className:`hover:bg-destructive/10 hover:text-destructive`,"aria-label":a(`fps6VI8jjsM`,`Delete {name}`,{name:e.name}),children:(0,A.jsx)(S,{size:14})})]},e.id))}),n&&(0,A.jsxs)(E,{className:`mt-4 p-4`,children:[(0,A.jsx)(`h3`,{className:`mb-3 text-sm font-medium`,children:a(`i7frhhVzfcp`,`New Provider`)}),(0,A.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,A.jsxs)(`div`,{children:[(0,A.jsx)(C,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`7FAPLVXTDKm`,`Name`)}),(0,A.jsx)(D,{type:`text`,value:n.name,onChange:e=>i({...n,name:e.target.value}),placeholder:a(`cWjF50spG0b`,`My OpenAI Key`)})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(C,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`lhQziaJnSKQ`,`Provider`)}),(0,A.jsx)(`select`,{value:n.provider_type,onChange:e=>i({...n,provider_type:e.target.value}),className:`h-8 w-full rounded-lg border border-input bg-transparent px-2 py-1 text-base md:text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30`,children:j.map(e=>(0,A.jsx)(`option`,{value:e.name,translate:`no`,children:e.label},e.name))})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(C,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`43TfMXOjTZ0`,`Model`)}),(0,A.jsx)(D,{type:`text`,value:n.model??``,onChange:e=>i({...n,model:e.target.value}),placeholder:a(`9RqveZHAfpV`,`gpt-4o`)})]}),(0,A.jsxs)(`div`,{children:[(0,A.jsx)(C,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`5JsM8VvKiCY`,`API Key`)}),(0,A.jsx)(D,{type:`password`,value:o,onChange:e=>c(e.target.value),placeholder:a(`hsyglyj9j2L`,`sk-...`)})]})]}),(0,A.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,A.jsxs)(T,{size:`sm`,onClick:h,disabled:!n.name||u,children:[u&&(0,A.jsx)(m,{size:12,className:`animate-spin`}),u?`Saving...`:`Save to Keychain`]}),(0,A.jsx)(T,{variant:`outline`,size:`sm`,onClick:()=>i(null),children:a(`hVp3F6mmOo9`,`Cancel`)})]})]})]})}var k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{i(),k=t(),h(),x(),_(),d(),p(),o(),c(),u(),v(),A=n(),j=[{name:`anthropic`,label:`Anthropic`},{name:`openai`,label:`OpenAI`},{name:`gemini`,label:`Gemini`},{name:`azureopenai`,label:`Azure OpenAI`},{name:`ollama`,label:`Ollama`}],M={title:`Interactions/Credential Management`,component:O,tags:[`autodocs`],parameters:{docs:{description:{component:`Demonstrates adding AI providers, saving API keys to the OS keychain with a spinner, testing connections with success/failure states, and deletion.`}}}},N={},P={render:()=>(0,A.jsx)(b,{providers:[{id:`1`,name:`Production Anthropic`,provider_type:`anthropic`,model:`claude-sonnet-4-5-20241022`},{id:`2`,name:`OpenAI GPT-4o`,provider_type:`openai`,model:`gpt-4o`}],providerTypes:[...j]})},F={render:()=>(0,A.jsx)(b,{providers:[],providerTypes:[...j]})},I={render:()=>(0,A.jsx)(b,{providers:[],providerTypes:[{name:`claude-code`,label:`Claude Code`,keyless:!0,subscription:!0},{name:`anthropic`,label:`Anthropic`},{name:`openai`,label:`OpenAI`},{name:`ollama`,label:`Ollama`,local:!0,keyless:!0}],models:[{model:`sonnet`,provider:`claude-code`,label:`Claude Code`,local:!1,installed:!0,needs_key:!1,subscription:!0,note:`uses your Claude subscription`,is_default:!1},{model:`llama3.2:3b`,provider:`ollama`,label:`Ollama`,local:!0,installed:!0,needs_key:!1,is_default:!1},{model:`claude-sonnet-4-20250514`,provider:`anthropic`,label:`Anthropic`,local:!1,installed:!1,needs_key:!0,is_default:!1}],detection:{detected:[{provider:`claude-code`,label:`Claude Code`,model:`sonnet`,detail:`signed in on this Mac · uses your Claude subscription`,subscription:!0},{provider:`ollama`,label:`Ollama`,model:`llama3.2:3b`,detail:`running locally · content stays on this machine`,subscription:!1}],configured:!1}})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source},description:{story:`Real component with pre-loaded providers (no Wails API calls).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <CredentialsPage providers={[]} providerTypes={[...PROVIDER_TYPES]} />
}`,...F.parameters?.docs?.source},description:{story:`Real component with empty providers list.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Settings → AI Models with the "Detected" section: Claude Code (uses your
Claude subscription) and a running Ollama, one Select click each — plus the
keyless Claude Code provider group with no key management.`,...I.parameters?.docs?.description}}},L=[`Default`,`WithProviders`,`Empty`,`DetectedProviders`]})))()}R();export{N as Default,I as DetectedProviders,F as Empty,P as WithProviders,L as __namedExportsOrder,M as default};