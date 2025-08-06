"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Mail, User, MessageSquare, Send, Loader2, CheckCircle2 } from "lucide-react"

export function ContactFormEnhanced() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState<string | null>(null)
  const [formError, setFormError] = useState<string | null>(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormSuccess(null)
    setFormError(null)

    try {
      const formData = new FormData(event.currentTarget)
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi du message.")
      }

      setFormSuccess("Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais.")
      // Only reset if event.currentTarget exists and is a form
      if (event.target && (event.target as HTMLFormElement).reset) {
        (event.target as HTMLFormElement).reset()
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      {formSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-lg transition-all duration-300 ease-in-out z-10">
          <div className="text-center p-6 max-w-md">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Message envoyé!</h3>
            <p className="text-gray-600">{formSuccess}</p>
            <Button onClick={() => setFormSuccess(null)} className="mt-4 bg-azure-600 hover:bg-azure-700">
             Fermer
            </Button>
          </div>
        </div>
      )}

      {formError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md animate-in fade-in duration-300">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{formError}</p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium flex items-center gap-2 text-gray-700">
              <User className="h-4 w-4 text-sky-600" />
              <span>Nom</span>
            </label>
            <div
              className={`relative transition-all duration-200 ${
                focusedField === "name" ? "transform -translate-y-1" : ""
              }`}
            >
              <input
                id="name"
                name="name"
                className="flex h-11 w-full rounded-md border border-sky-200 bg-white px-4 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Votre nom"
                required
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 text-gray-700">
              <Mail className="h-4 w-4 text-sky-600" />
              <span>Email</span>
            </label>
            <div
              className={`relative transition-all duration-200 ${
                focusedField === "email" ? "transform -translate-y-1" : ""
              }`}
            >
              <input
                id="email"
                name="email"
                type="email"
                className="flex h-11 w-full rounded-md border border-sky-200 bg-white px-4 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                placeholder="Votre email"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2 text-gray-700">
            <span>Sujet</span>
          </label>
          <div
            className={`relative transition-all duration-200 ${
              focusedField === "subject" ? "transform -translate-y-1" : ""
            }`}
          >
            <input
              id="subject"
              name="subject"
              className="flex h-11 w-full rounded-md border border-sky-200 bg-white px-4 py-2 text-sm shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Sujet du message"
              required
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium flex items-center gap-2 text-gray-700">
            <MessageSquare className="h-4 w-4 text-sky-600" />
            <span>Message</span>
          </label>
          <div
            className={`relative transition-all duration-200 ${
              focusedField === "message" ? "transform -translate-y-1" : ""
            }`}
          >
            <textarea
              id="message"
              name="message"
              className="flex min-h-[140px] w-full rounded-md border border-sky-200 bg-white px-4 py-3 text-sm shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              placeholder="Votre message"
              required
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full h-12 bg-gradient-to-r from-azure-600 to-sky-600 hover:from-azure-700 hover:to-sky-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Envoyer le message</span>
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
