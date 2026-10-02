import{n as e}from"./rolldown-runtime-C0FnF6B9.js";function t(e){return l[e]}var n,r,i,a,o,s,c,l;function u(){return(u=e((()=>{n=JSON.stringify({greeting:`Hello, World!`,farewell:`See you tomorrow`,items:{cart:`Your cart is empty`}},null,2),r=`<?xml version="1.0" encoding="UTF-8"?>
<xliff xmlns="urn:oasis:names:tc:xliff:document:2.2" version="2.2" srcLang="en" trgLang="fr">
  <file id="app.json" original="app.json">
    <unit id="greeting">
      <segment>
        <source>Hello, World!</source>
      </segment>
    </unit>
    <unit id="farewell">
      <segment>
        <source>See you tomorrow</source>
      </segment>
    </unit>
    <unit id="cart.empty">
      <segment>
        <source>Your cart is empty</source>
      </segment>
    </unit>
  </file>
</xliff>
`,i=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Welcome</title>
  </head>
  <body>
    <h1>Welcome aboard</h1>
    <p>Thanks for trying <strong>kapi</strong>. Edit this file and run a command.</p>
    <a href="/docs">Read the documentation</a>
  </body>
</html>
`,a=`# Project Title

Thanks for trying **kapi**. This README is a sample Markdown document.

## Getting started

- Install the CLI
- Run \`kapi stats README.md\`
- See the extracted segments

Read more in the [documentation](https://neokapi.github.io).
`,o=`# Application strings
app.title = Welcome aboard
app.greeting = Hello, World!
app.farewell = See you tomorrow
cart.empty = Your cart is empty
`,s=`<?xml version="1.0" encoding="utf-8"?>
<resources>
  <string name="app_name">Welcome aboard</string>
  <string name="greeting">Hello, World!</string>
  <string name="farewell">See you tomorrow</string>
  <string name="cart_empty">Your cart is empty</string>
</resources>
`,c=JSON.stringify({sourceLanguage:`en`,strings:{greeting:{localizations:{en:{stringUnit:{state:`translated`,value:`Hello, World!`}}}},farewell:{localizations:{en:{stringUnit:{state:`translated`,value:`See you tomorrow`}}}},"cart.empty":{localizations:{en:{stringUnit:{state:`translated`,value:`Your cart is empty`}}}}},version:`1.0`},null,2),l={"messages.json":{name:`messages.json`,content:n},"app.xliff":{name:`app.xliff`,content:r},"page.html":{name:`page.html`,content:i},"README.md":{name:`README.md`,content:a},"app.properties":{name:`app.properties`,content:o},"strings.xml":{name:`strings.xml`,content:s},"Localizable.xcstrings":{name:`Localizable.xcstrings`,content:c}},Object.keys(l)})))()}function d(e){let n=t(e);if(!n)throw Error(`unknown fixture: ${e}`);return{path:n.name,content:n.content}}function f(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function p(e){let t=e.map(([e,t])=>({id:`mem:en-fr:${f(e)}`,hintSrcLang:`en`,variants:{en:[{text:e}],fr:[{text:t}]},created:v,updated:v})).sort((e,t)=>e.id<t.id?-1:+(e.id>t.id));return JSON.stringify({schemaVersion:`1.0`,kind:`kapi-memory`,entries:t},null,2)+`
`}function m(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function h(e){return`version: v1
name: demo
defaults:
  source_language: en
  target_languages: [fr]
collections:
  - path: ${e.content}
    format: ${e.format}
    target: "${e.target}"
flows:
  translate:
    steps:
      - tool: recycle
  translate-exact:
    steps:
      - tool: recycle
        config:
          fillTargetThreshold: 100
`}function g(e){return T.find(t=>t.id===e)??T[0]}var _,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{u(),d(`messages.json`),d(`page.html`),d(`app.xliff`),d(`messages.json`),_=new TextEncoder,v=`2026-01-01T00:00:00Z`,y=`{
  "greeting": "Welcome to Acme",
  "cta": "Sign up today",
  "farewell": "Talk soon"
}
`,b=p([[`Welcome to Acme`,`Bienvenue chez Acme`],[`Sign up today`,`Inscrivez-vous aujourd'hui`],[`Talk soon`,`À bientôt`]]),x=p([[`Welcome to Acme`,`Bienvenue chez Acme`],[`Your account is ready.`,`Votre compte est prêt.`],[`Sign in to continue`,`Connectez-vous pour continuer`]]),S=p([[`Total revenue`,`Chiffre d'affaires total`],[`Net profit`,`Bénéfice net`]]),C=`UEsDBBQAAAAIAOm6xFzmdcR+0gAAAIsBAAATAAAAW0NvbnRlbnRfVHlwZXNdLnhtbH2QvVLDMAzHX8XnlasVGBh6SToAKzD0BXSOkvjw11luad++Sls6cIVR+n/8ZLebQ/BqT4Vdip1+NI3e9O32mImVKJE7Pdea1wBsZwrIJmWKooypBKwylgky2i+cCJ6a5hlsipViXdWlQ/ftK42481W9HWR9oRTyrNXLxbiwOo05e2exig77OPyirK4EI8mzh2eX+UEMGu4SFuVvwDX3Ic8ubiD1iaW+YxAXfKcywJDsLkjS/F9z5840js7SLb+05ZIsMbs4BW9uSkAXf+6H83f3J1BLAwQUAAAACADpusRcXzOVUpUAAAAHAQAACwAAAF9yZWxzLy5yZWxzjc87DsIwDAbgq0Q+QJ0yMKCmXVi6Ii4QJW5T0TzkhNftycBAEQOjf//6LHfDw6/iRpyXGBS0jYSh70606lKD7JaURW2ErMCVkg6I2TjyOjcxUaibKbLXpY48Y9LmomfCnZR75E8DtqYYrQIebQvi/Ez0jx2naTF0jObqKZQfJ74aVdY8U1Fwj2zRvuOmsoB9h5sX+xdQSwMEFAAAAAgA6brEXO2a4OirAAAAIQEAABEAAAB3b3JkL2RvY3VtZW50LnhtbIWPSwrCMBCGrxJygKa6cFH6wDO4EJcxHdtAMxMmibW3NxFEEMHNN8zz/6cdHm4Rd+BgCTu5q2o59O3ajGSSA4witzE0ayfnGH2jVDAzOB0q8oC5dyN2OuaUJ7USj57JQAgWJ7eofV0flNMWZTl5pXEr0RdwQezPsBhyICKJo3HQqlIs5Bf99/yFEgttDKVszQbBoMet+rt2shMKi0XGEEaL6ZeUentUn//7J1BLAQIUAxQAAAAIAOm6xFzmdcR+0gAAAIsBAAATAAAAAAAAAAAAAACAAQAAAABbQ29udGVudF9UeXBlc10ueG1sUEsBAhQDFAAAAAgA6brEXF8zlVKVAAAABwEAAAsAAAAAAAAAAAAAAIABAwEAAF9yZWxzLy5yZWxzUEsBAhQDFAAAAAgA6brEXO2a4OirAAAAIQEAABEAAAAAAAAAAAAAAIABwQEAAHdvcmQvZG9jdW1lbnQueG1sUEsFBgAAAAADAAMAuQAAAJsCAAAAAA==`,w=`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`,h({content:`messages.json`,format:`json`,target:`out/{lang}/messages.json`}),h({content:`welcome.docx`,format:`openxml`,target:`out/{lang}/welcome.docx`}),T=[{id:`json`,label:`JSON catalog`,filename:`messages.json`,kind:`text · JSON`,bytes:()=>_.encode(y),binary:!1,memory:b},{id:`docx`,label:`Word document`,filename:`welcome.docx`,kind:`binary · OOXML (.docx)`,bytes:()=>m(C),binary:!0,memory:x},{id:`xlsx`,label:`Excel sheet`,filename:`report.xlsx`,kind:`binary · OOXML (.xlsx)`,bytes:()=>m(w),binary:!0,memory:S}],E=`{
  "greeting": "Welcome to Acme",
  "cta": "Sign up today",
  "theme": "Pick your favorite color",
  "farewell": "Talk soon"
}
`,D=[{id:`json`,label:`messages.json`,filename:`messages.json`,kind:`text · JSON catalog`,binary:!1,bytes:()=>_.encode(E)},{id:`docx`,label:`welcome.docx`,filename:`welcome.docx`,kind:`binary · Word (.docx)`,binary:!0,bytes:()=>m(C)}]})))()}export{t as a,g as i,T as n,u as o,O as r,D as t};