import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{n,t as r}from"./TraceTimeline-BvSaHD06.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Flow Editor/TraceTimeline`,component:r,tags:[`autodocs`],decorators:[e=>(0,i.jsx)(`div`,{style:{width:600},children:(0,i.jsx)(e,{})})]},o=[{ts:0,type:`enter`,node_id:`tool-0`,part_id:`p1`},{ts:500,type:`exit`,node_id:`tool-0`,part_id:`p1`},{ts:600,type:`enter`,node_id:`tool-0`,part_id:`p2`},{ts:900,type:`exit`,node_id:`tool-0`,part_id:`p2`},{ts:550,type:`enter`,node_id:`tool-1`,part_id:`p1`},{ts:1200,type:`exit`,node_id:`tool-1`,part_id:`p1`},{ts:950,type:`enter`,node_id:`tool-1`,part_id:`p2`},{ts:1800,type:`exit`,node_id:`tool-1`,part_id:`p2`},{ts:1250,type:`enter`,node_id:`tool-2`,part_id:`p1`},{ts:1400,type:`exit`,node_id:`tool-2`,part_id:`p1`},{ts:1850,type:`enter`,node_id:`tool-2`,part_id:`p2`},{ts:2e3,type:`exit`,node_id:`tool-2`,part_id:`p2`}],s=new Map([[`tool-0`,`translate`],[`tool-1`,`qa`],[`tool-2`,`word-count`]]),c={args:{events:o,nodeNames:s,totalDurationUs:2e3}},l={args:{events:[...o.slice(0,4),{ts:550,type:`enter`,node_id:`tool-1`,part_id:`p1`},{ts:800,type:`error`,node_id:`tool-1`,part_id:`p1`,meta:{error:`check failed: missing translation`}}],nodeNames:s,totalDurationUs:800}},u={args:{events:[{ts:0,type:`enter`,node_id:`tool-0`,part_id:`p1`},{ts:300,type:`exit`,node_id:`tool-0`,part_id:`p1`}],nodeNames:new Map([[`tool-0`,`pseudo-translate`]]),totalDurationUs:300}},d=[`Completed`,`WithError`,`SingleNode`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    events: completedEvents,
    nodeNames,
    totalDurationUs: 2000
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    events: [...completedEvents.slice(0, 4), {
      ts: 550,
      type: "enter",
      node_id: "tool-1",
      part_id: "p1"
    }, {
      ts: 800,
      type: "error",
      node_id: "tool-1",
      part_id: "p1",
      meta: {
        error: "check failed: missing translation"
      }
    }],
    nodeNames,
    totalDurationUs: 800
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      ts: 0,
      type: "enter",
      node_id: "tool-0",
      part_id: "p1"
    }, {
      ts: 300,
      type: "exit",
      node_id: "tool-0",
      part_id: "p1"
    }],
    nodeNames: new Map([["tool-0", "pseudo-translate"]]),
    totalDurationUs: 300
  }
}`,...u.parameters?.docs?.source}}}})))()}f();export{c as Completed,u as SingleNode,l as WithError,d as __namedExportsOrder,a as default};