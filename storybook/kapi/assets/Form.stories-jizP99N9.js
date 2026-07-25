import{c as e,i as t}from"./preload-helper-a38IrJcw.js";import{t as n}from"./react-hDuJKfaT.js";import{t as r}from"./jsx-runtime-DuIU0fMU.js";import{r as i,t as a}from"./runtime-rNvQ1D9s.js";import{a as o,c as s,i as c,l,n as u,o as d,r as f,s as p,t as m,u as h}from"./form-DS1SlLdc.js";import{n as g,t as _}from"./button-Bf8BTLsa.js";import{n as v,t as y}from"./input-BTTJXJRq.js";import{$t as b,Qt as x,Zt as S,en as C,nn as w,tn as T}from"./iframe-D82Cq0_D.js";var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{i(),E=e(n(),1),h(),v(),g(),w(),D=r(),O={title:`Foundations/Form Primitives`,tags:[`autodocs`],parameters:{docs:{description:{component:`Composable form layout primitives. Use these to build any form UI — from simple config editors to complex schema-driven forms. Follows the shadcn naming convention (FormItem, FormLabel, etc.) without requiring react-hook-form.`}}}},k={name:`FormItem — Basic Field`,render:()=>{let[e,t]=(0,E.useState)(``);return(0,D.jsx)(`div`,{className:`max-w-xs`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`4Y8TX3rHqVp`,`Project Name`)}),(0,D.jsx)(u,{children:a(`1yIDsqy6noQ`,`A short identifier for your project.`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{value:e,placeholder:a(`4QUy826CdW`,`my-project`),onChange:e=>t(e.target.value)})})]})})}},A={name:`FormItem — With Validation Error`,render:()=>(0,D.jsx)(`div`,{className:`max-w-xs`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`hyLgTeUbWut`,`Email`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{defaultValue:`not-an-email`,className:`border-destructive`})}),(0,D.jsx)(s,{children:a(`jCyk0kH0Pzy`,`Please enter a valid email address.`)})]})})},j={name:`FormItem — Modified from Preset`,render:()=>(0,D.jsxs)(`div`,{className:`max-w-xs space-y-2`,children:[(0,D.jsxs)(d,{modified:!0,children:[(0,D.jsx)(p,{children:a(`2kdeSav6mEk`,`Threshold`)}),(0,D.jsx)(u,{children:a(`3sl1HbYv5LE`,`Minimum match score (0–100). Value differs from preset.`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{type:`number`,defaultValue:`85`})})]}),(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`6ntcmKZguUZ`,`Max Results`)}),(0,D.jsx)(u,{children:a(`9rLRJRDwuDR`,`Unmodified field for comparison.`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{type:`number`,defaultValue:`100`})})]})]})},M={name:`FormItem — Disabled`,render:()=>(0,D.jsx)(`div`,{className:`max-w-xs`,children:(0,D.jsxs)(d,{disabled:!0,children:[(0,D.jsx)(p,{disabled:!0,children:a(`if05Ssw6rwN`,`Output Path`)}),(0,D.jsx)(u,{children:a(`lCqQuFteb6D`,`Disabled when auto-detect is on.`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{defaultValue:`/output/report.html`,disabled:!0})})]})})},N={name:`FormItem — With Expandable Help`,render:()=>(0,D.jsx)(`div`,{className:`max-w-xs`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`9EZcOEMyBlD`,`Extraction Rules`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{defaultValue:`.*`,className:`font-mono`})}),(0,D.jsx)(c,{description:a(`h0ruBkJ7EzS`,`Regex patterns that determine which JSON paths are extracted for translation.`),notes:[`Patterns are matched against the full JSON path (e.g., $.messages[*].text).`,`Use .* to extract all string values.`],dependencies:[{property:`extractAll`,condition:`must be false`}]})]})})},P={name:`FormToggle — Boolean Field`,render:()=>{let[e,t]=(0,E.useState)(!0);return(0,D.jsxs)(`div`,{className:`max-w-xs space-y-2`,children:[(0,D.jsx)(l,{checked:e,onCheckedChange:t,label:a(`9NMi05bFf0m`,`Check Leading Whitespace`),description:a(`dbmU2nsp5HF`,`Flag text units where leading whitespace differs between source and target.`)}),(0,D.jsx)(l,{checked:!1,onCheckedChange:()=>{},label:a(`eBZc533LybD`,`Disabled Toggle`),description:a(`jZNvT710F53`,`This toggle is disabled.`),disabled:!0}),(0,D.jsx)(l,{checked:!0,onCheckedChange:()=>{},label:a(`aJuygEZCIjY`,`Modified Toggle`),description:a(`k8om81eNWsG`,`Value differs from active preset.`),modified:!0})]})}},F={name:`FormToggle — Compact Mode`,render:()=>{let[e,t]=(0,E.useState)(!0),[n,r]=(0,E.useState)(!1),[i,o]=(0,E.useState)(!0);return(0,D.jsxs)(`div`,{className:`max-w-xs space-y-0.5`,children:[(0,D.jsx)(l,{checked:e,onCheckedChange:t,label:a(`1OfMGl9deJQ`,`Leading whitespace`),compact:!0}),(0,D.jsx)(l,{checked:n,onCheckedChange:r,label:a(`3dyKIKeWP6S`,`Trailing whitespace`),compact:!0}),(0,D.jsx)(l,{checked:i,onCheckedChange:o,label:a(`43E4Kf1WqHT`,`Empty target`),compact:!0})]})}},I={name:`FormInputAction — Path Picker`,render:()=>(0,D.jsx)(`div`,{className:`max-w-sm`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`3Au5BDx2Ln0`,`Report File Path`)}),(0,D.jsx)(u,{children:a(`ikGWU5lQXWw`,`Path of the report file to generate.`)}),(0,D.jsxs)(o,{children:[(0,D.jsx)(y,{defaultValue:"${rootDir}/qa-report.html",className:`flex-1 font-mono text-xs h-8`}),(0,D.jsx)(_,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:a(`6Uv0cbOJfHL`,`Browse`)})]})]})})},L={name:`FormInputAction — Multiple Actions`,render:()=>(0,D.jsx)(`div`,{className:`max-w-sm`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`6YhChih0yVm`,`TM File`)}),(0,D.jsxs)(o,{children:[(0,D.jsx)(y,{defaultValue:`/data/project.tmx`,className:`flex-1 font-mono text-xs h-8`}),(0,D.jsx)(_,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:a(`6Uv0cbOJfHL`,`Browse`)}),(0,D.jsx)(_,{variant:`ghost`,size:`sm`,className:`h-8 text-xs shrink-0`,children:a(`1VM9tuFMsF2`,`Clear`)})]})]})})},R={name:`FormFieldGroup — Non-Collapsible`,render:()=>(0,D.jsx)(`div`,{className:`max-w-xs`,children:(0,D.jsx)(f,{label:a(`ai6ubL5PhIR`,`General Settings`),children:(0,D.jsxs)(`div`,{className:`space-y-2`,children:[(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`7FAPLVXTDKm`,`Name`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{defaultValue:`My Project`})})]}),(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`3lWU1aDvO2P`,`Description`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{placeholder:a(`c8stXFE5q1q`,`Optional description...`)})})]})]})})})},z={name:`FormFieldGroup — Collapsible`,render:()=>(0,D.jsxs)(`div`,{className:`max-w-xs space-y-4`,children:[(0,D.jsx)(f,{label:a(`7npTEtMZjb0`,`Whitespace Checks`),collapsible:!0,children:(0,D.jsxs)(`div`,{className:`space-y-1`,children:[(0,D.jsx)(l,{checked:!0,onCheckedChange:()=>{},label:a(`1OfMGl9deJQ`,`Leading whitespace`),compact:!0}),(0,D.jsx)(l,{checked:!0,onCheckedChange:()=>{},label:a(`3dyKIKeWP6S`,`Trailing whitespace`),compact:!0}),(0,D.jsx)(l,{checked:!1,onCheckedChange:()=>{},label:a(`6lpKuSRgLdr`,`Double spaces`),compact:!0})]})}),(0,D.jsx)(f,{label:a(`2MFfUkhYNR6`,`Content Checks`),collapsible:!0,defaultCollapsed:!0,children:(0,D.jsxs)(`div`,{className:`space-y-1`,children:[(0,D.jsx)(l,{checked:!0,onCheckedChange:()=>{},label:a(`43E4Kf1WqHT`,`Empty target`),compact:!0}),(0,D.jsx)(l,{checked:!0,onCheckedChange:()=>{},label:a(`4rJzQhRTdtr`,`Target same as source`),compact:!0})]})}),(0,D.jsx)(f,{label:a(`gUkROzsRP3P`,`Output`),collapsible:!0,defaultCollapsed:!0,children:(0,D.jsx)(`div`,{className:`space-y-2`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`5GjD3gmPnhU`,`Report Path`)}),(0,D.jsxs)(o,{children:[(0,D.jsx)(y,{defaultValue:"${rootDir}/qa-report.html",className:`flex-1 font-mono text-xs h-8`}),(0,D.jsx)(_,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:a(`6Uv0cbOJfHL`,`Browse`)})]})]})})})]})},B={name:`Composed — Mini Config Editor`,render:()=>{let[e,t]=(0,E.useState)(!1),[n,r]=(0,E.useState)(`95`),[i,s]=(0,E.useState)(`html`);return(0,D.jsxs)(`div`,{className:`max-w-sm space-y-4`,children:[(0,D.jsx)(f,{label:a(`hCTLtU6b5AA`,`Translation Memory`),children:(0,D.jsxs)(`div`,{className:`space-y-2`,children:[(0,D.jsx)(l,{checked:e,onCheckedChange:t,label:a(`9nXE0mdVcR8`,`Use Translation Memory`),description:a(`birJFqOdqV9`,`Leverage existing translations for pre-population.`)}),(0,D.jsxs)(d,{disabled:!e,children:[(0,D.jsx)(p,{disabled:!e,children:a(`6YhChih0yVm`,`TM File`)}),(0,D.jsxs)(o,{children:[(0,D.jsx)(y,{defaultValue:`/data/project.tmx`,disabled:!e,className:`flex-1 font-mono text-xs h-8`}),(0,D.jsx)(_,{variant:`outline`,size:`sm`,disabled:!e,className:`h-8 text-xs shrink-0`,children:a(`6Uv0cbOJfHL`,`Browse`)})]})]}),(0,D.jsxs)(d,{disabled:!e,children:[(0,D.jsx)(p,{disabled:!e,children:a(`hGECAcLpCGf`,`Match Threshold`)}),(0,D.jsx)(u,{children:a(`bPwqzsotEr3`,`Minimum similarity score (0–100).`)}),(0,D.jsx)(m,{children:(0,D.jsx)(y,{type:`number`,min:0,max:100,value:n,disabled:!e,className:`h-8 text-xs`,onChange:e=>r(e.target.value)})})]})]})}),(0,D.jsx)(f,{label:a(`gUkROzsRP3P`,`Output`),collapsible:!0,children:(0,D.jsx)(`div`,{className:`space-y-2`,children:(0,D.jsxs)(d,{children:[(0,D.jsx)(p,{children:a(`4KdoVZ43ht4`,`Report Format`)}),(0,D.jsx)(m,{children:(0,D.jsxs)(S,{value:i,onValueChange:s,children:[(0,D.jsx)(C,{className:`h-8 text-xs`,children:(0,D.jsx)(T,{})}),(0,D.jsxs)(x,{children:[(0,D.jsx)(b,{value:`html`,children:a(`fOvqy0zGD6V`,`HTML file`)}),(0,D.jsx)(b,{value:`tsv`,children:a(`l3r5p0PMJkD`,`Tab-delimited file`)}),(0,D.jsx)(b,{value:`xml`,children:a(`kGHQLDqmEcD`,`XML file`)})]})]})})]})})})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "FormToggle — Boolean Field",
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div className="max-w-xs space-y-2">
        <FormToggle checked={checked} onCheckedChange={setChecked} label="Check Leading Whitespace" description="Flag text units where leading whitespace differs between source and target." />
        <FormToggle checked={false} onCheckedChange={() => {}} label="Disabled Toggle" description="This toggle is disabled." disabled />
        <FormToggle checked={true} onCheckedChange={() => {}} label="Modified Toggle" description="Value differs from active preset." modified />
      </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "FormInputAction — Multiple Actions",
  render: () => <div className="max-w-sm">
      <FormItem>
        <FormLabel>TM File</FormLabel>
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Composed — Mini Config Editor",
  render: () => {
    const [useTM, setUseTM] = useState(false);
    const [threshold, setThreshold] = useState("95");
    const [format, setFormat] = useState("html");
    return <div className="max-w-sm space-y-4">
        <FormFieldGroup label="Translation Memory">
          <div className="space-y-2">
            <FormToggle checked={useTM} onCheckedChange={setUseTM} label="Use Translation Memory" description="Leverage existing translations for pre-population." />

            <FormItem disabled={!useTM}>
              <FormLabel disabled={!useTM}>TM File</FormLabel>
              <FormInputAction>
                <Input defaultValue="/data/project.tmx" disabled={!useTM} className="flex-1 font-mono text-xs h-8" />
                <Button variant="outline" size="sm" disabled={!useTM} className="h-8 text-xs shrink-0">
                  Browse
                </Button>
              </FormInputAction>
            </FormItem>

            <FormItem disabled={!useTM}>
              <FormLabel disabled={!useTM}>Match Threshold</FormLabel>
              <FormDescription>Minimum similarity score (0–100).</FormDescription>
              <FormControl>
                <Input type="number" min={0} max={100} value={threshold} disabled={!useTM} className="h-8 text-xs" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setThreshold(e.target.value)} />
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
}`,...B.parameters?.docs?.source}}},V=[`BasicField`,`FieldWithError`,`FieldWithModifiedIndicator`,`DisabledField`,`FieldWithHelp`,`Toggle`,`ToggleCompact`,`InputWithAction`,`InputWithMultipleActions`,`FieldGroup`,`CollapsibleGroup`,`ComposedConfigEditor`]}))();export{k as BasicField,z as CollapsibleGroup,B as ComposedConfigEditor,M as DisabledField,R as FieldGroup,A as FieldWithError,N as FieldWithHelp,j as FieldWithModifiedIndicator,I as InputWithAction,L as InputWithMultipleActions,P as Toggle,F as ToggleCompact,V as __namedExportsOrder,O as default};