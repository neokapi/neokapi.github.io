import{n as e}from"./rolldown-runtime-DAXXjFlN.js";import{t}from"./react-DEAHbL4P.js";import{t as n}from"./jsx-runtime-CFwixLRt.js";import{r,t as i}from"./runtime-D9E4JuzJ.js";import{n as a,t as o}from"./BulkActionBar-BFJpkK0K.js";var s,c,l,u,d,f,p,m,h;e((()=>{r(),s=t(),a(),c=n(),l={title:`Resource Browser/BulkActionBar`,component:o,tags:[`autodocs`],parameters:{docs:{description:{component:`Floating bottom bar that appears when items are selected. Shows selection count and bulk action buttons. Delete requires a two-click confirmation.`}}}},u={args:{selectedCount:3,onDelete:()=>{},onDeselectAll:()=>{}}},d={args:{selectedCount:42,onDelete:()=>{},onDeselectAll:()=>{}}},f={args:{selectedCount:12,onDelete:()=>{},onAnnotateEntities:()=>{},onDeselectAll:()=>{}}},p={args:{selectedCount:5,onDelete:()=>{},confirmDelete:!0,onDeselectAll:()=>{}}},m={render:function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(7);return(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`p`,{className:`mb-4 text-sm text-muted-foreground`,children:i(`9rXhARHSq1W`,`Click Delete to see the confirmation state. Click Cancel or Deselect all to reset.`)}),(0,c.jsx)(o,{selectedCount:n,onDelete:()=>{e?(r(0),t(!1)):t(!0)},confirmDelete:e,onAnnotateEntities:()=>{},onDeselectAll:()=>{r(0),t(!1)}})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 3,
    onDelete: () => {},
    onDeselectAll: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 42,
    onDelete: () => {},
    onDeselectAll: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 12,
    onDelete: () => {},
    onAnnotateEntities: () => {},
    onDeselectAll: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 5,
    onDelete: () => {},
    confirmDelete: true,
    onDeselectAll: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function InteractiveBulkAction() {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [count, setCount] = useState(7);
    return <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Click Delete to see the confirmation state. Click Cancel or Deselect all to reset.
        </p>
        <BulkActionBar selectedCount={count} onDelete={() => {
        if (confirmDelete) {
          setCount(0);
          setConfirmDelete(false);
        } else {
          setConfirmDelete(true);
        }
      }} confirmDelete={confirmDelete} onAnnotateEntities={() => {}} onDeselectAll={() => {
        setCount(0);
        setConfirmDelete(false);
      }} />
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Interactive demo showing the full delete confirmation flow.`,...m.parameters?.docs?.description}}},h=[`FewSelected`,`ManySelected`,`WithAnnotateEntities`,`ConfirmDelete`,`Interactive`]}))();export{p as ConfirmDelete,u as FewSelected,m as Interactive,d as ManySelected,f as WithAnnotateEntities,h as __namedExportsOrder,l as default};