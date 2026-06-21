import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{It as n,Lt as r}from"./iframe-CnnFgWva.js";var i,a,o,s,c;e((()=>{r(),i=t(),a={title:`Brand/BlastRadiusSummary`,component:n,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{maxWidth:640,padding:24},children:(0,i.jsx)(e,{})})]},o={args:{radius:{total_blocks:240,affected_blocks:22,improved_blocks:0,degraded_blocks:22,new_violations:27,resolved_violations:0,critical_count:3,collections:[{collection_id:`c1`,collection_name:`Marketing`,affected_blocks:15,avg_score_delta:-7.2},{collection_id:`c2`,collection_name:`Docs`,affected_blocks:7,avg_score_delta:-3.1}]}}},s={args:{radius:{total_blocks:240,affected_blocks:0,improved_blocks:0,degraded_blocks:0,new_violations:0,resolved_violations:0,critical_count:0,collections:[]}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    radius: {
      total_blocks: 240,
      affected_blocks: 22,
      improved_blocks: 0,
      degraded_blocks: 22,
      new_violations: 27,
      resolved_violations: 0,
      critical_count: 3,
      collections: [{
        collection_id: "c1",
        collection_name: "Marketing",
        affected_blocks: 15,
        avg_score_delta: -7.2
      }, {
        collection_id: "c2",
        collection_name: "Docs",
        affected_blocks: 7,
        avg_score_delta: -3.1
      }]
    }
  }
}`,...o.parameters?.docs?.source},description:{story:`Promoting this rule would newly flag a chunk of existing content.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    radius: {
      total_blocks: 240,
      affected_blocks: 0,
      improved_blocks: 0,
      degraded_blocks: 0,
      new_violations: 0,
      resolved_violations: 0,
      critical_count: 0,
      collections: []
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`A safe rule: nothing currently violates it.`,...s.parameters?.docs?.description}}},c=[`NewViolations`,`NoImpact`]}))();export{o as NewViolations,s as NoImpact,c as __namedExportsOrder,a as default};