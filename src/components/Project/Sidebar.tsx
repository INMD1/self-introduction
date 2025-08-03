import * as React from "react";

const navItems = [
    { label: "ASW-DCP", href: "/projects/aswdcp" },
    { label: "ASW-PSMT", href: "/projects/ASW-PSMT" },
];

export default function Sidebar() {
    return (
        <nav className="md:w-64 w-full md:h-screen bg-gray-50 md:border-r border-b md:sticky md:top-0 p-6">
            <h1 className="text-2xl font-bold mb-6"><a href="/projects/main">📚 프로젝트 목록</a></h1>
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
        </nav>
    );
}
