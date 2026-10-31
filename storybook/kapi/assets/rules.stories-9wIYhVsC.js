import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{a as n,i as r,n as i,r as a}from"./rules-BYwFLCqM.js";function o({children:e}){return(0,s.jsx)(`ul`,{className:`max-w-xl divide-y text-sm`,children:e})}var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),s=t(),c={title:`Voice/Rules`,tags:[`autodocs`]},l={term:`log in`,replacement:`sign in`,advisory:!0,note:`One spelling across the product.`,concept_id:`c-signin`},u={term:`bulletproof`},d={term:`utilise`,replacement:`use`,forms:[`utilize`,`utilization`]},f={regex:`\\b(?:synergy|leverage)\\b`,description:`Corporate filler.`,rate:{max:2,per_words:1e3}},p={regex:`—`,description:`An em dash; use a comma or a full stop.`,fails:!0},m={name:`Rule row / Advisory term`,render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(r,{rule:l})})},h={name:`Rule row / Plain term (fails a check)`,render:()=>(0,s.jsxs)(o,{children:[(0,s.jsx)(r,{rule:u}),(0,s.jsx)(r,{rule:d})]})},g={name:`Rule row / Pattern (regex behind the tooltip)`,render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(i,{pattern:f})})},_={name:`Rule row / Pattern marked fails: true`,render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(i,{pattern:p})})},v={name:`Northsea`,style:{prohibited_patterns:[f,p],required_patterns:[{regex:`\\bplease\\b`,description:`Ask, do not instruct.`,advisory:!0}]}},y={name:`Rules list / Populated`,render:()=>(0,s.jsx)(`div`,{className:`max-w-xl`,children:(0,s.jsx)(a,{profile:v})})},b={name:`Rules list / Empty`,render:()=>(0,s.jsx)(`div`,{className:`max-w-xl`,children:(0,s.jsx)(a,{profile:{name:`Plain`}})})},x=[`TermRuleWithSeverity`,`PlainTermRule`,`PatternRule`,`FailingPatternRule`,`RulesList`,`RulesListEmpty`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Advisory term",
  render: () => <Rows>
      <TermRuleRow rule={advisoryTerm} />
    </Rows>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Plain term (fails a check)",
  render: () => <Rows>
      <TermRuleRow rule={plainTerm} />
      <TermRuleRow rule={storeResolvedTerm} />
    </Rows>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Pattern (regex behind the tooltip)",
  render: () => <Rows>
      <PatternRuleRow pattern={pattern} />
    </Rows>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Pattern marked fails: true",
  render: () => <Rows>
      <PatternRuleRow pattern={failingPattern} />
    </Rows>
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Rules list / Populated",
  render: () => <div className="max-w-xl">
      <RulesBlock profile={populated} />
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Rules list / Empty",
  render: () => <div className="max-w-xl">
      <RulesBlock profile={{
      name: "Plain"
    }} />
    </div>
}`,...b.parameters?.docs?.source}}}})))()}S();export{_ as FailingPatternRule,g as PatternRule,h as PlainTermRule,y as RulesList,b as RulesListEmpty,m as TermRuleWithSeverity,x as __namedExportsOrder,c as default};