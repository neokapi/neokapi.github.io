import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{at as n,ot as r}from"./iframe-DMSlMeLv.js";import{n as i,t as a}from"./decorators-Bs4cbiWI.js";import{i as o,n as s,t as c}from"./voiceHubFixtures-CPbDkZtl.js";function l(e,t=1/0){return a(void 0,{...o,listActivities:async(n,r)=>{let i=r?.types??[],a=i.length===0?e:e.filter(e=>i.some(t=>e.type.startsWith(t))),o=r?.cursor?Number(r.cursor):0,s=Math.min(a.length,o+Math.min(t,r?.limit??100));return{activities:a.slice(o,s),next_cursor:s<a.length?String(s):``}}})}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),c(),i(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f=e=>new Date(Date.now()-e*6e4).toISOString(),p=[{type:`concept.term.status_changed`,entity_type:`concept`,entity_id:`c-checkout`,summary:`changed a term's status`},{type:`review.decided`,entity_type:`changeset`,entity_id:`cs-1`,summary:`approved a change`},{type:`observation.added`,entity_type:`concept`,entity_id:`c-rival`,summary:`recorded an observation`},{type:`comment.added`,entity_type:`concept`,entity_id:`c-basket`,summary:`commented on a concept`},{type:`concept.relation.added`,entity_type:`concept`,entity_id:`c-checkout`,summary:`connected two concepts`}],m=[[`alex`,`Alex Romero`],[`sam`,`Sam Okafor`],[`you`,`You`]],h=Array.from({length:160},(e,t)=>{let[n,r]=m[Math.floor(t/6)%m.length],i=p[t%p.length];return{id:`act-many-${t}`,workspace_id:`ws-1`,actor_id:n,actor_name:r,created_at:f(t*7+Math.floor(t/6)*50),...i}}),g=[{id:`act-one-1`,workspace_id:`ws-1`,actor_id:`alex`,actor_name:`Alex Romero`,type:`review.decided`,entity_type:`changeset`,entity_id:`cs-1`,summary:`approved a change`,created_at:f(3)},{id:`act-one-2`,workspace_id:`ws-1`,actor_id:`alex`,actor_name:`Alex Romero`,type:`concept.term.status_changed`,entity_type:`concept`,entity_id:`c-basket`,summary:`changed a term's status`,created_at:f(9)}],_=[{id:`act-long-1`,workspace_id:`ws-1`,actor_id:`u-unknown`,actor_name:`Maria-Luisa Fernández de la Cruz Montenegro`,type:`pilot.started`,entity_type:`changeset`,entity_id:`cs-unnamed`,stream:`release-2026-q4-holiday-campaign`,summary:`started piloting a change on project-website-with-a-very-long-identifier · release-2026-q4-holiday-campaign`,created_at:f(12)},{id:`act-long-2`,workspace_id:`ws-1`,actor_id:`u-unknown`,actor_name:`Maria-Luisa Fernández de la Cruz Montenegro`,type:`comment.added`,entity_type:`concept`,entity_id:`c-unknown`,summary:`commented on a concept`,created_at:f(15)},...s],v={title:`Context/Activity/ActivityView`,component:n,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onOpenConcept:d(),onOpenExperiment:d()},decorators:[e=>(0,u.jsx)(`div`,{style:{height:640,padding:16,display:`flex`,flexDirection:`column`},children:(0,u.jsx)(e,{})})]},y={decorators:[l(s)],globals:{theme:`light`}},b={decorators:[l(s)],globals:{theme:`dark`}},x={args:{defaultSelected:`act-2`},decorators:[l(s)],globals:{theme:`light`}},S={decorators:[l(g)],globals:{theme:`light`}},C={decorators:[l(h,60)],globals:{theme:`light`}},w={decorators:[l(_)],globals:{theme:`light`}},T={decorators:[l([])],globals:{theme:`light`}},E=[`Default`,`DefaultDark`,`DecisionSelected`,`OneSession`,`ManySessions`,`LongContent`,`Empty`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(sampleActivities)],
  globals: {
    theme: "light"
  }
}`,...y.parameters?.docs?.source},description:{story:`The fixture feed: comments, a review decided, a term moved, a pilot and an experiment.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(sampleActivities)],
  globals: {
    theme: "dark"
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSelected: "act-2"
  },
  decorators: [withFeed(sampleActivities)],
  globals: {
    theme: "light"
  }
}`,...x.parameters?.docs?.source},description:{story:`The session that decided a review, selected: the decision sits in its facts.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(one)],
  globals: {
    theme: "light"
  }
}`,...S.parameters?.docs?.source},description:{story:`One session of two operations.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(many, 60)],
  globals: {
    theme: "light"
  }
}`,...C.parameters?.docs?.source},description:{story:`A busy workspace read a page at a time, with Show older activity at the foot of the list.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed(long)],
  globals: {
    theme: "light"
  }
}`,...w.parameters?.docs?.source},description:{story:`A long name, a long sentence and a subject nobody can name.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [withFeed([])],
  globals: {
    theme: "light"
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{x as DecisionSelected,y as Default,b as DefaultDark,T as Empty,w as LongContent,C as ManySessions,S as OneSession,E as __namedExportsOrder,v as default};