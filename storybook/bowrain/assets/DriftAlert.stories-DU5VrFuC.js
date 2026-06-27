import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{Ft as n,Pt as r}from"./iframe-GWQmJElV.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={title:`Brand/DriftAlert`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:560,padding:24},children:(0,i.jsx)(e,{})})]},o={args:{drift:{drifted:!0,recent_avg:71.2,baseline_avg:95,drop:23.8,recent_days:7,recent_count:30,reason:`recent average dropped from baseline`}}},s={args:{showStable:!0,drift:{drifted:!1,recent_avg:92,baseline_avg:91,drop:-1,recent_days:7,recent_count:30}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    drift: {
      drifted: true,
      recent_avg: 71.2,
      baseline_avg: 95,
      drop: 23.8,
      recent_days: 7,
      recent_count: 30,
      reason: "recent average dropped from baseline"
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Compliance has dropped from its baseline — a warning banner.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showStable: true,
    drift: {
      drifted: false,
      recent_avg: 92,
      baseline_avg: 91,
      drop: -1,
      recent_days: 7,
      recent_count: 30
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Stable and quiet — by default renders nothing; here with showStable.`,...s.parameters?.docs?.description}}},c=[`Drifting`,`Stable`]}))();export{o as Drifting,s as Stable,c as __namedExportsOrder,a as default};