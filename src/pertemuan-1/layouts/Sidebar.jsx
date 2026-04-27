import { AiOutlineUnorderedList, AiOutlineUserAdd } from "react-icons/ai"; 
import { RiDashboardFill } from "react-icons/ri"; 

export default function Sidebar() {
    return (
        <aside id="sidebar" className="w-64 min-h-screen bg-white border-r border-[var(--color-garis)] p-6 flex flex-col font-instrument">
            <div id="sidebar-logo" className="flex items-center gap-2 mb-10 px-2">
                <div className="w-8 h-8 bg-[var(--color-biru)] rounded-lg flex items-center justify-center text-white font-bold italic">M</div>
                <span className="text-xl font-bold text-[var(--color-teks)] tracking-tight">Modernize</span>
            </div>

            <nav className="flex-1 space-y-1">
                <p className="text-[10px] font-bold text-[var(--color-teks-samping)] uppercase tracking-widest mb-4 px-3">Home</p>
                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-biru)] text-white rounded-xl shadow-md shadow-blue-100 cursor-pointer">
                    <RiDashboardFill size={20} />
                    <span className="font-semibold text-sm">Dashboard</span>
                </div>
                
                <div className="mt-4 space-y-1">
                    <div className="flex items-center gap-3 px-4 py-3 text-[var(--color-teks-samping)] hover:bg-gray-50 hover:text-[var(--color-biru)] rounded-xl cursor-pointer group transition-all">
                        <AiOutlineUnorderedList size={20} />
                        <span className="font-medium text-sm">Orders</span>
                        <span className="ml-auto bg-[var(--color-teks)] text-white text-[10px] px-2 py-0.5 rounded-full">16</span>
                    </div>
                    <div className="flex items-center gap-3 px-4 py-3 text-[var(--color-teks-samping)] hover:bg-gray-50 hover:text-[var(--color-biru)] rounded-xl cursor-pointer transition-all">
                        <AiOutlineUserAdd size={20} />
                        <span className="font-medium text-sm">Customers</span>
                    </div>
                </div>
            </nav>

            <div className="mt-auto bg-[var(--color-hijau)] p-6 rounded-[24px] relative overflow-hidden">
                <p className="text-white text-xs font-medium mb-4 relative z-10 leading-relaxed">Please organize your menus through button below!</p>
                <button className="w-full bg-white text-[var(--color-teks)] py-2 rounded-xl font-bold text-xs uppercase tracking-wider relative z-10 hover:bg-gray-50 transition-all">
                    Add Menus
                </button>
            </div>
        </aside>
    );
}