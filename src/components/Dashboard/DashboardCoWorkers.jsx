const coWorkers = [
    { name: "Reza Ahmadi", role: "Tech Lead", img: "https://i.pravatar.cc/150?img=11" },
    { name: "sina Rahmati", role: "Senior Dev", img: "https://i.pravatar.cc/150?img=61" },
    { name: "Bahar Behbodi", role: "UI Designer", img: "https://i.pravatar.cc/150?img=41" },
    { name: "Milad Soleymani", role: "Frontend Dev", img: "https://i.pravatar.cc/150?img=12" },
    { name: "Ahmad Sharifi", role: "Backend Dev", img: "https://i.pravatar.cc/150?img=14" },
    { name: "Samin Rezaei", role: "Digital Marketer", img: "https://i.pravatar.cc/150?img=32" },
];

export const DashboardCoWorkers = () => {
    return (
        <div className="grid grid-cols-2 gap-3 h-full content-start">
            {coWorkers.map((w, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50">
                    <img src={w.img} alt={w.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                    <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 truncate">{w.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{w.role}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};