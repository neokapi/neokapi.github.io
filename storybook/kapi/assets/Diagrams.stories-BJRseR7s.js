import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,r as i,t as a}from"./runtime-BFRAZW6z.js";import{n as o,t as s}from"./storyEnv-BhuiV4hA.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as ee,t as te,u as ne}from"./PlaceGraphDiagram-m8-lCMyH.js";function h({path:e,dur:t,begin:n,cls:r,r:i=3}){return(0,g.jsxs)(`circle`,{r:i,className:`kdx-dot ${r}`,children:[(0,g.jsx)(`animateMotion`,{dur:`${t}s`,begin:`${n}s`,repeatCount:`indefinite`,path:e}),(0,g.jsx)(`animate`,{attributeName:`opacity`,values:`0;1;1;0`,keyTimes:`0;0.12;0.85;1`,dur:`${t}s`,begin:`${n}s`,repeatCount:`indefinite`})]})}function re({x:e,w:t,role:n,title:r,sub:i}){let a=e+t/2;return(0,g.jsxs)(`g`,{children:[(0,g.jsx)(`rect`,{x:e,y:164,width:t,height:64,rx:10,className:`kdx-box kdx-box--${n}`}),(0,g.jsx)(`text`,{x:a,y:192,textAnchor:`middle`,fontSize:13.5,className:`kdx-label`,children:r}),(0,g.jsx)(`text`,{x:a,y:210,textAnchor:`middle`,fontSize:9.5,className:`kdx-sub kdx-sub--${n}`,children:i})]})}function ie({x1:e,x2:t}){return(0,g.jsxs)(`g`,{children:[(0,g.jsx)(`line`,{x1:e,y1:_,x2:t,y2:_,className:`kdx-channel`}),(0,g.jsx)(`text`,{x:(e+t)/2,y:188,textAnchor:`middle`,fontSize:7.5,className:`kdx-chan`,children:a(`2Y2toT16fSw`,`chan`)})]})}function ae({animated:e=!0}){return(0,g.jsx)(`div`,{className:`kdx${e?` kdx--animated`:``}`,children:(0,g.jsx)(`div`,{className:`kdx-scroll`,children:(0,g.jsx)(`div`,{className:`kdx-canvas`,style:{maxWidth:960},children:(0,g.jsxs)(`svg`,{viewBox:`0 0 ${oe} ${se}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-labelledby":`kdx-arch-title kdx-arch-desc`,children:[(0,g.jsx)(`title`,{id:`kdx-arch-title`,children:a(`fY61jCPxsjO`,`neokapi processing architecture`)}),(0,g.jsx)(`desc`,{id:`kdx-arch-desc`,children:a(`jnoLJjTvvRU`,`A streaming pipeline: a format reader at the left edge and a writer at the right that sinks to a file (round-trip) or a content store (overlays); a serial chain of annotate, translate and check tools in the middle, with the translate stage fanning out across parallel goroutines; content-memory, terms and a translation provider (LLM or MT) feeding it from above; and a gRPC plugin band (Okapi bridge, tier-3 segmenter/media/OCR plugins, remote plugins) feeding it from below. Each stage is a goroutine joined by Part channels, and the whole pipeline runs over many documents in parallel.`)}),(0,g.jsx)(`rect`,{x:120,y:80,width:770,height:210,rx:18,className:`kdx-ghost`}),(0,g.jsx)(`rect`,{x:110,y:88,width:770,height:210,rx:18,className:`kdx-ghost`}),(0,g.jsx)(`rect`,{x:100,y:96,width:770,height:210,rx:18,className:`kdx-channel`,fill:`none`,opacity:.4}),(0,g.jsx)(`text`,{x:862,y:74,textAnchor:`end`,fontSize:9,className:`kdx-note`,children:a(`4c8lsKwbomK`,`documents in parallel · MaxConcurrency`)}),(0,g.jsxs)(`g`,{children:[(0,g.jsx)(`rect`,{x:252,y:18,width:124,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,g.jsx)(`text`,{x:314,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:a(`filPqt6wNVT`,`Terms`)}),(0,g.jsx)(`text`,{x:314,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:a(`awT8zLf0NgV`,`term-lookup`)}),(0,g.jsx)(`path`,{d:`M314,56 L314,164`,className:`kdx-link kdx-link--resource`}),(0,g.jsx)(`rect`,{x:454,y:18,width:124,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,g.jsx)(`text`,{x:516,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:a(`9YR50ctORII`,`Content Memory`)}),(0,g.jsx)(`text`,{x:516,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:a(`1QxllqrtZ3p`,`recycle`)}),(0,g.jsx)(`path`,{d:`M516,56 L516,114`,className:`kdx-link kdx-link--resource`}),(0,g.jsx)(`rect`,{x:618,y:18,width:132,height:38,rx:8,className:`kdx-chip kdx-chip--resource`}),(0,g.jsx)(`text`,{x:684,y:35,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:a(`juiD0aESFbX`,`Provider`)}),(0,g.jsx)(`text`,{x:684,y:48,textAnchor:`middle`,fontSize:8,className:`kdx-chip-sub`,children:a(`8XWp9vbNa8T`,`LLM or MT`)}),(0,g.jsx)(`path`,{d:`M684,56 L620,116`,className:`kdx-link kdx-link--resource`})]}),(0,g.jsx)(`text`,{x:60,y:98,textAnchor:`middle`,fontSize:9.5,className:`kdx-cap`,children:a(`bSFPNE33huo`,`Sources`)}),(0,g.jsx)(`text`,{x:111,y:252,textAnchor:`middle`,fontSize:8,className:`kdx-note`,children:a(`s60OYC3RXR`,`source binding · file`)}),de.map((e,t)=>{let n=fe(t);return(0,g.jsxs)(`g`,{children:[(0,g.jsx)(`rect`,{x:14,y:n,width:92,height:28,rx:6,className:`kdx-file`}),(0,g.jsx)(`text`,{x:60,y:n+18,textAnchor:`middle`,fontSize:9.5,className:`kdx-file-t`,children:e}),(0,g.jsx)(`path`,{d:`M106,${n+14} L116,${_}`,className:`kdx-thin`}),(0,g.jsx)(h,{path:`M106,${n+14} L116,${_}`,dur:2.2,begin:t*.4,cls:`kdx-dot--io`,r:2.4})]},e)}),(0,g.jsx)(re,{x:116,w:96,role:`io`,title:a(`6ACbqDe4wLY`,`Reader`),sub:`DataFormat`}),(0,g.jsx)(ie,{x1:212,x2:248}),(0,g.jsx)(h,{path:`M212,196 L248,196`,dur:1.5,begin:0,cls:`kdx-dot--io`}),(0,g.jsx)(h,{path:`M212,196 L248,196`,dur:1.5,begin:.75,cls:`kdx-dot--io`}),(0,g.jsx)(re,{x:248,w:132,role:`annotate`,title:a(`eejzKyzCTDX`,`Annotate`),sub:`segment · terms · NER`}),(0,g.jsx)(ie,{x1:380,x2:412}),(0,g.jsx)(`rect`,{x:430,y:114,width:172,height:166,rx:12,className:`kdx-bracket`}),(0,g.jsx)(`text`,{x:516,y:106,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:a(`bVScTHjtG7A`,`fan-out · N goroutines`)}),(0,g.jsx)(`text`,{x:516,y:296,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:a(`knbHHXtZiDi`,`ordered fan-in`)}),ce.map(e=>{let t=y(e),n=`M412,${_} L440,${t+v/2}`,i=`M592,${t+v/2} L622,${_}`;return(0,g.jsxs)(`g`,{children:[(0,g.jsx)(`path`,{d:n,className:`kdx-thin kdx-thin--t`}),(0,g.jsx)(`path`,{d:i,className:`kdx-thin kdx-thin--t`}),(0,g.jsx)(`rect`,{x:le,y:t,width:ue,height:v,rx:7,className:`kdx-worker`}),(0,g.jsx)(`rect`,{x:le,y:t,width:ue,height:v,rx:7,className:`kdx-pulse`,style:{animationDelay:`${e*.8}s`}}),(0,g.jsx)(`text`,{x:452,y:t+18,fontSize:10.5,className:`kdx-label`,children:a(`9FooG3EmV4M`,`Translate`)}),(0,g.jsx)(`text`,{x:582,y:t+18,textAnchor:`end`,fontSize:8,className:`kdx-sub kdx-sub--translate`,children:r(`bHGTgrExB3r`,`goroutine {value}`,{},{value:e+1})})]},e)}),(0,g.jsx)(h,{path:`M380,${_} L412,${_} L440,${y(0)+v/2} L592,${y(0)+v/2} L622,${_}`,dur:2.6,begin:.2,cls:`kdx-dot--translate`,r:2.6}),(0,g.jsx)(h,{path:`M380,${_} L412,${_} L440,${y(2)+v/2} L592,${y(2)+v/2} L622,${_}`,dur:2.6,begin:1.3,cls:`kdx-dot--translate`,r:2.6}),(0,g.jsx)(ie,{x1:622,x2:654}),(0,g.jsx)(re,{x:654,w:96,role:`qa`,title:a(`crebUUXnGLq`,`Checks`),sub:`qa · enforce`}),(0,g.jsx)(ie,{x1:750,x2:786}),(0,g.jsx)(h,{path:`M750,196 L786,196`,dur:1.5,begin:.4,cls:`kdx-dot--io`}),(0,g.jsx)(h,{path:`M750,196 L786,196`,dur:1.5,begin:1.15,cls:`kdx-dot--io`}),(0,g.jsx)(re,{x:786,w:96,role:`io`,title:a(`Y1JC5S0T1M`,`Writer`),sub:`DataFormat`}),(0,g.jsx)(`text`,{x:940,y:98,textAnchor:`middle`,fontSize:9.5,className:`kdx-cap`,children:a(`c0q8wQbjz5p`,`Sink`)}),(0,g.jsx)(`text`,{x:888,y:262,textAnchor:`middle`,fontSize:8,className:`kdx-note`,children:a(`5LpkqCgeTIN`,`sink binding · file or store`)}),(0,g.jsx)(`path`,{d:`M882,${_} L894,175`,className:`kdx-thin`}),(0,g.jsx)(h,{path:`M882,${_} L894,175`,dur:2.2,begin:.6,cls:`kdx-dot--io`,r:2.4}),(0,g.jsx)(`rect`,{x:894,y:158,width:92,height:34,rx:7,className:`kdx-file`}),(0,g.jsx)(`text`,{x:940,y:174,textAnchor:`middle`,fontSize:11,className:`kdx-file-t`,children:a(`6keU5QTDUXA`,`file`)}),(0,g.jsx)(`text`,{x:940,y:185,textAnchor:`middle`,fontSize:7.5,className:`kdx-note`,children:a(`7NzrmNTfQbC`,`round-trip`)}),(0,g.jsx)(`path`,{d:`M882,${_} L894,217`,className:`kdx-thin`}),(0,g.jsx)(h,{path:`M882,${_} L894,217`,dur:2.2,begin:1.2,cls:`kdx-dot--io`,r:2.4}),(0,g.jsx)(`rect`,{x:894,y:200,width:92,height:34,rx:7,className:`kdx-chip kdx-chip--resource`}),(0,g.jsx)(`text`,{x:940,y:216,textAnchor:`middle`,fontSize:11,className:`kdx-chip-t`,children:a(`2LW39EVnpyn`,`store`)}),(0,g.jsx)(`text`,{x:940,y:227,textAnchor:`middle`,fontSize:7.5,className:`kdx-chip-sub`,children:a(`81vQ29mPavb`,`overlays`)}),(0,g.jsx)(`rect`,{x:40,y:360,width:920,height:120,rx:14,className:`kdx-band`}),(0,g.jsx)(`text`,{x:60,y:382,fontSize:9.5,className:`kdx-cap`,children:a(`aHNNDJpStjd`,`Plugin system · gRPC subprocess bridge`)}),(0,g.jsx)(`rect`,{x:92,y:400,width:176,height:48,rx:9,className:`kdx-chip`}),(0,g.jsx)(`text`,{x:180,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:a(`s4rJ3YsKB1`,`Okapi Bridge`)}),(0,g.jsx)(`text`,{x:180,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:a(`g2EPoUWlyjB`,`Java filters`)}),(0,g.jsx)(`path`,{d:`M180,400 L164,228`,className:`kdx-link kdx-link--plugin`}),(0,g.jsx)(`rect`,{x:300,y:400,width:176,height:48,rx:9,className:`kdx-chip`}),(0,g.jsx)(`text`,{x:388,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:a(`bXQ9Nn60fti`,`Tier-3 plugins`)}),(0,g.jsx)(`text`,{x:388,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:a(`alm2LqYV5Om`,`segmenter · media · OCR`)}),(0,g.jsx)(`path`,{d:`M388,400 L314,228`,className:`kdx-link kdx-link--plugin`}),(0,g.jsx)(`rect`,{x:560,y:400,width:200,height:48,rx:9,className:`kdx-chip`}),(0,g.jsx)(`text`,{x:660,y:420,textAnchor:`middle`,fontSize:11.5,className:`kdx-chip-t`,children:a(`9eL11530bwp`,`Remote / native plugin`)}),(0,g.jsx)(`text`,{x:660,y:435,textAnchor:`middle`,fontSize:8.5,className:`kdx-chip-sub`,children:a(`8IZj14wQGSn`,`custom tool · format`)}),(0,g.jsx)(`path`,{d:`M660,400 L702,228`,className:`kdx-link kdx-link--plugin`})]})})})})}var g,oe,se,_,ce,le,ue,v,y,de,fe;function pe(){return(pe=e((()=>{i(),t(),g=n(),oe=1e3,se=520,_=196,ce=[0,1,2,3],le=440,ue=152,v=28,y=e=>125+e*38,de=[`app.json`,`page.html`,`guide.docx`,`strings.xml`],fe=e=>112+e*40,ae.__docgenInfo={description:``,methods:[],displayName:`ArchitectureDiagram`,props:{animated:{required:!1,tsType:{name:`boolean`},description:`Animate the flowing Parts and the fan-out pulse. Default true.`,defaultValue:{value:`true`,computed:!1}}}}})))()}function me({x:e,y:t,text:n}){let r=n.length*5.6+12;return(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`rect`,{x:e-r/2,y:t-9,width:r,height:15,rx:7,className:`kdx-pill`}),(0,b.jsx)(`text`,{x:e,y:t+2,textAnchor:`middle`,fontSize:8.5,className:`kdx-chan`,children:n})]})}function he({placed:e,arrow:t}){let n=e.length?t===`right`?be:xe:0,r=n+ye/2;return(0,b.jsx)(b.Fragment,{children:e.map((i,a)=>{let o=i.x+i.w/2,s=e[a+1];return(0,b.jsxs)(`g`,{children:[(0,b.jsx)(`rect`,{x:i.x,y:n,width:i.w,height:ye,rx:9,className:`kdx-box${De(i.role)}`}),(0,b.jsx)(`text`,{x:o,y:i.sub?r-1:r+4,textAnchor:`middle`,fontSize:12,className:`kdx-label`,children:i.label}),i.sub&&(0,b.jsx)(`text`,{x:o,y:r+13,textAnchor:`middle`,fontSize:9,className:`kdx-sub${Oe(i.role)}`,children:i.sub}),s&&(t===`right`?(0,b.jsx)(`line`,{x1:i.x+i.w,y1:r,x2:s.x-4,y2:r,className:`kdx-channel`,markerEnd:`url(#kdx-arr-r)`}):(0,b.jsx)(`line`,{x1:i.x+i.w-4,y1:r,x2:s.x,y2:r,className:`kdx-channel`,markerStart:`url(#kdx-arr-l)`}))]},`${i.label}-${a}`)})})}function ge({forward:e,back:t,hub:n,forwardIndex:r=1,backIndex:i=0,forwardLabel:a,backLabel:o,ariaLabel:s=`Round-trip: extract forward, merge back, sharing a content memory`,caption:c,animated:l=!1}){let u=Ee(e,x),d=Ee(t,x),f=Math.max(u.end,d.end)+x,p=f/2-Ce/2,m=f/2,ee=u.placed[Math.min(r,u.placed.length-1)],te=d.placed[Math.min(i,d.placed.length-1)],ne=ee?ee.x+ee.w/2:m,h=te?te.x+te.w/2:m;return(0,b.jsxs)(`div`,{className:`kdx${l?` kdx--animated`:``}`,children:[(0,b.jsx)(`div`,{className:`kdx-scroll`,children:(0,b.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(f,520),maxWidth:f},children:(0,b.jsxs)(`svg`,{viewBox:`0 0 ${f} 290`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":s,children:[(0,b.jsxs)(`defs`,{children:[(0,b.jsx)(`marker`,{id:`kdx-arr-r`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,b.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,b.jsx)(`marker`,{id:`kdx-arr-l`,markerWidth:`7`,markerHeight:`7`,refX:`0.5`,refY:`3`,orient:`auto`,children:(0,b.jsx)(`path`,{d:`M6,0 L0,3 L6,6 Z`,className:`kdx-arrow`})})]}),(0,b.jsx)(`path`,{d:`M${ne},104 L${m},${Se}`,className:`kdx-link kdx-link--resource`}),a&&(0,b.jsx)(me,{x:(ne+m)/2,y:115,text:a}),(0,b.jsx)(`path`,{d:`M${m},180 L${h},${xe}`,className:`kdx-link kdx-link--resource`}),o&&(0,b.jsx)(me,{x:(h+m)/2,y:197,text:o}),(0,b.jsx)(he,{placed:u.placed,arrow:`right`}),(0,b.jsx)(he,{placed:d.placed,arrow:`left`}),(0,b.jsx)(`rect`,{x:p,y:Se,width:Ce,height:we,rx:10,className:`kdx-hub`}),(0,b.jsx)(`text`,{x:m,y:n.sub?150:157,textAnchor:`middle`,fontSize:12.5,className:`kdx-label`,children:n.label}),n.sub&&(0,b.jsx)(`text`,{x:m,y:166,textAnchor:`middle`,fontSize:9,className:`kdx-sub`,style:{fill:`var(--kdx-resource)`},children:n.sub})]})})}),c&&(0,b.jsx)(`p`,{className:`kdx-caption`,children:c})]})}var b,_e,ve,ye,be,xe,Se,Ce,we,x,Te,Ee,De,Oe;function ke(){return(ke=e((()=>{t(),b=n(),_e=44,ve=7.2,ye=50,be=54,xe=214,Se=126,Ce=150,we=54,x=36,Te=e=>Math.max(84,Math.round(Math.max((e.label??``).length,(e.sub??``).length)*ve)+26),Ee=(e,t)=>{let n=t;return{placed:e.map(e=>{let t=Te(e),r={...e,x:n,w:t};return n+=t+_e,r}),end:n-_e}},De=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Oe=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,ge.__docgenInfo={description:``,methods:[],displayName:`RoundTripDiagram`,props:{forward:{required:!0,tsType:{name:`Array`,elements:[{name:`PipelineStage`}],raw:`PipelineStage[]`},description:`Top row, left→right (right-pointing arrows).`},back:{required:!0,tsType:{name:`Array`,elements:[{name:`PipelineStage`}],raw:`PipelineStage[]`},description:`Bottom row, displayed left→right with left-pointing (return) arrows.`},hub:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ label: string; sub?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`sub`,value:{name:`string`,required:!1}}]}},description:``},forwardIndex:{required:!1,tsType:{name:`number`},description:"Index in `forward` whose stage links down to the hub. Default 1.",defaultValue:{value:`1`,computed:!1}},backIndex:{required:!1,tsType:{name:`number`},description:"Index in `back` whose stage links up from the hub. Default 0.",defaultValue:{value:`0`,computed:!1}},forwardLabel:{required:!1,tsType:{name:`string`},description:`Label on the forward→hub edge (e.g. "pre-fill").`},backLabel:{required:!1,tsType:{name:`string`},description:`Label on the hub→back edge (e.g. "absorb").`},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessible name for the SVG. Override when the diagram depicts something
other than the default extract/merge round trip — the built-in label would
otherwise mis-describe the figure to a screen reader.`,defaultValue:{value:`"Round-trip: extract forward, merge back, sharing a content memory"`,computed:!1}},caption:{required:!1,tsType:{name:`string`},description:``},animated:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})))()}function Ae({lanes:e,handoff:t,caption:n}){let r=Math.max(260,...e.map(e=>Math.max(e.title.length*7.6+(e.sub?e.sub.length*Fe+24:0)+28,...e.steps.map(e=>e.length*Fe+28)))),i=je,a=i+r/2,o=je,s=e.map(e=>{let t=Le(e),n={l:e,y:o,h:t};return o+=t+Pe,n}),c=o-Pe+je,l=r+28;return(0,S.jsxs)(`div`,{className:`kdx`,children:[(0,S.jsx)(`div`,{className:`kdx-scroll`,children:(0,S.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(l,460),maxWidth:l},children:(0,S.jsxs)(`svg`,{viewBox:`0 0 ${l} ${c}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Concurrent lanes: ${e.map(e=>e.title).join(`, `)}`,children:[(0,S.jsx)(`defs`,{children:(0,S.jsx)(`marker`,{id:`kdx-arrow-dn`,markerWidth:`9`,markerHeight:`9`,refX:`3`,refY:`6`,orient:`auto`,children:(0,S.jsx)(`path`,{d:`M0,0 L6,0 L3,6 Z`,className:`kdx-arrow`})})}),s.map(({l:e,y:n,h:o},c)=>{let l=s[c+1];return(0,S.jsxs)(`g`,{children:[(0,S.jsx)(`rect`,{x:i,y:n,width:r,height:o,rx:10,className:`kdx-box${Ie(e.role)}`}),(0,S.jsx)(`text`,{x:28,y:n+19,fontSize:14,className:`kdx-label`,children:e.title}),e.sub&&(0,S.jsx)(`text`,{x:i+r-12,y:n+19,textAnchor:`end`,fontSize:10.5,className:`kdx-chip-sub`,children:e.sub}),(0,S.jsx)(`line`,{x1:24,y1:n+C-4,x2:i+r-10,y2:n+C-4,className:`kdx-divider`}),e.steps.map((e,t)=>(0,S.jsx)(`text`,{x:28,y:n+C+t*Me+14,fontSize:11.5,className:`kdx-mono`,xmlSpace:`preserve`,children:e},t)),l&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`line`,{x1:a,y1:n+o,x2:a,y2:l.y-2,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-dn)`}),t&&(0,S.jsxs)(`g`,{children:[(0,S.jsx)(`rect`,{x:a+8,y:(n+o+l.y)/2-9.5,width:t.length*6.6+14,height:18,rx:8,className:`kdx-pill`}),(0,S.jsx)(`text`,{x:a+15,y:(n+o+l.y)/2+3,fontSize:10.5,className:`kdx-chan`,children:t})]})]})]},`${e.title}-${c}`)})]})})}),n&&(0,S.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var S,je,C,Me,Ne,Pe,Fe,Ie,Le;function Re(){return(Re=e((()=>{t(),S=n(),je=14,C=28,Me=19,Ne=12,Pe=40,Fe=6.9,Ie=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Le=e=>C+e.steps.length*Me+Ne,Ae.__docgenInfo={description:``,methods:[],displayName:`LanesDiagram`,props:{lanes:{required:!0,tsType:{name:`Array`,elements:[{name:`LaneThread`}],raw:`LaneThread[]`},description:``},handoff:{required:!1,tsType:{name:`string`},description:`Label on the arrow handing off from one lane to the next.`},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}function ze({actors:e,messages:t,caption:n}){let r=Be,i=e.map(e=>{let t=Je(e),n=r+t/2;return r+=t,{...e,cx:n}}),a=r+Be,o=e=>He+e*Ue,s=(t.length?o(t.length-1):He)+18,c=s+(n?6:14);return(0,w.jsxs)(`div`,{className:`kdx`,children:[(0,w.jsx)(`div`,{className:`kdx-scroll`,children:(0,w.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(a,520),maxWidth:a},children:(0,w.jsxs)(`svg`,{viewBox:`0 0 ${a} ${c}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Sequence across ${e.map(e=>e.label).join(`, `)}`,children:[(0,w.jsxs)(`defs`,{children:[(0,w.jsx)(`marker`,{id:`kdx-sw-r`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,w.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,w.jsx)(`marker`,{id:`kdx-sw-l`,markerWidth:`7`,markerHeight:`7`,refX:`0.5`,refY:`3`,orient:`auto`,children:(0,w.jsx)(`path`,{d:`M6,0 L0,3 L6,6 Z`,className:`kdx-arrow`})})]}),i.map((e,t)=>{let n=Je(e),r=e.cx-n/2+6,i=n-12;return(0,w.jsxs)(`g`,{children:[(0,w.jsx)(`rect`,{x:r,y:Be,width:i,height:Ve,rx:9,className:`kdx-box${Ke(e.role)}`}),(0,w.jsx)(`text`,{x:e.cx,y:e.sub?34:41,textAnchor:`middle`,fontSize:12,className:`kdx-label`,children:e.label}),e.sub&&(0,w.jsx)(`text`,{x:e.cx,y:47,textAnchor:`middle`,fontSize:9,className:`kdx-sub${qe(e.role)}`,children:e.sub}),(0,w.jsx)(`line`,{x1:e.cx,y1:56,x2:e.cx,y2:s,className:`kdx-channel`,opacity:.55})]},`actor-${t}`)}),t.map((e,t)=>{let n=o(t),r=i[Math.min(e.from,i.length-1)],a=i[Math.min(e.to,i.length-1)];if(e.from===e.to)return(0,w.jsxs)(`g`,{children:[(0,w.jsx)(`circle`,{cx:r.cx,cy:n,r:2.6,className:`kdx-node kdx-node--io`}),(0,w.jsx)(`text`,{x:r.cx+12,y:n-3,fontSize:9.5,className:`kdx-note`,children:e.label}),e.detail&&(0,w.jsx)(`text`,{x:r.cx+12,y:n+9,fontSize:9,className:`kdx-chan`,children:e.detail})]},`msg-${t}`);let s=a.cx>r.cx,c=s?r.cx+3:r.cx-3,l=s?a.cx-3:a.cx+3,u=(r.cx+a.cx)/2;return(0,w.jsxs)(`g`,{children:[(0,w.jsx)(`line`,{x1:c,y1:n,x2:l,y2:n,className:`kdx-channel`,markerEnd:s?`url(#kdx-sw-r)`:`url(#kdx-sw-l)`}),(0,w.jsx)(`text`,{x:u,y:n-5,textAnchor:`middle`,fontSize:9.5,className:`kdx-chan`,children:e.label}),e.detail&&(0,w.jsx)(`text`,{x:u,y:n+11,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:e.detail})]},`msg-${t}`)})]})})}),n&&(0,w.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var w,Be,Ve,He,Ue,We,Ge,Ke,qe,Je;function Ye(){return(Ye=e((()=>{t(),w=n(),Be=16,Ve=40,He=56,Ue=38,We=7.2,Ge=150,Ke=e=>e&&e!==`tool`?` kdx-box--${e}`:``,qe=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,Je=e=>Math.max(Ge,Math.round(Math.max(e.label.length,(e.sub??``).length)*We)+28),ze.__docgenInfo={description:``,methods:[],displayName:`SwimlaneDiagram`,props:{actors:{required:!0,tsType:{name:`Array`,elements:[{name:`SwimlaneActor`}],raw:`SwimlaneActor[]`},description:``},messages:{required:!0,tsType:{name:`Array`,elements:[{name:`SwimlaneMessage`}],raw:`SwimlaneMessage[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Xe({rungs:e,caption:t}){let n=e.length,r=Math.max(34,...e.map(e=>Math.round(e.grade.length*tt)+14)),i=Math.max(60,...e.map(e=>Math.round(Math.max(e.name.length*$e,(e.gloss??``).length*et)))),a=O+r+10+i+12,o=e=>E+(n-1-e)*Ze,s=e=>E+e*(a+Qe),c=e=>o(e)+D/2,l=E+n*a+(n-1)*Qe+E,u=E+(n-1)*Ze+D+E;return(0,T.jsxs)(`div`,{className:`kdx`,children:[(0,T.jsx)(`div`,{className:`kdx-scroll`,children:(0,T.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(l,460),maxWidth:l},children:(0,T.jsxs)(`svg`,{viewBox:`0 0 ${l} ${u}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Axis ladder: ${e.map(e=>`${e.grade} ${e.name}`).join(` then `)}`,children:[(0,T.jsx)(`defs`,{children:(0,T.jsx)(`marker`,{id:`kdx-arrow-lad`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,T.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})})}),e.map((t,n)=>{let i=s(n),l=o(n),u=c(n),d=e[n+1],f=i+O+r/2,p=i+O+r+10;return(0,T.jsxs)(`g`,{children:[d&&(0,T.jsx)(`line`,{x1:i+a,y1:u,x2:s(n+1)-4,y2:c(n+1),className:`kdx-channel`,markerEnd:`url(#kdx-arrow-lad)`}),(0,T.jsx)(`rect`,{x:i,y:l,width:a,height:D,rx:9,className:`kdx-box`}),(0,T.jsx)(`rect`,{x:i+O,y:l+13,width:r,height:20,rx:6,className:`kdx-box kdx-box--io`}),(0,T.jsx)(`text`,{x:f,y:u+3.5,textAnchor:`middle`,fontSize:11,className:`kdx-sub kdx-sub--io`,children:t.grade}),(0,T.jsx)(`text`,{x:p,y:t.gloss?l+20:u+4,fontSize:12,className:`kdx-label`,children:t.name}),t.gloss&&(0,T.jsx)(`text`,{x:p,y:l+34,fontSize:9.5,className:`kdx-note`,children:t.gloss})]},`${t.grade}-${n}`)})]})})}),t&&(0,T.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var T,E,D,Ze,Qe,$e,et,tt,O;function nt(){return(nt=e((()=>{t(),T=n(),E=14,D=46,Ze=28,Qe=24,$e=7,et=6,tt=7.4,O=10,Xe.__docgenInfo={description:``,methods:[],displayName:`AxisLadderDiagram`,props:{rungs:{required:!0,tsType:{name:`Array`,elements:[{name:`AxisRung`}],raw:`AxisRung[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}function rt({families:e,caption:t}){let n=e.map(e=>Math.max(120,Math.round(e.name.length*lt)+24,Math.round(e.tagline.length*ut)+24,...e.axes.map(e=>Math.round(e.label.length*dt)+14+gt(e.range)+24))),r=it,i=e.map((e,t)=>{let i={f:e,x:r,w:n[t],role:pt[t%pt.length]};return r+=n[t]+at,i}),a=r-at+it,o=e=>ot+e.axes.length*st+ct,s=Math.max(...e.map(o))+28;return(0,k.jsxs)(`div`,{className:`kdx`,children:[(0,k.jsx)(`div`,{className:`kdx-scroll`,children:(0,k.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(a,520),maxWidth:a},children:(0,k.jsx)(`svg`,{viewBox:`0 0 ${a} ${s}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Axis families: ${e.map(e=>e.name).join(`, `)}`,children:i.map(({f:e,x:t,w:n,role:r},i)=>(0,k.jsxs)(`g`,{children:[(0,k.jsx)(`rect`,{x:t,y:it,width:n,height:o(e),rx:10,className:`kdx-box${mt(r)}`}),(0,k.jsx)(`text`,{x:t+12,y:34,fontSize:13.5,className:`kdx-label`,style:{fill:`var(--kdx-${r})`},children:e.name}),(0,k.jsx)(`text`,{x:t+12,y:47,fontSize:9.5,className:`kdx-note`,children:e.tagline}),(0,k.jsx)(`line`,{x1:t+10,y1:52,x2:t+n-10,y2:52,className:`kdx-divider`}),e.axes.map((e,i)=>{let a=54+i*st+st/2,o=gt(e.range),s=t+n-12-o;return(0,k.jsxs)(`g`,{children:[(0,k.jsx)(`text`,{x:t+14,y:a+3.5,fontSize:11,className:`kdx-label`,children:e.label}),(0,k.jsx)(`rect`,{x:s,y:a-10,width:o,height:20,rx:6,className:`kdx-box${mt(r)}`}),(0,k.jsx)(`text`,{x:s+o/2,y:a+3,textAnchor:`middle`,fontSize:9.5,className:`kdx-sub${ht(r)}`,children:e.range})]},`${e.label}-${i}`)})]},`${e.name}-${i}`))})})}),t&&(0,k.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var k,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt;function _t(){return(_t=e((()=>{t(),k=n(),it=14,at=18,ot=40,st=26,ct=12,lt=7.6,ut=6,dt=7,ft=6.6,pt=[`io`,`qa`,`annotate`,`translate`],mt=e=>` kdx-box--${e}`,ht=e=>` kdx-sub--${e}`,gt=e=>Math.round(e.length*ft)+14,rt.__docgenInfo={description:``,methods:[],displayName:`AxisFamiliesDiagram`,props:{families:{required:!0,tsType:{name:`Array`,elements:[{name:`AxisFamily`}],raw:`AxisFamily[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}function vt({steps:e,caption:t}){let n=e.length,r=e.some(e=>e.sub)?42:32,i=e=>Math.max(72,Math.round(Math.max(e.label.length*bt,(e.sub??``).length*xt))+24),a=Math.max(...e.map(i)),o=Math.max(120,(a+40)*n/(2*Math.PI)),s=o+a/2+yt,c=2*s,l=2*s,u=2*Math.PI/n,d=e=>-Math.PI/2+e*u,f=e=>[s+o*Math.cos(e),s+o*Math.sin(e)],p=(a/2+6)/o;return(0,A.jsxs)(`div`,{className:`kdx`,children:[(0,A.jsx)(`div`,{className:`kdx-scroll`,children:(0,A.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(c,320),maxWidth:Math.min(c,440)},children:(0,A.jsxs)(`svg`,{viewBox:`0 0 ${c} ${l}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Cycle: ${e.map(e=>e.label).join(` then `)}, then back to start`,children:[(0,A.jsx)(`defs`,{children:(0,A.jsx)(`marker`,{id:`kdx-arrow-cyc`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,A.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})})}),e.map((e,t)=>{let[n,r]=f(d(t)+p),[i,a]=f(d(t)+u-p);return(0,A.jsx)(`path`,{d:`M${n},${r} A ${o} ${o} 0 0 1 ${i},${a}`,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-cyc)`},`arc-${t}`)}),e.map((e,t)=>{let[n,a]=f(d(t)),o=i(e);return(0,A.jsxs)(`g`,{children:[(0,A.jsx)(`rect`,{x:n-o/2,y:a-r/2,width:o,height:r,rx:9,className:`kdx-box`}),(0,A.jsx)(`text`,{x:n,y:e.sub?a-1:a+4,textAnchor:`middle`,fontSize:11.5,className:`kdx-label`,children:e.label}),e.sub&&(0,A.jsx)(`text`,{x:n,y:a+11,textAnchor:`middle`,fontSize:8.5,className:`kdx-note`,children:e.sub})]},`${e.label}-${t}`)})]})})}),t&&(0,A.jsx)(`p`,{className:`kdx-caption`,children:t})]})}var A,yt,bt,xt;function St(){return(St=e((()=>{t(),A=n(),yt=16,bt=7,xt=6,vt.__docgenInfo={description:``,methods:[],displayName:`CycleDiagram`,props:{steps:{required:!0,tsType:{name:`Array`,elements:[{name:`CycleStep`}],raw:`CycleStep[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Ct({boxes:e,edges:t=[],caption:n}){let r=Math.max(...e.map(e=>e.col))+1,i=Array.from({length:r},(t,n)=>e.map((e,t)=>({b:e,i:t})).filter(e=>e.b.col===n)),a=i.map(e=>Math.max(0,...e.map(({b:e})=>Rt(e)))),o=[],s=M;for(let e=0;e<r;e++)o.push(s),s+=a[e]+wt;let c=s-wt+M,l=i.map(e=>e.reduce((e,{b:t})=>e+It(t),0)+Math.max(0,e.length-1)*Tt),u=Math.max(...l),d=M+(e.some(e=>e.self)?At:0),f=d+u+M,p=[];i.forEach((e,t)=>{let n=d+(u-l[t])/2;e.forEach(({b:e,i:r})=>{let i=It(e);p[r]={x:o[t],y:n,w:a[t],h:i},n+=i+Tt})});let m=new Map;return(0,j.jsxs)(`div`,{className:`kdx`,children:[(0,j.jsx)(`div`,{className:`kdx-scroll`,children:(0,j.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(c,520),maxWidth:c},children:(0,j.jsxs)(`svg`,{viewBox:`0 0 ${c} ${f}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Types: ${e.map(e=>e.name).join(`, `)}`,children:[(0,j.jsxs)(`defs`,{children:[(0,j.jsx)(`marker`,{id:`kdx-arrow-type-r`,markerWidth:`8`,markerHeight:`8`,refX:`5`,refY:`3`,orient:`auto`,children:(0,j.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,j.jsx)(`marker`,{id:`kdx-arrow-type-d`,markerWidth:`8`,markerHeight:`8`,refX:`3`,refY:`5.5`,orient:`auto`,children:(0,j.jsx)(`path`,{d:`M0,0 L6,0 L3,6 Z`,className:`kdx-arrow`})})]}),t.map((e,t)=>{let n=p[Math.min(e.from,p.length-1)],r=p[Math.min(e.to,p.length-1)],i=n.y+n.h/2,a=r.y+r.h/2,o=n.x+n.w,s=r.x,c=m.get(e.from)??0;m.set(e.from,c+1);let l=o+(s-o)*(.34+c%3*.16),u=(e.label??``).length*5.8+12;return(0,j.jsxs)(`g`,{children:[(0,j.jsx)(`path`,{d:`M${o},${i} H${l} V${a} H${s-3}`,className:`kdx-channel`,markerEnd:`url(#kdx-arrow-type-r)`}),e.label&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`rect`,{x:s-8-u,y:a-18,width:u,height:16,rx:7,className:`kdx-pill`}),(0,j.jsx)(`text`,{x:s-15,y:a-7,textAnchor:`end`,fontSize:9,className:`kdx-chan`,children:e.label})]})]},`edge-${t}`)}),e.map((e,t)=>{let{x:n,y:r,w:i,h:a}=p[t],o=e.fields??[],s=r+Ft(e)-3;return(0,j.jsxs)(`g`,{children:[e.self&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(`path`,{d:`M${n+i*.3},${r} V${r-14} H${n+i*.7} V${r-3}`,className:`kdx-loop`,markerEnd:`url(#kdx-arrow-type-d)`}),(0,j.jsx)(`text`,{x:n+i/2,y:r-19,textAnchor:`middle`,fontSize:9,className:`kdx-note`,children:e.self})]}),(0,j.jsx)(`rect`,{x:n,y:r,width:i,height:a,rx:10,className:`kdx-box${Nt(e.role)}`}),(0,j.jsx)(`text`,{x:n+12,y:r+19,fontSize:13,className:`kdx-label`,children:e.name}),e.sub&&(0,j.jsx)(`text`,{x:n+12,y:r+30,fontSize:9.5,className:`kdx-sub${Pt(e.role)}`,children:e.sub}),o.length>0&&(0,j.jsx)(`line`,{x1:n+10,y1:s,x2:n+i-10,y2:s,className:`kdx-divider`}),o.map((t,a)=>{let o=r+Ft(e)+a*Ot+Ot/2+3;return(0,j.jsxs)(`g`,{children:[(0,j.jsx)(`text`,{x:n+14,y:o,fontSize:10.5,className:`kdx-mono`,children:t.name}),(0,j.jsx)(`text`,{x:n+i-14,y:o,textAnchor:`end`,fontSize:10.5,className:`kdx-sub`,children:t.type})]},`${t.name}-${a}`)})]},`${e.name}-${t}`)})]})})}),n&&(0,j.jsx)(`p`,{className:`kdx-caption`,children:n})]})}var j,M,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt;function zt(){return(zt=e((()=>{t(),j=n(),M=14,wt=86,Tt=18,Et=28,Dt=12,Ot=18,kt=10,At=26,jt=7.6,Mt=6.6,Nt=e=>e&&e!==`tool`?` kdx-box--${e}`:``,Pt=e=>e&&e!==`tool`?` kdx-sub--${e}`:``,Ft=e=>Et+(e.sub?Dt:0),It=e=>Ft(e)+(e.fields?.length??0)*Ot+kt,Lt=e=>Math.round((e.name.length+e.type.length)*Mt)+44,Rt=e=>Math.max(130,Math.round(e.name.length*jt)+28,Math.round((e.sub??``).length*Mt)+28,...(e.fields??[]).map(Lt)),Ct.__docgenInfo={description:``,methods:[],displayName:`TypeDiagram`,props:{boxes:{required:!0,tsType:{name:`Array`,elements:[{name:`TypeBox`}],raw:`TypeBox[]`},description:``},edges:{required:!1,tsType:{name:`Array`,elements:[{name:`TypeEdge`}],raw:`TypeEdge[]`},description:``,defaultValue:{value:`[]`,computed:!1}},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Bt({nodes:e,caption:t}){let n=Ut,r=e.map(e=>{let t=Xt(e),r={n:e,x:n,w:t};return n+=t+Wt,r}),i=n-Wt+Ut,a=e.some(e=>e.kind===`gate`&&e.hold),o=Math.max(0,...e.map(e=>e.kind===`gate`&&e.hold?e.hold.length*5.6+20:0)),s=Math.max(i,o+32);return(0,N.jsxs)(`div`,{className:`kdx`,children:[(0,N.jsx)(`div`,{className:`kdx-scroll`,children:(0,N.jsx)(`div`,{className:`kdx-canvas`,style:{minWidth:Math.min(s,520),maxWidth:s},children:(0,N.jsxs)(`svg`,{viewBox:`0 0 ${s} ${88+(a?72:0)+(t?4:14)}`,xmlns:`http://www.w3.org/2000/svg`,role:`img`,"aria-label":`Source-first loop: ${e.map(e=>e.label).join(` then `)}`,children:[(0,N.jsxs)(`defs`,{children:[(0,N.jsx)(`marker`,{id:`kdx-gl-arrow`,markerWidth:`7`,markerHeight:`7`,refX:`5.5`,refY:`3`,orient:`auto`,children:(0,N.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-arrow`})}),(0,N.jsx)(`marker`,{id:`kdx-gl-hold`,markerWidth:`8`,markerHeight:`8`,refX:`5`,refY:`3`,orient:`auto`,children:(0,N.jsx)(`path`,{d:`M0,0 L6,3 L0,6 Z`,className:`kdx-hold-t`})})]}),r.map((e,t)=>{let n=r[t+1],i=n&&(0,N.jsx)(`line`,{x1:e.x+e.w,y1:54,x2:n.x-4,y2:54,className:`kdx-channel`,markerEnd:`url(#kdx-gl-arrow)`});return(0,N.jsxs)(`g`,{children:[(0,N.jsx)(Vt,{placed:e,cy:54}),i]},`${e.n.label}-${t}`)})]})})}),t&&(0,N.jsx)(`p`,{className:`kdx-caption`,children:t})]})}function Vt({placed:e,cy:t}){let{n,x:r,w:i}=e,a=r+i/2,o=t-P/2;if(n.kind===`gate`)return(0,N.jsx)(Ht,{n,x:r,w:i,cx:a,cy:t,top:o});if(n.kind===`done`)return(0,N.jsxs)(`g`,{children:[(0,N.jsx)(`rect`,{x:r,y:o,width:i,height:P,rx:10,className:`kdx-box kdx-box--io`}),(0,N.jsx)(`text`,{x:a,y:t+5,textAnchor:`middle`,fontSize:13,className:`kdx-gate-t`,children:n.label})]});let s=n.steps??[],c=n.role?` kdx-phase--${n.role}`:``,l=s.length?o+18:t+4;return(0,N.jsxs)(`g`,{children:[(0,N.jsx)(`rect`,{x:r,y:o,width:i,height:P,rx:10,className:`kdx-phase${c}`}),(0,N.jsx)(`text`,{x:a,y:l,textAnchor:`middle`,fontSize:12,className:`kdx-phase-t`,children:n.label}),s.map((e,t)=>(0,N.jsx)(`text`,{x:a,y:o+32+t*12,textAnchor:`middle`,fontSize:8.5,className:`kdx-phase-step`,children:e},t))]})}function Ht({n:e,x:t,w:n,cx:r,cy:i,top:a}){let o=a+P,s=[`M${t+10},${a}`,`H${t+n-10}`,`Q${t+n},${a} ${t+n},${a+10}`,`V${a+P*.62}`,`L${r},${o}`,`L${t},${a+P*.62}`,`V${a+10}`,`Q${t},${a} ${t+10},${a}`,`Z`].join(` `),c=e.sub?i-2:i+3;return(0,N.jsxs)(`g`,{children:[(0,N.jsx)(`path`,{d:s,className:`kdx-gate-fill`}),(0,N.jsx)(`path`,{d:s,className:`kdx-gate`}),(0,N.jsx)(`path`,{d:`M${r-16},${a+15} l6,6 l12,-13`,className:`kdx-gate-check`,transform:`translate(0, ${e.sub?-2:2})`}),(0,N.jsx)(`text`,{x:r,y:c+8,textAnchor:`middle`,fontSize:11,className:`kdx-gate-t`,children:e.label}),e.sub&&(0,N.jsx)(`text`,{x:r,y:c+20,textAnchor:`middle`,fontSize:8.5,className:`kdx-gate-sub`,children:e.sub}),e.hold&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`path`,{d:`M${r},${o} V${o+qt}`,className:`kdx-hold`,markerEnd:`url(#kdx-gl-hold)`}),(0,N.jsx)(`text`,{x:r,y:o+qt+14,textAnchor:`middle`,fontSize:9,className:`kdx-hold-t`,children:e.hold})]})]})}var N,Ut,P,Wt,Gt,Kt,qt,Jt,Yt,Xt;function Zt(){return(Zt=e((()=>{t(),N=n(),Ut=16,P=68,Wt=40,Gt=6.6,Kt=6.2,qt=46,Jt=e=>e.length*Gt,Yt=e=>e.length*Kt,Xt=e=>{if(e.kind===`phase`){let t=Math.max(Jt(e.label),...(e.steps??[]).map(Yt));return Math.max(150,t+28)}return e.kind===`gate`?Math.max(120,Jt(e.label)+40,Yt(e.sub??``)+40):Math.max(96,Jt(e.label)+30)},Bt.__docgenInfo={description:``,methods:[],displayName:`GatedLoopDiagram`,props:{nodes:{required:!0,tsType:{name:`Array`,elements:[{name:`union`,raw:`LoopPhase | LoopGate | LoopDone`,elements:[{name:`LoopPhase`},{name:`LoopGate`},{name:`LoopDone`}]}],raw:`LoopNode[]`},description:``},caption:{required:!1,tsType:{name:`string`},description:``}}}})))()}var F,Qt,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,$t;function en(){return(en=e((()=>{i(),pe(),ne(),l(),ke(),p(),Re(),Ye(),u(),nt(),_t(),St(),f(),zt(),Zt(),s(),F=n(),Qt={title:`Diagrams/Components`,decorators:[o],parameters:{layout:`fullscreen`}},I={name:`ArchitectureDiagram (hero)`,render:()=>(0,F.jsx)(ae,{animated:!0})},L={name:`PipelineDiagram (linear)`,render:()=>(0,F.jsx)(d,{stages:[{label:`RawDocument`},{label:`Reader`,sub:`DataFormat`,role:`io`},{label:`segmentation`,role:`annotate`},{label:`translate`,role:`translate`},{label:`qa`,role:`qa`},{label:`Writer`,sub:`DataFormat`,role:`io`}]})},R={name:`PipelineDiagram (fan-out lanes)`,render:()=>(0,F.jsx)(d,{caption:a(`1VERBHQ5Ml7`,`A stage can fan out into parallel lanes (workers / branches).`),stages:[{label:`Reader`,sub:`DataFormat`,role:`io`},{lanes:[{label:`translate`,sub:`fr`},{label:`translate`,sub:`de`},{label:`translate`,sub:`ja`}],parallelLabel:`fan-out · N goroutines`},{label:`Writer`,sub:`DataFormat`,role:`io`}]})},z={name:`StreamDiagram (Part sequence)`,render:()=>(0,F.jsx)(ee,{title:a(`9iJlDXtj9TU`,`Read(ctx)`),items:[{kind:`PartLayerStart`,detail:`format = "json"`,role:`layer`},{kind:`PartBlock`,detail:`"title"`,depth:1,role:`block`},{kind:`PartLayerStart`,detail:`embedded "html"`,depth:1,role:`layer`,note:`child layer`},{kind:`PartBlock`,detail:`"<b>Hello</b>"`,depth:2,role:`block`},{kind:`PartLayerEnd`,depth:1,role:`end`},{kind:`PartLayerEnd`,role:`end`}]})},B={name:`RoundTripDiagram (extract / merge)`,render:()=>(0,F.jsx)(ge,{forward:[{label:`authored source`,role:`io`},{label:`extract`},{label:`XLIFF / PO`},{label:`translator`}],back:[{label:`kapi merge`,role:`io`},{label:`translated XLIFF / PO`},{label:`returned`}],hub:{label:`project content memory`,sub:`pre-fill · absorb`},forwardLabel:`pre-fill`,backLabel:`absorb`})},V={name:`PhaseFlow (vertical, looping node)`,render:()=>(0,F.jsx)(c,{nodes:[{label:`Your source code`},{label:`i18n/`,sub:`KBF archive`,edge:`neokapi-i18n extract`,role:`io`,loop:[`kapi translate / pseudo / qa`,`accumulate locales in place`]},{label:`public/translations/{locale}.json`,edge:`neokapi-i18n compile`,role:`translate`}]})},H={name:`LanesDiagram (thread handoff)`,render:()=>(0,F.jsx)(Ae,{handoff:`eventQueue`,lanes:[{title:`Reader Thread`,sub:`filterPool, bounded`,role:`io`,steps:[`read source bytes`,`run the Okapi filter`,`emit events`]},{title:`Writer Thread`,sub:`writerPool, unbounded`,role:`translate`,steps:[`receive events`,`re-assemble the skeleton`,`write target bytes`]}]})},U={name:`SwimlaneDiagram (message passing)`,render:()=>(0,F.jsx)(ze,{actors:[{label:`Developer`,sub:`kapi CLI`,role:`io`},{label:`Bowrain Server`,role:`translate`},{label:`Translator`,role:`qa`}],messages:[{from:0,to:1,label:`kapi push`},{from:1,to:1,label:`translate / checks`},{from:1,to:2,label:`assign`},{from:2,to:1,label:`review, approve`},{from:0,to:1,label:`kapi pull`}]})},W={name:`RedactionDiagram (marker black-out + category chips)`,render:()=>(0,F.jsx)(m,{original:`Email Sarah Chen the Project Halcyon launch date.`,redact:[{text:`Sarah Chen`,label:`Person`},`Project Halcyon`],translated:`Envoyez à Sarah Chen la date de lancement de Project Halcyon.`,caption:a(`hQt3UOCDdzR`,`A span is either blacked out with a marker (sensitive) or shown as a labeled category chip.`)})},G={name:`AxisLadderDiagram (ascending rungs)`,render:()=>(0,F.jsx)(Xe,{rungs:[{grade:`G0`,name:`opaque`,gloss:`bytes only`},{grade:`G1`,name:`metadata`,gloss:`title, author, page count`},{grade:`G2`,name:`linear text`,gloss:`reading-order characters`},{grade:`G3`,name:`roles`,gloss:`headings, tables, reading order`},{grade:`G4`,name:`geometry`,gloss:`page coords, bounding boxes`}],caption:a(`a2Sa4BDjHMw`,`Structure & Geometry — how much document structure we recover, rung by rung.`)})},K={name:`AxisLadderDiagram (convergence — target lifecycle)`,render:()=>(0,F.jsx)(Xe,{rungs:[{grade:`1`,name:`draft`,gloss:`machine placeholder or fuzzy leverage`},{grade:`2`,name:`translated`,gloss:`a real translation exists`},{grade:`3`,name:`established`,gloss:`a person approved this exact pair`}],caption:a(`gyqNVLDCeRL`,`Target lifecycle — how far a translation has progressed.`)})},q={name:`AxisLadderDiagram (convergence — source readiness)`,render:()=>(0,F.jsx)(Xe,{rungs:[{grade:`1`,name:`written`,gloss:`source content exists`},{grade:`2`,name:`established`,gloss:`a person approved the source`}],caption:a(`fjBVLSiFdpK`,`Source authoring readiness — the source-side counterpart.`)})},J={name:`PlaceGraphDiagram (containment)`,render:()=>(0,F.jsx)(te,{chain:[{id:`world`,name:`World`,type:`world`},{id:`europe`,name:`Europe`,type:`region`},{id:`western-europe`,name:`Western Europe`,type:`region`},{id:`fr`,name:`France`,type:`country`},{id:`fr-ara`,name:`Auvergne-Rhône-Alpes`,type:`subdivision`},{id:`fr-69m`,name:`Métropole de Lyon`,type:`subdivision`},{id:`lyon`,name:`Lyon`,type:`locality`,declared:!0}],siblings:{"fr-69m":[{id:`fr-69`,name:`Rhône`,type:`subdivision`}]},madeOf:[{id:`greater-lyon`,name:`Greater Lyon`,type:`metro`,of:[`fr-69m`,`fr-69`],declared:!0}],caption:a(`j22Z76sTQg6`,`A place sits within one or more places, or is made of places.`)})},Y={name:`AxisFamiliesDiagram (axes grouped by family)`,render:()=>(0,F.jsx)(rt,{families:[{name:`Comprehension`,tagline:`how deeply we read it`,axes:[{label:`Engine`,range:`L0–L4`},{label:`Vocabulary`,range:`V0–V3`},{label:`Structure & Geometry`,range:`G0–G4`},{label:`Prose`,range:`P0–P4`}]},{name:`Assurance`,tagline:`how we prove it`,axes:[{label:`Corpus`,range:`C0–C3`},{label:`Security`,range:`S0–S4`}]},{name:`Enablement`,tagline:`how we work with it`,axes:[{label:`Knowledge`,range:`K0–K3`},{label:`Editor`,range:`E0–E4`}]}],caption:a(`gREpfOmtO57`,`The maturity axes group by the question they answer.`)})},X={name:`CycleDiagram (closed runbook loop)`,render:()=>(0,F.jsx)(vt,{steps:[{label:`Reconcile`,sub:`ledger vs reality`},{label:`Compute due`,sub:`signals + watermarks`},{label:`Rank & budget`},{label:`Execute`,sub:`with evidence`},{label:`Record`,sub:`ledger commit`},{label:`Reflect`,sub:`learnings`}],caption:a(`a06Judc4Yd9`,`The format-ops runbook is a self-feeding loop; each run records what it consumed.`)})},Z={name:`TypeDiagram (record types and their links)`,render:()=>(0,F.jsx)(Ct,{caption:a(`hrHoW3OH9CJ`,`A type card lists its fields; an edge carries what the link between two types means.`),boxes:[{name:`Layer`,col:0,role:`io`,self:`nests — embedded content`,fields:[{name:`Format`,type:`string`},{name:`ParentID`,type:`string`}]},{name:`Block`,col:1,role:`translate`,fields:[{name:`Translatable`,type:`bool`},{name:`Editions`,type:`map[EditionKey]*Edition`},{name:`Native`,type:`[]EditionKey`},{name:`Overlays`,type:`[]Overlay`}]},{name:`Run`,col:2,fields:[{name:`Text`,type:`*TextRun`},{name:`Ph`,type:`*PlaceholderRun`}]},{name:`Edition`,col:2,role:`translate`,fields:[{name:`Runs`,type:`[]Run`},{name:`Status`,type:`Status`},{name:`Derived`,type:`*Derivation`}]},{name:`Overlay`,col:2,role:`annotate`,fields:[{name:`Type`,type:`OverlayType`},{name:`Spans`,type:`[]Span`}]}],edges:[{from:0,to:1,label:`contains`},{from:1,to:2,label:`each edition's flat run sequence`},{from:1,to:3,label:`one per edition key`},{from:1,to:4,label:`stand-off, on one edition`}]})},Q={name:`GatedLoopDiagram (source-first ship-gates)`,render:()=>(0,F.jsx)(Bt,{nodes:[{kind:`phase`,role:`source`,label:`settle source`,steps:[`term-check + protect`,`voice-check`,`source checks`]},{kind:`gate`,label:`source hold`,sub:`translate_after`,hold:`hold — settle your source first`},{kind:`phase`,role:`translate`,label:`translate approved source`,steps:[`recycle (content memory-first)`,`AI remainder`,`target checks`]},{kind:`gate`,label:`target ship-gate`,sub:`ship_gate`,hold:`wait for review`},{kind:`done`,label:`converged`}],caption:a(`al38Eh7oQ3I`,`Get the source right, gate it, then translate the approved source per locale — a gate that is not met holds the work for a person rather than shipping.`)})},$={name:`GatedLoopDiagram (source-only — monolingual)`,render:()=>(0,F.jsx)(Bt,{nodes:[{kind:`phase`,role:`source`,label:`settle source`,steps:[`term-check + protect`,`voice-check`,`source checks`]},{kind:`gate`,label:`source hold`,sub:`translate_after`,hold:`hold — settle your source first`},{kind:`done`,label:`on brand`}],caption:a(`leNnYD3Q3sp`,`A monolingual project stops after the first half: settle the source until it reaches translate_after.`)})},$t=[`Architecture`,`Pipeline`,`PipelineFanOut`,`Stream`,`RoundTrip`,`Phases`,`Lanes`,`Swimlane`,`Redaction`,`AxisLadder`,`ConvergenceTargetLadder`,`ConvergenceSourceLadder`,`PlaceGraph`,`AxisFamilies`,`Cycle`,`Types`,`GatedLoop`,`GatedLoopMonolingual`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "ArchitectureDiagram (hero)",
  render: () => <ArchitectureDiagram animated />
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
    label: "translate / checks"
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: "RedactionDiagram (marker black-out + category chips)",
  render: () => <RedactionDiagram original="Email Sarah Chen the Project Halcyon launch date." redact={[{
    text: "Sarah Chen",
    label: "Person"
  }, "Project Halcyon"]} translated="Envoyez à Sarah Chen la date de lancement de Project Halcyon." caption="A span is either blacked out with a marker (sensitive) or shown as a labeled category chip." />
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
    name: "established",
    gloss: "a person approved this exact pair"
  }]} caption="Target lifecycle — how far a translation has progressed." />
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: "AxisLadderDiagram (convergence — source readiness)",
  render: () => <AxisLadderDiagram rungs={[{
    grade: "1",
    name: "written",
    gloss: "source content exists"
  }, {
    grade: "2",
    name: "established",
    gloss: "a person approved the source"
  }]} caption="Source authoring readiness — the source-side counterpart." />
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: "PlaceGraphDiagram (containment)",
  render: () => <PlaceGraphDiagram chain={[{
    id: "world",
    name: "World",
    type: "world"
  }, {
    id: "europe",
    name: "Europe",
    type: "region"
  }, {
    id: "western-europe",
    name: "Western Europe",
    type: "region"
  }, {
    id: "fr",
    name: "France",
    type: "country"
  }, {
    id: "fr-ara",
    name: "Auvergne-Rhône-Alpes",
    type: "subdivision"
  }, {
    id: "fr-69m",
    name: "Métropole de Lyon",
    type: "subdivision"
  }, {
    id: "lyon",
    name: "Lyon",
    type: "locality",
    declared: true
  }]} siblings={{
    "fr-69m": [{
      id: "fr-69",
      name: "Rhône",
      type: "subdivision"
    }]
  }} madeOf={[{
    id: "greater-lyon",
    name: "Greater Lyon",
    type: "metro",
    of: ["fr-69m", "fr-69"],
    declared: true
  }]} caption="A place sits within one or more places, or is made of places." />
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
    }, {
      label: "Prose",
      range: "P0–P4"
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
      name: "Editions",
      type: "map[EditionKey]*Edition"
    }, {
      name: "Native",
      type: "[]EditionKey"
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
    name: "Edition",
    col: 2,
    role: "translate",
    fields: [{
      name: "Runs",
      type: "[]Run"
    }, {
      name: "Status",
      type: "Status"
    }, {
      name: "Derived",
      type: "*Derivation"
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
    label: "each edition's flat run sequence"
  }, {
    from: 1,
    to: 3,
    label: "one per edition key"
  }, {
    from: 1,
    to: 4,
    label: "stand-off, on one edition"
  }]} />
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: "GatedLoopDiagram (source-first ship-gates)",
  render: () => <GatedLoopDiagram nodes={[{
    kind: "phase",
    role: "source",
    label: "settle source",
    steps: ["term-check + protect", "voice-check", "source checks"]
  }, {
    kind: "gate",
    label: "source hold",
    sub: "translate_after",
    hold: "hold — settle your source first"
  }, {
    kind: "phase",
    role: "translate",
    label: "translate approved source",
    steps: ["recycle (content memory-first)", "AI remainder", "target checks"]
  }, {
    kind: "gate",
    label: "target ship-gate",
    sub: "ship_gate",
    hold: "wait for review"
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
    steps: ["term-check + protect", "voice-check", "source checks"]
  }, {
    kind: "gate",
    label: "source hold",
    sub: "translate_after",
    hold: "hold — settle your source first"
  }, {
    kind: "done",
    label: "on brand"
  }]} caption="A monolingual project stops after the first half: settle the source until it reaches translate_after." />
}`,...$.parameters?.docs?.source}}}})))()}en();export{I as Architecture,Y as AxisFamilies,G as AxisLadder,q as ConvergenceSourceLadder,K as ConvergenceTargetLadder,X as Cycle,Q as GatedLoop,$ as GatedLoopMonolingual,H as Lanes,V as Phases,L as Pipeline,R as PipelineFanOut,J as PlaceGraph,W as Redaction,B as RoundTrip,z as Stream,U as Swimlane,Z as Types,$t as __namedExportsOrder,Qt as default};