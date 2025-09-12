import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const useLanguage = () => {
	const { i18n, t } = useTranslation();

	const normalize = (lng: string) => (lng || "en").split("-")[0];

	const changeLanguage = (language: string) => {
		const base = normalize(language);
		i18n.changeLanguage(base);
		document.documentElement.dir = base === "ar" ? "rtl" : "ltr";
		document.documentElement.lang = base;
	};

	useEffect(() => {
		const base = normalize(i18n.language);
		document.documentElement.dir = base === "ar" ? "rtl" : "ltr";
		document.documentElement.lang = base;
	}, [i18n.language]);

	return {
		currentLanguage: normalize(i18n.language),
		changeLanguage,
		t,
		isRTL: normalize(i18n.language) === "ar",
	};
};
