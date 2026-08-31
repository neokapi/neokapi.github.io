import{n as e,r as t}from"./rolldown-runtime-CsOFd3vK.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./ConvergenceRunView-D_i4p0i-.js";import{t as i}from"./src-DfU-ekqT.js";function a(){return{passes:[],logs:[],done:!1,live:!0}}function o(e){return{locale:e,units:0,done:0,viaMemory:0,viaAI:0,state:`queued`}}function s(e){return e.units>0&&e.done>=e.units?`done`:e.done>0||e.units>0?`running`:`queued`}function c(e,t){let n=e.rows.find(e=>e.locale===t);return n||(n=o(t),e.rows.push(n)),n}function l(e,t){let n=()=>{if(t.pass!=null){let n=e.passes.find(e=>e.pass===t.pass);if(n)return n}return e.passes.length>0?e.passes[e.passes.length-1]:null};switch(t.type){case`pass_start`:e.passes.push({pass:t.pass??e.passes.length+1,maxPasses:t.maxPasses??0,rows:(t.pending??[]).map(o),settled:!1}),(t.extractedFiles||t.extractedBlocks)&&e.logs?.push(`Extracted ${t.extractedBlocks??0} blocks from ${t.extractedFiles??0} files`);break;case`locale_start`:{let e=n();if(e&&t.locale){let n=c(e,t.locale);t.units!=null&&(n.units=t.units),n.state=s(n)}break}case`unit_progress`:{let e=n();if(e&&t.locale){let n=c(e,t.locale);n.done=t.done??0,n.viaMemory=t.viaTM??0,n.viaAI=t.viaAI??0,n.state=s(n)}break}case`locale_done`:{let e=n();if(e&&t.locale){let n=c(e,t.locale);t.units!=null&&(n.units=t.units),n.done=t.done??n.done,n.viaMemory=t.viaTM??n.viaMemory,n.viaAI=t.viaAI??n.viaAI,n.state=`done`,t.state&&(n.localeState=t.state)}break}case`pass_done`:{let e=n();e&&(e.settled=!0,e.produced=t.produced,e.producedDelta=t.producedDelta,e.failingChecks=t.failingChecks,e.pending=t.pending);break}case`materialized`:e.materializedFiles=t.files;break;case`log`:t.message&&e.logs?.push(t.message);break;case`done`:e.finalState=t.state,e.done=!0}return e}function u(e){let t=a();for(let n of e)l(t,n);return t}function d(){return(d=e((()=>{})))()}var f=t({Connecting:()=>b,Converged:()=>x,Parked:()=>S,Running:()=>y,__namedExportsOrder:()=>C,default:()=>h}),p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),p=n(),m={id:`run-8f2a1c0e`,project_id:`proj-demo`,trigger:`manual`,state:`running`,passes:1,created_at:new Date().toISOString()},h={title:`Pages/Convergence/ConvergenceRunView`,component:r,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:720,padding:24},children:(0,p.jsx)(e,{})})]},g=[{type:`pass_start`,pass:1,maxPasses:3,pending:[`fr-FR`,`de-DE`]},{type:`locale_start`,pass:1,locale:`fr-FR`,units:12},{type:`locale_done`,pass:1,locale:`fr-FR`,units:12,done:12,viaTM:8,viaAI:4,state:`shippable`},{type:`locale_start`,pass:1,locale:`de-DE`,units:9},{type:`unit_progress`,pass:1,locale:`de-DE`,done:5,viaTM:2,viaAI:3}],_=[...g,{type:`locale_done`,pass:1,locale:`de-DE`,units:9,done:9,viaTM:3,viaAI:6,state:`shippable`},{type:`pass_done`,pass:1,produced:21,producedDelta:21,failingChecks:0,pending:[]},{type:`materialized`,files:2},{type:`done`,state:`converged`}],v=[{type:`pass_start`,pass:1,maxPasses:2,pending:[`ja-JP`]},{type:`locale_start`,pass:1,locale:`ja-JP`,units:10},{type:`locale_done`,pass:1,locale:`ja-JP`,units:10,done:6,viaAI:6,state:`parked`},{type:`pass_done`,pass:1,produced:6,producedDelta:6,failingChecks:4,pending:[`ja-JP`]},{type:`log`,message:`ja-JP short of ship gate after max passes`},{type:`done`,state:`parked`}],y={args:{model:u(g),run:m,connecting:!1}},b={args:{model:u([]),run:m,connecting:!0}},x={args:{model:u(_),run:m}},S={args:{model:u(v),run:{...m,trigger:`cli`}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(liveEvents),
    run,
    connecting: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun([]),
    run,
    connecting: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(convergedEvents),
    run
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    model: reduceRun(parkedEvents),
    run: {
      ...run,
      trigger: "cli"
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Running`,`Connecting`,`Converged`,`Parked`]})))()}export{w as n,d as r,f as t};