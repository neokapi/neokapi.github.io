import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{a as n,t as r}from"./ctrl-fixtures-Bg8TNXiD.js";import{n as i,t as a}from"./UserTable-ByempSfG.js";var o,s,c,l,u,d,f,p;e((()=>{i(),r(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Ctrl/UserTable`,component:a,parameters:{layout:`padded`},args:{onRowClick:s()},decorators:[e=>(0,o.jsx)(`div`,{className:`w-full max-w-4xl`,children:(0,o.jsx)(e,{})})]},l={args:{users:n,loading:!1,selectedUserId:null}},u={args:{users:n,loading:!1,selectedUserId:`usr_2`}},d={args:{users:[],loading:!0,selectedUserId:null}},f={args:{users:[],loading:!1,selectedUserId:null}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    users: sampleUsers,
    loading: false,
    selectedUserId: null
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    users: sampleUsers,
    loading: false,
    selectedUserId: "usr_2"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    users: [],
    loading: true,
    selectedUserId: null
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    users: [],
    loading: false,
    selectedUserId: null
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`RowSelected`,`Loading`,`Empty`]}))();export{l as Default,f as Empty,d as Loading,u as RowSelected,p as __namedExportsOrder,c as default};