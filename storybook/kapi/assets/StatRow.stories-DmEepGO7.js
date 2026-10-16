import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BlIEEezU.js";import{t as n}from"./jsx-runtime-BB9-612F.js";import{r,t as i}from"./runtime-CSk461YI.js";import{n as a,t as o}from"./stat-row-DKgjx_nW.js";function s({dark:e,children:t}){return(0,l.jsx)(`div`,{className:e?`dark`:void 0,children:(0,l.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,l.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?i(`eoZVGebDkJB`,`Dark`):i(`6S0F3QN0sn4`,`Light`)}),t]})})}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),c=t(),a(),l=n(),u={title:`Patterns/StatRow`,component:o,parameters:{layout:`padded`,docs:{description:{component:`A row of labelled counts, the second region of an overview page. Each
number is a count with a label, and the one count that waits for a person
takes the warning ink.`}}}},d=[{value:4,label:`projects`},{value:61,label:`rules`},{value:11,label:`suggestions`},{value:1,label:`needs you`,tone:`warning`}],f={args:{items:d.map(e=>({...e,tone:void 0}))}},p={name:`With a warning count`,render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,l.jsx)(s,{dark:e,children:(0,l.jsxs)(`div`,{className:`flex flex-col gap-5`,children:[(0,l.jsx)(o,{items:d}),(0,l.jsx)(o,{items:[{value:4,label:`projects`},{value:61,label:`rules`},{value:0,label:`suggestions`,tone:`muted`},{value:0,label:`need you`,tone:`warning`}]})]})},String(e)))})},m={name:`Many on a narrow pane`,render:()=>(0,l.jsx)(`div`,{className:`w-[300px] rounded-lg border p-4`,children:(0,l.jsx)(o,{items:[{value:12,label:`projects`},{value:1204,label:`rules`},{value:87,label:`suggestions`},{value:3,label:`need you`,tone:`warning`},{value:412,label:`terms`},{value:9,label:`voice profiles`},{value:26,label:`new this week`,tone:`muted`}]})})},h={render:function(){let[e,t]=(0,c.useState)(null);return(0,l.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,l.jsx)(o,{items:[{value:4,label:`projects`,onClick:()=>t(`projects`)},{value:61,label:`rules`,onClick:()=>t(`rules`)},{value:11,label:`suggestions`,hint:`Recorded by your assistants and not yet kept`,onClick:()=>t(`suggestions`)},{value:1,label:`needs you`,tone:`warning`,hint:`Two assistants disagree`,onClick:()=>t(`needs you`)}]}),(0,l.jsx)(`p`,{className:`text-[11px] text-muted-foreground`,children:e?`Opened ${e}`:i(`YLdgxtzIOV`,`Choose a count`)})]})}},g=[`Default`,`WithAWarningCount`,`ManyOnANarrowPane`,`Clickable`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: OVERVIEW.map(item => ({
      ...item,
      tone: undefined
    }))
  }
}`,...f.parameters?.docs?.source},description:{story:`The overview's four counts.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With a warning count",
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <div className="flex flex-col gap-5">
            <StatRow items={OVERVIEW} />
            <StatRow items={[{
          value: 4,
          label: "projects"
        }, {
          value: 61,
          label: "rules"
        }, {
          value: 0,
          label: "suggestions",
          tone: "muted"
        }, {
          value: 0,
          label: "need you",
          tone: "warning"
        }]} />
          </div>
        </Panel>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`One count needs a person, in both themes. A zero stays in the row as 0.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Many on a narrow pane",
  render: () => <div className="w-[300px] rounded-lg border p-4">
      <StatRow items={[{
      value: 12,
      label: "projects"
    }, {
      value: 1204,
      label: "rules"
    }, {
      value: 87,
      label: "suggestions"
    }, {
      value: 3,
      label: "need you",
      tone: "warning"
    }, {
      value: 412,
      label: "terms"
    }, {
      value: 9,
      label: "voice profiles"
    }, {
      value: 26,
      label: "new this week",
      tone: "muted"
    }]} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Many counts in a narrow pane wrap onto further lines.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function ClickableStory() {
    const [opened, setOpened] = useState<string | null>(null);
    return <div className="flex flex-col gap-4">
        <StatRow items={[{
        value: 4,
        label: "projects",
        onClick: () => setOpened("projects")
      }, {
        value: 61,
        label: "rules",
        onClick: () => setOpened("rules")
      }, {
        value: 11,
        label: "suggestions",
        hint: "Recorded by your assistants and not yet kept",
        onClick: () => setOpened("suggestions")
      }, {
        value: 1,
        label: "needs you",
        tone: "warning",
        hint: "Two assistants disagree",
        onClick: () => setOpened("needs you")
      }]} />
        <p className="text-[11px] text-muted-foreground">
          {opened ? \`Opened \${opened}\` : "Choose a count"}
        </p>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`Counts that lead somewhere are buttons; a hint says more on hover or focus.`,...h.parameters?.docs?.description}}}})))()}_();export{h as Clickable,f as Default,m as ManyOnANarrowPane,p as WithAWarningCount,g as __namedExportsOrder,u as default};