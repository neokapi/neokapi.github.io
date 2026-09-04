import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{n as a,r as o,t as s}from"./view-tab-8n1BOqmL.js";function c({choices:e}){let[t,n]=(0,l.useState)(e[0]);return(0,u.jsx)(a,{"aria-label":i(`fJ8isE04pbZ`,`View`),children:e.map(e=>(0,u.jsx)(s,{active:t===e,onClick:()=>n(e),children:e},e))})}var l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),l=t(),o(),u=n(),d={title:`Foundations/ViewTab`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`A compact view switch: a pill group of small toggle buttons for choosing which reading of one thing to show. Used by the data preview (Keys / File) and the flow editor (Steps / Diagram / Run).`}}}},f={render:()=>(0,u.jsx)(c,{choices:[`Keys`,`File`]})},p={render:()=>(0,u.jsx)(c,{choices:[`Steps`,`Diagram`,`Run`]})},m={globals:{theme:`dark`},render:()=>(0,u.jsx)(c,{choices:[`Steps`,`Diagram`,`Run`]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Demo choices={["Keys", "File"]} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Demo choices={["Steps", "Diagram", "Run"]} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  render: () => <Demo choices={["Steps", "Diagram", "Run"]} />
}`,...m.parameters?.docs?.source}}},h=[`TwoChoices`,`ThreeChoices`,`Dark`]})))()}g();export{m as Dark,p as ThreeChoices,f as TwoChoices,h as __namedExportsOrder,d as default};