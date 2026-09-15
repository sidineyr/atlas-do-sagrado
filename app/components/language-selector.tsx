"use client";

import { useEffect } from "react";

declare global { interface Window { google?: { translate?: { TranslateElement: new (options: Record<string, unknown>, elementId: string) => unknown } }; googleTranslateElementInit?: () => void } }

export function LanguageSelector() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate && !document.querySelector("#google_translate_element select")) new window.google.translate.TranslateElement({ pageLanguage: "pt", includedLanguages: "pt,en", autoDisplay: false }, "google_translate_element");
    };
    if (window.google?.translate) window.googleTranslateElementInit();
    else if (!document.querySelector("script[data-project-translate]")) { const script=document.createElement("script"); script.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"; script.async=true; script.dataset.projectTranslate="true"; document.head.appendChild(script); }
  }, []);
  return <aside aria-label="Language / Idioma" style={{position:"fixed",right:12,top:12,zIndex:1000,border:"1px solid rgba(255,255,255,.18)",borderRadius:999,padding:"8px 12px",background:"rgba(12,17,25,.92)",boxShadow:"0 8px 30px rgba(0,0,0,.2)"}}><strong style={{marginRight:8,fontSize:12,color:"white"}}>PT / EN</strong><span id="google_translate_element" /></aside>;
}
