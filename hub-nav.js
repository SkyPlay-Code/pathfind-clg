document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('div');
    // Using the Tailwind classes already present in your files
    nav.innerHTML = `
        <div class="fixed bottom-6 right-6 z-[9999] bg-zinc-900/90 backdrop-blur-md border border-white/10 p-1.5 rounded-2xl shadow-2xl flex items-center gap-1 hover:scale-[1.02] transition-transform duration-300">
            <div class="px-3 py-1 border-r border-white/10 hidden md:block">
                <span class="text-[10px] uppercase tracking-widest text-cyan-500 font-bold flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    Dev Hub
                </span>
            </div>
            <a href="index.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-xl transition-all">Start</a>
            <a href="3.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all">Dashboard</a>
            <a href="7.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-amber-400 hover:bg-amber-500/10 rounded-xl transition-all">Discovery</a>
            <a href="6.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 rounded-xl transition-all">Timeline</a>
            <a href="4.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all">Essays</a>
            <a href="5.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all">Finance</a>
            <a href="8.html" class="px-3 py-2 text-xs font-bold text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all">Exec</a>
        </div>
    `;
    document.body.appendChild(nav);
});