import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./FileProgressTable-Cp_4WcBS.js";import{g as i,o as a}from"./fixtures-LWDNhg3K.js";var o,s,c,l,u;function d(){return(d=e((()=>{n(),a(),o=t(),s={title:`Workspace/Collections/FileProgressTable`,component:r,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:800,padding:24},children:(0,o.jsx)(e,{})})]},c={args:{itemStats:i,locales:[`fr-FR`,`de-DE`]}},l={args:{itemStats:Array.from({length:60},(e,t)=>({item_name:`content/pages/section-${String(t+1).padStart(2,`0`)}.json`,item_id:`item-${t+1}`,format:t%3==0?`xliff`:`json`,collection_id:`c1`,block_count:40+t*13%200,word_count:400+t*137%4e3,locales:[{locale:`fr-FR`,translated_blocks:t*7%40,total_blocks:40,translated_words:t*7%40*10,total_words:400,percentage:t*7%41*2.5},{locale:`de-DE`,translated_blocks:t*11%40,total_blocks:40,translated_words:t*11%40*10,total_words:400,percentage:t*11%41*2.5}]})),locales:[`fr-FR`,`de-DE`]}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    itemStats: sampleItemStats,
    locales: ["fr-FR", "de-DE"]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    itemStats: Array.from({
      length: 60
    }, (_, i) => ({
      item_name: \`content/pages/section-\${String(i + 1).padStart(2, "0")}.json\`,
      item_id: \`item-\${i + 1}\`,
      format: i % 3 === 0 ? "xliff" : "json",
      collection_id: "c1",
      block_count: 40 + i * 13 % 200,
      word_count: 400 + i * 137 % 4000,
      locales: [{
        locale: "fr-FR",
        translated_blocks: i * 7 % 40,
        total_blocks: 40,
        translated_words: i * 7 % 40 * 10,
        total_words: 400,
        percentage: i * 7 % 41 * 2.5
      }, {
        locale: "de-DE",
        translated_blocks: i * 11 % 40,
        total_blocks: 40,
        translated_words: i * 11 % 40 * 10,
        total_words: 400,
        percentage: i * 11 % 41 * 2.5
      }]
    })),
    locales: ["fr-FR", "de-DE"]
  }
}`,...l.parameters?.docs?.source},description:{story:`Many files: the table scrolls inside the card with a sticky header row.
Scroll the list to see the header stay pinned.`,...l.parameters?.docs?.description}}},u=[`Default`,`ManyFiles`]})))()}d();export{c as Default,l as ManyFiles,u as __namedExportsOrder,s as default};