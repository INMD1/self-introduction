import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronDown, MoreHorizontal, Calendar, Tag, User, Clock } from 'lucide-react';
import "./notion.css";

interface ProjectConfig {
    id: string;
    title: string;
    icon: string;
    cover: string;
    properties: {
        status?: string;
        date?: string;
        tags?: string[];
        author?: string;
    };
}

const PROJECT_CONFIGS: Record<string, ProjectConfig> = {
    aswdcp: {
        id: "aswdcp",
        title: "D Cloud Platform",
        icon: "☁️",
        cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2068&h=600&fit=crop",
        properties: {
            status: "Published",
            date: "2024.01.15",
            tags: ["React", "PHP", "MySQL", "Cloud"],
            author: "INMD1",
        },
    },
    "ASW-PSMT": {
        id: "ASW-PSMT",
        title: "ASW-PSMT",
        icon: "🎓",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=2068&h=600&fit=crop",
        properties: {
            status: "Published",
            date: "2024.03.20",
            tags: ["React", "PHP", "MySQL", "Education"],
            author: "INMD1",
        },
    },
    apsu: {
        id: "apsu",
        title: "APSU",
        icon: "📱",
        cover: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=2068&h=600&fit=crop",
        properties: {
            status: "Published",
            date: "2023.11.10",
            tags: ["Vue", "Strapi", "PWA", "Mobile"],
            author: "INMD1",
        },
    },
};

