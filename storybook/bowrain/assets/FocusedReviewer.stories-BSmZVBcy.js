import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{n,t as r}from"./FocusedReviewer-Cya6942i.js";import{u as i,z as a}from"./fixtures-CwEJAmTf.js";function o(e){return{id:`b1`,source:`Reset your password`,source_coded:`Reset your password`,source_spans:[],targets:{"fr-FR":{text:`Réinitialisez votre mot de passe`,status:`translated`}},translatable:!0,has_spans:!1,properties:{},entities:[{key:`entity:0`,text:`password`,type:`entity:product`,start:11,end:19,dnt:!1}],...e}}function s(e){return{id:`itm-1::b1::fr-FR`,itemId:`itm-1`,itemName:`auth.json`,collectionId:``,termCompliance:``,locale:`fr-FR`,block:o({}),issues:[],...e}}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u=e=>(0,c.jsx)(`div`,{className:`flex h-[860px] flex-col overflow-hidden rounded-lg border border-border bg-background`,children:e()}),d={block_id:`b1`,item_name:`auth.json`,locale:`fr-FR`,voice_profile:a,terms:[{source_term:`password`,target_terms:[`mot de passe`],domain:`account`,status:`preferred`,start:11,end:19}],collection_id:`col-1`,collection_name:`Product UI`,coordinates:{product:`kapi`,channel:`app`},previous:{block_id:`b0`,source_runs:[{text:`Enter the email you signed up with`}],target_runs:[{text:`Saisissez l'adresse e-mail utilisée à l'inscription`}],status:`reviewed`},next:{block_id:`b2`,source_runs:[{text:`We sent a link to `},{ph:{id:`1`,type:`code:variable`,data:`{{.Email}}`,equiv:`{{.Email}}`}},{text:`.`}],target_runs:[{text:`Nous avons envoyé un lien à `},{ph:{id:`1`,type:`code:variable`,data:`{{.Email}}`,equiv:`{{.Email}}`}},{text:`.`}],status:`draft`},memory_match:{source:`Reset your password`,target:`Réinitialisez votre mot de passe`,score:1,match_type:`exact`},decision:{state:`rejected`,status:`draft`,by:`maria@bowrain.test`,at:`2026-08-30T09:12:00Z`,note:`Reads as machine output; soften the imperative.`,source_moved:!0},notes:[{id:`note-1`,blockId:`b1`,author:`maria@bowrain.test`,text:`Legal asked us to keep the product name unchanged.`,createdAt:`2026-08-30T09:15:00Z`}],voice_findings:[{category:`compliance`,severity:`major`,message:`Uses a term the profile forbids.`,original_text:`Réinitialisez`,suggestion:`Changez`,position:{kind:`range`,start:{run:0,offset:0},end:{run:0,offset:13}}}],voice_score:62,voice_bar:90,origin:{kind:`ai`,engine:`claude-sonnet`,tool:`translate`,timestamp:`2026-08-29T18:40:00Z`,profile:`vp-1`}},f={...d,decision:void 0,voice_findings:[],voice_score:94,voice_bar:80},p={title:`Review/FocusedReviewer`,component:r,parameters:{layout:`fullscreen`},decorators:[u],args:{sourceLocale:`en-US`,position:{index:3,total:12},localeName:e=>e===`fr-FR`?`French (France)`:`English (United States)`,editing:!1,onApprove:l(),onSignOff:l(),onReject:l(),onEditToggle:l(),onSaveEdit:l(),onCancelEdit:l(),onReCheck:l(),onMarkTerm:l(),onSuggestVoiceRule:l(),onMakeRule:l(),onProposeSourceChange:l(),onEntityPromote:l()}},m={args:{entry:s({termCompliance:`compliant`,voiceScore:94,voiceBar:80}),context:f,compliance:{rate:.94,basis:`voice+checks`,compliantBlocks:47,translatedBlocks:50}}},h={args:{entry:s({termCompliance:`violation`,voiceScore:91,voiceBar:80}),compliance:{rate:.81,basis:`voice+checks+terms`,compliantBlocks:40,translatedBlocks:50}}},g={args:{entry:s({termCompliance:`compliant`,voiceScore:62,voiceBar:90}),context:d,compliance:{rate:.66,basis:`voice+checks+terms`,compliantBlocks:33,translatedBlocks:50}}},_={args:{entry:s({issues:[{type:`placeholder`,severity:`error`,message:`Target is missing the {name} placeholder.`},{type:`length`,severity:`warning`,message:`Target is much longer than the source.`}]}),compliance:{rate:.7,basis:`checks`,compliantBlocks:35,translatedBlocks:50}}},v={args:{entry:s({block:o({source:`Your credits reset on . Upgrade any time.`,source_coded:`Your credits reset on . Upgrade any time.`,source_spans:[{span_type:`opening`,type:`fmt:bold`,id:`1`,data:`<strong>`},{span_type:`placeholder`,type:`code:variable`,id:`2`,data:`{{.ResetDate}}`,equiv_text:`{{.ResetDate}}`},{span_type:`closing`,type:`fmt:bold`,id:`1`,data:`</strong>`}],has_spans:!0,entities:[],targets:{"fr-FR":{text:`Vos crédits sont réinitialisés le . Améliorez à tout moment.`,status:`translated`}},targets_coded:{"fr-FR":`Vos crédits sont réinitialisés le . Améliorez à tout moment.`}}),termCompliance:`compliant`,voiceScore:90,voiceBar:80})}},y={args:{entry:s({}),voiceProfileId:`prof-1`,compliance:{rate:.88,basis:`voice+checks`,compliantBlocks:44,translatedBlocks:50}}},b={args:{entry:s({termCompliance:`violation`,voiceScore:62,voiceBar:90,issues:[{type:`placeholder`,severity:`error`,message:`Target is missing the {name} placeholder.`,original_text:`{name}`,suggestion:`Réinitialisez votre {name}`}]}),voiceProfileId:`vp-1`,context:d,compliance:{rate:.66,basis:`voice+checks+terms`,compliantBlocks:33,translatedBlocks:50}}},x={args:{entry:s({}),context:{block_id:`b1`,item_name:`auth.json`,locale:`fr-FR`,terms:[],collection_id:``,notes:[],voice_findings:[]}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`A block that clears every bar the server applies on approve.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Checks pass, but the target uses a forbidden term — the server refuses it,
and the reviewer sees which bar it missed rather than a green chip.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Checks and terminology pass; the voice score sits below the profile's bar.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`A block flagged by failing checks — the reviewer sees why.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:`A block carrying inline codes — a variable inside a bold pair, as an email
catalog holds it. Both cells are the same primitive, so the placeholder reads
as the same chip on either side and the two texts differ only where the
translation does.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`With a bound voice profile, the source lane + "make a rule" affordance appear.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`All five layers populated: the point rail names the profile and its guidance,
the neighbours sit above and below the unit, the findings carry their anchor
and their suggestion, the content-memory match shows both sides with a
one-click use, and the provenance block says who decided what, when.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    entry: entry({}),
    context: {
      block_id: "b1",
      item_name: "auth.json",
      locale: "fr-FR",
      terms: [],
      collection_id: "",
      notes: [],
      voice_findings: []
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`The same layout with nothing resolved: no profile bound, no terms matched, no
neighbours, no content-memory match, no decision recorded. Each layer says
which of those it is, so an ungoverned unit does not read as a broken panel.`,...x.parameters?.docs?.description}}},S=[`Passing`,`TermViolation`,`BelowVoiceBar`,`FailingChecks`,`InlineCodes`,`WithVoiceProfile`,`WithResolvedContext`,`WithoutResolvedContext`]})))()}C();export{g as BelowVoiceBar,_ as FailingChecks,v as InlineCodes,m as Passing,h as TermViolation,b as WithResolvedContext,y as WithVoiceProfile,x as WithoutResolvedContext,S as __namedExportsOrder,p as default};