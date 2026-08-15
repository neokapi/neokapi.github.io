import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{at as n,it as r,ot as i,t as a}from"./src-Q3LpxxKE.js";import{a as o,i as s,o as c,q as l,r as u}from"./CartesianChart-Cy5hixZI.js";import{t as d}from"./Legend-KFhqhztI.js";import{i as f,n as p,r as m,t as h}from"./BarChart-BHiWQa8S.js";var g,_,v,y,b,x,S;function C(){return(C=e((()=>{a(),f(),p(),c(),s(),g=t(),_={title:`Foundations/Chart`,component:r,tags:[`autodocs`],decorators:[e=>(0,g.jsx)(`div`,{style:{maxWidth:500,padding:16},children:(0,g.jsx)(e,{})})]},v=[{month:`Jan`,translated:186,reviewed:80},{month:`Feb`,translated:305,reviewed:200},{month:`Mar`,translated:237,reviewed:120},{month:`Apr`,translated:73,reviewed:190},{month:`May`,translated:209,reviewed:130}],y={translated:{label:`Translated`,color:`var(--chart-1)`},reviewed:{label:`Reviewed`,color:`var(--chart-2)`}},b={render:()=>(0,g.jsx)(r,{config:y,children:(0,g.jsxs)(h,{data:v,children:[(0,g.jsx)(o,{dataKey:`month`}),(0,g.jsx)(u,{}),(0,g.jsx)(m,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,g.jsx)(m,{dataKey:`reviewed`,fill:`var(--color-reviewed)`,radius:4})]})})},x={render:()=>(0,g.jsx)(r,{config:y,children:(0,g.jsxs)(h,{data:v,children:[(0,g.jsx)(o,{dataKey:`month`}),(0,g.jsx)(u,{}),(0,g.jsx)(l,{content:(0,g.jsx)(i,{})}),(0,g.jsx)(d,{content:(0,g.jsx)(n,{})}),(0,g.jsx)(m,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,g.jsx)(m,{dataKey:`reviewed`,fill:`var(--color-reviewed)`,radius:4})]})})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer config={config}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="translated" fill="var(--color-translated)" radius={4} />
        <Bar dataKey="reviewed" fill="var(--color-reviewed)" radius={4} />
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
        <Bar dataKey="reviewed" fill="var(--color-reviewed)" radius={4} />
      </BarChart>
    </ChartContainer>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithTooltipAndLegend`]})))()}C();export{b as Default,x as WithTooltipAndLegend,S as __namedExportsOrder,_ as default};