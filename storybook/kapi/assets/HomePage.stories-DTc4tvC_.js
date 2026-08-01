import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,r as i,s as a,t as o}from"./runtime-D9E4JuzJ.js";import{At as s,Hr as c,In as l,Ir as u,It as d,Mt as f,Ot as p,Sn as ee,Xt as te,c as m,ct as ne,et as h,fa as g,ga as _,i as v,ma as y,ni as b,o as re,or as x,t as S,v as C,va as ie,vr as w,w as T,wt as ae}from"./lucide-react-DAXek0DD.js";import{B as oe,C as se,D as E,E as D,L as ce,N as le,O,Q as ue,S as k,X as de,b as fe,c as pe,k as me,t as he,w as ge,x as _e,yt as ve}from"./src-3FHl0xIw.js";import{t as A}from"./label-B-N8ceFE.js";import{t as j}from"./badge-BJhUWkBi.js";import{t as M}from"./button-xCNJhilW.js";import{t as ye}from"./list-cap-row-CcfDUaH-.js";import{t as be}from"./card-BgJKhC20.js";import{t as xe}from"./checkbox-D_ZKTNXr.js";import{a as Se,i as Ce,n as we,r as Te,t as Ee}from"./select-28R_XQ_2.js";import{t as N}from"./tooltip-Dsl4Wmji.js";import{r as De,t as Oe}from"./target-path-input-CvEvwYQH.js";import{t as ke}from"./confirm-delete-button-DdcUFYtk.js";import{t as Ae}from"./action-card-lItTRek5.js";import{t as je}from"./format-select-5CpOzNYX.js";import{t as Me}from"./LocalePill-CvQRxVNo.js";import{n as Ne,t as Pe}from"./locale-select-B7uD9V93.js";import{n as Fe}from"./schema-form-BCPRZcy_.js";import{i as Ie,n as Le,o as Re,r as ze}from"./iframe-DavTM22X.js";import{r as Be,t as P}from"./useApi-DdI3BYTA.js";import{n as Ve,t as He}from"./queryKeys-D4eJ9qdI.js";import{n as Ue,t as We}from"./useShortenHome-CWwxxDI1.js";import{n as Ge,t as Ke}from"./ActiveFilterContext-C0UOxSfe.js";import{n as qe,t as Je}from"./useWailsEvent-wWNGvn1w.js";import{n as Ye,t as Xe}from"./JobFeedContext-wItiwJsL.js";import{n as Ze,r as Qe}from"./ConvergenceHero-j-gHj-Zm.js";import{n as $e,t as et}from"./FilePreview-BXJ4JpKu.js";import{n as F,t as tt}from"./filter-CSfcGLVq.js";import{n as nt,t as rt}from"./useSchemaFormHost-DtSY6FY1.js";import{n as it,r as at}from"./api-CIm6WQER.js";import{n as ot,t as st}from"./TranslationStatusPanel-BLrPhihH.js";import{n as ct,t as lt}from"./useLocales-Dg9ILl3Y.js";function ut({open:e,onOpenChange:t,title:n,description:r,formats:i,allFormats:a,allowAdd:s=!1,filterExtension:c,values:l,onChange:u,scopeNote:d}){let{showError:f}=ze(),te=nt(),[m,ne]=(0,I.useState)([]),[h,_]=(0,I.useState)(!1),b=(0,I.useMemo)(()=>{let e=new Set,t=[];for(let n of[...i,...m])n&&!e.has(n)&&(e.add(n),t.push(n));return t},[i,m]),re=s||i.length>1,[x,S]=(0,I.useState)(re?null:i[0]??null);(0,I.useEffect)(()=>{e&&(ne([]),_(!1),S(re?null:i[0]??null))},[e]);let C=x??``,ie=x===null,w=Re({queryKey:Ve.formatSchema(C),queryFn:()=>P.getFormatSchema(C),enabled:e&&!!C}),T=Re({queryKey:Ve.formatPresets(C),queryFn:()=>P.listFormatPresets(C),enabled:e&&!!C});(0,I.useEffect)(()=>{w.error&&f(`Failed to load format schema`,w.error)},[w.error,f]);let ae=(0,I.useMemo)(()=>{let e=c?.toLowerCase();return a.filter(t=>b.includes(t.name)?!1:!e||(t.extensions??[]).some(t=>t.toLowerCase()===e))},[a,b,c]),oe=(0,I.useCallback)(e=>{e&&(ne(t=>t.includes(e)?t:[...t,e]),_(!1),S(e))},[]),E=l[C]??{},D=w.isSuccess?w.data??null:void 0,ce=T.data??[],le=!!C&&(w.isLoading||T.isLoading),O=(0,I.useMemo)(()=>{if(!D)return;let e={};for(let[t,n]of Object.entries(D.properties??{}))n?.default!==void 0&&(e[t]=n.default);let t=ce.find(e=>e.name===E.preset);return t?.config&&Object.assign(e,t.config),e},[D,ce,E.preset]);function ue(e){return Object.keys(l[e]?.config??{}).length}return(0,L.jsx)(fe,{open:e,onOpenChange:t,children:(0,L.jsxs)(_e,{side:`right`,className:`flex w-full flex-col gap-0 p-0 sm:max-w-lg md:max-w-xl`,children:[(0,L.jsxs)(se,{className:`border-b border-border`,children:[(0,L.jsx)(ge,{children:n}),r&&(0,L.jsx)(k,{children:r})]}),ie?(0,L.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-2 overflow-auto p-4`,children:[(0,L.jsx)(A,{className:`text-xs text-muted-foreground`,children:o(`jyxDUcfqGSM`,`Formats`)}),b.map(e=>(0,L.jsxs)(`button`,{onClick:()=>S(e),className:`flex w-full items-center justify-between rounded-md border border-border px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/50`,children:[(0,L.jsx)(`span`,{className:`font-medium`,translate:`no`,children:e}),(0,L.jsxs)(`span`,{className:`flex items-center gap-2`,children:[ue(e)>0&&(0,L.jsx)(`span`,{className:`rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary`,children:o(`1yiA3osXF9B`,`{count} set`,{count:ue(e)})}),(0,L.jsx)(g,{size:15,className:`text-muted-foreground`})]})]},e)),b.length===0&&!h&&(0,L.jsx)(`p`,{className:`py-2 text-xs text-muted-foreground`,children:o(`5xeLOcibbS4`,`No formats matched yet. Add one to configure it.`)}),s&&(h?(0,L.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,L.jsx)(je,{value:``,onChange:oe,formats:ae,placeholder:o(`h2fmnFnVReh`,`Pick a format`),className:`flex-1`}),(0,L.jsx)(M,{variant:`ghost`,size:`sm`,onClick:()=>_(!1),"aria-label":o(`dbtbD0TVaDi`,`Cancel`),children:(0,L.jsx)(v,{size:14})})]}):(0,L.jsxs)(M,{variant:`outline`,size:`sm`,className:`w-full justify-start text-muted-foreground`,onClick:()=>_(!0),children:[(0,L.jsx)(p,{size:14}),o(`kCSVI2deUy4`,`Add format`)]}))]}):(0,L.jsxs)(`div`,{className:`min-h-0 flex-1 overflow-auto p-4`,children:[re&&(0,L.jsxs)(`button`,{onClick:()=>S(null),className:`mb-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground`,children:[(0,L.jsx)(y,{size:14}),o(`jyxDUcfqGSM`,`Formats`)]}),le||D===void 0?(0,L.jsx)(`div`,{className:`flex h-40 items-center justify-center text-muted-foreground`,children:(0,L.jsx)(ee,{className:`animate-spin`,size:16})}):D===null?(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{className:`text-sm font-semibold text-foreground`,translate:`no`,children:C}),(0,L.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:o(`gKk5TMMAPyG`,`No configurable options for this format.`)})]}):(0,L.jsxs)(`div`,{className:`space-y-3`,children:[ce.length>0&&(0,L.jsxs)(`div`,{children:[(0,L.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`d3NxnAH75Rv`,`Preset`)}),(0,L.jsxs)(Ee,{value:E.preset||`__default__`,onValueChange:e=>u(C,{...E,preset:e===`__default__`?void 0:e}),children:[(0,L.jsx)(Ce,{className:`h-8 text-xs`,children:(0,L.jsx)(Se,{})}),(0,L.jsxs)(we,{children:[(0,L.jsx)(Te,{value:`__default__`,children:o(`kUy1wuZegx3`,`Default`)}),ce.map(e=>(0,L.jsxs)(Te,{value:e.name,translate:`no`,children:[e.name,e.description?` — ${e.description}`:``]},e.name))]})]})]}),(0,L.jsx)(Fe,{schema:D,values:E.config??{},presetValues:O,host:te,onChange:e=>u(C,{...E,config:Object.keys(e).length>0?e:void 0})})]})]}),(0,L.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border p-4`,children:[d?(0,L.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d}):(0,L.jsx)(`span`,{}),(0,L.jsx)(M,{size:`sm`,onClick:()=>t(!1),children:o(`gqcpTEkGOVQ`,`Done`)})]})]})})}var I,L,dt=e((()=>{i(),I=t(),Ie(),S(),he(),Be(),He(),rt(),Le(),L=n(),ut.__docgenInfo={description:`Schema-driven format configuration in a right-side drawer, laid out as a
master→detail flow so each level gets the full drawer width:

  - **List** (wildcard / multi-format only): the formats to configure, with
    config-count badges and an "add format" control. Tapping one opens its
    detail.
  - **Detail**: the format's option form (the framework \`SchemaForm\`, whose own
    header names the format) plus its preset, with a back affordance.

A single-format item skips the list and opens straight on its detail.`,methods:[],displayName:`FormatConfigDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},formats:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Formats shown initially in the list (e.g. the formats matched in the input files).`},allFormats:{required:!0,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`All registered formats, for the "add format" picker.`},allowAdd:{required:!1,tsType:{name:`boolean`},description:`Allow configuring formats beyond the initial list (wildcard items).`,defaultValue:{value:`false`,computed:!1}},filterExtension:{required:!1,tsType:{name:`string`},description:`When set, the add-picker is filtered to formats claiming this extension (e.g. ".json").`},values:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`FormatConfigValue`}],raw:`Record<string, FormatConfigValue>`},description:`Current config/preset keyed by format name.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(format: string, next: FormatConfigValue) => void`,signature:{arguments:[{type:{name:`string`},name:`format`},{type:{name:`FormatConfigValue`},name:`next`}],return:{name:`void`}}},description:`Persist a change for one format.`},scopeNote:{required:!1,tsType:{name:`string`},description:`Footer note clarifying where the config is stored (item vs project-wide).`}}}}));function ft(e){let t=e.toLowerCase();return gt.some(e=>t.endsWith(e))}function pt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function mt({archivePath:e,onSelect:t,entries:n}){let i=Re({queryKey:Ve.archiveEntries(e),queryFn:()=>P.listArchiveEntries(e),enabled:!n}),a=n??i.data??null,s=!n&&i.isLoading,l=i.error?i.error instanceof Error?i.error.message:String(i.error):!n&&i.isSuccess&&i.data===null?`Archive listing is unavailable in this environment.`:null;if(s)return(0,R.jsx)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-muted-foreground`,children:r(`k53pbACm9yC`,`{=m0} Listing entries…`,{"=m0":(0,R.jsx)(ee,{className:`size-3 animate-spin`})})});if(l)return(0,R.jsxs)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-destructive`,children:[(0,R.jsx)(b,{className:`size-3`}),l]});if(!a||a.length===0)return(0,R.jsx)(`div`,{className:`py-2 pl-8 text-xs text-muted-foreground`,children:o(`4tnwfvPyPdn`,`No entries.`)});let u=a.slice(0,ht);return(0,R.jsxs)(`div`,{className:`border-l border-border/60 pl-3`,children:[(0,R.jsx)(`ul`,{className:`max-h-72 overflow-y-auto`,"aria-label":o(`7ACzcWiL8HS`,`Archive entries`),"data-slot":`archive-entries`,children:u.map(e=>(0,R.jsx)(`li`,{children:(0,R.jsx)(N,{content:e.format?`Preview ${e.name}`:`No reader for this file type`,children:(0,R.jsx)(`span`,{className:`block w-full`,children:(0,R.jsxs)(`button`,{type:`button`,disabled:!e.format,onClick:e.format?()=>t(e.name):void 0,className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs hover:bg-accent disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`,children:[(0,R.jsx)(c,{className:`size-3 shrink-0 text-muted-foreground`}),(0,R.jsx)(`span`,{className:`truncate font-mono`,translate:`no`,children:e.name}),(0,R.jsx)(`span`,{className:`ml-auto shrink-0 text-muted-foreground`,children:pt(e.size)})]})})})},e.name))}),(0,R.jsx)(ye,{shown:u.length,total:a.length,noun:`entries`,hint:o(`7RGB1IrfAIj`,`Extract the archive to browse all of its entries.`),className:`border-t-0`})]})}var R,ht,gt,_t=e((()=>{i(),Ie(),S(),he(),Be(),He(),R=n(),ht=400,gt=[`.zip`,`.tar`,`.tgz`,`.tar.gz`],mt.__docgenInfo={description:``,methods:[],displayName:`ArchiveEntries`,props:{archivePath:{required:!0,tsType:{name:`string`},description:`Absolute path of the archive container.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(entry: string) => void`,signature:{arguments:[{type:{name:`string`},name:`entry`}],return:{name:`void`}}},description:`Called with the inner entry path when the user picks an entry to preview.`},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`ArchiveEntry`}],raw:`ArchiveEntry[]`},description:`Pre-loaded entries for Storybook/tests, skipping the backend call.`}}}}));function vt(e){let t=e?.pct?.translated??0;return!e||t===0?{key:`none`,label:`—`,short:`—`,color:`var(--muted-foreground)`,pct:0}:e.shippable?{key:`shippable`,label:`Shippable`,short:`Ship`,color:`oklch(0.62 0.17 150)`,pct:t}:(e.pct?.reviewed??0)>0?{key:`review`,label:`In review`,short:`Review`,color:`oklch(0.72 0.15 80)`,pct:t}:{key:`draft`,label:`Draft`,short:`Draft`,color:`var(--primary)`,pct:t}}function yt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function bt(e){return e?.name??``}function xt(e){let t=e.split(`/`).pop()??e,n=/\*\.([A-Za-z0-9]+)$/.exec(t);return n?`.`+n[1].toLowerCase():void 0}function St(e){return at(e)?`(unnamed)`:e.name&&e.name.length>0?e.name:`(unnamed)`}function Ct(e,t){if(!t)return e;let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return e.replace(RegExp(`(^|[^A-Za-z0-9])${n}(?![A-Za-z0-9])`,`g`),`$1{lang}`)}function wt(e){if(e.length===0)return``;let t=Ct(e[0].relative,e[0].lang);for(let n of e.slice(1))if(Ct(n.relative,n.lang)!==t)return``;return t}function Tt({label:e,pct:t,color:n}){return(0,B.jsx)(`span`,{className:`flex min-w-40 flex-1 items-center gap-2`,children:r(`4WivF3SsavF`,`{=m0} {label} {/=m0} {=m2} {=m3} {/=m2} {=m4} {pct}% {/=m4}`,{"=m0":(0,B.jsx)(`span`,{className:`w-14 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),"=m3":(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}}),"=m2":(0,B.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}})}),"=m4":(0,B.jsxs)(`span`,{className:`w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[t,`%`]})},{label:e,pct:t})})}function Et({items:e,onSelect:t}){let n=(0,z.useRef)(null),[i,s]=(0,z.useState)(0),[c,l]=(0,z.useState)(null);(0,z.useEffect)(()=>{let e=n.current;if(!e)return;let t=new ResizeObserver(e=>s(e[0].contentRect.width));return t.observe(e),()=>t.disconnect()},[]);let u=e=>H[e]??H.none,d=e=>({shippable:`Shippable`,review:`In review`,translated:`Translated`,none:`Not started`})[e]??e,f=e=>40+e/100*p,p=Math.max(0,i-80),ee=[...e].sort((e,t)=>e.pct-t.pct),te=[],m=ee.map(e=>{let t=f(e.pct),n=0;for(;n<te.length&&t-te[n]<80;)n++;return te[n]=t,{it:e,x:t,above:n%2==0,sideLane:Math.floor(n/2)}}),ne=e=>{let t=m.filter(t=>t.above===e).map(e=>e.sideLane);return t.length?38+Math.max(...t)*24:0},h=i>0?ne(!0):38,g=i>0?ne(!1):0,_=h+8,v=_+g+8,y=v+12,b=m.find(e=>e.it.lang===c)?.it;return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:o(`6KvDpNE3jA7`,`Completeness by language`)}),(0,B.jsxs)(`div`,{ref:n,className:`relative`,style:{height:y},children:[i>0&&[25,50,75].map(e=>(0,B.jsx)(`div`,{className:`absolute w-px bg-border/40`,style:{left:f(e),top:0,height:v}},e)),(0,B.jsx)(`div`,{className:`absolute h-px bg-border`,style:{left:40,right:40,top:_}}),i>0&&m.map(({it:e,x:n,above:i,sideLane:s})=>{let d=u(e.stage),f=18+s*24,p=c&&c!==e.lang?.12:1,ee=i?_-f-20:_+f;return(0,B.jsxs)(`span`,{style:{opacity:p,transition:`opacity 120ms`},children:[(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:i?_-f:_,width:1,height:f-4,background:`color-mix(in oklch, ${d} 55%, var(--border))`}}),(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:i?_-8:_+4,width:0,height:0,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,...i?{borderTop:`4px solid ${d}`}:{borderBottom:`4px solid ${d}`}}}),(0,B.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:_,width:8,height:8,transform:`translate(-50%, -50%)`,background:d,border:`2px solid var(--card)`}}),(0,B.jsx)(N,{content:t?`${e.lang}: ${e.pct}% translated — ${o(`1EaAJViBKCT`,`click to review`)}`:`${e.lang}: ${e.pct}% translated`,children:r(`itygHNZzLZO`,`{=m0} {=m1} {=m2} {it.pct}% {/=m2} {/=m0}`,{"=m1":(0,B.jsx)(Me,{locale:e.lang}),"=m2":(0,B.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]}),"=m0":(0,B.jsxs)(`span`,{className:`absolute flex -translate-x-1/2 items-center gap-1 whitespace-nowrap ${t?`cursor-pointer`:`cursor-default`}`,style:{left:n,top:ee},onMouseEnter:()=>l(e.lang),onMouseLeave:()=>l(null),onClick:t?()=>t(e.lang):void 0,role:t?`button`:void 0,"aria-label":t?a(`Review {lang} translations`,{lang:e.lang}):void 0,"data-slot":`timeline-lang-tag`,children:[(0,B.jsx)(Me,{locale:e.lang}),(0,B.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]})},{"it.pct":e.pct})})]},e.lang)}),i>0&&b&&b.byCollection.map((e,t)=>{let n=f(e.pct);return(0,B.jsxs)(`span`,{className:`z-10`,children:[(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:_-20,width:1,height:16,background:`color-mix(in oklch, ${e.color} 60%, var(--border))`}}),(0,B.jsx)(N,{content:`${e.name}: ${e.pct}% · ${d(e.stage)}`,children:(0,B.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:_,width:11,height:11,transform:`translate(-50%, -50%)`,background:e.color,border:`2px solid ${u(e.stage)}`,boxShadow:`0 0 0 1px var(--card)`}})}),(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-1.5 py-0.5 text-[9px] font-medium shadow-sm`,style:{left:n,top:_-38,borderColor:e.color},children:r(`87AC5vU9smV`,`{=m0}{cc.name}{/=m0}{value} {=m3}{cc.pct}%{/=m3}`,{"=m0":(0,B.jsx)(`span`,{translate:`no`,children:e.name}),"=m3":(0,B.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"cc.name":e.name,value:` `,"cc.pct":e.pct})})]},`${e.name}-${t}`)}),i>0&&[0,50,100].map(e=>(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2 text-[9px] text-muted-foreground`,style:{left:f(e),top:v},children:o(`bQzUKqjgT3x`,`${e}%`,{tk:e})},e))]}),(0,B.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground`,children:[[`shippable`,o(`gwUfTm4zclg`,`Shippable`)],[`review`,o(`kvsdppa6f5b`,`In review`)],[`translated`,o(`gsPQZUiUMI`,`Translated`)]].map(([e,t])=>(0,B.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,B.jsx)(`span`,{className:`size-2 rounded-full`,style:{background:u(e)}}),t]},e))})]})}function Dt({project:e,onUpdate:t,tabID:n,flows:i,onRunFlow:a,onOpenReview:s,formatList:m,basePath:h,status:v,convergence:y}){let{showError:b}=ze(),{locales:re}=ct(),{hasActive:x}=Ye(),S=Ue(),{active:T,setActive:se,enabled:ce}=Ge(),[k,fe]=(0,z.useState)([]),[pe,he]=(0,z.useState)([]),[ge,_e]=(0,z.useState)(h??``),[Se,Ce]=(0,z.useState)(!1),[we,Te]=(0,z.useState)(!1),[Ee,Ae]=(0,z.useState)(m??[]),[Fe,Ie]=(0,z.useState)(v??null),[Le,Re]=(0,z.useState)(y??null),[Be,Ve]=(0,z.useState)({}),[He,We]=(0,z.useState)(!1),[Ke,Je]=(0,z.useState)(null),[Xe,Ze]=(0,z.useState)(new Set),[Qe,$e]=(0,z.useState)(new Set),[F,nt]=(0,z.useState)(new Set),[rt,it]=(0,z.useState)(!1),[ot,lt]=(0,z.useState)(!1),[I,L]=(0,z.useState)({}),[dt,pt]=(0,z.useState)(new Set),[R,ht]=(0,z.useState)(null),[gt,_t]=(0,z.useState)(new Set),[Ct,Dt]=(0,z.useState)(null),V=e.content??[],H=Object.keys(i??{}),Nt=!!(m&&h),Pt=(0,z.useMemo)(()=>{let t={};for(let[n,r]of Object.entries(e.defaults?.formats??{}))t[n]={config:r.config,preset:r.preset};return t},[e.defaults?.formats]),U=(0,z.useCallback)((n,r)=>{let i={...e.defaults},a={...i.formats},o={...a[n]};r.preset?o.preset=r.preset:delete o.preset,r.config&&Object.keys(r.config).length>0?o.config=r.config:delete o.config,Object.keys(o).length===0?delete a[n]:a[n]=o,i.formats=Object.keys(a).length>0?a:void 0,t({...e,defaults:i})},[e,t]),W=(0,z.useCallback)(e=>{let t=new Set;for(let n of k)n.pattern===e.path&&n.format&&t.add(n.format);return[...t]},[k]);(0,z.useEffect)(()=>{m||P.listFormats().then(e=>{e&&Ae(e)}).catch(e=>b(`Failed to load formats`,e)),h||P.getBasePath(n).then(e=>{e&&_e(e)}).catch(e=>b(`Failed to get base path`,e))},[n,b,m,h]);let Ft=(0,z.useCallback)(()=>{v||P.getProjectStatus(n).then(e=>{e&&Ie(e)}).catch(()=>{})},[n,v]),G=(0,z.useCallback)(()=>{y||P.getConvergence(n).then(e=>{e&&Re(e)}).catch(()=>{})},[n,y]),K=(0,z.useCallback)(async()=>{if(!Nt){Ce(!0);try{await P.updateProject(n,e);let[t,r,i]=await Promise.all([P.matchContent(n),P.listProjectFiles(n),P.listOutputs(n)]);fe(t??[]),he(r??[]),L(i??{})}catch(e){b(`Failed to scan files`,e)}finally{Ce(!1)}}},[n,e,b,Nt]),q=(0,z.useCallback)(()=>{Nt||P.listOutputs(n).then(e=>{e&&L(e)}).catch(()=>{})},[n,Nt]);(0,z.useEffect)(()=>{K()},[K,V.length]),(0,z.useEffect)(()=>{Ft(),G()},[Ft,G,e.content]),(0,z.useEffect)(()=>{!n||!a||P.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;Ve(t)})},[n,a,e.flows]),qe(`project-files-changed`,e=>{e===n&&K()}),qe(`outputs-changed`,()=>q()),qe(`project:extracted`,()=>{Ft(),G()});let J=(0,z.useCallback)(async()=>{if(!(!n||Nt)){Te(!0);try{await P.runExtract(n),Ft(),G(),await K()}catch(e){b(`Extraction failed`,e)}finally{Te(!1)}}},[n,Nt,Ft,G,K,b]),Y=n=>{t({...e,content:n})},X=()=>{Y([...V,{name:`New Collection`,items:[{path:``}]}])},Z=(e,t)=>{let n=[...V];n[e]=t,Y(n)},Q=e=>{Y(V.filter((t,n)=>n!==e))},It=async()=>{let e=await P.addFilesDialog(n,``);e&&e.length>0&&K()},Lt=(0,z.useCallback)(async e=>{e.preventDefault(),We(!1);let t=e.dataTransfer?.files;if(!(!t||t.length===0)){for(let e=0;e<t.length;e++){let r=t[e].path;r&&await P.copyFileToProject(n,r,``)}K()}},[n,K]),Rt=(0,z.useCallback)(e=>{e.preventDefault(),We(!0)},[]),zt=(0,z.useCallback)(e=>{e.preventDefault(),We(!1)},[]),Bt=new Set(k.map(e=>e.relative)),Vt=new Set;for(let e of Object.values(I))for(let t of e)Vt.add(t.relative);let Ht=pe.filter(e=>!e.is_dir&&!Bt.has(e.relative)&&!Vt.has(e.relative)),Ut=T?.collections??[],Wt=(0,z.useCallback)(e=>Ut.length===0||Ut.includes(St(e)),[Ut]),$=V.map((e,t)=>({coll:e,ci:t})).filter(({coll:e})=>Wt(e)),Gt=V.length-$.length,Kt=ce&&!!T,qt=(0,z.useMemo)(()=>{let e=new Map;for(let t of Fe?.collections??[])e.set(t.name,t);return e},[Fe]),Jt=$.map(({coll:e})=>qt.get(St(e))).filter(e=>!!e),Yt=Jt.reduce((e,t)=>e+t.blockCount,0),Xt=Array.from(new Set(Jt.flatMap(e=>tt(e.targetLanguages,T)))).map(e=>{let t=0,n=0;for(let r of Jt)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,pct:n>0?Math.round(t/n*100):0}}),Zt=!!Fe?.hasData,Qt=(e,t,n)=>{let i=bt(e.format),a=e.format?.config&&Object.keys(e.format.config).length>0,s=i?[]:W(e),c=!i;return(0,B.jsxs)(`div`,{className:`space-y-2`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`fkZvxWb5obq`,`Path pattern`)}),(0,B.jsx)(De,{value:e.path,onChange:n=>t({...e,path:n}),placeholder:o(`2ZByCOUEFi9`,`src/locales/en/*.json`)})]}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`bvd6UIe5N0C`,`Format`)}),(0,B.jsx)(je,{value:i,onChange:n=>t({...e,format:n?{name:n}:void 0}),formats:Ee})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`a89e8Ych0Bb`,`Target path`)}),(0,B.jsx)(Oe,{value:e.target??``,onChange:n=>t({...e,target:n||void 0}),placeholder:o(`jG8VNv2dx5F`,`output/{lang}  ·  or output/{lang}/{dir}/{name}.{ext}`)})]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:r(`50CFhXWQgX8`,`Base{value} {=m1} (optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard) {/=m1}`,{"=m1":(0,B.jsx)(`span`,{className:`font-normal text-muted-foreground/60`,children:`(optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard)`})},{value:` `})}),(0,B.jsx)(De,{value:e.base??``,onChange:n=>t({...e,base:n||void 0}),placeholder:o(`91BRdpSp7aE`,`auto (e.g. input/docs)`)})]}),i===`exec`&&(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`ixPzAgHXRkq`,`Extractor command`)}),(0,B.jsx)(`input`,{type:`text`,value:typeof e.format?.config?.command==`string`?e.format.config.command:``,onChange:n=>t({...e,format:{...e.format,config:{...e.format?.config,command:n.target.value||void 0}}}),placeholder:o(`7c1roWz2tyh`,`vp neokapi-i18n extract --stream`),className:`w-full rounded-md border border-input bg-background px-2 py-1 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,B.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:o(`hq7ZdLIdzne`,"`kapi extract -p` runs this command; NUL-separated paths on stdin, NDJSON blocks on stdout.")})]}),(i||s.length>0)&&(0,B.jsx)(`div`,{children:(0,B.jsxs)(M,{variant:`ghost`,size:`xs`,onClick:()=>Je(n),className:`h-auto px-0 text-muted-foreground hover:text-foreground`,children:[(0,B.jsx)(ne,{size:10}),i?(0,B.jsxs)(B.Fragment,{children:[o(`2SSfag2jEpF`,`Configure {fmt}`,{fmt:i}),(a||e.format?.preset)&&(0,B.jsx)(`span`,{className:`ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-primary`,children:e.format?.preset?e.format.preset:Object.keys(e.format.config).length})]}):o(`kjZKt4sCa4q`,`Configure formats ({count})`,{count:s.length})]})}),Ke===n&&(c?(0,B.jsx)(ut,{open:!0,onOpenChange:e=>!e&&Je(null),title:o(`hteFv21N8F2`,`Configure formats`),description:o(`88Z4fx3EC80`,`This pattern auto-detects a format per file. Tune any of them here — settings apply project-wide.`),formats:s,allFormats:Ee,allowAdd:!0,filterExtension:xt(e.path),values:Pt,onChange:U,scopeNote:o(`5vzPyjQ5D0B`,`Stored in the project's defaults.formats — shared by every content item.`)}):(0,B.jsx)(ut,{open:!0,onOpenChange:e=>!e&&Je(null),title:o(`2SSfag2jEpF`,`Configure {fmt}`,{fmt:i}),formats:[i],allFormats:Ee,values:{[i]:{config:e.format?.config,preset:e.format?.preset}},onChange:(n,r)=>t({...e,format:{name:n,preset:r.preset,config:r.config}}),scopeNote:o(`bBunRxGYAGJ`,`Applies to this content item.`)}))]})},$t=(e,t)=>e(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}),en=e=>Ze(t=>new Set(t).add(e)),tn=e=>at(e)?[e.path??``]:(e.items??[]).map(e=>e.path),nn=e=>{let t=new Set(tn(e).filter(Boolean));return k.filter(e=>t.has(e.pattern))},rn=(t,n)=>{if(at(t)){let e={path:t.path??``,format:t.format,target:t.target};return Qt(e,e=>Z(n,{path:e.path,format:e.format,target:e.target}),`bare-${n}`)}return(0,B.jsxs)(`div`,{className:`space-y-4`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`9doFX2vkhwo`,`Collection name`)}),(0,B.jsx)(`input`,{type:`text`,value:t.name??``,onChange:e=>Z(n,{...t,name:e.target.value||void 0}),placeholder:o(`aT7CcLSyvjN`,`Collection name`),className:`w-full rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`})]}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`cBTB7P7Hw9m`,`Source override`)}),(0,B.jsx)(Pe,{value:t.source_language??``,onChange:e=>Z(n,{...t,source_language:e||void 0}),locales:re,placeholder:e.defaults?.source_language?o(`8ae2sPvv2tj`,`Inherit ({source})`,{source:e.defaults.source_language}):o(`9yiUVdD6W9t`,`Select source...`)})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-0.5 block text-xs text-muted-foreground`,children:o(`e3DojxkX1S7`,`Target overrides`)}),(0,B.jsx)(Ne,{value:t.target_languages??[],onChange:e=>Z(n,{...t,target_languages:e.length>0?e:void 0}),locales:re,placeholder:e.defaults?.target_languages?.length?o(`et6fXtIkUT2`,`Inherit ({targets})`,{targets:e.defaults.target_languages.join(`, `)}):o(`jlKdYJCgOZB`,`Add targets...`)})]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(A,{className:`mb-1 block text-xs text-muted-foreground`,children:o(`8K85wbPoO8K`,`Patterns`)}),(0,B.jsxs)(`div`,{className:`space-y-2`,children:[(t.items??[]).map((e,r)=>(0,B.jsxs)(`div`,{className:`group/item relative rounded-md border border-border p-3`,children:[(0,B.jsx)(`div`,{className:`absolute right-2 top-2 opacity-0 group-hover/item:opacity-100`,children:(0,B.jsx)(ke,{onDelete:()=>{let e=(t.items??[]).filter((e,t)=>t!==r);e.length===0?Q(n):Z(n,{...t,items:e})},mode:`icon`})}),Qt(e,e=>{let i=[...t.items??[]];i[r]=e,Z(n,{...t,items:i})},`coll-${n}-${r}`)]},r)),(0,B.jsx)(M,{variant:`ghost`,size:`xs`,onClick:()=>Z(n,{...t,items:[...t.items??[],{path:``}]}),className:`text-muted-foreground`,children:r(`fUQ3gk3Fn5B`,`{=m0} Add another pattern`,{"=m0":(0,B.jsx)(p,{size:10})})})]})]})]})},an=e=>{let t=e.slice(0,jt),n=(e,t,n)=>(0,B.jsx)(N,{content:e.exists?o(`3IG6Ymrc5kw`,`Inspect {file}`,{file:e.relative}):o(`kCiiFn80fXE`,`Not generated yet — run a flow to create it`),children:(0,B.jsxs)(`tr`,{onClick:e.exists?()=>ht({path:e.path,relative:e.relative}):void 0,className:`border-b border-border last:border-0 ${e.exists?`cursor-pointer hover:bg-accent/30`:`opacity-60`}`,"data-slot":`matched-output-row`,children:[(0,B.jsx)(`td`,{className:`py-1 pr-3 ${n}`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[(0,B.jsx)(Me,{locale:e.lang}),(0,B.jsx)(`span`,{translate:`no`,children:e.relative})]})}),(0,B.jsx)(`td`,{className:`px-3 py-1`,children:e.exists?(0,B.jsx)(j,{variant:`secondary`,children:e.format||`—`}):(0,B.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:o(`5F4pm00UY7l`,`pending`)})}),(0,B.jsx)(`td`,{className:`px-3 py-1 text-right text-muted-foreground`,children:e.exists?yt(e.size):``})]})},t);return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`${Mt} overflow-y-auto`,"data-slot":`matched-files-scroll`,children:(0,B.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,B.jsx)(`thead`,{className:`sticky top-0 z-10 bg-muted/40 backdrop-blur`,children:(0,B.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:o(`90bm6Dmup1D`,`File`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:o(`pficfHSLhK`,`Format`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:o(`9vgmxppwkuv`,`Pattern`)})]})}),(0,B.jsx)(`tbody`,{children:t.map((e,t)=>{let r=(I[e.relative]??[]).filter(t=>t.relative!==e.relative),i=dt.has(e.relative),a=r.filter(e=>e.exists).length,s=wt(r),l=r.length>0&&s!==``,u=()=>pt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n}),d=n=>(0,B.jsx)(N,{content:o(`dCGdks5jp00`,`Preview {file}`,{file:e.relative}),children:(0,B.jsxs)(`tr`,{onClick:()=>ht({path:e.path,relative:e.relative}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,"data-slot":`matched-source-row`,children:[(0,B.jsx)(`td`,{className:n?`py-1 pl-9 pr-3`:`px-3 py-1.5`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono${n?` text-muted-foreground`:``}`,children:[n?(0,B.jsx)(j,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:o(`iafZmtokH`,`source`)}):(0,B.jsx)(c,{size:12,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{translate:`no`,children:e.relative})]})}),(0,B.jsx)(`td`,{className:n?`px-3 py-1`:`px-3 py-1.5`,children:(0,B.jsx)(j,{variant:`secondary`,children:e.format||`unknown`})}),(0,B.jsx)(`td`,{className:`text-muted-foreground ${n?`px-3 py-1 text-right`:`px-3 py-1.5`}`,children:n?null:(0,B.jsx)(`span`,{children:e.pattern})})]})},`${t}-source`);return l?(0,B.jsxs)(z.Fragment,{children:[(0,B.jsx)(N,{content:i?o(`4R7svWel0ri`,`Hide the language files`):o(`7y0Zg6Pwqj5`,`Show the language files`),children:(0,B.jsxs)(`tr`,{onClick:u,className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,"data-slot":`matched-pattern-row`,children:[(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[i?(0,B.jsx)(_,{size:12,className:`shrink-0 text-muted-foreground`}):(0,B.jsx)(g,{size:12,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{translate:`no`,children:s})]})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,B.jsx)(j,{variant:`secondary`,children:e.format||`unknown`})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5 text-muted-foreground`,children:(0,B.jsxs)(`span`,{className:`flex items-center justify-between gap-2`,children:[(0,B.jsx)(`span`,{children:e.pattern}),(0,B.jsx)(j,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:o(`5NbJA5ykWEO`,`{present}/{total} outputs`,{present:a,total:r.length})})]})})]})}),i&&d(!0),i&&r.map(e=>n(e,`${t}-${e.relative}`,`pl-9`))]},t):(0,B.jsxs)(z.Fragment,{children:[d(!1),r.map(e=>n(e,`${t}-${e.relative}`,`pl-9`))]},t)})})]})}),(0,B.jsx)(ye,{shown:t.length,total:e.length,noun:o(`c8O1Kh6zTSH`,`matched files`),hint:o(`3pa2FGEpGtr`,`Refine the collection's glob to narrow the list.`)})]})},on=e=>{let t=e.slice(0,jt);return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`${Mt} overflow-y-auto`,"data-slot":`unmatched-files-scroll`,children:(0,B.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,B.jsx)(`thead`,{className:`sticky top-0 z-10 bg-muted/40 backdrop-blur`,children:(0,B.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:o(`90bm6Dmup1D`,`File`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:o(`pficfHSLhK`,`Format`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 text-right font-medium`,children:o(`31jvn9Cyxum`,`Size`)})]})}),(0,B.jsx)(`tbody`,{children:t.map(e=>{let t=ft(e.relative),n=gt.has(e.path),r=t?()=>_t(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}):e.format?()=>ht({path:e.path,relative:e.relative}):void 0;return(0,B.jsxs)(z.Fragment,{children:[(0,B.jsx)(N,{content:t?o(`lInRUQH7w2H`,`Browse entries in {file}`,{file:e.relative}):e.format?o(`dCGdks5jp00`,`Preview {file}`,{file:e.relative}):void 0,children:(0,B.jsxs)(`tr`,{onClick:r,className:`border-b border-border last:border-0 text-muted-foreground hover:bg-accent/30 ${r?`cursor-pointer`:``}`,children:[(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[t?n?(0,B.jsx)(_,{size:12,className:`shrink-0`}):(0,B.jsx)(g,{size:12,className:`shrink-0`}):(0,B.jsx)(c,{size:12,className:`shrink-0`}),e.relative]})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:e.format?(0,B.jsx)(j,{variant:`secondary`,children:e.format}):(0,B.jsx)(`span`,{children:o(`kJzl1hZkYB5`,`—`)})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5 text-right`,children:yt(e.size)})]})}),t&&n&&(0,B.jsx)(`tr`,{className:`border-b border-border last:border-0`,children:(0,B.jsx)(`td`,{colSpan:3,className:`px-3 py-1.5`,children:(0,B.jsx)(mt,{archivePath:e.path,onSelect:t=>Dt({path:e.path,relative:e.relative,entry:t})})})})]},e.relative)})})]})}),(0,B.jsx)(ye,{shown:t.length,total:e.length,noun:o(`jtWVPU6wrnl`,`files`),hint:o(`7IS7lcDlfB`,`Narrow with a collection, or refine your project's globs.`)})]})},sn=rt&&!!a&&H.length>0,cn=$.map(e=>e.ci),ln=cn.length>0&&cn.every(e=>F.has(e)),un=Array.from(new Set($.filter(e=>F.has(e.ci)).flatMap(({coll:e})=>nn(e).map(e=>e.path)))),dn=e=>$t(nt,e),fn=()=>nt(new Set),pn=()=>nt(ln?new Set:new Set(cn)),mn=F.size>0,hn=mn?un.length>0:k.length>0,gn=e=>Be[e]?.valid!==!1,_n=e=>{let t=Be[e];if(t&&t.valid===!1)return o(`1RvF0bJgFOO`,`Cannot run: {issues}`,{issues:(t.issues??[]).map(e=>e.message).join(`; `)});if(!hn)return o(`aJMvXjHOInN`,`No matched files to run on`)},vn=(e,t)=>{mn?(a?.(e,t,{scopePaths:un,scopeLabel:o(`fy9lwC8rFKO`,`{count} collections`,{count:F.size})}),fn()):a?.(e,t)},yn=tt(Array.from(new Set($.flatMap(({coll:t})=>(t.target_languages??e.defaults?.target_languages??[]).map(String)))),T),bn=yn.length>=At,xn=(0,z.useMemo)(()=>{let e=new Map;for(let t of Le?.locales??[])e.set(`${t.collection??``} ${t.locale}`,t);return e},[Le]),Sn=xn.size>0,Cn=(e,t)=>{let n=at(e)?``:e.name??``;return xn.get(`${n} ${t}`)??xn.get(` ${t}`)},wn=(Zt||Sn)&&yn.length>0,Tn=e=>(e.pct?.translated??0)===0?`none`:e.shippable?`shippable`:(e.pct?.reviewed??0)>0?`review`:`translated`,En=new Map;$.forEach(({coll:e},t)=>En.set(e.name??``,Ot(t)));let Dn=Sn?yn.map(e=>{let t=0,n=0,r=0,i=0,a=[];for(let s of Le?.locales??[])s.locale===e&&(t+=s.total,n+=s.total*(s.pct?.translated??0)/100,r+=s.total*(s.pct?.reviewed??0)/100,s.shippable&&(i+=s.total),a.push({name:s.collection||o(`3Wd4TgsGjIz`,`(unnamed)`),pct:Math.round(s.pct?.translated??0),stage:Tn(s),color:En.get(s.collection||``)??`var(--muted-foreground)`}));a.sort((e,t)=>t.pct-e.pct);let s=t>0?Math.round(n/t*100):0,c=t>0?Math.round(r/t*100):0;return{lang:e,pct:s,stage:t===0?`none`:i/t>=.999?`shippable`:c>0?`review`:s>0?`translated`:`none`,byCollection:a}}):null,On=(e,t)=>{let n=qt.get(St(e));return!n||n.blockCount===0||!n.targetLanguages.includes(t)?null:Math.round((n.coverage?.[t]??0)/n.blockCount*100)},kn=(e,t)=>{if(Sn){let n=vt(Cn(e,t));if(n.key===`none`)return(0,B.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:o(`kJzl1hZkYB5`,`—`)});let i=s?`${t}: ${n.label} · ${n.pct}% translated — ${o(`1EaAJViBKCT`,`click to review`)}`:`${t}: ${n.label} · ${n.pct}% translated`,a=s?()=>s({collection:at(e)?``:e.name??``,locale:t}):void 0,c=bn?(0,B.jsx)(N,{content:i,children:(0,B.jsxs)(`span`,{className:`flex items-center justify-center gap-1 text-[10px]`,children:[(0,B.jsx)(`span`,{className:`size-2 shrink-0 rounded-full`,style:{background:n.color}}),(0,B.jsx)(`span`,{className:`tabular-nums text-muted-foreground`,children:n.pct})]})}):(0,B.jsx)(N,{content:i,children:r(`c26KDoAwKKB`,`{=m0} {=m1} {r.label} {/=m1} {=m3}{r.pct}%{/=m3} {/=m0}`,{"=m1":(0,B.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),"=m3":(0,B.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]}),"=m0":(0,B.jsxs)(`span`,{className:`flex flex-col items-center gap-0.5`,children:[(0,B.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),(0,B.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})]})},{"r.label":n.label,"r.pct":n.pct})});return a?(0,B.jsx)(`button`,{type:`button`,className:`rounded-sm hover:bg-accent`,onClick:a,"aria-label":o(`g4XwSU4TZv7`,`Review {lang} in this collection`,{lang:t}),"data-slot":`ship-gate-cell`,children:c}):c}let n=On(e,t);return n===null?(0,B.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:o(`kJzl1hZkYB5`,`—`)}):bn?(0,B.jsx)(N,{content:`${t}: ${n}%`,children:(0,B.jsx)(`span`,{className:`flex h-6 items-center justify-center rounded text-[10px] font-medium tabular-nums`,style:{background:kt(n),color:n>55?`var(--primary-foreground)`:`var(--muted-foreground)`},children:n})}):(0,B.jsx)(N,{content:`${t}: ${n}%`,children:r(`g6IEhNzFjsU`,`{=m0} {=m1} {=m2} {/=m1} {=m3}{p}%{/=m3} {/=m0}`,{"=m2":(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}}),"=m1":(0,B.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),"=m3":(0,B.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]}),"=m0":(0,B.jsxs)(`span`,{className:`flex flex-col items-center gap-1`,children:[(0,B.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),(0,B.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})]})},{p:n})})},An=$.map(({coll:e},t)=>({name:St(e),value:qt.get(St(e))?.blockCount??0,fill:Ot(t)})),jn=An.filter(e=>e.value>0),Mn=wn?`repeat(${yn.length}, minmax(${bn?40:60}px, 1fr))`:`1fr`,Nn=`${sn?`24px `:``}minmax(150px,1.6fr) 52px 62px ${Mn} auto`;return(0,B.jsxs)(`section`,{className:`mb-8`,children:[(0,B.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,B.jsxs)(`h2`,{className:`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,B.jsx)(c,{size:14}),o(`9DORRfZiVYt`,`Collections`)]}),ge&&(0,B.jsx)(`span`,{className:`hidden text-xs text-muted-foreground sm:inline`,children:o(`j7T49QUmQ5g`,`relative to {base}`,{base:S(ge)})}),(0,B.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,B.jsxs)(M,{variant:`outline`,size:`sm`,onClick:X,"aria-label":o(`7FFUMGywGxJ`,`Add content collection`),children:[(0,B.jsx)(p,{size:12}),o(`dBqmpOODblV`,`Add Collection`)]}),(0,B.jsxs)(M,{variant:`outline`,size:`sm`,onClick:It,"aria-label":o(`hiKoVpiUDoL`,`Add files`),children:[(0,B.jsx)(p,{size:12}),o(`6ySrIvIM1Ni`,`Add Files`)]}),(0,B.jsxs)(M,{variant:`ghost`,size:`sm`,onClick:()=>it(e=>(e&&fn(),!e)),"aria-expanded":rt,"aria-label":o(`j57PgILXMJB`,`Advanced actions`),"data-slot":`advanced-toggle`,children:[rt?(0,B.jsx)(_,{size:12}):(0,B.jsx)(g,{size:12}),o(`fODjdH2U4XW`,`Advanced`)]})]})]}),rt&&(0,B.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2`,"data-slot":`advanced-bar`,children:[(0,B.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:o(`eeFb51x3rUl`,`Manual run`)}),sn&&(H.length===1?(0,B.jsx)(N,{content:_n(H[0]),children:(0,B.jsx)(`span`,{className:`inline-flex`,children:(0,B.jsxs)(M,{size:`sm`,disabled:x||!hn||!gn(H[0]),onClick:()=>vn(H[0],i[H[0]]),"aria-label":mn?o(`5xiPCEeggfU`,`Run {flow} on selected collections`,{flow:H[0]}):o(`XkRjpFiag2`,`Run {flow} on all collections`,{flow:H[0]}),children:[(0,B.jsx)(f,{size:12}),mn?o(`hWayWbA9yaP`,`Run on selected`):o(`2Mm9lM88YmV`,`Run {flow}`,{flow:H[0]})]})})}):(0,B.jsxs)(D,{children:[(0,B.jsx)(le,{asChild:!0,children:(0,B.jsxs)(M,{size:`sm`,disabled:x||!hn,"aria-label":o(`hDbQA2nbDWI`,`Run a flow`),children:[(0,B.jsx)(f,{size:12}),mn?o(`hWayWbA9yaP`,`Run on selected`):o(`56yvaLoBXWB`,`Run flow`),(0,B.jsx)(_,{size:12})]})}),(0,B.jsxs)(E,{align:`end`,children:[(0,B.jsx)(me,{children:mn?o(`4caHullfhei`,`Run on {count} collections`,{count:F.size}):o(`4v1PQ36aij0`,`Run on all collections`)}),H.map(e=>(0,B.jsx)(N,{content:_n(e),children:(0,B.jsxs)(O,{disabled:!hn||!gn(e),onClick:()=>vn(e,i[e]),children:[(0,B.jsx)(f,{size:12}),e]})},e))]})]})),(0,B.jsx)(N,{content:o(`3e8gGlRdnGT`,`Manual override — Bring up to date re-extracts changed sources automatically.`),children:(0,B.jsx)(`span`,{className:`inline-flex`,children:(0,B.jsxs)(M,{variant:`outline`,size:`sm`,onClick:()=>void J(),disabled:we||Se,"aria-label":Zt?o(`kGl00N2v4dv`,`Re-extract content`):o(`fvJnkfh2ZOy`,`Run extract`),children:[we?(0,B.jsx)(ee,{size:12,className:`animate-spin`}):(0,B.jsx)(ae,{size:12}),Zt?o(`7MNrQ2dR10P`,`Re-extract`):o(`41uSEoCIxup`,`Extract`)]})})}),(0,B.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:o(`kD7ZzeZJ7Zu`,`Tick collections below to scope a run.`)})]}),Kt&&(0,B.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs`,children:[(0,B.jsx)(w,{size:12,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:Gt>0?o(`cBHJw3JW916`,`Filtered by {name} — {count} collection(s) hidden`,{name:T.name,count:Gt}):o(`kl7npmU9AVZ`,`Filtered by {name}`,{name:T.name})}),(0,B.jsx)(M,{variant:`link`,size:`xs`,className:`ml-auto h-auto px-0`,onClick:()=>void se(``),children:o(`653KP59vL2M`,`Show all`)})]}),V.length>0&&(Zt?(0,B.jsx)(be,{className:`mb-3 p-4`,children:(0,B.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,B.jsxs)(`div`,{className:`flex items-center gap-3`,children:[jn.length>0?(0,B.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,B.jsx)(ve,{width:`100%`,height:`100%`,children:(0,B.jsx)(oe,{children:(0,B.jsx)(de,{data:jn,dataKey:`value`,nameKey:`name`,innerRadius:`56%`,outerRadius:`100%`,paddingAngle:jn.length>1?2:0,strokeWidth:0,children:jn.map(e=>(0,B.jsx)(ue,{fill:e.fill},e.name))})})})}):(0,B.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:o(`f5KZKg0kgUX`,`No blocks`)}),(0,B.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,B.jsx)(`li`,{className:`font-medium text-foreground`,children:o(`bYzZefjWNnT`,`{count} blocks`,{count:Yt})}),An.map((e,t)=>(0,B.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,B.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:Ot(t)}}),(0,B.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,B.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.value})]},e.name))]})]}),Dn&&Dn.length>0?(0,B.jsx)(Et,{items:Dn,onSelect:s?e=>s({locale:e}):void 0}):Xt.length>0&&(0,B.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,B.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:o(`5wGV2QBDqdw`,`Coverage across collections`)}),(0,B.jsx)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-1.5`,children:Xt.map(e=>(0,B.jsx)(Tt,{label:e.lang,pct:e.pct},e.lang))})]})]})}):(0,B.jsxs)(be,{className:`mb-3 flex items-center gap-3 p-4`,children:[(0,B.jsx)(te,{size:18,className:`shrink-0 text-muted-foreground/50`}),(0,B.jsx)(`div`,{className:`flex-1 text-xs text-muted-foreground`,children:o(`3UOo1TM1DbR`,`Nothing extracted yet — run extract to read your content and analyze coverage.`)}),(0,B.jsx)(M,{size:`sm`,onClick:()=>void J(),disabled:we||Se,children:we?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ee,{size:12,className:`animate-spin`}),o(`etADRQVkMJJ`,`Extracting...`)]}):o(`kzm8KPDuqHW`,`Run extract`)})]})),V.some(e=>e.archive)&&(0,B.jsx)(`div`,{className:`mb-4`,children:(0,B.jsx)(st,{tabID:n})}),sn&&F.size>0&&(0,B.jsxs)(`div`,{className:`sticky top-2 z-10 mb-3 flex flex-wrap items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs shadow-sm backdrop-blur`,children:[(0,B.jsx)(`span`,{className:`font-medium`,children:o(`7LTbT2OhF9Y`,`{count} selected`,{count:F.size})}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:o(`d9ocrZo4RXC`,`{count} files`,{count:un.length})}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:o(`fbl1FQ75emI`,`·`)}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:o(`EsxKxk4uRr`,`run via Run on selected, above`)}),(0,B.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,B.jsx)(M,{variant:`ghost`,size:`xs`,onClick:pn,children:ln?o(`cA5DmRy8Bb0`,`Deselect all`):o(`37TAi3wrMLP`,`Select all`)}),(0,B.jsx)(M,{variant:`ghost`,size:`xs`,onClick:fn,children:o(`hRIvJJ6j8OF`,`Clear`)})]})]}),(0,B.jsx)(`div`,{onDrop:Lt,onDragOver:Rt,onDragLeave:zt,className:`rounded-lg border-2 transition-colors ${He?`border-primary bg-primary/5`:`border-transparent`}`,children:V.length===0&&Ht.length===0?(0,B.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 text-center`,children:[(0,B.jsx)(C,{size:24,className:`mb-3 text-muted-foreground/50`}),(0,B.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:o(`2gxAjQfBlZJ`,`Add a collection to map your source files, or drop files here.`)})]}):(0,B.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-border`,children:[$.length>0&&(0,B.jsxs)(`div`,{className:`grid items-center gap-x-3 border-b border-border bg-muted/30 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,style:{gridTemplateColumns:Nn},children:[sn&&(0,B.jsx)(`span`,{}),(0,B.jsx)(`span`,{children:o(`3aIegyqrLuO`,`Collection`)}),(0,B.jsx)(`span`,{className:`text-right`,children:o(`4JeLsxTeCCD`,`Files`)}),(0,B.jsx)(`span`,{className:`text-right`,children:o(`84cgxGXko6U`,`Blocks`)}),wn?yn.map(e=>(0,B.jsx)(`span`,{className:`text-center normal-case`,translate:`no`,children:bn?e.split(`-`)[0]:e},e)):(0,B.jsx)(`span`,{children:Zt?``:o(`gUCoSV1JfkU`,`Coverage`)}),(0,B.jsx)(`span`,{})]}),$.map(({coll:e,ci:t},n)=>{let r=Qe.has(t),s=Xe.has(t),c=nn(e),u=at(e)?e.path||o(`4JeLsxTeCCD`,`Files`):e.name||o(`49Dvp7eLn8H`,`Untitled collection`),p=qt.get(St(e));return(0,B.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,B.jsxs)(`div`,{className:`grid items-center gap-x-3 px-3 py-2.5 hover:bg-accent/20`,style:{gridTemplateColumns:Nn},children:[sn&&(0,B.jsx)(xe,{checked:F.has(t),onCheckedChange:()=>dn(t),"aria-label":o(`iFEtu3JOY2k`,`Select {collection}`,{collection:u}),className:`shrink-0`}),(0,B.jsxs)(`button`,{onClick:()=>$t(Ze,t),className:`flex min-w-0 items-center gap-2 text-left`,"aria-label":s?o(`clPBrI08GWJ`,`Collapse`):o(`jF4TFaR6ysW`,`Expand`),"aria-expanded":s,children:[s?(0,B.jsx)(_,{size:13,className:`shrink-0 text-muted-foreground`}):(0,B.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(l,{size:13,className:`shrink-0`,style:{color:Ot(n)}}),(0,B.jsx)(N,{content:u,children:(0,B.jsx)(`span`,{className:`truncate text-sm font-medium`,children:u})})]}),(0,B.jsx)(`span`,{className:`text-right text-xs tabular-nums text-muted-foreground`,children:c.length}),(0,B.jsx)(`span`,{className:`text-right text-xs tabular-nums`,children:Zt&&p?p.blockCount:`—`}),wn?yn.map(t=>(0,B.jsx)(z.Fragment,{children:kn(e,t)},t)):(0,B.jsx)(`span`,{}),(0,B.jsxs)(`span`,{className:`flex items-center justify-end gap-1`,children:[rt&&a&&c.length>0&&H.length>0&&(H.length===1?(0,B.jsx)(M,{variant:`ghost`,size:`icon-sm`,disabled:x,onClick:()=>a(H[0],i[H[0]],{scopePaths:c.map(e=>e.path),scopeLabel:u}),"aria-label":o(`5qLf09DOmGG`,`Run {flow} on {collection}`,{flow:H[0],collection:u}),children:(0,B.jsx)(f,{size:13})}):(0,B.jsxs)(D,{children:[(0,B.jsx)(le,{asChild:!0,children:(0,B.jsx)(M,{variant:`ghost`,size:`icon-sm`,disabled:x,"aria-label":o(`eEzc67W1Dbx`,`Run a flow on {collection}`,{collection:u}),children:(0,B.jsx)(f,{size:13})})}),(0,B.jsxs)(E,{align:`end`,children:[(0,B.jsx)(me,{children:o(`ljs3lQ1Of8W`,`Run on {collection}`,{collection:u})}),H.map(e=>(0,B.jsxs)(O,{onClick:()=>a(e,i[e],{scopePaths:c.map(e=>e.path),scopeLabel:u}),children:[(0,B.jsx)(f,{size:12}),e]},e))]})]})),(0,B.jsx)(M,{variant:r?`secondary`:`ghost`,size:`icon-sm`,onClick:()=>{en(t),$t($e,t)},"aria-label":r?o(`9XPZ0w8Q3ce`,`Done editing`):o(`86hghWkmolK`,`Edit collection`),children:r?(0,B.jsx)(ie,{size:13}):(0,B.jsx)(d,{size:13})}),(0,B.jsx)(ke,{onDelete:()=>Q(t),mode:`icon`})]})]}),s&&(0,B.jsxs)(`div`,{className:`border-t border-border bg-muted/10`,children:[r&&(0,B.jsxs)(`div`,{className:`animate-in slide-in-from-top-2 fade-in border-b-2 border-primary/40 bg-muted/40 p-4 shadow-inner duration-200`,children:[(0,B.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary`,children:[(0,B.jsx)(d,{size:11}),o(`86hghWkmolK`,`Edit collection`)]}),rn(e,t)]}),c.length>0?an(c):(0,B.jsxs)(`p`,{className:`px-4 py-6 text-center text-xs text-muted-foreground`,children:[o(`4JJxP7Iixz9`,`No files matched this collection's patterns.`),!r&&(0,B.jsxs)(B.Fragment,{children:[` `,(0,B.jsx)(`button`,{onClick:()=>{en(t),$e(e=>new Set(e).add(t))},className:`text-primary hover:underline`,children:o(`5oDelL63719`,`Edit patterns`)})]})]})]})]},t)}),!Ut.length&&Ht.length>0&&(0,B.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,B.jsxs)(`button`,{onClick:()=>lt(e=>!e),className:`flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-accent/20`,"aria-label":ot?o(`jF4TFaR6ysW`,`Expand`):o(`clPBrI08GWJ`,`Collapse`),children:[ot?(0,B.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}):(0,B.jsx)(_,{size:13,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(u,{size:13,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{className:`text-sm font-medium`,children:o(`gYi5jKa7wyR`,`Other files`)}),(0,B.jsx)(j,{variant:`secondary`,className:`text-[10px] font-normal`,children:o(`d9ocrZo4RXC`,`{count} files`,{count:Ht.length})})]}),!ot&&(0,B.jsx)(`div`,{className:`border-t border-border bg-muted/10`,children:on(Ht)})]})]})}),(0,B.jsx)(et,{tabID:n,filePath:R?.path??null,filename:R?.relative??``,onClose:()=>ht(null)}),(0,B.jsx)(et,{tabID:n,filePath:Ct?.path??null,filename:Ct?`${Ct.relative}!${Ct.entry}`:``,entryPath:Ct?.entry??null,onClose:()=>Dt(null)})]})}var z,B,V,Ot,kt,H,At,jt,Mt,Nt=e((()=>{i(),z=t(),ce(),S(),he(),it(),Be(),dt(),ot(),$e(),_t(),Le(),We(),Je(),lt(),Ke(),Xe(),F(),B=n(),V=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],Ot=e=>V[e%V.length],kt=e=>`color-mix(in oklch, var(--primary) ${e}%, var(--muted))`,H={shippable:`oklch(0.62 0.17 150)`,review:`oklch(0.72 0.15 80)`,translated:`var(--primary)`,none:`var(--muted-foreground)`},At=5,jt=500,Mt=`max-h-[28rem]`,Dt.__docgenInfo={description:`CollectionsPanel is the collection-centric spine of the project home: one card
per content collection carrying its own stats (file count, block count,
coverage bar), expandable to its matched-file table and editable inline. It
folds together what used to be the standalone Content page and the Home
page's read-only Content Overview (issue #1068) — collections, files,
patterns, languages, coverage and the unmatched "Other files" all live here.`,methods:[],displayName:`CollectionsPanel`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``},flows:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`FlowSpec`}],raw:`Record<string, FlowSpec>`},description:`The project's flows, offered as a per-collection "Run" menu on each card.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:`Run a flow scoped to a single collection's files.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope — wired
 to the ship-gate cells and the timeline tags.`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`Pre-loaded formats for Storybook — skips api.listFormats().`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — skips api.getBasePath().`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`}}}}));function Pt({project:e,displayName:t,tabID:n,onUpdate:i,onRunFlow:c,onNavigate:l,onOpenReview:u,pluginsResolved:d,pluginIssues:f,status:p,convergence:te,plan:g,onBringUpToDate:_,onResetSample:v,sampleInfo:y,formatList:b,basePath:S}){let{active:C}=Ge(),[ie,w]=(0,U.useState)(null),[oe,se]=(0,U.useState)(y??null),[E,D]=(0,U.useState)(!1);(0,U.useEffect)(()=>{!n||y||P.getSampleInfo(n).then(e=>{e&&se(e)}).catch(()=>{})},[n,y]);let ce=(0,U.useCallback)(()=>{D(!0),n&&P.acknowledgeSampleRevision(n)},[n]),le=(0,U.useCallback)(e=>{w(e),P.installPlugin(e)},[]),O=e.defaults??{},ue=e.plugins??{},k=Object.keys(e.flows??{}).length,de=C?.languages??[];return(0,W.jsxs)(`div`,{className:`p-6`,children:[(0,W.jsxs)(`div`,{className:`mb-6`,children:[(0,W.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,W.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:r(`5XSN6frwqOG`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m1":(0,W.jsx)(x,{size:14}),"=m2":O.source_language?(0,W.jsx)(Me,{locale:String(O.source_language)}):(0,W.jsx)(`span`,{children:a(`No source`)}),"=m3":(0,W.jsx)(`span`,{children:`→`}),"=m4":O.target_languages?.length?O.target_languages.map(e=>(0,W.jsx)(Me,{locale:String(e),muted:de.length>0&&!de.includes(String(e))},String(e))):(0,W.jsx)(`span`,{children:a(`No targets`)}),"=m0":(0,W.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,W.jsx)(x,{size:14}),O.source_language?(0,W.jsx)(Me,{locale:String(O.source_language)}):(0,W.jsx)(`span`,{children:a(`No source`)}),(0,W.jsx)(`span`,{children:`→`}),O.target_languages?.length?O.target_languages.map(e=>(0,W.jsx)(Me,{locale:String(e),muted:de.length>0&&!de.includes(String(e))},String(e))):(0,W.jsx)(`span`,{children:a(`No targets`)})]}),"=m5":e.preset&&(0,W.jsx)(j,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(ue).length>0&&Object.entries(ue).map(([e,t])=>(0,W.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,W.jsx)(s,{size:10}),(0,W.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,W.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),d===!1&&f&&f.length>0&&(0,W.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,W.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,W.jsx)(T,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,W.jsxs)(`div`,{className:`flex-1`,children:[(0,W.jsx)(`p`,{className:`text-sm font-medium`,children:o(`3g2KoOwENqt`,`Plugin requirements not met`)}),(0,W.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:o(`7KuvtguaZZk`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,W.jsx)(`ul`,{className:`mt-2 space-y-1`,children:f.map(e=>(0,W.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,W.jsx)(j,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`span`,{className:`text-muted-foreground`,children:o(`eL9dnyhbHWi`,`not installed`)}),(0,W.jsxs)(M,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>le(e.plugin),disabled:ie===e.plugin,children:[ie===e.plugin?(0,W.jsx)(ee,{size:11,className:`animate-spin`}):(0,W.jsx)(s,{size:11}),o(`j4KGbJrhvB9`,`Install`)]})]}):(0,W.jsx)(`span`,{className:`text-muted-foreground`,children:o(`f7AqSU0Q7jH`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,W.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,W.jsx)(M,{size:`sm`,variant:`outline`,onClick:()=>l(`project-settings`),children:r(`iK0Yj4jmKL1`,`{=m0} Edit Plugin Settings`,{"=m0":(0,W.jsx)(ne,{size:12})})}),(0,W.jsx)(M,{size:`sm`,variant:`outline`,onClick:()=>l(`app-settings`),children:r(`8QTohQ6IwUw`,`{=m0} Manage Plugins`,{"=m0":(0,W.jsx)(s,{size:12})})})]})]})]})}),oe?.upgrade_available&&!E&&(0,W.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,W.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,W.jsx)(ae,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,W.jsxs)(`div`,{className:`flex-1`,children:[(0,W.jsx)(`p`,{className:`text-sm font-medium`,children:o(`iz31Vaxvdja`,`A newer version of this sample is available`)}),(0,W.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:o(`lCU8uKJDWyO`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,W.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,W.jsxs)(M,{size:`sm`,onClick:()=>v?.(),children:[(0,W.jsx)(ae,{size:12}),o(`19lXGUAdeqf`,`Reset to latest`)]}),(0,W.jsx)(M,{size:`sm`,variant:`outline`,onClick:ce,children:o(`8lZyY2ozX0G`,`Keep current`)})]})]})]})}),n&&(0,W.jsx)(Ze,{tabID:n,onBringUpToDate:_,convergence:te,plan:g,onOpenSettings:l}),(0,W.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,W.jsx)(Ae,{icon:(0,W.jsx)(h,{size:16}),title:o(`9TBuQ6kouqn`,`Check`),description:o(`djxxnkHr5y3`,`Verify structure, brand, and placeholders`),onClick:()=>l(`checks`)}),(0,W.jsx)(Ae,{icon:(0,W.jsx)(m,{size:16}),title:o(`8Q73zPUTyvO`,`Flows`),description:k>0?o(`cQn2a8LwcB4`,`{count} flow(s) defined`,{count:k}):o(`570g69FUwTF`,`Build your first flow`),onClick:()=>l(`flows`)}),(0,W.jsx)(Ae,{icon:(0,W.jsx)(re,{size:16}),title:o(`ZHkhP5WUi2`,`Tools`),description:o(`6uS4pxipcVU`,`Run individual tools on files`),onClick:()=>l(`tools`)}),(0,W.jsx)(Ae,{icon:(0,W.jsx)(ne,{size:16}),title:o(`cnwBxHTI0zE`,`Settings`),description:o(`5F6GqmyBRll`,`Languages, plugins, processing`),onClick:()=>l(`project-settings`)})]}),n&&(0,W.jsx)(Dt,{project:e,onUpdate:i??(()=>{}),tabID:n,flows:e.flows,onRunFlow:c,onOpenReview:u,formatList:b,basePath:S,status:p,convergence:te}),k===0&&(0,W.jsx)(pe,{icon:(0,W.jsx)(m,{size:24,className:`text-muted-foreground/50`}),title:o(`a59IN4epJb7`,`No flows defined yet.`),action:(0,W.jsx)(M,{variant:`link`,size:`sm`,onClick:()=>l(`flows`),className:`h-auto px-0`,children:o(`9QRBrwTrMtO`,`Create your first flow`)})})]})}var U,W,Ft=e((()=>{i(),U=t(),S(),he(),Be(),Ke(),Nt(),Qe(),W=n(),Pt.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onUpdate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:`Persist project edits made on the merged collection surface.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope?: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope.`},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`},plan:{required:!1,tsType:{name:`ConvergePlan`},description:`Pre-loaded pre-flight plan for Storybook/tests — skips api.getConvergePlan().`},onBringUpToDate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Launch the convergence run (Bring up to date → runner passes view).`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`import("../types/api").FormatInfo[]`},description:`Pre-loaded formats for Storybook — forwarded to CollectionsPanel.`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — forwarded to CollectionsPanel.`}}}})),G,K,q,J,Y,X,Z,Q,It,Lt,Rt;e((()=>{Ft(),{fn:G}=__STORYBOOK_MODULE_TEST__,K={title:`Pages/HomePage`,component:Pt,tags:[`autodocs`],args:{tabID:`tab-1`,onUpdate:G(),onRunFlow:G(),onNavigate:G(),onResetSample:G(),basePath:`/Users/dev/projects/acme`,formatList:[{name:`json`,display_name:`JSON`,extensions:[`.json`],has_reader:!0,has_writer:!0,has_schema:!1},{name:`markdown`,display_name:`Markdown`,extensions:[`.md`],has_reader:!0,has_writer:!0,has_schema:!1}]}},q={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en`,target_languages:[`fr`,`de`,`ja`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{name:`Website`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]},{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},J={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en`,target_languages:[`fr`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},Y={args:{...q.args,displayName:`KapiMart`,project:{version:`v1`,name:`KapiMart`,defaults:{source_language:`en`,target_languages:[`de`,`fr`,`ja`,`nb`,`ar`]},content:[{name:`Website`,base:`web/en`,items:[{path:`web/en/**/*.md`,target:`web/{lang}`,format:{name:`markdown`}}]},{name:`Online Store`,base:`src/en`,items:[{path:`src/en/*.{json,yaml,properties,html}`,target:`src/{lang}`}]},{name:`Contracts`,base:`legal/en`,items:[{path:`legal/en/*.{docx,xlsx}`,target:`legal/{lang}`}]},{name:`Templates`,base:`marketing/en`,items:[{path:`marketing/en/*.{pptx,docx}`,target:`marketing/{lang}`}]}],flows:{"pseudo-translate":{steps:[{tool:`pseudo-translate`}]},translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/kapimart/kapi.yaml`,projectName:`KapiMart`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{de:245,fr:191,ja:110,nb:100,ar:0},targetLanguages:[`de`,`fr`,`ja`,`nb`,`ar`]},{name:`Online Store`,blockCount:349,coverage:{de:349,fr:349,ja:175,nb:175,ar:0},targetLanguages:[`de`,`fr`,`ja`,`nb`,`ar`]},{name:`Contracts`,blockCount:80,coverage:{de:80,fr:0,ja:0,nb:0,ar:0},targetLanguages:[`de`,`fr`,`ja`,`nb`,`ar`]},{name:`Templates`,blockCount:25,coverage:{de:25,fr:12,ja:0,nb:0,ar:0},targetLanguages:[`de`,`fr`,`ja`,`nb`,`ar`]}]},convergence:{project:`KapiMart`,review:[],locales:[{collection:`Website`,locale:`de`,total:245,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Online Store`,locale:`de`,total:349,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Contracts`,locale:`de`,total:80,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Templates`,locale:`de`,total:25,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Website`,locale:`fr`,total:245,pct:{translated:78,reviewed:30},gated:!0,shippable:!1},{collection:`Online Store`,locale:`fr`,total:349,pct:{translated:100,reviewed:60},gated:!0,shippable:!1},{collection:`Contracts`,locale:`fr`,total:80,pct:{},gated:!0,shippable:!1},{collection:`Templates`,locale:`fr`,total:25,pct:{translated:48},gated:!0,shippable:!1},{collection:`Website`,locale:`ja`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`Online Store`,locale:`ja`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`nb`,total:245,pct:{translated:41},gated:!0,shippable:!1},{collection:`Online Store`,locale:`nb`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`ar`,total:245,pct:{},gated:!0,shippable:!1}]}}},X={args:{...q.args,displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en`,target_languages:[`fr`,`de`,`ja`]},content:[{name:`Website`,items:[{path:`docs/**/*.md`,format:{name:`markdown`}}]},{name:`UI Strings`,items:[{path:`src/i18n/en/*.json`}]},{name:`Emails`,items:[{path:`emails/**/*.html`}]}],flows:{translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/acme/kapi.yaml`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{fr:245,de:191,ja:110},targetLanguages:[`fr`,`de`,`ja`]},{name:`UI Strings`,blockCount:88,coverage:{fr:88,de:40,ja:0},targetLanguages:[`fr`,`de`,`ja`]},{name:`Emails`,blockCount:32,coverage:{fr:16,de:0,ja:0},targetLanguages:[`fr`,`de`,`ja`]}]}}},Z={args:{...X.args,convergence:{project:`Acme App Localization`,review:[],locales:[{collection:`Website`,locale:`fr`,total:245,pct:{translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{collection:`Website`,locale:`de`,total:245,pct:{translated:78,reviewed:40},gated:!0,shippable:!1},{collection:`Website`,locale:`ja`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`fr`,total:88,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`UI Strings`,locale:`de`,total:88,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`ja`,total:88,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`fr`,total:32,pct:{translated:50},gated:!0,shippable:!1},{collection:`Emails`,locale:`de`,total:32,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`ja`,total:32,pct:{},gated:!0,shippable:!1}]}}},Q={args:{...q.args,status:{projectPath:`/Users/dev/projects/acme/kapi.yaml`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},It={args:{...Y.args,status:{...Y.args.status,stale:!0}}},Lt={args:{...q.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: "Acme App Localization",
    project: {
      version: "v1",
      name: "Acme App Localization",
      defaults: {
        source_language: "en",
        target_languages: ["fr", "de", "ja"]
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    displayName: "Starter Project",
    project: {
      version: "v1",
      name: "Starter Project",
      defaults: {
        source_language: "en",
        target_languages: ["fr"]
      },
      content: [{
        path: "src/locales/en.json",
        format: {
          name: "json"
        }
      }]
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    displayName: "KapiMart",
    project: {
      version: "v1",
      name: "KapiMart",
      defaults: {
        source_language: "en",
        target_languages: ["de", "fr", "ja", "nb", "ar"]
      },
      content: [{
        name: "Website",
        base: "web/en",
        items: [{
          path: "web/en/**/*.md",
          target: "web/{lang}",
          format: {
            name: "markdown"
          }
        }]
      }, {
        name: "Online Store",
        base: "src/en",
        items: [{
          path: "src/en/*.{json,yaml,properties,html}",
          target: "src/{lang}"
        }]
      }, {
        name: "Contracts",
        base: "legal/en",
        items: [{
          path: "legal/en/*.{docx,xlsx}",
          target: "legal/{lang}"
        }]
      }, {
        name: "Templates",
        base: "marketing/en",
        items: [{
          path: "marketing/en/*.{pptx,docx}",
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
      projectPath: "/Users/dev/projects/kapimart/kapi.yaml",
      projectName: "KapiMart",
      hasData: true,
      collections: [{
        name: "Website",
        blockCount: 245,
        coverage: {
          de: 245,
          fr: 191,
          ja: 110,
          nb: 100,
          ar: 0
        },
        targetLanguages: ["de", "fr", "ja", "nb", "ar"]
      }, {
        name: "Online Store",
        blockCount: 349,
        coverage: {
          de: 349,
          fr: 349,
          ja: 175,
          nb: 175,
          ar: 0
        },
        targetLanguages: ["de", "fr", "ja", "nb", "ar"]
      }, {
        name: "Contracts",
        blockCount: 80,
        coverage: {
          de: 80,
          fr: 0,
          ja: 0,
          nb: 0,
          ar: 0
        },
        targetLanguages: ["de", "fr", "ja", "nb", "ar"]
      }, {
        name: "Templates",
        blockCount: 25,
        coverage: {
          de: 25,
          fr: 12,
          ja: 0,
          nb: 0,
          ar: 0
        },
        targetLanguages: ["de", "fr", "ja", "nb", "ar"]
      }]
    },
    convergence: {
      project: "KapiMart",
      review: [],
      locales: [
      // de: fully shippable across every collection.
      {
        collection: "Website",
        locale: "de",
        total: 245,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Online Store",
        locale: "de",
        total: 349,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Contracts",
        locale: "de",
        total: 80,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "Templates",
        locale: "de",
        total: 25,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      },
      // fr: high coverage, partly reviewed → in review.
      {
        collection: "Website",
        locale: "fr",
        total: 245,
        pct: {
          translated: 78,
          reviewed: 30
        },
        gated: true,
        shippable: false
      }, {
        collection: "Online Store",
        locale: "fr",
        total: 349,
        pct: {
          translated: 100,
          reviewed: 60
        },
        gated: true,
        shippable: false
      }, {
        collection: "Contracts",
        locale: "fr",
        total: 80,
        pct: {},
        gated: true,
        shippable: false
      }, {
        collection: "Templates",
        locale: "fr",
        total: 25,
        pct: {
          translated: 48
        },
        gated: true,
        shippable: false
      },
      // ja / nb: translated only, no review yet.
      {
        collection: "Website",
        locale: "ja",
        total: 245,
        pct: {
          translated: 45
        },
        gated: true,
        shippable: false
      }, {
        collection: "Online Store",
        locale: "ja",
        total: 349,
        pct: {
          translated: 50
        },
        gated: true,
        shippable: false
      }, {
        collection: "Website",
        locale: "nb",
        total: 245,
        pct: {
          translated: 41
        },
        gated: true,
        shippable: false
      }, {
        collection: "Online Store",
        locale: "nb",
        total: 349,
        pct: {
          translated: 50
        },
        gated: true,
        shippable: false
      },
      // ar: not started.
      {
        collection: "Website",
        locale: "ar",
        total: 245,
        pct: {},
        gated: true,
        shippable: false
      }]
    }
  }
}`,...Y.parameters?.docs?.source},description:{story:`The collection-centric spine with extracted block counts + coverage — the
 merged surface from issue #1068 (Option A).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    displayName: "Acme App Localization",
    project: {
      version: "v1",
      name: "Acme App Localization",
      defaults: {
        source_language: "en",
        target_languages: ["fr", "de", "ja"]
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
      projectPath: "/Users/dev/projects/acme/kapi.yaml",
      projectName: "Acme App Localization",
      hasData: true,
      collections: [{
        name: "Website",
        blockCount: 245,
        coverage: {
          fr: 245,
          de: 191,
          ja: 110
        },
        targetLanguages: ["fr", "de", "ja"]
      }, {
        name: "UI Strings",
        blockCount: 88,
        coverage: {
          fr: 88,
          de: 40,
          ja: 0
        },
        targetLanguages: ["fr", "de", "ja"]
      }, {
        name: "Emails",
        blockCount: 32,
        coverage: {
          fr: 16,
          de: 0,
          ja: 0
        },
        targetLanguages: ["fr", "de", "ja"]
      }]
    }
  }
}`,...X.parameters?.docs?.source},description:{story:`Three target languages — the per-language bar columns (Option A).`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    ...ThreeLanguages.args,
    convergence: {
      project: "Acme App Localization",
      review: [],
      locales: [{
        collection: "Website",
        locale: "fr",
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
        locale: "de",
        total: 245,
        pct: {
          translated: 78,
          reviewed: 40
        },
        gated: true,
        shippable: false
      }, {
        collection: "Website",
        locale: "ja",
        total: 245,
        pct: {
          translated: 45
        },
        gated: true,
        shippable: false
      }, {
        collection: "UI Strings",
        locale: "fr",
        total: 88,
        pct: {
          translated: 100,
          reviewed: 100
        },
        gated: true,
        shippable: true
      }, {
        collection: "UI Strings",
        locale: "de",
        total: 88,
        pct: {
          translated: 45
        },
        gated: true,
        shippable: false
      }, {
        collection: "UI Strings",
        locale: "ja",
        total: 88,
        pct: {},
        gated: true,
        shippable: false
      }, {
        collection: "Emails",
        locale: "fr",
        total: 32,
        pct: {
          translated: 50
        },
        gated: true,
        shippable: false
      }, {
        collection: "Emails",
        locale: "de",
        total: 32,
        pct: {},
        gated: true,
        shippable: false
      }, {
        collection: "Emails",
        locale: "ja",
        total: 32,
        pct: {},
        gated: true,
        shippable: false
      }]
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: {
      projectPath: "/Users/dev/projects/acme/kapi.yaml",
      projectName: "Acme App Localization",
      hasData: false,
      collections: []
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:`Project configured but never extracted — the strip prompts a run.`,...Q.parameters?.docs?.description}}},It.parameters={...It.parameters,docs:{...It.parameters?.docs,source:{originalSource:`{
  args: {
    ...WithCoverage.args,
    status: {
      ...WithCoverage.args!.status!,
      stale: true
    }
  }
}`,...It.parameters?.docs?.source},description:{story:`Counts produced by an older kapi — the stale banner offers a re-extract.`,...It.parameters?.docs?.description}}},Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`{
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
}`,...Lt.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...Lt.parameters?.docs?.description}}},Rt=[`Default`,`NoFlows`,`WithCoverage`,`ThreeLanguages`,`WithShipGates`,`NeverExtracted`,`StaleCounts`,`SampleUpgradeAvailable`]}))();export{q as Default,Q as NeverExtracted,J as NoFlows,Lt as SampleUpgradeAvailable,It as StaleCounts,X as ThreeLanguages,Y as WithCoverage,Z as WithShipGates,Rt as __namedExportsOrder,K as default};