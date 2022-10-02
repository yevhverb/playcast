import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  controls: {
    justifyContent: 'space-evenly',
  },
  button: {
    padding: `0 ${theme.spacing.sm}px`,
  },
  inactive: {
    backgroundColor: 'transparent',

    '&:not(:hover)': {
      color: theme.other.variable(theme, 'colorPlaceholder'),
    },
  },
  inner: {
    justifyContent: 'flex-start',
  },
  label: {
    gap: theme.spacing.xs,
  },
}));
