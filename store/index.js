export const strict = true

export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtClientInit(store) {
    if (process.client) console.log('[NUXT] Client initialized...')
  }
}
