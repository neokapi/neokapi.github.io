import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{r as n,t as r}from"./runtime-DfFF6Hu8.js";import{n as i,t as a}from"./when-yVtpUFua.js";function o(e){return new Date(Date.now()-e).toISOString()}function s({label:e,children:t}){return(0,c.jsxs)(`div`,{className:`flex items-baseline gap-6 text-sm`,children:[(0,c.jsx)(`span`,{className:`w-40 shrink-0 text-xs text-muted-foreground`,children:e}),t]})}var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),i(),c=t(),l={title:`Foundations/When`,component:a,parameters:{layout:`padded`,docs:{description:{component:`One rendering for an instant: the date and time in the reader's own language,
the exact instant with its zone in the tooltip, and the ISO string in the
element's \`dateTime\` for anything reading the page as data.`}}},args:{iso:`2026-08-30T09:12:00Z`}},u=6e4,d=60*u,f=24*d,p={render:e=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(s,{label:r(`5TRiSPDpO92`,`Default`),children:(0,c.jsx)(a,{...e})}),(0,c.jsx)(s,{label:r(`cb0qpopCVQL`,`Date only`),children:(0,c.jsx)(a,{...e,timeStyle:`none`})}),(0,c.jsx)(s,{label:r(`cF4dVfzxWFa`,`Time only`),children:(0,c.jsx)(a,{...e,dateStyle:`none`})}),(0,c.jsx)(s,{label:r(`a9ADvpv9Mbr`,`Full date, long time`),children:(0,c.jsx)(a,{...e,dateStyle:`full`,timeStyle:`long`})})]})},m={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(s,{label:r(`jEy2cakNUhS`,`Inside the minute`),children:(0,c.jsx)(a,{iso:o(2e4),relative:!0})}),(0,c.jsx)(s,{label:r(`a6gXtfxf5za`,`Minutes`),children:(0,c.jsx)(a,{iso:o(3*u),relative:!0})}),(0,c.jsx)(s,{label:r(`cQJcbXNCqaO`,`Hours`),children:(0,c.jsx)(a,{iso:o(5*d),relative:!0})}),(0,c.jsx)(s,{label:r(`gizkdsL3zpr`,`Yesterday`),children:(0,c.jsx)(a,{iso:o(f),relative:!0})}),(0,c.jsx)(s,{label:r(`6tE9Dl0M3Jy`,`Weeks`),children:(0,c.jsx)(a,{iso:o(18*f),relative:!0})}),(0,c.jsx)(s,{label:r(`53Fz3tiAa7O`,`Months`),children:(0,c.jsx)(a,{iso:o(120*f),relative:!0})})]})},h={render:e=>(0,c.jsx)(`div`,{className:`flex flex-col gap-2`,children:[`en`,`fr`,`nb`,`ja`,`ar`].map(t=>(0,c.jsx)(s,{label:t,children:(0,c.jsx)(a,{...e,uiLocale:t})},t))})},g={render:()=>(0,c.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,c.jsx)(s,{label:r(`9cUUzhp6afp`,`Unparseable`),children:(0,c.jsx)(a,{iso:`whenever`})}),(0,c.jsx)(s,{label:r(`dCauUAEKxsQ`,`Empty`),children:(0,c.jsx)(a,{iso:``})})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      <Row label="Default">
        <When {...args} />
      </Row>
      <Row label="Date only">
        <When {...args} timeStyle="none" />
      </Row>
      <Row label="Time only">
        <When {...args} dateStyle="none" />
      </Row>
      <Row label="Full date, long time">
        <When {...args} dateStyle="full" timeStyle="long" />
      </Row>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`The default: a medium date and a short time, with the exact instant on hover.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Row label="Inside the minute">
        <When iso={ago(20_000)} relative />
      </Row>
      <Row label="Minutes">
        <When iso={ago(3 * MINUTE)} relative />
      </Row>
      <Row label="Hours">
        <When iso={ago(5 * HOUR)} relative />
      </Row>
      <Row label="Yesterday">
        <When iso={ago(DAY)} relative />
      </Row>
      <Row label="Weeks">
        <When iso={ago(18 * DAY)} relative />
      </Row>
      <Row label="Months">
        <When iso={ago(120 * DAY)} relative />
      </Row>
    </div>
}`,...m.parameters?.docs?.source},description:{story:'`relative` answers "how long ago", down to "now" and up to years.',...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {["en", "fr", "nb", "ja", "ar"].map(tag => <Row key={tag} label={tag}>
          <When {...args} uiLocale={tag} />
        </Row>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:`The instant follows the reader. One moment, named in three languages.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Row label="Unparseable">
        <When iso="whenever" />
      </Row>
      <Row label="Empty">
        <When iso="" />
      </Row>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`A value the runtime reads as no date is returned as it was given.`,...g.parameters?.docs?.description}}},_=[`DateAndTime`,`Relative`,`InAnotherUILanguage`,`NotADate`]})))()}v();export{p as DateAndTime,h as InAnotherUILanguage,g as NotADate,m as Relative,_ as __namedExportsOrder,l as default};