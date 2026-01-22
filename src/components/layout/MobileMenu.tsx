// @/components/layout/MobileMenu.tsx
"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Icon from '@/components/ui/Icon'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
    navLinks: Array<{ label: string; href: string }>
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Escape Key
    useEffect(() => {
        const escapePress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            window.addEventListener('keydown', escapePress)
        }
        return () => window.removeEventListener('keydown', escapePress)
    }, [isOpen, onClose])

    return (
        <>
            {/* Mobile Back Button  */}
            <div
                className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Slide-out Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigasyon Menüsü"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-[var(--profuture-dark-gray)]">Menü</span>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Menüyü Kapat"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav */}
                <nav className="p-4">
                    <a
                        href="#home"
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 text-[var(--profuture-dark-gray)] hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <Icon name="home" size="md" className="text-[var(--profuture-blue)]" />
                        <span className="font-medium">Ana Sayfa</span>
                    </a>

                    <div className="h-px bg-gray-200 my-2" />

                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={onClose}
                            className="block px-4 py-3 text-[var(--profuture-dark-gray)] hover:bg-gray-50 hover:text-[var(--profuture-blue)] rounded-lg transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Buttons */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-gray-50 space-y-3">
                    <Link
                        href="#"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--profuture-blue)] hover:bg-[var(--button-hover1)] text-white font-medium rounded-lg transition-colors"
                    >
                        <Icon name="kurul" size="sm" className="text-white" />
                        <span>Dergi Kurulu</span>
                    </Link>

                    <Link
                        href="#"
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[var(--profuture-green)] hover:bg-[var(--profuture-dark-green)] text-[var(--profuture-dark-gray)] font-medium rounded-lg transition-colors"
                    >
                        <Icon name="author" size="sm" className="text-[var(--profuture-dark-gray)]" />
                        <span>Yazar Rehberi</span>
                    </Link>
                </div>
            </div>
        </>
    )
}
