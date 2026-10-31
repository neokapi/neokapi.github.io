import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,t as r}from"./ConceptsSection-CMjUMDBK.js";import{n as i,t as a}from"./decorators-C96fbSJ0.js";import{i as o,r as s,t as c}from"./voiceHubFixtures-3wjWFwnE.js";function l(e){return{listConcepts:async(t,n)=>{let r=e;if(n?.q){let e=n.q.toLowerCase();r=r.filter(t=>t.terms.some(t=>t.text.toLowerCase().includes(e)))}n?.status&&(r=r.filter(e=>e.terms.some(e=>e.status===n.status)));let i=n?.offset??0,a=n?.limit??r.length;return{concepts:r.slice(i,i+a),total_count:r.length}},getConcept:async(t,n)=>e.find(e=>e.id===n)??e[0],getConceptStatusCounts:async()=>({total:e.length,by_status:{}})}}function u(e,t={}){return a(void 0,{...o,...l(e),...t})}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{n(),c(),i(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p=`2026-09-23T14:00:00Z`,m=`2026-10-13T09:30:00Z`,h={id:`c-cart`,domain:`Commerce`,definition:`The list of items a shopper has chosen and not yet paid for.`,terms:[{text:`shopping cart`,locale:`en-US`,status:`preferred`,forms:[`shopping carts`]},{text:`basket`,locale:`en-US`,status:`deprecated`,note:`UK usage; the store copy says cart.`},{text:`trolley`,locale:`en-US`,status:`forbidden`},{text:`Warenkorb`,locale:`de-DE`,status:`preferred`,gender:`masculine`},{text:`panier`,locale:`fr-FR`,status:`preferred`},{text:`handlekurv`,locale:`nb-NO`,status:`approved`}],properties:{coordinates:`brand=kapimart,channel=store`,profile:`kapimart-store`},created_at:p,updated_at:m},g=[h,{id:`c-payment`,domain:`Commerce`,definition:`Paying for an order at the end of checkout.`,terms:[{text:`payment`,locale:`en-US`,status:`proposed`},{text:`Zahlung`,locale:`de-DE`,status:`proposed`}],created_at:m,updated_at:m},...s],_={id:`c-long`,domain:`Regulatory and compliance communication for financial services`,definition:`The written notice a customer receives before a change to the terms of an account takes effect, including the date the change applies, what it changes, and how the customer can close the account without a fee if they do not accept it.`,terms:[{text:`advance notice of a change to the account terms and conditions`,locale:`en-US`,status:`preferred`,note:`Always the full phrase in the first mention; the short form is admitted after it.`},{text:`change notice`,locale:`en-US`,status:`admitted`},{text:`heads-up`,locale:`en-US`,status:`forbidden`,note:`Too casual for a legal notice.`},...[`de-DE`,`fr-FR`,`es-ES`,`it-IT`,`nl-NL`,`sv-SE`,`da-DK`,`nb-NO`,`fi-FI`,`pl-PL`,`pt-BR`,`ja-JP`].map((e,t)=>({text:`Vorankündigung ${t+1} einer Änderung der Kontobedingungen`,locale:e,status:t%3==0?`proposed`:`approved`}))],properties:{coordinates:`brand=northbank,channel=legal,product=current-account`},created_at:p,updated_at:m},v=Array.from({length:240},(e,t)=>{let n=String(t+1).padStart(3,`0`);return{id:`c-${n}`,domain:`Catalogue`,definition:`Catalogue concept ${n}.`,terms:[{text:`catalogue term ${n}`,locale:`en-US`,status:t%7==0?`proposed`:`preferred`},{text:`Katalogbegriff ${n}`,locale:`de-DE`,status:`approved`},...t%2==0?[{text:`terme ${n}`,locale:`fr-FR`,status:`approved`}]:[]],created_at:p,updated_at:m}}),y={title:`Context/Concepts/ConceptsSection`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onSelect:f(),onOpenChangeSet:f(),onOpenExperiments:f()},decorators:[e=>(0,d.jsx)(`div`,{style:{height:680,padding:16,display:`flex`,flexDirection:`column`},children:(0,d.jsx)(e,{})})]},b={decorators:[u(g)],globals:{theme:`light`}},x={args:{defaultSelected:`c-cart`},decorators:[u(g)],globals:{theme:`light`}},S={args:{defaultSelected:`c-cart`},decorators:[u(g)],globals:{theme:`dark`}},C={args:{defaultSelected:`c-payment`},decorators:[u(g)],globals:{theme:`light`}},w={args:{defaultSelected:`c-cart`},decorators:[u([h],{listChangesets:async()=>[]})],globals:{theme:`light`}},T={args:{defaultSelected:`c-001`},decorators:[u(v,{listChangesets:async()=>[]})],globals:{theme:`light`}},E={args:{defaultSelected:`c-long`},decorators:[u([_,...g],{listChangesets:async()=>[]})],globals:{theme:`light`}},D={args:{defaultSelected:`c-long`},decorators:[u([_,...g],{listChangesets:async()=>[]})],globals:{theme:`dark`}},O={decorators:[u([],{listChangesets:async()=>[]})],globals:{theme:`light`}},k={decorators:[u([])],globals:{theme:`light`}},A=[`List`,`ConceptSelected`,`ConceptSelectedDark`,`ProposedConcept`,`OneConcept`,`ManyConcepts`,`LongContent`,`LongContentDark`,`Empty`,`EverythingWaiting`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [withConcepts(storyConcepts)],
  globals: {
    theme: "light"
  }
}`,...b.parameters?.docs?.source},description:{story:`The list with nothing selected, and a change-set waiting above it.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-cart"
  },
  decorators: [withConcepts(storyConcepts)],
  globals: {
    theme: "light"
  }
}`,...x.parameters?.docs?.source},description:{story:`One concept selected: its discouraged forms, languages, provenance and record.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-cart"
  },
  decorators: [withConcepts(storyConcepts)],
  globals: {
    theme: "dark"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-payment"
  },
  decorators: [withConcepts(storyConcepts)],
  globals: {
    theme: "light"
  }
}`,...C.parameters?.docs?.source},description:{story:`A proposed concept, which offers Approve in its toolbar.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-cart"
  },
  decorators: [withConcepts([shoppingCart], {
    listChangesets: async () => []
  })],
  globals: {
    theme: "light"
  }
}`,...w.parameters?.docs?.source},description:{story:`A workspace holding a single concept.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-001"
  },
  decorators: [withConcepts(many, {
    listChangesets: async () => []
  })],
  globals: {
    theme: "light"
  }
}`,...T.parameters?.docs?.source},description:{story:`Hundreds of concepts, read a page at a time with Show more at the foot of the list.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-long"
  },
  decorators: [withConcepts([longConcept, ...storyConcepts], {
    listChangesets: async () => []
  })],
  globals: {
    theme: "light"
  }
}`,...E.parameters?.docs?.source},description:{story:`A long term, a long definition and a dozen languages.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "c-long"
  },
  decorators: [withConcepts([longConcept, ...storyConcepts], {
    listChangesets: async () => []
  })],
  globals: {
    theme: "dark"
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  decorators: [withConcepts([], {
    listChangesets: async () => []
  })],
  globals: {
    theme: "light"
  }
}`,...O.parameters?.docs?.source},description:{story:`A workspace with no concepts and nothing waiting.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  decorators: [withConcepts([])],
  globals: {
    theme: "light"
  }
}`,...k.parameters?.docs?.source},description:{story:`Every concept still waiting on a review: the list is empty and the strip names why.`,...k.parameters?.docs?.description}}}})))()}j();export{x as ConceptSelected,S as ConceptSelectedDark,O as Empty,k as EverythingWaiting,b as List,E as LongContent,D as LongContentDark,T as ManyConcepts,w as OneConcept,C as ProposedConcept,A as __namedExportsOrder,y as default};