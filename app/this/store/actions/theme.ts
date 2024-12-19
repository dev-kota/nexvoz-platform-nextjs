export const THEME_CHANGE = "THEME_CHANGE";

export const themeChange = (theme: string) => {
  return {
    type: THEME_CHANGE,
    payload: theme,
  };
};

