import { useTransition } from "react";
import { useTranslation } from "react-i18next";

export const About = () => {
	const {t} = useTranslation();

	return (
		<main>
			<h1>{t('About')}</h1>
		</main>
	);
};
