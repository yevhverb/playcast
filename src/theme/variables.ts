import type { SchemeVariable } from './types';

export const colorBg: SchemeVariable = {
  dark: (theme) => theme.colors.dark[7],
  light: (theme) => theme.white,
};

export const colorBgDrop: SchemeVariable = {
  dark: (theme) => theme.fn.rgba(colorBg.dark(theme), 0.96),
  light: (theme) => theme.fn.rgba(colorBg.light(theme), 0.97),
};

export const colorText: SchemeVariable = {
  dark: (theme) => theme.colors.dark[0],
  light: (theme) => theme.black,
};

export const colorTextInfo: SchemeVariable = {
  dark: (theme) => theme.fn.darken(colorText.dark(theme), 0.35),
  light: (theme) => theme.fn.lighten(colorText.light(theme), 0.55),
};

export const colorCard: SchemeVariable = {
  dark: (theme) => theme.colors.dark[6],
  light: (theme) => theme.colors.gray[1],
};

export const colorCardAccent: SchemeVariable = {
  dark: (theme) => theme.colors.dark[5],
  light: (theme) => theme.colors.gray[2],
};

export const colorPrimary: SchemeVariable = {
  dark: (theme) => theme.colors[theme.primaryColor][6],
  light: (theme) => theme.colors[theme.primaryColor][6],
};
