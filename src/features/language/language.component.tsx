import { FC } from "react";
import { useLanguage } from "features/language/index";
import { LanguageWrapper, LanguageButtonWrapper } from "./language.styles";

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <LanguageWrapper>
      <LanguageButtonWrapper
        isActive={language === "SPANISH"}
        onClick={() => setLanguage("SPANISH")}
      >
        {t("language.spanish")}
      </LanguageButtonWrapper>
      <LanguageButtonWrapper
        isActive={language === "ENGLISH"}
        onClick={() => setLanguage("ENGLISH")}
      >
        {t("language.english")}
      </LanguageButtonWrapper>
      <LanguageButtonWrapper
        isActive={language === "PORTUGUESE"}
        onClick={() => setLanguage("PORTUGUESE")}
      >
        {t("language.portuguese")}
      </LanguageButtonWrapper>
    </LanguageWrapper>
  );
};
export default LanguageComponent;
