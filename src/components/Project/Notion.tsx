import * as React from "react";
import { useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import PC_Sidebar from "./PC_Sidebar";
import { useLocation } from 'react-router';
import Mobile_Sidebar from "./Moblie_Sidebar";

export interface TocHeading {
    level: number;
    text: string;
    id: string;
}

export default function Notion() {
    const location = useLocation();
    const [headings, setHeadings] = useState<TocHeading[]>([]);

    return (
        <div className="project-layout">
            <PC_Sidebar headings={headings} />
            <div className="project-main">
                <Mobile_Sidebar />
                <ProjectShowcase id={location.pathname} onHeadingsExtracted={setHeadings} />
            </div>
        </div>
    );
}
