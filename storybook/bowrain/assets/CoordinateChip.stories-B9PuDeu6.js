import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,r,t as i}from"./runtime-CHF36ai7.js";import{n as a,r as o,t as s}from"./coordinate-chip-C3tIqZXv.js";function c({dark:e,children:t}){return(0,l.jsx)(`div`,{className:e?`dark`:void 0,children:(0,l.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,l.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?i(`eoZVGebDkJB`,`Dark`):i(`6S0F3QN0sn4`,`Light`)}),t]})})}var l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),o(),l=t(),u={title:`Foundations/CoordinateChip`,component:a,parameters:{layout:`padded`,docs:{description:{component:`A coordinate is an address: product, channel, brand, language. Each axis gets
a hue and an icon, and its name is spelt out in the tooltip and the
accessible name so nobody has to learn the colours.`}}},args:{axis:`channel`,value:`reference`}},d=[{axis:`product`,value:`kapi`},{axis:`channel`,value:`reference`},{axis:`brand`,value:`Bowrain`},{axis:`language`,value:`fr-FR`},{axis:`region`,value:`EMEA`}],f={render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,l.jsx)(c,{dark:e,children:(0,l.jsx)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:d.map(e=>(0,l.jsx)(a,{axis:e.axis,value:e.value},e.axis))})},String(e)))})},p={name:`A point`,render:()=>(0,l.jsx)(`div`,{className:`flex items-center gap-2 rounded-lg border p-3`,children:n(`eY42hWzDOQN`,`{=m0}docs/reference{/=m0} {=m1} {=m2} {/=m1}`,{"=m0":(0,l.jsx)(`span`,{className:`text-sm font-medium`,children:`docs/reference`}),"=m2":s.map(e=>(0,l.jsx)(a,{axis:e,value:{product:`kapi`,channel:`reference`,brand:`Bowrain`,language:`nb-NO`}[e]},e)),"=m1":(0,l.jsx)(`span`,{className:`flex flex-wrap gap-1.5`,children:s.map(e=>(0,l.jsx)(a,{axis:e,value:{product:`kapi`,channel:`reference`,brand:`Bowrain`,language:`nb-NO`}[e]},e))})})})},m={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`6NyGkve5nna`,`{=m0}sm{/=m0} {=m1} {=m2}`,{"=m0":(0,l.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`sm`}),"=m1":(0,l.jsx)(a,{axis:`channel`,value:`reference`}),"=m2":(0,l.jsx)(a,{axis:`brand`,value:`Bowrain`})})}),(0,l.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`6L88D6fN535`,`{=m0}md{/=m0} {=m1} {=m2}`,{"=m0":(0,l.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`md`}),"=m1":(0,l.jsx)(a,{axis:`channel`,value:`reference`,size:`md`}),"=m2":(0,l.jsx)(a,{axis:`brand`,value:`Bowrain`,size:`md`})})}),(0,l.jsx)(`div`,{className:`flex items-center gap-2`,children:n(`4u4wvv5k4Vq`,`{=m0}remove{/=m0} {=m1} {=m2}`,{"=m0":(0,l.jsx)(`span`,{className:`w-16 text-xs text-muted-foreground`,children:`remove`}),"=m1":(0,l.jsx)(a,{axis:`product`,value:`kapi`,onRemove:()=>{}}),"=m2":(0,l.jsx)(a,{axis:`language`,value:`pt-BR`,size:`md`,onRemove:()=>{}})})})]})},h={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-wrap items-center gap-1.5`,children:[(0,l.jsx)(a,{axis:`brand`,value:`Bowrain`}),(0,l.jsx)(a,{axis:`brand`,value:`bowrain-hq`}),(0,l.jsx)(a,{axis:`language`,value:`zh-Hant`}),(0,l.jsx)(a,{axis:`language`,value:`sr-Latn-RS`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <div className="flex flex-wrap items-center gap-1.5">
            {SAMPLE.map(c => <CoordinateChip key={c.axis} axis={c.axis} value={c.value} />)}
          </div>
        </Panel>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Every axis, plus one a recipe invented, in both themes.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`A whole point, the way a collection row shows where its content sits.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`The larger size, and the removable form a filter bar uses.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-1.5">
      <CoordinateChip axis="brand" value="Bowrain" />
      <CoordinateChip axis="brand" value="bowrain-hq" />
      <CoordinateChip axis="language" value="zh-Hant" />
      <CoordinateChip axis="language" value="sr-Latn-RS" />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Casing survives: a value is an identifier, not a sentence.`,...h.parameters?.docs?.description}}},g=[`Axes`,`APoint`,`SizesAndRemoval`,`CasingIsKept`]})))()}_();export{p as APoint,f as Axes,h as CasingIsKept,m as SizesAndRemoval,g as __namedExportsOrder,u as default};