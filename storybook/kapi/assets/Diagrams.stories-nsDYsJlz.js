import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{r,t as i}from"./runtime-D9E4JuzJ.js";import{n as a,t as o}from"./storyEnv-H22VkQbF.js";import{a as s,c,i as l,l as u,n as d,o as f,r as p,s as m,t as ee}from"./RedactionDiagram-BdcKRzQg.js";function h({path:e,dur:t,begin:n,cls:r,r:i=3}){return(0,v.jsxs)(`circle`,{r:i,className:`kdx-dot ${r}`,children:[(0,v.jsx)(`animateMotion`,{dur:`${t}s`,begin:`${n}s`,repeatCount:`indefinite`,path:e}),(0,v.jsx)(`animate`,{attributeName:`opacity`,values:`0;1;1;0`,keyTimes:`0;0.12;0.85;1`,dur:`${t}s`,begin:`${n}s`,repeatCount:`indefinite`})]})}function g({x:e,w:t,role:n,title:r,sub:i}){let a=e+t/2;return(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`rect`,{x:e,y:164,width:t,height:64,rx:10,className:`kdx-box kdx-box--${n}`}),(0,v.jsx)(`text`,{x:a,y:192,textAnchor:`middle`,fontSize:13.5,className:`kdx-label`,children:r}),(0,v.jsx)(`text`,{x:a,y:210,textAnchor:`middle`,fontSize:9.5,className:`kdx-sub kdx-sub--${n}`,children:i})]})}function _({x1:e,x2:t}){return(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`line`,{x1:e,y1:y,x2:t,y2:y,className:`kdx-channel`}),(0,v.jsx)(`text`,{x:(e+t)/2,y:y-8,textAnchor:`middle`,fontSize:7.5,className:`kdx-chan`,children:i(`2Y2toT16fSw`,`chan`)})]})}function te({animated:e=!0}){return(0,v.jsx)(`div`,{className:`kdx${e?` kdx--animated`:``}`,children:(0,v.jsx)(`div`,{className:`kdx-scroll`,children:(0,v.jsx)(`div`,{className:`kdx-canvas`,style:{maxWidth:960},children:(0,v.jsxs)(`svg`,{viewBox:`0 0 ${ne} ${re}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-labelledby":`kdx-arch-title kdx-arch-desc`,children:[(0,v.jsx)(`title`,{id:`kdx-arch-title`,children:i(`fY61jCPxsjO`,`neokapi processing architecture`)}),(0,v.jsx)(`desc`,{id:`kdx-arch-desc`,children:i(`6T5xuL4xBOG`,`A streaming pipeline: a format reader at the left edge and a writer at the right that sinks to a file (round-trip) or a content store (overlays); a serial chain of annotate, translate and QA tools in the middle, with the translate stage fanning out across parallel goroutines; content-memory, terms and a translation provider (LLM or MT) feeding it from above; and a gRPC plugin band (Okapi bridge, tier-3 segmenter/media/OCR plugins, remote plugins) feeding it from below. Each stage is a goroutine joined by Part channels, and the whole pipeline runs over many documents in parallel.`)}),(0,v.jsx)(`rect`,{x:120,y:80,width:770,height:210,rx:18,className:`kdx-ghost`}),(0,v.jsx)(`rect`,{x:110,y:88,width:770,height:210,rx:18,className:`kdx-ghost`}),(0,v.jsx)(`rect`,{x:100,y:96,width:770,height:210,rx:18,className:`kdx-channel`,fill:`none`,opacity:.4}),(0,v.jsx)(`text`,{x:862,y:74,textAnchor:`end`,fontSize:9,className:`kdx-note`,children:i(`4c8lsKwbomK`,`documents in parallel · MaxConcurrency`)}),(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`rect`,{x:252,y:18,width:124,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,v.jsx)(`text`,{x:314,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:i(`filPqt6wNVT`,`Terms`)}),(0,v.jsx)(`text`,{x:314,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:i(`awT8zLf0NgV`,`term-lookup`)}),(0,v.jsx)(`path`,{d:`M314,56 L314,164`,className:`kdx-link kdx-link--resource`}),(0,v.jsx)(`rect`,{x:454,y:18,width:124,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,v.jsx)(`text`,{x:516,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:i(`9YR50ctORII`,`Content Memory`)}),(0,v.jsx)(`text`,{x:516,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:i(`1QxllqrtZ3p`,`recycle`)}),(0,v.jsx)(`path`,{d:`M516,56 L516,114`,className:`kdx-link kdx-link--resource`}),(0,v.jsx)(`rect`,{x:618,y:18,width:132,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,v.jsx)(`text`,{x:684,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:i(`juiD0aESFbX`,`Provider`)}),(0,v.jsx)(`text`,{x:684,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:i(`8XWp9vbNa8T`,`LLM or MT`)}),(0,v.jsx)(`path`,{d:`M684,56 L620,116`,className:`kdx-link kdx-link--resource`})]}),(0,v.jsx)(`text`,{x:60,y:98,textAnchor:`middle`,fontSize:9.5,className:`kdx-cap`,children:i(`bSFPNE33huo`,`Sources`)}),(0,v.jsx)(`text`,{x:111,y:252,textAnchor:`middle`,fontSize:8,className:`kdx-note`,children:i(`s60OYC3RXR`,`source binding · file`)}),se.map((e,t)=>{let n=ce(t);return(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`rect`,{x:14,y:n,width:92,height:28,rx:6,className:`kdx-file`}),(0,v.jsx)(`text`,{x:60,y:n+18,textAnchor:`middle`,fontSize:9.5,className:`kdx-file-t`,children:e}),(0,v.jsx)(`path`,{d:`M106,${n+14} L116,${y}`,className:`kdx-thin`}),(0,v.jsx)(h,{path:`M106,${n+14} L116,${y}`,dur:2.2,begin:t*.4,cls:`kdx-dot--io`,r:2.4})]},e)}),(0,v.jsx)(g,{x:116,w:96,role:`io`,title:i(`6ACbqDe4wLY`,`Reader`),sub:`DataFormat`}),(0,v.jsx)(_,{x1:212,x2:248}),(0,v.jsx)(h,{path:`M212,196 L248,196`,dur:1.5,begin:0,cls:`kdx-dot--io`}),(0,v.jsx)(h,{path:`M212,196 L248,196`,dur:1.5,begin:.75,cls:`kdx-dot--io`}),(0,v.jsx)(g,{x:248,w:132,role:`annotate`,title:i(`eejzKyzCTDX`,`Annotate`),sub:`segment · terms · NER`}),(0,v.jsx)(_,{x1:380,x2:412}),(0,v.jsx)(`rect`,{x:430,y:114,width:172,height:166,rx:12,className:`kdx-bracket`}),(0,v.jsx)(`text`,{x:516,y:106,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:i(`bVScTHjtG7A`,`fan-out · N goroutines`)}),(0,v.jsx)(`text`,{x:516,y:296,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:i(`knbHHXtZiDi`,`ordered fan-in`)}),ie.map(e=>{let t=x(e),n=`M412,${y} L440,${t+b/2}`,r=`M592,${t+b/2} L622,${y}`;return(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`path`,{d:n,className:`kdx-thin kdx-thin--t`}),(0,v.jsx)(`path`,{d:r,className:`kdx-thin kdx-thin--t`}),(0,v.jsx)(`rect`,{x:ae,y:t,width:oe,height:b,rx:7,className:`kdx-worker`}),(0,v.jsx)(`rect`,{x:ae,y:t,width:oe,height:b,rx:7,className:`kdx-pulse`,style:{animationDelay:`${e*.8}s`}}),(0,v.jsx)(`text`,{x:452,y:t+18,fontSize:10.5,className:`kdx-label`,children:i(`9FooG3EmV4M`,`Translate`)}),(0,v.jsx)(`text`,{x:582,y:t+18,textAnchor:`end`,fontSize:8,className:`kdx-sub kdx-sub--translate`,children:i(`bHGTgrExB3r`,`goroutine ${e+1}`,{value:e+1})})]},e)}),(0,v.jsx)(h,{path:`M380,${y} L412,${y} L440,${x(0)+b/2} L592,${x(0)+b/2} L622,${y}`,dur:2.6,begin:.2,cls:`kdx-dot--translate`,r:2.6}),(0,v.jsx)(h,{path:`M380,${y} L412,${y} L440,${x(2)+b/2} L592,${x(2)+b/2} L622,${y}`,dur:2.6,begin:1.3,cls:`kdx-dot--translate`,r:2.6}),(0,v.jsx)(_,{x1:622,x2:654}),(0,v.jsx)(g,{x:654,w:96,role:`qa`,title:i(`h2N0kGTNmG3`,`QA`),sub:`qa · enforce`}),(0,v.jsx)(_,{x1:750,x2:786}),(0,v.jsx)(h,{path:`M750,196 L786,196`,dur:1.5,begin:.4,cls:`kdx-dot--io`}),(0,v.jsx)(h,{path:`M750,196 L786,196`,dur:1.5,begin:1.15,cls:`kdx-dot--io`}),(0,v.jsx)(g,{x:786,w:96,role:`io`,title:i(`Y1JC5S0T1M`,`Writer`),sub:`DataFormat`}),(0,v.jsx)(`text`,{x:940,y:98,textAnchor:`middle`,fontSize:9.5,className:`kdx-cap`,children:i(`c0q8wQbjz5p`,`Sink`)}),(0,v.jsx)(`text`,{x:888,y:262,textAnchor:`middle`,fontSize:8,className:`kdx-note`,children:i(`5LpkqCgeTIN`,`sink binding · file or store`)}),(0,v.jsx)(`path`,{d:`M882,${y} L894,175`,className:`kdx-thin`}),(0,v.jsx)(h,{path:`M882,${y} L894,175`,dur:2.2,begin:.6,cls:`kdx-dot--io`,r:2.4}),(0,v.jsx)(`rect`,{x:894,y:158,width:92,height:34,rx:7,className:`kdx-file`}),(0,v.jsx)(`text`,{x:940,y:174,textAnchor:`middle`,fontSize:11,className:`kdx-file-t`,children:i(`6keU5QTDUXA`,`file`)}),(0,v.jsx)(`text`,{x:940,y:185,textAnchor:`middle`,fontSize:7.5,className:`kdx-note`,children:i(`7NzrmNTfQbC`,`round-trip`)}),(0,v.jsx)(`path`,{d:`M882,${y} L894,217`,className:`kdx-thin`}),(0,v.jsx)(h,{path:`M882,${y} L894,217`,dur:2.2,begin:1.2,cls:`kdx-dot--io`,r:2.4}),(0,v.jsx)(`rect`,{x:894,y:200,width:92,height:34,rx:7,className:`kdx-chip kdx-chip--resource`}),(0,v.jsx)(`text`,{x:940,y:216,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:i(`2LW39EVnpyn`,`store`)}),(0,v.jsx)(`text`,{x:940,y:227,textAnchor:`middle`,fontSize:7.5,className:`kdx-chip-sub`,children:i(`81vQ29mPavb`,`overlays`)}),(0,v.jsx)(`rect`,{x:40,y:360,width:920,height:120,rx:14,className:`kdx-band`}),(0,v.jsx)(`text`,{x:60,y:382,fontSize:9.5,className:`kdx-cap`,children:i(`aHNNDJpStjd`,`Plugin system · gRPC subprocess bridge`)}),(0,v.jsx)(`rect`,{x:92,y:400,width:176,height:48,rx:9,className:`kdx-chip`}),(0,v.jsx)(`text`,{x:180,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:i(`s4rJ3YsKB1`,`Okapi Bridge`)}),(0,v.jsx)(`text`,{x:180,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:i(`g2EPoUWlyjB`,`Java filters`)}),(0,v.jsx)(`path`,{d:`M180,400 L164,228`,className:`kdx-link kdx-link--plugin`}),(0,v.jsx)(`rect`,{x:300,y:400,width:176,height:48,rx:9,className:`kdx-chip`}),(0,v.jsx)(`text`,{x:388,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:i(`bXQ9Nn60fti`,`Tier-3 plugins`)}),(0,v.jsx)(`text`,{x:388,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:i(`alm2LqYV5Om`,`segmenter · media · OCR`)}),(0,v.jsx)(`path`,{d:`M388,400 L314,228`,className:`kdx-link kdx-link--plugin`}),(0,v.jsx)(`rect`,{x:560,y:400,width:200,height:48,rx:9,className:`kdx-chip`}),(0,v.jsx)(`text`,{x:660,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:i(`9eL11530bwp`,`Remote / native plugin`)}),(0,v.jsx)(`text`,{x:660,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:i(`8IZj14wQGSn`,`custom tool · format`)}),(0,v.jsx)(`path`,{d:`M660,400 L702,228`,className:`kdx-link kdx-link--plugin`})]})})})})}var v,ne,re,y,ie,ae,oe,b,x,se,ce,le=e((()=>{r(),t(),u(),v=n(),ne=1e3,re=520,y=196,ie=[0,1,2,3],ae=440,oe=152,b=28,x=e=>125+e*38,se=[`app.json`,`page.html`,`guide.docx`,`strings.xml`],ce=e=>112+e*40,te.__docgenInfo={description:``,methods:[],displayName:`ArchitectureDiagram`,props:{animated:{required:!1,tsType:{name:`boolean`},description:`Animate the flowing Parts and the fan-out pulse. Default true.`,defaultValue:{value:`true`,computed:!1}}}}}));function ue({x:e,y:t,text:n}){let r=n.length*5.6+12;return(0,S.jsxs)(`g`,{children:[(0,S.jsx)(`rect`,{x:e-r/2,y:t-9,width:r,height:15,rx:7,className:`kdx-pill`}),(0,S.jsx)(`text`,{x:e,y:t+2,textAnchor:`middle`,fontSize:8.5,className:`kdx-chan`,children:n})]})}function de({placed:e,arrow:t}){let n=e.length?t===`right`?ge:_e:0,r=n+he/2;return(0,S.jsx)(S.Fragment,{children:e.map((i,a)=>{let o=i.x+i.w/2,s=e[a+1];return(0,S.jsxs)(`g`,{children:[(0,S.jsx)(`rect`,{x:i.x,y:n,width:i.w,height:he,rx:9,className:`kdx-box${we(i.role)}`}),(0,S.jsx)(`text`,{x:o,y:i.sub?r-1:r+4,textAnchor:`middle`,fontSize:12,className:`kdx-label`,children:i.label}),i.sub&&(0,S.jsx)(`text`,{x:o,y:r+13,textAnchor:`middle`,fontSize:9,className:`kdx-sub${Te(i.role)}`,children:i.sub}),s&&(t===`right`?(0,S.jsx)(`line`,{x1:i.x+i.w,y1:r,x2:s.x-4,y2:r,className:`kdx-channel`,markerEnd:`url(#kdx-arr-r)`}):(0,S.jsx)(`line`,{x1:i.x+i.w-4,y1:r,x2:s.x,y2:r,className:`kdx-channel`,markerStart:`url(#kdx-arr-l)`}))]},`${i.label}-${a}`)})})}function fe({forward:e,back:t,hub:n,forwardIndex:r=1,backIndex:i=0,forwardLabel:a,backLabel:o,ariaLabel:s=`Round-trip: extract forward, merge back, sharing a content memory`,caption:c,animated:l=!1}){let u=Ce(e,xe),d=Ce(t,xe),f=Math.max(u.end,d.end)+xe,p=f/2-ye/2,m=f/2,ee=u.placed[Math.min(r,u.placed.length-1)],h=d.placed[Math.min(i,d.placed.length-1)],g=ee?ee.x+ee.w/2:m,_=h?h.x+h.w/2:m;return(0,S.jsxs)(`div`,{className:`kdx${l?` kdx--animated`:``}`,children:[(0,S.jsx)(`div`,{className:`kdx-scroll`,children:(0,S.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(f,520),maxWidth:f},children:(0,S.jsxs)(`svg`,{viewBox:`0 0 ${f} 290`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":s,children:[(0,S.jsxs)(`defs`,{children:[(0,S.jsx)(`marker`,{id:`kdx-arr-r`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,S.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,S.jsx)(`marker`,{id:`kdx-arr-l`,markerWidth:`7`,markerHeight:`7`,refX:`0.5`,refY:`3`,orient:`auto`,children:(0,S.jsx)(`path`,{d:`M6,0 L0,3 L6,6 Z`,className:`kdx-arrow`})})]}),(0,S.jsx)(`path`,{d:`M${g},104 L${m},${ve}`,className:`kdx-link kdx-link--resource`}),a&&(0,S.jsx)(ue,{x:(g+m)/2,y:230/2,text:a}),(0,S.jsx)(`path`,{d:`M${m},180 L${_},${_e}`,className:`kdx-link kdx-link--resource`}),o&&(0,S.jsx)(ue,{x:(_+m)/2,y:394/2,text:o}),(0,S.jsx)(de,{placed:u.placed,arrow:`right`}),(0,S.jsx)(de,{placed:d.placed,arrow:`left`}),(0,S.jsx)(`rect`,{x:p,y:ve,width:ye,height:be,rx:10,className:`kdx-hub`}),(0,S.jsx)(`text`,{x:m,y:n.sub?150:157,textAnchor:`middle`,fontSize:12.5,className:`kdx-label`,children:n.label}),n.sub&&(0,S.jsx)(`text`,{x:m,y:166,textAnchor:`middle`,fontSize:9,className:`kdx-sub`,style:{fill:`var(--kdx-resource)`},children:n.sub})]})})}),c&&(0,S.jsx)(`p`,{className:`kdx-caption`,children:c})]})}var S,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee=e((()=>{t(),u(),S=n(),pe=44,me=7.2,he=50,ge=54,_e=214,ve=126,ye=150,be=54,xe=36,Se=e=>Math.max(84,Math.round(Math.max((e.label??``).length,(e.sub??``).length)*me)+26),Ce=(e,t)=>{let n=t;return{placed:e.map(e=>{let t=Se(e),r={...e,x:n,w:t};return n+=t+pe,r}),end:n-pe}},we=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Te=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,fe.__docgenInfo={description:``,methods:[],displayName:`RoundTripDiagram`,props:{forward:{required:!0,tsType:{name:`Array`,elements:[{name:`PipelineStage`}],raw:`PipelineStage[]`},description:`Top row, left→right (right-pointing arrows).`},back:{required:!0,tsType:{name:`Array`,elements:[{name:`PipelineStage`}],raw:`PipelineStage[]`},description:`Bottom row, displayed left→right with left-pointing (return) arrows.`},hub:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ label: string; sub?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`sub`,value:{name:`string`,required:!1}}]}},description:``},forwardIndex:{required:!1,tsType:{name:`number`},description:"Index in `forward` whose stage links down to the hub. Default 1.",defaultValue:{value:`1`,computed:!1}},backIndex:{required:!1,tsType:{name:`number`},description:"Index in `back` whose stage links up from the hub. Default 0.",defaultValue:{value:`0`,computed:!1}},forwardLabel:{required:!1,tsType:{name:`string`},description:`Label on the forward→hub edge (e.g. "pre-fill").`},backLabel:{required:!1,tsType:{name:`string`},description:`Label on the hub→back edge (e.g. "absorb").`},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessible name for the SVG. Override when the diagram depicts something
other than the default extract/merge round trip — the built-in label would
otherwise mis-describe the figure to a screen reader.`,defaultValue:{value:`"Round-trip: extract forward, merge back, sharing a content memory"`,computed:!1}},caption:{required:!1,tsType:{name:`string`},description:``},animated:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}}));function De({lanes:e,handoff:t,caption:n}){let r=Math.max(260,...e.map(e=>Math.max(e.title.length*7.6+(e.sub?e.sub.length*Ne+24:0)+28,...e.steps.map(e=>e.length*Ne+28)))),i=Oe,a=i+r/2,o=Oe,s=e.map(e=>{let t=Fe(e),n={l:e,y:o,h:t};return o+=t+Me,n}),c=o-Me+Oe,l=r+2*Oe;return(0,C.jsxs)(`div`,{className:`kdx`,children:[(0,C.jsx)(`div`,{className:`kdx-scroll`,children:(0,C.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(l,460),maxWidth:l},children:(0,C.jsxs)(`svg`,{viewBox:`0 0 ${l} ${c}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Concurrent lanes: ${e.map(e=>e.title).join(`, `)}`,children:[(0,C.jsx)(`defs`,{children:(0,C.jsx)(`marker`,{id:`kdx-arrow-dn`,markerWidth:`9`,markerHeight:`9`,refX:`3`,refY:`6`,orient:`auto`,children:(0,C.jsx)(`path`,{d:`M0,0 L6,0 L3,6 Z`,className:`kdx-arrow`})})}),s.map(({l:e,y:n,h:o},c)=>{let l=s[c+1];return(0,C.jsxs)(`g`,{children:[(0,C.jsx)(`rect`,{x:i,y:n,width:r,height:o,rx:10,className:`kdx-box${Pe(e.role)}`}),(0,C.jsx)(`text`,{x:28,y:n+19,fontSize:14,className:`kdx-label`,children:e.title}),e.sub&&(0,C.jsx)(`text`,{x:i+r-12,y:n+19,textAnchor:`end`,fontSize:10.5,className:`kdx-chip-sub`,children:e.sub}),(0,C.jsx)(`line`,{x1:24,y1:n+ke-4,x2:i+r-10,y2:n+ke-4,className:`kdx-divider`}),e.steps.map((e,t)=>(0,C.jsx)(`text`,{x:28,y:n+ke+t*Ae+14,fontSize:11.5,className:`kdx-mono`,xmlSpace:`preserve`,children:e},t)),l&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`line`,{x1:a,y1:n+o,x2:a,y2:l.y-2,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-dn)`}),t&&(0,C.jsxs)(`g`,{children:[(0,C.jsx)(`rect`,{x:a+8,y:(n+o+l.y)/2-9.5,width:t.length*6.6+14,height:18,rx:8,className:`kdx-pill`}),(0,C.jsx)(`text`,{x:a+15,y:(n+o+l.y)/2+3,fontSize:10.5,className:`kdx-chan`,children:t})]})]})]},`${e.title}-${c}`)})]})})}),n&&(0,C.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var C,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie=e((()=>{t(),u(),C=n(),Oe=14,ke=28,Ae=19,je=12,Me=40,Ne=6.9,Pe=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Fe=e=>ke+e.steps.length*Ae+je,De.__docgenInfo={description:``,methods:[],displayName:`LanesDiagram`,props:{lanes:{required:!0,tsType:{name:`Array`,elements:[{name:`LaneThread`}],raw:`LaneThread[]`},description:``},handoff:{required:!1,tsType:{name:`string`},description:`Label on the arrow handing off from one lane to the next.`},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function Le({actors:e,messages:t,caption:n}){let r=Re,i=e.map(e=>{let t=Ke(e),n=r+t/2;return r+=t,{...e,cx:n}}),a=r+Re,o=e=>Be+e*Ve,s=(t.length?o(t.length-1):Be)+18,c=s+(n?6:14);return(0,w.jsxs)(`div`,{className:`kdx`,children:[(0,w.jsx)(`div`,{className:`kdx-scroll`,children:(0,w.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(a,520),maxWidth:a},children:(0,w.jsxs)(`svg`,{viewBox:`0 0 ${a} ${c}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Sequence across ${e.map(e=>e.label).join(`, `)}`,children:[(0,w.jsxs)(`defs`,{children:[(0,w.jsx)(`marker`,{id:`kdx-sw-r`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,w.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,w.jsx)(`marker`,{id:`kdx-sw-l`,markerWidth:`7`,markerHeight:`7`,refX:`0.5`,refY:`3`,orient:`auto`,children:(0,w.jsx)(`path`,{d:`M6,0 L0,3 L6,6 Z`,className:`kdx-arrow`})})]}),i.map((e,t)=>{let n=Ke(e),r=e.cx-n/2+6,i=n-12;return(0,w.jsxs)(`g`,{children:[(0,w.jsx)(`rect`,{x:r,y:Re,width:i,height:ze,rx:9,className:`kdx-box${We(e.role)}`}),(0,w.jsx)(`text`,{x:e.cx,y:e.sub?34:41,textAnchor:`middle`,fontSize:12,className:`kdx-label`,children:e.label}),e.sub&&(0,w.jsx)(`text`,{x:e.cx,y:47,textAnchor:`middle`,fontSize:9,className:`kdx-sub${Ge(e.role)}`,children:e.sub}),(0,w.jsx)(`line`,{x1:e.cx,y1:56,x2:e.cx,y2:s,className:`kdx-channel`,opacity:.55})]},`actor-${t}`)}),t.map((e,t)=>{let n=o(t),r=i[Math.min(e.from,i.length-1)],a=i[Math.min(e.to,i.length-1)];if(e.from===e.to)return(0,w.jsxs)(`g`,{children:[(0,w.jsx)(`circle`,{cx:r.cx,cy:n,r:2.6,className:`kdx-node kdx-node--io`}),(0,w.jsx)(`text`,{x:r.cx+12,y:n-3,fontSize:9.5,className:`kdx-note`,children:e.label}),e.detail&&(0,w.jsx)(`text`,{x:r.cx+12,y:n+9,fontSize:9,className:`kdx-chan`,children:e.detail})]},`msg-${t}`);let s=a.cx>r.cx,c=s?r.cx+3:r.cx-3,l=s?a.cx-3:a.cx+3,u=(r.cx+a.cx)/2;return(0,w.jsxs)(`g`,{children:[(0,w.jsx)(`line`,{x1:c,y1:n,x2:l,y2:n,className:`kdx-channel`,markerEnd:s?`url(#kdx-sw-r)`:`url(#kdx-sw-l)`}),(0,w.jsx)(`text`,{x:u,y:n-5,textAnchor:`middle`,fontSize:9.5,className:`kdx-chan`,children:e.label}),e.detail&&(0,w.jsx)(`text`,{x:u,y:n+11,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:e.detail})]},`msg-${t}`)})]})})}),n&&(0,w.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var w,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe=e((()=>{t(),u(),w=n(),Re=16,ze=40,Be=56,Ve=38,He=7.2,Ue=150,We=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Ge=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,Ke=e=>Math.max(Ue,Math.round(Math.max(e.label.length,(e.sub??``).length)*He)+28),Le.__docgenInfo={description:``,methods:[],displayName:`SwimlaneDiagram`,props:{actors:{required:!0,tsType:{name:`Array`,elements:[{name:`SwimlaneActor`}],raw:`SwimlaneActor[]`},description:``},messages:{required:!0,tsType:{name:`Array`,elements:[{name:`SwimlaneMessage`}],raw:`SwimlaneMessage[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function Je({rungs:e,caption:t}){let n=e.length,r=Math.max(34,...e.map(e=>Math.round(e.grade.length*$e)+14)),i=Math.max(60,...e.map(e=>Math.round(Math.max(e.name.length*Ze,(e.gloss??``).length*Qe)))),a=O+r+10+i+12,o=e=>E+(n-1-e)*Ye,s=e=>E+e*(a+Xe),c=e=>o(e)+D/2,l=E+n*a+(n-1)*Xe+E,u=E+(n-1)*Ye+D+E;return(0,T.jsxs)(`div`,{className:`kdx`,children:[(0,T.jsx)(`div`,{className:`kdx-scroll`,children:(0,T.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(l,460),maxWidth:l},children:(0,T.jsxs)(`svg`,{viewBox:`0 0 ${l} ${u}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Axis ladder: ${e.map(e=>`${e.grade} ${e.name}`).join(` then `)}`,children:[(0,T.jsx)(`defs`,{children:(0,T.jsx)(`marker`,{id:`kdx-arrow-lad`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,T.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})})}),e.map((t,n)=>{let i=s(n),l=o(n),u=c(n),d=e[n+1],f=i+O+r/2,p=i+O+r+10;return(0,T.jsxs)(`g`,{children:[d&&(0,T.jsx)(`line`,{x1:i+a,y1:u,x2:s(n+1)-4,y2:c(n+1),className:`kdx-channel`,markerEnd:`url(#kdx-arrow-lad)`}),(0,T.jsx)(`rect`,{x:i,y:l,width:a,height:D,rx:9,className:`kdx-box`}),(0,T.jsx)(`rect`,{x:i+O,y:l+(D-20)/2,width:r,height:20,rx:6,className:`kdx-box kdx-box--io`}),(0,T.jsx)(`text`,{x:f,y:u+3.5,textAnchor:`middle`,fontSize:11,className:`kdx-sub kdx-sub--io`,children:t.grade}),(0,T.jsx)(`text`,{x:p,y:t.gloss?l+20:u+4,fontSize:12,className:`kdx-label`,children:t.name}),t.gloss&&(0,T.jsx)(`text`,{x:p,y:l+34,fontSize:9.5,className:`kdx-note`,children:t.gloss})]},`${t.grade}-${n}`)})]})})}),t&&(0,T.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var T,E,D,Ye,Xe,Ze,Qe,$e,O,et=e((()=>{t(),u(),T=n(),E=14,D=46,Ye=28,Xe=24,Ze=7,Qe=6,$e=7.4,O=10,Je.__docgenInfo={description:``,methods:[],displayName:`AxisLadderDiagram`,props:{rungs:{required:!0,tsType:{name:`Array`,elements:[{name:`AxisRung`}],raw:`AxisRung[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function tt({families:e,caption:t}){let n=e.map(e=>Math.max(120,Math.round(e.name.length*ot)+24,Math.round(e.tagline.length*st)+24,...e.axes.map(e=>Math.round(e.label.length*ct)+14+pt(e.range)+24))),r=A,i=e.map((e,t)=>{let i={f:e,x:r,w:n[t],role:ut[t%ut.length]};return r+=n[t]+nt,i}),a=r-nt+A,o=e=>rt+e.axes.length*it+at,s=Math.max(...e.map(o))+2*A;return(0,k.jsxs)(`div`,{className:`kdx`,children:[(0,k.jsx)(`div`,{className:`kdx-scroll`,children:(0,k.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(a,520),maxWidth:a},children:(0,k.jsx)(`svg`,{viewBox:`0 0 ${a} ${s}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Axis families: ${e.map(e=>e.name).join(`, `)}`,children:i.map(({f:e,x:t,w:n,role:r},i)=>(0,k.jsxs)(`g`,{children:[(0,k.jsx)(`rect`,{x:t,y:A,width:n,height:o(e),rx:10,className:`kdx-box${dt(r)}`}),(0,k.jsx)(`text`,{x:t+12,y:34,fontSize:13.5,className:`kdx-label`,style:{fill:`var(--kdx-${r})`},children:e.name}),(0,k.jsx)(`text`,{x:t+12,y:47,fontSize:9.5,className:`kdx-note`,children:e.tagline}),(0,k.jsx)(`line`,{x1:t+10,y1:52,x2:t+n-10,y2:52,className:`kdx-divider`}),e.axes.map((e,i)=>{let a=54+i*it+it/2,o=pt(e.range),s=t+n-12-o;return(0,k.jsxs)(`g`,{children:[(0,k.jsx)(`text`,{x:t+14,y:a+3.5,fontSize:11,className:`kdx-label`,children:e.label}),(0,k.jsx)(`rect`,{x:s,y:a-10,width:o,height:20,rx:6,className:`kdx-box${dt(r)}`}),(0,k.jsx)(`text`,{x:s+o/2,y:a+3,textAnchor:`middle`,fontSize:9.5,className:`kdx-sub${ft(r)}`,children:e.range})]},`${e.label}-${i}`)})]},`${e.name}-${i}`))})})}),t&&(0,k.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var k,A,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt=e((()=>{t(),u(),k=n(),A=14,nt=18,rt=40,it=26,at=12,ot=7.6,st=6,ct=7,lt=6.6,ut=[`io`,`qa`,`annotate`,`translate`],dt=e=>` kdx-box--${e}`,ft=e=>` kdx-sub--${e}`,pt=e=>Math.round(e.length*lt)+14,tt.__docgenInfo={description:``,methods:[],displayName:`AxisFamiliesDiagram`,props:{families:{required:!0,tsType:{name:`Array`,elements:[{name:`AxisFamily`}],raw:`AxisFamily[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function ht({steps:e,caption:t}){let n=e.length,r=e.some(e=>e.sub)?42:32,i=e=>Math.max(72,Math.round(Math.max(e.label.length*_t,(e.sub??``).length*vt))+24),a=Math.max(...e.map(i)),o=Math.max(120,(a+40)*n/(2*Math.PI)),s=o+a/2+gt,c=2*s,l=2*s,u=2*Math.PI/n,d=e=>-Math.PI/2+e*u,f=e=>[s+o*Math.cos(e),s+o*Math.sin(e)],p=(a/2+6)/o;return(0,j.jsxs)(`div`,{className:`kdx`,children:[(0,j.jsx)(`div`,{className:`kdx-scroll`,children:(0,j.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(c,320),maxWidth:Math.min(c,440)},children:(0,j.jsxs)(`svg`,{viewBox:`0 0 ${c} ${l}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Cycle: ${e.map(e=>e.label).join(` then `)}, then back to start`,children:[(0,j.jsx)(`defs`,{children:(0,j.jsx)(`marker`,{id:`kdx-arrow-cyc`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,j.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})})}),e.map((e,t)=>{let[n,r]=f(d(t)+p),[i,a]=f(d(t)+u-p);return(0,j.jsx)(`path`,{d:`M${n},${r} A ${o} ${o} 0 0 1 ${i},${a}`,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-cyc)`},`arc-${t}`)}),e.map((e,t)=>{let[n,a]=f(d(t)),o=i(e);return(0,j.jsxs)(`g`,{children:[(0,j.jsx)(`rect`,{x:n-o/2,y:a-r/2,width:o,height:r,rx:9,className:`kdx-box`}),(0,j.jsx)(`text`,{x:n,y:e.sub?a-1:a+4,textAnchor:`middle`,fontSize:11.5,className:`kdx-label`,children:e.label}),e.sub&&(0,j.jsx)(`text`,{x:n,y:a+11,textAnchor:`middle`,fontSize:8.5,className:`kdx-note`,children:e.sub})]},`${e.label}-${t}`)})]})})}),t&&(0,j.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var j,gt,_t,vt,yt=e((()=>{t(),u(),j=n(),gt=16,_t=7,vt=6,ht.__docgenInfo={description:``,methods:[],displayName:`CycleDiagram`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`CycleStep`}],raw:`CycleStep[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function bt({boxes:e,edges:t=[],caption:n}){let r=Math.max(...e.map(e=>e.col))+1,i=Array.from({length:r},(t,n)=>e.map((e,t)=>({b:e,i:t})).filter(e=>e.b.col===n)),a=i.map(e=>Math.max(0,...e.map(({b:e})=>Ft(e)))),o=[],s=N;for(let e=0;e<r;e++)o.push(s),s+=a[e]+xt;let c=s-xt+N,l=i.map(e=>e.reduce((e,{b:t})=>e+Nt(t),0)+Math.max(0,e.length-1)*St),u=Math.max(...l),d=N+(e.some(e=>e.self)?Dt:0),f=d+u+N,p=[];i.forEach((e,t)=>{let n=d+(u-l[t])/2;e.forEach(({b:e,i:r})=>{let i=Nt(e);p[r]={x:o[t],y:n,w:a[t],h:i},n+=i+St})});let m=new Map;return(0,M.jsxs)(`div`,{className:`kdx`,children:[(0,M.jsx)(`div`,{className:`kdx-scroll`,children:(0,M.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(c,520),maxWidth:c},children:(0,M.jsxs)(`svg`,{viewBox:`0 0 ${c} ${f}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Types: ${e.map(e=>e.name).join(`, `)}`,children:[(0,M.jsxs)(`defs`,{children:[(0,M.jsx)(`marker`,{id:`kdx-arrow-type-r`,markerWidth:`8`,markerHeight:`8`,refX:`5`,refY:`3`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,M.jsx)(`marker`,{id:`kdx-arrow-type-d`,markerWidth:`8`,markerHeight:`8`,refX:`3`,refY:`5.5`,orient:`auto`,children:(0,M.jsx)(`path`,{d:`M0,0 L6,0 L3,6 Z`,className:`kdx-arrow`})})]}),t.map((e,t)=>{let n=p[Math.min(e.from,p.length-1)],r=p[Math.min(e.to,p.length-1)],i=n.y+n.h/2,a=r.y+r.h/2,o=n.x+n.w,s=r.x,c=m.get(e.from)??0;m.set(e.from,c+1);let l=o+(s-o)*(.34+c%3*.16),u=(e.label??``).length*5.8+12;return(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`path`,{d:`M${o},${i} H${l} V${a} H${s-3}`,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-type-r)`}),e.label&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`rect`,{x:s-8-u,y:a-18,width:u,height:16,rx:7,className:`kdx-pill`}),(0,M.jsx)(`text`,{x:s-15,y:a-7,textAnchor:`end`,fontSize:9,className:`kdx-chan`,children:e.label})]})]},`edge-${t}`)}),e.map((e,t)=>{let{x:n,y:r,w:i,h:a}=p[t],o=e.fields??[],s=r+Mt(e)-3;return(0,M.jsxs)(`g`,{children:[e.self&&(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`path`,{d:`M${n+i*.3},${r} V${r-14} H${n+i*.7} V${r-3}`,className:`kdx-loop`,markerEnd:`url(#kdx-arrow-type-d)`}),(0,M.jsx)(`text`,{x:n+i/2,y:r-19,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:e.self})]}),(0,M.jsx)(`rect`,{x:n,y:r,width:i,height:a,rx:10,className:`kdx-box${At(e.role)}`}),(0,M.jsx)(`text`,{x:n+12,y:r+19,fontSize:13,className:`kdx-label`,children:e.name}),e.sub&&(0,M.jsx)(`text`,{x:n+12,y:r+30,fontSize:9.5,className:`kdx-sub${jt(e.role)}`,children:e.sub}),o.length>0&&(0,M.jsx)(`line`,{x1:n+10,y1:s,x2:n+i-10,y2:s,className:`kdx-divider`}),o.map((t,a)=>{let o=r+Mt(e)+a*Tt+Tt/2+3;return(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`text`,{x:n+14,y:o,fontSize:10.5,className:`kdx-mono`,children:t.name}),(0,M.jsx)(`text`,{x:n+i-14,y:o,textAnchor:`end`,fontSize:10.5,className:`kdx-sub`,children:t.type})]},`${t.name}-${a}`)})]},`${e.name}-${t}`)})]})})}),n&&(0,M.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var M,N,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It=e((()=>{t(),u(),M=n(),N=14,xt=86,St=18,Ct=28,wt=12,Tt=18,Et=10,Dt=26,Ot=7.6,kt=6.6,At=e=>e&&e!==`tool`?` kdx-box--${e}`:``,jt=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,Mt=e=>Ct+(e.sub?wt:0),Nt=e=>Mt(e)+(e.fields?.length??0)*Tt+Et,Pt=e=>Math.round((e.name.length+e.type.length)*kt)+44,Ft=e=>Math.max(130,Math.round(e.name.length*Ot)+28,Math.round((e.sub??``).length*kt)+28,...(e.fields??[]).map(Pt)),bt.__docgenInfo={description:``,methods:[],displayName:`TypeDiagram`,props:{boxes:{required:!0,tsType:{name:`Array`,elements:[{name:`TypeBox`}],raw:`TypeBox[]`},description:``},edges:{required:!1,tsType:{name:`Array`,elements:[{name:`TypeEdge`}],raw:`TypeEdge[]`},description:``,defaultValue:{value:`[]`,computed:!1}},caption:{required:!1,tsType:{name:`string`},description:``}}}}));function Lt({nodes:e,caption:t}){let n=Bt,r=e.map(e=>{let t=qt(e),r={n:e,x:n,w:t};return n+=t+Vt,r}),i=n-Vt+Bt,a=e.some(e=>e.kind===`gate`&&e.hold),o=Math.max(0,...e.map(e=>e.kind===`gate`&&e.hold?e.hold.length*5.6+20:0)),s=Math.max(i,o+2*Bt);return(0,P.jsxs)(`div`,{className:`kdx`,children:[(0,P.jsx)(`div`,{className:`kdx-scroll`,children:(0,P.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(s,520),maxWidth:s},children:(0,P.jsxs)(`svg`,{viewBox:`0 0 ${s} ${88+(a?72:0)+(t?4:14)}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Source-first loop: ${e.map(e=>e.label).join(` then `)}`,children:[(0,P.jsxs)(`defs`,{children:[(0,P.jsx)(`marker`,{id:`kdx-gl-arrow`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,P.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,P.jsx)(`marker`,{id:`kdx-gl-hold`,markerWidth:`8`,markerHeight:`8`,refX:`5`,refY:`3`,orient:`auto`,children:(0,P.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-hold-t`})})]}),r.map((e,t)=>{let n=r[t+1],i=n&&(0,P.jsx)(`line`,{x1:e.x+e.w,y1:54,x2:n.x-4,y2:54,className:`kdx-channel`,markerEnd:`url(#kdx-gl-arrow)`});return(0,P.jsxs)(`g`,{children:[(0,P.jsx)(Rt,{placed:e,cy:54}),i]},`${e.n.label}-${t}`)})]})})}),t&&(0,P.jsx)(`p`,{className:`kdx-caption`,children:t})]})}function Rt({placed:e,cy:t}){let{n,x:r,w:i}=e,a=r+i/2,o=t-F/2;if(n.kind===`gate`)return(0,P.jsx)(zt,{n,x:r,w:i,cx:a,cy:t,top:o});if(n.kind===`done`)return(0,P.jsxs)(`g`,{children:[(0,P.jsx)(`rect`,{x:r,y:o,width:i,height:F,rx:10,className:`kdx-box kdx-box--io`}),(0,P.jsx)(`text`,{x:a,y:t+5,textAnchor:`middle`,fontSize:13,className:`kdx-gate-t`,children:n.label})]});let s=n.steps??[],c=n.role?` kdx-phase--${n.role}`:``,l=s.length?o+18:t+4;return(0,P.jsxs)(`g`,{children:[(0,P.jsx)(`rect`,{x:r,y:o,width:i,height:F,rx:10,className:`kdx-phase${c}`}),(0,P.jsx)(`text`,{x:a,y:l,textAnchor:`middle`,fontSize:12,className:`kdx-phase-t`,children:n.label}),s.map((e,t)=>(0,P.jsx)(`text`,{x:a,y:o+32+t*12,textAnchor:`middle`,fontSize:8.5,className:`kdx-phase-step`,children:e},t))]})}function zt({n:e,x:t,w:n,cx:r,cy:i,top:a}){let o=a+F,s=[`M${t+10},${a}`,`H${t+n-10}`,`Q${t+n},${a} ${t+n},${a+10}`,`V${a+F*.62}`,`L${r},${o}`,`L${t},${a+F*.62}`,`V${a+10}`,`Q${t},${a} ${t+10},${a}`,`Z`].join(` `),c=e.sub?i-2:i+3;return(0,P.jsxs)(`g`,{children:[(0,P.jsx)(`path`,{d:s,className:`kdx-gate-fill`}),(0,P.jsx)(`path`,{d:s,className:`kdx-gate`}),(0,P.jsx)(`path`,{d:`M${r-16},${a+15} l6,6 l12,-13`,className:`kdx-gate-check`,transform:`translate(0, ${e.sub?-2:2})`}),(0,P.jsx)(`text`,{x:r,y:c+8,textAnchor:`middle`,fontSize:11,className:`kdx-gate-t`,children:e.label}),e.sub&&(0,P.jsx)(`text`,{x:r,y:c+20,textAnchor:`middle`,fontSize:8.5,className:`kdx-gate-sub`,children:e.sub}),e.hold&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`path`,{d:`M${r},${o} V${o+Wt}`,className:`kdx-hold`,markerEnd:`url(#kdx-gl-hold)`}),(0,P.jsx)(`text`,{x:r,y:o+Wt+14,textAnchor:`middle`,fontSize:9,className:`kdx-hold-t`,children:e.hold})]})]})}var P,Bt,F,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt=e((()=>{t(),u(),P=n(),Bt=16,F=68,Vt=40,Ht=6.6,Ut=6.2,Wt=46,Gt=e=>e.length*Ht,Kt=e=>e.length*Ut,qt=e=>{if(e.kind===`phase`){let t=Math.max(Gt(e.label),...(e.steps??[]).map(Kt));return Math.max(150,t+28)}return e.kind===`gate`?Math.max(120,Gt(e.label)+40,Kt(e.sub??``)+40):Math.max(96,Gt(e.label)+30)},Lt.__docgenInfo={description:``,methods:[],displayName:`GatedLoopDiagram`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`LoopPhase | LoopGate | LoopDone`,elements:[{name:`LoopPhase`},{name:`LoopGate`},{name:`LoopDone`}]}],raw:`LoopNode[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})),I,Yt,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Xt;e((()=>{r(),le(),c(),f(),Ee(),l(),Ie(),qe(),d(),et(),mt(),yt(),It(),Jt(),o(),I=n(),Yt={title:`Diagrams/Components`,decorators:[a],parameters:{layout:`fullscreen`}},L={name:`ArchitectureDiagram (hero)`,render:()=>(0,I.jsx)(te,{animated:!0})},R={name:`PipelineDiagram (linear)`,render:()=>(0,I.jsx)(m,{stages:[{label:`RawDocument`},{label:`Reader`,sub:`DataFormat`,role:`io`},{label:`segmentation`,role:`annotate`},{label:`translate`,role:`translate`},{label:`qa`,role:`qa`},{label:`Writer`,sub:`DataFormat`,role:`io`}]})},z={name:`PipelineDiagram (fan-out lanes)`,render:()=>(0,I.jsx)(m,{caption:i(`1VERBHQ5Ml7`,`A stage can fan out into parallel lanes (workers / branches).`),stages:[{label:`Reader`,sub:`DataFormat`,role:`io`},{lanes:[{label:`translate`,sub:`fr`},{label:`translate`,sub:`de`},{label:`translate`,sub:`ja`}],parallelLabel:`fan-out · N goroutines`},{label:`Writer`,sub:`DataFormat`,role:`io`}]})},B={name:`StreamDiagram (Part sequence)`,render:()=>(0,I.jsx)(s,{title:i(`9iJlDXtj9TU`,`Read(ctx)`),items:[{kind:`PartLayerStart`,detail:`format = "json"`,role:`layer`},{kind:`PartBlock`,detail:`"title"`,depth:1,role:`block`},{kind:`PartLayerStart`,detail:`embedded "html"`,depth:1,role:`layer`,note:`child layer`},{kind:`PartBlock`,detail:`"<b>Hello</b>"`,depth:2,role:`block`},{kind:`PartLayerEnd`,depth:1,role:`end`},{kind:`PartLayerEnd`,role:`end`}]})},V={name:`RoundTripDiagram (extract / merge)`,render:()=>(0,I.jsx)(fe,{forward:[{label:`authored source`,role:`io`},{label:`extract`},{label:`XLIFF / PO`},{label:`translator`}],back:[{label:`kapi merge`,role:`io`},{label:`translated XLIFF / PO`},{label:`returned`}],hub:{label:`project content memory`,sub:`pre-fill · absorb`},forwardLabel:`pre-fill`,backLabel:`absorb`})},H={name:`PhaseFlow (vertical, looping node)`,render:()=>(0,I.jsx)(p,{nodes:[{label:`Your source code`},{label:`i18n/`,sub:`KBF archive`,edge:`neokapi-i18n extract`,role:`io`,loop:[`kapi translate / pseudo / qa`,`accumulate locales in place`]},{label:`public/translations/{locale}.json`,edge:`neokapi-i18n compile`,role:`translate`}]})},U={name:`LanesDiagram (thread handoff)`,render:()=>(0,I.jsx)(De,{handoff:`eventQueue`,lanes:[{title:`Reader Thread`,sub:`filterPool, bounded`,role:`io`,steps:[`read source bytes`,`run the Okapi filter`,`emit events`]},{title:`Writer Thread`,sub:`writerPool, unbounded`,role:`translate`,steps:[`receive events`,`re-assemble the skeleton`,`write target bytes`]}]})},W={name:`SwimlaneDiagram (message passing)`,render:()=>(0,I.jsx)(Le,{actors:[{label:`Developer`,sub:`kapi CLI`,role:`io`},{label:`Bowrain Server`,role:`translate`},{label:`Translator`,role:`qa`}],messages:[{from:0,to:1,label:`kapi push`},{from:1,to:1,label:`translate / QA`},{from:1,to:2,label:`assign`},{from:2,to:1,label:`review, approve`},{from:0,to:1,label:`kapi pull`}]})},G={name:`RedactionDiagram (marker black-out + category chips)`,render:()=>(0,I.jsx)(ee,{original:`Email Sarah Chen the Project Halcyon launch date.`,redact:[{text:`Sarah Chen`,label:`Person`},`Project Halcyon`],translated:`Envoyez à Sarah Chen la date de lancement de Project Halcyon.`,caption:i(`hQt3UOCDdzR`,`A span is either blacked out with a marker (sensitive) or shown as a labeled category chip.`)})},K={name:`AxisLadderDiagram (ascending rungs)`,render:()=>(0,I.jsx)(Je,{rungs:[{grade:`G0`,name:`opaque`,gloss:`bytes only`},{grade:`G1`,name:`metadata`,gloss:`title, author, page count`},{grade:`G2`,name:`linear text`,gloss:`reading-order characters`},{grade:`G3`,name:`roles`,gloss:`headings, tables, reading order`},{grade:`G4`,name:`geometry`,gloss:`page coords, bounding boxes`}],caption:i(`a2Sa4BDjHMw`,`Structure & Geometry — how much document structure we recover, rung by rung.`)})},q={name:`AxisLadderDiagram (convergence — target lifecycle)`,render:()=>(0,I.jsx)(Je,{rungs:[{grade:`1`,name:`draft`,gloss:`machine placeholder or fuzzy leverage`},{grade:`2`,name:`translated`,gloss:`a real translation exists`},{grade:`3`,name:`reviewed`,gloss:`a person approved this exact pair`},{grade:`4`,name:`signed-off`,gloss:`final`}],caption:i(`gyqNVLDCeRL`,`Target lifecycle — how far a translation has progressed.`)})},J={name:`AxisLadderDiagram (convergence — source readiness)`,render:()=>(0,I.jsx)(Je,{rungs:[{grade:`1`,name:`authored`,gloss:`source content exists`},{grade:`2`,name:`checked`,gloss:`clears its brand & terminology checks`},{grade:`3`,name:`approved`,gloss:`a person signed off on the source`}],caption:i(`fjBVLSiFdpK`,`Source authoring readiness — the source-side counterpart.`)})},Y={name:`AxisFamiliesDiagram (axes grouped by family)`,render:()=>(0,I.jsx)(tt,{families:[{name:`Comprehension`,tagline:`how deeply we read it`,axes:[{label:`Engine`,range:`L0–L4`},{label:`Vocabulary`,range:`V0–V3`},{label:`Structure & Geometry`,range:`G0–G4`}]},{name:`Assurance`,tagline:`how we prove it`,axes:[{label:`Corpus`,range:`C0–C3`},{label:`Security`,range:`S0–S4`}]},{name:`Enablement`,tagline:`how we work with it`,axes:[{label:`Knowledge`,range:`K0–K3`},{label:`Editor`,range:`E0–E4`}]}],caption:i(`gREpfOmtO57`,`The maturity axes group by the question they answer.`)})},X={name:`CycleDiagram (closed runbook loop)`,render:()=>(0,I.jsx)(ht,{steps:[{label:`Reconcile`,sub:`ledger vs reality`},{label:`Compute due`,sub:`signals + watermarks`},{label:`Rank & budget`},{label:`Execute`,sub:`with evidence`},{label:`Record`,sub:`ledger commit`},{label:`Reflect`,sub:`learnings`}],caption:i(`a06Judc4Yd9`,`The format-ops runbook is a self-feeding loop; each run records what it consumed.`)})},Z={name:`TypeDiagram (record types and their links)`,render:()=>(0,I.jsx)(bt,{caption:i(`hrHoW3OH9CJ`,`A type card lists its fields; an edge carries what the link between two types means.`),boxes:[{name:`Layer`,col:0,role:`io`,self:`nests — embedded content`,fields:[{name:`Format`,type:`string`},{name:`ParentID`,type:`string`}]},{name:`Block`,col:1,role:`translate`,fields:[{name:`Translatable`,type:`bool`},{name:`Source`,type:`[]Run`},{name:`Targets`,type:`map[VariantKey]*Target`},{name:`Overlays`,type:`[]Overlay`}]},{name:`Run`,col:2,fields:[{name:`Text`,type:`*TextRun`},{name:`Ph`,type:`*PlaceholderRun`}]},{name:`Target`,col:2,role:`translate`,fields:[{name:`Runs`,type:`[]Run`},{name:`Status`,type:`TargetStatus`}]},{name:`Overlay`,col:2,role:`annotate`,fields:[{name:`Type`,type:`OverlayType`},{name:`Spans`,type:`[]Span`}]}],edges:[{from:0,to:1,label:`contains`},{from:1,to:2,label:`flat Source sequence`},{from:1,to:3,label:`per variant`},{from:1,to:4,label:`stand-off, run-anchored`}]})},Q={name:`GatedLoopDiagram (source-first ship-gates)`,render:()=>(0,I.jsx)(Lt,{nodes:[{kind:`phase`,role:`source`,label:`settle source`,steps:[`term-check + protect`,`brand-check`,`source QA`]},{kind:`gate`,label:`source ship-gate`,sub:`source_gate`,hold:`hold — settle your source first`},{kind:`phase`,role:`translate`,label:`translate approved source`,steps:[`recycle (content memory-first)`,`AI remainder`,`target QA`]},{kind:`gate`,label:`target ship-gate`,sub:`ship_gate`,hold:`park — needs review`},{kind:`done`,label:`converged`}],caption:i(`al38Eh7oQ3I`,`Get the source right, gate it, then translate the approved source per locale — a gate that is not met holds the work for a person rather than shipping.`)})},$={name:`GatedLoopDiagram (source-only — monolingual)`,render:()=>(0,I.jsx)(Lt,{nodes:[{kind:`phase`,role:`source`,label:`settle source`,steps:[`term-check + protect`,`brand-check`,`source QA`]},{kind:`gate`,label:`source ship-gate`,sub:`source_gate`,hold:`hold — settle your source first`},{kind:`done`,label:`on brand`}],caption:i(`24l3MCYivQi`,`A monolingual project stops after the first half: settle the source, clear its gate.`)})},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "ArchitectureDiagram (hero)",
  render: () => <ArchitectureDiagram animated />
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
    label: "project content memory",
    sub: "pre-fill · absorb"
  }} forwardLabel="pre-fill" backLabel="absorb" />
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: "PhaseFlow (vertical, looping node)",
  render: () => <PhaseFlow nodes={[{
    label: "Your source code"
  }, {
    label: "i18n/",
    sub: "KBF archive",
    edge: "neokapi-i18n extract",
    role: "io",
    loop: ["kapi translate / pseudo / qa", "accumulate locales in place"]
  }, {
    label: "public/translations/{locale}.json",
    edge: "neokapi-i18n compile",
    role: "translate"
  }]} />
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "RedactionDiagram (marker black-out + category chips)",
  render: () => <RedactionDiagram original="Email Sarah Chen the Project Halcyon launch date." redact={[{
    text: "Sarah Chen",
    label: "Person"
  }, "Project Halcyon"]} translated="Envoyez à Sarah Chen la date de lancement de Project Halcyon." caption="A span is either blacked out with a marker (sensitive) or shown as a labeled category chip." />
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "AxisLadderDiagram (convergence — target lifecycle)",
  render: () => <AxisLadderDiagram rungs={[{
    grade: "1",
    name: "draft",
    gloss: "machine placeholder or fuzzy leverage"
  }, {
    grade: "2",
    name: "translated",
    gloss: "a real translation exists"
  }, {
    grade: "3",
    name: "reviewed",
    gloss: "a person approved this exact pair"
  }, {
    grade: "4",
    name: "signed-off",
    gloss: "final"
  }]} caption="Target lifecycle — how far a translation has progressed." />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "AxisLadderDiagram (convergence — source readiness)",
  render: () => <AxisLadderDiagram rungs={[{
    grade: "1",
    name: "authored",
    gloss: "source content exists"
  }, {
    grade: "2",
    name: "checked",
    gloss: "clears its brand & terminology checks"
  }, {
    grade: "3",
    name: "approved",
    gloss: "a person signed off on the source"
  }]} caption="Source authoring readiness — the source-side counterpart." />
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: "TypeDiagram (record types and their links)",
  render: () => <TypeDiagram caption="A type card lists its fields; an edge carries what the link between two types means." boxes={[{
    name: "Layer",
    col: 0,
    role: "io",
    self: "nests — embedded content",
    fields: [{
      name: "Format",
      type: "string"
    }, {
      name: "ParentID",
      type: "string"
    }]
  }, {
    name: "Block",
    col: 1,
    role: "translate",
    fields: [{
      name: "Translatable",
      type: "bool"
    }, {
      name: "Source",
      type: "[]Run"
    }, {
      name: "Targets",
      type: "map[VariantKey]*Target"
    }, {
      name: "Overlays",
      type: "[]Overlay"
    }]
  }, {
    name: "Run",
    col: 2,
    fields: [{
      name: "Text",
      type: "*TextRun"
    }, {
      name: "Ph",
      type: "*PlaceholderRun"
    }]
  }, {
    name: "Target",
    col: 2,
    role: "translate",
    fields: [{
      name: "Runs",
      type: "[]Run"
    }, {
      name: "Status",
      type: "TargetStatus"
    }]
  }, {
    name: "Overlay",
    col: 2,
    role: "annotate",
    fields: [{
      name: "Type",
      type: "OverlayType"
    }, {
      name: "Spans",
      type: "[]Span"
    }]
  }]} edges={[{
    from: 0,
    to: 1,
    label: "contains"
  }, {
    from: 1,
    to: 2,
    label: "flat Source sequence"
  }, {
    from: 1,
    to: 3,
    label: "per variant"
  }, {
    from: 1,
    to: 4,
    label: "stand-off, run-anchored"
  }]} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "GatedLoopDiagram (source-first ship-gates)",
  render: () => <GatedLoopDiagram nodes={[{
    kind: "phase",
    role: "source",
    label: "settle source",
    steps: ["term-check + protect", "brand-check", "source QA"]
  }, {
    kind: "gate",
    label: "source ship-gate",
    sub: "source_gate",
    hold: "hold — settle your source first"
  }, {
    kind: "phase",
    role: "translate",
    label: "translate approved source",
    steps: ["recycle (content memory-first)", "AI remainder", "target QA"]
  }, {
    kind: "gate",
    label: "target ship-gate",
    sub: "ship_gate",
    hold: "park — needs review"
  }, {
    kind: "done",
    label: "converged"
  }]} caption="Get the source right, gate it, then translate the approved source per locale — a gate that is not met holds the work for a person rather than shipping." />
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "GatedLoopDiagram (source-only — monolingual)",
  render: () => <GatedLoopDiagram nodes={[{
    kind: "phase",
    role: "source",
    label: "settle source",
    steps: ["term-check + protect", "brand-check", "source QA"]
  }, {
    kind: "gate",
    label: "source ship-gate",
    sub: "source_gate",
    hold: "hold — settle your source first"
  }, {
    kind: "done",
    label: "on brand"
  }]} caption="A monolingual project stops after the first half: settle the source, clear its gate." />
}`,...$.parameters?.docs?.source}}},Xt=[`Architecture`,`Pipeline`,`PipelineFanOut`,`Stream`,`RoundTrip`,`Phases`,`Lanes`,`Swimlane`,`Redaction`,`AxisLadder`,`ConvergenceTargetLadder`,`ConvergenceSourceLadder`,`AxisFamilies`,`Cycle`,`Types`,`GatedLoop`,`GatedLoopMonolingual`]}))();export{L as Architecture,Y as AxisFamilies,K as AxisLadder,J as ConvergenceSourceLadder,q as ConvergenceTargetLadder,X as Cycle,Q as GatedLoop,$ as GatedLoopMonolingual,U as Lanes,H as Phases,R as Pipeline,z as PipelineFanOut,G as Redaction,V as RoundTrip,B as Stream,W as Swimlane,Z as Types,Xt as __namedExportsOrder,Yt as default};