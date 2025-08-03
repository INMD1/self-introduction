import * as React from "react";
import ProjectShowcase from "./ProjectShowcase";
import Sidebar from "./Sidebar";
import { useLocation } from 'react-router';

export default function Notion() {
    const projectsid = useLocation();
    
    return (
        <>
            <div className="min-h-screen flex flex-col md:flex-row bg-white text-gray-900">
                <Sidebar />
                <div className="flex-1 p-6 md:p-12">
                    <ProjectShowcase id={projectsid.pathname} />
                </div>
            </div>
        </>
    );
}