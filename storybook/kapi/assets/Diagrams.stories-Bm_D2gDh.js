import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./react-CTEnZGpN.js";import{t as n}from"./jsx-runtime-Co6hkppD.js";import{r,t as i}from"./runtime-CI09VOSa.js";import{a,c as o,d as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./storyEnv-DNHtk8aN.js";function g({path:e,dur:t,begin:n,cls:r,r:i=3}){return(0,y.jsxs)(`circle`,{r:i,className:`kdx-dot ${r}`,children:[(0,y.jsx)(`animateMotion`,{dur:`${t}s`,begin:`${n}s`,repeatCount:`indefinite`,path:e}),(0,y.jsx)(`animate`,{attributeName:`opacity`,values:`0;1;1;0`,keyTimes:`0;0.12;0.85;1`,dur:`${t}s`,begin:`${n}s`,repeatCount:`indefinite`})]})}function _({x:e,w:t,role:n,title:r,sub:i}){let a=e+t/2;return(0,y.jsxs)(`g`,{children:[(0,y.jsx)(`rect`,{x:e,y:164,width:t,height:64,rx:10,className:`kdx-box kdx-box--${n}`}),(0,y.jsx)(`text`,{x:a,y:192,textAnchor:`middle`,fontSize:13.5,className:`kdx-label`,children:r}),(0,y.jsx)(`text`,{x:a,y:210,textAnchor:`middle`,fontSize:9.5,className:`kdx-sub kdx-sub--${n}`,children:i})]})}function v({x1:e,x2:t}){return(0,y.jsxs)(`g`,{children:[(0,y.jsx)(`line`,{x1:e,y1:b,x2:t,y2:b,className:`kdx-channel`}),(0,y.jsx)(`text`,{x:(e+t)/2,y:b-8,textAnchor:`middle`,fontSize:7.5,className:`kdx-chan`,children:i(`4eX5PU`,`chan`)})]})}function ee({animated:e=!0}){return(0,y.jsx)(`div`,{className:`kdx${e?` kdx--animated`:``}`,children:(0,y.jsx)(`div`,{className:`kdx-scroll`,children:(0,y.jsx)(`div`,{className:`kdx-canvas`,style:{maxWidth:960},children:(0,y.jsxs)(`svg`,{viewBox:`0 0 ${te} ${ne}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-labelledby":`kdx-arch-title kdx-arch-desc`,children:[(0,y.jsx)(`title`,{id:`kdx-arch-title`,children:i(`3IzEat`,`neokapi processing architecture`)}),(0,y.jsx)(`desc`,{id:`kdx-arch-desc`,children:i(`3uzfzj`,`A streaming pipeline: format readers and writers at the edges, a serial chain of annotate, translate and QA tools in the middle with the translate stage fanning out across parallel goroutines, translation-memory and termbase resources feeding it from above, and a gRPC plugin band (Okapi bridge, kapi-sat segmenter, remote plugins) feeding it from below. Each stage is a goroutine joined by Part channels, and the whole pipeline runs over many documents in parallel.`)}),(0,y.jsx)(`rect`,{x:120,y:80,width:770,height:210,rx:18,className:`kdx-ghost`}),(0,y.jsx)(`rect`,{x:110,y:88,width:770,height:210,rx:18,className:`kdx-ghost`}),(0,y.jsx)(`rect`,{x:100,y:96,width:770,height:210,rx:18,className:`kdx-channel`,fill:`none`,opacity:.4}),(0,y.jsx)(`text`,{x:862,y:74,textAnchor:`end`,fontSize:9,className:`kdx-note`,children:i(`2eBCLp`,`documents in parallel · MaxConcurrency`)}),(0,y.jsxs)(`g`,{children:[(0,y.jsx)(`rect`,{x:252,y:18,width:124,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,y.jsx)(`text`,{x:314,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:i(`3hrUsB`,`Termbase`)}),(0,y.jsx)(`text`,{x:314,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:i(`4CCC5V`,`term-lookup`)}),(0,y.jsx)(`path`,{d:`M314,56 L314,164`,className:`kdx-link kdx-link--resource`}),(0,y.jsx)(`rect`,{x:454,y:18,width:124,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,y.jsx)(`text`,{x:516,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:i(`1RzDOB`,`Translation Memory`)}),(0,y.jsx)(`text`,{x:516,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:i(`2CdUkF`,`tm-leverage`)}),(0,y.jsx)(`path`,{d:`M516,56 L516,114`,className:`kdx-link kdx-link--resource`})]}),(0,y.jsx)(`text`,{x:60,y:98,textAnchor:`middle`,fontSize:9.5,className:`kdx-cap`,children:i(`3FUGKn`,`Sources`)}),ie.map((e,t)=>{let n=oe(t);return(0,y.jsxs)(`g`,{children:[(0,y.jsx)(`rect`,{x:14,y:n,width:92,height:28,rx:6,className:`kdx-file`}),(0,y.jsx)(`text`,{x:60,y:n+18,textAnchor:`middle`,fontSize:9.5,className:`kdx-file-t`,children:e}),(0,y.jsx)(`path`,{d:`M106,${n+14} L116,${b}`,className:`kdx-thin`}),(0,y.jsx)(g,{path:`M106,${n+14} L116,${b}`,dur:2.2,begin:t*.4,cls:`kdx-dot--io`,r:2.4})]},e)}),(0,y.jsx)(_,{x:116,w:96,role:`io`,title:i(`4ysZnV`,`Reader`),sub:`DataFormat`}),(0,y.jsx)(v,{x1:212,x2:248}),(0,y.jsx)(g,{path:`M212,196 L248,196`,dur:1.5,begin:0,cls:`kdx-dot--io`}),(0,y.jsx)(g,{path:`M212,196 L248,196`,dur:1.5,begin:.75,cls:`kdx-dot--io`}),(0,y.jsx)(_,{x:248,w:132,role:`annotate`,title:i(`a6uDR`,`Annotate`),sub:`segment · terms · NER`}),(0,y.jsx)(v,{x1:380,x2:412}),(0,y.jsx)(`rect`,{x:430,y:114,width:172,height:166,rx:12,className:`kdx-bracket`}),(0,y.jsx)(`text`,{x:516,y:106,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:i(`EqFXa`,`fan-out · N goroutines`)}),(0,y.jsx)(`text`,{x:516,y:296,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:i(`1uyk3d`,`ordered fan-in`)}),re.map(e=>{let t=w(e),n=`M412,${b} L440,${t+C/2}`,r=`M592,${t+C/2} L622,${b}`;return(0,y.jsxs)(`g`,{children:[(0,y.jsx)(`path`,{d:n,className:`kdx-thin kdx-thin--t`}),(0,y.jsx)(`path`,{d:r,className:`kdx-thin kdx-thin--t`}),(0,y.jsx)(`rect`,{x,y:t,width:S,height:C,rx:7,className:`kdx-worker`}),(0,y.jsx)(`rect`,{x,y:t,width:S,height:C,rx:7,className:`kdx-pulse`,style:{animationDelay:`${e*.8}s`}}),(0,y.jsx)(`text`,{x:452,y:t+18,fontSize:10.5,className:`kdx-label`,children:i(`2TRn6`,`AI Translate`)}),(0,y.jsx)(`text`,{x:582,y:t+18,textAnchor:`end`,fontSize:8,className:`kdx-sub kdx-sub--translate`,children:i(`24EeS8`,`goroutine ${e+1}`,{value:e+1})})]},e)}),(0,y.jsx)(g,{path:`M380,${b} L412,${b} L440,${w(0)+C/2} L592,${w(0)+C/2} L622,${b}`,dur:2.6,begin:.2,cls:`kdx-dot--translate`,r:2.6}),(0,y.jsx)(g,{path:`M380,${b} L412,${b} L440,${w(2)+C/2} L592,${w(2)+C/2} L622,${b}`,dur:2.6,begin:1.3,cls:`kdx-dot--translate`,r:2.6}),(0,y.jsx)(v,{x1:622,x2:654}),(0,y.jsx)(_,{x:654,w:96,role:`qa`,title:i(`Dn7vA`,`QA`),sub:`qa · enforce`}),(0,y.jsx)(v,{x1:750,x2:786}),(0,y.jsx)(g,{path:`M750,196 L786,196`,dur:1.5,begin:.4,cls:`kdx-dot--io`}),(0,y.jsx)(g,{path:`M750,196 L786,196`,dur:1.5,begin:1.15,cls:`kdx-dot--io`}),(0,y.jsx)(_,{x:786,w:96,role:`io`,title:i(`3eOTtZ`,`Writer`),sub:`DataFormat`}),(0,y.jsx)(`text`,{x:940,y:98,textAnchor:`middle`,fontSize:9.5,className:`kdx-cap`,children:i(`3RVJNm`,`Targets`)}),ae.map((e,t)=>{let n=se(t);return(0,y.jsxs)(`g`,{children:[(0,y.jsx)(`path`,{d:`M882,${b} L894,${n+14}`,className:`kdx-thin`}),(0,y.jsx)(`rect`,{x:894,y:n,width:92,height:28,rx:6,className:`kdx-file`}),(0,y.jsx)(`text`,{x:940,y:n+18,textAnchor:`middle`,fontSize:9,className:`kdx-file-t`,children:e}),(0,y.jsx)(g,{path:`M882,${b} L894,${n+14}`,dur:2.2,begin:t*.4+.6,cls:`kdx-dot--io`,r:2.4})]},e)}),(0,y.jsx)(`rect`,{x:40,y:360,width:920,height:120,rx:14,className:`kdx-band`}),(0,y.jsx)(`text`,{x:60,y:382,fontSize:9.5,className:`kdx-cap`,children:i(`3OAVSh`,`Plugin system · gRPC subprocess bridge`)}),(0,y.jsx)(`rect`,{x:92,y:400,width:176,height:48,rx:9,className:`kdx-chip`}),(0,y.jsx)(`text`,{x:180,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:i(`3R0qNe`,`Okapi Bridge`)}),(0,y.jsx)(`text`,{x:180,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:i(`4zRMtM`,`Java filters`)}),(0,y.jsx)(`path`,{d:`M180,400 L164,228`,className:`kdx-link kdx-link--plugin`}),(0,y.jsx)(`rect`,{x:300,y:400,width:176,height:48,rx:9,className:`kdx-chip`}),(0,y.jsx)(`text`,{x:388,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:i(`7UZmD`,`kapi-sat`)}),(0,y.jsx)(`text`,{x:388,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:i(`3torYb`,`ML segmentation`)}),(0,y.jsx)(`path`,{d:`M388,400 L314,228`,className:`kdx-link kdx-link--plugin`}),(0,y.jsx)(`rect`,{x:560,y:400,width:200,height:48,rx:9,className:`kdx-chip`}),(0,y.jsx)(`text`,{x:660,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:i(`1JyUjQ`,`Remote / native plugin`)}),(0,y.jsx)(`text`,{x:660,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:i(`entC6`,`custom tool · format`)}),(0,y.jsx)(`path`,{d:`M660,400 L702,228`,className:`kdx-link kdx-link--plugin`})]})})})})}var y,te,ne,b,re,x,S,C,w,ie,ae,oe,se,ce=e((()=>{r(),t(),s(),y=n(),te=1e3,ne=520,b=196,re=[0,1,2,3],x=440,S=152,C=28,w=e=>125+e*38,ie=[`app.json`,`page.html`,`guide.docx`,`strings.xml`],ae=[`app.fr.json`,`app.de.json`,`app.ja.json`],oe=e=>112+e*40,se=e=>152+e*40,ee.__docgenInfo={description:``,methods:[],displayName:`ArchitectureDiagram`,props:{animated:{required:!1,tsType:{name:`boolean`},description:`Animate the flowing Parts and the fan-out pulse. Default true.`,defaultValue:{value:`true`,computed:!1}}}}}));function le({x:e,y:t,text:n}){let r=n.length*5.6+12;return(0,T.jsxs)(`g`,{children:[(0,T.jsx)(`rect`,{x:e-r/2,y:t-9,width:r,height:15,rx:7,className:`kdx-pill`}),(0,T.jsx)(`text`,{x:e,y:t+2,textAnchor:`middle`,fontSize:8.5,className:`kdx-chan`,children:n})]})}function ue({placed:e,arrow:t}){let n=e.length?t===`right`?he:ge:0,r=n+me/2;return(0,T.jsx)(T.Fragment,{children:e.map((i,a)=>{let o=i.x+i.w/2,s=e[a+1];return(0,T.jsxs)(`g`,{children:[(0,T.jsx)(`rect`,{x:i.x,y:n,width:i.w,height:me,rx:9,className:`kdx-box${Se(i.role)}`}),(0,T.jsx)(`text`,{x:o,y:i.sub?r-1:r+4,textAnchor:`middle`,fontSize:12,className:`kdx-label`,children:i.label}),i.sub&&(0,T.jsx)(`text`,{x:o,y:r+13,textAnchor:`middle`,fontSize:9,className:`kdx-sub${Ce(i.role)}`,children:i.sub}),s&&(t===`right`?(0,T.jsx)(`line`,{x1:i.x+i.w,y1:r,x2:s.x-4,y2:r,className:`kdx-channel`,markerEnd:`url(#kdx-arr-r)`}):(0,T.jsx)(`line`,{x1:i.x+i.w-4,y1:r,x2:s.x,y2:r,className:`kdx-channel`,markerStart:`url(#kdx-arr-l)`}))]},`${i.label}-${a}`)})})}function de({forward:e,back:t,hub:n,forwardIndex:r=1,backIndex:a=0,forwardLabel:o,backLabel:s,caption:c,animated:l=!1}){let u=xe(e,E),d=xe(t,E),f=Math.max(u.end,d.end)+E,p=f/2-ve/2,m=f/2,h=u.placed[Math.min(r,u.placed.length-1)],g=d.placed[Math.min(a,d.placed.length-1)],_=h?h.x+h.w/2:m,v=g?g.x+g.w/2:m;return(0,T.jsxs)(`div`,{className:`kdx${l?` kdx--animated`:``}`,children:[(0,T.jsx)(`div`,{className:`kdx-scroll`,children:(0,T.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(f,520),maxWidth:f},children:(0,T.jsxs)(`svg`,{viewBox:`0 0 ${f} 290`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":i(`2ogyVm`,`Round-trip: extract forward, merge back, sharing a translation memory`),children:[(0,T.jsxs)(`defs`,{children:[(0,T.jsx)(`marker`,{id:`kdx-arr-r`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,T.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,T.jsx)(`marker`,{id:`kdx-arr-l`,markerWidth:`7`,markerHeight:`7`,refX:`0.5`,refY:`3`,orient:`auto`,children:(0,T.jsx)(`path`,{d:`M6,0 L0,3 L6,6 Z`,className:`kdx-arrow`})})]}),(0,T.jsx)(`path`,{d:`M${_},104 L${m},${_e}`,className:`kdx-link kdx-link--resource`}),o&&(0,T.jsx)(le,{x:(_+m)/2,y:230/2,text:o}),(0,T.jsx)(`path`,{d:`M${m},180 L${v},${ge}`,className:`kdx-link kdx-link--resource`}),s&&(0,T.jsx)(le,{x:(v+m)/2,y:394/2,text:s}),(0,T.jsx)(ue,{placed:u.placed,arrow:`right`}),(0,T.jsx)(ue,{placed:d.placed,arrow:`left`}),(0,T.jsx)(`rect`,{x:p,y:_e,width:ve,height:ye,rx:10,className:`kdx-hub`}),(0,T.jsx)(`text`,{x:m,y:n.sub?150:157,textAnchor:`middle`,fontSize:12.5,className:`kdx-label`,children:n.label}),n.sub&&(0,T.jsx)(`text`,{x:m,y:166,textAnchor:`middle`,fontSize:9,className:`kdx-sub`,style:{fill:`var(--kdx-resource)`},children:n.sub})]})})}),c&&(0,T.jsx)(`p`,{className:`kdx-caption`,children:c})]})}var T,fe,pe,me,he,ge,_e,ve,ye,E,be,xe,Se,Ce,we=e((()=>{r(),t(),s(),T=n(),fe=44,pe=7.2,me=50,he=54,ge=214,_e=126,ve=150,ye=54,E=36,be=e=>Math.max(84,Math.round(Math.max((e.label??``).length,(e.sub??``).length)*pe)+26),xe=(e,t)=>{let n=t;return{placed:e.map(e=>{let t=be(e),r={...e,x:n,w:t};return n+=t+fe,r}),end:n-fe}},Se=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Ce=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,de.__docgenInfo={description:``,methods:[],displayName:`RoundTripDiagram`,props:{forward:{required:!0,tsType:{name:`Array`,elements:[{name:`PipelineStage`}],raw:`PipelineStage[]`},description:`Top row, left→right (right-pointing arrows).`},back:{required:!0,tsType:{name:`Array`,elements:[{name:`PipelineStage`}],raw:`PipelineStage[]`},description:`Bottom row, displayed left→right with left-pointing (return) arrows.`},hub:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ label: string; sub?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`sub`,value:{name:`string`,required:!1}}]}},description:``},forwardIndex:{required:!1,tsType:{name:`number`},description:"Index in `forward` whose stage links down to the hub. Default 1.",defaultValue:{value:`1`,computed:!1}},backIndex:{required:!1,tsType:{name:`number`},description:"Index in `back` whose stage links up from the hub. Default 0.",defaultValue:{value:`0`,computed:!1}},forwardLabel:{required:!1,tsType:{name:`string`},description:`Label on the forward→hub edge (e.g. "pre-fill").`},backLabel:{required:!1,tsType:{name:`string`},description:`Label on the hub→back edge (e.g. "absorb").`},caption:{required:!1,tsType:{name:`string`},description:``},animated:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));function Te({lanes:e,handoff:t,caption:n}){let r=Math.max(260,...e.map(e=>Math.max(e.title.length*7.6+(e.sub?e.sub.length*ke+24:0)+28,...e.steps.map(e=>e.length*ke+28)))),i=O,a=i+r/2,o=O,s=e.map(e=>{let t=je(e),n={l:e,y:o,h:t};return o+=t+Oe,n}),c=o-Oe+O,l=r+2*O;return(0,D.jsxs)(`div`,{className:`kdx`,children:[(0,D.jsx)(`div`,{className:`kdx-scroll`,children:(0,D.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(l,460),maxWidth:l},children:(0,D.jsxs)(`svg`,{viewBox:`0 0 ${l} ${c}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Concurrent lanes: ${e.map(e=>e.title).join(`, `)}`,children:[(0,D.jsx)(`defs`,{children:(0,D.jsx)(`marker`,{id:`kdx-arrow-dn`,markerWidth:`9`,markerHeight:`9`,refX:`3`,refY:`6`,orient:`auto`,children:(0,D.jsx)(`path`,{d:`M0,0 L6,0 L3,6 Z`,className:`kdx-arrow`})})}),s.map(({l:e,y:n,h:o},c)=>{let l=s[c+1];return(0,D.jsxs)(`g`,{children:[(0,D.jsx)(`rect`,{x:i,y:n,width:r,height:o,rx:10,className:`kdx-box${Ae(e.role)}`}),(0,D.jsx)(`text`,{x:28,y:n+19,fontSize:14,className:`kdx-label`,children:e.title}),e.sub&&(0,D.jsx)(`text`,{x:i+r-12,y:n+19,textAnchor:`end`,fontSize:10.5,className:`kdx-chip-sub`,children:e.sub}),(0,D.jsx)(`line`,{x1:24,y1:n+k-4,x2:i+r-10,y2:n+k-4,className:`kdx-divider`}),e.steps.map((e,t)=>(0,D.jsx)(`text`,{x:28,y:n+k+t*Ee+14,fontSize:11.5,className:`kdx-mono`,xmlSpace:`preserve`,children:e},t)),l&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`line`,{x1:a,y1:n+o,x2:a,y2:l.y-2,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-dn)`}),t&&(0,D.jsxs)(`g`,{children:[(0,D.jsx)(`rect`,{x:a+8,y:(n+o+l.y)/2-9.5,width:t.length*6.6+14,height:18,rx:8,className:`kdx-pill`}),(0,D.jsx)(`text`,{x:a+15,y:(n+o+l.y)/2+3,fontSize:10.5,className:`kdx-chan`,children:t})]})]})]},`${e.title}-${c}`)})]})})}),n&&(0,D.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var D,O,k,Ee,De,Oe,ke,Ae,je,Me=e((()=>{t(),s(),D=n(),O=14,k=28,Ee=19,De=12,Oe=40,ke=6.9,Ae=e=>e&&e!==`tool`?` kdx-box--${e}`:``,je=e=>k+e.steps.length*Ee+De,Te.__docgenInfo={description:``,methods:[],displayName:`LanesDiagram`,props:{lanes:{required:!0,tsType:{name:`Array`,elements:[{name:`LaneThread`}],raw:`LaneThread[]`},description:``},handoff:{required:!1,tsType:{name:`string`},description:`Label on the arrow handing off from one lane to the next.`},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function Ne({actors:e,messages:t,caption:n}){let r=j,i=e.map(e=>{let t=Be(e),n=r+t/2;return r+=t,{...e,cx:n}}),a=r+j,o=e=>M+e*Fe,s=(t.length?o(t.length-1):M)+18,c=s+(n?6:14);return(0,A.jsxs)(`div`,{className:`kdx`,children:[(0,A.jsx)(`div`,{className:`kdx-scroll`,children:(0,A.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(a,520),maxWidth:a},children:(0,A.jsxs)(`svg`,{viewBox:`0 0 ${a} ${c}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Sequence across ${e.map(e=>e.label).join(`, `)}`,children:[(0,A.jsxs)(`defs`,{children:[(0,A.jsx)(`marker`,{id:`kdx-sw-r`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,A.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,A.jsx)(`marker`,{id:`kdx-sw-l`,markerWidth:`7`,markerHeight:`7`,refX:`0.5`,refY:`3`,orient:`auto`,children:(0,A.jsx)(`path`,{d:`M6,0 L0,3 L6,6 Z`,className:`kdx-arrow`})})]}),i.map((e,t)=>{let n=Be(e);return(0,A.jsxs)(`g`,{children:[(0,A.jsx)(`rect`,{x:e.cx-n/2+6,y:j,width:n-12,height:Pe,rx:9,className:`kdx-box${Re(e.role)}`}),(0,A.jsx)(`text`,{x:e.cx,y:e.sub?34:41,textAnchor:`middle`,fontSize:12,className:`kdx-label`,children:e.label}),e.sub&&(0,A.jsx)(`text`,{x:e.cx,y:47,textAnchor:`middle`,fontSize:9,className:`kdx-sub${ze(e.role)}`,children:e.sub}),(0,A.jsx)(`line`,{x1:e.cx,y1:56,x2:e.cx,y2:s,className:`kdx-channel`,opacity:.55})]},`actor-${t}`)}),t.map((e,t)=>{let n=o(t),r=i[Math.min(e.from,i.length-1)],a=i[Math.min(e.to,i.length-1)];if(e.from===e.to)return(0,A.jsxs)(`g`,{children:[(0,A.jsx)(`circle`,{cx:r.cx,cy:n,r:2.6,className:`kdx-node kdx-node--io`}),(0,A.jsx)(`text`,{x:r.cx+12,y:n-3,fontSize:9.5,className:`kdx-note`,children:e.label}),e.detail&&(0,A.jsx)(`text`,{x:r.cx+12,y:n+9,fontSize:9,className:`kdx-chan`,children:e.detail})]},`msg-${t}`);let s=a.cx>r.cx,c=s?r.cx+3:r.cx-3,l=s?a.cx-3:a.cx+3,u=(r.cx+a.cx)/2;return(0,A.jsxs)(`g`,{children:[(0,A.jsx)(`line`,{x1:c,y1:n,x2:l,y2:n,className:`kdx-channel`,markerEnd:s?`url(#kdx-sw-r)`:`url(#kdx-sw-l)`}),(0,A.jsx)(`text`,{x:u,y:n-5,textAnchor:`middle`,fontSize:9.5,className:`kdx-chan`,children:e.label}),e.detail&&(0,A.jsx)(`text`,{x:u,y:n+11,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:e.detail})]},`msg-${t}`)})]})})}),n&&(0,A.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var A,j,Pe,M,Fe,Ie,Le,Re,ze,Be,Ve=e((()=>{t(),s(),A=n(),j=16,Pe=40,M=56,Fe=38,Ie=7.2,Le=150,Re=e=>e&&e!==`tool`?` kdx-box--${e}`:``,ze=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,Be=e=>Math.max(Le,Math.round(Math.max(e.label.length,(e.sub??``).length)*Ie)+28),Ne.__docgenInfo={description:``,methods:[],displayName:`SwimlaneDiagram`,props:{actors:{required:!0,tsType:{name:`Array`,elements:[{name:`SwimlaneActor`}],raw:`SwimlaneActor[]`},description:``},messages:{required:!0,tsType:{name:`Array`,elements:[{name:`SwimlaneMessage`}],raw:`SwimlaneMessage[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function He({rungs:e,caption:t}){let n=e.length,r=Math.max(34,...e.map(e=>Math.round(e.grade.length*qe)+14)),i=Math.max(60,...e.map(e=>Math.round(Math.max(e.name.length*Ge,(e.gloss??``).length*Ke)))),a=I+r+10+i+12,o=e=>P+(n-1-e)*Ue,s=e=>P+e*(a+We),c=e=>o(e)+F/2,l=P+n*a+(n-1)*We+P,u=P+(n-1)*Ue+F+P;return(0,N.jsxs)(`div`,{className:`kdx`,children:[(0,N.jsx)(`div`,{className:`kdx-scroll`,children:(0,N.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(l,460),maxWidth:l},children:(0,N.jsxs)(`svg`,{viewBox:`0 0 ${l} ${u}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Axis ladder: ${e.map(e=>`${e.grade} ${e.name}`).join(` then `)}`,children:[(0,N.jsx)(`defs`,{children:(0,N.jsx)(`marker`,{id:`kdx-arrow-lad`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,N.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})})}),e.map((t,n)=>{let i=s(n),l=o(n),u=c(n),d=e[n+1],f=i+I+r/2,p=i+I+r+10;return(0,N.jsxs)(`g`,{children:[d&&(0,N.jsx)(`line`,{x1:i+a,y1:u,x2:s(n+1)-4,y2:c(n+1),className:`kdx-channel`,markerEnd:`url(#kdx-arrow-lad)`}),(0,N.jsx)(`rect`,{x:i,y:l,width:a,height:F,rx:9,className:`kdx-box`}),(0,N.jsx)(`rect`,{x:i+I,y:l+(F-20)/2,width:r,height:20,rx:6,className:`kdx-box kdx-box--io`}),(0,N.jsx)(`text`,{x:f,y:u+3.5,textAnchor:`middle`,fontSize:11,className:`kdx-sub kdx-sub--io`,children:t.grade}),(0,N.jsx)(`text`,{x:p,y:t.gloss?l+20:u+4,fontSize:12,className:`kdx-label`,children:t.name}),t.gloss&&(0,N.jsx)(`text`,{x:p,y:l+34,fontSize:9.5,className:`kdx-note`,children:t.gloss})]},`${t.grade}-${n}`)})]})})}),t&&(0,N.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var N,P,F,Ue,We,Ge,Ke,qe,I,Je=e((()=>{t(),s(),N=n(),P=14,F=46,Ue=28,We=24,Ge=7,Ke=6,qe=7.4,I=10,He.__docgenInfo={description:``,methods:[],displayName:`AxisLadderDiagram`,props:{rungs:{required:!0,tsType:{name:`Array`,elements:[{name:`AxisRung`}],raw:`AxisRung[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function Ye({families:e,caption:t}){let n=e.map(e=>Math.max(120,Math.round(e.name.length*$e)+24,Math.round(e.tagline.length*et)+24,...e.axes.map(e=>Math.round(e.label.length*tt)+14+ot(e.range)+24))),r=R,i=e.map((e,t)=>{let i={f:e,x:r,w:n[t],role:rt[t%rt.length]};return r+=n[t]+Xe,i}),a=r-Xe+R,o=e=>Ze+e.axes.length*z+Qe,s=Math.max(...e.map(o))+2*R;return(0,L.jsxs)(`div`,{className:`kdx`,children:[(0,L.jsx)(`div`,{className:`kdx-scroll`,children:(0,L.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(a,520),maxWidth:a},children:(0,L.jsx)(`svg`,{viewBox:`0 0 ${a} ${s}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Axis families: ${e.map(e=>e.name).join(`, `)}`,children:i.map(({f:e,x:t,w:n,role:r},i)=>(0,L.jsxs)(`g`,{children:[(0,L.jsx)(`rect`,{x:t,y:R,width:n,height:o(e),rx:10,className:`kdx-box${it(r)}`}),(0,L.jsx)(`text`,{x:t+12,y:34,fontSize:13.5,className:`kdx-label`,style:{fill:`var(--kdx-${r})`},children:e.name}),(0,L.jsx)(`text`,{x:t+12,y:47,fontSize:9.5,className:`kdx-note`,children:e.tagline}),(0,L.jsx)(`line`,{x1:t+10,y1:52,x2:t+n-10,y2:52,className:`kdx-divider`}),e.axes.map((e,i)=>{let a=54+i*z+z/2,o=ot(e.range),s=t+n-12-o;return(0,L.jsxs)(`g`,{children:[(0,L.jsx)(`text`,{x:t+14,y:a+3.5,fontSize:11,className:`kdx-label`,children:e.label}),(0,L.jsx)(`rect`,{x:s,y:a-10,width:o,height:20,rx:6,className:`kdx-box${it(r)}`}),(0,L.jsx)(`text`,{x:s+o/2,y:a+3,textAnchor:`middle`,fontSize:9.5,className:`kdx-sub${at(r)}`,children:e.range})]},`${e.label}-${i}`)})]},`${e.name}-${i}`))})})}),t&&(0,L.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var L,R,Xe,Ze,z,Qe,$e,et,tt,nt,rt,it,at,ot,st=e((()=>{t(),s(),L=n(),R=14,Xe=18,Ze=40,z=26,Qe=12,$e=7.6,et=6,tt=7,nt=6.6,rt=[`io`,`qa`,`annotate`,`translate`],it=e=>` kdx-box--${e}`,at=e=>` kdx-sub--${e}`,ot=e=>Math.round(e.length*nt)+14,Ye.__docgenInfo={description:``,methods:[],displayName:`AxisFamiliesDiagram`,props:{families:{required:!0,tsType:{name:`Array`,elements:[{name:`AxisFamily`}],raw:`AxisFamily[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function ct({steps:e,caption:t}){let n=e.length,r=e.some(e=>e.sub)?42:32,i=e=>Math.max(72,Math.round(Math.max(e.label.length*ut,(e.sub??``).length*dt))+24),a=Math.max(...e.map(i)),o=Math.max(120,(a+40)*n/(2*Math.PI)),s=o+a/2+lt,c=2*s,l=2*s,u=2*Math.PI/n,d=e=>-Math.PI/2+e*u,f=e=>[s+o*Math.cos(e),s+o*Math.sin(e)],p=(a/2+6)/o;return(0,B.jsxs)(`div`,{className:`kdx`,children:[(0,B.jsx)(`div`,{className:`kdx-scroll`,children:(0,B.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(c,320),maxWidth:Math.min(c,440)},children:(0,B.jsxs)(`svg`,{viewBox:`0 0 ${c} ${l}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Cycle: ${e.map(e=>e.label).join(` then `)}, then back to start`,children:[(0,B.jsx)(`defs`,{children:(0,B.jsx)(`marker`,{id:`kdx-arrow-cyc`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,B.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})})}),e.map((e,t)=>{let[n,r]=f(d(t)+p),[i,a]=f(d(t)+u-p);return(0,B.jsx)(`path`,{d:`M${n},${r} A ${o} ${o} 0 0 1 ${i},${a}`,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-cyc)`},`arc-${t}`)}),e.map((e,t)=>{let[n,a]=f(d(t)),o=i(e);return(0,B.jsxs)(`g`,{children:[(0,B.jsx)(`rect`,{x:n-o/2,y:a-r/2,width:o,height:r,rx:9,className:`kdx-box`}),(0,B.jsx)(`text`,{x:n,y:e.sub?a-1:a+4,textAnchor:`middle`,fontSize:11.5,className:`kdx-label`,children:e.label}),e.sub&&(0,B.jsx)(`text`,{x:n,y:a+11,textAnchor:`middle`,fontSize:8.5,className:`kdx-note`,children:e.sub})]},`${e.label}-${t}`)})]})})}),t&&(0,B.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var B,lt,ut,dt,ft=e((()=>{t(),s(),B=n(),lt=16,ut=7,dt=6,ct.__docgenInfo={description:``,methods:[],displayName:`CycleDiagram`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`CycleStep`}],raw:`CycleStep[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})),V,pt,H,U,W,G,K,q,J,Y,X,Z,Q,$,mt;e((()=>{r(),ce(),h(),o(),we(),d(),Me(),Ve(),c(),Je(),st(),ft(),m(),V=n(),pt={title:`Diagrams/Components`,decorators:[u],parameters:{layout:`fullscreen`}},H={name:`ArchitectureDiagram (hero)`,render:()=>(0,V.jsx)(ee,{animated:!0})},U={name:`PipelineDiagram (linear)`,render:()=>(0,V.jsx)(l,{stages:[{label:`RawDocument`},{label:`Reader`,sub:`DataFormat`,role:`io`},{label:`segmentation`,role:`annotate`},{label:`translate`,role:`translate`},{label:`qa`,role:`qa`},{label:`Writer`,sub:`DataFormat`,role:`io`}]})},W={name:`PipelineDiagram (fan-out lanes)`,render:()=>(0,V.jsx)(l,{caption:i(`gibAJ`,`A stage can fan out into parallel lanes (workers / branches).`),stages:[{label:`Reader`,sub:`DataFormat`,role:`io`},{lanes:[{label:`translate`,sub:`fr`},{label:`translate`,sub:`de`},{label:`translate`,sub:`ja`}],parallelLabel:`fan-out · N goroutines`},{label:`Writer`,sub:`DataFormat`,role:`io`}]})},G={name:`StreamDiagram (Part sequence)`,render:()=>(0,V.jsx)(p,{title:i(`xfI9p`,`Read(ctx)`),items:[{kind:`PartLayerStart`,detail:`format = "json"`,role:`layer`},{kind:`PartBlock`,detail:`"title"`,depth:1,role:`block`},{kind:`PartLayerStart`,detail:`embedded "html"`,depth:1,role:`layer`,note:`child layer`},{kind:`PartBlock`,detail:`"<b>Hello</b>"`,depth:2,role:`block`},{kind:`PartLayerEnd`,depth:1,role:`end`},{kind:`PartLayerEnd`,role:`end`}]})},K={name:`RoundTripDiagram (extract / merge)`,render:()=>(0,V.jsx)(de,{forward:[{label:`authored source`,role:`io`},{label:`extract`},{label:`XLIFF / PO`},{label:`translator`}],back:[{label:`kapi merge`,role:`io`},{label:`translated XLIFF / PO`},{label:`returned`}],hub:{label:`project TM`,sub:`pre-fill · absorb`},forwardLabel:`pre-fill`,backLabel:`absorb`})},q={name:`PhaseFlow (vertical, looping node)`,render:()=>(0,V.jsx)(a,{nodes:[{label:`Your source code`},{label:`i18n/`,sub:`KLF archive`,edge:`kapi-react extract`,role:`io`,loop:[`kapi translate / pseudo / qa`,`accumulate locales in place`]},{label:`public/translations/{locale}.json`,edge:`kapi-react compile`,role:`translate`}]})},J={name:`LanesDiagram (thread handoff)`,render:()=>(0,V.jsx)(Te,{handoff:`eventQueue`,lanes:[{title:`Reader Thread`,sub:`filterPool, bounded`,role:`io`,steps:[`read source bytes`,`run the Okapi filter`,`emit events`]},{title:`Writer Thread`,sub:`writerPool, unbounded`,role:`translate`,steps:[`receive events`,`re-assemble the skeleton`,`write target bytes`]}]})},Y={name:`SwimlaneDiagram (message passing)`,render:()=>(0,V.jsx)(Ne,{actors:[{label:`Developer`,sub:`kapi CLI`,role:`io`},{label:`Bowrain Server`,role:`translate`},{label:`Translator`,role:`qa`}],messages:[{from:0,to:1,label:`kapi push`},{from:1,to:1,label:`translate / QA`},{from:1,to:2,label:`assign`},{from:2,to:1,label:`review, approve`},{from:0,to:1,label:`kapi pull`}]})},X={name:`RedactionDiagram (marker black-out + category chips)`,render:()=>(0,V.jsx)(f,{original:`Email Sarah Chen the Project Halcyon launch date.`,redact:[{text:`Sarah Chen`,label:`Person`},`Project Halcyon`],translated:`Envoyez à Sarah Chen la date de lancement de Project Halcyon.`,caption:i(`1c36tr`,`A span is either blacked out with a marker (sensitive) or shown as a labeled category chip.`)})},Z={name:`AxisLadderDiagram (ascending rungs)`,render:()=>(0,V.jsx)(He,{rungs:[{grade:`G0`,name:`opaque`,gloss:`bytes only`},{grade:`G1`,name:`metadata`,gloss:`title, author, page count`},{grade:`G2`,name:`linear text`,gloss:`reading-order characters`},{grade:`G3`,name:`roles`,gloss:`headings, tables, reading order`},{grade:`G4`,name:`geometry`,gloss:`page coords, bounding boxes`}],caption:i(`15blyI`,`Structure & Geometry — how much document structure we recover, rung by rung.`)})},Q={name:`AxisFamiliesDiagram (axes grouped by family)`,render:()=>(0,V.jsx)(Ye,{families:[{name:`Comprehension`,tagline:`how deeply we read it`,axes:[{label:`Engine`,range:`L0–L4`},{label:`Vocabulary`,range:`V0–V3`},{label:`Structure & Geometry`,range:`G0–G4`}]},{name:`Assurance`,tagline:`how we prove it`,axes:[{label:`Corpus`,range:`C0–C3`},{label:`Security`,range:`S0–S4`}]},{name:`Enablement`,tagline:`how we work with it`,axes:[{label:`Knowledge`,range:`K0–K3`},{label:`Editor`,range:`E0–E4`}]}],caption:i(`1xEDgu`,`The maturity axes group by the question they answer.`)})},$={name:`CycleDiagram (closed runbook loop)`,render:()=>(0,V.jsx)(ct,{steps:[{label:`Reconcile`,sub:`ledger vs reality`},{label:`Compute due`,sub:`signals + watermarks`},{label:`Rank & budget`},{label:`Execute`,sub:`with evidence`},{label:`Record`,sub:`ledger commit`},{label:`Reflect`,sub:`learnings`}],caption:i(`F6jSV`,`The format-ops runbook is a self-feeding loop; each run records what it consumed.`)})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "ArchitectureDiagram (hero)",
  render: () => <ArchitectureDiagram animated />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "PipelineDiagram (linear)",
  render: () => <PipelineDiagram stages={[{
    label: "RawDocument"
  }, {
    label: "Reader",
    sub: "DataFormat",
    role: "io"
  }, {
    label: "segmentation",
    role: "annotate"
  }, {
    label: "translate",
    role: "translate"
  }, {
    label: "qa",
    role: "qa"
  }, {
    label: "Writer",
    sub: "DataFormat",
    role: "io"
  }]} />
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "PipelineDiagram (fan-out lanes)",
  render: () => <PipelineDiagram caption="A stage can fan out into parallel lanes (workers / branches)." stages={[{
    label: "Reader",
    sub: "DataFormat",
    role: "io"
  }, {
    lanes: [{
      label: "translate",
      sub: "fr"
    }, {
      label: "translate",
      sub: "de"
    }, {
      label: "translate",
      sub: "ja"
    }],
    parallelLabel: "fan-out · N goroutines"
  }, {
    label: "Writer",
    sub: "DataFormat",
    role: "io"
  }]} />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "StreamDiagram (Part sequence)",
  render: () => <StreamDiagram title="Read(ctx)" items={[{
    kind: "PartLayerStart",
    detail: 'format = "json"',
    role: "layer"
  }, {
    kind: "PartBlock",
    detail: '"title"',
    depth: 1,
    role: "block"
  }, {
    kind: "PartLayerStart",
    detail: 'embedded "html"',
    depth: 1,
    role: "layer",
    note: "child layer"
  }, {
    kind: "PartBlock",
    detail: '"<b>Hello</b>"',
    depth: 2,
    role: "block"
  }, {
    kind: "PartLayerEnd",
    depth: 1,
    role: "end"
  }, {
    kind: "PartLayerEnd",
    role: "end"
  }]} />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: "RoundTripDiagram (extract / merge)",
  render: () => <RoundTripDiagram forward={[{
    label: "authored source",
    role: "io"
  }, {
    label: "extract"
  }, {
    label: "XLIFF / PO"
  }, {
    label: "translator"
  }]} back={[{
    label: "kapi merge",
    role: "io"
  }, {
    label: "translated XLIFF / PO"
  }, {
    label: "returned"
  }]} hub={{
    label: "project TM",
    sub: "pre-fill · absorb"
  }} forwardLabel="pre-fill" backLabel="absorb" />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "PhaseFlow (vertical, looping node)",
  render: () => <PhaseFlow nodes={[{
    label: "Your source code"
  }, {
    label: "i18n/",
    sub: "KLF archive",
    edge: "kapi-react extract",
    role: "io",
    loop: ["kapi translate / pseudo / qa", "accumulate locales in place"]
  }, {
    label: "public/translations/{locale}.json",
    edge: "kapi-react compile",
    role: "translate"
  }]} />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "LanesDiagram (thread handoff)",
  render: () => <LanesDiagram handoff="eventQueue" lanes={[{
    title: "Reader Thread",
    sub: "filterPool, bounded",
    role: "io",
    steps: ["read source bytes", "run the Okapi filter", "emit events"]
  }, {
    title: "Writer Thread",
    sub: "writerPool, unbounded",
    role: "translate",
    steps: ["receive events", "re-assemble the skeleton", "write target bytes"]
  }]} />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "SwimlaneDiagram (message passing)",
  render: () => <SwimlaneDiagram actors={[{
    label: "Developer",
    sub: "kapi CLI",
    role: "io"
  }, {
    label: "Bowrain Server",
    role: "translate"
  }, {
    label: "Translator",
    role: "qa"
  }]} messages={[{
    from: 0,
    to: 1,
    label: "kapi push"
  }, {
    from: 1,
    to: 1,
    label: "translate / QA"
  }, {
    from: 1,
    to: 2,
    label: "assign"
  }, {
    from: 2,
    to: 1,
    label: "review, approve"
  }, {
    from: 0,
    to: 1,
    label: "kapi pull"
  }]} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: "RedactionDiagram (marker black-out + category chips)",
  render: () => <RedactionDiagram original="Email Sarah Chen the Project Halcyon launch date." redact={[{
    text: "Sarah Chen",
    label: "Person"
  }, "Project Halcyon"]} translated="Envoyez à Sarah Chen la date de lancement de Project Halcyon." caption="A span is either blacked out with a marker (sensitive) or shown as a labeled category chip." />
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "AxisLadderDiagram (ascending rungs)",
  render: () => <AxisLadderDiagram rungs={[{
    grade: "G0",
    name: "opaque",
    gloss: "bytes only"
  }, {
    grade: "G1",
    name: "metadata",
    gloss: "title, author, page count"
  }, {
    grade: "G2",
    name: "linear text",
    gloss: "reading-order characters"
  }, {
    grade: "G3",
    name: "roles",
    gloss: "headings, tables, reading order"
  }, {
    grade: "G4",
    name: "geometry",
    gloss: "page coords, bounding boxes"
  }]} caption="Structure & Geometry — how much document structure we recover, rung by rung." />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "AxisFamiliesDiagram (axes grouped by family)",
  render: () => <AxisFamiliesDiagram families={[{
    name: "Comprehension",
    tagline: "how deeply we read it",
    axes: [{
      label: "Engine",
      range: "L0–L4"
    }, {
      label: "Vocabulary",
      range: "V0–V3"
    }, {
      label: "Structure & Geometry",
      range: "G0–G4"
    }]
  }, {
    name: "Assurance",
    tagline: "how we prove it",
    axes: [{
      label: "Corpus",
      range: "C0–C3"
    }, {
      label: "Security",
      range: "S0–S4"
    }]
  }, {
    name: "Enablement",
    tagline: "how we work with it",
    axes: [{
      label: "Knowledge",
      range: "K0–K3"
    }, {
      label: "Editor",
      range: "E0–E4"
    }]
  }]} caption="The maturity axes group by the question they answer." />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "CycleDiagram (closed runbook loop)",
  render: () => <CycleDiagram steps={[{
    label: "Reconcile",
    sub: "ledger vs reality"
  }, {
    label: "Compute due",
    sub: "signals + watermarks"
  }, {
    label: "Rank & budget"
  }, {
    label: "Execute",
    sub: "with evidence"
  }, {
    label: "Record",
    sub: "ledger commit"
  }, {
    label: "Reflect",
    sub: "learnings"
  }]} caption="The format-ops runbook is a self-feeding loop; each run records what it consumed." />
}`,...$.parameters?.docs?.source}}},mt=[`Architecture`,`Pipeline`,`PipelineFanOut`,`Stream`,`RoundTrip`,`Phases`,`Lanes`,`Swimlane`,`Redaction`,`AxisLadder`,`AxisFamilies`,`Cycle`]}))();export{H as Architecture,Q as AxisFamilies,Z as AxisLadder,$ as Cycle,J as Lanes,q as Phases,U as Pipeline,W as PipelineFanOut,X as Redaction,K as RoundTrip,G as Stream,Y as Swimlane,mt as __namedExportsOrder,pt as default};