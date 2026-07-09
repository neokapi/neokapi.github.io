import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Et as l,Ii as u,It as d,K as f,Ki as ee,Si as p,St as m,bi as h,bt as g,c as _,et as te,fa as v,g as y,ga as b,gi as x,i as ne,ia as re,mt as ie,o as S,oa as ae,t as C,ur as oe,vi as se,vr as w,vt as ce}from"./lucide-react-DTJloxAJ.js";import{t as T}from"./label-C1tohmzx.js";import{t as E}from"./button-D6zYGAvL.js";import{t as D}from"./card-CHo_fh0q.js";import{t as le}from"./checkbox-EB20m_E8.js";import{t as O}from"./badge-B925V-__.js";import{t as ue}from"./confirm-delete-button-Dfm-Kmqr.js";import{t as k}from"./LocalePill-C8a-9VUF.js";import{$t as A,Ft as j,Gt as M,Kt as de,Qn as fe,Qt as pe,Ut as me,Wt as he,Zt as ge,an as _e,c as ve,cn as ye,ct as be,en as xe,fn as Se,fr as Ce,ft as we,gn as Te,i as Ee,it as De,jn as Oe,kn as ke,mr as Ae,mt as je,n as Me,nt as Ne,on as Pe,q as Fe,qt as Ie,r as Le,rr as Re,sn as ze,tn as Be,tt as Ve,yn as He}from"./iframe-Cn9RuSUo.js";import{r as Ue,t as N}from"./useApi-BmtWZ43C.js";import{n as We,t as Ge}from"./queryKeys-BTxmk2SE.js";import{n as Ke,t as qe}from"./useShortenHome-C2T09Axp.js";import{n as Je,t as Ye}from"./ActiveFilterContext-Cakqwv54.js";import{n as Xe,t as Ze}from"./useWailsEvent-9-n-N2Jk.js";import{n as Qe,t as $e}from"./JobFeedContext-CXRMKL3r.js";import{n as et,r as tt}from"./ConvergenceHero-Ci9EEVuR.js";import{n as P,t as nt}from"./FilePreview-BDwj5Tgg.js";import{n as rt,t as it}from"./filter-BQ0GIjVn.js";import{n as at,t as ot}from"./useSchemaFormHost-o4hKDTU5.js";import{n as st,r as ct}from"./api-LEFL5VCf.js";import{n as lt,t as ut}from"./TranslationStatusPanel-78GuhRU1.js";import{n as dt,t as ft}from"./useLocales-C5x6Dgr6.js";function pt({open:e,onOpenChange:t,title:n,description:r,formats:i,allFormats:a,allowAdd:o=!1,filterExtension:c,values:l,onChange:u,scopeNote:d}){let{showError:f}=Le(),ee=at(),[p,m]=(0,F.useState)([]),[h,g]=(0,F.useState)(!1),_=(0,F.useMemo)(()=>{let e=new Set,t=[];for(let n of[...i,...p])n&&!e.has(n)&&(e.add(n),t.push(n));return t},[i,p]),te=o||i.length>1,[v,y]=(0,F.useState)(te?null:i[0]??null);(0,F.useEffect)(()=>{e&&(m([]),g(!1),y(te?null:i[0]??null))},[e]);let b=v??``,ie=v===null,S=Ae({queryKey:We.formatSchema(b),queryFn:()=>N.getFormatSchema(b),enabled:e&&!!b}),ae=Ae({queryKey:We.formatPresets(b),queryFn:()=>N.listFormatPresets(b),enabled:e&&!!b});(0,F.useEffect)(()=>{S.error&&f(`Failed to load format schema`,S.error)},[S.error,f]);let C=(0,F.useMemo)(()=>{let e=c?.toLowerCase();return a.filter(t=>_.includes(t.name)?!1:e?(t.extensions??[]).some(t=>t.toLowerCase()===e):!0)},[a,_,c]),oe=(0,F.useCallback)(e=>{e&&(m(t=>t.includes(e)?t:[...t,e]),g(!1),y(e))},[]),w=l[b]??{},D=S.isSuccess?S.data??null:void 0,le=ae.data??[],O=!!b&&(S.isLoading||ae.isLoading),ue=(0,F.useMemo)(()=>{if(!D)return;let e={};for(let[t,n]of Object.entries(D.properties??{}))n?.default!==void 0&&(e[t]=n.default);let t=le.find(e=>e.name===w.preset);return t?.config&&Object.assign(e,t.config),e},[D,le,w.preset]);function k(e){return Object.keys(l[e]?.config??{}).length}return(0,I.jsx)(me,{open:e,onOpenChange:t,children:(0,I.jsxs)(he,{side:`right`,className:`flex w-full flex-col gap-0 p-0 sm:max-w-lg md:max-w-xl`,children:[(0,I.jsxs)(de,{className:`border-b border-border`,children:[(0,I.jsx)(Ie,{children:n}),r&&(0,I.jsx)(M,{children:r})]}),ie?(0,I.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-2 overflow-auto p-4`,children:[(0,I.jsx)(T,{className:`text-xs text-muted-foreground`,children:s(`lAy6j`,`Formats`)}),_.map(e=>(0,I.jsxs)(`button`,{onClick:()=>y(e),className:`flex w-full items-center justify-between rounded-md border border-border px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/50`,children:[(0,I.jsx)(`span`,{className:`font-medium`,translate:`no`,children:e}),(0,I.jsxs)(`span`,{className:`flex items-center gap-2`,children:[k(e)>0&&(0,I.jsx)(`span`,{className:`rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary`,children:s(`1v4Dt5`,`{count} set`,{count:k(e)})}),(0,I.jsx)(x,{size:15,className:`text-muted-foreground`})]})]},e)),_.length===0&&!h&&(0,I.jsx)(`p`,{className:`py-2 text-xs text-muted-foreground`,children:s(`4E8VTn`,`No formats matched yet. Add one to configure it.`)}),o&&(h?(0,I.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,I.jsx)(De,{value:``,onChange:oe,formats:C,placeholder:s(`2aYDzk`,`Pick a format`),className:`flex-1`}),(0,I.jsx)(E,{variant:`ghost`,size:`sm`,onClick:()=>g(!1),"aria-label":s(`AQznM`,`Cancel`),children:(0,I.jsx)(ne,{size:14})})]}):(0,I.jsxs)(E,{variant:`outline`,size:`sm`,className:`w-full justify-start text-muted-foreground`,onClick:()=>g(!0),children:[(0,I.jsx)(ce,{size:14}),s(`1tDf0l`,`Add format`)]}))]}):(0,I.jsxs)(`div`,{className:`min-h-0 flex-1 overflow-auto p-4`,children:[te&&(0,I.jsxs)(`button`,{onClick:()=>y(null),className:`mb-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground`,children:[(0,I.jsx)(se,{size:14}),s(`lAy6j`,`Formats`)]}),O||D===void 0?(0,I.jsx)(`div`,{className:`flex h-40 items-center justify-center text-muted-foreground`,children:(0,I.jsx)(re,{className:`animate-spin`,size:16})}):D===null?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h3`,{className:`text-sm font-semibold text-foreground`,translate:`no`,children:b}),(0,I.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:s(`2uJqdn`,`No configurable options for this format.`)})]}):(0,I.jsxs)(`div`,{className:`space-y-3`,children:[le.length>0&&(0,I.jsxs)(`div`,{children:[(0,I.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3nOg4F`,`Preset`)}),(0,I.jsxs)(ge,{value:w.preset||`__default__`,onValueChange:e=>u(b,{...w,preset:e===`__default__`?void 0:e}),children:[(0,I.jsx)(xe,{className:`h-8 text-xs`,children:(0,I.jsx)(Be,{})}),(0,I.jsxs)(pe,{children:[(0,I.jsx)(A,{value:`__default__`,children:s(`1Hb69c`,`Default`)}),le.map(e=>(0,I.jsxs)(A,{value:e.name,translate:`no`,children:[e.name,e.description?` — ${e.description}`:``]},e.name))]})]})]}),(0,I.jsx)(ve,{schema:D,values:w.config??{},presetValues:ue,host:ee,onChange:e=>u(b,{...w,config:Object.keys(e).length>0?e:void 0})})]})]}),(0,I.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border p-4`,children:[d?(0,I.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d}):(0,I.jsx)(`span`,{}),(0,I.jsx)(E,{size:`sm`,onClick:()=>t(!1),children:s(`2m1wue`,`Done`)})]})]})})}var F,I,mt=t((()=>{a(),F=e(n(),1),Ce(),C(),Ee(),Ue(),Ge(),ot(),Me(),I=r(),pt.__docgenInfo={description:`Schema-driven format configuration in a right-side drawer, laid out as a
master→detail flow so each level gets the full drawer width:

  - **List** (wildcard / multi-format only): the formats to configure, with
    config-count badges and an "add format" control. Tapping one opens its
    detail.
  - **Detail**: the format's option form (the framework \`SchemaForm\`, whose own
    header names the format) plus its preset, with a back affordance.

A single-format item skips the list and opens straight on its detail.`,methods:[],displayName:`FormatConfigDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},formats:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Formats shown initially in the list (e.g. the formats matched in the input files).`},allFormats:{required:!0,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`All registered formats, for the "add format" picker.`},allowAdd:{required:!1,tsType:{name:`boolean`},description:`Allow configuring formats beyond the initial list (wildcard items).`,defaultValue:{value:`false`,computed:!1}},filterExtension:{required:!1,tsType:{name:`string`},description:`When set, the add-picker is filtered to formats claiming this extension (e.g. ".json").`},values:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`FormatConfigValue`}],raw:`Record<string, FormatConfigValue>`},description:`Current config/preset keyed by format name.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(format: string, next: FormatConfigValue) => void`,signature:{arguments:[{type:{name:`string`},name:`format`},{type:{name:`FormatConfigValue`},name:`next`}],return:{name:`void`}}},description:`Persist a change for one format.`},scopeNote:{required:!1,tsType:{name:`string`},description:`Footer note clarifying where the config is stored (item vs project-wide).`}}}}));function ht(e){let t=e.toLowerCase();return yt.some(e=>t.endsWith(e))}function gt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function _t({archivePath:e,onSelect:t,entries:n}){let r=Ae({queryKey:We.archiveEntries(e),queryFn:()=>N.listArchiveEntries(e),enabled:!n}),a=n??r.data??null,o=!n&&r.isLoading,c=r.error?r.error instanceof Error?r.error.message:String(r.error):!n&&r.isSuccess&&r.data===null?`Archive listing is unavailable in this environment.`:null;if(o)return(0,L.jsx)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-muted-foreground`,children:i(`2EU0eU`,`{=m0} Listing entries…`,{"=m0":(0,L.jsx)(re,{className:`size-3 animate-spin`})})});if(c)return(0,L.jsxs)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-destructive`,children:[(0,L.jsx)(b,{className:`size-3`}),c]});if(!a||a.length===0)return(0,L.jsx)(`div`,{className:`py-2 pl-8 text-xs text-muted-foreground`,children:s(`3BHBSi`,`No entries.`)});let l=a.slice(0,vt);return(0,L.jsxs)(`div`,{className:`border-l border-border/60 pl-3`,children:[(0,L.jsx)(`ul`,{className:`max-h-72 overflow-y-auto`,"aria-label":s(`3EtDs0`,`Archive entries`),"data-slot":`archive-entries`,children:l.map(e=>(0,L.jsx)(`li`,{children:(0,L.jsx)(j,{content:e.format?`Preview ${e.name}`:`No reader for this file type`,children:(0,L.jsx)(`span`,{className:`block w-full`,children:(0,L.jsxs)(`button`,{type:`button`,disabled:!e.format,onClick:e.format?()=>t(e.name):void 0,className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs hover:bg-accent disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`,children:[(0,L.jsx)(w,{className:`size-3 shrink-0 text-muted-foreground`}),(0,L.jsx)(`span`,{className:`truncate font-mono`,translate:`no`,children:e.name}),(0,L.jsx)(`span`,{className:`ml-auto shrink-0 text-muted-foreground`,children:gt(e.size)})]})})})},e.name))}),(0,L.jsx)(Re,{shown:l.length,total:a.length,noun:`entries`,hint:s(`3oCvWm`,`Extract the archive to browse all of its entries.`),className:`border-t-0`})]})}var L,vt,yt,bt=t((()=>{a(),Ce(),C(),Ee(),Ue(),Ge(),L=r(),vt=400,yt=[`.zip`,`.tar`,`.tgz`,`.tar.gz`],_t.__docgenInfo={description:``,methods:[],displayName:`ArchiveEntries`,props:{archivePath:{required:!0,tsType:{name:`string`},description:`Absolute path of the archive container.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(entry: string) => void`,signature:{arguments:[{type:{name:`string`},name:`entry`}],return:{name:`void`}}},description:`Called with the inner entry path when the user picks an entry to preview.`},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`ArchiveEntry`}],raw:`ArchiveEntry[]`},description:`Pre-loaded entries for Storybook/tests, skipping the backend call.`}}}}));function xt(e){let t=e?.pct?.translated??0;return!e||t===0?{key:`none`,label:`—`,short:`—`,color:`var(--muted-foreground)`,pct:0}:e.shippable?{key:`shippable`,label:`Shippable`,short:`Ship`,color:`oklch(0.62 0.17 150)`,pct:t}:(e.pct?.reviewed??0)>0?{key:`review`,label:`In review`,short:`Review`,color:`oklch(0.72 0.15 80)`,pct:t}:{key:`draft`,label:`Draft`,short:`Draft`,color:`var(--primary)`,pct:t}}function St(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function Ct(e){return e?.name??``}function wt(e){let t=e.split(`/`).pop()??e,n=/\*\.([A-Za-z0-9]+)$/.exec(t);return n?`.`+n[1].toLowerCase():void 0}function Tt(e){return ct(e)?`(unnamed)`:e.name&&e.name.length>0?e.name:`(unnamed)`}function Et(e){let t=e[0];return t?t.relative.split(`/`).map(e=>e===t.lang?`{lang}`:e).join(`/`):``}function Dt({label:e,pct:t,color:n}){return(0,z.jsx)(`span`,{className:`flex min-w-40 flex-1 items-center gap-2`,children:i(`26PYWB`,`{=m0} {label} {/=m0} {=m2} {=m3} {/=m2} {=m4} {pct}% {/=m4}`,{"=m0":(0,z.jsx)(`span`,{className:`w-14 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),"=m2":(0,z.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}})}),"=m3":(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}}),"=m4":(0,z.jsxs)(`span`,{className:`w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[t,`%`]})},{label:e,pct:t})})}function Ot({items:e,onSelect:t}){let n=(0,R.useRef)(null),[r,a]=(0,R.useState)(0),[c,l]=(0,R.useState)(null);(0,R.useEffect)(()=>{let e=n.current;if(!e)return;let t=new ResizeObserver(e=>a(e[0].contentRect.width));return t.observe(e),()=>t.disconnect()},[]);let u=e=>Mt[e]??Mt.none,d=e=>({shippable:`Shippable`,review:`In review`,translated:`Translated`,none:`Not started`})[e]??e,f=e=>40+e/100*ee,ee=Math.max(0,r-80),p=[...e].sort((e,t)=>e.pct-t.pct),m=[],h=p.map(e=>{let t=f(e.pct),n=0;for(;n<m.length&&t-m[n]<80;)n++;return m[n]=t,{it:e,x:t,above:n%2==0,sideLane:Math.floor(n/2)}}),g=e=>{let t=h.filter(t=>t.above===e).map(e=>e.sideLane);return t.length?38+Math.max(...t)*24:0},_=r>0?g(!0):38,te=r>0?g(!1):0,v=_+8,y=v+te+8,b=y+12,x=h.find(e=>e.it.lang===c)?.it;return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3btIdj`,`Completeness by language`)}),(0,z.jsxs)(`div`,{ref:n,className:`relative`,style:{height:b},children:[r>0&&[25,50,75].map(e=>(0,z.jsx)(`div`,{className:`absolute w-px bg-border/40`,style:{left:f(e),top:0,height:y}},e)),(0,z.jsx)(`div`,{className:`absolute h-px bg-border`,style:{left:40,right:40,top:v}}),r>0&&h.map(({it:e,x:n,above:r,sideLane:a})=>{let d=u(e.stage),f=18+a*24,ee=c&&c!==e.lang?.12:1,p=r?v-f-20:v+f;return(0,z.jsxs)(`span`,{style:{opacity:ee,transition:`opacity 120ms`},children:[(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?v-f:v,width:1,height:f-4,background:`color-mix(in oklch, ${d} 55%, var(--border))`}}),(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?v-8:v+4,width:0,height:0,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,...r?{borderTop:`4px solid ${d}`}:{borderBottom:`4px solid ${d}`}}}),(0,z.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:v,width:8,height:8,transform:`translate(-50%, -50%)`,background:d,border:`2px solid var(--card)`}}),(0,z.jsx)(j,{content:t?`${e.lang}: ${e.pct}% translated — ${s(`4rHopU`,`click to review`)}`:`${e.lang}: ${e.pct}% translated`,children:i(`3hrKvi`,`{=m0} {=m1} {=m2} {it.pct}% {/=m2} {/=m0}`,{"=m0":(0,z.jsxs)(`span`,{className:`absolute flex -translate-x-1/2 items-center gap-1 whitespace-nowrap ${t?`cursor-pointer`:`cursor-default`}`,style:{left:n,top:p},onMouseEnter:()=>l(e.lang),onMouseLeave:()=>l(null),onClick:t?()=>t(e.lang):void 0,role:t?`button`:void 0,"aria-label":t?o(`Review {lang} translations`,{lang:e.lang}):void 0,"data-slot":`timeline-lang-tag`,children:[(0,z.jsx)(k,{locale:e.lang}),(0,z.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m1":(0,z.jsx)(k,{locale:e.lang}),"=m2":(0,z.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"it.pct":e.pct})})]},e.lang)}),r>0&&x&&x.byCollection.map((e,t)=>{let n=f(e.pct);return(0,z.jsxs)(`span`,{className:`z-10`,children:[(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:v-20,width:1,height:16,background:`color-mix(in oklch, ${e.color} 60%, var(--border))`}}),(0,z.jsx)(j,{content:`${e.name}: ${e.pct}% · ${d(e.stage)}`,children:(0,z.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:v,width:11,height:11,transform:`translate(-50%, -50%)`,background:e.color,border:`2px solid ${u(e.stage)}`,boxShadow:`0 0 0 1px var(--card)`}})}),(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-1.5 py-0.5 text-[9px] font-medium shadow-sm`,style:{left:n,top:v-38,borderColor:e.color},children:i(`1X6LnF`,`{=m0}{cc.name}{/=m0}{value} {=m3}{cc.pct}%{/=m3}`,{"=m0":(0,z.jsx)(`span`,{translate:`no`,children:e.name}),"=m3":(0,z.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"cc.name":e.name,value:` `,"cc.pct":e.pct})})]},`${e.name}-${t}`)}),r>0&&[0,50,100].map(e=>(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2 text-[9px] text-muted-foreground`,style:{left:f(e),top:y},children:s(`4pXae7`,`${e}%`,{tk:e})},e))]}),(0,z.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground`,children:[[`shippable`,s(`2dg6y8`,`Shippable`)],[`review`,s(`2oadc9`,`In review`)],[`translated`,s(`2Lc17w`,`Translated`)]].map(([e,t])=>(0,z.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,z.jsx)(`span`,{className:`size-2 rounded-full`,style:{background:u(e)}}),t]},e))})]})}function kt({project:e,onUpdate:t,tabID:n,flows:r,onRunFlow:a,onOpenReview:o,formatList:c,basePath:f,status:ee,convergence:g}){let{showError:_}=Le(),{locales:b}=dt(),{hasActive:ne}=Qe(),S=Ke(),{active:C,setActive:se,enabled:A}=Je(),[M,de]=(0,R.useState)([]),[pe,me]=(0,R.useState)([]),[he,ge]=(0,R.useState)(f??``),[ve,be]=(0,R.useState)(!1),[xe,Ce]=(0,R.useState)(!1),[Te,Ee]=(0,R.useState)(c??[]),[Ae,Me]=(0,R.useState)(ee??null),[Fe,Ie]=(0,R.useState)(g??null),[Be,Ue]=(0,R.useState)({}),[We,Ge]=(0,R.useState)(!1),[qe,Ye]=(0,R.useState)(null),[Ze,$e]=(0,R.useState)(new Set),[et,tt]=(0,R.useState)(new Set),[P,rt]=(0,R.useState)(new Set),[at,ot]=(0,R.useState)(!1),[st,lt]=(0,R.useState)(!1),[ft,F]=(0,R.useState)({}),[I,mt]=(0,R.useState)(new Set),[gt,L]=(0,R.useState)(new Set),[vt,yt]=(0,R.useState)(null),[bt,kt]=(0,R.useState)(new Set),[B,Mt]=(0,R.useState)(null),V=e.content??[],H=Object.keys(r??{}),U=!!(c&&f),W=(0,R.useMemo)(()=>{let t={};for(let[n,r]of Object.entries(e.defaults?.formats??{}))t[n]={config:r.config,preset:r.preset};return t},[e.defaults?.formats]),It=(0,R.useCallback)((n,r)=>{let i={...e.defaults},a={...i.formats},o={...a[n]};r.preset?o.preset=r.preset:delete o.preset,r.config&&Object.keys(r.config).length>0?o.config=r.config:delete o.config,Object.keys(o).length===0?delete a[n]:a[n]=o,i.formats=Object.keys(a).length>0?a:void 0,t({...e,defaults:i})},[e,t]),Lt=(0,R.useCallback)(e=>{let t=new Set;for(let n of M)n.pattern===e.path&&n.format&&t.add(n.format);return[...t]},[M]);(0,R.useEffect)(()=>{c||N.listFormats().then(e=>{e&&Ee(e)}).catch(e=>_(`Failed to load formats`,e)),f||N.getBasePath(n).then(e=>{e&&ge(e)}).catch(e=>_(`Failed to get base path`,e))},[n,_,c,f]);let Rt=(0,R.useCallback)(()=>{ee||N.getProjectStatus(n).then(e=>{e&&Me(e)}).catch(()=>{})},[n,ee]),G=(0,R.useCallback)(()=>{g||N.getConvergence(n).then(e=>{e&&Ie(e)}).catch(()=>{})},[n,g]),K=(0,R.useCallback)(async()=>{if(!U){be(!0);try{await N.updateProject(n,e);let[t,r,i]=await Promise.all([N.matchContent(n),N.listProjectFiles(n),N.listOutputs(n)]);de(t??[]),me(r??[]),F(i??{})}catch(e){_(`Failed to scan files`,e)}finally{be(!1)}}},[n,e,_,U]),q=(0,R.useCallback)(()=>{U||N.listOutputs(n).then(e=>{e&&F(e)}).catch(()=>{})},[n,U]);(0,R.useEffect)(()=>{K()},[K,V.length]),(0,R.useEffect)(()=>{Rt(),G()},[Rt,G,e.content]),(0,R.useEffect)(()=>{!n||!a||N.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;Ue(t)})},[n,a,e.flows]),Xe(`project-files-changed`,e=>{e===n&&K()}),Xe(`outputs-changed`,()=>q()),Xe(`project:extracted`,()=>{Rt(),G()});let J=(0,R.useCallback)(async()=>{if(!(!n||U)){Ce(!0);try{await N.runExtract(n),Rt(),G(),await K()}catch(e){_(`Extraction failed`,e)}finally{Ce(!1)}}},[n,U,Rt,G,K,_]),Y=n=>{t({...e,content:n})},X=()=>{Y([...V,{name:`New Collection`,items:[{path:``}]}])},Z=(e,t)=>{let n=[...V];n[e]=t,Y(n)},Q=e=>{Y(V.filter((t,n)=>n!==e))},zt=async()=>{let e=await N.addFilesDialog(n,``);e&&e.length>0&&K()},Bt=(0,R.useCallback)(async e=>{e.preventDefault(),Ge(!1);let t=e.dataTransfer?.files;if(!(!t||t.length===0)){for(let e=0;e<t.length;e++){let r=t[e].path;r&&await N.copyFileToProject(n,r,``)}K()}},[n,K]),Vt=(0,R.useCallback)(e=>{e.preventDefault(),Ge(!0)},[]),Ht=(0,R.useCallback)(e=>{e.preventDefault(),Ge(!1)},[]),Ut=new Set(M.map(e=>e.relative)),Wt=new Set;for(let e of Object.values(ft))for(let t of e)Wt.add(t.relative);let Gt=pe.filter(e=>!e.is_dir&&!Ut.has(e.relative)&&!Wt.has(e.relative)),Kt=C?.collections??[],qt=(0,R.useCallback)(e=>Kt.length===0||Kt.includes(Tt(e)),[Kt]),$=V.map((e,t)=>({coll:e,ci:t})).filter(({coll:e})=>qt(e)),Jt=V.length-$.length,Yt=A&&!!C,Xt=(0,R.useMemo)(()=>{let e=new Map;for(let t of Ae?.collections??[])e.set(t.name,t);return e},[Ae]),Zt=$.map(({coll:e})=>Xt.get(Tt(e))).filter(e=>!!e),Qt=Zt.reduce((e,t)=>e+t.blockCount,0),$t=Array.from(new Set(Zt.flatMap(e=>it(e.targetLanguages,C)))).map(e=>{let t=0,n=0;for(let r of Zt)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,pct:n>0?Math.round(t/n*100):0}}),en=!!Ae?.hasData,tn=(e,t,n)=>{let r=Ct(e.format),a=e.format?.config&&Object.keys(e.format.config).length>0,o=r?[]:Lt(e),c=!r;return(0,z.jsxs)(`div`,{className:`space-y-2`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`yBWxw`,`Path pattern`)}),(0,z.jsx)(je,{value:e.path,onChange:n=>t({...e,path:n}),placeholder:s(`1R8M9g`,`src/locales/en/*.json`)})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`39Lmr`,`Format`)}),(0,z.jsx)(De,{value:r,onChange:n=>t({...e,format:n?{name:n}:void 0}),formats:Te})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3YGJcS`,`Target path`)}),(0,z.jsx)(we,{value:e.target??``,onChange:n=>t({...e,target:n||void 0}),placeholder:s(`3T9UTi`,`output/{lang}  ·  or output/{lang}/{dir}/{name}.{ext}`)})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:i(`5W6k9`,`Base{value} {=m1} (optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard) {/=m1}`,{"=m1":(0,z.jsx)(`span`,{className:`font-normal text-muted-foreground/60`,children:`(optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard)`})},{value:` `})}),(0,z.jsx)(je,{value:e.base??``,onChange:n=>t({...e,base:n||void 0}),placeholder:s(`jiLnw`,`auto (e.g. input/docs)`)})]}),r===`exec`&&(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`1gbrZJ`,`Extractor command`)}),(0,z.jsx)(`input`,{type:`text`,value:typeof e.format?.config?.command==`string`?e.format.config.command:``,onChange:n=>t({...e,format:{...e.format,config:{...e.format?.config,command:n.target.value||void 0}}}),placeholder:s(`1YiMcB`,`vp kapi-react extract --stream`),className:`w-full rounded-md border border-input bg-background px-2 py-1 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,z.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:s(`4oM908`,"`kapi extract -p` runs this command; NUL-separated paths on stdin, NDJSON blocks on stdout.")})]}),(r||o.length>0)&&(0,z.jsx)(`div`,{children:(0,z.jsxs)(E,{variant:`ghost`,size:`xs`,onClick:()=>Ye(n),className:`h-auto px-0 text-muted-foreground hover:text-foreground`,children:[(0,z.jsx)(te,{size:10}),r?(0,z.jsxs)(z.Fragment,{children:[s(`66RA9`,`Configure {fmt}`,{fmt:r}),(a||e.format?.preset)&&(0,z.jsx)(`span`,{className:`ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-primary`,children:e.format?.preset?e.format.preset:Object.keys(e.format.config).length})]}):s(`4h7nHO`,`Configure formats ({count})`,{count:o.length})]})}),qe===n&&(c?(0,z.jsx)(pt,{open:!0,onOpenChange:e=>!e&&Ye(null),title:s(`48Xlr4`,`Configure formats`),description:s(`1bIT1z`,`This pattern auto-detects a format per file. Tune any of them here — settings apply project-wide.`),formats:o,allFormats:Te,allowAdd:!0,filterExtension:wt(e.path),values:W,onChange:It,scopeNote:s(`10MXfr`,`Stored in the project's defaults.formats — shared by every content item.`)}):(0,z.jsx)(pt,{open:!0,onOpenChange:e=>!e&&Ye(null),title:s(`66RA9`,`Configure {fmt}`,{fmt:r}),formats:[r],allFormats:Te,values:{[r]:{config:e.format?.config,preset:e.format?.preset}},onChange:(n,r)=>t({...e,format:{name:n,preset:r.preset,config:r.config}}),scopeNote:s(`2mxJu6`,`Applies to this content item.`)}))]})},nn=(e,t)=>e(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}),rn=e=>$e(t=>new Set(t).add(e)),an=e=>ct(e)?[e.path??``]:(e.items??[]).map(e=>e.path),on=e=>{let t=new Set(an(e).filter(Boolean));return M.filter(e=>t.has(e.pattern))},sn=(t,n)=>ct(t)?tn({path:t.path??``,format:t.format,target:t.target},e=>Z(n,{path:e.path,format:e.format,target:e.target}),`bare-${n}`):(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`2wzVub`,`Collection name`)}),(0,z.jsx)(`input`,{type:`text`,value:t.name??``,onChange:e=>Z(n,{...t,name:e.target.value||void 0}),placeholder:s(`3fQf8Y`,`Collection name`),className:`w-full rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`25vgeN`,`Source override`)}),(0,z.jsx)(Ve,{value:t.source_language??``,onChange:e=>Z(n,{...t,source_language:e||void 0}),locales:b,placeholder:e.defaults?.source_language?s(`10wAUR`,`Inherit ({source})`,{source:e.defaults.source_language}):s(`4FMXin`,`Select source...`)})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`oVuml`,`Target overrides`)}),(0,z.jsx)(Ne,{value:t.target_languages??[],onChange:e=>Z(n,{...t,target_languages:e.length>0?e:void 0}),locales:b,placeholder:e.defaults?.target_languages?.length?s(`s2EQV`,`Inherit ({targets})`,{targets:e.defaults.target_languages.join(`, `)}):s(`1YSqO`,`Add targets...`)})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-1 block text-xs text-muted-foreground`,children:s(`4GjmHO`,`Patterns`)}),(0,z.jsxs)(`div`,{className:`space-y-2`,children:[(t.items??[]).map((e,r)=>(0,z.jsxs)(`div`,{className:`group/item relative rounded-md border border-border p-3`,children:[(0,z.jsx)(`div`,{className:`absolute right-2 top-2 opacity-0 group-hover/item:opacity-100`,children:(0,z.jsx)(ue,{onDelete:()=>{let e=(t.items??[]).filter((e,t)=>t!==r);e.length===0?Q(n):Z(n,{...t,items:e})},mode:`icon`})}),tn(e,e=>{let i=[...t.items??[]];i[r]=e,Z(n,{...t,items:i})},`coll-${n}-${r}`)]},r)),(0,z.jsx)(E,{variant:`ghost`,size:`xs`,onClick:()=>Z(n,{...t,items:[...t.items??[],{path:``}]}),className:`text-muted-foreground`,children:i(`1EfPvQ`,`{=m0} Add another pattern`,{"=m0":(0,z.jsx)(ce,{size:10})})})]})]})]}),cn=e=>{let t=e.slice(0,Pt);return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`${Ft} overflow-y-auto`,"data-slot":`matched-files-scroll`,children:(0,z.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,z.jsx)(`thead`,{className:`sticky top-0 z-10 bg-muted/40 backdrop-blur`,children:(0,z.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`43TElj`,`File`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3q7zgM`,`Format`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`qVPwe`,`Pattern`)})]})}),(0,z.jsx)(`tbody`,{children:t.map((e,t)=>{let n=ft[e.relative]??[],r=I.has(e.relative),i=n.filter(e=>e.exists).length,a=Et(n),o=gt.has(e.relative);return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsx)(j,{content:s(`4EZGfu`,`Preview {file}`,{file:e.relative}),children:(0,z.jsxs)(`tr`,{onClick:()=>yt({path:e.path,relative:e.relative}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,children:[(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[n.length>0?(0,z.jsx)(j,{content:r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),children:(0,z.jsx)(`button`,{onClick:t=>{t.stopPropagation(),mt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n})},className:`shrink-0 text-muted-foreground hover:text-foreground`,"aria-label":r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),children:r?(0,z.jsx)(h,{size:12}):(0,z.jsx)(x,{size:12})})}):(0,z.jsx)(w,{size:12,className:`shrink-0 text-muted-foreground`}),e.relative]})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsx)(O,{variant:`secondary`,children:e.format||`unknown`})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5 text-muted-foreground`,children:(0,z.jsxs)(`span`,{className:`flex items-center justify-between gap-2`,children:[(0,z.jsx)(`span`,{children:e.pattern}),n.length>0&&(0,z.jsx)(O,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:s(`3LFNpN`,`{present}/{total} outputs`,{present:i,total:n.length})})]})})]})}),r&&n.length>0&&(0,z.jsx)(j,{content:o?s(`1rbiuq`,`Hide per-language outputs`):s(`3GyGnC`,`Show per-language outputs`),children:(0,z.jsxs)(`tr`,{onClick:()=>L(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,children:[(0,z.jsx)(`td`,{className:`py-1 pl-9 pr-3`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[o?(0,z.jsx)(h,{size:11,className:`shrink-0`}):(0,z.jsx)(x,{size:11,className:`shrink-0`}),(0,z.jsx)(u,{size:10,className:`shrink-0 opacity-50`}),(0,z.jsx)(`span`,{translate:`no`,children:a})]})}),(0,z.jsx)(`td`,{className:`px-3 py-1`,children:(0,z.jsx)(O,{variant:`secondary`,children:e.format||`—`})}),(0,z.jsx)(`td`,{className:`px-3 py-1 text-right`,children:(0,z.jsx)(O,{variant:`outline`,className:`text-[10px] font-normal`,children:s(`2jhS0l`,`{present}/{total} generated`,{present:i,total:n.length})})})]})}),r&&o&&n.map(e=>(0,z.jsx)(j,{content:e.exists?s(`1VO4bN`,`Inspect {file}`,{file:e.relative}):s(`2K2GuI`,`Not generated yet — run a flow to create it`),children:(0,z.jsxs)(`tr`,{onClick:e.exists?()=>yt({path:e.path,relative:e.relative}):void 0,className:`border-b border-border last:border-0 ${e.exists?`cursor-pointer hover:bg-accent/30`:`opacity-60`}`,children:[(0,z.jsx)(`td`,{className:`py-1 pl-16 pr-3`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[(0,z.jsx)(k,{locale:e.lang}),(0,z.jsx)(`span`,{children:e.relative})]})}),(0,z.jsx)(`td`,{className:`px-3 py-1`,children:e.exists?(0,z.jsx)(O,{variant:`secondary`,children:e.format||`—`}):(0,z.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:s(`1wl1hi`,`pending`)})}),(0,z.jsx)(`td`,{className:`px-3 py-1 text-right text-muted-foreground`,children:e.exists?St(e.size):``})]},`${t}-${e.relative}`)}))]},t)})})]})}),(0,z.jsx)(Re,{shown:t.length,total:e.length,noun:s(`2rW3Pa`,`matched files`),hint:s(`3mTCmW`,`Refine the collection's glob to narrow the list.`)})]})},ln=e=>{let t=e.slice(0,Pt);return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`${Ft} overflow-y-auto`,"data-slot":`unmatched-files-scroll`,children:(0,z.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,z.jsx)(`thead`,{className:`sticky top-0 z-10 bg-muted/40 backdrop-blur`,children:(0,z.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`43TElj`,`File`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3q7zgM`,`Format`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 text-right font-medium`,children:s(`3G3DIE`,`Size`)})]})}),(0,z.jsx)(`tbody`,{children:t.map(e=>{let t=ht(e.relative),n=bt.has(e.path),r=t?()=>kt(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}):e.format?()=>yt({path:e.path,relative:e.relative}):void 0;return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsx)(j,{content:t?s(`Kgjt4`,`Browse entries in {file}`,{file:e.relative}):e.format?s(`4EZGfu`,`Preview {file}`,{file:e.relative}):void 0,children:(0,z.jsxs)(`tr`,{onClick:r,className:`border-b border-border last:border-0 text-muted-foreground hover:bg-accent/30 ${r?`cursor-pointer`:``}`,children:[(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[t?n?(0,z.jsx)(h,{size:12,className:`shrink-0`}):(0,z.jsx)(x,{size:12,className:`shrink-0`}):(0,z.jsx)(w,{size:12,className:`shrink-0`}),e.relative]})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:e.format?(0,z.jsx)(O,{variant:`secondary`,children:e.format}):(0,z.jsx)(`span`,{children:s(`4sX9jC`,`—`)})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5 text-right`,children:St(e.size)})]})}),t&&n&&(0,z.jsx)(`tr`,{className:`border-b border-border last:border-0`,children:(0,z.jsx)(`td`,{colSpan:3,className:`px-3 py-1.5`,children:(0,z.jsx)(_t,{archivePath:e.path,onSelect:t=>Mt({path:e.path,relative:e.relative,entry:t})})})})]},e.relative)})})]})}),(0,z.jsx)(Re,{shown:t.length,total:e.length,noun:s(`3rAYWb`,`files`),hint:s(`3A0pRq`,`Narrow with a collection, or refine your project's globs.`)})]})},un=at&&!!a&&H.length>0,dn=$.map(e=>e.ci),fn=dn.length>0&&dn.every(e=>P.has(e)),pn=Array.from(new Set($.filter(e=>P.has(e.ci)).flatMap(({coll:e})=>on(e).map(e=>e.path)))),mn=e=>nn(rt,e),hn=()=>rt(new Set),gn=()=>rt(fn?new Set:new Set(dn)),_n=P.size>0,vn=_n?pn.length>0:M.length>0,yn=e=>Be[e]?.valid!==!1,bn=e=>{let t=Be[e];if(t&&t.valid===!1)return s(`1WxaK7`,`Cannot run: {issues}`,{issues:(t.issues??[]).map(e=>e.message).join(`; `)});if(!vn)return s(`SbyAd`,`No matched files to run on`)},xn=(e,t)=>{_n?(a?.(e,t,{scopePaths:pn,scopeLabel:s(`2TVMjG`,`{count} collections`,{count:P.size})}),hn()):a?.(e,t)},Sn=it(Array.from(new Set($.flatMap(({coll:t})=>(t.target_languages??e.defaults?.target_languages??[]).map(String)))),C),Cn=Sn.length>=Nt,wn=(0,R.useMemo)(()=>{let e=new Map;for(let t of Fe?.locales??[])e.set(`${t.collection??``} ${t.locale}`,t);return e},[Fe]),Tn=wn.size>0,En=(e,t)=>{let n=ct(e)?``:e.name??``;return wn.get(`${n} ${t}`)??wn.get(` ${t}`)},Dn=(en||Tn)&&Sn.length>0,On=e=>(e.pct?.translated??0)===0?`none`:e.shippable?`shippable`:(e.pct?.reviewed??0)>0?`review`:`translated`,kn=new Map;$.forEach(({coll:e},t)=>kn.set(e.name??``,At(t)));let An=Tn?Sn.map(e=>{let t=0,n=0,r=0,i=0,a=[];for(let o of Fe?.locales??[])o.locale===e&&(t+=o.total,n+=o.total*(o.pct?.translated??0)/100,r+=o.total*(o.pct?.reviewed??0)/100,o.shippable&&(i+=o.total),a.push({name:o.collection||s(`2hJcYw`,`(unnamed)`),pct:Math.round(o.pct?.translated??0),stage:On(o),color:kn.get(o.collection||``)??`var(--muted-foreground)`}));a.sort((e,t)=>t.pct-e.pct);let o=t>0?Math.round(n/t*100):0,c=t>0?Math.round(r/t*100):0;return{lang:e,pct:o,stage:t===0?`none`:i/t>=.999?`shippable`:c>0?`review`:o>0?`translated`:`none`,byCollection:a}}):null,jn=(e,t)=>{let n=Xt.get(Tt(e));return!n||n.blockCount===0||!n.targetLanguages.includes(t)?null:Math.round((n.coverage?.[t]??0)/n.blockCount*100)},Mn=(e,t)=>{if(Tn){let n=xt(En(e,t));if(n.key===`none`)return(0,z.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)});let r=o?`${t}: ${n.label} · ${n.pct}% translated — ${s(`4rHopU`,`click to review`)}`:`${t}: ${n.label} · ${n.pct}% translated`,a=o?()=>o({collection:ct(e)?``:e.name??``,locale:t}):void 0,c=Cn?(0,z.jsx)(j,{content:r,children:(0,z.jsxs)(`span`,{className:`flex items-center justify-center gap-1 text-[10px]`,children:[(0,z.jsx)(`span`,{className:`size-2 shrink-0 rounded-full`,style:{background:n.color}}),(0,z.jsx)(`span`,{className:`tabular-nums text-muted-foreground`,children:n.pct})]})}):(0,z.jsx)(j,{content:r,children:i(`383sd8`,`{=m0} {=m1} {r.label} {/=m1} {=m3}{r.pct}%{/=m3} {/=m0}`,{"=m0":(0,z.jsxs)(`span`,{className:`flex flex-col items-center gap-0.5`,children:[(0,z.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})]}),"=m1":(0,z.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),"=m3":(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})},{"r.label":n.label,"r.pct":n.pct})});return a?(0,z.jsx)(`button`,{type:`button`,className:`rounded-sm hover:bg-accent`,onClick:a,"aria-label":s(`1p5aVl`,`Review {lang} in this collection`,{lang:t}),"data-slot":`ship-gate-cell`,children:c}):c}let n=jn(e,t);return n===null?(0,z.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)}):Cn?(0,z.jsx)(j,{content:`${t}: ${n}%`,children:(0,z.jsx)(`span`,{className:`flex h-6 items-center justify-center rounded text-[10px] font-medium tabular-nums`,style:{background:jt(n),color:n>55?`var(--primary-foreground)`:`var(--muted-foreground)`},children:n})}):(0,z.jsx)(j,{content:`${t}: ${n}%`,children:i(`FjfyK`,`{=m0} {=m1} {=m2} {/=m1} {=m3}{p}%{/=m3} {/=m0}`,{"=m0":(0,z.jsxs)(`span`,{className:`flex flex-col items-center gap-1`,children:[(0,z.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})]}),"=m1":(0,z.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),"=m2":(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}}),"=m3":(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})},{p:n})})},Nn=$.map(({coll:e},t)=>({name:Tt(e),value:Xt.get(Tt(e))?.blockCount??0,fill:At(t)})),Pn=Nn.filter(e=>e.value>0),Fn=Dn?`repeat(${Sn.length}, minmax(${Cn?40:60}px, 1fr))`:`1fr`,In=`${un?`24px `:``}minmax(150px,1.6fr) 52px 62px ${Fn} auto`;return(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,z.jsxs)(`h2`,{className:`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,z.jsx)(w,{size:14}),s(`3LuUL6`,`Collections`)]}),he&&(0,z.jsx)(`span`,{className:`hidden text-xs text-muted-foreground sm:inline`,children:s(`1BV3ls`,`relative to {base}`,{base:S(he)})}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,z.jsxs)(E,{variant:`outline`,size:`sm`,onClick:X,"aria-label":s(`Yg9iB`,`Add content collection`),children:[(0,z.jsx)(ce,{size:12}),s(`2Q60vn`,`Add Collection`)]}),(0,z.jsxs)(E,{variant:`outline`,size:`sm`,onClick:zt,"aria-label":s(`R68OC`,`Add files`),children:[(0,z.jsx)(ce,{size:12}),s(`Hukdl`,`Add Files`)]}),(0,z.jsxs)(E,{variant:`ghost`,size:`sm`,onClick:()=>ot(e=>(e&&hn(),!e)),"aria-expanded":at,"aria-label":s(`2gxXhO`,`Advanced actions`),"data-slot":`advanced-toggle`,children:[at?(0,z.jsx)(h,{size:12}):(0,z.jsx)(x,{size:12}),s(`34Yci`,`Advanced`)]})]})]}),at&&(0,z.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2`,"data-slot":`advanced-bar`,children:[(0,z.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3DcfjW`,`Manual run`)}),un&&(H.length===1?(0,z.jsx)(j,{content:bn(H[0]),children:(0,z.jsx)(`span`,{className:`inline-flex`,children:(0,z.jsxs)(E,{size:`sm`,disabled:ne||!vn||!yn(H[0]),onClick:()=>xn(H[0],r[H[0]]),"aria-label":_n?s(`3jqAmN`,`Run {flow} on selected collections`,{flow:H[0]}):s(`4cKRZ3`,`Run {flow} on all collections`,{flow:H[0]}),children:[(0,z.jsx)(m,{size:12}),_n?s(`2ovFIO`,`Run on selected`):s(`15F8wT`,`Run {flow}`,{flow:H[0]})]})})}):(0,z.jsxs)(_e,{children:[(0,z.jsx)(Se,{asChild:!0,children:(0,z.jsxs)(E,{size:`sm`,disabled:ne||!vn,"aria-label":s(`16daiB`,`Run a flow`),children:[(0,z.jsx)(m,{size:12}),_n?s(`2ovFIO`,`Run on selected`):s(`3nmBYd`,`Run flow`),(0,z.jsx)(h,{size:12})]})}),(0,z.jsxs)(Pe,{align:`end`,children:[(0,z.jsx)(ye,{children:_n?s(`2G8fsS`,`Run on {count} collections`,{count:P.size}):s(`1oOSFP`,`Run on all collections`)}),H.map(e=>(0,z.jsx)(j,{content:bn(e),children:(0,z.jsxs)(ze,{disabled:!vn||!yn(e),onClick:()=>xn(e,r[e]),children:[(0,z.jsx)(m,{size:12}),e]})},e))]})]})),(0,z.jsx)(j,{content:s(`3foHW3`,`Manual override — Bring up to date re-extracts changed sources automatically.`),children:(0,z.jsx)(`span`,{className:`inline-flex`,children:(0,z.jsxs)(E,{variant:`outline`,size:`sm`,onClick:()=>void J(),disabled:xe||ve,"aria-label":en?s(`4xtf4r`,`Re-extract content`):s(`2abGly`,`Run extract`),children:[xe?(0,z.jsx)(re,{size:12,className:`animate-spin`}):(0,z.jsx)(ie,{size:12}),en?s(`VWqFK`,`Re-extract`):s(`3f7Alp`,`Extract`)]})})}),(0,z.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:s(`4h5TLL`,`Tick collections below to scope a run.`)})]}),Yt&&(0,z.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs`,children:[(0,z.jsx)(v,{size:12,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:Jt>0?s(`41GmQA`,`Filtered by {name} — {count} collection(s) hidden`,{name:C.name,count:Jt}):s(`32FBSf`,`Filtered by {name}`,{name:C.name})}),(0,z.jsx)(E,{variant:`link`,size:`xs`,className:`ml-auto h-auto px-0`,onClick:()=>void se(``),children:s(`4AAIEq`,`Show all`)})]}),V.length>0&&(en?(0,z.jsx)(D,{className:`mb-3 p-4`,children:(0,z.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[Pn.length>0?(0,z.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,z.jsx)(fe,{width:`100%`,height:`100%`,children:(0,z.jsx)(He,{children:(0,z.jsx)(ke,{data:Pn,dataKey:`value`,nameKey:`name`,innerRadius:`56%`,outerRadius:`100%`,paddingAngle:Pn.length>1?2:0,strokeWidth:0,children:Pn.map(e=>(0,z.jsx)(Oe,{fill:e.fill},e.name))})})})}):(0,z.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:s(`750BK`,`No blocks`)}),(0,z.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,z.jsx)(`li`,{className:`font-medium text-foreground`,children:s(`4vcVki`,`{count} blocks`,{count:Qt})}),Nn.map((e,t)=>(0,z.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,z.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:At(t)}}),(0,z.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,z.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.value})]},e.name))]})]}),An&&An.length>0?(0,z.jsx)(Ot,{items:An,onSelect:o?e=>o({locale:e}):void 0}):$t.length>0&&(0,z.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,z.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`jP6Vy`,`Coverage across collections`)}),(0,z.jsx)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-1.5`,children:$t.map(e=>(0,z.jsx)(Dt,{label:e.lang,pct:e.pct},e.lang))})]})]})}):(0,z.jsxs)(D,{className:`mb-3 flex items-center gap-3 p-4`,children:[(0,z.jsx)(d,{size:18,className:`shrink-0 text-muted-foreground/50`}),(0,z.jsx)(`div`,{className:`flex-1 text-xs text-muted-foreground`,children:s(`2JAuYT`,`Nothing extracted yet — run extract to read your content and analyze coverage.`)}),(0,z.jsx)(E,{size:`sm`,onClick:()=>void J(),disabled:xe||ve,children:xe?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(re,{size:12,className:`animate-spin`}),s(`1g3fu4`,`Extracting...`)]}):s(`1n6yRm`,`Run extract`)})]})),V.some(e=>e.archive)&&(0,z.jsx)(`div`,{className:`mb-4`,children:(0,z.jsx)(ut,{tabID:n})}),un&&P.size>0&&(0,z.jsxs)(`div`,{className:`sticky top-2 z-10 mb-3 flex flex-wrap items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs shadow-sm backdrop-blur`,children:[(0,z.jsx)(`span`,{className:`font-medium`,children:s(`10dUDc`,`{count} selected`,{count:P.size})}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3YDabm`,`{count} files`,{count:pn.length})}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`323P9x`,`·`)}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`lTjdA`,`run via Run on selected, above`)}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,z.jsx)(E,{variant:`ghost`,size:`xs`,onClick:gn,children:fn?s(`3H287u`,`Deselect all`):s(`3xLcXG`,`Select all`)}),(0,z.jsx)(E,{variant:`ghost`,size:`xs`,onClick:hn,children:s(`45Z9at`,`Clear`)})]})]}),(0,z.jsx)(`div`,{onDrop:Bt,onDragOver:Vt,onDragLeave:Ht,className:`rounded-lg border-2 transition-colors ${We?`border-primary bg-primary/5`:`border-transparent`}`,children:V.length===0&&Gt.length===0?(0,z.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 text-center`,children:[(0,z.jsx)(y,{size:24,className:`mb-3 text-muted-foreground/50`}),(0,z.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:s(`2p5m8o`,`Add a collection to map your source files, or drop files here.`)})]}):(0,z.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-border`,children:[$.length>0&&(0,z.jsxs)(`div`,{className:`grid items-center gap-x-3 border-b border-border bg-muted/30 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,style:{gridTemplateColumns:In},children:[un&&(0,z.jsx)(`span`,{}),(0,z.jsx)(`span`,{children:s(`iFWBE`,`Collection`)}),(0,z.jsx)(`span`,{className:`text-right`,children:s(`3epYU3`,`Files`)}),(0,z.jsx)(`span`,{className:`text-right`,children:s(`vlTt2`,`Blocks`)}),Dn?Sn.map(e=>(0,z.jsx)(`span`,{className:`text-center normal-case`,translate:`no`,children:Cn?e.split(`-`)[0]:e},e)):(0,z.jsx)(`span`,{children:en?``:s(`3pa0Do`,`Coverage`)}),(0,z.jsx)(`span`,{})]}),$.map(({coll:e,ci:t},n)=>{let i=et.has(t),o=Ze.has(t),c=on(e),u=ct(e)?e.path||s(`3epYU3`,`Files`):e.name||s(`2FTnrQ`,`Untitled collection`),d=Xt.get(Tt(e));return(0,z.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,z.jsxs)(`div`,{className:`grid items-center gap-x-3 px-3 py-2.5 hover:bg-accent/20`,style:{gridTemplateColumns:In},children:[un&&(0,z.jsx)(le,{checked:P.has(t),onCheckedChange:()=>mn(t),"aria-label":s(`3mI5eL`,`Select {collection}`,{collection:u}),className:`shrink-0`}),(0,z.jsxs)(`button`,{onClick:()=>nn($e,t),className:`flex min-w-0 items-center gap-2 text-left`,"aria-label":o?s(`36n48F`,`Collapse`):s(`2HBGFu`,`Expand`),"aria-expanded":o,children:[o?(0,z.jsx)(h,{size:13,className:`shrink-0 text-muted-foreground`}):(0,z.jsx)(x,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(ae,{size:13,className:`shrink-0`,style:{color:At(n)}}),(0,z.jsx)(j,{content:u,children:(0,z.jsx)(`span`,{className:`truncate text-sm font-medium`,children:u})})]}),(0,z.jsx)(`span`,{className:`text-right text-xs tabular-nums text-muted-foreground`,children:c.length}),(0,z.jsx)(`span`,{className:`text-right text-xs tabular-nums`,children:en&&d?d.blockCount:`—`}),Dn?Sn.map(t=>(0,z.jsx)(R.Fragment,{children:Mn(e,t)},t)):(0,z.jsx)(`span`,{}),(0,z.jsxs)(`span`,{className:`flex items-center justify-end gap-1`,children:[at&&a&&c.length>0&&H.length>0&&(H.length===1?(0,z.jsx)(E,{variant:`ghost`,size:`icon-sm`,disabled:ne,onClick:()=>a(H[0],r[H[0]],{scopePaths:c.map(e=>e.path),scopeLabel:u}),"aria-label":s(`WT7Mg`,`Run {flow} on {collection}`,{flow:H[0],collection:u}),children:(0,z.jsx)(m,{size:13})}):(0,z.jsxs)(_e,{children:[(0,z.jsx)(Se,{asChild:!0,children:(0,z.jsx)(E,{variant:`ghost`,size:`icon-sm`,disabled:ne,"aria-label":s(`37dEBh`,`Run a flow on {collection}`,{collection:u}),children:(0,z.jsx)(m,{size:13})})}),(0,z.jsxs)(Pe,{align:`end`,children:[(0,z.jsx)(ye,{children:s(`3r1PYB`,`Run on {collection}`,{collection:u})}),H.map(e=>(0,z.jsxs)(ze,{onClick:()=>a(e,r[e],{scopePaths:c.map(e=>e.path),scopeLabel:u}),children:[(0,z.jsx)(m,{size:12}),e]},e))]})]})),(0,z.jsx)(E,{variant:i?`secondary`:`ghost`,size:`icon-sm`,onClick:()=>{rn(t),nn(tt,t)},"aria-label":i?s(`1vDkj2`,`Done editing`):s(`h5zbs`,`Edit collection`),children:i?(0,z.jsx)(p,{size:13}):(0,z.jsx)(l,{size:13})}),(0,z.jsx)(ue,{onDelete:()=>Q(t),mode:`icon`})]})]}),o&&(0,z.jsxs)(`div`,{className:`border-t border-border bg-muted/10`,children:[i&&(0,z.jsxs)(`div`,{className:`animate-in slide-in-from-top-2 fade-in border-b-2 border-primary/40 bg-muted/40 p-4 shadow-inner duration-200`,children:[(0,z.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary`,children:[(0,z.jsx)(l,{size:11}),s(`h5zbs`,`Edit collection`)]}),sn(e,t)]}),c.length>0?cn(c):(0,z.jsxs)(`p`,{className:`px-4 py-6 text-center text-xs text-muted-foreground`,children:[s(`1XxbaH`,`No files matched this collection's patterns.`),!i&&(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`button`,{onClick:()=>{rn(t),tt(e=>new Set(e).add(t))},className:`text-primary hover:underline`,children:s(`2Uq3Xf`,`Edit patterns`)})]})]})]})]},t)}),!Kt.length&&Gt.length>0&&(0,z.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,z.jsxs)(`button`,{onClick:()=>lt(e=>!e),className:`flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-accent/20`,"aria-label":st?s(`2HBGFu`,`Expand`):s(`36n48F`,`Collapse`),children:[st?(0,z.jsx)(x,{size:13,className:`shrink-0 text-muted-foreground`}):(0,z.jsx)(h,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(oe,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(`span`,{className:`text-sm font-medium`,children:s(`41kjwU`,`Other files`)}),(0,z.jsx)(O,{variant:`secondary`,className:`text-[10px] font-normal`,children:s(`3YDabm`,`{count} files`,{count:Gt.length})})]}),!st&&(0,z.jsx)(`div`,{className:`border-t border-border bg-muted/10`,children:ln(Gt)})]})]})}),(0,z.jsx)(nt,{tabID:n,filePath:vt?.path??null,filename:vt?.relative??``,onClose:()=>yt(null)}),(0,z.jsx)(nt,{tabID:n,filePath:B?.path??null,filename:B?`${B.relative}!${B.entry}`:``,entryPath:B?.entry??null,onClose:()=>Mt(null)})]})}var R,z,B,At,jt,Mt,Nt,Pt,Ft,V=t((()=>{a(),R=e(n(),1),Te(),C(),Ee(),st(),Ue(),mt(),lt(),P(),bt(),Me(),qe(),Ze(),ft(),Ye(),$e(),rt(),z=r(),B=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],At=e=>B[e%B.length],jt=e=>`color-mix(in oklch, var(--primary) ${e}%, var(--muted))`,Mt={shippable:`oklch(0.62 0.17 150)`,review:`oklch(0.72 0.15 80)`,translated:`var(--primary)`,none:`var(--muted-foreground)`},Nt=5,Pt=500,Ft=`max-h-[28rem]`,kt.__docgenInfo={description:`CollectionsPanel is the collection-centric spine of the project home: one card
per content collection carrying its own stats (file count, block count,
coverage bar), expandable to its matched-file table and editable inline. It
folds together what used to be the standalone Content page and the Home
page's read-only Content Overview (issue #1068) — collections, files,
patterns, languages, coverage and the unmatched "Other files" all live here.`,methods:[],displayName:`CollectionsPanel`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``},flows:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`FlowSpec`}],raw:`Record<string, FlowSpec>`},description:`The project's flows, offered as a per-collection "Run" menu on each card.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:`Run a flow scoped to a single collection's files.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope — wired
 to the ship-gate cells and the timeline tags.`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`Pre-loaded formats for Storybook — skips api.listFormats().`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — skips api.getBasePath().`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`}}}}));function H({project:e,displayName:t,tabID:n,onUpdate:r,onRunFlow:a,onNavigate:l,onOpenReview:u,pluginsResolved:d,pluginIssues:p,status:m,convergence:h,plan:v,onBringUpToDate:y,onResetSample:b,sampleInfo:x,formatList:ne,basePath:ae}){let{active:C}=Je(),[oe,se]=(0,U.useState)(null),[w,ce]=(0,U.useState)(x??null),[T,D]=(0,U.useState)(!1);(0,U.useEffect)(()=>{!n||x||N.getSampleInfo(n).then(e=>{e&&ce(e)}).catch(()=>{})},[n,x]);let le=(0,U.useCallback)(()=>{D(!0),n&&N.acknowledgeSampleRevision(n)},[n]),ue=(0,U.useCallback)(e=>{se(e),N.installPlugin(e)},[]),A=e.defaults??{},j=e.plugins??{},M=Object.keys(e.flows??{}).length,de=C?.languages??[];return(0,W.jsxs)(`div`,{className:`p-6`,children:[(0,W.jsxs)(`div`,{className:`mb-6`,children:[(0,W.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,W.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,W.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,W.jsx)(c,{size:14}),A.source_language?(0,W.jsx)(k,{locale:String(A.source_language)}):(0,W.jsx)(`span`,{children:o(`No source`)}),(0,W.jsx)(`span`,{children:`→`}),A.target_languages?.length?A.target_languages.map(e=>(0,W.jsx)(k,{locale:String(e),muted:de.length>0&&!de.includes(String(e))},String(e))):(0,W.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,W.jsx)(c,{size:14}),"=m2":A.source_language?(0,W.jsx)(k,{locale:String(A.source_language)}):(0,W.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,W.jsx)(`span`,{children:`→`}),"=m4":A.target_languages?.length?A.target_languages.map(e=>(0,W.jsx)(k,{locale:String(e),muted:de.length>0&&!de.includes(String(e))},String(e))):(0,W.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,W.jsx)(O,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(j).length>0&&Object.entries(j).map(([e,t])=>(0,W.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,W.jsx)(g,{size:10}),(0,W.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,W.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),d===!1&&p&&p.length>0&&(0,W.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,W.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,W.jsx)(ee,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,W.jsxs)(`div`,{className:`flex-1`,children:[(0,W.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,W.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,W.jsx)(`ul`,{className:`mt-2 space-y-1`,children:p.map(e=>(0,W.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,W.jsx)(O,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,W.jsxs)(E,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>ue(e.plugin),disabled:oe===e.plugin,children:[oe===e.plugin?(0,W.jsx)(re,{size:11,className:`animate-spin`}):(0,W.jsx)(g,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,W.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,W.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,W.jsx)(E,{size:`sm`,variant:`outline`,onClick:()=>l(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,W.jsx)(te,{size:12})})}),(0,W.jsx)(E,{size:`sm`,variant:`outline`,onClick:()=>l(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,W.jsx)(g,{size:12})})})]})]})]})}),w?.upgrade_available&&!T&&(0,W.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,W.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,W.jsx)(ie,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,W.jsxs)(`div`,{className:`flex-1`,children:[(0,W.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,W.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,W.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,W.jsxs)(E,{size:`sm`,onClick:()=>b?.(),children:[(0,W.jsx)(ie,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,W.jsx)(E,{size:`sm`,variant:`outline`,onClick:le,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),n&&(0,W.jsx)(et,{tabID:n,onBringUpToDate:y,convergence:h,plan:v}),(0,W.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,W.jsx)(be,{icon:(0,W.jsx)(f,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>l(`checks`)}),(0,W.jsx)(be,{icon:(0,W.jsx)(_,{size:16}),title:s(`25KjwG`,`Flows`),description:M>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:M}):s(`3ahfLk`,`Build your first flow`),onClick:()=>l(`flows`)}),(0,W.jsx)(be,{icon:(0,W.jsx)(S,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>l(`tools`)}),(0,W.jsx)(be,{icon:(0,W.jsx)(te,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>l(`project-settings`)})]}),n&&(0,W.jsx)(kt,{project:e,onUpdate:r??(()=>{}),tabID:n,flows:e.flows,onRunFlow:a,onOpenReview:u,formatList:ne,basePath:ae,status:m,convergence:h}),M===0&&(0,W.jsx)(Fe,{icon:(0,W.jsx)(_,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,W.jsx)(E,{variant:`link`,size:`sm`,onClick:()=>l(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var U,W,It=t((()=>{a(),U=e(n(),1),C(),Ee(),Ue(),Ye(),V(),tt(),W=r(),H.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onUpdate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:`Persist project edits made on the merged collection surface.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope?: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope.`},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`},plan:{required:!1,tsType:{name:`ConvergePlan`},description:`Pre-loaded pre-flight plan for Storybook/tests — skips api.getConvergePlan().`},onBringUpToDate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Launch the convergence run (Bring up to date → runner passes view).`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`import("../types/api").FormatInfo[]`},description:`Pre-loaded formats for Storybook — forwarded to CollectionsPanel.`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — forwarded to CollectionsPanel.`}}}})),Lt,Rt,G,K,q,J,Y,X,Z,Q,zt;t((()=>{It(),{fn:Lt}=__STORYBOOK_MODULE_TEST__,Rt={title:`Pages/HomePage`,component:H,tags:[`autodocs`],args:{tabID:`tab-1`,onUpdate:Lt(),onRunFlow:Lt(),onNavigate:Lt(),onResetSample:Lt(),basePath:`/Users/dev/projects/acme`,formatList:[{name:`json`,display_name:`JSON`,extensions:[`.json`],has_reader:!0,has_writer:!0,has_schema:!1},{name:`markdown`,display_name:`Markdown`,extensions:[`.md`],has_reader:!0,has_writer:!0,has_schema:!1}]}},G={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{name:`Website`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]},{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},K={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},q={args:{...G.args,displayName:`KapiMart`,project:{version:`v1`,name:`KapiMart`,defaults:{source_language:`en-US`,target_languages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},content:[{name:`Website`,base:`web/en-US`,items:[{path:`web/en-US/**/*.md`,target:`web/{lang}`,format:{name:`markdown`}}]},{name:`Online Store`,base:`src/en-US`,items:[{path:`src/en-US/*.{json,yaml,properties,html}`,target:`src/{lang}`}]},{name:`Contracts`,base:`legal/en-US`,items:[{path:`legal/en-US/*.{docx,xlsx}`,target:`legal/{lang}`}]},{name:`Templates`,base:`marketing/en-US`,items:[{path:`marketing/en-US/*.{pptx,docx}`,target:`marketing/{lang}`}]}],flows:{"pseudo-translate":{steps:[{tool:`pseudo-translate`}]},translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/kapimart/kapimart.kapi`,projectName:`KapiMart`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"de-DE":245,"fr-FR":191,"ja-JP":110,"nb-NO":100,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Online Store`,blockCount:349,coverage:{"de-DE":349,"fr-FR":349,"ja-JP":175,"nb-NO":175,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Contracts`,blockCount:80,coverage:{"de-DE":80,"fr-FR":0,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Templates`,blockCount:25,coverage:{"de-DE":25,"fr-FR":12,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]}]},convergence:{project:`KapiMart`,review:[],locales:[{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Online Store`,locale:`de-DE`,total:349,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Contracts`,locale:`de-DE`,total:80,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Templates`,locale:`de-DE`,total:25,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:78,reviewed:30},gated:!0,shippable:!1},{collection:`Online Store`,locale:`fr-FR`,total:349,pct:{translated:100,reviewed:60},gated:!0,shippable:!1},{collection:`Contracts`,locale:`fr-FR`,total:80,pct:{},gated:!0,shippable:!1},{collection:`Templates`,locale:`fr-FR`,total:25,pct:{translated:48},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`Online Store`,locale:`ja-JP`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`nb-NO`,total:245,pct:{translated:41},gated:!0,shippable:!1},{collection:`Online Store`,locale:`nb-NO`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`ar-SA`,total:245,pct:{},gated:!0,shippable:!1}]}}},J={args:{...G.args,displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{name:`Website`,items:[{path:`docs/**/*.md`,format:{name:`markdown`}}]},{name:`UI Strings`,items:[{path:`src/i18n/en/*.json`}]},{name:`Emails`,items:[{path:`emails/**/*.html`}]}],flows:{translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"fr-FR":245,"de-DE":191,"ja-JP":110},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`UI Strings`,blockCount:88,coverage:{"fr-FR":88,"de-DE":40,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`Emails`,blockCount:32,coverage:{"fr-FR":16,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},Y={args:{...J.args,convergence:{project:`Acme App Localization`,review:[],locales:[{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:78,reviewed:40},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`fr-FR`,total:88,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`UI Strings`,locale:`de-DE`,total:88,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`ja-JP`,total:88,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`fr-FR`,total:32,pct:{translated:50},gated:!0,shippable:!1},{collection:`Emails`,locale:`de-DE`,total:32,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`ja-JP`,total:32,pct:{},gated:!0,shippable:!1}]}}},X={args:{...G.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},Z={args:{...q.args,status:{...q.args.status,stale:!0}}},Q={args:{...G.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...Q.parameters?.docs?.description}}},zt=[`Default`,`NoFlows`,`WithCoverage`,`ThreeLanguages`,`WithShipGates`,`NeverExtracted`,`StaleCounts`,`SampleUpgradeAvailable`]}))();export{G as Default,X as NeverExtracted,K as NoFlows,Q as SampleUpgradeAvailable,Z as StaleCounts,J as ThreeLanguages,q as WithCoverage,Y as WithShipGates,zt as __namedExportsOrder,Rt as default};