import * as React from "react";
import ProjectShowcase from "./ProjectShowcase";
import PC_Sidebar from "./PC_Sidebar";
import { useLocation } from 'react-router';
import { isMobile } from 'react-device-detect';
import Mobile_Sidebar from "./Moblie_Sidebar";
export default function Notion() {
    const projectsid = useLocation();

    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row bg-white text-gray-900">
                {isMobile ? (<Mobile_Sidebar />) : (<PC_Sidebar />)}
                <div className="flex-1 p-6 md:p-12">
                    <ProjectShowcase id={projectsid.pathname} />
                </div>
            </div>
        </>
    );
}