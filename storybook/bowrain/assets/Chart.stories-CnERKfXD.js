import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{at as n,nt as r,rt as i,t as a,tt as o,yr as s}from"./src-CNuSz2sU.js";import{a as c,i as l,o as u,r as d}from"./CartesianChart-C8RBLS3a.js";import{i as f,n as p,r as m,t as h}from"./BarChart-DodVr2Ug.js";var g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),f(),p(),u(),l(),g=t(),_={title:`Foundations/Chart`,component:o,tags:[`autodocs`],decorators:[e=>(0,g.jsx)(`div`,{style:{maxWidth:500,padding:16},children:(0,g.jsx)(e,{})})]},v=[{month:`Jan`,translated:186,established:80},{month:`Feb`,translated:305,established:200},{month:`Mar`,translated:237,established:120},{month:`Apr`,translated:73,established:190},{month:`May`,translated:209,established:130}],y={translated:{label:`Translated`,color:`var(--chart-1)`},established:{label:`Approved`,color:`var(--chart-2)`}},b={render:()=>(0,g.jsx)(o,{config:y,children:(0,g.jsxs)(h,{data:v,children:[(0,g.jsx)(c,{dataKey:`month`}),(0,g.jsx)(d,{}),(0,g.jsx)(m,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,g.jsx)(m,{dataKey:`established`,fill:`var(--color-established)`,radius:4})]})})},x={render:()=>(0,g.jsx)(o,{config:y,children:(0,g.jsxs)(h,{data:v,children:[(0,g.jsx)(c,{dataKey:`month`}),(0,g.jsx)(d,{}),(0,g.jsx)(n,{content:(0,g.jsx)(i,{})}),(0,g.jsx)(s,{content:(0,g.jsx)(r,{})}),(0,g.jsx)(m,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,g.jsx)(m,{dataKey:`established`,fill:`var(--color-established)`,radius:4})]})})},S=[`Default`,`WithTooltipAndLegend`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer config={config}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="translated" fill="var(--color-translated)" radius={4} />
        <Bar dataKey="established" fill="var(--color-established)" radius={4} />
      </BarChart>
    </ChartContainer>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer config={config}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="translated" fill="var(--color-translated)" radius={4} />
        <Bar dataKey="established" fill="var(--color-established)" radius={4} />
      </BarChart>
    </ChartContainer>
}`,...x.parameters?.docs?.source}}}})))()}C();export{b as Default,x as WithTooltipAndLegend,S as __namedExportsOrder,_ as default};