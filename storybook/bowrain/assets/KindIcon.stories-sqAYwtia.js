import{n as e}from"./rolldown-runtime-2s6bX4vc.js";import{t}from"./jsx-runtime-BxfXuubT.js";import{r as n,t as r}from"./runtime-ueGu4ihF.js";import{i,n as a,r as o,t as s}from"./kind-icon-DDBVLURQ.js";function c({dark:e,children:t}){return(0,l.jsx)(`div`,{className:e?`dark`:void 0,children:(0,l.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,l.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?r(`eoZVGebDkJB`,`Dark`):r(`6S0F3QN0sn4`,`Light`)}),t]})})}var l,u,d,f;function p(){return(p=e((()=>{n(),o(),l=t(),u={title:`Patterns/KindIcon`,component:a,parameters:{layout:`padded`,docs:{description:{component:`One icon per kind of thing a project's digest shows: the four suggestion
themes, a disagreement, an established rule, and drift away from one.
Muted, except the disagreement (warning) and the established rule (success).`}}},args:{kind:`name`}},d={name:`Every kind`,render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,l.jsx)(c,{dark:e,children:(0,l.jsx)(`ul`,{className:`flex flex-col gap-1.5 text-sm`,children:s.map(e=>(0,l.jsxs)(`li`,{className:`grid grid-cols-[20px_20px_minmax(0,1fr)_auto] items-center gap-2`,children:[(0,l.jsx)(a,{kind:e}),(0,l.jsx)(a,{kind:e,size:`md`}),(0,l.jsx)(`span`,{children:i(e)}),(0,l.jsx)(`code`,{className:`font-mono text-[10px] text-muted-foreground`,children:e})]},e))})},String(e)))})},f=[`EveryKind`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Every kind",
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <ul className="flex flex-col gap-1.5 text-sm">
            {DIGEST_KINDS.map(kind => <li key={kind} className="grid grid-cols-[20px_20px_minmax(0,1fr)_auto] items-center gap-2">
                <KindIcon kind={kind} />
                <KindIcon kind={kind} size="md" />
                <span>{kindLabel(kind)}</span>
                <code className="font-mono text-[10px] text-muted-foreground">{kind}</code>
              </li>)}
          </ul>
        </Panel>)}
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Every kind with its label beside it, in both sizes and both themes.`,...d.parameters?.docs?.description}}}})))()}p();export{d as EveryKind,f as __namedExportsOrder,u as default};