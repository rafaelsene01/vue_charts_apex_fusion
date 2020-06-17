<template>
  <div id="app">
    <Bar />
    <BarFusion />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Bar from "./components/Bar.vue";
import BarFusion from "./components/BarFusion.vue";

@Component({
  components: {
    Bar,
    BarFusion,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
</style>
