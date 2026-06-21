import{c as e,i as t}from"./preload-helper-DRGloZ2I.js";import{t as n}from"./react-CTEnZGpN.js";import{t as r}from"./jsx-runtime-Co6hkppD.js";import{r as i,t as a}from"./runtime-CI09VOSa.js";import{a as o,o as s}from"./iframe-D4aK292c.js";function c({schema:e,initialValues:t={},host:n}){let[r,i]=(0,l.useState)(t);return(0,u.jsxs)(`div`,{className:`grid grid-cols-[1fr_1fr] gap-6 max-w-[1100px]`,children:[(0,u.jsx)(`div`,{children:(0,u.jsx)(s,{schema:e,values:r,onChange:i,host:n})}),(0,u.jsxs)(`div`,{className:`min-w-0`,children:[(0,u.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2`,children:a(`1DEUwR`,`Values`)}),(0,u.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[280px]`,children:JSON.stringify(r,null,2)}),(0,u.jsx)(`h4`,{className:`text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2`,children:a(`3TBNvC`,`Schema`)}),(0,u.jsx)(`pre`,{className:`rounded-md bg-muted p-3 text-xs text-muted-foreground overflow-auto max-h-[420px]`,children:JSON.stringify(e,null,2)})]})]})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;t((()=>{i(),l=e(n(),1),o(),u=r(),d={onBrowse:async e=>e.kind===`directory`?`/Users/demo/projects/site`:e.forSaveAs?`/Users/demo/exports/output.tmx`:`/Users/demo/projects/site/source.html`,credentials:()=>[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`},{value:`work-openai`,label:`Work OpenAI (gpt-4o)`}]},f={title:`Number List`,type:`object`,properties:{columns:{type:`string`,title:`Translatable Columns`,"ui:widget":`number-list`,description:`Comma or space separated column indices`}}},p={title:`File & Folder Pickers`,type:`object`,properties:{inputFile:{type:`string`,title:`Input File`,"ui:widget":`file-picker`,description:`Browse delegates to the host; degrades to a text input on the web`,"ui:widget-options":{browseTitle:`Choose input`,filters:[{name:`HTML (*.html *.htm)`,extensions:`*.html *.htm`},{name:`All Files (*.*)`,extensions:`*.*`}]}},outputFile:{type:`string`,title:`Output TMX`,"ui:widget":`file-picker`,"ui:widget-options":{browseTitle:`Save TMX as`,forSaveAs:!0,filters:[{name:`TMX (*.tmx)`,extensions:`*.tmx`}]}},workDir:{type:`string`,title:`Working Directory`,"ui:widget":`folder-picker`,"ui:widget-options":{browseTitle:`Choose directory`}}}},m={title:`Credential Picker (host-injected)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Populated from the host's credential vault`}}},h={title:`Credential Picker (inline options)`,type:`object`,properties:{credential:{type:`string`,title:`Credential`,"ui:widget":`credential-picker`,description:`Options baked into the schema (kapi-desktop's injectCredentialPicker path)`,options:[{value:``,label:`Custom (manual entry)`},{value:`my-anthropic`,label:`My Anthropic (claude)`}]}}},g={title:`Rule Editors`,type:`object`,properties:{elementRules:{type:`object`,title:`Element Rules`,"ui:widget":`element-rules`,additionalProperties:{type:`object`,properties:{ruleType:{type:`string`,title:`Rule Type`,enum:[`INLINE`,`TEXTUNIT`,`EXCLUDE`]},translatable:{type:`boolean`,title:`Translatable`,default:!0}}}},attributeRules:{type:`object`,title:`Attribute Rules`,"ui:widget":`attribute-rules`,additionalProperties:{type:`string`}},simplifierRules:{type:`string`,title:`Simplifier Rules`,"ui:widget":`simplifier-rules`}}},_={title:`Inline Input Widgets`,type:`object`,properties:{pattern:{type:`string`,title:`Regex Pattern`,"ui:widget":`regex`},tags:{type:`string`,title:`Tags`,"ui:widget":`tags`},output:{type:`string`,title:`Output`,"ui:widget":`segmented`,enum:[`source`,`target`,`both`]},mode:{type:`string`,title:`Mode`,"ui:widget":`select`,options:[{value:`fast`,label:`Fast`},{value:`balanced`,label:`Balanced`},{value:`thorough`,label:`Thorough`}]},checks:{type:`object`,title:`Checks`,"ui:widget":`checklist`,"ui:widget-options":{entries:[{name:`trim`,title:`Trim whitespace`,description:`Remove leading/trailing space`},{name:`dedupe`,title:`De-duplicate entries`}]}}}},v={title:`Code Finder`,type:`object`,properties:{codes:{type:`object`,title:`Inline Codes`,"ui:widget":`code-finder`,"ui:presets":{"HTML Tags":{rules:[{pattern:`</?\\w[^>]*>`}],sample:`<b>Bold</b>`},Printf:{rules:[{pattern:`%[ds]`}],sample:`Found %d items`}}}}},y={title:`Formats & Tools/Schema/Custom Widgets`,component:s,parameters:{layout:`padded`,docs:{description:{component:"Custom schema-form widgets rendered through SchemaForm. File/folder/credential widgets accept host-injected capabilities (the `host` prop) and degrade to plain text inputs when a host does not provide them."}}}},b={render:()=>(0,u.jsx)(c,{schema:f,initialValues:{columns:`1, 2, 5`}})},x={name:`Number List (invalid token)`,render:()=>(0,u.jsx)(c,{schema:f,initialValues:{columns:`1, two, 3`}})},S={name:`File & Folder Pickers (host injected)`,render:()=>(0,u.jsx)(c,{schema:p,host:d})},C={name:`File & Folder Pickers (web — no host)`,render:()=>(0,u.jsx)(c,{schema:p})},w={name:`Credential Picker (host injected)`,render:()=>(0,u.jsx)(c,{schema:m,host:d})},T={name:`Credential Picker (inline options)`,render:()=>(0,u.jsx)(c,{schema:h})},E={name:`Credential Picker (web — text fallback)`,render:()=>(0,u.jsx)(c,{schema:m})},D={name:`Rule Editors (element / attribute / simplifier)`,render:()=>(0,u.jsx)(c,{schema:g,initialValues:{elementRules:{div:{ruleType:`TEXTUNIT`,translatable:!0},span:{ruleType:`INLINE`,translatable:!0}},attributeRules:{title:`TEXTUNIT`,alt:`TEXTUNIT`},simplifierRules:`if TYPE = "b";
if TAG_TYPE = STANDALONE;`}})},O={name:`Regex / Tags / Segmented / Select / Checklist`,render:()=>(0,u.jsx)(c,{schema:_,initialValues:{pattern:`\\{\\d+\\}`,tags:`html, i18n, okapi`,output:`both`,mode:`balanced`,checks:{trim:!0,dedupe:!1}}})},k={name:`Code Finder`,render:()=>(0,u.jsx)(c,{schema:v,initialValues:{codes:{rules:[{pattern:`%[ds]`}],sample:`Found %d of %d items`}}})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, 2, 5"
  }} />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Number List (invalid token)",
  render: () => <Wrapper schema={numberListSchema} initialValues={{
    columns: "1, two, 3"
  }} />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (host injected)",
  render: () => <Wrapper schema={pickerSchema} host={stubHost} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "File & Folder Pickers (web — no host)",
  render: () => <Wrapper schema={pickerSchema} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (host injected)",
  render: () => <Wrapper schema={credentialSchema} host={stubHost} />
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (inline options)",
  render: () => <Wrapper schema={credentialInlineSchema} />
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "Credential Picker (web — text fallback)",
  render: () => <Wrapper schema={credentialSchema} />
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Code Finder",
  render: () => <Wrapper schema={codeFinderSchema} initialValues={{
    codes: {
      rules: [{
        pattern: "%[ds]"
      }],
      sample: "Found %d of %d items"
    }
  }} />
}`,...k.parameters?.docs?.source}}},A=[`NumberList`,`NumberListInvalid`,`PickersWithHost`,`PickersNoHost`,`CredentialHostInjected`,`CredentialInlineOptions`,`CredentialNoSource`,`RuleEditors`,`InlineInputs`,`CodeFinder`]}))();export{k as CodeFinder,w as CredentialHostInjected,T as CredentialInlineOptions,E as CredentialNoSource,O as InlineInputs,b as NumberList,x as NumberListInvalid,C as PickersNoHost,S as PickersWithHost,D as RuleEditors,A as __namedExportsOrder,y as default};