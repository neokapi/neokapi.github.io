import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-C21x__mS.js";import{t as n}from"./jsx-runtime-BdxMnOeJ.js";import{r,t as i}from"./runtime-WG3sX0mn.js";import{n as a,t as o}from"./locale-label-C2oGlAgv.js";function s({dark:e,children:t}){return(0,l.jsx)(`div`,{className:e?`dark`:void 0,children:(0,l.jsxs)(`div`,{className:`rounded-lg border bg-background p-4 text-foreground`,children:[(0,l.jsx)(`p`,{className:`mb-3 text-xs font-medium text-muted-foreground`,children:e?i(`eoZVGebDkJB`,`Dark`):i(`6S0F3QN0sn4`,`Light`)}),t]})})}var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r(),c=t(),a(),l=n(),u={title:`Foundations/LocaleLabel`,component:o,parameters:{layout:`padded`,docs:{description:{component:`One rendering for a language: the name in the reader's own language, the tag
beside it in muted monospace. Where there is no room, the tag alone with the
name in the tooltip.`}}},args:{locale:`fr-FR`}},d=[`fr-FR`,`pt-BR`,`zh-Hant`,`sr-Latn-RS`,`nb-NO`,`ar-EG`,`qps`],f={render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:[!1,!0].map(e=>(0,l.jsx)(s,{dark:e,children:(0,l.jsx)(`div`,{className:`flex flex-col gap-2 text-sm`,children:d.map(e=>(0,l.jsxs)(`div`,{className:`flex items-center gap-6`,children:[(0,l.jsx)(o,{locale:e,className:`w-64`}),(0,l.jsx)(o,{locale:e,compact:!0})]},e))})},String(e)))})},p={render:()=>(0,l.jsxs)(`ul`,{className:`flex flex-col gap-2 text-sm`,children:[(0,l.jsx)(`li`,{children:(0,l.jsx)(o,{locale:`en-US`,source:!0})}),(0,l.jsx)(`li`,{children:(0,l.jsx)(o,{locale:`fr-FR`})}),(0,l.jsx)(`li`,{children:(0,l.jsx)(o,{locale:`ja-JP`})})]})},m={render:()=>(0,l.jsxs)(`div`,{className:`flex flex-col gap-2 text-sm`,children:[(0,l.jsx)(o,{locale:`fr-FR`,variant:`short`}),(0,l.jsx)(o,{locale:`pt-BR`,variant:`short`}),(0,l.jsx)(o,{locale:`fr-FR`,hideCode:!0}),(0,l.jsx)(o,{locale:`fr-FR`,displayName:`French (Canada office)`})]})},h={render:()=>(0,l.jsx)(`div`,{className:`grid grid-cols-3 gap-x-8 gap-y-2 text-sm`,children:d.map(e=>(0,l.jsxs)(c.Fragment,{children:[(0,l.jsx)(o,{locale:e,uiLocale:`en`}),(0,l.jsx)(o,{locale:e,uiLocale:`fr`}),(0,l.jsx)(o,{locale:e,uiLocale:`nb`})]},e))})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Full and compact, in both themes.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`The source language carries a marker, so a list of targets reads as targets.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2 text-sm">
      <LocaleLabel locale="fr-FR" variant="short" />
      <LocaleLabel locale="pt-BR" variant="short" />
      <LocaleLabel locale="fr-FR" hideCode />
      <LocaleLabel locale="fr-FR" displayName="French (Canada office)" />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"`short` drops the region where a column has no room for it.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-x-8 gap-y-2 text-sm">
      {TAGS.map(tag => <Fragment key={tag}>
          <LocaleLabel locale={tag} uiLocale="en" />
          <LocaleLabel locale={tag} uiLocale="fr" />
          <LocaleLabel locale={tag} uiLocale="nb" />
        </Fragment>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`The name follows the reader. Same tags, named in French and in Norwegian.`,...h.parameters?.docs?.description}}},g=[`NameAndCode`,`SourceMarker`,`ShortAndHiddenCode`,`InAnotherUILanguage`]})))()}_();export{h as InAnotherUILanguage,f as NameAndCode,m as ShortAndHiddenCode,p as SourceMarker,g as __namedExportsOrder,u as default};