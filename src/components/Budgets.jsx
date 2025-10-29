import React from 'react'
import { useAppData } from '../context/AppDataContext'

function Progress({ value = 0, max = 100 }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
    <div className="progress">
      <div className="bar" style={{ width: `${pct}%` }} />
      <div className="label">{pct}%</div>
    </div>
  )
}

export default function Budgets() {
  const { data } = useAppData()

  return (
    <section className="dashboard">
      <h2>Budgets</h2>
      <div className="card">
        <p className="muted">Manage monthly budgets and track how close you are to limits.</p>
        <div className="budgets-list">
          {data.budgets.map(b => (
            <div className="budget-card" key={b.id}>
              <div className="meta">
                <strong>{b.name}</strong>
                <span className="muted">${b.spent} / ${b.limit}</span>
              </div>
              <Progress value={b.spent} max={b.limit} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
