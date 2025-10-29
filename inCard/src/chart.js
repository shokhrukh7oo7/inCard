import { ref } from 'vue'

// Универсальный radial chart
export function useRadialChart(label = 'Всего', value = 95) {
  const series = ref([value])
  const chartOptions = ref({
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: [label],
  })

  return { series, chartOptions }
}
// ========================================================================
