import React from 'react'
import { useAppData } from '../context/AppDataContext'

export default function Goals() {
  const { data } = useAppData()

  return (
    <section className="dashboard">
      <h2>Goals</h2>
      <div className="card">
        <p className="muted">Track savings goals and progress.</p>
        <ul className="goals-list">
          {data.goals.map(g => (
            <li key={g.id} className="goal-item">
              <div>
                <strong>{g.title}</strong>
                <div className="muted">{g.progress}% of ${g.target}</div>
              </div>
              <div className="goal-progress">
                <div className="progress small">
                  <div className="bar" style={{ width: `${g.progress}%` }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
