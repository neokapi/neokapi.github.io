import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r}from"./runtime-DfFF6Hu8.js";import{n as i,r as a,t as o}from"./coordinate-chip-CYwa6DqF.js";function s({dark:e,children:t}){return(0,c.jsx)(`div`,{className:e?`dark`:void 0,children:(0,c.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,c.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?`Dark`:`Light`}),t]})})}var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),c=t(),l={title:`Foundations/CoordinateChip`,component:i,parameters:{layout:`padded`,docs:{description:{component:`A coordinate is an address: product, channel, brand, language. Each axis gets
a hue and an icon, and its name is spelt out in the tooltip and the
accessible name so nobody has to learn the colours.`}}},args:{axis:`channel`,value:`reference`}},u=[{axis:`product`,value:`kapi`},{axis:`channel`,value:`reference`},{axis:`brand`,value:`Bowrain`},{axis:`language`,value:`fr-FR`},{axis:`region`,value:`EMEA`}],d={render:()=>(0,c.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,c.jsx)(s,{dark:e,children:(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:u.map(e=>(0,c.jsx)(i,{axis:e.axis,value:e.value},e.axis))})},String(e)))})},f={name:`A point`,render:()=>(0,c.jsx)(`div`,{className:`flex items-center gap-2 rounded-lg border p-3`,children:n(`eY42hWzDOQN`,`{=m0}docs/reference{/=m0} {=m1} {=m2} {/=m1}`,{"=m0":(0,c.jsx)(`span`,{className:`text-sm font-medium`,children:`docs/reference`}),"=m2":o.map(e=>(0,c.jsx)(i,{axis:e,value:{product:`kapi`,channel:`reference`,brand:`Bowrain`,language:`nb-NO`}[e]},e)),"=m1":(0,c.jsx)(`span`,{className:`flex flex-wrap gap-1.5`,children:o.map(e=>(0,c.jsx)(i,{axis:e,value:{product:`kapi`,channel:`reference`,brand:`Bowrain`,language:`nb-NO`}[e]},e))})})})},p={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,c.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`6NyGkve5nna`,`{=m0}sm{/=m0} {=m1} {=m2}`,{"=m0":(0,c.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`sm`}),"=m1":(0,c.jsx)(i,{axis:`channel`,value:`reference`}),"=m2":(0,c.jsx)(i,{axis:`brand`,value:`Bowrain`})})}),(0,c.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`6L88D6fN535`,`{=m0}md{/=m0} {=m1} {=m2}`,{"=m0":(0,c.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`md`}),"=m1":(0,c.jsx)(i,{axis:`channel`,value:`reference`,size:`md`}),"=m2":(0,c.jsx)(i,{axis:`brand`,value:`Bowrain`,size:`md`})})}),(0,c.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`4u4wvv5k4Vq`,`{=m0}remove{/=m0} {=m1} {=m2}`,{"=m0":(0,c.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`remove`}),"=m1":(0,c.jsx)(i,{axis:`product`,value:`kapi`,onRemove:()=>{}}),"=m2":(0,c.jsx)(i,{axis:`language`,value:`pt-BR`,size:`md`,onRemove:()=>{}})})})]})},m={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,c.jsx)(i,{axis:`brand`,value:`Bowrain`}),(0,c.jsx)(i,{axis:`brand`,value:`bowrain-hq`}),(0,c.jsx)(i,{axis:`language`,value:`zh-Hant`}),(0,c.jsx)(i,{axis:`language`,value:`sr-Latn-RS`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <div className="flex flex-wrap items-center gap-1.5">
            {SAMPLE.map(c => <CoordinateChip key={c.axis} axis={c.axis} value={c.value} />)}
          </div>
        </Panel>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Every axis, plus one a recipe invented, in both themes.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "A point",
  render: () => <div className="flex items-center gap-2 rounded-lg border p-3">
      <span className="text-sm font-medium">docs/reference</span>
      <span className="flex flex-wrap gap-1.5">
        {AXIS_IDS.map(axis => <CoordinateChip key={axis} axis={axis} value={{
        product: "kapi",
        channel: "reference",
        brand: "Bowrain",
        language: "nb-NO"
      }[axis]} />)}
      </span>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`A whole point, the way a collection row shows where its content sits.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-16 text-xs text-muted-foreground">sm</span>
        <CoordinateChip axis="channel" value="reference" />
        <CoordinateChip axis="brand" value="Bowrain" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-16 text-xs text-muted-foreground">md</span>
        <CoordinateChip axis="channel" value="reference" size="md" />
        <CoordinateChip axis="brand" value="Bowrain" size="md" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-16 text-xs text-muted-foreground">remove</span>
        <CoordinateChip axis="product" value="kapi" onRemove={() => {}} />
        <CoordinateChip axis="language" value="pt-BR" size="md" onRemove={() => {}} />
      </div>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`The larger size, and the removable form a filter bar uses.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-1.5">
      <CoordinateChip axis="brand" value="Bowrain" />
      <CoordinateChip axis="brand" value="bowrain-hq" />
      <CoordinateChip axis="language" value="zh-Hant" />
      <CoordinateChip axis="language" value="sr-Latn-RS" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Casing survives: a value is an identifier, not a sentence.`,...m.parameters?.docs?.description}}},h=[`Axes`,`APoint`,`SizesAndRemoval`,`CasingIsKept`]})))()}g();export{f as APoint,d as Axes,m as CasingIsKept,p as SizesAndRemoval,h as __namedExportsOrder,l as default};