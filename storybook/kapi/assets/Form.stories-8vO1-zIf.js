import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{c as a,i as o,n as s,o as c,s as l,t as u}from"./select-DTAn_x2M.js";import{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./form-VmYTRcmA.js";import{n as x,t as S}from"./button-IRW24Fu4.js";import{n as C,t as w}from"./input-0OLrV30t.js";var T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=e((()=>{r(),T=t(),b(),C(),x(),a(),E=n(),D={title:`Foundations/Form Primitives`,tags:[`autodocs`],parameters:{docs:{description:{component:`Composable form layout primitives. Use these to build any form UI — from simple config editors to complex schema-driven forms. Follows the shadcn naming convention (FormItem, FormLabel, etc.) without requiring react-hook-form.`}}}},O={name:`FormItem — Basic Field`,render:()=>{let[e,t]=(0,T.useState)(``);return(0,E.jsx)(`div`,{className:`max-w-xs`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`4Y8TX3rHqVp`,`Project Name`)}),(0,E.jsx)(h,{children:i(`1yIDsqy6noQ`,`A short identifier for your project.`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{value:e,placeholder:i(`4QUy826CdW`,`my-project`),onChange:e=>t(e.target.value)})})]})})}},k={name:`FormItem — With Validation Error`,render:()=>(0,E.jsx)(`div`,{className:`max-w-xs`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`hyLgTeUbWut`,`Email`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{defaultValue:`not-an-email`,className:`border-destructive`})}),(0,E.jsx)(f,{children:i(`jCyk0kH0Pzy`,`Please enter a valid email address.`)})]})})},A={name:`FormItem — Modified from Preset`,render:()=>(0,E.jsxs)(`div`,{className:`max-w-xs space-y-2`,children:[(0,E.jsxs)(g,{modified:!0,children:[(0,E.jsx)(v,{children:i(`2kdeSav6mEk`,`Threshold`)}),(0,E.jsx)(h,{children:i(`3sl1HbYv5LE`,`Minimum match score (0–100). Value differs from preset.`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{type:`number`,defaultValue:`85`})})]}),(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`6ntcmKZguUZ`,`Max Results`)}),(0,E.jsx)(h,{children:i(`9rLRJRDwuDR`,`Unmodified field for comparison.`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{type:`number`,defaultValue:`100`})})]})]})},j={name:`FormItem — Disabled`,render:()=>(0,E.jsx)(`div`,{className:`max-w-xs`,children:(0,E.jsxs)(g,{disabled:!0,children:[(0,E.jsx)(v,{disabled:!0,children:i(`if05Ssw6rwN`,`Output Path`)}),(0,E.jsx)(h,{children:i(`lCqQuFteb6D`,`Disabled when auto-detect is on.`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{defaultValue:`/output/report.html`,disabled:!0})})]})})},M={name:`FormItem — With Expandable Help`,render:()=>(0,E.jsx)(`div`,{className:`max-w-xs`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`9EZcOEMyBlD`,`Extraction Rules`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{defaultValue:`.*`,className:`font-mono`})}),(0,E.jsx)(p,{description:i(`h0ruBkJ7EzS`,`Regex patterns that determine which JSON paths are extracted for translation.`),notes:[`Patterns are matched against the full JSON path (e.g., $.messages[*].text).`,`Use .* to extract all string values.`],dependencies:[{property:`extractAll`,condition:`must be false`}]})]})})},N={name:`FormToggle — Boolean Field`,render:()=>{let[e,t]=(0,T.useState)(!0);return(0,E.jsxs)(`div`,{className:`max-w-xs space-y-2`,children:[(0,E.jsx)(m,{checked:e,onCheckedChange:t,label:i(`9NMi05bFf0m`,`Check Leading Whitespace`),description:i(`dbmU2nsp5HF`,`Flag text units where leading whitespace differs between source and target.`)}),(0,E.jsx)(m,{checked:!1,onCheckedChange:()=>{},label:i(`eBZc533LybD`,`Disabled Toggle`),description:i(`jZNvT710F53`,`This toggle is disabled.`),disabled:!0}),(0,E.jsx)(m,{checked:!0,onCheckedChange:()=>{},label:i(`aJuygEZCIjY`,`Modified Toggle`),description:i(`k8om81eNWsG`,`Value differs from active preset.`),modified:!0})]})}},P={name:`FormToggle — Compact Mode`,render:()=>{let[e,t]=(0,T.useState)(!0),[n,r]=(0,T.useState)(!1),[a,o]=(0,T.useState)(!0);return(0,E.jsxs)(`div`,{className:`max-w-xs space-y-0.5`,children:[(0,E.jsx)(m,{checked:e,onCheckedChange:t,label:i(`1OfMGl9deJQ`,`Leading whitespace`),compact:!0}),(0,E.jsx)(m,{checked:n,onCheckedChange:r,label:i(`3dyKIKeWP6S`,`Trailing whitespace`),compact:!0}),(0,E.jsx)(m,{checked:a,onCheckedChange:o,label:i(`43E4Kf1WqHT`,`Empty target`),compact:!0})]})}},F={name:`FormInputAction — Path Picker`,render:()=>(0,E.jsx)(`div`,{className:`max-w-sm`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`3Au5BDx2Ln0`,`Report File Path`)}),(0,E.jsx)(h,{children:i(`ikGWU5lQXWw`,`Path of the report file to generate.`)}),(0,E.jsxs)(d,{children:[(0,E.jsx)(w,{defaultValue:"${rootDir}/check-report.html",className:`flex-1 font-mono text-xs h-8`}),(0,E.jsx)(S,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:i(`6Uv0cbOJfHL`,`Browse`)})]})]})})},I={name:`FormInputAction — Multiple Actions`,render:()=>(0,E.jsx)(`div`,{className:`max-w-sm`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`6PAXWlCbGME`,`Memory File`)}),(0,E.jsxs)(d,{children:[(0,E.jsx)(w,{defaultValue:`/data/project.tmx`,className:`flex-1 font-mono text-xs h-8`}),(0,E.jsx)(S,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:i(`6Uv0cbOJfHL`,`Browse`)}),(0,E.jsx)(S,{variant:`ghost`,size:`sm`,className:`h-8 text-xs shrink-0`,children:i(`1VM9tuFMsF2`,`Clear`)})]})]})})},L={name:`FormFieldGroup — Non-Collapsible`,render:()=>(0,E.jsx)(`div`,{className:`max-w-xs`,children:(0,E.jsx)(_,{label:i(`ai6ubL5PhIR`,`General Settings`),children:(0,E.jsxs)(`div`,{className:`space-y-2`,children:[(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`7FAPLVXTDKm`,`Name`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{defaultValue:`My Project`})})]}),(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`3lWU1aDvO2P`,`Description`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{placeholder:i(`c8stXFE5q1q`,`Optional description...`)})})]})]})})})},R={name:`FormFieldGroup — Collapsible`,render:()=>(0,E.jsxs)(`div`,{className:`max-w-xs space-y-4`,children:[(0,E.jsx)(_,{label:i(`7npTEtMZjb0`,`Whitespace Checks`),collapsible:!0,children:(0,E.jsxs)(`div`,{className:`space-y-1`,children:[(0,E.jsx)(m,{checked:!0,onCheckedChange:()=>{},label:i(`1OfMGl9deJQ`,`Leading whitespace`),compact:!0}),(0,E.jsx)(m,{checked:!0,onCheckedChange:()=>{},label:i(`3dyKIKeWP6S`,`Trailing whitespace`),compact:!0}),(0,E.jsx)(m,{checked:!1,onCheckedChange:()=>{},label:i(`6lpKuSRgLdr`,`Double spaces`),compact:!0})]})}),(0,E.jsx)(_,{label:i(`2MFfUkhYNR6`,`Content Checks`),collapsible:!0,defaultCollapsed:!0,children:(0,E.jsxs)(`div`,{className:`space-y-1`,children:[(0,E.jsx)(m,{checked:!0,onCheckedChange:()=>{},label:i(`43E4Kf1WqHT`,`Empty target`),compact:!0}),(0,E.jsx)(m,{checked:!0,onCheckedChange:()=>{},label:i(`4rJzQhRTdtr`,`Target same as source`),compact:!0})]})}),(0,E.jsx)(_,{label:i(`gUkROzsRP3P`,`Output`),collapsible:!0,defaultCollapsed:!0,children:(0,E.jsx)(`div`,{className:`space-y-2`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`5GjD3gmPnhU`,`Report Path`)}),(0,E.jsxs)(d,{children:[(0,E.jsx)(w,{defaultValue:"${rootDir}/check-report.html",className:`flex-1 font-mono text-xs h-8`}),(0,E.jsx)(S,{variant:`outline`,size:`sm`,className:`h-8 text-xs shrink-0`,children:i(`6Uv0cbOJfHL`,`Browse`)})]})]})})})]})},z={name:`Composed — Mini Config Editor`,render:()=>{let[e,t]=(0,T.useState)(!1),[n,r]=(0,T.useState)(`95`),[a,f]=(0,T.useState)(`html`);return(0,E.jsxs)(`div`,{className:`max-w-sm space-y-4`,children:[(0,E.jsx)(_,{label:i(`50azxThwcK`,`Content Memory`),children:(0,E.jsxs)(`div`,{className:`space-y-2`,children:[(0,E.jsx)(m,{checked:e,onCheckedChange:t,label:i(`7Xk6TF3krbK`,`Use Content Memory`),description:i(`birJFqOdqV9`,`Leverage existing translations for pre-population.`)}),(0,E.jsxs)(g,{disabled:!e,children:[(0,E.jsx)(v,{disabled:!e,children:i(`6PAXWlCbGME`,`Memory File`)}),(0,E.jsxs)(d,{children:[(0,E.jsx)(w,{defaultValue:`/data/project.tmx`,disabled:!e,className:`flex-1 font-mono text-xs h-8`}),(0,E.jsx)(S,{variant:`outline`,size:`sm`,disabled:!e,className:`h-8 text-xs shrink-0`,children:i(`6Uv0cbOJfHL`,`Browse`)})]})]}),(0,E.jsxs)(g,{disabled:!e,children:[(0,E.jsx)(v,{disabled:!e,children:i(`hGECAcLpCGf`,`Match Threshold`)}),(0,E.jsx)(h,{children:i(`bPwqzsotEr3`,`Minimum similarity score (0–100).`)}),(0,E.jsx)(y,{children:(0,E.jsx)(w,{type:`number`,min:0,max:100,value:n,disabled:!e,className:`h-8 text-xs`,onChange:e=>r(e.target.value)})})]})]})}),(0,E.jsx)(_,{label:i(`gUkROzsRP3P`,`Output`),collapsible:!0,children:(0,E.jsx)(`div`,{className:`space-y-2`,children:(0,E.jsxs)(g,{children:[(0,E.jsx)(v,{children:i(`4KdoVZ43ht4`,`Report Format`)}),(0,E.jsx)(y,{children:(0,E.jsxs)(u,{value:a,onValueChange:f,children:[(0,E.jsx)(c,{className:`h-8 text-xs`,children:(0,E.jsx)(l,{})}),(0,E.jsxs)(s,{children:[(0,E.jsx)(o,{value:`html`,children:i(`fOvqy0zGD6V`,`HTML file`)}),(0,E.jsx)(o,{value:`tsv`,children:i(`l3r5p0PMJkD`,`Tab-delimited file`)}),(0,E.jsx)(o,{value:`xml`,children:i(`kGHQLDqmEcD`,`XML file`)})]})]})})]})})})]})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: "FormToggle — Boolean Field",
  render: () => {
    const [checked, setChecked] = useState(true);
    return <div className="max-w-xs space-y-2">
        <FormToggle checked={checked} onCheckedChange={setChecked} label="Check Leading Whitespace" description="Flag text units where leading whitespace differs between source and target." />
        <FormToggle checked={false} onCheckedChange={() => {}} label="Disabled Toggle" description="This toggle is disabled." disabled />
        <FormToggle checked={true} onCheckedChange={() => {}} label="Modified Toggle" description="Value differs from active preset." modified />
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "FormInputAction — Path Picker",
  render: () => <div className="max-w-sm">
      <FormItem>
        <FormLabel>Report File Path</FormLabel>
        <FormDescription>Path of the report file to generate.</FormDescription>
        <FormInputAction>
          <Input defaultValue="\${rootDir}/check-report.html" className="flex-1 font-mono text-xs h-8" />
          <Button variant="outline" size="sm" className="h-8 text-xs shrink-0">
            Browse
          </Button>
        </FormInputAction>
      </FormItem>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
              <Input defaultValue="\${rootDir}/check-report.html" className="flex-1 font-mono text-xs h-8" />
              <Button variant="outline" size="sm" className="h-8 text-xs shrink-0">
                Browse
              </Button>
            </FormInputAction>
          </FormItem>
        </div>
      </FormFieldGroup>
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`BasicField`,`FieldWithError`,`FieldWithModifiedIndicator`,`DisabledField`,`FieldWithHelp`,`Toggle`,`ToggleCompact`,`InputWithAction`,`InputWithMultipleActions`,`FieldGroup`,`CollapsibleGroup`,`ComposedConfigEditor`]})))()}V();export{O as BasicField,R as CollapsibleGroup,z as ComposedConfigEditor,j as DisabledField,L as FieldGroup,k as FieldWithError,M as FieldWithHelp,A as FieldWithModifiedIndicator,F as InputWithAction,I as InputWithMultipleActions,N as Toggle,P as ToggleCompact,B as __namedExportsOrder,D as default};