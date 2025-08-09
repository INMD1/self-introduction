import * as React from "react";
import { FaHome } from "react-icons/fa";

const navItems = [
    { label: "ASW-DCP", href: "/projects/aswdcp" },
    { label: "ASW-PSMT", href: "/projects/ASW-PSMT" },
    { label: "APSU", href: "/projects/APSU" },
];

export default function Sidebar() {
    return (
        <nav className="grid content-between  md:w-64 w-full md:h-screen bg-gray-50 md:border-r border-b md:sticky md:top-0 p-6">
            <div>
                <h1 className="text-xl font-bold mb-6"><a href="/projects/main">📚 프로젝트 목록</a></h1>
                <hr className="pb-4" />
                <ul className="space-y-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="text-gray-700 hover:text-blue-600 transition font-medium"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold mb-6"><a href="/"><FaHome />홈페이지 이동</a></h1>
            </div>
        </nav>
    );
}
