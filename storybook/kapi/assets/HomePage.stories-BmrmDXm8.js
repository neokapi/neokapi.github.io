import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Et as l,Hi as u,It as d,K as ee,Mi as f,St as p,bi as te,bt as m,c as h,ca as g,cr as _,ea as v,et as y,fa as b,g as x,gi as ne,gr as re,i as ie,mi as ae,mt as oe,na as se,o as S,t as C,vi as w,vt as ce}from"./lucide-react-Cx_fEK42.js";import{t as T}from"./label-C1tohmzx.js";import{t as E}from"./button-D6zYGAvL.js";import{t as D}from"./card-CHo_fh0q.js";import{t as le}from"./checkbox-Be_ntsmW.js";import{t as O}from"./badge-B925V-__.js";import{t as k}from"./confirm-delete-button-8V0cAtuD.js";import{t as A}from"./LocalePill-C8a-9VUF.js";import{$ as j,At as ue,Bt as de,G as fe,Gt as pe,Jt as me,Kt as he,Lt as ge,Mt as _e,Nt as ve,Qt as ye,Rn as be,Rt as xe,Vt as Se,_n as Ce,an as we,et as Te,ft as Ee,hn as De,i as Oe,jt as M,kt as ke,n as Ae,nn as je,nt as Me,o as Ne,ot as Pe,qt as Fe,r as Ie,ut as Le,zt as Re}from"./iframe-DzkIoPJa.js";import{r as ze,t as N}from"./useApi-Dl-VH7Qg.js";import{n as Be,t as Ve}from"./useShortenHome-s87nykg_.js";import{n as He,t as Ue}from"./ActiveFilterContext-DAvHLy8T.js";import{n as We,t as Ge}from"./FilePreview-BtFNYJkF.js";import{n as Ke,t as qe}from"./filter-BQ0GIjVn.js";import{n as Je,t as Ye}from"./useWailsEvent-tO44X_hi.js";import{n as Xe,t as Ze}from"./JobFeedContext-CdLKGu1o.js";import{n as Qe,t as $e}from"./useSchemaFormHost-DkJz4Wao.js";import{n as et,r as tt}from"./api-LEFL5VCf.js";import{n as nt,t as rt}from"./TranslationStatusPanel-QPjmNPF9.js";import{n as it,t as P}from"./useLocales-BFQoD4Ar.js";function at({open:e,onOpenChange:t,title:n,description:r,formats:i,allFormats:a,allowAdd:o=!1,filterExtension:c,values:l,onChange:u,scopeNote:d}){let{showError:ee}=Ie(),f=Qe(),[p,te]=(0,F.useState)([]),[m,h]=(0,F.useState)(!1),g=(0,F.useMemo)(()=>{let e=new Set,t=[];for(let n of[...i,...p])n&&!e.has(n)&&(e.add(n),t.push(n));return t},[i,p]),_=o||i.length>1,[y,b]=(0,F.useState)(_?null:i[0]??null);(0,F.useEffect)(()=>{e&&(te([]),h(!1),b(_?null:i[0]??null))},[e]);let x=y??``,re=y===null,[oe,se]=(0,F.useState)({}),[S,C]=(0,F.useState)({}),[w,D]=(0,F.useState)(!1);(0,F.useEffect)(()=>{!e||!x||oe[x]!==void 0||(D(!0),Promise.all([N.getFormatSchema(x),N.listFormatPresets(x)]).then(([e,t])=>{se(t=>({...t,[x]:e??null})),C(e=>({...e,[x]:t??[]}))}).catch(e=>{ee(`Failed to load format schema`,e),se(e=>({...e,[x]:null}))}).finally(()=>D(!1)))},[e,x,oe,ee]);let le=(0,F.useMemo)(()=>{let e=c?.toLowerCase();return a.filter(t=>g.includes(t.name)?!1:e?(t.extensions??[]).some(t=>t.toLowerCase()===e):!0)},[a,g,c]),O=(0,F.useCallback)(e=>{e&&(te(t=>t.includes(e)?t:[...t,e]),h(!1),b(e))},[]),k=l[x]??{},A=oe[x],j=S[x]??[],fe=(0,F.useMemo)(()=>{if(!A)return;let e={};for(let[t,n]of Object.entries(A.properties??{}))n?.default!==void 0&&(e[t]=n.default);let t=j.find(e=>e.name===k.preset);return t?.config&&Object.assign(e,t.config),e},[A,j,k.preset]);function pe(e){return Object.keys(l[e]?.config??{}).length}return(0,I.jsx)(ke,{open:e,onOpenChange:t,children:(0,I.jsxs)(ue,{side:`right`,className:`flex w-full flex-col gap-0 p-0 sm:max-w-lg md:max-w-xl`,children:[(0,I.jsxs)(_e,{className:`border-b border-border`,children:[(0,I.jsx)(ve,{children:n}),r&&(0,I.jsx)(M,{children:r})]}),re?(0,I.jsxs)(`div`,{className:`min-h-0 flex-1 space-y-2 overflow-auto p-4`,children:[(0,I.jsx)(T,{className:`text-xs text-muted-foreground`,children:s(`lAy6j`,`Formats`)}),g.map(e=>(0,I.jsxs)(`button`,{onClick:()=>b(e),className:`flex w-full items-center justify-between rounded-md border border-border px-3 py-2.5 text-left text-sm transition-colors hover:bg-accent/50`,children:[(0,I.jsx)(`span`,{className:`font-medium`,translate:`no`,children:e}),(0,I.jsxs)(`span`,{className:`flex items-center gap-2`,children:[pe(e)>0&&(0,I.jsx)(`span`,{className:`rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary`,children:s(`1v4Dt5`,`{count} set`,{count:pe(e)})}),(0,I.jsx)(ae,{size:15,className:`text-muted-foreground`})]})]},e)),g.length===0&&!m&&(0,I.jsx)(`p`,{className:`py-2 text-xs text-muted-foreground`,children:s(`4E8VTn`,`No formats matched yet. Add one to configure it.`)}),o&&(m?(0,I.jsxs)(`div`,{className:`flex items-center gap-2 pt-1`,children:[(0,I.jsx)(Me,{value:``,onChange:O,formats:le,placeholder:s(`2aYDzk`,`Pick a format`),className:`flex-1`}),(0,I.jsx)(E,{variant:`ghost`,size:`sm`,onClick:()=>h(!1),"aria-label":s(`AQznM`,`Cancel`),children:(0,I.jsx)(ie,{size:14})})]}):(0,I.jsxs)(E,{variant:`outline`,size:`sm`,className:`w-full justify-start text-muted-foreground`,onClick:()=>h(!0),children:[(0,I.jsx)(ce,{size:14}),s(`1tDf0l`,`Add format`)]}))]}):(0,I.jsxs)(`div`,{className:`min-h-0 flex-1 overflow-auto p-4`,children:[_&&(0,I.jsxs)(`button`,{onClick:()=>b(null),className:`mb-3 flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground`,children:[(0,I.jsx)(ne,{size:14}),s(`lAy6j`,`Formats`)]}),w||A===void 0?(0,I.jsx)(`div`,{className:`flex h-40 items-center justify-center text-muted-foreground`,children:(0,I.jsx)(v,{className:`animate-spin`,size:16})}):A===null?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h3`,{className:`text-sm font-semibold text-foreground`,translate:`no`,children:x}),(0,I.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:s(`2uJqdn`,`No configurable options for this format.`)})]}):(0,I.jsxs)(`div`,{className:`space-y-3`,children:[j.length>0&&(0,I.jsxs)(`div`,{children:[(0,I.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3nOg4F`,`Preset`)}),(0,I.jsxs)(ge,{value:k.preset||`__default__`,onValueChange:e=>u(x,{...k,preset:e===`__default__`?void 0:e}),children:[(0,I.jsx)(de,{className:`h-8 text-xs`,children:(0,I.jsx)(Se,{})}),(0,I.jsxs)(xe,{children:[(0,I.jsx)(Re,{value:`__default__`,children:s(`1Hb69c`,`Default`)}),j.map(e=>(0,I.jsxs)(Re,{value:e.name,translate:`no`,children:[e.name,e.description?` — ${e.description}`:``]},e.name))]})]})]}),(0,I.jsx)(Ne,{schema:A,values:k.config??{},presetValues:fe,host:f,onChange:e=>u(x,{...k,config:Object.keys(e).length>0?e:void 0})})]})]}),(0,I.jsxs)(`div`,{className:`flex items-center justify-between gap-3 border-t border-border p-4`,children:[d?(0,I.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:d}):(0,I.jsx)(`span`,{}),(0,I.jsx)(E,{size:`sm`,onClick:()=>t(!1),children:s(`2m1wue`,`Done`)})]})]})})}var F,I,ot=t((()=>{a(),F=e(n(),1),C(),Oe(),ze(),$e(),Ae(),I=r(),at.__docgenInfo={description:`Schema-driven format configuration in a right-side drawer, laid out as a
master→detail flow so each level gets the full drawer width:

  - **List** (wildcard / multi-format only): the formats to configure, with
    config-count badges and an "add format" control. Tapping one opens its
    detail.
  - **Detail**: the format's option form (the framework \`SchemaForm\`, whose own
    header names the format) plus its preset, with a back affordance.

A single-format item skips the list and opens straight on its detail.`,methods:[],displayName:`FormatConfigDialog`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},title:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},formats:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Formats shown initially in the list (e.g. the formats matched in the input files).`},allFormats:{required:!0,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`All registered formats, for the "add format" picker.`},allowAdd:{required:!1,tsType:{name:`boolean`},description:`Allow configuring formats beyond the initial list (wildcard items).`,defaultValue:{value:`false`,computed:!1}},filterExtension:{required:!1,tsType:{name:`string`},description:`When set, the add-picker is filtered to formats claiming this extension (e.g. ".json").`},values:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`FormatConfigValue`}],raw:`Record<string, FormatConfigValue>`},description:`Current config/preset keyed by format name.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(format: string, next: FormatConfigValue) => void`,signature:{arguments:[{type:{name:`string`},name:`format`},{type:{name:`FormatConfigValue`},name:`next`}],return:{name:`void`}}},description:`Persist a change for one format.`},scopeNote:{required:!1,tsType:{name:`string`},description:`Footer note clarifying where the config is stored (item vs project-wide).`}}}}));function st(e){let t=e.toLowerCase();return dt.some(e=>t.endsWith(e))}function ct(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function lt({archivePath:e,onSelect:t,entries:n}){let[r,a]=(0,ut.useState)(n??null),[o,c]=(0,ut.useState)(!1),[l,u]=(0,ut.useState)(null);return(0,ut.useEffect)(()=>{if(n){a(n);return}let t=!1;return c(!0),u(null),N.listArchiveEntries(e).then(e=>{if(!t){if(e===null){u(`Archive listing is unavailable in this environment.`);return}a(e)}}).catch(e=>{t||u(e instanceof Error?e.message:String(e))}).finally(()=>{t||c(!1)}),()=>{t=!0}},[e,n]),o?(0,L.jsx)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-muted-foreground`,children:i(`2EU0eU`,`{=m0} Listing entries…`,{"=m0":(0,L.jsx)(v,{className:`size-3 animate-spin`})})}):l?(0,L.jsxs)(`div`,{className:`flex items-center gap-2 py-2 pl-8 text-xs text-destructive`,children:[(0,L.jsx)(b,{className:`size-3`}),l]}):!r||r.length===0?(0,L.jsx)(`div`,{className:`py-2 pl-8 text-xs text-muted-foreground`,children:s(`3BHBSi`,`No entries.`)}):(0,L.jsx)(`ul`,{className:`border-l border-border/60 pl-3`,"aria-label":s(`1v7i0i`,`Archive entries`),children:r.map(e=>(0,L.jsx)(`li`,{children:(0,L.jsxs)(`button`,{type:`button`,disabled:!e.format,onClick:e.format?()=>t(e.name):void 0,className:`flex w-full items-center gap-2 rounded px-2 py-1 text-left text-xs hover:bg-accent disabled:cursor-default disabled:opacity-50 disabled:hover:bg-transparent`,title:e.format?`Preview ${e.name}`:`No reader for this file type`,children:[(0,L.jsx)(re,{className:`size-3 shrink-0 text-muted-foreground`}),(0,L.jsx)(`span`,{className:`truncate font-mono`,translate:`no`,children:e.name}),(0,L.jsx)(`span`,{className:`ml-auto shrink-0 text-muted-foreground`,children:ct(e.size)})]})},e.name))})}var ut,L,dt,ft=t((()=>{a(),ut=e(n(),1),C(),ze(),L=r(),dt=[`.zip`,`.tar`,`.tgz`,`.tar.gz`],lt.__docgenInfo={description:``,methods:[],displayName:`ArchiveEntries`,props:{archivePath:{required:!0,tsType:{name:`string`},description:`Absolute path of the archive container.`},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(entry: string) => void`,signature:{arguments:[{type:{name:`string`},name:`entry`}],return:{name:`void`}}},description:`Called with the inner entry path when the user picks an entry to preview.`},entries:{required:!1,tsType:{name:`Array`,elements:[{name:`ArchiveEntry`}],raw:`ArchiveEntry[]`},description:`Pre-loaded entries for Storybook/tests, skipping the backend call.`}}}}));function pt(e){let t=e?.pct?.translated??0;return!e||t===0?{key:`none`,label:`—`,short:`—`,color:`var(--muted-foreground)`,pct:0}:e.shippable?{key:`shippable`,label:`Shippable`,short:`Ship`,color:`oklch(0.62 0.17 150)`,pct:t}:(e.pct?.reviewed??0)>0?{key:`review`,label:`In review`,short:`Review`,color:`oklch(0.72 0.15 80)`,pct:t}:{key:`draft`,label:`Draft`,short:`Draft`,color:`var(--primary)`,pct:t}}function mt(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function ht(e){return e?.name??``}function gt(e){let t=e.split(`/`).pop()??e,n=/\*\.([A-Za-z0-9]+)$/.exec(t);return n?`.`+n[1].toLowerCase():void 0}function _t(e){return tt(e)?`(unnamed)`:e.name&&e.name.length>0?e.name:`(unnamed)`}function vt(e){let t=e[0];return t?t.relative.split(`/`).map(e=>e===t.lang?`{lang}`:e).join(`/`):``}function yt({label:e,pct:t,color:n}){return(0,z.jsx)(`span`,{className:`flex min-w-40 flex-1 items-center gap-2`,children:i(`26PYWB`,`{=m0} {label} {/=m0} {=m2} {=m3} {/=m2} {=m4} {pct}% {/=m4}`,{"=m0":(0,z.jsx)(`span`,{className:`w-14 shrink-0 text-xs text-muted-foreground`,translate:`no`,children:e}),"=m2":(0,z.jsx)(`span`,{className:`h-1.5 flex-1 overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}})}),"=m3":(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary transition-all`,style:{width:`${t}%`,...n?{background:n}:{}}}),"=m4":(0,z.jsxs)(`span`,{className:`w-9 shrink-0 text-right text-[11px] tabular-nums text-muted-foreground`,children:[t,`%`]})},{label:e,pct:t})})}function bt({items:e}){let t=(0,R.useRef)(null),[n,r]=(0,R.useState)(0),[a,o]=(0,R.useState)(null);(0,R.useEffect)(()=>{let e=t.current;if(!e)return;let n=new ResizeObserver(e=>r(e[0].contentRect.width));return n.observe(e),()=>n.disconnect()},[]);let c=e=>B[e]??B.none,l=e=>({shippable:`Shippable`,review:`In review`,translated:`Translated`,none:`Not started`})[e]??e,u=e=>40+e/100*d,d=Math.max(0,n-80),ee=[...e].sort((e,t)=>e.pct-t.pct),f=[],p=ee.map(e=>{let t=u(e.pct),n=0;for(;n<f.length&&t-f[n]<80;)n++;return f[n]=t,{it:e,x:t,above:n%2==0,sideLane:Math.floor(n/2)}}),te=e=>{let t=p.filter(t=>t.above===e).map(e=>e.sideLane);return t.length?38+Math.max(...t)*24:0},m=n>0?te(!0):38,h=n>0?te(!1):0,g=m+8,_=g+h+8,v=_+12,y=p.find(e=>e.it.lang===a)?.it;return(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`3btIdj`,`Completeness by language`)}),(0,z.jsxs)(`div`,{ref:t,className:`relative`,style:{height:v},children:[n>0&&[25,50,75].map(e=>(0,z.jsx)(`div`,{className:`absolute w-px bg-border/40`,style:{left:u(e),top:0,height:_}},e)),(0,z.jsx)(`div`,{className:`absolute h-px bg-border`,style:{left:40,right:40,top:g}}),n>0&&p.map(({it:e,x:t,above:n,sideLane:r})=>{let s=c(e.stage),l=18+r*24,u=a&&a!==e.lang?.12:1,d=n?g-l-20:g+l;return(0,z.jsx)(`span`,{style:{opacity:u,transition:`opacity 120ms`},children:i(`1x1ijP`,`{=m0}  {=m1}  {=m2}  {=m3} {=m4} {=m5} {it.pct}% {/=m5} {/=m3}`,{"=m0":(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:t,top:n?g-l:g,width:1,height:l-4,background:`color-mix(in oklch, ${s} 55%, var(--border))`}}),"=m1":(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:t,top:n?g-8:g+4,width:0,height:0,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,...n?{borderTop:`4px solid ${s}`}:{borderBottom:`4px solid ${s}`}}}),"=m2":(0,z.jsx)(`span`,{className:`absolute rounded-full`,style:{left:t,top:g,width:8,height:8,transform:`translate(-50%, -50%)`,background:s,border:`2px solid var(--card)`}}),"=m3":(0,z.jsxs)(`span`,{className:`absolute flex -translate-x-1/2 items-center gap-1 whitespace-nowrap cursor-default`,style:{left:t,top:d},onMouseEnter:()=>o(e.lang),onMouseLeave:()=>o(null),title:`${e.lang}: ${e.pct}% translated`,children:[(0,z.jsx)(A,{locale:e.lang}),(0,z.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m4":(0,z.jsx)(A,{locale:e.lang}),"=m5":(0,z.jsxs)(`span`,{className:`text-[10px] font-medium tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"it.pct":e.pct})},e.lang)}),n>0&&y&&y.byCollection.map((e,t)=>{let n=u(e.pct);return(0,z.jsx)(`span`,{className:`z-10`,children:i(`2ezCfL`,`{=m0}  {=m1}  {=m2} {=m3}{cc.name}{/=m3}{value} {=m6}{cc.pct}%{/=m6} {/=m2}`,{"=m0":(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2`,style:{left:n,top:g-20,width:1,height:16,background:`color-mix(in oklch, ${e.color} 60%, var(--border))`}}),"=m1":(0,z.jsx)(`span`,{className:`absolute rounded-full`,style:{left:n,top:g,width:11,height:11,transform:`translate(-50%, -50%)`,background:e.color,border:`2px solid ${c(e.stage)}`,boxShadow:`0 0 0 1px var(--card)`},title:`${e.name}: ${e.pct}% · ${l(e.stage)}`}),"=m2":(0,z.jsxs)(`span`,{className:`absolute -translate-x-1/2 whitespace-nowrap rounded-full border bg-card px-1.5 py-0.5 text-[9px] font-medium shadow-sm`,style:{left:n,top:g-38,borderColor:e.color},children:[(0,z.jsx)(`span`,{translate:`no`,children:e.name}),` `,(0,z.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})]}),"=m3":(0,z.jsx)(`span`,{translate:`no`,children:e.name}),"=m6":(0,z.jsxs)(`span`,{className:`tabular-nums text-muted-foreground`,children:[e.pct,`%`]})},{"cc.name":e.name,value:` `,"cc.pct":e.pct})},`${e.name}-${t}`)}),n>0&&[0,50,100].map(e=>(0,z.jsx)(`span`,{className:`absolute -translate-x-1/2 text-[9px] text-muted-foreground`,style:{left:u(e),top:_},children:s(`4pXae7`,`${e}%`,{tk:e})},e))]}),(0,z.jsx)(`div`,{className:`mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground`,children:[[`shippable`,s(`2dg6y8`,`Shippable`)],[`review`,s(`2oadc9`,`In review`)],[`translated`,s(`2Lc17w`,`Translated`)]].map(([e,t])=>(0,z.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,z.jsx)(`span`,{className:`size-2 rounded-full`,style:{background:c(e)}}),t]},e))})]})}function xt({project:e,onUpdate:t,tabID:n,flows:r,onRunFlow:a,formatList:o,basePath:c,status:ee,convergence:m}){let{showError:h}=Ie(),{locales:b}=it(),{hasActive:ne}=Xe(),ie=Be(),{active:S,setActive:C,enabled:ue}=He(),[de,fe]=(0,R.useState)([]),[ge,_e]=(0,R.useState)([]),[ve,xe]=(0,R.useState)(c??``),[Se,Oe]=(0,R.useState)(!1),[M,ke]=(0,R.useState)(!1),[Ae,je]=(0,R.useState)(o??[]),[Ne,Pe]=(0,R.useState)(ee??null),[Re,ze]=(0,R.useState)(m??null),[Ve,Ue]=(0,R.useState)({}),[We,Ke]=(0,R.useState)(!1),[Ye,Ze]=(0,R.useState)(null),[Qe,$e]=(0,R.useState)(new Set),[et,nt]=(0,R.useState)(new Set),[P,F]=(0,R.useState)(new Set),[I,ot]=(0,R.useState)(!1),[ct,ut]=(0,R.useState)({}),[L,dt]=(0,R.useState)(new Set),[ft,xt]=(0,R.useState)(new Set),[St,B]=(0,R.useState)(null),[Et,Dt]=(0,R.useState)(new Set),[V,H]=(0,R.useState)(null),U=e.content??[],W=Object.keys(r??{}),G=!!(o&&c),K=(0,R.useMemo)(()=>{let t={};for(let[n,r]of Object.entries(e.defaults?.formats??{}))t[n]={config:r.config,preset:r.preset};return t},[e.defaults?.formats]),Ot=(0,R.useCallback)((n,r)=>{let i={...e.defaults},a={...i.formats},o={...a[n]};r.preset?o.preset=r.preset:delete o.preset,r.config&&Object.keys(r.config).length>0?o.config=r.config:delete o.config,Object.keys(o).length===0?delete a[n]:a[n]=o,i.formats=Object.keys(a).length>0?a:void 0,t({...e,defaults:i})},[e,t]),q=(0,R.useCallback)(e=>{let t=new Set;for(let n of de)n.pattern===e.path&&n.format&&t.add(n.format);return[...t]},[de]);(0,R.useEffect)(()=>{o||N.listFormats().then(e=>{e&&je(e)}).catch(e=>h(`Failed to load formats`,e)),c||N.getBasePath(n).then(e=>{e&&xe(e)}).catch(e=>h(`Failed to get base path`,e))},[n,h,o,c]);let J=(0,R.useCallback)(()=>{ee||N.getProjectStatus(n).then(e=>{e&&Pe(e)}).catch(()=>{})},[n,ee]),Y=(0,R.useCallback)(()=>{m||N.getConvergence(n).then(e=>{e&&ze(e)}).catch(()=>{})},[n,m]),X=(0,R.useCallback)(async()=>{if(!G){Oe(!0);try{await N.updateProject(n,e);let[t,r,i]=await Promise.all([N.matchContent(n),N.listProjectFiles(n),N.listOutputs(n)]);fe(t??[]),_e(r??[]),ut(i??{})}catch(e){h(`Failed to scan files`,e)}finally{Oe(!1)}}},[n,e,h,G]),Z=(0,R.useCallback)(()=>{G||N.listOutputs(n).then(e=>{e&&ut(e)}).catch(()=>{})},[n,G]);(0,R.useEffect)(()=>{X()},[X,U.length]),(0,R.useEffect)(()=>{J(),Y()},[J,Y,e.content]),(0,R.useEffect)(()=>{!n||!a||N.listFlows(n).then(e=>{if(!e)return;let t={};for(let n of e)t[n.name]=n;Ue(t)})},[n,a,e.flows]),Je(`project-files-changed`,e=>{e===n&&X()}),Je(`outputs-changed`,()=>Z()),Je(`project:extracted`,()=>{J(),Y()});let Q=(0,R.useCallback)(async()=>{if(!(!n||G)){ke(!0);try{await N.runExtract(n),J(),Y(),await X()}catch(e){h(`Extraction failed`,e)}finally{ke(!1)}}},[n,G,J,Y,X,h]),kt=n=>{t({...e,content:n})},At=()=>{kt([...U,{name:`New Collection`,items:[{path:``}]}])},jt=(e,t)=>{let n=[...U];n[e]=t,kt(n)},Mt=e=>{kt(U.filter((t,n)=>n!==e))},Nt=async()=>{let e=await N.addFilesDialog(n,``);e&&e.length>0&&X()},Pt=(0,R.useCallback)(async e=>{e.preventDefault(),Ke(!1);let t=e.dataTransfer?.files;if(!(!t||t.length===0)){for(let e=0;e<t.length;e++){let r=t[e].path;r&&await N.copyFileToProject(n,r,``)}X()}},[n,X]),Ft=(0,R.useCallback)(e=>{e.preventDefault(),Ke(!0)},[]),It=(0,R.useCallback)(e=>{e.preventDefault(),Ke(!1)},[]),Lt=new Set(de.map(e=>e.relative)),Rt=new Set;for(let e of Object.values(ct))for(let t of e)Rt.add(t.relative);let zt=ge.filter(e=>!e.is_dir&&!Lt.has(e.relative)&&!Rt.has(e.relative)),Bt=S?.collections??[],Vt=(0,R.useCallback)(e=>Bt.length===0||Bt.includes(_t(e)),[Bt]),$=U.map((e,t)=>({coll:e,ci:t})).filter(({coll:e})=>Vt(e)),Ht=U.length-$.length,Ut=ue&&!!S,Wt=(0,R.useMemo)(()=>{let e=new Map;for(let t of Ne?.collections??[])e.set(t.name,t);return e},[Ne]),Gt=$.map(({coll:e})=>Wt.get(_t(e))).filter(e=>!!e),Kt=Gt.reduce((e,t)=>e+t.blockCount,0),qt=Array.from(new Set(Gt.flatMap(e=>qe(e.targetLanguages,S)))).map(e=>{let t=0,n=0;for(let r of Gt)r.targetLanguages.includes(e)&&(t+=r.coverage?.[e]??0,n+=r.blockCount);return{lang:e,pct:n>0?Math.round(t/n*100):0}}),Jt=!!Ne?.hasData,Yt=(e,t,n)=>{let r=ht(e.format),a=e.format?.config&&Object.keys(e.format.config).length>0,o=r?[]:q(e),c=!r;return(0,z.jsxs)(`div`,{className:`space-y-2`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`yBWxw`,`Path pattern`)}),(0,z.jsx)(Ee,{value:e.path,onChange:n=>t({...e,path:n}),placeholder:s(`1R8M9g`,`src/locales/en/*.json`)})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`39Lmr`,`Format`)}),(0,z.jsx)(Me,{value:r,onChange:n=>t({...e,format:n?{name:n}:void 0}),formats:Ae})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`3YGJcS`,`Target path`)}),(0,z.jsx)(Le,{value:e.target??``,onChange:n=>t({...e,target:n||void 0}),placeholder:s(`3T9UTi`,`output/{lang}  ·  or output/{lang}/{dir}/{name}.{ext}`)})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:i(`5W6k9`,`Base{value} {=m1} (optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard) {/=m1}`,{"=m1":(0,z.jsx)(`span`,{className:`font-normal text-muted-foreground/60`,children:`(optional — outputs mirror source paths relative to this; defaults to the path prefix before the first wildcard)`})},{value:` `})}),(0,z.jsx)(Ee,{value:e.base??``,onChange:n=>t({...e,base:n||void 0}),placeholder:s(`jiLnw`,`auto (e.g. input/docs)`)})]}),r===`exec`&&(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`1gbrZJ`,`Extractor command`)}),(0,z.jsx)(`input`,{type:`text`,value:typeof e.format?.config?.command==`string`?e.format.config.command:``,onChange:n=>t({...e,format:{...e.format,config:{...e.format?.config,command:n.target.value||void 0}}}),placeholder:s(`1YiMcB`,`vp kapi-react extract --stream`),className:`w-full rounded-md border border-input bg-background px-2 py-1 font-mono text-xs outline-none focus-visible:ring-2 focus-visible:ring-ring`}),(0,z.jsx)(`p`,{className:`mt-0.5 text-xs text-muted-foreground`,children:s(`4oM908`,"`kapi extract -p` runs this command; NUL-separated paths on stdin, NDJSON blocks on stdout.")})]}),(r||o.length>0)&&(0,z.jsx)(`div`,{children:(0,z.jsxs)(E,{variant:`ghost`,size:`xs`,onClick:()=>Ze(n),className:`h-auto px-0 text-muted-foreground hover:text-foreground`,children:[(0,z.jsx)(y,{size:10}),r?(0,z.jsxs)(z.Fragment,{children:[s(`66RA9`,`Configure {fmt}`,{fmt:r}),(a||e.format?.preset)&&(0,z.jsx)(`span`,{className:`ml-1 rounded bg-primary/10 px-1.5 py-0.5 text-primary`,children:e.format?.preset?e.format.preset:Object.keys(e.format.config).length})]}):s(`4h7nHO`,`Configure formats ({count})`,{count:o.length})]})}),Ye===n&&(c?(0,z.jsx)(at,{open:!0,onOpenChange:e=>!e&&Ze(null),title:s(`48Xlr4`,`Configure formats`),description:s(`1bIT1z`,`This pattern auto-detects a format per file. Tune any of them here — settings apply project-wide.`),formats:o,allFormats:Ae,allowAdd:!0,filterExtension:gt(e.path),values:K,onChange:Ot,scopeNote:s(`10MXfr`,`Stored in the project's defaults.formats — shared by every content item.`)}):(0,z.jsx)(at,{open:!0,onOpenChange:e=>!e&&Ze(null),title:s(`66RA9`,`Configure {fmt}`,{fmt:r}),formats:[r],allFormats:Ae,values:{[r]:{config:e.format?.config,preset:e.format?.preset}},onChange:(n,r)=>t({...e,format:{name:n,preset:r.preset,config:r.config}}),scopeNote:s(`2mxJu6`,`Applies to this content item.`)}))]})},Xt=(e,t)=>e(e=>{let n=new Set(e);return n.has(t)?n.delete(t):n.add(t),n}),Zt=e=>$e(t=>new Set(t).add(e)),Qt=e=>tt(e)?[e.path??``]:(e.items??[]).map(e=>e.path),$t=e=>{let t=new Set(Qt(e).filter(Boolean));return de.filter(e=>t.has(e.pattern))},en=(t,n)=>tt(t)?Yt({path:t.path??``,format:t.format,target:t.target},e=>jt(n,{path:e.path,format:e.format,target:e.target}),`bare-${n}`):(0,z.jsxs)(`div`,{className:`space-y-4`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`2wzVub`,`Collection name`)}),(0,z.jsx)(`input`,{type:`text`,value:t.name??``,onChange:e=>jt(n,{...t,name:e.target.value||void 0}),placeholder:s(`3fQf8Y`,`Collection name`),className:`w-full rounded-md border border-input bg-background px-2 py-1 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring`})]}),(0,z.jsxs)(`div`,{className:`grid grid-cols-2 gap-3`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`25vgeN`,`Source override`)}),(0,z.jsx)(j,{value:t.source_language??``,onChange:e=>jt(n,{...t,source_language:e||void 0}),locales:b,placeholder:e.defaults?.source_language?s(`10wAUR`,`Inherit ({source})`,{source:e.defaults.source_language}):s(`4FMXin`,`Select source...`)})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-0.5 block text-xs text-muted-foreground`,children:s(`oVuml`,`Target overrides`)}),(0,z.jsx)(Te,{value:t.target_languages??[],onChange:e=>jt(n,{...t,target_languages:e.length>0?e:void 0}),locales:b,placeholder:e.defaults?.target_languages?.length?s(`s2EQV`,`Inherit ({targets})`,{targets:e.defaults.target_languages.join(`, `)}):s(`1YSqO`,`Add targets...`)})]})]}),(0,z.jsxs)(`div`,{children:[(0,z.jsx)(T,{className:`mb-1 block text-xs text-muted-foreground`,children:s(`4GjmHO`,`Patterns`)}),(0,z.jsxs)(`div`,{className:`space-y-2`,children:[(t.items??[]).map((e,r)=>(0,z.jsxs)(`div`,{className:`group/item relative rounded-md border border-border p-3`,children:[(0,z.jsx)(`div`,{className:`absolute right-2 top-2 opacity-0 group-hover/item:opacity-100`,children:(0,z.jsx)(k,{onDelete:()=>{let e=(t.items??[]).filter((e,t)=>t!==r);e.length===0?Mt(n):jt(n,{...t,items:e})},mode:`icon`})}),Yt(e,e=>{let i=[...t.items??[]];i[r]=e,jt(n,{...t,items:i})},`coll-${n}-${r}`)]},r)),(0,z.jsx)(E,{variant:`ghost`,size:`xs`,onClick:()=>jt(n,{...t,items:[...t.items??[],{path:``}]}),className:`text-muted-foreground`,children:i(`1EfPvQ`,`{=m0} Add another pattern`,{"=m0":(0,z.jsx)(ce,{size:10})})})]})]})]}),tn=e=>(0,z.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,z.jsx)(`thead`,{children:(0,z.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`22cvwU`,`File`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`1EJ61l`,`Format`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`3RvdGQ`,`Pattern`)})]})}),(0,z.jsx)(`tbody`,{children:e.map((e,t)=>{let n=ct[e.relative]??[],r=L.has(e.relative),i=n.filter(e=>e.exists).length,a=vt(n),o=ft.has(e.relative);return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsxs)(`tr`,{onClick:()=>B({path:e.path,relative:e.relative}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:s(`4EZGfu`,`Preview {file}`,{file:e.relative}),children:[(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[n.length>0?(0,z.jsx)(`button`,{onClick:t=>{t.stopPropagation(),dt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n})},className:`shrink-0 text-muted-foreground hover:text-foreground`,title:r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),"aria-label":r?s(`1KdSAe`,`Hide outputs`):s(`HM2Q5`,`Show outputs`),children:r?(0,z.jsx)(w,{size:12}):(0,z.jsx)(ae,{size:12})}):(0,z.jsx)(re,{size:12,className:`shrink-0 text-muted-foreground`}),e.relative]})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsx)(O,{variant:`secondary`,children:e.format||`unknown`})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5 text-muted-foreground`,children:(0,z.jsxs)(`span`,{className:`flex items-center justify-between gap-2`,children:[(0,z.jsx)(`span`,{children:e.pattern}),n.length>0&&(0,z.jsx)(O,{variant:`outline`,className:`shrink-0 text-[10px] font-normal`,children:s(`3LFNpN`,`{present}/{total} outputs`,{present:i,total:n.length})})]})})]}),r&&n.length>0&&(0,z.jsxs)(`tr`,{onClick:()=>xt(t=>{let n=new Set(t);return n.has(e.relative)?n.delete(e.relative):n.add(e.relative),n}),className:`cursor-pointer border-b border-border last:border-0 hover:bg-accent/30`,title:o?s(`1rbiuq`,`Hide per-language outputs`):s(`3GyGnC`,`Show per-language outputs`),children:[(0,z.jsx)(`td`,{className:`py-1 pl-9 pr-3`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[o?(0,z.jsx)(w,{size:11,className:`shrink-0`}):(0,z.jsx)(ae,{size:11,className:`shrink-0`}),(0,z.jsx)(f,{size:10,className:`shrink-0 opacity-50`}),(0,z.jsx)(`span`,{translate:`no`,children:a})]})}),(0,z.jsx)(`td`,{className:`px-3 py-1`,children:(0,z.jsx)(O,{variant:`secondary`,children:e.format||`—`})}),(0,z.jsx)(`td`,{className:`px-3 py-1 text-right`,children:(0,z.jsx)(O,{variant:`outline`,className:`text-[10px] font-normal`,children:s(`2jhS0l`,`{present}/{total} generated`,{present:i,total:n.length})})})]}),r&&o&&n.map(e=>(0,z.jsxs)(`tr`,{onClick:e.exists?()=>B({path:e.path,relative:e.relative}):void 0,className:`border-b border-border last:border-0 ${e.exists?`cursor-pointer hover:bg-accent/30`:`opacity-60`}`,title:e.exists?s(`1VO4bN`,`Inspect {file}`,{file:e.relative}):s(`2K2GuI`,`Not generated yet — run a flow to create it`),children:[(0,z.jsx)(`td`,{className:`py-1 pl-16 pr-3`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono text-muted-foreground`,children:[(0,z.jsx)(A,{locale:e.lang}),(0,z.jsx)(`span`,{children:e.relative})]})}),(0,z.jsx)(`td`,{className:`px-3 py-1`,children:e.exists?(0,z.jsx)(O,{variant:`secondary`,children:e.format||`—`}):(0,z.jsx)(`span`,{className:`text-[10px] text-muted-foreground`,children:s(`1wl1hi`,`pending`)})}),(0,z.jsx)(`td`,{className:`px-3 py-1 text-right text-muted-foreground`,children:e.exists?mt(e.size):``})]},`${t}-${e.relative}`))]},t)})})]}),nn=e=>(0,z.jsxs)(`table`,{className:`w-full text-xs`,children:[(0,z.jsx)(`thead`,{children:(0,z.jsxs)(`tr`,{className:`border-b border-border text-left text-muted-foreground`,children:[(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`22cvwU`,`File`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 font-medium`,children:s(`1EJ61l`,`Format`)}),(0,z.jsx)(`th`,{className:`px-3 py-2 text-right font-medium`,children:s(`3nibT3`,`Size`)})]})}),(0,z.jsx)(`tbody`,{children:e.map(e=>{let t=st(e.relative),n=Et.has(e.path),r=t?()=>Dt(t=>{let n=new Set(t);return n.has(e.path)?n.delete(e.path):n.add(e.path),n}):e.format?()=>B({path:e.path,relative:e.relative}):void 0;return(0,z.jsxs)(R.Fragment,{children:[(0,z.jsxs)(`tr`,{onClick:r,className:`border-b border-border last:border-0 text-muted-foreground hover:bg-accent/30 ${r?`cursor-pointer`:``}`,title:t?s(`Kgjt4`,`Browse entries in {file}`,{file:e.relative}):e.format?s(`4EZGfu`,`Preview {file}`,{file:e.relative}):void 0,children:[(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:(0,z.jsxs)(`span`,{className:`flex items-center gap-1.5 font-mono`,children:[t?n?(0,z.jsx)(w,{size:12,className:`shrink-0`}):(0,z.jsx)(ae,{size:12,className:`shrink-0`}):(0,z.jsx)(re,{size:12,className:`shrink-0`}),e.relative]})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5`,children:e.format?(0,z.jsx)(O,{variant:`secondary`,children:e.format}):(0,z.jsx)(`span`,{children:s(`2xmcdV`,`—`)})}),(0,z.jsx)(`td`,{className:`px-3 py-1.5 text-right`,children:mt(e.size)})]}),t&&n&&(0,z.jsx)(`tr`,{className:`border-b border-border last:border-0`,children:(0,z.jsx)(`td`,{colSpan:3,className:`px-3 py-1.5`,children:(0,z.jsx)(lt,{archivePath:e.path,onSelect:t=>H({path:e.path,relative:e.relative,entry:t})})})})]},e.relative)})})]}),rn=!!a&&W.length>0,an=$.map(e=>e.ci),on=an.length>0&&an.every(e=>P.has(e)),sn=Array.from(new Set($.filter(e=>P.has(e.ci)).flatMap(({coll:e})=>$t(e).map(e=>e.path)))),cn=e=>Xt(F,e),ln=()=>F(new Set),un=()=>F(on?new Set:new Set(an)),dn=P.size>0,fn=dn?sn.length>0:de.length>0,pn=e=>Ve[e]?.valid!==!1,mn=e=>{let t=Ve[e];if(t&&t.valid===!1)return s(`1WxaK7`,`Cannot run: {issues}`,{issues:(t.issues??[]).map(e=>e.message).join(`; `)});if(!fn)return s(`SbyAd`,`No matched files to run on`)},hn=(e,t)=>{dn?(a?.(e,t,{scopePaths:sn,scopeLabel:s(`2TVMjG`,`{count} collections`,{count:P.size})}),ln()):a?.(e,t)},gn=qe(Array.from(new Set($.flatMap(({coll:t})=>(t.target_languages??e.defaults?.target_languages??[]).map(String)))),S),_n=gn.length>=Tt,vn=(0,R.useMemo)(()=>{let e=new Map;for(let t of Re?.locales??[])e.set(`${t.collection??``} ${t.locale}`,t);return e},[Re]),yn=vn.size>0,bn=(e,t)=>{let n=tt(e)?``:e.name??``;return vn.get(`${n} ${t}`)??vn.get(` ${t}`)},xn=(Jt||yn)&&gn.length>0,Sn=e=>(e.pct?.translated??0)===0?`none`:e.shippable?`shippable`:(e.pct?.reviewed??0)>0?`review`:`translated`,Cn=new Map;$.forEach(({coll:e},t)=>Cn.set(e.name??``,Ct(t)));let wn=yn?gn.map(e=>{let t=0,n=0,r=0,i=0,a=[];for(let o of Re?.locales??[])o.locale===e&&(t+=o.total,n+=o.total*(o.pct?.translated??0)/100,r+=o.total*(o.pct?.reviewed??0)/100,o.shippable&&(i+=o.total),a.push({name:o.collection||s(`2hJcYw`,`(unnamed)`),pct:Math.round(o.pct?.translated??0),stage:Sn(o),color:Cn.get(o.collection||``)??`var(--muted-foreground)`}));a.sort((e,t)=>t.pct-e.pct);let o=t>0?Math.round(n/t*100):0,c=t>0?Math.round(r/t*100):0;return{lang:e,pct:o,stage:t===0?`none`:i/t>=.999?`shippable`:c>0?`review`:o>0?`translated`:`none`,byCollection:a}}):null,Tn=(e,t)=>{let n=Wt.get(_t(e));return!n||n.blockCount===0||!n.targetLanguages.includes(t)?null:Math.round((n.coverage?.[t]??0)/n.blockCount*100)},En=(e,t)=>{if(yn){let n=pt(bn(e,t));return n.key===`none`?(0,z.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)}):_n?(0,z.jsxs)(`span`,{className:`flex items-center justify-center gap-1 text-[10px]`,title:`${t}: ${n.label} · ${n.pct}% translated`,children:[(0,z.jsx)(`span`,{className:`size-2 shrink-0 rounded-full`,style:{background:n.color}}),(0,z.jsx)(`span`,{className:`tabular-nums text-muted-foreground`,children:n.pct})]}):(0,z.jsx)(`span`,{className:`flex flex-col items-center gap-0.5`,title:`${t}: ${n.label} · ${n.pct}% translated`,children:i(`4G4kFe`,`{=m0} {r.label} {/=m0} {=m2}{r.pct}%{/=m2}`,{"=m0":(0,z.jsx)(`span`,{className:`text-[10px] font-medium leading-none`,style:{color:n.color},children:n.label}),"=m2":(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n.pct,`%`]})},{"r.label":n.label,"r.pct":n.pct})})}let n=Tn(e,t);return n===null?(0,z.jsx)(`span`,{className:`text-center text-[10px] text-muted-foreground/40`,children:s(`3c5KEL`,`—`)}):_n?(0,z.jsx)(`span`,{className:`flex h-6 items-center justify-center rounded text-[10px] font-medium tabular-nums`,style:{background:wt(n),color:n>55?`var(--primary-foreground)`:`var(--muted-foreground)`},title:`${t}: ${n}%`,children:n}):(0,z.jsx)(`span`,{className:`flex flex-col items-center gap-1`,title:`${t}: ${n}%`,children:i(`2iHdj3`,`{=m0} {=m1} {/=m0} {=m2}{p}%{/=m2}`,{"=m0":(0,z.jsx)(`span`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-accent`,children:(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}})}),"=m1":(0,z.jsx)(`span`,{className:`block h-full rounded-full bg-primary`,style:{width:`${n}%`}}),"=m2":(0,z.jsxs)(`span`,{className:`text-[10px] tabular-nums text-muted-foreground`,children:[n,`%`]})},{p:n})})},Dn=$.map(({coll:e},t)=>({name:_t(e),value:Wt.get(_t(e))?.blockCount??0,fill:Ct(t)})),On=Dn.filter(e=>e.value>0),kn=xn?`repeat(${gn.length}, minmax(${_n?40:60}px, 1fr))`:`1fr`,An=`${rn?`24px `:``}minmax(150px,1.6fr) 52px 62px ${kn} auto`;return(0,z.jsxs)(`section`,{className:`mb-8`,children:[(0,z.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,z.jsxs)(`h2`,{className:`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground`,children:[(0,z.jsx)(re,{size:14}),s(`3LuUL6`,`Collections`)]}),ve&&(0,z.jsx)(`span`,{className:`hidden text-xs text-muted-foreground sm:inline`,children:s(`1BV3ls`,`relative to {base}`,{base:ie(ve)})}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[rn&&(W.length===1?(0,z.jsxs)(E,{size:`sm`,disabled:ne||!fn||!pn(W[0]),title:mn(W[0]),onClick:()=>hn(W[0],r[W[0]]),"aria-label":dn?s(`3jqAmN`,`Run {flow} on selected collections`,{flow:W[0]}):s(`4cKRZ3`,`Run {flow} on all collections`,{flow:W[0]}),children:[(0,z.jsx)(p,{size:12}),dn?s(`2ovFIO`,`Run on selected`):s(`15F8wT`,`Run {flow}`,{flow:W[0]})]}):(0,z.jsxs)(pe,{children:[(0,z.jsx)(ye,{asChild:!0,children:(0,z.jsxs)(E,{size:`sm`,disabled:ne||!fn,"aria-label":s(`16daiB`,`Run a flow`),children:[(0,z.jsx)(p,{size:12}),dn?s(`2ovFIO`,`Run on selected`):s(`3nmBYd`,`Run flow`),(0,z.jsx)(w,{size:12})]})}),(0,z.jsxs)(he,{align:`end`,children:[(0,z.jsx)(me,{children:dn?s(`2G8fsS`,`Run on {count} collections`,{count:P.size}):s(`1oOSFP`,`Run on all collections`)}),W.map(e=>(0,z.jsxs)(Fe,{disabled:!fn||!pn(e),title:mn(e),onClick:()=>hn(e,r[e]),children:[(0,z.jsx)(p,{size:12}),e]},e))]})]})),(0,z.jsxs)(E,{variant:`outline`,size:`sm`,onClick:At,"aria-label":s(`Yg9iB`,`Add content collection`),children:[(0,z.jsx)(ce,{size:12}),s(`2Q60vn`,`Add Collection`)]}),(0,z.jsxs)(E,{variant:`outline`,size:`sm`,onClick:Nt,"aria-label":s(`R68OC`,`Add files`),children:[(0,z.jsx)(ce,{size:12}),s(`Hukdl`,`Add Files`)]}),(0,z.jsxs)(E,{variant:`outline`,size:`sm`,onClick:()=>void Q(),disabled:M||Se,"aria-label":Jt?s(`4FjbHq`,`Re-extract content`):s(`3t260Z`,`Run extract`),children:[M?(0,z.jsx)(v,{size:12,className:`animate-spin`}):(0,z.jsx)(oe,{size:12}),Jt?s(`VWqFK`,`Re-extract`):s(`3f7Alp`,`Extract`)]})]})]}),Ut&&(0,z.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-border bg-muted/40 px-3 py-1.5 text-xs`,children:[(0,z.jsx)(g,{size:12,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:Ht>0?s(`41GmQA`,`Filtered by {name} — {count} collection(s) hidden`,{name:S.name,count:Ht}):s(`32FBSf`,`Filtered by {name}`,{name:S.name})}),(0,z.jsx)(E,{variant:`link`,size:`xs`,className:`ml-auto h-auto px-0`,onClick:()=>void C(``),children:s(`4AAIEq`,`Show all`)})]}),Ne?.stale&&(0,z.jsxs)(`div`,{className:`mb-3 flex items-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-xs`,children:[(0,z.jsx)(u,{size:13,className:`shrink-0 text-amber-500`}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3kkuG3`,`These counts were produced by an earlier version of kapi and may be out of date.`)}),(0,z.jsxs)(E,{variant:`outline`,size:`xs`,className:`ml-auto`,onClick:()=>void Q(),disabled:M,children:[M?(0,z.jsx)(v,{size:11,className:`animate-spin`}):(0,z.jsx)(oe,{size:11}),s(`VWqFK`,`Re-extract`)]})]}),U.length>0&&(Jt?(0,z.jsx)(D,{className:`mb-3 p-4`,children:(0,z.jsxs)(`div`,{className:`grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center`,children:[(0,z.jsxs)(`div`,{className:`flex items-center gap-3`,children:[On.length>0?(0,z.jsx)(`div`,{className:`h-28 w-28 shrink-0`,children:(0,z.jsx)(be,{width:`100%`,height:`100%`,children:(0,z.jsx)(we,{children:(0,z.jsx)(De,{data:On,dataKey:`value`,nameKey:`name`,innerRadius:`56%`,outerRadius:`100%`,paddingAngle:On.length>1?2:0,strokeWidth:0,children:On.map(e=>(0,z.jsx)(Ce,{fill:e.fill},e.name))})})})}):(0,z.jsx)(`div`,{className:`flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-dashed text-[10px] text-muted-foreground`,children:s(`750BK`,`No blocks`)}),(0,z.jsxs)(`ul`,{className:`space-y-1 text-xs`,children:[(0,z.jsx)(`li`,{className:`font-medium text-foreground`,children:s(`4vcVki`,`{count} blocks`,{count:Kt})}),Dn.map((e,t)=>(0,z.jsxs)(`li`,{className:`flex items-center gap-1.5`,children:[(0,z.jsx)(`span`,{className:`size-2 shrink-0 rounded-[2px]`,style:{background:Ct(t)}}),(0,z.jsx)(`span`,{className:`truncate text-muted-foreground`,children:e.name}),(0,z.jsx)(`span`,{className:`tabular-nums text-foreground`,children:e.value})]},e.name))]})]}),wn&&wn.length>0?(0,z.jsx)(bt,{items:wn}):qt.length>0&&(0,z.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,z.jsx)(`div`,{className:`mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground`,children:s(`jP6Vy`,`Coverage across collections`)}),(0,z.jsx)(`div`,{className:`flex flex-wrap gap-x-6 gap-y-1.5`,children:qt.map(e=>(0,z.jsx)(yt,{label:e.lang,pct:e.pct},e.lang))})]})]})}):(0,z.jsxs)(D,{className:`mb-3 flex items-center gap-3 p-4`,children:[(0,z.jsx)(d,{size:18,className:`shrink-0 text-muted-foreground/50`}),(0,z.jsx)(`div`,{className:`flex-1 text-xs text-muted-foreground`,children:s(`2JAuYT`,`Nothing extracted yet — run extract to read your content and analyze coverage.`)}),(0,z.jsx)(E,{size:`sm`,onClick:()=>void Q(),disabled:M||Se,children:M?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(v,{size:12,className:`animate-spin`}),s(`1g3fu4`,`Extracting...`)]}):s(`1n6yRm`,`Run extract`)})]})),U.some(e=>e.archive)&&(0,z.jsx)(`div`,{className:`mb-4`,children:(0,z.jsx)(rt,{tabID:n})}),rn&&P.size>0&&(0,z.jsxs)(`div`,{className:`sticky top-2 z-10 mb-3 flex flex-wrap items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-xs shadow-sm backdrop-blur`,children:[(0,z.jsx)(`span`,{className:`font-medium`,children:s(`10dUDc`,`{count} selected`,{count:P.size})}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3YDabm`,`{count} files`,{count:sn.length})}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`323P9x`,`·`)}),(0,z.jsx)(`span`,{className:`text-muted-foreground`,children:s(`lTjdA`,`run via Run on selected, above`)}),(0,z.jsxs)(`div`,{className:`ml-auto flex items-center gap-2`,children:[(0,z.jsx)(E,{variant:`ghost`,size:`xs`,onClick:un,children:on?s(`3H287u`,`Deselect all`):s(`3xLcXG`,`Select all`)}),(0,z.jsx)(E,{variant:`ghost`,size:`xs`,onClick:ln,children:s(`45Z9at`,`Clear`)})]})]}),(0,z.jsx)(`div`,{onDrop:Pt,onDragOver:Ft,onDragLeave:It,className:`rounded-lg border-2 transition-colors ${We?`border-primary bg-primary/5`:`border-transparent`}`,children:U.length===0&&zt.length===0?(0,z.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-16 text-center`,children:[(0,z.jsx)(x,{size:24,className:`mb-3 text-muted-foreground/50`}),(0,z.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:s(`2p5m8o`,`Add a collection to map your source files, or drop files here.`)})]}):(0,z.jsxs)(`div`,{className:`overflow-hidden rounded-lg border border-border`,children:[$.length>0&&(0,z.jsxs)(`div`,{className:`grid items-center gap-x-3 border-b border-border bg-muted/30 px-3 py-2 text-[10px] font-medium uppercase tracking-wide text-muted-foreground`,style:{gridTemplateColumns:An},children:[rn&&(0,z.jsx)(`span`,{}),(0,z.jsx)(`span`,{children:s(`iFWBE`,`Collection`)}),(0,z.jsx)(`span`,{className:`text-right`,children:s(`3epYU3`,`Files`)}),(0,z.jsx)(`span`,{className:`text-right`,children:s(`vlTt2`,`Blocks`)}),xn?gn.map(e=>(0,z.jsx)(`span`,{className:`text-center normal-case`,translate:`no`,children:_n?e.split(`-`)[0]:e},e)):(0,z.jsx)(`span`,{children:Jt?``:s(`3pa0Do`,`Coverage`)}),(0,z.jsx)(`span`,{})]}),$.map(({coll:e,ci:t},n)=>{let i=et.has(t),o=Qe.has(t),c=$t(e),u=tt(e)?e.path||s(`3epYU3`,`Files`):e.name||s(`2FTnrQ`,`Untitled collection`),d=Wt.get(_t(e));return(0,z.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,z.jsxs)(`div`,{className:`grid items-center gap-x-3 px-3 py-2.5 hover:bg-accent/20`,style:{gridTemplateColumns:An},children:[rn&&(0,z.jsx)(le,{checked:P.has(t),onCheckedChange:()=>cn(t),"aria-label":s(`3mI5eL`,`Select {collection}`,{collection:u}),className:`shrink-0`}),(0,z.jsxs)(`button`,{onClick:()=>Xt($e,t),className:`flex min-w-0 items-center gap-2 text-left`,"aria-label":o?s(`36n48F`,`Collapse`):s(`2HBGFu`,`Expand`),"aria-expanded":o,children:[o?(0,z.jsx)(w,{size:13,className:`shrink-0 text-muted-foreground`}):(0,z.jsx)(ae,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(se,{size:13,className:`shrink-0`,style:{color:Ct(n)}}),(0,z.jsx)(`span`,{className:`truncate text-sm font-medium`,title:u,children:u})]}),(0,z.jsx)(`span`,{className:`text-right text-xs tabular-nums text-muted-foreground`,children:c.length}),(0,z.jsx)(`span`,{className:`text-right text-xs tabular-nums`,children:Jt&&d?d.blockCount:`—`}),xn?gn.map(t=>(0,z.jsx)(R.Fragment,{children:En(e,t)},t)):(0,z.jsx)(`span`,{}),(0,z.jsxs)(`span`,{className:`flex items-center justify-end gap-1`,children:[a&&c.length>0&&W.length>0&&(W.length===1?(0,z.jsx)(E,{variant:`ghost`,size:`icon-sm`,disabled:ne,onClick:()=>a(W[0],r[W[0]],{scopePaths:c.map(e=>e.path),scopeLabel:u}),"aria-label":s(`WT7Mg`,`Run {flow} on {collection}`,{flow:W[0],collection:u}),children:(0,z.jsx)(p,{size:13})}):(0,z.jsxs)(pe,{children:[(0,z.jsx)(ye,{asChild:!0,children:(0,z.jsx)(E,{variant:`ghost`,size:`icon-sm`,disabled:ne,"aria-label":s(`37dEBh`,`Run a flow on {collection}`,{collection:u}),children:(0,z.jsx)(p,{size:13})})}),(0,z.jsxs)(he,{align:`end`,children:[(0,z.jsx)(me,{children:s(`3r1PYB`,`Run on {collection}`,{collection:u})}),W.map(e=>(0,z.jsxs)(Fe,{onClick:()=>a(e,r[e],{scopePaths:c.map(e=>e.path),scopeLabel:u}),children:[(0,z.jsx)(p,{size:12}),e]},e))]})]})),(0,z.jsx)(E,{variant:i?`secondary`:`ghost`,size:`icon-sm`,onClick:()=>{Zt(t),Xt(nt,t)},"aria-label":i?s(`1vDkj2`,`Done editing`):s(`h5zbs`,`Edit collection`),children:i?(0,z.jsx)(te,{size:13}):(0,z.jsx)(l,{size:13})}),(0,z.jsx)(k,{onDelete:()=>Mt(t),mode:`icon`})]})]}),o&&(0,z.jsxs)(`div`,{className:`border-t border-border bg-muted/10`,children:[i&&(0,z.jsxs)(`div`,{className:`animate-in slide-in-from-top-2 fade-in border-b-2 border-primary/40 bg-muted/40 p-4 shadow-inner duration-200`,children:[(0,z.jsxs)(`div`,{className:`mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-primary`,children:[(0,z.jsx)(l,{size:11}),s(`h5zbs`,`Edit collection`)]}),en(e,t)]}),c.length>0?tn(c):(0,z.jsxs)(`p`,{className:`px-4 py-6 text-center text-xs text-muted-foreground`,children:[s(`1XxbaH`,`No files matched this collection's patterns.`),!i&&(0,z.jsxs)(z.Fragment,{children:[` `,(0,z.jsx)(`button`,{onClick:()=>{Zt(t),nt(e=>new Set(e).add(t))},className:`text-primary hover:underline`,children:s(`2Uq3Xf`,`Edit patterns`)})]})]})]})]},t)}),!Bt.length&&zt.length>0&&(0,z.jsxs)(`div`,{className:`border-b border-border last:border-0`,children:[(0,z.jsxs)(`button`,{onClick:()=>ot(e=>!e),className:`flex w-full items-center gap-2 px-3 py-2.5 text-left hover:bg-accent/20`,"aria-label":I?s(`2HBGFu`,`Expand`):s(`36n48F`,`Collapse`),children:[I?(0,z.jsx)(ae,{size:13,className:`shrink-0 text-muted-foreground`}):(0,z.jsx)(w,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(_,{size:13,className:`shrink-0 text-muted-foreground`}),(0,z.jsx)(`span`,{className:`text-sm font-medium`,children:s(`41kjwU`,`Other files`)}),(0,z.jsx)(O,{variant:`secondary`,className:`text-[10px] font-normal`,children:s(`3YDabm`,`{count} files`,{count:zt.length})})]}),!I&&(0,z.jsx)(`div`,{className:`border-t border-border bg-muted/10`,children:nn(zt)})]})]})}),(0,z.jsx)(Ge,{tabID:n,filePath:St?.path??null,filename:St?.relative??``,onClose:()=>B(null)}),(0,z.jsx)(Ge,{tabID:n,filePath:V?.path??null,filename:V?`${V.relative}!${V.entry}`:``,entryPath:V?.entry??null,onClose:()=>H(null)})]})}var R,z,St,Ct,wt,B,Tt,Et=t((()=>{a(),R=e(n(),1),je(),C(),Oe(),et(),ze(),ot(),nt(),We(),ft(),Ae(),Ve(),Ye(),P(),Ue(),Ze(),Ke(),z=r(),St=[`var(--chart-1)`,`var(--chart-2)`,`var(--chart-3)`,`var(--chart-4)`,`var(--chart-5)`],Ct=e=>St[e%St.length],wt=e=>`color-mix(in oklch, var(--primary) ${e}%, var(--muted))`,B={shippable:`oklch(0.62 0.17 150)`,review:`oklch(0.72 0.15 80)`,translated:`var(--primary)`,none:`var(--muted-foreground)`},Tt=5,xt.__docgenInfo={description:`CollectionsPanel is the collection-centric spine of the project home: one card
per content collection carrying its own stats (file count, block count,
coverage bar), expandable to its matched-file table and editable inline. It
folds together what used to be the standalone Content page and the Home
page's read-only Content Overview (issue #1068) — collections, files,
patterns, languages, coverage and the unmatched "Other files" all live here.`,methods:[],displayName:`CollectionsPanel`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},onUpdate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``},flows:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`FlowSpec`}],raw:`Record<string, FlowSpec>`},description:`The project's flows, offered as a per-collection "Run" menu on each card.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:`Run a flow scoped to a single collection's files.`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`FormatInfo`}],raw:`FormatInfo[]`},description:`Pre-loaded formats for Storybook — skips api.listFormats().`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — skips api.getBasePath().`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`}}}}));function Dt({project:e,displayName:t,tabID:n,onUpdate:r,onRunFlow:a,onNavigate:l,pluginsResolved:d,pluginIssues:f,status:p,convergence:te,onResetSample:g,sampleInfo:_,formatList:b,basePath:x}){let{active:ne}=He(),[re,ie]=(0,V.useState)(null),[ae,se]=(0,V.useState)(_??null),[C,w]=(0,V.useState)(!1);(0,V.useEffect)(()=>{!n||_||N.getSampleInfo(n).then(e=>{e&&se(e)}).catch(()=>{})},[n,_]);let ce=(0,V.useCallback)(()=>{w(!0),n&&N.acknowledgeSampleRevision(n)},[n]),T=(0,V.useCallback)(e=>{ie(e),N.installPlugin(e)},[]),D=e.defaults??{},le=e.plugins??{},k=Object.keys(e.flows??{}).length,j=ne?.languages??[];return(0,H.jsxs)(`div`,{className:`p-6`,children:[(0,H.jsxs)(`div`,{className:`mb-6`,children:[(0,H.jsx)(`h1`,{className:`text-xl font-semibold`,children:t}),(0,H.jsx)(`div`,{className:`mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground`,children:i(`1u7muy`,`{=m0} {=m1} {=m2} {=m3}→{/=m3} {=m4} {/=m0} {=m5} {=m6}`,{"=m0":(0,H.jsxs)(`span`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,H.jsx)(c,{size:14}),D.source_language?(0,H.jsx)(A,{locale:String(D.source_language)}):(0,H.jsx)(`span`,{children:o(`No source`)}),(0,H.jsx)(`span`,{children:`→`}),D.target_languages?.length?D.target_languages.map(e=>(0,H.jsx)(A,{locale:String(e),muted:j.length>0&&!j.includes(String(e))},String(e))):(0,H.jsx)(`span`,{children:o(`No targets`)})]}),"=m1":(0,H.jsx)(c,{size:14}),"=m2":D.source_language?(0,H.jsx)(A,{locale:String(D.source_language)}):(0,H.jsx)(`span`,{children:o(`No source`)}),"=m3":(0,H.jsx)(`span`,{children:`→`}),"=m4":D.target_languages?.length?D.target_languages.map(e=>(0,H.jsx)(A,{locale:String(e),muted:j.length>0&&!j.includes(String(e))},String(e))):(0,H.jsx)(`span`,{children:o(`No targets`)}),"=m5":e.preset&&(0,H.jsx)(O,{variant:`secondary`,className:`text-xs`,children:e.preset}),"=m6":Object.keys(le).length>0&&Object.entries(le).map(([e,t])=>(0,H.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,H.jsx)(m,{size:10}),(0,H.jsxs)(`span`,{className:`text-xs`,children:[e,t.framework_version&&(0,H.jsxs)(`span`,{className:`text-muted-foreground/60`,children:[` `,t.framework_version]})]})]},e))})})]}),d===!1&&f&&f.length>0&&(0,H.jsx)(`div`,{className:`mb-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4`,children:(0,H.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,H.jsx)(u,{size:16,className:`mt-0.5 shrink-0 text-amber-500`}),(0,H.jsxs)(`div`,{className:`flex-1`,children:[(0,H.jsx)(`p`,{className:`text-sm font-medium`,children:s(`3K5OJB`,`Plugin requirements not met`)}),(0,H.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`4lNilC`,`This project requires plugins that are not installed or have incompatible versions. Content and flow features are disabled until this is resolved.`)}),(0,H.jsx)(`ul`,{className:`mt-2 space-y-1`,children:f.map(e=>(0,H.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,children:[(0,H.jsx)(O,{variant:`outline`,className:`text-[10px]`,children:e.plugin}),e.type===`missing`?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{className:`text-muted-foreground`,children:s(`1Dyx95`,`not installed`)}),(0,H.jsxs)(E,{size:`xs`,variant:`outline`,className:`ml-auto`,onClick:()=>T(e.plugin),disabled:re===e.plugin,children:[re===e.plugin?(0,H.jsx)(v,{size:11,className:`animate-spin`}):(0,H.jsx)(m,{size:11}),s(`1uuymN`,`Install`)]})]}):(0,H.jsx)(`span`,{className:`text-muted-foreground`,children:s(`3t7HJg`,`requires ${e.required}, installed ${e.installed_version}`,{"issue.required":e.required,"issue.installed_version":e.installed_version})})]},e.plugin))}),(0,H.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,H.jsx)(E,{size:`sm`,variant:`outline`,onClick:()=>l(`project-settings`),children:i(`4dlxNt`,`{=m0} Edit Plugin Settings`,{"=m0":(0,H.jsx)(y,{size:12})})}),(0,H.jsx)(E,{size:`sm`,variant:`outline`,onClick:()=>l(`app-settings`),children:i(`3RpCiz`,`{=m0} Manage Plugins`,{"=m0":(0,H.jsx)(m,{size:12})})})]})]})]})}),ae?.upgrade_available&&!C&&(0,H.jsx)(`div`,{className:`mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4`,children:(0,H.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,H.jsx)(oe,{size:16,className:`mt-0.5 shrink-0 text-primary`}),(0,H.jsxs)(`div`,{className:`flex-1`,children:[(0,H.jsx)(`p`,{className:`text-sm font-medium`,children:s(`1xjKoZ`,`A newer version of this sample is available`)}),(0,H.jsx)(`p`,{className:`mt-1 text-xs text-muted-foreground`,children:s(`2Ye9wD`,`This sample was created by an earlier version of kapi. Reset it to get the latest content and configuration — your current copy is backed up first.`)}),(0,H.jsxs)(`div`,{className:`mt-3 flex gap-2`,children:[(0,H.jsxs)(E,{size:`sm`,onClick:()=>g?.(),children:[(0,H.jsx)(oe,{size:12}),s(`1UEqVW`,`Reset to latest`)]}),(0,H.jsx)(E,{size:`sm`,variant:`outline`,onClick:ce,children:s(`2U8XfB`,`Keep current`)})]})]})]})}),(0,H.jsxs)(`div`,{className:`mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,H.jsx)(Pe,{icon:(0,H.jsx)(ee,{size:16}),title:s(`bdECi`,`Check`),description:s(`2robob`,`Verify structure, brand, and placeholders`),onClick:()=>l(`checks`)}),(0,H.jsx)(Pe,{icon:(0,H.jsx)(h,{size:16}),title:s(`25KjwG`,`Flows`),description:k>0?s(`4v3lIL`,`{count} flow(s) defined`,{count:k}):s(`3ahfLk`,`Build your first flow`),onClick:()=>l(`flows`)}),(0,H.jsx)(Pe,{icon:(0,H.jsx)(S,{size:16}),title:s(`3Wwo9o`,`Tools`),description:s(`l47pm`,`Run individual tools on files`),onClick:()=>l(`tools`)}),(0,H.jsx)(Pe,{icon:(0,H.jsx)(y,{size:16}),title:s(`HIEtF`,`Settings`),description:s(`3y4FjI`,`Languages, plugins, processing`),onClick:()=>l(`project-settings`)})]}),n&&(0,H.jsx)(xt,{project:e,onUpdate:r??(()=>{}),tabID:n,flows:e.flows,onRunFlow:a,formatList:b,basePath:x,status:p,convergence:te}),k===0&&(0,H.jsx)(fe,{icon:(0,H.jsx)(h,{size:24,className:`text-muted-foreground/50`}),title:s(`1CrUtt`,`No flows defined yet.`),action:(0,H.jsx)(E,{variant:`link`,size:`sm`,onClick:()=>l(`flows`),className:`h-auto px-0`,children:s(`uOItw`,`Create your first flow`)})})]})}var V,H,U=t((()=>{a(),V=e(n(),1),C(),Oe(),ze(),Ue(),Et(),H=r(),Dt.__docgenInfo={description:``,methods:[],displayName:`HomePage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},displayName:{required:!0,tsType:{name:`string`},description:``},tabID:{required:!1,tsType:{name:`string`},description:``},onUpdate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:`Persist project edits made on the merged collection surface.`},onRunFlow:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(
  flowName: string,
  flow: FlowSpec,
  opts?: { scopePaths?: string[]; scopeLabel?: string },
) => void`,signature:{arguments:[{type:{name:`string`},name:`flowName`},{type:{name:`FlowSpec`},name:`flow`},{type:{name:`signature`,type:`object`,raw:`{ scopePaths?: string[]; scopeLabel?: string }`,signature:{properties:[{key:`scopePaths`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}},{key:`scopeLabel`,value:{name:`string`,required:!1}}]}},name:`opts`}],return:{name:`void`}}},description:``},onNavigate:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(view: string) => void`,signature:{arguments:[{type:{name:`string`},name:`view`}],return:{name:`void`}}},description:``},pluginsResolved:{required:!1,tsType:{name:`boolean`},description:`When false, plugin requirements are unmet — show warning banner.`},pluginIssues:{required:!1,tsType:{name:`Array`,elements:[{name:`PluginIssue`}],raw:`PluginIssue[]`},description:`Details of unsatisfied plugin requirements.`},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook/tests — skips api.getProjectStatus().`},convergence:{required:!1,tsType:{name:`ConvergenceReport`},description:`Pre-loaded convergence for Storybook/tests — skips api.getConvergence().`},onResetSample:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Refresh this sample to the version bundled with the current kapi.`},sampleInfo:{required:!1,tsType:{name:`SampleInfo`},description:`Pre-loaded sample info for Storybook — skips api.getSampleInfo().`},formatList:{required:!1,tsType:{name:`Array`,elements:[{name:`unknown`}],raw:`import("../types/api").FormatInfo[]`},description:`Pre-loaded formats for Storybook — forwarded to CollectionsPanel.`},basePath:{required:!1,tsType:{name:`string`},description:`Pre-loaded base path for Storybook — forwarded to CollectionsPanel.`}}}})),W,G,K,Ot,q,J,Y,X,Z,Q,kt;t((()=>{U(),{fn:W}=__STORYBOOK_MODULE_TEST__,G={title:`Pages/HomePage`,component:Dt,tags:[`autodocs`],args:{tabID:`tab-1`,onUpdate:W(),onRunFlow:W(),onNavigate:W(),onResetSample:W(),basePath:`/Users/dev/projects/acme`,formatList:[{name:`json`,display_name:`JSON`,extensions:[`.json`],has_reader:!0,has_writer:!0,has_schema:!1},{name:`markdown`,display_name:`Markdown`,extensions:[`.md`],has_reader:!0,has_writer:!0,has_schema:!1}]}},K={args:{displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},plugins:{okapi:{framework_version:`^1.47.0`,format_priority:200}},preset:`nextjs`,content:[{name:`Website`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]},{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`}],flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}}}},Ot={args:{displayName:`Starter Project`,project:{version:`v1`,name:`Starter Project`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},content:[{path:`src/locales/en.json`,format:{name:`json`}}]}}},q={args:{...K.args,displayName:`KapiMart`,project:{version:`v1`,name:`KapiMart`,defaults:{source_language:`en-US`,target_languages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},content:[{name:`Website`,base:`web/en-US`,items:[{path:`web/en-US/**/*.md`,target:`web/{lang}`,format:{name:`markdown`}}]},{name:`Online Store`,base:`src/en-US`,items:[{path:`src/en-US/*.{json,yaml,properties,html}`,target:`src/{lang}`}]},{name:`Contracts`,base:`legal/en-US`,items:[{path:`legal/en-US/*.{docx,xlsx}`,target:`legal/{lang}`}]},{name:`Templates`,base:`marketing/en-US`,items:[{path:`marketing/en-US/*.{pptx,docx}`,target:`marketing/{lang}`}]}],flows:{"pseudo-translate":{steps:[{tool:`pseudo-translate`}]},translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/kapimart/kapimart.kapi`,projectName:`KapiMart`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"de-DE":245,"fr-FR":191,"ja-JP":110,"nb-NO":100,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Online Store`,blockCount:349,coverage:{"de-DE":349,"fr-FR":349,"ja-JP":175,"nb-NO":175,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Contracts`,blockCount:80,coverage:{"de-DE":80,"fr-FR":0,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]},{name:`Templates`,blockCount:25,coverage:{"de-DE":25,"fr-FR":12,"ja-JP":0,"nb-NO":0,"ar-SA":0},targetLanguages:[`de-DE`,`fr-FR`,`ja-JP`,`nb-NO`,`ar-SA`]}]},convergence:{project:`KapiMart`,review:[],locales:[{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Online Store`,locale:`de-DE`,total:349,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Contracts`,locale:`de-DE`,total:80,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Templates`,locale:`de-DE`,total:25,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:78,reviewed:30},gated:!0,shippable:!1},{collection:`Online Store`,locale:`fr-FR`,total:349,pct:{translated:100,reviewed:60},gated:!0,shippable:!1},{collection:`Contracts`,locale:`fr-FR`,total:80,pct:{},gated:!0,shippable:!1},{collection:`Templates`,locale:`fr-FR`,total:25,pct:{translated:48},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`Online Store`,locale:`ja-JP`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`nb-NO`,total:245,pct:{translated:41},gated:!0,shippable:!1},{collection:`Online Store`,locale:`nb-NO`,total:349,pct:{translated:50},gated:!0,shippable:!1},{collection:`Website`,locale:`ar-SA`,total:245,pct:{},gated:!0,shippable:!1}]}}},J={args:{...K.args,displayName:`Acme App Localization`,project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{name:`Website`,items:[{path:`docs/**/*.md`,format:{name:`markdown`}}]},{name:`UI Strings`,items:[{path:`src/i18n/en/*.json`}]},{name:`Emails`,items:[{path:`emails/**/*.html`}]}],flows:{translate:{steps:[{tool:`translate`}]}}},status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!0,collections:[{name:`Website`,blockCount:245,coverage:{"fr-FR":245,"de-DE":191,"ja-JP":110},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`UI Strings`,blockCount:88,coverage:{"fr-FR":88,"de-DE":40,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]},{name:`Emails`,blockCount:32,coverage:{"fr-FR":16,"de-DE":0,"ja-JP":0},targetLanguages:[`fr-FR`,`de-DE`,`ja-JP`]}]}}},Y={args:{...J.args,convergence:{project:`Acme App Localization`,review:[],locales:[{collection:`Website`,locale:`fr-FR`,total:245,pct:{translated:100,reviewed:100,"signed-off":100},gated:!0,shippable:!0},{collection:`Website`,locale:`de-DE`,total:245,pct:{translated:78,reviewed:40},gated:!0,shippable:!1},{collection:`Website`,locale:`ja-JP`,total:245,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`fr-FR`,total:88,pct:{translated:100,reviewed:100},gated:!0,shippable:!0},{collection:`UI Strings`,locale:`de-DE`,total:88,pct:{translated:45},gated:!0,shippable:!1},{collection:`UI Strings`,locale:`ja-JP`,total:88,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`fr-FR`,total:32,pct:{translated:50},gated:!0,shippable:!1},{collection:`Emails`,locale:`de-DE`,total:32,pct:{},gated:!0,shippable:!1},{collection:`Emails`,locale:`ja-JP`,total:32,pct:{},gated:!0,shippable:!1}]}}},X={args:{...K.args,status:{projectPath:`/Users/dev/projects/acme/acme.kapi`,projectName:`Acme App Localization`,hasData:!1,collections:[]}}},Z={args:{...q.args,status:{...q.args.status,stale:!0}}},Q={args:{...K.args,displayName:`KapiMart`,sampleInfo:{is_sample:!0,name:`kapimart`,display_name:`KapiMart`,on_disk_revision:1,current_revision:2,upgrade_available:!0}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`{
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
}`,...Ot.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`A sample opened by a newer kapi than the one that scaffolded it.`,...Q.parameters?.docs?.description}}},kt=[`Default`,`NoFlows`,`WithCoverage`,`ThreeLanguages`,`WithShipGates`,`NeverExtracted`,`StaleCounts`,`SampleUpgradeAvailable`]}))();export{K as Default,X as NeverExtracted,Ot as NoFlows,Q as SampleUpgradeAvailable,Z as StaleCounts,J as ThreeLanguages,q as WithCoverage,Y as WithShipGates,kt as __namedExportsOrder,G as default};