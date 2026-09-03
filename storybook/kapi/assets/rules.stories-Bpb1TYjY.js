import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{a as n,n as r,o as i,r as a}from"./rules-DOUgGj27.js";function o({children:e}){return(0,s.jsx)(`ul`,{className:`max-w-xl divide-y text-sm`,children:e})}var s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{i(),s=t(),c={title:`Voice/Rules`,tags:[`autodocs`]},l={term:`log in`,replacement:`sign in`,severity:`major`,note:`One spelling across the product.`,concept_id:`c-signin`},u={term:`bulletproof`},d={term:`utilise`,replacement:`use`,forms:[`utilize`,`utilization`]},f={regex:`\\b(?:synergy|leverage)\\b`,description:`Corporate filler.`,severity:`minor`,rate:{max:2,per_words:1e3}},p={name:`Rule row / Term with severity`,render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(n,{rule:l})})},m={name:`Rule row / Plain term (store-resolved, no severity)`,render:()=>(0,s.jsxs)(o,{children:[(0,s.jsx)(n,{rule:u}),(0,s.jsx)(n,{rule:d})]})},h={name:`Rule row / Pattern (regex behind the tooltip)`,render:()=>(0,s.jsx)(o,{children:(0,s.jsx)(r,{pattern:f})})},g={name:`Northsea`,vocabulary:{preferred_terms:[l],forbidden_terms:[u],abbreviations:{API:`application programming interface`}},style:{prohibited_patterns:[f],required_patterns:[{regex:`\\bplease\\b`,description:`Ask, do not instruct.`,severity:`neutral`}]}},_={name:`Rules list / Populated`,render:()=>(0,s.jsx)(`div`,{className:`max-w-xl`,children:(0,s.jsx)(a,{profile:g})})},v={name:`Rules list / Empty`,render:()=>(0,s.jsx)(`div`,{className:`max-w-xl`,children:(0,s.jsx)(a,{profile:{name:`Plain`}})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Term with severity",
  render: () => <Rows>
      <TermRuleRow rule={termWithSeverity} />
    </Rows>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Plain term (store-resolved, no severity)",
  render: () => <Rows>
      <TermRuleRow rule={plainTerm} />
      <TermRuleRow rule={storeResolvedTerm} />
    </Rows>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Rule row / Pattern (regex behind the tooltip)",
  render: () => <Rows>
      <PatternRuleRow pattern={pattern} />
    </Rows>
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Rules list / Populated",
  render: () => <div className="max-w-xl">
      <RulesBlock profile={populated} />
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Rules list / Empty",
  render: () => <div className="max-w-xl">
      <RulesBlock profile={{
      name: "Plain"
    }} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`TermRuleWithSeverity`,`PlainTermRule`,`PatternRule`,`RulesList`,`RulesListEmpty`]})))()}b();export{h as PatternRule,m as PlainTermRule,_ as RulesList,v as RulesListEmpty,p as TermRuleWithSeverity,y as __namedExportsOrder,c as default};