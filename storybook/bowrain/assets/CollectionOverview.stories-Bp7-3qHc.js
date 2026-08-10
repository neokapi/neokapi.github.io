import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{n,t as r}from"./CollectionOverview-CTU-USJI.js";function i(e,t,n,r,i){return{locale:e,translated_blocks:n,total_blocks:t,translated_words:n*7,total_words:t*7,percentage:t>0?n/t*100:0,approved_blocks:r,ship_state:i}}function a(e,t,n,r,i,a=12){let o=i[0]?.total_blocks??0;return{collection_id:e,collection_name:t,channel:`${n}/${r}`,coordinates:{product:n,channel:r},item_count:a,block_count:o,word_count:o*7,locales:i}}var o,s,c,l,u,d,f;e((()=>{n(),o=t(),s={title:`Workspace/Collections/CollectionOverview`,component:r,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:1100,padding:24},children:(0,o.jsx)(e,{})})],args:{onOpenCollection:()=>{},onOpenAllItems:()=>{},onReviewCollection:()=>{}}},c={args:{itemTotal:1008,collections:[a(`c1`,`bowrain-app`,`bowrain`,`app`,[i(`nb`,820,610,410,`pending`)]),a(`c2`,`bowrain-docs`,`bowrain`,`docs`,[i(`nb`,1400,1400,1400,`governed`)]),a(`c3`,`bowrain-email`,`bowrain`,`email`,[i(`nb`,90,88,12,`pending`)]),a(`c4`,`neokapi-cli`,`neokapi`,`cli`,[i(`nb`,640,640,90,`ai_shippable`)]),a(`c5`,`neokapi-docs`,`neokapi`,`docs`,[i(`nb`,3100,2010,900)]),a(`c6`,`neokapi-engine`,`neokapi`,`engine`,[i(`nb`,210,40,0)])]}},l={args:{itemTotal:1008,collections:[`app`,`docs`].map((e,t)=>a(`c${t}`,`bowrain-${e}`,`bowrain`,e,Array.from({length:20},(e,t)=>i([`nb`,`de`,`fr`,`es`,`it`,`nl`,`pt`,`pl`,`sv`,`da`][t%10]+(t<10?``:`-x`),800,800-t*35,400-t*18))))}},u={args:{itemTotal:40,collections:[{collection_id:`c1`,collection_name:`Uploaded files`,item_count:12,block_count:300,word_count:2100,locales:[i(`nb`,300,120,60)]},{collection_id:`c2`,collection_name:`Marketing`,item_count:4,block_count:80,word_count:900,locales:[i(`nb`,80,80,80,`governed`)]}]}},d={args:{itemTotal:60,collections:[a(`c1`,`bowrain-app`,`bowrain`,`app`,[i(`nb`,400,300,200)]),a(`c2`,`bowrain-docs`,`bowrain`,`docs`,[i(`nb`,900,900,600)]),a(`c3`,`neokapi-cli`,`neokapi`,`cli`,[i(`nb`,300,150,30)]),{collection_id:`c4`,collection_name:`Legacy import`,coordinates:{market:`de`},item_count:6,block_count:120,word_count:800,locales:[i(`nb`,120,20,0)]},{collection_id:``,collection_name:``,ungrouped:!0,item_count:9,block_count:40,word_count:260,locales:[i(`nb`,40,5,0)]}]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    itemTotal: 1008,
    collections: [collection("c1", "bowrain-app", "bowrain", "app", [locale("nb", 820, 610, 410, "pending")]), collection("c2", "bowrain-docs", "bowrain", "docs", [locale("nb", 1400, 1400, 1400, "governed")]), collection("c3", "bowrain-email", "bowrain", "email", [locale("nb", 90, 88, 12, "pending")]), collection("c4", "neokapi-cli", "neokapi", "cli", [locale("nb", 640, 640, 90, "ai_shippable")]), collection("c5", "neokapi-docs", "neokapi", "docs", [locale("nb", 3100, 2010, 900)]), collection("c6", "neokapi-engine", "neokapi", "engine", [locale("nb", 210, 40, 0)])]
  }
}`,...c.parameters?.docs?.source},description:{story:`The dogfood shape: two products across several surfaces, one target language.
The grouping axis is derived — product covers every collection and cuts them
into the fewest groups, so it wins over channel without being named in code.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    itemTotal: 1008,
    collections: ["app", "docs"].map((channel, ci) => collection(\`c\${ci}\`, \`bowrain-\${channel}\`, "bowrain", channel, Array.from({
      length: 20
    }, (_, i) => locale(["nb", "de", "fr", "es", "it", "nl", "pt", "pl", "sv", "da"][i % 10] + (i < 10 ? "" : "-x"), 800, 800 - i * 35, 400 - i * 18))))
  }
}`,...l.parameters?.docs?.source},description:{story:`Twenty target languages: the rails stack into a ladder that scrolls in-card.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    itemTotal: 40,
    collections: [{
      collection_id: "c1",
      collection_name: "Uploaded files",
      item_count: 12,
      block_count: 300,
      word_count: 2100,
      locales: [locale("nb", 300, 120, 60)]
    }, {
      collection_id: "c2",
      collection_name: "Marketing",
      item_count: 4,
      block_count: 80,
      word_count: 900,
      locales: [locale("nb", 80, 80, 80, "governed")]
    }]
  }
}`,...u.parameters?.docs?.source},description:{story:`Coordinates are optional. With none persisted there is no axis to group by
and no axis control — the collections render as one flat list rather than
under an invented heading.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    itemTotal: 60,
    collections: [collection("c1", "bowrain-app", "bowrain", "app", [locale("nb", 400, 300, 200)]), collection("c2", "bowrain-docs", "bowrain", "docs", [locale("nb", 900, 900, 600)]), collection("c3", "neokapi-cli", "neokapi", "cli", [locale("nb", 300, 150, 30)]), {
      collection_id: "c4",
      collection_name: "Legacy import",
      coordinates: {
        market: "de"
      },
      item_count: 6,
      block_count: 120,
      word_count: 800,
      locales: [locale("nb", 120, 20, 0)]
    }, {
      collection_id: "",
      collection_name: "",
      ungrouped: true,
      item_count: 9,
      block_count: 40,
      word_count: 260,
      locales: [locale("nb", 40, 5, 0)]
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:`A collection missing the grouping axis falls into a remainder group named for
what it lacks, and items belonging to no collection are shown last as
themselves.`,...d.parameters?.docs?.description}}},f=[`OneTargetLanguage`,`ManyTargetLanguages`,`NoCoordinates`,`PartialCoordinatesAndUngrouped`]}))();export{l as ManyTargetLanguages,u as NoCoordinates,c as OneTargetLanguage,d as PartialCoordinatesAndUngrouped,f as __namedExportsOrder,s as default};