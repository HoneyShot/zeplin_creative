// @/components/pages/LandinPage.tsx
"use client";

import { useEffect } from 'react';
import {
    HeroSection,
    AmacVeKapsamSection,
    MakaleCagrisiSection,
    SayilarSection,
    TeknolojiDergisiSection,
} from './landing';

export default function LandingPage() {

    useEffect(() => {
        const smoothScrolling = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
            
            if (anchor) {
                const href = anchor.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const headerOffset = 100;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });


                        window.history.pushState(null, '', href);
                    }
                }
            }
        };

        document.addEventListener('click', smoothScrolling);
        
        return () => {
            document.removeEventListener('click', smoothScrolling);
        };
    }, []);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                setTimeout(() => {
                    const headerOffset = 100;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        }
    }, []);

    return (
        <div className="min-h-screen scroll-smooth overflow-x-hidden">
            <div className="relative">
                <HeroSection />
                <AmacVeKapsamSection />
                <div  
                    className="2xl:top-[40%] 2xl:right-[12%] 2xl:scale-180
                                    xl:top-[40%] xl:right-[12%] xl:scale-180
                                    lg:top-[40%] lg:right-[10%] lg:scale-170
                                    md:top-[40%] md:right-[5%] md:scale-125
                                    sm:top-[40%] sm:right-[5%] sm:scale-110
                                    top-[35%] right-[5%] scale-[70%]
                                 z-20   
                                 absolute pointer-events-none"
                >
                    <img
                        src="/vectors/dergi.svg"
                        alt="Profuture Dergisi Kapak"
                        className="w-[280px] xl:w-[350px] 2xl:w-[420px] h-auto drop-shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 pointer-events-auto"
                    />
                </div>
            </div>                   
            <SayilarSection />         
            <div className="relative">
                {/* Books Image */}
                <div 
                    className="absolute z-10 pointer-events-none
                        2xl:left-[4%] 2xl:top-[4.45%]
                        xl:left-[4.30%] xl:top-[4.30%]
                        hidden xl:block
                        "
                >
                    <img
                        src="/vectors/makale/makale-dergi.png"
                        alt="Profuture Dergi Koleksiyonu"
                        className="2xl:w-[500px] 2xl:h-[501px]
                                    xl:w-[400px] xl:h-[503px]
                                    hidden xl:block
                                    pointer-events-auto"
                    />
                </div>

                {/* Magazine Cover */}
                <div 
                    className="absolute z-10 pointer-events-none
                        2xl:right-[8%] 2xl:top-[0%]
                        xl:right-[5%] xl:top-[-1%]
                        hidden xl:block
                        "
                >
                    <img
                        src="/vectors/makale/makale-2.png"
                        alt="Bilgi ve Teknoloji Araştırmaları Makale Çağrısı - 8. Sayı"
                        className="2xl:w-[350px] 2xl:h-[500px]
                                    xl:w-[300px] xl:h-[430px]
                                    hidden xl:block
                                    pointer-events-auto"
                        style={{ filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.12))" }}
                    />
                </div>

                <MakaleCagrisiSection />
                <TeknolojiDergisiSection />
            </div>
        </div>
    );
}