export default function ProjectShowcase({ id }: { id?: string }) {
    const parms = id?.replace("/projects/", "") || "aswdcp";
    const [markdown, setMarkdown] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const config = useMemo(() => PROJECT_CONFIGS[parms] || PROJECT_CONFIGS["aswdcp"], [parms]);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchMarkdown = async () => {
            try {
                const res = await fetch(`/markdown/${parms}.md`);
                if (!res.ok) throw new Error("File not found");
                const text = await res.text();
                setMarkdown(text);
            } catch (err) {
                setError("마크다운을 불러올 수 없습니다.");
                setMarkdown("# ⚠️ 에러\n\n프로젝트 정보를 불러올 수 없습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdown();
    }, [parms]);

    return (
        <div className="notion-frame">
            {/* Cover Image with Notion-style overlay */}
            <div className="notion-cover-wrapper">
                <img
                    src={config.cover}
                    alt="cover"
                    className="notion-cover"
                />
                <div className="notion-cover-overlay" />
                <button className="notion-cover-edit" title="커버 편집">
                    ✏️
                </button>
            </div>

            {/* Content Container */}
            <div className="notion-content-container">
                {/* Icon */}
                <div className="notion-icon-wrapper">
                    <div className="notion-icon">{config.icon}</div>
                    <button className="notion-icon-edit" title="아이콘 편집">✏️</button>
                </div>

                {/* Title */}
                <div className="notion-title-wrapper">
                    <h1 className="notion-title">
                        {loading ? "로딩 중..." : config.title}
                    </h1>
                </div>

                {/* Page Actions (Notion-style) */}
                <div className="notion-page-actions">
                    <button className="notion-action-btn" title="페이지 정보">
                        <MoreHorizontal size={18} />
                    </button>
                </div>

                {/* Inline Properties Row (Notion-style) */}
                <div className="notion-inline-properties">
                    {/* Status Property */}
                    <div className="notion-inline-property notion-property-status">
                        <span className="property-icon">●</span>
                        <span className="property-label">Status</span>
                        <span className="property-separator">:</span>
                        <span className="property-value-status published">{config.properties.status}</span>
                    </div>

                    {/* Date Property */}
                    {config.properties.date && (
                        <div className="notion-inline-property notion-property-date">
                            <Calendar size={12} className="property-icon" />
                            <span className="property-label">Created</span>
                            <span className="property-separator">:</span>
                            <span className="property-value">{config.properties.date}</span>
                        </div>
                    )}

                    {/* Author Property */}
                    {config.properties.author && (
                        <div className="notion-inline-property notion-property-author">
                            <User size={12} className="property-icon" />
                            <span className="property-label">Author</span>
                            <span className="property-separator">:</span>
                            <span className="property-value">
                                <span className="author-avatar">🤠</span>
                                {config.properties.author}
                            </span>
                        </div>
                    )}

                    {/* Tags Property */}
                    {config.properties.tags && (
                        <div className="notion-inline-property notion-property-tags">
                            <Tag size={12} className="property-icon" />
                            <span className="property-label">Tags</span>
                            <span className="property-separator">:</span>
                            <div className="property-value-tags">
                                {config.properties.tags.map(tag => (
                                    <span key={tag} className="property-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Breadcrumb (Notion-style) */}
                <div className="notion-breadcrumb">
                    <span className="breadcrumb-item">📁 Projects</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-item active">{config.title}</span>
                </div>

                {/* Content */}
                <div className="notion-content">
                    {loading ? (
                        <div className="notion-loading">
                            <div className="loading-skeleton loading-skeleton-title" />
                            <div className="loading-skeleton loading-skeleton-line" />
                            <div className="loading-skeleton loading-skeleton-line" />
                            <div className="loading-skeleton loading-skeleton-line short" />
                        </div>
                    ) : error ? (
                        <div className="notion-error">
                            <div className="callout">
                                <span className="callout-icon">⚠️</span>
                                <div className="callout-content">{error}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="prose">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="notion-h1" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="notion-h2" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="notion-h3" {...props} />,
                                    p: ({ node, ...props }) => <p className="notion-p" {...props} />,
                                    img: ({ node, ...props }) => (
                                        <figure className="notion-image-block">
                                            <img {...props} />
                                        </figure>
                                    ),
                                    blockquote: ({ node, ...props }) => (
                                        <blockquote className="notion-quote" {...props} />
                                    ),
                                    pre: ({ node, children, ...props }) => (
                                        <pre className="notion-code-block" {...props}>
                                            {children}
                                        </pre>
                                    ),
                                    code: ({ node, inline, ...props }) =>
                                        inline ? (
                                            <code className="notion-inline-code" {...props} />
                                        ) : (
                                            <code {...props} />
                                        ),
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>

                {/* Footer Info */}
                <div className="notion-footer-info">
                    <div className="footer-info-item">
                        <Clock size={12} />
                        <span>편집됨: 오늘</span>
                    </div>
                    <div className="footer-info-separator" />
                    <div className="footer-info-item">
                        <span>1 페이지</span>
                    </div>
                </div>
            </div>

            {/* Global Styles for additional Notion elements */}
            <style>{`
                /* Cover Image Wrapper */
                .notion-cover-wrapper {
                    position: relative;
                    width: 100%;
                    height: 30vh;
                    min-height: 200px;
                    max-height: 300px;
                }

                .notion-cover {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }

                .notion-cover-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background: linear-gradient(to top, rgba(0,0,0,0.1), transparent);
                }

                .notion-cover-edit {
                    position: absolute;
                    bottom: 12px;
                    right: 12px;
                    background: white;
                    border: none;
                    padding: 4px 8px;
                    border-radius: 3px;
                    font-size: 12px;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 0.2s;
                    z-index: 10;
                }

                .notion-cover-wrapper:hover .notion-cover-edit {
                    opacity: 1;
                }

                /* Icon Wrapper */
                .notion-icon-wrapper {
                    position: relative;
                    width: 78px;
                    height: 78px;
                    margin-bottom: 12px;
                    z-index: 10;
                }

                .notion-icon {
                    width: 100%;
                    height: 100%;
                    font-size: 56px;
                    line-height: 78px;
                    text-align: center;
                }

                .notion-icon-edit {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    background: white;
                    border: none;
                    padding: 2px 4px;
                    border-radius: 3px;
                    font-size: 10px;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 0.2s;
                }

                .notion-icon-wrapper:hover .notion-icon-edit {
                    opacity: 1;
                }

                /* Title Wrapper */
                .notion-title-wrapper {
                    margin-bottom: 8px;
                }

                .notion-title {
                    font-size: 40px;
                    font-weight: 700;
                    color: #37352f;
                    line-height: 1.2;
                    padding: 0;
                    margin: 0;
                    outline: none;
                }

                .notion-title:focus {
                    border-bottom: 2px solid #e9e9e8;
                }

                /* Page Actions */
                .notion-page-actions {
                    display: flex;
                    justify-content: flex-end;
                    padding: 4px 0;
                    margin-bottom: 8px;
                }

                .notion-action-btn {
                    background: transparent;
                    border: none;
                    color: rgba(55, 53, 47, 0.5);
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 3px;
                    transition: background-color 0.2s;
                }

                .notion-action-btn:hover {
                    background-color: rgba(55, 53, 47, 0.08);
                }

                /* Inline Properties */
                .notion-inline-properties {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    padding: 12px 0;
                    border-top: 1px solid rgba(55, 53, 47, 0.09);
                    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
                    margin-bottom: 16px;
                    font-size: 14px;
                }

                .notion-inline-property {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: rgba(55, 53, 47, 0.5);
                }

                .notion-inline-property .property-icon {
                    color: rgba(55, 53, 47, 0.5);
                    flex-shrink: 0;
                }

                .notion-inline-property .property-label {
                    color: rgba(55, 53, 47, 0.5);
                    font-size: 13px;
                }

                .notion-inline-property .property-separator {
                    color: rgba(55, 53, 47, 0.3);
                }

                .notion-inline-property .property-value {
                    color: #37352f;
                    font-weight: 500;
                }

                /* Status Property */
                .notion-property-status .property-value-status {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-size: 13px;
                    font-weight: 500;
                }

                .notion-property-status .property-value-status.published {
                    background-color: #d3e8fd;
                    color: #1a73e8;
                }

                .notion-property-status .property-value-status.draft {
                    background-color: #f1f3f4;
                    color: #5f6368;
                }

                /* Author Avatar */
                .author-avatar {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 18px;
                    height: 18px;
                    border-radius: 3px;
                    font-size: 12px;
                    margin-right: 4px;
                    background: #f1f3f4;
                }

                /* Breadcrumb */
                .notion-breadcrumb {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    font-size: 13px;
                    color: rgba(55, 53, 47, 0.5);
                    margin-bottom: 20px;
                    padding: 4px 0;
                }

                .breadcrumb-item {
                    cursor: pointer;
                    transition: color 0.2s;
                }

                .breadcrumb-item:hover {
                    color: #37352f;
                }

                .breadcrumb-item.active {
                    color: #37352f;
                    font-weight: 500;
                }

                .breadcrumb-separator {
                    color: rgba(55, 53, 47, 0.3);
                }

                /* Loading State */
                .notion-loading {
                    padding: 40px 0;
                }

                .loading-skeleton {
                    background: linear-gradient(90deg, #f7f6f3 0%, #e9e9e8 50%, #f7f6f3 100%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                    border-radius: 3px;
                    margin-bottom: 8px;
                }

                .loading-skeleton-title {
                    height: 40px;
                    width: 60%;
                    margin-bottom: 24px;
                }

                .loading-skeleton-line {
                    height: 16px;
                    width: 100%;
                }

                .loading-skeleton.short {
                    width: 60%;
                }

                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                /* Footer Info */
                .notion-footer-info {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 48px;
                    padding-top: 24px;
                    border-top: 1px solid rgba(55, 53, 47, 0.09);
                    font-size: 12px;
                    color: rgba(55, 53, 47, 0.5);
                }

                .footer-info-item {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                }

                .footer-info-separator {
                    width: 1px;
                    height: 12px;
                    background-color: rgba(55, 53, 47, 0.09);
                }

                /* Notion-style Headings */
                .notion-h1 {
                    font-size: 1.875em;
                    font-weight: 600;
                    margin-top: 1.4em;
                    margin-bottom: 0.5em;
                    line-height: 1.3;
                    color: #37352f;
                }

                .notion-h2 {
                    font-size: 1.5em;
                    font-weight: 600;
                    margin-top: 1.4em;
                    margin-bottom: 0.3em;
                    line-height: 1.3;
                    padding-bottom: 4px;
                    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
                    color: #37352f;
                }

                .notion-h3 {
                    font-size: 1.25em;
                    font-weight: 600;
                    margin-top: 1em;
                    margin-bottom: 0.2em;
                    line-height: 1.3;
                    color: #37352f;
                }

                .notion-p {
                    margin-top: 2px;
                    margin-bottom: 8px;
                    line-height: 1.5;
                    color: #37352f;
                }

                .notion-quote {
                    border-left: 3px solid #37352f;
                    padding-left: 14px;
                    margin: 1em 0;
                    font-style: normal;
                    color: #37352f;
                }

                .notion-code-block {
                    background-color: #f7f6f3;
                    border-radius: 3px;
                    padding: 32px;
                    overflow-x: auto;
                    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
                    font-size: 0.85em;
                    margin: 1em 0;
                }

                .notion-inline-code {
                    background-color: rgba(135, 131, 120, 0.15);
                    color: #eb5757;
                    padding: 0.2em 0.4em;
                    border-radius: 3px;
                    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
                    font-size: 0.85em;
                }

                .notion-image-block {
                    margin: 1.5rem auto;
                    text-align: center;
                }

                .notion-image-block img {
                    max-width: 100%;
                    border-radius: 1px;
                }
            `}</style>
        </div>
    );
}
