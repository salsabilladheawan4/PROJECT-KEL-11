import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const stats = [
        { id: "orders", title: "Total Revenue", count: "$10,540", icon: <FaDollarSign />, color: "var(--color-biru)", growth: "+22.45%" },
        { id: "delivered", title: "Orders", count: "1,056", icon: <FaShoppingCart />, color: "var(--color-biru)", growth: "+22.45%" },
        { id: "canceled", title: "Active Sessions", count: "56", icon: <FaTruck />, color: "var(--color-biru)", growth: "-2.45%", down: true },
        { id: "revenue", title: "Total Sessions", count: "56", icon: <FaBan />, color: "var(--color-biru)", growth: "-0.45%", down: true },
    ];

    return (
        <div id="dashboard-container" className="font-instrument">
            <PageHeader /> 
            <div id="dashboard-grid" className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
                {stats.map((item) => (
                    <div key={item.id} className="bg-white p-6 rounded-[24px] border border-[var(--color-garis)] shadow-sm flex items-center justify-between transition-hover hover:shadow-md">
                        <div>
                            <p className="text-sm font-semibold text-[var(--color-teks-samping)] mb-1">{item.title}</p>
                            <h3 className="text-xl font-bold text-[var(--color-teks)] mb-2">{item.count}</h3>
                            <span className={`text-xs font-bold ${item.down ? 'text-[var(--color-merah)]' : 'text-[var(--color-hijau)]'}`}>
                                {item.down ? '↓' : '↑'} {item.growth}
                            </span>
                        </div>
                        <div style={{ backgroundColor: `${item.color}15`, color: item.color }} className="w-11 h-11 rounded-full flex items-center justify-center text-lg">
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}