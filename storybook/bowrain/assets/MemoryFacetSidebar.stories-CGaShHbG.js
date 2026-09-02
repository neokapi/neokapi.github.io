import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,r as i,t as a}from"./MemoryFacetSidebar-DEzwMy-5.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{o=t(),i(),s=n(),c=new Date().toISOString(),l={locales:[{locale:`en-US`,count:128},{locale:`fr-FR`,count:42},{locale:`de-DE`,count:38},{locale:`ja-JP`,count:25},{locale:`es-ES`,count:15},{locale:`zh-CN`,count:8}],projects:[{project_id:`webapp`,count:80},{project_id:`mobile`,count:35},{project_id:``,count:13}],entity_types:[{type:`entity:person`,count:12},{type:`entity:organization`,count:7},{type:`entity:product`,count:5},{type:`entity:date`,count:3}],import_sessions:[{session_id:`sess-1`,file_key:`acme-glossary.tmx`,tool_name:`tmx-import`,imported_at:new Date(Date.now()-864e5).toISOString(),count:125},{session_id:`sess-2`,file_key:`legacy-memory.tmx`,tool_name:`tmx-import`,imported_at:c,count:48}],has_codes:45,no_codes:83},u={title:`Resource Browser/MemoryFacetSidebar`,component:r,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{width:240,padding:16,borderLeft:`1px solid var(--border)`},children:(0,s.jsx)(e,{})})],parameters:{docs:{description:{component:`Left sidebar showing faceted filters for the content memory browser. Sections: Languages, Project, Entity Types, Import Sessions, Inline Codes.`}}}},d={args:{facets:l,selection:a}},f={args:{facets:l,selection:{locales:[`fr-FR`,`de-DE`],projects:[`webapp`],entityTypes:[],sessionIds:[`sess-1`],codeFilter:`all`}}},p={render:()=>{let[e,t]=(0,o.useState)(a);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(r,{facets:l,selection:e,onSelectionChange:t}),(0,s.jsx)(`pre`,{className:`mt-4 text-[10px] text-muted-foreground`,children:JSON.stringify(e,null,2)})]})}},m={args:{facets:null,selection:a}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    facets: SAMPLE_FACETS,
    selection: EMPTY_FACETS
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    facets: SAMPLE_FACETS,
    selection: {
      locales: ["fr-FR", "de-DE"],
      projects: ["webapp"],
      entityTypes: [],
      sessionIds: ["sess-1"],
      codeFilter: "all"
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selection, setSelection] = useState<FacetSelection>(EMPTY_FACETS);
    return <div>
        <MemoryFacetSidebar facets={SAMPLE_FACETS} selection={selection} onSelectionChange={setSelection} />
        <pre className="mt-4 text-[10px] text-muted-foreground">
          {JSON.stringify(selection, null, 2)}
        </pre>
      </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    facets: null,
    selection: EMPTY_FACETS
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithActiveFilters`,`Interactive`,`Empty`]})))()}g();export{d as Default,m as Empty,p as Interactive,f as WithActiveFilters,h as __namedExportsOrder,u as default};