import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{nt as n,tt as r}from"./iframe-DW0Sp_0I.js";import{n as i,t as a}from"./decorators-CmmCfECI.js";import{i as o,t as s}from"./voiceHubFixtures-6uajQ2s4.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{n(),s(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=[{id:`p-web`,name:`Marketing Website`},{id:`p-app`,name:`Mobile App`}],d=[{dimension:`tone`,score:88,penalty:4,issues:1},{dimension:`style`,score:79,penalty:9,issues:3},{dimension:`vocabulary`,score:72,penalty:14,issues:5},{dimension:`clarity`,score:84,penalty:6,issues:2},{dimension:`compliance`,score:81,penalty:8,issues:2}],f=Array.from({length:14}).map((e,t)=>({id:`s-${t}`,project_id:`p-web`,stream:`main`,block_id:`block-${t}`,profile_id:`vp-1`,locale:t%2==0?`en-US`:`de-DE`,score:70+t*7%28,dimensions:d,findings:[],checked_at:`2026-06-${String(13-t%12).padStart(2,`0`)}T10:00:00Z`})),p=Array.from({length:8}).map((e,t)=>({date:`2026-06-${String(6+t).padStart(2,`0`)}`,avg_score:74+Math.round(Math.sin(t/1.6)*6)+t,count:8+t})),m=[{id:`vp-1`,name:`Core voice`},{id:`vp-2`,name:`Support voice`}],h={projects:[{project_id:`p-web`,project_name:`Marketing Website`,profile_id:`vp-1`,profile_name:`Core voice`,overall:78,dimensions:d,trend:`down`,drift:{drifted:!0,recent_avg:76.4,baseline_avg:83.1,drop:6.7,recent_days:7,recent_count:14,reason:`vocabulary slips on the new landing pages`},scored_blocks:14,last_scored_at:`2026-06-13T10:00:00Z`},{project_id:`p-app`,project_name:`Mobile App`,profile_id:`vp-2`,profile_name:`Support voice`,overall:91,dimensions:d,trend:`up`,scored_blocks:6,last_scored_at:`2026-06-12T09:00:00Z`},{project_id:`p-docs`,project_name:`Docs Portal`,overall:null,trend:``,scored_blocks:0,last_scored_at:null}],total:3,limit:50,offset:0},g={"vp-1":[{term:`log in`,replacement:`sign in`,correction_count:5,dimension:`vocabulary`,status:`pending`},{term:`log in`,replacement:`log on`,correction_count:3,dimension:`vocabulary`,status:`pending`},{term:`utilize`,replacement:`use`,correction_count:7,dimension:`vocabulary`,status:`pending`},{term:`Dear valued customer`,replacement:`Hello`,correction_count:3,dimension:`tone`,status:`pending`}],"vp-2":[{term:`Globex`,replacement:``,correction_count:5,dimension:`vocabulary`,status:`approved`},{term:`synergy`,replacement:`teamwork`,correction_count:4,dimension:`vocabulary`,status:`pending`}]},_={listVoiceCandidates:async(e,t)=>g[t]??[],listProjects:async()=>u,getVoiceScores:async()=>f,getVoiceTrends:async()=>p,getVoiceDrift:async()=>({drifted:!0,recent_avg:76.4,baseline_avg:83.1,drop:6.7,recent_days:7,recent_count:14,reason:`vocabulary slips on the new landing pages`}),getVoiceRollup:async()=>h,listVoiceProfiles:async()=>m},v=a(void 0,{...o,..._}),y={...o,listConcepts:async()=>({concepts:[],total_count:0}),listChangesets:async()=>[],listMarkets:async()=>[],listProjects:async()=>[],listVoiceProfiles:async()=>[],getConceptStatusCounts:async()=>({total:0,by_status:{}}),getConceptLocaleCoverage:async()=>({total:0,locales:[]}),getChangesetCounts:async()=>({total:0,by_status:{}})},b=a(void 0,y),x={title:`Context/Dashboard/VoiceDashboardView`,component:r,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{onOpenExperiment:l(),onViewExperiments:l(),onViewConcepts:l(),onViewVoice:l(),onOpenConcept:l(),onOpenProject:l(),onOpenReview:l(),onViewActivity:l(),keyboard:!1},decorators:[e=>(0,c.jsx)(`div`,{style:{padding:24},children:(0,c.jsx)(e,{})})]},S={decorators:[v],globals:{theme:`light`}},C={decorators:[v],globals:{theme:`dark`}},w={decorators:[a(void 0,{...o,..._,listChangesets:async()=>[],getChangesetCounts:async()=>({total:0,by_status:{}}),listVoiceCandidates:async()=>[]})],globals:{theme:`light`}},T={decorators:[a(void 0,{...o,..._,getVoiceRollup:async()=>({...h,projects:h.projects.map(e=>({...e,project_name:`${e.project_name} for the northern European storefronts and their help centre`,profile_name:e.profile_name&&`${e.profile_name} for customer support and sales`}))}),listVoiceProfiles:async()=>m.map(e=>({...e,name:`${e.name} for every customer-facing channel`}))})],globals:{theme:`light`}},E={decorators:[b],globals:{theme:`light`}},D=[`Default`,`DefaultDark`,`NothingWaits`,`LongContent`,`Empty`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [populated],
  globals: {
    theme: "light"
  }
}`,...S.parameters?.docs?.source},description:{story:`Counts, What's new with change-sets and suggested rules, the projects, then the rest.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  decorators: [populated],
  globals: {
    theme: "dark"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(undefined, {
    ...voiceHubOverrides,
    ...complianceOverrides,
    listChangesets: async () => [],
    getChangesetCounts: async () => ({
      total: 0,
      by_status: {}
    }),
    listVoiceCandidates: async () => []
  })],
  globals: {
    theme: "light"
  }
}`,...w.parameters?.docs?.source},description:{story:`Nothing waits: no change-set in review and no suggested rule.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(undefined, {
    ...voiceHubOverrides,
    ...complianceOverrides,
    getVoiceRollup: async () => ({
      ...rollup,
      projects: rollup.projects.map(p => ({
        ...p,
        project_name: \`\${p.project_name} for the northern European storefronts and their help centre\`,
        profile_name: p.profile_name && \`\${p.profile_name} for customer support and sales\`
      }))
    }) as never,
    listVoiceProfiles: async () => profiles.map(p => ({
      ...p,
      name: \`\${p.name} for every customer-facing channel\`
    })) as never
  })],
  globals: {
    theme: "light"
  }
}`,...T.parameters?.docs?.source},description:{story:`Long project, profile and change-set names truncate on their rows.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  decorators: [empty],
  globals: {
    theme: "light"
  }
}`,...E.parameters?.docs?.source},description:{story:`A workspace with nothing in it yet.`,...E.parameters?.docs?.description}}}})))()}O();export{S as Default,C as DefaultDark,E as Empty,T as LongContent,w as NothingWaits,D as __namedExportsOrder,x as default};