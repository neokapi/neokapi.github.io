import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{it as n,rt as r}from"./iframe-CgCc3s6n.js";import{n as i,t as a}from"./decorators-B90NXKuI.js";import{i as o,t as s}from"./voiceHubFixtures-CKgowbrf.js";function c(e){return e.flatMap(([e,t,n],r)=>Object.entries(t).map(([t,i])=>({id:`e-${r+1}`,source:e,target:i,source_language:`en-US`,target_language:t,project_id:n,stream:r===3?`release-2026-q4`:void 0,updated_at:f})))}function l(e,t={}){return a(void 0,{...o,listProjects:async()=>t.projects??d,getMemoryCount:async()=>new Set(e.map(e=>e.id)).size,getMemoryEntries:async(t,n,r,i,a,o)=>{let s=n.toLowerCase(),c=e.filter(e=>(!i||e.target_language===i)&&(!s||e.source.toLowerCase().includes(s)||e.target.toLowerCase().includes(s)));return{entries:c.slice(a,a+o),total_count:c.length}}})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),s(),i(),u=t(),d=[{id:`p-web`,name:`Marketing Website`,default_source_language:`en-US`,target_languages:[`de-DE`,`fr-FR`,`nb-NO`],created_at:`2026-06-01T00:00:00Z`,modified_at:`2026-06-01T00:00:00Z`},{id:`p-app`,name:`Mobile App`,default_source_language:`en-US`,target_languages:[`de-DE`],created_at:`2026-06-01T00:00:00Z`,modified_at:`2026-06-01T00:00:00Z`}],f=`2026-10-13T09:30:00Z`,p=[[`Proceed to checkout`,{"de-DE":`Weiter zur Kasse`,"fr-FR":`Passer à la caisse`,"nb-NO":`Gå til kassen`},`p-web`],[`Your cart is empty`,{"de-DE":`Ihr Warenkorb ist leer`,"fr-FR":`Votre panier est vide`,"nb-NO":`Handlekurven er tom`}],[`Sign in to see your orders`,{"de-DE":`Melden Sie sich an, um Ihre Bestellungen zu sehen`},`p-app`],[`Free returns within 30 days`,{"de-DE":`Kostenlose Rücksendung innerhalb von 30 Tagen`,"fr-FR":`Retours gratuits sous 30 jours`}]],m=c(p),h=Array.from({length:320},(e,t)=>({id:`e-many-${t}`,source:`Catalogue line ${t+1}: the product description a shopper reads first`,target:`Katalogzeile ${t+1}: die Produktbeschreibung, die ein Käufer zuerst liest`,source_language:`en-US`,target_language:`de-DE`,project_id:t%3==0?`p-web`:void 0,updated_at:f})),g=[{id:`e-long`,source:`Before a change to the terms of your account takes effect, we write to you at least sixty days ahead with the date it applies, what changes, and how you can close the account without a fee if you do not accept the new terms.`,target:`Bevor eine Änderung der Bedingungen Ihres Kontos wirksam wird, schreiben wir Ihnen mindestens sechzig Tage im Voraus mit dem Datum, ab dem sie gilt, was sich ändert und wie Sie das Konto ohne Gebühr schließen können, wenn Sie die neuen Bedingungen nicht annehmen.`,source_language:`en-US`,target_language:`de-DE`,project_id:`p-web`,stream:`legal-review-2026-with-an-unusually-long-stream-name`,updated_at:f},...m],_={title:`Context/Memory/MemorySection`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},decorators:[e=>(0,u.jsx)(`div`,{style:{height:640,padding:16,display:`flex`,flexDirection:`column`},children:(0,u.jsx)(e,{})})]},v={decorators:[l(m)],globals:{theme:`light`}},y={args:{defaultSelected:`e-1::de-DE`},decorators:[l(m)],globals:{theme:`light`}},b={args:{defaultSelected:`e-1::de-DE`},decorators:[l(m)],globals:{theme:`dark`}},x={args:{defaultMarked:[`e-1`,`e-2`]},decorators:[l(m)],globals:{theme:`light`}},S={args:{defaultSelected:`e-1::de-DE`},decorators:[l(m.filter(e=>e.id===`e-1`&&e.target_language===`de-DE`),{projects:[d[1]]})],globals:{theme:`light`}},C={decorators:[l(h)],globals:{theme:`light`}},w={args:{defaultSelected:`e-long::de-DE`},decorators:[l(g)],globals:{theme:`light`}},T={decorators:[l([])],globals:{theme:`light`}},E=[`Pairs`,`PairSelected`,`PairSelectedDark`,`Marked`,`OneEntry`,`ManyEntries`,`LongContent`,`Empty`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [withMemory(sample)],
  globals: {
    theme: "light"
  }
}`,...v.parameters?.docs?.source},description:{story:`The pairs into German, the language most of the workspace translates into.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "e-1::de-DE"
  },
  decorators: [withMemory(sample)],
  globals: {
    theme: "light"
  }
}`,...y.parameters?.docs?.source},description:{story:`One pair selected: both sides in full, and the project it is held for.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "e-1::de-DE"
  },
  decorators: [withMemory(sample)],
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMarked: ["e-1", "e-2"]
  },
  decorators: [withMemory(sample)],
  globals: {
    theme: "light"
  }
}`,...x.parameters?.docs?.source},description:{story:`Two entries marked: the pane holds what can be done to both.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "e-1::de-DE"
  },
  decorators: [withMemory(sample.filter(e => e.id === "e-1" && e.target_language === "de-DE"), {
    projects: [projects[1]]
  })],
  globals: {
    theme: "light"
  }
}`,...S.parameters?.docs?.source},description:{story:`A workspace that translates into one language, so the picker is not offered.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [withMemory(many)],
  globals: {
    theme: "light"
  }
}`,...C.parameters?.docs?.source},description:{story:`Hundreds of pairs, read a page at a time with Show more at the foot of the list.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "e-long::de-DE"
  },
  decorators: [withMemory(long)],
  globals: {
    theme: "light"
  }
}`,...w.parameters?.docs?.source},description:{story:`A long sentence on both sides and a long stream name.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [withMemory([])],
  globals: {
    theme: "light"
  }
}`,...T.parameters?.docs?.source},description:{story:`Nothing approved into the language yet: the empty state offers Add entry.`,...T.parameters?.docs?.description}}}})))()}D();export{T as Empty,w as LongContent,C as ManyEntries,x as Marked,S as OneEntry,y as PairSelected,b as PairSelectedDark,v as Pairs,E as __namedExportsOrder,_ as default};