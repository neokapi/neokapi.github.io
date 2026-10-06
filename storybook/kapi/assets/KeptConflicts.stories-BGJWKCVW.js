import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./KeptConflicts-ChzH3TmD.js";var r,i;function a(){return(a=e((()=>{r={kind:`edit`,doc:`src/en.json`,locale:`nl`,edit:`0pcm184gxrtanh4h3f6rs19m`,blocks:[{block:`title`,source:`Tide window`,held:{text:`Tijvenster`,rev:`r:7e19d9b8516eac94`},other:{text:`Getijdenvenster`,rev:`r:d991eea02eadebf8`}}]},i={kind:`file`,doc:`locales/en.json`,locale:`fr`,file:`locales/fr.json`,blocks:[{block:`title`,source:`Tide window`,held:{text:`Autre chose`,rev:`r:1a2b3c4d5e6f7081`},other:{text:`Fenêtre de marée`,rev:`r:9f8e7d6c5b4a3921`}},{block:`cta`,source:`Plan a <x id="1"/>crossing`,held:{text:``,rev:`absent`,absent:!0},other:{text:`Planifier une <x id="1"/>traversée`,rev:`r:0011223344556677`}}]}})))()}var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{t(),a(),o={read:async()=>null,apply:async e=>({schema:`kapi.change-result/v1`,status:`applied`,ops:e.ops.map((e,t)=>({i:t,op:e.op,status:`applied`})),docs:[]}),describe:async()=>null,history:async()=>null},s={...o,apply:async e=>({schema:`kapi.change-result/v1`,status:`refused`,ops:e.ops.map((e,t)=>({i:t,op:e.op,status:`refused`,error:{code:`stale`,message:`edition nl of block title moved`},current:{rev:`r:5555555555555555`,text:`Tij venster`}})),docs:[]})},c={title:`Pages/Kept Conflicts`,component:n,parameters:{layout:`padded`},args:{tabID:`t1`,client:o,release:async()=>{}}},l={args:{conflicts:[r]}},u={args:{conflicts:[i]}},d={args:{conflicts:[r,i]}},f={args:{conflicts:[r],client:s}},p={args:{conflicts:[]}},m=[`EditThatDidNotLand`,`WordingTheFileDoesNotHold`,`BothKinds`,`StaleDecision`,`NoConflicts`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [editConflict]
  }
}`,...l.parameters?.docs?.source},description:{story:`Two machines edited one Dutch draft from one version; one edit did not land.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [fileConflict]
  }
}`,...u.parameters?.docs?.source},description:{story:`The French file appeared without the wording a person kept in the
workspace; one block the file does not hold at all.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [editConflict, fileConflict]
  }
}`,...d.parameters?.docs?.source},description:{story:`Both kinds at once, as a project shows them.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [editConflict],
    client: stale
  }
}`,...f.parameters?.docs?.source},description:{story:`Deciding finds the wording moved since the read: nothing is written.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: []
  }
}`,...p.parameters?.docs?.source},description:{story:`No conflicts: nothing is drawn.`,...p.parameters?.docs?.description}}}})))()}h();export{d as BothKinds,l as EditThatDidNotLand,p as NoConflicts,f as StaleDecision,u as WordingTheFileDoesNotHold,m as __namedExportsOrder,c as default};