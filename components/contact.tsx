'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/logo-jpa.png"
                alt="Jason Perez Art Collective"
                width={120}
                height={135}
                className="opacity-90"
              />
            </div>

            <p className="text-sm tracking-[0.2em] uppercase text-zinc-400 mb-3">
              Contact
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-zinc-900 mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-12 max-w-md">
              Whether you&apos;re a collector looking for the perfect piece or an 
              artist seeking representation, we&apos;d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:jasonperezart@gmail.com"
                  className="text-xl text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  jasonperezart@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">
                  Phone
                </p>
                <a
                  href="tel:+17868485442"
                  className="text-xl text-zinc-900 hover:text-zinc-600 transition-colors"
                >
                  786-848-5442
                </a>
              </div>
              <div>
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">
                  Locations
                </p>
                <p className="text-xl text-zinc-900">
                  Miami, FL &amp; New York
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400 uppercase tracking-wider mb-1">
                  Follow
                </p>
                <div className="flex gap-6 mt-2">
                  <a
                    href="https://www.instagram.com/jasonperezartcollective/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {isSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center py-16 bg-zinc-50">
                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-playfair text-3xl text-zinc-900 mb-3">Message Sent</h3>
                <p className="text-zinc-600">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-zinc-400 uppercase tracking-wider block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400 uppercase tracking-wider block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-zinc-400 uppercase tracking-wider block mb-2">
                    I am a...
                  </label>
                  <select
                    value={formState.inquiryType}
                    onChange={(e) => setFormState({ ...formState, inquiryType: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select one</option>
                    <option value="collector">Collector / Buyer</option>
                    <option value="artist">Artist seeking representation</option>
                    <option value="venue">Gallery / Venue</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-zinc-400 uppercase tracking-wider block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-zinc-200 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about yourself and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900 text-white py-4 hover:bg-zinc-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
