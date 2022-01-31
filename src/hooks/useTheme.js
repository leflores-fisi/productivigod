import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export function useTheme(colorTheme) {

	const [theme, setTheme] = useLocalStorage('theme', colorTheme);
	const supportedThemes = ['light', 'dark', 'caca'];
	
	// Once called or changed the theme at setTheme()
	useEffect(() => {

		if (supportedThemes.includes(theme)) {
			console.info('Application theme loaded:', theme)
			document.documentElement.setAttribute('theme', theme);
			setTheme(theme);
		}
		else {
			console.info(`Theme ${theme} is not supported`);
		}

	}, [theme]);

	return { theme, setTheme };
}