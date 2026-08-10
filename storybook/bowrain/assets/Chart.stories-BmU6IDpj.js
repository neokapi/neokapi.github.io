import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{Dt as n,Zt as r,_t as i,at as a,ct as o,dt as s,ht as c,it as l,ot as u,t as d,yt as f}from"./src-BiSlf9BZ.js";var p,m,h,g,_,v,y;e((()=>{d(),o(),p=t(),m={title:`Foundations/Chart`,component:l,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:500,padding:16},children:(0,p.jsx)(e,{})})]},h=[{month:`Jan`,translated:186,reviewed:80},{month:`Feb`,translated:305,reviewed:200},{month:`Mar`,translated:237,reviewed:120},{month:`Apr`,translated:73,reviewed:190},{month:`May`,translated:209,reviewed:130}],g={translated:{label:`Translated`,color:`var(--chart-1)`},reviewed:{label:`Reviewed`,color:`var(--chart-2)`}},_={render:()=>(0,p.jsx)(l,{config:g,children:(0,p.jsxs)(s,{data:h,children:[(0,p.jsx)(i,{dataKey:`month`}),(0,p.jsx)(c,{}),(0,p.jsx)(f,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,p.jsx)(f,{dataKey:`reviewed`,fill:`var(--color-reviewed)`,radius:4})]})})},v={render:()=>(0,p.jsx)(l,{config:g,children:(0,p.jsxs)(s,{data:h,children:[(0,p.jsx)(i,{dataKey:`month`}),(0,p.jsx)(c,{}),(0,p.jsx)(n,{content:(0,p.jsx)(u,{})}),(0,p.jsx)(r,{content:(0,p.jsx)(a,{})}),(0,p.jsx)(f,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,p.jsx)(f,{dataKey:`reviewed`,fill:`var(--color-reviewed)`,radius:4})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ChartContainer config={config}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="translated" fill="var(--color-translated)" radius={4} />
        <Bar dataKey="reviewed" fill="var(--color-reviewed)" radius={4} />
      </BarChart>
    </ChartContainer>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithTooltipAndLegend`]}))();export{_ as Default,v as WithTooltipAndLegend,y as __namedExportsOrder,m as default};