import{i as e}from"./preload-helper-DRGloZ2I.js";import{_ as t,t as n}from"./preview-DggjfcMk.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),r={title:`Lab/Code View`,component:t,parameters:{layout:`padded`}},i=`{
  "greeting": "Hello, {name}!",
  "count": 42,
  "enabled": true,
  "cart": { "empty": "Your cart is empty" }
}
`,a=`<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2">
  <file source-language="en" target-language="fr">
    <!-- one unit -->
    <trans-unit id="greeting">
      <source>Hello, World!</source>
      <target>Bonjour le monde !</target>
    </trans-unit>
  </file>
</xliff>
`,o=`# Application strings
app.title = Welcome aboard
app.greeting = Hello, World!
cart.empty = Your cart is empty
`,s={args:{text:i,filename:`messages.json`}},c={args:{text:a,filename:`app.xliff`}},l={args:{text:o,filename:`app.properties`}},u={name:`With changed lines`,args:{text:i,filename:`messages.json`,changedLines:new Set([1,4])}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: json,
    filename: "messages.json"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: xliff,
    filename: "app.xliff"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: properties,
    filename: "app.properties"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With changed lines",
  args: {
    text: json,
    filename: "messages.json",
    changedLines: new Set([1, 4])
  }
}`,...u.parameters?.docs?.source}}},d=[`Json`,`Xliff`,`Properties`,`ChangedLines`]}))();export{u as ChangedLines,s as Json,l as Properties,c as Xliff,d as __namedExportsOrder,r as default};