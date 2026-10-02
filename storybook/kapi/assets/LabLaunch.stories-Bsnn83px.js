import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{r as i,t as a}from"./runtime-DzTyTKAL.js";function o({children:e,label:t=`Open experiment`,description:n=`Open the experiment to load its interface and sample. Where offered, use Run to start processing. Engine and model assets download on first use.`}){let[r,i]=(0,s.useState)(!1),[o,u]=(0,s.useState)(0),d=(0,s.useId)();return(0,c.jsxs)(`div`,{className:`kapi-reference min-w-0`,children:[(0,c.jsxs)(`div`,{className:`mb-4 rounded-lg border bg-muted/20 p-4`,children:[(0,c.jsx)(`p`,{id:d,className:`mb-3 text-sm leading-relaxed text-muted-foreground`,children:n}),(0,c.jsx)(`button`,{type:`button`,className:`button button--${r?`secondary`:`primary`}`,"aria-expanded":r,"aria-controls":`${d}-experiment`,"aria-describedby":d,onClick:()=>i(e=>!e),children:r?a(`3udcbYL0J5m`,`Close experiment`):t}),r&&(0,c.jsx)(`span`,{className:`ml-3 text-sm text-muted-foreground`,children:a(`7H5qOn1MIwb`,`Closing discards unsaved experiment controls and results.`)})]}),(0,c.jsx)(`div`,{id:`${d}-experiment`,children:r&&(0,c.jsx)(l,{onRetry:()=>u(e=>e+1),children:(0,c.jsx)(s.Suspense,{fallback:(0,c.jsx)(`p`,{role:`status`,"aria-live":`polite`,children:a(`Ff9dnY5Ia1`,`Loading the experiment…`)}),children:e})},o)})]})}var s,c,l;function u(){return(u=e((()=>{i(),s=t(n()),c=r(),l=class extends s.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?(0,c.jsxs)(`div`,{role:`alert`,className:`rounded-lg border p-4`,children:[(0,c.jsx)(`p`,{children:`The experiment could not load. Check your connection and try again.`}),(0,c.jsx)(`button`,{type:`button`,className:`button button--secondary`,onClick:this.props.onRetry,children:`Try again`}),` `,(0,c.jsx)(`button`,{type:`button`,className:`button button--secondary`,onClick:()=>window.location.reload(),children:`Reload page`})]}):this.props.children}},o.__docgenInfo={description:`Mount browser experiments only after an explicit launch, including their lazy imports.`,methods:[],displayName:`LabLaunch`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Open experiment"`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Open the experiment to load its interface and sample. Where offered, use Run to start processing. Engine and model assets download on first use."`,computed:!1}}}}})))()}function d(){throw Error(`Example experiment failure`)}var f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{i(),f=t(n()),u(),p=r(),{userEvent:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Labs/Launch`,component:o,parameters:{layout:`padded`},args:{children:(0,p.jsx)(`div`,{className:`rounded-lg border p-6`,children:a(`7C8ou7q9nve`,`Experiment workspace`)})}},_={},v={args:{label:`Open terminal`,description:`Opening the terminal downloads and starts the browser engine. Select a sample, then press Enter to run its command.`}},y={args:{children:(0,p.jsx)(d,{})},play:async({canvasElement:e})=>{await m.click(h(e).getByRole(`button`,{name:`Open experiment`}))}},b=f.lazy(()=>new Promise(()=>{})),x={args:{children:(0,p.jsx)(b,{})},play:async({canvasElement:e})=>{await m.click(h(e).getByRole(`button`,{name:`Open experiment`}))}},S=[`Closed`,`Terminal`,`Recovery`,`Loading`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Open terminal",
    description: "Opening the terminal downloads and starts the browser engine. Select a sample, then press Enter to run its command."
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Unavailable />
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open experiment"
    }));
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Pending />
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open experiment"
    }));
  }
}`,...x.parameters?.docs?.source}}}})))()}C();export{_ as Closed,x as Loading,y as Recovery,v as Terminal,S as __namedExportsOrder,g as default};