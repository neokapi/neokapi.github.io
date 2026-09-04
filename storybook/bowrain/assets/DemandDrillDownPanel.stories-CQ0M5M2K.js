import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./DemandDrillDownPanel-ecXJcq-x.js";import{c as i,u as a}from"./locale-demand-fixtures-VjoPLduB.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),o=t(),s=a.getSnapshot(`30d`),c={title:`Locale Demand/DemandDrillDownPanel`,component:r,decorators:[e=>(0,o.jsx)(`div`,{className:`p-6`,children:(0,o.jsx)(e,{})})]},l={args:{snapshot:s,selection:{kind:`country`,code:`BR`},onClose:()=>{}}},u={args:{snapshot:s,selection:{kind:`language`,code:`ko`},onClose:()=>{}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Drill-down after clicking a language row in the table.`,...u.parameters?.docs?.description}}},d=[`Country`,`Language`]})))()}f();export{l as Country,u as Language,d as __namedExportsOrder,c as default};