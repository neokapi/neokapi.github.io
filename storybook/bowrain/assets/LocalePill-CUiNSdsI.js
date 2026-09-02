import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{i as n,n as r,r as i}from"./locale-name-D7SvFy-a.js";function a(e){let t=0;for(let n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);return Math.abs(t)%360}function o({locale:e,className:t,muted:r,showName:o}){let c=a(e),l=n(e),u=(0,s.jsx)(`span`,{title:o?void 0:i(e),className:`inline-flex shrink-0 items-center px-1.5 py-px rounded font-mono text-[10px] font-medium ${o?``:t??``}`,style:r?{backgroundColor:`oklch(var(--pill-bg-l, 0.92) 0 0)`,color:`var(--muted-foreground)`}:{backgroundColor:`oklch(var(--pill-bg-l, 0.92) 0.03 ${c})`,color:`oklch(var(--pill-fg-l, 0.4) 0.08 ${c})`},children:e});return o?(0,s.jsxs)(`span`,{className:`inline-flex min-w-0 items-center gap-1.5 ${t??``}`,children:[u,(0,s.jsx)(`span`,{className:`truncate`,children:l})]}):u}var s;function c(){return(c=e((()=>{r(),s=t(),o.__docgenInfo={description:`Compact locale badge with subtle color-coded background.
Color is deterministic based on the locale code.
Adjusts lightness for dark mode via CSS custom properties.

The pill always carries the language name in its title, so a reader who does
not know the tag can reach it; \`showName\` puts the name on the page beside it.`,methods:[],displayName:`LocalePill`,props:{locale:{required:!0,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``},muted:{required:!1,tsType:{name:`boolean`},description:`Render the pill in a neutral grey instead of its color-coded hue — used to
de-emphasise locales outside the active language filter, so only the
filtered-in locales keep their colour.`},showName:{required:!1,tsType:{name:`boolean`},description:`Render the language name beside the pill. Use it wherever there is room:
a dropdown item, a list row, a heading. The bare pill is for dense grids
(a coverage matrix, a table cell) where a name does not fit; there the
title carries it.`}}}})))()}export{c as n,o as t};