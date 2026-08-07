import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{t as n}from"./jsx-runtime-DjOA8AOY.js";import{t as r}from"./label-B2tj0_5K.js";import{t as i}from"./button-BEDkCUOa.js";import{a,o,r as s,t as c}from"./card-DbBHwJvt.js";import{t as l}from"./iframe-CxszxSKC.js";import{n as u,t as d}from"./useInsertScriptTags-C4_vJmfx.js";import{n as f,t as p}from"./waitForElementMountedOnDom-gl3CNoii.js";function m(){let e=navigator.userAgent,t=`Browser`,n=`Device`;return e.includes(`Chrome`)&&!e.includes(`Edg`)?t=`Chrome`:e.includes(`Edg`)?t=`Edge`:e.includes(`Safari`)&&!e.includes(`Chrome`)?t=`Safari`:e.includes(`Firefox`)&&(t=`Firefox`),e.includes(`Mac OS`)?n=`macOS`:e.includes(`Windows`)?n=`Windows`:e.includes(`Linux`)&&!e.includes(`Android`)?n=`Linux`:e.includes(`Android`)?n=`Android`:(e.includes(`iPhone`)||e.includes(`iPad`))&&(n=`iOS`),`${t} on ${n}`}function h(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:i,challenge:a,userid:o,username:s,signatureAlgorithms:c,rpEntityName:l,rpId:d,attestationConveyancePreference:p,authenticatorAttachment:h,requireResidentKey:_,userVerificationRequirement:v,createTimeout:y,excludeCredentialIds:b}=n,{isFetchingTranslations:x}=r,S=m(),{insertScriptTags:C}=u({componentOrHookName:`WebauthnRegisterAutoLabel`,scriptTags:[{type:`module`,textContent:()=>`
          import { registerByWebAuthn } from "${i.resourcesPath}/js/webauthnRegister.js";

          const AUTO_LABEL = ${JSON.stringify(S)};

          const registerButton = document.getElementById('${t}');
          registerButton.addEventListener("click", function() {
            const originalPrompt = window.prompt;
            window.prompt = function() { return AUTO_LABEL; };

            const restorePrompt = function() { window.prompt = originalPrompt; };
            // registerByWebAuthn submits the form on success and never resolves;
            // on failure the button remains clickable, so restore after a tick.
            setTimeout(restorePrompt, 30000);

            const input = {
              challenge : '${a}',
              userid : '${o}',
              username : '${s}',
              signatureAlgorithms : ${JSON.stringify(c)},
              rpEntityName : ${JSON.stringify(l)},
              rpId : ${JSON.stringify(d)},
              attestationConveyancePreference : ${JSON.stringify(p)},
              authenticatorAttachment : ${JSON.stringify(h)},
              requireResidentKey : ${JSON.stringify(_)},
              userVerificationRequirement : ${JSON.stringify(v)},
              createTimeout : ${y},
              excludeCredentialIds : ${JSON.stringify(b)},
              initLabel : AUTO_LABEL,
              initLabelPrompt : '',
              errmsg : 'Your browser does not support passkeys.'
            };
            registerByWebAuthn(input);
          });
        `}]});(0,g.useEffect)(()=>{x||(async()=>{await f({elementId:t}),C()})()},[x])}var g,_=e((()=>{g=t(),d(),p()}));function v(e){let{kcContext:t,i18n:n}=e,{url:l,isSetRetry:u,isAppInitiatedAction:d}=t,{msg:f,msgStr:p}=n,m=`authenticateWebAuthnButton`;return h({authButtonId:m,kcContext:t,i18n:n}),(0,b.jsxs)(`div`,{className:`w-full max-w-md px-4`,children:[(0,b.jsx)(`div`,{className:`flex justify-center mb-8`,children:(0,b.jsx)(y,{})}),(0,b.jsxs)(c,{children:[(0,b.jsxs)(o,{className:`text-center space-y-1 pb-2`,children:[(0,b.jsx)(`h1`,{className:`text-2xl font-semibold tracking-tight`,children:f(`webauthn-registration-title`)}),(0,b.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Touch your security key or use your device biometrics to register a passkey.`})]}),(0,b.jsxs)(s,{className:`space-y-4`,children:[(0,b.jsxs)(`form`,{id:`register`,action:l.loginAction,method:`post`,children:[(0,b.jsx)(`input`,{type:`hidden`,id:`clientDataJSON`,name:`clientDataJSON`}),(0,b.jsx)(`input`,{type:`hidden`,id:`attestationObject`,name:`attestationObject`}),(0,b.jsx)(`input`,{type:`hidden`,id:`publicKeyCredentialId`,name:`publicKeyCredentialId`}),(0,b.jsx)(`input`,{type:`hidden`,id:`authenticatorLabel`,name:`authenticatorLabel`}),(0,b.jsx)(`input`,{type:`hidden`,id:`transports`,name:`transports`}),(0,b.jsx)(`input`,{type:`hidden`,id:`error`,name:`error`}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(`input`,{type:`checkbox`,id:`logout-sessions`,name:`logout-sessions`,value:`on`,defaultChecked:!0,className:`h-4 w-4 rounded border-border`}),(0,b.jsx)(r,{htmlFor:`logout-sessions`,className:`text-sm font-normal`,children:f(`logoutOtherSessions`)})]})]}),(0,b.jsx)(i,{id:m,type:`button`,className:`w-full`,children:p(`doRegisterSecurityKey`)}),!u&&d&&(0,b.jsx)(`form`,{action:l.loginAction,method:`post`,children:(0,b.jsx)(i,{type:`submit`,variant:`secondary`,className:`w-full`,name:`cancel-aia`,value:`true`,children:p(`doCancel`)})})]}),(0,b.jsx)(a,{})]})]})}function y(){return(0,b.jsx)(`img`,{src:x,width:`48`,height:`48`,alt:`Bowrain`,className:`rounded-xl`})}var b,x;e((()=>{b=n(),l(),_(),x=`/storybook/bowrain/logo.png`,v.__docgenInfo={description:``,methods:[],displayName:`WebauthnRegister`,props:{kcContext:{required:!0,tsType:{name:`Extract`,elements:[{name:`ExtendKcContext`,elements:[{name:`signature`,type:`object`,raw:`{
  themeName: ThemeName;
  properties: Record<KcEnvName, string>;
}`,signature:{properties:[{key:`themeName`,value:{name:`literal`,value:`"bowrain"`,required:!0}},{key:`properties`,value:{name:`Record`,elements:[{name:`never`},{name:`string`}],raw:`Record<KcEnvName, string>`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}],raw:`ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>`},{name:`signature`,type:`object`,raw:`{ pageId: "webauthn-register.ftl" }`,signature:{properties:[{key:`pageId`,value:{name:`literal`,value:`"webauthn-register.ftl"`,required:!0}}]}}],raw:`Extract<KcContext, { pageId: "webauthn-register.ftl" }>`},description:``},i18n:{required:!0,tsType:{name:`ofTypeI18n`},description:``}}}}))();export{v as default};