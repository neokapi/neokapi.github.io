import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,r as i,s as a,t as o}from"./runtime-D9E4JuzJ.js";import{Hr as s,It as c,Sn as l,c as u,mt as d,or as f,t as p}from"./lucide-react-DAXek0DD.js";import{t as m}from"./src-3FHl0xIw.js";import{t as h}from"./badge-BJhUWkBi.js";import{t as g}from"./button-xCNJhilW.js";import{o as _,r as v,s as y,t as b}from"./card-BgJKhC20.js";import{r as x,t as S}from"./useApi-DT7atpeE.js";import{n as C,r as w,t as T}from"./api-CIm6WQER.js";import{n as E,t as D}from"./ProjectStatusPanel-Cb5z7bNI.js";function O(e,t){if(e.name)return e.name;if(!t)return`Untitled`;let n=t.replace(/\/kapi\.yaml$/i,``).split(`/`);return n[n.length-1]||`Untitled`}function k({project:e,projectPath:t,onSaved:n,onProjectChange:i,tabID:p}){let[m,x]=(0,A.useState)(!1),[C,E]=(0,A.useState)(!1),[k,M]=(0,A.useState)(``),N=e.defaults??{},P=e.plugins??{},F=async()=>{x(!0);try{if(t)await S.saveProject(p);else{let e=await S.saveProjectDialog(p);e&&n?.(e)}}finally{x(!1)}},I=(0,A.useCallback)(()=>{M(e.name||``),E(!0)},[e.name]),L=(0,A.useCallback)(async()=>{let n=k.trim(),r={...e,name:n};await S.updateProject(p,r),i?.(r),t&&await S.saveProject(p),E(!1)},[k,e,p,t,i]),R=(0,A.useCallback)(()=>{E(!1)},[]),z=O(e,t);return(0,j.jsxs)(`div`,{className:`p-6`,children:[(0,j.jsxs)(`div`,{className:`mb-6 flex items-center justify-between`,children:[(0,j.jsxs)(`div`,{children:[C?(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(`input`,{type:`text`,value:k,onChange:e=>M(e.target.value),onKeyDown:e=>{e.key===`Enter`&&L(),e.key===`Escape`&&R()},placeholder:O({...e,name:``},t),autoFocus:!0,className:`rounded-md border border-input bg-transparent px-2 py-1 text-xl font-semibold outline-none focus:ring-2 focus:ring-ring`}),(0,j.jsx)(g,{variant:`outline`,size:`xs`,onClick:L,children:o(`71rdpbpBoz4`,`Save`)}),(0,j.jsx)(g,{variant:`outline`,size:`xs`,onClick:R,children:o(`hVp3F6mmOo9`,`Cancel`)})]}):(0,j.jsxs)(`div`,{className:`group flex items-center gap-2`,children:[(0,j.jsx)(`h1`,{className:`text-xl font-semibold`,children:z}),(0,j.jsx)(g,{variant:`ghost`,size:`icon-xs`,onClick:I,className:`opacity-0 group-hover:opacity-100`,"aria-label":o(`9cHdXFgL1Ob`,`Edit project name`),children:(0,j.jsx)(c,{size:14})})]}),t?(0,j.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:t}):(0,j.jsx)(`p`,{className:`mt-1 text-sm text-muted-foreground`,children:o(`f1o5FlEP1Ah`,`Not yet saved to disk`)})]}),(0,j.jsxs)(g,{variant:`outline`,size:`sm`,onClick:F,disabled:m,"aria-label":t?o(`i94dY6l2UzD`,`Save project`):o(`6pAxeKLWWhs`,`Save project as`),children:[m?(0,j.jsx)(l,{size:12,className:`animate-spin`}):(0,j.jsx)(d,{size:12}),t?o(`5A06aLNXvjZ`,`Save`):o(`8aXQPC3HETT`,`Save As...`)]})]}),(0,j.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 md:grid-cols-3`,children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(_,{className:`px-4`,children:(0,j.jsx)(y,{className:`flex items-center gap-2 text-sm font-medium`,children:r(`7COQ88zMC0r`,`{=m0} Languages`,{"=m0":(0,j.jsx)(f,{size:16,className:`text-primary`})})})}),(0,j.jsx)(v,{className:`px-4`,children:(0,j.jsxs)(`div`,{className:`space-y-1 text-sm`,children:[(0,j.jsx)(`div`,{children:r(`7b0E5g5f0SC`,`{=m0}Source: {/=m0} {=m1}{value}{/=m1}`,{"=m0":(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Source: `}),"=m1":(0,j.jsx)(`span`,{children:N.source_language||`Not set`})},{value:N.source_language||`Not set`})}),(0,j.jsx)(`div`,{children:r(`hoMIx5Y99U1`,`{=m0}Targets: {/=m0} {=m1} {value} {/=m1}`,{"=m0":(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Targets: `}),"=m1":(0,j.jsx)(`span`,{children:N.target_languages?.length?N.target_languages.join(`, `):a(`None`)})},{value:N.target_languages?.length?N.target_languages.join(`, `):a(`None`)})})]})})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(_,{className:`px-4`,children:(0,j.jsx)(y,{className:`flex items-center gap-2 text-sm font-medium`,children:r(`gp4nqZEdUyV`,`{=m0} Content`,{"=m0":(0,j.jsx)(s,{size:16,className:`text-primary`})})})}),(0,j.jsx)(v,{className:`px-4`,children:(0,j.jsx)(`div`,{className:`space-y-1 text-sm`,children:e.content?.length?e.content.map((e,t)=>w(e)?(0,j.jsxs)(`div`,{className:`truncate text-muted-foreground`,children:[e.path,e.format&&(0,j.jsx)(`span`,{className:`ml-1 text-xs`,children:o(`lWBFqvVHU1q`,`(${e.format.name})`,{"coll.format.name":e.format.name})})]},t):(0,j.jsxs)(`div`,{className:`text-muted-foreground`,children:[e.name||o(`ho7qtBQINK8`,`Unnamed`),(0,j.jsx)(`span`,{className:`ml-1 text-xs`,children:o(`lDDsaYrESS1`,`({count} item(s))`,{count:T(e).length})})]},t)):(0,j.jsx)(`p`,{className:`text-muted-foreground`,children:o(`fq0MC4BkjrG`,`No content patterns`)})})})]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(_,{className:`px-4`,children:(0,j.jsx)(y,{className:`flex items-center gap-2 text-sm font-medium`,children:r(`86srnva9jWZ`,`{=m0} Flows`,{"=m0":(0,j.jsx)(u,{size:16,className:`text-primary`})})})}),(0,j.jsx)(v,{className:`px-4`,children:(0,j.jsx)(`div`,{className:`space-y-1 text-sm`,children:e.flows&&Object.keys(e.flows).length>0?Object.entries(e.flows).map(([e,t])=>(0,j.jsxs)(`div`,{className:`text-muted-foreground`,children:[e,(0,j.jsx)(`span`,{className:`ml-1 text-xs`,children:o(`ae2vFwDp7PW`,`({count} step(s))`,{count:t.steps.length})})]},e)):(0,j.jsx)(`p`,{className:`text-muted-foreground`,children:o(`5AfDYtM5r20`,`No flows defined`)})})})]})]}),(0,j.jsx)(`div`,{className:`mt-6`,children:(0,j.jsx)(D,{tabID:p,defaultView:`ship`})}),(e.preset||Object.keys(P).length>0)&&(0,j.jsxs)(`div`,{className:`mt-6 space-y-2 text-sm`,children:[e.preset&&(0,j.jsx)(`div`,{children:r(`jK0jntTPsaN`,`{=m0}Preset: {/=m0} {=m1}{project.preset}{/=m1}`,{"=m0":(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Preset: `}),"=m1":(0,j.jsx)(h,{variant:`secondary`,children:e.preset})},{"project.preset":e.preset})}),Object.keys(P).length>0&&(0,j.jsx)(`div`,{children:r(`hEibRHv3Zsq`,`{=m0}Plugins: {/=m0} {=m1}`,{"=m0":(0,j.jsx)(`span`,{className:`text-muted-foreground`,children:`Plugins: `}),"=m1":Object.entries(P).map(([e,t])=>(0,j.jsxs)(h,{variant:`secondary`,className:`mr-1`,translate:`no`,children:[e,t.version&&t.version!==`*`?` ${t.version}`:``]},e))})})]})]})}var A,j,M=e((()=>{i(),A=t(),p(),m(),C(),x(),E(),j=n(),k.__docgenInfo={description:``,methods:[],displayName:`ProjectPage`,props:{project:{required:!0,tsType:{name:`KapiProject`},description:``},projectPath:{required:!0,tsType:{name:`string`},description:``},onSaved:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(tab: TabInfo) => void`,signature:{arguments:[{type:{name:`TabInfo`},name:`tab`}],return:{name:`void`}}},description:``},onProjectChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(project: KapiProject) => void`,signature:{arguments:[{type:{name:`KapiProject`},name:`project`}],return:{name:`void`}}},description:``},tabID:{required:!0,tsType:{name:`string`},description:``}}}})),N,P,F,I,L;e((()=>{M(),N={title:`Pages/ProjectPage`,component:k,tags:[`autodocs`],args:{tabID:`story-tab`}},P={args:{project:{version:`v1`,name:`Acme App Localization`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`,`de-DE`,`ja-JP`]},content:[{path:`src/i18n/en/*.json`,format:{name:`json`},target:`src/i18n/{lang}/*.json`},{name:`Documentation`,items:[{path:`docs/en/**/*.md`,format:{name:`markdown`}}]}],preset:`nextjs`,plugins:{okapi:{framework_version:`^1.47.0`}},flows:{translate:{steps:[{tool:`translate`,config:{provider:`anthropic`}}]},"translate-and-qa":{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]}}},projectPath:`/Users/dev/acme-app/kapi.yaml`}},F={args:{project:{version:`v1`,name:`New Project`,defaults:{source_language:`en`}},projectPath:``}},I={args:{project:{version:`v1`,name:`QA Pipeline`,defaults:{source_language:`en-US`,target_languages:[`fr-FR`]},flows:{qa:{steps:[{tool:`qa`}]},pseudo:{steps:[{tool:`pseudo-translate`,config:{expansion_rate:1.3}}]}}},projectPath:`/tmp/qa/kapi.yaml`}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    projectPath: "/Users/dev/acme-app/kapi.yaml"
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
    projectPath: "/tmp/qa/kapi.yaml"
  }
}`,...I.parameters?.docs?.source}}},L=[`WithContent`,`Minimal`,`WithFlowsOnly`]}))();export{F as Minimal,P as WithContent,I as WithFlowsOnly,L as __namedExportsOrder,N as default};