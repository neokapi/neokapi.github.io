import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{a as r,c as i,i as a,l as o,n as s,o as c,r as l,s as u,t as d,u as f}from"./form-Dg4UAGGL.js";import{n as p,t as m}from"./button-BEDkCUOa.js";import{n as h,t as g}from"./input-BbN21tzh.js";import{c as _,i as v,n as y,o as b,s as x,t as S}from"./select-C2w7B1GK.js";var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{C=t(),f(),h(),p(),_(),w=n(),T={title:`Foundations/Form Primitives`,tags:[`autodocs`],parameters:{docs:{description:{component:`Composable form layout primitives. Use these to build any form UI — from simple config editors to complex schema-driven forms. Follows the shadcn naming convention (FormItem, FormLabel, etc.) without requiring react-hook-form.`}}}},E={name:`FormItem — Basic Field`,render:()=>{let[e,t]=(0,C.useState)(``);return(0,w.jsx)(`div`,{className:`max-w-xs`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Project Name`}),(0,w.jsx)(s,{children:`A short identifier for your project.`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{value:e,placeholder:`my-project`,onChange:e=>t(e.target.value)})})]})})}},D={name:`FormItem — With Validation Error`,render:()=>(0,w.jsx)(`div`,{className:`max-w-xs`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Email`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{defaultValue:`not-an-email`,className:`border-destructive`})}),(0,w.jsx)(i,{children:`Please enter a valid email address.`})]})})},O={name:`FormItem — Modified from Preset`,render:()=>(0,w.jsxs)(`div`,{className:`max-w-xs space-y-2`,children:[(0,w.jsxs)(c,{modified:!0,children:[(0,w.jsx)(u,{children:`Threshold`}),(0,w.jsx)(s,{children:`Minimum match score (0–100). Value differs from preset.`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{type:`number`,defaultValue:`85`})})]}),(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Max Results`}),(0,w.jsx)(s,{children:`Unmodified field for comparison.`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{type:`number`,defaultValue:`100`})})]})]})},k={name:`FormItem — Disabled`,render:()=>(0,w.jsx)(`div`,{className:`max-w-xs`,children:(0,w.jsxs)(c,{disabled:!0,children:[(0,w.jsx)(u,{disabled:!0,children:`Output Path`}),(0,w.jsx)(s,{children:`Disabled when auto-detect is on.`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{defaultValue:`/output/report.html`,disabled:!0})})]})})},A={name:`FormItem — With Expandable Help`,render:()=>(0,w.jsx)(`div`,{className:`max-w-xs`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Extraction Rules`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{defaultValue:`.*`,className:`font-mono`})}),(0,w.jsx)(a,{description:`Regex patterns that determine which JSON paths are extracted for translation.`,notes:[`Patterns are matched against the full JSON path (e.g., $.messages[*].text).`,`Use .* to extract all string values.`],dependencies:[{property:`extractAll`,condition:`must be false`}]})]})})},j={name:`FormToggle — Boolean Field`,render:()=>{let[e,t]=(0,C.useState)(!0);return(0,w.jsxs)(`div`,{className:`max-w-xs space-y-2`,children:[(0,w.jsx)(o,{checked:e,onCheckedChange:t,label:`Check Leading Whitespace`,description:`Flag text units where leading whitespace differs between source and target.`}),(0,w.jsx)(o,{checked:!1,onCheckedChange:()=>{},label:`Disabled Toggle`,description:`This toggle is disabled.`,disabled:!0}),(0,w.jsx)(o,{checked:!0,onCheckedChange:()=>{},label:`Modified Toggle`,description:`Value differs from active preset.`,modified:!0})]})}},M={name:`FormToggle — Compact Mode`,render:()=>{let[e,t]=(0,C.useState)(!0),[n,r]=(0,C.useState)(!1),[i,a]=(0,C.useState)(!0);return(0,w.jsxs)(`div`,{className:`max-w-xs space-y-0.5`,children:[(0,w.jsx)(o,{checked:e,onCheckedChange:t,label:`Leading whitespace`,compact:!0}),(0,w.jsx)(o,{checked:n,onCheckedChange:r,label:`Trailing whitespace`,compact:!0}),(0,w.jsx)(o,{checked:i,onCheckedChange:a,label:`Empty target`,compact:!0})]})}},N={name:`FormInputAction — Path Picker`,render:()=>(0,w.jsx)(`div`,{className:`max-w-sm`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Report File Path`}),(0,w.jsx)(s,{children:`Path of the report file to generate.`}),(0,w.jsxs)(r,{children:[(0,w.jsx)(g,{defaultValue:"${rootDir}/qa-report.html",className:`flex-1 font-mono text-xs h-8`}),(0,w.jsx)(m,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:`Browse`})]})]})})},P={name:`FormInputAction — Multiple Actions`,render:()=>(0,w.jsx)(`div`,{className:`max-w-sm`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Memory File`}),(0,w.jsxs)(r,{children:[(0,w.jsx)(g,{defaultValue:`/data/project.tmx`,className:`flex-1 font-mono text-xs h-8`}),(0,w.jsx)(m,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:`Browse`}),(0,w.jsx)(m,{variant:`ghost`,size:`sm`,className:`h-8 text-xs shrink-0`,children:`Clear`})]})]})})},F={name:`FormFieldGroup — Non-Collapsible`,render:()=>(0,w.jsx)(`div`,{className:`max-w-xs`,children:(0,w.jsx)(l,{label:`General Settings`,children:(0,w.jsxs)(`div`,{className:`space-y-2`,children:[(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Name`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{defaultValue:`My Project`})})]}),(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Description`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{placeholder:`Optional description...`})})]})]})})})},I={name:`FormFieldGroup — Collapsible`,render:()=>(0,w.jsxs)(`div`,{className:`max-w-xs space-y-4`,children:[(0,w.jsx)(l,{label:`Whitespace Checks`,collapsible:!0,children:(0,w.jsxs)(`div`,{className:`space-y-1`,children:[(0,w.jsx)(o,{checked:!0,onCheckedChange:()=>{},label:`Leading whitespace`,compact:!0}),(0,w.jsx)(o,{checked:!0,onCheckedChange:()=>{},label:`Trailing whitespace`,compact:!0}),(0,w.jsx)(o,{checked:!1,onCheckedChange:()=>{},label:`Double spaces`,compact:!0})]})}),(0,w.jsx)(l,{label:`Content Checks`,collapsible:!0,defaultCollapsed:!0,children:(0,w.jsxs)(`div`,{className:`space-y-1`,children:[(0,w.jsx)(o,{checked:!0,onCheckedChange:()=>{},label:`Empty target`,compact:!0}),(0,w.jsx)(o,{checked:!0,onCheckedChange:()=>{},label:`Target same as source`,compact:!0})]})}),(0,w.jsx)(l,{label:`Output`,collapsible:!0,defaultCollapsed:!0,children:(0,w.jsx)(`div`,{className:`space-y-2`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Report Path`}),(0,w.jsxs)(r,{children:[(0,w.jsx)(g,{defaultValue:"${rootDir}/qa-report.html",className:`flex-1 font-mono text-xs h-8`}),(0,w.jsx)(m,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:`Browse`})]})]})})})]})},L={name:`Composed — Mini Config Editor`,render:()=>{let[e,t]=(0,C.useState)(!1),[n,i]=(0,C.useState)(`95`),[a,f]=(0,C.useState)(`html`);return(0,w.jsxs)(`div`,{className:`max-w-sm space-y-4`,children:[(0,w.jsx)(l,{label:`Content Memory`,children:(0,w.jsxs)(`div`,{className:`space-y-2`,children:[(0,w.jsx)(o,{checked:e,onCheckedChange:t,label:`Use Content Memory`,description:`Leverage existing translations for pre-population.`}),(0,w.jsxs)(c,{disabled:!e,children:[(0,w.jsx)(u,{disabled:!e,children:`Memory File`}),(0,w.jsxs)(r,{children:[(0,w.jsx)(g,{defaultValue:`/data/project.tmx`,disabled:!e,className:`flex-1 font-mono text-xs h-8`}),(0,w.jsx)(m,{variant:`outline`,size:`sm`,disabled:!e,className:`h-8 text-xs shrink-0`,children:`Browse`})]})]}),(0,w.jsxs)(c,{disabled:!e,children:[(0,w.jsx)(u,{disabled:!e,children:`Match Threshold`}),(0,w.jsx)(s,{children:`Minimum similarity score (0–100).`}),(0,w.jsx)(d,{children:(0,w.jsx)(g,{type:`number`,min:0,max:100,value:n,disabled:!e,className:`h-8 text-xs`,onChange:e=>i(e.target.value)})})]})]})}),(0,w.jsx)(l,{label:`Output`,collapsible:!0,children:(0,w.jsx)(`div`,{className:`space-y-2`,children:(0,w.jsxs)(c,{children:[(0,w.jsx)(u,{children:`Report Format`}),(0,w.jsx)(d,{children:(0,w.jsxs)(S,{value:a,onValueChange:f,children:[(0,w.jsx)(b,{className:`h-8 text-xs`,children:(0,w.jsx)(x,{})}),(0,w.jsxs)(y,{children:[(0,w.jsx)(v,{value:`html`,children:`HTML file`}),(0,w.jsx)(v,{value:`tsv`,children:`Tab-delimited file`}),(0,w.jsx)(v,{value:`xml`,children:`XML file`})]})]})})]})})})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: "FormItem — Basic Field",
  render: () => {
    const [value, setValue] = useState("");
    return <div className="max-w-xs">
        <FormItem>
          <FormLabel>Project Name</FormLabel>
          <FormDescription>A short identifier for your project.</FormDescription>
          <FormControl>
            <Input value={value} placeholder="my-project" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
          </FormControl>
        </FormItem>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: "FormItem — With Validation Error",
  render: () => <div className="max-w-xs">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input defaultValue="not-an-email" className="border-destructive" />
        </FormControl>
        <FormMessage>Please enter a valid email address.</FormMessage>
      </FormItem>
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "FormItem — Modified from Preset",
  render: () => <div className="max-w-xs space-y-2">
      <FormItem modified>
        <FormLabel>Threshold</FormLabel>
        <FormDescription>Minimum match score (0–100). Value differs from preset.</FormDescription>
        <FormControl>
          <Input type="number" defaultValue="85" />
        </FormControl>
      </FormItem>
      <FormItem>
        <FormLabel>Max Results</FormLabel>
        <FormDescription>Unmodified field for comparison.</FormDescription>
        <FormControl>
          <Input type="number" defaultValue="100" />
        </FormControl>
      </FormItem>
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "FormItem — Disabled",
  render: () => <div className="max-w-xs">
      <FormItem disabled>
        <FormLabel disabled>Output Path</FormLabel>
        <FormDescription>Disabled when auto-detect is on.</FormDescription>
        <FormControl>
          <Input defaultValue="/output/report.html" disabled />
        </FormControl>
      </FormItem>
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "FormItem — With Expandable Help",
  render: () => <div className="max-w-xs">
      <FormItem>
        <FormLabel>Extraction Rules</FormLabel>
        <FormControl>
          <Input defaultValue=".*" className="font-mono" />
        </FormControl>
        <FormHelpText description="Regex patterns that determine which JSON paths are extracted for translation." notes={["Patterns are matched against the full JSON path (e.g., $.messages[*].text).", "Use .* to extract all string values."]} dependencies={[{
        property: "extractAll",
        condition: "must be false"
      }]} />
      </FormItem>
    </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "FormToggle — Boolean Field",
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div className="max-w-xs space-y-2">
        <FormToggle checked={checked} onCheckedChange={setChecked} label="Check Leading Whitespace" description="Flag text units where leading whitespace differs between source and target." />
        <FormToggle checked={false} onCheckedChange={() => {}} label="Disabled Toggle" description="This toggle is disabled." disabled />
        <FormToggle checked={true} onCheckedChange={() => {}} label="Modified Toggle" description="Value differs from active preset." modified />
      </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "FormToggle — Compact Mode",
  render: () => {
    const [a, setA] = useState(true);
    const [b, setB] = useState(false);
    const [c, setC] = useState(true);
    return <div className="max-w-xs space-y-0.5">
        <FormToggle checked={a} onCheckedChange={setA} label="Leading whitespace" compact />
        <FormToggle checked={b} onCheckedChange={setB} label="Trailing whitespace" compact />
        <FormToggle checked={c} onCheckedChange={setC} label="Empty target" compact />
      </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "FormInputAction — Path Picker",
  render: () => <div className="max-w-sm">
      <FormItem>
        <FormLabel>Report File Path</FormLabel>
        <FormDescription>Path of the report file to generate.</FormDescription>
        <FormInputAction>
          <Input defaultValue="\${rootDir}/qa-report.html" className="flex-1 font-mono text-xs h-8" />
          <Button variant="outline" size="sm" className="h-8 text-xs shrink-0">
            Browse
          </Button>
        </FormInputAction>
      </FormItem>
    </div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "FormInputAction — Multiple Actions",
  render: () => <div className="max-w-sm">
      <FormItem>
        <FormLabel>Memory File</FormLabel>
        <FormInputAction>
          <Input defaultValue="/data/project.tmx" className="flex-1 font-mono text-xs h-8" />
          <Button variant="outline" size="sm" className="h-8 text-xs shrink-0">
            Browse
          </Button>
          <Button variant="ghost" size="sm" className="h-8 text-xs shrink-0">
            Clear
          </Button>
        </FormInputAction>
      </FormItem>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "FormFieldGroup — Non-Collapsible",
  render: () => <div className="max-w-xs">
      <FormFieldGroup label="General Settings">
        <div className="space-y-2">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input defaultValue="My Project" />
            </FormControl>
          </FormItem>
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="Optional description..." />
            </FormControl>
          </FormItem>
        </div>
      </FormFieldGroup>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "FormFieldGroup — Collapsible",
  render: () => <div className="max-w-xs space-y-4">
      <FormFieldGroup label="Whitespace Checks" collapsible>
        <div className="space-y-1">
          <FormToggle checked={true} onCheckedChange={() => {}} label="Leading whitespace" compact />
          <FormToggle checked={true} onCheckedChange={() => {}} label="Trailing whitespace" compact />
          <FormToggle checked={false} onCheckedChange={() => {}} label="Double spaces" compact />
        </div>
      </FormFieldGroup>

      <FormFieldGroup label="Content Checks" collapsible defaultCollapsed>
        <div className="space-y-1">
          <FormToggle checked={true} onCheckedChange={() => {}} label="Empty target" compact />
          <FormToggle checked={true} onCheckedChange={() => {}} label="Target same as source" compact />
        </div>
      </FormFieldGroup>

      <FormFieldGroup label="Output" collapsible defaultCollapsed>
        <div className="space-y-2">
          <FormItem>
            <FormLabel>Report Path</FormLabel>
            <FormInputAction>
              <Input defaultValue="\${rootDir}/qa-report.html" className="flex-1 font-mono text-xs h-8" />
              <Button variant="outline" size="sm" className="h-8 text-xs shrink-0">
                Browse
              </Button>
            </FormInputAction>
          </FormItem>
        </div>
      </FormFieldGroup>
    </div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "Composed — Mini Config Editor",
  render: () => {
    const [useMemory, setUseMemory] = useState(false);
    const [threshold, setThreshold] = useState("95");
    const [format, setFormat] = useState("html");
    return <div className="max-w-sm space-y-4">
        <FormFieldGroup label="Content Memory">
          <div className="space-y-2">
            <FormToggle checked={useMemory} onCheckedChange={setUseMemory} label="Use Content Memory" description="Leverage existing translations for pre-population." />

            <FormItem disabled={!useMemory}>
              <FormLabel disabled={!useMemory}>Memory File</FormLabel>
              <FormInputAction>
                <Input defaultValue="/data/project.tmx" disabled={!useMemory} className="flex-1 font-mono text-xs h-8" />
                <Button variant="outline" size="sm" disabled={!useMemory} className="h-8 text-xs shrink-0">
                  Browse
                </Button>
              </FormInputAction>
            </FormItem>

            <FormItem disabled={!useMemory}>
              <FormLabel disabled={!useMemory}>Match Threshold</FormLabel>
              <FormDescription>Minimum similarity score (0–100).</FormDescription>
              <FormControl>
                <Input type="number" min={0} max={100} value={threshold} disabled={!useMemory} className="h-8 text-xs" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThreshold(e.target.value)} />
              </FormControl>
            </FormItem>
          </div>
        </FormFieldGroup>

        <FormFieldGroup label="Output" collapsible>
          <div className="space-y-2">
            <FormItem>
              <FormLabel>Report Format</FormLabel>
              <FormControl>
                <Select value={format} onValueChange={setFormat}>
                  <SelectTrigger className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="html">HTML file</SelectItem>
                    <SelectItem value="tsv">Tab-delimited file</SelectItem>
                    <SelectItem value="xml">XML file</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          </div>
        </FormFieldGroup>
      </div>;
  }
}`,...L.parameters?.docs?.source}}},R=[`BasicField`,`FieldWithError`,`FieldWithModifiedIndicator`,`DisabledField`,`FieldWithHelp`,`Toggle`,`ToggleCompact`,`InputWithAction`,`InputWithMultipleActions`,`FieldGroup`,`CollapsibleGroup`,`ComposedConfigEditor`]}))();export{E as BasicField,I as CollapsibleGroup,L as ComposedConfigEditor,k as DisabledField,F as FieldGroup,D as FieldWithError,A as FieldWithHelp,O as FieldWithModifiedIndicator,N as InputWithAction,P as InputWithMultipleActions,j as Toggle,M as ToggleCompact,R as __namedExportsOrder,T as default};