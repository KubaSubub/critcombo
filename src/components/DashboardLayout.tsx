import React from 'react';
import TopHUD from './TopHUD';
import BottomHUD from './BottomHUD';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex h-screen w-full flex-col overflow-hidden bg-hud-bg text-text-main font-sans selection:bg-accent-primary selection:text-hud-bg">
            <TopHUD />

            {/* Scrollable Main Content Area */}
            {/* Added top padding (pt-16) and bottom padding (pb-12) to account for fixed headers/footers */}
            <main className="flex-1 overflow-y-auto pt-16 pb-12 scrollbar-thin scrollbar-track-hud-bg scrollbar-thumb-hud-border hover:scrollbar-thumb-accent-secondary">
                <div className="mx-auto max-w-7xl animate-in fade-in zoom-in duration-500 p-6">
                    {children}
                </div>
            </main>

            <BottomHUD />
        </div>
    );
};

export default DashboardLayout;
