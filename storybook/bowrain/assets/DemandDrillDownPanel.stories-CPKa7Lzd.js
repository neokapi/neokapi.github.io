import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{c as n,u as r}from"./locale-demand-fixtures-C296XoQy.js";import{n as i,t as a}from"./DemandDrillDownPanel-D8xpowa1.js";var o,s,c,l,u,d;e((()=>{i(),n(),o=t(),s=r.getSnapshot(`30d`),c={title:`Locale Demand/DemandDrillDownPanel`,component:a,decorators:[e=>(0,o.jsx)(`div`,{className:`p-6`,children:(0,o.jsx)(e,{})})]},l={args:{snapshot:s,selection:{kind:`country`,code:`BR`},onClose:()=>{}}},u={args:{snapshot:s,selection:{kind:`language`,code:`ko`},onClose:()=>{}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot,
    selection: {
      kind: "country",
      code: "BR"
    },
    onClose: () => {}
  }
}`,...l.parameters?.docs?.source},description:{story:`Drill-down after clicking a country on the map.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    snapshot,
    selection: {
      kind: "language",
      code: "ko"
    },
    onClose: () => {}
  }
}`,...u.parameters?.docs?.source},description:{story:`Drill-down after clicking a language row in the table.`,...u.parameters?.docs?.description}}},d=[`Country`,`Language`]}))();export{l as Country,u as Language,d as __namedExportsOrder,c as default};