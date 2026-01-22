// @/components/pages/landing/SayilarSection.tsx
"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/Icon';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { MAGAZINE_ARCHIVE, type MagazineIssue } from '@/lib/magazine-data';

/**
 * Magazine Archive Section
 * Handles responsive gallery navigation for past journal issues.
 */
export default function SayilarSection() {
    const galleryRef = useRef<HTMLDivElement>(null);
    const [activeIssueIndex, setActiveIssueIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    // Human Touch: Handle resize with a cleaner effect
    useEffect(() => {
        const updateLayoutMode = () => setIsDesktop(window.innerWidth >= 1280);
        updateLayoutMode();
        window.addEventListener('resize', updateLayoutMode);
        return () => window.removeEventListener('resize', updateLayoutMode);
    }, []);

    const navigateGallery = useCallback((direction: 'next' | 'prev') => {
        if (!galleryRef.current) return;

        const container = galleryRef.current;
        const items = container.children;
        if (!items.length) return;

        let nextIndex = direction === 'next' ? activeIssueIndex + 1 : activeIssueIndex - 1;

        // Infinite loop logic for desktop, bounded for mobile
        if (isDesktop) {
            if (nextIndex < 0) nextIndex = MAGAZINE_ARCHIVE.length - 1;
            else if (nextIndex >= MAGAZINE_ARCHIVE.length) nextIndex = 0;
        } else {
            nextIndex = Math.max(0, Math.min(nextIndex, MAGAZINE_ARCHIVE.length - 1));
        }

        setActiveIssueIndex(nextIndex);

        const targetItem = items[nextIndex] as HTMLElement;
        container.scrollTo({
            left: targetItem.offsetLeft - container.offsetLeft,
            behavior: 'smooth'
        });
    }, [activeIssueIndex, isDesktop]);

    return (
        <section id="sayilar" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header: Title and Controls */}
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <span className="text-slate-400 font-medium tracking-wider uppercase text-xs">
                            Arşiv
                        </span>
                        <div className="relative inline-block">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#273D89]">
                                Dergiler
                            </h2>
                            <div className="h-1.5 w-full bg-[#273D89]/10 absolute -bottom-1 left-0 rounded-full" />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <NavigationButton onClick={() => navigateGallery('prev')} aria="Önceki Sayı">
                                <Icon name="left" size={18} />
                            </NavigationButton>
                            <NavigationButton onClick={() => navigateGallery('next')} aria="Sonraki Sayı">
                                <Icon name="right" size={18} />
                            </NavigationButton>
                        </div>
                        <ViewAllLink />
                    </div>
                </header>

                {/* Magazine Grid / Carousel */}
                <div
                    ref={galleryRef}
                    className={cn(
                        "flex xl:grid xl:grid-cols-3 gap-8",
                        "overflow-x-auto xl:overflow-visible snap-x snap-mandatory scrollbar-hide pb-8"
                    )}
                >
                    {MAGAZINE_ARCHIVE.map((issue) => (
                        <MagazineCard key={issue.id} issue={issue} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Sub-components: Breaking down logic is a major "Human" signal
function NavigationButton({ onClick, children, aria }: { onClick: () => void, children: React.ReactNode, aria: string }) {
    return (
        <button
            onClick={onClick}
            aria-label={aria}
            className="w-10 h-10 flex items-center justify-center border border-slate-200 rounded-xl hover:bg-slate-50 transition-all active:scale-90"
        >
            {children}
        </button>
    );
}

function MagazineCard({ issue }: { issue: MagazineIssue }) {
    return (
        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex min-w-[320px] md:min-w-[380px] xl:min-w-0 snap-start overflow-hidden">
            {/* Cover Image Container */}
            <div className="relative w-40 md:w-48 shrink-0 overflow-hidden">
                <img
                    src={issue.coverUrl}
                    alt={issue.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {issue.status === 'latest' && (
                    <div className="absolute top-4 -left-8 -rotate-45 bg-[#C60015] text-white text-[10px] font-bold py-1 px-10 shadow-lg">
                        SON SAYI
                    </div>
                )}
            </div>

            {/* Meta Data */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div className="space-y-4">
                    <div className="flex justify-between items-start">
                        <Badge variant="outline" className="bg-slate-50 text-[#273D89] border-slate-100">
                            {issue.volume}. Cilt
                        </Badge>
                        {issue.status === 'new' && (
                            <span className="animate-pulse bg-teal-600 text-white text-[9px] px-2 py-0.5 rounded-full font-black">
                                YENİ
                            </span>
                        )}
                    </div>

                    <h3 className="text-lg font-bold text-[#273D89] leading-snug group-hover:text-blue-700 transition-colors">
                        {issue.title}
                    </h3>

                    <div className="text-xs text-slate-500 space-y-2">
                        <p className="flex items-center gap-2">
                            <Icon name="calendar" size={14} className="text-slate-300" />
                            {issue.releaseDate}
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 mt-6">
                    <ActionButton icon="eye" theme="primary" />
                    <ActionButton icon="download" theme="secondary" />
                    <ActionButton icon="right" theme="secondary" />
                </div>
            </div>
        </div>
    );
}

function ActionButton({ icon, theme }: { icon: any, theme: 'primary' | 'secondary' }) {
    const isPrimary = theme === 'primary';
    return (
        <button className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-all border",
            isPrimary ? "bg-[#273D89] text-white border-transparent hover:shadow-lg" : "bg-white text-slate-400 border-slate-200 hover:bg-slate-50"
        )}>
            <Icon name={icon} size={16} />
        </button>
    );
}

function ViewAllLink() {
    return (
        <a href="/arsiv" className="group flex items-center gap-3 px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-[#273D89] hover:text-white transition-all">
            Tümünü Gör
            <Icon name="right" size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
    );
}