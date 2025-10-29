import React, { useState } from 'react'
import { useAppData } from '../context/AppDataContext'

export default function Goals() {
  const { data, updateGoals } = useAppData()
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({})

  function startEdit(g) {
    setEditingId(g.id)
    setForm({ ...g })
  }

  function save() {
    const next = data.goals.map(g => (g.id === editingId ? { ...g, ...form } : g))
    updateGoals(next)
    setEditingId(null)
    setForm({})
  }

  return (
    <section className="dashboard">
      <h2>Goals</h2>
      <div className="card">
        <p className="muted">Track savings goals and progress.</p>
        <ul className="goals-list">
          {data.goals.map(g => (
            <li key={g.id} className="goal-item">
              <div>
                {editingId === g.id ? (
                  <input value={form.title || ''} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
                ) : (
                  <strong>{g.title}</strong>
                )}
                <div className="muted">{editingId === g.id ? (
                  <>
                    <input type="number" value={form.progress || 0} onChange={e => setForm(f => ({ ...f, progress: Number(e.target.value) }))} />% of $<input type="number" value={form.target || 0} onChange={e => setForm(f => ({ ...f, target: Number(e.target.value) }))} />
                  </>
                ) : (
                  `${g.progress}% of $${g.target}`
                )}</div>
              </div>
              <div className="goal-progress">
                <div className="progress small">
                  <div className="bar" style={{ width: `${g.progress}%` }} />
                </div>
              </div>

              <div style={{marginTop:8}}>
                {editingId === g.id ? (
                  <>
                    <button className="btn" onClick={() => save()}>Save</button>
                    <button className="btn ghost" onClick={() => { setEditingId(null); setForm({}) }}>Cancel</button>
                  </>
                ) : (
                  <button className="btn ghost" onClick={() => startEdit(g)}>Edit</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
