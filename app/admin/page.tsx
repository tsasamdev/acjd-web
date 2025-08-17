"use client"

import { useState, useEffect } from "react"


import { supabase } from "@/lib/supabaseClient";
import { EventAdmin } from "@/components/event-admin";

// Event type based on Supabase schema
interface Event {
  id: string;
  title: string;
  date: string;
  from_hour?: string | null;
  to_hour?: string | null;
  location: string;
  description: string;
  image?: string | null;
}


export default function AdminEventsPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [events, setEvents] = useState<Event[]>([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    from_hour: "",
    to_hour: "",
    location: "",
    description: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    date: "",
    from_hour: "",
    to_hour: "",
    location: "",
    description: ""
  });
  // Edit event handlers
  const handleEditClick = (ev: Event) => {
    setEditingId(ev.id);
    setEditForm({
      title: ev.title,
      date: ev.date,
      from_hour: ev.from_hour || "",
      to_hour: ev.to_hour || "",
      location: ev.location,
      description: ev.description,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSave = async (id: string) => {
    setError("");
    setSubmitting(true);
    const { error, data } = await supabase.from('events').update({
      title: editForm.title,
      date: editForm.date,
      from_hour: editForm.from_hour || null,
      to_hour: editForm.to_hour || null,
      location: editForm.location,
      description: editForm.description,
    }).eq('id', id).select();
    if (error) {
      setError("Erreur lors de la modification de l'événement.");
    } else if (data) {
      setEvents(events.map(ev => ev.id === id ? { ...ev, ...editForm } : ev));
      setEditingId(null);
    }
    setSubmitting(false);
  };

  const handleEditCancel = () => {
    setEditingId(null);
  };

  // On mount, check localStorage for login
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLogged = localStorage.getItem("admin_logged_in") === "true";
      setLoggedIn(isLogged);
    }
  }, []);

  // Fetch events from Supabase
  useEffect(() => {
    if (!loggedIn) return;
    setLoading(true);
    supabase
      .from('events')
      .select('*')
      .order('date', { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          setError("Erreur lors du chargement des événements.");
          setEvents([]);
        } else {
          setEvents(data as Event[]);
        }
        setLoading(false);
      });
  }, [loggedIn]);

  // Simple password check (change 'club2025' to your real password)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "club2025") {
      setLoggedIn(true);
      setError("");
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_logged_in", "true");
      }
    } else {
      setError("Mot de passe incorrect.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date) return;
    setSubmitting(true);
    setError("");
    const { data, error } = await supabase.from('events').insert([
      {
        title: form.title,
        date: form.date,
        from_hour: form.from_hour || null,
        to_hour: form.to_hour || null,
        location: form.location,
        description: form.description,
      }
    ]).select();
    if (error) {
      setError("Erreur lors de l'ajout de l'événement.");
    } else if (data) {
      setEvents([...events, ...(data as Event[])]);
      setForm({
        title: "",
        date: "",
        from_hour: "",
        to_hour: "",
        location: "",
        description: ""
      });
    }
    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    setError("");
    const { error } = await supabase.from('events').delete().eq('id', id);
    if (error) {
      setError("Erreur lors de la suppression de l'événement.");
    } else {
      setEvents(events.filter(ev => ev.id !== id));
    }
  };


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
    );
  }


  const handleLogout = () => {
    setLoggedIn(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("admin_logged_in");
    }
  };


  return (
    <div className="min-h-screen bg-sky-50 p-0 md:p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-white rounded shadow-md overflow-hidden">
        {/* Sidebar */}
        <aside className="w-full md:w-60 bg-sky-900 text-white flex flex-col items-center py-8 px-4 md:min-h-[600px]">
          <h2 className="text-xl font-bold mb-8 tracking-wide">Admin</h2>
          <nav className="flex flex-col gap-4 w-full">
            <button className="w-full text-left px-4 py-2 rounded bg-sky-800 hover:bg-sky-700 font-semibold">Événements</button>
            {/* Future menu items here */}
            <button className="w-full text-left px-4 py-2 rounded bg-sky-800/60 hover:bg-sky-700/60 font-semibold" disabled>Autre module</button>
          </nav>
          <button
            onClick={handleLogout}
            className="mt-auto bg-white text-sky-900 rounded px-4 py-2 font-semibold hover:bg-sky-100 border border-sky-200 w-full"
          >Se déconnecter</button>
        </aside>
        {/* Main content */}
        <main className="flex-1 p-6">
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulaire à gauche */}
            <form onSubmit={handleAddEvent} className="flex flex-col gap-3 bg-sky-50 rounded p-4 shadow-sm md:h-full md:min-h-[400px] md:max-h-[600px] md:sticky md:top-24">
              <h2 className="text-lg font-semibold text-sky-700 mb-2">Ajouter un événement</h2>
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
              <div className="flex gap-2">
                <input
                  type="time"
                  name="from_hour"
                  value={form.from_hour}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-1/2"
                  placeholder="Heure de début"
                />
                <input
                  type="time"
                  name="to_hour"
                  value={form.to_hour}
                  onChange={handleChange}
                  className="border rounded px-3 py-2 w-1/2"
                  placeholder="Heure de fin"
                />
              </div>
              <input
                type="text"
                name="location"
                placeholder="Lieu (optionnel)"
                value={form.location}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <textarea
                name="description"
                placeholder="Description (optionnelle)"
                value={form.description}
                onChange={handleChange}
                className="border rounded px-3 py-2"
              />
              <button
                type="submit"
                className="bg-sky-600 text-white rounded px-4 py-2 font-semibold hover:bg-sky-700"
                disabled={submitting}
              >{submitting ? "Ajout..." : "Ajouter l'événement"}</button>
            </form>
            {/* Liste des événements à droite */}
            <EventAdmin
              events={events}
              loading={loading}
              error={error}
              submitting={submitting}
              editingId={editingId}
              editForm={editForm}
              handleEditClick={handleEditClick}
              handleEditChange={handleEditChange}
              handleEditSave={handleEditSave}
              handleEditCancel={handleEditCancel}
              handleDelete={handleDelete}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
