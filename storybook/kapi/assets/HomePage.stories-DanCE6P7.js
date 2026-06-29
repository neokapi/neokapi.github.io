import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Hi as l,It as u,K as ee,St as te,bt as d,c as f,ea as p,et as m,gr as h,mi as ne,mt as g,o as re,t as _,vi as ie}from"./lucide-react-Cx_fEK42.js";import{t as v}from"./button-D6zYGAvL.js";import{t as y}from"./card-CHo_fh0q.js";import{t as b}from"./badge-B925V-__.js";import{t as x}from"./LocalePill-OXrwW_kv.js";import{G as ae,Rn as oe,_n as se,an as ce,hn as le,i as S,n as C,nn as w,ot as T,r as ue}from"./iframe-BjWGBkN3.js";import{r as E,t as D}from"./useApi-Dl-VH7Qg.js";import{n as de,t as O}from"./ActiveFilterContext-DAvHLy8T.js";import{n as k,r as fe,t as pe}from"./api-LEFL5VCf.js";import{n as me,t as A}from"./useWailsEvent-tO44X_hi.js";import{n as j,t as M}from"./filter-BQ0GIjVn.js";import{n as he,t as N}from"./JobFeedContext-CdLKGu1o.js";function P({label:e,translated:t,total:n,pct:r}){return(0,L.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,L.jsx)(`span`,{className:`w-16 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),(0,L.jsx)(`div`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,L.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-all`,style:{width:`${r}%`}})}),(0,L.jsx)(`span`,{className:`w-24 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:s(`5CmPL`,`${t} / ${n} (${r}%)`,{translated:t,total:n,pct:r})})]})}function F({project:e,displayName:t,tabID:n,onRunFlow:r,onNavigate:a,pluginsResolved:_,pluginIssues:S,status:C,onResetSample:w,sampleInfo:E}){let{hasActive:O,activeJob:k}=he(),{active:A}=de(),{showError:j}=ue(),[N,F]=(0,I.useState)({}),[z,B]=(0,I.useState)(C??null),[V,H]=(0,I.useState)(!1),[U,W]=(0,I.useState)(null),[G,K]=(0,I.useState)(E??null),[q,ge]=(0,I.useState)(!1),[_e,ve]=(0,I.useState)(new Set);(0,I.useEffect)(()=>{!n||E||D.getSampleInfo(n).then(e=>{e&&K(e)}).catch(()=>{})},[n,E]);let ye=(0,I.useCallback)(()=>{ge(!0),n&&D.acknowledgeSampleRevision(n)},[n]),be=(0,I.useCallback)(e=>{W(e),D.installPlugin(e)},[]),J=(0,I.useCallback)(()=>{!n||C||D.getProjectStatus(n).then(e=>{e&&B(e)}).catch(()=>{})},[n,C]);(0,I.useEffect)(()=>{J()},[J,e.content]),me(`project:extracted`,()=>J());let xe=(0,I.useCallback)(async()=>{if(n){H(!0);try{await D.runExtract(n),J()}catch(e){j(`Extraction failed`,e)}finally{H(!1)}}},[n,J,j]);(0,I.useEffect)(()=>{n&&D.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;F(t)})},[n,e.flows]);let Y=e.defaults??{},Se=e.plugins??{},X=Object.keys(e.flows??{}),Z=(e.content?.length??0)>0,Ce=e.content?.length??0,we=e.content?.reduce((e,t)=>e+(fe(t)?1:pe(t).length),0)??0,Q=(z?.collections??[]).filter(e=>!A?.collections?.length||A.collections.includes(e.name)),Te=Q.reduce((e,t)=>e+t.blockCount,0),$=Q.map((e,t)=>({name:e.name,value:e.blockCount,fill:R[t%R.length]})).filter(e=>e.value>0),Ee=Array.from(new Set(Q.flatMap(e=>M(e.targetLanguages,A)))).map(e=>{let t=0,n=0;for(let r of Q)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,translated:t,total:n,pct:n>0?Math.round(t/n*100):0}}),De=e=>ve(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),Oe=(e,t)=>t.length===0||e.blockCount===0?0:Math.round(t.reduce((t,n)=>t+(e.coverage?.[n]??0)/e.blockCount,0)/t.length*100),ke=t=>{let n=e.flows?.[t];!n||!r||r(t,n)};return(0,L.jsxs)(`div`,{className:`p-6`,children:[(0,L.jsxs)(`div`,{className:`mb-6`,children:[(0,L.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,L.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,L.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,L.jsx)(c,{size:14}),Y.source_language?(0,L.jsx)(x,{locale:String(Y.source_language)}):(0,L.jsx)(`span`,{children:o(`No source`)}),(0,L.jsx)(`span`,{children:`→`}),Y.target_languages?.length?Y.target_languages.map(e=>(0,L.jsx)(x,{locale:String(e)},String(e))):(0,L.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,L.jsx)(c,{size:14}),"=m2":Y.source_language?(0,L.jsx)(x,{locale:String(Y.source_language)}):(0,L.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,L.jsx)(`span`,{children:`→`}),"=m4":Y.target_languages?.length?Y.target_languages.map(e=>(0,L.jsx)(x,{locale:String(e)},String(e))):(0,L.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,L.jsx)(b,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(Se).length>0&&Object.entries(Se).map(([e,t])=>(0,L.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,L.jsx)(d,{size:10}),(0,L.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,L.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),_===!1&&S&&S.length>0&&(0,L.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,L.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,L.jsx)(l,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,L.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,L.jsx)(`ul`,{className:`mt-2 space-y-1`,children:S.map(e=>(0,L.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,L.jsx)(b,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,L.jsxs)(v,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>be(e.plugin),disabled:U===e.plugin,children:[U===e.plugin?(0,L.jsx)(p,{size:11,className:`animate-spin`}):(0,L.jsx)(d,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,L.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,L.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,L.jsx)(v,{size:`sm`,variant:`outline`,onClick:()=>a(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,L.jsx)(m,{size:12})})}),(0,L.jsx)(v,{size:`sm`,variant:`outline`,onClick:()=>a(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,L.jsx)(d,{size:12})})})]})]})]})}),G?.upgrade_available&&!q&&(0,L.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,L.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,L.jsx)(g,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,L.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,L.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,L.jsxs)(v,{size:`sm`,onClick:()=>w?.(),children:[(0,L.jsx)(g,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,L.jsx)(v,{size:`sm`,variant:`outline`,onClick:ye,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),(0,L.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5`,children:[(0,L.jsx)(T,{icon:(0,L.jsx)(ee,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>a(`checks`)}),(0,L.jsx)(T,{icon:(0,L.jsx)(h,{size:16}),title:s(`1TtjjF`,`Content`),description:Z?s(`G5HFe`,`{contentCount} collection(s), {itemCount} pattern(s)`,{contentCount:Ce,itemCount:we}):s(`1d1kXs`,`Configure file patterns`),onClick:()=>a(`content`)}),(0,L.jsx)(T,{icon:(0,L.jsx)(f,{size:16}),title:s(`25KjwG`,`Flows`),description:X.length>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:X.length}):s(`3ahfLk`,`Build your first flow`),onClick:()=>a(`flows`)}),(0,L.jsx)(T,{icon:(0,L.jsx)(re,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>a(`tools`)}),(0,L.jsx)(T,{icon:(0,L.jsx)(m,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>a(`project-settings`)})]}),Z&&(0,L.jsxs)(`section`,{className:`mb-8`,children:[(0,L.jsxs)(`h2`,{className:`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,L.jsx)(h,{size:14}),`Content Overview`,(0,L.jsxs)(v,{variant:`ghost`,size:`sm`,className:`ml-auto h-7 normal-case`,onClick:()=>void xe(),disabled:V||O,"aria-label":z?.hasData?s(`bP7pR`,`Re-extract content`):s(`46b1IE`,`Run extract`),children:[V?(0,L.jsx)(p,{size:12,className:`animate-spin`}):(0,L.jsx)(g,{size:12}),z?.hasData?`Re-extract`:`Extract`]})]}),z&&!z.hasData?(0,L.jsx)(ae,{icon:(0,L.jsx)(u,{size:24,className:`text-muted-foreground/50`}),title:s(`TnvNd`,`Nothing extracted yet.`),description:s(`34N0we`,`Run extract to read your content files and analyze their structure.`),action:(0,L.jsx)(v,{size:`sm`,onClick:()=>void xe(),disabled:V,children:V?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(p,{size:12,className:`animate-spin`}),`Extracting...`]}):`Run extract`})}):z&&Q.length>0?(0,L.jsxs)(`div`,{className:`space-y-3`,children:[(0,L.jsx)(y,{className:`p-4`,children:(0,L.jsxs)(`div`,{className:`grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,L.jsxs)(`div`,{className:`flex items-center gap-3`,children:[$.length>0?(0,L.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,L.jsx)(oe,{width:`100%`,height:`100%`,children:(0,L.jsx)(ce,{children:(0,L.jsx)(le,{data:$,dataKey:`value`,nameKey:`name`,innerRadius:`58%`,outerRadius:`100%`,paddingAngle:$.length>1?2:0,strokeWidth:0,children:$.map(e=>(0,L.jsx)(se,{fill:e.fill},e.name))})})})}):(0,L.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:s(`750BK`,`No blocks`)}),(0,L.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,L.jsx)(`li`,{className:`font-medium text-foreground`,children:s(`2GVZoA`,`{count} block(s)`,{count:Te})}),Q.map((e,t)=>(0,L.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,L.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:R[t%R.length]}}),(0,L.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,L.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.blockCount})]},e.name))]})]}),Ee.length>0&&(0,L.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,L.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`jP6Vy`,`Coverage across collections`)}),Ee.map(e=>(0,L.jsx)(P,{label:e.lang,translated:e.translated,total:e.total,pct:e.pct},e.lang))]})]})}),(0,L.jsx)(`div`,{className:`space-y-1.5`,children:Q.map(e=>{let t=M(e.targetLanguages,A),n=_e.has(e.name),r=Oe(e,t);return(0,L.jsxs)(y,{className:`overflow-hidden p-0`,children:[(0,L.jsxs)(`button`,{type:`button`,onClick:()=>t.length>0&&De(e.name),className:`flex w-full items-center gap-3 px-3 py-2 text-left ${t.length>0?`hover:bg-accent/30`:`cursor-default`}`,"aria-expanded":n,children:[t.length>0?n?(0,L.jsx)(ie,{size:13,className:`shrink-0 text-muted-foreground`}):(0,L.jsx)(ne,{size:13,className:`shrink-0 text-muted-foreground`}):(0,L.jsx)(`span`,{className:`w-[13px] shrink-0`}),(0,L.jsx)(`span`,{className:`flex-1 truncate text-sm font-medium`,children:e.name}),(0,L.jsx)(`span`,{className:`shrink-0 text-xs text-muted-foreground`,children:s(`2GVZoA`,`{count} block(s)`,{count:e.blockCount})}),t.length>0&&(0,L.jsx)(`span`,{className:`flex w-32 shrink-0 items-center gap-2`,children:i(`1zwyZh`,`{=m0} {=m1} {/=m0} {=m2} {avg}% {/=m2}`,{"=m0":(0,L.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,L.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${r}%`}})}),"=m1":(0,L.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${r}%`}}),"=m2":(0,L.jsxs)(`span`,{className:`w-8 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[r,`%`]})},{avg:r})})]}),n&&t.length>0&&(0,L.jsx)(`div`,{className:`space-y-1.5 border-t border-border px-3 py-2`,children:t.map(t=>{let n=e.coverage?.[t]??0,r=e.blockCount>0?Math.round(n/e.blockCount*100):0;return(0,L.jsx)(P,{label:t,translated:n,total:e.blockCount,pct:r},t)})})]},e.name)})})]}):null]}),X.length>0&&(0,L.jsxs)(`section`,{children:[(0,L.jsx)(`h2`,{className:`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:i(`3YFIay`,`{=m0} Run Flows`,{"=m0":(0,L.jsx)(f,{size:14})})}),(0,L.jsx)(`div`,{className:`space-y-2`,children:X.map(t=>{let n=e.flows?.[t];if(!n)return null;let r=N[t],a=r?.valid!==!1,o=r?.issues??[],c=a&&Z&&!O,u=a?Z?void 0:`Configure content patterns first`:`Cannot run: ${o.map(e=>e.message).join(`; `)}`;return(0,L.jsxs)(y,{className:`flex flex-row items-center gap-3 p-3 ${a?``:`border-amber-500/30 bg-amber-500/5`}`,children:[(0,L.jsxs)(`div`,{className:`flex-1`,children:[(0,L.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,L.jsx)(`span`,{className:`text-sm font-medium`,children:t}),!a&&(0,L.jsx)(l,{size:12,className:`text-amber-500`})]}),(0,L.jsx)(`div`,{className:`mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground`,children:n.steps.map((e,t)=>{let n=o.some(t=>t.tool===e.tool);return(0,L.jsxs)(`span`,{className:`flex items-center gap-1`,children:[t>0&&(0,L.jsx)(`span`,{children:s(`3C1wnn`,`→`)}),(0,L.jsx)(b,{variant:n?`destructive`:`secondary`,className:n?`line-through opacity-70`:``,children:e.tool})]},t)})}),o.length>0&&(0,L.jsx)(`div`,{className:`mt-1 text-[10px] text-amber-600 dark:text-amber-400`,children:o.map((e,t)=>(0,L.jsx)(`div`,{children:e.message},t))})]}),(0,L.jsx)(v,{size:`sm`,onClick:()=>ke(t),disabled:!c,"aria-label":s(`2FvK9S`,`Run flow {name}`,{name:t}),title:u,children:i(`14DbVS`,`{=m0} Run`,{"=m0":k?.flowName===t?(0,L.jsx)(p,{size:12,className:`animate-spin`}):(0,L.jsx)(te,{size:12})})})]},t)})})]}),X.length===0&&(0,L.jsx)(ae,{icon:(0,L.jsx)(f,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,L.jsx)(v,{variant:`link`,size:`sm`,onClick:()=>a(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var I,L,R,z=t((()=>{a(),I=e(n(),1),_(),S(),w(),k(),E(),N(),O(),j(),A(),C(),L=r(),R=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],F.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(flowName: string, flow: FlowSpec) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook — skips api.getProjectStatus().`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`}}}})),B,V,H,U,W,G,K,q;t((()=>{z(),{fn:B}=__STORYBOOK_MODULE_TEST__,V={title:`Pages/HomePage`,component:F,tags:[`autodocs`],args:{onRunFlow:B(),onNavigate:B(),onResetSample:B()}},H={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`},{path:`docs/en/**/*.md`,format:{name:`markdown`}}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},U={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},W={args:{...H.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`ui-strings`,blockCount:240,coverage:{"fr-FR":240,"de-DE":180,"ja-JP":96},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`docs`,blockCount:88,coverage:{"fr-FR":40,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},G={args:{...H.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},K={args:{...H.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Per-collection, per-locale coverage from a completed extraction.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: {
      projectPath: "/Users/dev/projects/acme/acme.kapi",
      projectName: "Acme App Localization",
      hasData: false,
      collections: []
    }
  }
}`,...G.parameters?.docs?.source},description:{story:`Project configured but never extracted — prompt to run extract.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...K.parameters?.docs?.description}}},q=[`Default`,`NoFlows`,`WithCoverage`,`NeverExtracted`,`SampleUpgradeAvailable`]}))();export{H as Default,G as NeverExtracted,U as NoFlows,K as SampleUpgradeAvailable,W as WithCoverage,q as __namedExportsOrder,V as default};