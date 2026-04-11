import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black/40 backdrop-blur-xl border border-white/10 p-10 rounded-3xl max-w-xl w-full"
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">
            Full Name
          </label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">
            Email Address
          </label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ffff] transition-colors resize-none"
            placeholder="How can I help you?"
          />
        </div>
        <button
          className="w-full bg-[#00ffff] text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors"
        >
          <Send size={18} />
          SEND MESSAGE
        </button>
      </form>
    </motion.div>
  );
};
