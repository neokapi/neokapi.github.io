import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{t as a}from"./src-CBB6Bb1D.js";import{t as o}from"./button-IRW24Fu4.js";import{n as s,o as c,r as l,t as u}from"./mockData-uOBo0EZq.js";import{n as d,t as f}from"./OutputView-atgthrzY.js";function p(e){return JSON.parse(JSON.stringify(e))}function m(e){e.kind===`block`&&(delete e.targets,delete e.targetMeta,delete e.overlays,delete e.annotations),e.children?.forEach(m)}function h(){let[e,t]=(0,g.useState)(0),n=e===0?c:b,r=e===0?y:l,a=(0,g.useMemo)(()=>s(n,r),[n,r]);return(0,_.jsxs)(`div`,{className:`flex max-w-3xl flex-col gap-3`,children:[(0,_.jsx)(o,{className:`self-start`,onClick:()=>t(e=>(e+1)%2),children:i(`aYT0pifAnRV`,`Simulate re-run (translate)`)}),(0,_.jsx)(f,{runtime:a,path:`/project/messages.json`,version:e})]})}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),g=t(),a(),d(),u(),_=n(),v={title:`Lab/Output View`,parameters:{layout:`padded`}},y=(()=>{let e=p(l);return e.root.forEach(m),e})(),b=`{
  "greeting": "Bonjour, {name} !",
  "cart": {
    "empty": "Votre panier est vide",
    "checkout": "Passer à la caisse"
  },
  "farewell": "À demain"
}
`,x={name:`Blocks / Structure / Native`,render:()=>{let e=s(c,l);return(0,_.jsx)(`div`,{className:`max-w-3xl`,children:(0,_.jsx)(f,{runtime:e,path:`/project/messages.json`})})}},S={name:`Write pulse on re-run`,render:()=>(0,_.jsx)(h,{})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Blocks / Structure / Native",
  render: () => {
    const runtime = makeMockRuntime(sampleJson, mockTree);
    return <div className="max-w-3xl">
        <OutputView runtime={runtime} path="/project/messages.json" />
      </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Write pulse on re-run",
  render: () => <OutputDemo />
}`,...S.parameters?.docs?.source}}},C=[`ThreeViews`,`ChangeAnimation`]})))()}w();export{S as ChangeAnimation,x as ThreeViews,C as __namedExportsOrder,v as default};