<template lang="pug">
  v-app(light v-hotkey='keymap')
    v-navigation-drawer(v-model='drawer', :mini-variant='mini', :clipped='clipped', fixed, app)
      v-list.pt-0
        v-list-tile(v-for='(item, i) in items', :key='i', :to='item.to', router, exact)
          v-list-tile-action
            v-icon.mdi-24px {{ item.icon }}
          v-list-tile-content
            v-list-tile-title(v-text='item.title')
      v-list.bottom-list
        v-list-tile
          v-list-tile-action
            span.zmdi-hc-stack.zmdi-hc-lg
              i.zmdi.zmdi-phone.zmdi-hc-stack-1x
              i.zmdi.zmdi-block.zmdi-hc-stack-2x.red--text
          v-list-tile-content
            v-list-tile-title
              span Don't call us!
              span.tertiary--text  Mail better..
    v-toolbar(:clipped-left='clipped', fixed, app)
      tasty-burger-button(:active='drawer', @toggle='drawer = !drawer', type='elastic', size='s', color='primary', active-color='warning')
      v-divider.ml-4.mr-3(inset, vertical)
      v-btn(@click.stop='mini = !mini', small, icon)
        v-icon.mdi-24px {{ `mdi-page-${mini ? 'last' : 'first'}` }}
      v-btn(@click.stop='clipped = !clipped', small, icon)
        v-icon.mdi-24px {{ clipped ? 'mdi-pin-off' : 'mdi-pin' }}
      v-btn(@click.stop='rightDrawer = !rightDrawer', small, icon)
        v-icon.mdi-24px {{ rightDrawer ? 'mdi-message-reply' : 'mdi-message-reply-text' }}
      v-divider.mx-3(inset, vertical)
      v-icon.mdi-36px.ml-2(v-text='"mdi-drag-variant"', color='orange lighten-4')
      v-toolbar-title#title(v-html='$t("title_html")')
      v-spacer
      v-divider.mr-3(inset, vertical)
      locale-switcher
    v-content
      v-container
        nuxt
    v-navigation-drawer(v-model='rightDrawer', :right='right', temporary, fixed)
      v-toolbar(color='grey lighten-3' class='subheading grey--text text--darken-3')
        v-list.pt-0
          v-list-tile(@click.native='right = !right')
            v-list-tile-action
              v-icon.mdi-24px mdi-message-text-outline
            v-list-tile-title {{ 'Action Center'.toUpperCase() }}
    v-footer.px-3(:fixed='fixed', app)
      span.caption {{ $moment().format('YYYY') }} © {{ pkgDescription }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthMixin from '~/mixins/auth'

@Component({
  components: {
    LocaleSwitcher: () => import('~/components/common/locale-switcher')
  },
  mixins: [AuthMixin]
  // head() {
  //   return {
  //     title: this.title, // process.env.PKG_NAME,
  //     meta: [
  //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
  //       { hid: 'description', name: 'description', content: process.env.PKG_DESCRIPTION }
  //     ]
  //   }
  // }
})
export default class DefaultLayout extends Vue {
  drawer: Boolean = true
  mini: Boolean = true
  clipped: Boolean = true
  right: Boolean = true
  rightDrawer: Boolean = false
  fixed: Boolean = false
  items: Array<any> = [
    {
      icon: 'mdi-pac-man',
      title: 'Welcome Page',
      to: '/'
    },
    {
      icon: 'mdi-owl',
      title: 'Inspire Page',
      to: '/inspire'
    },
    {
      icon: 'mdi-vuejs',
      title: 'Tests Page',
      to: '/tests'
    }
  ]
  title: String = '[SAC]cess'
  pkgDescription: String = process.env.PKG_DESCRIPTION

  leftDrawerToggle(): void {
    this.drawer = !this.drawer
  }
  rightDrawerToggle(): void {
    this.rightDrawer = !this.rightDrawer
  }

  get keymap(): any {
    return {
      'ctrl+left': this.leftDrawerToggle,
      'ctrl+right': this.rightDrawerToggle
    }
  }
}
</script>

<style lang="stylus">
#title
  font-size 32px
  font-weight 300
  text-decoration none
  .abbreviation
    color #D84315
  .ghost
    color #455A64

.bottom-list
  position fixed
  bottom 0
</style>
