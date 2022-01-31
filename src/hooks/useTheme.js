import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export function useTheme(colorTheme) {

	const [theme, setTheme] = useLocalStorage('theme', colorTheme);
	const supportedThemes = ['light', 'dark', 'monokai'];
	
	// Once called or changed the theme at setTheme()
	useEffect(() => {

		// If the called theme exists, we set it as an html attribute
		if (supportedThemes.includes(theme)) {
			console.info('Application theme loaded:', theme)
			document.documentElement.setAttribute('theme', theme);
		}
		else console.info(`Theme ${theme} is not supported`);

	}, [theme]); // eslint-disable-line

	return { theme, setTheme };
}