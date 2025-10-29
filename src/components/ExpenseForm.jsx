import React, { useState } from 'react'
import { useAppData } from '../context/AppDataContext'

export default function ExpenseForm() {
  const { data, addExpense } = useAppData()
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Groceries')

  function onSubmit(e) {
    e.preventDefault()
    if (!title || !amount) return
    addExpense({ title, amount: Number(amount), category })
    setTitle('')
    setAmount('')
  }

  return (
    <div className="expense-panel">
      <h3>Add Expense</h3>
      <form onSubmit={onSubmit} className="form">
        <label>Title
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Coffee" />
        </label>
        <label>Amount
          <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="12.50" />
        </label>
        <label>Category
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option>Groceries</option>
            <option>Rent</option>
            <option>Transport</option>
            <option>Entertainment</option>
            <option>Subscriptions</option>
          </select>
        </label>
        <button className="btn primary" type="submit">Add</button>
      </form>

      <h4>Recent</h4>
      <ul className="recent-list">
        {data.expenses.map(i => (
          <li key={i.id}>
            <span className="title">{i.title}</span>
            <span className="amount">${i.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
