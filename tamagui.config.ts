import { createTamagui } from '@tamagui/core'
import { colors, typography, sizes, spacing, radius } from './src'

const config = createTamagui({
  themes: {
    light: {
      background: colors.background,
      text: colors.text,
      primary: colors.primary,
    },
    dark: {
      background: '#222',
      text: '#FFF',
      primary: colors.primary,
    },
  },
  fonts: {
    body: {
      family: typography.fontFamily,
      size: sizes,
    },
    heading: {
      family: typography.fontFamily,
      size: sizes,
    },
  },
})

export type Config = typeof config
export default config
