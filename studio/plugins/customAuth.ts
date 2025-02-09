import {definePlugin} from 'sanity'

export const customAuth = definePlugin({
  name: 'custom-auth',
  setup(config) {
    return {
      auth: {
        redirectOnSingle: false,
        mode: 'replace',
        providers: [{
          name: 'sanity',
          title: 'Sanity.io',
          url: '/auth/sanity'
        }],
        loginMethod: 'popup'
      }
    }
  }
}) 