import {create} from 'zustand'
import themes from '../utils/colors';
import sfConstraints from '../utils/spacing';

export const useTheme = create((set) => ({
    themeMode: 'light',
        colors: themes.light,
        fSize: sfConstraints.fontSize,
        spacing: sfConstraints.spacing,
        toggleTheme: () => set((state) => {
            const newThemeMode = state.themeMode === 'light' ? 'dark' : 'light';
            return {
                themeMode: newThemeMode,
                colors: themes[newThemeMode],
            };
        }),
}));

export default useTheme;