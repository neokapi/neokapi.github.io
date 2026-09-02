import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,n as r,r as i,t as a}from"./voiceFixture-UTBYagI4.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{t(),a(),o=i.points[0].profile,s={title:`Pages/Voice Editor`,component:n,parameters:{layout:`padded`},args:{tabID:`t1`,profileName:``,valueSets:r,save:async()=>({saved:!0,changed:!0,target:`.kapi/voice.yaml`,problems:[]}),onSaved:()=>{},onCancel:()=>{}}},c={args:{profile:o,target:{target:`.kapi/voice.yaml`,writable:!0,exists:!0,inherited:!1}}},l={args:{profile:{name:`Northsea Support`},target:{target:`.kapi/profiles/support/voice.yaml`,writable:!0,exists:!1,inherited:!0}}},u={args:{profile:o,target:{target:`.kapi/voice.yaml`,writable:!0,exists:!0,inherited:!1},save:async()=>({saved:!1,changed:!1,problems:[{field:`style.person_pov`,message:`unknown value "fourth" (expected one of: first_plural, second, third)`},{field:`tone.formality`,message:`"brisk" is not one of the usual values. It is kept and rendered as written.`,warning:!0}]})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    profile,
    target: {
      target: ".kapi/voice.yaml",
      writable: true,
      exists: true,
      inherited: false
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Editing a profile the recipe already binds.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    profile: {
      name: "Northsea Support"
    },
    target: {
      target: ".kapi/profiles/support/voice.yaml",
      writable: true,
      exists: false,
      inherited: true
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`A point with no voice of its own: saving creates one.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    profile,
    target: {
      target: ".kapi/voice.yaml",
      writable: true,
      exists: true,
      inherited: false
    },
    save: async () => ({
      saved: false,
      changed: false,
      problems: [{
        field: "style.person_pov",
        message: 'unknown value "fourth" (expected one of: first_plural, second, third)'
      }, {
        field: "tone.formality",
        message: '"brisk" is not one of the usual values. It is kept and rendered as written.',
        warning: true
      }]
    })
  }
}`,...u.parameters?.docs?.source},description:{story:`A save the loader refused, with the field that has to change.`,...u.parameters?.docs?.description}}},d=[`Editing`,`Creating`,`Refused`]})))()}f();export{l as Creating,c as Editing,u as Refused,d as __namedExportsOrder,s as default};