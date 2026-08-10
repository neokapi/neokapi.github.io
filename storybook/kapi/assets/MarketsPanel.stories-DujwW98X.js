import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{i as r,n as i,r as a,t as o}from"./useResource-CKabO-LT.js";import{n as s,t as c}from"./MarketsPanel-B8XxadWs.js";import{n as l,t as u}from"./fixtures-DsbVidcI.js";function d({source:e,conceptId:t=`checkout`}){let n=(0,f.useMemo)(()=>r(e),[e]),{data:a}=i(()=>e.getConcept(t),[e,t]);return(0,p.jsx)(`div`,{className:`mx-auto max-w-2xl p-6`,children:a&&(0,p.jsx)(c,{concept:a,source:e,capabilities:n,onNavigate:()=>void 0})})}var f,p,m,h,g,_,v,y,b,x,S;e((()=>{f=t(),s(),a(),o(),u(),p=n(),m=l(),h=l({rich:!1,editable:!1}),g={...l(),getMarkets:()=>Promise.reject(Error(`Server unavailable (503)`))},_={title:`Concept UI/MarketsPanel`,component:c,parameters:{layout:`fullscreen`}},v={render:()=>(0,p.jsx)(d,{source:m})},y={render:()=>(0,p.jsx)(d,{source:m,conceptId:`coupon`})},b={render:()=>(0,p.jsx)(d,{source:h})},x={render:()=>(0,p.jsx)(d,{source:g})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={richSource} />
}`,...v.parameters?.docs?.source},description:{story:`Named markets (DACH, France, US, UK): one panel each, with the term and status
used there. The French panel carries a deprecated variant, so its accent reads
banned; preferred wording is starred.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={richSource} conceptId="coupon" />
}`,...y.parameters?.docs?.source},description:{story:`A concept with a forbidden competitor term ('Voucher' in en-US): the panel
covering that locale turns its accent destructive and strikes the banned term.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={coreSource} />
}`,...b.parameters?.docs?.source},description:{story:`Framework-only mode: no named markets, so the panels are derived from the
terms' \`market\` validity tags, with untagged locales gathered under "Other
locales". The header shows a "from tags" badge.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={failingSource} />
}`,...x.parameters?.docs?.source},description:{story:`The named-markets read fails: the panel surfaces an error instead of silently
degrading to tag-derived markets, so a failed fetch is never mistaken for a
concept with no regional wording.`,...x.parameters?.docs?.description}}},S=[`NamedMarkets`,`BannedWording`,`FrameworkOnly`,`FetchError`]}))();export{y as BannedWording,x as FetchError,b as FrameworkOnly,v as NamedMarkets,S as __namedExportsOrder,_ as default};