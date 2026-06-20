import { useTheme } from "../../context/ThemeContext";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle2, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success

  const { theme } = useTheme();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulating deterministic network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-200/50 dark:border-zinc-800/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Side panel */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-full">
                Connect
              </span>
              <h2 className="mt-4 text-4xl font-display font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
                Let's scale your product.
              </h2>
              <p className="mt-6 text-base text-zinc-500 dark:text-zinc-400 font-sans leading-relaxed">
                Have a specialized system requirement or looking to overhaul your architectural stack? Reach out directly.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/60 rounded-lg text-indigo-600 dark:text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">Direct Access</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">hello@kroysoft.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side panel */}
          <div className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-sans text-sm"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-sans text-sm"
                  placeholder="jane@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold font-mono tracking-wider uppercase text-zinc-500 dark:text-zinc-400 mb-2">
                  Project Outline
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-sans text-sm resize-none"
                  placeholder="Tell us what you're working on..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all disabled:opacity-80"
              >
                <AnimatePresence mode="wait">
                  {status === 'loading' && (
                    <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Processing Core...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4" /> Message Transmitted!
                    </motion.span>
                  )}
                  {status === 'idle' && (
                    <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Submit Transmission <Send className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}