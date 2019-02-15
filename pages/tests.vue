<template lang="pug">
  level-of-loyalty
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    LevelOfLoyalty: () => import('~/components/level-of-loyalty')
  }
})
export default class TestsPage extends Vue {}
</script>

<style lang="stylus">

</style>
