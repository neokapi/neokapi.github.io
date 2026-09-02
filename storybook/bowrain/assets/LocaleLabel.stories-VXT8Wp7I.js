import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{n as r,t as i}from"./locale-label-Cve8RE8K.js";function a({dark:e,children:t}){return(0,s.jsx)(`div`,{className:e?`dark`:void 0,children:(0,s.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,s.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?`Dark`:`Light`}),t]})})}var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),r(),s=n(),c={title:`Foundations/LocaleLabel`,component:i,parameters:{layout:`padded`,docs:{description:{component:`One rendering for a language: the name in the reader's own language, the tag
beside it in muted monospace. Where there is no room, the tag alone with the
name in the tooltip.`}}},args:{locale:`fr-FR`}},l=[`fr-FR`,`pt-BR`,`zh-Hant`,`sr-Latn-RS`,`nb-NO`,`ar-EG`,`qps`],u={render:()=>(0,s.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,s.jsx)(a,{dark:e,children:(0,s.jsx)(`div`,{className:`flex flex-col gap-2 text-sm`,children:l.map(e=>(0,s.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,s.jsx)(i,{locale:e,className:`w-64`}),(0,s.jsx)(i,{locale:e,compact:!0})]},e))})},String(e)))})},d={render:()=>(0,s.jsxs)(`ul`,{className:`flex flex-col gap-2 text-sm`,children:[(0,s.jsx)(`li`,{children:(0,s.jsx)(i,{locale:`en-US`,source:!0})}),(0,s.jsx)(`li`,{children:(0,s.jsx)(i,{locale:`fr-FR`})}),(0,s.jsx)(`li`,{children:(0,s.jsx)(i,{locale:`ja-JP`})})]})},f={render:()=>(0,s.jsxs)(`div`,{className:`flex flex-col gap-2 text-sm`,children:[(0,s.jsx)(i,{locale:`fr-FR`,variant:`short`}),(0,s.jsx)(i,{locale:`pt-BR`,variant:`short`}),(0,s.jsx)(i,{locale:`fr-FR`,hideCode:!0}),(0,s.jsx)(i,{locale:`fr-FR`,displayName:`French (Canada office)`})]})},p={render:()=>(0,s.jsx)(`div`,{className:`grid grid-cols-3 gap-x-8 gap-y-2 text-sm`,children:l.map(e=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(i,{locale:e,uiLocale:`en`}),(0,s.jsx)(i,{locale:e,uiLocale:`fr`}),(0,s.jsx)(i,{locale:e,uiLocale:`nb`})]},e))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {[false, true].map(dark => <Panel key={String(dark)} dark={dark}>
          <div className="flex flex-col gap-2 text-sm">
            {TAGS.map(tag => <div key={tag} className="flex items-center gap-6">
                <LocaleLabel locale={tag} className="w-64" />
                <LocaleLabel locale={tag} compact />
              </div>)}
          </div>
        </Panel>)}
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Full and compact, in both themes.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <ul className="flex flex-col gap-2 text-sm">
      <li>
        <LocaleLabel locale="en-US" source />
      </li>
      <li>
        <LocaleLabel locale="fr-FR" />
      </li>
      <li>
        <LocaleLabel locale="ja-JP" />
      </li>
    </ul>
}`,...d.parameters?.docs?.source},description:{story:`The source language carries a marker, so a list of targets reads as targets.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 text-sm">
      <LocaleLabel locale="fr-FR" variant="short" />
      <LocaleLabel locale="pt-BR" variant="short" />
      <LocaleLabel locale="fr-FR" hideCode />
      <LocaleLabel locale="fr-FR" displayName="French (Canada office)" />
    </div>
}`,...f.parameters?.docs?.source},description:{story:"`short` drops the region where a column has no room for it.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm">
      {TAGS.map(tag => <Fragment key={tag}>
          <LocaleLabel locale={tag} uiLocale="en" />
          <LocaleLabel locale={tag} uiLocale="fr" />
          <LocaleLabel locale={tag} uiLocale="nb" />
        </Fragment>)}
    </div>
}`,...p.parameters?.docs?.source},description:{story:`The name follows the reader. Same tags, named in French and in Norwegian.`,...p.parameters?.docs?.description}}},m=[`NameAndCode`,`SourceMarker`,`ShortAndHiddenCode`,`InAnotherUILanguage`]})))()}h();export{p as InAnotherUILanguage,u as NameAndCode,f as ShortAndHiddenCode,d as SourceMarker,m as __namedExportsOrder,c as default};