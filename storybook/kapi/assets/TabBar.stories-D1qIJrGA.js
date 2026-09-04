import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{t as a}from"./src-CPUt1lI8.js";import{n as o,t as s}from"./x-i7QAllnh.js";import{t as c}from"./tooltip-BZinfefN.js";import{t as l}from"./button-IRW24Fu4.js";function u({tabs:e,activeTabID:t,onSelect:n,onClose:r,onRename:a}){let[o,u]=(0,d.useState)(null),[p,m]=(0,d.useState)(``),h=(0,d.useRef)(null),g=(0,d.useRef)(new Map);(0,d.useEffect)(()=>{o&&h.current&&(h.current.focus(),h.current.select())},[o]);let _=e=>{u(e.id),m(e.name)},v=()=>{o&&p.trim()&&a(o,p.trim()),u(null)},y=e=>{g.current.get(e)?.focus()},b=(t,r,i)=>{if(o===r.id)return;let a=e=>{t.preventDefault(),n(e.id),y(e.id)};switch(t.key){case`Enter`:case` `:t.preventDefault(),n(r.id);break;case`ArrowRight`:case`ArrowDown`:a(e[(i+1)%e.length]);break;case`ArrowLeft`:case`ArrowUp`:a(e[(i-1+e.length)%e.length]);break;case`Home`:a(e[0]);break;case`End`:a(e[e.length-1]);break;case`F2`:t.preventDefault(),_(r)}};if(e.length===0)return null;let x=t??e[0].id;return(0,f.jsx)(`div`,{role:`tablist`,"aria-label":i(`aHzttRKH7C2`,`Open projects`),className:`flex items-end gap-px overflow-x-auto px-1`,children:e.map((e,a)=>{let d=t===e.id;return(0,f.jsxs)(`div`,{ref:t=>{t?g.current.set(e.id,t):g.current.delete(e.id)},role:`tab`,"aria-selected":d,tabIndex:e.id===x?0:-1,onClick:()=>n(e.id),onKeyDown:t=>b(t,e,a),className:`group flex min-w-[160px] max-w-[240px] cursor-pointer items-center justify-between gap-1.5 rounded-t-lg px-3 py-1.5 text-xs transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring ${d?`bg-border text-foreground font-semibold`:`text-muted-foreground hover:bg-accent/40 hover:text-foreground`}`,children:[o===e.id?(0,f.jsx)(`input`,{ref:h,value:p,onChange:e=>m(e.target.value),onBlur:v,onKeyDown:e=>{e.key===`Enter`&&v(),e.key===`Escape`&&u(null)},className:`w-24 rounded bg-transparent px-0.5 text-xs outline-none ring-1 ring-ring`,"aria-label":i(`5JPfSZKDL7s`,`Rename project`)}):(0,f.jsx)(c,{content:e.path?`${e.name} · ${e.path}`:e.name,children:(0,f.jsx)(`span`,{onDoubleClick:()=>_(e),className:`max-w-[140px] truncate`,children:e.name})}),(0,f.jsx)(l,{variant:`ghost`,size:`icon-xs`,onClick:t=>{t.stopPropagation(),r(e.id)},className:`h-4 w-4 opacity-0 group-hover:opacity-100 focus-visible:opacity-100`,"aria-label":i(`4ZU0hGhzp5p`,`Close {name}`,{name:e.name}),children:(0,f.jsx)(s,{size:10})})]},e.id)})})}var d,f;function p(){return(p=e((()=>{r(),d=t(),o(),a(),f=n(),u.__docgenInfo={description:``,methods:[],displayName:`TabBar`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabInfo`}],raw:`TabInfo[]`},description:``},activeTabID:{required:!0,tsType:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},description:``},onSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tabID: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabID`}],return:{name:`void`}}},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tabID: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabID`}],return:{name:`void`}}},description:``},onRename:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(tabID: string, name: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabID`},{type:{name:`string`},name:`name`}],return:{name:`void`}}},description:``}}}})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{p(),m=n(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/TabBar`,component:u,tags:[`autodocs`],args:{onSelect:h(),onClose:h()},decorators:[e=>(0,m.jsx)(`div`,{style:{width:800},children:(0,m.jsx)(e,{})})]},_={args:{tabs:[{id:`1`,name:`translation`,path:`/Users/dev/translation/kapi.yaml`}],activeTabID:`1`}},v={args:{tabs:[{id:`1`,name:`translation`,path:`/Users/dev/translation/kapi.yaml`},{id:`2`,name:`qa-pipeline`,path:`/Users/dev/qa-pipeline/kapi.yaml`},{id:`3`,name:`New Project`,path:``}],activeTabID:`2`}},y={args:{tabs:Array.from({length:8},(e,t)=>({id:String(t+1),name:`project-${t+1}`,path:`/tmp/project-${t+1}/kapi.yaml`})),activeTabID:`3`}},b={args:{tabs:[],activeTabID:null}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "1",
      name: "translation",
      path: "/Users/dev/translation/kapi.yaml"
    }],
    activeTabID: "1"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [],
    activeTabID: null
  }
}`,...b.parameters?.docs?.source}}},x=[`SingleTab`,`MultipleTabs`,`ManyTabs`,`NoTabs`]})))()}S();export{y as ManyTabs,v as MultipleTabs,b as NoTabs,_ as SingleTab,x as __namedExportsOrder,g as default};