import{c as e,i as t}from"./preload-helper-a38IrJcw.js";import{t as n}from"./react-hDuJKfaT.js";import{t as r}from"./jsx-runtime-DuIU0fMU.js";import{r as i,t as a}from"./runtime-rNvQ1D9s.js";import{i as o,t as s}from"./lucide-react-B3oJx3FB.js";import{t as c}from"./button-Bf8BTLsa.js";import{Ft as l,i as u}from"./iframe-D82Cq0_D.js";function d({tabs:e,activeTabID:t,onSelect:n,onClose:r,onRename:i}){let[s,u]=(0,f.useState)(null),[d,m]=(0,f.useState)(``),h=(0,f.useRef)(null);(0,f.useEffect)(()=>{s&&h.current&&(h.current.focus(),h.current.select())},[s]);let g=e=>{u(e.id),m(e.name)},_=()=>{s&&d.trim()&&i(s,d.trim()),u(null)};return e.length===0?null:(0,p.jsx)(`div`,{className:`flex items-end gap-px overflow-x-auto px-1`,children:e.map(e=>(0,p.jsxs)(`div`,{onClick:()=>n(e.id),className:`group flex min-w-[160px] max-w-[240px] cursor-pointer items-center justify-between gap-1.5 rounded-t-lg px-3 py-1.5 text-xs transition-all ${t===e.id?`bg-border text-foreground font-semibold`:`text-muted-foreground hover:bg-accent/40 hover:text-foreground`}`,children:[s===e.id?(0,p.jsx)(`input`,{ref:h,value:d,onChange:e=>m(e.target.value),onBlur:_,onKeyDown:e=>{e.key===`Enter`&&_(),e.key===`Escape`&&u(null)},className:`w-24 rounded bg-transparent px-0.5 text-xs outline-none ring-1 ring-ring`,"aria-label":a(`5JPfSZKDL7s`,`Rename project`)}):(0,p.jsx)(l,{content:e.path?`${e.name} — ${e.path}`:e.name,children:(0,p.jsx)(`span`,{onDoubleClick:()=>g(e),className:`max-w-[140px] truncate`,children:e.name})}),(0,p.jsx)(c,{variant:`ghost`,size:`icon-xs`,onClick:t=>{t.stopPropagation(),r(e.id)},className:`h-4 w-4 opacity-0 group-hover:opacity-100`,"aria-label":a(`4ZU0hGhzp5p`,`Close {name}`,{name:e.name}),children:(0,p.jsx)(o,{size:10})})]},e.id))})}var f,p,m=t((()=>{i(),f=e(n(),1),s(),u(),p=r(),d.__docgenInfo={description:``,methods:[],displayName:`TabBar`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabInfo`}],raw:`TabInfo[]`},description:``},activeTabID:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tabID: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabID`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tabID: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabID`}],return:{name:`void`}}},description:``},onRename:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tabID: string, name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabID`},{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``}}}})),h,g,_,v,y,b,x,S;t((()=>{m(),h=r(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/TabBar`,component:d,tags:[`autodocs`],args:{onSelect:g(),onClose:g()},decorators:[e=>(0,h.jsx)(`div`,{style:{width:800},children:(0,h.jsx)(e,{})})]},v={args:{tabs:[{id:`1`,name:`translation`,path:`/Users/dev/translation/kapi.yaml`}],activeTabID:`1`}},y={args:{tabs:[{id:`1`,name:`translation`,path:`/Users/dev/translation/kapi.yaml`},{id:`2`,name:`qa-pipeline`,path:`/Users/dev/qa-pipeline/kapi.yaml`},{id:`3`,name:`New Project`,path:``}],activeTabID:`2`}},b={args:{tabs:Array.from({length:8},(e,t)=>({id:String(t+1),name:`project-${t+1}`,path:`/tmp/project-${t+1}/kapi.yaml`})),activeTabID:`3`}},x={args:{tabs:[],activeTabID:null}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "1",
      name: "translation",
      path: "/Users/dev/translation/kapi.yaml"
    }],
    activeTabID: "1"
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "1",
      name: "translation",
      path: "/Users/dev/translation/kapi.yaml"
    }, {
      id: "2",
      name: "qa-pipeline",
      path: "/Users/dev/qa-pipeline/kapi.yaml"
    }, {
      id: "3",
      name: "New Project",
      path: ""
    }],
    activeTabID: "2"
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: Array.from({
      length: 8
    }, (_, i) => ({
      id: String(i + 1),
      name: \`project-\${i + 1}\`,
      path: \`/tmp/project-\${i + 1}/kapi.yaml\`
    })),
    activeTabID: "3"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [],
    activeTabID: null
  }
}`,...x.parameters?.docs?.source}}},S=[`SingleTab`,`MultipleTabs`,`ManyTabs`,`NoTabs`]}))();export{b as ManyTabs,y as MultipleTabs,x as NoTabs,v as SingleTab,S as __namedExportsOrder,_ as default};