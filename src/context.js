import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useSetLang = (lang) => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = (text) => {
    if (lang == defaultLang) {
      return text;
    }
  };
  console.log(lang);
  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export default Lang;
