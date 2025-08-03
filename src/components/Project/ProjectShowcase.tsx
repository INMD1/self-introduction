//@ts-nocheck
import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./notion.css"
export default function ProjectShowcase({ id }: { id?: string }) {

    const parms = id.replace("/projects/", "")
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const res = await fetch(`/markdown/${parms}.md`);
                const text = await res.text();
                setMarkdown(text);
            } catch (err) {
                setMarkdown("# ⚠️ 마크다운을 불러올 수 없습니다.");
            }
        };

        if (parms) fetchMarkdown();
    }, [parms]);

    return (
        <div className="prose max-w-3xl mx-auto px-6 md:px-10 pt-16 pb-24  ">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    );
}