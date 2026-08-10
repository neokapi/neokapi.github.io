import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{M as t,N as n}from"./iframe-CoqnaStt.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Billing/CreditLedger`,component:t,tags:[`autodocs`]},a=Date.now(),o=3600*1e3,s=[{id:`1`,amount:5e5,balanceAfter:5e5,operation:`plan_reset`,createdAt:new Date(a-48*o).toISOString()},{id:`2`,amount:-12400,balanceAfter:487600,operation:`ai_translation`,referenceId:`job-abc12345`,createdAt:new Date(a-36*o).toISOString()},{id:`3`,amount:-3200,balanceAfter:484400,operation:`bravo_message`,referenceId:`conv-def67890`,createdAt:new Date(a-24*o).toISOString()},{id:`4`,amount:-800,balanceAfter:483600,operation:`bravo_container`,referenceId:`conv-def67890`,createdAt:new Date(a-23*o).toISOString()},{id:`5`,amount:-5100,balanceAfter:478500,operation:`ai_quality_check`,referenceId:`qa-ghi11223`,createdAt:new Date(a-12*o).toISOString()},{id:`6`,amount:2e5,balanceAfter:678500,operation:`purchase`,referenceId:`pi-jkl44556`,createdAt:new Date(a-6*o).toISOString()},{id:`7`,amount:5e4,balanceAfter:728500,operation:`grant`,createdAt:new Date(a-2*o).toISOString()},{id:`8`,amount:-18300,balanceAfter:710200,operation:`ai_translation`,referenceId:`job-mno77889`,createdAt:new Date(a-1*o).toISOString()}],c=[`plan_reset`,`ai_translation`,`bravo_message`,`bravo_container`,`ai_quality_check`,`purchase`,`grant`],l={args:{entries:s,operations:c,operation:`all`,onOperationChange:r(),total:s.length}},u={args:{entries:[],operations:[],total:0}},d={args:{entries:s.filter(e=>e.operation===`ai_translation`),operations:c,operation:`ai_translation`,onOperationChange:r(),total:2}},f={args:{entries:s.slice(0,4),operations:c,operation:`all`,onOperationChange:r(),total:128,limit:4,offset:4,onOffsetChange:r()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    entries: sampleEntries,
    operations: windowOperations,
    operation: "all",
    onOperationChange: fn(),
    total: sampleEntries.length
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    entries: [],
    operations: [],
    total: 0
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    entries: sampleEntries.filter(e => e.operation === "ai_translation"),
    operations: windowOperations,
    operation: "ai_translation",
    onOperationChange: fn(),
    total: 2
  }
}`,...d.parameters?.docs?.source},description:{story:`One operation chosen: the server returns its rows, and the window's chips stay.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    entries: sampleEntries.slice(0, 4),
    operations: windowOperations,
    operation: "all",
    onOperationChange: fn(),
    total: 128,
    limit: 4,
    offset: 4,
    onOffsetChange: fn()
  }
}`,...f.parameters?.docs?.source},description:{story:`A window larger than one page — the pager counts the server's total.`,...f.parameters?.docs?.description}}},p=[`Default`,`Empty`,`FilteredToOneOperation`,`Paged`]}))();export{l as Default,u as Empty,d as FilteredToOneOperation,f as Paged,p as __namedExportsOrder,i as default};