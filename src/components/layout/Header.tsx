// @/components/layout/Header.tsx
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Icon from '@/components/ui/Icon'
import MobileMenu from './MobileMenu'

const navLinks = [
    { label: 'Amaç ve Kapsam', href: '#amac-ve-kapsam' },
    { label: 'Etik İlkeler ve Yayın Politikası', href: '#yayin-politikasi' },
    { label: 'Makale Çağrıları', href: '#makale-cagrilari' },
    { label: 'Sayılar', href: '#sayilar' },
    { label: 'İletişim', href: '#iletisim' },
]

const publicationDetails = [
    { label: "ISSN:", value: "345-255" },
    { label: "Başlangıç:", value: "2025" },
    { label: "Periyot:", value: "Yılda 2 Sayı" },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    useEffect(() => {
        if (!searchOpen) return

        // Escape Key
        const escapePress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSearchOpen(false)
            }
        }

        // Mobile back button
        const handlePopState = () => {
            setSearchOpen(false)
        }

        window.history.pushState({ searchOpen: true }, '')

        window.addEventListener('keydown', escapePress)
        window.addEventListener('popstate', handlePopState)

        return () => {
            window.removeEventListener('keydown', escapePress)
            window.removeEventListener('popstate', handlePopState)
        }
    }, [searchOpen])

    return (
        <>
            <header className="w-full relative bg-white">
                <div className="relative w-full h-[44px]">
                    {/* Logo Container */}
                    <div
                        className="absolute left-0 top-0 z-30 flex items-center justify-center w-[140px] h-[88px] sm:w-[180px] sm:h-[88px] lg:w-[280px] lg:h-[88px] xl:w-[320px] xl:h-[88px]"
                        style={{
                            backgroundColor: '#273D89',
                            borderRadius: '0 100px 0 0'
                        }}
                    >
                        <Link href="/" className="flex items-center justify-center">
                            <img
                                src="/vectors/logo.svg"
                                alt="Profuture Teknoloji Dergisi"
                                className="h-8 sm:h-10 lg:h-12 w-auto max-w-[85%] object-contain"
                            />
                        </Link>
                    </div>
                    {/* Top Info Bar */}
                    <svg
                        className="absolute inset-0 w-full h-[44px] z-10"
                        viewBox="0 0 1728 44"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        <path
                            d="M1728 44H384.186C377.96 25.0034 364.544 9.26475 347.155 0H1728V44Z"
                            fill="#081542"
                        />
                    </svg>

                    {/* Top Info Bar Content */}
                    <div className="relative z-20 h-full max-w-[1728px] mx-auto flex items-center justify-between px-4 lg:px-8">
                        <a 
                            href="mailto:profuture@gmail.com" 
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity ml-[160px] sm:ml-[200px] lg:ml-[300px] xl:ml-[350px]"
                        >
                            <Icon name="message" size="md" className="text-white" />
                            <span className="text-sm lg:text-base text-white font-light hidden sm:inline">
                                profuture@gmail.com
                            </span>
                        </a>

                        {/* Right */}
                        <div className="hidden md:flex items-center gap-4 lg:gap-6 text-white text-sm lg:text-base">
                            {publicationDetails.map((item, index) => (
                                <span key={index} className="flex items-center gap-1">
                                    <span className="font-normal">{item.label}</span>
                                    <span className="font-bold">{item.value}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[44px] bg-white shadow-md overflow-hidden">
                    {/* Navigation */}
                    <div className="relative z-20 h-full max-w-[1728px] mx-auto flex items-center justify-between px-4 lg:px-8">
                        <nav className="hidden xl:flex items-center gap-0 xl:gap-0.5 2xl:gap-1 ml-[300px] xl:ml-[330px] 2xl:ml-[340px]">
                            <a
                                href="#home"
                                className="p-2 mr-1 xl:mr-2 rounded-lg hover:scale-110 transition-transform flex-shrink-0"
                                aria-label="Ana Sayfa"
                            >
                                <Icon name="home" size="md" className="text-[var(--profuture-green)]" />
                            </a>

                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-1.5 xl:px-2 2xl:px-3 py-2 text-[13px] xl:text-[14px] 2xl:text-[16px] font-normal text-[var(--profuture-dark-gray)] hover:text-[var(--profuture-blue)] rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        <div className="xl:hidden ml-[160px] sm:ml-[200px] lg:ml-[300px]" />

                        <div className="flex items-center gap-1.5 lg:gap-2 xl:gap-3">
                            <Link
                                href="#"
                                className="hidden xl:flex items-center gap-2 px-4 2xl:px-5 py-1.5 2xl:py-2 bg-[var(--profuture-blue)] hover:bg-[var(--button-hover2)] text-white text-sm 2xl:text-base font-medium rounded-full transition-colors whitespace-nowrap"
                            >
                                <Icon name="kurul" size="sm" className="text-white" />
                                <span>Dergi Kurulu</span>
                            </Link>
                            <Link
                                href="#"
                                className="hidden lg:flex xl:hidden items-center justify-center p-2 bg-[var(--profuture-blue)] hover:bg-[var(--button-hover2)] text-white rounded-full transition-colors"
                                aria-label="Dergi Kurulu"
                            >
                                <Icon name="kurul" size="sm" className="text-white" />
                            </Link>

                            <Link
                                href="#"
                                className="hidden xl:flex items-center gap-2 px-4 2xl:px-5 py-1.5 2xl:py-2 bg-[var(--profuture-green)] hover:bg-[var(--profuture-dark-green)] text-[#1a1a1a] text-sm 2xl:text-base font-medium rounded-full transition-colors whitespace-nowrap"
                            >
                                <Icon name="author" size="sm" className="text-white" />
                                <span>Yazar Rehberi</span>
                            </Link>

                            <Link
                                href="#"
                                className="hidden lg:flex xl:hidden items-center justify-center p-2 bg-[var(--profuture-green)] hover:bg-[var(--profuture-dark-green)] text-[#1a1a1a] rounded-full transition-colors"
                                aria-label="Yazar Rehberi"
                            >
                                <Icon name="author" size="sm" className="text-[#1a1a1a]" />
                            </Link>

                            <button
                                onClick={() => setSearchOpen(!searchOpen)}
                                className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 p-2 rounded-full border border-gray-300 bg-white hover:bg-[var(--button-hover1)] transition-colors"
                                aria-label="Ara"
                            >
                                <Icon name="search" size="sm" className="w-5 h-5 text-black hover:text-white" />
                            </button>

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Menüyü Aç"
                            >
                                <Icon name="menu" size="md" className="text-[var(--profuture-dark-gray)]" />
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    {searchOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-50">
                            <div className="max-w-[1440px] mx-auto">
                                <div className="relative">
                                    <input
                                        type="search"
                                        placeholder="Makale, yazar veya anahtar kelime ara..."
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--profuture-blue)] focus:border-transparent"
                                        autoFocus
                                    />
                                    <button
                                        onClick={() => setSearchOpen(false)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2"
                                        aria-label="Ara"
                                    >
                                        <Icon name="search" size="md" className="text-gray-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                navLinks={navLinks}
            />
        </>
    )
}