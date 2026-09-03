import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{c as n,n as r,s as i,t as a}from"./FormatPreview-BltR8hnN.js";function o(e,t){return{kind:`block`,id:`b:${e}`,name:e,translatable:!0,source:t}}function s(e,t=`json`){return{format:t,stats:{layers:0,groups:0,blocks:e.length,data:0,media:0,runs:0},root:e}}var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),r(),c=t(),l=e=>[{pcOpen:{id:`b`,type:`fmt:bold`,data:`<b>`}},{text:e},{pcClose:{id:`b`,type:`fmt:bold`,data:`</b>`}}],u=e=>[{pcOpen:{id:`c`,type:`fmt:code`,data:`<code>`}},{text:e},{pcClose:{id:`c`,type:`fmt:code`,data:`</code>`}}],d={title:`Preview/Inline codes`,parameters:{docs:{description:{component:`How the structured preview reads a block's inline codes: presentational codes render as their real element, opaque codes as chips, and overlays layer over the styled text.`}}}},f={render:()=>(0,c.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,c.jsx)(i,{tree:s([o(`promo.headline`,[{text:`Big `},...l(`Sale`),{text:` now`}])])})})},p={render:()=>(0,c.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,c.jsx)(i,{tree:s([o(`intro`,[{text:`Fired when an `},...u(`order.created`),{text:` event occurs.`}])])})})},m={render:()=>(0,c.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,c.jsx)(i,{tree:s([o(`greeting`,[{text:`Welcome back, `},{ph:{id:`1`,type:`code:variable`,data:`{{user}}`,equiv:`{{user}}`}},{text:`.`}])])})})},h={render:()=>(0,c.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,c.jsx)(i,{tree:s([o(`address`,[{text:`First line`},{ph:{id:`1`,type:`struct:break`,data:`<br/>`}},{text:`Second line`}])])})})},g={render:()=>(0,c.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,c.jsx)(i,{tree:{format:`json`,stats:{layers:0,groups:0,blocks:1,data:0,media:0,runs:3},root:[{kind:`block`,id:`b1`,name:`promo.headline`,translatable:!0,source:[{pcOpen:{id:`1`,type:`fmt:bold`,data:`<b>`}},{text:`Big Sale now`},{pcClose:{id:`1`,type:`fmt:bold`,data:`</b>`}}],overlays:[{type:`term`,side:`source`,spans:[{id:`t1`,range:{kind:`range`,start:{run:1,offset:4},end:{run:1,offset:8}},text:`Sale`}]}]}]}})})},_={render:()=>(0,c.jsx)(`div`,{className:`max-w-2xl p-4`,children:(0,c.jsx)(i,{tree:s([o(`events.order_created`,[{text:`Sent when an `},...u(`order.created`),{text:` event fires.`}]),o(`events.order_refunded`,[{text:`Sent when an `},...u(`order.refunded`),{text:` event fires.`}]),o(`events.subscription_renewed`,[{text:`Sent when a `},...u(`subscription.renewed`),{text:` event fires.`}])])})})},v={render:()=>(0,c.jsx)(`div`,{className:`max-w-xl p-4`,children:(0,c.jsx)(a,{tree:s([o(`p1`,[{text:`Call `},...u(`kapi up`),{text:` to converge, then review the `},...l(`pending`),{text:` changes.`}])],`markdown`),reducedMotion:!0})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl p-4">
      <KeyedTable tree={tree([block("promo.headline", [{
      text: "Big "
    }, ...bold("Sale"), {
      text: " now"
    }])])} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:`A bold pair reads as bold, not as [B]…/B chips around plain text.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl p-4">
      <KeyedTable tree={tree([block("intro", [{
      text: "Fired when an "
    }, ...code("order.created"), {
      text: " event occurs."
    }])])} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`A code pair reads as monospace, the way the faithful document render shows it.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl p-4">
      <KeyedTable tree={tree([block("greeting", [{
      text: "Welcome back, "
    }, {
      ph: {
        id: "1",
        type: "code:variable",
        data: "{{user}}",
        equiv: "{{user}}"
      }
    }, {
      text: "."
    }])])} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`A placeholder stands for a value with no rendered form, so it stays a chip.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl p-4">
      <KeyedTable tree={tree([block("address", [{
      text: "First line"
    }, {
      ph: {
        id: "1",
        type: "struct:break",
        data: "<br/>"
      }
    }, {
      text: "Second line"
    }])])} />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`A line break ends the line, with a chip so the code stays visible.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const runs: Run[] = [{
      pcOpen: {
        id: "1",
        type: "fmt:bold",
        data: "<b>"
      }
    }, {
      text: "Big Sale now"
    }, {
      pcClose: {
        id: "1",
        type: "fmt:bold",
        data: "</b>"
      }
    }];
    const t = {
      format: "json",
      stats: {
        layers: 0,
        groups: 0,
        blocks: 1,
        data: 0,
        media: 0,
        runs: 3
      },
      root: [{
        kind: "block",
        id: "b1",
        name: "promo.headline",
        translatable: true,
        source: runs,
        overlays: [{
          type: "term",
          side: "source",
          spans: [{
            id: "t1",
            range: {
              kind: "range",
              start: {
                run: 1,
                offset: 4
              },
              end: {
                run: 1,
                offset: 8
              }
            },
            text: "Sale"
          }]
        }]
      }]
    } as unknown as ContentTree;
    return <div className="max-w-xl p-4">
        <KeyedTable tree={t} />
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`An overlay (a term highlight) layers over text inside a bold span.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl p-4">
      <KeyedTable tree={tree([block("events.order_created", [{
      text: "Sent when an "
    }, ...code("order.created"), {
      text: " event fires."
    }]), block("events.order_refunded", [{
      text: "Sent when an "
    }, ...code("order.refunded"), {
      text: " event fires."
    }]), block("events.subscription_renewed", [{
      text: "Sent when a "
    }, ...code("subscription.renewed"), {
      text: " event fires."
    }])])} />
    </div>
}`,..._.parameters?.docs?.source},description:{story:`The API-reference shape: an event catalog whose ids read as monospace code,
 not as [CODE]…/code chips.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl p-4">
      <FormatPreview tree={tree([block("p1", [{
      text: "Call "
    }, ...code("kapi up"), {
      text: " to converge, then review the "
    }, ...bold("pending"), {
      text: " changes."
    }])], "markdown")} reducedMotion />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`A prose block read as a document, with bold and monospace in flow.`,...v.parameters?.docs?.description}}},y=[`BoldPair`,`CodePair`,`Placeholder`,`Break`,`OverlayOverStyled`,`ApiReferenceTable`,`InDocument`]})))()}b();export{_ as ApiReferenceTable,f as BoldPair,h as Break,p as CodePair,v as InDocument,g as OverlayOverStyled,m as Placeholder,y as __namedExportsOrder,d as default};