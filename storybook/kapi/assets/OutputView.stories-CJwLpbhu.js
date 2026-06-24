import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{r as i,t as a}from"./runtime-CI09VOSa.js";import{t as o}from"./button-D6zYGAvL.js";import{i as s}from"./iframe-4phoqms4.js";import{n as c,o as l,r as u,t as d}from"./mockData-BoeV-ulQ.js";import{n as f,t as p}from"./OutputView-C6yBrWDq.js";function m(e){return JSON.parse(JSON.stringify(e))}function h(e){e.kind===`block`&&(delete e.targets,delete e.targetMeta,delete e.overlays,delete e.annotations),e.children?.forEach(h)}function g(){let[e,t]=(0,_.useState)(0),n=e===0?l:x,r=e===0?b:u,i=(0,_.useMemo)(()=>c(n,r),[n,r]);return(0,v.jsxs)(`div`,{className:`flex max-w-3xl flex-col gap-3`,children:[(0,v.jsx)(o,{className:`self-start`,onClick:()=>t(e=>(e+1)%2),children:a(`3XvjSW`,`Simulate re-run (translate)`)}),(0,v.jsx)(p,{runtime:i,path:`/project/messages.json`,version:e})]})}var _,v,y,b,x,S,C,w;t((()=>{i(),_=e(n(),1),s(),f(),d(),v=r(),y={title:`Lab/Output View`,parameters:{layout:`padded`}},b=(()=>{let e=m(u);return e.root.forEach(h),e})(),x=`{
  "greeting": "Bonjour, {name} !",
  "cart": {
    "empty": "Votre panier est vide",
    "checkout": "Passer à la caisse"
  },
  "farewell": "À demain"
}
`,S={name:`Blocks / Structure / Native`,render:()=>(0,v.jsx)(`div`,{className:`max-w-3xl`,children:(0,v.jsx)(p,{runtime:c(l,u),path:`/project/messages.json`})})},C={name:`Write pulse on re-run`,render:()=>(0,v.jsx)(g,{})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Blocks / Structure / Native",
  render: () => {
    const runtime = makeMockRuntime(sampleJson, mockTree);
    return <div className="max-w-3xl">
        <OutputView runtime={runtime} path="/project/messages.json" />
      </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Write pulse on re-run",
  render: () => <OutputDemo />
}`,...C.parameters?.docs?.source}}},w=[`ThreeViews`,`ChangeAnimation`]}))();export{C as ChangeAnimation,S as ThreeViews,w as __namedExportsOrder,y as default};