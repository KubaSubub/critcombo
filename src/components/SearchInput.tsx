import React from 'react';
import { Search } from 'lucide-react';

const SearchInput = () => {
    return (
        <div className="relative w-full max-w-md hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-accent-secondary" />
            </div>
            <input
                type="text"
                className="block w-full rounded-sm border border-hud-border bg-hud-bg/50 py-1.5 pl-10 pr-3 text-sm text-text-main placeholder-text-muted focus:border-accent-primary focus:bg-hud-bg focus:outline-none focus:ring-0 font-mono tracking-wide transition-all"
                placeholder="TERMINAL_SEARCH >_"
            />
            {/* Decorative corners */}
            <div className="absolute top-0 right-0 h-1 w-1 bg-accent-secondary" />
            <div className="absolute bottom-0 left-0 h-1 w-1 bg-accent-secondary" />
        </div>
    );
};

export default SearchInput;
