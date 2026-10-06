import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./KeptConflicts-CQtC65DU.js";import{a as r,i,n as a,r as o,t as s}from"./keptConflicts-CXTVvhwx.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),i(),c={read:async()=>null,apply:async e=>({schema:`kapi.change-result/v1`,status:`applied`,ops:e.ops.map((e,t)=>({i:t,op:e.op,status:`applied`})),docs:[]}),describe:async()=>null,history:async()=>null},l={...c,apply:async e=>({schema:`kapi.change-result/v1`,status:`refused`,ops:e.ops.map((e,t)=>({i:t,op:e.op,status:`refused`,error:{code:`stale`,message:`edition nl of block title moved`},current:{rev:`r:5555555555555555`,text:`Tij venster`}})),docs:[]})},u={title:`Pages/Kept Conflicts`,component:n,parameters:{layout:`padded`},args:{tabID:`t1`,client:c,release:async()=>{},rebase:async()=>({carried:2,contested:1}),discard:async()=>{}}},d={args:{conflicts:[a]}},f={args:{conflicts:[o]}},p={args:{conflicts:[a,o]}},m={args:{conflicts:[s]}},h={args:{conflicts:[r]}},g={args:{conflicts:[s],rebase:async()=>({carried:1,contested:0,refused:`edition en of block greeting moved`})}},_={args:{conflicts:[s,a,o]}},v={args:{conflicts:[a],client:l}},y={args:{conflicts:[]}},b=[`EditThatDidNotLand`,`WordingTheFileDoesNotHold`,`BothKinds`,`DocumentVersionThatDidNotLand`,`DocumentVersionRebased`,`DocumentRebaseRefused`,`EveryKind`,`StaleDecision`,`NoConflicts`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [editConflict]
  }
}`,...d.parameters?.docs?.source},description:{story:`Two machines edited one Dutch draft from one version; one edit did not land.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [fileConflict]
  }
}`,...f.parameters?.docs?.source},description:{story:`The French file appeared without the wording a person kept in the
workspace; one block the file does not hold at all.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [editConflict, fileConflict]
  }
}`,...p.parameters?.docs?.source},description:{story:`Both kinds at once, as a project shows them.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [documentConflict]
  }
}`,...m.parameters?.docs?.source},description:{story:`The KPZ on disk was replaced while its document held an edit nobody packed:
the other version waits to be rebased onto the document or discarded.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [rebasedDocumentConflict]
  }
}`,...h.parameters?.docs?.source},description:{story:`After the rebase: the changes to other blocks were carried over, and the
block both versions changed is left, in the document's own language and in
the French the catalog holds.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [documentConflict],
    rebase: async () => ({
      carried: 1,
      contested: 0,
      refused: "edition en of block greeting moved"
    })
  }
}`,...g.parameters?.docs?.source},description:{story:`The change service refused the rebase: nothing is settled.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [documentConflict, editConflict, fileConflict]
  }
}`,..._.parameters?.docs?.source},description:{story:`Every kind at once, as a project shows them.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: [editConflict],
    client: stale
  }
}`,...v.parameters?.docs?.source},description:{story:`Deciding finds the wording moved since the read: nothing is written.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    conflicts: []
  }
}`,...y.parameters?.docs?.source},description:{story:`No conflicts: nothing is drawn.`,...y.parameters?.docs?.description}}}})))()}x();export{p as BothKinds,g as DocumentRebaseRefused,h as DocumentVersionRebased,m as DocumentVersionThatDidNotLand,d as EditThatDidNotLand,_ as EveryKind,y as NoConflicts,v as StaleDecision,f as WordingTheFileDoesNotHold,b as __namedExportsOrder,u as default};