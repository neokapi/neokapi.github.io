import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{n as t,t as n}from"./list-cap-row-D9ofl_92.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={title:`Foundations/ListCapRow`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`Honest render-cap footer for capped listings: 'Showing first N of M — refine filters'. Rendered at the foot of a list whenever it truncates, so a large collection never silently drops rows. Returns null when nothing was cut. Mirrors the shared cap contract used by the bowrain kit.`}}}},i={name:`Capped — thousands of files`,args:{shown:500,total:12345,noun:`files`,hint:`Refine the glob or filters to narrow the list.`}},a={name:`Not capped (renders nothing)`,args:{shown:50,total:50,noun:`files`}},o={name:`Capped — review units`,args:{shown:1e3,total:8420,noun:`units`,hint:`Filter by status or locale to reach the rest.`}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Capped — thousands of files",
  args: {
    shown: 500,
    total: 12_345,
    noun: "files",
    hint: "Refine the glob or filters to narrow the list."
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Not capped (renders nothing)",
  args: {
    shown: 50,
    total: 50,
    noun: "files"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Capped — review units",
  args: {
    shown: 1000,
    total: 8420,
    noun: "units",
    hint: "Filter by status or locale to reach the rest."
  }
}`,...o.parameters?.docs?.source}}},s=[`Capped`,`NotCapped`,`ReviewUnits`]})))()}c();export{i as Capped,a as NotCapped,o as ReviewUnits,s as __namedExportsOrder,r as default};