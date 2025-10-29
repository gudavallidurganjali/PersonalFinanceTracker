import React from 'react'
import { Pie, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  TimeScale
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import { useAppData } from '../context/AppDataContext'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, TimeScale)

function buildCategoryData(expenses) {
  const map = {}
  for (const e of expenses) {
    map[e.category] = (map[e.category] || 0) + Number(e.amount)
  }
  return {
    labels: Object.keys(map),
    datasets: [
      {
        data: Object.values(map),
        backgroundColor: ['#6366F1', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
      },
    ],
  }
}

function buildTrendData(expenses) {
  // group by date (day)
  const map = {}
  for (const e of expenses) {
    const d = new Date(e.createdAt)
    const key = d.toISOString().slice(0, 10)
    map[key] = (map[key] || 0) + Number(e.amount)
  }
  const labels = Object.keys(map).sort()
  return {
    labels,
    datasets: [
      {
        label: 'Daily spending',
        data: labels.map(l => map[l]),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59,130,246,0.12)',
        fill: true,
      }
    ]
  }
}

export default function Dashboard() {
  const { data } = useAppData()
  const catData = buildCategoryData(data.expenses)
  const trendData = buildTrendData(data.expenses)

  return (
    <section className="dashboard">
      <h2>Overview</h2>
      <div className="card">
        <h3>Expenses by category</h3>
        <div style={{ maxWidth: 400 }}>
          <Pie data={catData} />
        </div>
      </div>

      <div className="card">
        <h3>Spending trend</h3>
        <div style={{ maxWidth: 720 }}>
          <Line data={trendData} />
        </div>
      </div>

      <div className="card">
        <h3>Quick insights</h3>
        <ul>
          <li>You've spent a notable portion of your monthly budget on recurring items.</li>
          <li>Use budgets to cap categories and track goals to save for important items.</li>
        </ul>
      </div>
    </section>
  )
}
