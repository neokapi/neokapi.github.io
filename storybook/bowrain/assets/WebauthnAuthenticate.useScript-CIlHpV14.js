import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-DnzSF4pd.js";import{i as n,r}from"./id-D65dm9v7.js";import{n as i,t as a}from"./useInsertScriptTags-CRvKaByq.js";import{n as o}from"./waitForElementMountedOnDom-eu8pmOIo.js";function s(e){let{authButtonId:t,kcContext:n,i18n:r}=e,{url:a,isUserIdentified:s,challenge:l,userVerification:u,rpId:d,createTimeout:f}=n,{msgStr:p,isFetchingTranslations:m}=r,{insertScriptTags:h}=i({componentOrHookName:`WebauthnAuthenticate`,scriptTags:[{type:`module`,textContent:()=>`

                    import { authenticateByWebAuthn } from "${a.resourcesPath}/js/webauthnAuthenticate.js";
                    const authButton = document.getElementById('${t}');
                    authButton.addEventListener("click", function() {
                        const input = {
                            isUserIdentified : ${s},
                            challenge : '${l}',
                            userVerification : '${u}',
                            rpId : '${d}',
                            createTimeout : ${f},
                            errmsg : ${JSON.stringify(p(`webauthn-unsupported-browser-text`))}
                        };
                        authenticateByWebAuthn(input);
                    });
                `}]});(0,c.useEffect)(()=>{m||(async()=>{await o({elementId:t}),h()})()},[m])}var c;function l(){return(l=e((()=>{c=t(),a(),n(),r(),r()})))()}export{s as n,l as t};