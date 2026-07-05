import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{At as n,Ft as r,Mt as i,Ot as a,Ut as o,Vt as s,Zt as c,kt as l,t as u,xn as d,zt as f}from"./src-BQWKt4RD.js";var p,m,h,g,_,v,y;e((()=>{u(),i(),p=t(),m={title:`Foundations/Chart`,component:a,tags:[`autodocs`],decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:500,padding:16},children:(0,p.jsx)(e,{})})]},h=[{month:`Jan`,translated:186,reviewed:80},{month:`Feb`,translated:305,reviewed:200},{month:`Mar`,translated:237,reviewed:120},{month:`Apr`,translated:73,reviewed:190},{month:`May`,translated:209,reviewed:130}],g={translated:{label:`Translated`,color:`var(--chart-1)`},reviewed:{label:`Reviewed`,color:`var(--chart-2)`}},_={render:()=>(0,p.jsx)(a,{config:g,children:(0,p.jsxs)(r,{data:h,children:[(0,p.jsx)(s,{dataKey:`month`}),(0,p.jsx)(f,{}),(0,p.jsx)(o,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,p.jsx)(o,{dataKey:`reviewed`,fill:`var(--color-reviewed)`,radius:4})]})})},v={render:()=>(0,p.jsx)(a,{config:g,children:(0,p.jsxs)(r,{data:h,children:[(0,p.jsx)(s,{dataKey:`month`}),(0,p.jsx)(f,{}),(0,p.jsx)(c,{content:(0,p.jsx)(n,{})}),(0,p.jsx)(d,{content:(0,p.jsx)(l,{})}),(0,p.jsx)(o,{dataKey:`translated`,fill:`var(--color-translated)`,radius:4}),(0,p.jsx)(o,{dataKey:`reviewed`,fill:`var(--color-reviewed)`,radius:4})]})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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