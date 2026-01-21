<script setup lang="ts">
import { ref } from 'vue'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler } from 'chart.js'
import type { ChartOptions } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler)

const activePeriod = ref('7j')

const chartData = ref({
  labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  datasets: [{
    data: [30, 45, 38, 55, 70, 65, 75],
    borderColor: '#0B1F3A',
    backgroundColor: 'rgba(11, 31, 58, 0.08)',
    borderWidth: 2.5,
    fill: true,
    tension: 0.4,
    pointRadius: 5,
    pointHoverRadius: 6,
    pointBackgroundColor: '#0B1F3A',
    pointBorderColor: '#0B1F3A',
    pointBorderWidth: 0
  }]
})

const chartOptions: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      border: {
        display: false
      },
      ticks: {
        color: '#64748B',
        font: {
          size: 12,
          family: 'Inter, system-ui, sans-serif',
          weight: 500
        },
        padding: 8
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      },
      min: 0,
      max: 100
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  }
}

const periods = {
  '7j': {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    data: [30, 45, 38, 55, 70, 65, 75]
  },
  '30j': {
    labels: ['S1', 'S2', 'S3', 'S4'],
    data: [35, 60, 45, 80]
  },
  '90j': {
    labels: ['Jan', 'Fév', 'Mar'],
    data: [25, 60, 85]
  }
}

function changePeriod(period: '7j' | '30j' | '90j') {
  activePeriod.value = period
  chartData.value = {
    labels: periods[period].labels,
    datasets: [{
      data: periods[period].data,
      borderColor: '#0B1F3A',
      backgroundColor: 'rgba(11, 31, 58, 0.08)',
      borderWidth: 2.5,
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 6,
      pointBackgroundColor: '#0B1F3A',
      pointBorderColor: '#0B1F3A',
      pointBorderWidth: 0
    }]
  }
}
</script>

<template>
  <div class="perf-chart">
    <div class="chart-header">
      <span class="chart-title">Performance</span>
      <div class="chart-tabs">
        <span 
          class="tab" 
          :class="{ active: activePeriod === '7j' }"
          @click="changePeriod('7j')"
        >7j</span>
        <span 
          class="tab"
          :class="{ active: activePeriod === '30j' }"
          @click="changePeriod('30j')"
        >30j</span>
        <span 
          class="tab"
          :class="{ active: activePeriod === '90j' }"
          @click="changePeriod('90j')"
        >90j</span>
      </div>
    </div>
    <div class="chart-body">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<style scoped>
.perf-chart {
  background: white;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.chart-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #0B1F3A;
}

.chart-tabs {
  display: flex;
  gap: 4px;
  background: #F3F4F6;
  padding: 3px;
  border-radius: 10px;
}

.tab {
  padding: 6px 16px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #6B7280;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease;
  user-select: none;
}

.tab:hover {
  color: #374151;
}

.tab.active {
  background: white;
  color: #0B1F3A;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.chart-body {
  height: 200px;
  padding: 10px 0 5px;
}
</style>
