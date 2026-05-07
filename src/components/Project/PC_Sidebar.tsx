import * as React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { FaHome } from "react-icons/fa";
import { ChevronDown, ChevronRight, Plus } from 'lucide-react';

interface TocHeading {
    level: number;
    text: string;
    id: string;
}

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
            { label: "D Cloud Platform", href: "/projects/aswdcp", icon: "" },
            { label: "ASW-PSMT", href: "/projects/ASW-PSMT", icon: "" },
            { label: "APSU", href: "/projects/APSU", icon: "" },
            { label: "Skyline-extenstion", href: "/projects/skylineex", icon: "" },
        ],
    },
];

interface PC_SidebarProps {
    headings?: TocHeading[];
}

export default function PC_Sidebar({ headings = [] }: PC_SidebarProps) {
    const location = useLocation();
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        Projects: true,
        toc: true,
    });

    const toggleSection = (key: string) => {
        setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const scrollToHeading = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="notion-sidebar">
            {/* Workspace Header */}
            <div className="notion-workspace-header">
                <div className="notion-workspace-row">
                    <span className="workspace-name">INMD1's Workspace</span>
                </div>
            </div>

            {/* Navigation Sections */}
            <div className="notion-nav-sections">
                {navSections.map((section) => (
                    <div key={section.title} className="notion-nav-section">
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

                        {expandedSections[section.title] && (
                            <div className="notion-section-items expanded">
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

                {/* Table of Contents */}
                {headings.length > 0 && (
                    <div className="notion-nav-section">
                        <div className="notion-toc-separator" />
                        <button
                            className="notion-section-header"
                            onClick={() => toggleSection('toc')}
                        >
                            {expandedSections['toc'] ? (
                                <ChevronDown size={14} />
                            ) : (
                                <ChevronRight size={14} />
                            )}
                            <span className="section-title">이 페이지</span>
                        </button>

                        {expandedSections['toc'] && (
                            <div className="notion-section-items expanded">
                                {headings.map((heading) => (
                                    <button
                                        key={`${heading.id}-${heading.text}`}
                                        className={`notion-nav-item notion-toc-item notion-toc-h${heading.level}`}
                                        onClick={() => scrollToHeading(heading.id)}
                                    >
                                        <span className="nav-item-label">{heading.text}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Bottom Actions */}
            <div className="notion-sidebar-footer">
                <a href="/" className="notion-footer-item">
                    <FaHome size={16} className="footer-item-icon" />
                    <span className="footer-item-label">Back to Webpage</span>
                </a>
            </div>
        </nav>
    );
}
