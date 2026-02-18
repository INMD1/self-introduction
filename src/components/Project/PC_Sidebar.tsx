import * as React from "react";
import { FaHome } from "react-icons/fa";

const navItems = [
    { label: "ASW-DCP", href: "/projects/aswdcp" },
    { label: "ASW-PSMT", href: "/projects/ASW-PSMT" },
    { label: "APSU", href: "/projects/APSU" },
];

export default function Sidebar() {
    return (
        <nav className="notion-sidebar md:w-64 w-full md:sticky md:top-0 h-screen overflow-hidden border-r border-[#e9e9e8]">
            {/* User / Workspace Area */}
            <div className="notion-sidebar-header h-12 flex items-center px-4 hover:bg-[#e9e9e8] cursor-pointer transition-colors m-1 rounded-sm">
                <span className="mr-2 text-lg">🤠</span>
                <span className="truncate font-medium text-[#37352f]">INMD1's Workspace</span>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto py-2 px-1">
                <div className="notion-sidebar-section-header px-3 text-xs font-semibold text-[#9b9a97] mb-1 mt-2">Projects</div>
                <div className="flex flex-col space-y-0.5">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="notion-sidebar-item flex items-center px-3 py-1 min-h-[28px] text-[#5f5e5b] hover:bg-[#e9e9e8] rounded-sm text-sm transition-colors decoration-0"
                        >
                            <span className="notion-sidebar-item-icon mr-2 text-lg">📄</span>
                            <span className="truncate">{item.label}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="py-2 border-t border-[#e9e9e8] px-1">
                <a href="/" className="notion-sidebar-item flex items-center px-3 py-1 min-h-[28px] text-[#5f5e5b] hover:bg-[#e9e9e8] rounded-sm text-sm transition-colors decoration-0">
                    <span className="notion-sidebar-item-icon mr-2 flex items-center justify-center"><FaHome size={16} /></span>
                    <span>Home</span>
                </a>
            </div>
        </nav>
    );
}
