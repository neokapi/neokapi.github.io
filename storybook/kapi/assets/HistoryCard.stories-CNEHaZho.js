import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{o as n,t as r}from"./review-C1QWr6EF.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Review/HistoryCard`,component:n,tags:[`autodocs`],parameters:{docs:{description:{component:`What this unit said before, and the wording the content memory already holds for it. Both halves carry their text; a prior approval whose governing context has moved is marked in muted ink, because the mark describes the context and the severities belong to the Checks card. A surface with a write offers the match's wording.`}}},args:{sourceLocale:`en-US`,locale:`fr-FR`},render:e=>(0,i.jsx)(`div`,{className:`w-[28rem]`,children:(0,i.jsx)(n,{...e})})},s={name:`Approved before, still governed`,args:{history:{prior:{source:`Hello {name}`,target:`Bonjour {name}`,governed:!0},match:{score:100,source:`Hello {name}`,target:`Bonjour {name}`,kind:`exact`}}}},c={name:`Approved before, under a context that has moved`,args:{history:{prior:{source:`Hi {name}`,target:`Salut {name}`,governed:!1},match:{score:88,source:`Hello {name}!`,target:`Bonjour {name} !`,kind:`fuzzy`}}}},l={name:`Match only, on a surface that can take it (platform)`,args:{history:{match:{score:92,source:`Reset your password`,target:`Réinitialisez votre mot de passe`,kind:`fuzzy`}},onUseMatch:a()}},u={name:`The content memory has not been read into this copy`,args:{history:{unseeded:!0}}},d={name:`Nothing approved, no close match`,args:{history:{},emptyText:`Nothing has been approved for this unit yet, and the content memory holds no close match.`}},f={args:{loading:!0}},p={globals:{theme:`dark`},args:{history:{prior:{source:`Hi {name}`,target:`Salut {name}`,governed:!1},match:{score:88,source:`Hello {name}!`,target:`Bonjour {name} !`,kind:`fuzzy`}},onUseMatch:a()}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Approved before, still governed",
  args: {
    history: {
      prior: {
        source: "Hello {name}",
        target: "Bonjour {name}",
        governed: true
      },
      match: {
        score: 100,
        source: "Hello {name}",
        target: "Bonjour {name}",
        kind: "exact"
      }
    }
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Approved before, under a context that has moved",
  args: {
    history: {
      prior: {
        source: "Hi {name}",
        target: "Salut {name}",
        governed: false
      },
      match: {
        score: 88,
        source: "Hello {name}!",
        target: "Bonjour {name} !",
        kind: "fuzzy"
      }
    }
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Match only, on a surface that can take it (platform)",
  args: {
    history: {
      match: {
        score: 92,
        source: "Reset your password",
        target: "Réinitialisez votre mot de passe",
        kind: "fuzzy"
      }
    },
    onUseMatch: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "The content memory has not been read into this copy",
  args: {
    history: {
      unseeded: true
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Nothing approved, no close match",
  args: {
    history: {},
    emptyText: "Nothing has been approved for this unit yet, and the content memory holds no close match."
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  },
  args: {
    history: {
      prior: {
        source: "Hi {name}",
        target: "Salut {name}",
        governed: false
      },
      match: {
        score: 88,
        source: "Hello {name}!",
        target: "Bonjour {name} !",
        kind: "fuzzy"
      }
    },
    onUseMatch: fn()
  }
}`,...p.parameters?.docs?.source}}},m=[`StillGoverned`,`ContextMoved`,`MatchWithWrite`,`Unseeded`,`Empty`,`Loading`,`Dark`]})))()}h();export{c as ContextMoved,p as Dark,d as Empty,f as Loading,l as MatchWithWrite,s as StillGoverned,u as Unseeded,m as __namedExportsOrder,o as default};