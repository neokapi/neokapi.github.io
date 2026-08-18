import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./MemorySearchBar-BbnpEtPm.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{a=t(),r(),o=n(),s={title:`Resource Browser/MemorySearchBar`,component:i,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:600,padding:16},children:(0,o.jsx)(e,{})})],parameters:{docs:{description:{component:`Combined search bar with inline entity annotation. Select text to mark entities; press Enter to trigger fuzzy content-memory lookup.`}}}},c={render:()=>{let[e,t]=(0,a.useState)(``);return(0,o.jsx)(i,{value:e,onChange:t,sourceLocale:`en-US`,targetLocale:`fr-FR`})}},l={render:()=>{let[e,t]=(0,a.useState)(``),[n,r]=(0,a.useState)([{key:`language`,value:`fr-FR`},{key:`project`,value:`webapp`}]);return(0,o.jsx)(i,{value:e,onChange:t,filters:n,onFiltersChange:r,filterFields:[{key:`language`,label:`Target Language`,values:[{value:`fr-FR`,label:`French (fr-FR)`},{value:`de-DE`,label:`German (de-DE)`},{value:`ja-JP`,label:`Japanese (ja-JP)`}]},{key:`project`,label:`Project`,values:[{value:`webapp`,label:`Web App`},{value:`mobile`,label:`Mobile`}]}],sourceLocale:`en-US`,targetLocale:`fr-FR`})},parameters:{docs:{description:{story:`Filter tokens appear as inline badges at the left of the input. Click the chevron to add more filters. Backspace on an empty input removes the last token.`}}}},u={render:()=>{let[e,t]=(0,a.useState)(`John works at Acme Corp`);return(0,o.jsx)(i,{value:e,onChange:t,sourceLocale:`en-US`,targetLocale:`fr-FR`,onLookup:async()=>[{entry:{id:`1`,project_id:``,hint_src_lang:`en-US`,variants:{"en-US":{locale:`en-US`,text:`Bob works at Widget Inc`,runs:[{text:`Bob works at Widget Inc`}]},"fr-FR":{locale:`fr-FR`,text:`Bob travaille chez Widget Inc`,runs:[{text:`Bob travaille chez Widget Inc`}]}},created_at:new Date().toISOString(),updated_at:new Date().toISOString()},score:.85,match_type:`generalized-fuzzy`}]})},parameters:{docs:{description:{story:`Select text to mark entities, then press Enter to trigger lookup. Try selecting 'John' and marking as Person.`}}}},d={render:()=>{let[e,t]=(0,a.useState)(``);return(0,o.jsx)(i,{value:e,onChange:t,sourceLocale:`en-US`,targetLocale:`fr-FR`,placeholder:`Type to search translations...`})}},f={render:()=>{let[e,t]=(0,a.useState)(`Acme Corp hired John`),[n,r]=(0,a.useState)([]);return(0,o.jsxs)(`div`,{children:[(0,o.jsx)(i,{value:e,onChange:t,onEntitiesChange:r,onLookup:async()=>[],sourceLocale:`en-US`,targetLocale:`fr-FR`}),(0,o.jsxs)(`div`,{className:`mt-4 rounded-lg border bg-muted/30 p-3`,children:[(0,o.jsx)(`div`,{className:`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1`,children:`Search filter state (from onEntitiesChange)`}),(0,o.jsx)(`pre`,{className:`text-[11px] text-foreground`,children:JSON.stringify({entity_values:n.map(e=>({value:e.text,type:e.type}))},null,2)})]})]})},parameters:{docs:{description:{story:`Select 'Acme Corp' and mark as Organization, then 'John' as Person. The Filter state panel updates live, showing how the parent component would build a MemorySearchFilter to pass to the backend.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <MemorySearchBar value={value} onChange={setValue} sourceLocale="en-US" targetLocale="fr-FR" />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [filters, setFilters] = useState([{
      key: "language",
      value: "fr-FR"
    }, {
      key: "project",
      value: "webapp"
    }]);
    return <MemorySearchBar value={value} onChange={setValue} filters={filters} onFiltersChange={setFilters} filterFields={[{
      key: "language",
      label: "Target Language",
      values: [{
        value: "fr-FR",
        label: "French (fr-FR)"
      }, {
        value: "de-DE",
        label: "German (de-DE)"
      }, {
        value: "ja-JP",
        label: "Japanese (ja-JP)"
      }]
    }, {
      key: "project",
      label: "Project",
      values: [{
        value: "webapp",
        label: "Web App"
      }, {
        value: "mobile",
        label: "Mobile"
      }]
    }]} sourceLocale="en-US" targetLocale="fr-FR" />;
  },
  parameters: {
    docs: {
      description: {
        story: "Filter tokens appear as inline badges at the left of the input. Click the chevron to add more filters. Backspace on an empty input removes the last token."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Search bar with filter tokens for language and project.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("John works at Acme Corp");
    return <MemorySearchBar value={value} onChange={setValue} sourceLocale="en-US" targetLocale="fr-FR" onLookup={async () => [{
      entry: {
        id: "1",
        project_id: "",
        hint_src_lang: "en-US",
        variants: {
          "en-US": {
            locale: "en-US",
            text: "Bob works at Widget Inc",
            runs: [{
              text: "Bob works at Widget Inc"
            }]
          },
          "fr-FR": {
            locale: "fr-FR",
            text: "Bob travaille chez Widget Inc",
            runs: [{
              text: "Bob travaille chez Widget Inc"
            }]
          }
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      score: 0.85,
      match_type: "generalized-fuzzy"
    }]} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Select text to mark entities, then press Enter to trigger lookup. Try selecting 'John' and marking as Person."
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    return <MemorySearchBar value={value} onChange={setValue} sourceLocale="en-US" targetLocale="fr-FR" placeholder="Type to search translations..." />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("Acme Corp hired John");
    const [entities, setEntities] = useState<Array<{
      text: string;
      type: string;
      start: number;
      end: number;
    }>>([]);
    return <div>
        <MemorySearchBar value={value} onChange={setValue} onEntitiesChange={setEntities} onLookup={async () => []} sourceLocale="en-US" targetLocale="fr-FR" />
        <div className="mt-4 rounded-lg border bg-muted/30 p-3">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Search filter state (from onEntitiesChange)
          </div>
          <pre className="text-[11px] text-foreground">
            {JSON.stringify({
            entity_values: entities.map(e => ({
              value: e.text,
              type: e.type
            }))
          }, null, 2)}
          </pre>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: "Select 'Acme Corp' and mark as Organization, then 'John' as Person. The Filter state panel updates live, showing how the parent component would build a MemorySearchFilter to pass to the backend."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Demonstrates the entity-value filter flow. When the user marks text in
the search bar as an entity, the parent component receives the marked
entities via onEntitiesChange and converts them to search filters.
This gives precise entity-aware browser filtering — "find all entries
where Acme Corp is tagged as an Organization" — distinct from plain
text search.

Select text in the input and mark it with an entity type; the Filter
state panel below shows how the parent would build a search filter.`,...f.parameters?.docs?.description}}},p=[`Default`,`WithFilterTokens`,`WithLookup`,`CustomPlaceholder`,`EntityValueFilter`]})))()}m();export{d as CustomPlaceholder,c as Default,f as EntityValueFilter,l as WithFilterTokens,u as WithLookup,p as __namedExportsOrder,s as default};