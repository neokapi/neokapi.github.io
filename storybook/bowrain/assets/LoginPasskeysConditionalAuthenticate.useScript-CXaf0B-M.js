import{c as e,i as t}from"./preload-helper-DBuSV-bh.js";import{t as n}from"./react-BHOuiJCc.js";import{r}from"./id-Db0ANsUT.js";import{a as i,o as a,s as o}from"./KcPageStory-GykgEbOX.js";import{n as s,t as c}from"./waitForElementMountedOnDom-CkdYD32S.js";function l(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:i,isUserIdentified:o,challenge:c,userVerification:l,rpId:d,createTimeout:f}=n,{msgStr:p,isFetchingTranslations:m}=r,{insertScriptTags:h}=a({componentOrHookName:`LoginPasskeysConditionalAuthenticate`,scriptTags:[{type:`module`,textContent:()=>`
                    import { authenticateByWebAuthn } from "${i.resourcesPath}/js/webauthnAuthenticate.js";
                    import { initAuthenticate } from "${i.resourcesPath}/js/passkeysConditionalAuth.js";

                    const authButton = document.getElementById("${t}");
                    const input = {
                        isUserIdentified : ${o},
                        challenge : ${JSON.stringify(c)},
                        userVerification : ${JSON.stringify(l)},
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
                `}]});(0,u.useEffect)(()=>{m||(async()=>{await s({elementId:t}),h()})()},[m])}var u,d=t((()=>{u=e(n()),i(),o(),c(),r(),r()}));export{l as n,d as t};