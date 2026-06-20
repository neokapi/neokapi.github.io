const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/transformers.web-eISDemhD.js","assets/preload-helper-DRGloZ2I.js","assets/ooxml-Bm6Z3b5p.js","assets/dist-Buyz9pjO.js"])))=>i.map(i=>d[i]);
import{c as e,i as t,n,o as r,t as i}from"./preload-helper-DRGloZ2I.js";import{t as a}from"./react-CTEnZGpN.js";import{t as o}from"./jsx-runtime-Co6hkppD.js";import{n as s,r as c,t as l}from"./runtime-CI09VOSa.js";import{Mn as u,Ot as d,R as f,Rt as p,Xi as m,bi as h,bt as g,ca as _,g as v,i as y,ia as b,ii as x,ir as S,mr as C,ni as w,oi as T,t as E,wi as D}from"./lucide-react-O4D7m_HM.js";import{t as O}from"./utils-DHlaFoUF.js";import{t as ee}from"./portal-theme-B3_1pP3b.js";import{t as k}from"./button-D6zYGAvL.js";import{_ as A,f as te,g as ne,m as re,t as ie}from"./src-1sxLKN-V.js";import{Bt as ae,Gt as oe,Jt as se,Kt as ce,Lt as le,Qt as ue,Rt as de,Ut as fe,Vt as pe,Y as me,Zt as he,_t as ge,bt as _e,ht as ve,i as j,mt as ye,o as be,qt as xe,vt as Se,yt as Ce,zt as we}from"./iframe-cAjmkS5E.js";import{C as Te,F as Ee,M as De,T as Oe,_ as ke,c as Ae,h as je,i as Me,m as Ne,t as Pe,x as Fe,y as Ie}from"./preview-Bw6bFm7y.js";import{n as Le,r as Re}from"./src-DfaLGNan.js";import{c as ze,o as Be,t as Ve}from"./FlowEditor-CA0XX-HR.js";import{t as He}from"./src-LTaQXIrk.js";import{a as Ue,c as We,i as Ge,l as Ke,n as qe,o as Je,s as Ye,t as Xe}from"./FileSelectorField-Bw7kdUpD.js";import{c as Ze,i as Qe,l as $e,o as et,s as tt,u as M}from"./ProjectExplorer-CBvP0L1m.js";import{c as nt,i as rt,n as it,s as at}from"./samples-CFidEDnv.js";import{n as ot,t as st}from"./OutputView-aKngZ0wZ.js";import{c as ct,i as lt,n as ut,o as dt}from"./SearchReplaceWidget-BFTfHFzz.js";function ft(e,t,n,r){let i=new Map;t.forEach((e,t)=>i.set(e.id,t));let a=new Map;for(let t of e){if(t.ts>r)break;if(!t.partId)continue;let e=a.get(t.partId),n=t.meta?.worker??e?.worker;e&&e.lastEvent.type===`exit`?a.set(t.partId,{lastEvent:t,prevExit:e.lastEvent,worker:n}):a.set(t.partId,{lastEvent:t,prevExit:e?.prevExit,worker:n})}let o=[],s=new Set,c={};for(let e=0;e<t.length-1;e++)c[`${t[e].id}->${t[e+1].id}`]=0;for(let[l,u]of a){let{lastEvent:a,worker:d}=u,f=n[l]?.initial;if(!f)continue;let p=i.get(a.nodeId);if(p!==void 0){if(a.type===`enter`)s.add(a.nodeId),o.push({partId:l,partType:f.type,position:`node`,nodeId:a.nodeId,summary:f.summary,worker:d});else if(a.type===`exit`){let n=p+1;if(n<t.length){let i=null;for(let r of e)if(r.partId===l&&r.type===`enter`&&r.nodeId===t[n].id){i=r.ts;break}if(i!==null&&i<=r)continue;let s=`${t[p].id}->${t[n].id}`;c[s]=(c[s]||0)+1;let u=.5;if(i!==null){let e=i-a.ts;e>0&&(u=Math.min(1,(r-a.ts)/e))}else u=Math.min(.9,(r-a.ts)/200);o.push({partId:l,partType:f.type,position:`edge`,edgeIndex:p,progress:u,summary:f.summary})}}}}return{particles:o,channelFills:c,activeNodes:s}}function pt(e,t,n){if(e.length===0)return`Ready — nothing in the pipeline yet. Press Next to read the first part.`;let r=e=>t.find(t=>t.id===e)?.label??e,i=new Map;for(let t of e){let e=`${t.type}:${t.nodeId}`,n=i.get(e);n||(n={type:t.type,node:t.nodeId,parts:new Set},i.set(e,n)),t.partId&&n.parts.add(t.partId)}let a=e=>e===`enter`?`entered`:e===`exit`?`left`:e,o=[];for(let e of i.values()){let t=e.parts.size||1;if(t===1&&e.type===`exit`){let t=n[[...e.parts][0]]?.afterNode?.[e.node];if(t?.targetText){o.push(`${t.id||`a part`} left ${r(e.node)} → "${mt(t.targetText,32)}"`);continue}}o.push(`${t} ${t===1?`part`:`parts`} ${a(e.type)} ${r(e.node)}`)}return o.join(`; `)}function mt(e,t){return e.length>t?e.slice(0,t)+`…`:e}function ht(e){let{events:t,nodes:n,parts:r,initialSpeed:i=3}=e,a=(0,gt.useMemo)(()=>{let e=Array.from(new Set(t.map(e=>e.ts))).sort((e,t)=>e-t);return e[0]===0?e:[0,...e]},[t]),o=a.length>0?a[a.length-1]:0,[s,c]=(0,gt.useState)(`step`),[l,u]=(0,gt.useState)(!1),[d,f]=(0,gt.useState)(0),[p,m]=(0,gt.useState)(i);(0,gt.useEffect)(()=>{f(0),u(!1),c(`step`)},[a]);let h=(0,gt.useCallback)(e=>Math.max(0,Math.min(e,a.length-1)),[a.length]),g=(0,gt.useCallback)(e=>{u(!1),c(`step`),f(h(e))},[h]),_=(0,gt.useCallback)(()=>{c(`step`),f(e=>h(e+1))},[h]),v=(0,gt.useCallback)(()=>{u(!1),c(`step`),f(e=>h(e-1))},[h]),y=(0,gt.useCallback)(()=>{u(!1),c(`step`),f(0)},[]),b=(0,gt.useCallback)(e=>m(e),[]),x=(0,gt.useCallback)(()=>{c(`play`),u(!0),f(e=>e>=a.length-1?0:e)},[a.length]),S=(0,gt.useCallback)(()=>u(!1),[]);(0,gt.useEffect)(()=>{if(!l)return;if(d>=a.length-1){u(!1);return}let e=setTimeout(()=>f(e=>h(e+1)),Math.max(80,1e3/p));return()=>clearTimeout(e)},[l,d,a.length,p,h]);let C=a[d]??0,{particles:w,channelFills:T,activeNodes:E}=(0,gt.useMemo)(()=>ft(t,n,r,C),[t,n,r,C]),D=(0,gt.useMemo)(()=>{let e=d===0?[]:t.filter(e=>e.ts===C);return{time:C,events:e,summary:pt(e,n,r),affectedPartIds:Array.from(new Set(e.map(e=>e.partId).filter(Boolean)))}},[t,n,r,C,d]);return{state:{mode:s,playing:l,frameIndex:d,frameCount:a.length,time:C,duration:o,speed:p,atStart:d<=0,atEnd:d>=a.length-1},particles:w,channelFills:T,activeNodes:E,delta:D,stepNext:_,stepPrev:v,stepTo:g,play:x,pause:S,setSpeed:b,reset:y}}var gt,_t=t((()=>{gt=e(a(),1)}));function vt(e){return e.bridge?At:Dt}function yt(e){let t=e.concurrency??0;return t>1?Ot+(t-1)*kt:Ot}function bt(e){return Math.max(Ot,...e.map(yt))}function xt(e,t){let n=Mt;for(let r=0;r<t;r++)n+=vt(e[r])+jt;return n}function St(e,t,n){return{x:xt(e,t)+vt(e[t])/2,y:Nt+n/2}}function Ct(e){if(e.length===0)return Mt*2;let t=Mt;for(let n=0;n<e.length;n++)t+=vt(e[n]),n<e.length-1&&(t+=jt);return t+Mt}function wt(e,t,n){return e+(t-e)*n}function Tt({nodes:e,channelSize:t,particles:n,channelFills:r,activeNodes:i,selectedPartId:a,onPartClick:o}){let s=bt(e),c=Ct(e),u=Nt*2+s,d=new Map;e.forEach((e,t)=>d.set(e.id,t));let f=e=>e.position===`node`?`n:${e.nodeId}:${e.worker??`_`}`:`e:${e.edgeIndex}`,p=new Map;for(let e of n){let t=f(e);p.set(t,(p.get(t)??0)+1)}let m=new Map,h=n.map(e=>{let t=f(e),n=p.get(t)??1,r=m.get(t)??0;if(m.set(t,r+1),n<=1)return 0;let i=Math.min(Pt,s/n);return(r-(n-1)/2)*i});return(0,Et.jsxs)(`svg`,{width:c,height:u+30,viewBox:`0 0 ${c} ${u+30}`,className:M.svgGraph,children:[(0,Et.jsx)(`defs`,{children:(0,Et.jsx)(`marker`,{id:`arrowhead`,markerWidth:`8`,markerHeight:`6`,refX:`8`,refY:`3`,orient:`auto`,children:(0,Et.jsx)(`polygon`,{points:`0 0, 8 3, 0 6`,className:M.arrowhead})})}),e.map((n,i)=>{if(i>=e.length-1)return null;let a=St(e,i,s),o=St(e,i+1,s),c=a.x+vt(n)/2,l=o.x-vt(e[i+1])/2,u=a.y,d=(l-c)*.3,f=`M ${c} ${u} C ${c+d} ${u}, ${l-d} ${u}, ${l} ${u}`,p=r[`${n.id}->${e[i+1].id}`]||0,m=Math.min(1,p/Math.max(1,t)),h=(c+l)/2-30,g=u+s/2+8;return(0,Et.jsxs)(`g`,{children:[(0,Et.jsx)(`path`,{d:f,className:M.edgePath,markerEnd:`url(#arrowhead)`}),(0,Et.jsx)(`rect`,{x:h,y:g,width:60,height:6,rx:3,ry:3,className:M.bufferMeterBg}),(0,Et.jsx)(`rect`,{x:h,y:g,width:60*m,height:6,rx:3,ry:3,className:M.bufferMeterFill}),p>0&&(0,Et.jsx)(`text`,{x:h+60+6,y:g+6/2+1,className:M.bufferLabel,children:p})]},`edge-${i}`)}),e.map((t,r)=>{let a=xt(e,r),o=yt(t),c=Nt+(s-o)/2,u=vt(t),d=i.has(t.id),f=It[t.type]||It.tool,p=t.concurrency??0;return(0,Et.jsxs)(`g`,{className:d?M.nodeActive:void 0,children:[(0,Et.jsx)(`rect`,{x:a,y:c,width:u,height:o,fill:f.fill,stroke:f.stroke,className:M.nodeRect}),t.bridge&&(0,Et.jsx)(`rect`,{x:a+12,y:c+12,width:u-24,height:o-24,fill:`none`,stroke:f.stroke,strokeDasharray:`4 3`,className:M.nodeRect,opacity:.6}),(0,Et.jsx)(`text`,{x:a+u/2,y:c+18,className:M.nodeTypeLabel,children:t.type.replace(`bridge-`,`bridge `)}),(0,Et.jsx)(`text`,{x:a+u/2,y:c+38,className:M.nodeLabel,children:t.label}),t.bridge&&(0,Et.jsx)(`text`,{x:a+u/2,y:c+o-10,className:M.bridgeLabel,children:t.bridge.filterClass}),p>1&&(0,Et.jsx)(`g`,{children:Array.from({length:p},(e,r)=>{let i=c+52+r*kt,o=u-20,s=kt-4,d=n.some(e=>e.position===`node`&&e.nodeId===t.id&&e.worker===r);return(0,Et.jsxs)(`g`,{children:[(0,Et.jsx)(`rect`,{x:a+10,y:i,width:o,height:s,rx:4,ry:4,fill:d?f.stroke:`transparent`,opacity:d?.15:1,stroke:f.stroke,strokeWidth:1,strokeDasharray:d?`none`:`3 2`,strokeOpacity:.4}),(0,Et.jsx)(`text`,{x:a+18,y:i+s/2+1,className:M.workerLabel,children:l(`4cHPAl`,`w${r}`,{wi:r})})]},`lane-${r}`)})})]},t.id)}),n.map((t,n)=>{let r,i;if(t.position===`node`&&t.nodeId){let n=d.get(t.nodeId);if(n===void 0)return null;let a=e[n],o=St(e,n,s);r=o.x,i=o.y,(a.concurrency??0)>1&&t.worker!==void 0&&(i=Nt+(s-yt(a))/2+52+t.worker*kt+(kt-4)/2,r=o.x+16)}else if(t.position===`edge`&&t.edgeIndex!==void 0){let n=t.edgeIndex;if(n>=e.length-1)return null;let a=St(e,n,s),o=St(e,n+1,s);r=wt(a.x+vt(e[n])/2,o.x-vt(e[n+1])/2,t.progress??.5),i=a.y}else return null;i+=h[n];let c=Ft[t.partType]||`#94a3b8`,l=t.partId===a,u=l?9:7;return(0,Et.jsxs)(`g`,{onClick:()=>o(t.partId),style:{cursor:`pointer`},children:[l&&(0,Et.jsx)(`circle`,{cx:r,cy:i,r:u+4,fill:`none`,stroke:c,strokeWidth:2,opacity:.5,className:`${M.particle} ${M.particleSelected}`}),(0,Et.jsx)(`circle`,{cx:r,cy:i,r:u,fill:c,stroke:`white`,strokeWidth:1.5,className:M.particle}),(0,Et.jsx)(`title`,{children:t.summary})]},t.partId)})]})}var Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt=t((()=>{c(),a(),$e(),Et=o(),Dt=160,Ot=80,kt=24,At=240,jt=120,Mt=60,Nt=60,Pt=13,Ft={Block:`#3b82f6`,LayerStart:`#22c55e`,LayerEnd:`#22c55e`,Data:`#94a3b8`,Media:`#f59e0b`,GroupStart:`#a855f7`,GroupEnd:`#a855f7`},It={reader:{fill:`rgba(34, 197, 94, 0.12)`,stroke:`#22c55e`},tool:{fill:`rgba(100, 116, 139, 0.12)`,stroke:`#64748b`},writer:{fill:`rgba(59, 130, 246, 0.12)`,stroke:`#3b82f6`},"bridge-reader":{fill:`rgba(34, 197, 94, 0.12)`,stroke:`#22c55e`},"bridge-writer":{fill:`rgba(59, 130, 246, 0.12)`,stroke:`#3b82f6`}},Tt.__docgenInfo={description:``,methods:[],displayName:`FlowGraph`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`FlowNode`}],raw:`FlowNode[]`},description:``},channelSize:{required:!0,tsType:{name:`number`},description:``},particles:{required:!0,tsType:{name:`Array`,elements:[{name:`Particle`}],raw:`Particle[]`},description:``},channelFills:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`number`}],raw:`Record<string, number>`},description:``},activeNodes:{required:!0,tsType:{name:`Set`,elements:[{name:`string`}],raw:`Set<string>`},description:``},selectedPartId:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},onPartClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(partId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`partId`}],return:{name:`void`}}},description:``}}}}));function Rt({state:e,onStepPrev:t,onStepNext:n,onPlay:r,onPause:i,onReset:a,onSeek:o,onSetSpeed:c}){return(0,zt.jsxs)(`div`,{className:M.stepBar,children:[(0,zt.jsx)(`button`,{className:M.stepButton,onClick:a,disabled:e.atStart,title:l(`2MHeLQ`,`Back to start`),children:(0,zt.jsx)(f,{size:15})}),(0,zt.jsx)(`button`,{className:M.stepButton,onClick:t,disabled:e.atStart,title:l(`43N9AE`,`Previous step`),children:s(`14RtPM`,`{=m0} Prev`,{"=m0":(0,zt.jsx)(x,{size:15})})}),(0,zt.jsx)(`button`,{className:M.stepButtonPrimary,onClick:n,disabled:e.atEnd,title:l(`ImuZv`,`Advance one step`),children:s(`1oJ20O`,`Next {=m0}`,{"=m0":(0,zt.jsx)(w,{size:15})})}),(0,zt.jsx)(`span`,{className:M.divider}),(0,zt.jsxs)(`button`,{className:M.stepButton,onClick:e.playing?i:r,disabled:e.atEnd&&!e.playing,title:e.playing?l(`2zzFNh`,`Pause`):l(`1B6g8J`,`Play through`),children:[e.playing?(0,zt.jsx)(d,{size:15}):(0,zt.jsx)(g,{size:15}),e.playing?`Pause`:`Play`]}),(0,zt.jsx)(`div`,{className:M.speedGroup,children:Bt.map(t=>(0,zt.jsx)(`button`,{className:`${M.speedButton} ${e.speed===t?M.speedButtonActive:``}`,onClick:()=>c(t),title:`${t} steps per second`,children:l(`11Q4ix`,`${t}×`,{fps:t})},t))}),(0,zt.jsx)(`span`,{className:M.frameCounter,children:l(`3vCUwh`,`step ${e.frameIndex} / ${e.frameCount-1}`,{"state.frameIndex":e.frameIndex,value:e.frameCount-1})}),(0,zt.jsx)(`input`,{type:`range`,className:M.scrubber,min:0,max:Math.max(0,e.frameCount-1),value:e.frameIndex,onChange:e=>o(Number(e.target.value)),"aria-label":l(`2gHchg`,`Step position`)}),(0,zt.jsx)(`div`,{className:M.legend,children:Vt.map(e=>(0,zt.jsxs)(`span`,{className:M.legendItem,children:[(0,zt.jsx)(`span`,{className:`inline-block size-2.5 rounded-full ${e.cls}`}),e.label]},e.label))})]})}var zt,Bt,Vt,Ht=t((()=>{c(),a(),E(),$e(),zt=o(),Bt=[1,2,4,8],Vt=[{label:`Block`,cls:`bg-blue-500`},{label:`Layer`,cls:`bg-emerald-500`},{label:`Group`,cls:`bg-violet-500`},{label:`Data`,cls:`bg-slate-400`},{label:`Media`,cls:`bg-amber-500`}],Rt.__docgenInfo={description:``,methods:[],displayName:`StepControls`,props:{state:{required:!0,tsType:{name:`FlowPlaybackState`},description:``},onStepPrev:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onStepNext:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onPlay:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onPause:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onReset:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onSeek:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(frameIndex: number) => void`,signature:{arguments:[{type:{name:`number`},name:`frameIndex`}],return:{name:`void`}}},description:``},onSetSpeed:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(fps: number) => void`,signature:{arguments:[{type:{name:`number`},name:`fps`}],return:{name:`void`}}},description:``}}}}));function Ut({partId:e,parts:t,nodes:n,activeNodeIds:r=[],onOpenDetails:i}){if(!e||!t[e])return(0,Wt.jsx)(`div`,{className:M.inspector,children:(0,Wt.jsx)(`div`,{className:M.inspectorHint,children:l(`3eEZ9c`,`Step through the flow, or click a part, to inspect it.`)})});let a=t[e],o=a.initial,s=new Set(r);return(0,Wt.jsxs)(`div`,{className:M.inspector,children:[(0,Wt.jsxs)(`div`,{className:M.inspectorTitleRow,children:[(0,Wt.jsx)(`div`,{className:M.inspectorTitle,children:l(`1TMWH4`,`${o.type} — ${o.id}`,{"initial.type":o.type,"initial.id":o.id})}),i&&(0,Wt.jsx)(`button`,{className:M.fileMetaBtn,onClick:i,children:l(`3YDEoI`,`Details…`)})]}),o.sourceText&&(0,Wt.jsxs)(`div`,{className:M.inspectorField,children:[(0,Wt.jsx)(`div`,{className:M.inspectorLabel,children:l(`3dCAjD`,`Source`)}),(0,Wt.jsx)(`div`,{className:M.inspectorValue,children:o.sourceText})]}),o.targetText&&(0,Wt.jsxs)(`div`,{className:M.inspectorField,children:[(0,Wt.jsx)(`div`,{className:M.inspectorLabel,children:l(`OHBuW`,`Target`)}),(0,Wt.jsx)(`div`,{className:M.inspectorValue,children:o.targetText})]}),(0,Wt.jsxs)(`div`,{className:M.inspectorField,children:[(0,Wt.jsx)(`div`,{className:M.inspectorLabel,children:l(`1KuuId`,`Summary`)}),(0,Wt.jsx)(`div`,{className:M.inspectorValue,children:o.summary})]}),a.afterNode&&(0,Wt.jsxs)(`div`,{className:M.nodeHistory,children:[(0,Wt.jsx)(`div`,{className:M.inspectorLabel,children:l(`14CmG0`,`Transformations`)}),n.map(e=>{let t=a.afterNode?.[e.id];if(!t)return null;let n=s.has(e.id);return(0,Wt.jsxs)(`div`,{className:`${M.nodeHistoryItem} ${n?M.nodeHistoryItemActive:``}`,children:[(0,Wt.jsx)(`span`,{className:M.nodeHistoryLabel,children:e.label}),(0,Wt.jsxs)(`div`,{children:[(0,Wt.jsx)(`div`,{className:M.nodeHistoryValue,children:t.summary}),t.targetText&&(0,Wt.jsx)(`div`,{className:M.nodeHistoryValue,children:l(`2wsCah`,`Target: ${t.targetText}`,{"after.targetText":t.targetText})})]})]},e.id)})]})]})}var Wt,Gt=t((()=>{c(),a(),$e(),Wt=o(),Ut.__docgenInfo={description:``,methods:[],displayName:`PartInspector`,props:{partId:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},parts:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`PartSnapshotSet`}],raw:`Record<string, PartSnapshotSet>`},description:``},nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`FlowNode`}],raw:`FlowNode[]`},description:``},activeNodeIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Node ids touched at the current step — highlighted in the history.`,defaultValue:{value:`[]`,computed:!1}},onOpenDetails:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Opens the full Part details modal for the selected part, if provided.`}}}})),Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn=t((()=>{Kt=`_overlay_17103_1`,qt=`_modal_17103_13`,Jt=`_header_17103_23`,Yt=`_kind_17103_32`,Xt=`_id_17103_44`,Zt=`_badge_17103_49`,Qt=`_close_17103_58`,$t=`_body_17103_73`,en=`_section_17103_77`,tn=`_sectionTitle_17103_81`,nn=`_localeRow_17103_89`,rn=`_locale_17103_89`,an=`_mono_17103_104`,on=`_muted_17103_110`,sn=`_props_17103_114`,cn=`_stages_17103_115`,ln=`_propKey_17103_138`,un=`_stageLabel_17103_139`,dn=`_propVal_17103_146`,fn=`_rawToggle_17103_150`,pn=`_raw_17103_150`,mn={overlay:Kt,modal:qt,header:Jt,kind:Yt,id:Xt,badge:Zt,close:Qt,body:$t,section:en,sectionTitle:tn,localeRow:nn,locale:rn,mono:an,muted:on,props:sn,stages:cn,propKey:ln,stageLabel:un,propVal:dn,rawToggle:fn,raw:pn}}));function gn({set:e,nodes:t,onClose:n}){let[r,i]=(0,vn.useState)(!1);if((0,vn.useEffect)(()=>{if(!e)return;let t=e=>{e.key===`Escape`&&(e.stopPropagation(),n())};document.addEventListener(`keydown`,t,!0);let r=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,t,!0),document.body.style.overflow=r}},[e,n]),!e)return null;let{initial:a}=e,o=a;for(let n=t.length-1;n>=0;n--){let r=e.afterNode?.[t[n].id];if(r){o=r;break}}let s=o.detail??a.detail,c=[{label:`read`,snap:a}];for(let n of t){let t=e.afterNode?.[n.id];t&&c.push({label:n.label,snap:t})}let u=s?.properties??{},d=Object.keys(u);return(0,N.jsx)(`div`,{className:mn.overlay,onClick:n,role:`presentation`,children:(0,N.jsxs)(`div`,{className:mn.modal,role:`dialog`,"aria-modal":`true`,"aria-label":`Part ${a.id} details`,onClick:e=>e.stopPropagation(),children:[(0,N.jsxs)(`div`,{className:mn.header,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`span`,{className:mn.kind,children:a.type}),(0,N.jsx)(`span`,{className:mn.id,children:a.id}),s?.translatable&&(0,N.jsx)(`span`,{className:mn.badge,children:l(`273q70`,`translatable`)})]}),(0,N.jsx)(`button`,{className:mn.close,onClick:n,"aria-label":l(`3AjCI4`,`Close`),children:(0,N.jsx)(y,{size:16})})]}),(0,N.jsxs)(`div`,{className:mn.body,children:[s?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(_n,{title:l(`MnhlS`,`Source`),children:(0,N.jsx)(Ee,{runs:s.source??[]})}),s.targets&&Object.keys(s.targets).length>0&&(0,N.jsx)(_n,{title:l(`3gpW2G`,`Targets`),children:Object.entries(s.targets).map(([e,t])=>(0,N.jsxs)(`div`,{className:mn.localeRow,children:[(0,N.jsx)(`span`,{className:mn.locale,children:e}),(0,N.jsx)(Ee,{runs:t})]},e))}),d.length>0&&(0,N.jsx)(_n,{title:l(`2Snn2a`,`Properties`),children:(0,N.jsx)(`table`,{className:mn.props,children:(0,N.jsx)(`tbody`,{children:d.map(e=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{className:mn.propKey,children:e}),(0,N.jsx)(`td`,{className:mn.propVal,children:u[e]})]},e))})})})]}):(0,N.jsx)(_n,{title:l(`1JRzjX`,`Summary`),children:(0,N.jsx)(`div`,{className:mn.mono,children:a.summary})}),(0,N.jsx)(_n,{title:l(`1EAMqd`,`Through the pipeline`),children:(0,N.jsxs)(`table`,{className:mn.stages,children:[(0,N.jsx)(`thead`,{children:(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`th`,{children:l(`1nxA7J`,`Stage`)}),(0,N.jsx)(`th`,{children:l(`43zdgY`,`Source`)}),(0,N.jsx)(`th`,{children:l(`FvEip`,`Target`)})]})}),(0,N.jsx)(`tbody`,{children:c.map((e,t)=>(0,N.jsxs)(`tr`,{children:[(0,N.jsx)(`td`,{className:mn.stageLabel,children:e.label}),(0,N.jsx)(`td`,{className:mn.mono,children:e.snap.sourceText||(0,N.jsx)(`span`,{className:mn.muted,children:l(`4ktMln`,`—`)})}),(0,N.jsx)(`td`,{className:mn.mono,children:e.snap.targetText||(0,N.jsx)(`span`,{className:mn.muted,children:l(`4ktMln`,`—`)})})]},t))})]})}),(0,N.jsxs)(_n,{title:l(`3TFTIt`,`Raw`),children:[(0,N.jsx)(`button`,{className:mn.rawToggle,onClick:()=>i(e=>!e),children:l(`2oIu0K`,`${r?`Hide`:`Show`} snapshot JSON`,{value:r?`Hide`:`Show`})}),r&&(0,N.jsx)(`pre`,{className:mn.raw,children:JSON.stringify(e,null,2)})]})]})]})})}function _n({title:e,children:t}){return(0,N.jsxs)(`section`,{className:mn.section,children:[(0,N.jsx)(`h4`,{className:mn.sectionTitle,children:e}),t]})}var vn,N,yn=t((()=>{c(),vn=e(a(),1),E(),Pe(),hn(),N=o(),gn.__docgenInfo={description:``,methods:[],displayName:`PartDetailsModal`,props:{set:{required:!0,tsType:{name:`union`,raw:`PartSnapshotSet | null`,elements:[{name:`PartSnapshotSet`},{name:`null`}]},description:`The selected part's snapshot set, or null to render nothing.`},nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`FlowNode`}],raw:`FlowNode[]`},description:`Pipeline nodes in order, used to label and order the per-stage history.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));function bn({trace:e,showDescription:t=!0}){let[n,r]=(0,xn.useState)(null),[i,a]=(0,xn.useState)(!1),[o,c]=(0,xn.useState)(!1),l=ht({events:e.events,nodes:e.nodes,parts:e.parts}),{delta:u}=l;(0,xn.useEffect)(()=>{i||u.affectedPartIds.length>0&&r(u.affectedPartIds[0])},[u,i]),(0,xn.useEffect)(()=>{r(null),a(!1),c(!1)},[e]);let d=e=>{a(!0),r(e)},f=Array.from(new Set(u.events.map(e=>e.nodeId)));return(0,Sn.jsxs)(`div`,{className:M.wrapper,children:[t&&e.description&&(0,Sn.jsx)(`p`,{className:M.traceDescription,children:e.description}),(0,Sn.jsx)(`div`,{className:M.visualizationArea,children:(0,Sn.jsx)(Tt,{nodes:e.nodes,channelSize:e.channelSize,particles:l.particles,channelFills:l.channelFills,activeNodes:l.activeNodes,selectedPartId:n,onPartClick:d})}),(0,Sn.jsx)(Rt,{state:l.state,onStepPrev:l.stepPrev,onStepNext:l.stepNext,onPlay:l.play,onPause:l.pause,onReset:l.reset,onSeek:l.stepTo,onSetSpeed:l.setSpeed}),(0,Sn.jsx)(`div`,{className:M.narration,children:s(`4yyBX5`,`{=m0} step {frameIndex}/{value} {/=m0} {=m3}{delta.summary}{/=m3}`,{"=m0":(0,Sn.jsxs)(`span`,{className:M.narrationStep,children:[`step `,l.state.frameIndex,`/`,l.state.frameCount-1]}),"=m3":(0,Sn.jsx)(`span`,{children:u.summary})},{frameIndex:l.state.frameIndex,value:l.state.frameCount-1,"delta.summary":u.summary})}),(0,Sn.jsx)(Ut,{partId:n,parts:e.parts,nodes:e.nodes,activeNodeIds:f,onOpenDetails:()=>c(!0)}),(0,Sn.jsx)(gn,{set:o&&n?e.parts[n]:null,nodes:e.nodes,onClose:()=>c(!1)})]})}var xn,Sn,Cn=t((()=>{c(),xn=e(a(),1),_t(),Lt(),Ht(),Gt(),yn(),$e(),Sn=o(),bn.__docgenInfo={description:``,methods:[],displayName:`FlowTracePlayer`,props:{trace:{required:!0,tsType:{name:`FlowTrace`},description:``},showDescription:{required:!1,tsType:{name:`boolean`},description:`Show the trace's prose description above the graph. Default true.`,defaultValue:{value:`true`,computed:!1}}}}}));function wn({files:e,activePath:t,onChange:n,label:r=`Viewing`,className:i}){return e.length<=1?null:(0,Tn.jsxs)(`div`,{className:O(`flex flex-wrap items-center gap-1.5`,i),children:[(0,Tn.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:r}),e.map(e=>{let r=e.path===t;return(0,Tn.jsxs)(k,{size:`xs`,variant:r?`default`:`outline`,className:`gap-1 font-mono`,onClick:()=>n(e.path),title:e.path,children:[(0,Tn.jsx)(Ne,{filename:e.name,size:12,tinted:!r}),e.name]},e.path)})]})}var Tn,En=t((()=>{a(),j(),Pe(),Tn=o(),wn.__docgenInfo={description:``,methods:[],displayName:`ActiveFileSwitcher`,props:{files:{required:!0,tsType:{name:`Array`,elements:[{name:`LibFile`}],raw:`LibFile[]`},description:`The resolved selection (one chip per file).`},activePath:{required:!1,tsType:{name:`string`},description:`The path currently being viewed/run.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(path: string) => void`,signature:{arguments:[{type:{name:`string`},name:`path`}],return:{name:`void`}}},description:``},label:{required:!1,tsType:{name:`string`},description:`Leading label (default "Viewing").`,defaultValue:{value:`"Viewing"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));function Dn({assets:e,defaultSampleId:t,sampleIds:n}){let r=nt(e),i=Ye({sampleIds:n}),[a,o]=(0,On.useState)({mode:`multi`,paths:[(We.find(e=>e.id===t)??We[0]).filename]}),[s,c]=(0,On.useState)(null),[u,d]=(0,On.useState)(null),[f,p]=(0,On.useState)(null),[m,h]=(0,On.useState)(!1),g=(0,On.useMemo)(()=>Je(a,i),[a,i]),_=(0,On.useMemo)(()=>g.find(e=>e.path===s)??g[0],[g,s]);return(0,On.useEffect)(()=>{if(!r.ready||!_)return;let e=!1;return h(!0),p(null),r.inspect(_.name,_.bytes).then(t=>{e||(t.ok&&t.tree?d(t.tree):(p(t.error??`could not inspect file`),d(null)))}).finally(()=>!e&&h(!1)),()=>{e=!0}},[r.ready,r.inspect,_?.path,_?.changedAt]),(0,kn.jsxs)(`div`,{className:`kapi-reference flex flex-col gap-3 text-foreground`,children:[(0,kn.jsx)(Xe,{label:l(`38EHOG`,`Files`),library:i,selection:a,onSelectionChange:o,sampleIds:n}),(0,kn.jsx)(wn,{files:g,activePath:_?.path,onChange:c}),(0,kn.jsxs)(`div`,{className:O(`min-h-[1.4rem] text-sm text-muted-foreground`,f&&`text-destructive`),children:[r.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,r.status===`error`&&`Failed to start: ${r.error}`,r.ready&&m&&`Reading…`,r.ready&&!m&&f&&`Error: ${f}`]}),u&&(0,kn.jsx)(Me,{tree:u})]})}var On,kn,An=t((()=>{c(),On=e(a(),1),j(),at(),qe(),En(),Pe(),Ue(),Ke(),kn=o(),Dn.__docgenInfo={description:``,methods:[],displayName:`AnatomyExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`},defaultSampleId:{required:!1,tsType:{name:`string`},description:`Sample selected on first render (default: first sample).`},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Restrict the offered samples.`}}}}));function jn({assets:e,sampleUrl:t,sampleName:n,samples:r}){let i=nt(e),a=Ye({sampleIds:[]}),[o,s]=(0,Mn.useState)({mode:`multi`,paths:[]}),[c,u]=(0,Mn.useState)(null),[d,f]=(0,Mn.useState)(null),[p,m]=(0,Mn.useState)(null),[h,g]=(0,Mn.useState)(!1),_=(0,Mn.useRef)(!1),v=(0,Mn.useMemo)(()=>r??(t?[{url:t,name:n}]:[]),[r,t,n]);(0,Mn.useEffect)(()=>{if(_.current||v.length===0)return;_.current=!0;let e=!1;return(async()=>{let t=[];for(let e of v)try{let n=await fetch(e.url);if(!n.ok)continue;let r=new Uint8Array(await n.arrayBuffer()),i=e.name??e.url.split(`/`).pop()??`sample.pdf`;t.push(a.addFile(i,r,`sample`))}catch{}!e&&t.length>0&&(s({mode:`multi`,paths:t}),u(t[0]))})(),()=>{e=!0}},[v,a]);let y=(0,Mn.useMemo)(()=>Je(o,a),[o,a]),b=(0,Mn.useMemo)(()=>y.find(e=>e.path===c)??y[0],[y,c]);return(0,Mn.useEffect)(()=>{if(!i.ready||!b){b||f(null);return}let e=!1;return g(!0),m(null),i.inspect(b.name,b.bytes).then(t=>{e||(t.ok&&t.tree?f(t.tree):(m(t.error??`could not parse this PDF`),f(null)))}).finally(()=>!e&&g(!1)),()=>{e=!0}},[i.ready,i.inspect,b?.path,b?.changedAt]),(0,Nn.jsxs)(`div`,{className:`kapi-reference flex flex-col gap-3 text-foreground`,children:[(0,Nn.jsx)(Xe,{label:l(`daSbW`,`PDF`),library:a,selection:o,onSelectionChange:s,sampleIds:[]}),(0,Nn.jsx)(wn,{files:y,activePath:b?.path,onChange:u}),(0,Nn.jsxs)(`div`,{className:p?`min-h-[1.4rem] text-sm text-destructive`:`min-h-[1.4rem] text-sm text-muted-foreground`,children:[i.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,i.status===`error`&&`Failed to start: ${i.error}`,i.ready&&!b&&`Upload a PDF to see it parsed.`,i.ready&&b&&h&&`Parsing PDF (loading PDFium on first use)…`,i.ready&&b&&!h&&p&&`Error: ${p}`]}),d&&b&&(0,Nn.jsx)(Ae,{tree:d,filename:b.name,bytes:b.bytes,defaultTab:`layout`})]})}var Mn,Nn,Pn=t((()=>{c(),Mn=e(a(),1),Pe(),En(),qe(),Ue(),at(),Nn=o(),jn.__docgenInfo={description:``,methods:[],displayName:`PdfExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`},sampleUrl:{required:!1,tsType:{name:`string`},description:`Optional sample PDF fetched on first load so the page shows something.`},sampleName:{required:!1,tsType:{name:`string`},description:`File name for the fetched sample (defaults to the URL's basename).`},samples:{required:!1,tsType:{name:`Array`,elements:[{name:`PdfSampleSpec`}],raw:`PdfSampleSpec[]`},description:`Optional set of bundled sample PDFs. All are fetched and added to the file
switcher; the first is selected on load. Takes precedence over sampleUrl.`}}}}));async function Fn(e={}){var t=e,n=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,i=r&&self.name?.startsWith(`em-pthread`);t.mountExternalData=(e,n)=>{e.startsWith(`./`)&&(e=e.substring(2)),(t.Xc||=new Map).set(e,n)},t.unmountExternalData=()=>{delete t.Xc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let a=e=>async(...n)=>{try{if(t.Yc)throw Error(`Session already started`);let r=t.Yc={Kd:n[0],errors:[]},i=await e(...n);if(t.Yc!==r)throw Error(`Session mismatch`);t.dd?.flush();let a=r.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{t.Yc=null}};t.jsepInit=(e,n)=>{if(e===`webgpu`){[t.dd,t.Ad,t.Ed,t.ed,t.Dd,t.$b,t.Fd,t.Hd,t.Bd,t.Cd,t.Gd]=n;let e=t.dd;t.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),t.jsepGetBuffer=t=>e.getBuffer(t),t.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),t.jsepOnCreateSession=t=>{e.onCreateSession(t)},t.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},t.jsepOnRunStart=t=>e.onRunStart(t),t.Id=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){let e=n[0];[t.Wd,t.sd,t.webnnEnsureTensor,t.td,t.webnnDownloadTensor,t.Rd,t.webnnEnableTraceEvent]=n.slice(1),t.webnnReleaseTensorId=t.sd,t.webnnUploadTensor=t.td,t.webnnRegisterMLContext=t.Rd,t.webnnOnRunStart=t=>e.onRunStart(t),t.webnnOnRunEnd=e.onRunEnd.bind(e),t.webnnOnReleaseSession=t=>{e.onReleaseSession(t)},t.webnnCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),t.webnnRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),t.webnnCreateMLContext=t=>e.createMLContext(t),t.webnnRegisterMLConstant=(n,r,i,a,o,s)=>e.registerMLConstant(n,r,i,a,o,t.Xc,s),t.webnnRegisterGraphInput=e.registerGraphInput.bind(e),t.webnnIsGraphInput=e.isGraphInput.bind(e),t.webnnRegisterGraphOutput=e.registerGraphOutput.bind(e),t.webnnIsGraphOutput=e.isGraphOutput.bind(e),t.webnnCreateTemporaryTensor=e.createTemporaryTensor.bind(e),t.webnnIsGraphInputOutputTypeSupported=e.isGraphInputOutputTypeSupported.bind(e)}};let o=()=>{let e=e=>(...t)=>{let n=sn;return t=e(...t),sn==n?t:new Promise((e,t)=>{mn={resolve:e,reject:t}})};(()=>{for(let n of[`_OrtAppendExecutionProvider`,`_OrtCreateSession`,`_OrtRun`,`_OrtRunWithBinding`,`_OrtBindInput`])t[n]=e(t[n])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),o=void 0};t.asyncInit=()=>{o?.()};var s,c,l=(e,t)=>{throw t},u=import.meta.url,d=``;if(n||r){try{d=new URL(`.`,u).href}catch{}r&&(c=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),s=async e=>{if(C(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)}}var f,p,m,h,g,_,v=console.log.bind(console),y=console.error.bind(console),b=v,x=y,S=!1,C=e=>e.startsWith(`file://`);function w(){Ae.buffer!=E.buffer&&se()}if(i){let e=function(n){try{var r=n.data,i=r.Sc;if(i===`load`){let n=[];self.onmessage=e=>n.push(e),_=()=>{postMessage({Sc:`loaded`});for(let t of n)e(t);self.onmessage=e};for(let e of r.xd)t[e]&&!t[e].proxy||(t[e]=(...t)=>{postMessage({Sc:`callHandler`,wd:e,args:t})},e==`print`&&(b=t[e]),e==`printErr`&&(x=t[e]));Ae=r.Od,se(),p=r.Pd,de(),ma()}else if(i===`run`){(function(e){var t=(w(),A)[e+52>>>2>>>0];e=(w(),A)[e+56>>>2>>>0],Lr(t,t-e),I(t)})(r.Rc),kr(r.Rc,0,0,1,0,0),De(),Yt(r.Rc),T||=(Tr(),!0);try{je(r.Md,r.bd)}catch(e){if(e!=`unwind`)throw e}}else r.target!==`setimmediate`&&(i===`checkMailbox`?T&&Xt():i&&(x(`worker: received unknown command ${i}`),x(r)))}catch(e){throw Ar(),e}};var T=!1;self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}var E,D,O,ee,k,A,te,ne,re,ie,ae,oe=!1;function se(){var e=Ae.buffer;t.HEAP8=E=new Int8Array(e),O=new Int16Array(e),t.HEAPU8=D=new Uint8Array(e),ee=new Uint16Array(e),t.HEAP32=k=new Int32Array(e),t.HEAPU32=A=new Uint32Array(e),te=new Float32Array(e),ne=new Float64Array(e),re=new BigInt64Array(e),ie=new BigUint64Array(e)}function ce(){oe=!0,i?_():Ai.sb()}function le(e){throw x(e=`Aborted(`+e+`)`),S=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),g?.(e),e}function ue(){return{a:{ma:Pi,gb:Ni,g:Pe,J:Ie,f:Ve,o:He,h:Ue,ha:We,b:Ge,T:Ke,Ha:Je,n:Ye,$:et,Xa:tt,Da:M,Fa:nt,Ya:rt,Va:it,Oa:at,Ua:ot,ka:st,Ea:ct,Ba:lt,Wa:ut,Ca:dt,bb:ft,ea:bt,wa:xt,ua:kt,da:jt,O:Mt,H:Nt,va:It,_:Wt,xa:Gt,Ra:Kt,za:Zt,Ia:$t,sa:en,fa:tn,Qa:Yt,_a:nn,R:_n,r:Cn,c:wt,hb:wn,y:Tn,M:En,D:Dn,l:On,s:kn,ib:An,I:jn,S:Mn,j:Nn,u:Pn,q:Fn,k:In,La:Ln,Ma:P,Na:Vn,Ja:Hn,Ka:Un,ta:Kn,db:qn,ab:Xn,v:$n,aa:er,ga:tr,$a:Jn,W:nr,Za:rr,Aa:ir,F:Gn,U:ar,la:ur,ya:dr,fb:lr,eb:fr,Sa:gr,Ta:_r,Ga:xe,V:vr,ja:yr,Pa:br,ia:Sr,kb:fa,na:sa,lb:da,oa,G:B,d:Ri,t:Ii,w:Fi,A:qi,mb:ra,K:Xi,x:Vi,pa:ia,Y:ca,ba:V,nb:na,ob:ta,P:Ji,qa:ea,pb:$i,N:Zi,Z:aa,e:Li,B:Bi,m:zi,jb:pa,p:Hi,z:Ui,C:R,E:Wi,L:Yi,qb:Qi,Q:la,ca:z,X:ua,rb:Ki,ra:Gi,i:Cr,a:Ae,cb:ye}}}async function de(){function e(e,n){var r=Ai=e.exports;e={};for(let[t,n]of Object.entries(r))typeof n==`function`?(r=an(n),e[t]=r):e[t]=n;return Ai=e,Ai=function(){var e=Ai,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).tb=t(e.tb),e.Xb=n(e.Xb),e.Zb=t(e.Zb),e.lc=t(e.lc),e.mc=n(e.mc),e.qc=t(e.qc),e}(),we.push(Ai._b),wr=(e=Ai).tb,Tr=e.ub,t._OrtInit=e.vb,t._OrtGetLastError=e.wb,t._OrtCreateSessionOptions=e.xb,t._OrtAppendExecutionProvider=e.yb,t._OrtAddFreeDimensionOverride=e.zb,t._OrtAddSessionConfigEntry=e.Ab,t._OrtReleaseSessionOptions=e.Bb,t._OrtCreateSession=e.Cb,t._OrtReleaseSession=e.Db,t._OrtGetInputOutputCount=e.Eb,t._OrtGetInputOutputMetadata=e.Fb,t._OrtFree=e.Gb,t._OrtCreateTensor=e.Hb,t._OrtGetTensorData=e.Ib,t._OrtReleaseTensor=e.Jb,t._OrtCreateRunOptions=e.Kb,t._OrtAddRunConfigEntry=e.Lb,t._OrtReleaseRunOptions=e.Mb,t._OrtCreateBinding=e.Nb,t._OrtBindInput=e.Ob,t._OrtBindOutput=e.Pb,t._OrtClearBoundOutputs=e.Qb,t._OrtReleaseBinding=e.Rb,t._OrtRunWithBinding=e.Sb,t._OrtRun=e.Tb,t._OrtEndProfiling=e.Ub,t._JsepOutput=e.Vb,t._JsepGetNodeName=e.Wb,Er=e.Xb,Dr=t._free=e.Yb,Or=t._malloc=e.Zb,kr=e.ac,Ar=e.bc,jr=e.cc,Mr=e.dc,Nr=e.ec,Pr=e.fc,Fr=e.gc,F=e.hc,Ir=e.ic,Lr=e.jc,I=e.kc,Rr=e.lc,L=e.mc,zr=e.nc,Br=e.oc,Vr=e.pc,Hr=e.qc,Ur=e.rc,Wr=e.sc,Gr=e.tc,Kr=e.uc,qr=e.vc,Jr=e.wc,Yr=e.xc,Xr=e.yc,Zr=e.zc,Qr=e.Ac,$r=e.Bc,ei=e.Cc,ti=e.Dc,ni=e.Ec,ri=e.Fc,ii=e.Gc,ai=e.Hc,oi=e.Ic,si=e.Jc,ci=e.Kc,li=e.Lc,ui=e.Mc,di=e.Nc,fi=e.Pc,pi=e.Qc,mi=e.$c,hi=e.ad,gi=e.fd,_i=e.jd,vi=e.kd,yi=e.ld,bi=e.md,xi=e.nd,Si=e.od,Ci=e.pd,wi=e.qd,Ti=e.vd,Ei=e.Sd,Di=e.Td,Oi=e.Ud,ki=e.Vd,p=n,Ai}var n,r=ue();return t.instantiateWasm?new Promise(n=>{t.instantiateWasm(r,(t,r)=>{n(e(t,r))})}):i?e(new WebAssembly.Instance(p,ue()),p):(ae??=t.locateFile?t.locateFile?t.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,d):d+`ort-wasm-simd-threaded.jsep.wasm`:new URL(`/storybook/kapi/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm`,``+import.meta.url).href,n=await async function(e){var t=ae;if(!f&&!C(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){x(`wasm streaming compile failed: ${e}`),x(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!f)try{var t=await s(e);return new Uint8Array(t)}catch{}if(e==ae&&f)e=new Uint8Array(f);else{if(!c)throw`both async and sync fetching of the wasm failed`;e=c(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){x(`failed to asynchronously prepare wasm: ${e}`),le(e)}}(t,e)}(r),e(n.instance,n.module))}class fe{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var pe=e=>{e.terminate(),e.onmessage=()=>{}},me=[],he=0,ge=null,_e=e=>{Se.length==0&&(ke(),Oe(Se[0]));var t=Se.pop();if(!t)return 6;Ce.push(t),Te[e.Rc]=t,t.Rc=e.Rc;var n={Sc:`run`,Md:e.Ld,bd:e.bd,Rc:e.Rc};return t.postMessage(n,e.rd),0},ve=0,j=(e,t,...n)=>{var r,i=16*n.length,a=L(),o=Rr(i),s=o>>>3;for(r of n)typeof r==`bigint`?((w(),re)[s++>>>0]=1n,(w(),re)[s++>>>0]=r):((w(),re)[s++>>>0]=0n,(w(),ne)[s++>>>0]=r);return e=jr(e,0,i,o,t),I(a),e};function ye(e){if(i)return j(0,1,e);if(m=e,!(0<ve)){for(var t of Ce)pe(t);for(t of Se)pe(t);Se=[],Ce=[],Te={},S=!0}l(0,new fe(e))}function be(e){if(i)return j(1,0,e);xe(e)}var xe=e=>{if(m=e,i)throw be(e),`unwind`;ye(e)},Se=[],Ce=[],we=[],Te={},Ee=e=>{var t=e.Rc;delete Te[t],Se.push(e),Ce.splice(Ce.indexOf(e),1),e.Rc=0,Mr(t)};function De(){we.forEach(e=>e())}var Oe=e=>new Promise(n=>{e.onmessage=r=>{var i=r.data;if(r=i.Sc,i.Zc&&i.Zc!=Er()){var a=Te[i.Zc];a?a.postMessage(i,i.rd):x(`Internal error! Worker sent a message "${r}" to target pthread ${i.Zc}, but that thread no longer exists!`)}else r===`checkMailbox`?Xt():r===`spawnThread`?_e(i):r===`cleanupThread`?qt(()=>{Ee(Te[i.Nd])}):r===`loaded`?(e.loaded=!0,n(e)):i.target===`setimmediate`?e.postMessage(i):r===`uncaughtException`?e.onerror(i.error):r===`callHandler`?t[i.wd](...i.args):r&&x(`worker sent an unknown command ${r}`)},e.onerror=e=>{throw x(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var r,i=[];for(r of[])t.propertyIsEnumerable(r)&&i.push(r);e.postMessage({Sc:`load`,xd:i,Od:Ae,Pd:p})});function ke(){var e=new Worker((()=>{let e=URL;return import.meta.url>`file:`&&import.meta.url<`file;`?new e(`ort.bundle.min.mjs`,import.meta.url):new URL(import.meta.url)})(),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Se.push(e)}var Ae,je=(e,t)=>{ve=0,e=Wr(e,t),0<ve?m=e:Nr(e)},Me=[],Ne=0;function Pe(e){var t=new ze(e>>>=0);return(w(),E)[t.Tc+12>>>0]==0&&(Le(t,!0),Ne--),Re(t,!1),Me.push(t),Hr(e)}var Fe=0,Ie=()=>{F(0,0);var e=Me.pop();zr(e.cd),Fe=0};function Le(e,t){t=+!!t,(w(),E)[e.Tc+12>>>0]=t}function Re(e,t){t=+!!t,(w(),E)[e.Tc+13>>>0]=t}class ze{constructor(e){this.cd=e,this.Tc=e-24}}var Be=e=>{var t=Fe;if(!t)return Ir(0),0;var n=new ze(t);(w(),A)[n.Tc+16>>>2>>>0]=t;var r=(w(),A)[n.Tc+4>>>2>>>0];if(!r)return Ir(0),t;for(var i of e){if(i===0||i===r)break;if(Vr(i,r,n.Tc+16))return Ir(i),t}return Ir(r),t};function Ve(){return Be([])}function He(e){return Be([e>>>0])}function Ue(e,t,n,r){return Be([e>>>0,t>>>0,n>>>0,r>>>0])}var We=()=>{var e=Me.pop();e||le(`no exception to throw`);var t=e.cd;throw(w(),E)[e.Tc+13>>>0]==0&&(Me.push(e),Re(e,!0),Le(e,!1),Ne++),Br(t),Fe=t};function Ge(e,t,n){var r=new ze(e>>>=0);throw t>>>=0,n>>>=0,(w(),A)[r.Tc+16>>>2>>>0]=0,(w(),A)[r.Tc+4>>>2>>>0]=t,(w(),A)[r.Tc+8>>>2>>>0]=n,Br(e),Ne++,Fe=e}var Ke=()=>Ne;function qe(e,t,n,r){return i?j(2,1,e,t,n,r):Je(e,t,n,r)}function Je(e,t,n,r){if(e>>>=0,t>>>=0,n>>>=0,r>>>=0,!globalThis.SharedArrayBuffer)return 6;var a=[];return i&&a.length===0?qe(e,t,n,r):(e={Ld:n,Rc:e,bd:r,rd:a},i?(e.Sc=`spawnThread`,postMessage(e,a),0):_e(e))}function Ye(e){throw Fe||=e>>>0,Fe}var Xe=globalThis.TextDecoder&&new TextDecoder,Ze=(e,t,n,r)=>{if(n=t+n,r)return n;for(;e[t]&&!(t>=n);)++t;return t},Qe=(e,t=0,n,r)=>{if(16<(n=Ze(e,t>>>=0,n,r))-t&&e.buffer&&Xe)return Xe.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},$e=(e,t,n)=>(e>>>=0)?Qe((w(),D),e,t,n):``;function et(e,t,n){return i?j(3,1,e,t,n):0}function tt(e,t){if(i)return j(4,1,e,t)}function M(e,t){if(i)return j(5,1,e,t)}function nt(e,t,n){if(i)return j(6,1,e,t,n)}function rt(e,t,n){return i?j(7,1,e,t,n):0}function it(e,t){if(i)return j(8,1,e,t)}function at(e,t,n){if(i)return j(9,1,e,t,n)}function ot(e,t,n,r){if(i)return j(10,1,e,t,n,r)}function st(e,t,n,r){if(i)return j(11,1,e,t,n,r)}function ct(e,t,n,r){if(i)return j(12,1,e,t,n,r)}function lt(e){if(i)return j(13,1,e)}function ut(e,t){if(i)return j(14,1,e,t)}function dt(e,t,n){if(i)return j(15,1,e,t,n)}var ft=()=>le(``),pt=e=>{e>>>=0;for(var t=``;;){var n=(w(),D)[e++>>>0];if(!n)return t;t+=String.fromCharCode(n)}},mt={},ht={},gt={},_t=class extends Error{constructor(e){super(e),this.name=`BindingError`}};function vt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new _t(`type "${r}" must have a positive integer typeid pointer`);if(ht.hasOwnProperty(e)){if(n.yd)return;throw new _t(`Cannot register type '${r}' twice`)}ht[e]=t,delete gt[e],mt.hasOwnProperty(e)&&(t=mt[e],delete mt[e],t.forEach(e=>e()))}(e,t,n)}var yt=(e,t,n)=>{switch(t){case 1:return n?e=>(w(),E)[e>>>0]:e=>(w(),D)[e>>>0];case 2:return n?e=>(w(),O)[e>>>1>>>0]:e=>(w(),ee)[e>>>1>>>0];case 4:return n?e=>(w(),k)[e>>>2>>>0]:e=>(w(),A)[e>>>2>>>0];case 8:return n?e=>(w(),re)[e>>>3>>>0]:e=>(w(),ie)[e>>>3>>>0];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function bt(e,t,n,r,i){e>>>=0,n>>>=0,t=pt(t>>>0);let a=e=>e;if(r=r===0n){let e=8*n;a=t=>BigInt.asUintN(e,t),i=a(i)}vt(e,{name:t,Oc:a,Vc:(e,t)=>(typeof t==`number`&&(t=BigInt(t)),t),Uc:yt(t,n,!r),Wc:null})}function xt(e,t,n,r){vt(e>>>=0,{name:t=pt(t>>>0),Oc:function(e){return!!e},Vc:function(e,t){return t?n:r},Uc:function(e){return this.Oc((w(),D)[e>>>0])},Wc:null})}var St=[],Ct=[0,1,,1,null,1,!0,1,!1,1];function wt(e){9<(e>>>=0)&&--Ct[e+1]==0&&(Ct[e]=void 0,St.push(e))}var Tt=e=>{if(!e)throw new _t(`Cannot use deleted val. handle = ${e}`);return Ct[e]},Et=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=St.pop()||Ct.length;return Ct[t]=e,Ct[t+1]=1,t}};function Dt(e){return this.Oc((w(),A)[e>>>2>>>0])}var Ot={name:`emscripten::val`,Oc:e=>{var t=Tt(e);return wt(e),t},Vc:(e,t)=>Et(t),Uc:Dt,Wc:null};function kt(e){return vt(e>>>0,Ot)}var At=(e,t)=>{switch(t){case 4:return function(e){return this.Oc((w(),te)[e>>>2>>>0])};case 8:return function(e){return this.Oc((w(),ne)[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function jt(e,t,n){n>>>=0,vt(e>>>=0,{name:t=pt(t>>>0),Oc:e=>e,Vc:(e,t)=>t,Uc:At(t,n),Wc:null})}function Mt(e,t,n,r,i){e>>>=0,n>>>=0,t=pt(t>>>0);let a=e=>e;if(r===0){var o=32-8*n;a=e=>e<<o>>>o,i=a(i)}vt(e,{name:t,Oc:a,Vc:(e,t)=>t,Uc:yt(t,n,r!==0),Wc:null})}function Nt(e,t,n){function r(e){var t=(w(),A)[e>>>2>>>0];return e=(w(),A)[e+4>>>2>>>0],new i((w(),E).buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];vt(e>>>=0,{name:n=pt(n>>>0),Oc:r,Uc:r},{yd:!0})}var Pt=(e,t,n)=>{var r=(w(),D);if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.codePointAt(a);if(127>=o){if(t>=n)break;r[t++>>>0]=o}else if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6,r[t++>>>0]=128|63&o}else if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63,r[t++>>>0]=128|o>>6&63,r[t++>>>0]=128|63&o,a++}}r[t>>>0]=0,e=t-i}else e=0;return e},Ft=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t};function It(e,t){vt(e>>>=0,{name:t=pt(t>>>0),Oc(e){var t=(w(),A)[e>>>2>>>0];return t=$e(e+4,t,!0),Dr(e),t},Vc(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||ArrayBuffer.isView(t)&&t.BYTES_PER_ELEMENT==1))throw new _t(`Cannot pass non-string to std::string`);var r=n?Ft(t):t.length,i=Or(4+r+1),a=i+4;return(w(),A)[i>>>2>>>0]=r,n?Pt(t,a,r+1):(w(),D).set(t,a>>>0),e!==null&&e.push(Dr,i),i},Uc:Dt,Wc(e){Dr(e)}})}var Lt=globalThis.TextDecoder?new TextDecoder(`utf-16le`):void 0,Rt=(e,t,n)=>{if(e>>>=1,16<(t=Ze((w(),ee),e,t/2,n))-e&&Lt)return Lt.decode((w(),ee).slice(e,t));for(n=``;e<t;++e){var r=(w(),ee)[e>>>0];n+=String.fromCharCode(r)}return n},zt=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);(w(),O)[t>>>1>>>0]=a,t+=2}return(w(),O)[t>>>1>>>0]=0,t-r},Bt=e=>2*e.length,Vt=(e,t,n)=>{var r=``;e>>>=2;for(var i=0;!(i>=t/4);i++){var a=(w(),A)[e+i>>>0];if(!a&&!n)break;r+=String.fromCodePoint(a)}return r},Ht=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.codePointAt(i);if(65535<a&&i++,(w(),k)[t>>>2>>>0]=a,(t+=4)+4>n)break}return(w(),k)[t>>>2>>>0]=0,t-r},Ut=e=>{for(var t=0,n=0;n<e.length;++n)65535<e.codePointAt(n)&&n++,t+=4;return t};function Wt(e,t,n){if(e>>>=0,t>>>=0,n=pt(n>>>=0),t===2)var r=Rt,i=zt,a=Bt;else r=Vt,i=Ht,a=Ut;vt(e,{name:n,Oc:e=>{var n=(w(),A)[e>>>2>>>0];return n=r(e+4,n*t,!0),Dr(e),n},Vc:(e,r)=>{if(typeof r!=`string`)throw new _t(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Or(4+o+t);return(w(),A)[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Dr,s),s},Uc:Dt,Wc(e){Dr(e)}})}function Gt(e,t){vt(e>>>=0,{zd:!0,name:t=pt(t>>>0),Oc:()=>{},Vc:()=>{}})}function Kt(e){kr(e>>>0,!r,1,!n,131072,!1),De()}var qt=e=>{if(!S)try{if(e(),!(0<ve))try{i?Er()&&Nr(m):xe(m)}catch(e){e instanceof fe||e==`unwind`||l(0,e)}}catch(e){e instanceof fe||e==`unwind`||l(0,e)}},Jt=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Yt(e){e>>>=0,Jt||(Atomics.waitAsync((w(),k),e>>>2,e).value.then(Xt),e+=128,Atomics.store((w(),k),e>>>2,1))}var Xt=()=>qt(()=>{var e=Er();e&&(Yt(e),Fr())});function Zt(e,t){(e>>>=0)==t>>>0?setTimeout(Xt):i?postMessage({Zc:e,Sc:`checkMailbox`}):(e=Te[e])&&e.postMessage({Sc:`checkMailbox`})}var Qt=[];function $t(e,t,n,r,i){for(t>>>=0,i>>>=0,Qt.length=0,n=i>>>3,r=i+r>>>3;n<r;){var a=(w(),re)[n++>>>0]?(w(),re)[n++>>>0]:(w(),ne)[n++>>>0];Qt.push(a)}return(t?Mi[t]:ji[e])(...Qt)}var en=()=>{ve=0};function tn(e){e>>>=0,i?postMessage({Sc:`cleanupThread`,Nd:e}):Ee(Te[e])}function nn(e){}var rn=e=>{try{e()}catch(e){le(e)}};function an(e){var t=(...t)=>{ln.push(e);try{return e(...t)}finally{S||(ln.pop(),sn&&on===1&&ln.length===0&&(on=0,ve+=1,rn(Di),typeof Fibers<`u`&&Fibers.Zd()))}};return fn.set(e,t),t}var on=0,sn=null,cn=0,ln=[],un=new Map,dn=new Map,fn=new Map,pn=0,mn=null,hn=[],gn=e=>function(e){if(!S){if(on===0){var t=!1,n=!1;e((e=0)=>{if(!S&&(cn=e,t=!0,n)){on=2,rn(()=>Oi(sn)),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.resume(),e=!1;try{var r=function(){var e=(w(),k)[sn+8>>>2>>>0];return e=dn.get(e),e=fn.get(e),--ve,e()}()}catch(t){r=t,e=!0}var i=!1;if(!sn){var a=mn;a&&(mn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(on=1,sn=function(){var e=Or(65548),t=e+12;if((w(),A)[e>>>2>>>0]=t,(w(),A)[e+4>>>2>>>0]=t+65536,t=ln[0],!un.has(t)){var n=pn++;un.set(t,n),dn.set(n,t)}return t=un.get(t),(w(),k)[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.ud&&MainLoop.pause(),rn(()=>Ei(sn)))}else on===2?(on=0,rn(ki),Dr(sn),sn=null,hn.forEach(qt)):le(`invalid state: ${on}`);return cn}}(t=>{e().then(t)});function _n(e){return e>>>=0,gn(async()=>Et(await Tt(e)))}var vn=[],N=e=>{var t=vn.length;return vn.push(e),t},yn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r){var i=r,a=(w(),A)[t+4*r>>>2>>>0],o=ht[a];if(o===void 0)throw e=`parameter ${r}`,a=wr(a),t=pt(a),Dr(a),new _t(`${e} has unknown type ${t}`);n[i]=o}return n},bn=(e,t,n)=>{var r=[];return e=e(r,n),r.length&&((w(),A)[t>>>2>>>0]=Et(r)),e},xn={},Sn=e=>{var t=xn[e];return t===void 0?pt(e):t};function Cn(e,t,n){var[r,...i]=yn(e,t>>>0);t=r.Vc.bind(r);var a=i.map(e=>e.Uc.bind(e));e--;var o={toValue:Tt};switch(e=a.map((e,t)=>{var n=`argFromPtr${t}`;return o[n]=e,`${n}(args${t?`+`+8*t:``})`}),n){case 0:var s=`toValue(handle)`;break;case 2:s=`new (toValue(handle))`;break;case 3:s=``;break;case 1:o.getStringOrSymbol=Sn,s=`toValue(handle)[getStringOrSymbol(methodName)]`}return s+=`(${e})`,r.zd||(o.toReturnWire=t,o.emval_returnValue=bn,s=`return emval_returnValue(toReturnWire, destructorsRef, ${s})`),s=`return function (handle, methodName, destructorsRef, args) {
  ${s}
  }`,n=Function(Object.keys(o),s)(...Object.values(o)),s=`methodCaller<(${i.map(e=>e.name)}) => ${r.name}>`,N(Object.defineProperty(n,"name",{value:s}))}function wn(e,t){return t>>>=0,(e=Tt(e>>>0))==Tt(t)}function Tn(e){return(e>>>=0)?(e=Sn(e),Et(globalThis[e])):Et(globalThis)}function En(e){return e=Sn(e>>>0),Et(t[e])}function Dn(e,t){return t>>>=0,e=Tt(e>>>0),t=Tt(t),Et(e[t])}function On(e){9<(e>>>=0)&&(Ct[e+1]+=1)}function kn(e,t,n,r,i){return vn[e>>>0](t>>>0,n>>>0,r>>>0,i>>>0)}function An(e,t,n,r,i){return kn(e>>>0,t>>>0,n>>>0,r>>>0,i>>>0)}function jn(){return Et([])}function Mn(e){e=Tt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Et(t)}function Nn(e){return Et(Sn(e>>>0))}function Pn(){return Et({})}function Fn(e){for(var t=Tt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}wt(e)}function In(e,t,n){t>>>=0,n>>>=0,e=Tt(e>>>0),t=Tt(t),n=Tt(n),e[t]=n}function Ln(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),k)[t>>>2>>>0]=e.getUTCSeconds(),(w(),k)[t+4>>>2>>>0]=e.getUTCMinutes(),(w(),k)[t+8>>>2>>>0]=e.getUTCHours(),(w(),k)[t+12>>>2>>>0]=e.getUTCDate(),(w(),k)[t+16>>>2>>>0]=e.getUTCMonth(),(w(),k)[t+20>>>2>>>0]=e.getUTCFullYear()-1900,(w(),k)[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(w(),k)[t+28>>>2>>>0]=e}var Rn=e=>e%4==0&&(e%100!=0||e%400==0),zn=[0,31,60,91,121,152,182,213,244,274,305,335],Bn=[0,31,59,90,120,151,181,212,243,273,304,334];function P(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),(w(),k)[t>>>2>>>0]=e.getSeconds(),(w(),k)[t+4>>>2>>>0]=e.getMinutes(),(w(),k)[t+8>>>2>>>0]=e.getHours(),(w(),k)[t+12>>>2>>>0]=e.getDate(),(w(),k)[t+16>>>2>>>0]=e.getMonth(),(w(),k)[t+20>>>2>>>0]=e.getFullYear()-1900,(w(),k)[t+24>>>2>>>0]=e.getDay();var n=(Rn(e.getFullYear())?zn:Bn)[e.getMonth()]+e.getDate()-1|0;(w(),k)[t+28>>>2>>>0]=n,(w(),k)[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),(w(),k)[t+32>>>2>>>0]=e}function Vn(e){e>>>=0;var t=new Date((w(),k)[e+20>>>2>>>0]+1900,(w(),k)[e+16>>>2>>>0],(w(),k)[e+12>>>2>>>0],(w(),k)[e+8>>>2>>>0],(w(),k)[e+4>>>2>>>0],(w(),k)[e>>>2>>>0],0),n=(w(),k)[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?(w(),k)[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),(w(),k)[e+24>>>2>>>0]=t.getDay(),n=(Rn(t.getFullYear())?zn:Bn)[t.getMonth()]+t.getDate()-1|0,(w(),k)[e+28>>>2>>>0]=n,(w(),k)[e>>>2>>>0]=t.getSeconds(),(w(),k)[e+4>>>2>>>0]=t.getMinutes(),(w(),k)[e+8>>>2>>>0]=t.getHours(),(w(),k)[e+12>>>2>>>0]=t.getDate(),(w(),k)[e+16>>>2>>>0]=t.getMonth(),(w(),k)[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Hn(e,t,n,r,a,o,s){return i?j(16,1,e,t,n,r,a,o,s):-52}function Un(e,t,n,r,a,o){if(i)return j(17,1,e,t,n,r,a,o)}var Wn={},Gn=()=>performance.timeOrigin+performance.now();function Kn(e,t){return i?j(18,1,e,t):(Wn[e]&&(clearTimeout(Wn[e].id),delete Wn[e]),t&&(Wn[e]={id:setTimeout(()=>{delete Wn[e],qt(()=>Pr(e,performance.timeOrigin+performance.now()))},t),Yd:t}),0)}function qn(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);(w(),A)[e>>>2>>>0]=60*o,(w(),k)[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(Pt(e,n,17),Pt(t,r,17)):(Pt(e,r,17),Pt(t,n,17))}var Jn=()=>Date.now(),Yn=1;function Xn(e,t,n){if(n>>>=0,!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!Yn)return 52;e=performance.timeOrigin+performance.now()}return e=Math.round(1e6*e),(w(),re)[n>>>3>>>0]=BigInt(e),0}var Zn=[],Qn=(e,t)=>{Zn.length=0;for(var n;n=(w(),D)[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,Zn.push(n==112?(w(),A)[t>>>2>>>0]:n==106?(w(),re)[t>>>3>>>0]:n==105?(w(),k)[t>>>2>>>0]:(w(),ne)[t>>>3>>>0]),t+=r?8:4}return Zn};function $n(e,t,n){return e>>>=0,t=Qn(t>>>0,n>>>0),Mi[e](...t)}function er(e,t,n){return e>>>=0,t=Qn(t>>>0,n>>>0),Mi[e](...t)}var tr=()=>{};function nr(e,t){return x($e(e>>>0,t>>>0))}var rr=()=>{throw ve+=1,`unwind`};function ir(){return 4294901760}var ar=()=>navigator.hardwareConcurrency,or={},sr=e=>{var t;return(t=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(e))?+t[1]:(t=/:(\d+):\d+(?:\)|$)/.exec(e))?2147483648|t[1]:0},cr=e=>{for(var t of e)(e=sr(t))&&(or[e]=t)};function lr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),cr(e),or.gd=sr(e[3]),or.Jd=e,or.gd}function ur(e){if(!(e=or[e>>>0]))return 0;var t;if(t=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(e))e=t[1];else if(t=/^\s+at (.*) \(.*\)$/.exec(e))e=t[1];else{if(!(t=/^(.+?)@/.exec(e)))return 0;e=t[1]}Dr(ur.hd??0),t=Ft(e)+1;var n=Or(t);return n&&Pt(e,n,t),ur.hd=n,ur.hd}function dr(e){e>>>=0;var t=(w(),D).length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-Ae.buffer.byteLength+65535)/65536|0;try{Ae.grow(r),se();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}function fr(e,t,n){if(e>>>=0,t>>>=0,or.gd==e)var r=or.Jd;else(r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),cr(r);for(var i=3;r[i]&&sr(r[i])!=e;)++i;for(e=0;e<n&&r[e+i];++e)(w(),k)[t+4*e>>>2>>>0]=sr(r[e+i]);return e}var pr,mr={},hr=()=>{if(!pr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(globalThis.navigator?.language??`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in mr)mr[e]===void 0?delete t[e]:t[e]=mr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);pr=n}return pr};function gr(e,t){if(i)return j(19,1,e,t);e>>>=0,t>>>=0;var n,r=0,a=0;for(n of hr()){var o=t+r;(w(),A)[e+a>>>2>>>0]=o,r+=Pt(n,o,1/0)+1,a+=4}return 0}function _r(e,t){if(i)return j(20,1,e,t);e>>>=0,t>>>=0;var n=hr();for(var r of((w(),A)[e>>>2>>>0]=n.length,e=0,n))e+=Ft(r)+1;return(w(),A)[t>>>2>>>0]=e,0}function vr(e){return i?j(21,1,e):52}function yr(e,t,n,r){return i?j(22,1,e,t,n,r):52}function br(e,t,n,r){return i?j(23,1,e,t,n,r):70}var xr=[null,[],[]];function Sr(e,t,n,r){if(i)return j(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var a=0,o=0;o<n;o++){var s=(w(),A)[t>>>2>>>0],c=(w(),A)[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=e,d=(w(),D)[s+l>>>0],f=xr[u];d===0||d===10?((u===1?b:x)(Qe(f)),f.length=0):f.push(d)}a+=c}return(w(),A)[r>>>2>>>0]=a,0}function Cr(e){return e>>>0}i||function(){for(var e=t.numThreads-1;e--;)ke();me.push(async()=>{var e=async function(){if(!i)return Promise.all(Se.map(Oe))}();he++,await e,--he==0&&ge&&(e=ge,ge=null,e())})}(),i||(Ae=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),se()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>L(),t.stackRestore=e=>I(e),t.stackAlloc=e=>Rr(e),t.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:(w(),E)[e>>>0]=t;break;case`i16`:(w(),O)[e>>>1>>>0]=t;break;case`i32`:(w(),k)[e>>>2>>>0]=t;break;case`i64`:(w(),re)[e>>>3>>>0]=BigInt(t);break;case`float`:(w(),te)[e>>>2>>>0]=t;break;case`double`:(w(),ne)[e>>>3>>>0]=t;break;case`*`:(w(),A)[e>>>2>>>0]=t;break;default:le(`invalid type for setValue: ${n}`)}},t.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return(w(),E)[e>>>0];case`i16`:return(w(),O)[e>>>1>>>0];case`i32`:return(w(),k)[e>>>2>>>0];case`i64`:return(w(),re)[e>>>3>>>0];case`float`:return(w(),te)[e>>>2>>>0];case`double`:return(w(),ne)[e>>>3>>>0];case`*`:return(w(),A)[e>>>2>>>0];default:le(`invalid type for getValue: ${t}`)}},t.UTF8ToString=$e,t.stringToUTF8=Pt,t.lengthBytesUTF8=Ft;var wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,F,Ir,Lr,I,Rr,L,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji=[ye,be,qe,et,tt,M,nt,rt,it,at,ot,st,ct,lt,ut,dt,Hn,Un,Kn,gr,_r,vr,yr,br,Sr],Mi={973212:(e,n,r,i,a)=>{if(t===void 0||!t.Xc)return 1;if((e=$e(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=t.Xc.get(e)))return 2;if(n=Number(n>>>0),r=Number(r>>>0),i=Number(i>>>0),n+r>e.byteLength)return 3;try{let o=e.subarray(n,n+r);switch(a){case 0:(w(),D).set(o,i>>>0);break;case 1:t.Qd?t.Qd(i,o):t.Id(i,o);break;default:return 4}return 0}catch{return 4}},974036:(e,n,r)=>{t.td(e,(w(),D).subarray(n>>>0,n+r>>>0))},974100:()=>t.Wd(),974142:e=>{t.sd(e)},974179:()=>{t.Bd()},974210:()=>{t.Cd()},974239:()=>{t.Gd()},974264:e=>t.Ad(e),974297:e=>t.Ed(e),974329:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r),!0)},974392:(e,n,r)=>{t.ed(Number(e),Number(n),Number(r))},974449:()=>typeof wasmOffsetConverter<`u`,974506:e=>{t.$b(`Abs`,e,void 0)},974557:e=>{t.$b(`Neg`,e,void 0)},974608:e=>{t.$b(`Floor`,e,void 0)},974661:e=>{t.$b(`Ceil`,e,void 0)},974713:e=>{t.$b(`Reciprocal`,e,void 0)},974771:e=>{t.$b(`Sqrt`,e,void 0)},974823:e=>{t.$b(`Exp`,e,void 0)},974874:e=>{t.$b(`Erf`,e,void 0)},974925:e=>{t.$b(`Sigmoid`,e,void 0)},974980:(e,n,r)=>{t.$b(`HardSigmoid`,e,{alpha:n,beta:r})},975059:e=>{t.$b(`Log`,e,void 0)},975110:e=>{t.$b(`Sin`,e,void 0)},975161:e=>{t.$b(`Cos`,e,void 0)},975212:e=>{t.$b(`Tan`,e,void 0)},975263:e=>{t.$b(`Asin`,e,void 0)},975315:e=>{t.$b(`Acos`,e,void 0)},975367:e=>{t.$b(`Atan`,e,void 0)},975419:e=>{t.$b(`Sinh`,e,void 0)},975471:e=>{t.$b(`Cosh`,e,void 0)},975523:e=>{t.$b(`Asinh`,e,void 0)},975576:e=>{t.$b(`Acosh`,e,void 0)},975629:e=>{t.$b(`Atanh`,e,void 0)},975682:e=>{t.$b(`Tanh`,e,void 0)},975734:e=>{t.$b(`Not`,e,void 0)},975785:(e,n,r)=>{t.$b(`Clip`,e,{min:n,max:r})},975854:e=>{t.$b(`Clip`,e,void 0)},975906:(e,n)=>{t.$b(`Elu`,e,{alpha:n})},975964:e=>{t.$b(`Gelu`,e,void 0)},976016:e=>{t.$b(`Relu`,e,void 0)},976068:(e,n)=>{t.$b(`LeakyRelu`,e,{alpha:n})},976132:(e,n)=>{t.$b(`ThresholdedRelu`,e,{alpha:n})},976202:(e,n)=>{t.$b(`Cast`,e,{to:n})},976260:e=>{t.$b(`Add`,e,void 0)},976311:e=>{t.$b(`Sub`,e,void 0)},976362:e=>{t.$b(`Mul`,e,void 0)},976413:e=>{t.$b(`Div`,e,void 0)},976464:e=>{t.$b(`Pow`,e,void 0)},976515:e=>{t.$b(`Equal`,e,void 0)},976568:e=>{t.$b(`Greater`,e,void 0)},976623:e=>{t.$b(`GreaterOrEqual`,e,void 0)},976685:e=>{t.$b(`Less`,e,void 0)},976737:e=>{t.$b(`LessOrEqual`,e,void 0)},976796:(e,n,r,i,a)=>{t.$b(`ReduceMean`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},976971:(e,n,r,i,a)=>{t.$b(`ReduceMax`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977145:(e,n,r,i,a)=>{t.$b(`ReduceMin`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977319:(e,n,r,i,a)=>{t.$b(`ReduceProd`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977494:(e,n,r,i,a)=>{t.$b(`ReduceSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977668:(e,n,r,i,a)=>{t.$b(`ReduceL1`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},977841:(e,n,r,i,a)=>{t.$b(`ReduceL2`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978014:(e,n,r,i,a)=>{t.$b(`ReduceLogSum`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978191:(e,n,r,i,a)=>{t.$b(`ReduceSumSquare`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978371:(e,n,r,i,a)=>{t.$b(`ReduceLogSumExp`,e,{keepDims:!!n,noopWithEmptyAxes:!!r,axes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},978551:e=>{t.$b(`Where`,e,void 0)},978604:(e,n,r)=>{t.$b(`Transpose`,e,{perm:n?Array.from((w(),k).subarray(Number(n)>>>0,Number(r)>>>0)):[]})},978728:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:$e(r),format:i?`NHWC`:`NCHW`})},978861:(e,n,r,i)=>{t.$b(`DepthToSpace`,e,{blocksize:n,mode:$e(r),format:i?`NHWC`:`NCHW`})},978994:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),E)[u>>>0],outputPadding:d?Array.from((w(),k).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),k).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:$e(h)})},979427:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),k).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((w(),k).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((w(),k).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((w(),k).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(w(),E)[l>>>0],outputPadding:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:$e(m)})},980088:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h)=>{t.$b(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:n,dilations:[r],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!(w(),E)[u>>>0],outputPadding:d?Array.from((w(),k).subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from((w(),k).subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:$e(h)})},980521:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:n,dilations:Array.from((w(),k).subarray(Number(r)>>>0,2+(Number(r)>>>0)>>>0)),group:i,kernelShape:Array.from((w(),k).subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from((w(),k).subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from((w(),k).subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!(w(),E)[l>>>0],outputPadding:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:$e(m)})},981182:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},981273:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},981752:(e,n)=>{t.$b(`GlobalAveragePool`,e,{format:n?`NHWC`:`NCHW`})},981843:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},982322:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},982409:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},982884:(e,n)=>{t.$b(`GlobalMaxPool`,e,{format:n?`NHWC`:`NCHW`})},982971:(e,n,r,i,a,o,s,c,l,u,d,f,p,m)=>{t.$b(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:n,ceil_mode:r,count_include_pad:i,storage_order:a,dilations:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from((w(),k).subarray(Number(f)>>>0,Number(p)>>>0)):[]})},983446:(e,n,r,i,a)=>{t.$b(`Gemm`,e,{alpha:n,beta:r,transA:i,transB:a})},983550:e=>{t.$b(`MatMul`,e,void 0)},983604:(e,n,r,i)=>{t.$b(`ArgMax`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},983712:(e,n,r,i)=>{t.$b(`ArgMin`,e,{keepDims:!!n,selectLastIndex:!!r,axis:i})},983820:(e,n)=>{t.$b(`Softmax`,e,{axis:n})},983883:(e,n)=>{t.$b(`Concat`,e,{axis:n})},983943:(e,n,r,i,a)=>{t.$b(`Split`,e,{axis:n,numOutputs:r,splitSizes:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},984099:e=>{t.$b(`Expand`,e,void 0)},984153:(e,n)=>{t.$b(`Gather`,e,{axis:Number(n)})},984224:(e,n)=>{t.$b(`GatherElements`,e,{axis:Number(n)})},984303:(e,n)=>{t.$b(`GatherND`,e,{batch_dims:Number(n)})},984382:(e,n,r,i,a,o,s,c,l,u,d)=>{t.$b(`Resize`,e,{antialias:n,axes:r?Array.from((w(),k).subarray(Number(r)>>>0,Number(i)>>>0)):[],coordinateTransformMode:$e(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:$e(l),mode:$e(u),nearestMode:$e(d)})},984744:(e,n,r,i,a,o,s)=>{t.$b(`Slice`,e,{starts:n?Array.from((w(),k).subarray(Number(n)>>>0,Number(r)>>>0)):[],ends:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[]})},985008:e=>{t.$b(`Tile`,e,void 0)},985060:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},985174:(e,n,r)=>{t.$b(`InstanceNormalization`,e,{epsilon:n,format:r?`NHWC`:`NCHW`})},985288:e=>{t.$b(`Range`,e,void 0)},985341:(e,n)=>{t.$b(`Einsum`,e,{equation:$e(n)})},985422:(e,n,r,i,a)=>{t.$b(`Pad`,e,{mode:n,value:r,pads:i?Array.from((w(),k).subarray(Number(i)>>>0,Number(a)>>>0)):[]})},985565:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},985734:(e,n,r,i,a,o)=>{t.$b(`BatchNormalization`,e,{epsilon:n,momentum:r,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},985903:(e,n,r)=>{t.$b(`CumSum`,e,{exclusive:Number(n),reverse:Number(r)})},986e3:(e,n,r)=>{t.$b(`DequantizeLinear`,e,{axis:n,blockSize:r})},986090:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:$e(r),padding_mode:$e(i),format:a?`NHWC`:`NCHW`})},986260:(e,n,r,i,a)=>{t.$b(`GridSample`,e,{align_corners:n,mode:$e(r),padding_mode:$e(i),format:a?`NHWC`:`NCHW`})},986430:(e,n)=>{t.$b(`ScatterND`,e,{reduction:$e(n)})},986515:(e,n,r,i,a,o,s,c,l)=>{t.$b(`Attention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from((w(),k).subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},986787:e=>{t.$b(`BiasAdd`,e,void 0)},986842:e=>{t.$b(`BiasSplitGelu`,e,void 0)},986903:e=>{t.$b(`FastGelu`,e,void 0)},986959:(e,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{t.$b(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:n,dilations:r?Array.from((w(),k).subarray(Number(r)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from((w(),k).subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from((w(),k).subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from((w(),k).subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!(w(),E)[Number(p)>>>0],activation:$e(m),activation_params:h?Array.from((w(),te).subarray(Number(h)>>>0,Number(g)>>>0)):[]})},987543:e=>{t.$b(`Gelu`,e,void 0)},987595:(e,n,r,i,a,o,s,c,l)=>{t.$b(`GroupQueryAttention`,e,{numHeads:n,kvNumHeads:r,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},987812:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},987923:(e,n,r,i)=>{t.$b(`LayerNormalization`,e,{axis:n,epsilon:r,simplified:!!i})},988034:(e,n,r,i,a,o)=>{t.$b(`MatMulNBits`,e,{k:n,n:r,accuracyLevel:i,bits:a,blockSize:o})},988161:(e,n,r,i,a,o)=>{t.$b(`MultiHeadAttention`,e,{numHeads:n,isUnidirectional:r,maskFilterValue:i,scale:a,doRotary:o})},988320:(e,n)=>{t.$b(`QuickGelu`,e,{alpha:n})},988384:(e,n,r,i,a)=>{t.$b(`RotaryEmbedding`,e,{interleaved:!!n,numHeads:r,rotaryEmbeddingDim:i,scale:a})},988523:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},988625:(e,n,r)=>{t.$b(`SkipLayerNormalization`,e,{epsilon:n,simplified:!!r})},988727:(e,n,r,i)=>{t.$b(`GatherBlockQuantized`,e,{gatherAxis:n,quantizeAxis:r,blockSize:i})},988848:e=>{t.Fd(e)},988882:(e,n)=>t.Hd(Number(e),Number(n),t.Yc.Kd,t.Yc.errors)};function Ni(e,n,r){return gn(async()=>{await t.Dd(Number(e),Number(n),Number(r))})}function Pi(){return typeof wasmOffsetConverter<`u`}function Fi(e,t,n,r){var i=L();try{return Qr(e,t,n,r)}catch(e){if(I(i),e!==e+0)throw e;F(1,0)}}function Ii(e,t,n){var r=L();try{return Jr(e,t,n)}catch(e){if(I(r),e!==e+0)throw e;F(1,0)}}function Li(e){var t=L();try{Gr(e)}catch(e){if(I(t),e!==e+0)throw e;F(1,0)}}function Ri(e,t){var n=L();try{return Wr(e,t)}catch(e){if(I(n),e!==e+0)throw e;F(1,0)}}function zi(e,t,n){var r=L();try{Ur(e,t,n)}catch(e){if(I(r),e!==e+0)throw e;F(1,0)}}function Bi(e,t){var n=L();try{$r(e,t)}catch(e){if(I(n),e!==e+0)throw e;F(1,0)}}function Vi(e,t,n,r,i,a,o){var s=L();try{return Xr(e,t,n,r,i,a,o)}catch(e){if(I(s),e!==e+0)throw e;F(1,0)}}function R(e,t,n,r,i,a){var o=L();try{Kr(e,t,n,r,i,a)}catch(e){if(I(o),e!==e+0)throw e;F(1,0)}}function Hi(e,t,n,r){var i=L();try{Zr(e,t,n,r)}catch(e){if(I(i),e!==e+0)throw e;F(1,0)}}function Ui(e,t,n,r,i){var a=L();try{qr(e,t,n,r,i)}catch(e){if(I(a),e!==e+0)throw e;F(1,0)}}function Wi(e,t,n,r,i,a,o){var s=L();try{ti(e,t,n,r,i,a,o)}catch(e){if(I(s),e!==e+0)throw e;F(1,0)}}function Gi(e,t,n,r,i,a,o){var s=L();try{ni(e,t,n,r,i,a,o)}catch(e){if(I(s),e!==e+0)throw e;F(1,0)}}function Ki(e,t,n,r,i,a,o,s){var c=L();try{oi(e,t,n,r,i,a,o,s)}catch(e){if(I(c),e!==e+0)throw e;F(1,0)}}function qi(e,t,n,r,i){var a=L();try{return ei(e,t,n,r,i)}catch(e){if(I(a),e!==e+0)throw e;F(1,0)}}function Ji(e,t,n){var r=L();try{return si(e,t,n)}catch(e){if(I(r),e!==e+0)throw e;F(1,0)}}function Yi(e,t,n,r,i,a,o,s){var c=L();try{ci(e,t,n,r,i,a,o,s)}catch(e){if(I(c),e!==e+0)throw e;F(1,0)}}function z(e,t,n,r,i,a,o,s,c,l,u,d){var f=L();try{ri(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(I(f),e!==e+0)throw e;F(1,0)}}function Xi(e,t,n,r,i,a){var o=L();try{return ii(e,t,n,r,i,a)}catch(e){if(I(o),e!==e+0)throw e;F(1,0)}}function Zi(e,t,n){var r=L();try{return li(e,t,n)}catch(e){if(I(r),e!==e+0)throw e;return F(1,0),0n}}function Qi(e,t,n,r,i,a,o,s,c){var l=L();try{Yr(e,t,n,r,i,a,o,s,c)}catch(e){if(I(l),e!==e+0)throw e;F(1,0)}}function B(e){var t=L();try{return ui(e)}catch(e){if(I(t),e!==e+0)throw e;F(1,0)}}function $i(e,t){var n=L();try{return Ti(e,t)}catch(e){if(I(n),e!==e+0)throw e;return F(1,0),0n}}function ea(e){var t=L();try{return di(e)}catch(e){if(I(t),e!==e+0)throw e;return F(1,0),0n}}function ta(e,t,n,r){var i=L();try{return _i(e,t,n,r)}catch(e){if(I(i),e!==e+0)throw e;F(1,0)}}function na(e,t,n,r,i){var a=L();try{return vi(e,t,n,r,i)}catch(e){if(I(a),e!==e+0)throw e;F(1,0)}}function V(e,t,n,r,i,a){var o=L();try{return yi(e,t,n,r,i,a)}catch(e){if(I(o),e!==e+0)throw e;F(1,0)}}function ra(e,t,n,r,i,a){var o=L();try{return bi(e,t,n,r,i,a)}catch(e){if(I(o),e!==e+0)throw e;F(1,0)}}function ia(e,t,n,r,i,a,o,s){var c=L();try{return ai(e,t,n,r,i,a,o,s)}catch(e){if(I(c),e!==e+0)throw e;F(1,0)}}function aa(e,t,n,r,i){var a=L();try{return xi(e,t,n,r,i)}catch(e){if(I(a),e!==e+0)throw e;return F(1,0),0n}}function oa(e,t,n,r){var i=L();try{return Si(e,t,n,r)}catch(e){if(I(i),e!==e+0)throw e;F(1,0)}}function sa(e,t,n,r){var i=L();try{return Ci(e,t,n,r)}catch(e){if(I(i),e!==e+0)throw e;F(1,0)}}function ca(e,t,n,r,i,a,o,s,c,l,u,d){var f=L();try{return wi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(I(f),e!==e+0)throw e;F(1,0)}}function la(e,t,n,r,i,a,o,s,c,l,u){var d=L();try{hi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(I(d),e!==e+0)throw e;F(1,0)}}function ua(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){var g=L();try{gi(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}catch(e){if(I(g),e!==e+0)throw e;F(1,0)}}function da(e,t,n){var r=L();try{return fi(e,t,n)}catch(e){if(I(r),e!==e+0)throw e;F(1,0)}}function fa(e,t,n){var r=L();try{return pi(e,t,n)}catch(e){if(I(r),e!==e+0)throw e;F(1,0)}}function pa(e,t,n,r){var i=L();try{mi(e,t,n,r)}catch(e){if(I(i),e!==e+0)throw e;F(1,0)}}function ma(){if(0<he)ge=ma;else if(i)h?.(t),ce();else{for(var e=me;0<e.length;)e.shift()(t);0<he?ge=ma:(t.calledRun=!0,S||(ce(),h?.(t)))}}return i||(Ai=await de(),ma()),t.PTR_SIZE=4,oe?t:new Promise((e,t)=>{h=e,g=t})}var In,Ln,Rn,zn,Bn,P,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,F,Ir,Lr,I,Rr,L,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,R,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,z,Xi,Zi,Qi,B,$i,ea,ta,na,V,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,H,za,Ba,Va,Ha,U,Ua,W,G,Wa,Ga,Ka,qa,K,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm=t((()=>{n(),In=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,Rn=Object.getOwnPropertyNames,zn=Object.prototype.hasOwnProperty,Bn=(e=>typeof r<`u`?r:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof r<`u`?r:e)[t]}):e)(function(e){if(typeof r<`u`)return r.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),P=(e,t)=>()=>(e&&(t=e(e=0)),t),Vn=(e,t)=>{for(var n in t)In(e,n,{get:t[n],enumerable:!0})},Hn=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Rn(t))!zn.call(e,i)&&i!==n&&In(e,i,{get:()=>t[i],enumerable:!(r=Ln(t,i))||r.enumerable});return e},Un=e=>Hn(In({},`__esModule`,{value:!0}),e),Yn=P(()=>{Wn=new Map,Gn=[],Kn=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Wn.get(e);if(r===void 0)Wn.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Gn.indexOf(e);t!==-1&&Gn.splice(t,1);for(let t=0;t<Gn.length;t++)if(Wn.get(Gn[t]).priority<=n){Gn.splice(t,0,e);return}Gn.push(e)}return}throw TypeError(`not a valid backend`)},qn=async e=>{let t=Wn.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Jn=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Gn:n,i,a=[],o=new Set;for(let e of r){let t=await qn(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),Xn=P(()=>{Yn()}),Qn=P(()=>{Zn=`1.26.0`}),tr=P(()=>{Qn(),$n=`warning`,er={wasm:{},webgl:{},webgpu:{},versions:{common:Zn},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);$n=e}},get logLevel(){return $n}},Object.defineProperty(er,"logLevel",{enumerable:!0})}),rr=P(()=>{tr(),nr=er}),or=P(()=>{ir=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},ar=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),pr=P(()=>{Cr(),sr=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new Sr(`float32`,u,[1,4,n,r]):new Sr(`float32`,u,[1,3,n,r])},cr=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,sr(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(sr(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return sr(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},lr=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new Sr({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},ur=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Sr({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},dr=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new Sr({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},fr=(e,t,n)=>new Sr({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),vr=P(()=>{mr=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),hr=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),gr=!1,_r=()=>{if(!gr){gr=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(mr.set(`int64`,BigInt64Array),hr.set(BigInt64Array,`int64`)),t&&(mr.set(`uint64`,BigUint64Array),hr.set(BigUint64Array,`uint64`)),r?(mr.set(`float16`,n),hr.set(n,`float16`)):mr.set(`float16`,Uint16Array)}}}),xr=P(()=>{Cr(),yr=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},br=(e,t)=>{switch(e.location){case`cpu`:return new Sr(e.type,e.data,t);case`cpu-pinned`:return new Sr({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new Sr({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new Sr({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new Sr({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Cr=P(()=>{or(),pr(),vr(),xr(),Sr=class{constructor(e,t,n){_r();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=mr.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=mr.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=hr.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=yr(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return cr(e,t)}static fromTexture(e,t){return lr(e,t)}static fromGpuBuffer(e,t){return ur(e,t)}static fromMLTensor(e,t){return dr(e,t)}static fromPinnedBuffer(e,t,n){return fr(e,t,n)}toDataURL(e){return ir(this,e)}toImageData(e){return ar(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return br(this,e)}}}),Tr=P(()=>{Cr(),wr=Sr}),Mr=P(()=>{tr(),Er=(e,t)=>{(typeof er.trace>`u`?!er.wasm.trace:!er.trace)||console.timeStamp(`${e}::ORT::${t}`)},Dr=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),Er(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},Or=e=>{(typeof er.trace>`u`?!er.wasm.trace:!er.trace)||Dr(`BEGIN`,e)},kr=e=>{(typeof er.trace>`u`?!er.wasm.trace:!er.trace)||Dr(`END`,e)},Ar=e=>{(typeof er.trace>`u`?!er.wasm.trace:!er.trace)||console.time(`ORT::${e}`)},jr=e=>{(typeof er.trace>`u`?!er.wasm.trace:!er.trace)||console.timeEnd(`ORT::${e}`)}}),Pr=P(()=>{Yn(),Tr(),Mr(),Nr=class e{constructor(e){this.handler=e}async run(e,t,n){Or(),Ar(`InferenceSession.run`);let r={},i={};if(typeof e!=`object`||!e||e instanceof wr||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof wr)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof wr)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof wr?s[e]=t:s[e]=new wr(t.type,t.data,t.dims)}return jr(`InferenceSession.run`),kr(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){Or(),Ar(`InferenceSession.create`);let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await Jn(o),l=await s.createInferenceSessionHandler(a,c);return jr(`InferenceSession.create`),kr(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),F=P(()=>{Pr(),Fr=Nr}),Ir=P(()=>{}),Lr=P(()=>{}),I=P(()=>{}),Rr=P(()=>{}),L={},Vn(L,{InferenceSession:()=>Fr,TRACE:()=>Er,TRACE_EVENT_BEGIN:()=>Ar,TRACE_EVENT_END:()=>jr,TRACE_FUNC_BEGIN:()=>Or,TRACE_FUNC_END:()=>kr,Tensor:()=>wr,env:()=>nr,registerBackend:()=>Kn}),zr=P(()=>{Xn(),rr(),F(),Tr(),Ir(),Lr(),Mr(),I(),Rr()}),Br=P(()=>{}),Vr={},Vn(Vr,{default:()=>Wr}),Gr=P(()=>{dm(),bi(),ui(),Hr=`ort-wasm-proxy-worker`,Ur=globalThis.self?.name===Hr,Ur&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:vi(n.wasm).then(()=>{$p(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;em(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=im(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;am(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:om(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;cm(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},um([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:lm(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),Wr=Ur?null:e=>new Worker(e??$r,{type:`module`,name:Hr})}),Kr={},Vn(Kr,{default:()=>qr}),Yr=P(()=>{qr=Fn,Jr=globalThis.self?.name?.startsWith(`em-pthread`),Jr&&Fn()}),ui=P(()=>{Br(),Xr=typeof location>`u`?void 0:location.origin,Zr=import.meta.url>`file:`&&import.meta.url<`file;`,Qr=()=>Zr?new URL(new URL(`ort.bundle.min.mjs`,import.meta.url).href,Xr).href:import.meta.url,$r=Qr(),ei=()=>{if($r&&!$r.startsWith(`blob:`))return $r.substring(0,$r.lastIndexOf(`/`)+1)},ti=(e,t)=>{try{let n=t??$r;return(n?new URL(e,n):new URL(e)).origin===Xr}catch{return!1}},ni=(e,t)=>{let n=t??$r;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},ri=(e,t)=>`${t??`./`}${e}`,ii=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},ai=async e=>(await i(async()=>{let{default:t}=await import(e);return{default:t}},[])).default,oi=(Gr(),Un(Vr)).default,si=async()=>{if(!$r)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(ti($r))return[void 0,oi()];let e=await ii($r);return[e,oi(e)]},ci=(Yr(),Un(Kr)).default,li=async(e,t,n,r)=>{let i=ci&&!(e||t);if(i)if($r)i=ti($r)||r&&!n;else if(r&&!n)i=!0;else throw Error(`cannot determine the script source URL.`);if(i)return[void 0,ci];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??ni(r,t),a=n&&i&&!ti(i,t),o=a?await ii(i):i??ri(r,t);return[a?o:void 0,await ai(o)]}}}),bi=P(()=>{ui(),fi=!1,pi=!1,mi=!1,hi=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},gi=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},_i=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},vi=async e=>{if(fi)return Promise.resolve();if(pi)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(mi)throw Error(`previous call to 'initializeWebAssembly()' failed.`);pi=!0;let t=e.initTimeout,n=e.numThreads;if(e.simd!==!1){if(e.simd===`relaxed`){if(!_i())throw Error(`Relaxed WebAssembly SIMD is not supported in the current environment.`)}else if(!gi())throw Error(`WebAssembly SIMD is not supported in the current environment.`)}let r=hi();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await li(s,a,n>1,!!u||!!l),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u,r.locateFile=e=>e;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=ei();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{pi=!1,fi=!0,di=t,e(),d&&URL.revokeObjectURL(d)},e=>{pi=!1,mi=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},yi=()=>{if(fi&&di)return di;throw Error(`WebAssembly is not initialized yet.`)}}),wi=P(()=>{bi(),xi=(e,t)=>{let n=yi(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},Si=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)Si(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},Ci=e=>{let t=yi(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Ei=P(()=>{bi(),wi(),Ti=e=>{let t=yi(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=xi(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&Ci(`Can't create run options.`),e?.extra!==void 0&&Si(e.extra,``,new WeakSet,(e,i)=>{let a=xi(e,r),o=xi(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&Ci(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Ni=P(()=>{bi(),wi(),Di=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`layout`:return 3;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Oi=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},ki=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Ai=(e,t,n,r)=>{let i=xi(t,r),a=xi(n,r);yi()._OrtAddSessionConfigEntry(e,i,a)!==0&&Ci(`Can't set a session config entry: ${t} - ${n}.`)},ji=async(e,t,n)=>{let r=t.executionProviders;for(let t of r){let r=typeof t==`string`?t:t.name,i=[];switch(r){case`webnn`:if(r=`WEBNN`,Ai(e,`session.disable_quant_qdq`,`1`,n),Ai(e,`session.disable_qdq_constant_folding`,`1`,n),typeof t!=`string`){let r=t?.deviceType;r&&Ai(e,`deviceType`,r,n)}break;case`webgpu`:if(r=`JS`,typeof t!=`string`){let r=t;if(r?.preferredLayout){if(r.preferredLayout!==`NCHW`&&r.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${r.preferredLayout}`);Ai(e,`preferredLayout`,r.preferredLayout,n)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${r}`)}let a=xi(r,n),o=i.length,s=0,c=0;if(o>0){s=yi()._malloc(o*yi().PTR_SIZE),n.push(s),c=yi()._malloc(o*yi().PTR_SIZE),n.push(c);for(let e=0;e<o;e++)yi().setValue(s+e*yi().PTR_SIZE,i[e][0],`*`),yi().setValue(c+e*yi().PTR_SIZE,i[e][1],`*`)}await yi()._OrtAppendExecutionProvider(e,a,s,c,o)!==0&&Ci(`Can't append execution provider: ${r}.`)}},Mi=async e=>{let t=yi(),n=0,r=[],i=e||{};ki(i);try{let e=Di(i.graphOptimizationLevel??`all`),a=Oi(i.executionMode??`sequential`),o=typeof i.logId==`string`?xi(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log severity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?xi(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&Ci(`Can't create session options.`),i.executionProviders&&await ji(n,i,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);Ai(n,`enableGraphCapture`,i.enableGraphCapture.toString(),r)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=xi(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&Ci(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&Si(i.extra,``,new WeakSet,(e,t)=>{Ai(n,e,t,r)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&Ci(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),R=P(()=>{Pi=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Fi=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Ii=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Li=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Ri=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},zi=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Bi=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Vi=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Ui=P(()=>{Br(),Hi=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Xi=P(()=>{R(),Wi=[`V`,`I`,`W`,`E`,`F`],Gi=(e,t)=>{console.log(`[${Wi[e]},${new Date().toISOString()}]${t}`)},Ji=(e,t)=>{Ki=e,qi=t},Yi=(e,t)=>{let n=Ri(e);n>=Ri(Ki)&&Gi(n,typeof t==`function`?t():t)},z=(...e)=>{qi&&Yi(...e)}}),V=P(()=>{Zi=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},Qi=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=Zi.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},B=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}},$i=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},ea=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!Qi.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},ta=-34028234663852886e22,na=34028234663852886e22}),ia=P(()=>{R(),ra=(e,t)=>new(Li(t))(e)}),ga=P(()=>{R(),Xi(),aa=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),oa=(e,t)=>{if(t===`int32`)return e;let n=aa.get(t);if(!n)throw Error(`WebNN backend does not support data type: ${t}`);let r=n/8;if(e.byteLength%r!==0)throw Error(`Invalid Uint8Array length - must be a multiple of ${r}.`);let i=e.byteLength/r,a=new(Li(t))(e.buffer,e.byteOffset,i);switch(t){case`int64`:case`uint64`:{let e=new Int32Array(i);for(let t=0;t<i;t++){let n=a[t];if(n>2147483647n||n<-2147483648n)throw Error(`Can not convert int64 data to int32 - value out of range.`);e[t]=Number(n)}return new Uint8Array(e.buffer)}case`int8`:case`uint8`:case`uint32`:{if(t===`uint32`&&a.some(e=>e>2147483647))throw Error(`Can not convert uint32 data to int32 - value out of range.`);let e=Int32Array.from(a,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from ${t} to 'int32'`)}},sa=(e,t)=>{if(t===`int32`)return e;if(e.byteLength%4!=0)throw Error(`Invalid Uint8Array length - must be a multiple of 4 (int32).`);let n=e.byteLength/4,r=new Int32Array(e.buffer,e.byteOffset,n);switch(t){case`int64`:{let e=BigInt64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`uint64`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uin64 - negative value found.`);let e=BigUint64Array.from(r,BigInt);return new Uint8Array(e.buffer)}case`int8`:{if(r.some(e=>e<-128||e>127))throw Error(`Can not convert int32 data to int8 - value out of range.`);let e=Int8Array.from(r,Number);return new Uint8Array(e.buffer)}case`uint8`:if(r.some(e=>e<0||e>255))throw Error(`Can not convert int32 data to uint8 - value out of range.`);return Uint8Array.from(r,Number);case`uint32`:{if(r.some(e=>e<0))throw Error(`Can not convert int32 data to uint32 - negative value found.`);let e=Uint32Array.from(r,Number);return new Uint8Array(e.buffer)}default:throw Error(`Unsupported data conversion from 'int32' to ${t}`)}},ca=1,la=()=>ca++,ua=new Map([[`int8`,`int32`],[`uint8`,`int32`],[`uint32`,`int32`],[`int64`,`int32`]]),da=(e,t)=>{let n=aa.get(e);if(!n)throw Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},fa=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:n,tensor:r,dataType:i,shape:a,fallbackDataType:o}=e;this.sessionId=t,this.mlContext=n,this.mlTensor=r,this.dataType=i,this.tensorShape=a,this.fallbackDataType=o}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return da(this.dataType,this.tensorShape)}destroy(){z(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),n=sa(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(n);return}else return n.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}setIsDataConverted(e){this.isDataConverted=e}},pa=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),o;if(!a?.input.dataTypes.includes(t)){if(o=ua.get(t),!o||a?.input.dataTypes.includes(o))throw Error(`WebNN backend does not support data type: ${t}`);z(`verbose`,()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${o}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==da(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let s=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,s,!0,!0,o),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType===`int32`)t=oa(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else z(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?sa(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},ma=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=la();return this.tensorTrackersById.set(e,new pa(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){z(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){z(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=la(),o=new fa({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new pa(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a,o){let s=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(s,t,n)){z(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}z(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${o?`fallbackDataType: ${o},`:``} shape: ${n}}`);let c=await s.createTensor({dataType:o??t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new fa({sessionId:e,context:s,tensor:c,dataType:t,shape:n,fallbackDataType:o})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},ha=(...e)=>new ma(...e)}),ba=P(()=>{R(),bi(),ia(),ga(),Xi(),_a=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),va=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},ya=class{constructor(e){this.tensorManager=ha(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ji(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){z(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){z(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)z(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>va(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){z(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=_a.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){z(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=_a.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!yi().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);z(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return ra(n,t)}}registerMLTensor(e,t,n,r){let i=_a.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return z(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a,o=!1){if(!a)throw Error(`External mounted files are not available.`);let s=e;e.startsWith(`./`)&&(s=e.substring(2));let c=a.get(s);if(!c)throw Error(`File with name ${s} not found in preloaded files.`);if(t+n>c.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let l=c.slice(t,t+n).buffer,u;switch(i.dataType){case`float32`:u=new Float32Array(l);break;case`float16`:u=typeof Float16Array<`u`&&Float16Array.from?new Float16Array(l):new Uint16Array(l);break;case`int32`:u=new Int32Array(l);break;case`uint32`:u=new Uint32Array(l);break;case`int64`:if(o){let e=oa(new Uint8Array(l),`int64`);u=new Int32Array(e.buffer),i.dataType=`int32`}else u=new BigInt64Array(l);break;case`uint64`:u=new BigUint64Array(l);break;case`int8`:u=new Int8Array(l);break;case`int4`:case`uint4`:case`uint8`:u=new Uint8Array(l);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return z(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}} ${o?`(Note: it was int64 data type and registered to int32 as workaround)`:``}`),r.constant(i,u)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}isGraphOutput(e,t){let n=this.sessionGraphOutputs.get(e);return n?n.includes(t):!1}isGraphInputOutputTypeSupported(e,t,n=!0){let r=_a.get(Pi(t)),i=this.mlOpSupportLimitsBySessionId.get(e);return typeof r>`u`?!1:n?!!i?.input.dataTypes.includes(r):!!i?.output.dataTypes.includes(r)}flush(){}}}),xa=P(()=>{}),ja=P(()=>{Xi(),xa(),Sa=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ca=[],wa=e=>Math.ceil(Number(e)/16)*16,Ta=e=>{for(let t=0;t<Ca.length;t++){let n=Ca[t];if(e<=n)return n}return Math.ceil(e/16)*16},Ea=1,Da=()=>Ea++,Oa=async(e,t,n,r)=>{let i=wa(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},ka=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Sa)Ca.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=wa(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),z(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=wa(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return z(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Da();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),z(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),z(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Ta(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:Da(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),z(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return z(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await Oa(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Sa.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(z(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Aa=(...e)=>new ka(...e)}),Pa=P(()=>{Ma=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},Na=e=>new Ma(e)}),K=P(()=>{R(),V(),Fa=64,Ia=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},La=(e,t=1)=>{let n=Ia(e,t);return typeof n==`string`?n:n[0]},Ra=(e,t=1)=>{let n=Ia(e,t);return typeof n==`string`?n:n[1]},H=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:B.computeStrides(e)})}),t},za=e=>e%4==0?4:e%2==0?2:1,Ba=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Va=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,Ha=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,U=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Ua=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=Ia(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${U(g,e,o)};
    let rest${e} = current % ${U(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${U(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),C=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,w=(e,t)=>o<2?`${e}`:`${U(e,t,o)}`,T=(e,t,n)=>o<2?`${e}=${n};`:`${U(e,t,o)}=${n};`,E={},D=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in E)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${w(g,e)} * (${t} % ${w(h,e)})`)}return E[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},O=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),ee=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),k=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${ee(`i2o_${e}(indices)`)};
  }`,A=o<2?``:`
  fn get_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}) -> ${u} {
    return get_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))});
  }`,te=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?ee(`0u`):o===1?ee(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},ne=t=>o<2?ee(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),re=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${O(`i2o_${e}(indices)`,`value`)}
  }`,ie=o<2?``:`
  fn set_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}, value: ${u}) {
    set_${e}ByIndices(${C(s.map(e=>`d${e}`).join(`, `))}, value);
  }`;return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(E).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(ie),t=!0),p.setByIndices&&(e.push(re),t=!0),p.get&&(e.push(A),t=!0),p.getByIndices&&(e.push(k),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${B.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:D,indices:C,indicesGet:w,indicesSet:T,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?O(`0u`,n):o===1?O(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:O,setByIndices:(t,n)=>o<2?O(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:te,getByOffset:ee,getByIndices:ne,usage:r,name:e,strides:g,shape:h,rank:o}},W=(e,t,n,r=1)=>Ua(e,t,n,`input`,r),G=(e,t,n,r=1)=>Ua(e,t,n,`output`,r),Wa=(e,t,n)=>Ua(e,t,n,`atomicOutput`,1),Ga=(e,t,n,r=1)=>Ua(e,t,n,`internal`,r),Ka=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=Fa){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},qa=(e,t)=>new Ka(e,t)}),ro=P(()=>{R(),V(),Pa(),K(),Ja=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Ya=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Xa=(e,t)=>B.sortBasedOnPerm(e,Ya(e.length,t)),Za=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Qa=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},$a=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},eo=(e,t)=>{let n=e.dataType,r=e.dims.length,i=Ya(r,t),a=Xa(e.dims,i),o=e.dims,s=a,c=r<2||$a(i,e.dims),l;if(c)return l=e=>{let t=W(`input`,n,o,4),r=G(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Qa(e.dims,i),f=B.areEqual(d,[2,3,1]),p=B.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=W(`a`,n,o.length),r=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...H(o,s)]}},getShaderSource:l}):(l=e=>{let t=W(`a`,n,o.length),a=G(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Za(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...H(o,s)]}},getShaderSource:l})},to=(e,t)=>{Ja(e.inputs,t.perm),e.compute(eo(e.inputs[0],t.perm))},no=e=>Na({perm:e.perm})}),Eo=P(()=>{R(),V(),K(),$o(),ro(),io={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},ao={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},oo={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},so={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},co=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},lo=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},uo=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},fo=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},po=(e,t)=>{let n=[];if(!fo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},mo=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=B.size(a),l=B.size(o),u=W(`_A`,n[0].dataType,s),d=G(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${oo[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${io[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${ao[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${so[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},ho=(e,t,n,r)=>{let i=e.inputs.length===1?n:Ao(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=B.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=po(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(eo(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=co(s.length,c.dims.length));let[u,d]=lo(c.dims,s),f=u;i.keepDims&&(f=uo(u,o)),e.compute(mo(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},go=(e,t)=>{ho(e,`ReduceMeanShared`,t,`mean`)},_o=(e,t)=>{ho(e,`ReduceL1Shared`,t,`l1`)},vo=(e,t)=>{ho(e,`ReduceL2Shared`,t,`l2`)},yo=(e,t)=>{ho(e,`ReduceLogSumExpShared`,t,`logSumExp`)},bo=(e,t)=>{ho(e,`ReduceMaxShared`,t,`max`)},xo=(e,t)=>{ho(e,`ReduceMinShared`,t,`min`)},So=(e,t)=>{ho(e,`ReduceProdShared`,t,`prod`)},Co=(e,t)=>{ho(e,`ReduceSumShared`,t,`sum`)},wo=(e,t)=>{ho(e,`ReduceSumSquareShared`,t,`sumSquare`)},To=(e,t)=>{ho(e,`ReduceLogSumShared`,t,`logSum`)}}),$o=P(()=>{R(),V(),Pa(),K(),Eo(),Do=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},Oo=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],ko=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=B.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=B.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=W(`_A`,n[0].dataType,u),s=G(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...H(l,c)]})}},Ao=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),Na({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},jo=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:Ao(i,n);e.compute(ko(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?Oo:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},Mo=(e,t)=>{Do(e.inputs),jo(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},No=(e,t)=>{Do(e.inputs),jo(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},Po=(e,t)=>{Do(e.inputs),jo(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},Fo=(e,t)=>{Do(e.inputs),jo(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},Io=(e,t)=>{Do(e.inputs),jo(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},Lo=(e,t)=>{Do(e.inputs),jo(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},Ro=(e,t)=>{Do(e.inputs),jo(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},zo=(e,t)=>{Do(e.inputs),jo(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},Bo=(e,t)=>{Do(e.inputs),jo(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Vo=(e,t)=>{Do(e.inputs),jo(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Ho=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Uo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Lo(e,t):go(e,t)},Wo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?No(e,t):_o(e,t)},Go=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Po(e,t):vo(e,t)},Ko=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fo(e,t):yo(e,t)},qo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Io(e,t):bo(e,t)},Jo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ro(e,t):xo(e,t)},Yo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?zo(e,t):So(e,t)},Xo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Bo(e,t):Co(e,t)},Zo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vo(e,t):wo(e,t)},Qo=(e,t)=>{Ho(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Mo(e,t):To(e,t)}}),is=P(()=>{R(),Pa(),$o(),es=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},ts=(e,t)=>{es(e.inputs),e.compute(ko(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},ns=(e,t)=>{es(e.inputs),e.compute(ko(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},rs=e=>Na(e)}),ps=P(()=>{R(),V(),xa(),K(),as=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},os=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,ss=(e,t,n,r,i,a,o,s)=>{let c=za(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=La(e.dataType,c),m=Ra(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=G(`x`,e.dataType,e.dims,c),r=[n],i=o?W(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=Ra(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${os(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:i,z:t*n},programUniforms:f})}},cs=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=za(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&B.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=W(`q`,t.dataType,t.dims,g),o=[a,W(`key`,n.dataType,n.dims,g)];if(b){let e=W(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(W(`attention_bias`,i.dataType,i.dims));let l=s?W(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?W(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=G(`output`,t.dataType,u),_=[h];d&&_.push(G(`present_key`,t.dataType,p,g));let v=Ra(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${os(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},ls=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&B.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=W(`probs`,t.dataType,t.dims),a=[i,W(`v`,n.dataType,n.dims)];_&&a.push(W(`past_value`,r.dataType,r.dims));let c=o?W(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?W(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[G(`output`,t.dataType,m)];return d&&f.push(G(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${os(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},us=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?o:void 0,m=f>1?s:void 0,h=f>1?l.pastSequenceLength:0,g=h+l.kvSequenceLength,_=c&&B.size(c.dims)>0?c:void 0,v=[t,n];p&&B.size(p.dims)>0&&v.push(p),_&&v.push(_),u&&v.push(u),d&&v.push(d);let y=e.compute(cs(f,t,n,p,_,l,h,u,d),{inputs:v,outputs:f>1?[-1,1]:[-1]})[0];e.compute(ss(y,l.batchSize,l.numHeads,h,l.sequenceLength,g,u,d),{inputs:u&&d?[y,u,d]:[y],outputs:[]});let b=[y,r];m&&B.size(m.dims)>0&&b.push(m),u&&b.push(u),d&&b.push(d),e.compute(ls(f,y,r,m,l,h,u,d),{inputs:b,outputs:f>1?[0,2]:[0]})},ds=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=G(`output_q`,s[0].dataType,n),r=G(`output_k`,s[0].dataType,n),i=G(`output_v`,s[0].dataType,n),a=W(`input`,s[0].dataType,s[0].dims),o=W(`weight`,s[1].dataType,s[1].dims),c=W(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},fs=(e,t)=>{let n=as(e.inputs,t),[r,i,a]=ds(e,n);return us(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),vs=P(()=>{zr(),R(),V(),Pa(),K(),ms=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},hs=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?za(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=B.size(a)/o,l=r,u=l?a.length:a,d=W(`x`,e[0].dataType,e[0].dims,o),f=W(`scale`,e[1].dataType,e[1].dims,s),p=W(`bias`,e[2].dataType,e[2].dims,s),m=W(`inputMean`,e[3].dataType,e[3].dims,s),h=W(`inputVar`,e[4].dataType,e[4].dims,s),g=G(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...H(a)]:[{type:12,data:c}]})}},gs=e=>Na(e),_s=(e,t)=>{let{inputs:n,outputCount:r}=e,i=gs({...t,outputCount:r});if(nr.webgpu.validateInputContent&&ms(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(hs(n,i))}}),Ss=P(()=>{V(),K(),ys=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},bs=e=>{let t=e[0].dims,n=e[0].dims[2],r=B.size(t)/4,i=e[0].dataType,a=W(`input`,i,t,4),o=W(`bias`,i,[n],4),s=W(`residual`,i,t,4),c=G(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},xs=e=>{ys(e.inputs),e.compute(bs(e.inputs))}}),mc=P(()=>{R(),V(),Pa(),K(),Cs=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=W(`inputData`,n,[s],4),u=G(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},ws=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(B.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>Cs(t,B.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(B.size(t[0].dims)/64/4)},programUniforms:c})}},Ts=e=>{e.compute(ws(e.inputs[0],`Abs`,`abs`))},Es=e=>{e.compute(ws(e.inputs[0],`Acos`,`acos`))},Ds=e=>{e.compute(ws(e.inputs[0],`Acosh`,`acosh`))},Os=e=>{e.compute(ws(e.inputs[0],`Asin`,`asin`))},ks=e=>{e.compute(ws(e.inputs[0],`Asinh`,`asinh`))},As=e=>{e.compute(ws(e.inputs[0],`Atan`,`atan`))},js=e=>{e.compute(ws(e.inputs[0],`Atanh`,`atanh`))},Ms=e=>Na(e),Ns=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ws(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},Ps=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return Na({min:t,max:n})},Fs=(e,t)=>{let n=t||Ps(e.inputs),r=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},Is=e=>{e.compute(ws(e.inputs[0],`Ceil`,`ceil`))},Ls=e=>{e.compute(ws(e.inputs[0],`Cos`,`cos`))},Rs=e=>{e.compute(ws(e.inputs[0],`Cosh`,`cosh`))},zs=e=>Na(e),Bs=(e,t)=>{let n=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Vs=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Hs=e=>{let t=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,Vs(t)))},Us=e=>{e.compute(ws(e.inputs[0],`Exp`,`exp`))},Ws=e=>{e.compute(ws(e.inputs[0],`Floor`,`floor`))},Gs=e=>{let t=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,Vs(t)))},Ks=(e,t)=>{let n=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},qs=e=>{e.compute(ws(e.inputs[0],`Not`,e=>`!${e}`))},Js=e=>{e.compute(ws(e.inputs[0],`Neg`,e=>`-${e}`))},Ys=e=>{e.compute(ws(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Xs=e=>{let t=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Zs=e=>{e.compute(ws(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Qs=e=>Na(e),$s=(e,t)=>{let n=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},ec=e=>{e.compute(ws(e.inputs[0],`Sin`,`sin`))},tc=e=>{e.compute(ws(e.inputs[0],`Sinh`,`sinh`))},nc=e=>{e.compute(ws(e.inputs[0],`Sqrt`,`sqrt`))},rc=e=>{e.compute(ws(e.inputs[0],`Tan`,`tan`))},ic=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ac=e=>{e.compute(ws(e.inputs[0],`Tanh`,ic))},oc=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ic(`v`)};
}
`,sc=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,cc=e=>{let t=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`FastGelu`,sc,oc(t),void 0,e.inputs[0].dataType))},lc=(e,t)=>{let n=Ra(e.inputs[0].dataType);return e.compute(ws(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},uc=e=>{e.compute(ws(e.inputs[0],`Log`,`log`))},dc=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,fc=e=>`quick_gelu_impl(${e})`,pc=(e,t)=>{let n=Ra(e.inputs[0].dataType);e.compute(ws(e.inputs[0],`QuickGelu`,fc,dc(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),vc=P(()=>{V(),K(),mc(),hc=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},gc=e=>{let t=e[0].dims.slice();t[2]/=2;let n=W(`input`,e[0].dataType,e[0].dims,4),r=W(`bias`,e[0].dataType,[e[0].dims[2]],4),i=G(`output`,e[0].dataType,t,4),a=B.size(t)/4,o=La(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${Vs(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},_c=e=>{hc(e.inputs),e.compute(gc(e.inputs))}}),Mc=P(()=>{R(),V(),K(),yc=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=G(`outputData`,u,r.length,4),h=W(`aData`,c,t.length,4),g=W(`bData`,l,n.length,4),_;if(i)if(a){let e=B.size(t)===1,r=B.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},bc=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(Number),c=r.dims.map(Number),l=!B.areEqual(s,c),u=s,d=B.size(s),f=!1,p=!1,m=[l];if(l){let e=Qi.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=B.size(u);let t=B.size(s)===1,n=B.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>yc(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(B.size(u)/4)},...H(s,c,u)]})}},xc=(e,t,n,r,i,a)=>{e.compute(bc(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},Sc=e=>{xc(e,`Add`,(e,t)=>`${e}+${t}`)},Cc=e=>{xc(e,`Div`,(e,t)=>`${e}/${t}`)},wc=e=>{xc(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},Tc=e=>{xc(e,`Mul`,(e,t)=>`${e}*${t}`)},Ec=e=>{let t=W(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;xc(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Dc=e=>{xc(e,`Sub`,(e,t)=>`${e}-${t}`)},Oc=e=>{xc(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},kc=e=>{xc(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},Ac=e=>{xc(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},jc=e=>{xc(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),zc=P(()=>{R(),V(),Pa(),K(),Nc=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},Pc=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Fc=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},Ic=(e,t,n,r)=>{let i=B.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=W(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...H(e[t].dims));u.push(...H(n));let d=G(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${Pc(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Fc(o,d)}
  }`}},Lc=(e,t)=>{let n=e.inputs,r=n[0].dims,i=B.normalizeAxis(t.axis,r.length);Nc(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>B.size(e.dims)>0);e.compute(Ic(o,i,a,n[0].dataType),{inputs:o})},Rc=e=>Na({axis:e.axis})}),Wc=P(()=>{R(),V(),Bc=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},Vc=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},Hc=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},Uc=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t===`Clip`){let[n,r]=e?.activation_params||[ta,na];return{activation:t,clipMax:r,clipMin:n}}else if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),qc=P(()=>{Gc=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},Kc=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Yc=P(()=>{Jc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Qc=P(()=>{R(),V(),K(),Wc(),Xc=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${U(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,U(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},Zc=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=za(l),f=za(u),p=za(c),m=B.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[B.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return Vc(t,v),v.push(...H(g,o,s)),h&&v.push(...H(e[2].dims)),v.push(...H(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Ga(`batch_dims`,e[0].dataType,g.length),c=W(`a`,e[0].dataType,o.length,f),l=W(`b`,e[1].dataType,s.length,d),u=G(`output`,e[0].dataType,_.length,d),m=La(u.type.tensor),v=Bc(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(W(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];Hc(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Xc(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Xc(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),sl=P(()=>{R(),V(),K(),Wc(),Qc(),qc(),$c=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,el=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,tl=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${$c(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${el(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},nl=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,rl=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,il=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(!(f%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${nl(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${nl(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${rl(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},al=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=La(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Gc(e,l)} {
      var value = ${Gc(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Xc(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Gc(e,l)} {
      var value = ${Gc(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Xc(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Gc(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${Gc(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},ol=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=B.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],C=S.length,w=[d,f,m/y],T=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];Vc(t,T),T.push(...H(u,b,S));let E=[`rank`,`rank`],D=e.length>2;return D&&(T.push(...H(e[2].dims)),E.push(`rank`)),T.push(...H(w)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:T}),getShaderSource:n=>{let r=u.length,a=Ga(`batchDims`,e[0].dataType,r,1),o=La(e[0].dataType),s=W(`a`,e[0].dataType,x,y),c=W(`b`,e[1].dataType,C,y),l=G(`result`,e[0].dataType,w.length,y),d=[s,c];if(D){let t=i?y:1;d.push(W(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];Hc(t,f);let p=La(l.type.tensor),m=Bc(t,l.type.value,p),v=al(y,D,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?tl(g,_,o,a):il(g,_,o,a)}
                   `}}}}),ul=P(()=>{R(),Xi(),K(),Wc(),qc(),Yc(),sl(),cl=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${Gc(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${Gc(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${Gc(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${Gc(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${Gc(s,l)}(0.0);`,x=Gc(c,l),S=Gc(e?o:s,l),C=Gc(e?s:o,l),w=Bc(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${Kc(i)}
      ${w}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},ll=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];z(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],C=v[0]*y[0],w=Math.max(v[0]*x,v[1]),T=r%S===0,E=i%C===0,D=a%w===0,O=h?[x,4,4]:[1,1,1],ee=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Vc(t,ee),ee.push(...H(e[0].dims,e[1].dims));let k=[`rank`,`rank`];return o&&(ee.push(...H(e[2].dims)),k.push(`rank`)),ee.push(...H(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${T};${E};${D};${S};${C};${w}`,inputDependencies:k},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:ee}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];Hc(t,i);let a=h?4:1,c=La(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[W(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),W(`w`,e[1].dataType,e[1].dims.length,a)],f=G(`result`,e[0].dataType,n.length,a);if(o){let t=W(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${Jc(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${cl(l,T,E,D,o,t,O[0],O[1],O[2],c)}
        ${h?tl(y,v,c,void 0,!l,w):il(y,v,c,void 0,!l,w,!1,void 0,s)}`}}}}),yl=P(()=>{R(),Xi(),V(),K(),Wc(),qc(),dl=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},fl=e=>typeof e==`number`?[e,e,e]:e,pl=(e,t)=>t<=1?e:e+(e-1)*(t-1),ml=(e,t,n,r=1)=>{let i=pl(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},hl=(e,t,n,r,i)=>{i??=ml(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},gl=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=hl([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=hl([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},_l=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=fl(n),[y,b,x]=fl(r),S=pl(p,y),C=pl(m,b),w=pl(h,x),{padInfo:T,outDepth:E,outHeight:D,outWidth:O}=gl(i,c,l,u,g,_,v,S,C,w),ee=a?f*d:f,k=[0,0,0,0,0];return o===`channelsFirst`?k=[s,ee,E,D,O]:o===`channelsLast`&&(k=[s,E,D,O,ee]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:E,outHeight:D,outWidth:O,outChannels:ee,padInfo:T,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:C,effectiveFilterWidth:w,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:k,filterShape:t}},vl=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(dl(c.x.map(e=>n[e]))/s[0]),1,1];z(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:B.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];Vc(t,u),u.push(...H(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...H(e[2].dims)),d.push(`rank`)),u.push(...H(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];Hc(t,s);let c=La(e[0].dataType),l=W(`x`,e[0].dataType,e[0].dims.length,1),u=W(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=G(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=W(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?U(`coords`,4,5):U(`coords`,1,5)}];
        }`}let h=Gc(1,c),g=Bc(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${U(`coords`,0,l.rank)};
              let d2 = ${o?U(`coords`,l.rank-1,l.rank):U(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?U(`coords`,1,l.rank):U(`coords`,2,l.rank)},
              ${o?U(`coords`,2,l.rank):U(`coords`,3,l.rank)},
              ${o?U(`coords`,3,l.rank):U(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?U(`uniforms.x_shape`,1,l.rank):U(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?U(`uniforms.x_shape`,2,l.rank):U(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?U(`uniforms.x_shape`,3,l.rank):U(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?U(`uniforms.x_shape`,4,l.rank):U(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),Sl=P(()=>{R(),V(),K(),Wc(),bl=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?za(l):1,f=B.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];Vc(t,p),p.push(...H(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...H([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=G(`output`,e[0].dataType,n.length,d),u=La(l.type.tensor),f=Bc(t,l.type.value,u),p=W(`x`,e[0].dataType,o.length),m=W(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];Hc(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},xl=(e,t,n,r)=>{let i=e.length>2,a=za(n[3]),o=za(n[2]),s=B.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Vc(t,d),d.push(...H(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=G(`output`,e[0].dataType,u.length,a),s=La(r.type.tensor),d=Bc(t,r.type.value,s),p=W(`x`,e[0].dataType,c.length,a),m=W(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(W(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return Hc(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),Ml=P(()=>{V(),ul(),yl(),sl(),Sl(),Wc(),Qc(),ro(),Cl=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},wl=[2,3,1,0],Tl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},El=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();$i.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},Dl=e=>{let t=Uc(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},Ol=(e,t,n,r)=>{let i=n.format===`NHWC`,a=Cl(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(eo(t[1],wl),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(xl(o,n,a,r),{inputs:o}):e.compute(bl(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(eo(t[1],wl),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(Zc(v,n,a,_,i,r),{inputs:v}):e.compute(ol(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(eo(t[1],wl),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(ll(_,n,a,v,y,b,o,!0,r),{inputs:_})},kl=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=El({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);Ol(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Al=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=El(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=_l(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(vl(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},jl=(e,t)=>{if(Tl(e.inputs,t),e.inputs[0].dims.length===3)kl(e,t);else if(e.inputs[0].dims.length===5)Al(e,e.inputs,t);else{let n=El(t,e.inputs);Ol(e,e.inputs,n)}}}),Pl=P(()=>{R(),Xi(),V(),K(),Nl=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?za(c):1,d=a&&l===1&&c>=4,f=d?Math.floor(c/4)*4:Math.floor(c/u)*u,p=c-f,m=a?za(l):1,h=a?l===1?u:m:1,g=B.size(i)/m,_=[Math.ceil(g/64),1,1];z(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let v=[`rank`,`rank`],y=[t.strides[0],t.strides[1]],b=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],x=[t.dilations[0],t.dilations[1]],S=[b[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),b[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],C=[S[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),S[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],w=[{type:12,data:g},{type:12,data:y},{type:12,data:b},{type:12,data:x},{type:12,data:S},{type:6,data:C},{type:12,data:f},{type:12,data:c},{type:12,data:l},...H(e[0].dims,e[1].dims)];return r&&(w.push(...H(e[2].dims)),v.push(`rank`)),w.push(...H(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${h}${m}${d}${p}`,inputDependencies:v},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:w}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:y.length},{name:`filter_dims`,type:`u32`,length:b.length},{name:`dilations`,type:`u32`,length:b.length},{name:`effective_filter_dims`,type:`u32`,length:S.length},{name:`pads`,type:`i32`,length:C.length},{name:`input_channels_per_group_int`,type:`u32`},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=La(e[0].dataType),s=a?1:2,c=a?2:3,l=a?3:1,f=W(`W`,e[1].dataType,e[1].dims.length,h),g=W(`Dy`,e[0].dataType,e[0].dims.length,u),_=[g,f];r&&_.push(W(`bias`,e[2].dataType,[i[l]].length,m));let v=G(`result`,e[0].dataType,i.length,m),x=`
            let outputIndices = ${v.offsetToIndices(`global_idx * ${m}`)};
            let batch = ${v.indicesGet(`outputIndices`,0)};
            let d1 = ${v.indicesGet(`outputIndices`,l)};
            let r = ${v.indicesGet(`outputIndices`,s)};
            let c = ${v.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${v.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${d?`
                var x_offset = ${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u};
                var w_offset = ${f.indicesToOffset(`${f.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${h};
                  `:``}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${d?4:u}) {
                  ${(()=>{let e=``;if(d)u===4?e+=`
        let xValue = ${g.getByOffset(`x_offset`)};
        let wValue = ${f.getByOffset(`w_offset`)};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:u===2?e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}));
          x_offset += 2u;
          w_offset += 2u;`:u===1&&(e+=`
          dotProd = dotProd + dot(vec4<${o}>(${g.getByOffset(`x_offset`)}, ${g.getByOffset(`x_offset + 1u`)}, ${g.getByOffset(`x_offset + 2u`)}, ${g.getByOffset(`x_offset + 3u`)}), vec4<${o}>(${f.getByOffset(`w_offset`)}, ${f.getByOffset(`w_offset + 1u`)}, ${f.getByOffset(`w_offset + 2u`)}, ${f.getByOffset(`w_offset + 3u`)}));
          x_offset += 4u;
          w_offset += 4u;`);else if(e+=`
                  let xValue = ${a?g.getByOffset(`${g.indicesToOffset(`${g.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):g.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
        `,u===1)e+=`
          let w_offset = ${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${f.getByOffset(`w_offset / ${h}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${f.getByOffset(`${f.indicesToOffset(`${f.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${h}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${d?4:u};
                }
                ${(()=>{if(p===0)return``;if(!d)throw Error(`packInputAs4 ${d} is not true.`);let e=``;if(u===1){e+=`dotProd = dotProd`;for(let t=0;t<p;t++)e+=`
            + ${g.getByOffset(`x_offset + ${t}`)} * ${f.getByOffset(`w_offset + ${t}`)}`;e+=`;`}else if(u===2){if(p!==2)throw Error(`Invalid inputChannelsRemainder ${p}.`);e+=`
          let xValue = ${g.getByOffset(`x_offset`)};
          let wValue = ${f.getByOffset(`w_offset`)};
          dotProd = dotProd + dot(xValue, wValue);`}return e})()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${m}]`:``};
            ${v.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(..._,v)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${x}}`}}}}),Wl=P(()=>{Pl(),Wc(),ro(),Fl=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,Il=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},Ll=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=Fl(s,o[i],a[i],t[f],n[i],p);Il(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},Rl=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}Ll(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},zl=e=>{let t=Uc(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group??1,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},Bl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},Vl=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(eo(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(Nl(a,n,r),{inputs:a})},Hl=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=Rl({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);Vl(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Ul=(e,t)=>{if(Bl(e.inputs,t),e.inputs[0].dims.length===3)Hl(e,t);else{let n=Rl(t,e.inputs);Vl(e,e.inputs,n)}}}),Jl=P(()=>{R(),V(),Pa(),K(),Gl=(e,t,n,r)=>{let i=B.size(t),a=t.length,o=W(`input`,e,a),s=G(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=B.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...H(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=U(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Kl=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(Gl(r,n,i,t),{inputs:[0]})},ql=e=>{let t=e.exclusive===1,n=e.reverse===1;return Na({exclusive:t,reverse:n})}}),eu=P(()=>{R(),V(),Pa(),K(),Yl=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},Xl=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Zl=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=W(`a`,p,f),h=G(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=B.size(t),u=d.dims,f=B.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...H(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${Xl(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Ql=(e,t)=>{Yl(e.inputs),e.compute(Zl(e.inputs[0],t))},$l=e=>Na({blocksize:e.blocksize,mode:e.mode,format:e.format})}),fu=P(()=>{R(),V(),Pa(),K(),tu=`[a-zA-Z]|\\.\\.\\.`,nu=`(`+tu+`)+`,ru=`^`+nu+`$`,iu=`(`+nu+`,)*`+nu,au=`^`+iu+`$`,ou=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},su=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(au)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(ru)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(nu)))throw Error(`Invalid RHS`);r.match(RegExp(tu,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(ru))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(tu,`g`)),l=new ou(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},cu=e=>e+`_max`,lu=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>W(`input${n}`,t,e)),a=B.size(r),o=G(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...H(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...H(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${cu(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${cu(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},uu=(e,t)=>{let n=new su(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(lu(i,e.inputs[0].dataType,n,r))},du=e=>{let t=e.equation.replace(/\s+/g,``);return Na({equation:t})}}),vu=P(()=>{R(),V(),K(),pu=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},mu=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},hu=(e,t)=>e.length>t.length?mu(e,t):mu(t,e),gu=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=hu(t,n),i=e[0].dataType,a=i===9||B.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(B.size(r)/s),l=e=>{let n=W(`input`,i,t.length,o),a=G(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...H(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},_u=e=>{pu(e.inputs),e.compute(gu(e.inputs),{inputs:[0]})}}),xu=P(()=>{R(),V(),K(),mc(),yu=e=>{let t=e[0].dataType,n=B.size(e[0].dims),r=B.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=W(`x`,t,[1],4),r=W(`bias`,t,[1],4),a=G(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${oc(Ra(t))}

    ${e.mainStart(Fa)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,sc(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/Fa/4)}})}},bu=e=>{e.inputs.length<2||B.size(e.inputs[1].dims)===0?cc(e):e.compute(yu(e.inputs))}}),Eu=P(()=>{R(),V(),Pa(),K(),Su=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},Cu=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(B.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...H(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=W(`data`,e[0].dataType,e[0].dims.length,c),s=W(`inputIndices`,e[1].dataType,e[1].dims.length),l=G(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},wu=e=>Na({axis:e.axis}),Tu=(e,t)=>{let n=e.inputs;Su(n),e.compute(Cu(e.inputs,t))}}),Au=P(()=>{R(),V(),K(),Du=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...H(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[W(`indices_data`,t.dataType,t.dims.length),G(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},Ou=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=B.sizeToDimension(a,a.length-1),c=B.sizeFromDimension(r,t.batchDims+o),l=B.sizeToDimension(r,t.batchDims),u=B.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=Du(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=B.size(g),v=[{type:12,data:_},{type:12,data:c},...H(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=W(`data`,n[0].dataType,n[0].dims.length),r=W(`slice_offsets`,12,m.dims.length),i=G(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},ku=e=>({batchDims:e.batch_dims,cacheKey:``})}),Fu=P(()=>{R(),V(),Pa(),K(),ju=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=B.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},Mu=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=B.normalizeAxis(t.gatherAxis,i),o=B.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=B.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...H(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=W(`data`,e[0].dataType,e[0].dims.length),o=W(`inputIndices`,e[1].dataType,e[1].dims.length),c=W(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?W(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=G(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${Ra(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},Nu=(e,t)=>{let n=e.inputs;ju(n,t),e.compute(Mu(e.inputs,t))},Pu=e=>Na({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Bu=P(()=>{R(),V(),Pa(),K(),Iu=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},Lu=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=B.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=B.size(l),d=W(`input`,r,i),f=W(`indicesInput`,o,a.length),p=G(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...H(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},Ru=e=>Na({axis:e.axis}),zu=(e,t)=>{let n=e.inputs;Iu(n),e.compute(Lu(e.inputs,t))}}),Gu=P(()=>{R(),V(),K(),Vu=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},Hu=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=ea.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);B.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...H(e[2].dims)),d.push(`rank`)),u.push(...H(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=W(`a`,e[0].dataType,e[0].dims),i=W(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=W(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=G(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},Uu=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Wu=(e,t)=>{Vu(e.inputs),e.compute(Hu(e.inputs,t))}}),od=P(()=>{R(),V(),Pa(),K(),[Ku,qu,Ju,Yu]=[0,1,2,3],Xu=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Zu=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Qu=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,$u=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,ed=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,td=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ku}] = batch;
     indices[${qu}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ju}] = u32(r);
            indices[${Yu}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case`border`:return`
          indices[${Ju}] = u32(clamp(r, 0, H - 1));
          indices[${Yu}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Ju}] = gs_reflect(r, border[1], border[3]);
          indices[${Yu}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,nd=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ku}], indices[${qu}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ku}], indices[${qu}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ku}], indices[${qu}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ku}], indices[${qu}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ku}], indices[${qu}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ku}], indices[${qu}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,rd=(e,t)=>{let n=W(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=W(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ku,qu,Ju,Yu]=[0,3,1,2]);let o=G(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:B.size(a)},...H(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=B.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Zu}
  ${Qu(s)}
  ${$u(t)}
  ${ed(t)}
  ${td(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Ju}]);
      let W_in = i32(uniforms.x_shape[${Yu}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Ku}], indices[${Ju}], indices[${Yu}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${nd(o,s,t)}
  }`}},id=(e,t)=>{Xu(e.inputs),e.compute(rd(e.inputs,t))},ad=e=>Na({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),md=P(()=>{R(),V(),Pa(),xa(),ps(),K(),ro(),sd=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,cd=(e,t)=>{let n=e[0],r=sd(e,1),i=sd(e,2),a=sd(e,3),o=sd(e,4),s=sd(e,5),c=sd(e,6),l=sd(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&B.size(c.dims)&&B.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&B.size(c.dims)||l&&B.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&B.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&B.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&B.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&B.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&B.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&B.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},ld=e=>Na({...e}),ud=Na({perm:[0,2,1,3]}),dd=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=B.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=G(`qkv_with_bias`,t.dataType,s),i=W(`qkv`,t.dataType,s),a=W(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},fd=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&B.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=dd(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(eo(c,ud.perm),{inputs:[c],outputs:[-1]})[0]}else return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(eo(c,ud.perm),{inputs:[c],outputs:[-1]})[0]},pd=(e,t)=>{let n=cd(e.inputs,t),r=e.inputs[0],i=sd(e.inputs,1),a=sd(e.inputs,2),o=sd(e.inputs,3),s=sd(e.inputs,4),c=sd(e.inputs,5),l=sd(e.inputs,6),u=sd(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=fd(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return us(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=fd(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=fd(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);us(e,f,p,m,s,void 0,l,u,c,n)}}),Sd=P(()=>{R(),V(),Pa(),K(),hd=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},gd=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),Na({numOutputs:r,axis:t.axis,splitSizes:n})},_d=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${U(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,vd=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},yd=(e,t)=>{let n=e[0].dims,r=B.size(n),i=e[0].dataType,a=B.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=W(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=G(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...H(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${_d(c.length)}
  ${vd(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${U(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},bd=(e,t)=>{hd(e.inputs);let n=e.inputs.length===1?t:gd(e.inputs,t);e.compute(yd(e.inputs,n),{inputs:[0]})},xd=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes length must be equal`);return Na({axis:t,numOutputs:r,splitSizes:n})}}),Ed=P(()=>{R(),V(),Pa(),K(),Cd=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!B.areEqual(r.dims,[])&&!B.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!B.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=B.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`);if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`)},wd=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=B.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=B.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...H(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:Na({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=W(`input`,e[0].dataType,e[0].dims.length),i=W(`position_ids`,e[1].dataType,e[1].dims.length),a=W(`cos_cache`,e[2].dataType,e[2].dims.length),o=W(`sin_cache`,e[3].dataType,e[3].dims.length),s=G(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(Fa)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,G(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(f)/Fa)},programUniforms:m})}},Td=(e,t)=>{Cd(e.inputs,t),e.compute(wd(e.inputs,t))}}),Md=P(()=>{Pa(),R(),ps(),md(),Sd(),ro(),Ed(),K(),Dd=(e,t)=>{if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.doRotary!==0&&e.length<=7)throw Error(`cos_cast and sin_cache are expected if do_rotary attribute is non-zero`);if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y){if(y.dims.length===0)throw Error(`seqlens_k must be at least 1D, got scalar.`);let e=y.dims.reduce((e,t)=>e*t,1);if(e!==s)throw Error(`seqlens_k must have batch_size (${s}) elements, got ${e}.`);for(let e=0;e<y.dims.length;e++)if(y.dims[e]!==1&&y.dims[e]!==s)throw Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${s}), got dims[${e}] = ${y.dims[e]}.`)}return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},Od=Na({perm:[0,2,1,3]}),kd=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(eo(r,Od.perm),{inputs:[r],outputs:[-1]})[0]),r},Ad=(e,t,n,r)=>{let i=[`type`,`type`],a=[e*t],o=e*t,s=[{type:12,data:o},{type:12,data:t},{type:12,data:e}];return{name:`GeneratePositionIds`,shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:a,dataType:7}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s}),getShaderSource:e=>{let t=W(`seq_lens`,n.dataType,n.dims),i=W(`total_seq_lens`,r.dataType,r.dims),o=G(`pos_ids`,7,a);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`batch_size`,type:`u32`}]).declareVariables(t,i,o)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let total_sequence_length = u32(${i.getByOffset(`0`)});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${t.getByOffset(`batch_idx`)};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${o.setByOffset(`global_idx`,`pos_id`)}
    } else if (global_idx < uniforms.batch_size) {
      ${o.setByOffset(`global_idx`,`seqlen`)}
    };
  }
  `}}},jd=(e,t)=>{let n=Dd(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=Na({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(yd([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h,g;if(t.doRotary){let r=e.compute(Ad(n.batchSize,n.sequenceLength,c,l),{inputs:[c,l],outputs:[-1]})[0],i=e.inputs[7],a=e.inputs[8],o=Na({interleaved:t.rotaryInterleaved!==0,numHeads:n.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),s=[f,r,i,a],u=[-1];h=e.compute(wd(s,o),{inputs:s,outputs:u})[0],s.splice(0,1,p);let d=Na({interleaved:t.rotaryInterleaved!==0,numHeads:n.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});g=e.compute(wd(s,d),{inputs:s,outputs:u})[0]}let _=fd(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,t.doRotary?h:f,void 0,0),v=kd(e,t.doRotary?g:p,n),y=kd(e,m,n);us(e,_,v,y,void 0,void 0,o,s,void 0,n,c,l)}}),Ld=P(()=>{R(),V(),ro(),K(),Nd=(e,t,n,r,i,a,o,s)=>{let c=za(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...H(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=W(`x`,t.dataType,3,c),a=[i,W(`scale`,n.dataType,n.dims),W(`bias`,r.dataType,r.dims),G(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Ha(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${Ha(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},Pd=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=B.sizeFromDimension(r,2),c=za(s),l=B.size(i)/c,u=Nd(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...H(d,f,d)]}),getShaderSource:e=>{let n=W(`x`,t[0].dataType,d.length,c),r=W(`scale_shift`,1,f.length,2),i=G(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},Fd=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=B.sizeFromDimension(r,1)/o,c=za(o),l=B.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(eo(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=Nd(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=La(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=W(`input`,t[0].dataType,t[0].dims,c),s=G(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},Id=(e,t)=>{t.format===`NHWC`?Fd(e,e.inputs,t):Pd(e,e.inputs,t)}}),Vd=P(()=>{R(),V(),K(),Rd=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},zd=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=B.normalizeAxis(t.axis,i.length),l=B.sizeToDimension(i,c),u=B.sizeFromDimension(i,c),d=B.size(a.dims),f=o?B.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=za(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=La(e[0].dataType),i=[W(`x`,e[0].dataType,e[0].dims,m),W(`scale`,a.dataType,a.dims,m)];return o&&i.push(W(`bias`,o.dataType,o.dims,m)),i.push(G(`output`,e[0].dataType,s,m)),_&&i.push(G(`mean_data_output`,1,p)),v&&i.push(G(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Ba(`f32`,m)};
    var mean_square_vector = ${Ba(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Va(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Ha(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Ha(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Va(n,m,`x[j + offset]`)};
      let f32scale = ${Va(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Va(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},Bd=(e,t)=>{Rd(e.inputs),e.compute(zd(e.inputs,t,e.outputCount))}}),Wd=P(()=>{V(),Qc(),sl(),Hd=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},Ud=e=>{Hd(e.inputs);let t=Qi.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(Zc(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=B.size(e.inputs[0].dims.slice(0,-2)),o=B.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(ol(c,{activation:``},t,s),{inputs:c})}else e.compute(ol(e.inputs,{activation:``},t))}}}),Xd=P(()=>{R(),V(),Pa(),K(),Gd=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!B.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(B.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.n*(t.bits===8?i:Math.floor((i*t.bits+7)/8));if(B.size(n)!==r)throw Error(`zeroPoints input size error.`)}},Kd=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=B.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=za(t.k),f=za(l),p=za(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=B.size(m)/p/h,_=[],v=[c,i,a/d],y=B.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...H(v)),_.push(...H(y)),_.push(...H(e[2].dims)),e.length===4&&_.push(...H(B.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...H(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,y.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=G(`output`,e[0].dataType,u,p),g=La(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=Math.floor(32/t.bits),S=Math.floor(x/8),C=()=>{let e=``;for(let n=0;n<S;n++){let r=n*t.bits*4,a=r+t.bits;e+=`
          // reuse a data (pass ${n})
            var input_offset${n>0?n:``} = ${n===0?i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`):`input_offset`};
            var a_data${n>0?n:``}: ${_};
            for (var j${n>0?n:``}: u32 = 0; j${n>0?n:``} < ${8/d}; j${n>0?n:``}++) {
              a_data${n>0?n:``}[j${n>0?n:``}] = ${i.getByOffset(`input_offset${n>0?n:``}`)};
              input_offset${n>0?n:``}++;
            }
          `;for(let i=0;i<p*h;i++)e+=`
            b_value = ${f===1?`b${i}_data`:`b${i}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${n*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${r}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${a}u) & b_mask);`}
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,t)=>`(b_quantized_values[${t}] - ${c?`zero_point${i}`:`zero_point`}) * scale${i}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${i}`:`zero_point`}`).join(`,`)})) * scale${i};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(i/p)}]${p>1?`[${i%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data${n>0?n:``}[${t}] * b_dequantized_values[${t}]`:`dot(a_data${n>0?n:``}[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `}return e},w=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${g}(${(2**(t.bits-1)).toFixed(1)});`}
            `;for(let n=0;n<p*h;n++)e+=`
            let scale${n} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${n} = ${g}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:``}
            col_index += 1;`;return e},T=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?`0x03030303u`:`0x0F0F0F0Fu`};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${w()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${T()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${C()}
                word_offset += ${x/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},qd=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=B.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=za(t.k),f=za(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=Math.floor(32/t.bits),_=h*f*g,v=_/d,y=_/t.blockSize,b=B.size(p)/m,x=[],S=[c,i,a/d],C=B.convertShape(e[1].dims).slice();C.splice(-1,1,l/f),x.push(...H(S)),x.push(...H(C)),x.push(...H(e[2].dims)),e.length===4&&x.push(...H(B.convertShape(e[3].dims)));let w=[c,i,o];return x.push(...H(w)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:b},programUniforms:x}),getShaderSource:n=>{let r=S.length,i=W(`a`,e[0].dataType,r,d),a=W(`b`,12,C.length,f),o=W(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?W(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=w.length,u=G(`output`,e[0].dataType,l),p=La(e[0].dataType),_=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${v}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${y} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${v};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${v}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${y} + local_id.x;
            ${c?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & ${t.bits===2?`0x3u`:`0xFu`});`:`
            // The default zero point is ${2**(t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${p}(${(2**(t.bits-1)).toFixed(1)});`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              ${(()=>{let e=Math.floor(g/8),n=``;for(let r=0;r<e;r++){let e=r*t.bits*4,i=e+t.bits;n+=`
              ${_()}
              {${t.bits===2?`
                let half_word = b_value >> ${r*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${e}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${i}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
                let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              }
              word_offset += ${8/d};`}return n})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},Jd=(e,t)=>{Gd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(qd(e.inputs,t)):e.compute(Kd(e.inputs,t))},Yd=e=>Na(e)}),sf=P(()=>{R(),V(),K(),Zd=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},Qd=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${U(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},$d=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${U(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},ef=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k = i32(${U(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},tf=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${U(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${U(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${U(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${U(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${U(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},nf=(e,t,n)=>{switch(n.mode){case 0:return Qd(e,t,n.pads.length);case 1:return $d(e,t,n.pads.length);case 2:return ef(e,t,n.pads.length);case 3:return tf(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},rf=(e,t)=>{let n=B.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:B.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...H(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(B.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=G(`output`,e[0].dataType,n.length),s=W(`x`,e[0].dataType,r.length),c=s.type.value,l=nf(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},af=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}else return t},of=(e,t)=>{Zd(e.inputs);let n=af(e.inputs,t);e.compute(rf(e.inputs,n),{inputs:[0]})}}),Df=P(()=>{zr(),R(),V(),K(),cf=e=>{if(nr.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},lf=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();$i.adjustPoolAttributes(n,i,o,s,c,l);let u=$i.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},uf=(e,t)=>{let n=t.format===`NHWC`,r=B.size(e),i=B.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}else{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=B.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},df=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=G(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}else{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${U(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${U(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${U(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${U(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},ff=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,pf=e=>`${ff(e)};${e.countIncludePad}`,mf=e=>`${ff(e)};${e.storageOrder};${e.dilations}`,hf=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),gf=(e,t,n,r)=>{let[i,a]=lf(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=uf(a,i);return l.push(...H(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:l}),getShaderSource:e=>df(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},_f=e=>{let t=e.count_include_pad!==0,n=hf(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:pf(r)}},vf=(e,t)=>{cf(e.inputs),e.compute(gf(`AveragePool`,e.inputs[0],!1,t))},yf={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},bf=e=>{let t=e.format;return{format:t,...yf,cacheKey:t}},xf=(e,t)=>{cf(e.inputs),e.compute(gf(`GlobalAveragePool`,e.inputs[0],!0,t))},Sf=(e,t,n,r)=>{let[i,a]=lf(t,r,n),o=W(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=uf(a,i);return c.push(...H(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(B.size(a)/64)},programUniforms:c}),getShaderSource:e=>df(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Cf=(e,t)=>{cf(e.inputs),e.compute(Sf(`MaxPool`,e.inputs[0],!1,t))},wf=e=>{let t=e.storage_order,n=e.dilations,r=hf(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:mf(i)}},Tf=e=>{let t=e.format;return{format:t,...yf,cacheKey:t}},Ef=(e,t)=>{cf(e.inputs),e.compute(Sf(`GlobalMaxPool`,e.inputs[0],!0,t))}}),Mf=P(()=>{R(),V(),Pa(),K(),Of=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},kf=(e,t)=>{let n=B.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=B.size(a),c=r===3||r===2,l=c?[Math.ceil(B.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(B.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=za(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=W(`input`,c?12:r,l.length,v),b=W(`scale`,o,u.length),x=d?W(`zero_point`,c?12:r,f.length):void 0,S=G(`output`,o,a.length,_),C=[y,b];x&&C.push(x);let w=[l,u];d&&w.push(f);let T=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...H(...w,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...C,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:T})}},Af=(e,t)=>{Of(e.inputs,t),e.compute(kf(e.inputs,t))},jf=e=>Na({axis:e.axis,blockSize:e.blockSize})}),If=P(()=>{zr(),R(),K(),Nf=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},Pf=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...H(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=G(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},Ff=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),nr.webgpu.validateInputContent&&Nf(t,n,r),e.compute(Pf(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),Vf=P(()=>{R(),V(),Pa(),K(),Lf=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},Rf=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(B.sizeToDimension(r,r.length-1)/1),o=r[r.length-1],s=B.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...H(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let r=W(`indices`,e[1].dataType,e[1].dims.length),a=W(`updates`,e[2].dataType,e[2].dims.length,1),o=t.reduction!==`none`&&t.reduction!==``?Wa(`output`,e[0].dataType,i.length):G(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(r,a,o)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${Lf(t.reduction,`output[data_offset + i]`,`value`,o.type.value)}
  }

      }`}}},zf=e=>Na({reduction:e.reduction}),Bf=(e,t)=>{e.compute(Rf(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),cp=P(()=>{R(),V(),Pa(),K(),Hf=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},Uf=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},Wf=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);Hf(r,t),t.axes.length>0&&Uf(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},Gf=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,Kf=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Gf(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Gf(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,qf=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,Jf=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},Yf=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},Xf=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},Zf=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${U(`uniforms.scales`,`i`,r)};
        var roi_low = ${U(`uniforms.roi`,`i`,i)};
        var roi_hi = ${U(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Qf=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${U(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${U(`uniforms.roi`,`i`,a)};
          var roi_hi = ${U(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${U(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,$f=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${U(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,ep=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,tp=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${ep(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},np=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},rp=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${ep(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},ip=(e,t,n,r,i,a)=>{let o=e.dims,s=Jf(a,t.axes,o.length),c=Yf(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=Xf(o,l,t)));let u=G(`output`,e.dataType,c.length),d=W(`input`,e.dataType,o.length),f=B.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${Kf(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${$f(d,o)};
              ${qf(t.nearestMode,n,g)};
              ${Qf(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${Zf(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${tp(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${rp(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${np(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...H(o,c)]})}},ap=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},op=(e,t)=>{let n=[],r=[],i=[],a=ap(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);Wf(e.inputs,t,a,n,r,i),e.compute(ip(e.inputs[0],t,a,n,r,i),{inputs:[0]})},sp=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return Na({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),fp=P(()=>{R(),V(),K(),lp=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},up=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=B.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=za(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[W(`x`,e[0].dataType,e[0].dims,g),W(`skip`,e[1].dataType,e[1].dims,g),W(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(W(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(W(`bias`,e[4].dataType,e[4].dims,g)),r.push(G(`output`,e[0].dataType,s,g)),p&&r.push(G(`mean_output`,1,u)),m&&r.push(G(`inv_std_output`,1,u)),h&&r.push(G(`input_skip_bias_sum`,e[0].dataType,s,g));let a=La(e[0].dataType),o=La(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Va(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Ha(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Ha(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},dp=(e,t)=>{lp(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(up(e.inputs,t,e.outputCount,!1),{outputs:n})}}),xp=P(()=>{R(),V(),Pa(),K(),pp=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},mp=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},hp=(e,t)=>{if(e.length>1){let t=mp(e,1),n=mp(e,2),r=mp(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),Na({starts:t,ends:n,axes:r})}else return t},gp=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},_p=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length-1}; i >= 0; i--) {
            let input_shape_i = ${U(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${U(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${U(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${U(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,vp=(e,t)=>{let n=e[0].dims,r=B.size(n),i=t.axes.length>0?B.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=mp(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>gp(e,t,n,i,a)),s=t.ends.map((e,t)=>gp(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t];o[t]=i+r*a[t],s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=G(`output`,e[0].dataType,l.length),f=W(`input`,e[0].dataType,e[0].dims.length),p=B.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...H(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${_p(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},yp=(e,t)=>{pp(e.inputs,t);let n=hp(e.inputs,t);e.compute(vp(e.inputs,n),{inputs:[0]})},bp=e=>{let t=e.starts,n=e.ends,r=e.axes;return Na({starts:t,ends:n,axes:r})}}),Ep=P(()=>{R(),V(),Pa(),ro(),K(),Sp=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},Cp=(e,t)=>{let n=e.inputs[0],r=n.dims,i=B.size(r),a=r.length,o=B.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(eo(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=za(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=W(`x`,c.dataType,c.dims,p),v=G(`result`,c.dataType,c.dims,p),y=_.type.value,b=La(c.dataType)===`f32`?`var threadMax = ${y}(-3.4028234663852886e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${Ha(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${y}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(eo(x,l),{inputs:[x]})},wp=(e,t)=>{Sp(e.inputs),Cp(e,t)},Tp=e=>Na({axis:e.axis})}),Mp=P(()=>{R(),V(),K(),Dp=e=>Array.from(e.getBigInt64Array(),Number),Op=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(Dp(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},kp=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},Ap=(e,t)=>{let n=e[0].dims,r=t??Dp(e[1]),i=kp(n,r),a=B.size(i),o=e[0].dataType,s=W(`input`,o,n.length),c=G(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...H(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},jp=e=>{Op(e.inputs),e.compute(Ap(e.inputs),{inputs:[0]})}}),Ip=P(()=>{R(),V(),K(),Np=(e,t,n,r,i)=>{let a=G(`output_data`,i,n.length,4),o=W(`a_data`,t[1].dataType,t[1].dims.length,4),s=W(`b_data`,t[2].dataType,t[2].dims.length,4),c=W(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},Pp=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(B.areEqual(t,n)&&B.areEqual(n,r)),o=t,s=B.size(t);if(a){let e=Qi.calcShape(Qi.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=B.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>Np(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...H(r,t,n,o)]})}},Fp=e=>{e.compute(Pp(e.inputs))}}),Rp=P(()=>{is(),ps(),vs(),Ss(),vc(),Mc(),zc(),Ml(),Wl(),Jl(),eu(),fu(),vu(),xu(),Eu(),Au(),Fu(),Bu(),Gu(),od(),Md(),Ld(),Vd(),Wd(),Xd(),md(),sf(),Df(),Mf(),If(),Vf(),$o(),cp(),Ed(),fp(),xp(),Ep(),Sd(),Mp(),ro(),mc(),Ip(),Lp=new Map([[`Abs`,[Ts]],[`Acos`,[Es]],[`Acosh`,[Ds]],[`Add`,[Sc]],[`ArgMax`,[ns,rs]],[`ArgMin`,[ts,rs]],[`Asin`,[Os]],[`Asinh`,[ks]],[`Atan`,[As]],[`Atanh`,[js]],[`Attention`,[fs]],[`AveragePool`,[vf,_f]],[`BatchNormalization`,[_s]],[`BiasAdd`,[xs]],[`BiasSplitGelu`,[_c]],[`Cast`,[Ns,Ms]],[`Ceil`,[Is]],[`Clip`,[Fs]],[`Concat`,[Lc,Rc]],[`Conv`,[jl,Dl]],[`ConvTranspose`,[Ul,zl]],[`Cos`,[Ls]],[`Cosh`,[Rs]],[`CumSum`,[Kl,ql]],[`DepthToSpace`,[Ql,$l]],[`DequantizeLinear`,[Af,jf]],[`Div`,[Cc]],[`Einsum`,[uu,du]],[`Elu`,[Bs,zs]],[`Equal`,[wc]],[`Erf`,[Hs]],[`Exp`,[Us]],[`Expand`,[_u]],[`FastGelu`,[bu]],[`Floor`,[Ws]],[`FusedConv`,[jl,Dl]],[`Gather`,[Tu,wu]],[`GatherElements`,[zu,Ru]],[`GatherBlockQuantized`,[Nu,Pu]],[`GatherND`,[Ou,ku]],[`Gelu`,[Gs]],[`Gemm`,[Wu,Uu]],[`GlobalAveragePool`,[xf,bf]],[`GlobalMaxPool`,[Ef,Tf]],[`Greater`,[Oc]],[`GreaterOrEqual`,[Ac]],[`GridSample`,[id,ad]],[`GroupQueryAttention`,[jd]],[`HardSigmoid`,[$s,Qs]],[`InstanceNormalization`,[Id]],[`LayerNormalization`,[Bd]],[`LeakyRelu`,[Ks,zs]],[`Less`,[kc]],[`LessOrEqual`,[jc]],[`Log`,[uc]],[`MatMul`,[Ud]],[`MatMulNBits`,[Jd,Yd]],[`MaxPool`,[Cf,wf]],[`Mul`,[Tc]],[`MultiHeadAttention`,[pd,ld]],[`Neg`,[Js]],[`Not`,[qs]],[`Pad`,[of]],[`Pow`,[Ec]],[`QuickGelu`,[pc,zs]],[`Range`,[Ff]],[`Reciprocal`,[Ys]],[`ReduceMin`,[Jo]],[`ReduceMean`,[Uo]],[`ReduceMax`,[qo]],[`ReduceSum`,[Xo]],[`ReduceProd`,[Yo]],[`ReduceL1`,[Wo]],[`ReduceL2`,[Go]],[`ReduceLogSum`,[Qo]],[`ReduceLogSumExp`,[Ko]],[`ReduceSumSquare`,[Zo]],[`Relu`,[Xs]],[`Resize`,[op,sp]],[`RotaryEmbedding`,[Td]],[`ScatterND`,[Bf,zf]],[`Sigmoid`,[Zs]],[`Sin`,[ec]],[`Sinh`,[tc]],[`Slice`,[yp,bp]],[`SkipLayerNormalization`,[dp]],[`Split`,[bd,xd]],[`Sqrt`,[nc]],[`Softmax`,[wp,Tp]],[`Sub`,[Dc]],[`Tan`,[rc]],[`Tanh`,[ac]],[`ThresholdedRelu`,[lc,zs]],[`Tile`,[jp]],[`Transpose`,[to,no]],[`Where`,[Fp]]])}),Bp=P(()=>{zr(),Xi(),K(),zp=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Or(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),kr(e.programInfo.name)}dispose(){}build(e,t){Or(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=qa(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});z(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return kr(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}else return[o,o,1]}}}),Vp={},Vn(Vp,{WebGpuBackend:()=>Gp}),Kp=P(()=>{zr(),R(),Xi(),ia(),ja(),Rp(),Bp(),Hp=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},Up=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${Hp(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},Wp=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Gp=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`),this.device=await t.requestDevice(r),this.adapterInfo=new Wp(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Aa(this),this.programManager=new zp(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ji(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&this.env?.webgpu&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;Or(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Fi(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Fi(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Fi(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Fi(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}start time: ${p} ns, execution time: ${m-p} ns`)}Er(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),kr()}run(e,t,n,r,i,a){Or(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return kr(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Fi(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=Up(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),z(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(z(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),kr(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=Lp.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),z(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await Oa(this,e,t);return ra(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){z(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){z(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){z(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),qp={},Vn(qp,{init:()=>Xp}),Zp=P(()=>{R(),Xi(),V(),ba(),Jp=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=B.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(B.size(t)!==B.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Yp=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new Jp(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new Jp(this.module,t,this.output(e,n),n),(e,t)=>{let n=Ii(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new Jp(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},Xp=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=(Kp(),Un(Vp)).WebGpuBackend,a=new e;await a.initialize(n,r),i(`webgpu`,[a,e=>a.alloc(Number(e)),e=>a.free(e),(e,n,r,i=!1)=>{if(i)z(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(e)}, dst=${Number(n)}, size=${Number(r)}`),a.memcpy(Number(e),Number(n));else{z(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(e)}, gpuDataId=${Number(n)}, size=${Number(r)}`);let i=t.HEAPU8.subarray(Number(e>>>0),Number(e>>>0)+Number(r));a.upload(Number(n),i)}},async(e,n,r)=>{z(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${e}, dataOffset=${n}, size=${r}`),await a.download(Number(e),()=>t.HEAPU8.subarray(Number(n)>>>0,Number(n+r)>>>0))},(e,n,r)=>a.createKernel(e,Number(n),r,t.UTF8ToString(t._JsepGetNodeName(Number(n)))),e=>a.releaseKernel(e),(e,n,r,i)=>{z(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${r}, kernel=${e}, contextDataOffset=${n}`);let o=new Yp(t,a,Number(n));return a.computeKernel(Number(e),o,i)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let e=new ya(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n),(t,n)=>e.registerMLContext(t,n),!!n.trace])}}}),dm=P(()=>{zr(),Ei(),Ni(),R(),bi(),wi(),Ui(),Qp=(e,t)=>{yi()._OrtInit(e,t)!==0&&Ci(`Can't initialize onnxruntime.`)},$p=async e=>{Qp(e.wasm.numThreads,Ri(e.logLevel))},em=async(e,t)=>{yi().asyncInit?.();let n=e.webgpu.adapter;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);if(n){if(typeof n.limits!=`object`||typeof n.features!=`object`||typeof n.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let t=e.webgpu.powerPreference;if(t!==void 0&&t!==`low-power`&&t!==`high-performance`)throw Error(`Invalid powerPreference setting: "${t}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(n=await navigator.gpu.requestAdapter({powerPreference:t,forceFallbackAdapter:r}),!n)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}}if(t===`webnn`&&(typeof navigator>`u`||!navigator.ml))throw Error(`WebNN is not supported in current environment`);{let r=(Zp(),Un(qp)).init;t===`webgpu`&&await r(`webgpu`,yi(),e,n),t===`webnn`&&await r(`webnn`,yi(),e)}},tm=new Map,nm=e=>{let t=yi(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&Ci(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},rm=(e,t)=>{let n=yi(),r=n.stackSave(),i=0;try{let r=n.PTR_SIZE,a=n.stackAlloc(2*r);n._OrtGetInputOutputMetadata(e,t,a,a+r)!==0&&Ci(`Can't get session input/output metadata.`);let o=Number(n.getValue(a,`*`));i=Number(n.getValue(a+r,`*`));let s=n.HEAP32[i/4];if(s===0)return[o,0];let c=n.HEAPU32[i/4+1],l=[];for(let e=0;e<c;e++){let t=Number(n.getValue(i+8+e*r,`*`));l.push(t===0?Number(n.getValue(i+8+(e+c)*r,`*`)):n.UTF8ToString(t))}return[o,s,l]}finally{n.stackRestore(r),i!==0&&n._OrtFree(i)}},im=e=>{let t=yi(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},am=async(e,t)=>{let n,r,i=yi();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=im(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=await Mi(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Hi(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.webnnCreateMLContext(r):i.currentContext=await i.webnnCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.webnnCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),i.webgpuOnCreateSession?.(a),a===0&&Ci(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.webnnRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=nm(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[],g=[],_=[];for(let t=0;t<e;t++){let[e,n,r]=rm(a,t);e===0&&Ci(`Can't get an input name.`),l.push(e);let o=i.UTF8ToString(e);p.push(o),h.push(n===0?{name:o,isTensor:!1}:{name:o,isTensor:!0,type:Fi(n),shape:r})}for(let n=0;n<d;n++){let[r,o,s]=rm(a,n+e);r===0&&Ci(`Can't get an output name.`),u.push(r);let c=i.UTF8ToString(r);m.push(c),g.push(o===0?{name:c,isTensor:!1}:{name:c,isTensor:!0,type:Fi(o),shape:s});{if(f&&t?.preferredOutputLocation===void 0){_.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[c]??`cpu`,n=i.webnnIsGraphOutput;if(e===`cpu`&&n&&n(a,c)){_.push(`ml-tensor-cpu-output`);continue}if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);_.push(e)}}let v=null;return _.some(e=>e===`gpu-buffer`||e===`ml-tensor`||e===`ml-tensor-cpu-output`)&&(s=i._OrtCreateBinding(a),s===0&&Ci(`Can't create IO binding.`),v={handle:s,outputPreferredLocations:_,outputPreferredLocationsEncoded:_.map(e=>e===`ml-tensor-cpu-output`?`ml-tensor`:e).map(e=>Vi(e))}),tm.set(a,[a,l,u,v,f,!1]),[a,p,m,h,g]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&Ci(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&Ci(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&Ci(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},om=e=>{let t=yi(),n=tm.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&Ci(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&Ci(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&Ci(`Can't release session.`),tm.delete(e)},sm=async(e,t,n,r,i,a,o=!1)=>{if(!e){t.push(0);return}let s=yi(),c=s.PTR_SIZE,l=e[0],u=e[1],d=e[3],f=d,p,m;if(l===`string`&&(d===`gpu-buffer`||d===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(o&&d!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(d===`gpu-buffer`){let t=e[2].gpuBuffer;m=Ii(Pi(l),u);{let e=s.jsepRegisterBuffer;if(!e)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);p=e(r,a,t,m)}}else if(d===`ml-tensor`){let t=e[2].mlTensor;m=Ii(Pi(l),u);let n=s.webnnRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);p=n(r,t,Pi(l),u)}else{let t=e[2];if(Array.isArray(t)){m=c*t.length,p=s._malloc(m),n.push(p);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);s.setValue(p+e*c,xi(t[e],n),`*`)}}else{let e=s.webnnIsGraphInput,a=s.webnnIsGraphOutput;if(l!==`string`&&e&&a){let o=s.UTF8ToString(i);if(e(r,o)||a(r,o)){let e=Pi(l);m=Ii(e,u),f=`ml-tensor`;let n=s.webnnCreateTemporaryTensor,i=s.webnnUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,u);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),p=a}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}else m=t.byteLength,p=s._malloc(m),n.push(p),s.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,m),p)}}let h=s.stackSave(),g=s.stackAlloc(4*u.length);try{u.forEach((e,t)=>s.setValue(g+t*c,e,c===4?`i32`:`i64`));let e=s._OrtCreateTensor(Pi(l),p,m,g,u.length,Vi(f));e===0&&Ci(`Can't create tensor for input/output. session=${r}, index=${a}.`),t.push(e)}finally{s.stackRestore(h)}},cm=async(e,t,n,r,i,a)=>{let o=yi(),s=o.PTR_SIZE,c=tm.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=[],C=o.stackSave(),w=o.stackAlloc(h*s),T=o.stackAlloc(h*s),E=o.stackAlloc(g*s),D=o.stackAlloc(g*s);try{[_,v]=Ti(a),Ar(`wasm prepareInputOutputTensor`);for(let r=0;r<h;r++)await sm(n[r],y,x,e,u[t[r]],t[r],p);for(let t=0;t<g;t++)await sm(i[t],b,x,e,d[r[t]],h+r[t],p);jr(`wasm prepareInputOutputTensor`);for(let e=0;e<h;e++)o.setValue(w+e*s,y[e],`*`),o.setValue(T+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(E+e*s,b[e],`*`),o.setValue(D+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);Ar(`wasm bindInputsOutputs`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&Ci(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?(S.push(b[t]),o._OrtBindOutput(n,d[c],b[t],0)!==0&&Ci(`Can't bind pre-allocated output[${t}] for session=${e}.`)):o._OrtBindOutput(n,d[c],0,s[c])!==0&&Ci(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}jr(`wasm bindInputsOutputs`),tm.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l),o.webnnOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,E,_):await o._OrtRun(l,T,w,h,D,g,E,_),c!==0&&Ci(`failed to call OrtRun().`);let C=[],O=[];Ar(`wasm ProcessOutputTensor`);for(let t=0;t<g;t++){let n=Number(o.getValue(E+t*s,`*`));if(n===b[t]||S.includes(b[t])){C.push(i[t]),n!==b[t]&&o._OrtReleaseTensor(n)!==0&&Ci(`Can't release tensor.`);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),l=!1,u,d=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&Ci(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));d=o.getValue(c+s,`*`);let p=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(p+e*s,i)));o._OrtFree(p)!==0&&Ci(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);u=Fi(a);let _=f?.outputPreferredLocations[r[t]];if(u===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(d+t*s,`*`),r=o.getValue(d+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}C.push([u,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(d),r=Ii(a,g);if(r===void 0||!zi(u))throw Error(`Unsupported data type: ${u}`);l=!0,C.push([u,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,u),dispose:()=>{o._OrtReleaseTensor(n)!==0&&Ci(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.webnnEnsureTensor,r=o.webnnIsGraphInputOutputTypeSupported;if(!t||!r)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Ii(a,g)===void 0||!Bi(u))throw Error(`Unsupported data type: ${u}`);if(!r(e,u,!1))throw Error(`preferredLocation "ml-tensor" for ${u} output is not supported by current WebNN Context.`);let i=await t(e,d,a,h,!1);l=!0,C.push([u,h,{mlTensor:i,download:o.webnnCreateMLTensorDownloader(d,u),dispose:()=>{o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n)}},`ml-tensor`])}else if(_===`ml-tensor-cpu-output`&&g>0){let e=o.webnnCreateMLTensorDownloader(d,u)(),t=C.length;l=!0,O.push((async()=>{let r=[t,await e];return o.webnnReleaseTensorId(d),o._OrtReleaseTensor(n),r})()),C.push([u,h,[],`cpu`])}else{let e=new(Li(u))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(d,d+e.byteLength)),C.push([u,h,e,`cpu`])}}finally{o.stackRestore(a),u===`string`&&d&&o._free(d),l||o._OrtReleaseTensor(n)}}f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&Ci(`Can't clear bound outputs.`),tm.set(e,[l,u,d,f,p,!1]));for(let[e,t]of await Promise.all(O))C[e][2]=t;return jr(`wasm ProcessOutputTensor`),C}finally{o.webnnOnRunEnd?.(l),o.stackRestore(C),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},lm=e=>{let t=yi(),n=tm.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&Ci(`Can't get an profile file name.`),t._OrtFree(i)},um=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),Am=P(()=>{zr(),dm(),bi(),ui(),fm=()=>!!nr.wasm.proxy&&typeof document<`u`,mm=!1,hm=!1,gm=!1,ym=new Map,bm=(e,t)=>{let n=ym.get(e);n?n.push(t):ym.set(e,[t])},xm=()=>{if(mm||!hm||gm||!pm)throw Error(`worker not ready`)},Sm=e=>{switch(e.data.type){case`init-wasm`:mm=!1,e.data.err?(gm=!0,vm[1](e.data.err)):(hm=!0,vm[0]()),_m&&=(URL.revokeObjectURL(_m),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=ym.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Cm=async()=>{if(!hm){if(mm)throw Error(`multiple calls to 'initWasm()' detected.`);if(gm)throw Error(`previous call to 'initWasm()' failed.`);if(mm=!0,fm())return new Promise((e,t)=>{pm?.terminate(),si().then(([n,r])=>{try{pm=r,pm.onerror=e=>t(e),pm.onmessage=Sm,vm=[e,t];let i={type:`init-wasm`,in:nr};!i.in.wasm.wasmPaths&&(n||Zr)&&(i.in.wasm.wasmPaths={wasm:new URL(`/storybook/kapi/assets/ort-wasm-simd-threaded.jsep-CyqnNavA.wasm`,``+import.meta.url).href}),pm.postMessage(i),_m=n}catch(e){t(e)}},t)});try{await vi(nr.wasm),await $p(nr),hm=!0}catch(e){throw gm=!0,e}finally{mm=!1}}},wm=async e=>{if(fm())return xm(),new Promise((t,n)=>{bm(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:nr}};pm.postMessage(r)});await em(nr,e)},Tm=async e=>fm()?(xm(),new Promise((t,n)=>{bm(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};pm.postMessage(r,[e.buffer])})):im(e),Em=async(e,t)=>{if(fm()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return xm(),new Promise((n,r)=>{bm(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),pm.postMessage(i,a)})}else return am(e,t)},Dm=async e=>{if(fm())return xm(),new Promise((t,n)=>{bm(`release`,[t,n]);let r={type:`release`,in:e};pm.postMessage(r)});om(e)},Om=async(e,t,n,r,i,a)=>{if(fm()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return xm(),new Promise((i,o)=>{bm(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};pm.postMessage(c,um(s))})}else return cm(e,t,n,r,i,a)},km=async e=>{if(fm())return xm(),new Promise((t,n)=>{bm(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};pm.postMessage(r)});lm(e)}}),Pm=P(()=>{zr(),Am(),R(),Br(),Ui(),jm=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},Mm=e=>{switch(e[3]){case`cpu`:return new wr(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!zi(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return wr.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Bi(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return wr.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},Nm=class{async fetchModelAndCopyToWasmMemory(e){return Tm(await Hi(e))}async loadModel(e,t){Or();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Em(n,t),kr()}async dispose(){return Dm(this.sessionId)}async run(e,t,n){Or();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>jm(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?jm(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await Om(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??Mm(l[e]);return kr(),u}startProfiling(){}endProfiling(){km(this.sessionId)}}}),Fm={},Vn(Fm,{OnnxruntimeWebAssemblyBackend:()=>Lm,initializeFlags:()=>Im,wasmBackend:()=>Rm}),zm=P(()=>{zr(),Am(),Pm(),Im=()=>{(typeof nr.wasm.initTimeout!=`number`||nr.wasm.initTimeout<0)&&(nr.wasm.initTimeout=0);let e=nr.wasm.simd;if(typeof e!=`boolean`&&e!==void 0&&e!==`fixed`&&e!==`relaxed`&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),nr.wasm.simd=!1),typeof nr.wasm.proxy!=`boolean`&&(nr.wasm.proxy=!1),typeof nr.wasm.trace!=`boolean`&&(nr.wasm.trace=!1),typeof nr.wasm.numThreads!=`number`||!Number.isInteger(nr.wasm.numThreads)||nr.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)nr.wasm.numThreads=1;else{let e=typeof navigator>`u`?Bn(`node:os`).cpus().length:navigator.hardwareConcurrency;nr.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Lm=class{async init(e){Im(),await Cm(),await wm(e)}async createInferenceSessionHandler(e,t){let n=new Nm;return await n.loadModel(e,t),n}},Rm=new Lm}),zr(),zr(),zr(),Bm=`1.26.0`;{let e=(zm(),Un(Fm)).wasmBackend;Kn(`webgpu`,e,5),Kn(`webnn`,e,5),Kn(`cpu`,e,10),Kn(`wasm`,e,10)}Object.defineProperty(nr.versions,"web",{value:Bm,enumerable:!0})}));function Hm(e){return e<0||e>=yh.length?`paragraph`:bh[yh[e]]??`paragraph`}async function Um(e,t){let n=await fetch(e);if(!n.ok)throw Error(`vision: fetch ${e}: ${n.status}`);let r=Number(n.headers.get(`content-length`)??0);if(!t||!r||!n.body)return n.arrayBuffer();let i=n.body.getReader(),a=[],o=0;for(;;){let{done:e,value:n}=await i.read();if(e)break;a.push(n),o+=n.length,t(o/r)}let s=new Uint8Array(o),c=0;for(let e of a)s.set(e,c),c+=e.length;return s.buffer}function Wm(e=ph){return xh||=(async()=>{let[t,n,r]=await Promise.all([Um(`${e}/ppocrv5_det.onnx`),Um(`${e}/ppocrv5_rec.onnx`),fetch(`${e}/ppocrv5_dict.txt`).then(e=>e.text())]),i=await Fr.create(t,fh),a=await Fr.create(n,fh),o=r.replace(/\r\n/g,`
`).split(`
`);for(;o.length&&o[o.length-1]===``;)o.pop();return o.push(` `),{det:i,rec:a,dict:o}})(),xh}async function Gm(e,t,n){let r=null;try{let n=await fetch(`${e}/${t}.json`);n.ok&&(r=await n.json())}catch{r=null}if(!r?.parts?.length)return Um(`${e}/${t}`,n);let i=new Uint8Array(r.bytes),a=0;for(let t of r.parts){let o=await fetch(`${e}/${t}`);if(!o.ok)throw Error(`vision: fetch ${t}: ${o.status}`);if(o.body&&n){let e=o.body.getReader();for(;;){let{done:t,value:o}=await e.read();if(t)break;i.set(o,a),a+=o.length,n(a/r.bytes)}}else{let e=new Uint8Array(await o.arrayBuffer());i.set(e,a),a+=e.length,n?.(a/r.bytes)}}return i.buffer}function Km(e,t=ph){return Sh||=Gm(t,`ppdoclayoutv3.onnx`,e).then(e=>Fr.create(e,fh)),Sh}function qm(e,t,n){return e<t?t:e>n?n:e}function Jm(e,t){let n=1,r=Math.max(e,t);r>mh&&(n=mh/r);let i=Math.round(e*n/32)*32,a=Math.round(t*n/32)*32;return[Math.max(i,32),Math.max(a,32)]}function Ym(e,t,n){let r=new Uint8ClampedArray(t*n*4),{width:i,height:a,data:o}=e;if(i===0||a===0)return{data:r,width:t,height:n};for(let e=0;e<n;e++){let s=(e+.5)*a/n-.5,c=qm(Math.floor(s),0,a-1),l=qm(c+1,0,a-1),u=s-Math.floor(s);for(let n=0;n<t;n++){let a=(n+.5)*i/t-.5,s=qm(Math.floor(a),0,i-1),d=qm(s+1,0,i-1),f=a-Math.floor(a),p=(e*t+n)*4;for(let e=0;e<4;e++){let t=o[(c*i+s)*4+e],n=o[(c*i+d)*4+e],a=o[(l*i+s)*4+e],m=o[(l*i+d)*4+e],h=t*(1-f)+n*f,g=a*(1-f)+m*f;r[p+e]=Math.round(h*(1-u)+g*u)}}}return{data:r,width:t,height:n}}function Xm(e,t,n,r,i){if(t=qm(t,0,e.width-1),n=qm(n,0,e.height-1),r=qm(r,0,e.width-1),i=qm(i,0,e.height-1),r<=t||i<=n)return null;let a=r-t+1,o=i-n+1,s=new Uint8ClampedArray(a*o*4);for(let r=0;r<o;r++)for(let i=0;i<a;i++){let o=((n+r)*e.width+(t+i))*4,c=(r*a+i)*4;s[c]=e.data[o],s[c+1]=e.data[o+1],s[c+2]=e.data[o+2],s[c+3]=e.data[o+3]}return{data:s,width:a,height:o}}function Zm(e,t,n){let{width:r,height:i,data:a}=e,o=new Float32Array(3*i*r);for(let e=0;e<i;e++)for(let s=0;s<r;s++){let c=(e*r+s)*4,l=[a[c],a[c+1],a[c+2]];for(let a=0;a<3;a++)o[a*i*r+e*r+s]=(l[a]/255-t[a])/n[a]}return o}function Qm(e){let{width:t,height:n,data:r}=e,i=new Float32Array(3*n*t);for(let e=0;e<n;e++)for(let a=0;a<t;a++){let o=(e*t+a)*4,s=[r[o+2],r[o+1],r[o]];for(let r=0;r<3;r++)i[r*n*t+e*t+a]=(s[r]/255-.5)/.5}return i}function $m(e){let{width:t,height:n,data:r}=e,i=new Float32Array(3*n*t);for(let e=0;e<n;e++)for(let a=0;a<t;a++){let o=(e*t+a)*4;i[0*n*t+e*t+a]=r[o]/255,i[1*n*t+e*t+a]=r[o+1]/255,i[2*n*t+e*t+a]=r[o+2]/255}return i}function eh(e,t,n,r,i,a){let o=r-t+1,s=Math.floor(.6*o),c=Math.floor(.35*o);return[qm(e-c,0,i-1),qm(t-s,0,a-1),qm(n+c,0,i-1),qm(r+s,0,a-1)]}function th(e,t,n,r){let i=new Uint8Array(t*n),a=[],o=[];for(let s=0;s<t*n;s++){if(!e[s]||i[s])continue;let c=s%t,l=s/t|0,u=c,d=l;for(o.length=0,o.push(s),i[s]=1;o.length;){let r=o.pop(),a=r%t,s=r/t|0;a<c&&(c=a),a>u&&(u=a),s<l&&(l=s),s>d&&(d=s),a>0&&e[r-1]&&!i[r-1]&&(i[r-1]=1,o.push(r-1)),a<t-1&&e[r+1]&&!i[r+1]&&(i[r+1]=1,o.push(r+1)),s>0&&e[r-t]&&!i[r-t]&&(i[r-t]=1,o.push(r-t)),s<n-1&&e[r+t]&&!i[r+t]&&(i[r+t]=1,o.push(r+t))}(u-c+1)*(d-l+1)>=r&&a.push({x0:c,y0:l,x1:u,y1:d})}return nh(a),a}function nh(e){if(e.length<2)return;let t=e.map(e=>e.y1-e.y0+1).sort((e,t)=>e-t),n=t[t.length>>1],r=Math.max(n>>1,1);e.sort((e,t)=>{let n=e.y0+e.y1>>1,i=t.y0+t.y1>>1;return Math.abs(n-i)>r?n-i:e.x0-t.x0})}function rh(e,t,n){let r=0,i=-1/0;for(let a=0;a<n;a++){let n=e[t+a];n>i&&(r=a,i=n)}return[r,i]}function ih(e,t,n,r){let i=``,a=0,o=0,s=-1;for(let c=0;c<t;c++){let[t,l]=rh(e,c*n,n);if(t!==0&&t!==s){let e=t-1;e>=0&&e<r.length&&(i+=r[e],a+=l,o++)}s=t}return{text:i,conf:o>0?a/o:0}}function ah(e,t){return e[t[0]]}function oh(e){return kh||=(async()=>{let{pipeline:t}=await i(async()=>{let{pipeline:e}=await import(`./transformers.web-eISDemhD.js`);return{pipeline:e}},__vite__mapDeps([0,1]));return t(`image-to-text`,e)})(),kh}function sh(e){let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);if(!n)throw Error(`vision: no 2D canvas context`);let r=new Uint8ClampedArray(e.data);return n.putImageData(new ImageData(r,e.width,e.height),0,0),t.toDataURL(`image/png`)}async function ch(e,t){let n=await(await oh(t))(sh(e)),r=Array.isArray(n)?n[0]?.generated_text:n?.generated_text;return typeof r==`string`?r.trim():``}async function lh(e,t,n){let r=sh(e).replace(/^data:[^;]+;base64,/,``),i=await fetch(`${n.replace(/\/$/,``)}/api/chat`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:t,stream:!1,messages:[{role:`user`,content:`Transcribe the text in this cropped image line. Return only the exact text, no commentary. If it is unreadable, return ${Oh}.`,images:[r]}]})});if(!i.ok)throw Error(`Ollama ${i.status}: ${await i.text()}`);let a=(await i.json())?.message?.content;if(typeof a!=`string`)return``;let o=a.trim();return o===Oh?``:o}async function uh(e,t=ph,n={}){let{det:r,rec:i,dict:a}=await Wm(t),o=e.width,s=e.height,c=n.hwThreshold??wh,l=n.hwModel??Ch,u=n.llmThreshold??Dh,d=n.llmModel??Th,f=n.ollamaUrl??Eh,[p,m]=Jm(o,s),h=Zm(Ym(e,p,m),[.485,.456,.406],[.229,.224,.225]),g=ah(await r.run({[r.inputNames[0]]:new wr(`float32`,h,[1,3,m,p])}),r.outputNames),_=g.dims,v=_.length===4?Number(_[3]):p,y=_.length===4?Number(_[2]):m,b=g.data,x=new Uint8Array(v*y);for(let e=0;e<x.length;e++)x[e]=+(b[e]>=hh);let S=Math.floor(v*y/5e3);S<4&&(S=4);let C=th(x,v,y,S),w=o/v,T=s/y,E=[];for(let t of C){let r=Math.floor(t.x0*w),p=Math.floor(t.y0*T),m=Math.floor(t.x1*w),h=Math.floor(t.y1*T);[r,p,m,h]=eh(r,p,m,h,o,s);let g=Xm(e,r,p,m,h);if(!g)continue;let _=Math.max(Math.round(g.width*gh/g.height),1),v=Qm(Ym(g,_,gh)),y=ah(await i.run({[i.inputNames[0]]:new wr(`float32`,v,[1,3,gh,_])}),i.outputNames),b=y.dims;if(b.length!==3)continue;let x=Number(b[1]),S=Number(b[2]),C=ih(y.data,x,S,a),D=C.text,O=C.conf,ee=`ppocr`;if(n.handwriting&&(O<c||D===``)){let e=await ch(g,l);e&&(D=e,ee=`trocr`)}if(n.llm&&(O<u||D===``))try{let e=await lh(g,d,f);e&&(D=e,ee=`llm`)}catch(e){console.warn(`vision LLM tier failed:`,e)}D&&E.push({text:D,x:r,y:p,w:m-r+1,h:h-p+1,confidence:O,engine:ee})}return{width:o,height:s,lines:E}}async function dh(e,t=ph){let n=await Km(void 0,t),r=e.width,i=e.height,a=$m(Ym(e,_h,_h)),o={image:new wr(`float32`,a,[1,3,_h,_h]),scale_factor:new wr(`float32`,Float32Array.from([_h/i,_h/r]),[1,2]),im_shape:new wr(`float32`,Float32Array.from([i,r]),[1,2])},s={};for(let e of n.inputNames){if(!o[e])throw Error(`vision: layout model wants unknown input ${e}`);s[e]=o[e]}let c=await n.run(s),l=null;for(let e of n.outputNames){let t=c[e];if(t&&t.type===`float32`&&t.dims.length===2&&Number(t.dims[1])>=6){l=t;break}}if(!l)throw Error(`vision: layout produced no float detection output`);let u=Number(l.dims[0]),d=Number(l.dims[1]),f=l.data,p=[];for(let e=0;e<u;e++){let t=e*d,n=f[t+1];if(n<vh)continue;let r=f[t+2],i=f[t+3],a=f[t+4],o=f[t+5];a<=r||o<=i||p.push({role:Hm(Math.round(f[t])),x:r,y:i,w:a-r,h:o-i,confidence:n})}return{width:r,height:i,regions:p}}var fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah=t((()=>{Vm(),n(),nr.wasm.numThreads=1,nr.wasm.wasmPaths=`https://cdn.jsdelivr.net/npm/onnxruntime-web@${nr.versions.web}/dist/`,nr.logLevel=`error`,fh={logSeverityLevel:3},ph=`https://github.com/neokapi/neokapi/releases/download/vision-models-v1`,mh=960,hh=.3,gh=48,_h=800,vh=.5,yh=[`abstract`,`algorithm`,`aside_text`,`chart`,`content`,`display_formula`,`doc_title`,`figure_title`,`footer`,`footer_image`,`footnote`,`formula_number`,`header`,`header_image`,`image`,`inline_formula`,`number`,`paragraph_title`,`reference`,`reference_content`,`seal`,`table`,`text`,`vertical_text`,`vision_footnote`],bh={doc_title:`title`,paragraph_title:`heading`,abstract:`paragraph`,content:`paragraph`,text:`paragraph`,vertical_text:`paragraph`,aside_text:`paragraph`,reference:`paragraph`,reference_content:`paragraph`,number:`paragraph`,table:`table`,figure_title:`caption`,chart:`picture`,image:`picture`,header_image:`picture`,footer_image:`picture`,seal:`picture`,algorithm:`code`,display_formula:`formula`,inline_formula:`formula`,formula_number:`formula`,footnote:`footnote`,vision_footnote:`footnote`,header:`page-header`,footer:`page-footer`},xh=null,Sh=null,Ch=`Xenova/trocr-small-handwritten`,wh=.85,Th=`llama3.2-vision`,Eh=`http://localhost:11434`,Dh=.85,Oh=`[illegible]`,kh=null}));function jh({samples:e=[],modelBase:t}){let[n,r]=(0,Mh.useState)(e[0]?.url??null),[a,o]=(0,Mh.useState)(null),[c,u]=(0,Mh.useState)(null),[d,f]=(0,Mh.useState)(null),[p,m]=(0,Mh.useState)(``),[h,g]=(0,Mh.useState)(0),[_,v]=(0,Mh.useState)(null),y=(0,Mh.useRef)(null),[b,x]=(0,Mh.useState)(0),[S,C]=(0,Mh.useState)(null),[w,T]=(0,Mh.useState)(null),[E,D]=(0,Mh.useState)(!1),[O,ee]=(0,Mh.useState)(.85),[k,A]=(0,Mh.useState)(!1),[te,ne]=(0,Mh.useState)(.85),[re,ie]=(0,Mh.useState)(null),ae=(0,Mh.useRef)({}),oe=(0,Mh.useCallback)(async e=>{m(`ocr`),v(null);try{u(await uh(e,t,{handwriting:E,hwThreshold:O,llm:k,llmThreshold:te}))}catch(e){v(`OCR failed: ${e.message}`)}finally{m(``)}},[t,E,O,k,te]),se=(e={})=>{a&&(m(`ocr`),v(null),uh(a,t,{handwriting:E,hwThreshold:O,llm:k,llmThreshold:te,...e}).then(u).catch(e=>v(`OCR failed: ${e.message}`)).finally(()=>m(``)))},ce=(0,Mh.useCallback)(async e=>{C(e);let t=new Image;t.crossOrigin=`anonymous`,t.src=e,await t.decode();let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);if(!r)throw Error(`no 2D canvas context`);r.drawImage(t,0,0);let i={data:r.getImageData(0,0,n.width,n.height).data,width:n.width,height:n.height};o(i),await oe(i)},[oe]),le=(0,Mh.useCallback)(async e=>{let{extractEmbeddedImages:t}=await i(async()=>{let{extractEmbeddedImages:e}=await import(`./ooxml-Bm6Z3b5p.js`);return{extractEmbeddedImages:e}},__vite__mapDeps([2,1])),n=await t(e);if(!n.length)throw Error(`no embedded image found in the document`);let r=n[0];T(`Extracted ${r.name} from the document`),await ce(URL.createObjectURL(new Blob([r.bytes.slice()],{type:r.mime})))},[ce]),ue=()=>{u(null),f(null),v(null),T(null)},de=e=>/\.docx(\?|$)/i.test(e),fe=(0,Mh.useCallback)(async e=>{ue();try{de(e)?await le(new Uint8Array(await(await fetch(e)).arrayBuffer())):await ce(e)}catch(e){v(`Could not load source: ${e.message}`)}},[le,ce]);(0,Mh.useEffect)(()=>{n&&fe(n)},[n,fe]);let pe=e=>{let t=e.target.files?.[0];t&&(t.name.toLowerCase().endsWith(`.docx`)||t.type.includes(`wordprocessing`)?(ue(),t.arrayBuffer().then(e=>le(new Uint8Array(e))).catch(e=>v(`Could not read document: ${e.message}`))):r(URL.createObjectURL(t)))},me=e=>{D(e),se({handwriting:e})},he=e=>{A(e),se({llm:e})},ge=(0,Mh.useCallback)(async()=>{if(a){m(`layout`),v(null),g(0);try{let{ensureLayout:e}=await i(async()=>{let{ensureLayout:e}=await import(`./visionBridge-CTGvt-iZ.js`);return{ensureLayout:e}},[]);await e(e=>g(e),t),f(await dh(a,t))}catch(e){v(`Layout failed: ${e.message}`)}finally{m(``)}}},[a,t]),_e=a&&b?b/a.width:1,ve=(0,Mh.useMemo)(()=>(d?.regions??[]).map((e,t)=>({...e,id:`reg${t+1}`})),[d]),j=(0,Mh.useMemo)(()=>(c?.lines??[]).map((e,t)=>{let n=e.x+e.w/2,r=e.y+e.h/2,i=ve.find(e=>n>=e.x&&n<=e.x+e.w&&r>=e.y&&r<=e.y+e.h);return{...e,id:`tu${t+1}`,role:i?.role}}),[c,ve]);return(0,Mh.useEffect)(()=>{re&&ae.current[re]&&ae.current[re]?.scrollIntoView({block:`nearest`})},[re]),(0,q.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`0.5rem`,flexWrap:`wrap`,alignItems:`center`},children:[e.map(e=>(0,q.jsx)(`button`,{onClick:()=>r(e.url),disabled:p!==``,style:{padding:`0.35rem 0.7rem`,borderRadius:6,border:`1px solid var(--ifm-color-emphasis-300)`,background:n===e.url?`var(--ifm-color-primary)`:`transparent`,color:n===e.url?`#fff`:`inherit`,cursor:`pointer`},children:e.name},e.url)),(0,q.jsxs)(`label`,{style:{padding:`0.35rem 0.7rem`,borderRadius:6,border:`1px dashed var(--ifm-color-emphasis-400)`,cursor:`pointer`},children:[`Upload image or .docx…`,(0,q.jsx)(`input`,{type:`file`,accept:`image/png,image/jpeg,.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document`,onChange:pe,style:{display:`none`}})]}),(0,q.jsxs)(`label`,{title:l(`4OVqQ`,`Re-read low-confidence lines with the TrOCR handwriting model (loads on first use). PP-OCR handles clean text fast; TrOCR rescues the hard lines.`),style:{display:`inline-flex`,alignItems:`center`,gap:`0.35rem`,marginLeft:`auto`,cursor:a?`pointer`:`not-allowed`,fontSize:`0.85rem`},children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:E,disabled:!a||p!==``,onChange:e=>me(e.target.checked)}),`✍ Handwriting fallback`]}),E&&(0,q.jsxs)(`label`,{title:l(`4iEcep`,`Lines whose PP-OCR confidence is below this are re-read by TrOCR. Higher = escalate more lines.`),style:{display:`inline-flex`,alignItems:`center`,gap:`0.35rem`,fontSize:`0.8rem`},children:[`below`,(0,q.jsx)(`input`,{type:`range`,min:.5,max:.99,step:.01,value:O,disabled:p!==``,onChange:e=>ee(Number(e.target.value)),onPointerUp:e=>se({hwThreshold:Number(e.target.value)})}),Math.round(O*100),`%`]}),(0,q.jsxs)(`label`,{title:l(`4s2LSY`,`Tier 3: re-read still-uncertain lines with a local Ollama vision model (keyless, on-device). Requires Ollama running locally with this page's origin allowed (OLLAMA_ORIGINS).`),style:{display:`inline-flex`,alignItems:`center`,gap:`0.35rem`,cursor:a?`pointer`:`not-allowed`,fontSize:`0.85rem`},children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:k,disabled:!a||p!==``,onChange:e=>he(e.target.checked)}),`🧠 Local LLM (Ollama)`]}),k&&(0,q.jsxs)(`label`,{title:l(`2h3Kf2`,`Lines whose confidence is below this are re-read by the local LLM. Higher = escalate more lines.`),style:{display:`inline-flex`,alignItems:`center`,gap:`0.35rem`,fontSize:`0.8rem`},children:[`below`,(0,q.jsx)(`input`,{type:`range`,min:.5,max:.99,step:.01,value:te,disabled:p!==``,onChange:e=>ne(Number(e.target.value)),onPointerUp:e=>se({llmThreshold:Number(e.target.value)})}),Math.round(te*100),`%`]}),(0,q.jsx)(`button`,{onClick:()=>void ge(),disabled:!a||p!==``,title:l(`4ckwXk`,`Downloads the PP-DocLayoutV3 model (~132 MB) on first use`),style:{padding:`0.35rem 0.7rem`,borderRadius:6,border:`1px solid var(--ifm-color-emphasis-300)`,background:d?`var(--ifm-color-primary)`:`transparent`,color:d?`#fff`:`inherit`,cursor:a?`pointer`:`not-allowed`},children:l(`1gsLte`,`Detect layout (~132 MB)`)})]}),p===`ocr`&&(0,q.jsx)(`p`,{style:{fontStyle:`italic`},children:E?`Running OCR + handwriting fallback (TrOCR loads on first use)…`:`Running OCR (loading ~21 MB models on first use)…`}),p===`layout`&&(0,q.jsx)(`p`,{style:{fontStyle:`italic`},children:h<1?`Downloading layout model… ${Math.round(h*100)}%`:`Running layout detection…`}),w&&(0,q.jsx)(`p`,{style:{fontStyle:`italic`,color:`var(--ifm-color-emphasis-600)`},children:w}),_&&(0,q.jsx)(`p`,{style:{color:`var(--ifm-color-danger)`},children:_}),(0,q.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`minmax(0, 2fr) minmax(0, 1fr)`,gap:`1rem`},children:[(0,q.jsxs)(`div`,{style:{position:`relative`,lineHeight:0},children:[S&&(0,q.jsx)(`img`,{ref:y,src:S,alt:l(`2vGhtg`,`vision input`),onLoad:e=>x(e.currentTarget.clientWidth),style:{maxWidth:`100%`,height:`auto`,border:`1px solid var(--ifm-color-emphasis-200)`}}),ve.map(e=>{let t=re===e.id;return(0,q.jsx)(`div`,{title:`${e.role} (${Math.round(e.confidence*100)}%)`,onClick:()=>ie(t?null:e.id),style:{position:`absolute`,left:e.x*_e,top:e.y*_e,width:e.w*_e,height:e.h*_e,border:`${t?3:2}px solid ${Ph(e.role)}`,background:`${Ph(e.role)}${t?`26`:`14`}`,cursor:`pointer`},children:(0,q.jsx)(`span`,{style:{position:`absolute`,top:-16,left:0,fontSize:10,background:Ph(e.role),color:`#fff`,padding:`0 4px`,borderRadius:3,lineHeight:`14px`,whiteSpace:`nowrap`},children:e.role})},e.id)}),j.map(e=>{let t=e.engine===`trocr`,n=re===e.id,r=t?`124,58,237`:`37,99,235`;return(0,q.jsx)(`div`,{title:`${e.id}: ${e.text}${t?` [TrOCR]`:``}`,onClick:()=>ie(n?null:e.id),style:{position:`absolute`,left:e.x*_e,top:e.y*_e,width:e.w*_e,height:e.h*_e,border:`${n?2:1}px solid rgba(${r},${n?1:.9})`,background:`rgba(${r},${n?.28:.08})`,boxShadow:n?`0 0 0 2px rgba(${r},0.4)`:`none`,cursor:`pointer`}},e.id)})]}),(0,q.jsxs)(`div`,{style:{fontSize:`0.85rem`,maxHeight:520,overflow:`auto`},children:[j.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h4`,{style:{marginTop:0},children:l(`16PyDQ`,`Blocks (${j.length})`,{"blocks.length":j.length})}),(0,q.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0},children:j.map(e=>{let t=re===e.id;return(0,q.jsxs)(`li`,{ref:t=>{ae.current[e.id]=t},onClick:()=>ie(t?null:e.id),style:{padding:`0.3rem 0.4rem`,borderRadius:6,marginBottom:2,cursor:`pointer`,background:t?`var(--ifm-color-primary-lightest)`:`transparent`,outline:t?`1px solid var(--ifm-color-primary)`:`none`},children:[(0,q.jsx)(`code`,{style:{fontSize:`0.72rem`,color:`var(--ifm-color-emphasis-600)`},children:e.id}),` `,e.role&&(0,q.jsx)(`span`,{className:De(e.role).className,style:{fontSize:`0.68rem`,padding:`0 5px`,borderRadius:4},children:De(e.role).label}),` `,e.text,` `,(0,q.jsx)(`span`,{style:{color:`var(--ifm-color-emphasis-500)`},children:l(`3N2FF3`,`(${Math.round(e.confidence*100)}%)`,{round:Math.round(e.confidence*100)})}),e.engine===`trocr`&&(0,q.jsx)(`span`,{style:{color:`#7c3aed`,fontWeight:600},children:l(`2S0jRK`,`✍ TrOCR`)}),e.engine===`llm`&&(0,q.jsx)(`span`,{style:{color:`#0891b2`,fontWeight:600},children:l(`1m7j6`,`🧠 LLM`)})]},e.id)})})]}),ve.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h4`,{children:l(`3ZBRRd`,`Layout regions (${ve.length})`,{"regions.length":ve.length})}),(0,q.jsx)(`ul`,{style:{listStyle:`none`,padding:0,margin:0},children:ve.map(e=>{let t=re===e.id;return(0,q.jsx)(`li`,{ref:t=>{ae.current[e.id]=t},onClick:()=>ie(t?null:e.id),style:{padding:`0.2rem 0.4rem`,borderRadius:6,cursor:`pointer`,background:t?`var(--ifm-color-primary-lightest)`:`transparent`,outline:t?`1px solid var(--ifm-color-primary)`:`none`},children:s(`3RdSRp`,`{=m0} {label} {/=m0}{value} {=m3} ({round}%) {/=m3}`,{"=m0":(0,q.jsx)(`span`,{className:De(e.role).className,style:{fontSize:`0.68rem`,padding:`0 5px`,borderRadius:4},children:De(e.role).label}),"=m3":(0,q.jsxs)(`span`,{style:{color:`var(--ifm-color-emphasis-500)`},children:[`(`,Math.round(e.confidence*100),`%)`]})},{label:De(e.role).label,value:` `,round:Math.round(e.confidence*100)})},e.id)})})]})]})]})]})}var Mh,q,Nh,Ph,Fh=t((()=>{c(),Mh=e(a(),1),Pe(),Ah(),q=o(),n(),Nh={title:`#7c3aed`,heading:`#2563eb`,paragraph:`#16a34a`,table:`#dc2626`,picture:`#d97706`,caption:`#0891b2`,"page-header":`#9333ea`,"page-footer":`#9333ea`,footnote:`#65a30d`,formula:`#db2777`,code:`#475569`},Ph=e=>Nh[e]??`#64748b`,jh.__docgenInfo={description:``,methods:[],displayName:`VisionExplorer`,props:{samples:{required:!1,tsType:{name:`Array`,elements:[{name:`VisionSampleSpec`}],raw:`VisionSampleSpec[]`},description:``,defaultValue:{value:`[]`,computed:!1}},modelBase:{required:!1,tsType:{name:`string`},description:`Base URL the ONNX models are served from (det/rec/dict + layout). Must be
same-origin or a CORS-enabled host — GitHub release download URLs are
CORS-blocked for browser fetch, so the docs site stages the models locally.`}}}}));function Ih(e,t){return{format:e,root:t,stats:{layers:0,groups:0,blocks:0,data:0,media:0,runs:0}}}function Lh(e,t,n,r,i){return{kind:`block`,id:e,type:`subtitle`,source:[{text:r}],targets:{"fr-FR":[{text:i}]},timing:{startMs:t,endMs:n}}}function Rh(e,t,n,r,i,a,o,s,c){return{kind:`block`,id:e,type:`line`,source:[{text:a}],targets:{"fr-FR":[{text:o}]},geometry:{x:t,y:n,w:r,h:i,resolution:100},structure:{role:s},...c?{timing:c}:{}}}function zh(e,t){let n=`<svg xmlns='http://www.w3.org/2000/svg' width='480' height='270'><rect width='480' height='270' fill='#0f172a'/><text x='28' y='80' fill='#f8fafc' font-family='sans-serif' font-size='34'>${e}</text><text x='28' y='150' fill='#93c5fd' font-family='sans-serif' font-size='22'>${t}</text></svg>`;return`data:image/svg+xml;base64,`+btoa(n)}function Bh({initialChapter:e=0,className:t}){let[n,r]=(0,Vh.useState)(Math.min(Math.max(e,0),Jh.length-1)),[i,a]=(0,Vh.useState)(0),[o,s]=(0,Vh.useState)(!0),c=Jh[n],u=c.durationMs>0;(0,Vh.useEffect)(()=>{a(0)},[n]);let d=(0,Vh.useRef)(null);(0,Vh.useEffect)(()=>{if(!o||!u)return;let e=window.setInterval(()=>{a(e=>e+80>c.durationMs?0:e+80)},80);return d.current=e,()=>window.clearInterval(e)},[o,u,c.durationMs]);let f=e=>{r(t=>Math.min(Math.max(t+e,0),Jh.length-1))},p=(0,Vh.useMemo)(()=>Jh.map((e,t)=>(0,Hh.jsx)(`button`,{type:`button`,onClick:()=>r(t),"aria-current":t===n?`true`:void 0,className:`rounded-md px-3 py-1.5 text-sm font-medium transition-colors `+(t===n?`bg-primary text-primary-foreground`:`bg-muted text-muted-foreground hover:bg-muted/70`),children:l(`23IZAg`,`${t+1}. ${e.title.split(` — `)[0]}`,{value:t+1,value_2:e.title.split(` — `)[0]})},e.id)),[n]);return(0,Hh.jsxs)(`div`,{className:`flex flex-col gap-4 `+(t??``),"data-testid":`multimodal-showcase`,children:[(0,Hh.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:p}),(0,Hh.jsxs)(`div`,{className:`rounded-lg border bg-card p-4`,children:[(0,Hh.jsx)(`h3`,{className:`mb-1 text-base font-semibold`,children:c.title}),(0,Hh.jsx)(`p`,{className:`mb-4 text-sm text-muted-foreground`,children:c.blurb}),(0,Hh.jsx)(`div`,{children:c.render(i)},c.id)]}),(0,Hh.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,Hh.jsxs)(`div`,{className:`flex gap-2`,children:[(0,Hh.jsx)(`button`,{type:`button`,onClick:()=>f(-1),disabled:n===0,className:`rounded-md border px-3 py-1.5 text-sm disabled:opacity-40`,children:l(`21RydP`,`← Prev`)}),(0,Hh.jsx)(`button`,{type:`button`,onClick:()=>f(1),disabled:n===Jh.length-1,className:`rounded-md border px-3 py-1.5 text-sm disabled:opacity-40`,children:l(`wBWeu`,`Next →`)})]}),u&&(0,Hh.jsx)(`button`,{type:`button`,onClick:()=>s(e=>!e),className:`rounded-md border px-3 py-1.5 text-sm`,children:o?`⏸ Pause`:`▶ Play`})]})]})}var Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh=t((()=>{c(),Vh=e(a(),1),Pe(),Hh=o(),Uh=zh(`Invoice`,`Total: $42.00`),Wh=zh(`Welcome`,`On-screen: Chapter 1`),Gh=Ih(`image`,[{kind:`media`,id:`img`,media:{mimeType:`image/svg+xml`,filename:`invoice.svg`,uri:Uh}},Rh(`i1`,5.5,22,22,13,`Invoice`,`Facture`,`heading`),Rh(`i2`,5.5,50,38,9,`Total: $42.00`,`Total : 42,00 $`,`paragraph`)]),Kh=Ih(`audio`,[Lh(`a1`,0,2200,`Welcome to the show.`,`Bienvenue à l'émission.`),Lh(`a2`,2200,5200,`Today we explore localization.`,`Aujourd'hui, nous explorons la localisation.`),Lh(`a3`,5200,8e3,`Let's begin.`,`Commençons.`)]),qh=Ih(`video`,[Lh(`v1`,0,2600,`In this clip we localize a video.`,`Dans ce clip, nous localisons une vidéo.`),Lh(`v2`,2600,6e3,`Both speech and on-screen text are translated.`,`La parole et le texte à l'écran sont traduits.`),Rh(`vf1`,6,18,26,12,`Chapter 1`,`Chapitre 1`,`heading`,{startMs:0,endMs:3e3}),Rh(`vf2`,6,18,30,12,`Summary`,`Résumé`,`heading`,{startMs:3e3,endMs:6e3})]),Jh=[{id:`image`,title:`Image — OCR + translate`,blurb:`kapi-vision reads the text in an image as geometry-anchored blocks; translating them round-trips a localized alt-text (and the whole image is replaceable per locale).`,durationMs:0,render:()=>(0,Hh.jsx)(Oe,{src:Uh,tree:Gh,alt:l(`3egdwT`,`Invoice`),className:`w-full`})},{id:`audio`,title:`Audio — speech → subtitles`,blurb:`kapi-asr transcribes speech into timing-anchored cues; ai-translate fills the target, and the audio-to-subtitles flow writes a translated .vtt/.srt.`,durationMs:8e3,render:e=>(0,Hh.jsx)(Te,{tree:Kh,currentTimeMs:e,className:`w-full`})},{id:`video`,title:`Video — speech + on-screen text`,blurb:`kapi-av demuxes the video; the speech track becomes the subtitle track (frame OCR is filtered out of it), while on-screen frame text is overlaid at its timecode.`,durationMs:6e3,render:e=>(0,Hh.jsx)(Ie,{src:Wh,poster:Wh,tree:qh,currentTimeMs:e,showFrameOCR:!0,controls:!1,className:`w-full`})}],Bh.__docgenInfo={description:``,methods:[],displayName:`MultimodalShowcase`,props:{initialChapter:{required:!1,tsType:{name:`number`},description:`Chapter to start on (0-based).`,defaultValue:{value:`0`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}}));async function Xh(e,t){return eg||=(async()=>{let{pipeline:n}=await i(async()=>{let{pipeline:e}=await import(`./transformers.web-eISDemhD.js`);return{pipeline:e}},__vite__mapDeps([0,1]));return await n(`automatic-speech-recognition`,e,{progress_callback:e=>{t&&e.status===`progress`&&t((e.progress??0)/100)}})})(),eg}async function Zh(e){let t=new(window.AudioContext??window.webkitAudioContext);try{let n=await t.decodeAudioData(e.slice(0)),r=16e3,i=Math.max(1,Math.ceil(n.duration*r)),a=new OfflineAudioContext(1,i,r),o=a.createBufferSource();return o.buffer=n,o.connect(a.destination),o.start(),(await a.startRendering()).getChannelData(0).slice()}finally{await t.close()}}async function Qh(e,t={}){return{segments:((await(await Xh(t.model??$h,t.onProgress))(e,{return_timestamps:!0,chunk_length_s:30,stride_length_s:5,...t.language?{language:t.language}:{}})).chunks??[]).map(e=>{let t=e.timestamp?.[0]??0,n=e.timestamp?.[1]??t;return{text:(e.text??``).trim(),startMs:Math.round(t*1e3),endMs:Math.round((n??t)*1e3)}}).filter(e=>e.text.length>0)}}var $h,eg,tg=t((()=>{n(),$h=`Xenova/whisper-tiny.en`,eg=null}));function ng(e){let t=e.map((e,t)=>({kind:`block`,id:`c${t}`,type:`subtitle`,source:[{text:e.text}],timing:{startMs:e.startMs,endMs:e.endMs}}));return{format:`audio`,root:[{kind:`layer`,id:`doc`,name:`audio`,children:t}],stats:{layers:1,groups:0,blocks:t.length,data:0,media:0,runs:t.length}}}function rg({samples:e=[]}){let[t,n]=(0,ig.useState)(e[0]?.url??null),[r,i]=(0,ig.useState)(null),[a,o]=(0,ig.useState)(!1),[s,c]=(0,ig.useState)(0),[u,d]=(0,ig.useState)(null),f=(0,ig.useRef)(null),p=(0,ig.useCallback)(e=>{n(e),i(null),d(null)},[]),m=(0,ig.useCallback)(e=>{p(URL.createObjectURL(e))},[p]),h=(0,ig.useCallback)(async()=>{if(t){o(!0),d(null),c(0);try{i(ng((await Qh(await Zh(await(await fetch(t)).arrayBuffer()),{onProgress:c})).segments))}catch(e){d(e instanceof Error?e.message:String(e))}finally{o(!1)}}},[t]);return(0,ag.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,ag.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[e.map(e=>(0,ag.jsx)(`button`,{type:`button`,onClick:()=>p(e.url),className:`rounded-md border px-3 py-1.5 text-sm hover:bg-muted/60`,children:e.name},e.url)),(0,ag.jsx)(`button`,{type:`button`,onClick:()=>f.current?.click(),className:`rounded-md border px-3 py-1.5 text-sm hover:bg-muted/60`,children:l(`3ltklN`,`Upload audio…`)}),(0,ag.jsx)(`input`,{ref:f,type:`file`,accept:`audio/*,video/*`,className:`hidden`,onChange:e=>{let t=e.target.files?.[0];t&&m(t)}}),(0,ag.jsx)(`button`,{type:`button`,onClick:h,disabled:!t||a,className:`rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:opacity-50`,children:a?`Transcribing…`:`Transcribe`})]}),t&&!r&&(0,ag.jsx)(`audio`,{src:t,controls:!0,className:`w-full max-w-xl`,children:(0,ag.jsx)(`track`,{kind:`captions`})}),a&&(0,ag.jsx)(`div`,{className:`text-sm text-muted-foreground`,children:l(`45b2An`,`Running Whisper in your browser… ${s>0?`${Math.round(s*100)}%`:``}`,{value:s>0?`${Math.round(s*100)}%`:``})}),u&&(0,ag.jsx)(`div`,{className:`text-sm text-destructive`,children:u}),r&&t&&(0,ag.jsx)(Fe,{src:t,tree:r,className:`max-w-2xl`})]})}var ig,ag,og=t((()=>{c(),ig=e(a(),1),Pe(),tg(),ag=o(),rg.__docgenInfo={description:``,methods:[],displayName:`AudioExplorer`,props:{samples:{required:!1,tsType:{name:`Array`,elements:[{name:`AudioSampleSpec`}],raw:`AudioSampleSpec[]`},description:``,defaultValue:{value:`[]`,computed:!1}}}}})),sg,cg,lg=t((()=>{sg=`0.12.9`,`${sg}`,(function(e){e.LOAD=`LOAD`,e.EXEC=`EXEC`,e.FFPROBE=`FFPROBE`,e.WRITE_FILE=`WRITE_FILE`,e.READ_FILE=`READ_FILE`,e.DELETE_FILE=`DELETE_FILE`,e.RENAME=`RENAME`,e.CREATE_DIR=`CREATE_DIR`,e.LIST_DIR=`LIST_DIR`,e.DELETE_DIR=`DELETE_DIR`,e.ERROR=`ERROR`,e.DOWNLOAD=`DOWNLOAD`,e.PROGRESS=`PROGRESS`,e.LOG=`LOG`,e.MOUNT=`MOUNT`,e.UNMOUNT=`UNMOUNT`})(cg||={})})),ug,dg=t((()=>{ug=(()=>{let e=0;return()=>e++})()})),fg,pg,mg=t((()=>{fg=Error("ffmpeg is not loaded, call `await ffmpeg.load()` first"),pg=Error(`called FFmpeg.terminate()`)})),hg,gg=t((()=>{lg(),dg(),mg(),hg=class{#e=null;#t={};#n={};#r=[];#i=[];loaded=!1;#a=()=>{this.#e&&(this.#e.onmessage=({data:{id:e,type:t,data:n}})=>{switch(t){case cg.LOAD:this.loaded=!0,this.#t[e](n);break;case cg.MOUNT:case cg.UNMOUNT:case cg.EXEC:case cg.FFPROBE:case cg.WRITE_FILE:case cg.READ_FILE:case cg.DELETE_FILE:case cg.RENAME:case cg.CREATE_DIR:case cg.LIST_DIR:case cg.DELETE_DIR:this.#t[e](n);break;case cg.LOG:this.#r.forEach(e=>e(n));break;case cg.PROGRESS:this.#i.forEach(e=>e(n));break;case cg.ERROR:this.#n[e](n);break}delete this.#t[e],delete this.#n[e]})};#o=({type:e,data:t},n=[],r)=>this.#e?new Promise((i,a)=>{let o=ug();this.#e&&this.#e.postMessage({id:o,type:e,data:t},n),this.#t[o]=i,this.#n[o]=a,r?.addEventListener(`abort`,()=>{a(new DOMException(`Message # ${o} was aborted`,`AbortError`))},{once:!0})}):Promise.reject(fg);on(e,t){e===`log`?this.#r.push(t):e===`progress`&&this.#i.push(t)}off(e,t){e===`log`?this.#r=this.#r.filter(e=>e!==t):e===`progress`&&(this.#i=this.#i.filter(e=>e!==t))}load=({classWorkerURL:e,...t}={},{signal:n}={})=>(this.#e||(this.#e=e?new Worker(new URL(e,import.meta.url),{type:`module`}):new Worker(new URL(`/storybook/kapi/assets/worker-BzdDEeh7.js`,``+import.meta.url),{type:`module`}),this.#a()),this.#o({type:cg.LOAD,data:t},void 0,n));exec=(e,t=-1,{signal:n}={})=>this.#o({type:cg.EXEC,data:{args:e,timeout:t}},void 0,n);ffprobe=(e,t=-1,{signal:n}={})=>this.#o({type:cg.FFPROBE,data:{args:e,timeout:t}},void 0,n);terminate=()=>{let e=Object.keys(this.#n);for(let t of e)this.#n[t](pg),delete this.#n[t],delete this.#t[t];this.#e&&(this.#e.terminate(),this.#e=null,this.loaded=!1)};writeFile=(e,t,{signal:n}={})=>{let r=[];return t instanceof Uint8Array&&r.push(t.buffer),this.#o({type:cg.WRITE_FILE,data:{path:e,data:t}},r,n)};mount=(e,t,n)=>this.#o({type:cg.MOUNT,data:{fsType:e,options:t,mountPoint:n}},[]);unmount=e=>this.#o({type:cg.UNMOUNT,data:{mountPoint:e}},[]);readFile=(e,t=`binary`,{signal:n}={})=>this.#o({type:cg.READ_FILE,data:{path:e,encoding:t}},void 0,n);deleteFile=(e,{signal:t}={})=>this.#o({type:cg.DELETE_FILE,data:{path:e}},void 0,t);rename=(e,t,{signal:n}={})=>this.#o({type:cg.RENAME,data:{oldPath:e,newPath:t}},void 0,n);createDir=(e,{signal:t}={})=>this.#o({type:cg.CREATE_DIR,data:{path:e}},void 0,t);listDir=(e,{signal:t}={})=>this.#o({type:cg.LIST_DIR,data:{path:e}},void 0,t);deleteDir=(e,{signal:t}={})=>this.#o({type:cg.DELETE_DIR,data:{path:e}},void 0,t)}})),_g,vg=t((()=>{(function(e){e.MEMFS=`MEMFS`,e.NODEFS=`NODEFS`,e.NODERAWFS=`NODERAWFS`,e.IDBFS=`IDBFS`,e.WORKERFS=`WORKERFS`,e.PROXYFS=`PROXYFS`})(_g||={})})),yg=t((()=>{gg(),vg()})),bg,xg,Sg=t((()=>{bg=Error(`failed to get response body reader`),xg=Error(`failed to complete download`)})),Cg=t((()=>{})),wg,Tg,Eg=t((()=>{Sg(),Cg(),wg=async(e,t)=>{let n=await fetch(e),r;try{let i=parseInt(n.headers.get(`Content-Length`)||`-1`),a=n.body?.getReader();if(!a)throw bg;let o=[],s=0;for(;;){let{done:n,value:r}=await a.read(),c=r?r.length:0;if(n){if(i!=-1&&i!==s)throw xg;t&&t({url:e,total:i,received:s,delta:c,done:n});break}o.push(r),s+=c,t&&t({url:e,total:i,received:s,delta:c,done:n})}let c=new Uint8Array(s),l=0;for(let e of o)c.set(e,l),l+=e.length;r=c.buffer}catch(i){console.log(`failed to send download progress event: `,i),r=await n.arrayBuffer(),t&&t({url:e,total:r.byteLength,received:r.byteLength,delta:0,done:!0})}return r},Tg=async(e,t,n=!1,r)=>{let i=n?await wg(e,r):await(await fetch(e)).arrayBuffer(),a=new Blob([i],{type:t});return URL.createObjectURL(a)}}));async function Dg(e){return Mg||=(async()=>{let t=new hg;return e&&t.on(`progress`,t=>e(t.progress)),await t.load({coreURL:await Tg(`${jg}/ffmpeg-core.js`,`text/javascript`),wasmURL:await Tg(`${jg}/ffmpeg-core.wasm`,`application/wasm`)}),t})(),Mg}function Og(e){return typeof e==`string`?new TextEncoder().encode(e):e}async function kg(e,t={}){let n=t.fps??1,r=await Dg(t.onProgress);await r.writeFile(`input`,e),await r.exec([`-i`,`input`,`-vn`,`-ac`,`1`,`-ar`,`16000`,`-f`,`wav`,`audio.wav`]);let i=Og(await r.readFile(`audio.wav`));await r.exec([`-i`,`input`,`-vf`,`fps=${n}`,`frame_%04d.png`]);let a=await r.listDir(`/`),o=[];for(let e of a){let t=/^frame_(\d+)\.png$/.exec(e.name);if(!t)continue;let i=parseInt(t[1],10),a=Og(await r.readFile(e.name)),s=new Blob([a],{type:`image/png`});o.push({timeMs:Math.round((i-1)/n*1e3),url:URL.createObjectURL(s)}),await r.deleteFile(e.name)}return o.sort((e,t)=>e.timeMs-t.timeMs),await r.deleteFile(`input`),await r.deleteFile(`audio.wav`),{audio:i,frames:o}}function Ag(e){for(let t of e)URL.revokeObjectURL(t.url)}var jg,Mg,Ng=t((()=>{yg(),Eg(),jg=`https://unpkg.com/@ffmpeg/core@0.12.10/dist/umd`,Mg=null}));async function Pg(e){let t=new Image;t.src=e,await t.decode();let n=document.createElement(`canvas`);n.width=t.naturalWidth,n.height=t.naturalHeight;let r=n.getContext(`2d`);if(!r)throw Error(`2d canvas unavailable`);return r.drawImage(t,0,0),{data:r.getImageData(0,0,n.width,n.height).data,width:n.width,height:n.height}}function Fg(e,t){let n=[];e.forEach((e,t)=>n.push({kind:`block`,id:`s${t}`,type:`subtitle`,source:[{text:e.text}],timing:{startMs:e.startMs,endMs:e.endMs}}));let r=0;for(let e of t)for(let t of e.lines)n.push({kind:`block`,id:`f${r++}`,type:`line`,source:[{text:t.text}],geometry:{x:t.x,y:t.y,w:t.w,h:t.h,resolution:0},timing:{startMs:e.timeMs,endMs:e.timeMs+1e3},structure:{role:`paragraph`}});return{format:`video`,root:[{kind:`layer`,id:`doc`,name:`video`,children:n}],stats:{layers:1,groups:0,blocks:n.length,data:0,media:0,runs:n.length}}}function Ig({samples:e=[],modelBase:t}){let[n,r]=(0,Lg.useState)(e[0]?.url??null),[i,a]=(0,Lg.useState)(null),[o,s]=(0,Lg.useState)(``),[c,u]=(0,Lg.useState)(0),[d,f]=(0,Lg.useState)(!0),[p,m]=(0,Lg.useState)(null),h=(0,Lg.useRef)(null),g=(0,Lg.useRef)([]),_=(0,Lg.useCallback)(e=>{r(e),a(null),m(null)},[]),v=(0,Lg.useCallback)(async()=>{if(n){m(null);try{s(`demux`),u(0);let{audio:e,frames:r}=await kg(new Uint8Array(await(await fetch(n)).arrayBuffer()),{fps:1,onProgress:u});Ag(g.current),g.current=r,s(`asr`);let i=await Qh(await Zh(e.buffer.slice(0)),{onProgress:u}),o=[];if(d&&t){s(`ocr`);for(let e of r){let n=await uh(await Pg(e.url),t);n.lines.length>0&&o.push({timeMs:e.timeMs,lines:n.lines})}}a(Fg(i.segments,o))}catch(e){m(e instanceof Error?e.message:String(e))}finally{s(``)}}},[n,d,t]),y=o===`demux`?`Demuxing with ffmpeg.wasm…`:o===`asr`?`Transcribing speech (Whisper)…`:o===`ocr`?`Reading on-screen text (OCR)…`:``;return(0,Rg.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,Rg.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[e.map(e=>(0,Rg.jsx)(`button`,{type:`button`,onClick:()=>_(e.url),className:`rounded-md border px-3 py-1.5 text-sm hover:bg-muted/60`,children:e.name},e.url)),(0,Rg.jsx)(`button`,{type:`button`,onClick:()=>h.current?.click(),className:`rounded-md border px-3 py-1.5 text-sm hover:bg-muted/60`,children:l(`2ajXx8`,`Upload video…`)}),(0,Rg.jsx)(`input`,{ref:h,type:`file`,accept:`video/*`,className:`hidden`,onChange:e=>{let t=e.target.files?.[0];t&&_(URL.createObjectURL(t))}}),t&&(0,Rg.jsxs)(`label`,{className:`flex items-center gap-1.5 text-sm text-muted-foreground`,children:[(0,Rg.jsx)(`input`,{type:`checkbox`,checked:d,onChange:e=>f(e.target.checked)}),`OCR on-screen text`]}),(0,Rg.jsx)(`button`,{type:`button`,onClick:v,disabled:!n||o!==``,className:`rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:opacity-50`,children:o===``?`Localize`:`Processing…`})]}),n&&!i&&(0,Rg.jsx)(`video`,{src:n,controls:!0,className:`w-full max-w-xl rounded-md`,children:(0,Rg.jsx)(`track`,{kind:`captions`})}),o!==``&&(0,Rg.jsxs)(`div`,{className:`text-sm text-muted-foreground`,children:[y,` `,c>0?`${Math.round(c*100)}%`:``]}),p&&(0,Rg.jsx)(`div`,{className:`text-sm text-destructive`,children:p}),i&&n&&(0,Rg.jsx)(Ie,{src:n,tree:i,showFrameOCR:!0,className:`max-w-2xl`})]})}var Lg,Rg,zg=t((()=>{c(),Lg=e(a(),1),Pe(),tg(),Ng(),Ah(),Rg=o(),Ig.__docgenInfo={description:``,methods:[],displayName:`VideoExplorer`,props:{samples:{required:!1,tsType:{name:`Array`,elements:[{name:`VideoSampleSpec`}],raw:`VideoSampleSpec[]`},description:``,defaultValue:{value:`[]`,computed:!1}},modelBase:{required:!1,tsType:{name:`string`},description:`Base URL the OCR models are served from (same-origin/CORS); enables frame OCR.`}}}}));function Bg({assets:e,defaultSampleId:t,defaultPipelineId:n,sampleIds:r}){let i=nt(e),a=Ye({sampleIds:r}),[o,c]=(0,Vg.useState)({mode:`multi`,paths:[(We.find(e=>e.id===t)??We[0]).filename]}),[u,d]=(0,Vg.useState)(null),[f,p]=(0,Vg.useState)(n??Ug[0].id),[m,h]=(0,Vg.useState)(null),[_,v]=(0,Vg.useState)(null),[y,b]=(0,Vg.useState)(0),[x,S]=(0,Vg.useState)(null),[C,w]=(0,Vg.useState)(!1),T=(0,Vg.useMemo)(()=>Je(o,a),[o,a]),E=(0,Vg.useMemo)(()=>T.find(e=>e.path===u)??T[0],[T,u]),D=(0,Vg.useCallback)(async()=>{if(!i.ready||!E)return;let e=Ug.find(e=>e.id===f)??Ug[0];w(!0),S(null);let t=i.writeFile(E.name,E.bytes),n=`/project/out-${E.name}`,r=await i.trace(e.build(t,n));if(r.ok&&r.trace){h(r.trace);let e=i.readBytes(n);e&&e.length>0&&(a.setOutput(`out-${E.name}`,e),v(n),b(e=>e+1))}else S(r.error??`the run produced no trace`),h(null);w(!1)},[i.ready,i.writeFile,i.trace,i.readBytes,a,E?.path,E?.changedAt,f]);return(0,Vg.useEffect)(()=>{i.ready&&D()},[i.ready,E?.path,E?.changedAt,f]),(0,Hg.jsxs)(`div`,{className:`kapi-reference flex flex-col gap-3 text-foreground`,children:[(0,Hg.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[(0,Hg.jsx)(Xe,{label:l(`2vWXWO`,`Inputs`),library:a,selection:o,onSelectionChange:c,sampleIds:r}),(0,Hg.jsx)(ye,{type:`single`,variant:`outline`,value:f,onValueChange:e=>e&&p(e),children:Ug.map(e=>(0,Hg.jsx)(ve,{value:e.id,className:`px-3 text-xs`,children:e.label},e.id))}),(0,Hg.jsx)(k,{onClick:()=>void D(),disabled:!i.ready||C,children:s(`22SuFe`,`{=m0} Run`,{"=m0":(0,Hg.jsx)(g,{})})})]}),(0,Hg.jsx)(wn,{files:T,activePath:E?.path,onChange:d}),(0,Hg.jsxs)(`div`,{className:O(`min-h-[1.4rem] text-sm text-muted-foreground`,x&&`text-destructive`),children:[i.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,i.status===`error`&&`Failed to start: ${i.error}`,i.ready&&C&&`Running pipeline…`,i.ready&&!C&&x&&`Error: ${x}`]}),m&&(0,Hg.jsx)(bn,{trace:m,showDescription:!1}),_&&(0,Hg.jsx)(st,{runtime:i,path:_,version:y}),!m&&!x&&(0,Hg.jsx)(`div`,{className:`py-4 text-center text-sm text-muted-foreground`,children:l(`2kzjOh`,`Pick a file and pipeline, then press Run.`)})]})}var Vg,Hg,Ug,Wg=t((()=>{c(),Vg=e(a(),1),E(),j(),at(),qe(),En(),ot(),Cn(),Ue(),Ke(),Hg=o(),Ug=[{id:`pseudo-translate`,label:`Pseudo-translate`,build:(e,t)=>[`pseudo-translate`,e,`-o`,t]},{id:`ai-translate-qa`,label:`AI translate + QA (demo)`,build:(e,t)=>[`run`,`ai-translate-qa`,`-i`,e,`-o`,t,`--target-lang`,`fr`]},{id:`secure-translate`,label:`Secure translate (demo)`,build:(e,t)=>[`run`,`secure-translate`,`-i`,e,`-o`,t,`--target-lang`,`fr`]}],Bg.__docgenInfo={description:``,methods:[],displayName:`PipelineExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:``},defaultSampleId:{required:!1,tsType:{name:`string`},description:``},defaultPipelineId:{required:!1,tsType:{name:`string`},description:``},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``}}}}));function Gg({value:e,onChange:t,sampleIds:n,label:r=`File`}){let i=Ye({sampleIds:n}),[a,o]=(0,Kg.useState)(()=>({mode:`single`,paths:e?[e.filename]:[]})),s=(0,Kg.useMemo)(()=>Je(a,i)[0],[a,i]);return(0,Kg.useEffect)(()=>{s&&t({filename:s.path,label:s.name,content:Jg.decode(s.bytes),bytes:s.bytes})},[s?.path,s?.changedAt]),(0,qg.jsx)(Xe,{label:r,library:i,selection:a,onSelectionChange:o,multiple:!1,sampleIds:n})}var Kg,qg,Jg,Yg=t((()=>{Kg=e(a(),1),qe(),Ue(),qg=o(),Jg=new TextDecoder,Gg.__docgenInfo={description:``,methods:[],displayName:`FileSource`,props:{value:{required:!0,tsType:{name:`union`,raw:`FileSourceValue | null`,elements:[{name:`FileSourceValue`},{name:`null`}]},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(v: FileSourceValue) => void`,signature:{arguments:[{type:{name:`FileSourceValue`},name:`v`}],return:{name:`void`}}},description:``},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Restrict the offered samples to these ids (default: all).`},label:{required:!1,tsType:{name:`string`},description:`Field label (default "File").`,defaultValue:{value:`"File"`,computed:!1}}}}})),Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_=t((()=>{Xg=`_table_18qqp_1`,Zg=`_idCol_18qqp_28`,Qg=`_id_18qqp_28`,$g=`_muted_18qqp_38`,e_=`_unchanged_18qqp_42`,t_=`_changed_18qqp_46`,n_=`_before_18qqp_46`,r_=`_arrow_18qqp_52`,i_=`_after_18qqp_56`,a_=`_droppedRow_18qqp_61`,o_=`_empty_18qqp_65`,s_={table:Xg,idCol:Zg,id:Qg,muted:$g,unchanged:e_,changed:t_,before:n_,arrow:r_,after:i_,droppedRow:a_,empty:o_}}));function l_(e){let t=e.nodes.filter(e=>e.type===`tool`);return t.length>0?t[t.length-1].id:`tool-0`}function u_({trace:e,targetLocale:t}){let n=l_(e),r=Object.values(e.parts).filter(e=>e.initial.type===`Block`).map(e=>{let t=e.afterNode?.[n];return{id:e.initial.id,srcBefore:e.initial.sourceText??``,srcAfter:t?t.sourceText??``:null,tgtBefore:e.initial.targetText??``,tgtAfter:t?.targetText??``,dropped:!t}}),i=r.some(e=>e.tgtAfter||e.tgtBefore);return r.length===0?(0,f_.jsx)(`div`,{className:s_.empty,children:l(`1c7TCp`,`No blocks were produced.`)}):(0,f_.jsxs)(`table`,{className:s_.table,children:[(0,f_.jsx)(`thead`,{children:(0,f_.jsxs)(`tr`,{children:[(0,f_.jsx)(`th`,{className:s_.idCol,children:l(`1rFRxw`,`Block`)}),(0,f_.jsx)(`th`,{children:l(`3ZLSsF`,`Source`)}),i&&(0,f_.jsx)(`th`,{children:l(`1DRFu0`,`Target${t?` · ${t}`:``}`,{value:t?` · ${t}`:``})})]})}),(0,f_.jsx)(`tbody`,{children:r.map(e=>(0,f_.jsxs)(`tr`,{className:e.dropped?s_.droppedRow:``,children:[(0,f_.jsx)(`td`,{className:s_.id,children:e.id}),(0,f_.jsx)(`td`,{children:(0,f_.jsx)(d_,{before:e.srcBefore,after:e.srcAfter,dropped:e.dropped})}),i&&(0,f_.jsx)(`td`,{children:(0,f_.jsx)(d_,{before:e.tgtBefore,after:e.dropped?null:e.tgtAfter,dropped:e.dropped})})]},e.id))})]})}function d_({before:e,after:t,dropped:n}){return n?(0,f_.jsx)(`em`,{className:s_.muted,children:l(`tVSQV`,`dropped (skip)`)}):t===null||t===``&&e===``?(0,f_.jsx)(`span`,{className:s_.muted,children:l(`3c5KEL`,`—`)}):t===e?(0,f_.jsx)(`span`,{className:s_.unchanged,children:e}):(0,f_.jsxs)(`span`,{className:s_.changed,children:[e!==``&&(0,f_.jsxs)(f_.Fragment,{children:[(0,f_.jsx)(`span`,{className:s_.before,children:e}),(0,f_.jsx)(`span`,{className:s_.arrow,children:l(`2r10w6`,`→`)})]}),(0,f_.jsx)(`span`,{className:s_.after,children:t===``?(0,f_.jsx)(`span`,{className:s_.muted,children:l(`wDgP8`,`(empty)`)}):t})]})}var f_,p_=t((()=>{c(),a(),c_(),f_=o(),u_.__docgenInfo={description:``,methods:[],displayName:`BlockResults`,props:{trace:{required:!0,tsType:{name:`FlowTrace`},description:``},targetLocale:{required:!1,tsType:{name:`string`},description:`Locale label for the target column header (e.g. "fr").`}}}})),m_,h_,g_,__,v_,y_,b_,x_,S_=t((()=>{m_=`_configPanel_t4hgc_7`,h_=`_diffTable_t4hgc_15`,g_=`_idCol_t4hgc_42`,__=`_idCell_t4hgc_46`,v_=`_beforeCell_t4hgc_52`,y_=`_afterCell_t4hgc_56`,b_=`_afterCellChanged_t4hgc_62`,x_={configPanel:m_,diffTable:h_,idCol:g_,idCell:__,beforeCell:v_,afterCell:y_,afterCellChanged:b_}}));function C_(){let e=new Map(Re.entries.map(e=>[e.id,e]));return M_.map(t=>e.get(t)).filter(e=>e!==void 0&&e.schema!==void 0)}function w_(e){let t={};for(let[n,r]of Object.entries(e?.properties??{}))t[n]=r.default??T_(r.type);return t}function T_(e){switch(e){case`boolean`:return!1;case`array`:return[];case`object`:return{};case`integer`:case`number`:return;default:return``}}function E_(e){return e==null||e===``?!0:Array.isArray(e)?e.length===0:typeof e==`object`?Object.keys(e).length===0:!1}function D_(e){if(typeof e==`boolean`||typeof e==`number`)return String(e);let t=String(e);return t===``||/[:#{}[\],&*!|>'"%@`]/.test(t)||/^\s|\s$/.test(t)?JSON.stringify(t):t}function O_(e,t,n){let r=n?.properties??{},i=Object.entries(t).filter(([e,t])=>{let n=r[e];return!(!n||E_(t)||n.default!==void 0&&JSON.stringify(n.default)===JSON.stringify(t))}),a=[`version: v1`,`name: Lab`,`defaults:`,`  source_language: en`,`flows:`,`  lab:`,`    steps:`,`      - tool: ${e}`];if(i.length>0){a.push(`        config:`);for(let[e,t]of i)a.push(`          ${e}: ${D_(t)}`)}return a.join(`
`)+`
`}function k_({assets:e,defaultSampleId:t,sampleIds:n}){let r=nt(e),i=(0,A_.useMemo)(()=>C_(),[]),a=We.find(e=>e.id===t)??We[0],[o,c]=(0,A_.useState)({filename:a.filename,content:a.content,label:a.label}),[u,d]=(0,A_.useState)(i[0]?.id??``),f=(0,A_.useMemo)(()=>i.find(e=>e.id===u)??i[0],[i,u]),[p,m]=(0,A_.useState)(()=>w_(f?.schema));(0,A_.useEffect)(()=>{m(w_(f?.schema))},[f]);let[h,_]=(0,A_.useState)(null),[v,y]=(0,A_.useState)(null),[b,x]=(0,A_.useState)(!1),S=(0,A_.useCallback)(async()=>{if(!r.ready||!f)return;x(!0),y(null);let e=r.writeFile(o.filename,o.bytes??o.content),t=O_(f.id,p,f.schema),n=r.writeFile(`toollab.kapi`,t),i=`/project/toollab-out-${o.filename}`,a=await r.trace([`run`,`lab`,`-p`,n,`-i`,e,`-o`,i,`--target-lang`,`fr`]);a.ok&&a.trace?_(a.trace):(y(a.error??`the run produced no trace`),_(null)),x(!1)},[r.ready,r.writeFile,r.trace,o,f,p]);(0,A_.useEffect)(()=>{if(!r.ready)return;let e=setTimeout(()=>void S(),250);return()=>clearTimeout(e)},[r.ready,S]);let C=h?Object.values(h.parts).filter(e=>e.initial.type===`Block`).length:0;return f?(0,j_.jsxs)(`div`,{className:M.explorer,children:[(0,j_.jsx)(Gg,{value:o,onChange:c,sampleIds:n}),(0,j_.jsxs)(`div`,{className:M.pickerRow,children:[(0,j_.jsx)(`label`,{className:M.pickerLabel,children:l(`2Tbgl8`,`Tool`)}),(0,j_.jsx)(`select`,{className:M.select,value:u,onChange:e=>d(e.target.value),children:i.map(e=>(0,j_.jsx)(`option`,{value:e.id,children:e.displayName},e.id))}),(0,j_.jsx)(`button`,{className:M.runButton,onClick:()=>void S(),disabled:!r.ready||b,children:s(`22SuFe`,`{=m0} Run`,{"=m0":(0,j_.jsx)(g,{size:14})})})]}),(0,j_.jsx)(`div`,{className:`${x_.configPanel} kapi-reference`,children:(0,j_.jsx)(be,{schema:f.schema,values:p,onChange:m,paramDocs:f.doc?.parameters,hideHeader:!0,compact:!0})}),(0,j_.jsxs)(`div`,{className:`${M.statusBar} ${v?M.statusError:``}`,children:[r.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,r.status===`error`&&`Failed to start: ${r.error}`,r.ready&&b&&`Running tool…`,r.ready&&!b&&v&&`Error: ${v}`,r.ready&&!b&&!v&&h&&(0,j_.jsxs)(`span`,{children:[C,` `,C===1?`block`:`blocks`]})]}),h?(0,j_.jsx)(u_,{trace:h,targetLocale:`fr`}):!v&&!b&&(0,j_.jsx)(`div`,{className:M.emptyHint,children:l(`3ypVLE`,`Pick a tool and edit its config.`)})]}):(0,j_.jsx)(`div`,{className:M.emptyHint,children:l(`36MCkZ`,`No browser-safe tools available.`)})}var A_,j_,M_,N_=t((()=>{c(),A_=e(a(),1),E(),Le(),j(),at(),Yg(),Ke(),p_(),$e(),S_(),j_=o(),M_=[`pseudo-translate`,`case-transform`],k_.__docgenInfo={description:``,methods:[],displayName:`ToolLab`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`},defaultSampleId:{required:!1,tsType:{name:`string`},description:`Sample selected on first render (default: first sample).`},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Restrict the offered samples.`}}}})),P_,F_,I_,L_,R_,z_,B_,V_=t((()=>{P_=`_diff_vyot8_4`,F_=`_column_vyot8_16`,I_=`_columnHeader_vyot8_26`,L_=`_columnTag_vyot8_41`,R_=`_code_vyot8_51`,z_=`_note_vyot8_64`,B_={diff:P_,column:F_,columnHeader:I_,columnTag:L_,code:R_,note:z_}}));function H_({assets:e,defaultSampleId:t,sampleIds:n}){let r=nt(e),i=We.find(e=>e.id===t)??We[0],[a,o]=(0,U_.useState)({filename:i.filename,content:i.content,label:i.label}),[c,u]=(0,U_.useState)(null),[d,f]=(0,U_.useState)(null),[p,m]=(0,U_.useState)(null),[h,g]=(0,U_.useState)(!1),_=(0,U_.useCallback)(async()=>{if(!r.ready)return;g(!0),m(null);let e=r.writeFile(a.filename,a.bytes??a.content),t=`/project/roundtrip-${a.filename}`,n=await r.trace([`pseudo-translate`,e,`-o`,t]);if(n.ok&&n.trace){let e=r.readFile(t);if(e===null)m(`the writer produced no output file`),u(null),f(null);else{u(e);let t=Object.values(n.trace.parts).filter(e=>e.initial.type===`Block`).length;f(t)}}else m(n.error??`the round trip produced no output`),u(null),f(null);g(!1)},[r.ready,r.writeFile,r.trace,r.readFile,a]);return(0,U_.useEffect)(()=>{r.ready&&_()},[r.ready,_]),(0,W_.jsxs)(`div`,{className:M.explorer,children:[(0,W_.jsx)(Gg,{value:a,onChange:o,sampleIds:n}),(0,W_.jsxs)(`div`,{className:`${M.statusBar} ${p?M.statusError:``}`,children:[r.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,r.status===`error`&&`Failed to start: ${r.error}`,r.ready&&h&&`Reading, pseudo-translating, and writing back…`,r.ready&&!h&&p&&`Error: ${p}`,r.ready&&!h&&!p&&d!==null&&(0,W_.jsx)(`span`,{className:M.stats,children:(0,W_.jsxs)(`span`,{className:M.statBadge,children:[(0,W_.jsx)(`span`,{className:M.statCount,children:d}),` `,d===1?`translatable block`:`translatable blocks`]})})]}),c!==null&&(0,W_.jsxs)(W_.Fragment,{children:[(0,W_.jsxs)(`div`,{className:B_.diff,children:[(0,W_.jsxs)(`div`,{className:B_.column,children:[(0,W_.jsx)(`div`,{className:B_.columnHeader,children:s(`3RVvfR`,`{=m0}Source{/=m0} {=m1}{file.filename}{/=m1}`,{"=m0":(0,W_.jsx)(`span`,{children:`Source`}),"=m1":(0,W_.jsx)(`span`,{className:B_.columnTag,children:a.filename})},{"file.filename":a.filename})}),(0,W_.jsx)(`pre`,{className:B_.code,children:a.content})]}),(0,W_.jsxs)(`div`,{className:B_.column,children:[(0,W_.jsx)(`div`,{className:B_.columnHeader,children:s(`2ByoG1`,`{=m0}Round-tripped{/=m0} {=m1}pseudo-translate{/=m1}`,{"=m0":(0,W_.jsx)(`span`,{children:`Round-tripped`}),"=m1":(0,W_.jsx)(`span`,{className:B_.columnTag,children:`pseudo-translate`})})}),(0,W_.jsx)(`pre`,{className:B_.code,children:c})]})]}),(0,W_.jsx)(`p`,{className:B_.note,children:l(`2vt30`,`Only the translatable leaf text changed — pseudo-translation rewrote it into accented glyphs. Every tag, key, attribute, and delimiter belongs to the non-translatable skeleton the reader set aside, so the writer reproduces the surrounding structure exactly.`)})]})]})}var U_,W_,G_=t((()=>{c(),U_=e(a(),1),at(),Yg(),Ke(),$e(),V_(),W_=o(),H_.__docgenInfo={description:``,methods:[],displayName:`RoundTripExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`},defaultSampleId:{required:!1,tsType:{name:`string`},description:`Sample selected on first render (default: first sample).`},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Restrict the offered samples.`}}}})),K_,q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv=t((()=>{K_=`_controls_1alc7_1`,q_=`_targetField_1alc7_8`,J_=`_targetLabel_1alc7_15`,Y_=`_targetSelect_1alc7_21`,X_=`_tabs_1alc7_30`,Z_=`_tab_1alc7_30`,Q_=`_tabActive_1alc7_53`,$_=`_code_1alc7_58`,ev=`_preview_1alc7_73`,tv=`_note_1alc7_82`,nv={controls:K_,targetField:q_,targetLabel:J_,targetSelect:Y_,tabs:X_,tab:Z_,tabActive:Q_,code:$_,preview:ev,note:tv}}));function iv({assets:e,defaultSampleId:t,sampleIds:n,defaultTarget:r}){let i=nt(e),a=n??cv,o=We.find(e=>e.id===t)??We.find(e=>e.id===a[0])??We[0],[c,u]=(0,av.useState)({filename:o.filename,label:o.label,content:o.content}),[d,f]=(0,av.useState)(r??`doclang`),[p,m]=(0,av.useState)(`source`),[h,g]=(0,av.useState)(null),[_,v]=(0,av.useState)(null),[y,b]=(0,av.useState)(null),[x,S]=(0,av.useState)(!1),C=(0,av.useCallback)(async(e,t,n)=>{let r=`/project/converted.${n}`,{code:a,output:o}=await i.runCapture([`convert`,e,`--to`,t,`-o`,r]),s=i.readFile(r);if(a!==0||s===null)throw Error((o||``).trim()||`conversion to ${t} produced no output`);return s},[i.runCapture,i.readFile]),w=(0,av.useCallback)(async()=>{if(i.ready){S(!0),b(null);try{let e=i.writeFile(c.filename,c.bytes??c.content),t=sv.find(e=>e.id===d)??sv[0],n=await C(e,t.id,t.ext);g(n),v(t.id===`html`?n:await C(e,`html`,`html`))}catch(e){g(null),v(null),b(e instanceof Error?e.message:String(e))}S(!1)}},[i.ready,i.writeFile,C,c,d]);return(0,av.useEffect)(()=>{i.ready&&w()},[i.ready,w]),(0,ov.jsxs)(`div`,{className:M.explorer,children:[(0,ov.jsxs)(`div`,{className:nv.controls,children:[(0,ov.jsx)(Gg,{value:c,onChange:u,sampleIds:a,label:l(`LvD8C`,`Input`)}),(0,ov.jsxs)(`label`,{className:nv.targetField,children:[(0,ov.jsx)(`span`,{className:nv.targetLabel,children:l(`OIFPb`,`Convert to`)}),(0,ov.jsx)(`select`,{className:nv.targetSelect,value:d,onChange:e=>f(e.target.value),children:sv.map(e=>(0,ov.jsx)(`option`,{value:e.id,children:e.label},e.id))})]})]}),(0,ov.jsxs)(`div`,{className:`${M.statusBar} ${y?M.statusError:``}`,children:[i.status===`booting`&&`Booting kapi (first run downloads the WASM engine)…`,i.status===`error`&&`Failed to start: ${i.error}`,i.ready&&x&&`Converting…`,i.ready&&!x&&y&&`Error: ${y}`,i.ready&&!x&&!y&&h!==null&&(0,ov.jsx)(`span`,{className:M.stats,children:s(`oVVM5`,`{=m0} {file.filename} → {value} {/=m0}`,{"=m0":(0,ov.jsxs)(`span`,{className:M.statBadge,children:[c.filename,` → `,sv.find(e=>e.id===d)?.label]})},{"file.filename":c.filename,value:sv.find(e=>e.id===d)?.label})})]}),h!==null&&(0,ov.jsxs)(ov.Fragment,{children:[(0,ov.jsxs)(`div`,{className:nv.tabs,role:`tablist`,"aria-label":l(`10BISv`,`Output view`),children:[(0,ov.jsx)(`button`,{role:`tab`,"aria-selected":p===`rendered`,className:`${nv.tab} ${p===`rendered`?nv.tabActive:``}`,onClick:()=>m(`rendered`),children:l(`p3Vl8`,`Rendered`)}),(0,ov.jsx)(`button`,{role:`tab`,"aria-selected":p===`source`,className:`${nv.tab} ${p===`source`?nv.tabActive:``}`,onClick:()=>m(`source`),children:l(`28mHDu`,`Source`)})]}),p===`source`&&(0,ov.jsx)(`pre`,{className:nv.code,children:h}),p===`rendered`&&(_===null?(0,ov.jsx)(`p`,{className:nv.note,children:l(`6momN`,`No visual preview for this document.`)}):(0,ov.jsx)(`iframe`,{className:nv.preview,title:l(`484Tkf`,`Rendered preview`),sandbox:``,srcDoc:_})),(0,ov.jsx)(`p`,{className:nv.note,children:l(`4geXn4`,`The reader parses the input into the content model (roles, runs, tables, geometry); a generative writer re-serializes it as  ${sv.find(e=>e.id===d)?.label}. Skeleton-driven formats (docx, odt, idml, epub) inject into an original file and so cannot be conversion targets.`,{value:` `,value_2:sv.find(e=>e.id===d)?.label})})]})]})}var av,ov,sv,cv,lv=t((()=>{c(),av=e(a(),1),at(),Yg(),Ke(),$e(),rv(),ov=o(),sv=[{id:`doclang`,label:`DocLang`,ext:`dclg.xml`},{id:`markdown`,label:`Markdown`,ext:`md`},{id:`html`,label:`HTML`,ext:`html`},{id:`xliff`,label:`XLIFF`,ext:`xliff`},{id:`po`,label:`Gettext PO`,ext:`po`},{id:`json`,label:`JSON`,ext:`json`},{id:`yaml`,label:`YAML`,ext:`yaml`},{id:`plaintext`,label:`Plain text`,ext:`txt`}],cv=[`article-md`,`page-html`,`report-doclang`,`messages-json`,`app-xliff`],iv.__docgenInfo={description:``,methods:[],displayName:`ConversionExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`},defaultSampleId:{required:!1,tsType:{name:`string`},description:`Sample selected on first render.`},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Restrict the offered samples.`},defaultTarget:{required:!1,tsType:{name:`string`},description:`Output format selected on first render (default: doclang).`}}}}));function uv({runtime:e,file:t}){let[n,r]=(0,fv.useState)(null),[i,a]=(0,fv.useState)(null),[o,s]=(0,fv.useState)(!1);return(0,fv.useEffect)(()=>{if(!e.ready)return;let n=!1;return s(!0),a(null),e.inspect(t.filename,t.bytes??t.content).then(e=>{n||(e.ok&&e.tree?r(e.tree):(a(e.error??`could not read the file`),r(null)))}).finally(()=>!n&&s(!1)),()=>{n=!0}},[e.ready,e.inspect,t]),(0,pv.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,pv.jsxs)(`div`,{className:`flex items-center gap-1.5 text-[11px] text-muted-foreground`,children:[(0,pv.jsx)(C,{size:12}),(0,pv.jsx)(`code`,{className:`text-[10px]`,children:t.filename})]}),(0,pv.jsx)(`p`,{className:`text-[11px] leading-relaxed text-muted-foreground`,children:l(`47fBNV`,`The reader turns these bytes into the content model — Layers and Groups containing Blocks whose text is a sequence of Runs. This tree is exactly what flows into the first tool.`)}),!e.ready&&(0,pv.jsx)(`div`,{className:`py-4 text-center text-[11px] italic text-muted-foreground`,children:l(`ILxca`,`Waiting for the engine…`)}),o&&(0,pv.jsx)(`div`,{className:`py-4 text-center text-[11px] italic text-muted-foreground`,children:l(`3oY4eC`,`Reading…`)}),i&&(0,pv.jsx)(`div`,{className:`text-[11px] text-destructive`,children:i}),n&&!o&&(0,pv.jsx)(Me,{tree:n})]})}function dv({runtime:e,outPath:t,version:n,baseline:r}){return t?(0,pv.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,pv.jsx)(`p`,{className:`text-[11px] leading-relaxed text-muted-foreground`,children:s(`L0OFA`,`The writer splices the processed blocks back into the document's structural skeleton. In the {=m0}Native{/=m0} tab, lines that differ from the input are highlighted — only the block text changes; the structure round-trips exactly.`,{"=m0":(0,pv.jsx)(`strong`,{children:`Native`})})}),(0,pv.jsx)(st,{runtime:e,path:t,version:n,baseline:r,defaultTab:`raw`})]}):(0,pv.jsx)(`div`,{className:`py-4 text-center text-[11px] italic text-muted-foreground`,children:l(`3XuJ6r`,`Nothing written yet — press Run and the output the writer produces lands here.`)})}var fv,pv,mv=t((()=>{c(),fv=e(a(),1),E(),Pe(),ot(),pv=o(),uv.__docgenInfo={description:``,methods:[],displayName:`SourceContentPanel`,props:{runtime:{required:!0,tsType:{name:`LabRuntime`},description:``},file:{required:!0,tsType:{name:`FileSourceValue`},description:``}}},dv.__docgenInfo={description:``,methods:[],displayName:`SinkOutputPanel`,props:{runtime:{required:!0,tsType:{name:`LabRuntime`},description:``},outPath:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`Path the last run wrote, or null before any run.`},version:{required:!0,tsType:{name:`number`},description:`Bumped per run so the viewer re-reads the bytes.`},baseline:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:`The input file's text, diffed against the output's Native bytes.`}}}})),hv,gv=t((()=>{hv=[{id:`redaction`,label:`Redaction`,description:`Protect sensitive content before it reaches a model: redact replaces matched spans with placeholders and vaults the originals (watch the redaction.secret annotation appear), ai-translate works on the protected text, and unredact restores the originals into the translation.`,steps:[{tool:`redact`},{tool:`ai-translate`},{tool:`qa-check`},{tool:`unredact`}],presets:{redact:{detectors:[`rules`],rules:[{term:`Acme Corp`,category:`org`},{term:`Jane Doe`,category:`person`}]}},sampleId:`support-reply`,walkthrough:[{prose:`The redact step is bare, yet it knows what to redact: the rules live at PROJECT level (defaults.tools in the recipe), and every flow in the project inherits them. The config panel shows the inherited preset.`,select:`tool-0`,mode:`configure`},{prose:`redact is a recoverable transformer — it rewrites the source (placeholders in, originals vaulted) and the placement check keeps it ahead of any step that sends content off-machine. Run the flow.`,run:!0,select:null},{prose:`What redact did: each block's after-text carries placeholders, and a redaction.secret annotation records what was vaulted. The model downstream only ever sees the placeholders.`,select:`tool-0`,mode:`inspect`},{prose:`unredact restores the vaulted originals into the translated target — the names are back, in the right places, in the translation.`,select:`tool-3`,mode:`inspect`},{prose:`And the written file: the Sink shows the output with its Native lines diffed against the input — structure intact, block text translated, secrets restored.`,select:`endpoint-sink`}]},{id:`redaction-ner`,label:`Redaction (on-device NER)`,description:`Entity-driven redaction with nothing leaving your browser: a GLiNER model (ONNX, run by onnxruntime-web) detects people, organizations and locations on-device, redact replaces them using the entity overlay, and unredact restores the originals after translation. Because the detector is local, the placement check has no remote egress to object to — the first run downloads the model (~175 MB) once.`,steps:[{tool:`ai-entity-extract`,config:{engine:`ner`}},{tool:`redact`,config:{detectors:[`entities`],entityTypes:[`person`,`org`,`location`]}},{tool:`ai-translate`},{tool:`unredact`}],sampleId:`support-reply`,walkthrough:[{prose:`Same protection, but entity-driven and fully on-device: ai-entity-extract runs a GLiNER model in your browser (engine: ner) — nothing leaves the page, so the placement check has no remote egress to object to.`,select:`tool-0`,mode:`configure`},{prose:`Run it. The first run downloads the model (~175 MB, cached by the browser) — watch the progress bar under the canvas.`,run:!0,select:null},{prose:`The extractor attached an entity overlay — the people, organizations and locations it found, with confidence scores.`,select:`tool-0`,mode:`inspect`},{prose:`redact consumed those entity spans and replaced them with placeholders; after translation, unredact restores the originals.`,select:`tool-1`,mode:`inspect`}]},{id:`segmentation`,label:`Segmentation`,description:`Sentence segmentation is a stand-off overlay, not a structural split: the segmentation step attaches sentence spans over the source (open the run inspector to see them), and later steps work per segment without the text ever being cut apart.`,steps:[{tool:`segmentation`},{tool:`ai-translate`},{tool:`qa-check`}],sampleId:`support-reply`,walkthrough:[{prose:`Start at the Source: the reader hands the first tool whole blocks — one run of text each, no sentence boundaries yet.`,select:`endpoint-source`},{prose:`Run the flow.`,run:!0,select:null},{prose:`Open the segmentation step: each block now carries sentence spans — a stand-off overlay anchored to the runs. The text itself was never cut apart.`,select:`tool-0`,mode:`inspect`},{prose:`Later steps work per segment: ai-translate wrote the target sentence by sentence, guided by those spans.`,select:`tool-1`,mode:`inspect`}]},{id:`annotations`,label:`Content model & annotations`,description:`Tools communicate through stand-off state on the block: segmentation adds sentence spans, term-check and qa-check attach qa findings, ai-translate writes the target. Step through the run and click each node to watch the block accumulate overlays and annotations.`,steps:[{tool:`segmentation`},{tool:`ai-translate`},{tool:`term-check`},{tool:`qa-check`}],sampleId:`support-reply`,walkthrough:[{prose:`Start at the Source: the reader turns the file into the content model — Layers and Groups containing Blocks whose text is a sequence of Runs. Inspect the tree; it is what the first tool receives.`,select:`endpoint-source`},{prose:`Run the flow, then watch one block accumulate stand-off state as it passes each step — nothing rewrites the text; tools communicate by attaching overlays and annotations.`,run:!0,select:null},{prose:`segmentation attached sentence spans over the source runs.`,select:`tool-0`,mode:`inspect`},{prose:`ai-translate wrote the fr target — a first-class, locale-keyed record on the block.`,select:`tool-1`,mode:`inspect`},{prose:`term-check and qa-check attach findings without touching text or target — open each and read the +overlay / +annotation delta chips.`,select:`tool-2`,mode:`highlight`},{prose:`Now scrub the transport under the canvas to replay the run — the dots on the edges are the parts in flight between steps.`,select:null}]},{id:`pseudo`,label:`Pseudo-translation`,description:`The quickest end-to-end pipeline: pseudo-translate writes an accented, padded target for every block so layout and encoding issues surface before any real translation is bought.`,steps:[{tool:`pseudo-translate`},{tool:`word-count`}],sampleId:`support-reply`,walkthrough:[{prose:`The quickest end-to-end pipeline — run it.`,run:!0,select:null},{prose:`pseudo-translate wrote an accented, padded target for every block, so layout and encoding issues surface before any real translation is bought.`,select:`tool-0`,mode:`inspect`},{prose:`Inspect the Sink: the Native tab diffs the written file against the input — the structure is byte-identical, only the block text changed. That is the round-trip guarantee.`,select:`endpoint-sink`}]},{id:`project`,label:`Project & recipe`,description:`The canvas is a view over a .kapi recipe — the committed file kapi works from. Project scope (defaults.tools) pins presets every flow inherits; the flow's steps are the nodes; Source and Sink are bindings, not steps.`,steps:[{tool:`segmentation`},{tool:`redact`},{tool:`ai-translate`}],presets:{redact:{detectors:[`rules`],rules:[{term:`Acme Corp`,category:`org`}]}},sampleId:`support-reply`,walkthrough:[{prose:`A flow never lives alone: everything on this canvas serializes to a .kapi recipe — the same committed YAML kapi uses on disk. The Project panel that just opened shows it live: the highlighted defaults block is PROJECT scope, the flow's steps are your nodes.`,recipe:!0,select:null},{prose:`Project scope in action: the redact step is bare on the canvas, but defaults.tools.redact pins its rules for every flow in the project — the step's config panel shows the inherited preset (with an Edit project defaults shortcut), and any key the step sets itself would win.`,select:`tool-1`,mode:`configure`,recipe:!1},{prose:`Source and Sink are BINDINGS, not steps — the flow itself owns no I/O. In a real project, extract reads the recipe's content globs into the project store, an in-project run is process-only over that store, and merge writes localized files back out. Here the bindings are file in → file out, so you can watch the whole loop.`,select:`endpoint-source`,mode:`highlight`},{prose:"Run the flow — exactly what `kapi run` does with this recipe.",run:!0,select:null},{prose:`The run wrote through the sink binding: the output file, structure intact. Edit the flow — add a tool, change a config — then open Project again: the YAML follows the canvas.`,select:`endpoint-sink`,recipe:!1}]},{id:`scripting`,label:`Scripting`,description:`When no built-in tool fits, the script step runs a small JavaScript program over each Part — modify text, filter parts, or log() what flows through. The step IS the script: its code editor (with typed completions) lives in the step's config panel.`,steps:[{tool:`script`,config:{allowSourceMutation:!0,code:`// process(part) runs once for every Part in the document.
/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    part.block.source[0].content.text =
      part.block.source[0].content.text.toUpperCase();
  }
  return part;
}
`}},{tool:`word-count`}],sampleId:`support-reply`,walkthrough:[{prose:`A script step is a tool you write yourself: open its config and the panel is a real code editor — typed completions for part / emit / skip / log, plus a library of examples to start from. This one rewrites the source, so it declares allowSourceMutation — the source is read-only for scripts unless they opt into being a transformer.`,select:`tool-0`,mode:`configure`},{prose:`Run the flow — the engine executes your exact code over every part.`,run:!0,select:null},{prose:`What the script did: every block's text was rewritten (this one shouts). Edit the code — try a different example — and run again.`,select:`tool-0`,mode:`inspect`}]},{id:`build-your-own`,label:`Build your own`,description:`Start from the classic prepare-translate-check chain and reshape it: add tools from the palette, reorder, configure — the placement check flags an unsafe transformer slot before you run.`,steps:[{tool:`search-replace`,config:{pairs:[{search:`color`,replace:`colour`}],source:!0,target:!1}},{tool:`redact`,config:{detectors:[`rules`],rules:[{term:`Acme Corp`,category:`org`},{term:`Jane Doe`,category:`person`}]}},{tool:`ai-translate`},{tool:`qa-check`}],sampleId:`support-reply`}]}));function _v({steps:e,index:t,onIndexChange:n,onRun:r,runDisabled:i,collapsed:a,onToggleCollapse:o}){let c=e[t];if(!c)return null;let d=t===e.length-1;return a&&o?(0,vv.jsx)(`button`,{type:`button`,onClick:o,className:`flex items-center gap-2 rounded-full border border-border bg-card/95 px-3 py-1.5 shadow-lg backdrop-blur-sm transition-colors hover:bg-card`,title:l(`128egH`,`Resume the walkthrough`),"aria-label":l(`Yhz0r`,`Resume the walkthrough`),children:s(`eNW0T`,`{=m0} {=m1}Walkthrough{/=m1} {=m2} {value} / {steps.length} {/=m2}`,{"=m0":(0,vv.jsx)(u,{size:13,className:`text-primary`}),"=m1":(0,vv.jsx)(`span`,{className:`text-xs font-semibold text-foreground`,children:`Walkthrough`}),"=m2":(0,vv.jsxs)(`span`,{className:`font-mono text-[10px] text-muted-foreground`,children:[t+1,` / `,e.length]})},{value:t+1,"steps.length":e.length})}):(0,vv.jsxs)(`div`,{className:`flex flex-col gap-2 rounded-lg border border-l-4 border-border border-l-primary bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur-sm`,children:[(0,vv.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,vv.jsx)(`span`,{className:`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary`,children:s(`PK3hc`,`{=m0} Walkthrough`,{"=m0":(0,vv.jsx)(u,{size:12})})}),(0,vv.jsx)(`div`,{className:`flex items-center gap-1.5`,children:s(`2A8H79`,`{=m0} {value} / {steps.length} {/=m0} {=m3}`,{"=m0":(0,vv.jsxs)(`span`,{className:`font-mono text-[10px] text-muted-foreground`,children:[t+1,` / `,e.length]}),"=m3":o&&(0,vv.jsx)(`button`,{type:`button`,onClick:o,className:`-mr-1 flex size-5 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-muted hover:text-foreground`,title:`Minimize the walkthrough`,"aria-label":`Minimize the walkthrough`,children:(0,vv.jsx)(p,{size:13})})},{value:t+1,"steps.length":e.length})})]}),(0,vv.jsx)(`p`,{className:`text-sm leading-relaxed text-foreground`,children:c.prose}),(0,vv.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,vv.jsx)(k,{variant:`ghost`,size:`sm`,className:`h-7 px-2 text-xs`,disabled:t===0,onClick:()=>n(t-1),children:s(`2y2NJr`,`{=m0} Back`,{"=m0":(0,vv.jsx)(D,{size:12,className:`mr-1`})})}),c.run?(0,vv.jsx)(k,{size:`sm`,className:`h-7 px-3 text-xs`,disabled:i,onClick:r,children:s(`3YifRJ`,`{=m0} Run the flow`,{"=m0":(0,vv.jsx)(g,{size:12,className:`mr-1`})})}):!d&&(0,vv.jsx)(k,{size:`sm`,className:`h-7 px-3 text-xs`,onClick:()=>n(t+1),children:s(`ClmFQ`,`Next {=m0}`,{"=m0":(0,vv.jsx)(h,{size:12,className:`ml-1`})})}),d&&!c.run&&(0,vv.jsx)(`span`,{className:`text-[11px] italic text-muted-foreground`,children:l(`TRf6S`,`End of the walkthrough — keep exploring, or pick another scenario.`)})]})]})}var vv,yv=t((()=>{c(),a(),E(),j(),vv=o(),_v.__docgenInfo={description:``,methods:[],displayName:`WalkthroughCard`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`LessonStep`}],raw:`LessonStep[]`},description:``},index:{required:!0,tsType:{name:`number`},description:`Active step index.`},onIndexChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},onRun:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:"Run the flow (offered when the active step has `run: true`)."},runDisabled:{required:!1,tsType:{name:`boolean`},description:``},collapsed:{required:!1,tsType:{name:`boolean`},description:`Minimized to a launcher (driven by the host so the editor floats it).`},onToggleCollapse:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Toggle minimize/restore; when absent, no minimize button is shown.`}}}}));function bv(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function xv(e){if(Array.isArray(e))return e}function Sv(e,t,n){return(t=jv(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Cv(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function wv(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Ev(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Tv(Object(n),!0).forEach(function(t){Sv(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tv(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Dv(e,t){if(e==null)return{};var n,r,i=Ov(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ov(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function kv(e,t){return xv(e)||Cv(e,t)||Mv(e,t)||wv()}function Av(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function jv(e){var t=Av(e,`string`);return typeof t==`symbol`?t:t+``}function Mv(e,t){if(e){if(typeof e==`string`)return bv(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?bv(e,t):void 0}}var Nv=t((()=>{}));function Pv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Iv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Fv(Object(n),!0).forEach(function(t){Pv(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fv(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Lv(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}}function Rv(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}function zv(e){return{}.toString.call(e).includes(`Object`)}function Bv(e){return!Object.keys(e).length}function Vv(e){return typeof e==`function`}function Hv(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Uv(e,t){return zv(t)||Qv(`changeType`),Object.keys(t).some(function(t){return!Hv(e,t)})&&Qv(`changeField`),t}function Wv(e){Vv(e)||Qv(`selectorType`)}function Gv(e){Vv(e)||zv(e)||Qv(`handlerType`),zv(e)&&Object.values(e).some(function(e){return!Vv(e)})&&Qv(`handlersType`)}function Kv(e){e||Qv(`initialIsRequired`),zv(e)||Qv(`initialType`),Bv(e)&&Qv(`initialContent`)}function qv(e,t){throw Error(e[t]||e.default)}function Jv(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};$v.initial(e),$v.handler(t);var n={current:e},r=Rv(Zv)(n,t),i=Rv(Xv)(n),a=Rv($v.changes)(e),o=Rv(Yv)(n);function s(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(e){return e};return $v.selector(e),e(n.current)}function c(e){Lv(r,i,a,o)(e)}return[s,c]}function Yv(e,t){return Vv(t)?t(e.current):t}function Xv(e,t){return e.current=Iv(Iv({},e.current),t),t}function Zv(e,t,n){return Vv(t)?t(e.current):Object.keys(n).forEach(function(n){return t[n]?.call(t,e.current[n])}),n}var Qv,$v,ey,ty=t((()=>{Qv=Rv(qv)({initialIsRequired:`initial state is required`,initialType:`initial state should be an object`,initialContent:`initial state shouldn't be an empty object`,handlerType:`handler should be an object or a function`,handlersType:`all handlers should be a functions`,selectorType:`selector should be a function`,changeType:`provided value of changes should be an object`,changeField:`it seams you want to change a field in the state which is not specified in the "initial" state`,default:"an unknown error accured in `state-local` package"}),$v={changes:Uv,selector:Wv,handler:Gv,initial:Kv},ey={create:Jv}})),ny,ry=t((()=>{ny={paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs`}}}));function iy(e){return function t(){var n=this,r=[...arguments];return r.length>=e.length?e.apply(this,r):function(){var e=[...arguments];return t.apply(n,[].concat(r,e))}}}var ay=t((()=>{}));function oy(e){return{}.toString.call(e).includes(`Object`)}var sy=t((()=>{}));function cy(e){return e||fy(`configIsRequired`),oy(e)||fy(`configType`),e.urls?(ly(),{paths:{vs:e.urls.monacoBase}}):e}function ly(){console.warn(dy.deprecation)}function uy(e,t){throw Error(e[t]||e.default)}var dy,fy,py,my=t((()=>{ay(),sy(),dy={configIsRequired:`the configuration object is required`,configType:`the configuration object should be an object`,default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:`Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `},fy=iy(uy)(dy),py={config:cy}})),hy,gy=t((()=>{hy=function(){var e=[...arguments];return function(t){return e.reduceRight(function(e,t){return t(e)},t)}}}));function _y(e,t){return Object.keys(t).forEach(function(n){t[n]instanceof Object&&e[n]&&Object.assign(t[n],_y(e[n],t[n]))}),Ev(Ev({},e),t)}var vy=t((()=>{Nv()}));function yy(e){var t=!1,n=new Promise(function(n,r){e.then(function(e){return t?r(by):n(e)}),e.catch(r)});return n.cancel=function(){return t=!0},n}var by,xy=t((()=>{by={type:`cancelation`,msg:`operation is manually canceled`}}));function Sy(e){var t=py.config(e),n=t.monaco,r=Dv(t,Ay);Ny(function(e){return{config:_y(e.config,r),monaco:n}})}function Cy(){var e=My(function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}});if(!e.isInitialized){if(Ny({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),yy(Py);if(window.monaco&&window.monaco.editor)return Oy(window.monaco),e.resolve(window.monaco),yy(Py);hy(wy,Ey)(Dy)}return yy(Py)}function wy(e){return document.body.appendChild(e)}function Ty(e){var t=document.createElement(`script`);return e&&(t.src=e),t}function Ey(e){var t=My(function(e){return{config:e.config,reject:e.reject}}),n=Ty(`${t.config.paths.vs}/loader.js`);return n.onload=function(){return e()},n.onerror=t.reject,n}function Dy(){var e=My(function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}}),t=window.require;t.config(e.config),t([`vs/editor/editor.main`],function(t){var n=t.m||t;Oy(n),e.resolve(n)},function(t){e.reject(t)})}function Oy(e){My().monaco||Ny({monaco:e})}function ky(){return My(function(e){return e.monaco})}var Ay,jy,My,Ny,Py,Fy,Iy=t((()=>{Nv(),ty(),ry(),my(),gy(),vy(),xy(),Ay=[`monaco`],jy=kv(ey.create({config:ny,isInitialized:!1,resolve:null,reject:null,monaco:null}),2),My=jy[0],Ny=jy[1],Py=new Promise(function(e,t){return Ny({resolve:e,reject:t})}),Fy={config:Sy,init:Cy,__getMonacoInstance:ky}})),Ly=t((()=>{Iy()}));function Ry({children:e}){return eb.createElement(`div`,{style:sb.container},e)}function zy({width:e,height:t,isEditorReady:n,loading:r,_ref:i,className:a,wrapperProps:o}){return $y.createElement(`section`,{style:{...ob.wrapper,width:e,height:t},...o},!n&&$y.createElement(cb,null,r),$y.createElement(`div`,{ref:i,style:{...ob.fullWidth,...!n&&ob.hide},className:a}))}function By(e){(0,tb.useEffect)(e,[])}function Vy(e,t,n=!0){let r=(0,nb.useRef)(!0);(0,nb.useEffect)(r.current||!n?()=>{r.current=!1}:e,t)}function Hy(){}function Uy(e,t,n,r){return Wy(e,r)||Gy(e,t,n,r)}function Wy(e,t){return e.editor.getModel(Ky(e,t))}function Gy(e,t,n,r){return e.editor.createModel(t,n,r?Ky(e,r):void 0)}function Ky(e,t){return e.Uri.parse(t)}function qy({original:e,modified:t,language:n,originalLanguage:r,modifiedLanguage:i,originalModelPath:a,modifiedModelPath:o,keepCurrentOriginalModel:s=!1,keepCurrentModifiedModel:c=!1,theme:l=`light`,loading:u=`Loading...`,options:d={},height:f=`100%`,width:p=`100%`,className:m,wrapperProps:h={},beforeMount:g=Hy,onMount:_=Hy}){let[v,y]=(0,Zy.useState)(!1),[b,x]=(0,Zy.useState)(!0),S=(0,Zy.useRef)(null),C=(0,Zy.useRef)(null),w=(0,Zy.useRef)(null),T=(0,Zy.useRef)(_),E=(0,Zy.useRef)(g),D=(0,Zy.useRef)(!1);ub(()=>{let e=Fy.init();return e.then(e=>(C.current=e)&&x(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>S.current?k():e.cancel()}),db(()=>{if(S.current&&C.current){let t=S.current.getOriginalEditor(),i=Uy(C.current,e||``,r||n||`text`,a||``);i!==t.getModel()&&t.setModel(i)}},[a],v),db(()=>{if(S.current&&C.current){let e=S.current.getModifiedEditor(),r=Uy(C.current,t||``,i||n||`text`,o||``);r!==e.getModel()&&e.setModel(r)}},[o],v),db(()=>{let e=S.current.getModifiedEditor();e.getOption(C.current.editor.EditorOption.readOnly)?e.setValue(t||``):t!==e.getValue()&&(e.executeEdits(``,[{range:e.getModel().getFullModelRange(),text:t||``,forceMoveMarkers:!0}]),e.pushUndoStop())},[t],v),db(()=>{S.current?.getModel()?.original.setValue(e||``)},[e],v),db(()=>{let{original:e,modified:t}=S.current.getModel();C.current.editor.setModelLanguage(e,r||n||`text`),C.current.editor.setModelLanguage(t,i||n||`text`)},[n,r,i],v),db(()=>{C.current?.editor.setTheme(l)},[l],v),db(()=>{S.current?.updateOptions(d)},[d],v);let O=(0,Zy.useCallback)(()=>{if(!C.current)return;E.current(C.current);let s=Uy(C.current,e||``,r||n||`text`,a||``),c=Uy(C.current,t||``,i||n||`text`,o||``);S.current?.setModel({original:s,modified:c})},[n,t,i,e,r,a,o]),ee=(0,Zy.useCallback)(()=>{!D.current&&w.current&&(S.current=C.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...d}),O(),C.current?.editor.setTheme(l),y(!0),D.current=!0)},[d,l,O]);(0,Zy.useEffect)(()=>{v&&T.current(S.current,C.current)},[v]),(0,Zy.useEffect)(()=>{!b&&!v&&ee()},[b,v,ee]);function k(){let e=S.current?.getModel();s||e?.original?.dispose(),c||e?.modified?.dispose(),S.current?.dispose()}return Zy.createElement(lb,{width:p,height:f,isEditorReady:v,loading:u,_ref:w,className:m,wrapperProps:h})}function Jy(e){let t=(0,ab.useRef)();return(0,ab.useEffect)(()=>{t.current=e},[e]),t.current}function Yy({defaultValue:e,defaultLanguage:t,defaultPath:n,value:r,language:i,path:a,theme:o=`light`,line:s,loading:c=`Loading...`,options:l={},overrideServices:u={},saveViewState:d=!0,keepCurrentModel:f=!1,width:p=`100%`,height:m=`100%`,className:h,wrapperProps:g={},beforeMount:_=Hy,onMount:v=Hy,onChange:y,onValidate:b=Hy}){let[x,S]=(0,ib.useState)(!1),[C,w]=(0,ib.useState)(!0),T=(0,ib.useRef)(null),E=(0,ib.useRef)(null),D=(0,ib.useRef)(null),O=(0,ib.useRef)(v),ee=(0,ib.useRef)(_),k=(0,ib.useRef)(),A=(0,ib.useRef)(r),te=fb(a),ne=(0,ib.useRef)(!1),re=(0,ib.useRef)(!1);ub(()=>{let e=Fy.init();return e.then(e=>(T.current=e)&&w(!1)).catch(e=>e?.type!==`cancelation`&&console.error(`Monaco initialization: error:`,e)),()=>E.current?ae():e.cancel()}),db(()=>{let o=Uy(T.current,e||r||``,t||i||``,a||n||``);o!==E.current?.getModel()&&(d&&pb.set(te,E.current?.saveViewState()),E.current?.setModel(o),d&&E.current?.restoreViewState(pb.get(a)))},[a],x),db(()=>{E.current?.updateOptions(l)},[l],x),db(()=>{!E.current||r===void 0||(E.current.getOption(T.current.editor.EditorOption.readOnly)?E.current.setValue(r):r!==E.current.getValue()&&(re.current=!0,E.current.executeEdits(``,[{range:E.current.getModel().getFullModelRange(),text:r,forceMoveMarkers:!0}]),E.current.pushUndoStop(),re.current=!1))},[r],x),db(()=>{let e=E.current?.getModel();e&&i&&T.current?.editor.setModelLanguage(e,i)},[i],x),db(()=>{s!==void 0&&E.current?.revealLine(s)},[s],x),db(()=>{T.current?.editor.setTheme(o)},[o],x);let ie=(0,ib.useCallback)(()=>{if(!(!D.current||!T.current)&&!ne.current){ee.current(T.current);let c=a||n,f=Uy(T.current,r||e||``,t||i||``,c||``);E.current=T.current?.editor.create(D.current,{model:f,automaticLayout:!0,...l},u),d&&E.current.restoreViewState(pb.get(c)),T.current.editor.setTheme(o),s!==void 0&&E.current.revealLine(s),S(!0),ne.current=!0}},[e,t,n,r,i,a,l,u,d,o,s]);(0,ib.useEffect)(()=>{x&&O.current(E.current,T.current)},[x]),(0,ib.useEffect)(()=>{!C&&!x&&ie()},[C,x,ie]),A.current=r,(0,ib.useEffect)(()=>{x&&y&&(k.current?.dispose(),k.current=E.current?.onDidChangeModelContent(e=>{re.current||y(E.current.getValue(),e)}))},[x,y]),(0,ib.useEffect)(()=>{if(x){let e=T.current.editor.onDidChangeMarkers(e=>{let t=E.current.getModel()?.uri;if(t&&e.find(e=>e.path===t.path)){let e=T.current.editor.getModelMarkers({resource:t});b?.(e)}});return()=>{e?.dispose()}}return()=>{}},[x,b]);function ae(){k.current?.dispose(),f?d&&pb.set(a,E.current.saveViewState()):E.current.getModel()?.dispose(),E.current.dispose()}return ib.createElement(lb,{width:p,height:m,isEditorReady:x,loading:c,_ref:D,className:h,wrapperProps:g})}var Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb,pb,mb,hb,gb=t((()=>{Ly(),Xy=e(a(),1),Zy=e(a(),1),Qy=e(a(),1),$y=e(a(),1),eb=e(a(),1),tb=e(a(),1),nb=e(a(),1),a(),rb=e(a(),1),ib=e(a(),1),ab=e(a(),1),ob={wrapper:{display:`flex`,position:`relative`,textAlign:`initial`},fullWidth:{width:`100%`},hide:{display:`none`}},sb={container:{display:`flex`,height:`100%`,width:`100%`,justifyContent:`center`,alignItems:`center`}},cb=Ry,lb=(0,Qy.memo)(zy),ub=By,db=Vy,(0,Xy.memo)(qy),fb=Jy,pb=new Map,mb=(0,rb.memo)(Yy),hb=mb})),_b,vb,yb,bb=t((()=>{_b=`
/** A unit of content flowing through the pipeline. */
declare interface Part {
  /** The kind of part. Only "block" parts carry translatable text. */
  readonly type: "block" | "data" | "media" | "layer-start" | "layer-end" | "group-start" | "group-end";
  /** The translatable block — present only when type === "block". */
  block?: Block;
}

/** A translatable content unit. */
declare interface Block {
  /** Stable identifier (e.g. the JSON key or XLIFF trans-unit id). */
  readonly id: string;
  /** Whether this block is meant to be translated. */
  translatable: boolean;
  /** Source segments. Edit a segment's text in place, or reassign the array. */
  source: Segment[];
  /** Target segments per locale, e.g. part.block.targets["fr"]. */
  targets: { [locale: string]: Segment[] };
}

/** One segment of a block; its content holds the text. */
declare interface Segment {
  content: { text: string };
}

/** The current part (in the global form). Read and modify it, then emit() it. */
declare const part: Part;

/**
 * Emit a part downstream. Call it once for each part you want to keep
 * (optionally after modifying it). If you call neither emit() nor skip() — and
 * a process() function returns nothing — the part passes through unchanged.
 */
declare function emit(part: Part): void;

/** Drop the current part — it will not be emitted. */
declare function skip(): void;

/** Write a message to the run log (shown below the editor). */
declare function log(message: string): void;
`,vb=[{id:`uppercase`,label:`Uppercase source`,blurb:`Edit a block's source text, then return it.`,code:`/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    part.block.source[0].content.text =
      part.block.source[0].content.text.toUpperCase();
  }
  return part;
}
`},{id:`filter-short`,label:`Drop short blocks`,blurb:`Return null to drop a part from the stream.`,code:`/** @param {Part} part */
function process(part) {
  if (part.type !== "block") return part;
  // Keep only blocks whose source is longer than 10 characters.
  return part.block.source[0].content.text.length > 10 ? part : null;
}
`},{id:`redact-emails`,label:`Redact email addresses`,blurb:`Rewrite text with a regular expression.`,code:`/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    var text = part.block.source[0].content.text;
    part.block.source[0].content.text =
      text.replace(/[\\w.+-]+@[\\w.-]+\\.[a-z]{2,}/gi, "[redacted]");
  }
  return part;
}
`},{id:`add-target`,label:`Add a French target`,blurb:`Write a translation by assigning targets[locale].`,code:`/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    part.block.targets["fr"] = [{ content: { text: "Bonjour" } }];
  }
  return part;
}
`},{id:`wrap`,label:`Wrap with markers`,blurb:`Prefix and suffix the source text.`,code:`/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    part.block.source[0].content.text =
      "\\u00ab " + part.block.source[0].content.text + " \\u00bb";
  }
  return part;
}
`},{id:`log-by-type`,label:`Log each part`,blurb:`Inspect the stream with log() — output appears below.`,code:`/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    log("block " + part.block.id + ": " + part.block.source[0].content.text);
  } else {
    log(part.type);
  }
  return part;
}
`},{id:`mask-vars`,label:`Mask placeholders`,blurb:`Replace {variables} so they stand out.`,code:`/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    var text = part.block.source[0].content.text;
    part.block.source[0].content.text = text.replace(/\\{(\\w+)\\}/g, "<<$1>>");
  }
  return part;
}
`},{id:`drop-media`,label:`Strip media parts`,blurb:`Drop media parts; keep everything else.`,code:`/** @param {Part} part */
function process(part) {
  return part.type === "media" ? null : part;
}
`},{id:`globals-form`,label:`Globals form (no function)`,blurb:`You can also skip the function and use the global part + emit/skip.`,code:`// No process() function: this body runs once per Part, with the global
// \`part\` in scope. Call emit(part) to keep it, or skip() to drop it.
if (part.type === "block") {
  part.block.source[0].content.text =
    part.block.source[0].content.text.toUpperCase();
}
emit(part);
`}],yb=`// process(part) runs once for every Part in the document.
// Return the part to keep it, or return null to drop it.
// (emit()/skip() also work, and you can omit the function and just use \`part\`.)

/** @param {Part} part */
function process(part) {
  if (part.type === "block") {
    // Edit the block's source text — here, shout it.
    part.block.source[0].content.text =
      part.block.source[0].content.text.toUpperCase();
  }
  return part;
}
`}));function xb(){return typeof document>`u`?`light`:document.documentElement.getAttribute(`data-theme`)===`dark`?`vs-dark`:`light`}function Sb({code:e,onChange:t,height:n=`300px`}){let[r,i]=(0,Cb.useState)(`light`);return(0,Cb.useEffect)(()=>{i(xb());let e=new MutationObserver(()=>i(xb()));return e.observe(document.documentElement,{attributes:!0,attributeFilter:[`data-theme`]}),()=>e.disconnect()},[]),(0,wb.jsx)(hb,{height:n,language:`typescript`,theme:r,value:e,loading:(0,wb.jsx)(`div`,{className:`px-3 py-4 text-[11px] italic text-muted-foreground`,children:l(`3lglJS`,`Loading the code editor (one-time, cached)…`)}),onChange:e=>t(e??``),onMount:(e,t)=>{let n=t.languages.typescript.typescriptDefaults;n.addExtraLib(_b,`file:///script-api.d.ts`),n.setCompilerOptions({...n.getCompilerOptions(),lib:[`es2020`]}),e.updateOptions({wordBasedSuggestions:`off`,suggest:{showWords:!1}}),(e.getDomNode()?.querySelector(`textarea`))?.addEventListener(`beforeinput`,e=>{let t=e;(t.inputType===`insertReplacementText`||t.inputType===`insertText`&&t.data===`. `)&&e.preventDefault()})},options:{minimap:{enabled:!1},fontSize:13,lineNumbers:`on`,scrollBeyondLastLine:!1,automaticLayout:!0,tabSize:2,padding:{top:10,bottom:10},editContext:!1,fixedOverflowWidgets:!0,wordBasedSuggestions:`off`,suggest:{showWords:!1}}})}var Cb,wb,Tb=t((()=>{c(),Cb=e(a(),1),gb(),bb(),wb=o(),Fy.config({paths:{vs:`https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs`}}),Sb.__docgenInfo={description:``,methods:[],displayName:`ScriptCodeEditor`,props:{code:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(code: string) => void`,signature:{arguments:[{type:{name:`string`},name:`code`}],return:{name:`void`}}},description:``},height:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"300px"`,computed:!1}}}}}));function Eb({config:e,onConfigChange:t,onClose:n,onRemove:r}){let[i,a]=(0,Db.useState)(()=>typeof e.code==`string`&&e.code?e.code:yb),o=(0,Db.useRef)(i),c=(0,Db.useRef)(e);c.current=e;let u=(0,Db.useRef)(t);u.current=t;let d=(0,Db.useRef)(null),f=(0,Db.useRef)(!1),p=()=>{f.current=!1,u.current({...c.current,code:o.current})},m=e=>{a(e),o.current=e,f.current=!0,d.current&&clearTimeout(d.current),d.current=setTimeout(p,300)};return(0,Db.useEffect)(()=>()=>{d.current&&clearTimeout(d.current),f.current&&p()},[]),(0,Ob.jsxs)(`div`,{className:`flex h-full flex-col overflow-hidden border-l border-border bg-background`,style:{width:`min(480px, calc(100vw - 2rem))`},children:[(0,Ob.jsxs)(me,{className:`flex-col items-start gap-0.5 py-2.5`,children:[(0,Ob.jsxs)(`div`,{className:`flex w-full items-center justify-between`,children:[(0,Ob.jsx)(`div`,{className:`flex items-center gap-1.5 text-[11px] font-semibold text-foreground`,children:s(`PD2N1`,`{=m0} Script`,{"=m0":(0,Ob.jsx)(b,{size:12})})}),(0,Ob.jsxs)(`div`,{className:`flex items-center gap-1`,children:[r&&(0,Ob.jsx)(k,{variant:`ghost`,size:`xs`,className:`h-5 px-1.5 text-[9px] text-destructive`,onClick:r,children:l(`2vtQYh`,`Remove`)}),(0,Ob.jsx)(k,{variant:`ghost`,size:`xs`,className:`h-5 px-1.5 text-[9px]`,onClick:n,children:l(`bCQRV`,`Close`)})]})]}),(0,Ob.jsx)(`div`,{className:`text-[10px] text-muted-foreground`,children:l(`4cuNj7`,`A JavaScript transform run over each Part — edit with completions, or load an example.`)})]}),(0,Ob.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-border px-3 py-1.5`,children:[(0,Ob.jsx)(`label`,{className:`text-[10px] font-semibold text-muted-foreground`,children:l(`1D09GH`,`Example`)}),(0,Ob.jsxs)(`select`,{className:M.select,defaultValue:``,onChange:e=>{let t=vb.find(t=>t.id===e.target.value);t&&m(t.code),e.target.value=``},children:[(0,Ob.jsx)(`option`,{value:``,disabled:!0,children:l(`1DUlhO`,`Load an example…`)}),vb.map(e=>(0,Ob.jsx)(`option`,{value:e.id,title:e.blurb,children:e.label},e.id))]})]}),(0,Ob.jsx)(`div`,{className:`min-h-0 flex-1`,children:(0,Ob.jsx)(Sb,{code:i,onChange:m,height:`100%`})}),(0,Ob.jsxs)(`div`,{className:`border-t border-border px-3 py-1.5 text-[10px] leading-snug text-muted-foreground`,children:[`The code lands on the step as `,(0,Ob.jsx)(`code`,{children:`config.code`}),` — press Run in the toolbar and this exact script processes every part.`]})]})}var Db,Ob,kb=t((()=>{c(),Db=e(a(),1),E(),j(),Tb(),bb(),$e(),Ob=o(),Eb.__docgenInfo={description:``,methods:[],displayName:`ScriptStepPanel`,props:{config:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:``},onConfigChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(config: Record<string, unknown>) => void`,signature:{arguments:[{type:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},name:`config`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}}));function Ab(e){return{steps:(e.nodes??[]).filter(e=>e.type===`tool`||e.type===`bridge-tool`).map(e=>({tool:e.name||e.id,...e.label?{label:e.label}:{}})).filter(e=>e.tool)}}function jb({traces:e,onLoad:t,onError:n}){let r=(0,Mb.useRef)(null),[i,a]=(0,Mb.useState)(!1),o=async(e,r)=>{a(!0);try{let n=await fetch(e);if(!n.ok)throw Error(`failed to load trace (${n.status})`);t(await n.json(),r)}catch(e){n(String(e))}finally{a(!1)}},c=e=>{let r=new FileReader;r.onload=()=>{try{t(JSON.parse(r.result),e.name)}catch{n(`${e.name} is not a kapi trace JSON`)}},r.readAsText(e)};return(0,Nb.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,Nb.jsxs)(oe,{children:[(0,Nb.jsx)(ue,{asChild:!0,children:(0,Nb.jsx)(k,{variant:`outline`,size:`sm`,disabled:i,className:`gap-1.5 text-xs`,children:s(`45Ot9L`,`{=m0} Replay a run {=m1}`,{"=m0":(0,Nb.jsx)(_,{className:`size-3.5 text-muted-foreground`}),"=m1":(0,Nb.jsx)(T,{className:`size-3 text-muted-foreground`})})})}),(0,Nb.jsxs)(ce,{align:`start`,className:`w-72`,children:[(0,Nb.jsx)(se,{className:`text-[10px] uppercase tracking-wide text-muted-foreground`,children:l(`1fvP16`,`Recorded native runs — things a live wasm run can't show`)}),(0,Nb.jsx)(he,{}),(e??[]).map(e=>(0,Nb.jsx)(xe,{className:`items-start py-1.5`,onSelect:()=>void o(e.url,e.name),children:(0,Nb.jsxs)(`span`,{className:`flex flex-col gap-0.5`,children:[(0,Nb.jsx)(`span`,{className:`text-xs font-medium`,children:e.name}),e.description&&(0,Nb.jsx)(`span`,{className:`text-[10px] leading-tight text-muted-foreground`,children:e.description})]})},e.url)),(0,Nb.jsx)(he,{}),(0,Nb.jsx)(xe,{className:`gap-1.5 text-xs`,onSelect:()=>r.current?.click(),title:l(`3m9zlz`,"Load your own `kapi run --trace` output"),children:s(`PLY0v`,`{=m0} Upload a trace file…`,{"=m0":(0,Nb.jsx)(S,{className:`size-3.5 text-muted-foreground`})})})]})]}),(0,Nb.jsx)(`input`,{ref:r,type:`file`,accept:`.json,application/json`,className:`hidden`,onChange:e=>{let t=e.target.files?.[0];t&&c(t),e.target.value=``}})]})}var Mb,Nb,Pb=t((()=>{c(),Mb=e(a(),1),E(),j(),Nb=o(),jb.__docgenInfo={description:``,methods:[],displayName:`TraceImportControl`,props:{traces:{required:!1,tsType:{name:`Array`,elements:[{name:`RecordedTraceInfo`}],raw:`RecordedTraceInfo[]`},description:`Built-in recorded traces (the host resolves their URLs).`},onLoad:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(trace: FlowTrace, label: string) => void`,signature:{arguments:[{type:{name:`FlowTrace`},name:`trace`},{type:{name:`string`},name:`label`}],return:{name:`void`}}},description:``},onError:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(message: string) => void`,signature:{arguments:[{type:{name:`string`},name:`message`}],return:{name:`void`}}},description:``}}}}));function Fb(){return typeof globalThis.kapiLocalNER==`function`}async function Ib(e,t,n){let r=await fetch(e);if(!r.ok||!r.body)throw Error(`download failed (${r.status}): ${e}`);let i=Number(r.headers.get(`content-length`))||null,a=r.body.getReader(),o=[],s=0;for(;;){let{done:e,value:r}=await a.read();if(e)break;o.push(r),s+=r.byteLength,n?.({message:t,loaded:s,total:i})}let c=new Uint8Array(s),l=0;for(let e of o)c.set(e,l),l+=e.byteLength;return c}function Lb(e){let t=(e??``).toLowerCase();return zb.includes(t)?t:`other`}function Rb(e){return Fb()?Promise.resolve():Ub||(Ub=(async()=>{e?.({message:`Loading the on-device NER engine…`});let{Gliner:t}=await i(async()=>{let{Gliner:e}=await import(`./dist-Buyz9pjO.js`);return{Gliner:e}},__vite__mapDeps([3,1])),n=new t({tokenizerPath:Bb,onnxSettings:{modelPath:await Ib(Vb,`Downloading the on-device NER model (cached after the first load)…`,e),executionProvider:`wasm`,wasmPaths:Hb}});e?.({message:`Initializing the on-device NER model…`}),await n.initialize(),globalThis.kapiLocalNER=async e=>{let t=JSON.parse(e),r=(await n.inference({texts:[t.text],entities:zb,threshold:.3,flatNer:!0}))[0]??[];return JSON.stringify({entities:r.map(e=>{let t=e.start??0,n=e.end??t+e.spanText.length;return{text:e.spanText,type:Lb(e.label),confidence:e.score??0,offset:t,length:Math.max(0,n-t)}})})},e?.({message:`On-device NER model ready.`})})().catch(e=>{throw Ub=null,e}),Ub)}var zb,Bb,Vb,Hb,Ub,Wb=t((()=>{n(),zb=[`person`,`organization`,`location`,`date`,`product`],Bb=`onnx-community/gliner_small-v2`,Vb=`https://huggingface.co/onnx-community/gliner_small-v2/resolve/main/onnx/model_quantized.onnx`,Hb=`https://cdn.jsdelivr.net/npm/onnxruntime-web@1.19.2/dist/`,Ub=null}));function Gb(e){let t=e.split(`
`),n=new Set,r=t.findIndex(e=>e===`defaults:`);if(r<0)return n;for(let e=r;e<t.length&&!(e>r&&!t[e].startsWith(` `));e++)n.add(e);return n}function Kb({recipe:e}){let t=(0,qb.useMemo)(()=>Gb(e),[e]);return(0,Jb.jsxs)(`div`,{className:`flex flex-col gap-1.5 rounded-lg border border-border bg-card p-3`,children:[(0,Jb.jsx)(`div`,{className:`flex items-baseline justify-between gap-2`,children:s(`3f0E0K`,`{=m0} The recipe this canvas is {/=m0} {=m1} highlighted: project scope ({=m2}defaults{/=m2}) {/=m1}`,{"=m0":(0,Jb.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground`,children:`The recipe this canvas is`}),"=m1":(0,Jb.jsxs)(`span`,{className:`text-[10px] text-muted-foreground`,children:[`highlighted: project scope (`,(0,Jb.jsx)(`code`,{children:`defaults`}),`)`]}),"=m2":(0,Jb.jsx)(`code`,{children:`defaults`})})}),(0,Jb.jsxs)(`p`,{className:`text-[11px] leading-relaxed text-muted-foreground`,children:[`Everything you design here serializes to a `,(0,Jb.jsx)(`code`,{children:`.kapi`}),` recipe — the committed file kapi works from. `,(0,Jb.jsx)(`code`,{children:`defaults.tools`}),` is project scope (every flow inherits it; a step's own config wins per key); the flow's steps are the nodes on the canvas. Edit the flow and watch the YAML follow.`]}),(0,Jb.jsx)(ke,{text:e,lang:`yaml`,changedLines:t,maxHeight:`320px`})]})}var qb,Jb,Yb=t((()=>{c(),qb=e(a(),1),Pe(),Jb=o(),Kb.__docgenInfo={description:``,methods:[],displayName:`RecipeView`,props:{recipe:{required:!0,tsType:{name:`string`},description:`The serialized recipe (buildRecipe output).`}}}}));function Xb({recipe:e,presets:t,onPresetsChange:n,getSchema:r,getLabel:i,tab:a,onTabChange:o,onClose:s}){let c=(0,Zb.useMemo)(()=>Gb(e),[e]),u=Object.keys(t??{});return(0,Qb.jsxs)(`div`,{className:`flex h-full flex-col overflow-hidden border-l border-border bg-background`,style:{width:`min(380px, calc(100vw - 2rem))`},children:[(0,Qb.jsxs)(`div`,{className:`flex items-center gap-2 border-b border-border px-3 py-2`,children:[(0,Qb.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,Qb.jsx)(`div`,{className:`text-sm font-semibold text-foreground`,children:l(`31CNWJ`,`Project`)}),(0,Qb.jsxs)(`div`,{className:`text-[11px] leading-snug text-muted-foreground`,children:[`The canvas serializes to this `,(0,Qb.jsx)(`code`,{children:`.kapi`}),` recipe — the committed file kapi works from.`]})]}),(0,Qb.jsx)(k,{variant:`ghost`,size:`icon-xs`,onClick:s,className:`self-start`,"aria-label":l(`4xhvPw`,`Close project panel`),children:(0,Qb.jsx)(y,{size:14,className:`text-muted-foreground`})})]}),(0,Qb.jsxs)(ge,{value:a,onValueChange:e=>o(e),className:`flex min-h-0 flex-1 flex-col`,children:[(0,Qb.jsxs)(Ce,{className:`mx-3 mt-2`,children:[(0,Qb.jsx)(_e,{value:`defaults`,className:`text-xs`,children:l(`24IoG`,`Defaults`)}),(0,Qb.jsx)(_e,{value:`recipe`,className:`text-xs`,children:l(`1WhOi`,`Recipe`)})]}),(0,Qb.jsx)(Se,{value:`defaults`,className:`min-h-0 flex-1`,children:(0,Qb.jsx)(fe,{className:`h-full`,children:(0,Qb.jsxs)(`div`,{className:`flex flex-col gap-3 px-3 py-2.5`,children:[(0,Qb.jsxs)(`p`,{className:`text-[11px] leading-relaxed text-muted-foreground`,children:[`Project scope: `,(0,Qb.jsx)(`code`,{children:`defaults.tools`}),` pins per-tool config every flow in the project inherits. A step's own config overrides it per key — the step's panel shows what it inherited.`]}),u.length===0&&(0,Qb.jsx)(`p`,{className:`py-4 text-center text-[11px] italic text-muted-foreground`,children:l(`1aFJeF`,`This project pins no tool defaults yet.`)}),u.map(e=>{let a=r(e),o=t?.[e]??{};return(0,Qb.jsxs)(`section`,{className:`flex flex-col gap-1`,children:[(0,Qb.jsxs)(`h4`,{className:`m-0 text-xs font-semibold text-foreground`,children:[i(e),` `,(0,Qb.jsxs)(`code`,{className:`font-mono text-[10px] font-normal text-muted-foreground`,children:[`defaults.tools.`,e]})]}),a?(0,Qb.jsx)(be,{schema:a,values:o,onChange:r=>n?.({...t,[e]:r}),compact:!0,hideHeader:!0,readOnly:!n}):(0,Qb.jsx)(`pre`,{className:`m-0 overflow-auto rounded-md bg-secondary px-2 py-1.5 font-mono text-[10px] leading-relaxed text-foreground`,children:JSON.stringify(o,null,2)})]},e)})]})})}),(0,Qb.jsx)(Se,{value:`recipe`,className:`min-h-0 flex-1`,children:(0,Qb.jsx)(fe,{className:`h-full`,children:(0,Qb.jsxs)(`div`,{className:`flex flex-col gap-1.5 px-3 py-2.5`,children:[(0,Qb.jsxs)(`p`,{className:`m-0 text-[11px] leading-relaxed text-muted-foreground`,children:[`Edit the flow and watch the YAML follow. Highlighted: `,(0,Qb.jsx)(`code`,{children:`defaults`}),` — the project scope.`]}),(0,Qb.jsx)(ke,{text:e,lang:`yaml`,changedLines:c})]})})})]})]})}var Zb,Qb,$b=t((()=>{c(),Zb=e(a(),1),E(),j(),Pe(),Yb(),Qb=o(),Xb.__docgenInfo={description:``,methods:[],displayName:`ProjectPanel`,props:{recipe:{required:!0,tsType:{name:`string`},description:`The serialized recipe (buildRecipe output).`},presets:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`Record<string, Record<string, unknown>>`},description:`Project-level tool presets (defaults.tools).`},onPresetsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(presets: Record<string, Record<string, unknown>>) => void`,signature:{arguments:[{type:{name:`Record`,elements:[{name:`string`},{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`}],raw:`Record<string, Record<string, unknown>>`},name:`presets`}],return:{name:`void`}}},description:`Commit edited presets (absent = read-only, e.g. trace replay).`},getSchema:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(toolName: string) => ComponentSchema | null`,signature:{arguments:[{type:{name:`string`},name:`toolName`}],return:{name:`union`,raw:`ComponentSchema | null`,elements:[{name:`ComponentSchema`},{name:`null`}]}}},description:`Resolve a tool's config schema for the defaults form.`},getLabel:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(toolName: string) => string`,signature:{arguments:[{type:{name:`string`},name:`toolName`}],return:{name:`string`}}},description:`Resolve a tool's display name.`},tab:{required:!0,tsType:{name:`union`,raw:`"defaults" | "recipe"`,elements:[{name:`literal`,value:`"defaults"`},{name:`literal`,value:`"recipe"`}]},description:``},onTabChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tab: ProjectPanelTab) => void`,signature:{arguments:[{type:{name:`union`,raw:`"defaults" | "recipe"`,elements:[{name:`literal`,value:`"defaults"`},{name:`literal`,value:`"recipe"`}]},name:`tab`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),ex,tx,nx,rx,ix=t((()=>{ex=`_editorFrame_1m3md_8`,tx=`_fillRoot_1m3md_32`,nx=`_editorFrameFill_1m3md_37`,rx={editorFrame:ex,fillRoot:tx,editorFrameFill:nx}}));function ax(e){if(e?.length)return e.map(e=>{let t=e.endsWith(`?`),n=t?e.slice(0,-1):e,r=n.lastIndexOf(`@`);return{type:r>=0?n.slice(0,r):n,side:r>=0?n.slice(r+1):`source`,...t?{optional:!0}:{}}})}function ox(){let e=new Map;for(let t of Re.entries)!fx.includes(t.id)||e.has(t.id)||e.set(t.id,{name:t.id,display_name:t.displayName,description:t.description??``,category:t.category||`pipeline`,has_schema:!!t.schema,consumes:ax(t.consumes),produces:ax(t.produces),side_effects:t.sideEffects,tags:t.tags,requires:t.requires,cardinality:t.cardinality,isSourceTransform:t.isSourceTransform,recoverable:t.recoverable});return fx.map(t=>e.get(t)).filter(e=>!!e)}function sx(e,t){let n=[`version: v1`,`name: Lab`,`defaults:`,`  source_language: en`];if(t&&Object.keys(t).length>0){n.push(`  tools:`);for(let[e,r]of Object.entries(t)){n.push(`    ${e}:`);for(let[e,t]of Object.entries(r))n.push(...cx(e,t,6))}}n.push(`flows:`,`  lab:`,`    steps:`);for(let t of e.steps){if(!t.tool)continue;n.push(`      - tool: ${t.tool}`);let e=t.config;if(e&&Object.keys(e).length>0){n.push(`        config:`);for(let[t,r]of Object.entries(e))n.push(...cx(t,r,10))}}return n.join(`
`)+`
`}function cx(e,t,n){let r=` `.repeat(n);if(typeof t==`string`&&t.includes(`
`)){let n=t.split(`
`);return n.at(-1)===``&&n.pop(),[`${r}${e}: |`,...n.map(e=>e?`${r}  ${e}`:``)]}return[`${r}${e}: ${lx(t)}`]}function lx(e){return typeof e==`string`?JSON.stringify(e):typeof e==`boolean`||typeof e==`number`?String(e):JSON.stringify(e)}function ux({label:e,loaded:t,total:n}){let r=e=>`${(e/1024/1024).toFixed(1)} MB`,i=t!==void 0&&n?Math.min(100,t/n*100):null;return(0,Y.jsxs)(`div`,{className:`flex flex-col gap-1 py-1`,children:[(0,Y.jsxs)(`div`,{className:`flex items-baseline justify-between gap-2 text-xs text-muted-foreground`,children:[(0,Y.jsx)(`span`,{children:e}),t!==void 0&&(0,Y.jsxs)(`span`,{className:`font-mono text-[10px]`,children:[r(t),n?` / ${r(n)}`:``]})]}),(0,Y.jsx)(`div`,{className:`h-1.5 w-full overflow-hidden rounded-full bg-secondary`,children:i===null?(0,Y.jsx)(`div`,{className:`h-full w-1/3 animate-pulse rounded-full bg-primary`}):(0,Y.jsx)(`div`,{className:`h-full rounded-full bg-primary transition-[width] duration-200`,style:{width:`${i}%`}})})]})}function dx({assets:e,defaultSampleId:t,sampleIds:n,defaultScenarioId:r,scenarioIds:i,recordedTraces:a,fill:o}){let c=nt(e),d=(0,J.useMemo)(()=>ox(),[]),f=(0,J.useMemo)(()=>i?hv.filter(e=>i.includes(e.id)):hv,[i]),p=(0,J.useMemo)(()=>{let e=new Map;for(let t of Re.entries)e.has(t.id)||e.set(t.id,t);return e},[]),h=(0,J.useCallback)(e=>p.get(e)?.schema??null,[p]),g=(0,J.useCallback)(e=>p.get(e)?.doc??null,[p]),_=f.find(e=>e.id===r)??f[0]??hv[0],[y,b]=(0,J.useState)(_),[x,S]=(0,J.useState)(_.presets),C=Ye({sampleIds:n}),w=(0,J.useCallback)(e=>({mode:`multi`,paths:[(We.find(n=>n.id===(e??t))??We.find(e=>e.id===`support-reply`)??We[0]).filename]}),[t]),[T,E]=(0,J.useState)(()=>w(_.sampleId)),[D,A]=(0,J.useState)(null),te=(0,J.useMemo)(()=>Je(T,C),[T,C]),ne=(0,J.useMemo)(()=>te.find(e=>e.path===D)??te[0],[te,D]),[re,ie]=(0,J.useState)(()=>Be(ze({steps:_.steps}).nodes)),[oe,se]=(0,J.useState)({}),[ce,ue]=(0,J.useState)(0),[fe,me]=(0,J.useState)(null),[he,ge]=(0,J.useState)(null),[_e,ve]=(0,J.useState)(!1),j=ne?oe[ne.path]:void 0,ye=j?.trace??null,be=j?.outPath??null,[xe,Se]=(0,J.useState)(null),Ce=(0,J.useCallback)((e,t)=>{Se({trace:e,spec:Ab(e),label:t}),me(null),Me(!1)},[]),[Te,Ee]=(0,J.useState)(0),[De,Oe]=(0,J.useState)(void 0),ke=(0,J.useRef)(0),[Ae,Me]=(0,J.useState)(!1),[Ne,Pe]=(0,J.useState)(`defaults`),Fe=(0,J.useCallback)(e=>{Pe(e),Me(!0)},[]),Ie=(0,J.useCallback)(e=>{e&&(e.recipe!==void 0&&(e.recipe?(Pe(`recipe`),Me(!0)):Me(!1)),e.select!==void 0&&(ke.current+=1,Oe({nonce:ke.current,select:e.select,mode:e.mode})))},[]),Le=(0,J.useCallback)((e,t)=>{Ee(t),Ie(e?.[t])},[Ie]),He=(0,J.useRef)(!1);(0,J.useEffect)(()=>{!c.ready||He.current||(He.current=!0,Ie(y.walkthrough?.[Te]))},[c.ready]);let Ue=(0,J.useCallback)(e=>{b(e),S(e.presets),E(w(e.sampleId)),A(null),ie(Be(ze({steps:e.steps}).nodes)),se({}),me(null),Me(!1),tt(!1),Ee(0),e.walkthrough?Ie(e.walkthrough[0]):(ke.current+=1,Oe({nonce:ke.current,select:null}))},[w,Ie]),Ge=(0,J.useCallback)(e=>{ie(e),se({})},[]),Ke=(0,J.useCallback)(e=>e.toolName===`script`?(0,Y.jsx)(Eb,{config:e.config,onConfigChange:e.onConfigChange,onClose:e.onClose,onRemove:e.onRemove}):null,[]),qe=(0,J.useMemo)(()=>ne?{filename:ne.name,label:ne.name,content:``,bytes:ne.bytes}:null,[ne]),Ze=(0,J.useMemo)(()=>!ne||je(ne.name).binary?null:new TextDecoder().decode(ne.bytes),[ne]),Qe=(0,J.useCallback)(e=>e===`source`?qe?(0,Y.jsx)(uv,{runtime:c,file:qe}):(0,Y.jsx)(`div`,{className:`py-4 text-center text-[11px] italic text-muted-foreground`,children:l(`4CRK7p`,`Pick an input file first.`)}):(0,Y.jsx)(dv,{runtime:c,outPath:be,version:ce,baseline:Ze}),[c,qe,Ze,be,ce]),$e=(0,J.useCallback)(async e=>{if(!c.ready)return;let t=e.steps.filter(e=>e.tool);if(t.length===0){me(`add at least one tool to the flow before running`),se({});return}if(te.length===0){me(`pick at least one input file before running`),se({});return}if(ve(!0),me(null),ge(null),t.some(e=>e.tool===`ai-entity-extract`&&e.config?.engine===`ner`||e.parallel?.some(e=>e.tool===`ai-entity-extract`&&e.config?.engine===`ner`))&&!Fb())try{await Rb(ge)}catch(e){me(`failed to load the on-device NER model: ${String(e)}`),ge(null),ve(!1);return}ge(null);let n=sx({steps:t},x);c.writeFile(`flow.kapi`,n);let r={};for(let e of te){let t=c.writeFile(e.name,e.bytes),n=`/project/flow-out-${e.name}`,i=await c.trace([`run`,`lab`,`-p`,`/project/flow.kapi`,`-i`,t,`-o`,n,`--target-lang`,`fr`]);if(i.ok&&i.trace)r[e.path]={trace:i.trace,outPath:n};else{me(`${e.name}: ${i.error??`the run produced no trace`}`),se(r),ve(!1);return}}se(r),ue(e=>e+1),ve(!1)},[c.ready,c.writeFile,c.trace,te,x]);(0,J.useEffect)(()=>{if(!ye)return;let e=y.walkthrough;e?.[Te]?.run&&Te<e.length-1&&Le(e,Te+1)},[ye]);let[et,tt]=(0,J.useState)(!1),rt=sx({steps:(xe?.spec??re).steps.filter(e=>e.tool)},xe?void 0:x),it=y.id===`project`||y.id===`build-your-own`;return(0,Y.jsx)(ee,{className:`kapi-reference`,children:(0,Y.jsxs)(`div`,{className:O(M.explorer,`kapi-reference`,o&&rx.fillRoot),children:[(0,Y.jsxs)(`div`,{className:`flex flex-wrap items-center gap-x-3 gap-y-2`,children:[f.length>1&&(0,Y.jsxs)(le,{value:y.id,onValueChange:e=>{let t=f.find(t=>t.id===e);t&&Ue(t)},children:[(0,Y.jsxs)(ae,{size:`sm`,className:`w-[230px] gap-1.5 text-xs font-medium`,"aria-label":l(`3GioPI`,`Lesson`),children:[(0,Y.jsx)(u,{className:`size-3.5 shrink-0 text-muted-foreground`}),(0,Y.jsx)(pe,{placeholder:l(`UkA9w`,`Pick a lesson`),children:y.label})]}),(0,Y.jsx)(de,{className:`w-[320px]`,children:f.map(e=>(0,Y.jsx)(we,{value:e.id,textValue:e.label,children:(0,Y.jsxs)(`span`,{className:`flex min-w-0 flex-col gap-0.5`,children:[(0,Y.jsx)(`span`,{className:`text-xs font-medium`,children:e.label}),(0,Y.jsx)(`span`,{className:`line-clamp-2 text-[10px] leading-tight text-muted-foreground`,children:e.description})]})},e.id))})]}),xe?(0,Y.jsxs)(`span`,{className:`flex items-center gap-2 rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] text-muted-foreground`,children:[`Replaying `,(0,Y.jsx)(`strong`,{className:`text-foreground`,children:xe.label}),` · recorded native run · read-only`,(0,Y.jsx)(k,{variant:`ghost`,size:`xs`,className:`gap-1 text-[11px]`,onClick:()=>Se(null),children:s(`Uik1T`,`{=m0} Back to your flow`,{"=m0":(0,Y.jsx)(v,{className:`size-3`})})})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Xe,{label:l(`1gxc9F`,`Files`),library:C,selection:T,onSelectionChange:e=>{E(e),se({})},sampleIds:n,multiple:!0}),(0,Y.jsx)(jb,{traces:a,onLoad:Ce,onError:me})]}),(0,Y.jsx)(k,{variant:Ae?`secondary`:`outline`,size:`sm`,className:`ml-auto gap-1.5 text-xs`,onClick:()=>Ae?Me(!1):Fe(`defaults`),title:l(`3iwnW2`,`The project this canvas serializes to: tool defaults (form) and the live .kapi recipe (source)`),children:s(`2KBjqL`,`{=m0} Project`,{"=m0":(0,Y.jsx)(m,{className:`size-3.5 text-muted-foreground`})})})]}),!xe&&(0,Y.jsx)(wn,{files:te,activePath:ne?.path,onChange:A}),y.walkthrough&&!xe?(0,Y.jsx)(`div`,{className:`sm:hidden`,children:(0,Y.jsx)(_v,{steps:y.walkthrough,index:Te,onIndexChange:e=>Le(y.walkthrough,e),onRun:()=>void $e(re),runDisabled:!c.ready||_e})}):!xe&&(0,Y.jsx)(`p`,{className:`m-0 line-clamp-1 text-xs leading-relaxed text-muted-foreground`,title:y.description,children:y.description}),(0,Y.jsxs)(`div`,{className:O(rx.editorFrame,o&&rx.editorFrameFill,`relative`),children:[(0,Y.jsx)(Ve,{flow:xe?.spec??re,tools:d,onChange:Ge,onGetSchema:h,onGetDoc:g,onRun:xe?void 0:e=>void $e(e),runDisabled:!c.ready||_e,running:_e,readOnly:!!xe,endpointsReadOnly:!it,trace:xe?.trace??ye??void 0,onTraceDismiss:()=>xe?Se(null):se({}),projectPresets:xe?void 0:x,renderEndpointPanel:xe?void 0:Qe,focusRequest:xe?void 0:De,renderStepConfigPanel:Ke,onEditPresets:xe?void 0:()=>Fe(`defaults`),lessonCollapsed:et,lessonPanel:y.walkthrough&&!xe?(0,Y.jsx)(_v,{steps:y.walkthrough,index:Te,onIndexChange:e=>Le(y.walkthrough,e),onRun:()=>void $e(re),runDisabled:!c.ready||_e,collapsed:et,onToggleCollapse:()=>tt(e=>!e)}):void 0}),Ae&&(0,Y.jsx)(`div`,{className:`absolute bottom-0 right-0 top-0 z-30 shadow-[-8px_0_24px_oklch(0_0_0/0.25)]`,children:(0,Y.jsx)(Xb,{recipe:rt,presets:xe?void 0:x,onPresetsChange:xe?void 0:S,getSchema:h,getLabel:e=>p.get(e)?.displayName??e,tab:Ne,onTabChange:Pe,onClose:()=>Me(!1)})})]}),c.status===`booting`&&(0,Y.jsx)(ux,{label:l(`4DM2OG`,`Downloading the kapi engine (one-time, cached)…`),loaded:c.bootProgress?.loaded,total:c.bootProgress?.total}),_e&&he&&(0,Y.jsx)(ux,{label:he.message,loaded:he.loaded,total:he.total}),(0,Y.jsxs)(`div`,{className:`${M.statusBar} ${fe?M.statusError:``}`,children:[c.status===`error`&&`Failed to start: ${c.error}`,c.ready&&_e&&!he&&`Running your flow…`,c.ready&&!_e&&fe&&`Error: ${fe}`,c.ready&&!_e&&!fe&&ye&&`Run complete${Object.keys(oe).length>1?` (${Object.keys(oe).length} files)`:``} — scrub the transport, click a node to inspect what it did, or Inspect the Sink for what was written.`,c.ready&&!_e&&!fe&&!ye&&`Edit the flow, then press Run in its toolbar — the run plays back on the same nodes you designed.`]})]})})}var J,Y,fx,px=t((()=>{c(),J=e(a(),1),He(),Le(),at(),qe(),En(),Ue(),Pe(),mv(),Ke(),gv(),yv(),kb(),Pb(),Wb(),$b(),j(),E(),$e(),ix(),Y=o(),fx=[`search-replace`,`script`,`redact`,`unredact`,`segmentation`,`pseudo-translate`,`word-count`,`term-check`,`ai-entity-extract`,`ai-translate`,`qa-check`],dx.__docgenInfo={description:``,methods:[],displayName:`FlowBuilderRunner`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:``},defaultSampleId:{required:!1,tsType:{name:`string`},description:``},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultScenarioId:{required:!1,tsType:{name:`string`},description:`Scenario preselected in the picker (default: the first).`},scenarioIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Restrict the scenario picker (default: all).`},recordedTraces:{required:!1,tsType:{name:`Array`,elements:[{name:`RecordedTraceInfo`}],raw:`RecordedTraceInfo[]`},description:`Built-in recorded traces (\`kapi run --trace\` output) offered for replay —
native runs the wasm engine can't reproduce live (parallel workers, the
Java bridge's gRPC boundary). URLs must already be base-resolved.`},fill:{required:!1,tsType:{name:`boolean`},description:`Fill the host's height (app-like): the editor frame stretches to the
available space instead of the fixed inline-embed height. The host must
give the workspace an explicit height (e.g. the /lab page sizes it to the
viewport).`}}}})),mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx=t((()=>{mx=`_editor_mummo_1`,hx=`_diff_mummo_7`,gx=`_blockId_mummo_34`,_x=`_changed_mummo_39`,vx=`_dropped_mummo_43`,yx=`_logPanel_mummo_49`,bx=`_logLabel_mummo_55`,xx=`_logPre_mummo_64`,Sx={editor:mx,diff:hx,blockId:gx,changed:_x,dropped:vx,logPanel:yx,logLabel:bx,logPre:xx}}));function wx(e){return`version: v1
name: Lab
defaults:
  source_language: en
flows:
  lab:
    steps:
      - tool: script
        config:
          allowSourceMutation: true
          code: |
${e.split(`
`).map(e=>`            `+e).join(`
`)}
`}function Tx({assets:e,defaultSampleId:t,sampleIds:n}){let r=nt(e),i=We.find(e=>e.id===t)??We[0],[a,o]=(0,Ex.useState)({filename:i.filename,content:i.content,label:i.label}),[c,u]=(0,Ex.useState)(yb),[d,f]=(0,Ex.useState)(null),[p,m]=(0,Ex.useState)(``),[h,_]=(0,Ex.useState)(null),[v,y]=(0,Ex.useState)(!1),b=(0,Ex.useRef)(c);b.current=c;let x=(0,Ex.useCallback)(async()=>{if(!r.ready)return;y(!0),_(null);let e=r.writeFile(a.filename,a.bytes??a.content);r.writeFile(`script.kapi`,wx(b.current));let t=await r.trace([`run`,`lab`,`-p`,`/project/script.kapi`,`-i`,e,`-o`,`/project/script-out-${a.filename}`,`--target-lang`,`fr`]);m((t.output??``).replace(Ox,``).trim()),t.ok&&t.trace?f(t.trace):(_(t.error??`the script run produced no trace`),f(null)),y(!1)},[r.ready,r.writeFile,r.trace,a]);(0,Ex.useEffect)(()=>{r.ready&&x()},[r.ready,a]);let S=d?Object.values(d.parts).filter(e=>e.initial.type===`Block`).length:0;return(0,Dx.jsxs)(`div`,{className:M.explorer,children:[(0,Dx.jsx)(Gg,{value:a,onChange:o,sampleIds:n}),(0,Dx.jsxs)(`div`,{className:M.pickerRow,children:[(0,Dx.jsx)(`label`,{className:M.pickerLabel,children:l(`1D09GH`,`Example`)}),(0,Dx.jsxs)(`select`,{className:M.select,defaultValue:``,onChange:e=>{let t=vb.find(t=>t.id===e.target.value);t&&u(t.code),e.target.value=``},children:[(0,Dx.jsx)(`option`,{value:``,disabled:!0,children:l(`1DUlhO`,`Load an example…`)}),vb.map(e=>(0,Dx.jsx)(`option`,{value:e.id,title:e.blurb,children:e.label},e.id))]}),(0,Dx.jsx)(`button`,{className:M.runButton,onClick:()=>void x(),disabled:!r.ready||v,children:s(`22SuFe`,`{=m0} Run`,{"=m0":(0,Dx.jsx)(g,{size:14})})})]}),(0,Dx.jsx)(`div`,{className:Sx.editor,children:(0,Dx.jsx)(Sb,{code:c,onChange:u,height:`300px`})}),(0,Dx.jsxs)(`div`,{className:`${M.statusBar} ${h?M.statusError:``}`,children:[r.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,r.status===`error`&&`Failed to start: ${r.error}`,r.ready&&v&&`Running script…`,r.ready&&!v&&h&&`Error: ${h}`,r.ready&&!v&&!h&&d&&`${S} block(s) processed`]}),d&&(0,Dx.jsx)(u_,{trace:d,targetLocale:`fr`}),p&&(0,Dx.jsxs)(`div`,{className:Sx.logPanel,children:[(0,Dx.jsx)(`div`,{className:Sx.logLabel,children:l(`145ogy`,`log output`)}),(0,Dx.jsx)(`pre`,{className:Sx.logPre,children:p})]})]})}var Ex,Dx,Ox,kx=t((()=>{c(),Ex=e(a(),1),E(),at(),Yg(),p_(),Tb(),Ke(),bb(),$e(),Cx(),Dx=o(),Ox=/\[[0-9;]*m/g,Tx.__docgenInfo={description:``,methods:[],displayName:`ScriptLab`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:``},defaultSampleId:{required:!1,tsType:{name:`string`},description:``},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``}}}}));function Ax(e){return{schemaVersion:`1.0`,kind:`kapi-localization-format`,created:`2026-04-15T10:00:00Z`,generator:{id:`@neokapi/kapi-format-examples`,version:`0.0.1`,capabilities:[`extract`,`preview`]},project:{id:`neokapi-kapi-format-examples`,sourceLocale:`en`},vocabulary:{extends:[`common-formatting`,`rich-html`,`rich-jsx`]},documents:[{id:`examples`,documentType:`jsx`,path:`examples/all.tsx`,blocks:e}]}}function jx(e){return zx.find(t=>t.id===e)??zx[0]}function Mx(e){return`${JSON.stringify(e,null,2)}\n`}var Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx=t((()=>{Nx={id:`files-heading`,hash:`2xykvb`,translatable:!0,type:`jsx:element`,source:[{text:`Files `},{pcOpen:{id:`1`,type:`jsx:element`,subType:`span`,data:`<span className="muted">`,equiv:`muted`,disp:`span`}},{text:`(`},{ph:{id:`2`,type:`jsx:var`,subType:`number`,data:`{count}`,equiv:`count`,disp:`count`}},{text:` matched)`},{pcClose:{id:`1`,type:`jsx:element`,subType:`span`,data:`</span>`,equiv:`muted`}}],placeholders:[{name:`muted`,kind:`element`,jsType:`ReactNode`,sourceExpr:`<span className="muted">...</span>`},{name:`count`,kind:`variable`,jsType:`number`,sourceExpr:`count`}],properties:{file:`src/FilesHeading.tsx`,line:4,component:`FilesHeading`,jsxPath:`FilesHeading > h2`,element:`h2`},preview:{sampleValues:{count:3}}},Px={id:`tag-chip`,hash:`2GcSuQ`,translatable:!0,type:`jsx:element`,source:[{ph:{id:`1`,type:`jsx:node`,subType:`logical-and`,data:`index !== undefined && <span className="badge">{index}</span>`,equiv:`badge`,disp:`⟨badge⟩`}},{text:` `},{ph:{id:`2`,type:`jsx:var`,subType:`string`,data:`{label}`,equiv:`label`,disp:`label`}},{text:` `},{ph:{id:`3`,type:`jsx:node`,subType:`logical-and`,data:`!deletable && <span className="required">*</span>`,equiv:`required`,disp:`⟨required⟩`}}],placeholders:[{name:`badge`,kind:`node`,jsType:`ReactNode`,sourceExpr:`index !== undefined && <span className="badge">{index}</span>`,optional:!0},{name:`label`,kind:`variable`,jsType:`string`,sourceExpr:`label`},{name:`required`,kind:`node`,jsType:`ReactNode`,sourceExpr:`!deletable && <span className="required">*</span>`,optional:!0}],properties:{file:`src/TagChip.tsx`,line:3,component:`TagChip`,jsxPath:`TagChip > span[data-tag-chip]`,element:`span`,locNote:`Tag chip shown in the sidebar list of filters.`},preview:{storyId:`components-tagchip--default`,sampleValues:{label:`react`,index:3,deletable:!0}}},Fx={id:`shopping-cart-plural`,hash:`9QpZ11`,translatable:!0,type:`jsx:element`,source:[{plural:{pivot:`count`,forms:{one:[{text:`1 item in your cart`}],other:[{ph:{id:`1`,type:`jsx:var`,subType:`number`,data:`{count}`,equiv:`count`,disp:`count`}},{text:` items in your cart`}],zero:[{text:`Your cart is empty`}]}}}],placeholders:[{name:`count`,kind:`icu-pivot`,jsType:`number`,sourceExpr:`items`}],properties:{file:`src/ShoppingCart.tsx`,line:4,component:`ShoppingCart`,jsxPath:`ShoppingCart > p > Plural`,element:`Plural`},preview:{sampleValues:{count:3}}},Ix={id:`like-notification`,hash:`7sVx0p`,translatable:!0,type:`jsx:element`,source:[{select:{pivot:`gender`,cases:{female:[{text:`She liked your post`}],male:[{text:`He liked your post`}],other:[{text:`They liked your post`}]}}}],placeholders:[{name:`gender`,kind:`icu-pivot`,jsType:`string`,sourceExpr:`actor.gender`}],properties:{file:`src/LikeNotification.tsx`,line:7,component:`LikeNotification`,jsxPath:`LikeNotification > Select`,element:`Select`}},Lx={id:`email-body`,hash:`Qm3a8t`,translatable:!0,type:`jsx:element`,source:[{text:`Thanks for signing up. `},{sub:{id:`1`,ref:`email-cta`,equiv:`cta`}}],placeholders:[{name:`cta`,kind:`node`,jsType:`ReactNode`,sourceExpr:`<CallToAction/>`}],properties:{file:`src/WelcomeEmail.tsx`,line:12,component:`WelcomeEmail`,jsxPath:`WelcomeEmail > p`,element:`p`}},Rx={id:`email-cta`,hash:`Lp9w2k`,translatable:!0,type:`jsx:element`,source:[{text:`Confirm your email address`}],placeholders:[],properties:{file:`src/WelcomeEmail.tsx`,line:14,component:`WelcomeEmail`,jsxPath:`WelcomeEmail > a.cta`,element:`a`}},zx=[{id:`full`,label:`Complete document`,blurb:`All three golden blocks: a paired code + variable, optional nodes, and a plural.`,file:Ax([Nx,Px,Fx])},{id:`files-heading`,label:`Paired code`,blurb:`A <span> paired code (pcOpen/pcClose) wrapping a {count} variable placeholder.`,file:Ax([Nx])},{id:`tag-chip`,label:`Optional nodes`,blurb:`Two optional jsx:node placeholders that a target may legitimately drop.`,file:Ax([Px])},{id:`plural`,label:`Plural`,blurb:`A structured plural run — each CLDR form holds its own Run[].`,file:Ax([Fx])},{id:`select`,label:`Select`,blurb:`A select construct keyed by an arbitrary pivot (male / female / other).`,file:Ax([Ix])},{id:`sub`,label:`Subblock`,blurb:`A sub run referencing a second block extracted from an embedded subfilter.`,file:Ax([Lx,Rx])}],Bx=[JSON.stringify({type:`header`,annotationType:`@neokapi/example`,annotationVersion:`1.0.0`,producer:{id:`@neokapi/kapi-format-examples`,version:`0.0.1`},created:`2026-04-15T12:00:00Z`,targetArchive:`sha256:deadbeef`}),JSON.stringify({type:`annotation`,id:`review-1`,anchor:{kind:`block`,block:`files-heading`},data:{kind:`review-status`,status:`approved`,reviewer:`jane`}}),JSON.stringify({type:`annotation`,id:`term-1`,anchor:{kind:`run`,block:`tag-chip`,path:[2],runId:`2`},data:{kind:`protected-term`,term:`label`,action:`preserve`}}),JSON.stringify({type:`annotation`,id:`entity-1`,anchor:{kind:`range`,block:`files-heading`,path:[4],offset:1,length:7},data:{kind:`named-entity`,entity:`matched`}}),JSON.stringify({type:`annotation`,id:`qa-1`,anchor:{kind:`form`,block:`shopping-cart-plural`,path:[0],key:`one`},data:{kind:`qa`,note:`singular form reviewed`}}),JSON.stringify({type:`annotation`,id:`orphan-1`,anchor:{kind:`run`,block:`tag-chip`,path:[2],runId:`99`},data:{kind:`protected-term`,term:`label`,note:`stale runId — should not resolve`}})].join(`
`)})),Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS,oS,sS,cS,lS,uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,ES,DS,OS,kS,AS,jS,MS,NS,PS,FS,IS,LS,RS,zS,BS,VS,HS,US,WS,GS,KS,qS,JS,YS,XS,ZS,QS,$S,X,eC=t((()=>{Hx=`_lab_p8b7y_6`,Ux=`_row_p8b7y_12`,Wx=`_editor_p8b7y_19`,Gx=`_editorSmall_p8b7y_34`,Kx=`_editorError_p8b7y_38`,qx=`_label_p8b7y_42`,Jx=`_blocks_p8b7y_51`,Yx=`_card_p8b7y_57`,Xx=`_cardHeader_p8b7y_64`,Zx=`_cardId_p8b7y_74`,Qx=`_cardBody_p8b7y_80`,$x=`_section_p8b7y_87`,eS=`_badge_p8b7y_93`,tS=`_badgeType_p8b7y_103`,nS=`_badgeMuted_p8b7y_108`,rS=`_badgeOk_p8b7y_113`,iS=`_badgeErr_p8b7y_118`,aS=`_spacer_p8b7y_123`,oS=`_preview_p8b7y_2`,sS=`_runs_p8b7y_212`,cS=`_run_p8b7y_212`,lS=`_runIndex_p8b7y_231`,uS=`_runKind_p8b7y_236`,dS=`_runText_p8b7y_243`,fS=`_runTextKind_p8b7y_246`,pS=`_runPh_p8b7y_249`,mS=`_runPhKind_p8b7y_252`,hS=`_runPc_p8b7y_255`,gS=`_runPcKind_p8b7y_258`,_S=`_runPlural_p8b7y_261`,vS=`_runPluralKind_p8b7y_264`,yS=`_runSub_p8b7y_267`,bS=`_runSubKind_p8b7y_270`,xS=`_runHighlight_p8b7y_274`,SS=`_rangeMark_p8b7y_280`,CS=`_findings_p8b7y_287`,wS=`_finding_p8b7y_287`,TS=`_findingKind_p8b7y_303`,ES=`_phList_p8b7y_311`,DS=`_phChip_p8b7y_317`,OS=`_phOptional_p8b7y_329`,kS=`_annList_p8b7y_335`,AS=`_annItem_p8b7y_341`,jS=`_annItemActive_p8b7y_357`,MS=`_annTop_p8b7y_362`,NS=`_annId_p8b7y_369`,PS=`_annAnchor_p8b7y_375`,FS=`_annResolution_p8b7y_381`,IS=`_status_p8b7y_386`,LS=`_statusError_p8b7y_392`,RS=`_button_p8b7y_396`,zS=`_buttonGhost_p8b7y_415`,BS=`_chip_p8b7y_421`,VS=`_chipActive_p8b7y_439`,HS=`_summary_p8b7y_445`,US=`_summaryStat_p8b7y_452`,WS=`_summaryCount_p8b7y_462`,GS=`_table_p8b7y_468`,KS=`_caseName_p8b7y_489`,qS=`_caseDesc_p8b7y_493`,JS=`_verdict_p8b7y_498`,YS=`_pass_p8b7y_505`,XS=`_fail_p8b7y_508`,ZS=`_na_p8b7y_511`,QS=`_catTag_p8b7y_515`,$S=`_detail_p8b7y_525`,X={lab:Hx,row:Ux,editor:Wx,editorSmall:Gx,editorError:Kx,label:qx,blocks:Jx,card:Yx,cardHeader:Xx,cardId:Zx,cardBody:Qx,section:$x,badge:eS,badgeType:tS,badgeMuted:nS,badgeOk:rS,badgeErr:iS,spacer:aS,preview:oS,runs:sS,run:cS,runIndex:lS,runKind:uS,runText:dS,runTextKind:fS,runPh:pS,runPhKind:mS,runPc:hS,runPcKind:gS,runPlural:_S,runPluralKind:vS,runSub:yS,runSubKind:bS,runHighlight:xS,rangeMark:SS,findings:CS,finding:wS,findingKind:TS,phList:ES,phChip:DS,phOptional:OS,annList:kS,annItem:AS,annItemActive:jS,annTop:MS,annId:NS,annAnchor:PS,annResolution:FS,status:IS,statusError:LS,button:RS,buttonGhost:zS,chip:BS,chipActive:VS,summary:HS,summaryStat:US,summaryCount:WS,table:GS,caseName:KS,caseDesc:qS,verdict:JS,pass:YS,fail:XS,na:ZS,catTag:QS,detail:$S}}));function tC({assets:e,defaultSampleId:t,hideAnnotations:n}){let r=nt(e),i=jx(t??`full`),[a,o]=(0,dC.useState)(i.id),[s,c]=(0,dC.useState)(()=>Mx(i.file)),[u,d]=(0,dC.useState)(Bx),[f,p]=(0,dC.useState)(null),m=(0,dC.useMemo)(()=>{try{return{file:JSON.parse(s)}}catch(e){return{error:e.message}}},[s]),h=(0,dC.useMemo)(()=>(m.file?.documents??[]).flatMap(e=>e.blocks??[]),[m.file]),[g,_]=(0,dC.useState)(null),[v,y]=(0,dC.useState)({}),[b,x]=(0,dC.useState)(null);(0,dC.useEffect)(()=>{if(!r.ready)return;if(m.error||!m.file){_(null),y({}),x(null);return}let e=r.klf({op:`roundtrip`,klf:s});if(!e.ok){x(e.error??`the engine rejected this document`),_(null),y({});return}x(null),_({output:e.output,sha256:e.sha256});let t={};for(let e of h){let n=r.klf({op:`renderHtml`,block:e}),i=r.klf({op:`validateBlock`,block:e});t[e.id]={html:n.ok?n.html:``,errors:i.ok?i.errors??[]:[]}}y(t)},[r.ready,r,s,m.file,m.error,h]);let S=(0,dC.useMemo)(()=>{if(!r.ready||n)return[];let e=new Map(h.map(e=>[e.id,e])),t=[];for(let n of u.split(`
`)){let i=n.trim();if(!i)continue;let a;try{a=JSON.parse(i)}catch{continue}if(a.type!==`annotation`||!a.anchor)continue;let o=e.get(a.anchor.block);if(!o){t.push({id:a.id??`?`,anchor:a.anchor,resolution:{ok:!1,reason:`block-not-found`}});continue}let s=r.klf({op:`resolveAnchor`,block:o,anchor:a.anchor}).resolution??{};t.push({id:a.id??`?`,anchor:a.anchor,resolution:{ok:!!s.ok,kind:s.kind,reason:s.reason,detail:sC(s)}})}return t},[r.ready,r,u,h,n]),C=S.find(e=>e.id===f)??null,w=e=>{o(e),c(Mx(jx(e).file)),p(null)};return(0,Z.jsxs)(`div`,{className:X.lab,children:[(0,Z.jsx)(`div`,{className:X.row,children:zx.map(e=>(0,Z.jsx)(`button`,{className:`${X.chip} ${a===e.id?X.chipActive:``}`,onClick:()=>w(e.id),type:`button`,children:e.label},e.id))}),(0,Z.jsx)(`p`,{className:X.status,children:jx(a).blurb}),(0,Z.jsxs)(`div`,{className:X.section,children:[(0,Z.jsx)(`span`,{className:X.label,children:l(`4tKuQN`,`.klf document — edit it`)}),(0,Z.jsx)(`textarea`,{className:`${X.editor} ${m.error?X.editorError:``}`,spellCheck:!1,value:s,onChange:e=>c(e.target.value)})]}),(0,Z.jsxs)(`div`,{className:`${X.status} ${m.error||b?X.statusError:``}`,children:[r.status===`booting`&&`Booting the kapi engine (first run downloads ~13 MB)…`,r.status===`error`&&`Failed to start: ${r.error}`,r.ready&&m.error&&`Invalid JSON: ${m.error}`,r.ready&&!m.error&&b&&`Engine: ${b}`,r.ready&&!m.error&&!b&&g&&(0,Z.jsx)(nC,{canonical:g,input:s})]}),r.ready&&!m.error&&!b&&(0,Z.jsx)(`div`,{className:X.blocks,children:h.map(e=>(0,Z.jsx)(rC,{block:e,analysis:v[e.id],highlight:C&&C.anchor.block===e.id?C.anchor:null},e.id))}),!n&&(0,Z.jsxs)(`div`,{className:X.section,children:[(0,Z.jsx)(`span`,{className:X.label,children:l(`QWPf4`,`.klfl annotation overlay — stand-off anchors`)}),(0,Z.jsx)(`textarea`,{className:`${X.editor} ${X.editorSmall}`,spellCheck:!1,value:u,onChange:e=>d(e.target.value)}),(0,Z.jsx)(`p`,{className:X.status,children:l(`41ZdIw`,`Each record anchors to a location in a block. Click one to resolve it against the live document and highlight what it points at — or see the machine-readable reason it failed.`)}),(0,Z.jsx)(`div`,{className:X.annList,children:S.map(e=>(0,Z.jsx)(oC,{ann:e,active:f===e.id,onClick:()=>p(f===e.id?null:e.id)},e.id))})]})]})}function nC({canonical:e,input:t}){let n=e.output===t;return(0,Z.jsx)(`span`,{className:X.row,children:s(`1pUrXe`,`{=m0} {value} {/=m0} {=m2}sha256:{slice}…{/=m2}`,{"=m0":(0,Z.jsx)(`span`,{className:`${X.badge} ${n?X.badgeOk:X.badgeMuted}`,children:n?`already canonical`:`canonicalized`}),"=m2":(0,Z.jsxs)(`span`,{className:X.detail,children:[`sha256:`,e.sha256.slice(0,16),`…`]})},{value:n?`already canonical`:`canonicalized`,slice:e.sha256.slice(0,16)})})}function rC({block:e,analysis:t,highlight:n}){let r=t?.errors??[];return(0,Z.jsxs)(`div`,{className:X.card,children:[(0,Z.jsxs)(`div`,{className:X.cardHeader,children:[(0,Z.jsx)(`span`,{className:X.cardId,children:e.id}),(0,Z.jsx)(`span`,{className:`${X.badge} ${X.badgeType}`,children:e.type}),!e.translatable&&(0,Z.jsx)(`span`,{className:`${X.badge} ${X.badgeMuted}`,children:l(`yFh73`,`not translatable`)}),(0,Z.jsx)(`span`,{className:X.spacer}),r.length===0?(0,Z.jsx)(`span`,{className:`${X.badge} ${X.badgeOk}`,children:l(`3pB0sn`,`valid`)}):(0,Z.jsxs)(`span`,{className:`${X.badge} ${X.badgeErr}`,children:[r.length,` `,r.length===1?`issue`:`issues`]})]}),(0,Z.jsxs)(`div`,{className:X.cardBody,children:[(0,Z.jsx)(`div`,{className:X.section,children:s(`3GFMT9`,`{=m0}Preview (rendered by the engine){/=m0} {=m1}`,{"=m0":(0,Z.jsx)(`span`,{className:X.label,children:`Preview (rendered by the engine)`}),"=m1":t?.html?(0,Z.jsx)(`div`,{className:X.preview,dangerouslySetInnerHTML:{__html:uC(t.html)}}):(0,Z.jsx)(`div`,{className:X.preview,children:`—`})})}),(0,Z.jsx)(`div`,{className:X.section,children:s(`275Pgd`,`{=m0}Source runs{/=m0} {=m1}`,{"=m0":(0,Z.jsx)(`span`,{className:X.label,children:`Source runs`}),"=m1":(0,Z.jsx)(iC,{runs:e.source,highlight:n})})}),e.placeholders.length>0&&(0,Z.jsxs)(`div`,{className:X.section,children:[(0,Z.jsx)(`span`,{className:X.label,children:l(`1ffdvH`,`Placeholders`)}),(0,Z.jsx)(`div`,{className:X.phList,children:e.placeholders.map(e=>(0,Z.jsxs)(`span`,{className:`${X.phChip} ${e.optional?X.phOptional:``}`,children:[e.name,(0,Z.jsx)(`span`,{className:X.runTextKind,children:e.kind}),e.optional?` · optional`:``]},e.name))})]}),r.length>0&&(0,Z.jsxs)(`div`,{className:X.section,children:[(0,Z.jsx)(`span`,{className:X.label,children:l(`3f6g04`,`Validation`)}),(0,Z.jsx)(`div`,{className:X.findings,children:r.map((e,t)=>(0,Z.jsxs)(`div`,{className:X.finding,children:[(0,Z.jsx)(`span`,{className:X.findingKind,children:e.kind}),(0,Z.jsx)(`span`,{children:e.message})]},t))})]})]})]})}function iC({runs:e,highlight:t}){let n=t&&t.kind!==`block`&&Array.isArray(t.path)&&typeof t.path[0]==`number`?t.path[0]:null;return(0,Z.jsx)(`div`,{className:X.runs,children:e.map((e,r)=>(0,Z.jsx)(aC,{run:e,index:r,highlighted:n===r,range:n===r&&t?.kind===`range`?{offset:t.offset??0,length:t.length??0}:null,form:n===r&&t?.kind===`form`?t.key??null:null},r))})}function aC({run:e,index:t,highlighted:n,range:r,form:i}){let a=n?X.runHighlight:``;return`text`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${a}`,children:s(`1rhzT9`,`{=m0}{index}{/=m0} {=m2}text{/=m2} {=m3} {value} {/=m3}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsx)(`span`,{className:`${X.runKind} ${X.runTextKind}`,children:`text`}),"=m3":(0,Z.jsx)(`span`,{className:X.runText,children:r?lC(e.text,r):JSON.stringify(e.text)})},{index:t,value:r?lC(e.text,r):JSON.stringify(e.text)})}):`ph`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${X.runPh} ${a}`,children:s(`qge70`,`{=m0}{index}{/=m0} {=m2}ph · {equiv}{/=m2} {=m4}{data}{/=m4}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsxs)(`span`,{className:`${X.runKind} ${X.runPhKind}`,children:[`ph · `,e.ph.equiv]}),"=m4":(0,Z.jsx)(`span`,{className:X.runText,children:e.ph.data})},{index:t,equiv:e.ph.equiv,data:e.ph.data})}):`pcOpen`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${X.runPc} ${a}`,children:s(`21qFEu`,`{=m0}{index}{/=m0} {=m2}pcOpen · {equiv}{/=m2} {=m4}{data}{/=m4}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsxs)(`span`,{className:`${X.runKind} ${X.runPcKind}`,children:[`pcOpen · `,e.pcOpen.equiv]}),"=m4":(0,Z.jsx)(`span`,{className:X.runText,children:e.pcOpen.data})},{index:t,equiv:e.pcOpen.equiv,data:e.pcOpen.data})}):`pcClose`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${X.runPc} ${a}`,children:s(`2f7DJN`,`{=m0}{index}{/=m0} {=m2}pcClose{/=m2} {=m3}{data}{/=m3}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsx)(`span`,{className:`${X.runKind} ${X.runPcKind}`,children:`pcClose`}),"=m3":(0,Z.jsx)(`span`,{className:X.runText,children:e.pcClose.data})},{index:t,data:e.pcClose.data})}):`sub`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${X.runSub} ${a}`,children:s(`3FWSJ1`,`{=m0}{index}{/=m0} {=m2}sub → {ref}{/=m2} {=m4}{equiv}{/=m4}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsxs)(`span`,{className:`${X.runKind} ${X.runSubKind}`,children:[`sub → `,e.sub.ref]}),"=m4":(0,Z.jsx)(`span`,{className:X.runText,children:e.sub.equiv})},{index:t,ref:e.sub.ref,equiv:e.sub.equiv})}):`plural`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${X.runPlural} ${a}`,children:s(`4bed5S`,`{=m0}{index}{/=m0} {=m2} plural · {pivot} {/=m2} {=m4} {join} {/=m4}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsxs)(`span`,{className:`${X.runKind} ${X.runPluralKind}`,children:[`plural · `,e.plural.pivot]}),"=m4":(0,Z.jsx)(`span`,{className:X.runText,children:Object.keys(e.plural.forms).map(e=>e===i?`[${e}]`:e).join(` · `)})},{index:t,pivot:e.plural.pivot,join:Object.keys(e.plural.forms).map(e=>e===i?`[${e}]`:e).join(` · `)})}):`select`in e?(0,Z.jsx)(`span`,{className:`${X.run} ${X.runPlural} ${a}`,children:s(`1xeFw8`,`{=m0}{index}{/=m0} {=m2} select · {pivot} {/=m2} {=m4} {join} {/=m4}`,{"=m0":(0,Z.jsx)(`span`,{className:X.runIndex,children:t}),"=m2":(0,Z.jsxs)(`span`,{className:`${X.runKind} ${X.runPluralKind}`,children:[`select · `,e.select.pivot]}),"=m4":(0,Z.jsx)(`span`,{className:X.runText,children:Object.keys(e.select.cases).map(e=>e===i?`[${e}]`:e).join(` · `)})},{index:t,pivot:e.select.pivot,join:Object.keys(e.select.cases).map(e=>e===i?`[${e}]`:e).join(` · `)})}):(0,Z.jsx)(`span`,{className:X.run,children:l(`1iSvpd`,`?`)})}function oC({ann:e,active:t,onClick:n}){return(0,Z.jsxs)(`div`,{className:`${X.annItem} ${t?X.annItemActive:``}`,onClick:n,children:[(0,Z.jsxs)(`div`,{className:X.annTop,children:[(0,Z.jsx)(`span`,{className:X.annId,children:e.id}),(0,Z.jsx)(`span`,{className:`${X.badge} ${X.badgeType}`,children:e.anchor.kind}),(0,Z.jsx)(`span`,{className:X.annAnchor,children:cC(e.anchor)}),(0,Z.jsx)(`span`,{className:X.spacer}),e.resolution.ok?(0,Z.jsx)(`span`,{className:`${X.badge} ${X.badgeOk}`,children:l(`3IJE6I`,`resolved`)}):(0,Z.jsx)(`span`,{className:`${X.badge} ${X.badgeErr}`,children:e.resolution.reason})]}),(0,Z.jsx)(`div`,{className:X.annResolution,children:e.resolution.ok?e.resolution.detail:`did not resolve — ${e.resolution.reason}`})]})}function sC(e){switch(e.kind){case`block`:return`the whole block (block-level metadata)`;case`run`:return`run id ${String(e.runId)}`;case`range`:return`“${String(e.rangeText).slice(e.rangeOffset,e.rangeOffset+e.rangeLength)}” at offset ${String(e.rangeOffset)}`;case`form`:return`${String(e.formRunCount)} run(s) in the selected form`;default:return``}}function cC(e){let t=e.path?`[${e.path.map(e=>typeof e==`number`?e:JSON.stringify(e)).join(`, `)}]`:``;switch(e.kind){case`block`:return e.block;case`run`:return`${e.block} ${t} runId=${e.runId}`;case`range`:return`${e.block} ${t} ${e.offset}+${e.length}`;case`form`:return`${e.block} ${t} key=${e.key}`;default:return e.block}}function lC(e,t){let n=e.slice(0,t.offset),r=e.slice(t.offset,t.offset+t.length),i=e.slice(t.offset+t.length);return(0,Z.jsxs)(Z.Fragment,{children:[JSON.stringify(n).slice(1,-1),(0,Z.jsx)(`mark`,{className:X.rangeMark,children:r}),JSON.stringify(i).slice(1,-1)]})}function uC(e){return e.replace(/^<kat-block[^>]*>/,``).replace(/<\/kat-block>$/,``)}var dC,Z,fC=t((()=>{c(),dC=e(a(),1),at(),Vx(),eC(),Z=o(),tC.__docgenInfo={description:``,methods:[],displayName:`KlfExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`},defaultSampleId:{required:!1,tsType:{name:`string`},description:`Sample selected on first render (default: the complete document).`},hideAnnotations:{required:!1,tsType:{name:`boolean`},description:`Hide the annotation overlay panel (e.g. for a compact inline embed).`}}}}));function pC({assets:e}){let t=nt(e),[n,r]=(0,CC.useState)(null),[i,a]=(0,CC.useState)(!1);(0,CC.useEffect)(()=>{if(!t.ready)return;let e=!1;return a(!0),(async()=>{let n=[];for(let e of IC){let r=await e.runGo(t),i=e.runTs?await e.runTs():null,a=e.expected==null?i==null?!1:r===i:r===e.expected,o=i==null?null:e.expected==null?i===r:i===e.expected,s=i==null?null:r===i;n.push({c:e,goValue:r,tsValue:i,goPass:a,tsPass:o,agree:s})}e||(r(n),a(!1))})(),()=>{e=!0}},[t.ready,t]);let o=n?.length??IC.length,c=n?.filter(e=>e.goPass).length??0,u=n?.filter(e=>e.agree!=null)??[],d=u.filter(e=>e.agree).length;return(0,Q.jsxs)(`div`,{className:X.lab,children:[(0,Q.jsxs)(`div`,{className:X.summary,children:[t.status===`booting`&&(0,Q.jsx)(`span`,{className:X.status,children:l(`35Pzxi`,`Booting the kapi engine…`)}),t.status===`error`&&(0,Q.jsx)(`span`,{className:`${X.status} ${X.statusError}`,children:l(`23Rq66`,`Failed to start: ${t.error}`,{"runtime.error":t.error})}),t.ready&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{className:X.summaryStat,children:s(`4hJR7A`,`{=m0} {goPassed}/{total} {/=m0} cases pass`,{"=m0":(0,Q.jsxs)(`span`,{className:`${X.summaryCount} ${c===o?X.pass:X.fail}`,children:[c,`/`,o]})},{goPassed:c,total:o})}),(0,Q.jsx)(`span`,{className:X.summaryStat,children:s(`3LZjCO`,`{=m0} {agreed}/{dual.length} {/=m0} dual-engine cases agree`,{"=m0":(0,Q.jsxs)(`span`,{className:`${X.summaryCount} ${d===u.length?X.pass:X.fail}`,children:[d,`/`,u.length]})},{agreed:d,"dual.length":u.length})}),i&&(0,Q.jsx)(`span`,{className:X.status,children:l(`1Dz7RG`,`running…`)})]})]}),(0,Q.jsxs)(`table`,{className:X.table,children:[(0,Q.jsx)(`thead`,{children:(0,Q.jsxs)(`tr`,{children:[(0,Q.jsx)(`th`,{children:l(`3ZWVAK`,`Case`)}),(0,Q.jsx)(`th`,{children:l(`4ad7o`,`Category`)}),(0,Q.jsx)(`th`,{children:l(`31VHwF`,`Go`)}),(0,Q.jsx)(`th`,{children:l(`HGhbn`,`TypeScript`)}),(0,Q.jsx)(`th`,{children:l(`2cttXc`,`Agree`)}),(0,Q.jsx)(`th`,{children:l(`4xIM9y`,`Result`)})]})}),(0,Q.jsx)(`tbody`,{children:(n??[]).map(e=>(0,Q.jsxs)(`tr`,{children:[(0,Q.jsxs)(`td`,{children:[(0,Q.jsx)(`div`,{className:X.caseName,children:e.c.name}),(0,Q.jsx)(`div`,{className:X.caseDesc,children:e.c.description}),(0,Q.jsx)(`div`,{className:X.detail,children:e.goValue})]}),(0,Q.jsx)(`td`,{children:(0,Q.jsx)(`span`,{className:X.catTag,children:e.c.category})}),(0,Q.jsx)(`td`,{children:(0,Q.jsx)(`span`,{className:`${X.verdict} ${e.goPass?X.pass:X.fail}`,children:e.goPass?`✓ pass`:`✗ fail`})}),(0,Q.jsx)(`td`,{children:e.tsPass==null?(0,Q.jsx)(`span`,{className:`${X.verdict} ${X.na}`,children:l(`MtI86`,`— canonical only`)}):(0,Q.jsx)(`span`,{className:`${X.verdict} ${e.tsPass?X.pass:X.fail}`,children:e.tsPass?`✓ pass`:`✗ fail`})}),(0,Q.jsx)(`td`,{children:e.agree==null?(0,Q.jsx)(`span`,{className:`${X.verdict} ${X.na}`,children:l(`1NSWQP`,`—`)}):(0,Q.jsx)(`span`,{className:`${X.verdict} ${e.agree?X.pass:X.fail}`,children:e.agree?`✓`:`✗`})}),(0,Q.jsx)(`td`,{className:X.detail,children:e.c.expected==null?`parity`:`expected: ${e.c.expected}`})]},e.c.id))})]})]})}async function mC(e){let t=await crypto.subtle.digest(`SHA-256`,e);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}function hC(e,t,n){let r=e.klf({op:`resolveAnchor`,block:t,anchor:n}).resolution??{};if(!r.ok)return`fail:${String(r.reason)}`;switch(r.kind){case`run`:return`ok:run:${String(r.runId)}`;case`range`:return`ok:range:${String(r.rangeOffset)}+${String(r.rangeLength)}`;case`form`:return`ok:form:${String(r.formRunCount)}`;default:return`ok:block`}}function gC(e,t){let n=re(e,t);if(!n.ok)return`fail:${n.reason}`;switch(n.kind){case`run`:{let e=n.run;return`ok:run:${`ph`in e?e.ph.id:`pcOpen`in e?e.pcOpen.id:`sub`in e?e.sub.id:``}`}case`range`:return`ok:range:${n.offset}+${n.length}`;case`form`:return`ok:form:${n.runs.length}`;default:return`ok:block`}}function _C(e,t,n){return xC((e.klf({op:`validateTarget`,source:t,target:n}).errors??[]).map(e=>e.kind))}function vC(e,t){return xC(A(e,t).map(e=>e.kind))}function yC(e,t){let n=e.klf({op:`validateBlock`,block:t});return n.ok?xC((n.errors??[]).map(e=>e.kind)):`decode-rejected`}function bC(e,t){return e.klf({op:`roundtrip`,klf:t}).ok?`accepted`:`rejected`}function xC(e){return e.length===0?`valid`:[...e].sort().join(`,`)}function SC(e){let t=JSON.parse(Mx(jx(`files-heading`).file));return e(t),Mx(t)}var CC,Q,wC,TC,EC,DC,OC,kC,AC,jC,MC,NC,PC,FC,IC,LC=t((()=>{c(),CC=e(a(),1),ie(),at(),Vx(),eC(),Q=o(),wC=jx(`full`).file,TC=jx(`select`).file,EC=jx(`sub`).file,DC=jx(`plural`).file,OC=[{pcOpen:{id:`1`,type:`jsx:element`,subType:`span`,data:`<span className="muted">`,equiv:`muted`}},{text:`(`},{ph:{id:`2`,type:`jsx:var`,subType:`number`,data:`{count}`,equiv:`count`}},{text:` trouvés)`},{pcClose:{id:`1`,type:`jsx:element`,subType:`span`,data:`</span>`,equiv:`muted`}}],kC=[{pcOpen:{id:`1`,type:`jsx:element`,subType:`span`,data:`<span className="muted">`,equiv:`muted`}},{text:`(aucun)`},{pcClose:{id:`1`,type:`jsx:element`,subType:`span`,data:`</span>`,equiv:`muted`}}],AC=[...OC,{ph:{id:`9`,type:`jsx:var`,data:`{stray}`,equiv:`stray`}}],jC=[{ph:{id:`2`,type:`jsx:var`,subType:`string`,data:`{label}`,equiv:`label`}}],MC={id:`bad`,hash:`x`,translatable:!0,type:`jsx:element`,source:[{text:`a`,ph:{id:`1`,type:`jsx:var`,data:`{x}`,equiv:`x`}}],placeholders:[],properties:{file:`x`,line:1,component:`X`,jsxPath:`X`,element:`p`}},NC={id:`unclosed`,hash:`x`,translatable:!0,type:`jsx:element`,source:[{pcOpen:{id:`1`,type:`jsx:element`,subType:`b`,data:`<b>`,equiv:`b`}},{text:`bold`}],placeholders:[{name:`b`,kind:`element`,sourceExpr:`<b>`}],properties:{file:`x`,line:1,component:`X`,jsxPath:`X`,element:`p`}},PC={id:`unmatched`,hash:`x`,translatable:!0,type:`jsx:element`,source:[{pcClose:{id:`1`,type:`jsx:element`,subType:`b`,data:`</b>`}}],placeholders:[],properties:{file:`x`,line:1,component:`X`,jsxPath:`X`,element:`p`}},FC={id:`unknown-ph`,hash:`x`,translatable:!0,type:`jsx:element`,source:[{ph:{id:`1`,type:`jsx:var`,data:`{x}`,equiv:`undeclared`}}],placeholders:[],properties:{file:`x`,line:1,component:`X`,jsxPath:`X`,element:`p`}},IC=[{id:`ser-full`,name:`Round-trip the complete document`,description:`Decode → re-marshal; both engines emit identical canonical bytes.`,category:`serialization`,runGo:e=>e.klf({op:`roundtrip`,klf:Mx(wC)}).sha256,runTs:()=>mC(te(wC))},{id:`ser-plural`,name:`Round-trip a plural block`,description:`Plural form keys serialize in the same (sorted) order in both engines.`,category:`serialization`,runGo:e=>e.klf({op:`roundtrip`,klf:Mx(DC)}).sha256,runTs:()=>mC(te(DC))},{id:`ser-select`,name:`Round-trip a select block`,description:`Select case keys serialize identically across implementations.`,category:`serialization`,runGo:e=>e.klf({op:`roundtrip`,klf:Mx(TC)}).sha256,runTs:()=>mC(te(TC))},{id:`ser-sub`,name:`Round-trip a subblock reference`,description:`A document with a sub run and its referenced block round-trips byte-identically.`,category:`serialization`,runGo:e=>e.klf({op:`roundtrip`,klf:Mx(EC)}).sha256,runTs:()=>mC(te(EC))},{id:`prev-files`,name:`Render files-heading to HTML`,description:`Paired code + variable render to the same <kat-block> HTML.`,category:`preview`,runGo:e=>e.klf({op:`renderHtml`,block:Nx}).html,runTs:()=>ne(Nx)},{id:`prev-tag`,name:`Render tag-chip to HTML`,description:`Conditional jsx:node placeholders render identically.`,category:`preview`,runGo:e=>e.klf({op:`renderHtml`,block:Px}).html,runTs:()=>ne(Px)},{id:`prev-plural`,name:`Render a plural block to HTML`,description:`Plural forms render in the same order with the same labels.`,category:`preview`,runGo:e=>e.klf({op:`renderHtml`,block:Fx}).html,runTs:()=>ne(Fx)},{id:`prev-select`,name:`Render a select block to HTML`,description:`Select cases render identically (other sorts last).`,category:`preview`,runGo:e=>e.klf({op:`renderHtml`,block:Ix}).html,runTs:()=>ne(Ix)},{id:`prev-sub`,name:`Render a sub run to HTML`,description:`A subblock reference renders to the same neokapi-sub span.`,category:`preview`,runGo:e=>e.klf({op:`renderHtml`,block:Lx}).html,runTs:()=>ne(Lx)},{id:`anc-block`,name:`Resolve a block anchor`,description:`A block-kind anchor resolves to the whole block.`,category:`anchor`,expected:`ok:block`,runGo:e=>hC(e,Nx,{kind:`block`,block:`files-heading`}),runTs:()=>gC(Nx,{kind:`block`,block:`files-heading`})},{id:`anc-run`,name:`Resolve a run anchor`,description:`A run anchor resolves to the run at the path with the matching id.`,category:`anchor`,expected:`ok:run:2`,runGo:e=>hC(e,Px,{kind:`run`,block:`tag-chip`,path:[2],runId:`2`}),runTs:()=>gC(Px,{kind:`run`,block:`tag-chip`,path:[2],runId:`2`})},{id:`anc-range`,name:`Resolve a range anchor`,description:`A character range inside a text run resolves to the offset/length.`,category:`anchor`,expected:`ok:range:1+7`,runGo:e=>hC(e,Nx,{kind:`range`,block:`files-heading`,path:[4],offset:1,length:7}),runTs:()=>gC(Nx,{kind:`range`,block:`files-heading`,path:[4],offset:1,length:7})},{id:`anc-form`,name:`Resolve a form anchor`,description:`A plural-form anchor resolves to the runs of that form.`,category:`anchor`,expected:`ok:form:1`,runGo:e=>hC(e,Fx,{kind:`form`,block:`shopping-cart-plural`,path:[0],key:`one`}),runTs:()=>gC(Fx,{kind:`form`,block:`shopping-cart-plural`,path:[0],key:`one`})},{id:`anc-runid`,name:`Detect a stale run id`,description:`A run anchor whose recorded id no longer matches fails as run-id-mismatch.`,category:`anchor`,expected:`fail:run-id-mismatch`,runGo:e=>hC(e,Px,{kind:`run`,block:`tag-chip`,path:[2],runId:`99`}),runTs:()=>gC(Px,{kind:`run`,block:`tag-chip`,path:[2],runId:`99`})},{id:`anc-oob`,name:`Detect an out-of-bounds path`,description:`A path step past the end of the runs fails as path-out-of-bounds.`,category:`anchor`,expected:`fail:path-out-of-bounds`,runGo:e=>hC(e,Nx,{kind:`run`,block:`files-heading`,path:[99],runId:`1`}),runTs:()=>gC(Nx,{kind:`run`,block:`files-heading`,path:[99],runId:`1`})},{id:`anc-block-nf`,name:`Detect a block mismatch`,description:`An anchor for a different block id fails as block-not-found.`,category:`anchor`,expected:`fail:block-not-found`,runGo:e=>hC(e,Nx,{kind:`block`,block:`nope`}),runTs:()=>gC(Nx,{kind:`block`,block:`nope`})},{id:`anc-form-nf`,name:`Detect a missing plural form`,description:`A form anchor for a non-existent form fails as form-not-found.`,category:`anchor`,expected:`fail:form-not-found`,runGo:e=>hC(e,Fx,{kind:`form`,block:`shopping-cart-plural`,path:[0],key:`many`}),runTs:()=>gC(Fx,{kind:`form`,block:`shopping-cart-plural`,path:[0],key:`many`})},{id:`tgt-valid`,name:`Accept a faithful target`,description:`A target preserving every required placeholder is valid in both engines.`,category:`target`,expected:`valid`,runGo:e=>_C(e,Nx,OC),runTs:()=>vC(Nx,OC)},{id:`tgt-missing`,name:`Flag a dropped required placeholder`,description:`Dropping a required placeholder is missing-placeholder in both engines.`,category:`target`,expected:`missing-placeholder`,runGo:e=>_C(e,Nx,kC),runTs:()=>vC(Nx,kC)},{id:`tgt-optional`,name:`Allow dropping optional placeholders`,description:`Optional jsx:node placeholders may be dropped — still valid in both engines.`,category:`target`,expected:`valid`,runGo:e=>_C(e,Px,jC),runTs:()=>vC(Px,jC)},{id:`tgt-extra`,name:`Flag an invented placeholder`,description:`The canonical Go engine also flags a placeholder the source never declared (extra-placeholder); the TypeScript mirror checks only required-placeholder preservation.`,category:`target`,expected:`extra-placeholder`,runGo:e=>_C(e,Nx,AC)},{id:`str-valid`,name:`Accept a well-formed block`,description:`A balanced block with declared placeholders validates clean.`,category:`structure`,expected:`valid`,runGo:e=>yC(e,Nx)},{id:`str-unclosed`,name:`Flag an unclosed paired code`,description:`A pcOpen with no matching pcClose is unclosed-paired-code.`,category:`structure`,expected:`unclosed-paired-code`,runGo:e=>yC(e,NC)},{id:`str-unmatched`,name:`Flag an unmatched close code`,description:`A pcClose with no matching pcOpen is unmatched-close-code.`,category:`structure`,expected:`unmatched-close-code`,runGo:e=>yC(e,PC)},{id:`str-unknown-ph`,name:`Flag an undeclared placeholder`,description:`A run referencing a placeholder absent from the list is unknown-placeholder.`,category:`structure`,expected:`unknown-placeholder`,runGo:e=>yC(e,FC)},{id:`str-malformed`,name:`Reject a malformed run on the wire`,description:`A run object with two discriminators is rejected by the decoder.`,category:`structure`,expected:`decode-rejected`,runGo:e=>yC(e,MC)},{id:`env-kind`,name:`Reject an unknown envelope kind`,description:`A file whose kind is not kapi-localization-format is rejected.`,category:`structure`,expected:`rejected`,runGo:e=>bC(e,SC(e=>e.kind=`something-else`))},{id:`env-major`,name:`Reject an unknown major version`,description:`A file with an unrecognized major schemaVersion is rejected.`,category:`structure`,expected:`rejected`,runGo:e=>bC(e,SC(e=>e.schemaVersion=`2.0`))}],pC.__docgenInfo={description:``,methods:[],displayName:`KlfConformance`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:`WASM asset URLs from the host; null defers booting (e.g. during SSR).`}}}}));function RC({assets:e,defaultSampleId:t}){let n=nt(e),[r,i]=(0,BC.useState)(()=>rt(t??`json`).id),a=(0,BC.useMemo)(()=>rt(r),[r]),[o,s]=(0,BC.useState)(new Set),[c,u]=(0,BC.useState)(null),[d,f]=(0,BC.useState)(null),[p,m]=(0,BC.useState)(null),[h,g]=(0,BC.useState)(null),_=`/project/ws-${r}.klz`,v=`/project/${a.filename}`,y=`/project/out/${a.filename}`,b=(0,BC.useCallback)(()=>{s(new Set),u(null),f(null),g(null)},[]);(0,BC.useEffect)(()=>{b()},[r,b]);let x=(0,BC.useCallback)(async()=>{let{code:e,output:t}=await n.runCapture([`info`,_,`--json`]);if(e===0)try{u(JSON.parse(t))}catch{}},[n,_]),S=(0,BC.useCallback)(async e=>{m(e),g(null);try{e===`extract`&&n.writeFile(a.filename,a.bytes());let t={extract:[`extract`,v,`-o`,_,`--target-lang`,HC,`--out`,`out/{name}.{ext}`],transform:[`pseudo-translate`,_],pack:[`pack`,_],merge:[`merge`,_]},r=await n.run(t[e]);if(r!==0){g(`\`kapi ${t[e].join(` `)}\` exited ${r}`);return}if(s(t=>new Set(t).add(e)),await x(),e===`merge`)if(a.binary){let e=n.readBytes(y);f(e?`✓ produced ${a.filename} — ${e.length} bytes, valid OOXML zip: ${e[0]===80&&e[1]===75}`:`(no output)`)}else f(n.readFile(y)??`(no output)`)}finally{m(null)}},[n,a,v,_,y,x]),C=(e,t)=>!n.ready||p?!1:t===0?!0:o.has(VC[t-1]);return(0,$.jsxs)(`div`,{className:M.explorer,children:[(0,$.jsxs)(`div`,{className:M.statusBar,children:[n.status===`booting`&&`Booting kapi (first run downloads the WASM engine)…`,n.status===`error`&&`Failed to start: ${n.error}`,n.ready&&(0,$.jsxs)(`label`,{children:[`Sample:`,` `,(0,$.jsx)(`select`,{value:r,onChange:e=>i(e.target.value),disabled:!!p,children:it.map(e=>(0,$.jsx)(`option`,{value:e.id,children:l(`2stmX3`,`${e.label} — ${e.kind}`,{"w.label":e.label,"w.kind":e.kind})},e.id))})]})]}),(0,$.jsx)(`div`,{className:et.steps,children:VC.map((e,t)=>(0,$.jsxs)(`button`,{className:`${et.step} ${o.has(e)?et.stepDone:``}`,disabled:!C(e,t),onClick:()=>S(e),children:[(0,$.jsx)(`span`,{className:et.stepNum,children:t+1}),p===e?`…`:`kapi ${e===`transform`?`pseudo-translate`:e}`,o.has(e)&&` ✓`]},e))}),h&&(0,$.jsx)(`div`,{className:`${M.statusBar} ${M.statusError}`,children:h}),(0,$.jsxs)(`div`,{className:et.panel,children:[(0,$.jsxs)(`div`,{className:et.card,children:[(0,$.jsx)(`div`,{className:et.cardTitle,children:l(`1VhaFz`,`Workspace`)}),!c&&(0,$.jsx)(`div`,{className:et.binaryNote,children:l(`4e1K3R`,`Run “extract” to create the workspace.`)}),c&&(0,$.jsx)(zC,{info:c})]}),(0,$.jsxs)(`div`,{className:et.card,children:[(0,$.jsx)(`div`,{className:et.cardTitle,children:l(`4eM9PI`,`Merged output`)}),d==null&&(0,$.jsx)(`div`,{className:et.binaryNote,children:l(`E1riQ`,`Run all four steps to emit the localized file.`)}),d!=null&&(a.binary?(0,$.jsx)(`div`,{className:et.binaryNote,children:d}):(0,$.jsx)(`pre`,{className:et.output,children:d}))]})]})]})}function zC({info:e}){let t=e.targetLangs??[],n=Math.max(1,...Object.values(e.overlays??{}));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`div`,{className:et.kv,children:s(`1zNAfj`,`{=m0}documents{/=m0} {=m1}{join}{/=m1} {=m3}recipe{/=m3} {=m4} {info.sourceLang} → {value} {/=m4} {=m7}output{/=m7} {=m8}{value_2}{/=m8} {=m10}state{/=m10} {=m11} {=m12} {value_3} {/=m12} {/=m11}`,{"=m0":(0,$.jsx)(`span`,{className:et.kvKey,children:`documents`}),"=m1":(0,$.jsx)(`span`,{children:e.documents.join(`, `)}),"=m3":(0,$.jsx)(`span`,{className:et.kvKey,children:`recipe`}),"=m4":(0,$.jsxs)(`span`,{children:[e.sourceLang,` → `,t.join(`, `)||`—`]}),"=m7":(0,$.jsx)(`span`,{className:et.kvKey,children:`output`}),"=m8":(0,$.jsx)(`span`,{children:e.out||`(default)`}),"=m10":(0,$.jsx)(`span`,{className:et.kvKey,children:`state`}),"=m11":(0,$.jsx)(`span`,{children:(0,$.jsx)(`span`,{className:`${et.pill} ${e.dirty?et.pillDirty:et.pillClean}`,children:e.dirty?`dirty`:`clean (packed)`})}),"=m12":(0,$.jsx)(`span`,{className:`${et.pill} ${e.dirty?et.pillDirty:et.pillClean}`,children:e.dirty?`dirty`:`clean (packed)`})},{join:e.documents.join(`, `),"info.sourceLang":e.sourceLang,value:t.join(`, `)||`—`,value_2:e.out||`(default)`,value_3:e.dirty?`dirty`:`clean (packed)`})}),t.length>0&&(0,$.jsxs)(`div`,{style:{marginTop:`0.6rem`},children:[(0,$.jsx)(`div`,{className:et.cardTitle,children:l(`4q7LfW`,`Overlays (translated blocks)`)}),t.map(t=>{let r=e.overlays?.[t]??0;return(0,$.jsxs)(`div`,{className:et.overlayRow,children:[(0,$.jsx)(`span`,{style:{width:`3rem`},children:t}),(0,$.jsx)(`span`,{className:et.overlayBar,style:{width:`${r/n*60+2}px`}}),(0,$.jsx)(`span`,{children:r})]},t)})]})]})}var BC,$,VC,HC,UC=t((()=>{c(),BC=e(a(),1),at(),Ze(),$e(),tt(),$=o(),VC=[`extract`,`transform`,`pack`,`merge`],HC=`qps`,RC.__docgenInfo={description:``,methods:[],displayName:`WorkspaceExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:``},defaultSampleId:{required:!1,tsType:{name:`string`},description:``}}}}));function WC({assets:e,sampleIds:t,defaultPattern:n=`*.json`}){let r=nt(e),i=Ye({sampleIds:t}),[a,o]=(0,GC.useState)({mode:`glob`,paths:[],pattern:n}),[c,u]=(0,GC.useState)(qC[0].id),[d,f]=(0,GC.useState)([]),[p,m]=(0,GC.useState)(0),[h,_]=(0,GC.useState)(!1),[v,y]=(0,GC.useState)(null),b=(0,GC.useMemo)(()=>Je(a,i),[a,i]),x=(0,GC.useCallback)(async()=>{if(!r.ready||b.length===0)return;let e=qC.find(e=>e.id===c)??qC[0];_(!0),y(null),r.mkdir(`out`);let t=[];for(let n of b){let a=r.writeFile(n.path,n.bytes),o=`out/${n.name}`,s=`/project/${o}`,c=await r.run(e.build(a,s)),l=r.readBytes(s);c===0&&l&&l.length>0&&(i.setOutput(o,l),t.push(s))}t.length===0&&y(`no outputs were produced`),f(t),m(e=>e+1),_(!1)},[r.ready,r.mkdir,r.writeFile,r.run,r.readBytes,i,b,c]);return(0,GC.useEffect)(()=>{r.ready&&d.length===0&&x()},[r.ready]),(0,KC.jsxs)(`div`,{className:`kapi-reference flex flex-col gap-3 text-foreground`,children:[(0,KC.jsxs)(`div`,{className:`flex flex-wrap items-end gap-3`,children:[(0,KC.jsx)(Xe,{label:l(`2vWXWO`,`Inputs`),library:i,selection:a,onSelectionChange:o,multiple:!0,sampleIds:t}),(0,KC.jsx)(ye,{type:`single`,variant:`outline`,value:c,onValueChange:e=>e&&u(e),children:qC.map(e=>(0,KC.jsx)(ve,{value:e.id,className:`px-3 text-xs`,children:e.label},e.id))}),(0,KC.jsx)(k,{onClick:()=>void x(),disabled:!r.ready||h||b.length===0,children:s(`15OzrL`,`{=m0} Run on {selected.length} file{value}`,{"=m0":(0,KC.jsx)(g,{})},{"selected.length":b.length,value:b.length===1?``:`s`})})]}),(0,KC.jsxs)(`div`,{className:`min-h-[1.4rem] text-sm text-muted-foreground`,children:[r.status===`booting`&&`Booting kapi (first run downloads ~13 MB)…`,r.status===`error`&&`Failed to start: ${r.error}`,r.ready&&h&&`Running across the selection…`,r.ready&&!h&&v&&(0,KC.jsx)(`span`,{className:`text-destructive`,children:v})]}),d.length>0&&(0,KC.jsx)(`div`,{className:`flex flex-col gap-3`,children:d.map(e=>(0,KC.jsx)(st,{runtime:r,path:e,version:p},e))})]})}var GC,KC,qC,JC=t((()=>{c(),GC=e(a(),1),E(),j(),at(),Ue(),qe(),ot(),KC=o(),qC=[{id:`pseudo-translate`,label:`Pseudo-translate`,build:(e,t)=>[`pseudo-translate`,e,`-o`,t]},{id:`ai-translate-qa`,label:`AI translate + QA (demo)`,build:(e,t)=>[`run`,`ai-translate-qa`,`-i`,e,`-o`,t,`--target-lang`,`fr`]}],WC.__docgenInfo={description:``,methods:[],displayName:`BatchExplorer`,props:{assets:{required:!0,tsType:{name:`union`,raw:`LabRuntimeAssets | null`,elements:[{name:`LabRuntimeAssets`},{name:`null`}]},description:``},sampleIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},defaultPattern:{required:!1,tsType:{name:`string`},description:`Initial glob pattern (default "*.json").`,defaultValue:{value:`"*.json"`,computed:!1}}}}})),YC=t((()=>{Cn(),Lt(),Ht(),Gt(),yn(),An(),Pn(),Fh(),Yh(),og(),zg(),Wg(),N_(),G_(),lv(),px(),gv(),Pb(),kx(),fC(),LC(),UC(),Qe(),Ze(),Vx(),bb(),p_(),Yg(),Ge(),qe(),En(),Ue(),ot(),ct(),dt(),lt(),ut(),JC(),at(),_t()})),XC,ZC,QC,$C,ew;t((()=>{YC(),XC=o(),ZC={title:`Lab/Explorers/MultimodalShowcase`,component:Bh,parameters:{layout:`padded`}},QC={render:()=>(0,XC.jsx)(Bh,{className:`max-w-3xl`})},$C={render:()=>(0,XC.jsx)(Bh,{initialChapter:2,className:`max-w-3xl`})},QC.parameters={...QC.parameters,docs:{...QC.parameters?.docs,source:{originalSource:`{
  render: () => <MultimodalShowcase className="max-w-3xl" />
}`,...QC.parameters?.docs?.source}}},$C.parameters={...$C.parameters,docs:{...$C.parameters?.docs,source:{originalSource:`{
  render: () => <MultimodalShowcase initialChapter={2} className="max-w-3xl" />
}`,...$C.parameters?.docs?.source}}},ew=[`Default`,`StartOnVideo`]}))();export{QC as Default,$C as StartOnVideo,ew as __namedExportsOrder,uh as a,ZC as default,dh as i,Wm as n,Ah as r,Km as t};