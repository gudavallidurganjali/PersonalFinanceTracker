import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <img src="/designs/logo.svg" alt="Logo" className="logo" />
        <h1>Personal Finance Tracker</h1>
      </div>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => `btn ghost ${isActive ? 'active' : ''}`}>
          Overview
        </NavLink>
        <NavLink to="/budgets" className={({ isActive }) => `btn ghost ${isActive ? 'active' : ''}`}>
          Budgets
        </NavLink>
        <NavLink to="/goals" className={({ isActive }) => `btn ghost ${isActive ? 'active' : ''}`}>
          Goals
        </NavLink>
      </nav>
    </header>
  )
}
