import React, { useState } from 'react'
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
  const { data, updateBudgets } = useAppData()
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({})

  function startEdit(b) {
    setEditingId(b.id)
    setForm({ ...b })
  }

  function save() {
    const next = data.budgets.map(b => (b.id === editingId ? { ...b, ...form } : b))
    updateBudgets(next)
    setEditingId(null)
    setForm({})
  }

  return (
    <section className="dashboard">
      <h2>Budgets</h2>
      <div className="card">
        <p className="muted">Manage monthly budgets and track how close you are to limits.</p>
        <div className="budgets-list">
          {data.budgets.map(b => (
            <div className="budget-card" key={b.id}>
              <div className="meta">
                {editingId === b.id ? (
                  <input value={form.name || ''} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                ) : (
                  <strong>{b.name}</strong>
                )}

                <span className="muted">${b.spent} / ${editingId === b.id ? (
                  <input type="number" value={form.limit || 0} onChange={e => setForm(f => ({ ...f, limit: Number(e.target.value) }))} />
                ) : (
                  b.limit
                )}</span>
              </div>

              <Progress value={b.spent} max={b.limit} />

              <div style={{marginTop:8}}>
                {editingId === b.id ? (
                  <>
                    <button className="btn" onClick={() => save()}>Save</button>
                    <button className="btn ghost" onClick={() => { setEditingId(null); setForm({}) }}>Cancel</button>
                  </>
                ) : (
                  <button className="btn ghost" onClick={() => startEdit(b)}>Edit</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
