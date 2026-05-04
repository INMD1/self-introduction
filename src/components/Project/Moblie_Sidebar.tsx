import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import { Menu, X, ChevronDown, ChevronRight, Search, Settings, LogOut, Plus } from 'lucide-react';
import { FaHome } from "react-icons/fa";

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

export default function Moblie_Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        Projects: true,
    });

    // Prevent body scroll when sidebar is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close sidebar when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const toggleSidebar = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const toggleSection = (sectionTitle: string) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle],
        }));
    };

    return (
        <>
            {/* Mobile Header */}
            <header className="notion-mobile-header">
                <button
                    className="notion-mobile-menu-btn"
                    onClick={toggleSidebar}
                    aria-label="메뉴 열기"
                >
                    <Menu size={20} color="#37352f" />
                </button>
                <span className="notion-mobile-workspace-name">INMD1's Workspace</span>
                <div className="notion-mobile-spacer" />
            </header>

            {/* Overlay */}
            <div
                className={`notion-mobile-overlay ${isOpen ? 'open' : ''}`}
                onClick={toggleSidebar}
                aria-hidden="true"
            />

            {/* Slide-over Sidebar */}
            <aside
                className={`notion-mobile-sidebar ${isOpen ? 'open' : ''}`}
                aria-label="사이드바 메뉴"
            >
                {/* Sidebar Header */}
                <div className="notion-mobile-sidebar-header">
                    <div className="notion-workspace-row">
                        <span className="workspace-icon">🤠</span>
                        <span className="workspace-name">INMD1's Workspace</span>
                        <ChevronDown size={16} className="workspace-chevron" />
                    </div>
                    <button
                        className="notion-mobile-close-btn"
                        onClick={toggleSidebar}
                        aria-label="메뉴 닫기"
                    >
                        <X size={20} color="#37352f" />
                    </button>
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
                            <div
                                className={`notion-section-items ${expandedSections[section.title] ? 'expanded' : ''}`}
                            >
                                {section.items.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className={`notion-nav-item ${location.pathname === item.href ? 'active' : ''}`}
                                        onClick={toggleSidebar}
                                    >
                                        <span className="nav-item-icon">{item.icon}</span>
                                        <span className="nav-item-label">{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Actions */}
                <div className="notion-sidebar-footer">
                    <a href="/" className="notion-footer-item" onClick={toggleSidebar}>
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
            </aside>
        </>
    );
}
