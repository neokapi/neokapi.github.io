import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{n as r,t as i}from"./schema-form-Cnv4pynU.js";function a({schema:e,initialValues:t={},host:n}){let[i,a]=(0,o.useState)(t);return(0,s.jsxs)(`div`,{className:`grid grid-cols-[1fr_1fr] gap-6 max-w-[1100px]`,children:[(0,s.jsx)(`div`,{children:(0,s.jsx)(r,{schema:e,values:i,onChange:a,host:n})}),(0,s.jsxs)(`div`,{className:`min-w-0`,children:[(0,s.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:`Values`}),(0,s.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[280px]`,children:JSON.stringify(i,null,2)}),(0,s.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:`Schema`}),(0,s.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[420px]`,children:JSON.stringify(e,null,2)})]})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{o=t(),i(),s=n(),c={onBrowse:async e=>e.kind===`directory`?`/Users/demo/projects/site`:e.forSaveAs?`/Users/demo/exports/output.tmx`:`/Users/demo/projects/site/source.html`,credentials:()=>[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`},{value:`work-openai`,label:`Work OpenAI (gpt-4o)`}]},l={title:`Number List`,type:`object`,properties:{columns:{type:`string`,title:`Translatable Columns`,"ui:widget":`number-list`,description:`Comma or space separated column indices`}}},u={title:`File & Folder Pickers`,type:`object`,properties:{inputFile:{type:`string`,title:`Input File`,"ui:widget":`file-picker`,description:`Browse delegates to the host; degrades to a text input on the web`,"ui:widget-options":{browseTitle:`Choose input`,filters:[{name:`HTML (*.html *.htm)`,extensions:`*.html *.htm`},{name:`All Files (*.*)`,extensions:`*.*`}]}},outputFile:{type:`string`,title:`Output TMX`,"ui:widget":`file-picker`,"ui:widget-options":{browseTitle:`Save TMX as`,forSaveAs:!0,filters:[{name:`TMX (*.tmx)`,extensions:`*.tmx`}]}},workDir:{type:`string`,title:`Working Directory`,"ui:widget":`folder-picker`,"ui:widget-options":{browseTitle:`Choose directory`}}}},d={title:`Credential Picker (host-injected)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Populated from the host's credential vault`}}},f={title:`Credential Picker (inline options)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Options baked into the schema (kapi-desktop's injectCredentialPicker path)`,options:[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`}]}}},p={title:`Rule Editors`,type:`object`,properties:{elementRules:{type:`object`,title:`Element Rules`,"ui:widget":`element-rules`,additionalProperties:{type:`object`,properties:{ruleType:{type:`string`,title:`Rule Type`,enum:[`INLINE`,`TEXTUNIT`,`EXCLUDE`]},translatable:{type:`boolean`,title:`Translatable`,default:!0}}}},attributeRules:{type:`object`,title:`Attribute Rules`,"ui:widget":`attribute-rules`,additionalProperties:{type:`string`}},simplifierRules:{type:`string`,title:`Simplifier Rules`,"ui:widget":`simplifier-rules`}}},m={title:`Inline Input Widgets`,type:`object`,properties:{pattern:{type:`string`,title:`Regex Pattern`,"ui:widget":`regex`},tags:{type:`string`,title:`Tags`,"ui:widget":`tags`},output:{type:`string`,title:`Output`,"ui:widget":`segmented`,enum:[`source`,`target`,`both`]},mode:{type:`string`,title:`Mode`,"ui:widget":`select`,options:[{value:`fast`,label:`Fast`},{value:`balanced`,label:`Balanced`},{value:`thorough`,label:`Thorough`}]},checks:{type:`object`,title:`Checks`,"ui:widget":`checklist`,"ui:widget-options":{entries:[{name:`trim`,title:`Trim whitespace`,description:`Remove leading/trailing space`},{name:`dedupe`,title:`De-duplicate entries`}]}}}},h={title:`Code Finder`,type:`object`,properties:{codes:{type:`object`,title:`Inline Codes`,"ui:widget":`code-finder`,"ui:presets":{"HTML Tags":{rules:[{pattern:`</?\\w[^>]*>`}],sample:`<b>Bold</b>`},Printf:{rules:[{pattern:`%[ds]`}],sample:`Found %d items`}}}}},g={title:`Formats & Tools/Schema/Custom Widgets`,component:r,parameters:{layout:`padded`,docs:{description:{component:"Custom schema-form widgets rendered through SchemaForm. File/folder/credential widgets accept host-injected capabilities (the `host` prop) and degrade to plain text inputs when a host does not provide them."}}}},_={render:()=>(0,s.jsx)(a,{schema:l,initialValues:{columns:`1, 2, 5`}})},v={name:`Number List (invalid token)`,render:()=>(0,s.jsx)(a,{schema:l,initialValues:{columns:`1, two, 3`}})},y={name:`File & Folder Pickers (host injected)`,render:()=>(0,s.jsx)(a,{schema:u,host:c})},b={name:`File & Folder Pickers (web — no host)`,render:()=>(0,s.jsx)(a,{schema:u})},x={name:`Credential Picker (host injected)`,render:()=>(0,s.jsx)(a,{schema:d,host:c})},S={name:`Credential Picker (inline options)`,render:()=>(0,s.jsx)(a,{schema:f})},C={name:`Credential Picker (web — text fallback)`,render:()=>(0,s.jsx)(a,{schema:d})},w={name:`Rule Editors (element / attribute / simplifier)`,render:()=>(0,s.jsx)(a,{schema:p,initialValues:{elementRules:{div:{ruleType:`TEXTUNIT`,translatable:!0},span:{ruleType:`INLINE`,translatable:!0}},attributeRules:{title:`TEXTUNIT`,alt:`TEXTUNIT`},simplifierRules:`if TYPE = "b";
if TAG_TYPE = STANDALONE;`}})},T={name:`Regex / Tags / Segmented / Select / Checklist`,render:()=>(0,s.jsx)(a,{schema:m,initialValues:{pattern:`\\{\\d+\\}`,tags:`html, i18n, okapi`,output:`both`,mode:`balanced`,checks:{trim:!0,dedupe:!1}}})},E={name:`Code Finder`,render:()=>(0,s.jsx)(a,{schema:h,initialValues:{codes:{rules:[{pattern:`%[ds]`}],sample:`Found %d of %d items`}}})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, 2, 5"
  }} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Number List (invalid token)",
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, two, 3"
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (host injected)",
  render: () => <Wrapper schema={pickerSchema} host={stubHost} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (web — no host)",
  render: () => <Wrapper schema={pickerSchema} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (host injected)",
  render: () => <Wrapper schema={credentialSchema} host={stubHost} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (inline options)",
  render: () => <Wrapper schema={credentialInlineSchema} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (web — text fallback)",
  render: () => <Wrapper schema={credentialSchema} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Rule Editors (element / attribute / simplifier)",
  render: () => <Wrapper schema={ruleWidgetsSchema} initialValues={{
    elementRules: {
      div: {
        ruleType: "TEXTUNIT",
        translatable: true
      },
      span: {
        ruleType: "INLINE",
        translatable: true
      }
    },
    attributeRules: {
      title: "TEXTUNIT",
      alt: "TEXTUNIT"
    },
    simplifierRules: 'if TYPE = "b";\\nif TAG_TYPE = STANDALONE;'
  }} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Regex / Tags / Segmented / Select / Checklist",
  render: () => <Wrapper schema={inputWidgetsSchema} initialValues={{
    pattern: "\\\\{\\\\d+\\\\}",
    tags: "html, i18n, okapi",
    output: "both",
    mode: "balanced",
    checks: {
      trim: true,
      dedupe: false
    }
  }} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Code Finder",
  render: () => <Wrapper schema={codeFinderSchema} initialValues={{
    codes: {
      rules: [{
        pattern: "%[ds]"
      }],
      sample: "Found %d of %d items"
    }
  }} />
}`,...E.parameters?.docs?.source}}},D=[`NumberList`,`NumberListInvalid`,`PickersWithHost`,`PickersNoHost`,`CredentialHostInjected`,`CredentialInlineOptions`,`CredentialNoSource`,`RuleEditors`,`InlineInputs`,`CodeFinder`]}))();export{E as CodeFinder,x as CredentialHostInjected,S as CredentialInlineOptions,C as CredentialNoSource,T as InlineInputs,_ as NumberList,v as NumberListInvalid,b as PickersNoHost,y as PickersWithHost,w as RuleEditors,D as __namedExportsOrder,g as default};