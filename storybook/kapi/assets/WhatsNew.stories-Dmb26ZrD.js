import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./jsx-runtime-BB9-612F.js";import{n,r,t as i}from"./WhatsNew-CVpJDWiQ.js";import{d as a,i as o,n as s,o as c,s as l,t as u,u as d}from"./standings-BhBjmO7h.js";function f({standings:e,onOpen:t}){return(0,p.jsxs)(`div`,{className:`space-y-8`,children:[(0,p.jsx)(n,{standings:e}),(0,p.jsx)(i,{standings:e,onOpen:t})]})}var p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),d(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/WhatsNew`,component:f,tags:[`autodocs`],args:{onOpen:m()},decorators:[e=>(0,p.jsx)(`div`,{className:`mx-auto max-w-4xl p-6`,children:(0,p.jsx)(e,{})})]},g={theme:`dark`},_={args:{standings:c}},v={args:_.args,globals:g},y={args:{standings:l}},b={args:y.args,globals:g},x={args:{standings:[{...s,latest:{...s.latest,new_by_theme:{names:2,words:1,writing:1,memory:3}},conflicts:2},a({project:`prj_quiet`,project_name:`Release Notes`,rules:4,suggested:6,latest:{actor:{kind:`person`,name:`Ingrid Solberg`,session:`day-3`},at:new Date(Date.now()-18e7).toISOString(),working:!1,recorded:6,corrected:0}})]}},S={args:x.args,globals:g},C={args:{standings:[u]}},w={args:{standings:o}},T=[`OneProjectWorking`,`OneProjectWorkingDark`,`SeveralProjects`,`SeveralProjectsDark`,`EveryKind`,`EveryKindDark`,`NothingNew`,`NothingRecorded`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    standings: ONE_WORKING
  }
}`,..._.parameters?.docs?.source},description:{story:`One project with four new items while claude-code is working in it: its
mark, a working chip with a live dot, and a chip for each kind it noticed.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: OneProjectWorking.args,
  globals: dark
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    standings: SEVERAL
  }
}`,...y.parameters?.docs?.source},description:{story:`Several projects, newest session first. KapiMart has a disagreement, so it
carries the warning chip and reads Decide, and "needs you" is the one count
in the warning ink.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: SeveralProjects.args,
  globals: dark
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    standings: [{
      ...KAPIMART,
      latest: {
        ...KAPIMART.latest!,
        new_by_theme: {
          names: 2,
          words: 1,
          writing: 1,
          memory: 3
        }
      },
      conflicts: 2
    }, standing({
      project: "prj_quiet",
      project_name: "Release Notes",
      rules: 4,
      suggested: 6,
      latest: {
        actor: {
          kind: "person",
          name: "Ingrid Solberg",
          session: "day-3"
        },
        at: new Date(Date.now() - 50 * 3_600_000).toISOString(),
        working: false,
        recorded: 6,
        corrected: 0
      }
    })]
  }
}`,...x.parameters?.docs?.source},description:{story:`A session that noticed one of every kind, and a project whose latest session
said nothing about kinds, so its chip counts its suggestions.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: EveryKind.args,
  globals: dark
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    standings: [FIELD_GUIDE]
  }
}`,...C.parameters?.docs?.source},description:{story:`Projects hold rules and nothing is new: the counts stay, and What's new says so in one line.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    standings: NOTHING
  }
}`,...w.parameters?.docs?.source},description:{story:`Nothing is recorded in any project yet: zeros, and one line saying what will appear.`,...w.parameters?.docs?.description}}}})))()}E();export{x as EveryKind,S as EveryKindDark,C as NothingNew,w as NothingRecorded,_ as OneProjectWorking,v as OneProjectWorkingDark,y as SeveralProjects,b as SeveralProjectsDark,T as __namedExportsOrder,h as default};