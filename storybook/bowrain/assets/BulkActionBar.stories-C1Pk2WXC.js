import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./BulkActionBar-B8r48lYu.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),r(),o=n(),s={title:`Resource Browser/BulkActionBar`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`Floating bottom bar that appears when items are selected. Shows selection count and bulk action buttons. Delete requires a two-click confirmation.`}}}},c={args:{selectedCount:3,onDelete:()=>{},onDeselectAll:()=>{}}},l={args:{selectedCount:42,onDelete:()=>{},onDeselectAll:()=>{}}},u={args:{selectedCount:12,onDelete:()=>{},onAnnotateEntities:()=>{},onDeselectAll:()=>{}}},d={args:{selectedCount:5,onDelete:()=>{},confirmDelete:!0,onDeselectAll:()=>{}}},f={render:function(){let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(7);return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`p`,{className:`mb-4 text-sm text-muted-foreground`,children:`Click Delete to see the confirmation state. Click Cancel or Deselect all to reset.`}),(0,o.jsx)(i,{selectedCount:n,onDelete:()=>{e?(r(0),t(!1)):t(!0)},confirmDelete:e,onAnnotateEntities:()=>{},onDeselectAll:()=>{r(0),t(!1)}})]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 3,
    onDelete: () => {},
    onDeselectAll: () => {}
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 42,
    onDelete: () => {},
    onDeselectAll: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 12,
    onDelete: () => {},
    onAnnotateEntities: () => {},
    onDeselectAll: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    selectedCount: 5,
    onDelete: () => {},
    confirmDelete: true,
    onDeselectAll: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Interactive demo showing the full delete confirmation flow.`,...f.parameters?.docs?.description}}},p=[`FewSelected`,`ManySelected`,`WithAnnotateEntities`,`ConfirmDelete`,`Interactive`]})))()}m();export{d as ConfirmDelete,c as FewSelected,f as Interactive,l as ManySelected,u as WithAnnotateEntities,p as __namedExportsOrder,s as default};