import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-CYuAyXGC.js";import{t as a}from"./preview-DwnQImwZ.js";import{a as o}from"./FormatPreview-D2zbOtG0.js";function s(e){return[{text:e}]}function c(e,t,n){return{kind:`block`,id:`b:${e}`,name:e,translatable:!0,source:t,targets:{"fr-FR":n}}}function l(e,t,n){return{format:e,root:[{kind:`layer`,id:t,name:t,children:n}],stats:{layers:1,groups:0,blocks:n.length,data:0,media:0,runs:0}}}var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),u=t(),a(),d=n(),f={title:`Lab/PreviewKit/DataPreview`,component:o,parameters:{layout:`padded`}},p={ph:{id:`br`,type:`struct:break`,data:`<br/>`}},m=l(`json`,`messages.json`,[c(`title`,s(`Kapimart`),s(`Kapimart`)),c(`intro`,[{text:`First line`},p,{text:`Second line`}],[{text:`Première ligne`},p,{text:`Deuxième ligne`}]),c(`cart.summary`,[{text:`Your basket holds `},{ph:{id:`1`,type:`code:variable`,data:`{count}`,equiv:`count`}},{text:` items.`}],[{text:`Votre panier contient `},{ph:{id:`1`,type:`code:variable`,data:`{count}`,equiv:`count`}},{text:` articles.`}]),c(`cart.empty`,s(`Your basket is empty`),s(`Votre panier est vide`)),c(`errors.network.timeout`,s(`The request timed out`),s(`La requête a expiré`)),c(`errors.network.refused`,s(`The server refused the connection`),[]),c(`errors.auth.expired`,s(`Your session has expired`),s(`Votre session a expiré`))]),h=`{
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
`,g=l(`yaml`,`content.yaml`,[c(`site.name`,s(`Kapimart`),s(`Kapimart`)),c(`site.tagline`,s(`Everything, faithfully`),s(`Tout, fidèlement`)),c(`nav[0].label`,s(`Home`),s(`Accueil`)),c(`nav[1].label`,s(`Catalogue`),s(`Catalogue`)),c(`nav[2].label`,s(`Basket`),s(`Panier`)),c(`footer.legal`,s(`All rights reserved`),s(`Tous droits réservés`))]),_=`site:
  name: Kapimart
  tagline: Tout, fidèlement
nav:
  - label: Accueil
  - label: Catalogue
  - label: Panier
footer:
  legal: Tous droits réservés
`,v={name:`JSON catalog`,render:()=>(0,d.jsx)(o,{tree:m,locale:`fr-FR`,sourceLocale:`en`})},y={name:`YAML catalog`,render:()=>(0,d.jsx)(o,{tree:g,locale:`fr-FR`,sourceLocale:`en`})},b={name:`Source only (no locale in view)`,render:()=>(0,d.jsx)(o,{tree:m,sourceLocale:`en`})},x={name:`With the written-back file`,render:function(){let[e,t]=(0,u.useState)(`b:errors.network.timeout`);return(0,d.jsx)(o,{tree:m,locale:`fr-FR`,sourceLocale:`en`,selectedBlockId:e,onSelectBlock:t,code:{text:h,filename:`messages.fr-FR.json`}})}},S={name:`YAML, written back`,render:()=>(0,d.jsx)(o,{tree:g,locale:`fr-FR`,sourceLocale:`en`,view:`code`,code:{text:_,filename:`content.fr-FR.yaml`}})},C={name:`Selecting a unit`,render:function(){let[e,t]=(0,u.useState)();return(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:i(`2uuGCuXx2hN`,`Selected: ${e??`none`}`,{value:e??`none`})}),(0,d.jsx)(o,{tree:m,locale:`fr-FR`,sourceLocale:`en`,selectedBlockId:e,onSelectBlock:t,blockAttrs:e=>({"data-testid":`unit-${e}`})})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "JSON catalog",
  render: () => <DataPreview tree={messagesJson} locale="fr-FR" sourceLocale="en" />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "YAML catalog",
  render: () => <DataPreview tree={contentYaml} locale="fr-FR" sourceLocale="en" />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Source only (no locale in view)",
  render: () => <DataPreview tree={messagesJson} sourceLocale="en" />
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "With the written-back file",
  render: function WithCode() {
    const [selected, setSelected] = useState<string | undefined>("b:errors.network.timeout");
    return <DataPreview tree={messagesJson} locale="fr-FR" sourceLocale="en" selectedBlockId={selected} onSelectBlock={setSelected} code={{
      text: messagesJsonFile,
      filename: "messages.fr-FR.json"
    }} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "YAML, written back",
  render: () => <DataPreview tree={contentYaml} locale="fr-FR" sourceLocale="en" view="code" code={{
    text: contentYamlFile,
    filename: "content.fr-FR.yaml"
  }} />
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Json`,`Yaml`,`SourceOnly`,`WithCodeView`,`YamlCodeView`,`Selection`]})))()}T();export{v as Json,C as Selection,b as SourceOnly,x as WithCodeView,y as Yaml,S as YamlCodeView,w as __namedExportsOrder,f as default};