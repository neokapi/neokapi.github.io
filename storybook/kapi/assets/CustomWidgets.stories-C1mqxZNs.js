import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-ls4VQNA8.js";import{n as a,t as o}from"./schema-form-DXqIc05q.js";function s({schema:e,initialValues:t={},host:n}){let[r,o]=(0,c.useState)(t);return(0,l.jsxs)(`div`,{className:`grid grid-cols-[1fr_1fr] gap-6 max-w-[1100px]`,children:[(0,l.jsx)(`div`,{children:(0,l.jsx)(a,{schema:e,values:r,onChange:o,host:n})}),(0,l.jsxs)(`div`,{className:`min-w-0`,children:[(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:i(`1X52QQQOkdP`,`Values`)}),(0,l.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[280px]`,children:JSON.stringify(r,null,2)}),(0,l.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:i(`ibnlvuTUBbm`,`Schema`)}),(0,l.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[420px]`,children:JSON.stringify(e,null,2)})]})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;function A(){return(A=e((()=>{r(),c=t(),o(),l=n(),u={onBrowse:async e=>e.kind===`directory`?`/Users/demo/projects/site`:e.forSaveAs?`/Users/demo/exports/output.tmx`:`/Users/demo/projects/site/source.html`,credentials:()=>[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`},{value:`work-openai`,label:`Work OpenAI (gpt-4o)`}]},d={title:`Number List`,type:`object`,properties:{columns:{type:`string`,title:`Translatable Columns`,"ui:widget":`number-list`,description:`Comma or space separated column indices`}}},f={title:`File & Folder Pickers`,type:`object`,properties:{inputFile:{type:`string`,title:`Input File`,"ui:widget":`file-picker`,description:`Browse delegates to the host; degrades to a text input on the web`,"ui:widget-options":{browseTitle:`Choose input`,filters:[{name:`HTML (*.html *.htm)`,extensions:`*.html *.htm`},{name:`All Files (*.*)`,extensions:`*.*`}]}},outputFile:{type:`string`,title:`Output TMX`,"ui:widget":`file-picker`,"ui:widget-options":{browseTitle:`Save TMX as`,forSaveAs:!0,filters:[{name:`TMX (*.tmx)`,extensions:`*.tmx`}]}},workDir:{type:`string`,title:`Working Directory`,"ui:widget":`folder-picker`,"ui:widget-options":{browseTitle:`Choose directory`}}}},p={title:`Credential Picker (host-injected)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Populated from the host's credential vault`}}},m={title:`Credential Picker (inline options)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Options baked into the schema (kapi-desktop's injectCredentialPicker path)`,options:[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`}]}}},h={title:`Rule Editors`,type:`object`,properties:{elementRules:{type:`object`,title:`Element Rules`,"ui:widget":`element-rules`,additionalProperties:{type:`object`,properties:{ruleType:{type:`string`,title:`Rule Type`,enum:[`INLINE`,`TEXTUNIT`,`EXCLUDE`]},translatable:{type:`boolean`,title:`Translatable`,default:!0}}}},attributeRules:{type:`object`,title:`Attribute Rules`,"ui:widget":`attribute-rules`,additionalProperties:{type:`string`}},simplifierRules:{type:`string`,title:`Simplifier Rules`,"ui:widget":`simplifier-rules`}}},g={title:`Inline Input Widgets`,type:`object`,properties:{pattern:{type:`string`,title:`Regex Pattern`,"ui:widget":`regex`},tags:{type:`string`,title:`Tags`,"ui:widget":`tags`},output:{type:`string`,title:`Output`,"ui:widget":`segmented`,enum:[`source`,`target`,`both`]},mode:{type:`string`,title:`Mode`,"ui:widget":`select`,options:[{value:`fast`,label:`Fast`},{value:`balanced`,label:`Balanced`},{value:`thorough`,label:`Thorough`}]},checks:{type:`object`,title:`Checks`,"ui:widget":`checklist`,"ui:widget-options":{entries:[{name:`trim`,title:`Trim whitespace`,description:`Remove leading/trailing space`},{name:`dedupe`,title:`De-duplicate entries`}]}}}},_={title:`Code Finder`,type:`object`,properties:{codes:{type:`object`,title:`Inline Codes`,"ui:widget":`code-finder`,"ui:presets":{"HTML Tags":{rules:[{pattern:`</?\\w[^>]*>`}],sample:`<b>Bold</b>`},Printf:{rules:[{pattern:`%[ds]`}],sample:`Found %d items`}}}}},v={title:`Formats & Tools/Schema/Custom Widgets`,component:a,parameters:{layout:`padded`,docs:{description:{component:"Custom schema-form widgets rendered through SchemaForm. File/folder/credential widgets accept host-injected capabilities (the `host` prop) and degrade to plain text inputs when a host does not provide them."}}}},y={render:()=>(0,l.jsx)(s,{schema:d,initialValues:{columns:`1, 2, 5`}})},b={name:`Number List (invalid token)`,render:()=>(0,l.jsx)(s,{schema:d,initialValues:{columns:`1, two, 3`}})},x={name:`File & Folder Pickers (host injected)`,render:()=>(0,l.jsx)(s,{schema:f,host:u})},S={name:`File & Folder Pickers (web — no host)`,render:()=>(0,l.jsx)(s,{schema:f})},C={name:`Credential Picker (host injected)`,render:()=>(0,l.jsx)(s,{schema:p,host:u})},w={name:`Credential Picker (inline options)`,render:()=>(0,l.jsx)(s,{schema:m})},T={name:`Credential Picker (web — text fallback)`,render:()=>(0,l.jsx)(s,{schema:p})},E={name:`Rule Editors (element / attribute / simplifier)`,render:()=>(0,l.jsx)(s,{schema:h,initialValues:{elementRules:{div:{ruleType:`TEXTUNIT`,translatable:!0},span:{ruleType:`INLINE`,translatable:!0}},attributeRules:{title:`TEXTUNIT`,alt:`TEXTUNIT`},simplifierRules:`if TYPE = "b";
if TAG_TYPE = STANDALONE;`}})},D={name:`Regex / Tags / Segmented / Select / Checklist`,render:()=>(0,l.jsx)(s,{schema:g,initialValues:{pattern:`\\{\\d+\\}`,tags:`html, i18n, okapi`,output:`both`,mode:`balanced`,checks:{trim:!0,dedupe:!1}}})},O={name:`Code Finder`,render:()=>(0,l.jsx)(s,{schema:_,initialValues:{codes:{rules:[{pattern:`%[ds]`}],sample:`Found %d of %d items`}}})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, 2, 5"
  }} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Number List (invalid token)",
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, two, 3"
  }} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (host injected)",
  render: () => <Wrapper schema={pickerSchema} host={stubHost} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (web — no host)",
  render: () => <Wrapper schema={pickerSchema} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (host injected)",
  render: () => <Wrapper schema={credentialSchema} host={stubHost} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (inline options)",
  render: () => <Wrapper schema={credentialInlineSchema} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (web — text fallback)",
  render: () => <Wrapper schema={credentialSchema} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Code Finder",
  render: () => <Wrapper schema={codeFinderSchema} initialValues={{
    codes: {
      rules: [{
        pattern: "%[ds]"
      }],
      sample: "Found %d of %d items"
    }
  }} />
}`,...O.parameters?.docs?.source}}},k=[`NumberList`,`NumberListInvalid`,`PickersWithHost`,`PickersNoHost`,`CredentialHostInjected`,`CredentialInlineOptions`,`CredentialNoSource`,`RuleEditors`,`InlineInputs`,`CodeFinder`]})))()}A();export{O as CodeFinder,C as CredentialHostInjected,w as CredentialInlineOptions,T as CredentialNoSource,D as InlineInputs,y as NumberList,b as NumberListInvalid,S as PickersNoHost,x as PickersWithHost,E as RuleEditors,k as __namedExportsOrder,v as default};