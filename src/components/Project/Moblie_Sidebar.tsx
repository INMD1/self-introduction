import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoMdMore } from "react-icons/io";

const navItems = [
    { label: "ASW-DCP", href: "/projects/aswdcp" },
    { label: "ASW-PSMT", href: "/projects/ASW-PSMT" },
    { label: "APSU", href: "/projects/APSU" },
];

export default function Mobile_Sidebar() {
    return (
        <nav className=" flex justify-between md:w-64 w-full md:h-screen bg-gray-50 md:border-r border-b md:sticky md:top-0 p-6">
            <h1 className="text-xl font-bold">프로젝트 목록</h1>
            <DropdownMenu>
                <DropdownMenuTrigger><IoMdMore /></DropdownMenuTrigger>
                <DropdownMenuContent>
                    {navItems.map((item) => (
                        <DropdownMenuItem key={item.href}>
                            <a
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition font-medium"
                            >
                                {item.label}
                            </a>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
}
