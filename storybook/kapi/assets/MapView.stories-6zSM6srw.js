import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{$ as r,B as i,I as a,L as o,Ot as s,R as c,_ as l,at as u,dt as d,ft as f,kt as p,n as m,p as h,t as g}from"./MapView-DxTmioyw.js";import{n as _,t as v}from"./fixtures-Css1QHZ3.js";function y({data:e,initialFocus:t,initialMode:n,selected:s}){let c=(0,b.useMemo)(()=>f(e,{measure:`records`}),[e]),[l,u]=(0,b.useState)(()=>{let e={...h(c),from:c.firstDay,view:`map`};if(!s)return e;let t=c.axisById.get(`market`)?.values.map(e=>e.id)??[];return{...e,filters:{market:p(c.places,s,t)}}}),[d,m]=(0,b.useState)(null),_=(0,b.useMemo)(()=>o(c,l),[c,l]),v=(0,b.useMemo)(()=>a(c,l,_),[c,l,_]),y=(0,b.useMemo)(()=>d?i(c,v,d,_):null,[c,v,d,_]);return(0,x.jsxs)(`div`,{className:`context-atlas`,style:{padding:24},children:[(0,x.jsx)(`style`,{children:r}),(0,x.jsx)(g,{atlas:c,query:l,ctx:_,foreground:v,preview:y,onPreview:m,onQuery:u,initialFocus:t,initialMode:n})]})}var b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{b=t(),u(),m(),c(),l(),s(),d(),v(),x=n(),S={title:`Context atlas/Map`,component:y,parameters:{layout:`fullscreen`},args:{data:_()}},C={args:{initialFocus:`world`}},w={args:{initialFocus:`no`}},T={args:{data:_({misplaced:!0}),initialFocus:`no-03`}},E={args:{initialFocus:`no`,selected:`greater-oslo`}},D={args:{initialMode:`grid`}},O=[`World`,`Norway`,`OsloCounty`,`GreaterOsloSelected`,`Grid`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    initialFocus: "world"
  }
}`,...C.parameters?.docs?.source},description:{story:`The world by country. Records at the Nordics and Europe hatch the countries they cover.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    initialFocus: "no"
  }
}`,...w.parameters?.docs?.source},description:{story:`Norway by county. Jan Mayen, which has no built-in shape, is listed beside the map.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: makeAtlasFixture({
      misplaced: true
    }),
    initialFocus: "no-03"
  }
}`,...T.parameters?.docs?.source},description:{story:`Oslo county with the project's own places, one of them centred outside it.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    initialFocus: "no",
    selected: "greater-oslo"
  }
}`,...E.parameters?.docs?.source},description:{story:`Norway with Greater Oslo selected: the records that hold there, the rest set aside.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    initialMode: "grid"
  }
}`,...D.parameters?.docs?.source},description:{story:`One equal tile per country.`,...D.parameters?.docs?.description}}}})))()}k();export{E as GreaterOsloSelected,D as Grid,w as Norway,T as OsloCounty,C as World,O as __namedExportsOrder,S as default};