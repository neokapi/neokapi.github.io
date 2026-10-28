import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,t as r}from"./VoicePage-CcD-doGc.js";import{r as i,t as a}from"./voiceFixture-DQ74Zvbm.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),o=t(),s={title:`Pages/Voice`,component:r,parameters:{layout:`fullscreen`},args:{tabID:`t1`},decorators:[e=>(0,o.jsx)(`div`,{style:{height:720},children:(0,o.jsx)(e,{})})]},c={args:{result:i}},l={args:{result:{at:i.at,points:[i.points[0]]}}},u={args:{result:{at:i.at,points:[{label:`project default`,point:{default:!0},collections:[`Docs`],notes:[`no voice profile binds at this point`]}]}}},d=[`ManyPoints`,`SinglePoint`,`NothingBound`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    result: voiceFixture
  }
}`,...c.parameters?.docs?.source},description:{story:`Several points: one governs, one fell through a closed window, one binds nothing.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    result: {
      at: voiceFixture.at,
      points: [voiceFixture.points[0]]
    } satisfies ProjectVoiceResult
  }
}`,...l.parameters?.docs?.source},description:{story:`The common shape: one point, one profile, and nothing missing.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    result: {
      at: voiceFixture.at,
      points: [{
        label: "project default",
        point: {
          default: true
        },
        collections: ["Docs"],
        notes: ["no voice profile binds at this point"]
      }]
    } satisfies ProjectVoiceResult
  }
}`,...u.parameters?.docs?.source},description:{story:`A project that has declared no voice at all.`,...u.parameters?.docs?.description}}}})))()}f();export{c as ManyPoints,u as NothingBound,l as SinglePoint,d as __namedExportsOrder,s as default};