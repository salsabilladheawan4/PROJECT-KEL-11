import { FiSearch, FiBell } from "react-icons/fi";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <header id="header-container" className="h-16 flex justify-between items-center px-8 bg-white/80 backdrop-blur-md sticky top-0 z-30 font-instrument">
            <div className="relative group">
                <FiSearch className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[var(--color-biru)] transition-colors" />
                <input type="text" placeholder="Search..." className="pl-8 bg-transparent border-none text-sm focus:ring-0 w-64" />
            </div>

            <div className="flex items-center gap-6">
                <img src="https://flagcdn.com/w20/gb.png" className="w-5 h-3.5 object-cover rounded-sm border border-gray-100" alt="lang" />
                
                <div className="relative cursor-pointer text-[var(--color-teks)] hover:text-[var(--color-biru)] transition-colors">
                    <FiBell size={20} />
                    <span className="absolute -top-1.5 -right-1.5 bg-[var(--color-biru)] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white font-bold">5</span>
                </div>
                
                <SlSettings size={20} className="cursor-pointer text-[var(--color-teks)] hover:text-[var(--color-biru)] transition-colors" />

                <div className="flex items-center gap-3 pl-4 border-l border-gray-100 ml-2">
                    <img src="https://avatar.iran.liara.run/public/28" className="w-9 h-9 rounded-full border border-gray-100" alt="user" />
                    <div className="hidden md:block leading-tight">
                        <p className="text-xs font-bold text-[var(--color-teks)]">caca</p>
                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter tracking-widest">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
}