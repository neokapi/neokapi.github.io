import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Ii as c,In as l,Ji as u,Pt as d,Q as f,W as ee,bt as p,c as m,fr as h,ft as g,o as te,t as _,vt as v}from"./lucide-react-DUha5BWN.js";import{t as y}from"./button-D6zYGAvL.js";import{t as b}from"./card-CHo_fh0q.js";import{t as x}from"./badge-B925V-__.js";import{t as S}from"./LocalePill-OXrwW_kv.js";import{G as C,i as w,n as T,ot as E,r as ne}from"./iframe-BJhmhgOC.js";import{r as D,t as O}from"./useApi-B2v91Qni.js";import{n as re,t as k}from"./ActiveFilterContext-BY8G1YjD.js";import{n as A,r as ie,t as ae}from"./api-LEFL5VCf.js";import{n as oe,t as j}from"./useWailsEvent-tO44X_hi.js";import{n as se,t as M}from"./JobFeedContext-DNkOk5N8.js";function N(e,t){let n=t?.languages??[];return n.length?e.filter(e=>n.includes(e)):e}var P=t((()=>{}));function F({project:e,displayName:t,tabID:n,onRunFlow:r,onNavigate:a,pluginsResolved:_,pluginIssues:w,status:T,onResetSample:D,sampleInfo:k}){let{hasActive:A,activeJob:j}=se(),{active:M}=re(),{showError:P}=ne(),[F,R]=(0,I.useState)({}),[z,B]=(0,I.useState)(T??null),[V,H]=(0,I.useState)(!1),[U,W]=(0,I.useState)(null),[G,K]=(0,I.useState)(k??null),[ce,le]=(0,I.useState)(!1);(0,I.useEffect)(()=>{!n||k||O.getSampleInfo(n).then(e=>{e&&K(e)}).catch(()=>{})},[n,k]);let ue=(0,I.useCallback)(()=>{le(!0),n&&O.acknowledgeSampleRevision(n)},[n]),de=(0,I.useCallback)(e=>{W(e),O.installPlugin(e)},[]),q=(0,I.useCallback)(()=>{!n||T||O.getProjectStatus(n).then(e=>{e&&B(e)}).catch(()=>{})},[n,T]);(0,I.useEffect)(()=>{q()},[q,e.content]),oe(`project:extracted`,()=>q());let J=(0,I.useCallback)(async()=>{if(n){H(!0);try{await O.runExtract(n),q()}catch(e){P(`Extraction failed`,e)}finally{H(!1)}}},[n,q,P]);(0,I.useEffect)(()=>{n&&O.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;R(t)})},[n,e.flows]);let Y=e.defaults??{},X=e.plugins??{},Z=Object.keys(e.flows??{}),Q=(e.content?.length??0)>0,fe=e.content?.length??0,pe=e.content?.reduce((e,t)=>e+(ie(t)?1:ae(t).length),0)??0,$=(z?.collections??[]).filter(e=>!M?.collections?.length||M.collections.includes(e.name)),me=t=>{let n=e.flows?.[t];!n||!r||r(t,n)};return(0,L.jsxs)(`div`,{className:`p-6`,children:[(0,L.jsxs)(`div`,{className:`mb-6`,children:[(0,L.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,L.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,L.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,L.jsx)(l,{size:14}),Y.source_language?(0,L.jsx)(S,{locale:String(Y.source_language)}):(0,L.jsx)(`span`,{children:o(`No source`)}),(0,L.jsx)(`span`,{children:`→`}),Y.target_languages?.length?Y.target_languages.map(e=>(0,L.jsx)(S,{locale:String(e)},String(e))):(0,L.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,L.jsx)(l,{size:14}),"=m2":Y.source_language?(0,L.jsx)(S,{locale:String(Y.source_language)}):(0,L.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,L.jsx)(`span`,{children:`→`}),"=m4":Y.target_languages?.length?Y.target_languages.map(e=>(0,L.jsx)(S,{locale:String(e)},String(e))):(0,L.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,L.jsx)(x,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(X).length>0&&Object.entries(X).map(([e,t])=>(0,L.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,L.jsx)(v,{size:10}),(0,L.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,L.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),_===!1&&w&&w.length>0&&(0,L.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,L.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,L.jsx)(c,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,L.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,L.jsx)(`ul`,{className:`mt-2 space-y-1`,children:w.map(e=>(0,L.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,L.jsx)(x,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,L.jsxs)(y,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>de(e.plugin),disabled:U===e.plugin,children:[U===e.plugin?(0,L.jsx)(u,{size:11,className:`animate-spin`}):(0,L.jsx)(v,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,L.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,L.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>a(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,L.jsx)(f,{size:12})})}),(0,L.jsx)(y,{size:`sm`,variant:`outline`,onClick:()=>a(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,L.jsx)(v,{size:12})})})]})]})]})}),G?.upgrade_available&&!ce&&(0,L.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,L.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,L.jsx)(g,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,L.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,L.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,L.jsxs)(y,{size:`sm`,onClick:()=>D?.(),children:[(0,L.jsx)(g,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,L.jsx)(y,{size:`sm`,variant:`outline`,onClick:ue,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),(0,L.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5`,children:[(0,L.jsx)(E,{icon:(0,L.jsx)(ee,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>a(`checks`)}),(0,L.jsx)(E,{icon:(0,L.jsx)(h,{size:16}),title:s(`1TtjjF`,`Content`),description:Q?s(`G5HFe`,`{contentCount} collection(s), {itemCount} pattern(s)`,{contentCount:fe,itemCount:pe}):s(`1d1kXs`,`Configure file patterns`),onClick:()=>a(`content`)}),(0,L.jsx)(E,{icon:(0,L.jsx)(m,{size:16}),title:s(`25KjwG`,`Flows`),description:Z.length>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:Z.length}):s(`3ahfLk`,`Build your first flow`),onClick:()=>a(`flows`)}),(0,L.jsx)(E,{icon:(0,L.jsx)(te,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>a(`tools`)}),(0,L.jsx)(E,{icon:(0,L.jsx)(f,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>a(`project-settings`)})]}),Q&&(0,L.jsxs)(`section`,{className:`mb-8`,children:[(0,L.jsxs)(`h2`,{className:`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,L.jsx)(h,{size:14}),`Content Overview`,(0,L.jsxs)(y,{variant:`ghost`,size:`sm`,className:`ml-auto h-7 normal-case`,onClick:()=>void J(),disabled:V||A,"aria-label":z?.hasData?s(`bP7pR`,`Re-extract content`):s(`46b1IE`,`Run extract`),children:[V?(0,L.jsx)(u,{size:12,className:`animate-spin`}):(0,L.jsx)(g,{size:12}),z?.hasData?`Re-extract`:`Extract`]})]}),z&&!z.hasData?(0,L.jsx)(C,{icon:(0,L.jsx)(d,{size:24,className:`text-muted-foreground/50`}),title:s(`TnvNd`,`Nothing extracted yet.`),description:s(`34N0we`,`Run extract to read your content files and analyze their structure.`),action:(0,L.jsx)(y,{size:`sm`,onClick:()=>void J(),disabled:V,children:V?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(u,{size:12,className:`animate-spin`}),`Extracting...`]}):`Run extract`})}):z&&$.length>0?(0,L.jsx)(`div`,{className:`space-y-2`,children:$.map(e=>(0,L.jsxs)(b,{className:`p-3`,children:[(0,L.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium`,children:e.name}),(0,L.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:s(`2GVZoA`,`{count} block(s)`,{count:e.blockCount})})]}),N(e.targetLanguages,M).length>0&&(0,L.jsx)(`div`,{className:`mt-2 space-y-1.5`,children:N(e.targetLanguages,M).map(t=>{let n=e.coverage?.[t]??0,r=e.blockCount>0?Math.round(n/e.blockCount*100):0;return(0,L.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,L.jsx)(`span`,{className:`w-16 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:t}),(0,L.jsx)(`div`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,L.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all`,style:{width:`${r}%`}})}),(0,L.jsx)(`span`,{className:`w-24 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:s(`4zyNRL`,`${n} / ${e.blockCount} (${r}%)`,{translated:n,"c.blockCount":e.blockCount,pct:r})})]},t)})})]},e.name))}):null]}),Z.length>0&&(0,L.jsxs)(`section`,{children:[(0,L.jsx)(`h2`,{className:`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:i(`3YFIay`,`{=m0} Run Flows`,{"=m0":(0,L.jsx)(m,{size:14})})}),(0,L.jsx)(`div`,{className:`space-y-2`,children:Z.map(t=>{let n=e.flows?.[t];if(!n)return null;let r=F[t],a=r?.valid!==!1,o=r?.issues??[],l=a&&Q&&!A,d=a?Q?void 0:`Configure content patterns first`:`Cannot run: ${o.map(e=>e.message).join(`; `)}`;return(0,L.jsxs)(b,{className:`flex flex-row items-center gap-3 p-3 ${a?``:`border-amber-500/30 bg-amber-500/5`}`,children:[(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium`,children:t}),!a&&(0,L.jsx)(c,{size:12,className:`text-amber-500`})]}),(0,L.jsx)(`div`,{className:`mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground`,children:n.steps.map((e,t)=>{let n=o.some(t=>t.tool===e.tool);return(0,L.jsxs)(`span`,{className:`flex items-center gap-1`,children:[t>0&&(0,L.jsx)(`span`,{children:s(`3C1wnn`,`→`)}),(0,L.jsx)(x,{variant:n?`destructive`:`secondary`,className:n?`line-through opacity-70`:``,children:e.tool})]},t)})}),o.length>0&&(0,L.jsx)(`div`,{className:`mt-1 text-[10px] text-amber-600 dark:text-amber-400`,children:o.map((e,t)=>(0,L.jsx)(`div`,{children:e.message},t))})]}),(0,L.jsx)(y,{size:`sm`,onClick:()=>me(t),disabled:!l,"aria-label":s(`2FvK9S`,`Run flow {name}`,{name:t}),title:d,children:i(`14DbVS`,`{=m0} Run`,{"=m0":j?.flowName===t?(0,L.jsx)(u,{size:12,className:`animate-spin`}):(0,L.jsx)(p,{size:12})})})]},t)})})]}),Z.length===0&&(0,L.jsx)(C,{icon:(0,L.jsx)(m,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,L.jsx)(y,{variant:`link`,size:`sm`,onClick:()=>a(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var I,L,R=t((()=>{a(),I=e(n(),1),_(),w(),A(),D(),M(),k(),P(),j(),T(),L=r(),F.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(flowName: string, flow: FlowSpec) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook — skips api.getProjectStatus().`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`}}}})),z,B,V,H,U,W,G,K;t((()=>{R(),{fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Pages/HomePage`,component:F,tags:[`autodocs`],args:{onRunFlow:z(),onNavigate:z(),onResetSample:z()}},V={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`},{path:`docs/en/**/*.md`,format:{name:`markdown`}}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},H={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},U={args:{...V.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`ui-strings`,blockCount:240,coverage:{"fr-FR":240,"de-DE":180,"ja-JP":96},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`docs`,blockCount:88,coverage:{"fr-FR":40,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},W={args:{...V.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},G={args:{...V.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: "Acme App Localization",
    project: {
      version: "v1",
      name: "Acme App Localization",
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR", "de-DE", "ja-JP"]
      },
      plugins: {
        okapi: {
          framework_version: "^1.47.0",
          format_priority: 200
        }
      },
      preset: "nextjs",
      content: [{
        path: "src/i18n/en/*.json",
        format: {
          name: "json"
        },
        target: "src/i18n/{lang}/*.json"
      }, {
        path: "docs/en/**/*.md",
        format: {
          name: "markdown"
        }
      }],
      flows: {
        translate: {
          steps: [{
            tool: "translate",
            config: {
              provider: "anthropic"
            }
          }]
        },
        "translate-and-qa": {
          steps: [{
            tool: "translate",
            config: {
              provider: "anthropic"
            }
          }, {
            tool: "qa"
          }]
        }
      }
    }
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: "Starter Project",
    project: {
      version: "v1",
      name: "Starter Project",
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR"]
      },
      content: [{
        path: "src/locales/en.json",
        format: {
          name: "json"
        }
      }]
    }
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: {
      projectPath: "/Users/dev/projects/acme/acme.kapi",
      projectName: "Acme App Localization",
      hasData: true,
      collections: [{
        name: "ui-strings",
        blockCount: 240,
        coverage: {
          "fr-FR": 240,
          "de-DE": 180,
          "ja-JP": 96
        },
        targetLanguages: ["fr-FR", "de-DE", "ja-JP"]
      }, {
        name: "docs",
        blockCount: 88,
        coverage: {
          "fr-FR": 40,
          "de-DE": 0,
          "ja-JP": 0
        },
        targetLanguages: ["fr-FR", "de-DE", "ja-JP"]
      }]
    }
  }
}`,...U.parameters?.docs?.source},description:{story:`Per-collection, per-locale coverage from a completed extraction.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: {
      projectPath: "/Users/dev/projects/acme/acme.kapi",
      projectName: "Acme App Localization",
      hasData: false,
      collections: []
    }
  }
}`,...W.parameters?.docs?.source},description:{story:`Project configured but never extracted — prompt to run extract.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    displayName: "KapiMart",
    sampleInfo: {
      is_sample: true,
      name: "kapimart",
      display_name: "KapiMart",
      on_disk_revision: 1,
      current_revision: 2,
      upgrade_available: true
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...G.parameters?.docs?.description}}},K=[`Default`,`NoFlows`,`WithCoverage`,`NeverExtracted`,`SampleUpgradeAvailable`]}))();export{V as Default,W as NeverExtracted,H as NoFlows,G as SampleUpgradeAvailable,U as WithCoverage,K as __namedExportsOrder,B as default};