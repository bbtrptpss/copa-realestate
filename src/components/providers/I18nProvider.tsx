"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { AppLang, DEFAULT_LANG, SUPPORTED_LANGS } from "@/lib/i18n";

type I18nContextValue = {
  lang: AppLang;
  setLang: (lang: AppLang) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "copa_lang";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<AppLang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) {
      setLangState(stored as AppLang);
      document.documentElement.lang = stored;
    } else {
      document.documentElement.lang = DEFAULT_LANG;
    }
  }, []);

  const setLang = (nextLang: AppLang) => {
    setLangState(nextLang);
    localStorage.setItem(STORAGE_KEY, nextLang);
    document.documentElement.lang = nextLang;
  };

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
