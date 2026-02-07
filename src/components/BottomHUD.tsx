import React from 'react';

const BottomHUD = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex h-12 items-center justify-between border-t border-hud-border bg-hud-panel px-6 text-xs text-text-muted font-mono">
            {/* Left: Copyright / Version */}
            <div className="flex items-center gap-4">
                <span className="text-accent-secondary">v.1.0.0-ALPHA</span>
                <span className="hidden sm:inline">© 2026 CRITCOMBO. ALL RIGHTS RESERVED.</span>
            </div>

            {/* Center: XP Bar (Decorative) */}
            <div className="absolute left-1/2 top-0 h-[2px] w-1/3 -translate-x-1/2 bg-hud-border">
                <div className="h-full w-2/3 bg-accent-primary shadow-[0_0_10px_var(--accent-glow)]" />
            </div>

            {/* Right: User Status */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span>XP_LEVEL</span>
                    <span className="font-bold text-text-highlight">12</span>
                </div>
                <div className="h-4 w-[1px] bg-hud-border" />
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-status-busy" />
                    <span>GUEST_USER</span>
                </div>
            </div>
        </footer>
    );
};

export default BottomHUD;
