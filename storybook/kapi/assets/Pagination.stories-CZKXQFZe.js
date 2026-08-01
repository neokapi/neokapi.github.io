import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{n as r,t as i}from"./Pagination-Uq0wQRBJ.js";var a,o,s,c,l,u,d,f;e((()=>{a=t(),r(),o=n(),s={title:`Resource Browser/Pagination`,component:i,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:500,padding:16},children:(0,o.jsx)(e,{})})],parameters:{docs:{description:{component:`Pagination controls with 'Showing X to Y of Z' summary and Previous/Next buttons. Hidden when total pages is 1 or fewer.`}}}},c={args:{page:0,pageSize:50,totalCount:284,onPageChange:()=>{}}},l={args:{page:3,pageSize:50,totalCount:284,onPageChange:()=>{}}},u={args:{page:5,pageSize:50,totalCount:284,onPageChange:()=>{}}},d={render:function(){let[e,t]=(0,a.useState)(0);return(0,o.jsx)(i,{page:e,pageSize:50,totalCount:284,onPageChange:t})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    page: 0,
    pageSize: 50,
    totalCount: 284,
    onPageChange: () => {}
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    page: 3,
    pageSize: 50,
    totalCount: 284,
    onPageChange: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageSize: 50,
    totalCount: 284,
    onPageChange: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function InteractivePagination() {
    const [page, setPage] = useState(0);
    return <Pagination page={page} pageSize={50} totalCount={284} onPageChange={setPage} />;
  }
}`,...d.parameters?.docs?.source},description:{story:`Interactive pagination that tracks the current page.`,...d.parameters?.docs?.description}}},f=[`FirstPage`,`MiddlePage`,`LastPage`,`Interactive`]}))();export{c as FirstPage,d as Interactive,u as LastPage,l as MiddlePage,f as __namedExportsOrder,s as default};