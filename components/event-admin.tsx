import { useState } from "react";

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

interface EventAdminProps {
  events: Event[];
  loading: boolean;
  error: string;
  submitting: boolean;
  editingId: string | null;
  editForm: any;
  handleEditClick: (ev: Event) => void;
  handleEditChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleEditSave: (id: string) => void;
  handleEditCancel: () => void;
  handleDelete: (id: string) => void;
}

export function EventAdmin({
  events,
  loading,
  error,
  submitting,
  editingId,
  editForm,
  handleEditClick,
  handleEditChange,
  handleEditSave,
  handleEditCancel,
  handleDelete,
}: EventAdminProps) {
  return (
    <div className="md:max-h-[600px] md:overflow-y-auto">
      <h2 className="text-lg font-semibold text-sky-700 mb-2">Événements à venir</h2>
      {loading ? (
        <div className="text-center py-8 text-sky-700">Chargement des événements...</div>
      ) : (
        <ul className="space-y-4">
          {events.map(ev => (
            <li key={ev.id} className="border rounded p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-sky-50">
              {editingId === ev.id ? (
                <div className="flex-1 flex flex-col gap-2">
                  <input
                    type="text"
                    name="title"
                    value={editForm.title}
                    onChange={handleEditChange}
                    className="border rounded px-3 py-2 mb-1"
                    required
                  />
                  <input
                    type="date"
                    name="date"
                    value={editForm.date}
                    onChange={handleEditChange}
                    className="border rounded px-3 py-2 mb-1"
                    required
                  />
                  <div className="flex gap-2">
                    <input
                      type="time"
                      name="from_hour"
                      value={editForm.from_hour}
                      onChange={handleEditChange}
                      className="border rounded px-3 py-2 w-1/2"
                      placeholder="Heure de début"
                    />
                    <input
                      type="time"
                      name="to_hour"
                      value={editForm.to_hour}
                      onChange={handleEditChange}
                      className="border rounded px-3 py-2 w-1/2"
                      placeholder="Heure de fin"
                    />
                  </div>
                  <input
                    type="text"
                    name="location"
                    value={editForm.location}
                    onChange={handleEditChange}
                    className="border rounded px-3 py-2 mb-1"
                    placeholder="Lieu (optionnel)"
                  />
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleEditChange}
                    className="border rounded px-3 py-2 mb-1"
                    placeholder="Description (optionnelle)"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleEditSave(ev.id)}
                      className="bg-sky-600 text-white rounded px-3 py-1 font-semibold hover:bg-sky-700"
                      disabled={submitting}
                    >{submitting ? "Enregistrement..." : "Enregistrer"}</button>
                    <button
                      onClick={handleEditCancel}
                      className="bg-gray-200 text-sky-800 rounded px-3 py-1 font-semibold hover:bg-gray-300"
                      type="button"
                    >Annuler</button>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div className="font-bold text-sky-800">{ev.title}</div>
                    <div className="text-sm text-gray-600">{new Date(ev.date).toLocaleDateString('fr-FR')}</div>
                    {ev.from_hour && ev.to_hour && (
                      <div className="text-xs text-gray-500">
                        {ev.from_hour.slice(0, 5)} - {ev.to_hour.slice(0, 5)}
                      </div>
                    )}
                    {ev.from_hour && !ev.to_hour && (
                      <div className="text-xs text-gray-500">
                        {ev.from_hour.slice(0, 5)}
                      </div>
                    )}
                    {!ev.from_hour && ev.to_hour && (
                      <div className="text-xs text-gray-500">
                        {ev.to_hour.slice(0, 5)}
                      </div>
                    )}
                    {ev.location && <div className="text-xs text-gray-500">{ev.location}</div>}
                    {ev.description && <div className="text-gray-700 mt-1">{ev.description}</div>}
                  </div>
                  <div className="flex flex-col gap-2 mt-2 sm:mt-0 sm:flex-row">
                    <button
                      onClick={() => handleEditClick(ev)}
                      className="bg-yellow-400 text-sky-900 rounded px-3 py-1 font-semibold hover:bg-yellow-500"
                      type="button"
                    >Modifier</button>
                    <button
                      onClick={() => handleDelete(ev.id)}
                      className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
                      type="button"
                    >Supprimer</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
