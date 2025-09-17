"use client";

import React, { useState } from "react";

export default function Page() {
  const posts = [
    {
      id: 1,
      title: "Morning Routine for a Calm Day",
      excerpt: "Gentle steps to start your morning with focus and energy.",
      date: "Sep 1, 2025",
      content: `Wake up slowly, stretch, and sip your favorite tea. Journal your intentions to set a calm tone for the day.`,
      cover:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 2,
      title: "Five Cozy Outfits to Brighten Your Week",
      excerpt: "Soft pastel blues and comfy layers for a chic yet cozy vibe.",
      date: "Aug 24, 2025",
      content: `Mix powder-blue sweaters with cream pants and light sneakers. Add a silk scarf for a touch of softness.`,
      cover:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60",
    },
    {
      id: 3,
      title: "Weekend Self-care Checklist",
      excerpt: "Little rituals to reset your mind and body.",
      date: "Aug 10, 2025",
      content: `Take a bath with blue lavender salts, read by the window, and enjoy a digital detox.`,
      cover:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60",
    },
  ];

  const [selectedPost, setSelectedPost] = useState<{
    id: number;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    cover: string;
  }>();

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white font-sans text-gray-800">
        <div className="max-w-3xl mx-auto p-6 md:p-12">
          <button
            onClick={() => setSelectedPost(undefined)}
            className="text-sky-600 hover:underline mb-6"
          >
            ← Back to blog
          </button>
          <img
            src={selectedPost.cover}
            alt={selectedPost.title}
            className="w-full h-64 object-cover rounded-2xl shadow"
          />
          <h1 className="text-4xl font-bold mt-6 mb-2 text-blue-900">
            {selectedPost.title}
          </h1>
          <p className="text-sm text-sky-600 mb-4">{selectedPost.date}</p>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedPost.content}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white font-sans text-gray-800">
      <header className="max-w-4xl mx-auto p-6 md:p-12">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-300 to-blue-300 flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 20c0-3.866 2.686-7 6-7s6 3.134 6 7"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-blue-900">
              Blue Bloom
            </h1>
            <p className="text-sm text-sky-600 mt-1">
              Lifestyle & self-care with a touch of serenity
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 md:px-0 pb-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transform transition hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              onClick={() => setSelectedPost(p)}
            >
              <div className="relative h-44 md:h-48">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/0 to-white/60" />
              </div>
              <div className="p-5 md:p-6">
                <div className="text-xs text-sky-500 font-medium mb-2">
                  {p.date}
                </div>
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-900">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{p.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sky-700 font-medium">
                  Read more →
                </span>
              </div>
            </article>
          ))}
        </section>

        <aside className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=200&q=60"
              alt="author"
              className="w-16 h-16 rounded-full object-cover border-2 border-sky-50 shadow-sm"
            />
            <div>
              <h3 className="font-semibold text-blue-900 text-xl">
                Hi, I&apos;m Aisha
              </h3>
              <p className="text-sm text-gray-600">
                Sharing calm routines and mindful living tips. 💙
              </p>
            </div>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium text-sky-600">Subscribe</h4>
            <form className="mt-3 flex gap-2">
              <input
                placeholder="your email"
                className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
              />
              <button className="rounded-full px-4 py-2 bg-sky-500 text-white text-sm font-medium">
                Join
              </button>
            </form>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="p-3 rounded-lg bg-sky-50 text-center text-xs text-blue-700">
              Fashion
            </div>
            <div className="p-3 rounded-lg bg-blue-50 text-center text-xs text-blue-700">
              Lifestyle
            </div>
            <div className="p-3 rounded-lg bg-cyan-50 text-center text-xs text-blue-700">
              Wellness
            </div>
          </div>
        </aside>
      </main>

      <footer className="max-w-4xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Blue Bloom — Serene blogging ✨
      </footer>
    </div>
  );
}
