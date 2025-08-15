"use client"

import { useState, useEffect } from "react"

// Mock event data for now
const initialEvents = [
  { id: 1, title: "Assemblée Générale", date: "2025-09-15", description: "Réunion annuelle du club." },
  { id: 2, title: "Journée Portes Ouvertes", date: "2025-10-01", description: "Découverte de l'aéroclub pour tous." },
]

export default function AdminEventsPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [password, setPassword] = useState("")
  const [events, setEvents] = useState(initialEvents)
  const [form, setForm] = useState({ title: "", date: "", description: "" })
  const [error, setError] = useState("")

  // On mount, check localStorage for login
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLogged = localStorage.getItem("admin_logged_in") === "true"
      setLoggedIn(isLogged)
    }
  }, [])

  // Simple password check (change 'club2025' to your real password)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "club2025") {
      setLoggedIn(true)
      setError("")
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_logged_in", "true")
      }
    } else {
      setError("Mot de passe incorrect.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title || !form.date) return
    setEvents([
      ...events,
      { id: Date.now(), ...form },
    ])
    setForm({ title: "", date: "", description: "" })
  }

  const handleDelete = (id: number) => {
    setEvents(events.filter(ev => ev.id !== id))
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sky-50">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-xs flex flex-col gap-4">
          <h2 className="text-xl font-bold text-sky-800 mb-2">Connexion Admin</h2>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
            autoFocus
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="bg-sky-600 text-white rounded px-4 py-2 font-semibold hover:bg-sky-700">Se connecter</button>
        </form>
      </div>
    )
  }

  const handleLogout = () => {
    setLoggedIn(false)
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_logged_in")
    }
  }

  return (
    <div className="min-h-screen bg-sky-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-sky-800">Gestion des événements</h1>
          <button
            onClick={handleLogout}
            className="bg-gray-200 text-sky-800 rounded px-3 py-1 font-semibold hover:bg-gray-300"
          >Se déconnecter</button>
        </div>
        <form onSubmit={handleAddEvent} className="flex flex-col gap-3 mb-8">
          <input
            type="text"
            name="title"
            placeholder="Titre de l'événement"
            value={form.title}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="border rounded px-3 py-2"
            required
          />
          <textarea
            name="description"
            placeholder="Description (optionnelle)"
            value={form.description}
            onChange={handleChange}
            className="border rounded px-3 py-2"
          />
          <button type="submit" className="bg-sky-600 text-white rounded px-4 py-2 font-semibold hover:bg-sky-700">Ajouter l'événement</button>
        </form>
        <ul className="space-y-4">
          {events.map(ev => (
            <li key={ev.id} className="border rounded p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-sky-50">
              <div>
                <div className="font-bold text-sky-800">{ev.title}</div>
                <div className="text-sm text-gray-600">{ev.date}</div>
                {ev.description && <div className="text-gray-700 mt-1">{ev.description}</div>}
              </div>
              <button
                onClick={() => handleDelete(ev.id)}
                className="mt-2 sm:mt-0 bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
              >Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
