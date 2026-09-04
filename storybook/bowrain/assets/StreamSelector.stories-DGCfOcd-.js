import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{an as n,in as r}from"./iframe-Cd_-OgZL.js";import{a as i,b as a,c as o,o as s}from"./fixtures-LWDNhg3K.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),s(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Streams/StreamSelector`,component:r,tags:[`autodocs`],decorators:[e=>(0,c.jsx)(`div`,{style:{padding:24},children:(0,c.jsx)(e,{})})]},d={args:{streams:a,activeStream:o,onStreamChange:l(),onCreateStream:l(),onEditStream:l(),onMergeStream:l(),onDiffStream:l(),onDeleteStream:l()}},f={args:{streams:a,activeStream:i,onStreamChange:l(),onCreateStream:l(),onEditStream:l(),onMergeStream:l(),onDiffStream:l(),onDeleteStream:l()}},p={args:{streams:a,activeStream:o,defaultStream:`main`,onStreamChange:l(),onCreateStream:l()}},m={args:{streams:a,activeStream:i,defaultStream:`feature/translations`,onStreamChange:l(),onCreateStream:l(),onEditStream:l(),onMergeStream:l(),onDiffStream:l(),onDeleteStream:l()}},h={args:{streams:a,activeStream:i,defaultStream:`main`,onStreamChange:l(),onCreateStream:l(),onEditStream:l(),onMergeStream:l(),onDiffStream:l(),onDeleteStream:l()}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    streams: sampleStreams,
    activeStream: mainStream,
    onStreamChange: fn(),
    onCreateStream: fn(),
    onEditStream: fn(),
    onMergeStream: fn(),
    onDiffStream: fn(),
    onDeleteStream: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    streams: sampleStreams,
    activeStream: featureStream,
    onStreamChange: fn(),
    onCreateStream: fn(),
    onEditStream: fn(),
    onMergeStream: fn(),
    onDiffStream: fn(),
    onDeleteStream: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    streams: sampleStreams,
    activeStream: mainStream,
    defaultStream: "main",
    onStreamChange: fn(),
    onCreateStream: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`Default stream is "main" (typical case).`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    streams: sampleStreams,
    activeStream: featureStream,
    defaultStream: "feature/translations",
    onStreamChange: fn(),
    onCreateStream: fn(),
    onEditStream: fn(),
    onMergeStream: fn(),
    onDiffStream: fn(),
    onDeleteStream: fn()
  }
}`,...m.parameters?.docs?.source},description:{story:`Default stream is a non-main stream (e.g., first push was to "feature/translations").`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    streams: sampleStreams,
    activeStream: featureStream,
    defaultStream: "main",
    onStreamChange: fn(),
    onCreateStream: fn(),
    onEditStream: fn(),
    onMergeStream: fn(),
    onDiffStream: fn(),
    onDeleteStream: fn()
  }
}`,...h.parameters?.docs?.source},description:{story:`Active stream differs from the default — both badges visible.`,...h.parameters?.docs?.description}}},g=[`OnMain`,`OnFeatureBranch`,`DefaultStreamMain`,`DefaultStreamNonMain`,`ActiveDiffersFromDefault`]})))()}_();export{h as ActiveDiffersFromDefault,p as DefaultStreamMain,m as DefaultStreamNonMain,f as OnFeatureBranch,d as OnMain,g as __namedExportsOrder,u as default};