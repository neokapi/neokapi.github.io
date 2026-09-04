import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./CollectionRail-Ck2uTWoK.js";function i(e){return{id:`c`,project_id:`p1`,name:`collection`,kind:`connected`,item_label:`file`,is_default:!1,editable:!1,item_count:0,created_at:`2026-01-01T00:00:00Z`,updated_at:`2026-01-01T00:00:00Z`,...e}}function a(e,t,n){return i({id:`${e}-${t}`,name:`${e}-${t}`,coordinates:{product:e,channel:t},item_count:n})}var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Workspace/Collections/CollectionRail`,component:r,parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{className:`w-64 rounded-lg border border-border bg-card p-3`,children:(0,o.jsx)(e,{})})],args:{onSelectCollection:s(),onCreateCollection:s(),onEditCollection:s(),onDeleteCollection:s()}},l={args:{activeCollectionId:`bowrain-app`,collections:[a(`neokapi`,`cli`,42),a(`neokapi`,`engine`,18),a(`neokapi`,`desktop`,88),a(`neokapi`,`docs`,62),a(`bowrain`,`app`,297),a(`bowrain`,`ctrl`,21),a(`bowrain`,`docs`,113),a(`bowrain`,`email`,12),a(`bowrain`,`landing`,18)]}},u={args:{activeCollectionId:`c2`,collections:[i({id:`c1`,name:`Marketing pages`,kind:`uploaded`,editable:!0,item_count:12}),i({id:`c2`,name:`Product strings`,kind:`uploaded`,editable:!0,item_count:340})]}},d={args:{activeCollectionId:`all`,collections:[i({id:`all`,name:`All Items`,is_default:!0,item_count:507}),a(`bowrain`,`app`,297),a(`bowrain`,`docs`,113),i({id:`u1`,name:`Uploads`,kind:`uploaded`,editable:!0,item_count:4})]}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    activeCollectionId: "bowrain-app",
    collections: [surface("neokapi", "cli", 42), surface("neokapi", "engine", 18), surface("neokapi", "desktop", 88), surface("neokapi", "docs", 62), surface("bowrain", "app", 297), surface("bowrain", "ctrl", 21), surface("bowrain", "docs", 113), surface("bowrain", "email", 12), surface("bowrain", "landing", 18)]
  }
}`,...l.parameters?.docs?.source},description:{story:`A project shaped like this repository's own: two products, a surface each for
the app, the docs, the emails and the rest. The rail groups by the coordinate
the recipe declares, so the products read as products rather than as twelve
unrelated names.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    activeCollectionId: "c2",
    collections: [collection({
      id: "c1",
      name: "Marketing pages",
      kind: "uploaded",
      editable: true,
      item_count: 12
    }), collection({
      id: "c2",
      name: "Product strings",
      kind: "uploaded",
      editable: true,
      item_count: 340
    })]
  }
}`,...u.parameters?.docs?.source},description:{story:`A project whose collections declare no point: a flat list, no headers.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    activeCollectionId: "all",
    collections: [collection({
      id: "all",
      name: "All Items",
      is_default: true,
      item_count: 507
    }), surface("bowrain", "app", 297), surface("bowrain", "docs", 113), collection({
      id: "u1",
      name: "Uploads",
      kind: "uploaded",
      editable: true,
      item_count: 4
    })]
  }
}`,...d.parameters?.docs?.source},description:{story:`The default collection sits above the groups: it stands for all of them.`,...d.parameters?.docs?.description}}},f=[`TwoProducts`,`NoCoordinates`,`WithDefaultAndUngrouped`]})))()}p();export{u as NoCoordinates,l as TwoProducts,d as WithDefaultAndUngrouped,f as __namedExportsOrder,c as default};