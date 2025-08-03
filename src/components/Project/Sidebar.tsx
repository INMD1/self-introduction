import * as React from "react";

const navItems = [
  { label: "소개", href: "#intro" },
  { label: "기술 스택", href: "#tech" },
  { label: "주요 기능", href: "#features" },
  { label: "스크린샷", href: "#screenshots" },
  { label: "GitHub", href: "#github" },
];

export default function Sidebar() {
  return (
    <nav className="md:w-64 w-full md:h-screen bg-gray-50 md:border-r border-b md:sticky md:top-0 p-6">
      <h1 className="text-2xl font-bold mb-6">📚 프로젝트 목록</h1>
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
