import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Et as l,It as u,K as d,Pi as f,St as p,Wi as ee,bi as te,bt as m,c as h,cr as g,et as _,g as v,gi as ne,gr as y,i as b,ia as x,ma as re,mi as S,mt as ie,na as ae,o as C,t as w,ua as oe,vi as T,vt as se}from"./lucide-react-D8E6AOxn.js";import{t as E}from"./label-C1tohmzx.js";import{t as D}from"./button-D6zYGAvL.js";import{t as ce}from"./card-CHo_fh0q.js";import{t as le}from"./checkbox-DJT2XQp-.js";import{t as O}from"./badge-B925V-__.js";import{t as k}from"./confirm-delete-button-DVFml4rJ.js";import{t as A}from"./LocalePill-C8a-9VUF.js";import{$ as j,At as ue,Bt as M,G as de,Gt as N,Jt as fe,Kt as pe,Lt as me,Mt as he,Nt as ge,Qt as _e,Rn as ve,Rt as ye,Vt as be,_n as xe,an as Se,et as Ce,ft as we,hn as Te,i as Ee,jt as De,kt as Oe,n as ke,nn as Ae,nt as je,o as Me,ot as Ne,qt as Pe,r as Fe,ut as Ie,zt as Le}from"./iframe-BGnGxC_u.js";import{r as Re,t as P}from"./useApi-Bxwg41QO.js";import{n as ze,t as Be}from"./useShortenHome-QEQ8GaVF.js";import{n as Ve,t as He}from"./ActiveFilterContext-8l_IgZZQ.js";import{n as Ue,t as We}from"./useWailsEvent-tO44X_hi.js";import{n as Ge,t as Ke}from"./JobFeedContext-CH-SDZ4R.js";import{n as qe,r as Je}from"./ConvergenceHero-BukidEAh.js";import{n as Ye,t as Xe}from"./FilePreview-BG4Db7zx.js";import{n as Ze,t as Qe}from"./filter-BQ0GIjVn.js";import{n as $e,t as et}from"./useSchemaFormHost-oihPLMs-.js";import{n as F,r as tt}from"./api-LEFL5VCf.js";import{n as nt,t as rt}from"./TranslationStatusPanel-ITMZXJ1l.js";import{n as it,t as at}from"./useLocales-BMY5r-yG.js";function ot({open:e,onOpenChange:t,title:n,description:r,formats:i,allFormats:a,allowAdd:o=!1,filterExtension:c,values:l,onChange:u,scopeNote:d}){let{showError:f}=Fe(),p=$e(),[ee,te]=(0,I.useState)([]),[m,h]=(0,I.useState)(!1),g=(0,I.useMemo)(()=>{let e=new Set,t=[];for(let n of[...i,...ee])n&&!e.has(n)&&(e.add(n),t.push(n));return t},[i,ee]),_=o||i.length>1,[v,y]=(0,I.useState)(_?null:i[0]??null);(0,I.useEffect)(()=>{e&&(te([]),h(!1),y(_?null:i[0]??null))},[e]);let x=v??``,re=v===null,[ie,C]=(0,I.useState)({}),[w,oe]=(0,I.useState)({}),[T,ce]=(0,I.useState)(!1);(0,I.useEffect)(()=>{!e||!x||ie[x]!==void 0||(ce(!0),Promise.all([P.getFormatSchema(x),P.listFormatPresets(x)]).then(([e,t])=>{C(t=>({...t,[x]:e??null})),oe(e=>({...e,[x]:t??[]}))}).catch(e=>{f(`Failed to load format schema`,e),C(e=>({...e,[x]:null}))}).finally(()=>ce(!1)))},[e,x,ie,f]);let le=(0,I.useMemo)(()=>{let e=c?.toLowerCase();return a.filter(t=>g.includes(t.name)?!1:e?(t.extensions??[]).some(t=>t.toLowerCase()===e):!0)},[a,g,c]),O=(0,I.useCallback)(e=>{e&&(te(t=>t.includes(e)?t:[...t,e]),h(!1),y(e))},[]),k=l[x]??{},A=ie[x],j=w[x]??[],de=(0,I.useMemo)(()=>{if(!A)return;let e={};for(let[t,n]of Object.entries(A.properties??{}))n?.default!==void 0&&(e[t]=n.default);let t=j.find(e=>e.name===k.preset);return t?.config&&Object.assign(e,t.config),e},[A,j,k.preset]);function N(e){return Object.keys(l[e]?.config??{}).length}return(0,L.jsx)(Oe,{open:e,onOpenChange:t,children:(0,L.jsxs)(ue,{side:`right`,className:`flex w-full flex-col gap-0 p-0 sm:max-w-lg md:max-w-xl`,children:[(0,L.jsxs)(he,{className:`border-b border-border`,children:[(0,L.jsx)(ge,{children:n}),r&&(0,L.jsx)(De,{children:r})]}),re?(0,L.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-2 overflow-auto p-4`,children:[(0,L.jsx)(E,{className:`text-xs text-muted-foreground`,children:s(`lAy6j`,`Formats`)}),g.map(e=>(0,L.jsxs)(`button`,{onClick:()=>y(e),className:`flex w-full items-center justify-between rounded-md border border-border px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/50`,children:[(0,L.jsx)(`span`,{className:`font-medium`,translate:`no`,children:e}),(0,L.jsxs)(`span`,{className:`flex items-center gap-2`,children:[N(e)>0&&(0,L.jsx)(`span`,{className:`rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary`,children:s(`1v4Dt5`,`{count} set`,{count:N(e)})}),(0,L.jsx)(S,{size:15,className:`text-muted-foreground`})]})]},e)),g.length===0&&!m&&(0,L.jsx)(`p`,{className:`py-2 text-xs text-muted-foreground`,children:s(`4E8VTn`,`No formats matched yet. Add one to configure it.`)}),o&&(m?(0,L.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,L.jsx)(je,{value:``,onChange:O,formats:le,placeholder:s(`2aYDzk`,`Pick a format`),className:`flex-1`}),(0,L.jsx)(D,{variant:`ghost`,size:`sm`,onClick:()=>h(!1),"aria-label":s(`AQznM`,`Cancel`),children:(0,L.jsx)(b,{size:14})})]}):(0,L.jsxs)(D,{variant:`outline`,size:`sm`,className:`w-full justify-start text-muted-foreground`,onClick:()=>h(!0),children:[(0,L.jsx)(se,{size:14}),s(`1tDf0l`,`Add format`)]}))]}):(0,L.jsxs)(`div`,{className:`min-h-0 flex-1 overflow-auto p-4`,children:[_&&(0,L.jsxs)(`button`,{onClick:()=>y(null),className:`mb-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground`,children:[(0,L.jsx)(ne,{size:14}),s(`lAy6j`,`Formats`)]}),T||A===void 0?(0,L.jsx)(`div`,{className:`flex h-40 items-center justify-center text-muted-foreground`,children:(0,L.jsx)(ae,{className:`animate-spin`,size:16})}):A===null?(0,L.jsxs)(`div`,{children:[(0,L.jsx)(`h3`,{className:`text-sm font-semibold text-foreground`,translate:`no`,children:x}),(0,L.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:s(`2uJqdn`,`No configurable options for this format.`)})]}):(0,L.jsxs)(`div`,{className:`space-y-3`,children:[j.length>0&&(0,L.jsxs)(`div`,{children:[(0,L.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3nOg4F`,`Preset`)}),(0,L.jsxs)(me,{value:k.preset||`__default__`,onValueChange:e=>u(x,{...k,preset:e===`__default__`?void 0:e}),children:[(0,L.jsx)(M,{className:`h-8 text-xs`,children:(0,L.jsx)(be,{})}),(0,L.jsxs)(ye,{children:[(0,L.jsx)(Le,{value:`__default__`,children:s(`1Hb69c`,`Default`)}),j.map(e=>(0,L.jsxs)(Le,{value:e.name,translate:`no`,children:[e.name,e.description?` — ${e.description}`:``]},e.name))]})]})]}),(0,L.jsx)(Me,{schema:A,values:k.config??{},presetValues:de,host:p,onChange:e=>u(x,{...k,config:Object.keys(e).length>0?e:void 0})})]})]}),(0,L.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border p-4`,children:[d?(0,L.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d}):(0,L.jsx)(`span`,{}),(0,L.jsx)(D,{size:`sm`,onClick:()=>t(!1),children:s(`2m1wue`,`Done`)})]})]})})}var I,L,st=t((()=>{a(),I=e(n(),1),w(),Ee(),Re(),et(),ke(),L=r(),ot.__docgenInfo={description:`Schema-driven format configuration in a right-side drawer, laid out as a
master→detail flow so each level gets the full drawer width:

  - **List** (wildcard / multi-format only): the formats to configure, with
    config-count badges and an "add format" control. Tapping one opens its
    detail.
  - **Detail**: the format's option form (the framework \`SchemaForm\`, whose own
    header names the format) plus its preset, with a back affordance.

