import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Et as l,Ii as u,It as d,K as f,Ki as p,Si as m,St as h,bi as g,bt as _,c as v,et as ee,fa as y,g as b,ga as x,gi as S,i as te,ia as ne,mt as re,o as ie,oa as ae,t as C,ur as oe,vi as se,vr as ce,vt as le}from"./lucide-react-DTJloxAJ.js";import{t as w}from"./label-C1tohmzx.js";import{t as T}from"./button-D6zYGAvL.js";import{t as ue}from"./card-CHo_fh0q.js";import{t as de}from"./checkbox-EB20m_E8.js";import{t as E}from"./badge-B925V-__.js";import{t as D}from"./confirm-delete-button-Dfm-Kmqr.js";import{t as O}from"./LocalePill-C8a-9VUF.js";import{$ as k,At as fe,Bt as A,G as pe,Gn as j,Gt as me,Jt as he,Kt as ge,Lt as _e,Mt as ve,Nt as ye,Qt as be,Rn as xe,Rt as Se,Vt as Ce,_n as we,an as Te,et as Ee,ft as De,hn as Oe,i as ke,jt as Ae,kt as je,n as Me,nn as Ne,nt as Pe,o as Fe,ot as Ie,qt as Le,r as Re,ut as ze,zt as Be}from"./iframe-CWpM2BHX.js";import{r as Ve,t as M}from"./useApi-D5eVtPju.js";import{n as He,t as Ue}from"./useShortenHome-Ceyq4nUO.js";import{n as We,t as Ge}from"./ActiveFilterContext-CXiywYDk.js";import{n as Ke,t as qe}from"./useWailsEvent-tO44X_hi.js";import{n as Je,t as Ye}from"./JobFeedContext-Brq47ZSj.js";import{n as Xe,r as Ze}from"./ConvergenceHero-C-o2pSSE.js";import{n as Qe,t as $e}from"./FilePreview-XgcNpPju.js";import{n as et,t as tt}from"./filter-BQ0GIjVn.js";import{n as nt,t as rt}from"./useSchemaFormHost-CgAX0FW0.js";import{n as N,r as it}from"./api-LEFL5VCf.js";import{n as at,t as ot}from"./TranslationStatusPanel-BE4y4Elm.js";import{n as st,t as ct}from"./useLocales-CloVKngF.js";function lt({open:e,onOpenChange:t,title:n,description:r,formats:i,allFormats:a,allowAdd:o=!1,filterExtension:c,values:l,onChange:u,scopeNote:d}){let{showError:f}=Re(),p=nt(),[m,h]=(0,P.useState)([]),[g,_]=(0,P.useState)(!1),v=(0,P.useMemo)(()=>{let e=new Set,t=[];for(let n of[...i,...m])n&&!e.has(n)&&(e.add(n),t.push(n));return t},[i,m]),ee=o||i.length>1,[y,b]=(0,P.useState)(ee?null:i[0]??null);(0,P.useEffect)(()=>{e&&(h([]),_(!1),b(ee?null:i[0]??null))},[e]);let x=y??``,re=y===null,[ie,ae]=(0,P.useState)({}),[C,oe]=(0,P.useState)({}),[ce,ue]=(0,P.useState)(!1);(0,P.useEffect)(()=>{!e||!x||ie[x]!==void 0||(ue(!0),Promise.all([M.getFormatSchema(x),M.listFormatPresets(x)]).then(([e,t])=>{ae(t=>({...t,[x]:e??null})),oe(e=>({...e,[x]:t??[]}))}).catch(e=>{f(`Failed to load format schema`,e),ae(e=>({...e,[x]:null}))}).finally(()=>ue(!1)))},[e,x,ie,f]);let de=(0,P.useMemo)(()=>{let e=c?.toLowerCase();return a.filter(t=>v.includes(t.name)?!1:e?(t.extensions??[]).some(t=>t.toLowerCase()===e):!0)},[a,v,c]),E=(0,P.useCallback)(e=>{e&&(h(t=>t.includes(e)?t:[...t,e]),_(!1),b(e))},[]),D=l[x]??{},O=ie[x],k=C[x]??[],pe=(0,P.useMemo)(()=>{if(!O)return;let e={};for(let[t,n]of Object.entries(O.properties??{}))n?.default!==void 0&&(e[t]=n.default);let t=k.find(e=>e.name===D.preset);return t?.config&&Object.assign(e,t.config),e},[O,k,D.preset]);function j(e){return Object.keys(l[e]?.config??{}).length}return(0,F.jsx)(je,{open:e,onOpenChange:t,children:(0,F.jsxs)(fe,{side:`right`,className:`flex w-full flex-col gap-0 p-0 sm:max-w-lg md:max-w-xl`,children:[(0,F.jsxs)(ve,{className:`border-b border-border`,children:[(0,F.jsx)(ye,{children:n}),r&&(0,F.jsx)(Ae,{children:r})]}),re?(0,F.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-2 overflow-auto p-4`,children:[(0,F.jsx)(w,{className:`text-xs text-muted-foreground`,children:s(`lAy6j`,`Formats`)}),v.map(e=>(0,F.jsxs)(`button`,{onClick:()=>b(e),className:`flex w-full items-center justify-between rounded-md border border-border px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/50`,children:[(0,F.jsx)(`span`,{className:`font-medium`,translate:`no`,children:e}),(0,F.jsxs)(`span`,{className:`flex items-center gap-2`,children:[j(e)>0&&(0,F.jsx)(`span`,{className:`rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary`,children:s(`1v4Dt5`,`{count} set`,{count:j(e)})}),(0,F.jsx)(S,{size:15,className:`text-muted-foreground`})]})]},e)),v.length===0&&!g&&(0,F.jsx)(`p`,{className:`py-2 text-xs text-muted-foreground`,children:s(`4E8VTn`,`No formats matched yet. Add one to configure it.`)}),o&&(g?(0,F.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,F.jsx)(Pe,{value:``,onChange:E,formats:de,placeholder:s(`2aYDzk`,`Pick a format`),className:`flex-1`}),(0,F.jsx)(T,{variant:`ghost`,size:`sm`,onClick:()=>_(!1),"aria-label":s(`AQznM`,`Cancel`),children:(0,F.jsx)(te,{size:14})})]}):(0,F.jsxs)(T,{variant:`outline`,size:`sm`,className:`w-full justify-start text-muted-foreground`,onClick:()=>_(!0),children:[(0,F.jsx)(le,{size:14}),s(`1tDf0l`,`Add format`)]}))]}):(0,F.jsxs)(`div`,{className:`min-h-0 flex-1 overflow-auto p-4`,children:[ee&&(0,F.jsxs)(`button`,{onClick:()=>b(null),className:`mb-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground`,children:[(0,F.jsx)(se,{size:14}),s(`lAy6j`,`Formats`)]}),ce||O===void 0?(0,F.jsx)(`div`,{className:`flex h-40 items-center justify-center text-muted-foreground`,children:(0,F.jsx)(ne,{className:`animate-spin`,size:16})}):O===null?(0,F.jsxs)(`div`,{children:[(0,F.jsx)(`h3`,{className:`text-sm font-semibold text-foreground`,translate:`no`,children:x}),(0,F.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:s(`2uJqdn`,`No configurable options for this format.`)})]}):(0,F.jsxs)(`div`,{className:`space-y-3`,children:[k.length>0&&(0,F.jsxs)(`div`,{children:[(0,F.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3nOg4F`,`Preset`)}),(0,F.jsxs)(_e,{value:D.preset||`__default__`,onValueChange:e=>u(x,{...D,preset:e===`__default__`?void 0:e}),children:[(0,F.jsx)(A,{className:`h-8 text-xs`,children:(0,F.jsx)(Ce,{})}),(0,F.jsxs)(Se,{children:[(0,F.jsx)(Be,{value:`__default__`,children:s(`1Hb69c`,`Default`)}),k.map(e=>(0,F.jsxs)(Be,{value:e.name,translate:`no`,children:[e.name,e.description?` — ${e.description}`:``]},e.name))]})]})]}),(0,F.jsx)(Fe,{schema:O,values:D.config??{},presetValues:pe,host:p,onChange:e=>u(x,{...D,config:Object.keys(e).length>0?e:void 0})})]})]}),(0,F.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border p-4`,children:[d?(0,F.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d}):(0,F.jsx)(`span`,{}),(0,F.jsx)(T,{size:`sm`,onClick:()=>t(!1),children:s(`2m1wue`,`Done`)})]})]})})}var P,F,ut=t((()=>{a(),P=e(n(),1),C(),ke(),Ve(),rt(),Me(),F=r(),lt.__docgenInfo={description:`Schema-driven format configuration in a right-side drawer, laid out as a
master→detail flow so each level gets the full drawer width:

  - **List** (wildcard / multi-format only): the formats to configure, with
    config-count badges and an "add format" control. Tapping one opens its
    detail.
  - **Detail**: the format's option form (the framework \`SchemaForm\`, whose own
    header names the format) plus its preset, with a back affordance.

