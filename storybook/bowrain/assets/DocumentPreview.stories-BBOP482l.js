import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./DocumentPreview-CwD7ibB8.js";import{N as i,u as a}from"./fixtures-CwEJAmTf.js";import{n as o,r as s,t as c}from"./decorators-CsiAXhsC.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),a(),o(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Editor/Formatting/DocumentPreview`,component:r,tags:[`autodocs`],decorators:[s,e=>(0,l.jsx)(`div`,{style:{width:`100%`,height:500},children:(0,l.jsx)(e,{})})],args:{projectId:`proj-demo-1`,itemName:`messages.json`,targetLocale:`fr-FR`,onBlockSelect:u(),blocks:i}},f={},p={args:{selectedBlockId:`blk-2`}},m={args:{previewContentMode:`source`,selectedBlockId:`blk-1`}},h={args:{previewContentMode:`target`,selectedBlockId:`blk-1`}},g={args:{previewContentMode:`pseudo`,selectedBlockId:`blk-1`}},_={args:{selectedBlockId:`blk-2`,spacerHeight:400,onSpacerPosition:u(),onContentHeight:u()},decorators:[s,e=>(0,l.jsx)(`div`,{style:{width:`100%`,height:`auto`,minHeight:600},children:(0,l.jsx)(e,{})})]},v={args:{selectedBlockId:`blk-1`},decorators:[c(i,{renderDocumentPreview:async()=>`<!DOCTYPE html><html><body><div data-kat-preview="generic" style="font-family: monospace; font-size: 13px;"><p><kat-block id="blk-1">Welcome to Neokapi</kat-block></p></div></body></html>`})]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source},description:{story:`Default preview — source content mode, no block selected`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    selectedBlockId: "blk-2"
  }
}`,...p.parameters?.docs?.source},description:{story:`Preview with a selected block highlighted`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    previewContentMode: "source",
    selectedBlockId: "blk-1"
  }
}`,...m.parameters?.docs?.source},description:{story:`Controlled source mode via prop`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    previewContentMode: "target",
    selectedBlockId: "blk-1"
  }
}`,...h.parameters?.docs?.source},description:{story:`Controlled target mode via prop`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    previewContentMode: "pseudo",
    selectedBlockId: "blk-1"
  }
}`,...g.parameters?.docs?.source},description:{story:`Pseudo mode — source text rendered with accent mapping, no server action needed`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    selectedBlockId: "blk-2",
    spacerHeight: 400,
    onSpacerPosition: fn(),
    onContentHeight: fn()
  },
  decorators: [withProviders, Story => <div style={{
    width: "100%",
    height: "auto",
    minHeight: 600
  }}>
        <Story />
      </div>]
}`,..._.parameters?.docs?.source},description:{story:`Inline mode with spacer height — used inside VisualEditorLayout`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    selectedBlockId: "blk-1"
  },
  decorators: [createProvidersDecorator(sampleBlocks, {
    renderDocumentPreview: async () => '<!DOCTYPE html><html><body><div data-kat-preview="generic" style="font-family: monospace; font-size: 13px;"><p><kat-block id="blk-1">Welcome to Neokapi</kat-block></p></div></body></html>'
  })]
}`,...v.parameters?.docs?.source},description:{story:`No reader supplied a preview for the item, so the server answers with its
fallback listing of blocks. The preview reads that marker and renders the
content model itself instead of framing the listing in an iframe.`,...v.parameters?.docs?.description}}},y=[`Default`,`WithSelectedBlock`,`SourceMode`,`TargetMode`,`PseudoMode`,`InlineMode`,`ContentModelFallback`]})))()}b();export{v as ContentModelFallback,f as Default,_ as InlineMode,g as PseudoMode,m as SourceMode,h as TargetMode,p as WithSelectedBlock,y as __namedExportsOrder,d as default};