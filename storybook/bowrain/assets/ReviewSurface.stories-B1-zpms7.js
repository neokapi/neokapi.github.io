import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{Fn as n,Pn as r}from"./iframe-CpudOsx6.js";import{L as i,N as a,l as o}from"./fixtures-BAElecsM.js";import{n as s,t as c}from"./decorators-oVJNzxUk.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s(),o(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Review/ReviewSurface`,component:r,parameters:{layout:`fullscreen`},decorators:[c(a),e=>(0,l.jsx)(`div`,{className:`flex h-[42rem] flex-col p-4`,children:(0,l.jsx)(e,{})})],args:{project:i,fileName:`messages.json`,onBack:u()}},f={},p={decorators:[c(a,{runFileQACheck:async()=>[{blockId:`blk-1`,issues:[{type:`spacing`,severity:`warning`,message:`Trailing double space`},{type:`placeholder`,severity:`error`,message:`Missing {count} in the target`}]}]})]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source},description:{story:`The document, read on the target locale.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  decorators: [createProvidersDecorator(sampleBlocks, {
    runFileQACheck: async () => [{
      blockId: "blk-1",
      issues: [{
        type: "spacing",
        severity: "warning",
        message: "Trailing double space"
      }, {
        type: "placeholder",
        severity: "error",
        message: "Missing {count} in the target"
      }]
    }]
  })]
}`,...p.parameters?.docs?.source},description:{story:`With QA findings loaded, the flagged blocks are tinted where they sit.`,...p.parameters?.docs?.description}}},m=[`Default`,`WithFindings`]})))()}h();export{f as Default,p as WithFindings,m as __namedExportsOrder,d as default};