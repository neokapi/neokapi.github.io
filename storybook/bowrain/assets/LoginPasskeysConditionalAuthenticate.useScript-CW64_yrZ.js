import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{i as n,r}from"./id-D65dm9v7.js";import{n as i,t as a}from"./useInsertScriptTags-CRvKaByq.js";import{n as o}from"./waitForElementMountedOnDom-eu8pmOIo.js";function s(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:a,isUserIdentified:s,challenge:l,userVerification:u,rpId:d,createTimeout:f}=n,{msgStr:p,isFetchingTranslations:m}=r,{insertScriptTags:h}=i({componentOrHookName:`LoginPasskeysConditionalAuthenticate`,scriptTags:[{type:`module`,textContent:()=>`
                    import { authenticateByWebAuthn } from "${a.resourcesPath}/js/webauthnAuthenticate.js";
                    import { initAuthenticate } from "${a.resourcesPath}/js/passkeysConditionalAuth.js";

                    const authButton = document.getElementById("${t}");
                    const input = {
                        isUserIdentified : ${s},
                        challenge : ${JSON.stringify(l)},
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
                `}]});(0,c.useEffect)(()=>{m||(async()=>{await o({elementId:t}),h()})()},[m])}var c;function l(){return(l=e((()=>{c=t(),a(),n(),r(),r()})))()}export{s as n,l as t};