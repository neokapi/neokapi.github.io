import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{r,t as i}from"./runtime-DfFF6Hu8.js";import{t as a}from"./label-CgHqYTfu.js";import{t as o}from"./button-BaXxZsjE.js";import{a as s,o as c,r as l,t as u}from"./card-CGQ31ekK.js";import{n as d}from"./iframe-Craooova.js";import{n as f,t as p}from"./useInsertScriptTags-CRvKaByq.js";import{n as m}from"./waitForElementMountedOnDom-eu8pmOIo.js";function h(){let e=navigator.userAgent,t=`Browser`,n=`Device`;return e.includes(`Chrome`)&&!e.includes(`Edg`)?t=`Chrome`:e.includes(`Edg`)?t=`Edge`:e.includes(`Safari`)&&!e.includes(`Chrome`)?t=`Safari`:e.includes(`Firefox`)&&(t=`Firefox`),e.includes(`Mac OS`)?n=`macOS`:e.includes(`Windows`)?n=`Windows`:e.includes(`Linux`)&&!e.includes(`Android`)?n=`Linux`:e.includes(`Android`)?n=`Android`:(e.includes(`iPhone`)||e.includes(`iPad`))&&(n=`iOS`),`${t} on ${n}`}function g(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:i,challenge:a,userid:o,username:s,signatureAlgorithms:c,rpEntityName:l,rpId:u,attestationConveyancePreference:d,authenticatorAttachment:p,requireResidentKey:g,userVerificationRequirement:v,createTimeout:y,excludeCredentialIds:b}=n,{isFetchingTranslations:x}=r,S=h(),{insertScriptTags:C}=f({componentOrHookName:`WebauthnRegisterAutoLabel`,scriptTags:[{type:`module`,textContent:()=>`
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
              rpId : ${JSON.stringify(u)},
              attestationConveyancePreference : ${JSON.stringify(d)},
              authenticatorAttachment : ${JSON.stringify(p)},
              requireResidentKey : ${JSON.stringify(g)},
              userVerificationRequirement : ${JSON.stringify(v)},
              createTimeout : ${y},
              excludeCredentialIds : ${JSON.stringify(b)},
              initLabel : AUTO_LABEL,
              initLabelPrompt : '',
              errmsg : 'Your browser does not support passkeys.'
            };
            registerByWebAuthn(input);
          });
        `}]});(0,_.useEffect)(()=>{x||(async()=>{await m({elementId:t}),C()})()},[x])}var _;function v(){return(v=e((()=>{_=t(),p()})))()}function y(e){let{kcContext:t,i18n:n}=e,{url:r,isSetRetry:d,isAppInitiatedAction:f}=t,{msg:p,msgStr:m}=n,h=`authenticateWebAuthnButton`;return g({authButtonId:h,kcContext:t,i18n:n}),(0,x.jsxs)(`div`,{className:`w-full max-w-md px-4`,children:[(0,x.jsx)(`div`,{className:`flex justify-center mb-8`,children:(0,x.jsx)(b,{})}),(0,x.jsxs)(u,{children:[(0,x.jsxs)(c,{className:`text-center space-y-1 pb-2`,children:[(0,x.jsx)(`h1`,{className:`text-2xl font-semibold tracking-tight`,children:p(`webauthn-registration-title`)}),(0,x.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:i(`jOq0M0wbeud`,`Touch your security key or use your device biometrics to register a passkey.`)})]}),(0,x.jsxs)(l,{className:`space-y-4`,children:[(0,x.jsxs)(`form`,{id:`register`,action:r.loginAction,method:`post`,children:[(0,x.jsx)(`input`,{type:`hidden`,id:`clientDataJSON`,name:`clientDataJSON`}),(0,x.jsx)(`input`,{type:`hidden`,id:`attestationObject`,name:`attestationObject`}),(0,x.jsx)(`input`,{type:`hidden`,id:`publicKeyCredentialId`,name:`publicKeyCredentialId`}),(0,x.jsx)(`input`,{type:`hidden`,id:`authenticatorLabel`,name:`authenticatorLabel`}),(0,x.jsx)(`input`,{type:`hidden`,id:`transports`,name:`transports`}),(0,x.jsx)(`input`,{type:`hidden`,id:`error`,name:`error`}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(`input`,{type:`checkbox`,id:`logout-sessions`,name:`logout-sessions`,value:`on`,defaultChecked:!0,className:`h-4 w-4 rounded border-border`}),(0,x.jsx)(a,{htmlFor:`logout-sessions`,className:`text-sm font-normal`,children:p(`logoutOtherSessions`)})]})]}),(0,x.jsx)(o,{id:h,type:`button`,className:`w-full`,children:m(`doRegisterSecurityKey`)}),!d&&f&&(0,x.jsx)(`form`,{action:r.loginAction,method:`post`,children:(0,x.jsx)(o,{type:`submit`,variant:`secondary`,className:`w-full`,name:`cancel-aia`,value:`true`,children:m(`doCancel`)})})]}),(0,x.jsx)(s,{})]})]})}function b(){return(0,x.jsx)(`img`,{src:S,width:`48`,height:`48`,alt:i(`8MaWhBBOAfX`,`Bowrain`),className:`rounded-xl`})}var x,S;function C(){return(C=e((()=>{r(),x=n(),d(),v(),S=`/storybook/bowrain/logo.png`,y.__docgenInfo={description:``,methods:[],displayName:`WebauthnRegister`,props:{kcContext:{required:!0,tsType:{name:`Extract`,elements:[{name:`ExtendKcContext`,elements:[{name:`signature`,type:`object`,raw:`{
  themeName: ThemeName;
  properties: Record<KcEnvName, string>;
}`,signature:{properties:[{key:`themeName`,value:{name:`literal`,value:`"bowrain"`,required:!0}},{key:`properties`,value:{name:`Record`,elements:[{name:`never`},{name:`string`}],raw:`Record<KcEnvName, string>`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}],raw:`ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>`},{name:`signature`,type:`object`,raw:`{ pageId: "webauthn-register.ftl" }`,signature:{properties:[{key:`pageId`,value:{name:`literal`,value:`"webauthn-register.ftl"`,required:!0}}]}}],raw:`Extract<KcContext, { pageId: "webauthn-register.ftl" }>`},description:``},i18n:{required:!0,tsType:{name:`ofTypeI18n`},description:``}}}})))()}C();export{y as default};