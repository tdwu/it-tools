import { useStyleStore } from '@/stores/style.store';

export { defineThemes };

function defineThemes<Theme>(themes: { light: Theme; dark: Theme }) {
  return {
    themes,
    useTheme() {
      const styleStore = useStyleStore();
      styleStore.isDarkTheme=true;
      return computed(() => themes[styleStore.isDarkTheme ? 'dark' : 'light']);
    },
  };
}
