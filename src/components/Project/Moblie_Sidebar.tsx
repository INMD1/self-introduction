import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react";

const navItems = [
    { label: "ASW-DCP", href: "/projects/aswdcp" },
    { label: "ASW-PSMT", href: "/projects/ASW-PSMT" },
    { label: "APSU", href: "/projects/APSU" },
    { label: "Home", href: "/" },
];

export default function Mobile_Sidebar() {
    return (
        <nav className="flex items-center justify-between w-full h-14 bg-white border-b border-[#e9e9e8] px-3 sticky top-0 z-50">
            <div className="flex items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className="p-1 hover:bg-[#e9e9e8] rounded outline-none">
                        <Menu size={20} color="#37352f" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56 bg-white border border-[#e9e9e8] shadow-sm">
                        <div className="px-2 py-1.5 text-xs font-semibold text-[#9b9a97] select-none">Projects</div>
                        {navItems.map((item) => (
                            <DropdownMenuItem key={item.href} asChild className="focus:bg-[#e9e9e8] text-[#37352f] cursor-pointer">
                                <a href={item.href} className="w-full flex items-center">
                                    <span className="mr-2 text-lg">{item.label === "Home" ? "🏠" : "📄"}</span>
                                    {item.label}
                                </a>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                <span className="ml-3 font-medium text-sm text-[#37352f] truncate">INMD1's Workspace</span>
            </div>

            {/* Optional: Right side actions (Search, etc.) */}
            <div className="flex items-center gap-2">

            </div>
        </nav>
    );
}
