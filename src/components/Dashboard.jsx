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
import { format, getISOWeek, getYear } from 'date-fns'
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

function buildTrendData(expenses, range = 'day') {
  // group by day / week / month
  const map = {}
  for (const e of expenses) {
    const d = new Date(e.createdAt)
    let key
    if (range === 'week') {
      key = `${getYear(d)}-W${String(getISOWeek(d)).padStart(2, '0')}`
    } else if (range === 'month') {
      key = format(d, 'yyyy-MM')
    } else {
      key = format(d, 'yyyy-MM-dd')
    }
    map[key] = (map[key] || 0) + Number(e.amount)
  }
  const labels = Object.keys(map).sort()
  return {
    labels,
    datasets: [
      {
        label: range === 'day' ? 'Daily spending' : range === 'week' ? 'Weekly spending' : 'Monthly spending',
        data: labels.map(l => map[l]),
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59,130,246,0.12)',
        fill: true,
      }
    ]
  }
}

export default function Dashboard() {
  const { data, setSelectedRange } = useAppData()
  const catData = buildCategoryData(data.expenses)
  const range = (data.ui && data.ui.selectedRange) || 'day'
  const trendData = buildTrendData(data.expenses, range)

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
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h3>Spending trend</h3>
          <div>
            <label className="muted">Range: </label>
            <select value={range} onChange={e => setSelectedRange(e.target.value)}>
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>
        </div>
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
