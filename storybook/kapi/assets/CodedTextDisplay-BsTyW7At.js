import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{i as n,n as r}from"./codedText-uj1eBw2_.js";import{r as i,t as a}from"./text-direction-D0dBExH_.js";import{n as o,t as s}from"./TagChipComponent-CTyj_3XV.js";function c({runs:e,text:t,className:r,locale:i}){if(!e||e.length===0)return(0,l.jsx)(a,{locale:i,className:r,children:t??``});let o=n(e);return(0,l.jsx)(a,{locale:i,className:r,children:o.map((e,t)=>e.type===`text`?(0,l.jsx)(`span`,{children:e.value},t):(0,l.jsx)(s,{spanInfo:e.spanInfo,index:t+1},t))})}var l;function u(){return(u=e((()=>{i(),r(),o(),l=t(),c.__docgenInfo={description:`Renders an inline Run sequence as text interleaved with tag chips.
Text runs render as plain text; ph / pcOpen / pcClose / sub runs
render as inline code chips. Falls back to plain \`text\` when no
runs are present.`,methods:[],displayName:`CodedTextDisplay`,props:{runs:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| TextRun
| PlaceholderRun
| PcOpenRun
| PcCloseRun
| SubRun
| PluralRunWrapper
| SelectRunWrapper`,elements:[{name:`TextRun`},{name:`PlaceholderRun`},{name:`PcOpenRun`},{name:`PcCloseRun`},{name:`SubRun`},{name:`PluralRunWrapper`},{name:`SelectRunWrapper`}]}],raw:`Run[]`},description:`Inline content as an RFC 0001 Run sequence.`},text:{required:!1,tsType:{name:`string`},description:"Plain-text fallback used when `runs` is empty/absent."},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class.`},locale:{required:!1,tsType:{name:`string`},description:`The locale this text is written in — every caller should pass it.`}}}})))()}export{u as n,c as t};