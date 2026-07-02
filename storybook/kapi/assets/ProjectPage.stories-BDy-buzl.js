import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{n as i,r as a,s as o,t as s}from"./runtime-CI09VOSa.js";import{Bn as c,Et as l,c as u,gr as d,na as f,ot as p,t as m}from"./lucide-react-DF7k_dUG.js";import{t as h}from"./button-D6zYGAvL.js";import{o as g,r as _,s as v,t as y}from"./card-CHo_fh0q.js";import{t as b}from"./badge-B925V-__.js";import{i as x}from"./iframe-CsdcbpBs.js";import{r as S,t as C}from"./useApi-BOIfH2VH.js";import{n as w,r as T,t as E}from"./api-LEFL5VCf.js";import{n as D,t as O}from"./ProjectStatusPanel-EWLmDJ2-.js";function k(e,t){if(e.name)return e.name;if(!t)return`Untitled`;let n=t.replace(/\/project\.kapi$/i,``).split(`/`);return n[n.length-1]||`Untitled`}function A({project:e,projectPath:t,onSaved:n,onProjectChange:r,tabID:a}){let[m,x]=(0,j.useState)(!1),[S,w]=(0,j.useState)(!1),[D,A]=(0,j.useState)(``),N=e.defaults??{},P=e.plugins??{},F=async()=>{x(!0);try{if(t)await C.saveProject(a);else{let e=await C.saveProjectDialog(a);e&&n?.(e)}}finally{x(!1)}},I=(0,j.useCallback)(()=>{A(e.name||``),w(!0)},[e.name]),L=(0,j.useCallback)(async()=>{let n=D.trim(),i={...e,name:n};await C.updateProject(a,i),r?.(i),t&&await C.saveProject(a),w(!1)},[D,e,a,t,r]),R=(0,j.useCallback)(()=>{w(!1)},[]),z=k(e,t);return(0,M.jsxs)(`div`,{className:`p-6`,children:[(0,M.jsxs)(`div`,{className:`mb-6 flex items-center justify-between`,children:[(0,M.jsxs)(`div`,{children:[S?(0,M.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,M.jsx)(`input`,{type:`text`,value:D,onChange:e=>A(e.target.value),onKeyDown:e=>{e.key===`Enter`&&L(),e.key===`Escape`&&R()},placeholder:k({...e,name:``},t),autoFocus:!0,className:`rounded-md border border-input bg-transparent px-2 py-1 text-xl font-semibold outline-none focus:ring-2 focus:ring-ring`}),(0,M.jsx)(h,{variant:`outline`,size:`xs`,onClick:L,children:s(`3z360r`,`Save`)}),(0,M.jsx)(h,{variant:`outline`,size:`xs`,onClick:R,children:s(`NwIbc`,`Cancel`)})]}):(0,M.jsxs)(`div`,{className:`group flex items-center gap-2`,children:[(0,M.jsx)(`h1`,{className:`text-xl font-semibold`,children:z}),(0,M.jsx)(h,{variant:`ghost`,size:`icon-xs`,onClick:I,className:`opacity-0 group-hover:opacity-100`,"aria-label":s(`2aDtWZ`,`Edit project name`),children:(0,M.jsx)(l,{size:14})})]}),t?(0,M.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:t}):(0,M.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:s(`19MQoW`,`Not yet saved to disk`)})]}),(0,M.jsxs)(h,{variant:`outline`,size:`sm`,onClick:F,disabled:m,"aria-label":t?s(`2DVk9G`,`Save project`):s(`3KSrCH`,`Save project as`),children:[m?(0,M.jsx)(f,{size:12,className:`animate-spin`}):(0,M.jsx)(p,{size:12}),t?s(`46EZ0n`,`Save`):s(`3VyNpV`,`Save As...`)]})]}),(0,M.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:[(0,M.jsxs)(y,{children:[(0,M.jsx)(g,{className:`px-4`,children:(0,M.jsx)(v,{className:`flex items-center gap-2 text-sm font-medium`,children:i(`38vzcP`,`{=m0} Languages`,{"=m0":(0,M.jsx)(c,{size:16,className:`text-primary`})})})}),(0,M.jsx)(_,{className:`px-4`,children:(0,M.jsxs)(`div`,{className:`space-y-1 text-sm`,children:[(0,M.jsx)(`div`,{children:i(`2ZAUqP`,`{=m0}Source: {/=m0} {=m1}{value}{/=m1}`,{"=m0":(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`Source: `}),"=m1":(0,M.jsx)(`span`,{children:N.source_language||`Not set`})},{value:N.source_language||`Not set`})}),(0,M.jsx)(`div`,{children:i(`3RRg71`,`{=m0}Targets: {/=m0} {=m1} {value} {/=m1}`,{"=m0":(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`Targets: `}),"=m1":(0,M.jsx)(`span`,{children:N.target_languages?.length?N.target_languages.join(`, `):o(`None`)})},{value:N.target_languages?.length?N.target_languages.join(`, `):o(`None`)})})]})})]}),(0,M.jsxs)(y,{children:[(0,M.jsx)(g,{className:`px-4`,children:(0,M.jsx)(v,{className:`flex items-center gap-2 text-sm font-medium`,children:i(`36HhG0`,`{=m0} Content`,{"=m0":(0,M.jsx)(d,{size:16,className:`text-primary`})})})}),(0,M.jsx)(_,{className:`px-4`,children:(0,M.jsx)(`div`,{className:`space-y-1 text-sm`,children:e.content?.length?e.content.map((e,t)=>T(e)?(0,M.jsxs)(`div`,{className:`truncate text-muted-foreground`,children:[e.path,e.format&&(0,M.jsx)(`span`,{className:`ml-1 text-xs`,children:s(`1tToqL`,`(${e.format.name})`,{name:e.format.name})})]},t):(0,M.jsxs)(`div`,{className:`text-muted-foreground`,children:[e.name||s(`4wsYZq`,`Unnamed`),(0,M.jsx)(`span`,{className:`ml-1 text-xs`,children:s(`2yywgh`,`({count} item(s))`,{count:E(e).length})})]},t)):(0,M.jsx)(`p`,{className:`text-muted-foreground`,children:s(`2X3rte`,`No content patterns`)})})})]}),(0,M.jsxs)(y,{children:[(0,M.jsx)(g,{className:`px-4`,children:(0,M.jsx)(v,{className:`flex items-center gap-2 text-sm font-medium`,children:i(`2ficrV`,`{=m0} Flows`,{"=m0":(0,M.jsx)(u,{size:16,className:`text-primary`})})})}),(0,M.jsx)(_,{className:`px-4`,children:(0,M.jsx)(`div`,{className:`space-y-1 text-sm`,children:e.flows&&Object.keys(e.flows).length>0?Object.entries(e.flows).map(([e,t])=>(0,M.jsxs)(`div`,{className:`text-muted-foreground`,children:[e,(0,M.jsx)(`span`,{className:`ml-1 text-xs`,children:s(`3576Ht`,`({count} step(s))`,{count:t.steps.length})})]},e)):(0,M.jsx)(`p`,{className:`text-muted-foreground`,children:s(`4dgvBN`,`No flows defined`)})})})]})]}),(0,M.jsx)(`div`,{className:`mt-6`,children:(0,M.jsx)(O,{tabID:a,defaultView:`ship`})}),(e.preset||Object.keys(P).length>0)&&(0,M.jsxs)(`div`,{className:`mt-6 space-y-2 text-sm`,children:[e.preset&&(0,M.jsx)(`div`,{children:i(`3WQM1e`,`{=m0}Preset: {/=m0} {=m1}{project.preset}{/=m1}`,{"=m0":(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`Preset: `}),"=m1":(0,M.jsx)(b,{variant:`secondary`,children:e.preset})},{"project.preset":e.preset})}),Object.keys(P).length>0&&(0,M.jsx)(`div`,{children:i(`1d8sdH`,`{=m0}Plugins: {/=m0} {=m1}`,{"=m0":(0,M.jsx)(`span`,{className:`text-muted-foreground`,children:`Plugins: `}),"=m1":Object.entries(P).map(([e,t])=>(0,M.jsxs)(b,{variant:`secondary`,className:`mr-1`,translate:`no`,children:[e,t.version&&t.version!==`*`?` ${t.version}`:``]},e))})})]})]})}var j,M,N=t((()=>{a(),j=e(n(),1),m(),x(),w(),S(),D(),M=r(),A.__docgenInfo={description:``,methods:[],displayName:`ProjectPage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},projectPath:{required:!0,tsType:{name:`string`},description:``},onSaved:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(tab: TabInfo) => void`,signature:{arguments:[{type:{name:`TabInfo`},name:`tab`}],return:{name:`void`}}},description:``},onProjectChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``}}}})),P,F,I,L,R;t((()=>{N(),P={title:`Pages/ProjectPage`,component:A,tags:[`autodocs`],args:{tabID:`story-tab`}},F={args:{project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`},{name:`Documentation`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]}],preset:`nextjs`,plugins:{okapi:{framework_version:`^1.47.0`}},flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}},projectPath:`/Users/dev/acme-app/translation.kapi`}},I={args:{project:{version:`v1`,name:`New Project`,defaults:{source_language:`en`}},projectPath:``}},L={args:{project:{version:`v1`,name:`QA Pipeline`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},flows:{qa:{steps:[{tool:`qa`}]},pseudo:{steps:[{tool:`pseudo-translate`,config:{expansion_rate:1.3}}]}}},projectPath:`/tmp/qa.kapi`}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "Acme App Localization",
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR", "de-DE", "ja-JP"]
      },
      content: [{
        path: "src/i18n/en/*.json",
        format: {
          name: "json"
        },
        target: "src/i18n/{lang}/*.json"
      }, {
        name: "Documentation",
        items: [{
          path: "docs/en/**/*.md",
          format: {
            name: "markdown"
          }
        }]
      }],
      preset: "nextjs",
      plugins: {
        okapi: {
          framework_version: "^1.47.0"
        }
      },
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
    },
    projectPath: "/Users/dev/acme-app/translation.kapi"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "New Project",
      defaults: {
        source_language: "en"
      }
    },
    projectPath: ""
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    project: {
      version: "v1",
      name: "QA Pipeline",
      defaults: {
        source_language: "en-US",
        target_languages: ["fr-FR"]
      },
      flows: {
        qa: {
          steps: [{
            tool: "qa"
          }]
        },
        pseudo: {
          steps: [{
            tool: "pseudo-translate",
            config: {
              expansion_rate: 1.3
            }
          }]
        }
      }
    },
    projectPath: "/tmp/qa.kapi"
  }
}`,...L.parameters?.docs?.source}}},R=[`WithContent`,`Minimal`,`WithFlowsOnly`]}))();export{I as Minimal,F as WithContent,L as WithFlowsOnly,R as __namedExportsOrder,P as default};