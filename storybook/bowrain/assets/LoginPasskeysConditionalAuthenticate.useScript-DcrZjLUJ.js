import{n as e}from"./rolldown-runtime-PE7_xIU0.js";import{t}from"./react-Ln9jC0v_.js";import{r as n}from"./id-61i60aCY.js";import{t as r}from"./assert-CpZBdnNB.js";import{n as i,t as a}from"./useInsertScriptTags-C4_vJmfx.js";import{n as o,t as s}from"./waitForElementMountedOnDom-gl3CNoii.js";function c(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:a,isUserIdentified:s,challenge:c,userVerification:u,rpId:d,createTimeout:f}=n,{msgStr:p,isFetchingTranslations:m}=r,{insertScriptTags:h}=i({componentOrHookName:`LoginPasskeysConditionalAuthenticate`,scriptTags:[{type:`module`,textContent:()=>`
                    import { authenticateByWebAuthn } from "${a.resourcesPath}/js/webauthnAuthenticate.js";
                    import { initAuthenticate } from "${a.resourcesPath}/js/passkeysConditionalAuth.js";

                    const authButton = document.getElementById("${t}");
                    const input = {
                        isUserIdentified : ${s},
                        challenge : ${JSON.stringify(c)},
                        userVerification : ${JSON.stringify(u)},
                        rpId : ${JSON.stringify(d)},
                        createTimeout : ${f}
                    };
                    authButton.addEventListener("click", () => {
                        authenticateByWebAuthn({
                            ...input,
                            errmsg : ${JSON.stringify(p(`webauthn-unsupported-browser-text`))}
                        });
                    }, { once: true });

                    initAuthenticate({
                        ...input,
                        errmsg : ${JSON.stringify(p(`passkey-unsupported-browser-text`))}
                    }, available => {
                        const loginForm = document.getElementById("kc-form-login");
                        const passkeyButton = document.getElementById("kc-form-passkey-button");

                        if (!loginForm || !passkeyButton) {
                            return;
                        }

                        if (available) {
                            loginForm.style.display = "block";
                        } else {
                            passkeyButton.style.display = "block";
                        }
                    });
                `}]});(0,l.useEffect)(()=>{m||(async()=>{await o({elementId:t}),h()})()},[m])}var l,u=e((()=>{l=t(),a(),r(),s(),n(),n()}));export{c as n,u as t};