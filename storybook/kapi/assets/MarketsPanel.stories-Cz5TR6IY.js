import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{i,n as a,r as o,t as s}from"./useResource-Cyoqi1qt.js";import{n as c,t as l}from"./MarketsPanel-16I-MDkA.js";import{n as u,t as d}from"./fixtures-DrILaDDW.js";function f({source:e,conceptId:t=`checkout`}){let n=(0,p.useMemo)(()=>i(e),[e]),{data:r}=a(()=>e.getConcept(t),[e,t]);return(0,m.jsx)(`div`,{className:`mx-auto max-w-2xl p-6`,children:r&&(0,m.jsx)(l,{concept:r,source:e,capabilities:n,onNavigate:()=>void 0})})}var p,m,h,g,_,v,y,b,x,S,C;t((()=>{p=e(n(),1),c(),o(),s(),d(),m=r(),h=u(),g=u({rich:!1,editable:!1}),_={...u(),getMarkets:()=>Promise.reject(Error(`Server unavailable (503)`))},v={title:`Concept UI/MarketsPanel`,component:l,parameters:{layout:`fullscreen`}},y={render:()=>(0,m.jsx)(f,{source:h})},b={render:()=>(0,m.jsx)(f,{source:h,conceptId:`coupon`})},x={render:()=>(0,m.jsx)(f,{source:g})},S={render:()=>(0,m.jsx)(f,{source:_})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={richSource} />
}`,...y.parameters?.docs?.source},description:{story:`Named markets (DACH, France, US, UK): one panel each, with the term and status
used there. The French panel carries a deprecated variant, so its accent reads
banned; preferred wording is starred.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={richSource} conceptId="coupon" />
}`,...b.parameters?.docs?.source},description:{story:`A concept with a forbidden competitor term ('Voucher' in en-US): the panel
covering that locale turns its accent destructive and strikes the banned term.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={coreSource} />
}`,...x.parameters?.docs?.source},description:{story:`Framework-only mode: no named markets, so the panels are derived from the
terms' \`market\` validity tags, with untagged locales gathered under "Other
locales". The header shows a "from tags" badge.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={failingSource} />
}`,...S.parameters?.docs?.source},description:{story:`The named-markets read fails: the panel surfaces an error instead of silently
degrading to tag-derived markets, so a failed fetch is never mistaken for a
concept with no regional wording.`,...S.parameters?.docs?.description}}},C=[`NamedMarkets`,`BannedWording`,`FrameworkOnly`,`FetchError`]}))();export{b as BannedWording,S as FetchError,x as FrameworkOnly,y as NamedMarkets,C as __namedExportsOrder,v as default};