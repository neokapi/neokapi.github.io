import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{D as n,O as r}from"./attachment-DAVx0AgE.js";import{n as i,t as a}from"./useExternalStoreRuntime-MvA55v2Q.js";import{n as o,t as s}from"./thread-DwHMmRev.js";function c({messages:e}){let t=i({messages:e,isRunning:!1,convertMessage:e=>e,onNew:async()=>{},onCancel:async()=>{}});return(0,l.jsx)(n,{runtime:t,children:(0,l.jsx)(`div`,{className:`h-[600px] w-[500px] border rounded-lg overflow-hidden flex flex-col bg-background text-foreground`,children:(0,l.jsx)(s,{})})})}var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),r(),o(),l=t(),u={role:`user`,id:`md-user`,content:`Show me what the markdown rendering looks like.`,createdAt:new Date(Date.now()-6e4)},d={role:`assistant`,id:`md-headings`,content:[{type:`text`,text:`# Heading 1
## Heading 2
### Heading 3
#### Heading 4

Regular paragraph text with **bold**, *italic*, and \`inline code\`.`}],status:{type:`complete`,reason:`stop`}},f={role:`assistant`,id:`md-code`,content:[{type:`text`,text:`Here is a code example:

\`\`\`typescript
interface TranslationEntry {
  key: string;
  source: string;
  target?: string;
  status: "translated" | "untranslated" | "fuzzy";
}

function getUntranslated(entries: TranslationEntry[]): TranslationEntry[] {
  return entries.filter(e => e.status === "untranslated");
}
\`\`\`

And some inline code: \`getUntranslated(entries)\``}],status:{type:`complete`,reason:`stop`}},p={role:`assistant`,id:`md-table`,content:[{type:`text`,text:`## Translation Progress

| Language | Keys | Translated | Coverage |
|----------|------|-----------|----------|
| English  | 142  | 142       | 100%     |
| French   | 142  | 98        | 69%      |
| German   | 142  | 45        | 32%      |
| Japanese | 142  | 12        | 8%       |

> Note: Coverage below 50% is flagged for review.`}],status:{type:`complete`,reason:`stop`}},m={role:`assistant`,id:`md-lists`,content:[{type:`text`,text:`### Unordered list
- First item
- Second item with **bold**
- Third item with \`code\`

### Ordered list
1. Parse source files
2. Extract translatable strings
3. Send to translation provider
4. Merge results back

---

Here is a [link to docs](https://example.com) and a blockquote:

> Localization is not just translation. It requires cultural adaptation.`}],status:{type:`complete`,reason:`stop`}},h={title:`Bravo/Assistant UI/Markdown`,tags:[`autodocs`],parameters:{layout:`centered`}},g={render:()=>(0,l.jsx)(c,{messages:[u,d]})},_={render:()=>(0,l.jsx)(c,{messages:[u,f]})},v={render:()=>(0,l.jsx)(c,{messages:[u,p]})},y={render:()=>(0,l.jsx)(c,{messages:[u,m]})},b={render:()=>(0,l.jsx)(c,{messages:[u,d,f,p,m]})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ThreadWithMarkdown messages={[userMsg, headingsMsg]} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <ThreadWithMarkdown messages={[userMsg, codeBlockMsg]} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ThreadWithMarkdown messages={[userMsg, tableMsg]} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <ThreadWithMarkdown messages={[userMsg, listsMsg]} />
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ThreadWithMarkdown messages={[userMsg, headingsMsg, codeBlockMsg, tableMsg, listsMsg]} />
}`,...b.parameters?.docs?.source}}},x=[`Headings`,`CodeBlocks`,`Tables`,`Lists`,`AllElements`]})))()}S();export{b as AllElements,_ as CodeBlocks,g as Headings,y as Lists,v as Tables,x as __namedExportsOrder,h as default};