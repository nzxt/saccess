<template lang="pug">
v-layout(row align-center hidden-xs-only style='max-width: 110px')
  v-tooltip(v-for='locale in $i18n.locales' :key='locale.code' bottom)
    n-link(slot='activator' :to='switchLocalePath(locale.code)')
      .ma-2
        flag(:iso='locale.flag' :title='locale.iso')
    span {{ locale.name }}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class LocaleSelector extends Vue {}
</script>

<style scoped lang="stylus">
.flag-icon
  font-size 22px
  border-radius 50%
</style>