A single-format item skips the list and opens straight on its detail.`,methods:[],displayName:`FormatConfigDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},formats:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Formats shown initially in the list (e.g. the formats matched in the input files).`},allFormats:{required:!0,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`All registered formats, for the "add format" picker.`},allowAdd:{required:!1,tsType:{name:`boolean`},description:`Allow configuring formats beyond the initial list (wildcard items).`,defaultValue:{value:`false`,computed:!1}},filterExtension:{required:!1,tsType:{name:`string`},description:`When set, the add-picker is filtered to formats claiming this extension (e.g. ".json").`},values:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`FormatConfigValue`}],raw:`Record<string, FormatConfigValue>`},description:`Current config/preset keyed by format name.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(format: string, next: FormatConfigValue) => void`,signature:{arguments:[{type:{name:`string`},name:`format`},{type:{name:`FormatConfigValue`},name:`next`}],return:{name:`void`}}},description:`Persist a change for one format.`},scopeNote:{required:!1,tsType:{name:`string`},description:`Footer note clarifying where the config is stored (item vs project-wide).`}}}}));function dt(e){let t=e.toLowerCase();return ht.some(e=>t.endsWith(e))}function ft(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function pt({archivePath:e,onSelect:t,entries:n}){let[r,a]=(0,I.useState)(n??null),[o,c]=(0,I.useState)(!1),[l,u]=(0,I.useState)(null);if((0,I.useEffect)(()=>{if(n){a(n);return}let t=!1;return c(!0),u(null),M.listArchiveEntries(e).then(e=>{if(!t){if(e===null){u(`Archive listing is unavailable in this environment.`);return}a(e)}}).catch(e=>{t||u(e instanceof Error?e.message:String(e))}).finally(()=>{t||c(!1)}),()=>{t=!0}},[e,n]),o)return(0,L.jsx)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-muted-foreground`,children:i(`2EU0eU`,`{=m0} Listing entries…`,{"=m0":(0,L.jsx)(ne,{className:`size-3 animate-spin`})})});if(l)return(0,L.jsxs)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-destructive`,children:[(0,L.jsx)(x,{className:`size-3`}),l]});if(!r||r.length===0)return(0,L.jsx)(`div`,{className:`py-2 pl-8 text-xs text-muted-foreground`,children:s(`3BHBSi`,`No entries.`)});let d=r.slice(0,mt);return(0,L.jsxs)(`div`,{className:`border-l border-border/60 pl-3`,children:[(0,L.jsx)(`ul`,{className:`max-h-72 overflow-y-auto`,"aria-label":s(`3EtDs0`,`Archive entries`),"data-slot":`archive-entries`,children:d.map(e=>(0,L.jsx)(`li`,{children:(0,L.jsxs)(`button`,{type:`button`,disabled:!e.format,onClick:e.format?()=>t(e.name):void 0,className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs hover:bg-accent disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`,title:e.format?`Preview ${e.name}`:`No reader for this file type`,children:[(0,L.jsx)(ce,{className:`size-3 shrink-0 text-muted-foreground`}),(0,L.jsx)(`span`,{className:`truncate font-mono`,translate:`no`,children:e.name}),(0,L.jsx)(`span`,{className:`ml-auto shrink-0 text-muted-foreground`,children:ft(e.size)})]})},e.name))}),(0,L.jsx)(j,{shown:d.length,total:r.length,noun:`entries`,hint:s(`3oCvWm`,`Extract the archive to browse all of its entries.`),className:`border-t-0`})]})}var I,L,mt,ht,gt=t((()=>{a(),I=e(n(),1),C(),ke(),Ve(),L=r(),mt=400,ht=[`.zip`,`.tar`,`.tgz`,`.tar.gz`],pt.__docgenInfo={description:``,methods:[],displayName:`ArchiveEntries`,props:{archivePath:{required:!0,tsType:{name:`string`},description:`Absolute path of the archive container.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(entry: string) => void`,signature:{arguments:[{type:{name:`string`},name:`entry`}],return:{name:`void`}}},description:`Called with the inner entry path when the user picks an entry to preview.`},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`ArchiveEntry`}],raw:`ArchiveEntry[]`},description:`Pre-loaded entries for Storybook/tests, skipping the backend call.`}}}}));function _t(e){let t=e?.pct?.translated??0;return!e||t===0?{key:`none`,label:`—`,short:`—`,color:`var(--muted-foreground)`,pct:0}:e.shippable?{key:`shippable`,label:`Shippable`,short:`Ship`,color:`oklch(0.62 0.17 150)`,pct:t}:(e.pct?.reviewed??0)>0?{key:`review`,label:`In review`,short:`Review`,color:`oklch(0.72 0.15 80)`,pct:t}:{key:`draft`,label:`Draft`,short:`Draft`,color:`var(--primary)`,pct:t}}function vt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function yt(e){return e?.name??``}function bt(e){let t=e.split(`/`).pop()??e,n=/\*\.([A-Za-z0-9]+)$/.exec(t);return n?`.`+n[1].toLowerCase():void 0}function xt(e){return it(e)?`(unnamed)`:e.name&&e.name.length>0?e.name:`(unnamed)`}function St(e){let t=e[0];return t?t.relative.split(`/`).map(e=>e===t.lang?`{lang}`:e).join(`/`):``}function Ct({label:e,pct:t,color:n}){return(0,z.jsx)(`span`,{className:`flex min-w-40 flex-1 items-center gap-2`,children:i(`26PYWB`,`{=m0} {label} {/=m0} {=m2} {=m3} {/=m2} {=m4} {pct}% {/=m4}`,{"=m0":(0,z.jsx)(`span`,{className:`w-14 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),"=m2":(0,z.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}})}),"=m3":(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}}),"=m4":(0,z.jsxs)(`span`,{className:`w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[t,`%`]})},{label:e,pct:t})})}function wt({items:e,onSelect:t}){let n=(0,R.useRef)(null),[r,a]=(0,R.useState)(0),[c,l]=(0,R.useState)(null);(0,R.useEffect)(()=>{let e=n.current;if(!e)return;let t=new ResizeObserver(e=>a(e[0].contentRect.width));return t.observe(e),()=>t.disconnect()},[]);let u=e=>Ot[e]??Ot.none,d=e=>({shippable:`Shippable`,review:`In review`,translated:`Translated`,none:`Not started`})[e]??e,f=e=>40+e/100*p,p=Math.max(0,r-80),m=[...e].sort((e,t)=>e.pct-t.pct),h=[],g=m.map(e=>{let t=f(e.pct),n=0;for(;n<h.length&&t-h[n]<80;)n++;return h[n]=t,{it:e,x:t,above:n%2==0,sideLane:Math.floor(n/2)}}),_=e=>{let t=g.filter(t=>t.above===e).map(e=>e.sideLane);return t.length?38+Math.max(...t)*24:0},v=r>0?_(!0):38,ee=r>0?_(!1):0,y=v+8,b=y+ee+8,x=b+12,S=g.find(e=>e.it.lang===c)?.it;return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3btIdj`,`Completeness by language`)}),(0,z.jsxs)(`div`,{ref:n,className:`relative`,style:{height:x},children:[r>0&&[25,50,75].map(e=>(0,z.jsx)(`div`,{className:`absolute w-px bg-border/40`,style:{left:f(e),top:0,height:b}},e)),(0,z.jsx)(`div`,{className:`absolute h-px bg-border`,style:{left:40,right:40,top:y}}),r>0&&g.map(({it:e,x:n,above:r,sideLane:a})=>{let s=u(e.stage),d=18+a*24,f=c&&c!==e.lang?.12:1,p=r?y-d-20:y+d;return(0,z.jsx)(`span`,{style:{opacity:f,transition:`opacity 120ms`},children:i(`1x1ijP`,`{=m0}  {=m1}  {=m2}  {=m3} {=m4} {=m5} {it.pct}% {/=m5} {/=m3}`,{"=m0":(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?y-d:y,width:1,height:d-4,background:`color-mix(in oklch, ${s} 55%, var(--border))`}}),"=m1":(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?y-8:y+4,width:0,height:0,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,...r?{borderTop:`4px solid ${s}`}:{borderBottom:`4px solid ${s}`}}}),"=m2":(0,z.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:y,width:8,height:8,transform:`translate(-50%, -50%)`,background:s,border:`2px solid var(--card)`}}),"=m3":(0,z.jsxs)(`span`,{className:`absolute flex -translate-x-1/2 items-center gap-1 whitespace-nowrap ${t?`cursor-pointer`:`cursor-default`}`,style:{left:n,top:p},onMouseEnter:()=>l(e.lang),onMouseLeave:()=>l(null),onClick:t?()=>t(e.lang):void 0,role:t?`button`:void 0,"aria-label":t?o(`Review {lang} translations`,{lang:e.lang}):void 0,title:t?`${e.lang}: ${e.pct}% translated — ${o(`click to review`)}`:`${e.lang}: ${e.pct}% translated`,"data-slot":`timeline-lang-tag`,children:[(0,z.jsx)(O,{locale:e.lang}),(0,z.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m4":(0,z.jsx)(O,{locale:e.lang}),"=m5":(0,z.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"it.pct":e.pct})},e.lang)}),r>0&&S&&S.byCollection.map((e,t)=>{let n=f(e.pct);return(0,z.jsx)(`span`,{className:`z-10`,children:i(`2ezCfL`,`{=m0}  {=m1}  {=m2} {=m3}{cc.name}{/=m3}{value} {=m6}{cc.pct}%{/=m6} {/=m2}`,{"=m0":(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:y-20,width:1,height:16,background:`color-mix(in oklch, ${e.color} 60%, var(--border))`}}),"=m1":(0,z.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:y,width:11,height:11,transform:`translate(-50%, -50%)`,background:e.color,border:`2px solid ${u(e.stage)}`,boxShadow:`0 0 0 1px var(--card)`},title:`${e.name}: ${e.pct}% · ${d(e.stage)}`}),"=m2":(0,z.jsxs)(`span`,{className:`absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-1.5 py-0.5 text-[9px] font-medium shadow-sm`,style:{left:n,top:y-38,borderColor:e.color},children:[(0,z.jsx)(`span`,{translate:`no`,children:e.name}),` `,(0,z.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m3":(0,z.jsx)(`span`,{translate:`no`,children:e.name}),"=m6":(0,z.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"cc.name":e.name,value:` `,"cc.pct":e.pct})},`${e.name}-${t}`)}),r>0&&[0,50,100].map(e=>(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2 text-[9px] text-muted-foreground`,style:{left:f(e),top:b},children:s(`4pXae7`,`${e}%`,{tk:e})},e))]}),(0,z.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground`,children:[[`shippable`,s(`2dg6y8`,`Shippable`)],[`review`,s(`2oadc9`,`In review`)],[`translated`,s(`2Lc17w`,`Translated`)]].map(([e,t])=>(0,z.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,z.jsx)(`span`,{className:`size-2 rounded-full`,style:{background:u(e)}}),t]},e))})]})}function Tt({project:e,onUpdate:t,tabID:n,flows:r,onRunFlow:a,onOpenReview:o,formatList:c,basePath:f,status:p,convergence:_}){let{showError:v}=Re(),{locales:x}=st(),{hasActive:te}=Je(),ie=He(),{active:C,setActive:se,enabled:fe}=We(),[A,pe]=(0,R.useState)([]),[_e,ve]=(0,R.useState)([]),[ye,Se]=(0,R.useState)(f??``),[Ce,ke]=(0,R.useState)(!1),[Ae,je]=(0,R.useState)(!1),[Me,Ne]=(0,R.useState)(c??[]),[Fe,Ie]=(0,R.useState)(p??null),[Be,Ve]=(0,R.useState)(_??null),[Ue,Ge]=(0,R.useState)({}),[qe,Ye]=(0,R.useState)(!1),[Xe,Ze]=(0,R.useState)(null),[Qe,et]=(0,R.useState)(new Set),[nt,rt]=(0,R.useState)(new Set),[N,at]=(0,R.useState)(new Set),[ct,P]=(0,R.useState)(!1),[F,ut]=(0,R.useState)(!1),[ft,I]=(0,R.useState)({}),[L,mt]=(0,R.useState)(new Set),[ht,gt]=(0,R.useState)(new Set),[Tt,B]=(0,R.useState)(null),[Ot,Mt]=(0,R.useState)(new Set),[V,H]=(0,R.useState)(null),U=e.content??[],W=Object.keys(r??{}),G=!!(c&&f),Nt=(0,R.useMemo)(()=>{let t={};for(let[n,r]of Object.entries(e.defaults?.formats??{}))t[n]={config:r.config,preset:r.preset};return t},[e.defaults?.formats]),K=(0,R.useCallback)((n,r)=>{let i={...e.defaults},a={...i.formats},o={...a[n]};r.preset?o.preset=r.preset:delete o.preset,r.config&&Object.keys(r.config).length>0?o.config=r.config:delete o.config,Object.keys(o).length===0?delete a[n]:a[n]=o,i.formats=Object.keys(a).length>0?a:void 0,t({...e,defaults:i})},[e,t]),Pt=(0,R.useCallback)(e=>{let t=new Set;for(let n of A)n.pattern===e.path&&n.format&&t.add(n.format);return[...t]},[A]);(0,R.useEffect)(()=>{c||M.listFormats().then(e=>{e&&Ne(e)}).catch(e=>v(`Failed to load formats`,e)),f||M.getBasePath(n).then(e=>{e&&Se(e)}).catch(e=>v(`Failed to get base path`,e))},[n,v,c,f]);let q=(0,R.useCallback)(()=>{p||M.getProjectStatus(n).then(e=>{e&&Ie(e)}).catch(()=>{})},[n,p]),J=(0,R.useCallback)(()=>{_||M.getConvergence(n).then(e=>{e&&Ve(e)}).catch(()=>{})},[n,_]),Y=(0,R.useCallback)(async()=>{if(!G){ke(!0);try{await M.updateProject(n,e);let[t,r,i]=await Promise.all([M.matchContent(n),M.listProjectFiles(n),M.listOutputs(n)]);pe(t??[]),ve(r??[]),I(i??{})}catch(e){v(`Failed to scan files`,e)}finally{ke(!1)}}},[n,e,v,G]),X=(0,R.useCallback)(()=>{G||M.listOutputs(n).then(e=>{e&&I(e)}).catch(()=>{})},[n,G]);(0,R.useEffect)(()=>{Y()},[Y,U.length]),(0,R.useEffect)(()=>{q(),J()},[q,J,e.content]),(0,R.useEffect)(()=>{!n||!a||M.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;Ge(t)})},[n,a,e.flows]),Ke(`project-files-changed`,e=>{e===n&&Y()}),Ke(`outputs-changed`,()=>X()),Ke(`project:extracted`,()=>{q(),J()});let Z=(0,R.useCallback)(async()=>{if(!(!n||G)){je(!0);try{await M.runExtract(n),q(),J(),await Y()}catch(e){v(`Extraction failed`,e)}finally{je(!1)}}},[n,G,q,J,Y,v]),Q=n=>{t({...e,content:n})},Ft=()=>{Q([...U,{name:`New Collection`,items:[{path:``}]}])},It=(e,t)=>{let n=[...U];n[e]=t,Q(n)},Lt=e=>{Q(U.filter((t,n)=>n!==e))},Rt=async()=>{let e=await M.addFilesDialog(n,``);e&&e.length>0&&Y()},zt=(0,R.useCallback)(async e=>{e.preventDefault(),Ye(!1);let t=e.dataTransfer?.files;if(!(!t||t.length===0)){for(let e=0;e<t.length;e++){let r=t[e].path;r&&await M.copyFileToProject(n,r,``)}Y()}},[n,Y]),Bt=(0,R.useCallback)(e=>{e.preventDefault(),Ye(!0)},[]),Vt=(0,R.useCallback)(e=>{e.preventDefault(),Ye(!1)},[]),Ht=new Set(A.map(e=>e.relative)),Ut=new Set;for(let e of Object.values(ft))for(let t of e)Ut.add(t.relative);let Wt=_e.filter(e=>!e.is_dir&&!Ht.has(e.relative)&&!Ut.has(e.relative)),Gt=C?.collections??[],Kt=(0,R.useCallback)(e=>Gt.length===0||Gt.includes(xt(e)),[Gt]),$=U.map((e,t)=>({coll:e,ci:t})).filter(({coll:e})=>Kt(e)),qt=U.length-$.length,Jt=fe&&!!C,Yt=(0,R.useMemo)(()=>{let e=new Map;for(let t of Fe?.collections??[])e.set(t.name,t);return e},[Fe]),Xt=$.map(({coll:e})=>Yt.get(xt(e))).filter(e=>!!e),Zt=Xt.reduce((e,t)=>e+t.blockCount,0),Qt=Array.from(new Set(Xt.flatMap(e=>tt(e.targetLanguages,C)))).map(e=>{let t=0,n=0;for(let r of Xt)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,pct:n>0?Math.round(t/n*100):0}}),$t=!!Fe?.hasData,en=(e,t,n)=>{let r=yt(e.format),a=e.format?.config&&Object.keys(e.format.config).length>0,o=r?[]:Pt(e),c=!r;return(0,z.jsxs)(`div`,{className:`space-y-2`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`yBWxw`,`Path pattern`)}),(0,z.jsx)(De,{value:e.path,onChange:n=>t({...e,path:n}),placeholder:s(`1R8M9g`,`src/locales/en/*.json`)})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`39Lmr`,`Format`)}),(0,z.jsx)(Pe,{value:r,onChange:n=>t({...e,format:n?{name:n}:void 0}),formats:Me})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3YGJcS`,`Target path`)}),(0,z.jsx)(ze,{value:e.target??``,onChange:n=>t({...e,target:n||void 0}),placeholder:s(`3T9UTi`,`output/{lang}  ·  or output/{lang}/{dir}/{name}.{ext}`)})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:i(`5W6k9`,`Base{value} {=m1} (optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard) {/=m1}`,{"=m1":(0,z.jsx)(`span`,{className:`font-normal text-muted-foreground/60`,children:`(optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard)`})},{value:` `})}),(0,z.jsx)(De,{value:e.base??``,onChange:n=>t({...e,base:n||void 0}),placeholder:s(`jiLnw`,`auto (e.g. input/docs)`)})]}),r===`exec`&&(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`1gbrZJ`,`Extractor command`)}),(0,z.jsx)(`input`,{type:`text`,value:typeof e.format?.config?.command==`string`?e.format.config.command:``,onChange:n=>t({...e,format:{...e.format,config:{...e.format?.config,command:n.target.value||void 0}}}),placeholder:s(`1YiMcB`,`vp kapi-react extract --stream`),className:`w-full rounded-md border border-input bg-background px-2 py-1 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,z.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:s(`4oM908`,"`kapi extract -p` runs this command; NUL-separated paths on stdin, NDJSON blocks on stdout.")})]}),(r||o.length>0)&&(0,z.jsx)(`div`,{children:(0,z.jsxs)(T,{variant:`ghost`,size:`xs`,onClick:()=>Ze(n),className:`h-auto px-0 text-muted-foreground hover:text-foreground`,children:[(0,z.jsx)(ee,{size:10}),r?(0,z.jsxs)(z.Fragment,{children:[s(`66RA9`,`Configure {fmt}`,{fmt:r}),(a||e.format?.preset)&&(0,z.jsx)(`span`,{className:`ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-primary`,children:e.format?.preset?e.format.preset:Object.keys(e.format.config).length})]}):s(`4h7nHO`,`Configure formats ({count})`,{count:o.length})]})}),Xe===n&&(c?(0,z.jsx)(lt,{open:!0,onOpenChange:e=>!e&&Ze(null),title:s(`48Xlr4`,`Configure formats`),description:s(`1bIT1z`,`This pattern auto-detects a format per file. Tune any of them here — settings apply project-wide.`),formats:o,allFormats:Me,allowAdd:!0,filterExtension:bt(e.path),values:Nt,onChange:K,scopeNote:s(`10MXfr`,`Stored in the project's defaults.formats — shared by every content item.`)}):(0,z.jsx)(lt,{open:!0,onOpenChange:e=>!e&&Ze(null),title:s(`66RA9`,`Configure {fmt}`,{fmt:r}),formats:[r],allFormats:Me,values:{[r]:{config:e.format?.config,preset:e.format?.preset}},onChange:(n,r)=>t({...e,format:{name:n,preset:r.preset,config:r.config}}),scopeNote:s(`2mxJu6`,`Applies to this content item.`)}))]})},tn=(e,t)=>e(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}),nn=e=>et(t=>new Set(t).add(e)),rn=e=>it(e)?[e.path??``]:(e.items??[]).map(e=>e.path),an=e=>{let t=new Set(rn(e).filter(Boolean));return A.filter(e=>t.has(e.pattern))},on=(t,n)=>it(t)?en({path:t.path??``,format:t.format,target:t.target},e=>It(n,{path:e.path,format:e.format,target:e.target}),`bare-${n}`):(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`2wzVub`,`Collection name`)}),(0,z.jsx)(`input`,{type:`text`,value:t.name??``,onChange:e=>It(n,{...t,name:e.target.value||void 0}),placeholder:s(`3fQf8Y`,`Collection name`),className:`w-full rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`25vgeN`,`Source override`)}),(0,z.jsx)(k,{value:t.source_language??``,onChange:e=>It(n,{...t,source_language:e||void 0}),locales:x,placeholder:e.defaults?.source_language?s(`10wAUR`,`Inherit ({source})`,{source:e.defaults.source_language}):s(`4FMXin`,`Select source...`)})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`oVuml`,`Target overrides`)}),(0,z.jsx)(Ee,{value:t.target_languages??[],onChange:e=>It(n,{...t,target_languages:e.length>0?e:void 0}),locales:x,placeholder:e.defaults?.target_languages?.length?s(`s2EQV`,`Inherit ({targets})`,{targets:e.defaults.target_languages.join(`, `)}):s(`1YSqO`,`Add targets...`)})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(w,{className:`mb-1 block text-xs text-muted-foreground`,children:s(`4GjmHO`,`Patterns`)}),(0,z.jsxs)(`div`,{className:`space-y-2`,children:[(t.items??[]).map((e,r)=>(0,z.jsxs)(`div`,{className:`group/item relative rounded-md border border-border p-3`,children:[(0,z.jsx)(`div`,{className:`absolute right-2 top-2 opacity-0 group-hover/item:opacity-100`,children:(0,z.jsx)(D,{onDelete:()=>{let e=(t.items??[]).filter((e,t)=>t!==r);e.length===0?Lt(n):It(n,{...t,items:e})},mode:`icon`})}),en(e,e=>{let i=[...t.items??[]];i[r]=e,It(n,{...t,items:i})},`coll-${n}-${r}`)]},r)),(0,z.jsx)(T,{variant:`ghost`,size:`xs`,onClick:()=>It(n,{...t,items:[...t.items??[],{path:``}]}),className:`text-muted-foreground`,children:i(`1EfPvQ`,`{=m0} Add another pattern`,{"=m0":(0,z.jsx)(le,{size:10})})})]})]})]}),sn=e=>{let t=e.slice(0,At);return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`${jt} overflow-y-auto`,"data-slot":`matched-files-scroll`,children:(0,z.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,z.jsx)(`thead`,{className:`sticky top-0 z-10 bg-muted/40 backdrop-blur`,children:(0,z.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`43TElj`,`File`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3q7zgM`,`Format`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`qVPwe`,`Pattern`)})]})}),(0,z.jsx)(`tbody`,{children:t.map((e,t)=>{let n=ft[e.relative]??[],r=L.has(e.relative),i=n.filter(e=>e.exists).length,a=St(n),o=ht.has(e.relative);return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsxs)(`tr`,{onClick:()=>B({path:e.path,relative:e.relative}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:s(`4EZGfu`,`Preview {file}`,{file:e.relative}),children:[(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[n.length>0?(0,z.jsx)(`button`,{onClick:t=>{t.stopPropagation(),mt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n})},className:`shrink-0 text-muted-foreground hover:text-foreground`,title:r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),"aria-label":r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),children:r?(0,z.jsx)(g,{size:12}):(0,z.jsx)(S,{size:12})}):(0,z.jsx)(ce,{size:12,className:`shrink-0 text-muted-foreground`}),e.relative]})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsx)(E,{variant:`secondary`,children:e.format||`unknown`})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5 text-muted-foreground`,children:(0,z.jsxs)(`span`,{className:`flex items-center justify-between gap-2`,children:[(0,z.jsx)(`span`,{children:e.pattern}),n.length>0&&(0,z.jsx)(E,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:s(`3LFNpN`,`{present}/{total} outputs`,{present:i,total:n.length})})]})})]}),r&&n.length>0&&(0,z.jsxs)(`tr`,{onClick:()=>gt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:o?s(`1rbiuq`,`Hide per-language outputs`):s(`3GyGnC`,`Show per-language outputs`),children:[(0,z.jsx)(`td`,{className:`py-1 pl-9 pr-3`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[o?(0,z.jsx)(g,{size:11,className:`shrink-0`}):(0,z.jsx)(S,{size:11,className:`shrink-0`}),(0,z.jsx)(u,{size:10,className:`shrink-0 opacity-50`}),(0,z.jsx)(`span`,{translate:`no`,children:a})]})}),(0,z.jsx)(`td`,{className:`px-3 py-1`,children:(0,z.jsx)(E,{variant:`secondary`,children:e.format||`—`})}),(0,z.jsx)(`td`,{className:`px-3 py-1 text-right`,children:(0,z.jsx)(E,{variant:`outline`,className:`text-[10px] font-normal`,children:s(`2jhS0l`,`{present}/{total} generated`,{present:i,total:n.length})})})]}),r&&o&&n.map(e=>(0,z.jsxs)(`tr`,{onClick:e.exists?()=>B({path:e.path,relative:e.relative}):void 0,className:`border-b border-border last:border-0 ${e.exists?`cursor-pointer hover:bg-accent/30`:`opacity-60`}`,title:e.exists?s(`1VO4bN`,`Inspect {file}`,{file:e.relative}):s(`2K2GuI`,`Not generated yet — run a flow to create it`),children:[(0,z.jsx)(`td`,{className:`py-1 pl-16 pr-3`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[(0,z.jsx)(O,{locale:e.lang}),(0,z.jsx)(`span`,{children:e.relative})]})}),(0,z.jsx)(`td`,{className:`px-3 py-1`,children:e.exists?(0,z.jsx)(E,{variant:`secondary`,children:e.format||`—`}):(0,z.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:s(`1wl1hi`,`pending`)})}),(0,z.jsx)(`td`,{className:`px-3 py-1 text-right text-muted-foreground`,children:e.exists?vt(e.size):``})]},`${t}-${e.relative}`))]},t)})})]})}),(0,z.jsx)(j,{shown:t.length,total:e.length,noun:s(`2rW3Pa`,`matched files`),hint:s(`3mTCmW`,`Refine the collection's glob to narrow the list.`)})]})},cn=e=>{let t=e.slice(0,At);return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`${jt} overflow-y-auto`,"data-slot":`unmatched-files-scroll`,children:(0,z.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,z.jsx)(`thead`,{className:`sticky top-0 z-10 bg-muted/40 backdrop-blur`,children:(0,z.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`43TElj`,`File`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3q7zgM`,`Format`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 text-right font-medium`,children:s(`3G3DIE`,`Size`)})]})}),(0,z.jsx)(`tbody`,{children:t.map(e=>{let t=dt(e.relative),n=Ot.has(e.path),r=t?()=>Mt(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}):e.format?()=>B({path:e.path,relative:e.relative}):void 0;return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsxs)(`tr`,{onClick:r,className:`border-b border-border last:border-0 text-muted-foreground hover:bg-accent/30 ${r?`cursor-pointer`:``}`,title:t?s(`Kgjt4`,`Browse entries in {file}`,{file:e.relative}):e.format?s(`4EZGfu`,`Preview {file}`,{file:e.relative}):void 0,children:[(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[t?n?(0,z.jsx)(g,{size:12,className:`shrink-0`}):(0,z.jsx)(S,{size:12,className:`shrink-0`}):(0,z.jsx)(ce,{size:12,className:`shrink-0`}),e.relative]})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:e.format?(0,z.jsx)(E,{variant:`secondary`,children:e.format}):(0,z.jsx)(`span`,{children:s(`2ob13S`,`—`)})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5 text-right`,children:vt(e.size)})]}),t&&n&&(0,z.jsx)(`tr`,{className:`border-b border-border last:border-0`,children:(0,z.jsx)(`td`,{colSpan:3,className:`px-3 py-1.5`,children:(0,z.jsx)(pt,{archivePath:e.path,onSelect:t=>H({path:e.path,relative:e.relative,entry:t})})})})]},e.relative)})})]})}),(0,z.jsx)(j,{shown:t.length,total:e.length,noun:s(`3rAYWb`,`files`),hint:s(`3A0pRq`,`Narrow with a collection, or refine your project's globs.`)})]})},ln=ct&&!!a&&W.length>0,un=$.map(e=>e.ci),dn=un.length>0&&un.every(e=>N.has(e)),fn=Array.from(new Set($.filter(e=>N.has(e.ci)).flatMap(({coll:e})=>an(e).map(e=>e.path)))),pn=e=>tn(at,e),mn=()=>at(new Set),hn=()=>at(dn?new Set:new Set(un)),gn=N.size>0,_n=gn?fn.length>0:A.length>0,vn=e=>Ue[e]?.valid!==!1,yn=e=>{let t=Ue[e];if(t&&t.valid===!1)return s(`1WxaK7`,`Cannot run: {issues}`,{issues:(t.issues??[]).map(e=>e.message).join(`; `)});if(!_n)return s(`SbyAd`,`No matched files to run on`)},bn=(e,t)=>{gn?(a?.(e,t,{scopePaths:fn,scopeLabel:s(`2TVMjG`,`{count} collections`,{count:N.size})}),mn()):a?.(e,t)},xn=tt(Array.from(new Set($.flatMap(({coll:t})=>(t.target_languages??e.defaults?.target_languages??[]).map(String)))),C),Sn=xn.length>=kt,Cn=(0,R.useMemo)(()=>{let e=new Map;for(let t of Be?.locales??[])e.set(`${t.collection??``} ${t.locale}`,t);return e},[Be]),wn=Cn.size>0,Tn=(e,t)=>{let n=it(e)?``:e.name??``;return Cn.get(`${n} ${t}`)??Cn.get(` ${t}`)},En=($t||wn)&&xn.length>0,Dn=e=>(e.pct?.translated??0)===0?`none`:e.shippable?`shippable`:(e.pct?.reviewed??0)>0?`review`:`translated`,On=new Map;$.forEach(({coll:e},t)=>On.set(e.name??``,Et(t)));let kn=wn?xn.map(e=>{let t=0,n=0,r=0,i=0,a=[];for(let o of Be?.locales??[])o.locale===e&&(t+=o.total,n+=o.total*(o.pct?.translated??0)/100,r+=o.total*(o.pct?.reviewed??0)/100,o.shippable&&(i+=o.total),a.push({name:o.collection||s(`2hJcYw`,`(unnamed)`),pct:Math.round(o.pct?.translated??0),stage:Dn(o),color:On.get(o.collection||``)??`var(--muted-foreground)`}));a.sort((e,t)=>t.pct-e.pct);let o=t>0?Math.round(n/t*100):0,c=t>0?Math.round(r/t*100):0;return{lang:e,pct:o,stage:t===0?`none`:i/t>=.999?`shippable`:c>0?`review`:o>0?`translated`:`none`,byCollection:a}}):null,An=(e,t)=>{let n=Yt.get(xt(e));return!n||n.blockCount===0||!n.targetLanguages.includes(t)?null:Math.round((n.coverage?.[t]??0)/n.blockCount*100)},jn=(e,t)=>{if(wn){let n=_t(Tn(e,t));if(n.key===`none`)return(0,z.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)});let r=o?`${t}: ${n.label} · ${n.pct}% translated — ${s(`4rHopU`,`click to review`)}`:`${t}: ${n.label} · ${n.pct}% translated`,a=o?()=>o({collection:it(e)?``:e.name??``,locale:t}):void 0,c=Sn?(0,z.jsxs)(`span`,{className:`flex items-center justify-center gap-1 text-[10px]`,title:r,children:[(0,z.jsx)(`span`,{className:`size-2 shrink-0 rounded-full`,style:{background:n.color}}),(0,z.jsx)(`span`,{className:`tabular-nums text-muted-foreground`,children:n.pct})]}):(0,z.jsx)(`span`,{className:`flex flex-col items-center gap-0.5`,title:r,children:i(`4G4kFe`,`{=m0} {r.label} {/=m0} {=m2}{r.pct}%{/=m2}`,{"=m0":(0,z.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),"=m2":(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})},{"r.label":n.label,"r.pct":n.pct})});return a?(0,z.jsx)(`button`,{type:`button`,className:`rounded-sm hover:bg-accent`,onClick:a,"aria-label":s(`1p5aVl`,`Review {lang} in this collection`,{lang:t}),"data-slot":`ship-gate-cell`,children:c}):c}let n=An(e,t);return n===null?(0,z.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)}):Sn?(0,z.jsx)(`span`,{className:`flex h-6 items-center justify-center rounded text-[10px] font-medium tabular-nums`,style:{background:Dt(n),color:n>55?`var(--primary-foreground)`:`var(--muted-foreground)`},title:`${t}: ${n}%`,children:n}):(0,z.jsx)(`span`,{className:`flex flex-col items-center gap-1`,title:`${t}: ${n}%`,children:i(`2iHdj3`,`{=m0} {=m1} {/=m0} {=m2}{p}%{/=m2}`,{"=m0":(0,z.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),"=m1":(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}}),"=m2":(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})},{p:n})})},Mn=$.map(({coll:e},t)=>({name:xt(e),value:Yt.get(xt(e))?.blockCount??0,fill:Et(t)})),Nn=Mn.filter(e=>e.value>0),Pn=En?`repeat(${xn.length}, minmax(${Sn?40:60}px, 1fr))`:`1fr`,Fn=`${ln?`24px `:``}minmax(150px,1.6fr) 52px 62px ${Pn} auto`;return(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,z.jsxs)(`h2`,{className:`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,z.jsx)(ce,{size:14}),s(`3LuUL6`,`Collections`)]}),ye&&(0,z.jsx)(`span`,{className:`hidden text-xs text-muted-foreground sm:inline`,children:s(`1BV3ls`,`relative to {base}`,{base:ie(ye)})}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,z.jsxs)(T,{variant:`outline`,size:`sm`,onClick:Ft,"aria-label":s(`Yg9iB`,`Add content collection`),children:[(0,z.jsx)(le,{size:12}),s(`2Q60vn`,`Add Collection`)]}),(0,z.jsxs)(T,{variant:`outline`,size:`sm`,onClick:Rt,"aria-label":s(`R68OC`,`Add files`),children:[(0,z.jsx)(le,{size:12}),s(`Hukdl`,`Add Files`)]}),(0,z.jsxs)(T,{variant:`ghost`,size:`sm`,onClick:()=>P(e=>(e&&mn(),!e)),"aria-expanded":ct,"aria-label":s(`2gxXhO`,`Advanced actions`),"data-slot":`advanced-toggle`,children:[ct?(0,z.jsx)(g,{size:12}):(0,z.jsx)(S,{size:12}),s(`34Yci`,`Advanced`)]})]})]}),ct&&(0,z.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2`,"data-slot":`advanced-bar`,children:[(0,z.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3DcfjW`,`Manual run`)}),ln&&(W.length===1?(0,z.jsxs)(T,{size:`sm`,disabled:te||!_n||!vn(W[0]),title:yn(W[0]),onClick:()=>bn(W[0],r[W[0]]),"aria-label":gn?s(`3jqAmN`,`Run {flow} on selected collections`,{flow:W[0]}):s(`4cKRZ3`,`Run {flow} on all collections`,{flow:W[0]}),children:[(0,z.jsx)(h,{size:12}),gn?s(`2ovFIO`,`Run on selected`):s(`15F8wT`,`Run {flow}`,{flow:W[0]})]}):(0,z.jsxs)(me,{children:[(0,z.jsx)(be,{asChild:!0,children:(0,z.jsxs)(T,{size:`sm`,disabled:te||!_n,"aria-label":s(`16daiB`,`Run a flow`),children:[(0,z.jsx)(h,{size:12}),gn?s(`2ovFIO`,`Run on selected`):s(`3nmBYd`,`Run flow`),(0,z.jsx)(g,{size:12})]})}),(0,z.jsxs)(ge,{align:`end`,children:[(0,z.jsx)(he,{children:gn?s(`2G8fsS`,`Run on {count} collections`,{count:N.size}):s(`1oOSFP`,`Run on all collections`)}),W.map(e=>(0,z.jsxs)(Le,{disabled:!_n||!vn(e),title:yn(e),onClick:()=>bn(e,r[e]),children:[(0,z.jsx)(h,{size:12}),e]},e))]})]})),(0,z.jsxs)(T,{variant:`outline`,size:`sm`,onClick:()=>void Z(),disabled:Ae||Ce,"aria-label":$t?s(`2qtgPx`,`Re-extract content`):s(`2XmVC7`,`Run extract`),title:s(`3foHW3`,`Manual override — Bring up to date re-extracts changed sources automatically.`),children:[Ae?(0,z.jsx)(ne,{size:12,className:`animate-spin`}):(0,z.jsx)(re,{size:12}),$t?s(`VWqFK`,`Re-extract`):s(`3f7Alp`,`Extract`)]}),(0,z.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:s(`4h5TLL`,`Tick collections below to scope a run.`)})]}),Jt&&(0,z.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs`,children:[(0,z.jsx)(y,{size:12,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:qt>0?s(`41GmQA`,`Filtered by {name} — {count} collection(s) hidden`,{name:C.name,count:qt}):s(`32FBSf`,`Filtered by {name}`,{name:C.name})}),(0,z.jsx)(T,{variant:`link`,size:`xs`,className:`ml-auto h-auto px-0`,onClick:()=>void se(``),children:s(`4AAIEq`,`Show all`)})]}),U.length>0&&($t?(0,z.jsx)(ue,{className:`mb-3 p-4`,children:(0,z.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[Nn.length>0?(0,z.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,z.jsx)(xe,{width:`100%`,height:`100%`,children:(0,z.jsx)(Te,{children:(0,z.jsx)(Oe,{data:Nn,dataKey:`value`,nameKey:`name`,innerRadius:`56%`,outerRadius:`100%`,paddingAngle:Nn.length>1?2:0,strokeWidth:0,children:Nn.map(e=>(0,z.jsx)(we,{fill:e.fill},e.name))})})})}):(0,z.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:s(`750BK`,`No blocks`)}),(0,z.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,z.jsx)(`li`,{className:`font-medium text-foreground`,children:s(`4vcVki`,`{count} blocks`,{count:Zt})}),Mn.map((e,t)=>(0,z.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,z.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:Et(t)}}),(0,z.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,z.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.value})]},e.name))]})]}),kn&&kn.length>0?(0,z.jsx)(wt,{items:kn,onSelect:o?e=>o({locale:e}):void 0}):Qt.length>0&&(0,z.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,z.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`jP6Vy`,`Coverage across collections`)}),(0,z.jsx)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-1.5`,children:Qt.map(e=>(0,z.jsx)(Ct,{label:e.lang,pct:e.pct},e.lang))})]})]})}):(0,z.jsxs)(ue,{className:`mb-3 flex items-center gap-3 p-4`,children:[(0,z.jsx)(d,{size:18,className:`shrink-0 text-muted-foreground/50`}),(0,z.jsx)(`div`,{className:`flex-1 text-xs text-muted-foreground`,children:s(`2JAuYT`,`Nothing extracted yet — run extract to read your content and analyze coverage.`)}),(0,z.jsx)(T,{size:`sm`,onClick:()=>void Z(),disabled:Ae||Ce,children:Ae?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(ne,{size:12,className:`animate-spin`}),s(`1g3fu4`,`Extracting...`)]}):s(`1n6yRm`,`Run extract`)})]})),U.some(e=>e.archive)&&(0,z.jsx)(`div`,{className:`mb-4`,children:(0,z.jsx)(ot,{tabID:n})}),ln&&N.size>0&&(0,z.jsxs)(`div`,{className:`sticky top-2 z-10 mb-3 flex flex-wrap items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs shadow-sm backdrop-blur`,children:[(0,z.jsx)(`span`,{className:`font-medium`,children:s(`10dUDc`,`{count} selected`,{count:N.size})}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3YDabm`,`{count} files`,{count:fn.length})}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`323P9x`,`·`)}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`lTjdA`,`run via Run on selected, above`)}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,z.jsx)(T,{variant:`ghost`,size:`xs`,onClick:hn,children:dn?s(`3H287u`,`Deselect all`):s(`3xLcXG`,`Select all`)}),(0,z.jsx)(T,{variant:`ghost`,size:`xs`,onClick:mn,children:s(`45Z9at`,`Clear`)})]})]}),(0,z.jsx)(`div`,{onDrop:zt,onDragOver:Bt,onDragLeave:Vt,className:`rounded-lg border-2 transition-colors ${qe?`border-primary bg-primary/5`:`border-transparent`}`,children:U.length===0&&Wt.length===0?(0,z.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 text-center`,children:[(0,z.jsx)(b,{size:24,className:`mb-3 text-muted-foreground/50`}),(0,z.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:s(`2p5m8o`,`Add a collection to map your source files, or drop files here.`)})]}):(0,z.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-border`,children:[$.length>0&&(0,z.jsxs)(`div`,{className:`grid items-center gap-x-3 border-b border-border bg-muted/30 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,style:{gridTemplateColumns:Fn},children:[ln&&(0,z.jsx)(`span`,{}),(0,z.jsx)(`span`,{children:s(`iFWBE`,`Collection`)}),(0,z.jsx)(`span`,{className:`text-right`,children:s(`3epYU3`,`Files`)}),(0,z.jsx)(`span`,{className:`text-right`,children:s(`vlTt2`,`Blocks`)}),En?xn.map(e=>(0,z.jsx)(`span`,{className:`text-center normal-case`,translate:`no`,children:Sn?e.split(`-`)[0]:e},e)):(0,z.jsx)(`span`,{children:$t?``:s(`3pa0Do`,`Coverage`)}),(0,z.jsx)(`span`,{})]}),$.map(({coll:e,ci:t},n)=>{let i=nt.has(t),o=Qe.has(t),c=an(e),u=it(e)?e.path||s(`3epYU3`,`Files`):e.name||s(`2FTnrQ`,`Untitled collection`),d=Yt.get(xt(e));return(0,z.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,z.jsxs)(`div`,{className:`grid items-center gap-x-3 px-3 py-2.5 hover:bg-accent/20`,style:{gridTemplateColumns:Fn},children:[ln&&(0,z.jsx)(de,{checked:N.has(t),onCheckedChange:()=>pn(t),"aria-label":s(`3mI5eL`,`Select {collection}`,{collection:u}),className:`shrink-0`}),(0,z.jsxs)(`button`,{onClick:()=>tn(et,t),className:`flex min-w-0 items-center gap-2 text-left`,"aria-label":o?s(`36n48F`,`Collapse`):s(`2HBGFu`,`Expand`),"aria-expanded":o,children:[o?(0,z.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}):(0,z.jsx)(S,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(ae,{size:13,className:`shrink-0`,style:{color:Et(n)}}),(0,z.jsx)(`span`,{className:`truncate text-sm font-medium`,title:u,children:u})]}),(0,z.jsx)(`span`,{className:`text-right text-xs tabular-nums text-muted-foreground`,children:c.length}),(0,z.jsx)(`span`,{className:`text-right text-xs tabular-nums`,children:$t&&d?d.blockCount:`—`}),En?xn.map(t=>(0,z.jsx)(R.Fragment,{children:jn(e,t)},t)):(0,z.jsx)(`span`,{}),(0,z.jsxs)(`span`,{className:`flex items-center justify-end gap-1`,children:[ct&&a&&c.length>0&&W.length>0&&(W.length===1?(0,z.jsx)(T,{variant:`ghost`,size:`icon-sm`,disabled:te,onClick:()=>a(W[0],r[W[0]],{scopePaths:c.map(e=>e.path),scopeLabel:u}),"aria-label":s(`WT7Mg`,`Run {flow} on {collection}`,{flow:W[0],collection:u}),children:(0,z.jsx)(h,{size:13})}):(0,z.jsxs)(me,{children:[(0,z.jsx)(be,{asChild:!0,children:(0,z.jsx)(T,{variant:`ghost`,size:`icon-sm`,disabled:te,"aria-label":s(`37dEBh`,`Run a flow on {collection}`,{collection:u}),children:(0,z.jsx)(h,{size:13})})}),(0,z.jsxs)(ge,{align:`end`,children:[(0,z.jsx)(he,{children:s(`3r1PYB`,`Run on {collection}`,{collection:u})}),W.map(e=>(0,z.jsxs)(Le,{onClick:()=>a(e,r[e],{scopePaths:c.map(e=>e.path),scopeLabel:u}),children:[(0,z.jsx)(h,{size:12}),e]},e))]})]})),(0,z.jsx)(T,{variant:i?`secondary`:`ghost`,size:`icon-sm`,onClick:()=>{nn(t),tn(rt,t)},"aria-label":i?s(`1vDkj2`,`Done editing`):s(`h5zbs`,`Edit collection`),children:i?(0,z.jsx)(m,{size:13}):(0,z.jsx)(l,{size:13})}),(0,z.jsx)(D,{onDelete:()=>Lt(t),mode:`icon`})]})]}),o&&(0,z.jsxs)(`div`,{className:`border-t border-border bg-muted/10`,children:[i&&(0,z.jsxs)(`div`,{className:`animate-in slide-in-from-top-2 fade-in border-b-2 border-primary/40 bg-muted/40 p-4 shadow-inner duration-200`,children:[(0,z.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary`,children:[(0,z.jsx)(l,{size:11}),s(`h5zbs`,`Edit collection`)]}),on(e,t)]}),c.length>0?sn(c):(0,z.jsxs)(`p`,{className:`px-4 py-6 text-center text-xs text-muted-foreground`,children:[s(`1XxbaH`,`No files matched this collection's patterns.`),!i&&(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`button`,{onClick:()=>{nn(t),rt(e=>new Set(e).add(t))},className:`text-primary hover:underline`,children:s(`2Uq3Xf`,`Edit patterns`)})]})]})]})]},t)}),!Gt.length&&Wt.length>0&&(0,z.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,z.jsxs)(`button`,{onClick:()=>ut(e=>!e),className:`flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-accent/20`,"aria-label":F?s(`2HBGFu`,`Expand`):s(`36n48F`,`Collapse`),children:[F?(0,z.jsx)(S,{size:13,className:`shrink-0 text-muted-foreground`}):(0,z.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(oe,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(`span`,{className:`text-sm font-medium`,children:s(`41kjwU`,`Other files`)}),(0,z.jsx)(E,{variant:`secondary`,className:`text-[10px] font-normal`,children:s(`3YDabm`,`{count} files`,{count:Wt.length})})]}),!F&&(0,z.jsx)(`div`,{className:`border-t border-border bg-muted/10`,children:cn(Wt)})]})]})}),(0,z.jsx)($e,{tabID:n,filePath:Tt?.path??null,filename:Tt?.relative??``,onClose:()=>B(null)}),(0,z.jsx)($e,{tabID:n,filePath:V?.path??null,filename:V?`${V.relative}!${V.entry}`:``,entryPath:V?.entry??null,onClose:()=>H(null)})]})}var R,z,B,Et,Dt,Ot,kt,At,jt,Mt=t((()=>{a(),R=e(n(),1),Ne(),C(),ke(),N(),Ve(),ut(),at(),Qe(),gt(),Me(),Ue(),qe(),ct(),Ge(),Ye(),et(),z=r(),B=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],Et=e=>B[e%B.length],Dt=e=>`color-mix(in oklch, var(--primary) ${e}%, var(--muted))`,Ot={shippable:`oklch(0.62 0.17 150)`,review:`oklch(0.72 0.15 80)`,translated:`var(--primary)`,none:`var(--muted-foreground)`},kt=5,At=500,jt=`max-h-[28rem]`,Tt.__docgenInfo={description:`CollectionsPanel is the collection-centric spine of the project home: one card
per content collection carrying its own stats (file count, block count,
coverage bar), expandable to its matched-file table and editable inline. It
folds together what used to be the standalone Content page and the Home
page's read-only Content Overview (issue #1068) — collections, files,
patterns, languages, coverage and the unmatched "Other files" all live here.`,methods:[],displayName:`CollectionsPanel`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``},flows:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`FlowSpec`}],raw:`Record<string, FlowSpec>`},description:`The project's flows, offered as a per-collection "Run" menu on each card.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:`Run a flow scoped to a single collection's files.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope — wired
 to the ship-gate cells and the timeline tags.`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`Pre-loaded formats for Storybook — skips api.listFormats().`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — skips api.getBasePath().`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`}}}}));function V({project:e,displayName:t,tabID:n,onUpdate:r,onRunFlow:a,onNavigate:l,onOpenReview:u,pluginsResolved:d,pluginIssues:m,status:h,convergence:g,plan:y,onBringUpToDate:b,onResetSample:x,sampleInfo:S,formatList:te,basePath:ae}){let{active:C}=We(),[oe,se]=(0,H.useState)(null),[ce,le]=(0,H.useState)(S??null),[w,ue]=(0,H.useState)(!1);(0,H.useEffect)(()=>{!n||S||M.getSampleInfo(n).then(e=>{e&&le(e)}).catch(()=>{})},[n,S]);let de=(0,H.useCallback)(()=>{ue(!0),n&&M.acknowledgeSampleRevision(n)},[n]),D=(0,H.useCallback)(e=>{se(e),M.installPlugin(e)},[]),k=e.defaults??{},fe=e.plugins??{},A=Object.keys(e.flows??{}).length,j=C?.languages??[];return(0,U.jsxs)(`div`,{className:`p-6`,children:[(0,U.jsxs)(`div`,{className:`mb-6`,children:[(0,U.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,U.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,U.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,U.jsx)(c,{size:14}),k.source_language?(0,U.jsx)(O,{locale:String(k.source_language)}):(0,U.jsx)(`span`,{children:o(`No source`)}),(0,U.jsx)(`span`,{children:`→`}),k.target_languages?.length?k.target_languages.map(e=>(0,U.jsx)(O,{locale:String(e),muted:j.length>0&&!j.includes(String(e))},String(e))):(0,U.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,U.jsx)(c,{size:14}),"=m2":k.source_language?(0,U.jsx)(O,{locale:String(k.source_language)}):(0,U.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,U.jsx)(`span`,{children:`→`}),"=m4":k.target_languages?.length?k.target_languages.map(e=>(0,U.jsx)(O,{locale:String(e),muted:j.length>0&&!j.includes(String(e))},String(e))):(0,U.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,U.jsx)(E,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(fe).length>0&&Object.entries(fe).map(([e,t])=>(0,U.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,U.jsx)(_,{size:10}),(0,U.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,U.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),d===!1&&m&&m.length>0&&(0,U.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,U.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,U.jsx)(p,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,U.jsxs)(`div`,{className:`flex-1`,children:[(0,U.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,U.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,U.jsx)(`ul`,{className:`mt-2 space-y-1`,children:m.map(e=>(0,U.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,U.jsx)(E,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,U.jsxs)(T,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>D(e.plugin),disabled:oe===e.plugin,children:[oe===e.plugin?(0,U.jsx)(ne,{size:11,className:`animate-spin`}):(0,U.jsx)(_,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,U.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,U.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,U.jsx)(T,{size:`sm`,variant:`outline`,onClick:()=>l(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,U.jsx)(ee,{size:12})})}),(0,U.jsx)(T,{size:`sm`,variant:`outline`,onClick:()=>l(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,U.jsx)(_,{size:12})})})]})]})]})}),ce?.upgrade_available&&!w&&(0,U.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,U.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,U.jsx)(re,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,U.jsxs)(`div`,{className:`flex-1`,children:[(0,U.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,U.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,U.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,U.jsxs)(T,{size:`sm`,onClick:()=>x?.(),children:[(0,U.jsx)(re,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,U.jsx)(T,{size:`sm`,variant:`outline`,onClick:de,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),n&&(0,U.jsx)(Xe,{tabID:n,onBringUpToDate:b,convergence:g,plan:y}),(0,U.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,U.jsx)(Ie,{icon:(0,U.jsx)(f,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>l(`checks`)}),(0,U.jsx)(Ie,{icon:(0,U.jsx)(v,{size:16}),title:s(`25KjwG`,`Flows`),description:A>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:A}):s(`3ahfLk`,`Build your first flow`),onClick:()=>l(`flows`)}),(0,U.jsx)(Ie,{icon:(0,U.jsx)(ie,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>l(`tools`)}),(0,U.jsx)(Ie,{icon:(0,U.jsx)(ee,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>l(`project-settings`)})]}),n&&(0,U.jsx)(Tt,{project:e,onUpdate:r??(()=>{}),tabID:n,flows:e.flows,onRunFlow:a,onOpenReview:u,formatList:te,basePath:ae,status:h,convergence:g}),A===0&&(0,U.jsx)(pe,{icon:(0,U.jsx)(v,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,U.jsx)(T,{variant:`link`,size:`sm`,onClick:()=>l(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var H,U,W=t((()=>{a(),H=e(n(),1),C(),ke(),Ve(),Ge(),Mt(),Ze(),U=r(),V.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onUpdate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:`Persist project edits made on the merged collection surface.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope?: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope.`},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`},plan:{required:!1,tsType:{name:`ConvergePlan`},description:`Pre-loaded pre-flight plan for Storybook/tests — skips api.getConvergePlan().`},onBringUpToDate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Launch the convergence run (Bring up to date → runner passes view).`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`import("../types/api").FormatInfo[]`},description:`Pre-loaded formats for Storybook — forwarded to CollectionsPanel.`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — forwarded to CollectionsPanel.`}}}})),G,Nt,K,Pt,q,J,Y,X,Z,Q,Ft;t((()=>{W(),{fn:G}=__STORYBOOK_MODULE_TEST__,Nt={title:`Pages/HomePage`,component:V,tags:[`autodocs`],args:{tabID:`tab-1`,onUpdate:G(),onRunFlow:G(),onNavigate:G(),onResetSample:G(),basePath:`/Users/dev/projects/acme`,formatList:[{name:`json`,display_name:`JSON`,extensions:[`.json`],has_reader:!0,has_writer:!0,has_schema:!1},{name:`markdown`,display_name:`Markdown`,extensions:[`.md`],has_reader:!0,has_writer:!0,has_schema:!1}]}},K={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{name:`Website`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]},{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},Pt={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},q={args:{...K.args,displayName:`KapiMart`,project:{version:`v1`,name:`KapiMart`,defaults:{source_language:`en-US`,target_languages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},content:[{name:`Website`,base:`web/en-US`,items:[{path:`web/en-US/**/*.md`,target:`web/{lang}`,format:{name:`markdown`}}]},{name:`Online Store`,base:`src/en-US`,items:[{path:`src/en-US/*.{json,yaml,properties,html}`,target:`src/{lang}`}]},{name:`Contracts`,base:`legal/en-US`,items:[{path:`legal/en-US/*.{docx,xlsx}`,target:`legal/{lang}`}]},{name:`Templates`,base:`marketing/en-US`,items:[{path:`marketing/en-US/*.{pptx,docx}`,target:`marketing/{lang}`}]}],flows:{"pseudo-translate":{steps:[{tool:`pseudo-translate`}]},translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/kapimart/kapimart.kapi`,projectName:`KapiMart`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"de-DE":245,"fr-FR":191,"ja-JP":110,"nb-NO":100,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Online Store`,blockCount:349,coverage:{"de-DE":349,"fr-FR":349,"ja-JP":175,"nb-NO":175,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Contracts`,blockCount:80,coverage:{"de-DE":80,"fr-FR":0,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Templates`,blockCount:25,coverage:{"de-DE":25,"fr-FR":12,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]}]},convergence:{project:`KapiMart`,review:[],locales:[{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Online Store`,locale:`de-DE`,total:349,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Contracts`,locale:`de-DE`,total:80,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Templates`,locale:`de-DE`,total:25,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:78,reviewed:30},gated:!0,shippable:!1},{collection:`Online Store`,locale:`fr-FR`,total:349,pct:{translated:100,reviewed:60},gated:!0,shippable:!1},{collection:`Contracts`,locale:`fr-FR`,total:80,pct:{},gated:!0,shippable:!1},{collection:`Templates`,locale:`fr-FR`,total:25,pct:{translated:48},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`Online Store`,locale:`ja-JP`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`nb-NO`,total:245,pct:{translated:41},gated:!0,shippable:!1},{collection:`Online Store`,locale:`nb-NO`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`ar-SA`,total:245,pct:{},gated:!0,shippable:!1}]}}},J={args:{...K.args,displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{name:`Website`,items:[{path:`docs/**/*.md`,format:{name:`markdown`}}]},{name:`UI Strings`,items:[{path:`src/i18n/en/*.json`}]},{name:`Emails`,items:[{path:`emails/**/*.html`}]}],flows:{translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"fr-FR":245,"de-DE":191,"ja-JP":110},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`UI Strings`,blockCount:88,coverage:{"fr-FR":88,"de-DE":40,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`Emails`,blockCount:32,coverage:{"fr-FR":16,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},Y={args:{...J.args,convergence:{project:`Acme App Localization`,review:[],locales:[{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:78,reviewed:40},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`fr-FR`,total:88,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`UI Strings`,locale:`de-DE`,total:88,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`ja-JP`,total:88,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`fr-FR`,total:32,pct:{translated:50},gated:!0,shippable:!1},{collection:`Emails`,locale:`de-DE`,total:32,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`ja-JP`,total:32,pct:{},gated:!0,shippable:!1}]}}},X={args:{...K.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},Z={args:{...q.args,status:{...q.args.status,stale:!0}}},Q={args:{...K.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`{
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
}`,...Pt.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...Q.parameters?.docs?.description}}},Ft=[`Default`,`NoFlows`,`WithCoverage`,`ThreeLanguages`,`WithShipGates`,`NeverExtracted`,`StaleCounts`,`SampleUpgradeAvailable`]}))();export{K as Default,X as NeverExtracted,Pt as NoFlows,Q as SampleUpgradeAvailable,Z as StaleCounts,J as ThreeLanguages,q as WithCoverage,Y as WithShipGates,Ft as __namedExportsOrder,Nt as default};