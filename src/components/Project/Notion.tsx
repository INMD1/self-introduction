import * as React from "react";
import { useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import PC_Sidebar from "./PC_Sidebar";
import { useLocation } from 'react-router';
import { isMobile } from 'react-device-detect';
import Mobile_Sidebar from "./Moblie_Sidebar";

export interface TocHeading {
    level: number;
    text: string;
    id: string;
}

export default function Notion() {
    const projectsid = useLocation();
    const [headings, setHeadings] = useState<TocHeading[]>([]);

    if (isMobile) {
        return (
            <div style={{ minHeight: '100vh', background: 'white', color: '#37352f' }}>
                <Mobile_Sidebar />
                <ProjectShowcase id={projectsid.pathname} onHeadingsExtracted={setHeadings} />
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'white', color: '#37352f' }}>
            <PC_Sidebar headings={headings} />
            <div style={{ flex: 1, overflowY: 'auto', height: '100vh' }}>
                <ProjectShowcase id={projectsid.pathname} onHeadingsExtracted={setHeadings} />
            </div>
        </div>
    );
}
