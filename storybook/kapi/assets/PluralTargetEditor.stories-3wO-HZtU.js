import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{a as r,n as i,s as a,t as o}from"./PluralTargetEditor-iLmWF0tL.js";function s(e){return()=>{let[t,n]=(0,c.useState)(e);return(0,l.jsx)(o,{block:d,target:t,onChange:n})}}var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{c=t(),r(),i(),l=n(),u={title:`Editor/Plural/PluralTargetEditor`,component:o,tags:[`autodocs`],decorators:[e=>(0,l.jsx)(`div`,{style:{maxWidth:640,padding:16},children:(0,l.jsx)(e,{})})],parameters:{docs:{description:{component:"Translator-facing editor for a single locale's target. When the source is a flat sentence but the target locale needs plural handling, the translator can upgrade the target into a `PluralRun` without touching the source. Switches back and forth between flat textarea and per-form textareas via the same component."}}}},d={editions:a([{text:`You have `},{ph:{id:`1`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` messages`}]),placeholders:[{name:`count`,kind:`variable`,jsType:`number`,sourceExpr:`count`}]},f=[{text:`Sie haben `},{ph:{id:`1`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` Nachrichten`}],p=[{plural:{pivot:`count`,forms:{zero:[{text:`Keine Nachrichten`}],one:[{text:`1 Nachricht`}],other:f}}}],m={name:`Flat target (upgrade available)`,render:s(f)},h={name:`Empty target (new locale)`,render:s([])},g={name:`Plural target (downgrade available)`,render:s(p)},_={name:`Plural target partially filled`,render:s([{plural:{pivot:`count`,forms:{zero:[],one:[{text:`1 Nachricht`}],other:[]}}}])},v={name:`Block with multiple placeholder candidates`,render:()=>{let e={editions:a([{text:`User `},{ph:{id:`1`,type:`jsx:var`,data:`{name}`,equiv:`name`}},{text:` opened `},{ph:{id:`2`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` files in `},{ph:{id:`3`,type:`jsx:var`,data:`{folder}`,equiv:`folder`}}]),placeholders:[{name:`name`,kind:`variable`,jsType:`string`,sourceExpr:`user.name`},{name:`count`,kind:`variable`,jsType:`number`,sourceExpr:`file.count`},{name:`folder`,kind:`variable`,jsType:`string`,sourceExpr:`folder.name`}]},[t,n]=(0,c.useState)([{text:`Benutzer `},{ph:{id:`1`,type:`jsx:var`,data:`{name}`,equiv:`name`}},{text:` hat `},{ph:{id:`2`,type:`jsx:var`,data:`{count}`,equiv:`count`}},{text:` Dateien geöffnet in `},{ph:{id:`3`,type:`jsx:var`,data:`{folder}`,equiv:`folder`}}]);return(0,l.jsx)(o,{block:e,target:t,onChange:n})}},y=[`FlatTarget`,`EmptyFlat`,`FullPlural`,`PluralPartiallyFilled`,`MultiplePlaceholders`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Flat target (upgrade available)",
  render: Interactive(flatGerman)
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Empty target (new locale)",
  render: Interactive([])
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Plural target (downgrade available)",
  render: Interactive(pluralGerman)
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Block with multiple placeholder candidates",
  render: () => {
    const richBlock: Pick<Block, "editions" | "placeholders"> = {
      editions: sourceEditions([{
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
      }]),
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{h as EmptyFlat,m as FlatTarget,g as FullPlural,v as MultiplePlaceholders,_ as PluralPartiallyFilled,y as __namedExportsOrder,u as default};