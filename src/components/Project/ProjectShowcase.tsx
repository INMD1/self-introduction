import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./notion.css";

export default function ProjectShowcase({ id }: { id?: string }) {
    const parms = id?.replace("/projects/", "") || "project";
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const res = await fetch(`/markdown/${parms}.md`);
                if (!res.ok) throw new Error("File not found");
                const text = await res.text();
                setMarkdown(text);
            } catch (err) {
                setMarkdown("# ⚠️ 마크다운을 불러올 수 없습니다.");
            }
        };

        if (parms) fetchMarkdown();
    }, [parms]);

    // Generate a consistent random-looking cover based on ID or just a nice default
    const coverImage = "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80";

    // Extract title from ID or first line of markdown if available, else fallback
    const title = parms.charAt(0).toUpperCase() + parms.slice(1).replace(/-/g, " ");

    return (
        <div className="notion-frame">
            {/* Cover Image */}
            <img
                src={coverImage}
                alt="cover"
                className="notion-cover"
            />

            {/* Content Container */}
            <div className="notion-content-container">
                {/* Icon */}
                <div className="notion-icon">
                    📝
                </div>

                {/* Title */}
                <h1 className="notion-title">
                    {title}
                </h1>

                {/* Meta / Properties */}
                <div className="notion-meta">
                    <div className="notion-property">
                        <div className="property-name">
                            <span>📅 Created</span>
                        </div>
                        <div className="property-value">
                            {new Date().toLocaleDateString()}
                        </div>
                    </div>
                    <div className="notion-property">
                        <div className="property-name">
                            <span>🏷️ Tags</span>
                        </div>
                        <div className="property-value">
                            <span className="property-tag">Project</span>
                            <span className="property-tag">Portfolio</span>
                        </div>
                    </div>
                </div>

                <div className="prose">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Override basic elements to fine-tune if CSS isn't enough
                            h1: ({ node, ...props }) => <div style={{ display: 'none' }} />, // Hide original H1 if we use the top title
                            p: ({ node, ...props }) => <p {...props} />,
                        }}
                    >
                        {markdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}