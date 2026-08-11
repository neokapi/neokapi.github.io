import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,t as i}from"./PluralTargetEditor-DGqrMi62.js";function a(e){return()=>{let[t,n]=(0,o.useState)(e);return(0,s.jsx)(i,{block:l,target:t,onChange:n})}}var o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{o=t(),r(),s=n(),c={title:`Editor/Plural/PluralTargetEditor`,component:i,tags:[`autodocs`],decorators:[e=>(0,s.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,s.jsx)(e,{})})],parameters:{docs:{description:{component:"Translator-facing editor for a single locale's target. When the source is a flat sentence but the target locale needs plural handling, the translator can upgrade the target into a `PluralRun` without touching the source. Switches back and forth between flat textarea and per-form textareas via the same component."}}}},l={source:[{text:`You have `},{ph:{id:`1`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` messages`}],placeholders:[{name:`count`,kind:`variable`,jsType:`number`,sourceExpr:`count`}]},u=[{text:`Sie haben `},{ph:{id:`1`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` Nachrichten`}],d=[{plural:{pivot:`count`,forms:{zero:[{text:`Keine Nachrichten`}],one:[{text:`1 Nachricht`}],other:u}}}],f={name:`Flat target (upgrade available)`,render:a(u)},p={name:`Empty target (new locale)`,render:a([])},m={name:`Plural target (downgrade available)`,render:a(d)},h={name:`Plural target partially filled`,render:a([{plural:{pivot:`count`,forms:{zero:[],one:[{text:`1 Nachricht`}],other:[]}}}])},g={name:`Block with multiple placeholder candidates`,render:()=>{let e={source:[{text:`User `},{ph:{id:`1`,type:`jsx:var`,data:`{name}`,equiv:`name`}},{text:` opened `},{ph:{id:`2`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` files in `},{ph:{id:`3`,type:`jsx:var`,data:`{folder}`,equiv:`folder`}}],placeholders:[{name:`name`,kind:`variable`,jsType:`string`,sourceExpr:`user.name`},{name:`count`,kind:`variable`,jsType:`number`,sourceExpr:`file.count`},{name:`folder`,kind:`variable`,jsType:`string`,sourceExpr:`folder.name`}]},[t,n]=(0,o.useState)([{text:`Benutzer `},{ph:{id:`1`,type:`jsx:var`,data:`{name}`,equiv:`name`}},{text:` hat `},{ph:{id:`2`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` Dateien geöffnet in `},{ph:{id:`3`,type:`jsx:var`,data:`{folder}`,equiv:`folder`}}]);return(0,s.jsx)(i,{block:e,target:t,onChange:n})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Flat target (upgrade available)",
  render: Interactive(flatGerman)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Empty target (new locale)",
  render: Interactive([])
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Plural target (downgrade available)",
  render: Interactive(pluralGerman)
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Plural target partially filled",
  render: Interactive([{
    plural: {
      pivot: "count",
      forms: {
        zero: [],
        one: [{
          text: "1 Nachricht"
        }],
        other: []
      }
    }
  }])
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Block with multiple placeholder candidates",
  render: () => {
    const richBlock: Pick<Block, "source" | "placeholders"> = {
      source: [{
        text: "User "
      }, {
        ph: {
          id: "1",
          type: "jsx:var",
          data: "{name}",
          equiv: "name"
        }
      }, {
        text: " opened "
      }, {
        ph: {
          id: "2",
          type: "jsx:var",
          data: "{count}",
          equiv: "count"
        }
      }, {
        text: " files in "
      }, {
        ph: {
          id: "3",
          type: "jsx:var",
          data: "{folder}",
          equiv: "folder"
        }
      }],
      placeholders: [{
        name: "name",
        kind: "variable",
        jsType: "string",
        sourceExpr: "user.name"
      }, {
        name: "count",
        kind: "variable",
        jsType: "number",
        sourceExpr: "file.count"
      }, {
        name: "folder",
        kind: "variable",
        jsType: "string",
        sourceExpr: "folder.name"
      }]
    };
    const [target, setTarget] = useState<Run[]>([{
      text: "Benutzer "
    }, {
      ph: {
        id: "1",
        type: "jsx:var",
        data: "{name}",
        equiv: "name"
      }
    }, {
      text: " hat "
    }, {
      ph: {
        id: "2",
        type: "jsx:var",
        data: "{count}",
        equiv: "count"
      }
    }, {
      text: " Dateien geöffnet in "
    }, {
      ph: {
        id: "3",
        type: "jsx:var",
        data: "{folder}",
        equiv: "folder"
      }
    }]);
    return <PluralTargetEditor block={richBlock} target={target} onChange={setTarget} />;
  }
}`,...g.parameters?.docs?.source}}},_=[`FlatTarget`,`EmptyFlat`,`FullPlural`,`PluralPartiallyFilled`,`MultiplePlaceholders`]})))()}v();export{p as EmptyFlat,f as FlatTarget,m as FullPlural,g as MultiplePlaceholders,h as PluralPartiallyFilled,_ as __namedExportsOrder,c as default};