<template>
  <div>
    <apexchart
      width="500"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Bar extends Vue {
  private options: object = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "RS Chats",
    },
    colors: [
      function(item: any) {
        if (item.value < 55) {
          return "#7E36AF";
        } else {
          return "#D9534F";
        }
      },
      function(item: any) {
        if (item.value < 111) {
          return "#58aaaa";
        } else {
          return "#D9534F";
        }
      },
    ],
    theme: {
      mode: "light",
      palette: "palette4",
      monochrome: {
        enabled: false,
        color: "#255aee",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function(val: any) {
          return val + "K";
        },
      },
    },
    yaxis: {
      title: {
        text: "Teste",
      },
    },
    tooltip: {
      y: {
        formatter: function(val: any) {
          return val + "K";
        },
      },
    },
    fill: {
      type: "pattern",
      pattern: {
        style: "verticalLines",
        width: 6,
        height: 6,
        strokeWidth: 1,
      },
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetX: 15,
    },
  };
  private series: object[] = [
    {
      name: "Marine Sprite",
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: "Striking Calf",
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: "Tank Picture",
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: "Bucket Slope",
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: "Reborn Kid",
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
