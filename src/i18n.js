import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { LANGUAGES } from "./constants";

const languagesCodes = LANGUAGES.map((l) => l.code);

i18n
	.use(LanguageDetector)
	.use(i18nBackend)
	.use(initReactI18next)
	.init({
		fallbackLng: "en",
		interpolation: {
			escapeValue: false, // React already does escaping
		},
		backend: {
			loadPath: "locales/{{lng}}/translation.json",
		},
		supportedLngs: languagesCodes,
		caches: ["localStorage", "cookie"],

		// order: ["cookie"],
		order: [
			"querystring",
			"cookie",
			"localStorage",
			"sessionStorage",
			"navigator",
			"htmlTag",
			"path",
			"subdomain",
		],
	});

export default i18n;
