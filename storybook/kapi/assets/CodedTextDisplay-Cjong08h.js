import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{r as n,t as r}from"./text-direction-COs9iXap.js";import{n as i,t as a}from"./TagChipComponent-CaCJtpky.js";import{r as o,t as s}from"./codedText-CBs7Vv0-.js";function c({runs:e,text:t,className:n,locale:i}){if(!e||e.length===0)return(0,l.jsx)(r,{locale:i,className:n,children:t??``});let s=o(e);return(0,l.jsx)(r,{locale:i,className:n,children:s.map((e,t)=>e.type===`text`?(0,l.jsx)(`span`,{children:e.value},t):(0,l.jsx)(a,{spanInfo:e.spanInfo,index:t+1},t))})}var l;function u(){return(u=e((()=>{n(),s(),i(),l=t(),c.__docgenInfo={description:`Renders an inline Run sequence as text interleaved with tag chips.
Text runs render as plain text; ph / pcOpen / pcClose / sub runs
render as inline code chips. Falls back to plain \`text\` when no
runs are present.`,methods:[],displayName:`CodedTextDisplay`,props:{runs:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| TextRun
| PlaceholderRun
| PcOpenRun
| PcCloseRun
| SubRun
| PluralRunWrapper
| SelectRunWrapper`,elements:[{name:`TextRun`},{name:`PlaceholderRun`},{name:`PcOpenRun`},{name:`PcCloseRun`},{name:`SubRun`},{name:`PluralRunWrapper`},{name:`SelectRunWrapper`}]}],raw:`Run[]`},description:`Inline content as an RFC 0001 Run sequence.`},text:{required:!1,tsType:{name:`string`},description:"Plain-text fallback used when `runs` is empty/absent."},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class.`},locale:{required:!1,tsType:{name:`string`},description:`The locale this text is written in — every caller should pass it.`}}}})))()}export{u as n,c as t};