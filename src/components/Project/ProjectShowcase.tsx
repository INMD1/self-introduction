//@ts-nocheck
import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectShowcase({ id }: { id?: string }) {

    const parms = id.replace("/projects/", "")

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        const fetchMarkdown = async () => {
            try {
                const res = "";
                const text = await res.text();
                setMarkdown(text);
            } catch (err) {
                setMarkdown("# ⚠️ 마크다운을 불러올 수 없습니다.");
            }
        };

        if (parms) fetchMarkdown();
    }, [parms]);

    return (
        <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
}