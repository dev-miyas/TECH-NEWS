import {create} from 'zustand'
import themes from '../utils/colors';

export const useTheme = create((set) => ({
    themeMode: 'light',
        colors: themes.light,
        toggleTheme: () => set((state) => {
            const newThemeMode = state.themeMode === 'light' ? 'dark' : 'light';
            return {
                themeMode: newThemeMode,
                colors: themes[newThemeMode],
            };
        }),
}));

export default useTheme;