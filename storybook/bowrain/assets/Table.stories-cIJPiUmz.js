import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{t as n}from"./src-BK_PbcPE.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{a,c as o,i as s,l as c,o as l,r as u,s as d}from"./selectable-list-F6JEOsKI.js";var f,p,m,h,g;function _(){return(_=e((()=>{r(),n(),f=t(),p={title:`Foundations/Table`,component:u,tags:[`autodocs`],decorators:[e=>(0,f.jsx)(`div`,{style:{maxWidth:700,padding:16},children:(0,f.jsx)(e,{})})]},m=[{file:`messages.json`,locale:`fr-FR`,words:1243,status:`Translated`},{file:`messages.json`,locale:`de-DE`,words:1243,status:`In Review`},{file:`messages.json`,locale:`ja-JP`,words:1243,status:`Draft`},{file:`errors.json`,locale:`fr-FR`,words:312,status:`Translated`},{file:`errors.json`,locale:`de-DE`,words:312,status:`Not Started`},{file:`ui-labels.xliff`,locale:`es-ES`,words:876,status:`In Review`}],h={render:()=>(0,f.jsxs)(u,{children:[(0,f.jsx)(a,{children:i(`9KyLLkTsCNL`,`Translation file status overview`)}),(0,f.jsx)(o,{children:(0,f.jsxs)(c,{children:[(0,f.jsx)(d,{children:i(`90bm6Dmup1D`,`File`)}),(0,f.jsx)(d,{children:i(`jLRkl4WNLGZ`,`Locale`)}),(0,f.jsx)(d,{className:`text-right`,children:i(`jJfsBtIvWJG`,`Words`)}),(0,f.jsx)(d,{children:i(`44kdLGg1LZr`,`Status`)})]})}),(0,f.jsx)(s,{children:m.map((e,t)=>(0,f.jsxs)(c,{children:[(0,f.jsx)(l,{className:`font-medium`,children:e.file}),(0,f.jsx)(l,{children:e.locale}),(0,f.jsx)(l,{className:`text-right`,children:e.words.toLocaleString()}),(0,f.jsx)(l,{children:e.status})]},t))})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>Translation file status overview</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>File</TableHead>
          <TableHead>Locale</TableHead>
          <TableHead className="text-right">Words</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((row, i) => <TableRow key={i}>
            <TableCell className="font-medium">{row.file}</TableCell>
            <TableCell>{row.locale}</TableCell>
            <TableCell className="text-right">{row.words.toLocaleString()}</TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...h.parameters?.docs?.source}}},g=[`Default`]})))()}_();export{h as Default,g as __namedExportsOrder,p as default};