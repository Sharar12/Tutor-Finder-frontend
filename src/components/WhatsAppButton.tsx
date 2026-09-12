export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/8801947368456"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-lg font-black text-white shadow-2xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-[#25D366]/60 md:h-16 md:w-16"
            style={{ animation: "popIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) 1.2s both" }}
        >
            {/* Pulsing ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <span className="relative flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                <svg className="h-7 w-7 fill-current md:h-8 md:w-8" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.586 1.761.88 2.79.88 3.18 0 5.767-2.587 5.767-5.766.001-3.18-2.585-5.766-5.766-5.766zm9.969 5.828c0 5.518-4.482 10-10 10-1.748 0-3.385-.45-4.819-1.239l-5.181 1.355 1.378-5.034c-.881-1.488-1.378-3.228-1.378-5.082 0-5.518 4.482-10 10-10s10 4.482 10 10z" />
                </svg>
            </span>
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                Chat with us
            </span>
        </a>
    );
}