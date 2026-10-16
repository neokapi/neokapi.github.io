import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-BqsWhH8F.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DQa1Xtyr.js";import{n as a,t as o}from"./stepper-nrIvuwWR.js";function s(e){return e.map((e,t)=>({id:`step-${t+1}`,label:m[t],state:e}))}function c({dark:e,children:t}){return(0,f.jsx)(`div`,{className:e?`dark`:void 0,children:(0,f.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,f.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?i(`eoZVGebDkJB`,`Dark`):i(`6S0F3QN0sn4`,`Light`)}),t]})})}function l({states:e,initial:t}){let n=s(e),[r,a]=(0,d.useState)(t);return(0,f.jsx)(o,{"aria-label":i(`6XvMggOOyZb`,`How far this context reaches`),steps:n,value:r,onChange:a})}function u(){return(0,f.jsx)(`div`,{className:`flex flex-col gap-6`,children:h.map(({name:e,states:t})=>(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`mb-2 text-[11px] text-muted-foreground`,children:e}),(0,f.jsx)(l,{states:t})]},e))})}var d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{r(),d=t(),a(),f=n(),p={title:`Patterns/Stepper`,component:o,parameters:{layout:`padded`,docs:{description:{component:`A ladder of steps: done, current, or still to do. The connector up to the
current step takes the primary colour. Each step is a button, and the
selected one is the step whose detail the page shows, so a reader can click
ahead and read about a step the subject has not reached. Under 480 pixels
the steps stack with the connector down the start edge.`}}}},m=[`On this machine`,`Shared with your team`,`Managed on a server`],h=[{name:`First step current`,states:[`current`,`todo`,`todo`]},{name:`Second step current`,states:[`done`,`current`,`todo`]},{name:`Last step current`,states:[`done`,`done`,`current`]},{name:`Last step current, second skipped`,states:[`done`,`todo`,`current`]},{name:`Every step to do`,states:[`todo`,`todo`,`todo`]},{name:`Every step done`,states:[`done`,`done`,`done`]}],g={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsx)(c,{children:(0,f.jsx)(u,{})}),(0,f.jsx)(c,{dark:!0,children:(0,f.jsx)(u,{})})]})},_={render:()=>(0,f.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,f.jsx)(c,{children:(0,f.jsx)(l,{states:[`current`,`todo`,`todo`],initial:`step-3`})}),(0,f.jsx)(c,{dark:!0,children:(0,f.jsx)(l,{states:[`current`,`todo`,`todo`],initial:`step-3`})})]})},v={render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,f.jsx)(c,{dark:e,children:(0,f.jsx)(`div`,{className:`flex flex-wrap gap-8`,children:h.slice(0,3).map(({name:e,states:t})=>(0,f.jsxs)(`div`,{className:`w-64`,children:[(0,f.jsx)(`p`,{className:`mb-2 text-[11px] text-muted-foreground`,children:e}),(0,f.jsx)(l,{states:t})]},e))})},String(e)))})},y={render:()=>(0,f.jsx)(c,{children:(0,f.jsx)(o,{"aria-label":i(`gYn8y6O2jab`,`Release`),steps:[{id:`draft`,label:`Drafted by the assistant`,state:`done`},{id:`review`,label:`Reviewed by a person who owns the voice profile`,state:`current`},{id:`publish`,label:`Published`,state:`todo`}]})})},b=[`States`,`ClickedAhead`,`Stacked`,`LongLabels`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Panel>
        <Combinations />
      </Panel>
      <Panel dark>
        <Combinations />
      </Panel>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Every combination of states, in both themes.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Panel>
        <Live states={["current", "todo", "todo"]} initial="step-3" />
      </Panel>
      <Panel dark>
        <Live states={["current", "todo", "todo"]} initial="step-3" />
      </Panel>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`The reader has clicked ahead: the third step is selected while the first is current.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <div className="flex flex-wrap gap-8">
            {COMBINATIONS.slice(0, 3).map(({
          name,
          states
        }) => <div key={name} className="w-64">
                <p className="mb-2 text-[11px] text-muted-foreground">{name}</p>
                <Live states={states} />
              </div>)}
          </div>
        </Panel>)}
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Narrower than 480 pixels, the steps stack with the connector down the start edge.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Panel>
      <Stepper aria-label="Release" steps={[{
      id: "draft",
      label: "Drafted by the assistant",
      state: "done"
    }, {
      id: "review",
      label: "Reviewed by a person who owns the voice profile",
      state: "current"
    }, {
      id: "publish",
      label: "Published",
      state: "todo"
    }]} />
    </Panel>
}`,...y.parameters?.docs?.source},description:{story:`A long name wraps under its dot rather than pushing the next step aside.`,...y.parameters?.docs?.description}}}})))()}x();export{_ as ClickedAhead,y as LongLabels,v as Stacked,g as States,b as __namedExportsOrder,p as default};