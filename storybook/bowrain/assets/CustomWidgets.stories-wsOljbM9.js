import{c as e,i as t}from"./preload-helper-DBuSV-bh.js";import{t as n}from"./react-BHOuiJCc.js";import{t as r}from"./jsx-runtime-CNPDJLAB.js";import{n as i,t as a}from"./schema-form-DnkIlDAj.js";function o({schema:e,initialValues:t={},host:n}){let[r,a]=(0,s.useState)(t);return(0,c.jsxs)(`div`,{className:`grid grid-cols-[1fr_1fr] gap-6 max-w-[1100px]`,children:[(0,c.jsx)(`div`,{children:(0,c.jsx)(i,{schema:e,values:r,onChange:a,host:n})}),(0,c.jsxs)(`div`,{className:`min-w-0`,children:[(0,c.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:`Values`}),(0,c.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[280px]`,children:JSON.stringify(r,null,2)}),(0,c.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:`Schema`}),(0,c.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[420px]`,children:JSON.stringify(e,null,2)})]})]})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;t((()=>{s=e(n(),1),a(),c=r(),l={onBrowse:async e=>e.kind===`directory`?`/Users/demo/projects/site`:e.forSaveAs?`/Users/demo/exports/output.tmx`:`/Users/demo/projects/site/source.html`,credentials:()=>[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`},{value:`work-openai`,label:`Work OpenAI (gpt-4o)`}]},u={title:`Number List`,type:`object`,properties:{columns:{type:`string`,title:`Translatable Columns`,"ui:widget":`number-list`,description:`Comma or space separated column indices`}}},d={title:`File & Folder Pickers`,type:`object`,properties:{inputFile:{type:`string`,title:`Input File`,"ui:widget":`file-picker`,description:`Browse delegates to the host; degrades to a text input on the web`,"ui:widget-options":{browseTitle:`Choose input`,filters:[{name:`HTML (*.html *.htm)`,extensions:`*.html *.htm`},{name:`All Files (*.*)`,extensions:`*.*`}]}},outputFile:{type:`string`,title:`Output TMX`,"ui:widget":`file-picker`,"ui:widget-options":{browseTitle:`Save TMX as`,forSaveAs:!0,filters:[{name:`TMX (*.tmx)`,extensions:`*.tmx`}]}},workDir:{type:`string`,title:`Working Directory`,"ui:widget":`folder-picker`,"ui:widget-options":{browseTitle:`Choose directory`}}}},f={title:`Credential Picker (host-injected)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Populated from the host's credential vault`}}},p={title:`Credential Picker (inline options)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Options baked into the schema (kapi-desktop's injectCredentialPicker path)`,options:[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`}]}}},m={title:`Rule Editors`,type:`object`,properties:{elementRules:{type:`object`,title:`Element Rules`,"ui:widget":`element-rules`,additionalProperties:{type:`object`,properties:{ruleType:{type:`string`,title:`Rule Type`,enum:[`INLINE`,`TEXTUNIT`,`EXCLUDE`]},translatable:{type:`boolean`,title:`Translatable`,default:!0}}}},attributeRules:{type:`object`,title:`Attribute Rules`,"ui:widget":`attribute-rules`,additionalProperties:{type:`string`}},simplifierRules:{type:`string`,title:`Simplifier Rules`,"ui:widget":`simplifier-rules`}}},h={title:`Inline Input Widgets`,type:`object`,properties:{pattern:{type:`string`,title:`Regex Pattern`,"ui:widget":`regex`},tags:{type:`string`,title:`Tags`,"ui:widget":`tags`},output:{type:`string`,title:`Output`,"ui:widget":`segmented`,enum:[`source`,`target`,`both`]},mode:{type:`string`,title:`Mode`,"ui:widget":`select`,options:[{value:`fast`,label:`Fast`},{value:`balanced`,label:`Balanced`},{value:`thorough`,label:`Thorough`}]},checks:{type:`object`,title:`Checks`,"ui:widget":`checklist`,"ui:widget-options":{entries:[{name:`trim`,title:`Trim whitespace`,description:`Remove leading/trailing space`},{name:`dedupe`,title:`De-duplicate entries`}]}}}},g={title:`Code Finder`,type:`object`,properties:{codes:{type:`object`,title:`Inline Codes`,"ui:widget":`code-finder`,"ui:presets":{"HTML Tags":{rules:[{pattern:`</?\\w[^>]*>`}],sample:`<b>Bold</b>`},Printf:{rules:[{pattern:`%[ds]`}],sample:`Found %d items`}}}}},_={title:`Formats & Tools/Schema/Custom Widgets`,component:i,parameters:{layout:`padded`,docs:{description:{component:"Custom schema-form widgets rendered through SchemaForm. File/folder/credential widgets accept host-injected capabilities (the `host` prop) and degrade to plain text inputs when a host does not provide them."}}}},v={render:()=>(0,c.jsx)(o,{schema:u,initialValues:{columns:`1, 2, 5`}})},y={name:`Number List (invalid token)`,render:()=>(0,c.jsx)(o,{schema:u,initialValues:{columns:`1, two, 3`}})},b={name:`File & Folder Pickers (host injected)`,render:()=>(0,c.jsx)(o,{schema:d,host:l})},x={name:`File & Folder Pickers (web — no host)`,render:()=>(0,c.jsx)(o,{schema:d})},S={name:`Credential Picker (host injected)`,render:()=>(0,c.jsx)(o,{schema:f,host:l})},C={name:`Credential Picker (inline options)`,render:()=>(0,c.jsx)(o,{schema:p})},w={name:`Credential Picker (web — text fallback)`,render:()=>(0,c.jsx)(o,{schema:f})},T={name:`Rule Editors (element / attribute / simplifier)`,render:()=>(0,c.jsx)(o,{schema:m,initialValues:{elementRules:{div:{ruleType:`TEXTUNIT`,translatable:!0},span:{ruleType:`INLINE`,translatable:!0}},attributeRules:{title:`TEXTUNIT`,alt:`TEXTUNIT`},simplifierRules:`if TYPE = "b";
if TAG_TYPE = STANDALONE;`}})},E={name:`Regex / Tags / Segmented / Select / Checklist`,render:()=>(0,c.jsx)(o,{schema:h,initialValues:{pattern:`\\{\\d+\\}`,tags:`html, i18n, okapi`,output:`both`,mode:`balanced`,checks:{trim:!0,dedupe:!1}}})},D={name:`Code Finder`,render:()=>(0,c.jsx)(o,{schema:g,initialValues:{codes:{rules:[{pattern:`%[ds]`}],sample:`Found %d of %d items`}}})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, 2, 5"
  }} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Number List (invalid token)",
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, two, 3"
  }} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (host injected)",
  render: () => <Wrapper schema={pickerSchema} host={stubHost} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (web — no host)",
  render: () => <Wrapper schema={pickerSchema} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (host injected)",
  render: () => <Wrapper schema={credentialSchema} host={stubHost} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (inline options)",
  render: () => <Wrapper schema={credentialInlineSchema} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (web — text fallback)",
  render: () => <Wrapper schema={credentialSchema} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "Code Finder",
  render: () => <Wrapper schema={codeFinderSchema} initialValues={{
    codes: {
      rules: [{
        pattern: "%[ds]"
      }],
      sample: "Found %d of %d items"
    }
  }} />
}`,...D.parameters?.docs?.source}}},O=[`NumberList`,`NumberListInvalid`,`PickersWithHost`,`PickersNoHost`,`CredentialHostInjected`,`CredentialInlineOptions`,`CredentialNoSource`,`RuleEditors`,`InlineInputs`,`CodeFinder`]}))();export{D as CodeFinder,S as CredentialHostInjected,C as CredentialInlineOptions,w as CredentialNoSource,E as InlineInputs,v as NumberList,y as NumberListInvalid,x as PickersNoHost,b as PickersWithHost,T as RuleEditors,O as __namedExportsOrder,_ as default};