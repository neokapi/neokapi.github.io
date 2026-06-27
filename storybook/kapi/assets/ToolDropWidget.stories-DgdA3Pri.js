import{i as e}from"./preload-helper-DRGloZ2I.js";import{t}from"./jsx-runtime-Co6hkppD.js";import{a as n,c as r,i,n as a,o,r as s,s as c,t as l}from"./SearchReplaceWidget-CfcQLXGz.js";var u,d,f,p,m,h,g;e((()=>{r(),o(),i(),a(),u=t(),d={title:`Lab/Tool Drop Widget`,parameters:{layout:`padded`}},f={name:`Pseudo-translate`,render:()=>(0,u.jsx)(`div`,{className:`max-w-3xl`,children:(0,u.jsx)(n,{assets:null})})},p={name:`Stats (word-count)`,render:()=>(0,u.jsx)(`div`,{className:`max-w-3xl`,children:(0,u.jsx)(s,{assets:null})})},m={name:`Search / replace`,render:()=>(0,u.jsx)(`div`,{className:`max-w-3xl`,children:(0,u.jsx)(l,{assets:null})})},h={name:`Generic (custom argv)`,render:()=>(0,u.jsx)(`div`,{className:`max-w-3xl`,children:(0,u.jsx)(c,{assets:null,tool:`case-transform`,buildArgv:(e,t)=>[`case-transform`,e,`-o`,t,`--mode`,`upper`],sampleIds:[`json`],render:`output`,autoRun:!1})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Pseudo-translate",
  render: () => <div className="max-w-3xl">
      <PseudoTranslateWidget assets={null} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Stats (word-count)",
  render: () => <div className="max-w-3xl">
      <StatsWidget assets={null} />
    </div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Search / replace",
  render: () => <div className="max-w-3xl">
      <SearchReplaceWidget assets={null} />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Generic (custom argv)",
  render: () => <div className="max-w-3xl">
      <ToolDropWidget assets={null} tool="case-transform" buildArgv={(i, o) => ["case-transform", i, "-o", o, "--mode", "upper"]} sampleIds={["json"]} render="output" autoRun={false} />
    </div>
}`,...h.parameters?.docs?.source}}},g=[`PseudoTranslate`,`Stats`,`SearchReplace`,`Generic`]}))();export{h as Generic,f as PseudoTranslate,m as SearchReplace,p as Stats,g as __namedExportsOrder,d as default};