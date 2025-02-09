import {buildLegacyTheme} from 'sanity'

const props = {
  '--my-white': '#fff',
  '--my-black': '#1a1a1a',
  '--my-brand': '#4a90e2',
  '--my-red': '#db4437',
  '--my-yellow': '#f4b400',
  '--my-green': '#0f9d58',
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': '#666',
  '--gray-base': '#666',

  '--component-bg': props['--my-white'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-brand'],

  // Default button
  '--default-button-color': '#666',
  '--default-button-primary-color': props['--my-brand'],
  '--default-button-success-color': props['--my-green'],
  '--default-button-warning-color': props['--my-yellow'],
  '--default-button-danger-color': props['--my-red'],
}) 