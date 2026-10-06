import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t,t as n}from"./KeptConflicts-Dy7rXssD.js";var r,i,a,o;function s(){return(s=e((()=>{r={kind:`edit`,doc:`src/en.json`,locale:`nl`,edit:`0pcm184gxrtanh4h3f6rs19m`,blocks:[{block:`title`,source:`Tide window`,held:{text:`Tijvenster`,rev:`r:7e19d9b8516eac94`},other:{text:`Getijdenvenster`,rev:`r:d991eea02eadebf8`}}]},i={kind:`file`,doc:`locales/en.json`,locale:`fr`,file:`locales/fr.json`,blocks:[{block:`title`,source:`Tide window`,held:{text:`Autre chose`,rev:`r:1a2b3c4d5e6f7081`},other:{text:`Fenêtre de marée`,rev:`r:9f8e7d6c5b4a3921`}},{block:`cta`,source:`Plan a <x id="1"/>crossing`,held:{text:``,rev:`absent`,absent:!0},other:{text:`Planifier une <x id="1"/>traversée`,rev:`r:0011223344556677`}}]},a={kind:`document`,doc:`work.kpz!messages.json`,locale:``,edit:`0pcn2v7k9wq1d4e8h3s5t6u0`,blocks:[]},o={...a,rebased:!0,blocks:[{block:`greeting`,source:``,held:{text:`Hello, edited on the desktop`,rev:`r:3c5e7a9b1d2f4c6e`},other:{text:`Hello from the team`,rev:``}},{block:`greeting`,edition:`fr`,source:`Hello, edited on the desktop`,held:{text:`Bonjour`,rev:`r:8a6b4c2d0e1f3a5b`},other:{text:`Salut l'équipe`,rev:``}}]}})))()}var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),s(),c={read:async()=>null,apply:async e=>({schema:`kapi.change-result/v1`,status:`applied`,ops:e.ops.map((e,t)=>({i:t,op:e.op,status:`applied`})),docs:[]}),describe:async()=>null,history:async()=>null},l={...c,apply:async e=>({schema:`kapi.change-result/v1`,status:`refused`,ops:e.ops.map((e,t)=>({i:t,op:e.op,status:`refused`,error:{code:`stale`,message:`edition nl of block title moved`},current:{rev:`r:5555555555555555`,text:`Tij venster`}})),docs:[]})},u={title:`Pages/Kept Conflicts`,component:n,parameters:{layout:`padded`},args:{tabID:`t1`,client:c,release:async()=>{},rebase:async()=>({carried:2,contested:1}),discard:async()=>{}}},d={args:{conflicts:[r]}},f={args:{conflicts:[i]}},p={args:{conflicts:[r,i]}},m={args:{conflicts:[a]}},h={args:{conflicts:[o]}},g={args:{conflicts:[a],rebase:async()=>({carried:1,contested:0,refused:`edition en of block greeting moved`})}},_={args:{conflicts:[a,r,i]}},v={args:{conflicts:[r],client:l}},y={args:{conflicts:[]}},b=[`EditThatDidNotLand`,`WordingTheFileDoesNotHold`,`BothKinds`,`DocumentVersionThatDidNotLand`,`DocumentVersionRebased`,`DocumentRebaseRefused`,`EveryKind`,`StaleDecision`,`NoConflicts`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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