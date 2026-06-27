import{c as e,i as t}from"./preload-helper-DBuSV-bh.js";import{t as n}from"./react-BHOuiJCc.js";import{r}from"./id-Db0ANsUT.js";import{a as i,o as a,s as o}from"./KcPageStory-C1a--jWb.js";import{n as s,t as c}from"./waitForElementMountedOnDom-CkdYD32S.js";function l(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:i,isUserIdentified:o,challenge:c,userVerification:l,rpId:d,createTimeout:f}=n,{msgStr:p,isFetchingTranslations:m}=r,{insertScriptTags:h}=a({componentOrHookName:`WebauthnAuthenticate`,scriptTags:[{type:`module`,textContent:()=>`

                    import { authenticateByWebAuthn } from "${i.resourcesPath}/js/webauthnAuthenticate.js";
                    const authButton = document.getElementById('${t}');
                    authButton.addEventListener("click", function() {
                        const input = {
                            isUserIdentified : ${o},
                            challenge : '${c}',
                            userVerification : '${l}',
                            rpId : '${d}',
                            createTimeout : ${f},
                            errmsg : ${JSON.stringify(p(`webauthn-unsupported-browser-text`))}
                        };
                        authenticateByWebAuthn(input);
                    });
                `}]});(0,u.useEffect)(()=>{m||(async()=>{await s({elementId:t}),h()})()},[m])}var u,d=t((()=>{u=e(n()),i(),o(),c(),r(),r()}));export{l as n,d as t};