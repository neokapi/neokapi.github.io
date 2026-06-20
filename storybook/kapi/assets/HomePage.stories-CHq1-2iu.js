import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Ai as c,Bi as l,Mt as u,Pn as d,Q as f,bt as p,c as m,cr as h,ft as g,o as _,t as v,vt as y}from"./lucide-react-O4D7m_HM.js";import{t as b}from"./button-D6zYGAvL.js";import{t as x}from"./card-CHo_fh0q.js";import{t as S}from"./badge-B925V-__.js";import{t as C}from"./LocalePill-OXrwW_kv.js";import{G as w,i as T,n as E,ot as D,r as O}from"./iframe-cAjmkS5E.js";import{r as k,t as A}from"./useApi-f6meXcDK.js";import{n as j,r as M,t as ee}from"./api-LEFL5VCf.js";import{n as te,t as N}from"./useWailsEvent-tO44X_hi.js";import{n as ne,t as P}from"./JobFeedContext-BeEvAH1C.js";function F({project:e,displayName:t,tabID:n,onRunFlow:r,onNavigate:a,pluginsResolved:v,pluginIssues:T,status:E,onResetSample:k,sampleInfo:j}){let{hasActive:N,activeJob:P}=ne(),{showError:F}=O(),[R,z]=(0,I.useState)({}),[B,V]=(0,I.useState)(E??null),[H,U]=(0,I.useState)(!1),[W,G]=(0,I.useState)(null),[K,q]=(0,I.useState)(j??null),[re,ie]=(0,I.useState)(!1);(0,I.useEffect)(()=>{!n||j||A.getSampleInfo(n).then(e=>{e&&q(e)}).catch(()=>{})},[n,j]);let ae=(0,I.useCallback)(()=>{ie(!0),n&&A.acknowledgeSampleRevision(n)},[n]),oe=(0,I.useCallback)(e=>{G(e),A.installPlugin(e)},[]),J=(0,I.useCallback)(()=>{!n||E||A.getProjectStatus(n).then(e=>{e&&V(e)}).catch(()=>{})},[n,E]);(0,I.useEffect)(()=>{J()},[J,e.content]),te(`project:extracted`,()=>J());let Y=(0,I.useCallback)(async()=>{if(n){U(!0);try{await A.runExtract(n),J()}catch(e){F(`Extraction failed`,e)}finally{U(!1)}}},[n,J,F]);(0,I.useEffect)(()=>{n&&A.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;z(t)})},[n,e.flows]);let X=e.defaults??{},Z=e.plugins??{},Q=Object.keys(e.flows??{}),$=(e.content?.length??0)>0,se=e.content?.length??0,ce=e.content?.reduce((e,t)=>e+(M(t)?1:ee(t).length),0)??0,le=t=>{let n=e.flows?.[t];!n||!r||r(t,n)};return(0,L.jsxs)(`div`,{className:`p-6`,children:[(0,L.jsxs)(`div`,{className:`mb-6`,children:[(0,L.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,L.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,L.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,L.jsx)(d,{size:14}),X.source_language?(0,L.jsx)(C,{locale:String(X.source_language)}):(0,L.jsx)(`span`,{children:o(`No source`)}),(0,L.jsx)(`span`,{children:`→`}),X.target_languages?.length?X.target_languages.map(e=>(0,L.jsx)(C,{locale:String(e)},String(e))):(0,L.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,L.jsx)(d,{size:14}),"=m2":X.source_language?(0,L.jsx)(C,{locale:String(X.source_language)}):(0,L.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,L.jsx)(`span`,{children:`→`}),"=m4":X.target_languages?.length?X.target_languages.map(e=>(0,L.jsx)(C,{locale:String(e)},String(e))):(0,L.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,L.jsx)(S,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(Z).length>0&&Object.entries(Z).map(([e,t])=>(0,L.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,L.jsx)(y,{size:10}),(0,L.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,L.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),v===!1&&T&&T.length>0&&(0,L.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,L.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,L.jsx)(c,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,L.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,L.jsx)(`ul`,{className:`mt-2 space-y-1`,children:T.map(e=>(0,L.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,L.jsx)(S,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,L.jsxs)(b,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>oe(e.plugin),disabled:W===e.plugin,children:[W===e.plugin?(0,L.jsx)(l,{size:11,className:`animate-spin`}):(0,L.jsx)(y,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,L.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,L.jsx)(b,{size:`sm`,variant:`outline`,onClick:()=>a(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,L.jsx)(f,{size:12})})}),(0,L.jsx)(b,{size:`sm`,variant:`outline`,onClick:()=>a(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,L.jsx)(y,{size:12})})})]})]})]})}),K?.upgrade_available&&!re&&(0,L.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,L.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,L.jsx)(g,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,L.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,L.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,L.jsxs)(b,{size:`sm`,onClick:()=>k?.(),children:[(0,L.jsx)(g,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,L.jsx)(b,{size:`sm`,variant:`outline`,onClick:ae,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),(0,L.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,L.jsx)(D,{icon:(0,L.jsx)(h,{size:16}),title:s(`1TtjjF`,`Content`),description:$?s(`G5HFe`,`{contentCount} collection(s), {itemCount} pattern(s)`,{contentCount:se,itemCount:ce}):s(`1d1kXs`,`Configure file patterns`),onClick:()=>a(`content`)}),(0,L.jsx)(D,{icon:(0,L.jsx)(m,{size:16}),title:s(`25KjwG`,`Flows`),description:Q.length>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:Q.length}):s(`3ahfLk`,`Build your first flow`),onClick:()=>a(`flows`)}),(0,L.jsx)(D,{icon:(0,L.jsx)(_,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>a(`tools`)}),(0,L.jsx)(D,{icon:(0,L.jsx)(f,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>a(`project-settings`)})]}),$&&(0,L.jsxs)(`section`,{className:`mb-8`,children:[(0,L.jsxs)(`h2`,{className:`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,L.jsx)(h,{size:14}),`Content Status`,(0,L.jsxs)(b,{variant:`ghost`,size:`sm`,className:`ml-auto h-7 normal-case`,onClick:()=>void Y(),disabled:H||N,"aria-label":B?.hasData?s(`bP7pR`,`Re-extract content`):s(`46b1IE`,`Run extract`),children:[H?(0,L.jsx)(l,{size:12,className:`animate-spin`}):(0,L.jsx)(g,{size:12}),B?.hasData?`Re-extract`:`Extract`]})]}),B&&!B.hasData?(0,L.jsx)(w,{icon:(0,L.jsx)(u,{size:24,className:`text-muted-foreground/50`}),title:s(`TnvNd`,`Nothing extracted yet.`),description:s(`2jQH6M`,`Run extract to read your content files and see translation coverage.`),action:(0,L.jsx)(b,{size:`sm`,onClick:()=>void Y(),disabled:H,children:H?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(l,{size:12,className:`animate-spin`}),`Extracting...`]}):`Run extract`})}):B&&B.collections.length>0?(0,L.jsx)(`div`,{className:`space-y-2`,children:B.collections.map(e=>(0,L.jsxs)(x,{className:`p-3`,children:[(0,L.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium`,children:e.name}),(0,L.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:s(`2GVZoA`,`{count} block(s)`,{count:e.blockCount})})]}),e.targetLanguages.length>0&&(0,L.jsx)(`div`,{className:`mt-2 space-y-1.5`,children:e.targetLanguages.map(t=>{let n=e.coverage?.[t]??0,r=e.blockCount>0?Math.round(n/e.blockCount*100):0;return(0,L.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,L.jsx)(`span`,{className:`w-16 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:t}),(0,L.jsx)(`div`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,L.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all`,style:{width:`${r}%`}})}),(0,L.jsx)(`span`,{className:`w-24 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:s(`4zyNRL`,`${n} / ${e.blockCount} (${r}%)`,{translated:n,"c.blockCount":e.blockCount,pct:r})})]},t)})})]},e.name))}):null]}),Q.length>0&&(0,L.jsxs)(`section`,{children:[(0,L.jsx)(`h2`,{className:`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:i(`3YFIay`,`{=m0} Run Flows`,{"=m0":(0,L.jsx)(m,{size:14})})}),(0,L.jsx)(`div`,{className:`space-y-2`,children:Q.map(t=>{let n=e.flows?.[t];if(!n)return null;let r=R[t],a=r?.valid!==!1,o=r?.issues??[],u=a&&$&&!N,d=a?$?void 0:`Configure content patterns first`:`Cannot run: ${o.map(e=>e.message).join(`; `)}`;return(0,L.jsxs)(x,{className:`flex flex-row items-center gap-3 p-3 ${a?``:`border-amber-500/30 bg-amber-500/5`}`,children:[(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium`,children:t}),!a&&(0,L.jsx)(c,{size:12,className:`text-amber-500`})]}),(0,L.jsx)(`div`,{className:`mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground`,children:n.steps.map((e,t)=>{let n=o.some(t=>t.tool===e.tool);return(0,L.jsxs)(`span`,{className:`flex items-center gap-1`,children:[t>0&&(0,L.jsx)(`span`,{children:s(`3C1wnn`,`→`)}),(0,L.jsx)(S,{variant:n?`destructive`:`secondary`,className:n?`line-through opacity-70`:``,children:e.tool})]},t)})}),o.length>0&&(0,L.jsx)(`div`,{className:`mt-1 text-[10px] text-amber-600 dark:text-amber-400`,children:o.map((e,t)=>(0,L.jsx)(`div`,{children:e.message},t))})]}),(0,L.jsx)(b,{size:`sm`,onClick:()=>le(t),disabled:!u,"aria-label":s(`2FvK9S`,`Run flow {name}`,{name:t}),title:d,children:i(`14DbVS`,`{=m0} Run`,{"=m0":P?.flowName===t?(0,L.jsx)(l,{size:12,className:`animate-spin`}):(0,L.jsx)(p,{size:12})})})]},t)})})]}),Q.length===0&&(0,L.jsx)(w,{icon:(0,L.jsx)(m,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,L.jsx)(b,{variant:`link`,size:`sm`,onClick:()=>a(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var I,L,R=t((()=>{a(),I=e(n(),1),v(),T(),j(),k(),P(),N(),E(),L=r(),F.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(flowName: string, flow: FlowSpec) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook — skips api.getProjectStatus().`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`}}}})),z,B,V,H,U,W,G,K;t((()=>{R(),{fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Pages/HomePage`,component:F,tags:[`autodocs`],args:{onRunFlow:z(),onNavigate:z(),onResetSample:z()}},V={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`},{path:`docs/en/**/*.md`,format:{name:`markdown`}}],flows:{translate:{steps:[{tool:`ai-translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`ai-translate`,config:{provider:`anthropic`}},{tool:`qa-check`}]}}}}},H={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},U={args:{...V.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`ui-strings`,blockCount:240,coverage:{"fr-FR":240,"de-DE":180,"ja-JP":96},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`docs`,blockCount:88,coverage:{"fr-FR":40,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},W={args:{...V.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},G={args:{...V.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
            tool: "ai-translate",
            config: {
              provider: "anthropic"
            }
          }]
        },
        "translate-and-qa": {
          steps: [{
            tool: "ai-translate",
            config: {
              provider: "anthropic"
            }
          }, {
            tool: "qa-check"
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