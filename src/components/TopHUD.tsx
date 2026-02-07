import React from 'react';
import SearchInput from './SearchInput';
import { Menu, Zap } from 'lucide-react';

const TopHUD = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-hud-border bg-hud-panel/90 px-6 backdrop-blur-md">
            {/* Left: Brand */}
            <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-accent-primary bg-accent-primary/10">
                    <Zap className="h-6 w-6 text-accent-primary" />
                </div>
                <div className="hidden sm:block">
                    <h1 className="font-mono text-xl font-bold tracking-widest text-text-highlight">
                        CRITCOMBO
                    </h1>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-accent-secondary">
                        <div className="h-1.5 w-1.5 rounded-full bg-status-online animate-pulse" />
                        System Online
                    </div>
                </div>
            </div>

            {/* Center: Search */}
            <SearchInput />

            {/* Right: Controls & Clock Placeholder */}
            <div className="flex items-center gap-6">
                <div className="hidden md:flex flex-col items-end text-xs font-mono text-text-muted">
                    <span className="text-accent-primary">SERVER: EU_WEST_1</span>
                    <span>PING: 24ms</span>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-sm border border-hud-border hover:bg-hud-border/50 hover:text-accent-primary transition-colors">
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            {/* Scanline decoration under header */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-accent-primary/20" />
            <div className="absolute bottom-0 left-0 h-[1px] w-1/4 bg-accent-primary/60" />
        </header>
    );
};

export default TopHUD;
