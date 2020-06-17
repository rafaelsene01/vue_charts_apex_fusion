<template>
  <div>
    <fusioncharts
      type="column2d"
      width="550"
      height="350"
      dataformat="json"
      :dataSource="dataSource"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bar extends Vue {
  private chartData: object[] = [
    {
      label: "Venezuela",
      value: "290",
    },
    {
      label: "Saudi",
      value: "260",
    },
    {
      label: "Canada",
      value: "180",
    },
    {
      label: "Iran",
      value: "140",
    },
    {
      label: "Russia",
      value: "115",
    },
    {
      label: "UAE",
      value: "100",
    },
    {
      label: "US",
      value: "30",
    },
    {
      label: "China",
      value: "30",
    },
  ];

  private dataSource: object = {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subcaption: "In MMbbl = One Million barrels",
      xaxisname: "Country",
      yaxisname: "Reserves (MMbbl)",
      numbersuffix: "K",
      theme: "fusion",
    },
    data: this.chartData,
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
::v-deep svg > g[class^="raphael-group-"] > text {
  display: none;
}
</style>
