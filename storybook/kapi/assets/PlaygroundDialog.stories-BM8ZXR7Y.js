import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{t as r}from"./jsx-runtime-BdxMnOeJ.js";import{r as i,t as a}from"./runtime-DzTyTKAL.js";function o({children:e}){let[t,n]=s.useState(!1),[r,i]=s.useState(!1),o=s.useRef(null),l=s.useRef(null),u=s.useId();return s.useEffect(()=>{let e=o.current;if(!e)return;if(!t){e.open&&(e.close(),l.current?.focus());return}let n=document.body.style.overflow;return document.body.style.overflow=`hidden`,e.open||e.showModal(),()=>{document.body.style.overflow=n}},[t]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{children:a(`iWhs3Tg1QQ5`,`Opening the terminal downloads the engine on first use. Your session stays available when you close this window. Download files you want to keep before reloading the page.`)}),(0,c.jsx)(`button`,{ref:l,type:`button`,className:`button button--primary`,onClick:()=>{i(!0),n(!0)},children:r?a(`dq5ptSjhBLG`,`Resume terminal`):a(`4FaB2Nbpo7a`,`Open terminal`)}),(0,c.jsxs)(`dialog`,{ref:o,className:`kapi-pgx-dialog`,"aria-label":a(`7VDFnDxl7vg`,`CLI playground`),"aria-describedby":u,onCancel:e=>{e.preventDefault(),!o.current?.querySelector(`.kapi-pg-overlay`)&&n(!1)},onClose:()=>n(!1),children:[(0,c.jsxs)(`header`,{className:`kapi-pgx-dialog__header`,children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`h2`,{children:a(`8OOJl5oujDQ`,`CLI playground`)}),(0,c.jsx)(`p`,{id:u,children:a(`7UzzSSnTlyB`,`Files and terminal history stay in this browser session.`)})]}),(0,c.jsx)(`button`,{type:`button`,className:`button button--secondary button--sm`,onClick:()=>n(!1),children:a(`3NlHcwi24Wf`,`Close terminal`)})]}),(0,c.jsx)(`div`,{className:`kapi-pgx-dialog__body`,children:r&&e})]})]})}var s,c;function l(){return(l=e((()=>{i(),s=t(n()),c=r(),o.__docgenInfo={description:`Native modal semantics keep keyboard focus and background interaction scoped to the terminal.`,methods:[],displayName:`PlaygroundDialog`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})))()}var u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{i(),n(),l(),u=r(),{expect:d,userEvent:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Labs/CLI window`,component:o,parameters:{layout:`padded`},args:{children:(0,u.jsxs)(`div`,{style:{height:`100%`,display:`flex`,flexDirection:`column`,gap:12},children:[(0,u.jsx)(`p`,{children:a(`iyDSwWO3Vn3`,`This shell example preserves your input when the window closes. The website supplies the live terminal.`)}),(0,u.jsx)(`textarea`,{"aria-label":a(`eJUwSxWVDIo`,`Session notes`),placeholder:a(`btaQ7VwtH2o`,`Write a note, close, and resume.`),style:{flex:1,resize:`none`,padding:12}})]})}},h={},g={play:async({canvasElement:e})=>{await f.click(p(e).getByRole(`button`,{name:`Open terminal`})),await d(p(e).getByRole(`dialog`,{name:`CLI playground`})).toBeVisible()}},_={play:async({canvasElement:e})=>{let t=p(e);await f.click(t.getByRole(`button`,{name:`Open terminal`})),await f.type(t.getByRole(`textbox`),`Keep this session`),await f.click(t.getByRole(`button`,{name:`Close terminal`})),await f.click(t.getByRole(`button`,{name:`Resume terminal`})),await d(t.getByRole(`textbox`)).toHaveValue(`Keep this session`)}},v=[`Closed`,`Open`,`ResumeSession`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "Open terminal"
    }));
    await expect(within(canvasElement).getByRole("dialog", {
      name: "CLI playground"
    })).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open terminal"
    }));
    await userEvent.type(canvas.getByRole("textbox"), "Keep this session");
    await userEvent.click(canvas.getByRole("button", {
      name: "Close terminal"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Resume terminal"
    }));
    await expect(canvas.getByRole("textbox")).toHaveValue("Keep this session");
  }
}`,..._.parameters?.docs?.source}}}})))()}y();export{h as Closed,g as Open,_ as ResumeSession,v as __namedExportsOrder,m as default};