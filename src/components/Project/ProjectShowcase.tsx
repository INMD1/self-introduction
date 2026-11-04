import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Calendar, Tag, User } from 'lucide-react';
import "./notion.css";
import { projects } from "@/data/projects";

interface TocHeading {
    level: number;
    text: string;
    id: string;
}

const slugify = (text: string) =>
    text.trim()
        .replace(/[*_`[\]()!]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

const getNodeText = (node: any): string => {
    if (!node) return '';
    if (node.type === 'text') return node.value || '';
    if (node.children) return (node.children as any[]).map(getNodeText).join('');
    return '';
};

const extractHeadings = (text: string): TocHeading[] => {
    const result: TocHeading[] = [];
    for (const line of text.split('\n')) {
        const match = line.match(/^(#{1,3})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const raw = match[2].trim().replace(/&nbsp;/g, ' ');
            const displayText = raw.replace(/[*_`[\]()!]/g, '').trim();
            result.push({ level, text: displayText, id: slugify(raw) });
        }
    }
    return result;
};

interface ProjectShowcaseProps {
    id?: string;
    onHeadingsExtracted?: (headings: TocHeading[]) => void;
}

export default function ProjectShowcase({ id, onHeadingsExtracted }: ProjectShowcaseProps) {
    const parms = id?.replace("/projects/", "") || "aswdcp";
    const [markdown, setMarkdown] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const config = useMemo(() => projects.find(project => project.id === parms) || projects.find(project => project.id === "aswdcp")!, [parms]);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchMarkdown = async () => {
            try {
                const res = await fetch(`/markdown/${parms}.md`);
                if (!res.ok) throw new Error("File not found");
                const text = await res.text();
                setMarkdown(text);
            } catch {
                setError("마크다운을 불러올 수 없습니다.");
                setMarkdown("# ⚠️ 에러\n\n프로젝트 정보를 불러올 수 없습니다.");
            } finally {
                setLoading(false);
            }
        };

        fetchMarkdown();
    }, [parms]);

    useEffect(() => {
        if (markdown && onHeadingsExtracted) {
            onHeadingsExtracted(extractHeadings(markdown));
        }
    }, [markdown, onHeadingsExtracted]);

    return (
        <div className="notion-frame">
            <div className="notion-cover-wrapper">
                <img src={config.cover} alt="cover" className="notion-cover" />
                <div className="notion-cover-overlay" />
            </div>
            <br/>
            <div className="notion-content-container">
                <div className="notion-title-wrapper">
                    <h1 className="notion-title">
                        {loading ? "로딩 중..." : config.title}
                    </h1>
                </div>

                <div className="notion-inline-properties">
                    <div className="notion-inline-property notion-property-status">
                        <span className="property-icon">●</span>
                        <span className="property-label">Status</span>
                        <span className="property-separator">:</span>
                        <span className="property-value-status published">{config.status}</span>
                    </div>

                    {config.date && (
                        <div className="notion-inline-property notion-property-date">
                            <Calendar size={12} className="property-icon" />
                            <span className="property-label">Created</span>
                            <span className="property-separator">:</span>
                            <span className="property-value">{config.date}</span>
                        </div>
                    )}

                    {config.author && (
                        <div className="notion-inline-property notion-property-author">
                            <User size={12} className="property-icon" />
                            <span className="property-label">Author</span>
                            <span className="property-separator">:</span>
                            <span className="property-value">{config.author}</span>
                        </div>
                    )}

                    {config.tags && (
                        <div className="notion-inline-property notion-property-tags">
                            <Tag size={12} className="property-icon" />
                            <span className="property-label">Tags</span>
                            <span className="property-separator">:</span>
                            <div className="property-value-tags">
                                {config.tags.map(tag => (
                                    <span key={tag} className="property-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="notion-breadcrumb">
                    <span className="breadcrumb-item">📁 Projects</span>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-item active">{config.title}</span>
                </div>

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
                                    h1: ({ node, ...props }) => <h1 id={slugify(getNodeText(node))} className="notion-h1" {...props} />,
                                    h2: ({ node, ...props }) => <h2 id={slugify(getNodeText(node))} className="notion-h2" {...props} />,
                                    h3: ({ node, ...props }) => <h3 id={slugify(getNodeText(node))} className="notion-h3" {...props} />,
                                    a: ({ node, href, children, ...props }) => (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="notion-link" {...props}>{children}</a>
                                    ),
                                    table: ({ node, children, ...props }) => (
                                        <div className="notion-table-scroll" role="region" aria-label="프로젝트 비교 표" tabIndex={0}>
                                            <table {...props}>{children}</table>
                                        </div>
                                    ),
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
                                        <pre className="notion-code-block" {...props}>{children}</pre>
                                    ),
                                    code: ({ node, className, children, ...props }) =>
                                        !className ? (
                                            <code className="notion-inline-code" {...props}>{children}</code>
                                        ) : (
                                            <code className={className} {...props}>{children}</code>
                                        ),
                                }}
                            >
                                {markdown}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
