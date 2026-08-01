import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,r as i,t as a}from"./runtime-D9E4JuzJ.js";import{A as o,Bn as s,E as c,Ji as l,Ot as u,Sn as d,na as f,t as p}from"./lucide-react-DAXek0DD.js";import{t as m}from"./src-3FHl0xIw.js";import{t as h}from"./label-B-N8ceFE.js";import{t as g}from"./badge-BJhUWkBi.js";import{t as _}from"./button-xCNJhilW.js";import{t as v}from"./card-BgJKhC20.js";import{t as y}from"./input-CnXj5DeC.js";import{n as b,t as x}from"./CredentialsPage-C41Gp-7c.js";function S(){let[e,t]=(0,C.useState)([{id:`1`,name:`Production Anthropic`,provider_type:`anthropic`,model:`claude-sonnet-4-5-20241022`}]),[n,i]=(0,C.useState)(null),[p,m]=(0,C.useState)(``),[b,x]=(0,C.useState)(!1),S=()=>{i({id:``,name:``,provider_type:`anthropic`}),m(``)},E=(0,C.useCallback)(async()=>{if(!n)return;x(!0),await new Promise(e=>setTimeout(e,800));let e={...n,id:n.id||crypto.randomUUID().slice(0,8)};t(t=>{let n=t.findIndex(t=>t.id===e.id);if(n>=0){let r=[...t];return r[n]=e,r}return[...t,e]}),x(!1),i(null),m(``)},[n]),D=(0,C.useCallback)(e=>{t(t=>t.filter(t=>t.id!==e))},[]),O=(0,C.useCallback)(async e=>{t(t=>t.map(t=>t.id===e?{...t,testResult:`testing`}:t)),await new Promise(e=>setTimeout(e,1200));let n=Math.random()>.3;t(t=>t.map(t=>t.id===e?{...t,testResult:n?`success`:`error`}:t))},[]);return(0,w.jsxs)(`div`,{className:`p-6`,children:[(0,w.jsxs)(`div`,{className:`mb-6 flex items-center justify-between`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(`h1`,{className:`text-xl font-semibold`,children:a(`dHzdnLMlCa8`,`AI Credentials`)}),(0,w.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:a(`j9NAq1hCIuE`,`API keys are stored in your OS keychain`)})]}),(0,w.jsx)(_,{size:`sm`,onClick:S,children:r(`1Yzt4RJlQZ1`,`{=m0} Add Provider`,{"=m0":(0,w.jsx)(u,{size:12})})})]}),(0,w.jsx)(`div`,{className:`space-y-2`,children:e.map(e=>(0,w.jsxs)(v,{className:`flex items-center gap-3 p-4`,children:[(0,w.jsx)(s,{size:18,className:`shrink-0 text-primary`}),(0,w.jsxs)(`div`,{className:`flex-1`,children:[(0,w.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,w.jsx)(`span`,{className:`text-sm font-medium`,children:e.name}),(0,w.jsx)(g,{variant:`secondary`,children:e.provider_type}),e.testResult===`success`&&(0,w.jsx)(f,{size:14,className:`text-green-500`}),e.testResult===`error`&&(0,w.jsx)(l,{size:14,className:`text-destructive`})]}),e.model&&(0,w.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:a(`2V2ld5t3oYM`,`Model: ${e.model}`,{"provider.model":e.model})})]}),(0,w.jsx)(_,{variant:`ghost`,size:`icon-sm`,onClick:()=>O(e.id),disabled:e.testResult===`testing`,"aria-label":a(`8N3pbKs9gxr`,`Test {name}`,{name:e.name}),children:e.testResult===`testing`?(0,w.jsx)(d,{size:14,className:`animate-spin`}):(0,w.jsx)(o,{size:14})}),(0,w.jsx)(_,{variant:`ghost`,size:`icon-sm`,onClick:()=>D(e.id),className:`hover:bg-destructive/10 hover:text-destructive`,"aria-label":a(`fps6VI8jjsM`,`Delete {name}`,{name:e.name}),children:(0,w.jsx)(c,{size:14})})]},e.id))}),n&&(0,w.jsxs)(v,{className:`mt-4 p-4`,children:[(0,w.jsx)(`h3`,{className:`mb-3 text-sm font-medium`,children:a(`i7frhhVzfcp`,`New Provider`)}),(0,w.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`7FAPLVXTDKm`,`Name`)}),(0,w.jsx)(y,{type:`text`,value:n.name,onChange:e=>i({...n,name:e.target.value}),placeholder:a(`cWjF50spG0b`,`My OpenAI Key`)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`lhQziaJnSKQ`,`Provider`)}),(0,w.jsx)(`select`,{value:n.provider_type,onChange:e=>i({...n,provider_type:e.target.value}),className:`h-8 w-full rounded-lg border border-input bg-transparent px-2 py-1 text-base md:text-sm outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30`,children:T.map(e=>(0,w.jsx)(`option`,{value:e.name,translate:`no`,children:e.label},e.name))})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`43TfMXOjTZ0`,`Model`)}),(0,w.jsx)(y,{type:`text`,value:n.model??``,onChange:e=>i({...n,model:e.target.value}),placeholder:a(`9RqveZHAfpV`,`gpt-4o`)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(h,{className:`mb-1 block text-xs text-muted-foreground`,children:a(`5JsM8VvKiCY`,`API Key`)}),(0,w.jsx)(y,{type:`password`,value:p,onChange:e=>m(e.target.value),placeholder:a(`hsyglyj9j2L`,`sk-...`)})]})]}),(0,w.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,w.jsxs)(_,{size:`sm`,onClick:E,disabled:!n.name||b,children:[b&&(0,w.jsx)(d,{size:12,className:`animate-spin`}),b?`Saving...`:`Save to Keychain`]}),(0,w.jsx)(_,{variant:`outline`,size:`sm`,onClick:()=>i(null),children:a(`hVp3F6mmOo9`,`Cancel`)})]})]})]})}var C,w,T,E,D,O,k,A,j;e((()=>{i(),C=t(),p(),m(),b(),w=n(),T=[{name:`anthropic`,label:`Anthropic`},{name:`openai`,label:`OpenAI`},{name:`gemini`,label:`Gemini`},{name:`azureopenai`,label:`Azure OpenAI`},{name:`ollama`,label:`Ollama`}],E={title:`Interactions/Credential Management`,component:S,tags:[`autodocs`],parameters:{docs:{description:{component:`Demonstrates adding AI providers, saving API keys to the OS keychain with a spinner, testing connections with success/failure states, and deletion.`}}}},D={},O={render:()=>(0,w.jsx)(x,{providers:[{id:`1`,name:`Production Anthropic`,provider_type:`anthropic`,model:`claude-sonnet-4-5-20241022`},{id:`2`,name:`OpenAI GPT-4o`,provider_type:`openai`,model:`gpt-4o`}],providerTypes:[...T]})},k={render:()=>(0,w.jsx)(x,{providers:[],providerTypes:[...T]})},A={render:()=>(0,w.jsx)(x,{providers:[],providerTypes:[{name:`claude-code`,label:`Claude Code`,keyless:!0,subscription:!0},{name:`anthropic`,label:`Anthropic`},{name:`openai`,label:`OpenAI`},{name:`ollama`,label:`Ollama`,local:!0,keyless:!0}],models:[{model:`sonnet`,provider:`claude-code`,label:`Claude Code`,local:!1,installed:!0,needs_key:!1,subscription:!0,note:`uses your Claude subscription`,is_default:!1},{model:`llama3.2:3b`,provider:`ollama`,label:`Ollama`,local:!0,installed:!0,needs_key:!1,is_default:!1},{model:`claude-sonnet-4-20250514`,provider:`anthropic`,label:`Anthropic`,local:!1,installed:!1,needs_key:!0,is_default:!1}],detection:{detected:[{provider:`claude-code`,label:`Claude Code`,model:`sonnet`,detail:`signed in on this Mac · uses your Claude subscription`,subscription:!0},{provider:`ollama`,label:`Ollama`,model:`llama3.2:3b`,detail:`running locally · content stays on this machine`,subscription:!1}],configured:!1}})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Real component with pre-loaded providers (no Wails API calls).`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <CredentialsPage providers={[]} providerTypes={[...PROVIDER_TYPES]} />
}`,...k.parameters?.docs?.source},description:{story:`Real component with empty providers list.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Settings → AI Models with the "Detected" section: Claude Code (uses your
Claude subscription) and a running Ollama, one Select click each — plus the
keyless Claude Code provider group with no key management.`,...A.parameters?.docs?.description}}},j=[`Default`,`WithProviders`,`Empty`,`DetectedProviders`]}))();export{D as Default,A as DetectedProviders,k as Empty,O as WithProviders,j as __namedExportsOrder,E as default};