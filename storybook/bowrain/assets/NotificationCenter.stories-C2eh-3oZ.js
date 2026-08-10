import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./jsx-runtime-DjOA8AOY.js";import{n,t as r}from"./NotificationCenter-D1adUHF2.js";import{s as i,x as a}from"./fixtures-B0Y83xiM.js";var o,s,c,l,u,d,f;e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/NotificationCenter`,component:r,tags:[`autodocs`],decorators:[e=>(0,o.jsx)(`div`,{style:{padding:24},children:(0,o.jsx)(e,{})})]},l={args:{notifications:a,unreadCount:2,onMarkRead:s(),onMarkAllRead:s(),onDelete:s(),onNotificationClick:s()}},u={args:{notifications:a.map(e=>({...e,read:!0})),unreadCount:0,onMarkRead:s(),onMarkAllRead:s(),onDelete:s()}},d={args:{notifications:[],unreadCount:0,onMarkRead:s(),onMarkAllRead:s(),onDelete:s()}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    unreadCount: 2,
    onMarkRead: fn(),
    onMarkAllRead: fn(),
    onDelete: fn(),
    onNotificationClick: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.map(n => ({
      ...n,
      read: true
    })),
    unreadCount: 0,
    onMarkRead: fn(),
    onMarkAllRead: fn(),
    onDelete: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [],
    unreadCount: 0,
    onMarkRead: fn(),
    onMarkAllRead: fn(),
    onDelete: fn()
  }
}`,...d.parameters?.docs?.source}}},f=[`WithUnread`,`AllRead`,`Empty`]}))();export{u as AllRead,d as Empty,l as WithUnread,f as __namedExportsOrder,c as default};