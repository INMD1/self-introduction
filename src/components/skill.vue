<template>
  <div class="py-5 h-100 align-items-center text-center d-flex">
    <div class="container">
      <div class="row py-5">
        <div class="col mx-auto">
          <h2 class="mb-3" style="font-weight: bold; color: rgb(240, 244, 248)">
            저는 이런 언어를 쓸줄 알아요
          </h2>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title" style="font-weight: bold">
                    주로 쓰는 언어
                  </h4>
                  <canvas class="col" id="skillpi"></canvas>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title" style="font-weight: bold">
                    언어의 익숙도
                  </h4>
                  <h3 class="text-start">C</h3>
                  <div class="progress border rounded-pill shadow-none">
                    <div
                      class="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 40%; background:#555555"
                    > </div>
                  </div>
                  <h3 class="text-start py-2">Java</h3>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 30%; background:#b07219"
                    > </div>
                  </div>
                  <h3 class="text-start py-2">vue</h3>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 60%; background:#41b883"
                    > </div>
                  </div>
                  <h3 class="text-start py-2">javascript</h3>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 70%; background:#f1e05a"
                    > </div>
                  </div>
                  <h3 class="text-start py-2">html</h3>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 90%; background:#e34c26"
                    > </div>
                  </div>
                  <h3 class="text-start py-2">CSS</h3>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 40%; background:#563d7c"
                    > </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  methods: {
    fillData() {
      const pie = document.getElementById("skillpi");

      const skillconfig = {
        type: "doughnut",
        data: {
          labels: ["C", "Java", "JS", "vue"],
          datasets: [
            {
              label: "reception",
              data: [10, 10, 50, 30],
              backgroundColor: ["#555555", "#b07219", "#f1e05a", "#41b883"],
              borderWidth: 1,
            },
          ],
        },
      };

      this.cpuchart = new Chart(pie, skillconfig);
    },
  },
  mounted() {
    this.fillData();
  },
};
</script>