import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { FaHome } from "react-icons/fa";
import { ChevronDown, ChevronRight, Plus, Search, Settings, LogOut } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
    icon?: string;
}

interface NavSection {
    title: string;
    items: NavItem[];
}

const navSections: NavSection[] = [
    {
        title: "Projects",
        items: [
            { label: "D Cloud Platform", href: "/projects/aswdcp", icon: "☁️" },
            { label: "ASW-PSMT", href: "/projects/ASW-PSMT", icon: "🎓" },
            { label: "APSU", href: "/projects/APSU", icon: "📱" },
        ],
    },
];

export default function PC_Sidebar() {
    const location = useLocation();
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        Projects: true,
    });

    const toggleSection = (sectionTitle: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle],
        }));
    };

    return (
        <nav className="notion-sidebar">
            {/* Workspace Header */}
            <div className="notion-workspace-header">
                <div className="notion-workspace-row">
                    <span className="workspace-icon">🤠</span>
                    <span className="workspace-name">INMD1's Workspace</span>
                    <ChevronDown size={16} className="workspace-chevron" />
                </div>
            </div>

            {/* Search */}
            <div className="notion-search">
                <Search size={14} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search"
                    className="notion-search-input"
                />
                <span className="search-shortcut">
                    <span className="shortcut-key">⌘</span>
                    <span className="shortcut-key">K</span>
                </span>
            </div>

            {/* Navigation Sections */}
            <div className="notion-nav-sections">
                {navSections.map((section) => (
                    <div key={section.title} className="notion-nav-section">
                        {/* Section Header */}
                        <button
                            className="notion-section-header"
                            onClick={() => toggleSection(section.title)}
                        >
                            {expandedSections[section.title] ? (
                                <ChevronDown size={14} />
                            ) : (
                                <ChevronRight size={14} />
                            )}
                            <span className="section-title">{section.title}</span>
                            <Plus size={14} className="section-add" />
                        </button>

                        {/* Section Items */}
                        {expandedSections[section.title] && (
                            <div className="notion-section-items">
                                {section.items.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`notion-nav-item ${location.pathname === item.href ? 'active' : ''}`}
                                    >
                                        <span className="nav-item-icon">{item.icon}</span>
                                        <span className="nav-item-label">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Actions */}
            <div className="notion-sidebar-footer">
                <a href="/" className="notion-footer-item">
                    <FaHome size={16} className="footer-item-icon" />
                    <span className="footer-item-label">Home</span>
                </a>
                <button className="notion-footer-item">
                    <Settings size={16} className="footer-item-icon" />
                    <span className="footer-item-label">Settings</span>
                </button>
                <div className="notion-footer-separator" />
                <button className="notion-footer-item notion-logout">
                    <LogOut size={16} className="footer-item-icon" />
                    <span className="footer-item-label">Log out</span>
                </button>
            </div>
        </nav>
    );
}
