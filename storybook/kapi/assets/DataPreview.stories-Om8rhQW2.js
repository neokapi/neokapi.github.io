import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{n as r,r as i,t as a}from"./runtime-WG3sX0mn.js";import{t as o}from"./preview-DMaHEaSs.js";import{a as s}from"./FormatPreview-D5Oa34jB.js";function c(e){return[{text:e}]}function l(e,t,n){return{kind:`block`,id:`b:${e}`,name:e,translatable:!0,source:t,targets:{"fr-FR":n}}}function u(e,t,n){return{format:e,root:[{kind:`layer`,id:t,name:t,children:n}],stats:{layers:1,groups:0,blocks:n.length,data:0,media:0,runs:0}}}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{i(),d=t(),o(),f=n(),p={title:`Lab/PreviewKit/DataPreview`,component:s,parameters:{layout:`padded`}},m={ph:{id:`br`,type:`struct:break`,data:`<br/>`}},h=u(`json`,`messages.json`,[l(`title`,c(`Kapimart`),c(`Kapimart`)),l(`intro`,[{text:`First line`},m,{text:`Second line`}],[{text:`Première ligne`},m,{text:`Deuxième ligne`}]),l(`cart.summary`,[{text:`Your basket holds `},{ph:{id:`1`,type:`code:variable`,data:`{count}`,equiv:`count`}},{text:` items.`}],[{text:`Votre panier contient `},{ph:{id:`1`,type:`code:variable`,data:`{count}`,equiv:`count`}},{text:` articles.`}]),l(`cart.empty`,c(`Your basket is empty`),c(`Votre panier est vide`)),l(`errors.network.timeout`,c(`The request timed out`),c(`La requête a expiré`)),l(`errors.network.refused`,c(`The server refused the connection`),[]),l(`errors.auth.expired`,c(`Your session has expired`),c(`Votre session a expiré`))]),g=`{
  "title": "Kapimart",
  "intro": "Première ligne<br/>Deuxième ligne",
  "cart": {
    "summary": "Votre panier contient {count} articles.",
    "empty": "Votre panier est vide"
  },
  "errors": {
    "network": {
      "timeout": "La requête a expiré",
      "refused": "The server refused the connection"
    },
    "auth": {
      "expired": "Votre session a expiré"
    }
  }
}
`,_=u(`yaml`,`content.yaml`,[l(`site.name`,c(`Kapimart`),c(`Kapimart`)),l(`site.tagline`,c(`Everything, faithfully`),c(`Tout, fidèlement`)),l(`nav[0].label`,c(`Home`),c(`Accueil`)),l(`nav[1].label`,c(`Catalogue`),c(`Catalogue`)),l(`nav[2].label`,c(`Basket`),c(`Panier`)),l(`footer.legal`,c(`All rights reserved`),c(`Tous droits réservés`))]),v=`site:
  name: Kapimart
  tagline: Tout, fidèlement
nav:
  - label: Accueil
  - label: Catalogue
  - label: Panier
footer:
  legal: Tous droits réservés
`,y={name:`JSON catalog`,render:()=>(0,f.jsx)(s,{tree:h,locale:`fr-FR`,sourceLocale:`en`})},b={name:`YAML catalog`,render:()=>(0,f.jsx)(s,{tree:_,locale:`fr-FR`,sourceLocale:`en`})},x={name:`Source only (no locale in view)`,render:()=>(0,f.jsx)(s,{tree:h,sourceLocale:`en`})},S={name:`With the written-back file`,render:function(){let[e,t]=(0,d.useState)(`b:errors.network.timeout`);return(0,f.jsx)(s,{tree:h,locale:`fr-FR`,sourceLocale:`en`,selectedBlockId:e,onSelectBlock:t,code:{text:g,filename:`messages.fr-FR.json`}})}},C={name:`YAML, written back`,render:()=>(0,f.jsx)(s,{tree:_,locale:`fr-FR`,sourceLocale:`en`,view:`code`,code:{text:v,filename:`content.fr-FR.yaml`}})},w={name:`Selecting a unit`,render:function(){let[e,t]=(0,d.useState)();return(0,f.jsxs)(`div`,{className:`space-y-2`,children:[(0,f.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:r(`2uuGCuXx2hN`,`Selected: {value}`,{},{value:e??a(`jQkNVSQx2H3`,`none`)})}),(0,f.jsx)(s,{tree:h,locale:`fr-FR`,sourceLocale:`en`,selectedBlockId:e,onSelectBlock:t,blockAttrs:e=>({"data-testid":`unit-${e}`})})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "JSON catalog",
  render: () => <DataPreview tree={messagesJson} locale="fr-FR" sourceLocale="en" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "YAML catalog",
  render: () => <DataPreview tree={contentYaml} locale="fr-FR" sourceLocale="en" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Source only (no locale in view)",
  render: () => <DataPreview tree={messagesJson} sourceLocale="en" />
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "With the written-back file",
  render: function WithCode() {
    const [selected, setSelected] = useState<string | undefined>("b:errors.network.timeout");
    return <DataPreview tree={messagesJson} locale="fr-FR" sourceLocale="en" selectedBlockId={selected} onSelectBlock={setSelected} code={{
      text: messagesJsonFile,
      filename: "messages.fr-FR.json"
    }} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "YAML, written back",
  render: () => <DataPreview tree={contentYaml} locale="fr-FR" sourceLocale="en" view="code" code={{
    text: contentYamlFile,
    filename: "content.fr-FR.yaml"
  }} />
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Selecting a unit",
  render: function Selecting() {
    const [selected, setSelected] = useState<string | undefined>();
    return <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Selected: {selected ?? "none"}</p>
        <DataPreview tree={messagesJson} locale="fr-FR" sourceLocale="en" selectedBlockId={selected} onSelectBlock={setSelected} blockAttrs={id => ({
        "data-testid": \`unit-\${id}\`
      })} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Json`,`Yaml`,`SourceOnly`,`WithCodeView`,`YamlCodeView`,`Selection`]})))()}E();export{y as Json,w as Selection,x as SourceOnly,S as WithCodeView,b as Yaml,C as YamlCodeView,T as __namedExportsOrder,p as default};