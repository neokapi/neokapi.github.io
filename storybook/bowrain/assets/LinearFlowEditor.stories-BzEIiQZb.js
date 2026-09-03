import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{n as i,t as a}from"./flow-editor-BPwvx8eZ.js";import{c as o,t as s}from"./card-CGQ31ekK.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=[{name:`recycle`,display_name:`Recycle`,description:`Reuse approved wording from content memory.`,has_schema:!1},{name:`translate`,display_name:`Translate`,description:`Translate with an AI provider.`,has_schema:!0},{name:`qa`,display_name:`Quality Check`,description:`Check the result against the rules.`,has_schema:!1},{name:`voice-vocab-check`,display_name:`Voice check`,description:`Hold the wording to the voice profile.`,has_schema:!1},{name:`word-count`,display_name:`Word count`,description:`Count words and segments.`,has_schema:!1}],d={title:`Translate options`,type:`object`,properties:{provider:{type:`string`,title:`Provider`,description:`Which provider handles the translation.`,options:[{value:`openai`,label:`OpenAI`},{value:`anthropic`,label:`Anthropic`}]},temperature:{type:`number`,title:`Temperature`,minimum:0,maximum:1,default:.2}}},f=e=>e===`translate`?d:null,p={title:`Flow editor/LinearFlowEditor`,component:i,tags:[`autodocs`],parameters:{layout:`fullscreen`,docs:{description:{component:`The shared linear flow editor: a flow is an ordered pipeline of tool steps, edited as a reorderable list rather than a node canvas. It is surface-agnostic, so kapi and bowrain pass their own flow objects and tool lists.`}}},args:{onChange:l(),tools:u},render:e=>(0,c.jsx)(`div`,{style:{height:640},children:(0,c.jsx)(i,{...e})})},m={args:{flowName:`new-flow`,flow:{steps:[]},templateLibrary:(0,c.jsx)(s,{className:`p-4 text-sm text-muted-foreground`,children:r(`3Xcatqg3S7J`,`Template library (provided by the host)`)})}},h={args:{flowName:`word-count`,flow:{description:`Count the words in the source.`,steps:[{tool:`word-count`}]}}},g={args:{flowName:`translate-and-qa`,flow:{description:`Recycle, translate with AI, then run the quality checks.`,steps:[{tool:`recycle`},{tool:`translate`},{tool:`qa`}]},onGetSchema:f,onRun:l()}},_={args:{flowName:`translate-and-qa`,flow:{description:`The project's default flow.`,steps:[{tool:`recycle`},{tool:`translate`},{tool:`qa`}]},isDefault:!0,onToggleDefault:l(),onRename:l(),onGetSchema:f,onRun:l()}},v={args:{flowName:`translate-and-qa`,flow:{steps:[{tool:`translate`,config:{provider:`anthropic`}},{tool:`qa`}]},onGetSchema:f}},y={args:{flowName:`built-in-convert`,flow:{description:`A built-in flow. Copy it to edit.`,steps:[{tool:`recycle`},{tool:`translate`}]},readOnly:!0,onRun:l()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "new-flow",
    flow: {
      steps: []
    },
    templateLibrary: <Card className="p-4 text-sm text-muted-foreground">
        Template library (provided by the host)
      </Card>
  }
}`,...m.parameters?.docs?.source},description:{story:`A new flow: the template slot plus a blank-start "Add step".`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "word-count",
    flow: {
      description: "Count the words in the source.",
      steps: [{
        tool: "word-count"
      }]
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "translate-and-qa",
    flow: {
      description: "Recycle, translate with AI, then run the quality checks.",
      steps: [{
        tool: "recycle"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    onGetSchema: getSchema,
    onRun: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "translate-and-qa",
    flow: {
      description: "The project's default flow.",
      steps: [{
        tool: "recycle"
      }, {
        tool: "translate"
      }, {
        tool: "qa"
      }]
    },
    isDefault: true,
    onToggleDefault: fn(),
    onRename: fn(),
    onGetSchema: getSchema,
    onRun: fn()
  }
}`,..._.parameters?.docs?.source},description:{story:`The Default toggle on, with the name editable and Run wired.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "translate-and-qa",
    flow: {
      steps: [{
        tool: "translate",
        config: {
          provider: "anthropic"
        }
      }, {
        tool: "qa"
      }]
    },
    onGetSchema: getSchema
  }
}`,...v.parameters?.docs?.source},description:{story:`A step whose tool has options: the row gains an Options control to expand the form.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    flowName: "built-in-convert",
    flow: {
      description: "A built-in flow. Copy it to edit.",
      steps: [{
        tool: "recycle"
      }, {
        tool: "translate"
      }]
    },
    readOnly: true,
    onRun: fn()
  }
}`,...y.parameters?.docs?.source},description:{story:`A built-in flow: read-only, no add/remove/reorder.`,...y.parameters?.docs?.description}}},b=[`Empty`,`SingleStep`,`MultiStep`,`DefaultOn`,`StepWithOptions`,`ReadOnly`]})))()}x();export{_ as DefaultOn,m as Empty,g as MultiStep,y as ReadOnly,h as SingleStep,v as StepWithOptions,b as __namedExportsOrder,p as default};