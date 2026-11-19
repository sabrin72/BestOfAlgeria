import { motion } from 'motion/react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/213774385682?text=Bonjour%20Best%20Of%20Algeria%20!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-15 h-15 rounded-full flex items-center justify-center shadow-2xl group"
      style={{ width: 58, height: 58, backgroundColor: '#25D366' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.12, backgroundColor: '#20BD5A' }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Official WhatsApp SVG icon */}
      <svg
        viewBox="0 0 39 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 0C8.73 0 0 8.73 0 19.5c0 3.44.9 6.67 2.48 9.47L0 39l10.34-2.44A19.4 19.4 0 0019.5 39C30.27 39 39 30.27 39 19.5S30.27 0 19.5 0z"
          fill="#fff"
          fillOpacity=".1"
        />
        <path
          d="M19.5 3.25C10.52 3.25 3.25 10.52 3.25 19.5a16.19 16.19 0 002.3 8.25L3.66 35.4l7.77-2.04a16.21 16.21 0 008.07 2.14c8.98 0 16.25-7.27 16.25-16.25S28.48 3.25 19.5 3.25z"
          fill="white"
        />
        <path
          d="M27.6 22.8c-.4-.2-2.34-1.15-2.7-1.28-.36-.14-.62-.2-.88.2-.26.4-1 1.28-1.23 1.54-.22.26-.45.3-.85.1-.4-.2-1.68-.62-3.2-1.97-1.18-1.05-1.98-2.35-2.2-2.74-.23-.4-.02-.61.17-.81.18-.18.4-.46.6-.7.2-.23.26-.4.4-.66.13-.26.07-.5-.03-.7-.1-.2-.88-2.12-1.2-2.9-.32-.76-.64-.66-.88-.67h-.75c-.26 0-.68.1-1.04.5-.36.38-1.36 1.33-1.36 3.24 0 1.92 1.4 3.77 1.59 4.03.2.26 2.74 4.18 6.64 5.86.93.4 1.65.64 2.21.82.93.3 1.78.25 2.45.15.75-.11 2.3-.94 2.62-1.85.33-.9.33-1.68.23-1.85-.1-.17-.36-.27-.76-.47z"
          fill="#25D366"
        />
      </svg>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div
          className="bg-[#0A0A0A] text-[#F5EDD6] px-4 py-2 rounded whitespace-nowrap text-sm"
          style={{ fontFamily: 'var(--font-sans)', fontWeight: 400 }}
        >
          Réserver par WhatsApp
          <div className="absolute top-full right-4 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#0A0A0A]" style={{ width: 0, height: 0 }} />
        </div>
      </div>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ border: '2px solid #25D366' }}
        animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
