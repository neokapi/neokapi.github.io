import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{i as r,n as i,t as a}from"./useResource-DemnDjOX.js";import{n as o,t as s}from"./MarketsPanel-LWn_0q6s.js";import{n as c,t as l}from"./fixtures-G2SFr39l.js";function u({source:e,conceptId:t=`checkout`}){let n=(0,d.useMemo)(()=>r(e),[e]),{data:a}=i(()=>e.getConcept(t),[e,t]);return(0,f.jsx)(`div`,{className:`mx-auto max-w-2xl p-6`,children:a&&(0,f.jsx)(s,{concept:a,source:e,capabilities:n,onNavigate:()=>void 0})})}var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{d=t(),o(),a(),l(),f=n(),p=c(),m=c({rich:!1,editable:!1}),h={...c(),getMarkets:()=>Promise.reject(Error(`Server unavailable (503)`))},g={title:`Concept UI/MarketsPanel`,component:s,parameters:{layout:`fullscreen`}},_={render:()=>(0,f.jsx)(u,{source:p})},v={render:()=>(0,f.jsx)(u,{source:p,conceptId:`coupon`})},y={render:()=>(0,f.jsx)(u,{source:m})},b={render:()=>(0,f.jsx)(u,{source:h})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={richSource} />
}`,..._.parameters?.docs?.source},description:{story:`Named markets (DACH, France, US, UK): one panel each, with the term and status
used there. The French panel carries a deprecated variant, so its accent reads
banned; preferred wording is starred.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={richSource} conceptId="coupon" />
}`,...v.parameters?.docs?.source},description:{story:`A concept with a forbidden competitor term ('Voucher' in en-US): the panel
covering that locale turns its accent destructive and strikes the banned term.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={coreSource} />
}`,...y.parameters?.docs?.source},description:{story:`Framework-only mode: no named markets, so the panels are derived from the
terms' \`market\` validity tags, with untagged locales gathered under "Other
locales". The header shows a "from tags" badge.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <MarketsHarness source={failingSource} />
}`,...b.parameters?.docs?.source},description:{story:`The named-markets read fails: the panel surfaces an error instead of silently
degrading to tag-derived markets, so a failed fetch is never mistaken for a
concept with no regional wording.`,...b.parameters?.docs?.description}}},x=[`NamedMarkets`,`BannedWording`,`FrameworkOnly`,`FetchError`]})))()}S();export{v as BannedWording,b as FetchError,y as FrameworkOnly,_ as NamedMarkets,x as __namedExportsOrder,g as default};