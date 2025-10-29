import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import ExpenseForm from './components/ExpenseForm'
import Budgets from './components/Budgets'
import Goals from './components/Goals'
import { AppDataProvider } from './context/AppDataContext'

export default function App() {
  return (
    <AppDataProvider>
      <BrowserRouter>
        <div className="app-root">
          <Header />
          <main className="container">
            <div className="left">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/budgets" element={<Budgets />} />
                <Route path="/goals" element={<Goals />} />
              </Routes>
            </div>
            <aside className="right">
              <ExpenseForm />
            </aside>
          </main>
        </div>
      </BrowserRouter>
    </AppDataProvider>
  )
}
