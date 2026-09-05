import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./FocusedReviewer-DqEQY4qG.js";import{B as i,d as a,l as o}from"./fixtures-BuwUq1M_.js";function s(e){return{id:`b1`,source:`Reset your password`,source_coded:`Reset your password`,source_spans:[],targets:{"fr-FR":{text:`Réinitialisez votre mot de passe`,status:`translated`}},translatable:!0,has_spans:!1,properties:{},entities:[{key:`entity:0`,text:`password`,type:`entity:product`,start:11,end:19,dnt:!1}],...e}}function c(e){return{id:`itm-1::b1::fr-FR`,itemId:`itm-1`,itemName:`auth.json`,collectionId:``,termCompliance:``,locale:`fr-FR`,block:s({}),issues:[],...e}}var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{n(),a(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d=e=>(0,l.jsx)(`div`,{className:`flex h-[860px] flex-col overflow-hidden rounded-lg border border-border bg-background`,children:e()}),f={block_id:`b1`,item_name:`auth.json`,locale:`fr-FR`,collection_id:`col-1`,terms:[{source_term:`password`,target_terms:[`mot de passe`],domain:`account`,status:`preferred`,start:11,end:19}],notes:[{id:`note-1`,blockId:`b1`,author:`maria@bowrain.test`,text:`Legal asked us to keep the product name unchanged.`,createdAt:`2026-08-30T09:15:00Z`}],voice_score:62,voice_bar:90,point:i,neighbourhood:{key:`b1`,before:[{key:`b0`,source:[{text:`Enter the email you signed up with`}],target:[{text:`Saisissez l'adresse e-mail utilisée à l'inscription`}],status:`reviewed`}],after:[{key:`b2`,source:[{text:`We sent a link to `},{ph:{id:`1`,type:`code:variable`,data:`{{.Email}}`,equiv:`{{.Email}}`}},{text:`.`}],target:[{text:`Nous avons envoyé un lien à `},{ph:{id:`1`,type:`code:variable`,data:`{{.Email}}`,equiv:`{{.Email}}`}},{text:`.`}],status:`draft`}],window:2},history:{match:{source:`Reset your password`,target:`Réinitialisez votre mot de passe`,score:100,kind:`exact`}},judgement:{findings:[{category:`compliance`,severity:`major`,message:`Uses a term the profile forbids.`,original_text:`Réinitialisez`,suggestion:`Changez`,position:{kind:`range`,start:{run:0,offset:0},end:{run:0,offset:13}}}]},provenance:{origin:{kind:`ai`,engine:`claude-sonnet`,tool:`translate`,timestamp:`2026-08-29T18:40:00Z`,profile:`vp-1`},review_state:`rejected`,status:`draft`,by:`maria@bowrain.test`,at:`2026-08-30T09:12:00Z`,note:`Reads as machine output; soften the imperative.`,stale:!0}},p={...f,judgement:{},provenance:{origin:f.provenance.origin},voice_score:94,voice_bar:80},m={title:`Review/FocusedReviewer`,component:r,parameters:{layout:`fullscreen`},decorators:[d],args:{sourceLocale:`en-US`,position:{index:3,total:12},localeName:e=>e===`fr-FR`?`French (France)`:`English (United States)`,editing:!1,onApprove:u(),onSignOff:u(),onReject:u(),onEditToggle:u(),onSaveEdit:u(),onCancelEdit:u(),onReCheck:u(),onMarkTerm:u(),onSuggestVoiceRule:u(),onMakeRule:u(),onProposeSourceChange:u(),onEntityPromote:u()}},h={args:{entry:c({termCompliance:`compliant`,voiceScore:94,voiceBar:80}),context:p,compliance:{rate:.94,basis:`voice+checks`,compliantBlocks:47,translatedBlocks:50}}},g={args:{entry:c({termCompliance:`violation`,voiceScore:91,voiceBar:80}),compliance:{rate:.81,basis:`voice+checks+terms`,compliantBlocks:40,translatedBlocks:50}}},_={args:{entry:c({termCompliance:`compliant`,voiceScore:62,voiceBar:90}),context:f,compliance:{rate:.66,basis:`voice+checks+terms`,compliantBlocks:33,translatedBlocks:50}}},v={args:{entry:c({issues:[{type:`placeholder`,severity:`error`,message:`Target is missing the {name} placeholder.`},{type:`length`,severity:`warning`,message:`Target is much longer than the source.`}]}),compliance:{rate:.7,basis:`checks`,compliantBlocks:35,translatedBlocks:50}}},y={args:{entry:c({block:s({source:`Your credits reset on . Upgrade any time.`,source_coded:`Your credits reset on . Upgrade any time.`,source_spans:[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<strong>`},{span_type:`placeholder`,type:`code:variable`,id:`2`,data:`{{.ResetDate}}`,equiv_text:`{{.ResetDate}}`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</strong>`}],has_spans:!0,entities:[],targets:{"fr-FR":{text:`Vos crédits sont réinitialisés le . Améliorez à tout moment.`,status:`translated`}},targets_coded:{"fr-FR":`Vos crédits sont réinitialisés le . Améliorez à tout moment.`}}),termCompliance:`compliant`,voiceScore:90,voiceBar:80})}},b={args:{entry:c({}),voiceProfileId:`prof-1`,compliance:{rate:.88,basis:`voice+checks`,compliantBlocks:44,translatedBlocks:50}}},x={args:{entry:c({termCompliance:`violation`,voiceScore:62,voiceBar:90,issues:[{type:`placeholder`,severity:`error`,message:`Target is missing the {name} placeholder.`,original_text:`{name}`,suggestion:`Réinitialisez votre {name}`}]}),voiceProfileId:`vp-1`,context:f,compliance:{rate:.66,basis:`voice+checks+terms`,compliantBlocks:33,translatedBlocks:50}}},S={args:{entry:c({}),context:o(`b1`,`auth.json`,`fr-FR`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "compliant",
      voiceScore: 94,
      voiceBar: 80
    }),
    context: passingContext,
    compliance: {
      rate: 0.94,
      basis: "voice+checks",
      compliantBlocks: 47,
      translatedBlocks: 50
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`A block that clears every bar the server applies on approve.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "violation",
      voiceScore: 91,
      voiceBar: 80
    }),
    compliance: {
      rate: 0.81,
      basis: "voice+checks+terms",
      compliantBlocks: 40,
      translatedBlocks: 50
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Checks pass, but the target uses a forbidden term — the server refuses it,
and the reviewer sees which bar it missed rather than a green chip.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "compliant",
      voiceScore: 62,
      voiceBar: 90
    }),
    context: resolvedContext,
    compliance: {
      rate: 0.66,
      basis: "voice+checks+terms",
      compliantBlocks: 33,
      translatedBlocks: 50
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`Checks and terminology pass; the voice score sits below the profile's bar.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      issues: [{
        type: "placeholder",
        severity: "error",
        message: "Target is missing the {name} placeholder."
      }, {
        type: "length",
        severity: "warning",
        message: "Target is much longer than the source."
      }]
    }),
    compliance: {
      rate: 0.7,
      basis: "checks",
      compliantBlocks: 35,
      translatedBlocks: 50
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`A block flagged by failing checks — the reviewer sees why.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      block: block({
        source: "Your credits reset on . Upgrade any time.",
        source_coded: "Your credits reset on \\uE001\\uE003\\uE002. Upgrade any time.",
        source_spans: [{
          span_type: "opening",
          type: "fmt:bold",
          id: "1",
          data: "<strong>"
        }, {
          span_type: "placeholder",
          type: "code:variable",
          id: "2",
          data: "{{.ResetDate}}",
          equiv_text: "{{.ResetDate}}"
        }, {
          span_type: "closing",
          type: "fmt:bold",
          id: "1",
          data: "</strong>"
        }],
        has_spans: true,
        entities: [],
        targets: {
          "fr-FR": {
            text: "Vos crédits sont réinitialisés le . Améliorez à tout moment.",
            status: "translated"
          }
        },
        targets_coded: {
          "fr-FR": "Vos crédits sont réinitialisés le \\uE001\\uE003\\uE002. Améliorez à tout moment."
        }
      }),
      termCompliance: "compliant",
      voiceScore: 90,
      voiceBar: 80
    })
  }
}`,...y.parameters?.docs?.source},description:{story:`A block carrying inline codes — a variable inside a bold pair, as an email
catalog holds it. Both cells are the same primitive, so the placeholder reads
as the same chip on either side and the two texts differ only where the
translation does.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({}),
    voiceProfileId: "prof-1",
    compliance: {
      rate: 0.88,
      basis: "voice+checks",
      compliantBlocks: 44,
      translatedBlocks: 50
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`With a bound voice profile, the source lane + "make a rule" affordance appear.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({
      termCompliance: "violation",
      voiceScore: 62,
      voiceBar: 90,
      issues: [{
        type: "placeholder",
        severity: "error",
        message: "Target is missing the {name} placeholder.",
        original_text: "{name}",
        suggestion: "Réinitialisez votre {name}"
      }]
    }),
    voiceProfileId: "vp-1",
    context: resolvedContext,
    compliance: {
      rate: 0.66,
      basis: "voice+checks+terms",
      compliantBlocks: 33,
      translatedBlocks: 50
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`All five layers populated: the point rail names the profile and its guidance,
the neighbours sit above and below the unit, the findings carry their anchor
and their suggestion, the content-memory match shows both sides with a
one-click use, and the provenance block says who decided what, when.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({}),
    context: emptyReviewContext("b1", "auth.json", "fr-FR")
  }
}`,...S.parameters?.docs?.source},description:{story:`The same layout with nothing resolved: no profile bound, no terms matched, no
neighbours, no content-memory match, no decision recorded. Each layer says
which of those it is, so an ungoverned unit does not read as a broken panel.`,...S.parameters?.docs?.description}}},C=[`Passing`,`TermViolation`,`BelowVoiceBar`,`FailingChecks`,`InlineCodes`,`WithVoiceProfile`,`WithResolvedContext`,`WithoutResolvedContext`]})))()}w();export{_ as BelowVoiceBar,v as FailingChecks,y as InlineCodes,h as Passing,g as TermViolation,x as WithResolvedContext,b as WithVoiceProfile,S as WithoutResolvedContext,C as __namedExportsOrder,m as default};