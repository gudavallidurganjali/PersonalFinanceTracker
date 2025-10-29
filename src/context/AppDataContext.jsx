import React, { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'pft_app_data_v1'

const defaultData = {
  expenses: [
    { id: 1, title: 'Groceries', amount: 45, category: 'Groceries', createdAt: new Date().toISOString() },
    { id: 2, title: 'Rent', amount: 800, category: 'Housing', createdAt: new Date().toISOString() },
  ],
  budgets: [
    { id: 1, name: 'Housing', spent: 800, limit: 1000 },
    { id: 2, name: 'Groceries', spent: 250, limit: 400 }
  ],
  goals: [
    { id: 1, title: 'Emergency Fund', progress: 45, target: 5000 },
    { id: 2, title: 'Vacation', progress: 20, target: 1500 }
  ]
}

// include simple UI settings to persist selected range
defaultData.ui = { selectedRange: 'day' }

const AppDataContext = createContext(null)

export function AppDataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) return JSON.parse(raw)
    } catch (e) {
      // ignore and fall back to defaults
    }
    return defaultData
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
      console.warn('Failed to persist app data', e)
    }
  }, [data])

  function addExpense(expense) {
    const next = { id: Date.now(), ...expense, createdAt: expense.createdAt || new Date().toISOString() }
    setData(prev => ({ ...prev, expenses: [next, ...prev.expenses] }))
  }

  function updateBudgets(budgets) {
    setData(prev => ({ ...prev, budgets }))
  }

  function updateGoals(goals) {
    setData(prev => ({ ...prev, goals }))
  }

  function setSelectedRange(range) {
    setData(prev => ({ ...prev, ui: { ...(prev.ui || {}), selectedRange: range } }))
  }

  return (
    <AppDataContext.Provider value={{ data, addExpense, updateBudgets, updateGoals, setSelectedRange }}>
      {children}
    </AppDataContext.Provider>
  )
}

export function useAppData() {
  const ctx = useContext(AppDataContext)
  if (!ctx) throw new Error('useAppData must be used within AppDataProvider')
  return ctx
}
