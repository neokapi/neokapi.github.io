import{i as e}from"./preload-helper-UBj2dHFs.js";import{t}from"./jsx-runtime-BP1p1oUl.js";import{n,t as r}from"./TagChipComponent-CvI6Qwo-.js";import{r as i,t as a}from"./codedText-wKCgIOk1.js";function o({runs:e,text:t,className:n}){return!e||e.length===0?(0,s.jsx)(`span`,{className:n,children:t??``}):(0,s.jsx)(`span`,{className:n,children:i(e).map((e,t)=>e.type===`text`?(0,s.jsx)(`span`,{children:e.value},t):(0,s.jsx)(r,{spanInfo:e.spanInfo,index:t+1},t))})}var s,c=e((()=>{a(),n(),s=t(),o.__docgenInfo={description:`Renders an inline Run sequence as text interleaved with tag chips.
Text runs render as plain text; ph / pcOpen / pcClose / sub runs
render as inline code chips. Falls back to plain \`text\` when no
runs are present.`,methods:[],displayName:`CodedTextDisplay`,props:{runs:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| TextRun
| PlaceholderRun
| PcOpenRun
| PcCloseRun
| SubRun
| PluralRunWrapper
| SelectRunWrapper`,elements:[{name:`TextRun`},{name:`PlaceholderRun`},{name:`PcOpenRun`},{name:`PcCloseRun`},{name:`SubRun`},{name:`PluralRunWrapper`},{name:`SelectRunWrapper`}]}],raw:`Run[]`},description:`Inline content as an RFC 0001 Run sequence.`},text:{required:!1,tsType:{name:`string`},description:"Plain-text fallback used when `runs` is empty/absent."},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class.`}}}}));export{c as n,o as t};