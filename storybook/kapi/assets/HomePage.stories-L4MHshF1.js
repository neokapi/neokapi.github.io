import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Et as l,Ii as u,It as d,K as f,Ki as p,Si as m,St as h,bi as g,bt as _,c as v,et as ee,fa as y,g as b,ga as x,gi as S,i as te,ia as ne,mt as re,o as ie,oa as ae,t as C,ur as oe,vi as se,vr as ce,vt as le}from"./lucide-react-DTJloxAJ.js";import{t as w}from"./label-C1tohmzx.js";import{t as T}from"./button-D6zYGAvL.js";import{t as ue}from"./card-CHo_fh0q.js";import{t as de}from"./checkbox-EB20m_E8.js";import{t as E}from"./badge-B925V-__.js";import{t as D}from"./confirm-delete-button-Dfm-Kmqr.js";import{t as O}from"./LocalePill-C8a-9VUF.js";import{$ as k,At as fe,Bt as A,G as pe,Gt as j,Jt as me,Kt as he,Lt as ge,Mt as _e,Nt as ve,Qt as ye,Rn as be,Rt as xe,Vt as Se,_n as Ce,an as we,et as Te,ft as Ee,hn as De,i as Oe,jt as ke,kt as Ae,n as je,nn as Me,nt as Ne,o as Pe,ot as Fe,qt as Ie,r as Le,ut as Re,zt as ze}from"./iframe-BaEdV08T.js";import{r as Be,t as M}from"./useApi-D5eVtPju.js";import{n as Ve,t as He}from"./useShortenHome-Ceyq4nUO.js";import{n as Ue,t as We}from"./ActiveFilterContext-CXiywYDk.js";import{n as Ge,t as Ke}from"./useWailsEvent-tO44X_hi.js";import{n as qe,t as Je}from"./JobFeedContext-Brq47ZSj.js";import{n as Ye,r as Xe}from"./ConvergenceHero-DDh7pL8N.js";import{n as Ze,t as Qe}from"./FilePreview-QHW8kLcm.js";import{n as $e,t as et}from"./filter-BQ0GIjVn.js";import{n as tt,t as nt}from"./useSchemaFormHost-CgAX0FW0.js";import{n as N,r as rt}from"./api-LEFL5VCf.js";import{n as it,t as at}from"./TranslationStatusPanel-BNfOtqf_.js";import{n as ot,t as st}from"./useLocales-CloVKngF.js";function ct({open:e,onOpenChange:t,title:n,description:r,formats:i,allFormats:a,allowAdd:o=!1,filterExtension:c,values:l,onChange:u,scopeNote:d}){let{showError:f}=Le(),p=tt(),[m,h]=(0,P.useState)([]),[g,_]=(0,P.useState)(!1),v=(0,P.useMemo)(()=>{let e=new Set,t=[];for(let n of[...i,...m])n&&!e.has(n)&&(e.add(n),t.push(n));return t},[i,m]),ee=o||i.length>1,[y,b]=(0,P.useState)(ee?null:i[0]??null);(0,P.useEffect)(()=>{e&&(h([]),_(!1),b(ee?null:i[0]??null))},[e]);let x=y??``,re=y===null,[ie,ae]=(0,P.useState)({}),[C,oe]=(0,P.useState)({}),[ce,ue]=(0,P.useState)(!1);(0,P.useEffect)(()=>{!e||!x||ie[x]!==void 0||(ue(!0),Promise.all([M.getFormatSchema(x),M.listFormatPresets(x)]).then(([e,t])=>{ae(t=>({...t,[x]:e??null})),oe(e=>({...e,[x]:t??[]}))}).catch(e=>{f(`Failed to load format schema`,e),ae(e=>({...e,[x]:null}))}).finally(()=>ue(!1)))},[e,x,ie,f]);let de=(0,P.useMemo)(()=>{let e=c?.toLowerCase();return a.filter(t=>v.includes(t.name)?!1:e?(t.extensions??[]).some(t=>t.toLowerCase()===e):!0)},[a,v,c]),E=(0,P.useCallback)(e=>{e&&(h(t=>t.includes(e)?t:[...t,e]),_(!1),b(e))},[]),D=l[x]??{},O=ie[x],k=C[x]??[],pe=(0,P.useMemo)(()=>{if(!O)return;let e={};for(let[t,n]of Object.entries(O.properties??{}))n?.default!==void 0&&(e[t]=n.default);let t=k.find(e=>e.name===D.preset);return t?.config&&Object.assign(e,t.config),e},[O,k,D.preset]);function j(e){return Object.keys(l[e]?.config??{}).length}return(0,F.jsx)(Ae,{open:e,onOpenChange:t,children:(0,F.jsxs)(fe,{side:`right`,className:`flex w-full flex-col gap-0 p-0 sm:max-w-lg md:max-w-xl`,children:[(0,F.jsxs)(_e,{className:`border-b border-border`,children:[(0,F.jsx)(ve,{children:n}),r&&(0,F.jsx)(ke,{children:r})]}),re?(0,F.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-2 overflow-auto p-4`,children:[(0,F.jsx)(w,{className:`text-xs text-muted-foreground`,children:s(`lAy6j`,`Formats`)}),v.map(e=>(0,F.jsxs)(`button`,{onClick:()=>b(e),className:`flex w-full items-center justify-between rounded-md border border-border px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/50`,children:[(0,F.jsx)(`span`,{className:`font-medium`,translate:`no`,children:e}),(0,F.jsxs)(`span`,{className:`flex items-center gap-2`,children:[j(e)>0&&(0,F.jsx)(`span`,{className:`rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary`,children:s(`1v4Dt5`,`{count} set`,{count:j(e)})}),(0,F.jsx)(S,{size:15,className:`text-muted-foreground`})]})]},e)),v.length===0&&!g&&(0,F.jsx)(`p`,{className:`py-2 text-xs text-muted-foreground`,children:s(`4E8VTn`,`No formats matched yet. Add one to configure it.`)}),o&&(g?(0,F.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,F.jsx)(Ne,{value:``,onChange:E,formats:de,placeholder:s(`2aYDzk`,`Pick a format`),className:`flex-1`}),(0,F.jsx)(T,{variant:`ghost`,size:`sm`,onClick:()=>_(!1),"aria-label":s(`AQznM`,`Cancel`),children:(0,F.jsx)(te,{size:14})})]}):(0,F.jsxs)(T,{variant:`outline`,size:`sm`,className:`w-full justify-start text-muted-foreground`,onClick:()=>_(!0),children:[(0,F.jsx)(le,{size:14}),s(`1tDf0l`,`Add format`)]}))]}):(0,F.jsxs)(`div`,{className:`min-h-0 flex-1 overflow-auto p-4`,children:[ee&&(0,F.jsxs)(`button`,{onClick:()=>b(null),className:`mb-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground`,children:[(0,F.jsx)(se,{size:14}),s(`lAy6j`,`Formats`)]}),ce||O===void 0?(0,F.jsx)(`div`,{className:`flex h-40 items-center justify-center text-muted-foreground`,children:(0,F.jsx)(ne,{className:`animate-spin`,size:16})}):O===null?(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-sm font-semibold text-foreground`,translate:`no`,children:x}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:s(`2uJqdn`,`No configurable options for this format.`)})]}):(0,F.jsxs)(`div`,{className:`space-y-3`,children:[k.length>0&&(0,F.jsxs)(`div`,{children:[(0,F.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3nOg4F`,`Preset`)}),(0,F.jsxs)(ge,{value:D.preset||`__default__`,onValueChange:e=>u(x,{...D,preset:e===`__default__`?void 0:e}),children:[(0,F.jsx)(A,{className:`h-8 text-xs`,children:(0,F.jsx)(Se,{})}),(0,F.jsxs)(xe,{children:[(0,F.jsx)(ze,{value:`__default__`,children:s(`1Hb69c`,`Default`)}),k.map(e=>(0,F.jsxs)(ze,{value:e.name,translate:`no`,children:[e.name,e.description?` — ${e.description}`:``]},e.name))]})]})]}),(0,F.jsx)(Pe,{schema:O,values:D.config??{},presetValues:pe,host:p,onChange:e=>u(x,{...D,config:Object.keys(e).length>0?e:void 0})})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border p-4`,children:[d?(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d}):(0,F.jsx)(`span`,{}),(0,F.jsx)(T,{size:`sm`,onClick:()=>t(!1),children:s(`2m1wue`,`Done`)})]})]})})}var P,F,lt=t((()=>{a(),P=e(n(),1),C(),Oe(),Be(),nt(),je(),F=r(),ct.__docgenInfo={description:`Schema-driven format configuration in a right-side drawer, laid out as a
master→detail flow so each level gets the full drawer width:

  - **List** (wildcard / multi-format only): the formats to configure, with
    config-count badges and an "add format" control. Tapping one opens its
    detail.
  - **Detail**: the format's option form (the framework \`SchemaForm\`, whose own
    header names the format) plus its preset, with a back affordance.

A single-format item skips the list and opens straight on its detail.`,methods:[],displayName:`FormatConfigDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},formats:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Formats shown initially in the list (e.g. the formats matched in the input files).`},allFormats:{required:!0,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`All registered formats, for the "add format" picker.`},allowAdd:{required:!1,tsType:{name:`boolean`},description:`Allow configuring formats beyond the initial list (wildcard items).`,defaultValue:{value:`false`,computed:!1}},filterExtension:{required:!1,tsType:{name:`string`},description:`When set, the add-picker is filtered to formats claiming this extension (e.g. ".json").`},values:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`FormatConfigValue`}],raw:`Record<string, FormatConfigValue>`},description:`Current config/preset keyed by format name.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(format: string, next: FormatConfigValue) => void`,signature:{arguments:[{type:{name:`string`},name:`format`},{type:{name:`FormatConfigValue`},name:`next`}],return:{name:`void`}}},description:`Persist a change for one format.`},scopeNote:{required:!1,tsType:{name:`string`},description:`Footer note clarifying where the config is stored (item vs project-wide).`}}}}));function ut(e){let t=e.toLowerCase();return mt.some(e=>t.endsWith(e))}function dt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function ft({archivePath:e,onSelect:t,entries:n}){let[r,a]=(0,pt.useState)(n??null),[o,c]=(0,pt.useState)(!1),[l,u]=(0,pt.useState)(null);return(0,pt.useEffect)(()=>{if(n){a(n);return}let t=!1;return c(!0),u(null),M.listArchiveEntries(e).then(e=>{if(!t){if(e===null){u(`Archive listing is unavailable in this environment.`);return}a(e)}}).catch(e=>{t||u(e instanceof Error?e.message:String(e))}).finally(()=>{t||c(!1)}),()=>{t=!0}},[e,n]),o?(0,I.jsx)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-muted-foreground`,children:i(`2EU0eU`,`{=m0} Listing entries…`,{"=m0":(0,I.jsx)(ne,{className:`size-3 animate-spin`})})}):l?(0,I.jsxs)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-destructive`,children:[(0,I.jsx)(x,{className:`size-3`}),l]}):!r||r.length===0?(0,I.jsx)(`div`,{className:`py-2 pl-8 text-xs text-muted-foreground`,children:s(`3BHBSi`,`No entries.`)}):(0,I.jsx)(`ul`,{className:`border-l border-border/60 pl-3`,"aria-label":s(`1v7i0i`,`Archive entries`),children:r.map(e=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(`button`,{type:`button`,disabled:!e.format,onClick:e.format?()=>t(e.name):void 0,className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs hover:bg-accent disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`,title:e.format?`Preview ${e.name}`:`No reader for this file type`,children:[(0,I.jsx)(ce,{className:`size-3 shrink-0 text-muted-foreground`}),(0,I.jsx)(`span`,{className:`truncate font-mono`,translate:`no`,children:e.name}),(0,I.jsx)(`span`,{className:`ml-auto shrink-0 text-muted-foreground`,children:dt(e.size)})]})},e.name))})}var pt,I,mt,ht=t((()=>{a(),pt=e(n(),1),C(),Be(),I=r(),mt=[`.zip`,`.tar`,`.tgz`,`.tar.gz`],ft.__docgenInfo={description:``,methods:[],displayName:`ArchiveEntries`,props:{archivePath:{required:!0,tsType:{name:`string`},description:`Absolute path of the archive container.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(entry: string) => void`,signature:{arguments:[{type:{name:`string`},name:`entry`}],return:{name:`void`}}},description:`Called with the inner entry path when the user picks an entry to preview.`},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`ArchiveEntry`}],raw:`ArchiveEntry[]`},description:`Pre-loaded entries for Storybook/tests, skipping the backend call.`}}}}));function gt(e){let t=e?.pct?.translated??0;return!e||t===0?{key:`none`,label:`—`,short:`—`,color:`var(--muted-foreground)`,pct:0}:e.shippable?{key:`shippable`,label:`Shippable`,short:`Ship`,color:`oklch(0.62 0.17 150)`,pct:t}:(e.pct?.reviewed??0)>0?{key:`review`,label:`In review`,short:`Review`,color:`oklch(0.72 0.15 80)`,pct:t}:{key:`draft`,label:`Draft`,short:`Draft`,color:`var(--primary)`,pct:t}}function _t(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function vt(e){return e?.name??``}function yt(e){let t=e.split(`/`).pop()??e,n=/\*\.([A-Za-z0-9]+)$/.exec(t);return n?`.`+n[1].toLowerCase():void 0}function bt(e){return rt(e)?`(unnamed)`:e.name&&e.name.length>0?e.name:`(unnamed)`}function xt(e){let t=e[0];return t?t.relative.split(`/`).map(e=>e===t.lang?`{lang}`:e).join(`/`):``}function St({label:e,pct:t,color:n}){return(0,R.jsx)(`span`,{className:`flex min-w-40 flex-1 items-center gap-2`,children:i(`26PYWB`,`{=m0} {label} {/=m0} {=m2} {=m3} {/=m2} {=m4} {pct}% {/=m4}`,{"=m0":(0,R.jsx)(`span`,{className:`w-14 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),"=m2":(0,R.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,R.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}})}),"=m3":(0,R.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}}),"=m4":(0,R.jsxs)(`span`,{className:`w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[t,`%`]})},{label:e,pct:t})})}function Ct({items:e,onSelect:t}){let n=(0,L.useRef)(null),[r,a]=(0,L.useState)(0),[c,l]=(0,L.useState)(null);(0,L.useEffect)(()=>{let e=n.current;if(!e)return;let t=new ResizeObserver(e=>a(e[0].contentRect.width));return t.observe(e),()=>t.disconnect()},[]);let u=e=>z[e]??z.none,d=e=>({shippable:`Shippable`,review:`In review`,translated:`Translated`,none:`Not started`})[e]??e,f=e=>40+e/100*p,p=Math.max(0,r-80),m=[...e].sort((e,t)=>e.pct-t.pct),h=[],g=m.map(e=>{let t=f(e.pct),n=0;for(;n<h.length&&t-h[n]<80;)n++;return h[n]=t,{it:e,x:t,above:n%2==0,sideLane:Math.floor(n/2)}}),_=e=>{let t=g.filter(t=>t.above===e).map(e=>e.sideLane);return t.length?38+Math.max(...t)*24:0},v=r>0?_(!0):38,ee=r>0?_(!1):0,y=v+8,b=y+ee+8,x=b+12,S=g.find(e=>e.it.lang===c)?.it;return(0,R.jsxs)(`div`,{children:[(0,R.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3btIdj`,`Completeness by language`)}),(0,R.jsxs)(`div`,{ref:n,className:`relative`,style:{height:x},children:[r>0&&[25,50,75].map(e=>(0,R.jsx)(`div`,{className:`absolute w-px bg-border/40`,style:{left:f(e),top:0,height:b}},e)),(0,R.jsx)(`div`,{className:`absolute h-px bg-border`,style:{left:40,right:40,top:y}}),r>0&&g.map(({it:e,x:n,above:r,sideLane:a})=>{let s=u(e.stage),d=18+a*24,f=c&&c!==e.lang?.12:1,p=r?y-d-20:y+d;return(0,R.jsx)(`span`,{style:{opacity:f,transition:`opacity 120ms`},children:i(`1x1ijP`,`{=m0}  {=m1}  {=m2}  {=m3} {=m4} {=m5} {it.pct}% {/=m5} {/=m3}`,{"=m0":(0,R.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?y-d:y,width:1,height:d-4,background:`color-mix(in oklch, ${s} 55%, var(--border))`}}),"=m1":(0,R.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?y-8:y+4,width:0,height:0,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,...r?{borderTop:`4px solid ${s}`}:{borderBottom:`4px solid ${s}`}}}),"=m2":(0,R.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:y,width:8,height:8,transform:`translate(-50%, -50%)`,background:s,border:`2px solid var(--card)`}}),"=m3":(0,R.jsxs)(`span`,{className:`absolute flex -translate-x-1/2 items-center gap-1 whitespace-nowrap ${t?`cursor-pointer`:`cursor-default`}`,style:{left:n,top:p},onMouseEnter:()=>l(e.lang),onMouseLeave:()=>l(null),onClick:t?()=>t(e.lang):void 0,role:t?`button`:void 0,"aria-label":t?o(`Review {lang} translations`,{lang:e.lang}):void 0,title:t?`${e.lang}: ${e.pct}% translated — ${o(`click to review`)}`:`${e.lang}: ${e.pct}% translated`,"data-slot":`timeline-lang-tag`,children:[(0,R.jsx)(O,{locale:e.lang}),(0,R.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m4":(0,R.jsx)(O,{locale:e.lang}),"=m5":(0,R.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"it.pct":e.pct})},e.lang)}),r>0&&S&&S.byCollection.map((e,t)=>{let n=f(e.pct);return(0,R.jsx)(`span`,{className:`z-10`,children:i(`2ezCfL`,`{=m0}  {=m1}  {=m2} {=m3}{cc.name}{/=m3}{value} {=m6}{cc.pct}%{/=m6} {/=m2}`,{"=m0":(0,R.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:y-20,width:1,height:16,background:`color-mix(in oklch, ${e.color} 60%, var(--border))`}}),"=m1":(0,R.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:y,width:11,height:11,transform:`translate(-50%, -50%)`,background:e.color,border:`2px solid ${u(e.stage)}`,boxShadow:`0 0 0 1px var(--card)`},title:`${e.name}: ${e.pct}% · ${d(e.stage)}`}),"=m2":(0,R.jsxs)(`span`,{className:`absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-1.5 py-0.5 text-[9px] font-medium shadow-sm`,style:{left:n,top:y-38,borderColor:e.color},children:[(0,R.jsx)(`span`,{translate:`no`,children:e.name}),` `,(0,R.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m3":(0,R.jsx)(`span`,{translate:`no`,children:e.name}),"=m6":(0,R.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"cc.name":e.name,value:` `,"cc.pct":e.pct})},`${e.name}-${t}`)}),r>0&&[0,50,100].map(e=>(0,R.jsx)(`span`,{className:`absolute -translate-x-1/2 text-[9px] text-muted-foreground`,style:{left:f(e),top:b},children:s(`4pXae7`,`${e}%`,{tk:e})},e))]}),(0,R.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground`,children:[[`shippable`,s(`2dg6y8`,`Shippable`)],[`review`,s(`2oadc9`,`In review`)],[`translated`,s(`2Lc17w`,`Translated`)]].map(([e,t])=>(0,R.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,R.jsx)(`span`,{className:`size-2 rounded-full`,style:{background:u(e)}}),t]},e))})]})}function wt({project:e,onUpdate:t,tabID:n,flows:r,onRunFlow:a,onOpenReview:o,formatList:c,basePath:f,status:p,convergence:_}){let{showError:v}=Le(),{locales:x}=ot(),{hasActive:te}=qe(),ie=Ve(),{active:C,setActive:se,enabled:fe}=Ue(),[A,pe]=(0,L.useState)([]),[ge,_e]=(0,L.useState)([]),[ve,xe]=(0,L.useState)(f??``),[Se,Oe]=(0,L.useState)(!1),[ke,Ae]=(0,L.useState)(!1),[je,Me]=(0,L.useState)(c??[]),[Pe,Fe]=(0,L.useState)(p??null),[ze,Be]=(0,L.useState)(_??null),[He,We]=(0,L.useState)({}),[Ke,Je]=(0,L.useState)(!1),[Ye,Xe]=(0,L.useState)(null),[Ze,$e]=(0,L.useState)(new Set),[tt,nt]=(0,L.useState)(new Set),[N,it]=(0,L.useState)(new Set),[st,P]=(0,L.useState)(!1),[F,lt]=(0,L.useState)(!1),[dt,pt]=(0,L.useState)({}),[I,mt]=(0,L.useState)(new Set),[ht,wt]=(0,L.useState)(new Set),[Tt,z]=(0,L.useState)(null),[kt,At]=(0,L.useState)(new Set),[B,V]=(0,L.useState)(null),H=e.content??[],U=Object.keys(r??{}),W=!!(c&&f),G=(0,L.useMemo)(()=>{let t={};for(let[n,r]of Object.entries(e.defaults?.formats??{}))t[n]={config:r.config,preset:r.preset};return t},[e.defaults?.formats]),K=(0,L.useCallback)((n,r)=>{let i={...e.defaults},a={...i.formats},o={...a[n]};r.preset?o.preset=r.preset:delete o.preset,r.config&&Object.keys(r.config).length>0?o.config=r.config:delete o.config,Object.keys(o).length===0?delete a[n]:a[n]=o,i.formats=Object.keys(a).length>0?a:void 0,t({...e,defaults:i})},[e,t]),q=(0,L.useCallback)(e=>{let t=new Set;for(let n of A)n.pattern===e.path&&n.format&&t.add(n.format);return[...t]},[A]);(0,L.useEffect)(()=>{c||M.listFormats().then(e=>{e&&Me(e)}).catch(e=>v(`Failed to load formats`,e)),f||M.getBasePath(n).then(e=>{e&&xe(e)}).catch(e=>v(`Failed to get base path`,e))},[n,v,c,f]);let J=(0,L.useCallback)(()=>{p||M.getProjectStatus(n).then(e=>{e&&Fe(e)}).catch(()=>{})},[n,p]),Y=(0,L.useCallback)(()=>{_||M.getConvergence(n).then(e=>{e&&Be(e)}).catch(()=>{})},[n,_]),X=(0,L.useCallback)(async()=>{if(!W){Oe(!0);try{await M.updateProject(n,e);let[t,r,i]=await Promise.all([M.matchContent(n),M.listProjectFiles(n),M.listOutputs(n)]);pe(t??[]),_e(r??[]),pt(i??{})}catch(e){v(`Failed to scan files`,e)}finally{Oe(!1)}}},[n,e,v,W]),Z=(0,L.useCallback)(()=>{W||M.listOutputs(n).then(e=>{e&&pt(e)}).catch(()=>{})},[n,W]);(0,L.useEffect)(()=>{X()},[X,H.length]),(0,L.useEffect)(()=>{J(),Y()},[J,Y,e.content]),(0,L.useEffect)(()=>{!n||!a||M.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;We(t)})},[n,a,e.flows]),Ge(`project-files-changed`,e=>{e===n&&X()}),Ge(`outputs-changed`,()=>Z()),Ge(`project:extracted`,()=>{J(),Y()});let Q=(0,L.useCallback)(async()=>{if(!(!n||W)){Ae(!0);try{await M.runExtract(n),J(),Y(),await X()}catch(e){v(`Extraction failed`,e)}finally{Ae(!1)}}},[n,W,J,Y,X,v]),jt=n=>{t({...e,content:n})},Mt=()=>{jt([...H,{name:`New Collection`,items:[{path:``}]}])},Nt=(e,t)=>{let n=[...H];n[e]=t,jt(n)},Pt=e=>{jt(H.filter((t,n)=>n!==e))},Ft=async()=>{let e=await M.addFilesDialog(n,``);e&&e.length>0&&X()},It=(0,L.useCallback)(async e=>{e.preventDefault(),Je(!1);let t=e.dataTransfer?.files;if(!(!t||t.length===0)){for(let e=0;e<t.length;e++){let r=t[e].path;r&&await M.copyFileToProject(n,r,``)}X()}},[n,X]),Lt=(0,L.useCallback)(e=>{e.preventDefault(),Je(!0)},[]),Rt=(0,L.useCallback)(e=>{e.preventDefault(),Je(!1)},[]),zt=new Set(A.map(e=>e.relative)),Bt=new Set;for(let e of Object.values(dt))for(let t of e)Bt.add(t.relative);let Vt=ge.filter(e=>!e.is_dir&&!zt.has(e.relative)&&!Bt.has(e.relative)),Ht=C?.collections??[],Ut=(0,L.useCallback)(e=>Ht.length===0||Ht.includes(bt(e)),[Ht]),$=H.map((e,t)=>({coll:e,ci:t})).filter(({coll:e})=>Ut(e)),Wt=H.length-$.length,Gt=fe&&!!C,Kt=(0,L.useMemo)(()=>{let e=new Map;for(let t of Pe?.collections??[])e.set(t.name,t);return e},[Pe]),qt=$.map(({coll:e})=>Kt.get(bt(e))).filter(e=>!!e),Jt=qt.reduce((e,t)=>e+t.blockCount,0),Yt=Array.from(new Set(qt.flatMap(e=>et(e.targetLanguages,C)))).map(e=>{let t=0,n=0;for(let r of qt)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,pct:n>0?Math.round(t/n*100):0}}),Xt=!!Pe?.hasData,Zt=(e,t,n)=>{let r=vt(e.format),a=e.format?.config&&Object.keys(e.format.config).length>0,o=r?[]:q(e),c=!r;return(0,R.jsxs)(`div`,{className:`space-y-2`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`yBWxw`,`Path pattern`)}),(0,R.jsx)(Ee,{value:e.path,onChange:n=>t({...e,path:n}),placeholder:s(`1R8M9g`,`src/locales/en/*.json`)})]}),(0,R.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`39Lmr`,`Format`)}),(0,R.jsx)(Ne,{value:r,onChange:n=>t({...e,format:n?{name:n}:void 0}),formats:je})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3YGJcS`,`Target path`)}),(0,R.jsx)(Re,{value:e.target??``,onChange:n=>t({...e,target:n||void 0}),placeholder:s(`3T9UTi`,`output/{lang}  ·  or output/{lang}/{dir}/{name}.{ext}`)})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:i(`5W6k9`,`Base{value} {=m1} (optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard) {/=m1}`,{"=m1":(0,R.jsx)(`span`,{className:`font-normal text-muted-foreground/60`,children:`(optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard)`})},{value:` `})}),(0,R.jsx)(Ee,{value:e.base??``,onChange:n=>t({...e,base:n||void 0}),placeholder:s(`jiLnw`,`auto (e.g. input/docs)`)})]}),r===`exec`&&(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`1gbrZJ`,`Extractor command`)}),(0,R.jsx)(`input`,{type:`text`,value:typeof e.format?.config?.command==`string`?e.format.config.command:``,onChange:n=>t({...e,format:{...e.format,config:{...e.format?.config,command:n.target.value||void 0}}}),placeholder:s(`1YiMcB`,`vp kapi-react extract --stream`),className:`w-full rounded-md border border-input bg-background px-2 py-1 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,R.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:s(`4oM908`,"`kapi extract -p` runs this command; NUL-separated paths on stdin, NDJSON blocks on stdout.")})]}),(r||o.length>0)&&(0,R.jsx)(`div`,{children:(0,R.jsxs)(T,{variant:`ghost`,size:`xs`,onClick:()=>Xe(n),className:`h-auto px-0 text-muted-foreground hover:text-foreground`,children:[(0,R.jsx)(ee,{size:10}),r?(0,R.jsxs)(R.Fragment,{children:[s(`66RA9`,`Configure {fmt}`,{fmt:r}),(a||e.format?.preset)&&(0,R.jsx)(`span`,{className:`ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-primary`,children:e.format?.preset?e.format.preset:Object.keys(e.format.config).length})]}):s(`4h7nHO`,`Configure formats ({count})`,{count:o.length})]})}),Ye===n&&(c?(0,R.jsx)(ct,{open:!0,onOpenChange:e=>!e&&Xe(null),title:s(`48Xlr4`,`Configure formats`),description:s(`1bIT1z`,`This pattern auto-detects a format per file. Tune any of them here — settings apply project-wide.`),formats:o,allFormats:je,allowAdd:!0,filterExtension:yt(e.path),values:G,onChange:K,scopeNote:s(`10MXfr`,`Stored in the project's defaults.formats — shared by every content item.`)}):(0,R.jsx)(ct,{open:!0,onOpenChange:e=>!e&&Xe(null),title:s(`66RA9`,`Configure {fmt}`,{fmt:r}),formats:[r],allFormats:je,values:{[r]:{config:e.format?.config,preset:e.format?.preset}},onChange:(n,r)=>t({...e,format:{name:n,preset:r.preset,config:r.config}}),scopeNote:s(`2mxJu6`,`Applies to this content item.`)}))]})},Qt=(e,t)=>e(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}),$t=e=>$e(t=>new Set(t).add(e)),en=e=>rt(e)?[e.path??``]:(e.items??[]).map(e=>e.path),tn=e=>{let t=new Set(en(e).filter(Boolean));return A.filter(e=>t.has(e.pattern))},nn=(t,n)=>rt(t)?Zt({path:t.path??``,format:t.format,target:t.target},e=>Nt(n,{path:e.path,format:e.format,target:e.target}),`bare-${n}`):(0,R.jsxs)(`div`,{className:`space-y-4`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`2wzVub`,`Collection name`)}),(0,R.jsx)(`input`,{type:`text`,value:t.name??``,onChange:e=>Nt(n,{...t,name:e.target.value||void 0}),placeholder:s(`3fQf8Y`,`Collection name`),className:`w-full rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`})]}),(0,R.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`25vgeN`,`Source override`)}),(0,R.jsx)(k,{value:t.source_language??``,onChange:e=>Nt(n,{...t,source_language:e||void 0}),locales:x,placeholder:e.defaults?.source_language?s(`10wAUR`,`Inherit ({source})`,{source:e.defaults.source_language}):s(`4FMXin`,`Select source...`)})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`oVuml`,`Target overrides`)}),(0,R.jsx)(Te,{value:t.target_languages??[],onChange:e=>Nt(n,{...t,target_languages:e.length>0?e:void 0}),locales:x,placeholder:e.defaults?.target_languages?.length?s(`s2EQV`,`Inherit ({targets})`,{targets:e.defaults.target_languages.join(`, `)}):s(`1YSqO`,`Add targets...`)})]})]}),(0,R.jsxs)(`div`,{children:[(0,R.jsx)(w,{className:`mb-1 block text-xs text-muted-foreground`,children:s(`4GjmHO`,`Patterns`)}),(0,R.jsxs)(`div`,{className:`space-y-2`,children:[(t.items??[]).map((e,r)=>(0,R.jsxs)(`div`,{className:`group/item relative rounded-md border border-border p-3`,children:[(0,R.jsx)(`div`,{className:`absolute right-2 top-2 opacity-0 group-hover/item:opacity-100`,children:(0,R.jsx)(D,{onDelete:()=>{let e=(t.items??[]).filter((e,t)=>t!==r);e.length===0?Pt(n):Nt(n,{...t,items:e})},mode:`icon`})}),Zt(e,e=>{let i=[...t.items??[]];i[r]=e,Nt(n,{...t,items:i})},`coll-${n}-${r}`)]},r)),(0,R.jsx)(T,{variant:`ghost`,size:`xs`,onClick:()=>Nt(n,{...t,items:[...t.items??[],{path:``}]}),className:`text-muted-foreground`,children:i(`1EfPvQ`,`{=m0} Add another pattern`,{"=m0":(0,R.jsx)(le,{size:10})})})]})]})]}),rn=e=>(0,R.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,R.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`22cvwU`,`File`)}),(0,R.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`1EJ61l`,`Format`)}),(0,R.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3RvdGQ`,`Pattern`)})]})}),(0,R.jsx)(`tbody`,{children:e.map((e,t)=>{let n=dt[e.relative]??[],r=I.has(e.relative),i=n.filter(e=>e.exists).length,a=xt(n),o=ht.has(e.relative);return(0,R.jsxs)(L.Fragment,{children:[(0,R.jsxs)(`tr`,{onClick:()=>z({path:e.path,relative:e.relative}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:s(`4EZGfu`,`Preview {file}`,{file:e.relative}),children:[(0,R.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[n.length>0?(0,R.jsx)(`button`,{onClick:t=>{t.stopPropagation(),mt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n})},className:`shrink-0 text-muted-foreground hover:text-foreground`,title:r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),"aria-label":r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),children:r?(0,R.jsx)(g,{size:12}):(0,R.jsx)(S,{size:12})}):(0,R.jsx)(ce,{size:12,className:`shrink-0 text-muted-foreground`}),e.relative]})}),(0,R.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,R.jsx)(E,{variant:`secondary`,children:e.format||`unknown`})}),(0,R.jsx)(`td`,{className:`px-3 py-1.5 text-muted-foreground`,children:(0,R.jsxs)(`span`,{className:`flex items-center justify-between gap-2`,children:[(0,R.jsx)(`span`,{children:e.pattern}),n.length>0&&(0,R.jsx)(E,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:s(`3LFNpN`,`{present}/{total} outputs`,{present:i,total:n.length})})]})})]}),r&&n.length>0&&(0,R.jsxs)(`tr`,{onClick:()=>wt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:o?s(`1rbiuq`,`Hide per-language outputs`):s(`3GyGnC`,`Show per-language outputs`),children:[(0,R.jsx)(`td`,{className:`py-1 pl-9 pr-3`,children:(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[o?(0,R.jsx)(g,{size:11,className:`shrink-0`}):(0,R.jsx)(S,{size:11,className:`shrink-0`}),(0,R.jsx)(u,{size:10,className:`shrink-0 opacity-50`}),(0,R.jsx)(`span`,{translate:`no`,children:a})]})}),(0,R.jsx)(`td`,{className:`px-3 py-1`,children:(0,R.jsx)(E,{variant:`secondary`,children:e.format||`—`})}),(0,R.jsx)(`td`,{className:`px-3 py-1 text-right`,children:(0,R.jsx)(E,{variant:`outline`,className:`text-[10px] font-normal`,children:s(`2jhS0l`,`{present}/{total} generated`,{present:i,total:n.length})})})]}),r&&o&&n.map(e=>(0,R.jsxs)(`tr`,{onClick:e.exists?()=>z({path:e.path,relative:e.relative}):void 0,className:`border-b border-border last:border-0 ${e.exists?`cursor-pointer hover:bg-accent/30`:`opacity-60`}`,title:e.exists?s(`1VO4bN`,`Inspect {file}`,{file:e.relative}):s(`2K2GuI`,`Not generated yet — run a flow to create it`),children:[(0,R.jsx)(`td`,{className:`py-1 pl-16 pr-3`,children:(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[(0,R.jsx)(O,{locale:e.lang}),(0,R.jsx)(`span`,{children:e.relative})]})}),(0,R.jsx)(`td`,{className:`px-3 py-1`,children:e.exists?(0,R.jsx)(E,{variant:`secondary`,children:e.format||`—`}):(0,R.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:s(`1wl1hi`,`pending`)})}),(0,R.jsx)(`td`,{className:`px-3 py-1 text-right text-muted-foreground`,children:e.exists?_t(e.size):``})]},`${t}-${e.relative}`))]},t)})})]}),an=e=>(0,R.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,R.jsx)(`thead`,{children:(0,R.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,R.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`22cvwU`,`File`)}),(0,R.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`1EJ61l`,`Format`)}),(0,R.jsx)(`th`,{className:`px-3 py-2 text-right font-medium`,children:s(`3nibT3`,`Size`)})]})}),(0,R.jsx)(`tbody`,{children:e.map(e=>{let t=ut(e.relative),n=kt.has(e.path),r=t?()=>At(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}):e.format?()=>z({path:e.path,relative:e.relative}):void 0;return(0,R.jsxs)(L.Fragment,{children:[(0,R.jsxs)(`tr`,{onClick:r,className:`border-b border-border last:border-0 text-muted-foreground hover:bg-accent/30 ${r?`cursor-pointer`:``}`,title:t?s(`Kgjt4`,`Browse entries in {file}`,{file:e.relative}):e.format?s(`4EZGfu`,`Preview {file}`,{file:e.relative}):void 0,children:[(0,R.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,R.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[t?n?(0,R.jsx)(g,{size:12,className:`shrink-0`}):(0,R.jsx)(S,{size:12,className:`shrink-0`}):(0,R.jsx)(ce,{size:12,className:`shrink-0`}),e.relative]})}),(0,R.jsx)(`td`,{className:`px-3 py-1.5`,children:e.format?(0,R.jsx)(E,{variant:`secondary`,children:e.format}):(0,R.jsx)(`span`,{children:s(`2xmcdV`,`—`)})}),(0,R.jsx)(`td`,{className:`px-3 py-1.5 text-right`,children:_t(e.size)})]}),t&&n&&(0,R.jsx)(`tr`,{className:`border-b border-border last:border-0`,children:(0,R.jsx)(`td`,{colSpan:3,className:`px-3 py-1.5`,children:(0,R.jsx)(ft,{archivePath:e.path,onSelect:t=>V({path:e.path,relative:e.relative,entry:t})})})})]},e.relative)})})]}),on=st&&!!a&&U.length>0,sn=$.map(e=>e.ci),cn=sn.length>0&&sn.every(e=>N.has(e)),ln=Array.from(new Set($.filter(e=>N.has(e.ci)).flatMap(({coll:e})=>tn(e).map(e=>e.path)))),un=e=>Qt(it,e),dn=()=>it(new Set),fn=()=>it(cn?new Set:new Set(sn)),pn=N.size>0,mn=pn?ln.length>0:A.length>0,hn=e=>He[e]?.valid!==!1,gn=e=>{let t=He[e];if(t&&t.valid===!1)return s(`1WxaK7`,`Cannot run: {issues}`,{issues:(t.issues??[]).map(e=>e.message).join(`; `)});if(!mn)return s(`SbyAd`,`No matched files to run on`)},_n=(e,t)=>{pn?(a?.(e,t,{scopePaths:ln,scopeLabel:s(`2TVMjG`,`{count} collections`,{count:N.size})}),dn()):a?.(e,t)},vn=et(Array.from(new Set($.flatMap(({coll:t})=>(t.target_languages??e.defaults?.target_languages??[]).map(String)))),C),yn=vn.length>=Ot,bn=(0,L.useMemo)(()=>{let e=new Map;for(let t of ze?.locales??[])e.set(`${t.collection??``} ${t.locale}`,t);return e},[ze]),xn=bn.size>0,Sn=(e,t)=>{let n=rt(e)?``:e.name??``;return bn.get(`${n} ${t}`)??bn.get(` ${t}`)},Cn=(Xt||xn)&&vn.length>0,wn=e=>(e.pct?.translated??0)===0?`none`:e.shippable?`shippable`:(e.pct?.reviewed??0)>0?`review`:`translated`,Tn=new Map;$.forEach(({coll:e},t)=>Tn.set(e.name??``,Et(t)));let En=xn?vn.map(e=>{let t=0,n=0,r=0,i=0,a=[];for(let o of ze?.locales??[])o.locale===e&&(t+=o.total,n+=o.total*(o.pct?.translated??0)/100,r+=o.total*(o.pct?.reviewed??0)/100,o.shippable&&(i+=o.total),a.push({name:o.collection||s(`2hJcYw`,`(unnamed)`),pct:Math.round(o.pct?.translated??0),stage:wn(o),color:Tn.get(o.collection||``)??`var(--muted-foreground)`}));a.sort((e,t)=>t.pct-e.pct);let o=t>0?Math.round(n/t*100):0,c=t>0?Math.round(r/t*100):0;return{lang:e,pct:o,stage:t===0?`none`:i/t>=.999?`shippable`:c>0?`review`:o>0?`translated`:`none`,byCollection:a}}):null,Dn=(e,t)=>{let n=Kt.get(bt(e));return!n||n.blockCount===0||!n.targetLanguages.includes(t)?null:Math.round((n.coverage?.[t]??0)/n.blockCount*100)},On=(e,t)=>{if(xn){let n=gt(Sn(e,t));if(n.key===`none`)return(0,R.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)});let r=o?`${t}: ${n.label} · ${n.pct}% translated — ${s(`4rHopU`,`click to review`)}`:`${t}: ${n.label} · ${n.pct}% translated`,a=o?()=>o({collection:rt(e)?``:e.name??``,locale:t}):void 0,c=yn?(0,R.jsxs)(`span`,{className:`flex items-center justify-center gap-1 text-[10px]`,title:r,children:[(0,R.jsx)(`span`,{className:`size-2 shrink-0 rounded-full`,style:{background:n.color}}),(0,R.jsx)(`span`,{className:`tabular-nums text-muted-foreground`,children:n.pct})]}):(0,R.jsx)(`span`,{className:`flex flex-col items-center gap-0.5`,title:r,children:i(`4G4kFe`,`{=m0} {r.label} {/=m0} {=m2}{r.pct}%{/=m2}`,{"=m0":(0,R.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),"=m2":(0,R.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})},{"r.label":n.label,"r.pct":n.pct})});return a?(0,R.jsx)(`button`,{type:`button`,className:`rounded-sm hover:bg-accent`,onClick:a,"aria-label":s(`1p5aVl`,`Review {lang} in this collection`,{lang:t}),"data-slot":`ship-gate-cell`,children:c}):c}let n=Dn(e,t);return n===null?(0,R.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)}):yn?(0,R.jsx)(`span`,{className:`flex h-6 items-center justify-center rounded text-[10px] font-medium tabular-nums`,style:{background:Dt(n),color:n>55?`var(--primary-foreground)`:`var(--muted-foreground)`},title:`${t}: ${n}%`,children:n}):(0,R.jsx)(`span`,{className:`flex flex-col items-center gap-1`,title:`${t}: ${n}%`,children:i(`2iHdj3`,`{=m0} {=m1} {/=m0} {=m2}{p}%{/=m2}`,{"=m0":(0,R.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,R.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),"=m1":(0,R.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}}),"=m2":(0,R.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})},{p:n})})},kn=$.map(({coll:e},t)=>({name:bt(e),value:Kt.get(bt(e))?.blockCount??0,fill:Et(t)})),An=kn.filter(e=>e.value>0),jn=Cn?`repeat(${vn.length}, minmax(${yn?40:60}px, 1fr))`:`1fr`,Mn=`${on?`24px `:``}minmax(150px,1.6fr) 52px 62px ${jn} auto`;return(0,R.jsxs)(`section`,{className:`mb-8`,children:[(0,R.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,R.jsxs)(`h2`,{className:`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,R.jsx)(ce,{size:14}),s(`3LuUL6`,`Collections`)]}),ve&&(0,R.jsx)(`span`,{className:`hidden text-xs text-muted-foreground sm:inline`,children:s(`1BV3ls`,`relative to {base}`,{base:ie(ve)})}),(0,R.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,R.jsxs)(T,{variant:`outline`,size:`sm`,onClick:Mt,"aria-label":s(`Yg9iB`,`Add content collection`),children:[(0,R.jsx)(le,{size:12}),s(`2Q60vn`,`Add Collection`)]}),(0,R.jsxs)(T,{variant:`outline`,size:`sm`,onClick:Ft,"aria-label":s(`R68OC`,`Add files`),children:[(0,R.jsx)(le,{size:12}),s(`Hukdl`,`Add Files`)]}),(0,R.jsxs)(T,{variant:`ghost`,size:`sm`,onClick:()=>P(e=>(e&&dn(),!e)),"aria-expanded":st,"aria-label":s(`2gxXhO`,`Advanced actions`),"data-slot":`advanced-toggle`,children:[st?(0,R.jsx)(g,{size:12}):(0,R.jsx)(S,{size:12}),s(`34Yci`,`Advanced`)]})]})]}),st&&(0,R.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2`,"data-slot":`advanced-bar`,children:[(0,R.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3DcfjW`,`Manual run`)}),on&&(U.length===1?(0,R.jsxs)(T,{size:`sm`,disabled:te||!mn||!hn(U[0]),title:gn(U[0]),onClick:()=>_n(U[0],r[U[0]]),"aria-label":pn?s(`3jqAmN`,`Run {flow} on selected collections`,{flow:U[0]}):s(`4cKRZ3`,`Run {flow} on all collections`,{flow:U[0]}),children:[(0,R.jsx)(h,{size:12}),pn?s(`2ovFIO`,`Run on selected`):s(`15F8wT`,`Run {flow}`,{flow:U[0]})]}):(0,R.jsxs)(j,{children:[(0,R.jsx)(ye,{asChild:!0,children:(0,R.jsxs)(T,{size:`sm`,disabled:te||!mn,"aria-label":s(`16daiB`,`Run a flow`),children:[(0,R.jsx)(h,{size:12}),pn?s(`2ovFIO`,`Run on selected`):s(`3nmBYd`,`Run flow`),(0,R.jsx)(g,{size:12})]})}),(0,R.jsxs)(he,{align:`end`,children:[(0,R.jsx)(me,{children:pn?s(`2G8fsS`,`Run on {count} collections`,{count:N.size}):s(`1oOSFP`,`Run on all collections`)}),U.map(e=>(0,R.jsxs)(Ie,{disabled:!mn||!hn(e),title:gn(e),onClick:()=>_n(e,r[e]),children:[(0,R.jsx)(h,{size:12}),e]},e))]})]})),(0,R.jsxs)(T,{variant:`outline`,size:`sm`,onClick:()=>void Q(),disabled:ke||Se,"aria-label":Xt?s(`2qtgPx`,`Re-extract content`):s(`2XmVC7`,`Run extract`),title:s(`3foHW3`,`Manual override — Bring up to date re-extracts changed sources automatically.`),children:[ke?(0,R.jsx)(ne,{size:12,className:`animate-spin`}):(0,R.jsx)(re,{size:12}),Xt?s(`VWqFK`,`Re-extract`):s(`3f7Alp`,`Extract`)]}),(0,R.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:s(`4h5TLL`,`Tick collections below to scope a run.`)})]}),Gt&&(0,R.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs`,children:[(0,R.jsx)(y,{size:12,className:`shrink-0 text-muted-foreground`}),(0,R.jsx)(`span`,{className:`text-muted-foreground`,children:Wt>0?s(`41GmQA`,`Filtered by {name} — {count} collection(s) hidden`,{name:C.name,count:Wt}):s(`32FBSf`,`Filtered by {name}`,{name:C.name})}),(0,R.jsx)(T,{variant:`link`,size:`xs`,className:`ml-auto h-auto px-0`,onClick:()=>void se(``),children:s(`4AAIEq`,`Show all`)})]}),H.length>0&&(Xt?(0,R.jsx)(ue,{className:`mb-3 p-4`,children:(0,R.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,R.jsxs)(`div`,{className:`flex items-center gap-3`,children:[An.length>0?(0,R.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,R.jsx)(be,{width:`100%`,height:`100%`,children:(0,R.jsx)(we,{children:(0,R.jsx)(De,{data:An,dataKey:`value`,nameKey:`name`,innerRadius:`56%`,outerRadius:`100%`,paddingAngle:An.length>1?2:0,strokeWidth:0,children:An.map(e=>(0,R.jsx)(Ce,{fill:e.fill},e.name))})})})}):(0,R.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:s(`750BK`,`No blocks`)}),(0,R.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,R.jsx)(`li`,{className:`font-medium text-foreground`,children:s(`4vcVki`,`{count} blocks`,{count:Jt})}),kn.map((e,t)=>(0,R.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,R.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:Et(t)}}),(0,R.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,R.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.value})]},e.name))]})]}),En&&En.length>0?(0,R.jsx)(Ct,{items:En,onSelect:o?e=>o({locale:e}):void 0}):Yt.length>0&&(0,R.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,R.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`jP6Vy`,`Coverage across collections`)}),(0,R.jsx)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-1.5`,children:Yt.map(e=>(0,R.jsx)(St,{label:e.lang,pct:e.pct},e.lang))})]})]})}):(0,R.jsxs)(ue,{className:`mb-3 flex items-center gap-3 p-4`,children:[(0,R.jsx)(d,{size:18,className:`shrink-0 text-muted-foreground/50`}),(0,R.jsx)(`div`,{className:`flex-1 text-xs text-muted-foreground`,children:s(`2JAuYT`,`Nothing extracted yet — run extract to read your content and analyze coverage.`)}),(0,R.jsx)(T,{size:`sm`,onClick:()=>void Q(),disabled:ke||Se,children:ke?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ne,{size:12,className:`animate-spin`}),s(`1g3fu4`,`Extracting...`)]}):s(`1n6yRm`,`Run extract`)})]})),H.some(e=>e.archive)&&(0,R.jsx)(`div`,{className:`mb-4`,children:(0,R.jsx)(at,{tabID:n})}),on&&N.size>0&&(0,R.jsxs)(`div`,{className:`sticky top-2 z-10 mb-3 flex flex-wrap items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs shadow-sm backdrop-blur`,children:[(0,R.jsx)(`span`,{className:`font-medium`,children:s(`10dUDc`,`{count} selected`,{count:N.size})}),(0,R.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3YDabm`,`{count} files`,{count:ln.length})}),(0,R.jsx)(`span`,{className:`text-muted-foreground`,children:s(`323P9x`,`·`)}),(0,R.jsx)(`span`,{className:`text-muted-foreground`,children:s(`lTjdA`,`run via Run on selected, above`)}),(0,R.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,R.jsx)(T,{variant:`ghost`,size:`xs`,onClick:fn,children:cn?s(`3H287u`,`Deselect all`):s(`3xLcXG`,`Select all`)}),(0,R.jsx)(T,{variant:`ghost`,size:`xs`,onClick:dn,children:s(`45Z9at`,`Clear`)})]})]}),(0,R.jsx)(`div`,{onDrop:It,onDragOver:Lt,onDragLeave:Rt,className:`rounded-lg border-2 transition-colors ${Ke?`border-primary bg-primary/5`:`border-transparent`}`,children:H.length===0&&Vt.length===0?(0,R.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 text-center`,children:[(0,R.jsx)(b,{size:24,className:`mb-3 text-muted-foreground/50`}),(0,R.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:s(`2p5m8o`,`Add a collection to map your source files, or drop files here.`)})]}):(0,R.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-border`,children:[$.length>0&&(0,R.jsxs)(`div`,{className:`grid items-center gap-x-3 border-b border-border bg-muted/30 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,style:{gridTemplateColumns:Mn},children:[on&&(0,R.jsx)(`span`,{}),(0,R.jsx)(`span`,{children:s(`iFWBE`,`Collection`)}),(0,R.jsx)(`span`,{className:`text-right`,children:s(`3epYU3`,`Files`)}),(0,R.jsx)(`span`,{className:`text-right`,children:s(`vlTt2`,`Blocks`)}),Cn?vn.map(e=>(0,R.jsx)(`span`,{className:`text-center normal-case`,translate:`no`,children:yn?e.split(`-`)[0]:e},e)):(0,R.jsx)(`span`,{children:Xt?``:s(`3pa0Do`,`Coverage`)}),(0,R.jsx)(`span`,{})]}),$.map(({coll:e,ci:t},n)=>{let i=tt.has(t),o=Ze.has(t),c=tn(e),u=rt(e)?e.path||s(`3epYU3`,`Files`):e.name||s(`2FTnrQ`,`Untitled collection`),d=Kt.get(bt(e));return(0,R.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,R.jsxs)(`div`,{className:`grid items-center gap-x-3 px-3 py-2.5 hover:bg-accent/20`,style:{gridTemplateColumns:Mn},children:[on&&(0,R.jsx)(de,{checked:N.has(t),onCheckedChange:()=>un(t),"aria-label":s(`3mI5eL`,`Select {collection}`,{collection:u}),className:`shrink-0`}),(0,R.jsxs)(`button`,{onClick:()=>Qt($e,t),className:`flex min-w-0 items-center gap-2 text-left`,"aria-label":o?s(`36n48F`,`Collapse`):s(`2HBGFu`,`Expand`),"aria-expanded":o,children:[o?(0,R.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}):(0,R.jsx)(S,{size:13,className:`shrink-0 text-muted-foreground`}),(0,R.jsx)(ae,{size:13,className:`shrink-0`,style:{color:Et(n)}}),(0,R.jsx)(`span`,{className:`truncate text-sm font-medium`,title:u,children:u})]}),(0,R.jsx)(`span`,{className:`text-right text-xs tabular-nums text-muted-foreground`,children:c.length}),(0,R.jsx)(`span`,{className:`text-right text-xs tabular-nums`,children:Xt&&d?d.blockCount:`—`}),Cn?vn.map(t=>(0,R.jsx)(L.Fragment,{children:On(e,t)},t)):(0,R.jsx)(`span`,{}),(0,R.jsxs)(`span`,{className:`flex items-center justify-end gap-1`,children:[st&&a&&c.length>0&&U.length>0&&(U.length===1?(0,R.jsx)(T,{variant:`ghost`,size:`icon-sm`,disabled:te,onClick:()=>a(U[0],r[U[0]],{scopePaths:c.map(e=>e.path),scopeLabel:u}),"aria-label":s(`WT7Mg`,`Run {flow} on {collection}`,{flow:U[0],collection:u}),children:(0,R.jsx)(h,{size:13})}):(0,R.jsxs)(j,{children:[(0,R.jsx)(ye,{asChild:!0,children:(0,R.jsx)(T,{variant:`ghost`,size:`icon-sm`,disabled:te,"aria-label":s(`37dEBh`,`Run a flow on {collection}`,{collection:u}),children:(0,R.jsx)(h,{size:13})})}),(0,R.jsxs)(he,{align:`end`,children:[(0,R.jsx)(me,{children:s(`3r1PYB`,`Run on {collection}`,{collection:u})}),U.map(e=>(0,R.jsxs)(Ie,{onClick:()=>a(e,r[e],{scopePaths:c.map(e=>e.path),scopeLabel:u}),children:[(0,R.jsx)(h,{size:12}),e]},e))]})]})),(0,R.jsx)(T,{variant:i?`secondary`:`ghost`,size:`icon-sm`,onClick:()=>{$t(t),Qt(nt,t)},"aria-label":i?s(`1vDkj2`,`Done editing`):s(`h5zbs`,`Edit collection`),children:i?(0,R.jsx)(m,{size:13}):(0,R.jsx)(l,{size:13})}),(0,R.jsx)(D,{onDelete:()=>Pt(t),mode:`icon`})]})]}),o&&(0,R.jsxs)(`div`,{className:`border-t border-border bg-muted/10`,children:[i&&(0,R.jsxs)(`div`,{className:`animate-in slide-in-from-top-2 fade-in border-b-2 border-primary/40 bg-muted/40 p-4 shadow-inner duration-200`,children:[(0,R.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary`,children:[(0,R.jsx)(l,{size:11}),s(`h5zbs`,`Edit collection`)]}),nn(e,t)]}),c.length>0?rn(c):(0,R.jsxs)(`p`,{className:`px-4 py-6 text-center text-xs text-muted-foreground`,children:[s(`1XxbaH`,`No files matched this collection's patterns.`),!i&&(0,R.jsxs)(R.Fragment,{children:[` `,(0,R.jsx)(`button`,{onClick:()=>{$t(t),nt(e=>new Set(e).add(t))},className:`text-primary hover:underline`,children:s(`2Uq3Xf`,`Edit patterns`)})]})]})]})]},t)}),!Ht.length&&Vt.length>0&&(0,R.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,R.jsxs)(`button`,{onClick:()=>lt(e=>!e),className:`flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-accent/20`,"aria-label":F?s(`2HBGFu`,`Expand`):s(`36n48F`,`Collapse`),children:[F?(0,R.jsx)(S,{size:13,className:`shrink-0 text-muted-foreground`}):(0,R.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}),(0,R.jsx)(oe,{size:13,className:`shrink-0 text-muted-foreground`}),(0,R.jsx)(`span`,{className:`text-sm font-medium`,children:s(`41kjwU`,`Other files`)}),(0,R.jsx)(E,{variant:`secondary`,className:`text-[10px] font-normal`,children:s(`3YDabm`,`{count} files`,{count:Vt.length})})]}),!F&&(0,R.jsx)(`div`,{className:`border-t border-border bg-muted/10`,children:an(Vt)})]})]})}),(0,R.jsx)(Qe,{tabID:n,filePath:Tt?.path??null,filename:Tt?.relative??``,onClose:()=>z(null)}),(0,R.jsx)(Qe,{tabID:n,filePath:B?.path??null,filename:B?`${B.relative}!${B.entry}`:``,entryPath:B?.entry??null,onClose:()=>V(null)})]})}var L,R,Tt,Et,Dt,z,Ot,kt=t((()=>{a(),L=e(n(),1),Me(),C(),Oe(),N(),Be(),lt(),it(),Ze(),ht(),je(),He(),Ke(),st(),We(),Je(),$e(),R=r(),Tt=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],Et=e=>Tt[e%Tt.length],Dt=e=>`color-mix(in oklch, var(--primary) ${e}%, var(--muted))`,z={shippable:`oklch(0.62 0.17 150)`,review:`oklch(0.72 0.15 80)`,translated:`var(--primary)`,none:`var(--muted-foreground)`},Ot=5,wt.__docgenInfo={description:`CollectionsPanel is the collection-centric spine of the project home: one card
per content collection carrying its own stats (file count, block count,
coverage bar), expandable to its matched-file table and editable inline. It
folds together what used to be the standalone Content page and the Home
page's read-only Content Overview (issue #1068) — collections, files,
patterns, languages, coverage and the unmatched "Other files" all live here.`,methods:[],displayName:`CollectionsPanel`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``},flows:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`FlowSpec`}],raw:`Record<string, FlowSpec>`},description:`The project's flows, offered as a per-collection "Run" menu on each card.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:`Run a flow scoped to a single collection's files.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope — wired
 to the ship-gate cells and the timeline tags.`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`Pre-loaded formats for Storybook — skips api.listFormats().`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — skips api.getBasePath().`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`}}}}));function At({project:e,displayName:t,tabID:n,onUpdate:r,onRunFlow:a,onNavigate:l,onOpenReview:u,pluginsResolved:d,pluginIssues:m,status:h,convergence:g,plan:y,onBringUpToDate:b,onResetSample:x,sampleInfo:S,formatList:te,basePath:ae}){let{active:C}=Ue(),[oe,se]=(0,B.useState)(null),[ce,le]=(0,B.useState)(S??null),[w,ue]=(0,B.useState)(!1);(0,B.useEffect)(()=>{!n||S||M.getSampleInfo(n).then(e=>{e&&le(e)}).catch(()=>{})},[n,S]);let de=(0,B.useCallback)(()=>{ue(!0),n&&M.acknowledgeSampleRevision(n)},[n]),D=(0,B.useCallback)(e=>{se(e),M.installPlugin(e)},[]),k=e.defaults??{},fe=e.plugins??{},A=Object.keys(e.flows??{}).length,j=C?.languages??[];return(0,V.jsxs)(`div`,{className:`p-6`,children:[(0,V.jsxs)(`div`,{className:`mb-6`,children:[(0,V.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,V.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,V.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,V.jsx)(c,{size:14}),k.source_language?(0,V.jsx)(O,{locale:String(k.source_language)}):(0,V.jsx)(`span`,{children:o(`No source`)}),(0,V.jsx)(`span`,{children:`→`}),k.target_languages?.length?k.target_languages.map(e=>(0,V.jsx)(O,{locale:String(e),muted:j.length>0&&!j.includes(String(e))},String(e))):(0,V.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,V.jsx)(c,{size:14}),"=m2":k.source_language?(0,V.jsx)(O,{locale:String(k.source_language)}):(0,V.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,V.jsx)(`span`,{children:`→`}),"=m4":k.target_languages?.length?k.target_languages.map(e=>(0,V.jsx)(O,{locale:String(e),muted:j.length>0&&!j.includes(String(e))},String(e))):(0,V.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,V.jsx)(E,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(fe).length>0&&Object.entries(fe).map(([e,t])=>(0,V.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,V.jsx)(_,{size:10}),(0,V.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,V.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),d===!1&&m&&m.length>0&&(0,V.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,V.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,V.jsx)(p,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,V.jsxs)(`div`,{className:`flex-1`,children:[(0,V.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,V.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,V.jsx)(`ul`,{className:`mt-2 space-y-1`,children:m.map(e=>(0,V.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,V.jsx)(E,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,V.jsxs)(T,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>D(e.plugin),disabled:oe===e.plugin,children:[oe===e.plugin?(0,V.jsx)(ne,{size:11,className:`animate-spin`}):(0,V.jsx)(_,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,V.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,V.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,V.jsx)(T,{size:`sm`,variant:`outline`,onClick:()=>l(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,V.jsx)(ee,{size:12})})}),(0,V.jsx)(T,{size:`sm`,variant:`outline`,onClick:()=>l(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,V.jsx)(_,{size:12})})})]})]})]})}),ce?.upgrade_available&&!w&&(0,V.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,V.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,V.jsx)(re,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,V.jsxs)(`div`,{className:`flex-1`,children:[(0,V.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,V.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,V.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,V.jsxs)(T,{size:`sm`,onClick:()=>x?.(),children:[(0,V.jsx)(re,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,V.jsx)(T,{size:`sm`,variant:`outline`,onClick:de,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),n&&(0,V.jsx)(Ye,{tabID:n,onBringUpToDate:b,convergence:g,plan:y}),(0,V.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,V.jsx)(Fe,{icon:(0,V.jsx)(f,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>l(`checks`)}),(0,V.jsx)(Fe,{icon:(0,V.jsx)(v,{size:16}),title:s(`25KjwG`,`Flows`),description:A>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:A}):s(`3ahfLk`,`Build your first flow`),onClick:()=>l(`flows`)}),(0,V.jsx)(Fe,{icon:(0,V.jsx)(ie,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>l(`tools`)}),(0,V.jsx)(Fe,{icon:(0,V.jsx)(ee,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>l(`project-settings`)})]}),n&&(0,V.jsx)(wt,{project:e,onUpdate:r??(()=>{}),tabID:n,flows:e.flows,onRunFlow:a,onOpenReview:u,formatList:te,basePath:ae,status:h,convergence:g}),A===0&&(0,V.jsx)(pe,{icon:(0,V.jsx)(v,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,V.jsx)(T,{variant:`link`,size:`sm`,onClick:()=>l(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var B,V,H=t((()=>{a(),B=e(n(),1),C(),Oe(),Be(),We(),kt(),Xe(),V=r(),At.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onUpdate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:`Persist project edits made on the merged collection surface.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope?: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope.`},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`},plan:{required:!1,tsType:{name:`ConvergePlan`},description:`Pre-loaded pre-flight plan for Storybook/tests — skips api.getConvergePlan().`},onBringUpToDate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Launch the convergence run (Bring up to date → runner passes view).`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`import("../types/api").FormatInfo[]`},description:`Pre-loaded formats for Storybook — forwarded to CollectionsPanel.`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — forwarded to CollectionsPanel.`}}}})),U,W,G,K,q,J,Y,X,Z,Q,jt;t((()=>{H(),{fn:U}=__STORYBOOK_MODULE_TEST__,W={title:`Pages/HomePage`,component:At,tags:[`autodocs`],args:{tabID:`tab-1`,onUpdate:U(),onRunFlow:U(),onNavigate:U(),onResetSample:U(),basePath:`/Users/dev/projects/acme`,formatList:[{name:`json`,display_name:`JSON`,extensions:[`.json`],has_reader:!0,has_writer:!0,has_schema:!1},{name:`markdown`,display_name:`Markdown`,extensions:[`.md`],has_reader:!0,has_writer:!0,has_schema:!1}]}},G={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{name:`Website`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]},{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},K={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},q={args:{...G.args,displayName:`KapiMart`,project:{version:`v1`,name:`KapiMart`,defaults:{source_language:`en-US`,target_languages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},content:[{name:`Website`,base:`web/en-US`,items:[{path:`web/en-US/**/*.md`,target:`web/{lang}`,format:{name:`markdown`}}]},{name:`Online Store`,base:`src/en-US`,items:[{path:`src/en-US/*.{json,yaml,properties,html}`,target:`src/{lang}`}]},{name:`Contracts`,base:`legal/en-US`,items:[{path:`legal/en-US/*.{docx,xlsx}`,target:`legal/{lang}`}]},{name:`Templates`,base:`marketing/en-US`,items:[{path:`marketing/en-US/*.{pptx,docx}`,target:`marketing/{lang}`}]}],flows:{"pseudo-translate":{steps:[{tool:`pseudo-translate`}]},translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/kapimart/kapimart.kapi`,projectName:`KapiMart`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"de-DE":245,"fr-FR":191,"ja-JP":110,"nb-NO":100,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Online Store`,blockCount:349,coverage:{"de-DE":349,"fr-FR":349,"ja-JP":175,"nb-NO":175,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Contracts`,blockCount:80,coverage:{"de-DE":80,"fr-FR":0,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Templates`,blockCount:25,coverage:{"de-DE":25,"fr-FR":12,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]}]},convergence:{project:`KapiMart`,review:[],locales:[{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Online Store`,locale:`de-DE`,total:349,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Contracts`,locale:`de-DE`,total:80,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Templates`,locale:`de-DE`,total:25,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:78,reviewed:30},gated:!0,shippable:!1},{collection:`Online Store`,locale:`fr-FR`,total:349,pct:{translated:100,reviewed:60},gated:!0,shippable:!1},{collection:`Contracts`,locale:`fr-FR`,total:80,pct:{},gated:!0,shippable:!1},{collection:`Templates`,locale:`fr-FR`,total:25,pct:{translated:48},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`Online Store`,locale:`ja-JP`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`nb-NO`,total:245,pct:{translated:41},gated:!0,shippable:!1},{collection:`Online Store`,locale:`nb-NO`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`ar-SA`,total:245,pct:{},gated:!0,shippable:!1}]}}},J={args:{...G.args,displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{name:`Website`,items:[{path:`docs/**/*.md`,format:{name:`markdown`}}]},{name:`UI Strings`,items:[{path:`src/i18n/en/*.json`}]},{name:`Emails`,items:[{path:`emails/**/*.html`}]}],flows:{translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"fr-FR":245,"de-DE":191,"ja-JP":110},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`UI Strings`,blockCount:88,coverage:{"fr-FR":88,"de-DE":40,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`Emails`,blockCount:32,coverage:{"fr-FR":16,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},Y={args:{...J.args,convergence:{project:`Acme App Localization`,review:[],locales:[{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:78,reviewed:40},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`fr-FR`,total:88,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`UI Strings`,locale:`de-DE`,total:88,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`ja-JP`,total:88,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`fr-FR`,total:32,pct:{translated:50},gated:!0,shippable:!1},{collection:`Emails`,locale:`de-DE`,total:32,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`ja-JP`,total:32,pct:{},gated:!0,shippable:!1}]}}},X={args:{...G.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},Z={args:{...q.args,status:{...q.args.status,stale:!0}}},Q={args:{...G.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
        name: "Website",
        items: [{
          path: "docs/en/**/*.md",
          format: {
            name: "markdown"
          }
        }]
      }, {
        path: "src/i18n/en/*.json",
        format: {
          name: "json"
        },
        target: "src/i18n/{lang}/*.json"
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    displayName: "KapiMart",
    project: {
      version: "v1",
      name: "KapiMart",
      defaults: {
        source_language: "en-US",
        target_languages: ["de-DE", "fr-FR", "ja-JP", "nb-NO", "ar-SA"]
      },
      content: [{
        name: "Website",
        base: "web/en-US",
        items: [{
          path: "web/en-US/**/*.md",
          target: "web/{lang}",
          format: {
            name: "markdown"
          }
        }]
      }, {
        name: "Online Store",
        base: "src/en-US",
        items: [{
          path: "src/en-US/*.{json,yaml,properties,html}",
          target: "src/{lang}"
        }]
      }, {
        name: "Contracts",
        base: "legal/en-US",
        items: [{
          path: "legal/en-US/*.{docx,xlsx}",
          target: "legal/{lang}"
        }]
      }, {
        name: "Templates",
        base: "marketing/en-US",
        items: [{
          path: "marketing/en-US/*.{pptx,docx}",
          target: "marketing/{lang}"
        }]
      }],
      flows: {
        "pseudo-translate": {
          steps: [{
            tool: "pseudo-translate"
          }]
        },
        translate: {
          steps: [{
            tool: "translate"
          }]
        }
      }
    },
    status: {
      projectPath: "/Users/dev/projects/kapimart/kapimart.kapi",
      projectName: "KapiMart",
      hasData: true,
      collections: [{
        name: "Website",
        blockCount: 245,
        coverage: {
          "de-DE": 245,
          "fr-FR": 191,
          "ja-JP": 110,
          "nb-NO": 100,
          "ar-SA": 0
        },
        targetLanguages: ["de-DE", "fr-FR", "ja-JP", "nb-NO", "ar-SA"]
      }, {
        name: "Online Store",
        blockCount: 349,
        coverage: {
          "de-DE": 349,
          "fr-FR": 349,
          "ja-JP": 175,
          "nb-NO": 175,
          "ar-SA": 0
        },
        targetLanguages: ["de-DE", "fr-FR", "ja-JP", "nb-NO", "ar-SA"]
      }, {
        name: "Contracts",
        blockCount: 80,
        coverage: {
          "de-DE": 80,
          "fr-FR": 0,
          "ja-JP": 0,
          "nb-NO": 0,
          "ar-SA": 0
        },
        targetLanguages: ["de-DE", "fr-FR", "ja-JP", "nb-NO", "ar-SA"]
      }, {
        name: "Templates",
        blockCount: 25,
        coverage: {
          "de-DE": 25,
          "fr-FR": 12,
          "ja-JP": 0,
          "nb-NO": 0,
          "ar-SA": 0
        },
        targetLanguages: ["de-DE", "fr-FR", "ja-JP", "nb-NO", "ar-SA"]
      }]
    },
    convergence: {
      project: "KapiMart",
      review: [],
      locales: [
      // de-DE: fully shippable across every collection.
      {
        collection: "Website",
        locale: "de-DE",
        total: 245,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Online Store",
        locale: "de-DE",
        total: 349,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Contracts",
        locale: "de-DE",
        total: 80,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Templates",
        locale: "de-DE",
        total: 25,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      },
      // fr-FR: high coverage, partly reviewed → in review.
      {
        collection: "Website",
        locale: "fr-FR",
        total: 245,
        pct: {
          translated: 78,
          reviewed: 30
        },
        gated: true,
        shippable: false
      }, {
        collection: "Online Store",
        locale: "fr-FR",
        total: 349,
        pct: {
          translated: 100,
          reviewed: 60
        },
        gated: true,
        shippable: false
      }, {
        collection: "Contracts",
        locale: "fr-FR",
        total: 80,
        pct: {},
        gated: true,
        shippable: false
      }, {
        collection: "Templates",
        locale: "fr-FR",
        total: 25,
        pct: {
          translated: 48
        },
        gated: true,
        shippable: false
      },
      // ja-JP / nb-NO: translated only, no review yet.
      {
        collection: "Website",
        locale: "ja-JP",
        total: 245,
        pct: {
          translated: 45
        },
        gated: true,
        shippable: false
      }, {
        collection: "Online Store",
        locale: "ja-JP",
        total: 349,
        pct: {
          translated: 50
        },
        gated: true,
        shippable: false
      }, {
        collection: "Website",
        locale: "nb-NO",
        total: 245,
        pct: {
          translated: 41
        },
        gated: true,
        shippable: false
      }, {
        collection: "Online Store",
        locale: "nb-NO",
        total: 349,
        pct: {
          translated: 50
        },
        gated: true,
        shippable: false
      },
      // ar-SA: not started.
      {
        collection: "Website",
        locale: "ar-SA",
        total: 245,
        pct: {},
        gated: true,
        shippable: false
      }]
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`The collection-centric spine with extracted block counts + coverage — the
 merged surface from issue #1068 (Option A).`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    displayName: "Acme App Localization",
    project: {
      version: "v1",
      name: "Acme App Localization",
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR", "de-DE", "ja-JP"]
      },
      content: [{
        name: "Website",
        items: [{
          path: "docs/**/*.md",
          format: {
            name: "markdown"
          }
        }]
      }, {
        name: "UI Strings",
        items: [{
          path: "src/i18n/en/*.json"
        }]
      }, {
        name: "Emails",
        items: [{
          path: "emails/**/*.html"
        }]
      }],
      flows: {
        translate: {
          steps: [{
            tool: "translate"
          }]
        }
      }
    },
    status: {
      projectPath: "/Users/dev/projects/acme/acme.kapi",
      projectName: "Acme App Localization",
      hasData: true,
      collections: [{
        name: "Website",
        blockCount: 245,
        coverage: {
          "fr-FR": 245,
          "de-DE": 191,
          "ja-JP": 110
        },
        targetLanguages: ["fr-FR", "de-DE", "ja-JP"]
      }, {
        name: "UI Strings",
        blockCount: 88,
        coverage: {
          "fr-FR": 88,
          "de-DE": 40,
          "ja-JP": 0
        },
        targetLanguages: ["fr-FR", "de-DE", "ja-JP"]
      }, {
        name: "Emails",
        blockCount: 32,
        coverage: {
          "fr-FR": 16,
          "de-DE": 0,
          "ja-JP": 0
        },
        targetLanguages: ["fr-FR", "de-DE", "ja-JP"]
      }]
    }
  }
}`,...J.parameters?.docs?.source},description:{story:`Three target languages — the per-language bar columns (Option A).`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...ThreeLanguages.args,
    convergence: {
      project: "Acme App Localization",
      review: [],
      locales: [{
        collection: "Website",
        locale: "fr-FR",
        total: 245,
        pct: {
          translated: 100,
          reviewed: 100,
          "signed-off": 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Website",
        locale: "de-DE",
        total: 245,
        pct: {
          translated: 78,
          reviewed: 40
        },
        gated: true,
        shippable: false
      }, {
        collection: "Website",
        locale: "ja-JP",
        total: 245,
        pct: {
          translated: 45
        },
        gated: true,
        shippable: false
      }, {
        collection: "UI Strings",
        locale: "fr-FR",
        total: 88,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "UI Strings",
        locale: "de-DE",
        total: 88,
        pct: {
          translated: 45
        },
        gated: true,
        shippable: false
      }, {
        collection: "UI Strings",
        locale: "ja-JP",
        total: 88,
        pct: {},
        gated: true,
        shippable: false
      }, {
        collection: "Emails",
        locale: "fr-FR",
        total: 32,
        pct: {
          translated: 50
        },
        gated: true,
        shippable: false
      }, {
        collection: "Emails",
        locale: "de-DE",
        total: 32,
        pct: {},
        gated: true,
        shippable: false
      }, {
        collection: "Emails",
        locale: "ja-JP",
        total: 32,
        pct: {},
        gated: true,
        shippable: false
      }]
    }
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: {
      projectPath: "/Users/dev/projects/acme/acme.kapi",
      projectName: "Acme App Localization",
      hasData: false,
      collections: []
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Project configured but never extracted — the strip prompts a run.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCoverage.args,
    status: {
      ...WithCoverage.args!.status!,
      stale: true
    }
  }
}`,...Z.parameters?.docs?.source},description:{story:`Counts produced by an older kapi — the stale banner offers a re-extract.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...Q.parameters?.docs?.description}}},jt=[`Default`,`NoFlows`,`WithCoverage`,`ThreeLanguages`,`WithShipGates`,`NeverExtracted`,`StaleCounts`,`SampleUpgradeAvailable`]}))();export{G as Default,X as NeverExtracted,K as NoFlows,Q as SampleUpgradeAvailable,Z as StaleCounts,J as ThreeLanguages,q as WithCoverage,Y as WithShipGates,jt as __namedExportsOrder,W as default};