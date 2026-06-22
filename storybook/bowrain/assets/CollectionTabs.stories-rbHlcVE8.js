import{i as e}from"./preload-helper-DBuSV-bh.js";import{t}from"./jsx-runtime-CNPDJLAB.js";import{n,t as r}from"./CollectionTabs-Dg2Tqoh4.js";import{_ as i,n as a,s as o}from"./fixtures-BuhTuUh8.js";var s,c,l,u,d,f;e((()=>{n(),o(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Workspace/Collections/CollectionTabs`,component:r,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:800,padding:24},children:(0,s.jsx)(e,{})})]},u={args:{collections:i,activeCollectionId:a.id,onSelectCollection:c(),onCreateCollection:c(),onEditCollection:c(),onDeleteCollection:c()}},d={args:{collections:[a],activeCollectionId:a.id,onSelectCollection:c(),onCreateCollection:c()}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    collections: sampleCollections,
    activeCollectionId: defaultCollection.id,
    onSelectCollection: fn(),
    onCreateCollection: fn(),
    onEditCollection: fn(),
    onDeleteCollection: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    collections: [defaultCollection],
    activeCollectionId: defaultCollection.id,
    onSelectCollection: fn(),
    onCreateCollection: fn()
  }
}`,...d.parameters?.docs?.source}}},f=[`MultipleCollections`,`SingleCollection`]}))();export{u as MultipleCollections,d as SingleCollection,f as __namedExportsOrder,l as default};