A single-format item skips the list and opens straight on its detail.`,methods:[],displayName:`FormatConfigDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},formats:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Formats shown initially in the list (e.g. the formats matched in the input files).`},allFormats:{required:!0,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`All registered formats, for the "add format" picker.`},allowAdd:{required:!1,tsType:{name:`boolean`},description:`Allow configuring formats beyond the initial list (wildcard items).`,defaultValue:{value:`false`,computed:!1}},filterExtension:{required:!1,tsType:{name:`string`},description:`When set, the add-picker is filtered to formats claiming this extension (e.g. ".json").`},values:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`FormatConfigValue`}],raw:`Record<string, FormatConfigValue>`},description:`Current config/preset keyed by format name.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(format: string, next: FormatConfigValue) => void`,signature:{arguments:[{type:{name:`string`},name:`format`},{type:{name:`FormatConfigValue`},name:`next`}],return:{name:`void`}}},description:`Persist a change for one format.`},scopeNote:{required:!1,tsType:{name:`string`},description:`Footer note clarifying where the config is stored (item vs project-wide).`}}}}));function ct(e){let t=e.toLowerCase();return ft.some(e=>t.endsWith(e))}function lt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function ut({archivePath:e,onSelect:t,entries:n}){let[r,a]=(0,dt.useState)(n??null),[o,c]=(0,dt.useState)(!1),[l,u]=(0,dt.useState)(null);return(0,dt.useEffect)(()=>{if(n){a(n);return}let t=!1;return c(!0),u(null),P.listArchiveEntries(e).then(e=>{if(!t){if(e===null){u(`Archive listing is unavailable in this environment.`);return}a(e)}}).catch(e=>{t||u(e instanceof Error?e.message:String(e))}).finally(()=>{t||c(!1)}),()=>{t=!0}},[e,n]),o?(0,R.jsx)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-muted-foreground`,children:i(`2EU0eU`,`{=m0} Listing entries…`,{"=m0":(0,R.jsx)(ae,{className:`size-3 animate-spin`})})}):l?(0,R.jsxs)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-destructive`,children:[(0,R.jsx)(re,{className:`size-3`}),l]}):!r||r.length===0?(0,R.jsx)(`div`,{className:`py-2 pl-8 text-xs text-muted-foreground`,children:s(`3BHBSi`,`No entries.`)}):(0,R.jsx)(`ul`,{className:`border-l border-border/60 pl-3`,"aria-label":s(`1v7i0i`,`Archive entries`),children:r.map(e=>(0,R.jsx)(`li`,{children:(0,R.jsxs)(`button`,{type:`button`,disabled:!e.format,onClick:e.format?()=>t(e.name):void 0,className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs hover:bg-accent disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`,title:e.format?`Preview ${e.name}`:`No reader for this file type`,children:[(0,R.jsx)(y,{className:`size-3 shrink-0 text-muted-foreground`}),(0,R.jsx)(`span`,{className:`truncate font-mono`,translate:`no`,children:e.name}),(0,R.jsx)(`span`,{className:`ml-auto shrink-0 text-muted-foreground`,children:lt(e.size)})]})},e.name))})}var dt,R,ft,pt=t((()=>{a(),dt=e(n(),1),w(),Re(),R=r(),ft=[`.zip`,`.tar`,`.tgz`,`.tar.gz`],ut.__docgenInfo={description:``,methods:[],displayName:`ArchiveEntries`,props:{archivePath:{required:!0,tsType:{name:`string`},description:`Absolute path of the archive container.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(entry: string) => void`,signature:{arguments:[{type:{name:`string`},name:`entry`}],return:{name:`void`}}},description:`Called with the inner entry path when the user picks an entry to preview.`},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`ArchiveEntry`}],raw:`ArchiveEntry[]`},description:`Pre-loaded entries for Storybook/tests, skipping the backend call.`}}}}));function mt(e){let t=e?.pct?.translated??0;return!e||t===0?{key:`none`,label:`—`,short:`—`,color:`var(--muted-foreground)`,pct:0}:e.shippable?{key:`shippable`,label:`Shippable`,short:`Ship`,color:`oklch(0.62 0.17 150)`,pct:t}:(e.pct?.reviewed??0)>0?{key:`review`,label:`In review`,short:`Review`,color:`oklch(0.72 0.15 80)`,pct:t}:{key:`draft`,label:`Draft`,short:`Draft`,color:`var(--primary)`,pct:t}}function ht(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function gt(e){return e?.name??``}function _t(e){let t=e.split(`/`).pop()??e,n=/\*\.([A-Za-z0-9]+)$/.exec(t);return n?`.`+n[1].toLowerCase():void 0}function vt(e){return tt(e)?`(unnamed)`:e.name&&e.name.length>0?e.name:`(unnamed)`}function yt(e){let t=e[0];return t?t.relative.split(`/`).map(e=>e===t.lang?`{lang}`:e).join(`/`):``}function bt({label:e,pct:t,color:n}){return(0,B.jsx)(`span`,{className:`flex min-w-40 flex-1 items-center gap-2`,children:i(`26PYWB`,`{=m0} {label} {/=m0} {=m2} {=m3} {/=m2} {=m4} {pct}% {/=m4}`,{"=m0":(0,B.jsx)(`span`,{className:`w-14 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),"=m2":(0,B.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}})}),"=m3":(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}}),"=m4":(0,B.jsxs)(`span`,{className:`w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[t,`%`]})},{label:e,pct:t})})}function xt({items:e,onSelect:t}){let n=(0,z.useRef)(null),[r,a]=(0,z.useState)(0),[c,l]=(0,z.useState)(null);(0,z.useEffect)(()=>{let e=n.current;if(!e)return;let t=new ResizeObserver(e=>a(e[0].contentRect.width));return t.observe(e),()=>t.disconnect()},[]);let u=e=>Et[e]??Et.none,d=e=>({shippable:`Shippable`,review:`In review`,translated:`Translated`,none:`Not started`})[e]??e,f=e=>40+e/100*p,p=Math.max(0,r-80),ee=[...e].sort((e,t)=>e.pct-t.pct),te=[],m=ee.map(e=>{let t=f(e.pct),n=0;for(;n<te.length&&t-te[n]<80;)n++;return te[n]=t,{it:e,x:t,above:n%2==0,sideLane:Math.floor(n/2)}}),h=e=>{let t=m.filter(t=>t.above===e).map(e=>e.sideLane);return t.length?38+Math.max(...t)*24:0},g=r>0?h(!0):38,_=r>0?h(!1):0,v=g+8,ne=v+_+8,y=ne+12,b=m.find(e=>e.it.lang===c)?.it;return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3btIdj`,`Completeness by language`)}),(0,B.jsxs)(`div`,{ref:n,className:`relative`,style:{height:y},children:[r>0&&[25,50,75].map(e=>(0,B.jsx)(`div`,{className:`absolute w-px bg-border/40`,style:{left:f(e),top:0,height:ne}},e)),(0,B.jsx)(`div`,{className:`absolute h-px bg-border`,style:{left:40,right:40,top:v}}),r>0&&m.map(({it:e,x:n,above:r,sideLane:a})=>{let s=u(e.stage),d=18+a*24,f=c&&c!==e.lang?.12:1,p=r?v-d-20:v+d;return(0,B.jsx)(`span`,{style:{opacity:f,transition:`opacity 120ms`},children:i(`1x1ijP`,`{=m0}  {=m1}  {=m2}  {=m3} {=m4} {=m5} {it.pct}% {/=m5} {/=m3}`,{"=m0":(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?v-d:v,width:1,height:d-4,background:`color-mix(in oklch, ${s} 55%, var(--border))`}}),"=m1":(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:r?v-8:v+4,width:0,height:0,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,...r?{borderTop:`4px solid ${s}`}:{borderBottom:`4px solid ${s}`}}}),"=m2":(0,B.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:v,width:8,height:8,transform:`translate(-50%, -50%)`,background:s,border:`2px solid var(--card)`}}),"=m3":(0,B.jsxs)(`span`,{className:`absolute flex -translate-x-1/2 items-center gap-1 whitespace-nowrap ${t?`cursor-pointer`:`cursor-default`}`,style:{left:n,top:p},onMouseEnter:()=>l(e.lang),onMouseLeave:()=>l(null),onClick:t?()=>t(e.lang):void 0,role:t?`button`:void 0,"aria-label":t?o(`Review {lang} translations`,{lang:e.lang}):void 0,title:t?`${e.lang}: ${e.pct}% translated — ${o(`click to review`)}`:`${e.lang}: ${e.pct}% translated`,"data-slot":`timeline-lang-tag`,children:[(0,B.jsx)(A,{locale:e.lang}),(0,B.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m4":(0,B.jsx)(A,{locale:e.lang}),"=m5":(0,B.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"it.pct":e.pct})},e.lang)}),r>0&&b&&b.byCollection.map((e,t)=>{let n=f(e.pct);return(0,B.jsx)(`span`,{className:`z-10`,children:i(`2ezCfL`,`{=m0}  {=m1}  {=m2} {=m3}{cc.name}{/=m3}{value} {=m6}{cc.pct}%{/=m6} {/=m2}`,{"=m0":(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:v-20,width:1,height:16,background:`color-mix(in oklch, ${e.color} 60%, var(--border))`}}),"=m1":(0,B.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:v,width:11,height:11,transform:`translate(-50%, -50%)`,background:e.color,border:`2px solid ${u(e.stage)}`,boxShadow:`0 0 0 1px var(--card)`},title:`${e.name}: ${e.pct}% · ${d(e.stage)}`}),"=m2":(0,B.jsxs)(`span`,{className:`absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-1.5 py-0.5 text-[9px] font-medium shadow-sm`,style:{left:n,top:v-38,borderColor:e.color},children:[(0,B.jsx)(`span`,{translate:`no`,children:e.name}),` `,(0,B.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m3":(0,B.jsx)(`span`,{translate:`no`,children:e.name}),"=m6":(0,B.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"cc.name":e.name,value:` `,"cc.pct":e.pct})},`${e.name}-${t}`)}),r>0&&[0,50,100].map(e=>(0,B.jsx)(`span`,{className:`absolute -translate-x-1/2 text-[9px] text-muted-foreground`,style:{left:f(e),top:ne},children:s(`4pXae7`,`${e}%`,{tk:e})},e))]}),(0,B.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground`,children:[[`shippable`,s(`2dg6y8`,`Shippable`)],[`review`,s(`2oadc9`,`In review`)],[`translated`,s(`2Lc17w`,`Translated`)]].map(([e,t])=>(0,B.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,B.jsx)(`span`,{className:`size-2 rounded-full`,style:{background:u(e)}}),t]},e))})]})}function St({project:e,onUpdate:t,tabID:n,flows:r,onRunFlow:a,onOpenReview:o,formatList:c,basePath:d,status:ee,convergence:m}){let{showError:h}=Fe(),{locales:ne}=it(),{hasActive:b}=Ge(),re=ze(),{active:C,setActive:w,enabled:ue}=Ve(),[M,de]=(0,z.useState)([]),[me,he]=(0,z.useState)([]),[ge,ye]=(0,z.useState)(d??``),[be,Ee]=(0,z.useState)(!1),[De,Oe]=(0,z.useState)(!1),[ke,Ae]=(0,z.useState)(c??[]),[Me,Ne]=(0,z.useState)(ee??null),[Le,Re]=(0,z.useState)(m??null),[Be,He]=(0,z.useState)({}),[We,Ke]=(0,z.useState)(!1),[qe,Je]=(0,z.useState)(null),[Ye,Ze]=(0,z.useState)(new Set),[$e,et]=(0,z.useState)(new Set),[F,nt]=(0,z.useState)(new Set),[at,I]=(0,z.useState)(!1),[L,st]=(0,z.useState)(!1),[lt,dt]=(0,z.useState)({}),[R,ft]=(0,z.useState)(new Set),[pt,St]=(0,z.useState)(new Set),[Ct,Et]=(0,z.useState)(null),[Ot,kt]=(0,z.useState)(new Set),[V,H]=(0,z.useState)(null),U=e.content??[],W=Object.keys(r??{}),G=!!(c&&d),K=(0,z.useMemo)(()=>{let t={};for(let[n,r]of Object.entries(e.defaults?.formats??{}))t[n]={config:r.config,preset:r.preset};return t},[e.defaults?.formats]),At=(0,z.useCallback)((n,r)=>{let i={...e.defaults},a={...i.formats},o={...a[n]};r.preset?o.preset=r.preset:delete o.preset,r.config&&Object.keys(r.config).length>0?o.config=r.config:delete o.config,Object.keys(o).length===0?delete a[n]:a[n]=o,i.formats=Object.keys(a).length>0?a:void 0,t({...e,defaults:i})},[e,t]),q=(0,z.useCallback)(e=>{let t=new Set;for(let n of M)n.pattern===e.path&&n.format&&t.add(n.format);return[...t]},[M]);(0,z.useEffect)(()=>{c||P.listFormats().then(e=>{e&&Ae(e)}).catch(e=>h(`Failed to load formats`,e)),d||P.getBasePath(n).then(e=>{e&&ye(e)}).catch(e=>h(`Failed to get base path`,e))},[n,h,c,d]);let J=(0,z.useCallback)(()=>{ee||P.getProjectStatus(n).then(e=>{e&&Ne(e)}).catch(()=>{})},[n,ee]),Y=(0,z.useCallback)(()=>{m||P.getConvergence(n).then(e=>{e&&Re(e)}).catch(()=>{})},[n,m]),X=(0,z.useCallback)(async()=>{if(!G){Ee(!0);try{await P.updateProject(n,e);let[t,r,i]=await Promise.all([P.matchContent(n),P.listProjectFiles(n),P.listOutputs(n)]);de(t??[]),he(r??[]),dt(i??{})}catch(e){h(`Failed to scan files`,e)}finally{Ee(!1)}}},[n,e,h,G]),Z=(0,z.useCallback)(()=>{G||P.listOutputs(n).then(e=>{e&&dt(e)}).catch(()=>{})},[n,G]);(0,z.useEffect)(()=>{X()},[X,U.length]),(0,z.useEffect)(()=>{J(),Y()},[J,Y,e.content]),(0,z.useEffect)(()=>{!n||!a||P.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;He(t)})},[n,a,e.flows]),Ue(`project-files-changed`,e=>{e===n&&X()}),Ue(`outputs-changed`,()=>Z()),Ue(`project:extracted`,()=>{J(),Y()});let Q=(0,z.useCallback)(async()=>{if(!(!n||G)){Oe(!0);try{await P.runExtract(n),J(),Y(),await X()}catch(e){h(`Extraction failed`,e)}finally{Oe(!1)}}},[n,G,J,Y,X,h]),jt=n=>{t({...e,content:n})},Mt=()=>{jt([...U,{name:`New Collection`,items:[{path:``}]}])},Nt=(e,t)=>{let n=[...U];n[e]=t,jt(n)},Pt=e=>{jt(U.filter((t,n)=>n!==e))},Ft=async()=>{let e=await P.addFilesDialog(n,``);e&&e.length>0&&X()},It=(0,z.useCallback)(async e=>{e.preventDefault(),Ke(!1);let t=e.dataTransfer?.files;if(!(!t||t.length===0)){for(let e=0;e<t.length;e++){let r=t[e].path;r&&await P.copyFileToProject(n,r,``)}X()}},[n,X]),Lt=(0,z.useCallback)(e=>{e.preventDefault(),Ke(!0)},[]),Rt=(0,z.useCallback)(e=>{e.preventDefault(),Ke(!1)},[]),zt=new Set(M.map(e=>e.relative)),Bt=new Set;for(let e of Object.values(lt))for(let t of e)Bt.add(t.relative);let Vt=me.filter(e=>!e.is_dir&&!zt.has(e.relative)&&!Bt.has(e.relative)),Ht=C?.collections??[],Ut=(0,z.useCallback)(e=>Ht.length===0||Ht.includes(vt(e)),[Ht]),$=U.map((e,t)=>({coll:e,ci:t})).filter(({coll:e})=>Ut(e)),Wt=U.length-$.length,Gt=ue&&!!C,Kt=(0,z.useMemo)(()=>{let e=new Map;for(let t of Me?.collections??[])e.set(t.name,t);return e},[Me]),qt=$.map(({coll:e})=>Kt.get(vt(e))).filter(e=>!!e),Jt=qt.reduce((e,t)=>e+t.blockCount,0),Yt=Array.from(new Set(qt.flatMap(e=>Qe(e.targetLanguages,C)))).map(e=>{let t=0,n=0;for(let r of qt)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,pct:n>0?Math.round(t/n*100):0}}),Xt=!!Me?.hasData,Zt=(e,t,n)=>{let r=gt(e.format),a=e.format?.config&&Object.keys(e.format.config).length>0,o=r?[]:q(e),c=!r;return(0,B.jsxs)(`div`,{className:`space-y-2`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`yBWxw`,`Path pattern`)}),(0,B.jsx)(we,{value:e.path,onChange:n=>t({...e,path:n}),placeholder:s(`1R8M9g`,`src/locales/en/*.json`)})]}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`39Lmr`,`Format`)}),(0,B.jsx)(je,{value:r,onChange:n=>t({...e,format:n?{name:n}:void 0}),formats:ke})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3YGJcS`,`Target path`)}),(0,B.jsx)(Ie,{value:e.target??``,onChange:n=>t({...e,target:n||void 0}),placeholder:s(`3T9UTi`,`output/{lang}  ·  or output/{lang}/{dir}/{name}.{ext}`)})]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:i(`5W6k9`,`Base{value} {=m1} (optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard) {/=m1}`,{"=m1":(0,B.jsx)(`span`,{className:`font-normal text-muted-foreground/60`,children:`(optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard)`})},{value:` `})}),(0,B.jsx)(we,{value:e.base??``,onChange:n=>t({...e,base:n||void 0}),placeholder:s(`jiLnw`,`auto (e.g. input/docs)`)})]}),r===`exec`&&(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`1gbrZJ`,`Extractor command`)}),(0,B.jsx)(`input`,{type:`text`,value:typeof e.format?.config?.command==`string`?e.format.config.command:``,onChange:n=>t({...e,format:{...e.format,config:{...e.format?.config,command:n.target.value||void 0}}}),placeholder:s(`1YiMcB`,`vp kapi-react extract --stream`),className:`w-full rounded-md border border-input bg-background px-2 py-1 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,B.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:s(`4oM908`,"`kapi extract -p` runs this command; NUL-separated paths on stdin, NDJSON blocks on stdout.")})]}),(r||o.length>0)&&(0,B.jsx)(`div`,{children:(0,B.jsxs)(D,{variant:`ghost`,size:`xs`,onClick:()=>Je(n),className:`h-auto px-0 text-muted-foreground hover:text-foreground`,children:[(0,B.jsx)(_,{size:10}),r?(0,B.jsxs)(B.Fragment,{children:[s(`66RA9`,`Configure {fmt}`,{fmt:r}),(a||e.format?.preset)&&(0,B.jsx)(`span`,{className:`ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-primary`,children:e.format?.preset?e.format.preset:Object.keys(e.format.config).length})]}):s(`4h7nHO`,`Configure formats ({count})`,{count:o.length})]})}),qe===n&&(c?(0,B.jsx)(ot,{open:!0,onOpenChange:e=>!e&&Je(null),title:s(`48Xlr4`,`Configure formats`),description:s(`1bIT1z`,`This pattern auto-detects a format per file. Tune any of them here — settings apply project-wide.`),formats:o,allFormats:ke,allowAdd:!0,filterExtension:_t(e.path),values:K,onChange:At,scopeNote:s(`10MXfr`,`Stored in the project's defaults.formats — shared by every content item.`)}):(0,B.jsx)(ot,{open:!0,onOpenChange:e=>!e&&Je(null),title:s(`66RA9`,`Configure {fmt}`,{fmt:r}),formats:[r],allFormats:ke,values:{[r]:{config:e.format?.config,preset:e.format?.preset}},onChange:(n,r)=>t({...e,format:{name:n,preset:r.preset,config:r.config}}),scopeNote:s(`2mxJu6`,`Applies to this content item.`)}))]})},Qt=(e,t)=>e(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}),$t=e=>Ze(t=>new Set(t).add(e)),en=e=>tt(e)?[e.path??``]:(e.items??[]).map(e=>e.path),tn=e=>{let t=new Set(en(e).filter(Boolean));return M.filter(e=>t.has(e.pattern))},nn=(t,n)=>tt(t)?Zt({path:t.path??``,format:t.format,target:t.target},e=>Nt(n,{path:e.path,format:e.format,target:e.target}),`bare-${n}`):(0,B.jsxs)(`div`,{className:`space-y-4`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`2wzVub`,`Collection name`)}),(0,B.jsx)(`input`,{type:`text`,value:t.name??``,onChange:e=>Nt(n,{...t,name:e.target.value||void 0}),placeholder:s(`3fQf8Y`,`Collection name`),className:`w-full rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`})]}),(0,B.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`25vgeN`,`Source override`)}),(0,B.jsx)(j,{value:t.source_language??``,onChange:e=>Nt(n,{...t,source_language:e||void 0}),locales:ne,placeholder:e.defaults?.source_language?s(`10wAUR`,`Inherit ({source})`,{source:e.defaults.source_language}):s(`4FMXin`,`Select source...`)})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`oVuml`,`Target overrides`)}),(0,B.jsx)(Ce,{value:t.target_languages??[],onChange:e=>Nt(n,{...t,target_languages:e.length>0?e:void 0}),locales:ne,placeholder:e.defaults?.target_languages?.length?s(`s2EQV`,`Inherit ({targets})`,{targets:e.defaults.target_languages.join(`, `)}):s(`1YSqO`,`Add targets...`)})]})]}),(0,B.jsxs)(`div`,{children:[(0,B.jsx)(E,{className:`mb-1 block text-xs text-muted-foreground`,children:s(`4GjmHO`,`Patterns`)}),(0,B.jsxs)(`div`,{className:`space-y-2`,children:[(t.items??[]).map((e,r)=>(0,B.jsxs)(`div`,{className:`group/item relative rounded-md border border-border p-3`,children:[(0,B.jsx)(`div`,{className:`absolute right-2 top-2 opacity-0 group-hover/item:opacity-100`,children:(0,B.jsx)(k,{onDelete:()=>{let e=(t.items??[]).filter((e,t)=>t!==r);e.length===0?Pt(n):Nt(n,{...t,items:e})},mode:`icon`})}),Zt(e,e=>{let i=[...t.items??[]];i[r]=e,Nt(n,{...t,items:i})},`coll-${n}-${r}`)]},r)),(0,B.jsx)(D,{variant:`ghost`,size:`xs`,onClick:()=>Nt(n,{...t,items:[...t.items??[],{path:``}]}),className:`text-muted-foreground`,children:i(`1EfPvQ`,`{=m0} Add another pattern`,{"=m0":(0,B.jsx)(se,{size:10})})})]})]})]}),rn=e=>(0,B.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,B.jsx)(`thead`,{children:(0,B.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`22cvwU`,`File`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`1EJ61l`,`Format`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3RvdGQ`,`Pattern`)})]})}),(0,B.jsx)(`tbody`,{children:e.map((e,t)=>{let n=lt[e.relative]??[],r=R.has(e.relative),i=n.filter(e=>e.exists).length,a=yt(n),o=pt.has(e.relative);return(0,B.jsxs)(z.Fragment,{children:[(0,B.jsxs)(`tr`,{onClick:()=>Et({path:e.path,relative:e.relative}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:s(`4EZGfu`,`Preview {file}`,{file:e.relative}),children:[(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[n.length>0?(0,B.jsx)(`button`,{onClick:t=>{t.stopPropagation(),ft(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n})},className:`shrink-0 text-muted-foreground hover:text-foreground`,title:r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),"aria-label":r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),children:r?(0,B.jsx)(T,{size:12}):(0,B.jsx)(S,{size:12})}):(0,B.jsx)(y,{size:12,className:`shrink-0 text-muted-foreground`}),e.relative]})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,B.jsx)(O,{variant:`secondary`,children:e.format||`unknown`})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5 text-muted-foreground`,children:(0,B.jsxs)(`span`,{className:`flex items-center justify-between gap-2`,children:[(0,B.jsx)(`span`,{children:e.pattern}),n.length>0&&(0,B.jsx)(O,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:s(`3LFNpN`,`{present}/{total} outputs`,{present:i,total:n.length})})]})})]}),r&&n.length>0&&(0,B.jsxs)(`tr`,{onClick:()=>St(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:o?s(`1rbiuq`,`Hide per-language outputs`):s(`3GyGnC`,`Show per-language outputs`),children:[(0,B.jsx)(`td`,{className:`py-1 pl-9 pr-3`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[o?(0,B.jsx)(T,{size:11,className:`shrink-0`}):(0,B.jsx)(S,{size:11,className:`shrink-0`}),(0,B.jsx)(f,{size:10,className:`shrink-0 opacity-50`}),(0,B.jsx)(`span`,{translate:`no`,children:a})]})}),(0,B.jsx)(`td`,{className:`px-3 py-1`,children:(0,B.jsx)(O,{variant:`secondary`,children:e.format||`—`})}),(0,B.jsx)(`td`,{className:`px-3 py-1 text-right`,children:(0,B.jsx)(O,{variant:`outline`,className:`text-[10px] font-normal`,children:s(`2jhS0l`,`{present}/{total} generated`,{present:i,total:n.length})})})]}),r&&o&&n.map(e=>(0,B.jsxs)(`tr`,{onClick:e.exists?()=>Et({path:e.path,relative:e.relative}):void 0,className:`border-b border-border last:border-0 ${e.exists?`cursor-pointer hover:bg-accent/30`:`opacity-60`}`,title:e.exists?s(`1VO4bN`,`Inspect {file}`,{file:e.relative}):s(`2K2GuI`,`Not generated yet — run a flow to create it`),children:[(0,B.jsx)(`td`,{className:`py-1 pl-16 pr-3`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[(0,B.jsx)(A,{locale:e.lang}),(0,B.jsx)(`span`,{children:e.relative})]})}),(0,B.jsx)(`td`,{className:`px-3 py-1`,children:e.exists?(0,B.jsx)(O,{variant:`secondary`,children:e.format||`—`}):(0,B.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:s(`1wl1hi`,`pending`)})}),(0,B.jsx)(`td`,{className:`px-3 py-1 text-right text-muted-foreground`,children:e.exists?ht(e.size):``})]},`${t}-${e.relative}`))]},t)})})]}),an=e=>(0,B.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,B.jsx)(`thead`,{children:(0,B.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`22cvwU`,`File`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`1EJ61l`,`Format`)}),(0,B.jsx)(`th`,{className:`px-3 py-2 text-right font-medium`,children:s(`3nibT3`,`Size`)})]})}),(0,B.jsx)(`tbody`,{children:e.map(e=>{let t=ct(e.relative),n=Ot.has(e.path),r=t?()=>kt(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}):e.format?()=>Et({path:e.path,relative:e.relative}):void 0;return(0,B.jsxs)(z.Fragment,{children:[(0,B.jsxs)(`tr`,{onClick:r,className:`border-b border-border last:border-0 text-muted-foreground hover:bg-accent/30 ${r?`cursor-pointer`:``}`,title:t?s(`Kgjt4`,`Browse entries in {file}`,{file:e.relative}):e.format?s(`4EZGfu`,`Preview {file}`,{file:e.relative}):void 0,children:[(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,B.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[t?n?(0,B.jsx)(T,{size:12,className:`shrink-0`}):(0,B.jsx)(S,{size:12,className:`shrink-0`}):(0,B.jsx)(y,{size:12,className:`shrink-0`}),e.relative]})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5`,children:e.format?(0,B.jsx)(O,{variant:`secondary`,children:e.format}):(0,B.jsx)(`span`,{children:s(`2xmcdV`,`—`)})}),(0,B.jsx)(`td`,{className:`px-3 py-1.5 text-right`,children:ht(e.size)})]}),t&&n&&(0,B.jsx)(`tr`,{className:`border-b border-border last:border-0`,children:(0,B.jsx)(`td`,{colSpan:3,className:`px-3 py-1.5`,children:(0,B.jsx)(ut,{archivePath:e.path,onSelect:t=>H({path:e.path,relative:e.relative,entry:t})})})})]},e.relative)})})]}),on=at&&!!a&&W.length>0,sn=$.map(e=>e.ci),cn=sn.length>0&&sn.every(e=>F.has(e)),ln=Array.from(new Set($.filter(e=>F.has(e.ci)).flatMap(({coll:e})=>tn(e).map(e=>e.path)))),un=e=>Qt(nt,e),dn=()=>nt(new Set),fn=()=>nt(cn?new Set:new Set(sn)),pn=F.size>0,mn=pn?ln.length>0:M.length>0,hn=e=>Be[e]?.valid!==!1,gn=e=>{let t=Be[e];if(t&&t.valid===!1)return s(`1WxaK7`,`Cannot run: {issues}`,{issues:(t.issues??[]).map(e=>e.message).join(`; `)});if(!mn)return s(`SbyAd`,`No matched files to run on`)},_n=(e,t)=>{pn?(a?.(e,t,{scopePaths:ln,scopeLabel:s(`2TVMjG`,`{count} collections`,{count:F.size})}),dn()):a?.(e,t)},vn=Qe(Array.from(new Set($.flatMap(({coll:t})=>(t.target_languages??e.defaults?.target_languages??[]).map(String)))),C),yn=vn.length>=Dt,bn=(0,z.useMemo)(()=>{let e=new Map;for(let t of Le?.locales??[])e.set(`${t.collection??``} ${t.locale}`,t);return e},[Le]),xn=bn.size>0,Sn=(e,t)=>{let n=tt(e)?``:e.name??``;return bn.get(`${n} ${t}`)??bn.get(` ${t}`)},Cn=(Xt||xn)&&vn.length>0,wn=e=>(e.pct?.translated??0)===0?`none`:e.shippable?`shippable`:(e.pct?.reviewed??0)>0?`review`:`translated`,Tn=new Map;$.forEach(({coll:e},t)=>Tn.set(e.name??``,wt(t)));let En=xn?vn.map(e=>{let t=0,n=0,r=0,i=0,a=[];for(let o of Le?.locales??[])o.locale===e&&(t+=o.total,n+=o.total*(o.pct?.translated??0)/100,r+=o.total*(o.pct?.reviewed??0)/100,o.shippable&&(i+=o.total),a.push({name:o.collection||s(`2hJcYw`,`(unnamed)`),pct:Math.round(o.pct?.translated??0),stage:wn(o),color:Tn.get(o.collection||``)??`var(--muted-foreground)`}));a.sort((e,t)=>t.pct-e.pct);let o=t>0?Math.round(n/t*100):0,c=t>0?Math.round(r/t*100):0;return{lang:e,pct:o,stage:t===0?`none`:i/t>=.999?`shippable`:c>0?`review`:o>0?`translated`:`none`,byCollection:a}}):null,Dn=(e,t)=>{let n=Kt.get(vt(e));return!n||n.blockCount===0||!n.targetLanguages.includes(t)?null:Math.round((n.coverage?.[t]??0)/n.blockCount*100)},On=(e,t)=>{if(xn){let n=mt(Sn(e,t));if(n.key===`none`)return(0,B.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)});let r=o?`${t}: ${n.label} · ${n.pct}% translated — ${s(`4rHopU`,`click to review`)}`:`${t}: ${n.label} · ${n.pct}% translated`,a=o?()=>o({collection:tt(e)?``:e.name??``,locale:t}):void 0,c=yn?(0,B.jsxs)(`span`,{className:`flex items-center justify-center gap-1 text-[10px]`,title:r,children:[(0,B.jsx)(`span`,{className:`size-2 shrink-0 rounded-full`,style:{background:n.color}}),(0,B.jsx)(`span`,{className:`tabular-nums text-muted-foreground`,children:n.pct})]}):(0,B.jsx)(`span`,{className:`flex flex-col items-center gap-0.5`,title:r,children:i(`4G4kFe`,`{=m0} {r.label} {/=m0} {=m2}{r.pct}%{/=m2}`,{"=m0":(0,B.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),"=m2":(0,B.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})},{"r.label":n.label,"r.pct":n.pct})});return a?(0,B.jsx)(`button`,{type:`button`,className:`rounded-sm hover:bg-accent`,onClick:a,"aria-label":s(`1p5aVl`,`Review {lang} in this collection`,{lang:t}),"data-slot":`ship-gate-cell`,children:c}):c}let n=Dn(e,t);return n===null?(0,B.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)}):yn?(0,B.jsx)(`span`,{className:`flex h-6 items-center justify-center rounded text-[10px] font-medium tabular-nums`,style:{background:Tt(n),color:n>55?`var(--primary-foreground)`:`var(--muted-foreground)`},title:`${t}: ${n}%`,children:n}):(0,B.jsx)(`span`,{className:`flex flex-col items-center gap-1`,title:`${t}: ${n}%`,children:i(`2iHdj3`,`{=m0} {=m1} {/=m0} {=m2}{p}%{/=m2}`,{"=m0":(0,B.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),"=m1":(0,B.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}}),"=m2":(0,B.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})},{p:n})})},kn=$.map(({coll:e},t)=>({name:vt(e),value:Kt.get(vt(e))?.blockCount??0,fill:wt(t)})),An=kn.filter(e=>e.value>0),jn=Cn?`repeat(${vn.length}, minmax(${yn?40:60}px, 1fr))`:`1fr`,Mn=`${on?`24px `:``}minmax(150px,1.6fr) 52px 62px ${jn} auto`;return(0,B.jsxs)(`section`,{className:`mb-8`,children:[(0,B.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,B.jsxs)(`h2`,{className:`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,B.jsx)(y,{size:14}),s(`3LuUL6`,`Collections`)]}),ge&&(0,B.jsx)(`span`,{className:`hidden text-xs text-muted-foreground sm:inline`,children:s(`1BV3ls`,`relative to {base}`,{base:re(ge)})}),(0,B.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,B.jsxs)(D,{variant:`outline`,size:`sm`,onClick:Mt,"aria-label":s(`Yg9iB`,`Add content collection`),children:[(0,B.jsx)(se,{size:12}),s(`2Q60vn`,`Add Collection`)]}),(0,B.jsxs)(D,{variant:`outline`,size:`sm`,onClick:Ft,"aria-label":s(`R68OC`,`Add files`),children:[(0,B.jsx)(se,{size:12}),s(`Hukdl`,`Add Files`)]}),(0,B.jsxs)(D,{variant:`ghost`,size:`sm`,onClick:()=>I(e=>(e&&dn(),!e)),"aria-expanded":at,"aria-label":s(`2gxXhO`,`Advanced actions`),"data-slot":`advanced-toggle`,children:[at?(0,B.jsx)(T,{size:12}):(0,B.jsx)(S,{size:12}),s(`34Yci`,`Advanced`)]})]})]}),at&&(0,B.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 rounded-md border border-border bg-muted/30 px-3 py-2`,"data-slot":`advanced-bar`,children:[(0,B.jsx)(`span`,{className:`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3DcfjW`,`Manual run`)}),on&&(W.length===1?(0,B.jsxs)(D,{size:`sm`,disabled:b||!mn||!hn(W[0]),title:gn(W[0]),onClick:()=>_n(W[0],r[W[0]]),"aria-label":pn?s(`3jqAmN`,`Run {flow} on selected collections`,{flow:W[0]}):s(`4cKRZ3`,`Run {flow} on all collections`,{flow:W[0]}),children:[(0,B.jsx)(p,{size:12}),pn?s(`2ovFIO`,`Run on selected`):s(`15F8wT`,`Run {flow}`,{flow:W[0]})]}):(0,B.jsxs)(N,{children:[(0,B.jsx)(_e,{asChild:!0,children:(0,B.jsxs)(D,{size:`sm`,disabled:b||!mn,"aria-label":s(`16daiB`,`Run a flow`),children:[(0,B.jsx)(p,{size:12}),pn?s(`2ovFIO`,`Run on selected`):s(`3nmBYd`,`Run flow`),(0,B.jsx)(T,{size:12})]})}),(0,B.jsxs)(pe,{align:`end`,children:[(0,B.jsx)(fe,{children:pn?s(`2G8fsS`,`Run on {count} collections`,{count:F.size}):s(`1oOSFP`,`Run on all collections`)}),W.map(e=>(0,B.jsxs)(Pe,{disabled:!mn||!hn(e),title:gn(e),onClick:()=>_n(e,r[e]),children:[(0,B.jsx)(p,{size:12}),e]},e))]})]})),(0,B.jsxs)(D,{variant:`outline`,size:`sm`,onClick:()=>void Q(),disabled:De||be,"aria-label":Xt?s(`2qtgPx`,`Re-extract content`):s(`2XmVC7`,`Run extract`),title:s(`3foHW3`,`Manual override — Bring up to date re-extracts changed sources automatically.`),children:[De?(0,B.jsx)(ae,{size:12,className:`animate-spin`}):(0,B.jsx)(ie,{size:12}),Xt?s(`VWqFK`,`Re-extract`):s(`3f7Alp`,`Extract`)]}),(0,B.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:s(`4h5TLL`,`Tick collections below to scope a run.`)})]}),Gt&&(0,B.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs`,children:[(0,B.jsx)(oe,{size:12,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:Wt>0?s(`41GmQA`,`Filtered by {name} — {count} collection(s) hidden`,{name:C.name,count:Wt}):s(`32FBSf`,`Filtered by {name}`,{name:C.name})}),(0,B.jsx)(D,{variant:`link`,size:`xs`,className:`ml-auto h-auto px-0`,onClick:()=>void w(``),children:s(`4AAIEq`,`Show all`)})]}),U.length>0&&(Xt?(0,B.jsx)(ce,{className:`mb-3 p-4`,children:(0,B.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,B.jsxs)(`div`,{className:`flex items-center gap-3`,children:[An.length>0?(0,B.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,B.jsx)(ve,{width:`100%`,height:`100%`,children:(0,B.jsx)(Se,{children:(0,B.jsx)(Te,{data:An,dataKey:`value`,nameKey:`name`,innerRadius:`56%`,outerRadius:`100%`,paddingAngle:An.length>1?2:0,strokeWidth:0,children:An.map(e=>(0,B.jsx)(xe,{fill:e.fill},e.name))})})})}):(0,B.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:s(`750BK`,`No blocks`)}),(0,B.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,B.jsx)(`li`,{className:`font-medium text-foreground`,children:s(`4vcVki`,`{count} blocks`,{count:Jt})}),kn.map((e,t)=>(0,B.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,B.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:wt(t)}}),(0,B.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,B.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.value})]},e.name))]})]}),En&&En.length>0?(0,B.jsx)(xt,{items:En,onSelect:o?e=>o({locale:e}):void 0}):Yt.length>0&&(0,B.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,B.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`jP6Vy`,`Coverage across collections`)}),(0,B.jsx)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-1.5`,children:Yt.map(e=>(0,B.jsx)(bt,{label:e.lang,pct:e.pct},e.lang))})]})]})}):(0,B.jsxs)(ce,{className:`mb-3 flex items-center gap-3 p-4`,children:[(0,B.jsx)(u,{size:18,className:`shrink-0 text-muted-foreground/50`}),(0,B.jsx)(`div`,{className:`flex-1 text-xs text-muted-foreground`,children:s(`2JAuYT`,`Nothing extracted yet — run extract to read your content and analyze coverage.`)}),(0,B.jsx)(D,{size:`sm`,onClick:()=>void Q(),disabled:De||be,children:De?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ae,{size:12,className:`animate-spin`}),s(`1g3fu4`,`Extracting...`)]}):s(`1n6yRm`,`Run extract`)})]})),U.some(e=>e.archive)&&(0,B.jsx)(`div`,{className:`mb-4`,children:(0,B.jsx)(rt,{tabID:n})}),on&&F.size>0&&(0,B.jsxs)(`div`,{className:`sticky top-2 z-10 mb-3 flex flex-wrap items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs shadow-sm backdrop-blur`,children:[(0,B.jsx)(`span`,{className:`font-medium`,children:s(`10dUDc`,`{count} selected`,{count:F.size})}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3YDabm`,`{count} files`,{count:ln.length})}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:s(`323P9x`,`·`)}),(0,B.jsx)(`span`,{className:`text-muted-foreground`,children:s(`lTjdA`,`run via Run on selected, above`)}),(0,B.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,B.jsx)(D,{variant:`ghost`,size:`xs`,onClick:fn,children:cn?s(`3H287u`,`Deselect all`):s(`3xLcXG`,`Select all`)}),(0,B.jsx)(D,{variant:`ghost`,size:`xs`,onClick:dn,children:s(`45Z9at`,`Clear`)})]})]}),(0,B.jsx)(`div`,{onDrop:It,onDragOver:Lt,onDragLeave:Rt,className:`rounded-lg border-2 transition-colors ${We?`border-primary bg-primary/5`:`border-transparent`}`,children:U.length===0&&Vt.length===0?(0,B.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 text-center`,children:[(0,B.jsx)(v,{size:24,className:`mb-3 text-muted-foreground/50`}),(0,B.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:s(`2p5m8o`,`Add a collection to map your source files, or drop files here.`)})]}):(0,B.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-border`,children:[$.length>0&&(0,B.jsxs)(`div`,{className:`grid items-center gap-x-3 border-b border-border bg-muted/30 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,style:{gridTemplateColumns:Mn},children:[on&&(0,B.jsx)(`span`,{}),(0,B.jsx)(`span`,{children:s(`iFWBE`,`Collection`)}),(0,B.jsx)(`span`,{className:`text-right`,children:s(`3epYU3`,`Files`)}),(0,B.jsx)(`span`,{className:`text-right`,children:s(`vlTt2`,`Blocks`)}),Cn?vn.map(e=>(0,B.jsx)(`span`,{className:`text-center normal-case`,translate:`no`,children:yn?e.split(`-`)[0]:e},e)):(0,B.jsx)(`span`,{children:Xt?``:s(`3pa0Do`,`Coverage`)}),(0,B.jsx)(`span`,{})]}),$.map(({coll:e,ci:t},n)=>{let i=$e.has(t),o=Ye.has(t),c=tn(e),u=tt(e)?e.path||s(`3epYU3`,`Files`):e.name||s(`2FTnrQ`,`Untitled collection`),d=Kt.get(vt(e));return(0,B.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,B.jsxs)(`div`,{className:`grid items-center gap-x-3 px-3 py-2.5 hover:bg-accent/20`,style:{gridTemplateColumns:Mn},children:[on&&(0,B.jsx)(le,{checked:F.has(t),onCheckedChange:()=>un(t),"aria-label":s(`3mI5eL`,`Select {collection}`,{collection:u}),className:`shrink-0`}),(0,B.jsxs)(`button`,{onClick:()=>Qt(Ze,t),className:`flex min-w-0 items-center gap-2 text-left`,"aria-label":o?s(`36n48F`,`Collapse`):s(`2HBGFu`,`Expand`),"aria-expanded":o,children:[o?(0,B.jsx)(T,{size:13,className:`shrink-0 text-muted-foreground`}):(0,B.jsx)(S,{size:13,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(x,{size:13,className:`shrink-0`,style:{color:wt(n)}}),(0,B.jsx)(`span`,{className:`truncate text-sm font-medium`,title:u,children:u})]}),(0,B.jsx)(`span`,{className:`text-right text-xs tabular-nums text-muted-foreground`,children:c.length}),(0,B.jsx)(`span`,{className:`text-right text-xs tabular-nums`,children:Xt&&d?d.blockCount:`—`}),Cn?vn.map(t=>(0,B.jsx)(z.Fragment,{children:On(e,t)},t)):(0,B.jsx)(`span`,{}),(0,B.jsxs)(`span`,{className:`flex items-center justify-end gap-1`,children:[at&&a&&c.length>0&&W.length>0&&(W.length===1?(0,B.jsx)(D,{variant:`ghost`,size:`icon-sm`,disabled:b,onClick:()=>a(W[0],r[W[0]],{scopePaths:c.map(e=>e.path),scopeLabel:u}),"aria-label":s(`WT7Mg`,`Run {flow} on {collection}`,{flow:W[0],collection:u}),children:(0,B.jsx)(p,{size:13})}):(0,B.jsxs)(N,{children:[(0,B.jsx)(_e,{asChild:!0,children:(0,B.jsx)(D,{variant:`ghost`,size:`icon-sm`,disabled:b,"aria-label":s(`37dEBh`,`Run a flow on {collection}`,{collection:u}),children:(0,B.jsx)(p,{size:13})})}),(0,B.jsxs)(pe,{align:`end`,children:[(0,B.jsx)(fe,{children:s(`3r1PYB`,`Run on {collection}`,{collection:u})}),W.map(e=>(0,B.jsxs)(Pe,{onClick:()=>a(e,r[e],{scopePaths:c.map(e=>e.path),scopeLabel:u}),children:[(0,B.jsx)(p,{size:12}),e]},e))]})]})),(0,B.jsx)(D,{variant:i?`secondary`:`ghost`,size:`icon-sm`,onClick:()=>{$t(t),Qt(et,t)},"aria-label":i?s(`1vDkj2`,`Done editing`):s(`h5zbs`,`Edit collection`),children:i?(0,B.jsx)(te,{size:13}):(0,B.jsx)(l,{size:13})}),(0,B.jsx)(k,{onDelete:()=>Pt(t),mode:`icon`})]})]}),o&&(0,B.jsxs)(`div`,{className:`border-t border-border bg-muted/10`,children:[i&&(0,B.jsxs)(`div`,{className:`animate-in slide-in-from-top-2 fade-in border-b-2 border-primary/40 bg-muted/40 p-4 shadow-inner duration-200`,children:[(0,B.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary`,children:[(0,B.jsx)(l,{size:11}),s(`h5zbs`,`Edit collection`)]}),nn(e,t)]}),c.length>0?rn(c):(0,B.jsxs)(`p`,{className:`px-4 py-6 text-center text-xs text-muted-foreground`,children:[s(`1XxbaH`,`No files matched this collection's patterns.`),!i&&(0,B.jsxs)(B.Fragment,{children:[` `,(0,B.jsx)(`button`,{onClick:()=>{$t(t),et(e=>new Set(e).add(t))},className:`text-primary hover:underline`,children:s(`2Uq3Xf`,`Edit patterns`)})]})]})]})]},t)}),!Ht.length&&Vt.length>0&&(0,B.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,B.jsxs)(`button`,{onClick:()=>st(e=>!e),className:`flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-accent/20`,"aria-label":L?s(`2HBGFu`,`Expand`):s(`36n48F`,`Collapse`),children:[L?(0,B.jsx)(S,{size:13,className:`shrink-0 text-muted-foreground`}):(0,B.jsx)(T,{size:13,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(g,{size:13,className:`shrink-0 text-muted-foreground`}),(0,B.jsx)(`span`,{className:`text-sm font-medium`,children:s(`41kjwU`,`Other files`)}),(0,B.jsx)(O,{variant:`secondary`,className:`text-[10px] font-normal`,children:s(`3YDabm`,`{count} files`,{count:Vt.length})})]}),!L&&(0,B.jsx)(`div`,{className:`border-t border-border bg-muted/10`,children:an(Vt)})]})]})}),(0,B.jsx)(Xe,{tabID:n,filePath:Ct?.path??null,filename:Ct?.relative??``,onClose:()=>Et(null)}),(0,B.jsx)(Xe,{tabID:n,filePath:V?.path??null,filename:V?`${V.relative}!${V.entry}`:``,entryPath:V?.entry??null,onClose:()=>H(null)})]})}var z,B,Ct,wt,Tt,Et,Dt,Ot=t((()=>{a(),z=e(n(),1),Ae(),w(),Ee(),F(),Re(),st(),nt(),Ye(),pt(),ke(),Be(),We(),at(),He(),Ke(),Ze(),B=r(),Ct=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],wt=e=>Ct[e%Ct.length],Tt=e=>`color-mix(in oklch, var(--primary) ${e}%, var(--muted))`,Et={shippable:`oklch(0.62 0.17 150)`,review:`oklch(0.72 0.15 80)`,translated:`var(--primary)`,none:`var(--muted-foreground)`},Dt=5,St.__docgenInfo={description:`CollectionsPanel is the collection-centric spine of the project home: one card
per content collection carrying its own stats (file count, block count,
coverage bar), expandable to its matched-file table and editable inline. It
folds together what used to be the standalone Content page and the Home
page's read-only Content Overview (issue #1068) — collections, files,
patterns, languages, coverage and the unmatched "Other files" all live here.`,methods:[],displayName:`CollectionsPanel`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``},flows:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`FlowSpec`}],raw:`Record<string, FlowSpec>`},description:`The project's flows, offered as a per-collection "Run" menu on each card.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:`Run a flow scoped to a single collection's files.`},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope — wired
 to the ship-gate cells and the timeline tags.`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`Pre-loaded formats for Storybook — skips api.listFormats().`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — skips api.getBasePath().`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`}}}}));function kt({project:e,displayName:t,tabID:n,onUpdate:r,onRunFlow:a,onNavigate:l,onOpenReview:u,pluginsResolved:f,pluginIssues:p,status:te,convergence:g,plan:v,onBringUpToDate:ne,onResetSample:y,sampleInfo:b,formatList:x,basePath:re}){let{active:S}=Ve(),[w,oe]=(0,V.useState)(null),[T,se]=(0,V.useState)(b??null),[E,ce]=(0,V.useState)(!1);(0,V.useEffect)(()=>{!n||b||P.getSampleInfo(n).then(e=>{e&&se(e)}).catch(()=>{})},[n,b]);let le=(0,V.useCallback)(()=>{ce(!0),n&&P.acknowledgeSampleRevision(n)},[n]),k=(0,V.useCallback)(e=>{oe(e),P.installPlugin(e)},[]),j=e.defaults??{},ue=e.plugins??{},M=Object.keys(e.flows??{}).length,N=S?.languages??[];return(0,H.jsxs)(`div`,{className:`p-6`,children:[(0,H.jsxs)(`div`,{className:`mb-6`,children:[(0,H.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,H.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,H.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,H.jsx)(c,{size:14}),j.source_language?(0,H.jsx)(A,{locale:String(j.source_language)}):(0,H.jsx)(`span`,{children:o(`No source`)}),(0,H.jsx)(`span`,{children:`→`}),j.target_languages?.length?j.target_languages.map(e=>(0,H.jsx)(A,{locale:String(e),muted:N.length>0&&!N.includes(String(e))},String(e))):(0,H.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,H.jsx)(c,{size:14}),"=m2":j.source_language?(0,H.jsx)(A,{locale:String(j.source_language)}):(0,H.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,H.jsx)(`span`,{children:`→`}),"=m4":j.target_languages?.length?j.target_languages.map(e=>(0,H.jsx)(A,{locale:String(e),muted:N.length>0&&!N.includes(String(e))},String(e))):(0,H.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,H.jsx)(O,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(ue).length>0&&Object.entries(ue).map(([e,t])=>(0,H.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,H.jsx)(m,{size:10}),(0,H.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,H.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),f===!1&&p&&p.length>0&&(0,H.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,H.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,H.jsx)(ee,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,H.jsxs)(`div`,{className:`flex-1`,children:[(0,H.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,H.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,H.jsx)(`ul`,{className:`mt-2 space-y-1`,children:p.map(e=>(0,H.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,H.jsx)(O,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,H.jsxs)(D,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>k(e.plugin),disabled:w===e.plugin,children:[w===e.plugin?(0,H.jsx)(ae,{size:11,className:`animate-spin`}):(0,H.jsx)(m,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,H.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,H.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,H.jsx)(D,{size:`sm`,variant:`outline`,onClick:()=>l(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,H.jsx)(_,{size:12})})}),(0,H.jsx)(D,{size:`sm`,variant:`outline`,onClick:()=>l(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,H.jsx)(m,{size:12})})})]})]})]})}),T?.upgrade_available&&!E&&(0,H.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,H.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,H.jsx)(ie,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,H.jsxs)(`div`,{className:`flex-1`,children:[(0,H.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,H.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,H.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,H.jsxs)(D,{size:`sm`,onClick:()=>y?.(),children:[(0,H.jsx)(ie,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,H.jsx)(D,{size:`sm`,variant:`outline`,onClick:le,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),n&&(0,H.jsx)(qe,{tabID:n,onBringUpToDate:ne,convergence:g,plan:v}),(0,H.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,H.jsx)(Ne,{icon:(0,H.jsx)(d,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>l(`checks`)}),(0,H.jsx)(Ne,{icon:(0,H.jsx)(h,{size:16}),title:s(`25KjwG`,`Flows`),description:M>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:M}):s(`3ahfLk`,`Build your first flow`),onClick:()=>l(`flows`)}),(0,H.jsx)(Ne,{icon:(0,H.jsx)(C,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>l(`tools`)}),(0,H.jsx)(Ne,{icon:(0,H.jsx)(_,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>l(`project-settings`)})]}),n&&(0,H.jsx)(St,{project:e,onUpdate:r??(()=>{}),tabID:n,flows:e.flows,onRunFlow:a,onOpenReview:u,formatList:x,basePath:re,status:te,convergence:g}),M===0&&(0,H.jsx)(de,{icon:(0,H.jsx)(h,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,H.jsx)(D,{variant:`link`,size:`sm`,onClick:()=>l(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var V,H,U=t((()=>{a(),V=e(n(),1),w(),Ee(),Re(),He(),Ot(),Je(),H=r(),kt.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onUpdate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:`Persist project edits made on the merged collection surface.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},onOpenReview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(scope?: { collection?: string; locale?: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ collection?: string; locale?: string }`,signature:{properties:[{key:`collection`,value:{name:`string`,required:!1}},{key:`locale`,value:{name:`string`,required:!1}}]}},name:`scope`}],return:{name:`void`}}},description:`Open the Review surface narrowed to a (collection, locale) scope.`},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`},plan:{required:!1,tsType:{name:`ConvergePlan`},description:`Pre-loaded pre-flight plan for Storybook/tests — skips api.getConvergePlan().`},onBringUpToDate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Launch the convergence run (Bring up to date → runner passes view).`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`import("../types/api").FormatInfo[]`},description:`Pre-loaded formats for Storybook — forwarded to CollectionsPanel.`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — forwarded to CollectionsPanel.`}}}})),W,G,K,At,q,J,Y,X,Z,Q,jt;t((()=>{U(),{fn:W}=__STORYBOOK_MODULE_TEST__,G={title:`Pages/HomePage`,component:kt,tags:[`autodocs`],args:{tabID:`tab-1`,onUpdate:W(),onRunFlow:W(),onNavigate:W(),onResetSample:W(),basePath:`/Users/dev/projects/acme`,formatList:[{name:`json`,display_name:`JSON`,extensions:[`.json`],has_reader:!0,has_writer:!0,has_schema:!1},{name:`markdown`,display_name:`Markdown`,extensions:[`.md`],has_reader:!0,has_writer:!0,has_schema:!1}]}},K={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{name:`Website`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]},{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},At={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},q={args:{...K.args,displayName:`KapiMart`,project:{version:`v1`,name:`KapiMart`,defaults:{source_language:`en-US`,target_languages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},content:[{name:`Website`,base:`web/en-US`,items:[{path:`web/en-US/**/*.md`,target:`web/{lang}`,format:{name:`markdown`}}]},{name:`Online Store`,base:`src/en-US`,items:[{path:`src/en-US/*.{json,yaml,properties,html}`,target:`src/{lang}`}]},{name:`Contracts`,base:`legal/en-US`,items:[{path:`legal/en-US/*.{docx,xlsx}`,target:`legal/{lang}`}]},{name:`Templates`,base:`marketing/en-US`,items:[{path:`marketing/en-US/*.{pptx,docx}`,target:`marketing/{lang}`}]}],flows:{"pseudo-translate":{steps:[{tool:`pseudo-translate`}]},translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/kapimart/kapimart.kapi`,projectName:`KapiMart`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"de-DE":245,"fr-FR":191,"ja-JP":110,"nb-NO":100,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Online Store`,blockCount:349,coverage:{"de-DE":349,"fr-FR":349,"ja-JP":175,"nb-NO":175,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Contracts`,blockCount:80,coverage:{"de-DE":80,"fr-FR":0,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Templates`,blockCount:25,coverage:{"de-DE":25,"fr-FR":12,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]}]},convergence:{project:`KapiMart`,review:[],locales:[{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Online Store`,locale:`de-DE`,total:349,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Contracts`,locale:`de-DE`,total:80,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Templates`,locale:`de-DE`,total:25,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:78,reviewed:30},gated:!0,shippable:!1},{collection:`Online Store`,locale:`fr-FR`,total:349,pct:{translated:100,reviewed:60},gated:!0,shippable:!1},{collection:`Contracts`,locale:`fr-FR`,total:80,pct:{},gated:!0,shippable:!1},{collection:`Templates`,locale:`fr-FR`,total:25,pct:{translated:48},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`Online Store`,locale:`ja-JP`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`nb-NO`,total:245,pct:{translated:41},gated:!0,shippable:!1},{collection:`Online Store`,locale:`nb-NO`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`ar-SA`,total:245,pct:{},gated:!0,shippable:!1}]}}},J={args:{...K.args,displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{name:`Website`,items:[{path:`docs/**/*.md`,format:{name:`markdown`}}]},{name:`UI Strings`,items:[{path:`src/i18n/en/*.json`}]},{name:`Emails`,items:[{path:`emails/**/*.html`}]}],flows:{translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"fr-FR":245,"de-DE":191,"ja-JP":110},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`UI Strings`,blockCount:88,coverage:{"fr-FR":88,"de-DE":40,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`Emails`,blockCount:32,coverage:{"fr-FR":16,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},Y={args:{...J.args,convergence:{project:`Acme App Localization`,review:[],locales:[{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:78,reviewed:40},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`fr-FR`,total:88,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`UI Strings`,locale:`de-DE`,total:88,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`ja-JP`,total:88,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`fr-FR`,total:32,pct:{translated:50},gated:!0,shippable:!1},{collection:`Emails`,locale:`de-DE`,total:32,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`ja-JP`,total:32,pct:{},gated:!0,shippable:!1}]}}},X={args:{...K.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},Z={args:{...q.args,status:{...q.args.status,stale:!0}}},Q={args:{...K.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`{
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
}`,...At.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...Q.parameters?.docs?.description}}},jt=[`Default`,`NoFlows`,`WithCoverage`,`ThreeLanguages`,`WithShipGates`,`NeverExtracted`,`StaleCounts`,`SampleUpgradeAvailable`]}))();export{K as Default,X as NeverExtracted,At as NoFlows,Q as SampleUpgradeAvailable,Z as StaleCounts,J as ThreeLanguages,q as WithCoverage,Y as WithShipGates,jt as __namedExportsOrder,G as default};