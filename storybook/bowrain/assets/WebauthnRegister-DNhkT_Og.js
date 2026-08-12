import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{t as r}from"./label-C65IEaPf.js";import{t as i}from"./button-n2oHF6Cz.js";import{a,o,r as s,t as c}from"./card-C4rRlviK.js";import{n as l}from"./iframe-BSsD3vWp.js";import{n as u,t as d}from"./useInsertScriptTags-CRvKaByq.js";import{n as f}from"./waitForElementMountedOnDom-eu8pmOIo.js";function p(){let e=navigator.userAgent,t=`Browser`,n=`Device`;return e.includes(`Chrome`)&&!e.includes(`Edg`)?t=`Chrome`:e.includes(`Edg`)?t=`Edge`:e.includes(`Safari`)&&!e.includes(`Chrome`)?t=`Safari`:e.includes(`Firefox`)&&(t=`Firefox`),e.includes(`Mac OS`)?n=`macOS`:e.includes(`Windows`)?n=`Windows`:e.includes(`Linux`)&&!e.includes(`Android`)?n=`Linux`:e.includes(`Android`)?n=`Android`:(e.includes(`iPhone`)||e.includes(`iPad`))&&(n=`iOS`),`${t} on ${n}`}function m(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:i,challenge:a,userid:o,username:s,signatureAlgorithms:c,rpEntityName:l,rpId:d,attestationConveyancePreference:m,authenticatorAttachment:g,requireResidentKey:_,userVerificationRequirement:v,createTimeout:y,excludeCredentialIds:b}=n,{isFetchingTranslations:x}=r,S=p(),{insertScriptTags:C}=u({componentOrHookName:`WebauthnRegisterAutoLabel`,scriptTags:[{type:`module`,textContent:()=>`
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
              attestationConveyancePreference : ${JSON.stringify(m)},
              authenticatorAttachment : ${JSON.stringify(g)},
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
        `}]});(0,h.useEffect)(()=>{x||(async()=>{await f({elementId:t}),C()})()},[x])}var h;function g(){return(g=e((()=>{h=t(),d()})))()}function _(e){let{kcContext:t,i18n:n}=e,{url:l,isSetRetry:u,isAppInitiatedAction:d}=t,{msg:f,msgStr:p}=n,h=`authenticateWebAuthnButton`;return m({authButtonId:h,kcContext:t,i18n:n}),(0,y.jsxs)(`div`,{className:`w-full max-w-md px-4`,children:[(0,y.jsx)(`div`,{className:`flex justify-center mb-8`,children:(0,y.jsx)(v,{})}),(0,y.jsxs)(c,{children:[(0,y.jsxs)(o,{className:`text-center space-y-1 pb-2`,children:[(0,y.jsx)(`h1`,{className:`text-2xl font-semibold tracking-tight`,children:f(`webauthn-registration-title`)}),(0,y.jsx)(`p`,{className:`text-sm text-muted-foreground`,children:`Touch your security key or use your device biometrics to register a passkey.`})]}),(0,y.jsxs)(s,{className:`space-y-4`,children:[(0,y.jsxs)(`form`,{id:`register`,action:l.loginAction,method:`post`,children:[(0,y.jsx)(`input`,{type:`hidden`,id:`clientDataJSON`,name:`clientDataJSON`}),(0,y.jsx)(`input`,{type:`hidden`,id:`attestationObject`,name:`attestationObject`}),(0,y.jsx)(`input`,{type:`hidden`,id:`publicKeyCredentialId`,name:`publicKeyCredentialId`}),(0,y.jsx)(`input`,{type:`hidden`,id:`authenticatorLabel`,name:`authenticatorLabel`}),(0,y.jsx)(`input`,{type:`hidden`,id:`transports`,name:`transports`}),(0,y.jsx)(`input`,{type:`hidden`,id:`error`,name:`error`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,y.jsx)(`input`,{type:`checkbox`,id:`logout-sessions`,name:`logout-sessions`,value:`on`,defaultChecked:!0,className:`h-4 w-4 rounded border-border`}),(0,y.jsx)(r,{htmlFor:`logout-sessions`,className:`text-sm font-normal`,children:f(`logoutOtherSessions`)})]})]}),(0,y.jsx)(i,{id:h,type:`button`,className:`w-full`,children:p(`doRegisterSecurityKey`)}),!u&&d&&(0,y.jsx)(`form`,{action:l.loginAction,method:`post`,children:(0,y.jsx)(i,{type:`submit`,variant:`secondary`,className:`w-full`,name:`cancel-aia`,value:`true`,children:p(`doCancel`)})})]}),(0,y.jsx)(a,{})]})]})}function v(){return(0,y.jsx)(`img`,{src:b,width:`48`,height:`48`,alt:`Bowrain`,className:`rounded-xl`})}var y,b;function x(){return(x=e((()=>{y=n(),l(),g(),b=`/storybook/bowrain/logo.png`,_.__docgenInfo={description:``,methods:[],displayName:`WebauthnRegister`,props:{kcContext:{required:!0,tsType:{name:`Extract`,elements:[{name:`ExtendKcContext`,elements:[{name:`signature`,type:`object`,raw:`{
  themeName: ThemeName;
  properties: Record<KcEnvName, string>;
}`,signature:{properties:[{key:`themeName`,value:{name:`literal`,value:`"bowrain"`,required:!0}},{key:`properties`,value:{name:`Record`,elements:[{name:`never`},{name:`string`}],raw:`Record<KcEnvName, string>`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{}`,signature:{properties:[]}}],raw:`ExtendKcContext<KcContextExtension, KcContextExtensionPerPage>`},{name:`signature`,type:`object`,raw:`{ pageId: "webauthn-register.ftl" }`,signature:{properties:[{key:`pageId`,value:{name:`literal`,value:`"webauthn-register.ftl"`,required:!0}}]}}],raw:`Extract<KcContext, { pageId: "webauthn-register.ftl" }>`},description:``},i18n:{required:!0,tsType:{name:`ofTypeI18n`},description:``}}}})))()}x();export{_ as default};