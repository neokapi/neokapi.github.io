import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{n as r,t as i}from"./useQuery-C2wJkjOu.js";import{n as a,r as o,t as s}from"./runtime-BFRAZW6z.js";import{t as c}from"./src-BhL86Q3D.js";import{n as l,t as u}from"./loader-circle-jpY__lpK.js";import{n as d,t as f}from"./refresh-cw-D2Pq3sb3.js";import{t as p}from"./error-notice-BNL_twyb.js";import{t as m}from"./button-DOU25u8i.js";import{n as h,t as g}from"./card-DzQLb6Cq.js";import{c as _,l as v}from"./iframe-Dl25JUrb.js";import{r as y,t as b}from"./useApi-CWggCzGk.js";import{n as x,t as S}from"./queryKeys-vfqkJtG1.js";function C({tabID:e,status:t}){let n=v(),[i,a]=(0,E.useState)(null),[o,c]=(0,E.useState)(!1),[l,d]=(0,E.useState)(null),h=r({queryKey:x.projectStatus(e),queryFn:()=>b.getProjectStatus(e),enabled:!t}),g=t??h.data??null,_=i??(t?null:h.error),y=(0,E.useCallback)(()=>{n.invalidateQueries({queryKey:x.projectStatus(e)})},[n,e]),S=(0,E.useCallback)(async()=>{c(!0),a(null);try{let t=await b.runExtract(e);t&&d(t.log),y()}catch(e){a(e)}finally{c(!1)}},[e,y]);if(_&&!g)return(0,D.jsx)(`div`,{className:`p-4`,"data-slot":`translation-status-error`,children:(0,D.jsx)(p,{error:_,title:s(`7isz1FNLUFH`,`Failed to load translation status`),variant:`panel`})});if(!g)return(0,D.jsx)(`div`,{className:`p-4 text-sm text-muted-foreground`,"data-slot":`translation-status-loading`,children:s(`4U5GOyUtrBp`,`Loading translation status…`)});let C=g.collections.length>0;return(0,D.jsxs)(`div`,{className:`space-y-3`,"data-slot":`translation-status-panel`,children:[(0,D.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,D.jsx)(`div`,{className:`text-xs text-muted-foreground`,children:l&&!o&&s(`wdQZ9jWK6x`,`The last read is listed below.`)}),C&&(0,D.jsxs)(m,{variant:`outline`,size:`xs`,onClick:()=>void S(),disabled:o,"data-slot":`translation-status-reextract`,"aria-label":s(`kyOH9fUQ2hh`,`Read every file again`),children:[o?(0,D.jsx)(u,{size:12,className:`animate-spin`}):(0,D.jsx)(f,{size:12}),o?s(`ippA9X7nZQn`,`Reading files…`):s(`8dSdA16nTpH`,`Read files again`)]})]}),_?(0,D.jsx)(p,{error:_,title:s(`c5uwqEKINlX`,`Could not read the project's files`),variant:`inline`}):null,g.collections.length===0&&(0,D.jsx)(`div`,{className:`p-4 text-sm text-muted-foreground`,children:s(`cY9Do052r2c`,`No content collections defined in this project.`)}),g.collections.map(e=>(0,D.jsx)(w,{collection:e},e.name)),l&&(0,D.jsx)(`pre`,{className:`max-h-48 overflow-auto rounded-md border border-border bg-muted/30 p-3 font-mono text-[11px] text-muted-foreground`,"data-slot":`translation-status-log`,children:l.trim()})]})}function w({collection:e}){return(0,D.jsx)(g,{children:(0,D.jsxs)(h,{className:`space-y-3 p-4`,children:[(0,D.jsxs)(`header`,{className:`flex items-baseline justify-between gap-2`,children:[(0,D.jsx)(`h3`,{className:`text-sm font-medium`,children:e.name}),typeof e.blockCount==`number`&&(0,D.jsx)(`span`,{className:`text-xs text-muted-foreground`,children:a(`8b7DHqyXJm5`,`{collection.blockCount} blocks`,{},{"collection.blockCount":e.blockCount})})]}),(0,D.jsx)(T,{collection:e})]})})}function T({collection:e}){let t=e.coverage??{},n=Array.from(new Set([...e.targetLanguages,...Object.keys(t)])).sort();return n.length===0?(0,D.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:s(`eS4pkmVtraG`,`No target languages declared.`)}):(0,D.jsx)(`ul`,{className:`space-y-1.5`,"data-slot":`locale-coverage`,children:n.map(n=>{let r=t[n]??0,i=e.blockCount??0,a=i>0?r/i*100:0,o=r===0?`empty`:a>=100?`complete`:`partial`;return(0,D.jsxs)(`li`,{className:`flex items-center gap-2 text-xs`,"data-locale":n,children:[(0,D.jsx)(`span`,{className:`w-10 font-mono uppercase`,children:n}),(0,D.jsx)(`div`,{className:`flex-1 overflow-hidden rounded-full bg-muted`,children:(0,D.jsx)(`div`,{className:o===`complete`?`h-1.5 bg-primary`:o===`partial`?`h-1.5 bg-primary/60`:`h-1.5 bg-muted-foreground/20`,style:{width:`${Math.min(100,Math.max(0,a))}%`},"data-state":o})}),(0,D.jsx)(`span`,{className:`w-24 shrink-0 text-right tabular-nums text-muted-foreground`,children:i===0?s(`5F4pm00UY7l`,`pending`):r===0?s(`jpJATMbgVHZ`,`not translated`):r===i?s(`2k0jTk14ZWV`,`{translated}/{total} · complete`,{translated:r,total:i}):`${r}/${i}`})]},n)})})}var E,D;function O(){return(O=e((()=>{o(),E=t(),i(),_(),c(),l(),d(),y(),S(),D=n(),C.__docgenInfo={description:`Renders the translation-state panel for a kapi project: one
section per Collection, with target locales and (once the
blockstore session wiring lands in kapi-desktop) per-locale
coverage bars. Currently driven by the recipe's declared target
languages only — coverage data becomes available after the
blockstore integration step.`,methods:[],displayName:`TranslationStatusPanel`,props:{tabID:{required:!0,tsType:{name:`string`},description:``},status:{required:!1,tsType:{name:`ProjectStatus`},description:`Pre-loaded status for Storybook — skips the Wails call.`}}}})))()}var k,A,j,M,N,P,F;function I(){return(I=e((()=>{O(),k=n(),A={title:`Project/TranslationStatusPanel`,component:C,parameters:{layout:`padded`},decorators:[e=>(0,k.jsx)(`div`,{style:{maxWidth:640},children:(0,k.jsx)(e,{})})]},j={projectPath:`/Users/dev/app/kapi.yaml`,projectName:`My App`,collections:[{name:`ui`,blockCount:1007,coverage:{fr:987,ja:1007},targetLanguages:[`fr`,`de`,`ja`]},{name:`marketing`,blockCount:42,coverage:{},targetLanguages:[`fr`,`de`]},{name:`docs`,targetLanguages:[`fr`,`de`]}]},M={args:{tabID:`storybook`,status:j}},N={args:{tabID:`storybook`,status:{projectPath:`/Users/dev/app/kapi.yaml`,projectName:`Polyglot`,collections:[{name:`ui`,blockCount:250,coverage:{fr:250,de:250,ja:250},targetLanguages:[`fr`,`de`,`ja`]}]}}},P={args:{tabID:`storybook`,status:{projectPath:`/Users/dev/app/kapi.yaml`,projectName:`New Project`,collections:[]}}},F=[`Default`,`AllComplete`,`Empty`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    status: mixedStatus
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    status: {
      projectPath: "/Users/dev/app/kapi.yaml",
      projectName: "Polyglot",
      collections: [{
        name: "ui",
        blockCount: 250,
        coverage: {
          fr: 250,
          de: 250,
          ja: 250
        },
        targetLanguages: ["fr", "de", "ja"]
      }]
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    tabID: "storybook",
    status: {
      projectPath: "/Users/dev/app/kapi.yaml",
      projectName: "New Project",
      collections: []
    }
  }
}`,...P.parameters?.docs?.source}}}})))()}I();export{N as AllComplete,M as Default,P as Empty,F as __namedExportsOrder,A as default};